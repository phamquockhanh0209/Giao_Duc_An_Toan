const PRETEST_QUESTIONS = [
  {
    id: 1,
    topic: "Ranh giới cá nhân",
    question: "Bạn thân cầm điện thoại của bạn và hỏi: “Cho mình xem đoạn chat với người kia được không?” Bạn không muốn cho xem, nhưng cũng không muốn làm bạn khó xử. Bạn sẽ:",
    options: [
      "Nói rằng bạn hơi ngại chia sẻ đoạn chat này, nhưng có thể kể lại nội dung nếu bạn ấy muốn biết.",
      "Nói rằng bạn không muốn cho xem, sau đó giải thích thêm vì sao bạn cần giữ riêng cuộc trò chuyện.",
      "Nói rằng bạn tin bạn ấy nhưng vẫn muốn tự quyết định những nội dung nào mình chia sẻ.",
      "Nói rằng đoạn chat này thuộc về cuộc trò chuyện riêng nên bạn không tiện cho người khác xem."
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    topic: "Ranh giới thể chất",
    question: "Một người bạn ôm bạn khi gặp mặt. Bạn không thích nhưng không nói gì. Một tuần sau, bạn ấy lại làm vậy. Bạn muốn thay đổi tình huống.",
    options: [
      "Nói rằng lần trước bạn không phản ứng vì chưa biết nên nói thế nào, nhưng lần sau bạn muốn được hỏi trước.",
      "Nói rằng bạn không thích việc đó, dù trước đây bạn đã từng im lặng trong tình huống tương tự.",
      "Nói rằng từ bây giờ bạn không muốn bị ôm nếu bạn chưa chủ động thể hiện mong muốn.",
      "Nói rằng bạn hơi không thoải mái với việc đó và mong bạn ấy để ý phản ứng của bạn hơn."
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    topic: "Ranh giới kỹ thuật số",
    question: "Một người nói: “Nếu bạn không cho mình biết mật khẩu thì mình sẽ nghĩ bạn không tin mình.” Bạn không muốn chia sẻ.",
    options: [
      "Nói rằng bạn tin người đó nhưng không muốn dùng mật khẩu để chứng minh điều đó.",
      "Nói rằng mật khẩu là thông tin riêng và bạn không chia sẻ cho người khác.",
      "Nói rằng sự tin tưởng giữa hai người không nên được quyết định bằng việc có biết mật khẩu hay không.",
      "Nói rằng bạn hiểu cảm giác của người đó nhưng vẫn muốn giữ mật khẩu cho riêng mình."
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    topic: "Ranh giới vật chất",
    question: "Bạn đã đồng ý cho bạn mượn một món đồ vào ngày mai. Tối nay bạn phát hiện mình cần dùng món đồ đó. Bạn nên:",
    options: [
      "Báo sớm rằng bạn không thể cho mượn như đã dự định và chấp nhận việc người kia có thể thất vọng.",
      "Hỏi xem người kia có thực sự cần món đồ đó ngày mai không rồi mới quyết định.",
      "Tìm một món đồ khác thay thế nếu việc thay đổi quyết định có thể gây bất tiện cho người kia.",
      "Giữ lời hứa ban đầu nếu chưa có lý do đặc biệt khiến việc cho mượn trở nên không thể."
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    topic: "Bảo mật thông tin",
    question: "Một người bạn kể cho bạn một chuyện riêng tư và nói: “Đừng kể ai nhé.” Sau đó bạn nhận thấy chuyện này khiến bạn lo lắng cho sự an toàn của bạn ấy. Bạn sẽ:",
    options: [
      "Giữ kín vì người đó đã trực tiếp yêu cầu bạn không nói.",
      "Hỏi bạn ấy xem bạn có thể chia sẻ với một người đáng tin cậy để tìm cách hỗ trợ hay không.",
      "Tìm một người đáng tin cậy để trao đổi mà không cần nói lại toàn bộ câu chuyện.",
      "Tôn trọng mong muốn giữ bí mật trước, trừ khi xuất hiện thêm dấu hiệu cho thấy cần tìm sự hỗ trợ."
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    topic: "Ranh giới kỹ thuật số",
    question: "Bạn đăng một bức ảnh lên mạng và sau đó đổi ý, không muốn bức ảnh tiếp tục được chia sẻ. Bạn nên:",
    options: [
      "Xóa bài đăng và đề nghị những người đã chia sẻ ảnh không tiếp tục đăng lại.",
      "Xóa bài đăng vì quyền quyết định hình ảnh cá nhân vẫn thuộc về bạn.",
      "Nhắn những người đã chia sẻ rằng bạn không còn muốn bức ảnh được sử dụng.",
      "Xóa bài và chấp nhận rằng những bản sao đã được người khác lưu lại có thể không còn nằm trong kiểm soát của bạn."
    ],
    correctAnswer: 3
  },
  {
    id: 7,
    topic: "Ranh giới cá nhân",
    question: "Một người bạn thường xuyên nhắn: “Bạn đang làm gì?”, “Ở đâu?”, “Với ai?”. Bạn đã trả lời nhiều lần nhưng bắt đầu thấy không thoải mái.",
    options: [
      "Nói rằng bạn không muốn trả lời những câu hỏi này thường xuyên, nhưng vẫn có thể chia sẻ khi bạn chủ động muốn.",
      "Nói rằng bạn thấy hơi áp lực khi phải cập nhật thường xuyên và muốn giảm những câu hỏi như vậy.",
      "Nói rằng bạn không muốn chia sẻ lịch trình cá nhân, kể cả khi người hỏi là bạn thân.",
      "Giảm trả lời các câu hỏi đó để tạo khoảng cách mà không cần phải nói trực tiếp."
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    topic: "Kỹ năng phản ứng kiên quyết",
    question: "Một người nói: “Mình chỉ đùa thôi, bạn làm gì căng vậy?” Bạn không chắc họ có cố tình làm bạn khó chịu hay không.",
    options: [
      "Bỏ qua nếu người đó không có ý định làm bạn khó chịu.",
      "Nói rằng bạn hiểu họ có thể chỉ đang đùa, nhưng bạn vẫn không muốn kiểu đùa đó tiếp tục.",
      "Hỏi người đó có thực sự muốn làm bạn khó chịu không trước khi phản ứng.",
      "Chờ xem người đó có lặp lại hành vi rồi mới xác định mình có nên đặt giới hạn."
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    topic: "Từ chối",
    question: "Bạn từ chối một lời đề nghị. Người kia nói: “Mình hiểu, nhưng bạn có thể suy nghĩ lại không?” Bạn vẫn không muốn.",
    options: [
      "Nhắc lại rằng bạn đã cân nhắc và hiện tại vẫn không muốn đồng ý.",
      "Giải thích thêm lý do để người kia hiểu quyết định của bạn rõ hơn.",
      "Nói rằng bạn hiểu mong muốn của người kia nhưng quyết định của bạn vẫn không thay đổi.",
      "Đề nghị một lựa chọn khác để người kia không cảm thấy bị từ chối hoàn toàn."
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    topic: "Thiết lập ranh giới",
    question: "Một người trước đây luôn tôn trọng ranh giới của bạn. Hôm nay họ làm một việc bạn không thích nhưng có vẻ không biết bạn không thích điều đó.",
    options: [
      "Nhắc lại ranh giới để người đó biết cách cư xử phù hợp trong những lần sau.",
      "Không nên trách người đó vì họ chưa từng được bạn nói rõ về điều này.",
      "Nói rằng bạn không thoải mái với hành động đó và muốn họ hỏi trước trong tương lai.",
      "Xem đây là một lần hiểu nhầm và chỉ nói nếu hành động đó tiếp tục."
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    topic: "Kỹ năng phản ứng kiên quyết",
    question: "Bạn nói “Không” nhưng người kia vẫn tiếp tục thuyết phục. Bạn không muốn tranh cãi.",
    options: [
      "Lặp lại quyết định bằng một câu ngắn rồi kết thúc cuộc trao đổi.",
      "Giải thích thêm để người kia hiểu tại sao bạn không thể đồng ý.",
      "Đưa ra một phương án thay thế để cả hai cùng cảm thấy dễ chịu hơn.",
      "Tạm thời đồng ý rồi sau đó nói rõ rằng bạn thực sự không muốn."
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    topic: "Áp lực từ bạn bè",
    question: "Một người bạn nói: “Nếu cậu thực sự coi tớ là bạn thì cậu sẽ làm việc này.” Bạn không muốn làm.",
    options: [
      "Nói rằng bạn hiểu việc đó quan trọng với bạn ấy nhưng mình vẫn không muốn thực hiện.",
      "Hỏi xem việc đó quan trọng đến mức nào trước khi quyết định có từ chối hay không.",
      "Từ chối nếu yêu cầu vượt quá điều bạn cảm thấy thoải mái, dù người đó có thể buồn.",
      "Nói rằng tình bạn không nên được dùng để gây áp lực cho quyết định của nhau."
    ],
    correctAnswer: 3
  },
  {
    id: 13,
    topic: "Sự đồng thuận",
    question: "Bạn đã từng đồng ý cho một người chạm vào vai mình khi chụp ảnh. Lần sau người đó muốn tiếp tục làm vậy. Bạn không muốn nữa.",
    options: [
      "Bạn nên nói trước khi chụp rằng lần này bạn không muốn hành động đó.",
      "Bạn có thể từ chối vì sự đồng ý trong lần trước không quyết định cho lần này.",
      "Bạn nên giải thích rằng lần trước bạn đồng ý nhưng hiện tại cảm thấy khác.",
      "Bạn có thể đồng ý nếu hành động lần này vẫn giống hoàn cảnh lần trước."
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    topic: "Ranh giới kỹ thuật số",
    question: "Bạn không muốn chia sẻ vị trí hiện tại với một người bạn. Người đó nói: “Tớ chỉ muốn biết cậu đang ở đâu để yên tâm thôi.”",
    options: [
      "Chia sẻ vị trí trong một khoảng thời gian ngắn rồi tắt lại sau đó.",
      "Nói rằng bạn hiểu lý do của bạn ấy nhưng hiện tại không muốn chia sẻ vị trí.",
      "Hỏi xem bạn ấy lo lắng điều gì rồi quyết định có chia sẻ hay không.",
      "Chia sẻ nếu người đó đã từng biết vị trí của bạn trong những lần trước."
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    topic: "Khái niệm ranh giới cá nhân",
    question: "Phát biểu nào gần đúng nhất?",
    options: [
      "Đặt ranh giới nghĩa là nói rõ điều mình muốn người khác làm hoặc không làm.",
      "Đặt ranh giới nghĩa là bảo vệ điều khiến mình cảm thấy thoải mái trong một mối quan hệ.",
      "Đặt ranh giới nghĩa là xác định điều mình chấp nhận và lựa chọn cách mình phản ứng khi giới hạn đó bị vượt qua.",
      "Đặt ranh giới nghĩa là giúp người khác hiểu những điều họ cần tránh khi tương tác với mình."
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    topic: "Sự đồng thuận",
    question: "Một người nói: “Cậu không nói không nên tớ nghĩ là cậu đồng ý.” Điều nào chính xác nhất?",
    options: [
      "Nếu tình huống không khiến bạn phản ứng thì người kia có thể hiểu theo cách đó.",
      "Nếu bạn đã từng đồng ý với hành động tương tự thì sự im lặng lần này có thể được hiểu là tiếp tục đồng ý.",
      "Nếu bạn không phản đối tại thời điểm đó thì sau này vẫn có thể nói rằng mình không thoải mái.",
      "Nếu hai người đã quen nhau lâu thì việc im lặng có thể được hiểu khác với người mới quen."
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    topic: "Bí mật cá nhân",
    question: "Bạn muốn giữ một bí mật cá nhân. Một người bạn nói rằng họ cảm thấy bị xa cách vì bạn không kể. Điều nào phù hợp nhất?",
    options: [
      "Chia sẻ một phần để duy trì sự gần gũi nhưng vẫn giữ lại những nội dung nhạy cảm.",
      "Nói rằng bạn quý mối quan hệ nhưng vẫn muốn giữ một số chuyện thuộc về riêng mình.",
      "Giải thích rằng sự thân thiết không nhất thiết yêu cầu hai người phải biết mọi chuyện của nhau.",
      "Giữ nguyên quyết định và tránh tiếp tục chủ đề này để không tạo thêm áp lực."
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    topic: "Kỹ năng từ chối",
    question: "Một người bạn liên tục đề nghị bạn làm một việc. Bạn đã từ chối hai lần nhưng họ vẫn nói: “Chỉ lần này thôi.” Bạn bắt đầu thấy khó xử.",
    options: [
      "Nói lại quyết định của mình và không tiếp tục tranh luận về việc có đồng ý hay không.",
      "Giải thích thêm lý do để người đó hiểu rằng bạn không từ chối vì không quan tâm.",
      "Đề nghị một cách khác để giúp người đó nhưng không thực hiện điều bạn đã từ chối.",
      "Nói rằng bạn không muốn làm nhưng có thể cân nhắc nếu tình huống được thay đổi."
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    topic: "Ranh giới thông tin",
    question: "Một người luôn đối xử tốt với bạn nhưng có một lần hỏi bạn một thông tin mà bạn không muốn chia sẻ. Điều nào phù hợp nhất?",
    options: [
      "Có thể chia sẻ vì trước đây người đó đã cho thấy họ đáng tin cậy.",
      "Có thể từ chối vì mức độ tin tưởng không quyết định hoàn toàn việc mình phải chia sẻ.",
      "Nên giải thích lý do từ chối để người đó không hiểu rằng mình đang nghi ngờ họ.",
      "Có thể chia sẻ một phần nếu thông tin đó không gây ảnh hưởng quá lớn đến mình."
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    topic: "Cách tiếp cận ranh giới cá nhân",
    question: "Trong các tình huống liên quan đến ranh giới cá nhân, lựa chọn nào thể hiện cách tiếp cận phù hợp nhất?",
    options: [
      "Ưu tiên cảm xúc của mình nhưng vẫn cân nhắc hoàn cảnh và phản ứng của người khác.",
      "Xác định điều mình chấp nhận, trao đổi rõ ràng và lựa chọn cách xử lý phù hợp nếu ranh giới không được tôn trọng.",
      "Nói rõ điều mình không thích và giữ nguyên quyết định bất kể hoàn cảnh thay đổi thế nào.",
      "Cân bằng nhu cầu của mình với mong muốn của người khác trước khi quyết định có nên đặt ranh giới."
    ],
    correctAnswer: 1
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