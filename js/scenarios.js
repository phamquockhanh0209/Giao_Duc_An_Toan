/**
 * SAFETEEN - Interactive Scenarios Engine
 * 9 Realistic school & online scenarios with in-depth "Vì sao?" explanations and skill tags
 * Bố cục xen kẽ: 1 tình huống bên trái ảnh bên phải, xuống dưới thì ngược lại (ảnh trái tình huống phải)
 */

const SCENARIOS_DATA = [
  {
    id: 1,
    title: "Tình huống 1 – Bạn tự ý lấy điện thoại",
    image: "assets/images/anh1.jpg",
    context: "Trong giờ ra chơi, A để điện thoại trên bàn học. Một người bạn cùng bàn cầm điện thoại của A lên và định mở ứng dụng tin nhắn riêng tư để xem. A lên tiếng: “Đừng xem điện thoại của mình nhé.” Người bạn cười xòa trả lời: “Gớm, bạn bè thân với nhau thì có gì phải giấu giếm đâu mà sợ!”",
    question: "A nên xử lý tình huống này như thế nào để vừa an toàn vừa bảo vệ được ranh giới của mình?",
    options: [
      {
        letter: "A",
        text: "Thôi đành để bạn xem vì sợ nếu từ chối gay gắt sẽ bị nói là kiêu căng và mất tình bạn.",
        isOptimal: false,
        feedback: "Nhượng bộ ranh giới riêng tư vì sợ mất lòng bạn bè sẽ tạo tiền lệ để người khác tiếp tục xâm phạm các không gian cá nhân của bạn trong tương lai."
      },
      {
        letter: "B",
        text: "Bình tĩnh lấy lại điện thoại, giải thích rõ rằng điện thoại và tin nhắn là không gian riêng tư của mỗi người, và yêu cầu bạn tôn trọng điều đó.",
        isOptimal: true,
        feedback: "Đây là cách xử lý tối ưu: A khẳng định quyền bảo vệ sự riêng tư một cách bình tĩnh, rõ ràng và có chuẩn mực, không công kích cá nhân mà tập trung vào hành vi."
      },
      {
        letter: "C",
        text: "Giật phắt điện thoại lại và lớn tiếng chửi mắng người bạn trước mặt cả lớp.",
        isOptimal: false,
        feedback: "Phản ứng gay gắt bằng lời lẽ xúc phạm dễ đẩy mâu thuẫn leo thang thành ẩu đả hoặc cãi vã không cần thiết, làm lu mờ thông điệp bảo vệ ranh giới chính đáng của bạn."
      },
      {
        letter: "D",
        text: "Im lặng không nói gì nhưng sau đó lên mạng xã hội đăng bài ám chỉ nói xấu người bạn đó.",
        isOptimal: false,
        feedback: "Nói xấu sau lưng không giải quyết được vấn đề ranh giới mà còn có nguy cơ tạo ra xung đột bạo lực mạng và vi phạm chuẩn mực ứng xử."
      }
    ],
    whyExplanation: "A hoàn toàn có quyền bảo vệ quyền riêng tư cá nhân và yêu cầu người khác dừng hành vi xâm phạm. Một tình bạn lành mạnh được xây dựng trên sự tôn trọng ranh giới của nhau chứ không phải sự tò mò vô điều kiện. Việc nói rõ ràng và bình tĩnh giúp người bạn nhận thức được giới hạn mà không làm leo thang xung đột.",
    skills: ["Bảo vệ quyền riêng tư", "Giao tiếp ranh giới dứt khoát", "Kiểm soát cảm xúc bình tĩnh"]
  },
  {
    id: 2,
    title: "Tình huống 2 – Bị ép chụp ảnh và đăng lên mạng",
    image: "assets/images/anh2.jpg",
    context: "Trong một buổi sinh nhật ngoài quán nước, cả nhóm bạn chụp nhiều kiểu ảnh vui đùa, trong đó có một số khoảnh khắc bạn bị hớ hênh hoặc trông buồn cười. Bạn B cầm máy tuyên bố: “Ảnh này độc này, tí tớ up lên story Facebook rồi tag cả trường vào nhé!”. Bạn đã nói: “Đừng up ảnh đó, tớ thấy không thoải mái đâu.” Nhưng B đáp: “Đùa tí cho vui, mọi người ai cũng thấy buồn cười mà!”.",
    question: "Bạn nên làm gì trong tình huống này?",
    options: [
      {
        letter: "A",
        text: "Nói rõ một lần nữa một cách nghiêm túc: “Hình ảnh của tớ cần sự đồng ý của tớ. Nếu cậu coi trọng tớ thì hãy xóa tấm ảnh đó đi.”",
        isOptimal: true,
        feedback: "Chính xác. Nhấn mạnh vào nguyên tắc đồng thuận hình ảnh (Digital Consent) và gắn hành vi tôn trọng với giá trị của tình bạn."
      },
      {
        letter: "B",
        text: "Cười trừ và hy vọng rằng qua 24 giờ story biến mất thì sẽ không ai nhớ đến.",
        isOptimal: false,
        feedback: "Trên không gian mạng, ảnh có thể bị chụp màn hình lại và phát tán bất cứ lúc nào. Chịu đựng trong im lặng khiến bạn phải lo âu và đối mặt với rủi ro bị mang ra làm trò đùa lâu dài."
      },
      {
        letter: "C",
        text: "Lén chụp lại ảnh xấu của bạn B để dọa đăng lên trả đũa.",
        isOptimal: false,
        feedback: "Hành vi 'ăn miếng trả miếng' biến bạn thành người cũng có hành vi xâm phạm hình ảnh người khác, làm cho sự việc thêm rắc rối."
      },
      {
        letter: "D",
        text: "Tự trách bản thân vì đã tham gia buổi đi chơi đó.",
        isOptimal: false,
        feedback: "Bạn hoàn toàn không có lỗi khi tham gia hoạt động cùng bạn bè. Lỗi thuộc về người từ chối lắng nghe lời đề nghị tôn trọng hình ảnh của bạn."
      }
    ],
    whyExplanation: "Đồng ý chụp ảnh không đồng nghĩa với việc đồng ý đăng tải công khai lên mạng xã hội. Bạn có toàn quyền đối với hình ảnh cá nhân của mình. Khi lời nói giỡn cợt làm tổn hại đến sự thoải mái của người khác thì đó không còn là niềm vui chung mà là sự thiếu tôn trọng.",
    skills: ["Sự đồng thuận kỹ thuật số (Digital Consent)", "Quyền kiểm soát hình ảnh", "Đặt ranh giới dứt khoát"]
  },
  {
    id: 3,
    title: "Tình huống 3 – Bị yêu cầu gửi ảnh riêng tư",
    image: "assets/images/anh3.jpg",
    context: "Một người quen qua mạng thường xuyên nhắn tin và yêu cầu C gửi những bức ảnh riêng tư. C không muốn nhưng người đó nói: “Nếu không gửi thì chứng tỏ bạn không tin mình.”",
    question: "C nên làm gì?",
    options: [
      {
        letter: "A",
        text: "Gửi để chứng minh sự tin tưởng.",
        isOptimal: false,
        feedback: "Gửi ảnh riêng tư để 'chứng minh' sẽ đặt bạn vào bẫy tống tiền, đe dọa hoặc bị phát tán ảnh trong tương lai."
      },
      {
        letter: "B",
        text: "Từ chối, không gửi ảnh và chặn người đó nếu tiếp tục gây áp lực.",
        isOptimal: true,
        feedback: "Chính xác! C có quyền từ chối. Không ai có quyền gây áp lực để C chia sẻ hình ảnh riêng tư."
      },
      {
        letter: "C",
        text: "Gửi cho một người bạn xem trước rồi quyết định.",
        isOptimal: false,
        feedback: "Không nên chia sẻ hình ảnh nhạy cảm cho bất kỳ ai trên mạng, kể cả bạn bè, vì rủi ro rò rỉ dữ liệu ngoài ý muốn."
      },
      {
        letter: "D",
        text: "Giữ im lặng và tiếp tục trò chuyện.",
        isOptimal: false,
        feedback: "Im lặng và tiếp tục nói chuyện sẽ khiến đối phương nghĩ rằng bạn đang do dự và sẽ càng gia tăng mức độ ép buộc."
      }
    ],
    whyExplanation: "C có quyền từ chối. Không ai có quyền gây áp lực để C chia sẻ hình ảnh riêng tư. Hành vi lấy 'sự tin tưởng' để ép buộc là một dạng thao túng tâm lý (emotional blackmail). Ranh giới cơ thể và dữ liệu số của bạn là bất khả xâm phạm.",
    skills: ["Bảo vệ thông tin cá nhân", "Nhận diện hành vi gây áp lực", "Kỹ năng từ chối trên không gian mạng"]
  },
  {
    id: 4,
    title: "Tình huống 4 – Bị bạn bè trêu chọc về cơ thể",
    image: "assets/images/anh4.jpg",
    context: "Trong lớp, một số bạn thường xuyên trêu D về ngoại hình dù D đã nói rằng mình cảm thấy khó chịu.",
    question: "D nên làm gì?",
    options: [
      {
        letter: "A",
        text: "Cười theo để tránh mất lòng bạn.",
        isOptimal: false,
        feedback: "Cười theo khiến các bạn lầm tưởng rằng D thích trò đùa đó và sẽ tiếp tục lặp lại hành vi trêu chọc."
      },
      {
        letter: "B",
        text: "Nói rõ rằng những lời trêu chọc khiến mình không thoải mái và yêu cầu các bạn dừng lại.",
        isOptimal: true,
        feedback: "Rất đúng! D có quyền nói ra cảm xúc và yêu cầu người khác tôn trọng mình."
      },
      {
        letter: "C",
        text: "Trêu lại các bạn.",
        isOptimal: false,
        feedback: "Trêu chọc ngược lại chỉ làm bình thường hóa hành vi body-shaming trong lớp và làm vấn đề thêm nghiêm trọng."
      },
      {
        letter: "D",
        text: "Đăng bài nói xấu các bạn.",
        isOptimal: false,
        feedback: "Đăng bài nói xấu dễ biến thành bạo lực mạng hai chiều và vi phạm nội quy học đường."
      }
    ],
    whyExplanation: "D có quyền nói ra cảm xúc và yêu cầu người khác tôn trọng mình. Trêu chọc ngoại hình (body-shaming) khi người trong cuộc không thoải mái là hành vi vi phạm ranh giới thể chất và tâm lý. Nếu các bạn vẫn tiếp diễn, D hoàn toàn nên báo với thầy cô giáo hoặc cán bộ tâm lý học đường.",
    skills: ["Thiết lập ranh giới", "Giao tiếp rõ ràng", "Phòng chống bắt nạt ngoại hình"]
  },
  {
    id: 5,
    title: "Tình huống 5 – Người lạ hẹn gặp qua mạng",
    image: "assets/images/anh5.jpg",
    context: "E quen một người trên mạng. Người này đề nghị E giữ bí mật và hẹn gặp riêng ở một nơi vắng người.",
    question: "E nên làm gì?",
    options: [
      {
        letter: "A",
        text: "Đi gặp vì đã nói chuyện lâu.",
        isOptimal: false,
        feedback: "Thời gian trò chuyện qua mạng không đảm bảo đối phương là người an toàn. Đi gặp một mình ở nơi vắng tiềm ẩn nguy cơ bị xâm hại nghiêm trọng."
      },
      {
        letter: "B",
        text: "Đi nhưng không nói cho ai biết.",
        isOptimal: false,
        feedback: "Cực kỳ nguy hiểm! Khi có sự cố xảy ra, người thân và gia đình sẽ không biết bạn ở đâu để ứng cứu kịp thời."
      },
      {
        letter: "C",
        text: "Từ chối gặp riêng và nói với người lớn đáng tin cậy khi cảm thấy không an toàn.",
        isOptimal: true,
        feedback: "Chính xác! Những lời đề nghị giữ bí mật và gặp riêng là dấu hiệu cảnh báo đỏ nguy hiểm."
      },
      {
        letter: "D",
        text: "Rủ thêm một người bạn rồi đi.",
        isOptimal: false,
        feedback: "Rủ bạn cùng đi đến nơi vắng vẻ vẫn rất nguy hiểm cho cả hai. Giải pháp an toàn nhất là kiên quyết từ chối."
      }
    ],
    whyExplanation: "Những lời đề nghị giữ bí mật và hẹn gặp riêng ở nơi vắng vẻ có thể là dấu hiệu cần cảnh giác (Red Flag). Khi thấy không an toàn, E nên dừng liên lạc ngay lập tức và tìm người lớn đáng tin cậy (bố mẹ, thầy cô, chuyên gia tâm lý) hỗ trợ.",
    skills: ["Nhận diện nguy cơ", "Tìm kiếm sự giúp đỡ", "An toàn khi tương tác trực tuyến"]
  },
  {
    id: 6,
    title: "Tình huống 6 – Bạn bè gây áp lực trong tình cảm",
    image: "assets/images/anh6.jpg",
    context: "F không muốn thể hiện tình cảm theo cách mà bạn của mình yêu cầu. Người bạn nói: “Nếu thật sự thích mình thì phải làm điều đó.”",
    question: "F nên làm gì?",
    options: [
      {
        letter: "A",
        text: "Làm theo để chứng minh tình cảm.",
        isOptimal: false,
        feedback: "Làm điều mình không muốn vì áp lực tình cảm sẽ khiến bạn bị tổn thương và đánh mất ranh giới cá nhân."
      },
      {
        letter: "B",
        text: "Nói rõ điều mình không muốn và yêu cầu người kia tôn trọng.",
        isOptimal: true,
        feedback: "Tuyệt vời! Tình cảm không có nghĩa là phải làm điều mình không muốn. Mỗi người đều có quyền đặt ra giới hạn cho bản thân."
      },
      {
        letter: "C",
        text: "Im lặng.",
        isOptimal: false,
        feedback: "Im lặng có thể bị hiểu nhầm là đồng ý ngầm hoặc do dự, khiến đối phương tiếp tục lấn tới."
      },
      {
        letter: "D",
        text: "Làm theo vì sợ mất bạn.",
        isOptimal: false,
        feedback: "Một mối quan hệ lành mạnh không bao giờ xây dựng trên sự ép buộc hay nỗi sợ bị bỏ rơi."
      }
    ],
    whyExplanation: "Tình cảm không có nghĩa là phải làm điều mình không muốn. Mỗi người đều có quyền đặt ra giới hạn cho bản thân. Sự đồng thuận (Consent) thực sự phải xuất phát từ sự tự nguyện và thoải mái của cả hai phía, không kèm theo điều kiện ép buộc hay thao túng tâm lý.",
    skills: ["Hiểu về ranh giới cá nhân", "Sự đồng thuận (Consent)", "Giao tiếp bình đẳng trong tình bạn/tình yêu"]
  },
  {
    id: 7,
    title: "Tình huống 7 – Bị lan truyền thông tin cá nhân",
    image: "assets/images/anh7.jpg",
    context: "Một bạn trong lớp chụp màn hình cuộc trò chuyện riêng của G rồi gửi vào nhóm lớp mà chưa được G đồng ý.",
    question: "G nên làm gì?",
    options: [
      {
        letter: "A",
        text: "Đăng lại thông tin của bạn đó.",
        isOptimal: false,
        feedback: "Trả đũa bằng cách phát tán lại thông tin sẽ biến bạn thành người vi phạm pháp luật và quy định nhà trường."
      },
      {
        letter: "B",
        text: "Yêu cầu xóa nội dung, lưu lại bằng chứng và báo cho người lớn/giáo viên khi cần.",
        isOptimal: true,
        feedback: "Rất chuẩn xác! Thông tin và cuộc trò chuyện cá nhân cần được tôn trọng. G có thể yêu cầu xóa nội dung và tìm sự hỗ trợ nếu sự việc tiếp diễn."
      },
      {
        letter: "C",
        text: "Chửi bạn đó trong nhóm.",
        isOptimal: false,
        feedback: "Tranh cãi gay gắt trong nhóm chỉ tạo thêm sự chú ý và làm câu chuyện bị lan truyền xa hơn."
      },
      {
        letter: "D",
        text: "Bỏ qua hoàn toàn.",
        isOptimal: false,
        feedback: "Bỏ qua hoàn toàn có thể khiến người khác tiếp tục phát tán thêm nhiều thông tin cá nhân khác của bạn."
      }
    ],
    whyExplanation: "Thông tin và cuộc trò chuyện cá nhân cần được tôn trọng tuyệt đối. G có quyền yêu cầu xóa nội dung và tìm sự hỗ trợ nếu sự việc tiếp diễn. Việc chụp màn hình tin nhắn làm bằng chứng và báo cáo cho giáo viên chủ nhiệm là giải pháp văn minh và hiệu quả nhất.",
    skills: ["Bảo vệ quyền riêng tư trên môi trường mạng", "Thu thập bằng chứng an toàn", "Báo cáo hỗ trợ học đường"]
  },
  {
    id: 8,
    title: "Tình huống 8 – Không biết xử lý khi cảm thấy không an toàn",
    image: "assets/images/anh8.jpg",
    context: "H đang ở một nơi đông người và cảm thấy một người lạ liên tục đi theo mình.",
    question: "H nên làm gì?",
    options: [
      {
        letter: "A",
        text: "Đi đến nơi vắng để tránh người đó.",
        isOptimal: false,
        feedback: "Đi vào nơi vắng người là sai lầm nguy hiểm nhất, tạo cơ hội thuận lợi cho kẻ xấu ra tay."
      },
      {
        letter: "B",
        text: "Tiếp tục đi một mình và không nói với ai.",
        isOptimal: false,
        feedback: "Tiếp tục đi một mình trong im lặng khiến mối nguy hiểm tiếp tục bám theo bạn."
      },
      {
        letter: "C",
        text: "Đi đến nơi đông người, tìm người lớn đáng tin cậy hoặc nhân viên hỗ trợ và gọi người thân khi cần.",
        isOptimal: true,
        feedback: "Tuyệt vời! Khi cảm thấy không an toàn, H nên ưu tiên rời khỏi tình huống và tìm sự hỗ trợ từ người đáng tin cậy."
      },
      {
        letter: "D",
        text: "Đi theo người đó để hỏi lý do.",
        isOptimal: false,
        feedback: "Tự mình đối đầu với kẻ theo dõi tiềm ẩn nguy cơ xung đột bạo lực nguy hiểm."
      }
    ],
    whyExplanation: "Khi cảm thấy không an toàn, H nên ưu tiên rời khỏi tình huống và tìm sự hỗ trợ từ người đáng tin cậy. Hãy di chuyển ngay vào các địa điểm an toàn (cửa hàng tiện lợi, quầy lễ tân, phòng bảo vệ) và gọi ngay cho người thân hoặc người có trách nhiệm.",
    skills: ["Nhận biết nguy cơ", "Xử lý tình huống không an toàn", "Tìm kiếm sự trợ giúp khẩn cấp"]
  },
  {
    id: 9,
    title: "Tình huống 9 – Bị ép giữ bí mật",
    image: "assets/images/anh9.jpg",
    context: "Một người nói với K: “Chuyện này chỉ hai chúng ta biết, nếu kể cho người khác thì bạn sẽ gặp rắc rối.”",
    question: "K nên làm gì?",
    options: [
      {
        letter: "A",
        text: "Giữ bí mật dù cảm thấy lo sợ.",
        isOptimal: false,
        feedback: "Giữ bí mật tiêu cực khiến bạn bị cô lập và tạo cơ hội cho kẻ đe dọa tiếp tục thao túng bạn."
      },
      {
        letter: "B",
        text: "Nói với một người lớn đáng tin cậy nếu sự việc khiến K cảm thấy không an toàn.",
        isOptimal: true,
        feedback: "Chính xác! Không phải bí mật nào cũng cần giữ. Nếu một chuyện khiến K sợ hãi hoặc cảm thấy không an toàn, K nên tìm người đáng tin cậy để được hỗ trợ."
      },
      {
        letter: "C",
        text: "Kể cho tất cả bạn bè.",
        isOptimal: false,
        feedback: "Kể cho tất cả bạn bè có thể gây hoang mang dư luận nhưng không giải quyết được nguồn cơn nguy hiểm bằng việc báo cho người lớn."
      },
      {
        letter: "D",
        text: "Tiếp tục làm theo yêu cầu.",
        isOptimal: false,
        feedback: "Tiếp tục làm theo yêu cầu của kẻ đe dọa chỉ làm bạn lún sâu hơn vào tình huống nguy hiểm."
      }
    ],
    whyExplanation: "Không phải bí mật nào cũng cần giữ. Nếu một chuyện khiến K sợ hãi hoặc cảm thấy không an toàn, K nên tìm người đáng tin cậy để được hỗ trợ. Bí mật an toàn là những bất ngờ vui vẻ, còn bí mật mang tính đe dọa hay ép buộc thì dứt khoát phải lên tiếng.",
    skills: ["Phân biệt bí mật an toàn và không an toàn", "Tìm kiếm sự giúp đỡ", "Giải tỏa áp lực tâm lý"]
  }
];

const ScenarioController = (() => {
  const userResponses = {}; // { [scenarioId]: selectedOptionIndex }
  let completedCount = 0;

  const elements = {
    container: null,
    progressFill: null,
    progressText: null,
    quickNav: null,
    completionCard: null
  };

  function init() {
    elements.container = document.getElementById('scenariosContainer');
    elements.progressFill = document.getElementById('scenariosProgressFill');
    elements.progressText = document.getElementById('scenariosCompletedCount');
    elements.quickNav = document.getElementById('scenariosQuickNav');
    elements.completionCard = document.getElementById('scenariosCompletionCard');

    if (!elements.container) return;

    loadSavedProgress();
    renderQuickNav();
    renderAllScenarios();
    updateProgressUI();
  }

  function loadSavedProgress() {
    const saved = localStorage.getItem('safeteen_scenarios_answers');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        Object.assign(userResponses, parsed);
        completedCount = Object.keys(userResponses).length;
      } catch (e) {
        // ignore
      }
    }
  }

  function saveProgress() {
    localStorage.setItem('safeteen_scenarios_answers', JSON.stringify(userResponses));
    localStorage.setItem(SafeTeenApp.STORAGE_KEYS.SCENARIO_PROGRESS, completedCount.toString());
  }

  function renderQuickNav() {
    if (!elements.quickNav) return;
    elements.quickNav.innerHTML = '';

    SCENARIOS_DATA.forEach((sc, idx) => {
      const chip = document.createElement('a');
      chip.className = 'scenario-nav-chip';
      chip.id = `navChip_${sc.id}`;
      chip.href = `#scenarioCard_${sc.id}`;
      chip.innerHTML = `TH ${idx + 1} <span class="chip-status-icon">${userResponses[sc.id] !== undefined ? '✓' : ''}</span>`;
      if (userResponses[sc.id] !== undefined) {
        chip.classList.add('done');
      }

      chip.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(`scenarioCard_${sc.id}`);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      elements.quickNav.appendChild(chip);
    });
  }

  function renderAllScenarios() {
    elements.container.innerHTML = '';

    SCENARIOS_DATA.forEach((sc, index) => {
      const isEven = (index % 2 === 1); // 0-indexed: index 1, 3, 5, 7 -> Tình huống 2, 4, 6, 8 (chẵn: ảnh trái, chữ phải)
      const isAnswered = userResponses[sc.id] !== undefined;
      const selectedIdx = isAnswered ? userResponses[sc.id] : null;

      const card = document.createElement('article');
      card.className = `scenario-item-row ${isEven ? 'is-even' : ''}`;
      card.id = `scenarioCard_${sc.id}`;
      card.setAttribute('aria-label', sc.title);

      // 1. Column Content (Text, Question, Options, Reveal Box)
      const textCol = document.createElement('div');
      textCol.className = 'scenario-text-column';

      const padIndex = (index + 1).toString().padStart(2, '0');
      const padTotal = SCENARIOS_DATA.length.toString().padStart(2, '0');

      let optionsHtml = '';
      sc.options.forEach((opt, optIdx) => {
        optionsHtml += `
          <button type="button" class="scenario-opt-btn" data-scenario-id="${sc.id}" data-opt-idx="${optIdx}">
            <span class="opt-letter">${opt.letter}</span>
            <div style="flex: 1;">
              <div style="font-weight: 500;">${opt.text}</div>
              <div class="scenario-opt-note"></div>
            </div>
          </button>
        `;
      });

      let skillsHtml = '';
      sc.skills.forEach(sk => {
        skillsHtml += `<span class="scenario-skill-tag">✓ ${sk}</span> `;
      });

      textCol.innerHTML = `
        <div class="scenario-badge-wrap">
          <span class="scenario-number-tag">TÌNH HUỐNG ${padIndex} / ${padTotal}</span>
          <span class="scenario-status-pill ${isAnswered ? 'done' : ''}" id="statusPill_${sc.id}">
            ${isAnswered ? '✓ Đã hoàn thành' : 'Chưa hoàn thành'}
          </span>
        </div>

        <h2 class="scenario-item-title">${sc.title}</h2>

        <div class="scenario-item-context">
          <p>${sc.context}</p>
        </div>

        <div class="scenario-item-question">
          <strong>Câu hỏi:</strong> ${sc.question}
        </div>

        <div class="scenario-options-list" id="optsList_${sc.id}">
          ${optionsHtml}
        </div>

        <div class="scenario-reveal-card ${isAnswered ? 'active' : ''}" id="revealCard_${sc.id}">
          <div class="eyebrow eyebrow-accent" style="margin-bottom: 0.25rem;">PHÂN TÍCH CHUYÊN GIA</div>
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-green-dark); margin-bottom: 0.5rem;">Vì sao?</h4>
          <p style="font-size: 0.94rem; line-height: 1.6; color: var(--color-text); margin-bottom: 0.85rem;">
            ${sc.whyExplanation}
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center; border-top: 1px solid var(--color-border); padding-top: 0.75rem;">
            <span style="font-size: 0.78rem; font-weight: 700; color: var(--color-muted); margin-right: 0.25rem;">Kỹ năng rèn luyện:</span>
            ${skillsHtml}
          </div>
        </div>
      `;

      // 2. Column Image (Illustration)
      const imgCol = document.createElement('div');
      imgCol.className = 'scenario-image-column';
      imgCol.innerHTML = `
        <div class="scenario-image-card">
          <img src="${sc.image}" alt="${sc.title}" loading="lazy" onerror="this.src='assets/images/anh1.jpg';">
          <div class="scenario-image-badge">Ảnh ${index + 1}</div>
        </div>
      `;

      card.appendChild(textCol);
      card.appendChild(imgCol);
      elements.container.appendChild(card);

      // Attach option listeners
      const btns = textCol.querySelectorAll('.scenario-opt-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
          handleSelectOption(sc, optIdx, card);
        });
      });

      // If already answered, apply visual state
      if (isAnswered && selectedIdx !== null) {
        applyAnsweredState(sc, selectedIdx, card);
      }
    });
  }

  function handleSelectOption(sc, selectedIdx, cardEl) {
    if (userResponses[sc.id] === undefined) {
      completedCount++;
    }
    userResponses[sc.id] = selectedIdx;
    saveProgress();

    applyAnsweredState(sc, selectedIdx, cardEl);
    updateProgressUI();

    // Update Nav Chip
    const chip = document.getElementById(`navChip_${sc.id}`);
    if (chip) {
      chip.classList.add('done');
      const icon = chip.querySelector('.chip-status-icon');
      if (icon) icon.textContent = '✓';
    }

    // Update Status Pill
    const pill = document.getElementById(`statusPill_${sc.id}`);
    if (pill) {
      pill.classList.add('done');
      pill.textContent = '✓ Đã hoàn thành';
    }
  }

  function applyAnsweredState(sc, selectedIdx, cardEl) {
    const btns = cardEl.querySelectorAll('.scenario-opt-btn');
    btns.forEach((btn, idx) => {
      btn.disabled = true;
      const optData = sc.options[idx];
      const noteEl = btn.querySelector('.scenario-opt-note');

      if (optData.isOptimal) {
        btn.classList.add('correct');
        if (noteEl) {
          noteEl.style.display = 'block';
          noteEl.style.color = 'var(--color-correct)';
          noteEl.innerHTML = `<strong>Phản hồi:</strong> ${optData.feedback}`;
        }
      } else if (idx === selectedIdx) {
        btn.classList.add('wrong');
        if (noteEl) {
          noteEl.style.display = 'block';
          noteEl.style.color = 'var(--color-incorrect)';
          noteEl.innerHTML = `<strong>Lưu ý:</strong> ${optData.feedback}`;
        }
      }
    });

    const revealBox = cardEl.querySelector(`#revealCard_${sc.id}`);
    if (revealBox) {
      revealBox.classList.add('active');
    }
  }

  function updateProgressUI() {
    const total = SCENARIOS_DATA.length;
    if (elements.progressText) {
      elements.progressText.textContent = completedCount.toString();
    }
    if (elements.progressFill) {
      elements.progressFill.style.width = `${(completedCount / total) * 100}%`;
    }

    if (elements.completionCard) {
      if (completedCount >= total) {
        elements.completionCard.style.display = 'block';
      } else {
        elements.completionCard.style.display = 'none';
      }
    }
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  ScenarioController.init();
});
