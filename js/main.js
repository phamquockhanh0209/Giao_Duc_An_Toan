/**
 * SAFETEEN - Common Application Logic
 * Navigation, Gatekeeping, State Management & Modals
 */

const SafeTeenApp = (() => {
  const STORAGE_KEYS = {
    PRE_TEST_COMPLETED: 'preTestCompleted',
    PRE_TEST_SCORE: 'preTestScore',
    PRE_TEST_ANSWERS: 'preTestAnswers',
    QUIZ_COMPLETED: 'quizCompleted',
    QUIZ_SCORE: 'quizScore',
    SCENARIO_PROGRESS: 'scenarioProgress'
  };

  function isPreTestCompleted() {
    return localStorage.getItem(STORAGE_KEYS.PRE_TEST_COMPLETED) === 'true';
  }

  function getPreTestScore() {
    return localStorage.getItem(STORAGE_KEYS.PRE_TEST_SCORE);
  }

  function getQuizScore() {
    return localStorage.getItem(STORAGE_KEYS.QUIZ_SCORE);
  }

  function getScenarioProgress() {
    return parseInt(localStorage.getItem(STORAGE_KEYS.SCENARIO_PROGRESS) || '0', 10);
  }

  // Enforce Pre-test requirement on protected pages
  function checkGatekeeper() {
    const currentPath = window.location.pathname.toLowerCase();
    const isPreTestPage = currentPath.endsWith('pre-test.html') || currentPath.endsWith('pre-test');
    
    // Protected pages requiring completed pre-test
    const isProtected = currentPath.endsWith('knowledge.html') || 
                        currentPath.endsWith('scenarios.html') || 
                        currentPath.endsWith('quiz.html');

    if (isProtected && !isPreTestCompleted()) {
      // Show mandatory modal then redirect
      showMandatoryModal();
    }

    // If on pre-test page, intercept navigation to forbidden pages
    if (isPreTestPage && !isPreTestCompleted()) {
      const navLinks = document.querySelectorAll('.site-nav .nav-link');
      navLinks.forEach(link => {
        link.classList.add('locked-link');
        link.addEventListener('click', (e) => {
          e.preventDefault();
          showNotification('Hãy hoàn thành bài đánh giá đầu vào trước khi tiếp tục.');
        });
      });
    }
  }

  function showMandatoryModal() {
    const modalHtml = `
      <div class="modal-overlay active" id="gatekeeperModal" role="dialog" aria-modal="true">
        <div class="modal-card" style="text-align: center;">
          <div class="eyebrow eyebrow-accent" style="margin-bottom: 0.5rem;">Yêu cầu đầu vào</div>
          <h3 style="font-family: var(--font-serif); margin-bottom: 1rem;">Hãy hoàn thành bài đánh giá đầu vào trước khi bắt đầu</h3>
          <p style="color: var(--color-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
            Để SafeTeen đồng hành hiệu quả nhất cùng bạn và giúp bạn nhìn nhận sự tiến bộ của bản thân, hãy dành 5–7 phút hoàn thành 20 câu hỏi đánh giá nhận thức ban đầu.
          </p>
          <a href="pre-test.html" class="btn btn-primary" style="width: 100%;">
            Đến bài đánh giá đầu vào →
          </a>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  function showNotification(message) {
    const existing = document.getElementById('safeToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'safeToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 1000;
      background: var(--color-text);
      color: var(--color-white);
      padding: 0.85rem 1.25rem;
      border-radius: var(--radius-sm);
      font-size: 0.9rem;
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
      animation: fadeIn 0.2s ease;
      max-width: 360px;
      line-height: 1.5;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 3600);
  }

  // Update header badges
  function updateHeaderStatus() {
    const statusEl = document.getElementById('headerUserStatus');
    if (!statusEl) return;

    if (isPreTestCompleted()) {
      const score = getPreTestScore() || '0';
      statusEl.innerHTML = `<span class="badge-pill completed">Pre-test: ${score}/20</span>`;
    } else {
      statusEl.innerHTML = `<span class="badge-pill">Chưa làm Pre-test</span>`;
    }
  }

  // Mobile menu setup
  function setupMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.site-nav');
    if (toggleBtn && nav) {
      toggleBtn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('mobile-active');
        toggleBtn.setAttribute('aria-expanded', isOpen);
      });
    }
  }

  // Results Modal Logic
  function setupResultsModal() {
    const openBtn = document.getElementById('btnMyResults');
    if (!openBtn) return;

    openBtn.addEventListener('click', () => {
      openResultsModal();
    });
  }

  function openResultsModal() {
    const preScore = getPreTestScore();
    const quizScore = getQuizScore();
    const scenarioCount = getScenarioProgress();
    const isCompleted = isPreTestCompleted();

    const existing = document.getElementById('resultsModalOverlay');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'resultsModalOverlay';
    modal.className = 'modal-overlay active';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <h3 class="modal-title">Kết quả của tôi</h3>
          <button class="modal-close-btn" id="closeResultsModal" aria-label="Đóng">&times;</button>
        </div>
        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 0; border-bottom: 1px solid var(--color-border);">
            <div>
              <strong style="display: block; font-size: 0.95rem;">Đánh giá đầu vào (Pre-test)</strong>
              <span style="font-size: 0.82rem; color: var(--color-muted);">20 câu hỏi nhận thức ban đầu</span>
            </div>
            <div>
              ${isCompleted 
                ? `<span class="badge-pill completed" style="font-size: 0.9rem;">${preScore}/20 điểm</span>` 
                : `<span class="badge-pill">Chưa hoàn thành</span>`}
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 0; border-bottom: 1px solid var(--color-border);">
            <div>
              <strong style="display: block; font-size: 0.95rem;">Tình huống thực tế</strong>
              <span style="font-size: 0.82rem; color: var(--color-muted);">Rèn luyện phản xạ và giao tiếp ranh giới</span>
            </div>
            <div>
              <span class="badge-pill">${scenarioCount > 0 ? `Đã xem ${scenarioCount}/9 tình huống` : 'Chưa bắt đầu'}</span>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 0; border-bottom: 1px solid var(--color-border);">
            <div>
              <strong style="display: block; font-size: 0.95rem;">Quiz luyện tập & Đánh giá</strong>
              <span style="font-size: 0.82rem; color: var(--color-muted);">5 mức độ tư duy an toàn</span>
            </div>
            <div>
              ${quizScore 
                ? `<span class="badge-pill completed" style="font-size: 0.9rem;">${quizScore}/50 điểm</span>` 
                : `<span class="badge-pill">Chưa làm</span>`}
            </div>
          </div>
        </div>

        <p style="font-size: 0.85rem; color: var(--color-muted); line-height: 1.5; margin-bottom: 1.5rem;">
          Dữ liệu được lưu trữ trực tiếp trên thiết bị của bạn để bạn theo dõi hành trình cá nhân một cách riêng tư.
        </p>

        <div style="display: flex; gap: 0.75rem; justify-content: flex-end; flex-wrap: wrap;">
          <button type="button" class="btn btn-secondary" id="btnResetProgress" style="font-size: 0.85rem;">
            Làm lại từ đầu (Xóa dữ liệu)
          </button>
          <button type="button" class="btn btn-primary" id="btnCloseModalBtn" style="font-size: 0.85rem;">
            Đóng
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeHandler = () => modal.remove();
    modal.querySelector('#closeResultsModal').addEventListener('click', closeHandler);
    modal.querySelector('#btnCloseModalBtn').addEventListener('click', closeHandler);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeHandler();
    });

    modal.querySelector('#btnResetProgress').addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn xóa tiến độ và bắt đầu lại bài đánh giá đầu vào không?')) {
        localStorage.clear();
        window.location.href = 'pre-test.html';
      }
    });
  }

  function init() {
    checkGatekeeper();
    updateHeaderStatus();
    setupMobileMenu();
    setupResultsModal();
  }

  // Public API
  return {
    init,
    isPreTestCompleted,
    getPreTestScore,
    getQuizScore,
    getScenarioProgress,
    STORAGE_KEYS,
    showNotification
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  SafeTeenApp.init();
});
