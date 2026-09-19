/**
 * SAFETEEN - Practice & Post Quiz Engine
 * 5 Cognitive Levels, instant explanation feedback, 50-point scoring system,
 * Before/After journey visualization.
 */

const QUIZ_QUESTIONS = [
  // MỨC 1 — NHẬN BIẾT CƠ BẢN (5 pts each)
  {
    id: 1,
    level: "Mức 1 — Nhận biết cơ bản",
    points: 5,
    question: "Ranh giới cá nhân (Personal Boundaries) bao gồm những khía cạnh nào sau đây?",
    options: [
      "Chỉ bao gồm khoảng cách thể xác khi đứng cạnh người khác.",
      "Cơ thể, cảm xúc, thông tin cá nhân, không gian riêng tư, thời gian và không gian mạng.",
      "Chỉ là các quy tắc ứng xử trên lớp học theo nội quy nhà trường.",
      "Chỉ là danh bạ và mật khẩu điện thoại."
    ],
    correctAnswer: 1,
    explanation: "Ranh giới cá nhân là một hệ thống toàn diện gồm 6 khía cạnh: cơ thể, cảm xúc, thông tin, không gian, thời gian và không gian số."
  },
  {
    id: 2,
    level: "Mức 1 — Nhận biết cơ bản",
    points: 5,
    question: "5 nguyên tắc tạo nên một sự đồng thuận (Consent) thực sự là gì?",
    options: [
      "Bắt buộc, âm thầm, vĩnh viễn, suy đoán và thỏa hiệp.",
      "Tự nguyện, rõ ràng, cụ thể, có thể thay đổi và không thể suy đoán.",
      "Nể phục, im lặng, nhanh chóng, có đi có lại và bí mật.",
      "Tuân theo đám đông, chấp nhận, cam kết, không bàn cãi và thụ động."
    ],
    correctAnswer: 1,
    explanation: "Sự đồng thuận chuẩn mực phải đảm bảo: Tự nguyện (không ép buộc), Rõ ràng (bằng lời/hành động), Cụ thể (cho từng việc), Có thể đổi ý (bất kỳ lúc nào) và Không thể suy đoán."
  },

  // MỨC 2 — THÔNG HIỂU (5 pts each)
  {
    id: 3,
    level: "Mức 2 — Thông hiểu",
    points: 5,
    question: "Vì sao không thể coi trạng thái \"im lặng hoặc không phản ứng\" là đã đồng ý?",
    options: [
      "Vì người đó chắc chắn đang tức giận và muốn gây gổ.",
      "Vì im lặng có thể là phản xạ đóng băng (freeze) trước sự bất ngờ, hoảng sợ hoặc sợ bị trả thù khi có áp lực.",
      "Vì người đó đang suy nghĩ và sẽ đồng ý sau 5 phút.",
      "Vì luật pháp quy định chỉ có văn bản ký tên mới có hiệu lực."
    ],
    correctAnswer: 1,
    explanation: "Tâm lý học chỉ ra phản ứng đóng băng (freeze) rất phổ biến khi một người bị đặt vào tình thế xâm phạm bất ngờ hoặc trước người có ưu thế quyền lực."
  },
  {
    id: 4,
    level: "Mức 2 — Thông hiểu",
    points: 5,
    question: "Hiểu như thế nào là đúng nhất về quyền riêng tư đối với tài khoản và mật khẩu cá nhân?",
    options: [
      "Bạn thân hoặc người yêu có quyền biết mật khẩu để chứng minh lòng tin.",
      "Mật khẩu và thông tin đăng nhập là tài sản an toàn cá nhân, chia sẻ mật khẩu không phải là thước đo của tình bạn hay tình cảm lành mạnh.",
      "Chỉ người lớn mới cần bảo mật mật khẩu, học sinh thì không cần thiết.",
      "Nên chia sẻ mật khẩu cho nhóm bạn để nhờ đăng nhập khi cần."
    ],
    correctAnswer: 1,
    explanation: "Tình bạn và tình yêu lành mạnh xây dựng trên sự tôn trọng không gian riêng của nhau, chứ không phải sự giám sát hay kiểm soát thông tin."
  },

  // MỨC 3 — VẬN DỤNG (5 pts each)
  {
    id: 5,
    level: "Mức 3 — Vận dụng",
    points: 5,
    question: "Bạn muốn từ chối một lời đề nghị đi chơi khuya từ một người bạn thân mà không làm sứt mẻ tình cảm. Cách nói nào sau đây là phù hợp nhất?",
    options: [
      "“Cậu vô duyên thế, đêm hôm còn rủ đi chơi, tớ không thèm đi đâu!”",
      "“Cảm ơn cậu đã rủ nhé, nhưng tối muộn tớ không ra ngoài để đảm bảo an toàn và nghỉ ngơi. Hẹn cậu trưa mai ở căn-tin trường tụi mình nói chuyện nha!”",
      "Nói dối là bị ốm nặng sắp phải đi viện để bạn không hỏi nữa.",
      "Im lặng không đọc tin nhắn và chặn tài khoản bạn một tuần."
    ],
    correctAnswer: 1,
    explanation: "Cách nói này thể hiện kỹ năng giao tiếp ranh giới: ghi nhận lời mời lịch sự, nêu rõ lý do ranh giới của bản thân và chủ động đưa ra phương án thay thế phù hợp."
  },
  {
    id: 6,
    level: "Mức 3 — Vận dụng",
    points: 5,
    question: "Khi phát hiện một bức ảnh chụp khoảnh khắc riêng tư của mình bị ai đó đăng tải lên nhóm mạng xã hội khi chưa được phép, bạn nên làm gì đầu tiên?",
    options: [
      "Đăng bài xúc phạm người đó trên trang cá nhân của mình để trả đũa.",
      "Chụp ảnh màn hình lưu giữ bằng chứng (tên nhóm, người đăng, ngày giờ), sau đó yêu cầu người đăng gỡ bài hoặc báo cáo với quản trị viên/thầy cô.",
      "Hoảng loạn khóa tài khoản và trốn học.",
      "Thách thức và để lại những bình luận đe dọa bạo lực."
    ],
    correctAnswer: 1,
    explanation: "Lưu giữ bằng chứng số là bước bảo vệ pháp lý và chứng cứ quan trọng nhất trước khi thông tin bị xóa hoặc chỉnh sửa."
  },

  // MỨC 4 — PHÂN TÍCH TÌNH HUỐNG (5 pts each)
  {
    id: 7,
    level: "Mức 4 — Phân tích tình huống",
    points: 5,
    question: "Một người nói với bạn: “Ai cũng làm thế cả, có gì đâu mà cậu làm quá lên thế!”. Bản chất tâm lý của phát ngôn này là:",
    options: [
      "Một lời góp ý chân thành giúp bạn cởi mở hơn.",
      "Chiêu thức thao túng tâm lý dùng chuẩn mực số đông (peer pressure) để bình thường hóa hành vi vượt ranh giới và khiến bạn nghi ngờ cảm nhận của chính mình.",
      "Chứng minh rằng hành vi đó hoàn toàn đúng đắn và chuẩn mực 100%.",
      "Một cách đùa vui vô hại."
    ],
    correctAnswer: 1,
    explanation: "Việc lấy lý do 'ai cũng làm thế' là kỹ thuật thao túng kinh điển nhằm gạt bỏ cảm xúc và quyền đặt giới hạn hợp pháp của nạn nhân."
  },
  {
    id: 8,
    level: "Mức 4 — Phân tích tình huống",
    points: 5,
    question: "Tại sao lời đề nghị “Hãy giữ bí mật chuyện này với bố mẹ/thầy cô” trong các mối quan hệ với người lớn hơn lại là một dấu hiệu cảnh báo đỏ (Red Flag)?",
    options: [
      "Vì người lớn hơn muốn chuẩn bị một món quà bất ngờ cho gia đình bạn.",
      "Vì đây là dấu hiệu của hành vi cô lập, tước đi mạng lưới bảo hộ của học sinh để dễ bề kiểm soát hoặc thực hiện hành vi xâm hại.",
      "Vì người đó sợ nhà trường khen thưởng quá nhiều.",
      "Đó là quy ước bình thường giữa hai người bạn bè."
    ],
    correctAnswer: 1,
    explanation: "Các đối tượng xấu luôn tìm cách cắt đứt mối liên kết giữa học sinh và người giám hộ để nạn nhân không dám tìm kiếm sự can thiệp từ người lớn có trách nhiệm."
  },

  // MỨC 5 — VẬN DỤNG CAO (5 pts each)
  {
    id: 9,
    level: "Mức 5 — Vận dụng cao",
    points: 5,
    question: "Bạn chứng kiến bạn cùng lớp đang bị một nhóm bạn khác vây quanh, ép đưa điện thoại và chụp ảnh chế giễu. Bạn nên hành động như thế nào là thông minh và an toàn nhất?",
    options: [
      "Lấy điện thoại ra cùng quay clip để có nhiều người cùng xem.",
      "Không cổ vũ hay cười đùa; tìm cách can thiệp an toàn bằng cách gọi thầy cô giáo hoặc bảo vệ trường gần đó đến hỗ trợ ngay lập tức.",
      "Lao vào đánh nhau với nhóm bạn để giải cứu bạn mình.",
      "Quay mặt đi chỗ khác và coi như không thấy gì."
    ],
    correctAnswer: 1,
    explanation: "Hành động của người quan sát tích cực (Upstander) là không hùa theo và nhanh chóng tìm kiếm người lớn có thẩm quyền để giải quyết mà không làm nguy hiểm đến bản thân."
  },
  {
    id: 10,
    level: "Mức 5 — Vận dụng cao",
    points: 5,
    question: "Nguyên tắc nhận thức cốt lõi nào giúp một học sinh phục hồi tâm lý sau khi từng trải qua một sự việc bị xâm phạm ranh giới?",
    options: [
      "Tự trách mình ngu ngốc và tự giam mình trong phòng.",
      "Hiểu rõ ràng rằng: Lỗi 100% thuộc về kẻ có hành vi xâm hại; bản thân mình hoàn toàn không có lỗi và việc lên tiếng tìm sự giúp đỡ là biểu hiện của lòng dũng cảm.",
      "Tìm cách trả thù bằng bạo lực để lấy lại công bằng.",
      "Cố gắng xóa sạch ký ức và không bao giờ tin tưởng bất kỳ ai nữa."
    ],
    correctAnswer: 1,
    explanation: "Gạt bỏ tâm lý tự đổ lỗi (victim-blaming) và nhận thức rõ trách nhiệm thuộc về kẻ xâm phạm là bước nền tảng để học sinh chữa lành và bảo vệ bản thân lâu dài."
  }
];

const QuizController = (() => {
  let currentIndex = 0;
  let earnedScore = 0;
  const userAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);

  const elements = {
    activeView: null,
    resultsView: null,
    levelEl: null,
    counterEl: null,
    progressBarEl: null,
    questionEl: null,
    optionsContainer: null,
    feedbackBox: null,
    btnNext: null,
    finalScoreEl: null,
    evaluationTextEl: null,
    chartPreBar: null,
    chartQuizBar: null,
    chartPreScore: null,
    chartQuizScore: null,
    chartFeedbackText: null
  };

  function init() {
    elements.activeView = document.getElementById('quizActiveView');
    elements.resultsView = document.getElementById('quizResultsView');
    elements.levelEl = document.getElementById('quizLevelBadge');
    elements.counterEl = document.getElementById('quizCounter');
    elements.progressBarEl = document.getElementById('quizProgressBarFill');
    elements.questionEl = document.getElementById('quizQuestionText');
    elements.optionsContainer = document.getElementById('quizOptionsContainer');
    elements.feedbackBox = document.getElementById('quizInstantFeedback');
    elements.btnNext = document.getElementById('btnQuizNext');
    elements.finalScoreEl = document.getElementById('quizFinalScore');
    elements.evaluationTextEl = document.getElementById('quizEvaluationText');
    elements.chartPreBar = document.getElementById('chartPreFill');
    elements.chartQuizBar = document.getElementById('chartQuizFill');
    elements.chartPreScore = document.getElementById('chartPreScoreText');
    elements.chartQuizScore = document.getElementById('chartQuizScoreText');
    elements.chartFeedbackText = document.getElementById('chartJourneyFeedback');

    setupEventListeners();
    renderQuestion(0);
  }

  function setupEventListeners() {
    elements.btnNext.addEventListener('click', () => {
      if (currentIndex < QUIZ_QUESTIONS.length - 1) {
        currentIndex++;
        renderQuestion(currentIndex);
        elements.questionEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        finishQuiz();
      }
    });

    const btnRetake = document.getElementById('btnRetakeQuiz');
    if (btnRetake) {
      btnRetake.addEventListener('click', () => {
        currentIndex = 0;
        earnedScore = 0;
        userAnswers.fill(null);
        elements.resultsView.style.display = 'none';
        elements.activeView.style.display = 'block';
        renderQuestion(0);
      });
    }
  }

  function renderQuestion(index) {
    const q = QUIZ_QUESTIONS[index];
    const total = QUIZ_QUESTIONS.length;

    // Counter & Level
    const displayNum = (index + 1).toString().padStart(2, '0');
    const totalNum = total.toString().padStart(2, '0');
    elements.counterEl.textContent = `Câu ${displayNum} / ${totalNum}`;
    elements.levelEl.textContent = q.level;
    elements.progressBarEl.style.width = `${((index + 1) / total) * 100}%`;

    // Question
    elements.questionEl.textContent = q.question;

    // Reset feedback & Next button
    elements.feedbackBox.className = 'instant-feedback';
    elements.feedbackBox.style.display = 'none';
    elements.feedbackBox.innerHTML = '';
    elements.btnNext.style.display = 'none';

    // Options
    elements.optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[optIdx]}</span>
        <span>${optText}</span>
      `;

      btn.addEventListener('click', () => {
        handleOptionAnswer(q, optIdx);
      });

      elements.optionsContainer.appendChild(btn);
    });
  }

  function handleOptionAnswer(q, selectedIdx) {
    userAnswers[currentIndex] = selectedIdx;
    const isCorrect = (selectedIdx === q.correctAnswer);

    if (isCorrect) {
      earnedScore += q.points;
    }

    // Highlight options
    const allBtns = elements.optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correctAnswer) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    // Show instant explanation
    elements.feedbackBox.style.display = 'block';
    if (isCorrect) {
      elements.feedbackBox.className = 'instant-feedback correct-box active';
      elements.feedbackBox.innerHTML = `
        <strong>Chính xác (+${q.points} điểm):</strong> ${q.explanation}
      `;
    } else {
      elements.feedbackBox.className = 'instant-feedback wrong-box active';
      elements.feedbackBox.innerHTML = `
        <strong>Chưa chính xác:</strong> Đáp án đúng là <strong>${['A', 'B', 'C', 'D'][q.correctAnswer]}</strong>.<br>${q.explanation}
      `;
    }

    // Show next button
    elements.btnNext.style.display = 'inline-flex';
    elements.btnNext.textContent = (currentIndex === QUIZ_QUESTIONS.length - 1)
      ? 'Xem kết quả tổng kết →'
      : 'Câu hỏi tiếp theo →';
  }

  function finishQuiz() {
    // Save to localStorage
    localStorage.setItem(SafeTeenApp.STORAGE_KEYS.QUIZ_COMPLETED, 'true');
    localStorage.setItem(SafeTeenApp.STORAGE_KEYS.QUIZ_SCORE, earnedScore.toString());

    // Switch view
    elements.activeView.style.display = 'none';
    elements.resultsView.style.display = 'block';

    // Display final score out of 50
    elements.finalScoreEl.textContent = `${earnedScore} / 50`;

    // Bracket Evaluation Text (Empathetic, no leaderboard)
    let evalText = '';
    if (earnedScore <= 20) {
      evalText = "Bạn nên tìm hiểu thêm các kiến thức cơ bản về ranh giới cá nhân, sự đồng thuận và cách tìm kiếm sự hỗ trợ.";
    } else if (earnedScore <= 35) {
      evalText = "Bạn đã có một số kiến thức quan trọng. Hãy tiếp tục luyện tập qua các tình huống thực tế để phản xạ tự nhiên hơn.";
    } else if (earnedScore <= 45) {
      evalText = "Bạn đã nắm khá tốt các kiến thức và kỹ năng an toàn học đường.";
    } else {
      evalText = "Bạn đã thể hiện khả năng nhận biết và xử lý nhiều tình huống rất tốt. Bạn hoàn toàn có thể trở thành người hỗ trợ đáng tin cậy cho bạn bè xung quanh.";
    }
    elements.evaluationTextEl.textContent = evalText;

    // Render Dynamic Sticker
    renderQuizSticker(earnedScore);

    // Render Journey Chart (Before / After)
    renderJourneyChart();

    elements.resultsView.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderQuizSticker(score) {
    const container = document.getElementById('quizStickerContainer');
    if (!container) return;

    let tierClass = '';
    let title = '';
    let stickerSvg = '';
    let advice = '';

    if (score <= 25) {
      tierClass = 'sticker-tier-oops';
      title = 'Oops! Hừm, nhớ lại nào! 💡';
      advice = 'Hãy xem lại các nguyên tắc cốt lõi trong Sổ tay Kiến thức để nắm vững hơn các ranh giới cá nhân nhé!';
      stickerSvg = `
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="44" fill="#FFEDD5" stroke="#F97316" stroke-width="4"/>
          <circle cx="36" cy="42" r="5" fill="#C2410C"/>
          <circle cx="64" cy="42" r="5" fill="#C2410C"/>
          <path d="M38 64C42 60 48 68 54 62C58 58 62 62 64 64" stroke="#C2410C" stroke-width="3.5" stroke-linecap="round"/>
        </svg>
      `;
    } else if (score <= 40) {
      tierClass = 'sticker-tier-good';
      title = 'Không sao đâu, bạn đã làm rất tốt rồi! 🌱';
      advice = 'Bạn đã nắm vững phần lớn các kỹ năng an toàn và tôn trọng ranh giới bản thân!';
      stickerSvg = `
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="44" fill="#DCFCE7" stroke="#22C55E" stroke-width="4"/>
          <path d="M32 44C32 40 40 40 40 44" stroke="#15803D" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M60 44C60 40 68 40 68 44" stroke="#15803D" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M36 58C42 68 58 68 64 58" stroke="#15803D" stroke-width="4" stroke-linecap="round"/>
        </svg>
      `;
    } else {
      tierClass = 'sticker-tier-excellent';
      title = 'Tuyệt! Xuất sắc! Bạn đã làm chủ ranh giới! 🌟👑';
      advice = 'Thành tích vượt trội! Bạn có trực giác và kỹ năng giải quyết tình huống an toàn chuẩn mực!';
      stickerSvg = `
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="44" fill="#FEF08A" stroke="#EAB308" stroke-width="4"/>
          <path d="M30 28L36 38L50 24L64 38L70 28V42H30V28Z" fill="#FACC15" stroke="#CA8A04" stroke-width="2.5" stroke-linejoin="round"/>
          <circle cx="36" cy="50" r="4" fill="#A16207"/>
          <circle cx="64" cy="50" r="4" fill="#A16207"/>
          <path d="M34 62C40 74 60 74 66 62" stroke="#A16207" stroke-width="4" stroke-linecap="round"/>
        </svg>
      `;
    }

    container.className = `test-sticker-card ${tierClass}`;
    container.innerHTML = `
      <div class="sticker-graphic-wrap" style="width: 80px; height: 80px;">
        ${stickerSvg}
      </div>
      <h3 class="sticker-badge-title" style="font-size: 1.25rem;">${title}</h3>
      <p class="sticker-advice-text">${advice}</p>
    `;
  }

  function renderJourneyChart() {
    const rawPre = SafeTeenApp.getPreTestScore();
    const preScore = rawPre ? parseInt(rawPre, 10) : 0;
    const prePercent = Math.round((preScore / 20) * 100);
    const quizPercent = Math.round((earnedScore / 50) * 100);

    elements.chartPreScore.textContent = `${preScore} / 20 (${prePercent}%)`;
    elements.chartQuizScore.textContent = `${earnedScore} / 50 (${quizPercent}%)`;

    // Animate bars
    setTimeout(() => {
      elements.chartPreBar.style.width = `${prePercent}%`;
      elements.chartQuizBar.style.width = `${quizPercent}%`;
    }, 200);

    if (quizPercent >= prePercent) {
      elements.chartFeedbackText.textContent = "Kết quả giúp bạn nhìn lại những kiến thức mình đã cải thiện rõ rệt sau quá trình tìm hiểu các chủ đề và rèn luyện tình huống.";
    } else {
      elements.chartFeedbackText.textContent = "Kết quả giúp bạn nhận diện những nội dung cần đọc lại kỹ hơn trong Sổ tay kiến thức.";
    }
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  QuizController.init();
});
