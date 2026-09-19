/**
 * SAFETEEN - Pre-test Question Engine
 * 20 Comprehensive, empathetic baseline assessment questions
 */

const PRETEST_QUESTIONS = [
  {
    id: 1,
    topic: "Khái niệm ranh giới cá nhân",
    question: "Khái niệm 'Ranh giới cá nhân' được hiểu chính xác nhất là gì?",
    options: [
      "Khoảng cách vật lý tối thiểu khi giao tiếp với người lạ ngoài xã hội.",
      "Các giới hạn vô hình do mỗi cá nhân thiết lập để bảo vệ không gian thể chất, cảm xúc và tinh thần của mình khỏi sự xâm phạm.",
      "Quy định nội quy của nhà trường về hành vi ứng xử giữa các học sinh.",
      "Rào cản tâm lý khiến học sinh không muốn giao tiếp với bạn bè cùng trang lứa."
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    topic: "Ranh giới thể chất",
    question: "Ranh giới thể chất bao gồm những yếu tố nào sau đây?",
    options: [
      "Không gian cá nhân xung quanh cơ thể và quyền quyết định ai được chạm vào cơ thể mình.",
      "Quyền giữ kín mật khẩu tài khoản mạng xã hội cá nhân.",
      "Cảm xúc và tâm trạng cá nhân khi bị người khác phán xét.",
      "Quan điểm sống và định hướng nghề nghiệp trong tương lai."
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    topic: "Ranh giới cảm xúc",
    question: "Đâu là biểu hiện của việc vi phạm 'Ranh giới cảm xúc' trong môi trường học đường?",
    options: [
      "Mượn bút của bạn mà không xin phép trước.",
      "Đứng quá gần bàn học khi trò chuyện.",
      "Liên tục ép buộc bạn bè phải chia sẻ bí mật riêng tư hoặc dùng lời lẽ thao túng tâm lý (gaslighting) khiến bạn cảm thấy có lỗi.",
      "Nhắn tin hỏi bài tập về nhà vào buổi tối muộn."
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    topic: "Ranh giới kỹ thuật số",
    question: "Trong thời đại số, 'Ranh giới kỹ thuật số' liên quan trực tiếp đến vấn đề nào?",
    options: [
      "Thời gian sử dụng điện thoại thông minh để chơi game mỗi ngày.",
      "Quyền kiểm soát hình ảnh cá nhân, thông tin riêng tư và quyền từ chối phản hồi tin nhắn quấy rối trên không gian mạng.",
      "Tốc độ đường truyền internet khi học tập trực tuyến.",
      "Việc lựa chọn dòng điện thoại di động phù hợp với học sinh."
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    topic: "Dấu hiệu cảnh báo (Red Flags)",
    question: "Dấu hiệu cảnh báo sớm cho thấy một mối quan hệ bạn bè hoặc tình cảm tuổi học trò bắt đầu có nguy cơ vượt quá ranh giới an toàn là gì?",
    options: [
      "Tôn trọng không gian riêng và sở thích cá nhân của nhau.",
      "Có sự ghen tuông cực đoan, kiểm soát tin nhắn, ép buộc người khác phải báo cáo lịch trình 24/7.",
      "Lắng nghe và chia sẻ những khó khăn trong học tập.",
      "Cùng tham gia các hoạt động ngoại khóa của trường."
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    topic: "Xâm phạm ranh giới thể chất",
    question: "Hành vi nào sau đây được coi là xâm phạm ranh giới thể chất nhưng ít được học sinh chú ý phòng tránh?",
    options: [
      "Cố ý đụng chạm cơ thể (ôm, ghì, vỗ mông, sờ soạng) dù nạn nhân đã tỏ thái độ khó chịu hoặc nói 'không'.",
      "Đá bóng vô tình trúng người khác trong giờ thể dục.",
      "Bắt tay xã giao khi gặp thầy cô giáo cũ.",
      "Đứng xếp hàng mua đồ ăn tại căn tin trường."
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    topic: "Tôn trọng nhân phẩm & cảm xúc",
    question: "Hiện tượng 'Body Shaming' trên lớp học hoặc mạng xã hội vi phạm loại ranh giới nào của cá nhân?",
    options: [
      "Ranh giới tài chính.",
      "Ranh giới cảm xúc và nhân phẩm cá nhân.",
      "Ranh giới thời gian.",
      "Ranh giới học thuật."
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    topic: "Kỹ năng phản ứng kiên quyết",
    question: "Khi một người bạn có hành vi đùa cợt quá trớn, chạm vào vùng nhạy cảm trên cơ thể khiến bạn cảm thấy bất an, phản ứng ĐÚNG ĐẮN và kiên quyết nhất là gì?",
    options: [
      "Giữ im lặng và nín nhịn vì sợ mất lòng bạn bè.",
      "Lập tức bày tỏ thái độ nghiêm túc, nói rõ ràng 'Tôi không thích điều này, hãy dừng lại ngay', đồng thời rời khỏi vị trí đó.",
      "Đánh trả bằng bạo lực ngay lập tức tại chỗ.",
      "Đăng tải bức xúc lên mạng xã hội chửi bới."
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    topic: "Thiết lập ranh giới cá nhân",
    question: "Đâu là biểu hiện của việc thiếu kỹ năng thiết lập ranh giới ở học sinh THPT?",
    options: [
      "Biết từ chối khéo léo khi được nhờ vả những việc trái với nguyên tắc đạo đức.",
      "Luôn cảm thấy áy náy, sợ hãi khi nói 'Không' ngay cả khi bản thân bị ép buộc hoặc đối xử bất công.",
      "Chủ động bảo vệ thông tin cá nhân trên mạng xã hội.",
      "Biết tìm kiếm sự giúp đỡ từ người lớn khi gặp nguy hiểm."
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    topic: "Quấy rối trên không gian mạng",
    question: "Hình thức quấy rối qua mạng nào phổ biến và gây tổn thương tâm lý nặng nề nhất cho học sinh THPT?",
    options: [
      "Nhắn tin chúc ngủ ngon mỗi tối.",
      "Lập hội nhóm bôi nhọ, tung tin đồn giả mạo, hoặc phát tán hình ảnh nhạy cảm/clip cá nhân không được sự đồng thuận.",
      "Gửi email thông báo lịch học nhóm.",
      "Kết bạn trên mạng xã hội nhưng không tương tác."
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    topic: "Ứng phó nguy cơ vượt giới hạn",
    question: "Trong tình huống bị người quen (đàn anh khóa trên, giáo viên, hoặc người đáng tin cậy) có hành vi dụ dỗ, tiếp cận vượt quá giới hạn an toàn, học sinh nên thực hiện bước đầu tiên nào?",
    options: [
      "Giữ kín vì sợ bị đe dọa hoặc ảnh hưởng đến danh tiếng.",
      "Ngay lập tức từ chối mạnh mẽ, lưu giữ lại bằng chứng (tin nhắn, ghi âm nếu có) và chia sẻ ngay với phụ huynh hoặc người có thẩm quyền.",
      "Tự mình hẹn gặp riêng người đó để giải quyết dứt điểm.",
      "Nghỉ học ở nhà để tránh mặt."
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    topic: "Rào cản tâm lý khi tìm trợ giúp",
    question: "Tại sao nhiều học sinh THPT thường ngần ngại, không dám lên tiếng hoặc tìm kiếm sự trợ giúp khi bị xâm phạm ranh giới cá nhân?",
    options: [
      "Do tâm lý sợ bị phán xét, sợ bị mang tiếng, thiếu sự tin tưởng vào người lớn hoặc sợ bố mẹ mắng mỏ.",
      "Do các em quá bận rộn với việc học văn hóa.",
      "Do nhà trường không có quy định nào về vấn đề này.",
      "Do các em thích thú với trải nghiệm đó."
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    topic: "Giao tiếp quyết đoán (Assertiveness)",
    question: "Kỹ năng giao tiếp quyết đoán giúp học sinh bảo vệ ranh giới cá nhân như thế nào?",
    options: [
      "Giúp học sinh áp đặt suy nghĩ của mình lên người khác.",
      "Giúp học sinh bày tỏ suy nghĩ, cảm xúc và từ chối điều không muốn một cách rõ ràng, tôn trọng bản thân nhưng không dùng bạo lực.",
      "Giúp học sinh luôn nhượng bộ để giữ hòa khí.",
      "Giúp học sinh nói dối khéo léo để tránh né vấn đề."
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    topic: "An toàn không gian mạng",
    question: "Biện pháp phòng ngừa rủi ro từ không gian mạng hiệu quả nhất đối với học sinh THPT là gì?",
    options: [
      "Khóa toàn bộ tài khoản mạng xã hội, không bao giờ truy cập internet.",
      "Cài đặt chế độ riêng tư tài khoản, không chia sẻ hình ảnh quá nhạy cảm/vị trí thời gian thực, và cảnh giác với người lạ trên mạng.",
      "Chấp nhận kết bạn và chia sẻ mật khẩu với tất cả mọi người.",
      "Sử dụng tài khoản ảo để lăng mạ người khác."
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    topic: "Đồng hành & Hỗ trợ bạn bè",
    question: "Khi phát hiện bạn bè cùng lớp có dấu hiệu bị xâm phạm tâm lý hoặc bạo lực học đường dẫn đến trầm cảm, rụt rè, giải pháp hỗ trợ nào từ phía tập thể lớp là phù hợp nhất?",
    options: [
      "Hùa theo số đông để trêu chọc bạn.",
      "Lờ đi vì không phải chuyện của mình.",
      "Chủ động hỏi thăm, đồng hành, tạo không gian an toàn và báo cáo cho giáo viên chủ nhiệm hoặc phòng tư vấn tâm lý học đường.",
      "Khuyên bạn tự chịu đựng để mạnh mẽ hơn."
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    topic: "Vai trò tư vấn học đường",
    question: "Vai trò của 'Phòng Tư vấn tâm lý học đường' trong việc hỗ trợ học sinh xây dựng ranh giới cá nhân là gì?",
    options: [
      "Kỷ luật và đuổi học những học sinh vi phạm.",
      "Cung cấp không gian bảo mật, lắng nghe, đánh giá mức độ tổn thương và huấn luyện kỹ năng ứng phó, chữa lành tâm lý cho học sinh.",
      "Quản lý điểm số và hạnh kiểm của học sinh.",
      "Tổ chức các trận thi đấu thể thao ngoại khóa."
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    topic: "Mô hình xử lý khẩn cấp",
    question: "Đâu KHÔNG phải là một bước trong mô hình xử lý tình huống khẩn cấp khi bị xâm phạm ranh giới?",
    options: [
      "Stop (Dừng lại, không tiếp tục dung túng hành vi).",
      "Tell (Kể lại, báo cáo với người có thẩm quyền/tin cậy).",
      "Obey (Tuân theo và làm mọi thứ theo yêu cầu của kẻ xâm phạm để được yên thân).",
      "Protect (Bảo vệ bản thân, thu thập bằng chứng)."
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    topic: "Giải pháp xây dựng học đường an toàn",
    question: "Để xây dựng một môi trường học đường an toàn, lành mạnh, giải pháp mang tính vĩ mô và bền vững nhất từ nhà trường là gì?",
    options: [
      "Lắp camera giám sát ở mọi ngóc ngách kể cả nhà vệ sinh.",
      "Xây dựng bộ quy tắc ứng xử học đường rõ ràng, đưa giáo dục giới tính, kỹ năng sống và phòng chống xâm phạm vào chương trình chính khóa/ngoại khóa.",
      "Cấm học sinh mang điện thoại đến trường.",
      "Phạt nặng tất cả học sinh vi phạm kỷ luật mà không cần điều tra nguyên nhân."
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    topic: "Trách nhiệm tôn trọng người khác",
    question: "Phát biểu nào sau đây là ĐÚNG về trách nhiệm của học sinh trong việc tôn trọng ranh giới cá nhân của người khác?",
    options: [
      "Ranh giới cá nhân chỉ áp dụng cho con gái, con trai không cần quan tâm.",
      "Tôn trọng ranh giới của người khác cũng chính là bảo vệ ranh giới và phẩm giá của chính mình; không được đùa cợt quá giới hạn hay ép buộc người khác.",
      "Chỉ cần tôn trọng thầy cô giáo, còn bạn bè thì muốn đùa thế nào cũng được.",
      "Có quyền xâm phạm không gian của người khác nếu đó chỉ là bạn thân thiết."
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    topic: "Ranh giới vật chất & tài chính",
    question: "Khi một người bạn mượn tiền (hoặc đồ vật giá trị) nhiều lần nhưng liên tục kì kèo, trốn tránh việc trả lại, điều này vi phạm loại ranh giới nào?",
    options: [
      "Ranh giới vật chất và tài chính cá nhân.",
      "Ranh giới cảm xúc thuần túy.",
      "Ranh giới học thuật.",
      "Ranh giới không gian mạng."
    ],
    correctAnswer: 0
  }
];

// Controller
const PreTestController = (() => {
  let currentIndex = 0;
  const userAnswers = new Array(PRETEST_QUESTIONS.length).fill(null);

  const elements = {
    testView: null,
    completionView: null,
    counterText: null,
    progressBar: null,
    topicText: null,
    questionText: null,
    optionsContainer: null,
    btnBack: null,
    btnNext: null,
    finalScoreEl: null
  };

  function init() {
    elements.testView = document.getElementById('preTestActiveView');
    elements.completionView = document.getElementById('preTestCompletionView');
    elements.counterText = document.getElementById('preTestCounter');
    elements.progressBar = document.getElementById('preTestProgressFill');
    elements.topicText = document.getElementById('preTestTopic');
    elements.questionText = document.getElementById('preTestQuestion');
    elements.optionsContainer = document.getElementById('preTestOptions');
    elements.btnBack = document.getElementById('btnPreTestBack');
    elements.btnNext = document.getElementById('btnPreTestNext');
    elements.finalScoreEl = document.getElementById('preTestFinalScore');

    // Check if already completed
    if (SafeTeenApp.isPreTestCompleted()) {
      const savedScore = SafeTeenApp.getPreTestScore();
      showCompletionView(savedScore || '0');
      return;
    }

    setupEventListeners();
    renderQuestion(0);
  }

  function setupEventListeners() {
    elements.btnBack.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderQuestion(currentIndex);
      }
    });

    elements.btnNext.addEventListener('click', () => {
      if (userAnswers[currentIndex] === null) {
        SafeTeenApp.showNotification('Vui lòng chọn một đáp án trước khi tiếp tục.');
        return;
      }

      if (currentIndex < PRETEST_QUESTIONS.length - 1) {
        currentIndex++;
        renderQuestion(currentIndex);
      } else {
        finishTest();
      }
    });
  }

  function renderQuestion(index) {
    const q = PRETEST_QUESTIONS[index];
    const total = PRETEST_QUESTIONS.length;

    // Header counter and progress
    const displayIndex = (index + 1).toString().padStart(2, '0');
    const displayTotal = total.toString().padStart(2, '0');
    elements.counterText.textContent = `Câu ${displayIndex} / ${displayTotal}`;
    
    const progressPercent = ((index + 1) / total) * 100;
    elements.progressBar.style.width = `${progressPercent}%`;

    // Question content
    elements.topicText.textContent = q.topic;
    elements.questionText.textContent = q.question;

    // Render options
    elements.optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      if (userAnswers[index] === optIdx) {
        btn.classList.add('selected');
      }

      btn.innerHTML = `
        <span class="option-letter">${letters[optIdx]}</span>
        <span>${optText}</span>
      `;

      btn.addEventListener('click', () => {
        userAnswers[index] = optIdx;
        // Update visual selection
        const allBtns = elements.optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        elements.btnNext.disabled = false;
      });

      elements.optionsContainer.appendChild(btn);
    });

    // Control buttons state
    elements.btnBack.disabled = (index === 0);
    elements.btnNext.textContent = (index === total - 1) ? 'Hoàn thành đánh giá →' : 'Tiếp tục →';
  }

  function finishTest() {
    let score = 0;
    userAnswers.forEach((ans, idx) => {
      if (ans === PRETEST_QUESTIONS[idx].correctAnswer) {
        score++;
      }
    });

    // Save to localStorage
    localStorage.setItem(SafeTeenApp.STORAGE_KEYS.PRE_TEST_COMPLETED, 'true');
    localStorage.setItem(SafeTeenApp.STORAGE_KEYS.PRE_TEST_SCORE, score.toString());
    localStorage.setItem(SafeTeenApp.STORAGE_KEYS.PRE_TEST_ANSWERS, JSON.stringify(userAnswers));

    showCompletionView(score);
  }

  function showCompletionView(score) {
    elements.testView.style.display = 'none';
    elements.completionView.style.display = 'block';
    elements.finalScoreEl.textContent = `${score} / 20`;

    // Render Dynamic Sticker
    renderResultSticker(score);

    // Update header badge
    const headerStatus = document.getElementById('headerUserStatus');
    if (headerStatus) {
      headerStatus.innerHTML = `<span class="badge-pill completed">Pre-test: ${score}/20</span>`;
    }
  }

  function renderResultSticker(score) {
    const container = document.getElementById('preTestStickerContainer');
    if (!container) return;

    let tierClass = '';
    let stickerSvg = '';
    let title = '';
    let advice = '';

    if (score <= 10) {
      // Bậc 1: 3 - 10 câu (Oops / Hừm, nhớ lại nào!)
      tierClass = 'sticker-tier-oops';
      title = 'Oops! Hừm, nhớ lại nào! 💡';
      advice = `Bạn đã trả lời đúng <strong>${score}/20 câu</strong>. Có vẻ một số tình huống ranh giới cá nhân và sự đồng thuận vẫn khiến bạn phân vân. Đừng quá lo lắng nhé, ai cũng cần thời gian học hỏi! Hãy cùng SafeTeen khám phá Sổ tay Kiến thức để trang bị cho mình những "chiếc khiên" an toàn nha!`;
      stickerSvg = `
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" fill="#FFEDD5" stroke="#F97316" stroke-width="4"/>
          <!-- Confused / Thinking Face -->
          <circle cx="36" cy="42" r="5" fill="#C2410C"/>
          <circle cx="64" cy="42" r="5" fill="#C2410C"/>
          <!-- Question mark / brow -->
          <path d="M30 34C32 30 40 31 42 34" stroke="#C2410C" stroke-width="3" stroke-linecap="round"/>
          <path d="M58 34C60 38 68 37 70 34" stroke="#C2410C" stroke-width="3" stroke-linecap="round"/>
          <!-- Wavy mouth -->
          <path d="M38 64C42 60 48 68 54 62C58 58 62 62 64 64" stroke="#C2410C" stroke-width="3.5" stroke-linecap="round"/>
          <!-- Lightbulb idea -->
          <path d="M50 12C45 12 41 16 41 21C41 24 43 26 45 28V30H55V28C57 26 59 24 59 21C59 16 55 12 50 12Z" fill="#FBBF24" stroke="#D97706" stroke-width="2"/>
        </svg>
      `;
    } else if (score <= 15) {
      // Bậc 2: 11 - 15 câu (Không sao đâu, bạn đã làm rất tốt!)
      tierClass = 'sticker-tier-good';
      title = 'Không sao đâu, bạn đã làm rất tốt rồi! 🌱';
      advice = `Bạn đã trả lời đúng <strong>${score}/20 câu</strong>. Bạn đã nắm rất vững những nguyên tắc cốt lõi về sự tự nguyện và ranh giới cá nhân! Chỉ cần rèn luyện thêm kỹ năng giao tiếp quyết đoán và xử lý tình huống trên mạng xã hội là bạn sẽ hoàn toàn làm chủ mọi ranh giới!`;
      stickerSvg = `
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" fill="#DCFCE7" stroke="#22C55E" stroke-width="4"/>
          <!-- Cheerful friendly Face -->
          <path d="M32 44C32 40 40 40 40 44" stroke="#15803D" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M60 44C60 40 68 40 68 44" stroke="#15803D" stroke-width="3.5" stroke-linecap="round"/>
          <!-- Warm Smile -->
          <path d="M36 58C42 68 58 68 64 58" stroke="#15803D" stroke-width="4" stroke-linecap="round"/>
          <!-- Sprouting plant on head -->
          <path d="M50 28V18" stroke="#16A34A" stroke-width="3" stroke-linecap="round"/>
          <path d="M50 18C50 14 43 14 43 18C43 21 50 21 50 18Z" fill="#4ADE80" stroke="#16A34A" stroke-width="2"/>
          <path d="M50 21C50 17 57 17 57 21C57 24 50 24 50 21Z" fill="#4ADE80" stroke="#16A34A" stroke-width="2"/>
        </svg>
      `;
    } else {
      // Bậc 3: 16 - 20 câu (Tuyệt! Xuất sắc!)
      tierClass = 'sticker-tier-excellent';
      title = 'Tuyệt! Xuất sắc! Bạn đã làm chủ ranh giới! 🌟👑';
      advice = `Thành tích vượt trội với <strong>${score}/20 câu đúng</strong>! Bạn sở hữu nhận thức cực kỳ nhạy bén về quyền thân thể, sự đồng thuận và an toàn không gian mạng. Bạn không chỉ biết bảo vệ chính mình mà còn có thể trở thành người hỗ trợ đáng tin cậy cho bạn bè xung quanh!`;
      stickerSvg = `
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" fill="#FEF08A" stroke="#EAB308" stroke-width="4"/>
          <!-- Crown on top -->
          <path d="M30 28L36 38L50 24L64 38L70 28V42H30V28Z" fill="#FACC15" stroke="#CA8A04" stroke-width="2.5" stroke-linejoin="round"/>
          <!-- Star eyes -->
          <path d="M36 50L38 45L40 50L45 52L40 54L38 59L36 54L31 52L36 50Z" fill="#A16207"/>
          <path d="M64 50L66 45L68 50L73 52L68 54L66 59L64 54L59 52L64 50Z" fill="#A16207"/>
          <!-- Big happy grin -->
          <path d="M34 62C40 74 60 74 66 62" stroke="#A16207" stroke-width="4" stroke-linecap="round"/>
          <!-- Sparkling sparkles -->
          <circle cx="22" cy="30" r="3" fill="#EAB308"/>
          <circle cx="78" cy="30" r="3" fill="#EAB308"/>
        </svg>
      `;

      // Trigger Celebration Confetti
      launchConfetti();
    }

    container.className = `test-sticker-card ${tierClass}`;
    container.innerHTML = `
      <div class="sticker-graphic-wrap">
        ${stickerSvg}
      </div>
      <h3 class="sticker-badge-title">${title}</h3>
      <p class="sticker-advice-text">${advice}</p>
    `;

    // Hook retake button if present
    const retakeBtn = document.getElementById('btnRetakePreTest');
    if (retakeBtn) {
      retakeBtn.addEventListener('click', () => {
        localStorage.removeItem(SafeTeenApp.STORAGE_KEYS.PRE_TEST_COMPLETED);
        localStorage.removeItem(SafeTeenApp.STORAGE_KEYS.PRE_TEST_SCORE);
        localStorage.removeItem(SafeTeenApp.STORAGE_KEYS.PRE_TEST_ANSWERS);
        window.location.reload();
      });
    }
  }

  // Lightweight Confetti Cannon Canvas
  function launchConfetti() {
    let canvas = document.getElementById('confettiCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'confettiCanvas';
      canvas.className = 'confetti-canvas';
      document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
    const particles = [];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.8) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 12,
        opacity: 1
      });
    }

    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4; // gravity
        p.vx *= 0.98;
        p.rotation += p.rSpeed;
        p.opacity -= 0.009;

        if (p.opacity > 0) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }
      });

      frame++;
      if (frame < 120) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    animate();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  PreTestController.init();
});
