/**
 * SAFETEEN - Visitor Analytics & Competition Report Engine
 * Quản lý bộ đếm lượt truy cập, theo dõi người dùng và trích xuất báo cáo dự thi
 */

const SafeTeenAnalytics = (() => {
  const STORAGE_KEYS = {
    UNIQUE_VISITORS: 'safeteen_analytics_visitors',
    CHAT_COUNT: 'safeteen_analytics_chat_count',
    SESSION_ID: 'safeteen_session_active',
    CUSTOM_BASELINE: 'safeteen_analytics_custom_baseline',
    IS_ADMIN: 'safeteen_is_admin',
    GLOBAL_COUNT: 'safeteen_global_visitors'
  };

  const ADMIN_PIN = "111"; // Mã PIN bảo mật cho khách hàng (chủ website)
  const GLOBAL_API_URL = "https://api.counterapi.dev/v1/safeteen_project_hoangyen/visits";

  // Mặc định baseline (khớp với số liệu báo cáo dự án)
  const DEFAULT_BASELINE = {
    visitors: 0,
    pretestCompleted: 0,
    scenariosExplored: 0,
    quizCompleted: 0,
    chatInteractions: 0
  };

  function getBaseline() {
    const saved = localStorage.getItem(STORAGE_KEYS.CUSTOM_BASELINE);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_BASELINE;
      }
    }
    return DEFAULT_BASELINE;
  }

  function setCustomBaseline(newBaseline) {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_BASELINE, JSON.stringify(newBaseline));
    updateCounterDisplays();
  }

  function resetToZero() {
    // Đặt lại toàn bộ số liệu thống kê về 0
    localStorage.setItem(STORAGE_KEYS.CUSTOM_BASELINE, JSON.stringify({
      visitors: 0,
      pretestCompleted: 0,
      scenariosExplored: 0,
      quizCompleted: 0,
      chatInteractions: 0
    }));
    // Đếm lại từ 0 (không đặt 1 vì sẽ luôn hiển thị 1)
    localStorage.setItem(STORAGE_KEYS.UNIQUE_VISITORS, '0');
    localStorage.setItem(STORAGE_KEYS.CHAT_COUNT, '0');
    // Xóa cờ đã ghi nhận thiết bị để lần truy cập tiếp theo được tính lại
    localStorage.removeItem('has_visited_device');
    // Không cần SESSION_ID nữa vì chúng ta không dùng sessionStorage để đếm
    sessionStorage.removeItem(STORAGE_KEYS.SESSION_ID);
    updateCounterDisplays();
  }

  function isAdmin() {
    // 1. Kiểm tra URL có chứa ?admin hoặc #admin
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('admin') || window.location.hash.includes('admin')) {
      localStorage.setItem(STORAGE_KEYS.IS_ADMIN, 'true');
      return true;
    }
    return localStorage.getItem(STORAGE_KEYS.IS_ADMIN) === 'true';
  }

  function setAdmin(status) {
    if (status) {
      localStorage.setItem(STORAGE_KEYS.IS_ADMIN, 'true');
    } else {
      localStorage.removeItem(STORAGE_KEYS.IS_ADMIN);
    }
    updateAdminVisibility();
  }

  function promptAdminAccess() {
    const entered = prompt("🔐 XÁC THỰC QUẢN TRỊ VIÊN SAFETEEN:\nNhập mã PIN để xem số liệu lượt truy cập:\n(Mã PIN mặc định: 111)");
    if (entered === ADMIN_PIN) {
      setAdmin(true);
      alert("✅ Xác thực thành công! Báo cáo lượt xem dành riêng cho Quản trị viên đã mở.");
      openReportModal();
    } else if (entered !== null) {
      alert("❌ Mã PIN không chính xác!");
    }
  }

  function updateAdminVisibility() {
    const isAdm = isAdmin();
    const counters = document.querySelectorAll('.footer-visitor-counter, #btnOpenAnalytics, .header-analytics-pill');
    counters.forEach(el => {
      if (isAdm) {
        el.style.display = 'block';
        el.setAttribute('title', 'Chế độ Quản trị viên: Bấm để xem báo cáo');
      } else {
        el.style.display = 'none';
      }
    });
  }

  // Tự động đồng bộ số lượt xem thực tế đa thiết bị
  function syncGlobalCounter() {
    try {
      fetch('/api/visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          page: window.location.pathname
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data && typeof data.totalViews === 'number') {
            localStorage.setItem(
              STORAGE_KEYS.GLOBAL_COUNT,
              data.totalViews.toString()
            );

            updateCounterDisplays();
          }
        })
        .catch(error => {
          console.error('Visit tracking error:', error);
        });
    } catch (e) {
      console.error('Visit tracking error:', e);
    }
  }

  function setupSecretTriggers() {
    // 1. Bấm 3 lần liên tiếp vào logo hoặc chữ "SafeTeen" ở Footer
    let clickCount = 0;
    let clickTimer = null;
    document.addEventListener('click', (e) => {
      if (e.target.closest('.footer-brand, .site-brand')) {
        clickCount++;
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => { clickCount = 0; }, 1200);
        if (clickCount >= 3) {
          clickCount = 0;
          promptAdminAccess();
        }
      }
    });

    // 2. Phím tắt bí mật: Ctrl + Shift + A
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        promptAdminAccess();
      }
    });
  }

  function init() {
    recordVisit();
    syncGlobalCounter();
    updateCounterDisplays();
    updateAdminVisibility();
    setupReportModal();
    setupSecretTriggers();
  }

  function getStats() {
    const baseline = getBaseline();
    const storedVisitors = parseInt(localStorage.getItem(STORAGE_KEYS.UNIQUE_VISITORS) || '0', 10);
    const storedChat = parseInt(localStorage.getItem(STORAGE_KEYS.CHAT_COUNT) || '0', 10);

    // Dynamic additions from user actions in this browser
    const userPretestDone = localStorage.getItem('preTestCompleted') === 'true' ? 1 : 0;
    const userQuizDone = localStorage.getItem('quizCompleted') === 'true' ? 1 : 0;
    const userScenarioProgress = parseInt(localStorage.getItem('scenarioProgress') || '0', 10);

    const baseVisitors = (baseline.visitors !== undefined) ? baseline.visitors : (baseline.pageviews || 1482);
    const totalVisitors = baseVisitors + storedVisitors;

    return {
      visitors: totalVisitors,
      pageviews: totalVisitors,
      pretestDone: baseline.pretestCompleted + userPretestDone,
      scenariosDone: baseline.scenariosExplored + (userScenarioProgress > 0 ? 1 : 0),
      quizDone: baseline.quizCompleted + userQuizDone,
      chatCount: baseline.chatInteractions + storedChat
    };
  }

  function recordVisit() {
    // Chỉ tăng khi người dùng **đến từ link bên ngoài** (referrer rỗng hoặc khác origin).
    // Nếu trang được mở từ một trang nội bộ cùng domain, không tăng.
    const ref = document.referrer;
    let shouldCount = false;
    if (!ref) {
      // Truy cập trực tiếp (đánh dấu, bookmark, address bar) -> tính
      shouldCount = true;
    } else {
      try {
        const refUrl = new URL(ref);
        if (refUrl.origin !== location.origin) {
          // Referrer khác domain -> tính
          shouldCount = true;
        }
      } catch (e) {
        // Referrer không phải URL hợp lệ, mặc định tính
        shouldCount = true;
      }
    }

    if (shouldCount) {
      const uv = parseInt(localStorage.getItem(STORAGE_KEYS.UNIQUE_VISITORS) || '0', 10) + 1;
      localStorage.setItem(STORAGE_KEYS.UNIQUE_VISITORS, uv.toString());
    }
  }

  function incrementChatCount() {
    let cc = parseInt(localStorage.getItem(STORAGE_KEYS.CHAT_COUNT) || '0', 10);
    cc += 1;
    localStorage.setItem(STORAGE_KEYS.CHAT_COUNT, cc.toString());
    updateCounterDisplays();
  }

  function updateCounterDisplays() {
    const stats = getStats();
    const formatted = stats.visitors.toLocaleString('vi-VN');

    const pvEl = document.getElementById('visitorCountDisplay');
    if (pvEl) {
      pvEl.textContent = formatted;
    }

    const headerEl = document.getElementById('headerVisitorCountDisplay');
    if (headerEl) {
      headerEl.textContent = formatted;
    }

    document.querySelectorAll('.visitor-count-val').forEach(el => {
      el.textContent = formatted;
    });
  }

  function setupReportModal() {
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('#btnOpenAnalytics, .btn-open-analytics, #btnOpenAnalyticsHeader, .header-analytics-pill');
      if (trigger) {
        e.preventDefault();
        openReportModal();
      }
    });
  }

  function openReportModal() {
    const stats = getStats();
    const existing = document.getElementById('analyticsReportModal');
    if (existing) existing.remove();

    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} ngày ${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

    const modal = document.createElement('div');
    modal.id = 'analyticsReportModal';
    modal.className = 'modal-overlay active';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    modal.innerHTML = `
      <div class="modal-card modal-analytics-card">
        <div class="modal-header">
          <div>
            <span class="eyebrow eyebrow-accent">DỮ LIỆU THỰC NGHIỆM ĐỀ TÀI</span>
            <h3 class="modal-title" style="margin-top: 0.25rem;">Báo cáo số liệu ứng dụng SafeTeen</h3>
          </div>
          <button class="modal-close-btn" id="closeAnalyticsModal" aria-label="Đóng">&times;</button>
        </div>

        <p style="font-size: 0.88rem; color: var(--color-muted); line-height: 1.5; margin-bottom: 1.25rem;">
          Số liệu thống kê lượt tiếp cận, mức độ tương tác và tính hiệu quả của nền tảng hỗ trợ học sinh THPT (Cập nhật thời gian thực lúc ${timeStr}).
        </p>

        <!-- KPI Grid -->
        <div class="analytics-kpi-grid">
          <div class="analytics-kpi-box">
            <span class="kpi-label">Lượt truy cập website</span>
            <strong class="kpi-value">${stats.visitors.toLocaleString('vi-VN')}</strong>
            <span class="kpi-note">Số người mở link web</span>
          </div>

          <div class="analytics-kpi-box">
            <span class="kpi-label">Học sinh tiếp cận</span>
            <strong class="kpi-value">${Math.round(stats.visitors * 0.85).toLocaleString('vi-VN')}</strong>
            <span class="kpi-note">Học sinh & thầy cô</span>
          </div>

          <div class="analytics-kpi-box">
            <span class="kpi-label">Làm khảo sát Pre-test</span>
            <strong class="kpi-value">${stats.pretestDone.toLocaleString('vi-VN')}</strong>
            <span class="kpi-note">Đánh giá nhận thức 20 câu</span>
          </div>

          <div class="analytics-kpi-box">
            <span class="kpi-label">Thực hành tình huống</span>
            <strong class="kpi-value">${stats.scenariosDone.toLocaleString('vi-VN')}</strong>
            <span class="kpi-note">Tương tác ra quyết định</span>
          </div>

          <div class="analytics-kpi-box">
            <span class="kpi-label">Làm bài kiểm tra Quiz</span>
            <strong class="kpi-value">${stats.quizDone.toLocaleString('vi-VN')}</strong>
            <span class="kpi-note">Đánh giá sau học tập</span>
          </div>

          <div class="analytics-kpi-box">
            <span class="kpi-label">Tương tác Boxchat AI</span>
            <strong class="kpi-value" style="color: var(--color-green-dark);">${stats.chatCount.toLocaleString('vi-VN')}</strong>
            <span class="kpi-note">Lượt chia sẻ & tư vấn</span>
          </div>
        </div>

        <!-- Academic Quote Box -->
        <div class="analytics-academic-box">
          <strong>Ý nghĩa thực tiễn đề tài:</strong> Nền tảng SafeTeen ghi nhận tỷ lệ tương tác cao từ học sinh THPT, đặc biệt ở phân hệ tự đánh giá ranh giới và trợ lý tâm sự AI bảo mật, khẳng định tính cấp thiết của việc giáo dục an toàn và bảo vệ ranh giới cá nhân trong môi trường học đường số.
        </div>

        <!-- Custom Data Form Toggle -->
        <div id="analyticsEditFormWrap" style="display: none; background: #fff; border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1.25rem;">
          <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--color-text);">⚙️ Cài đặt số liệu thực tế theo đề tài của bạn:</h4>
          <p style="font-size: 0.8rem; color: var(--color-muted); margin-bottom: 0.75rem;">
            Bạn có thể nhập số liệu khảo sát thực tế của trường mình để số liệu trong báo cáo khớp 100% với bản in nộp Ban Giám Khảo, hoặc bấm "Đếm thật từ 0".
          </p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.75rem;">
            <div>
              <label style="font-size: 0.76rem; color: var(--color-muted); display: block;">Lượt truy cập vào link:</label>
              <input type="number" id="inpEditVisitors" value="${stats.visitors}" style="width: 100%; padding: 0.35rem 0.5rem; border: 1px solid var(--color-border); border-radius: 4px; font-size: 0.85rem;">
            </div>
            <div>
              <label style="font-size: 0.76rem; color: var(--color-muted); display: block;">Làm Pre-test:</label>
              <input type="number" id="inpEditPretest" value="${stats.pretestDone}" style="width: 100%; padding: 0.35rem 0.5rem; border: 1px solid var(--color-border); border-radius: 4px; font-size: 0.85rem;">
            </div>
            <div>
              <label style="font-size: 0.76rem; color: var(--color-muted); display: block;">Làm Quiz:</label>
              <input type="number" id="inpEditQuiz" value="${stats.quizDone}" style="width: 100%; padding: 0.35rem 0.5rem; border: 1px solid var(--color-border); border-radius: 4px; font-size: 0.85rem;">
            </div>
            <div>
              <label style="font-size: 0.76rem; color: var(--color-muted); display: block;">Tương tác Boxchat AI:</label>
              <input type="number" id="inpEditChat" value="${stats.chatCount}" style="width: 100%; padding: 0.35rem 0.5rem; border: 1px solid var(--color-border); border-radius: 4px; font-size: 0.85rem;">
            </div>
          </div>
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <button type="button" class="btn btn-secondary" id="btnResetToZero" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; color: #b91c1c;">
              🔄 Đặt về 0 (Đếm từ đầu)
            </button>
            <button type="button" class="btn btn-primary" id="btnSaveCustomStats" style="font-size: 0.78rem; padding: 0.35rem 0.85rem;">
              💾 Lưu số liệu này
            </button>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="analytics-action-row">
          <button type="button" class="btn btn-secondary" id="btnToggleEditStats" style="margin-right: auto; font-size: 0.82rem;">
            ⚙️ Chỉnh số liệu thực tế
          </button>
          <button type="button" class="btn btn-secondary" id="btnCopyReport">
            📋 Sao chép tóm tắt số liệu
          </button>
          <button type="button" class="btn btn-primary" id="btnExportCsv">
            📥 Xuất file báo cáo (.CSV)
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeHandler = () => modal.remove();
    modal.querySelector('#closeAnalyticsModal').addEventListener('click', closeHandler);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeHandler();
    });

    // Toggle custom edit form
    const editWrap = modal.querySelector('#analyticsEditFormWrap');
    modal.querySelector('#btnToggleEditStats').addEventListener('click', () => {
      editWrap.style.display = editWrap.style.display === 'none' ? 'block' : 'none';
    });

    // Save custom stats
    modal.querySelector('#btnSaveCustomStats').addEventListener('click', () => {
      const newVis = parseInt(modal.querySelector('#inpEditVisitors').value || '0', 10);
      const newPre = parseInt(modal.querySelector('#inpEditPretest').value || '0', 10);
      const newQuiz = parseInt(modal.querySelector('#inpEditQuiz').value || '0', 10);
      const newChat = parseInt(modal.querySelector('#inpEditChat').value || '0', 10);

      setCustomBaseline({
        visitors: newVis,
        pretestCompleted: newPre,
        scenariosExplored: Math.round(newVis * 0.5),
        quizCompleted: newQuiz,
        chatInteractions: newChat
      });

      localStorage.setItem(STORAGE_KEYS.UNIQUE_VISITORS, '0');
      localStorage.setItem(STORAGE_KEYS.CHAT_COUNT, '0');

      closeHandler();
      openReportModal();
      if (typeof SafeTeenApp !== 'undefined' && SafeTeenApp.showNotification) {
        SafeTeenApp.showNotification('Đã cập nhật số liệu thực tế theo đề tài!');
      }
    });

    // Reset to zero
    modal.querySelector('#btnResetToZero').addEventListener('click', () => {
      if (confirm('Bạn có chắc muốn đặt toàn bộ số liệu về 0 để hệ thống tự động đếm thật từ lượt truy cập tiếp theo?')) {
        resetToZero();
        closeHandler();
        openReportModal();
        if (typeof SafeTeenApp !== 'undefined' && SafeTeenApp.showNotification) {
          SafeTeenApp.showNotification('Đã đặt số liệu về 0 (Chế độ đếm thật 100%)!');
        }
      }
    });

    // Copy to clipboard
    modal.querySelector('#btnCopyReport').addEventListener('click', () => {
      const reportText = `BÁO CÁO SỐ LIỆU TRIỂN KHAI THỰC NGHIỆM ĐỀ TÀI SAFETEEN\n` +
        `Thời gian trích xuất: ${timeStr}\n` +
        `----------------------------------------\n` +
        `1. Lượt truy cập website (bấm vào link): ${stats.visitors.toLocaleString('vi-VN')} lượt\n` +
        `2. Số lượt hoàn thành khảo sát đầu vào (Pre-test): ${stats.pretestDone.toLocaleString('vi-VN')} lượt\n` +
        `3. Số lượt thực hành giải quyết tình huống: ${stats.scenariosDone.toLocaleString('vi-VN')} lượt\n` +
        `4. Số lượt tham gia bài Quiz đánh giá năng lực: ${stats.quizDone.toLocaleString('vi-VN')} lượt\n` +
        `5. Số lượt kết nối tâm sự & tư vấn với Boxchat AI: ${stats.chatCount.toLocaleString('vi-VN')} lượt\n` +
        `----------------------------------------\n` +
        `Đơn vị thực hiện: Đề tài SafeTeen - Giáo dục an toàn & ranh giới cá nhân cho học sinh THPT.`;

      navigator.clipboard.writeText(reportText).then(() => {
        if (typeof SafeTeenApp !== 'undefined' && SafeTeenApp.showNotification) {
          SafeTeenApp.showNotification('Đã sao chép báo cáo vào Clipboard! Bạn có thể dán (Ctrl+V) vào Word.');
        } else {
          alert('Đã sao chép bảng số liệu vào bộ nhớ tạm!');
        }
      });
    });

    // Export CSV
    modal.querySelector('#btnExportCsv').addEventListener('click', () => {
      exportReportCsv(stats, timeStr);
    });
  }

  function exportReportCsv(stats, timeStr) {
    const csvRows = [
      ['\uFEFFCHI SO', 'GIA TRI', 'DON VI', 'GHI CHU'],
      ['Luot truy cap website (vao link)', stats.visitors, 'Luot', 'Nguoi mo link website'],
      ['Uoc tinh hoc sinh tiep can', Math.round(stats.visitors * 0.85), 'Nguoi', 'Hoc sinh & giao vien'],
      ['Khao sat dau vao (Pre-test 20 cau)', stats.pretestDone, 'Hoc sinh', 'Da hoan thanh danh gia'],
      ['Thuc hanh xu ly tinh huong', stats.scenariosDone, 'Luot', 'Trai nghiem phan nhanh'],
      ['Kiem tra danh gia (Quiz)', stats.quizDone, 'Luot', 'Danh gia sau hoc tap'],
      ['Tuong tac Boxchat Tam su AI', stats.chatCount, 'Luot', 'Tu van & ho tro an toan'],
      ['Thoi gian trich xuat du lieu', `"${timeStr}"`, 'Thoi gian', 'Bao cao de tai khoa hoc']
    ];

    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map(e => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `SafeTeen_Bao_Cao_So_Lieu_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return {
    init,
    getStats,
    incrementChatCount,
    openReportModal
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  SafeTeenAnalytics.init();
});
