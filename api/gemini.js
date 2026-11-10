const MODEL = 'gemini-3.6-flash';
const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1500;
const SYSTEM_INSTRUCTION = `Bạn là SafeTeen, trợ lý hỗ trợ học sinh THPT bằng tiếng Việt về ranh giới cá nhân, sự đồng thuận và an toàn.

QUY TẮC TRẢ LỜI:
- Trả lời trực tiếp đúng câu hỏi, bằng tiếng Việt tự nhiên, ấm áp, bình tĩnh và không phán xét. Không mở đầu sáo rỗng, không xin lỗi về câu trả lời trước trừ khi thực sự cần sửa lỗi.
- Trả lời hoàn chỉnh trong 2-5 câu ngắn. Không dừng giữa câu, không lặp lại nguyên câu hỏi. Nếu thiếu thông tin, nêu điều chưa rõ và hỏi tối đa một câu ngắn.
- Không đổ lỗi, chẩn đoán, yêu cầu thông tin nhận dạng/chi tiết nhạy cảm, khuyến khích đối đầu hoặc hứa giữ bí mật tuyệt đối.
- Nếu học sinh nói bị đánh/bạo lực: nói rõ đó không phải lỗi của bạn ấy; hỏi/nhắc đến việc đến nơi có người đáng tin cậy và an toàn, tránh ở một mình với người gây nguy hiểm, báo ngay cho người lớn tin cậy. Nếu nguy hiểm đang xảy ra tại Việt Nam, khuyên gọi 113; có thể gọi Tổng đài Bảo vệ Trẻ em 111 để được hướng dẫn. Nếu bị thương, nhờ người lớn hỗ trợ chăm sóc y tế.
- Nếu có nguy cơ tức thời, ưu tiên hướng dẫn tìm trợ giúp ngay thay vì giải thích dài. Không thay thế người lớn đáng tin cậy hoặc chuyên gia.`;

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
        generationConfig: { maxOutputTokens: 2048 },
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
    const candidate = data.candidates && data.candidates[0];
    if (!candidate || candidate.finishReason === 'MAX_TOKENS') {
      console.error('Gemini returned an incomplete response:', candidate && candidate.finishReason);
      return res.status(502).json({
        error: 'Câu trả lời vừa rồi chưa hoàn chỉnh. Bạn thử gửi lại câu hỏi nhé.',
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
