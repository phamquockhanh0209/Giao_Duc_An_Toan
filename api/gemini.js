const MODEL = 'gemini-3.6-flash';
const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1500;
const SYSTEM_INSTRUCTION = `Bạn là SafeTeen AI, trợ lý giáo dục bằng tiếng Việt cho học sinh THPT về ranh giới cá nhân, quyền riêng tư, sự đồng thuận và cách tìm trợ giúp an toàn.

Hãy trả lời thân thiện, bình tĩnh, không phán xét, dễ hiểu và ngắn gọn. Không chẩn đoán, không đổ lỗi, không yêu cầu thông tin nhận dạng hoặc chi tiết nhạy cảm, không hướng dẫn đối đầu nguy hiểm, và không hứa giữ bí mật tuyệt đối. Nếu người dùng kể việc đang bị đe dọa hoặc không an toàn, ưu tiên khuyên họ đến nơi an toàn, báo ngay cho người lớn đáng tin cậy và gọi Tổng đài Quốc gia Bảo vệ Trẻ em 111. Không thay thế tư vấn từ người lớn đáng tin cậy hay chuyên gia.`;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST.' });
  }

  const { contents } = req.body || {};
  if (
    !Array.isArray(contents) ||
    contents.length === 0 ||
    contents.length > MAX_MESSAGES ||
    contents.some((message) =>
      !message ||
      !['user', 'model'].includes(message.role) ||
      !Array.isArray(message.parts) ||
      message.parts.length !== 1 ||
      typeof message.parts[0].text !== 'string' ||
      message.parts[0].text.trim().length === 0 ||
      message.parts[0].text.length > MAX_MESSAGE_LENGTH
    ) ||
    contents[contents.length - 1].role !== 'user'
  ) {
    return res.status(400).json({ error: 'Tin nhắn không hợp lệ hoặc quá dài.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY is not configured.');
    return res.status(500).json({ error: 'Máy chủ chưa được cấu hình API key.' });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
    const response = await fetch(url, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
        contents,
        generationConfig: { maxOutputTokens: 600 },
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const apiError = data.error || {};
      console.error('Gemini API request failed:', {
        httpStatus: response.status,
        status: apiError.status,
        message: apiError.message,
      });

      let errorMessage = 'Dịch vụ AI chưa thể trả lời lúc này.';
      if (response.status === 400) {
        errorMessage = 'Gemini từ chối yêu cầu. Hãy kiểm tra API đang dùng model gemini-3.6-flash và triển khai bản cập nhật mới nhất.';
      } else if (response.status === 401 || response.status === 403) {
        errorMessage = 'Gemini không chấp nhận API key. Hãy kiểm tra GEMINI_API_KEY trong Vercel và quyền sử dụng Gemini API.';
      } else if (response.status === 404) {
        errorMessage = 'Không tìm thấy model Gemini. Hãy triển khai lại phiên bản mới nhất của project.';
      } else if (response.status === 429) {
        errorMessage = 'Gemini API đã hết hạn mức hoặc đang có nhiều yêu cầu. Hãy kiểm tra hạn mức trong Google AI Studio rồi thử lại sau.';
      } else if (response.status >= 500) {
        errorMessage = 'Google Gemini đang gặp sự cố. Hãy thử lại sau ít phút.';
      }

      return res.status(response.status === 429 ? 429 : 502).json({
        error: errorMessage,
      });
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error('Gemini proxy request failed:', err);
    return res.status(502).json({
      error: err.name === 'AbortError'
        ? 'AI phản hồi quá lâu. Bạn vui lòng thử lại.'
        : 'Không thể kết nối dịch vụ AI lúc này.',
    });
  } finally {
    clearTimeout(timeout);
  }
};
