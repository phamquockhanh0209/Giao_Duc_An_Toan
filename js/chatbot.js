/**
 * SAFETEEN - AI Companion & Emotional Support Engine
 * Boxchat tâm sự & Cố vấn an toàn học đường
 * Tích hợp Gemini API thật + Bộ xử lý ngôn ngữ tự nhiên thông minh (Zero-Error Natural NLP)
 */

const SafeTeenChatbot = (() => {


  const STORAGE_KEYS = {
    USER_PROFILE: 'safeteen_chat_user_profile',
    CHAT_HISTORY: 'safeteen_chat_history',
    API_KEY: 'safeteen_gemini_api_key'
  };

  let userProfile = null;
  let chatHistory = [];
  let isSending = false;

  function getApiKey() {
    const customKey = localStorage.getItem(STORAGE_KEYS.API_KEY);
    if (customKey && customKey.trim()) {
      return customKey.trim();
    }
    return null;
  }

  function setApiKey(key) {
    localStorage.setItem(STORAGE_KEYS.API_KEY, key.trim());
  }

  function isKeyLikelyValid(key) {
    return key && (key.startsWith('AIzaSy') || key.startsWith('AQ.')) && key.length >= 30;
  }

  function init() {
    loadProfile();
    renderChatWidget();
    bindEvents();
  }

  function loadProfile() {
    const saved = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    if (saved) {
      try {
        userProfile = JSON.parse(saved);
      } catch (e) {
        userProfile = null;
      }
    }
  }

  function saveProfile(profile) {
    userProfile = profile;
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  }

  function renderChatWidget() {
    // Floating Action Button (FAB)
    if (!document.getElementById('chatFabBtn')) {
      const fabHtml = `
        <div class="chat-fab-wrap" id="chatFabContainer">
          <button type="button" class="chat-fab-btn" id="chatFabBtn" aria-label="Mở Boxchat Tâm sự">
            <span class="chat-fab-pulse"></span>
            <span class="chat-fab-badge">AI</span>
            <span class="chat-fab-icon">💬</span>
            <span class="chat-fab-label">Tâm sự cùng AI</span>
          </button>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', fabHtml);
    }

    // Modal Drawer Window
    if (!document.getElementById('chatDrawerOverlay')) {
      const drawerHtml = `
        <div class="chat-drawer-overlay" id="chatDrawerOverlay" aria-modal="true" role="dialog">
          <div class="chat-drawer-card" id="chatDrawerCard">
            <!-- Header -->
            <div class="chat-header">
              <div class="chat-header-info">
                <div class="chat-avatar">
                  <span>🌸</span>
                  <span class="chat-online-badge"></span>
                </div>
                <div>
                  <div class="chat-title">
                    SafeTeen Companion
                    <span class="badge-pill" style="font-size: 0.72rem; padding: 2px 7px; margin-left: 4px; background: #eaf6ea; color: #2e6b36; border-color: #bee2c2;">Trợ lý AI</span>
                  </div>
                  <div class="chat-subtitle" id="chatHeaderSub">Lắng nghe bảo mật & Cố vấn ranh giới</div>
                </div>
              </div>
              <div class="chat-header-actions">
                <button type="button" class="chat-tool-btn" id="btnChangeProfile" title="Đổi thông tin cá nhân" style="display: none;">
                  Thông tin
                </button>
                <button type="button" class="chat-close-btn" id="btnCloseChatDrawer" aria-label="Đóng">&times;</button>
              </div>
            </div>

            <!-- VIEW 1: Onboarding Profile Setup -->
            <div class="chat-profile-view" id="chatProfileView">
              <div class="profile-setup-intro">
                <h4 style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 0.35rem; color: var(--color-text);">
                  Chào bạn, mình ở đây để lắng nghe
                </h4>
                <p style="font-size: 0.88rem; color: var(--color-muted); line-height: 1.5;">
                  Mọi chia sẻ đều được <strong>bảo mật hoàn toàn</strong>. Hãy cho SafeTeen biết một chút thông tin để đưa ra lời khuyên phù hợp nhất với bạn nhé!
                </p>
              </div>

              <form id="chatProfileForm" class="chat-profile-form">
                <div class="form-group-custom">
                  <label class="form-label-custom">1. Giới tính của bạn:</label>
                  <div class="radio-pill-group">
                    <label class="radio-pill">
                      <input type="radio" name="chatGender" value="Nữ" checked>
                      <span>Nữ</span>
                    </label>
                    <label class="radio-pill">
                      <input type="radio" name="chatGender" value="Nam">
                      <span>Nam</span>
                    </label>
                    <label class="radio-pill">
                      <input type="radio" name="chatGender" value="Khác">
                      <span>Khác</span>
                    </label>
                    <label class="radio-pill">
                      <input type="radio" name="chatGender" value="Giữ kín">
                      <span>Giữ kín</span>
                    </label>
                  </div>
                </div>

                <div class="form-group-custom">
                  <label class="form-label-custom">2. Độ tuổi của bạn:</label>
                  <div class="radio-pill-group">
                    <label class="radio-pill">
                      <input type="radio" name="chatAge" value="Dưới 15 tuổi (THCS)">
                      <span>Dưới 15 tuổi</span>
                    </label>
                    <label class="radio-pill">
                      <input type="radio" name="chatAge" value="15 - 18 tuổi (THPT)" checked>
                      <span>15 - 18 tuổi (THPT)</span>
                    </label>
                    <label class="radio-pill">
                      <input type="radio" name="chatAge" value="Trên 18 tuổi">
                      <span>Trên 18 tuổi</span>
                    </label>
                  </div>
                </div>

                <div class="form-group-custom">
                  <label class="form-label-custom">3. Vấn đề bạn đang băn khoăn hoặc cần hỗ trợ:</label>
                  <div class="select-concern-group">
                    <label class="concern-card">
                      <input type="radio" name="chatConcern" value="Bị xâm phạm ranh giới thể chất / đụng chạm ngoài ý muốn" checked>
                      <div class="concern-content">
                        <strong>Bị đụng chạm / Xâm phạm thân thể</strong>
                        <span>Ai đó có hành vi đụng chạm khiến bạn khó chịu hoặc bất an</span>
                      </div>
                    </label>

                    <label class="concern-card">
                      <input type="radio" name="chatConcern" value="Áp lực bạn bè (Peer Pressure) & Thao túng tâm lý">
                      <div class="concern-content">
                        <strong>Áp lực bạn bè & Thao túng</strong>
                        <span>Bị ép buộc làm điều mình không muốn, cô lập hoặc bắt nạt</span>
                      </div>
                    </label>

                    <label class="concern-card">
                      <input type="radio" name="chatConcern" value="Quấy rối / Bôi nhọ / Lộ ảnh trên mạng xã hội">
                      <div class="concern-content">
                        <strong>Rắc rối trên mạng xã hội</strong>
                        <span>Bị nhắn tin làm phiền, tung tin đồn hoặc chụp lén ảnh riêng tư</span>
                      </div>
                    </label>

                    <label class="concern-card">
                      <input type="radio" name="chatConcern" value="Khó nói lời từ chối / Ngại nói 'Không'">
                      <div class="concern-content">
                        <strong>Khó nói lời từ chối (Nói 'Không')</strong>
                        <span>Sợ mất lòng bạn bè, cảm thấy có lỗi khi phải từ chối</span>
                      </div>
                    </label>

                    <label class="concern-card">
                      <input type="radio" name="chatConcern" value="Băn khoăn trong tình cảm học trò">
                      <div class="concern-content">
                        <strong>Tình cảm tuổi học trò</strong>
                        <span>Kiểm soát tin nhắn, ghen tuông quá mức hoặc đòi hỏi quá giới hạn</span>
                      </div>
                    </label>

                    <label class="concern-card">
                      <input type="radio" name="chatConcern" value="Tâm sự giải tỏa áp lực học đường">
                      <div class="concern-content">
                        <strong>Tâm sự tự do & Áp lực</strong>
                        <span>Cần một nơi lắng nghe không phán xét về cảm xúc hiện tại</span>
                      </div>
                    </label>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary" style="width: 100%; padding: 0.85rem; font-size: 1rem;">
                  Bắt đầu trò chuyện cùng SafeTeen →
                </button>
              </form>
            </div>

            <!-- VIEW 2: Active Chat -->
            <div class="chat-conversation-view" id="chatConversationView" style="display: none;">
              <!-- User tag bar -->
              <div class="chat-user-tag-bar">
                <span class="user-meta-badge" id="chatUserMetaBadge">Nữ • 15-18 tuổi</span>
                <span class="user-concern-badge" id="chatUserConcernBadge">Áp lực bạn bè</span>
              </div>

              <!-- Messages List -->
              <div class="chat-messages-container" id="chatMessagesContainer">
                <!-- Generated dynamically -->
              </div>

              <!-- Quick Prompt Suggestions -->
              <div class="chat-quick-suggestions" id="chatQuickSuggestions">
                <!-- Injected based on concern -->
              </div>

              <!-- Input Area -->
              <div class="chat-input-wrapper">
                <form id="chatMessageForm" class="chat-input-form">
                  <textarea 
                    id="chatInputText" 
                    class="chat-input-textarea" 
                    placeholder="Hãy chia sẻ câu chuyện của bạn... (Nhấn Enter để gửi)" 
                    rows="1"
                    required
                  ></textarea>
                  <button type="submit" class="chat-send-btn" id="btnSendChat" aria-label="Gửi tin nhắn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
                <div class="chat-emergency-footer">
                  <span>Khẩn cấp: Gọi Tổng đài Quốc gia Bảo vệ Trẻ em <strong>111</strong> (miễn phí 24/7)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', drawerHtml);
    }
  }

  function bindEvents() {
    // Open from FAB
    const fabBtn = document.getElementById('chatFabBtn');
    if (fabBtn) {
      fabBtn.addEventListener('click', openChat);
    }

    // Open from header button
    document.addEventListener('click', (e) => {
      const headerBtn = e.target.closest('#btnOpenChatHeader, .btn-open-chat-header');
      if (headerBtn) {
        e.preventDefault();
        openChat();
      }
    });

    // Close button & overlay click
    const closeBtn = document.getElementById('btnCloseChatDrawer');
    const overlay = document.getElementById('chatDrawerOverlay');
    if (closeBtn) closeBtn.addEventListener('click', closeChat);
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeChat();
      });
    }

    // Change profile button
    const btnChangeProfile = document.getElementById('btnChangeProfile');
    if (btnChangeProfile) {
      btnChangeProfile.addEventListener('click', () => {
        showProfileSetup();
      });
    }

    // API Key setting button
    const btnOpenKeyModal = document.getElementById('btnOpenKeyModal');
    if (btnOpenKeyModal) {
      btnOpenKeyModal.addEventListener('click', () => {
        openApiKeyModal();
      });
    }

    // Profile form submit
    const profileForm = document.getElementById('chatProfileForm');
    if (profileForm) {
      profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const gender = profileForm.querySelector('input[name="chatGender"]:checked')?.value || 'Nữ';
        const age = profileForm.querySelector('input[name="chatAge"]:checked')?.value || '15 - 18 tuổi (THPT)';
        const concern = profileForm.querySelector('input[name="chatConcern"]:checked')?.value || 'Tâm sự tự do';

        saveProfile({ gender, age, concern });
        startConversation();
      });
    }

    // Message form submit
    const messageForm = document.getElementById('chatMessageForm');
    const inputText = document.getElementById('chatInputText');
    if (messageForm && inputText) {
      messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleSendMessage();
      });

      inputText.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSendMessage();
        }
      });
    }
  }

  function openApiKeyModal() {
    const currentKey = getApiKey();
    const isCustom = localStorage.getItem(STORAGE_KEYS.API_KEY) !== null;
    const isValid = isKeyLikelyValid(currentKey);

    const keyModalHtml = `
      <div class="modal-overlay active" id="keySettingModalOverlay" style="z-index: 10001;" role="dialog">
        <div class="modal-card" style="max-width: 480px;">
          <div class="modal-header">
            <h3 class="modal-title">🔑 Cài đặt Google Gemini API Key</h3>
            <button class="modal-close-btn" id="closeKeySettingModal">&times;</button>
          </div>
          <div style="font-size: 0.88rem; color: var(--color-muted); line-height: 1.55; margin-bottom: 1rem;">
            Để AI trả lời thông minh và hiểu sâu ngữ cảnh, hệ thống sử dụng <strong>Google Gemini API</strong>.
            <br>Khóa API chính xác của Google luôn bắt đầu bằng chữ: <strong style="color: #b91c1c;">AIzaSy...</strong>
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.35rem;">
              Nhập mã API Key của bạn:
            </label>
            <input 
              type="text" 
              id="inpGeminiApiKey" 
              value="${isCustom ? currentKey : ''}" 
              placeholder="Dán mã bắt đầu bằng AIzaSy..." 
              style="width: 100%; padding: 0.6rem 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); font-family: monospace; font-size: 0.85rem;"
            >
            <div id="keyStatusHint" style="font-size: 0.76rem; margin-top: 0.35rem; color: ${isValid ? '#15803d' : '#b45309'};">
              ${isValid ? '✓ Đang nhận dạng khóa hợp lệ (AIzaSy...)' : 'ℹ️ Nếu chưa có key thật, hệ thống sẽ tự động dùng Trợ lý NLP thông minh nội bộ.'}
            </div>
          </div>
          <div style="background: var(--color-bg); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; font-size: 0.78rem; line-height: 1.45; margin-bottom: 1.25rem;">
            💡 <strong>Cách lấy API Key miễn phí (1 phút):</strong><br>
            1. Truy cập: <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color: var(--color-green-dark); font-weight: 600;">aistudio.google.com/app/apikey</a><br>
            2. Đăng nhập Google & bấm <em>"Create API key"</em>.<br>
            3. Sao chép đoạn mã bắt đầu bằng <code>AIzaSy...</code> và dán vào ô trên.
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
            <button type="button" class="btn btn-secondary" id="btnCancelKey">Đóng</button>
            <button type="button" class="btn btn-primary" id="btnSaveKey">Lưu API Key</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', keyModalHtml);
    const modalEl = document.getElementById('keySettingModalOverlay');

    const closeKeyModal = () => modalEl.remove();
    modalEl.querySelector('#closeKeySettingModal').addEventListener('click', closeKeyModal);
    modalEl.querySelector('#btnCancelKey').addEventListener('click', closeKeyModal);

    modalEl.querySelector('#btnSaveKey').addEventListener('click', () => {
      const val = modalEl.querySelector('#inpGeminiApiKey').value.trim();
      if (val) {
        setApiKey(val);
        if (typeof SafeTeenApp !== 'undefined' && SafeTeenApp.showNotification) {
          SafeTeenApp.showNotification('Đã lưu Gemini API Key mới thành công!');
        }
      }
      closeKeyModal();
    });
  }

  function openChat() {
    const overlay = document.getElementById('chatDrawerOverlay');
    if (!overlay) return;
    overlay.classList.add('active');

    if (!userProfile) {
      showProfileSetup();
    } else {
      startConversation();
    }
  }

  function closeChat() {
    const overlay = document.getElementById('chatDrawerOverlay');
    if (overlay) overlay.classList.remove('active');
  }

  function showProfileSetup() {
    document.getElementById('chatProfileView').style.display = 'block';
    document.getElementById('chatConversationView').style.display = 'none';
    document.getElementById('btnChangeProfile').style.display = 'none';
  }

  function startConversation() {
    document.getElementById('chatProfileView').style.display = 'none';
    document.getElementById('chatConversationView').style.display = 'flex';
    document.getElementById('btnChangeProfile').style.display = 'inline-flex';

    // Update badges
    const metaEl = document.getElementById('chatUserMetaBadge');
    const concernEl = document.getElementById('chatUserConcernBadge');
    if (metaEl) metaEl.textContent = `${userProfile.gender} • ${userProfile.age}`;
    if (concernEl) concernEl.textContent = userProfile.concern.split('/')[0].trim();

    // If chat is empty, create welcoming message
    const msgContainer = document.getElementById('chatMessagesContainer');
    if (msgContainer.children.length === 0) {
      const welcomeText = getWelcomeMessage(userProfile);
      appendMessage('bot', welcomeText);
      renderSuggestions(userProfile.concern);
    }
  }

  function getWelcomeMessage(profile) {
    const nameGreeting = profile.gender === 'Nam' ? 'bạn nam' : (profile.gender === 'Nữ' ? 'bạn gái' : 'bạn');
    return `Chào ${nameGreeting}! Mình là trợ lý đồng hành SafeTeen. Mình biết việc chia sẻ về vấn đề *"${profile.concern}"* đòi hỏi rất nhiều sự dũng cảm.\n\nỞ đây hoàn toàn bảo mật và không có ai phán xét bạn cả. Bạn đang cảm thấy như thế nào, hoặc có sự việc gì cụ thể vừa xảy ra? Hãy chia sẻ với mình nhé!`;
  }

  function renderSuggestions(concern) {
    const suggestionsBox = document.getElementById('chatQuickSuggestions');
    if (!suggestionsBox) return;

    let prompts = [
      'Chào bạn! Bạn có thể giúp gì cho mình?',
      'Ranh giới cá nhân gồm những gì?',
      'Làm sao để từ chối khi bạn bè ép buộc?'
    ];

    if (concern.includes('thể chất') || concern.includes('đụng chạm')) {
      prompts = [
        'Một bạn hay có hành vi đụng chạm trêu đùa, mình nên nói thế nào?',
        'Mình sợ nếu nói ra thì sẽ bị bạn bè tẩy chay...',
        'Quy trình 5 bước ứng phó khi bị quấy rối là gì?'
      ];
    } else if (concern.includes('mạng xã hội') || concern.includes('Lộ ảnh')) {
      prompts = [
        'Ai đó chụp lén ảnh mình đăng lên nhóm, mình nên làm gì?',
        'Làm thế nào để lưu bằng chứng trước khi báo cáo?',
        'Có nên nói với bố mẹ hay thầy cô khi bị đe dọa qua mạng?'
      ];
    } else if (concern.includes('từ chối')) {
      prompts = [
        'Làm sao để nói \"Không\" dứt khoát mà không cãi nhau?',
        'Mẫu câu từ chối lịch sự khi bạn thân rủ đi chơi khuya?',
        'Tại sao mình luôn cảm thấy áy náy khi từ chối người khác?'
      ];
    }

    suggestionsBox.innerHTML = '';
    prompts.forEach(p => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quick-prompt-pill';
      btn.textContent = p;
      btn.addEventListener('click', () => {
        document.getElementById('chatInputText').value = p;
        handleSendMessage();
      });
      suggestionsBox.appendChild(btn);
    });
  }

  function appendMessage(sender, text) {
    const container = document.getElementById('chatMessagesContainer');
    if (!container) return;

    const row = document.createElement('div');
    row.className = `chat-msg-row ${sender === 'user' ? 'msg-user' : 'msg-bot'}`;

    const bubble = document.createElement('div');
    bubble.className = 'chat-msg-bubble';

    // Format basic markdown like bold, italics, line breaks
    let formatted = text
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');

    bubble.innerHTML = formatted;
    row.appendChild(bubble);
    container.appendChild(row);

    container.scrollTop = container.scrollHeight;
    return row;
  }

  function showTypingIndicator() {
    const container = document.getElementById('chatMessagesContainer');
    const row = document.createElement('div');
    row.className = 'chat-msg-row msg-bot typing-indicator-row';
    row.id = 'chatTypingIndicator';

    row.innerHTML = `
      <div class="chat-msg-bubble typing-bubble">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    `;

    container.appendChild(row);
    container.scrollTop = container.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById('chatTypingIndicator');
    if (indicator) indicator.remove();
  }

  async function handleSendMessage() {
    if (isSending) return;

    const input = document.getElementById('chatInputText');
    const message = input.value.trim();

    if (!message) return;

    input.value = '';

    // Hiển thị tin nhắn người dùng
    appendMessage('user', message);
    chatHistory.push({
      role: 'user',
      text: message
    });

    // Track analytics
    if (
      typeof SafeTeenAnalytics !== 'undefined' &&
      SafeTeenAnalytics.incrementChatCount
    ) {
      SafeTeenAnalytics.incrementChatCount();
    }

    isSending = true;
    showTypingIndicator();

    try {
      // Gọi Gemini API
      const reply = await callGeminiApi(message);

      removeTypingIndicator();

      appendMessage('bot', reply);

      chatHistory.push({
        role: 'model',
        text: reply
      });

    } catch (err) {
      // Gemini lỗi → dùng NLP fallback
      console.error('GEMINI API ERROR:', err);

      removeTypingIndicator();

      const fallbackReply = generateSmartFallbackReply(
        message,
        userProfile
      );

      appendMessage('bot', fallbackReply);

      chatHistory.push({
        role: 'model',
        text: fallbackReply
      });

    } finally {
      // Luôn mở khóa nút gửi
      isSending = false;
    }
  }

  async function callGeminiApi(userMessage) {
    const systemInstructionText = `Bạn là SafeTeen Companion – Trợ lý tâm lý học đường & Cố vấn ranh giới cá nhân của nền tảng SafeTeen (Dành cho học sinh THPT).

NHIỆM VỤ:
- Giúp học sinh THPT tìm hiểu và bảo vệ ranh giới cá nhân (thể chất, cảm xúc, không gian mạng, thông tin, sự đồng thuận).
- Trả lời bằng tiếng Việt tự nhiên, thân thiện, ấm áp và dễ hiểu.
- Khi học sinh hỏi bất kỳ điều gì (học tập, cảm xúc, khoa học, đời sống, chào hỏi): trả lời đúng trọng tâm câu hỏi đó, thông minh, ngắn gọn, không bịa thông tin.
- Khi học sinh hỏi về ranh giới cá nhân hoặc tâm sự về khó khăn: giải thích theo hướng an toàn, đồng cảm, tôn trọng ranh giới, không phán xét.
- Tuyệt đối không tự ý chuyển mọi câu hỏi thành bài giảng về xâm hại nếu học sinh chỉ đang chào hỏi hoặc hỏi câu hỏi thông thường.
- Nếu câu hỏi chưa rõ ràng, hãy hỏi lại ngắn gọn, ân cần.
- Nếu phát hiện tình huống có nguy cơ nguy hiểm khẩn cấp: nhắc học sinh giữ bình tĩnh, lưu bằng chứng và cung cấp Tổng đài Quốc gia 111.

PHONG CÁCH:
- Thân thiện như một người anh/chị cố vấn tâm lý học đường đáng tin cậy.
- Câu trả lời ngắn gọn, súc tích, ngắt dòng dễ đọc (khoảng 80 - 200 từ).
- Có thể dùng emoji vừa phải, tươi sáng 🌸🌱💡.
- TUYỆT ĐỐI KHÔNG mở đầu mọi câu trả lời bằng cùng một mẫu câu lặp lại (như "Cảm ơn bạn đã chia sẻ", "Mình đang lắng nghe bạn rất kỹ"). Phải vào thẳng nội dung trả lời tự nhiên.`;

    // Build strictly alternating contents for Gemini API (user -> model -> user)
    const contents = [];
    const pastHistory = chatHistory.slice(0, -1).slice(-4);
    for (const item of pastHistory) {
      const role = (item.role === 'model' || item.role === 'bot') ? 'model' : 'user';
      if (contents.length === 0) {
        if (role !== 'user') continue;
      } else if (contents[contents.length - 1].role === role) {
        continue;
      }
      contents.push({
        role: role,
        parts: [{ text: item.text }]
      });
    }

    // Append the current user message
    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    // Fastest active models
    const candidateModels = [
      'gemini-3.5-flash-lite',
      'gemini-2.5-flash-lite'
    ];

    let lastErr = null;
    for (const model of candidateModels) {
      const controller = new AbortController();

      const timeoutId = setTimeout(() => {
        controller.abort();
      }, 15000);

      try {
        const response = await fetch('/api/gemini', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model,
            systemInstruction: { parts: [{ text: systemInstructionText }] },
            contents,
            generationConfig: { maxOutputTokens: 600 }
          })
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          if (response.status === 503) {
            console.warn(`⚠️ ${model} đang quá tải, chuyển model dự phòng...`);
            continue;
          }
          const data = await response.json();

          const candidateText =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (candidateText) {
            return candidateText;
          }
        } else {
          const errorText = await response.text();

          console.error(
            `Gemini ${model} ERROR:`,
            response.status,
            errorText
          );

          lastErr = new Error(
            `Model ${model} returned ${response.status}: ${errorText}`
          );
        }

      } catch (err) {
        clearTimeout(timeoutId);

        console.error(`Gemini ${model} REQUEST ERROR:`, err);

        lastErr = err;
      }
    }

    throw lastErr || new Error('All candidate models failed');
  }

  /**
   * ULTRA-SMART CONVERSATIONAL NLP ENGINE
   * Đa dạng ngữ cảnh, trả lời đúng trọng tâm câu hỏi của học sinh, tuyệt đối không rập khuôn
   */
  function generateSmartFallbackReply(message, profile) {
    const raw = message.trim();
    const lower = raw.toLowerCase();

    // 1. Phép tính đơn giản & câu hỏi logic (Math / Logic)
    const mathMatch = raw.match(/(\d+(?:\.\d+)?)\s*([\+\-\*\/xX×÷])\s*(\d+(?:\.\d+)?)/);
    if (mathMatch) {
      const a = parseFloat(mathMatch[1]);
      const op = mathMatch[2].toLowerCase();
      const b = parseFloat(mathMatch[3]);
      let res = 0;
      if (op === '+') res = a + b;
      else if (op === '-') res = a - b;
      else if (op === '*' || op === 'x' || op === '×') res = a * b;
      else if ((op === '/' || op === '÷') && b !== 0) res = (a / b).toFixed(2);
      return `Kết quả phép tính ${a} ${op} ${b} = **${res}** bạn nhé! 😊 SafeTeen luôn sẵn sàng giải đáp và tâm sự thêm về các chủ đề học đường nữa nha!`;
    }

    // 2. Chào hỏi tự nhiên, vui vẻ (Greeting)
    if (/^(chào|alo|hello|hi|hey|ê|ơi|bạn ơi|có ai không|xin chào|good morning)/i.test(lower) || lower === 'chào' || lower === 'hi') {
      const greetings = [
        `Chào bạn! Rất vui được gặp bạn hôm nay. Có chuyện gì vui hay điều gì đang làm bạn bận tâm ở trường không, chia sẻ với mình nhé! 🌸`,
        `Hello bạn! Mình là SafeTeen Companion đây. Hôm nay của bạn thế nào rồi? Mình luôn ở đây sẵn sàng trò chuyện cùng bạn nè! 🌱`,
        `Chào bạn nhé! Cảm ơn bạn đã ghé thăm SafeTeen. Hôm nay bạn đang cảm thấy như thế nào?`
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // 3. Hỏi thăm đời thường, ăn uống, chuyện cười (Casual banter)
    if (lower.includes('ăn cơm chưa') || lower.includes('đang làm gì') || lower.includes('khỏe không')) {
      return `Mình là trợ lý ảo nên "nạp năng lượng" bằng các dòng code thôi nè 😄. Còn bạn đã ăn uống đầy đủ và nghỉ ngơi hợp lý chưa đấy? Đừng để việc học làm quên chăm sóc bản thân nha!`;
    }

    if (lower.includes('kể chuyện cười') || lower.includes('hài hước') || lower.includes('vui đi')) {
      return `Đố bạn: *Con gì sinh ra đã có ranh giới rõ ràng nhất?*\n👉 Đáp án: *Con đường!* Vì nó luôn có vạch kẻ ranh giới trắng tinh để ai cũng đi an toàn và không lấn làn nhau đó! 😄\nCười một cái cho nhẹ lòng rồi cùng mình tâm sự tiếp nha!`;
    }

    // 4. Hỏi danh tính bot
    if (lower.includes('bạn là ai') || lower.includes('tên gì') || lower.includes('ai tạo') || lower.includes('làm được gì')) {
      return `Mình là **SafeTeen Companion** – Trợ lý cố vấn tâm lý và an toàn ranh giới cá nhân của website SafeTeen.\n\nNhiệm vụ của mình là:\n- Lắng nghe những băn khoăn về bạn bè, học tập, tình cảm học trò.\n- Hướng dẫn kỹ năng từ chối (Nói "Không") khéo léo mà dứt khoát.\n- Tư vấn cách bảo vệ cơ thể, không gian riêng và bảo mật trên mạng xã hội.\nBạn có thể hỏi mình bất cứ điều gì nhé!`;
    }

    // 5. Cảm xúc tiêu cực, buồn bã, mệt mỏi
    if (lower.includes('buồn') || lower.includes('chán') || lower.includes('mệt') || lower.includes('khóc') || lower.includes('áp lực') || lower.includes('stress') || lower.includes('tuyệt vọng') || lower.includes('cô đơn')) {
      return `Nghe bạn nói vậy mình thấy thương bạn quá. Cuộc sống học trò đôi khi có những lúc áp lực từ bài vở, bạn bè hay gia đình dồn dập khiến chúng mình cảm thấy quá tải.\n\nBạn hãy thử buông lỏng hai vai, hít thật sâu và thở ra chầm chậm 3 lần nhé. Nếu bạn không phiền, hãy kể cho mình nghe chuyện gì vừa làm bạn mệt mỏi như vậy? Mình luôn ở đây lắng nghe bạn.`;
    }

    // 6. Lời cảm ơn / Khen ngợi
    if (lower.includes('cảm ơn') || lower.includes('thanks') || lower.includes('hay quá') || lower.includes('tuyệt vời') || lower.includes('okie') || lower.includes('hiểu rồi')) {
      return `Không có gì đâu nè! Thấy bạn vui và nhẹ nhõm hơn là mình cũng vui lây rồi. Nhớ luôn tự tin và yêu thương bản thân nhé! Cần gì cứ nhắn cho mình nha 🌸.`;
    }

    // 7. Kiến thức cốt lõi (Khái niệm, Ranh giới, Đồng thuận, Red Flag)
    if (lower.includes('ranh giới là gì') || lower.includes('khái niệm ranh giới')) {
      return `**Ranh giới cá nhân (Personal Boundaries)** là các giới hạn vô hình do chính bạn đặt ra để bảo vệ không gian thể chất, cảm xúc, suy nghĩ và thông tin riêng tư của mình khỏi sự xâm phạm.\n\nVí dụ: Bạn có quyền không cho người khác tự ý đọc tin nhắn, không cho ai đụng chạm cơ thể khi chưa đồng ý, và có quyền từ chối những lời nhờ vả vượt quá sức mình.`;
    }

    if (lower.includes('đồng thuận là gì') || lower.includes('consent')) {
      return `**Sự đồng thuận (Consent)** thực sự là khi bạn hoàn toàn tự nguyện gật đầu trong trạng thái tỉnh táo, không bị ép buộc, đe dọa hay thao túng tâm lý.\n\nNhớ nguyên tắc vàng: **Im lặng không phải là đồng ý!** Và bạn luôn có quyền thay đổi ý định (nói dừng lại) bất cứ lúc nào.`;
    }

    if (lower.includes('red flag') || lower.includes('dấu hiệu cảnh báo')) {
      return `**Dấu hiệu cảnh báo đỏ (Red Flags)** trong các mối quan hệ gồm:\n1. Bắt bạn phải chia sẻ mật khẩu tài khoản mạng xã hội.\n2. Ghen tuông cực đoan, kiểm soát tin nhắn và bạn bè của bạn.\n3. Đóng vai nạn nhân, thao túng tâm lý: *"Nếu cậu coi tớ là bạn thì đã không từ chối..."*.\n4. Ép buộc bạn giữ bí mật những hành vi khiến bạn bất an với bố mẹ/thầy cô.`;
    }

    // 8. Tình huống đụng chạm thể chất
    if (lower.includes('đụng chạm') || lower.includes('ôm') || lower.includes('vỗ') || lower.includes('sờ') || lower.includes('nhạy cảm') || lower.includes('thân thể')) {
      return `Cơ thể của bạn là của riêng bạn, không một ai có quyền đụng chạm khi bạn chưa cho phép!\n\nNếu gặp tình huống này, bạn hãy:\n1. **Nói dứt khoát:** Nhìn thẳng đối phương: *"Dừng lại ngay, mình không thích điều này!"*.\n2. **Rời khỏi đó ngay lập tức:** Bước nhanh về phía nơi đông người hoặc phòng giáo viên.\n3. **Kể với người lớn:** Đừng chịu đựng một mình, hãy báo ngay cho thầy cô hoặc bố mẹ để được can thiệp bảo vệ.`;
    }

    // 9. Áp lực bạn bè / Bị tẩy chay / Ép buộc
    if (lower.includes('ép') || lower.includes('tẩy chay') || lower.includes('bạn bè') || lower.includes('nói xấu') || lower.includes('nghỉ chơi')) {
      return `Áp lực từ nhóm bạn (Peer Pressure) thật sự rất ngột ngạt. Nhưng bạn nhớ nhé: Tình bạn lành mạnh phải dựa trên sự tôn trọng, chứ không phải sự phục tùng hay ép buộc nhau.\n\nNếu một nhóm bạn bắt bạn làm điều sai mới cho chơi cùng, thì nhóm đó không xứng đáng với bạn đâu. Hãy dũng cảm giữ vững nguyên tắc của mình!`;
    }

    // 10. Không gian mạng / Bị đe dọa / Tung ảnh
    if (lower.includes('ảnh') || lower.includes('clip') || lower.includes('mạng') || lower.includes('facebook') || lower.includes('tin nhắn') || lower.includes('đe dọa') || lower.includes('tung')) {
      return `Nếu gặp rắc rối trên không gian mạng, hãy nhớ quy tắc 4 bước:\n1. **Chụp màn hình làm bằng chứng ngay:** Lưu lại đầy đủ tài khoản, nội dung tin nhắn và mốc thời gian.\n2. **Không đôi co hay thách thức đối phương.**\n3. **Chặn và báo cáo tài khoản quấy rối.**\n4. **Đưa bằng chứng cho thầy cô, bố mẹ:** Để người lớn xử lý theo quy định học đường hoặc pháp luật.`;
    }

    // 11. Cách từ chối
    if (lower.includes('từ chối') || lower.includes('nói không') || lower.includes('ngại') || lower.includes('áy náy')) {
      return `Từ chối là một kỹ năng, không phải là sự ích kỷ!\n\nBạn có thể dùng công thức 3 bước nhẹ nhàng:\n1. *"Cảm ơn cậu đã rủ/nhờ tớ nhé..."*\n2. *"...nhưng việc này mình không thấy thoải mái / mình bận việc gia đình nên không tham gia được."*\n3. *"Hôm khác chúng mình cùng đi chơi/làm bài nhé!"*`;
    }

    // 12. Câu hỏi mở tự nhiên không lặp khuôn (Rotating dynamic catch-all)
    const dynamicResponses = [
      `Ý kiến của bạn rất thú vị. Bạn có thể nói rõ hơn một chút để mình hiểu đúng hoàn cảnh và cùng bạn trao đổi kỹ hơn không?`,
      `Mình hiểu điều bạn đang quan tâm rồi nè. Theo bạn thì nguyên nhân chính của vấn đề này bắt đầu từ đâu?`,
      `Cảm ơn bạn đã nêu câu hỏi này. Bạn đang muốn tìm cách giải quyết cụ thể hay chỉ đơn giản là muốn có một người bạn cùng tâm sự? Mình luôn ở đây với bạn!`,
      `Câu chuyện này nghe có vẻ có nhiều điều ẩn giấu phía sau đúng không? Cứ thoải mái chia sẻ thêm chi tiết với mình nhé!`
    ];
    return dynamicResponses[Math.floor(Math.random() * dynamicResponses.length)];
  }

  return {
    init,
    openChat,
    closeChat,
    openApiKeyModal
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  SafeTeenChatbot.init();
});
