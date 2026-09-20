/**
 * SAFETEEN - Hộp Thư Kín Padlet Chatbox Widget
 * Tích hợp giao diện Chatbox thông minh kết nối với Hộp thư Padlet ẩn danh
 */

(function () {
  const PADLET_URL = "https://padlet.com/truongyennhi31012010/hop-thu-kin-lang-nghe-va-ong-hanh-s023psxotkib3fgx7eto";
  const QR_IMAGE_URL = "assets/images/qr-padlet.png";

  function initPadletChat() {
    // Tránh khởi tạo trùng lặp
    if (document.getElementById('padletChatContainer')) return;

    const container = document.createElement('div');
    container.id = 'padletChatContainer';
    container.innerHTML = `
      <!-- Nút Trigger Chatbox nổi ở góc màn hình -->
      <button class="padlet-chat-trigger" id="padletChatTrigger" aria-label="Mở Hộp thư kín Padlet" title="Gửi tâm sự ẩn danh">
        <span class="padlet-trigger-text">Hộp thư kín</span>
        <span class="padlet-online-dot" title="Đang trực tuyến"></span>
      </button>

      <!-- Khung Cửa Sổ Chat Box Popup -->
      <div class="padlet-chat-modal" id="padletChatModal" role="dialog" aria-hidden="true">
        <!-- Header -->
        <div class="padlet-chat-header">
          <div class="padlet-header-info">
            <div class="padlet-avatar">🕊️</div>
            <div>
              <div class="padlet-header-title">Hộp thư kín SafeTeen</div>
              <div class="padlet-header-status">
                <span class="status-indicator"></span> Lắng nghe & Đồng hành · Ẩn danh 100%
              </div>
            </div>
          </div>
          <button class="padlet-close-btn" id="padletCloseBtn" aria-label="Đóng">&times;</button>
        </div>

        <!-- Body Message Stream -->
        <div class="padlet-chat-body" id="padletChatBody">
          <div class="padlet-msg-time">Hôm nay</div>

          <!-- Tin nhắn chào mừng 1 -->
          <div class="padlet-msg-row bot">
            <div class="padlet-msg-avatar">🕊️</div>
            <div class="padlet-msg-bubble">
              Chào bạn! Nếu bạn đang có những băn khoăn về ranh giới cá nhân, áp lực bạn bè hay câu chuyện thầm kín khó nói, chúng mình luôn ở đây sẵn sàng lắng nghe bạn. 🌸
            </div>
          </div>

          <!-- Tin nhắn 2: Khung hành động chứa QR và Link Padlet -->
          <div class="padlet-msg-row bot">
            <div class="padlet-msg-avatar">🕊️</div>
            <div class="padlet-msg-bubble padlet-action-card">
              <div class="padlet-card-badge">📬 HỘP THƯ KÍN: LẮNG NGHE & ĐỒNG HÀNH</div>
              <div class="padlet-card-desc">
                Quét mã QR bằng camera điện thoại hoặc bấm nút bên dưới để gửi tâm sự ẩn danh trên Padlet nhé:
              </div>

              <!-- Mã QR Padlet -->
              <div class="padlet-qr-box">
                <img src="${QR_IMAGE_URL}" alt="Mã QR Hộp thư kín Padlet" class="padlet-qr-img">
              </div>

              <!-- Nút chuyển tới Padlet -->
              <a href="${PADLET_URL}" target="_blank" rel="noopener noreferrer" class="btn-padlet-open">
                💌 Mở Hộp Thư Padlet Ngay ↗
              </a>

              <div class="padlet-card-safe">
                🔒 Bảo mật hoàn toàn danh tính · Không phán xét
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(container);
    bindEvents();
  }

  function bindEvents() {
    const trigger = document.getElementById('padletChatTrigger');
    const modal = document.getElementById('padletChatModal');
    const closeBtn = document.getElementById('padletCloseBtn');
    const form = document.getElementById('padletChatForm');
    const input = document.getElementById('padletInputMsg');
    const chatBody = document.getElementById('padletChatBody');

    if (!trigger || !modal || !closeBtn) return;

    function openChat() {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      trigger.classList.add('hidden');
      if (input) input.focus();
    }

    function closeChat() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      trigger.classList.remove('hidden');
    }

    trigger.addEventListener('click', openChat);
    closeBtn.addEventListener('click', closeChat);

    // Xử lý gửi tin nhắn từ khung chatbox
    if (form && input) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        // Thêm tin nhắn của người dùng
        const userRow = document.createElement('div');
        userRow.className = 'padlet-msg-row user';
        userRow.innerHTML = `<div class="padlet-msg-bubble user-bubble">${escapeHtml(text)}</div>`;
        chatBody.appendChild(userRow);
        input.value = '';

        // Cuộn xuống cuối
        chatBody.scrollTop = chatBody.scrollHeight;

        // Phản hồi tự động và mở Padlet
        setTimeout(() => {
          const botRow = document.createElement('div');
          botRow.className = 'padlet-msg-row bot';
          botRow.innerHTML = `
            <div class="padlet-msg-avatar">🕊️</div>
            <div class="padlet-msg-bubble">
              Cảm ơn bạn đã tin tưởng chia sẻ. Đang chuyển bạn đến <strong>Hộp thư kín Padlet</strong> để lưu tâm sự an toàn và bảo mật nhất nhé... 🌸
            </div>
          `;
          chatBody.appendChild(botRow);
          chatBody.scrollTop = chatBody.scrollHeight;

          setTimeout(() => {
            window.open(PADLET_URL, '_blank', 'noopener,noreferrer');
          }, 1000);
        }, 600);
      });
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Tự động nạp khi trang sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPadletChat);
  } else {
    initPadletChat();
  }
})();
