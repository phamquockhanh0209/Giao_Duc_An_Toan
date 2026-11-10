(function () {
  const API_URL = '/api/gemini';
  const MAX_MESSAGE_LENGTH = 1500;
  const MAX_HISTORY = 12;

  function initChatbot() {
    if (document.getElementById('safeTeenAiChat')) return;

    const root = document.createElement('section');
    root.id = 'safeTeenAiChat';
    root.className = 'ai-chat';
    root.innerHTML = `
      <button class="ai-chat-trigger" type="button" aria-controls="aiChatPanel" aria-expanded="false">
        <span class="ai-chat-trigger-mark" aria-hidden="true">?</span>
        <span>Hỏi SafeTeen AI</span>
      </button>
      <section class="ai-chat-panel" id="aiChatPanel" role="dialog" aria-label="Trò chuyện với SafeTeen AI" aria-hidden="true">
        <header class="ai-chat-header">
          <div>
            <p class="ai-chat-eyebrow">GÓC HỎI ĐÁP</p>
            <h2>SafeTeen AI</h2>
            <p class="ai-chat-subtitle">Lắng nghe, không phán xét</p>
          </div>
          <button class="ai-chat-close" type="button" aria-label="Đóng cửa sổ chat">&times;</button>
        </header>
        <div class="ai-chat-disclaimer">
          Tin nhắn được gửi tới Google Gemini để tạo câu trả lời, không phải kênh tư vấn bí mật. Đừng gửi tên, địa chỉ hay thông tin nhận dạng. AI không thay thế người lớn đáng tin cậy hoặc chuyên gia.
        </div>
        <div class="ai-chat-messages" role="log" aria-live="polite" aria-relevant="additions text">
          <div class="ai-chat-message ai-chat-message--assistant">
            Chào bạn, mình có thể cùng bạn tìm hiểu về ranh giới cá nhân, sự đồng thuận và cách tìm hỗ trợ an toàn. Bạn muốn hỏi điều gì?
          </div>
        </div>
        <form class="ai-chat-form">
          <label class="ai-chat-sr-only" for="aiChatInput">Tin nhắn của bạn</label>
          <textarea id="aiChatInput" rows="2" maxlength="${MAX_MESSAGE_LENGTH}" placeholder="Viết câu hỏi của bạn..." required></textarea>
          <button class="ai-chat-send" type="submit">Gửi</button>
        </form>
        <p class="ai-chat-status" aria-live="polite"></p>
      </section>
    `;
    document.body.appendChild(root);

    const trigger = root.querySelector('.ai-chat-trigger');
    const panel = root.querySelector('.ai-chat-panel');
    const closeButton = root.querySelector('.ai-chat-close');
    const form = root.querySelector('.ai-chat-form');
    const input = root.querySelector('#aiChatInput');
    const sendButton = root.querySelector('.ai-chat-send');
    const messagesElement = root.querySelector('.ai-chat-messages');
    const status = root.querySelector('.ai-chat-status');
    const history = [];

    function setOpen(isOpen) {
      panel.classList.toggle('is-open', isOpen);
      panel.setAttribute('aria-hidden', String(!isOpen));
      trigger.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) input.focus();
      else trigger.focus();
    }

    function appendMessage(text, role, isPending) {
      const message = document.createElement('div');
      message.className = `ai-chat-message ai-chat-message--${role}`;
      if (isPending) message.classList.add('is-pending');
      message.textContent = text;
      messagesElement.appendChild(message);
      messagesElement.scrollTop = messagesElement.scrollHeight;
      return message;
    }

    function trimHistory() {
      while (history.length > MAX_HISTORY) history.splice(0, 2);
    }

    trigger.addEventListener('click', function () {
      setOpen(true);
    });
    closeButton.addEventListener('click', function () {
      setOpen(false);
    });

    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      const text = input.value.trim();
      if (!text || sendButton.disabled) return;

      history.push({ role: 'user', parts: [{ text }] });
      trimHistory();
      appendMessage(text, 'user', false);
      input.value = '';
      input.disabled = true;
      sendButton.disabled = true;
      status.textContent = 'SafeTeen AI đang trả lời...';
      const pendingMessage = appendMessage('Mình đang đọc câu hỏi của bạn…', 'assistant', true);

      try {
        if (window.location.protocol === 'file:') {
          throw new Error('Chatbot AI chưa chạy khi mở file trực tiếp. Hãy mở website đã triển khai trên Vercel hoặc chạy bằng lệnh vercel dev.');
        }

        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: history }),
        });
        const data = await response.json().catch(function () {
          return {};
        });
        if (!response.ok) {
          throw new Error(data.error || 'Không thể kết nối với SafeTeen AI lúc này.');
        }

        const answer = (data.candidates || [])
          .flatMap(function (candidate) {
            return (candidate.content && candidate.content.parts) || [];
          })
          .map(function (part) {
            return part.text || '';
          })
          .join('')
          .trim();

        if (!answer) {
          throw new Error('AI chưa thể tạo câu trả lời. Bạn thử hỏi lại hoặc tìm người lớn đáng tin cậy nhé.');
        }

        pendingMessage.textContent = answer;
        pendingMessage.classList.remove('is-pending');
        history.push({ role: 'model', parts: [{ text: answer }] });
        trimHistory();
        status.textContent = '';
      } catch (error) {
        pendingMessage.remove();
        history.pop();
        const errorMessage = error.message || 'Đã xảy ra lỗi. Vui lòng thử lại sau.';
        status.textContent = errorMessage;
        appendMessage(errorMessage, 'assistant', false);
      } finally {
        input.disabled = false;
        sendButton.disabled = false;
        input.focus();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }
})();
