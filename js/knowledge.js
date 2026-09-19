/**
 * SAFETEEN - Knowledge Digital Handbook Logic
 * Sticky TOC scrollspy, interactive Q&A corner and sample responses
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scrollspy for Sticky Table of Contents
  const sections = document.querySelectorAll('.article-section');
  const tocLinks = document.querySelectorAll('.toc-link');

  if (sections.length > 0 && tocLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  // 2. Q&A Corner Submission Logic
  const qaForm = document.getElementById('qaForm');
  const qaFeedback = document.getElementById('qaFeedback');
  const qaInput = document.getElementById('qaInput');

  if (qaForm && qaInput && qaFeedback) {
    qaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const questionText = qaInput.value.trim();
      if (!questionText) {
        SafeTeenApp.showNotification('Vui lòng nhập câu hỏi của bạn.');
        return;
      }

      // Check for sensitive keywords warning
      const sensitiveKeywords = ['mật khẩu', 'password', 'số điện thoại', 'sđt', 'địa chỉ nhà', '09', '08', '03'];
      const hasSensitive = sensitiveKeywords.some(kw => questionText.toLowerCase().includes(kw));

      if (hasSensitive) {
        alert('Lưu ý bảo mật: Hãy xóa các thông tin liên hệ riêng tư (số điện thoại, mật khẩu, địa chỉ) trước khi gửi.');
        return;
      }

      qaFeedback.style.display = 'block';
      qaFeedback.innerHTML = `
        <div style="background-color: var(--color-correct-bg); border: 1px solid var(--color-correct-border); padding: 1rem; border-radius: var(--radius-sm); font-size: 0.92rem; color: var(--color-correct);">
          <strong>Cảm ơn bạn đã chia sẻ câu hỏi.</strong><br>
          Câu hỏi của bạn đã được tiếp nhận ẩn danh. Bạn có thể tham khảo thêm các câu hỏi thường gặp bên dưới hoặc trao đổi trực tiếp với thầy cô phòng tư vấn tâm lý trường.
        </div>
      `;
      qaInput.value = '';

      setTimeout(() => {
        qaFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    });
  }

  // 3. Sample Questions Modal / Accordion
  const sampleAnswers = {
    "q1": {
      q: "Làm sao để nói không mà không cảm thấy có lỗi?",
      a: "Cảm giác có lỗi thường xuất hiện vì chúng ta sợ làm người khác buồn hoặc bị coi là 'khó tính'. Tuy nhiên, từ chối một điều khiến bạn không thoải mái là bạn đang bảo vệ năng lượng và sự an toàn của chính mình. Bạn có thể nói ngắn gọn, lịch sự nhưng dứt khoát: 'Cảm ơn cậu đã rủ/hỏi, nhưng hôm nay mình không tiện/mình không thoải mái với điều này'. Không cần phải giải thích quá dài dòng hay xin lỗi nhiều lần."
    },
    "q2": {
      q: "Bạn mình đang bị áp lực hoặc bị trêu chọc quá đà, mình nên làm gì?",
      a: "Bạn có thể hỗ trợ bằng cách: (1) Không hùa theo đám đông, (2) Nhẹ nhàng tách bạn mình ra khỏi tình huống bằng một lý do tự nhiên ('Cậu ơi, đi cùng tớ lấy cái này một lát'), (3) Lắng nghe bạn sau sự việc và xác nhận rằng bạn ấy không có lỗi, (4) Khuyến khích hoặc cùng bạn tìm đến thầy cô chủ nhiệm/phòng tư vấn học đường nếu hành vi tiếp diễn."
    },
    "q3": {
      q: "Có phải một khi đã đồng ý rồi thì không được phép đổi ý?",
      a: "Hoàn toàn không. Sự đồng thuận là một quá trình liên tục và có thể thay đổi (Reversible). Nếu lúc đầu bạn thấy ổn nhưng sau đó cảm thấy không thoải mái, không an toàn hoặc đơn giản là mệt mỏi, bạn luôn có quyền nói: 'Mình nghĩ lại rồi, mình muốn dừng lại tại đây'. Người tôn trọng bạn sẽ luôn tôn trọng quyền đổi ý này."
    }
  };

  const sampleButtons = document.querySelectorAll('.sample-q-btn');
  sampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const qKey = btn.getAttribute('data-q');
      const item = sampleAnswers[qKey];
      if (!item) return;

      const answerModal = document.createElement('div');
      answerModal.className = 'modal-overlay active';
      answerModal.innerHTML = `
        <div class="modal-card">
          <div class="modal-header">
            <span class="eyebrow eyebrow-accent">GÓC HỎI ĐÁP SAFETEEN</span>
            <button class="modal-close-btn" aria-label="Đóng">&times;</button>
          </div>
          <h3 style="font-family: var(--font-serif); margin-bottom: 1rem; color: var(--color-text); font-size: 1.25rem;">
            ${item.q}
          </h3>
          <div style="font-size: 0.95rem; line-height: 1.7; color: var(--color-text); margin-bottom: 1.5rem;">
            ${item.a}
          </div>
          <div style="text-align: right;">
            <button type="button" class="btn btn-secondary modal-close-btn-action" style="font-size: 0.85rem;">
              Đã hiểu
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(answerModal);

      const closeHandler = () => answerModal.remove();
      answerModal.querySelector('.modal-close-btn').addEventListener('click', closeHandler);
      answerModal.querySelector('.modal-close-btn-action').addEventListener('click', closeHandler);
      answerModal.addEventListener('click', (e) => {
        if (e.target === answerModal) closeHandler();
      });
    });
  });
});
