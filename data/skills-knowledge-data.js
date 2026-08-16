/**
 * Scouting Skills Knowledge System V1 - Data Schema & Dataset
 * Liên đoàn Hướng đạo Long Biên
 */

const SCOUT_SKILL_CATEGORIES = [
  {
    id: "da-ngoai-trai",
    number: "01",
    name: "Dã ngoại & Trại",
    name_en: "Camping & Outdoor",
    icon: "🏕️",
    desc: "Kỹ năng dựng lều, chọn đất trại, sinh hoạt dã ngoại và nguyên tắc Leave No Trace.",
    subcategories: ["Lều trại cơ bản", "Đi bộ đường dài", "Kỷ luật đất trại", "Sinh tồn dã ngoại"]
  },
  {
    id: "scoutcraft",
    number: "02",
    name: "Scoutcraft",
    name_en: "Scoutcraft & Pioneering",
    icon: "🪢",
    desc: "Nút dây thực dụng, tiên phong dựng cầu tháp, gậy thiếu sinh và thủ công trại.",
    subcategories: ["Nút dây cơ bản", "Nút ráp nối gỗ", "Gậy thiếu sinh", "Công trình tiên phong"]
  },
  {
    id: "lua-nau-an",
    number: "03",
    name: "Lửa & Nấu ăn",
    name_en: "Firecraft & Camp Cooking",
    icon: "🔥",
    desc: "Nhóm lửa đá lửa, chọn củi khô, làm bếp Hoàng Cầm và tự nấu ăn dã chiến.",
    subcategories: ["Tạo lửa an toàn", "Bếp trại dã chiến", "Nấu ăn dinh dưỡng", "An toàn phòng hỏa"]
  },
  {
    id: "kham-pha-dinh-huong",
    number: "04",
    name: "Khám phá & Định hướng",
    name_en: "Navigation & Exploration",
    icon: "🧭",
    desc: "Đọc bản đồ địa hình, sử dụng la bàn từ tính, ước đạc khoảng cách và định hướng thiên nhiên.",
    subcategories: ["La bàn & Bản đồ", "Ước đạc thực địa", "Định hướng thiên nhiên", "Thám du địa hình"]
  },
  {
    id: "so-cuu-an-toan",
    number: "05",
    name: "Sơ cứu & An toàn",
    name_en: "First Aid & Safety",
    icon: "🩹",
    desc: "Băng bó vết thương, xử lý hạ thân nhiệt, đuối nước, say nắng và kỹ năng thoát hiểm.",
    subcategories: ["Sơ cứu cơ bản", "Thời tiết & Môi trường", "Cứu nạn & Cáng thương", "An toàn nguồn nước"]
  },
  {
    id: "thien-nhien",
    number: "06",
    name: "Thiên nhiên",
    name_en: "Nature & Environment",
    icon: "🌲",
    desc: "Nhận biết cây cỏ thuốc, thời tiết mây gió, theo dõi dấu chân thú và bảo tồn sinh thái.",
    subcategories: ["Thực vật & Cây thuốc", "Quan sát thời tiết", "Dấu chân & Động vật", "Bảo vệ môi trường"]
  },
  {
    id: "truyen-tin-tro-choi",
    number: "07",
    name: "Truyền tin & Trò chơi",
    name_en: "Signaling & Games",
    icon: "🚩",
    desc: "Mật thư, cờ Semaphore, tín hiệu Morse, dấu đi đường trên cành cây và trò chơi lớn.",
    subcategories: ["Mật thư & Giải mã", "Morse & Semaphore", "Dấu vết đi đường", "Trò chơi Hướng đạo"]
  },
  {
    id: "ky-nang-song",
    number: "08",
    name: "Kỹ năng sống",
    name_en: "Life Skills & Leadership",
    icon: "💡",
    desc: "Tự lập cá nhân, an toàn số 4.0, làm việc nhóm, giao tiếp và tinh thần công dân.",
    subcategories: ["Tự lập & Kỷ luật", "An toàn số 4.0", "Làm việc nhóm", "Phục vụ cộng đồng"]
  }
];

const SCOUT_SECONDARY_AREAS = [
  {
    id: "chuyen-hieu",
    number: "09",
    name: "Chuyên hiệu Hướng đạo",
    name_en: "Proficiency Badges",
    icon: "🏅",
    desc: "Hệ thống huy hiệu chuyên môn rèn luyện sở thích, nghề nghiệp và trách nhiệm bản thân.",
    badgeCount: "24 Chuyên hiệu chuẩn"
  },
  {
    id: "goc-huynh-truong",
    number: "10",
    name: "Góc Huynh trưởng",
    name_en: "Scouters' Corner",
    icon: "🎓",
    desc: "Phương pháp sư phạm Hướng đạo, phương pháp EDGE, tâm lý lứa tuổi và kỹ năng điều hành bầy/đoàn.",
    badgeCount: "Tài liệu đào tạo Huynh trưởng"
  }
];

const SCOUT_SKILLS_DATA = [
  // 1. DÃ NGOẠI & TRẠI
  {
    id: "sk-di-bo-duong-dai",
    slug: "di-bo",
    title: "5 Khu Vực Thường Gặp Khi Đi Bộ Đường Dài",
    title_en: "5 Trail Hiking Zones & Safety Protocols",
    category: "da-ngoai-trai",
    subcategory: "Đi bộ đường dài",
    shortDescription: "Cẩm nang nhận biết và xử lý an toàn tại 5 địa hình trọng yếu: lối mòn, sườn dốc trơn, suối đá, sương mù và bãi hạ trại.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Hiking", "Thám du", "Dã ngoại", "Outdoor", "Địa hình"],
    media: {
      poster: "image/kynang/5-khu-vuc-di-bo-duong-dai.png",
      videoId: ""
    },
    purpose: "Giúp đoàn sinh di chuyển an toàn, giữ sức bền, phòng ngừa trơn trượt ngã và xử lý sự cố khi thám du đường dài trong rừng hoặc đồi núi.",
    equipment: ["Giày đi bộ có độ bám cao", "Gậy thiếu sinh (Scout staff)", "Balo dã ngoại ôm sát người", "Bình nước cá nhân (tối thiểu 1L)", "Áo mưa gọn nhẹ", "Còi cứu sinh"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết được lối mòn an toàn, luôn đi theo sau Huynh trưởng/đội trưởng, không bao giờ tự ý tách hàng hoặc chạy nhảy trên sườn dốc."
      },
      thieu: {
        target: "Tự điều chỉnh ba lô đúng trọng tâm, sử dụng gậy thiếu sinh chống trơn trượt zíc-zắc, biết cách dò độ lún bùn đá và nhắc nhở đồng đội giữ khoảng cách 1.5m."
      },
      trang: {
        target: "Khảo sát trước cung đường, phân công người dẫn đường (Pioneer) và chốt đoàn (Sweeper), xử lý linh hoạt khi gặp thời tiết xấu hoặc địa hình sạt lở."
      }
    },
    steps: [
      "<strong>Khu vực 1 - Lối mòn đất phẳng:</strong> Đi đều bước, giữ nhịp thở đều 2 bước hít vào - 2 bước thở ra, duy trì khoảng cách 1.5m giữa các đoàn sinh.",
      "<strong>Khu vực 2 - Sườn dốc trơn trượt:</strong> Chống gậy thiếu sinh vững vàng tạo điểm tựa tam giác, hạ thấp trọng tâm người, bước chéo chân theo đường zíc-zắc.",
      "<strong>Khu vực 3 - Băng qua suối đá cuội:</strong> Kiểm tra độ sâu và độ trơn bằng gậy, chỉ dẫm lên các tảng đá chìm cố định có bề mặt nhám, không nhảy từ đá này sang đá khác.",
      "<strong>Khu vực 4 - Rừng rậm & Sương mù:</strong> Đi sát đội hình, quan sát kỹ dấu đi đường của người dẫn đầu, tuyệt đối không tách nhóm để hái hoa chụp ảnh.",
      "<strong>Khu vực 5 - Bãi hạ trại:</strong> Chọn nền đất bằng phẳng cao ráo, cách xa bờ nước lũ quét (tối thiểu 50m) và tránh xa các tán cây mục có nguy cơ gãy đổ."
    ],
    commonMistakes: [
      "Đi quá nhanh lúc đầu khiến kiệt sức giữa đường.",
      "Dẫm lên đá ướt có rêu trơn khi băng suối thay vì chọn đá nhám.",
      "Uống ừng ực nước lạnh một lúc nhiều thay vì nhấp từng ngụm nhỏ."
    ],
    safety: "Luôn mang theo còi cứu sinh thổi hiệu lệnh khi mất dấu (3 tiếng còi ngắn = Cần trợ giúp). Không chạm vào thực vật lạ có gai độc.",
    practice: "Thực hành đi bộ 5km quanh Vườn hoa Bắc Biên và bãi bồi sông Hồng, mang ba lô 3kg và sử dụng gậy thiếu sinh đúng tư thế.",
    challenge: "Dẫn dắt phân đội vượt qua đoạn đường mòn dốc 30 độ trong kỳ trại mà không bạn nào bị trượt ngã.",
    assessment: "Bạn đạt khi: Tự chuẩn bị đủ trang bị dã ngoại cá nhân, vượt qua 5km đường địa hình an toàn và giải thích được 5 nguyên tắc ứng phó trên từng địa hình.",
    relatedSkills: ["gay-thieu-sinh", "so-cuu", "dinh-huong-la-ban"]
  },

  {
    id: "sk-dung-leu-chu-a",
    slug: "leu-trai",
    title: "Dựng Lều Chữ A & Bạt Sinh Hoạt Dã Ngoại",
    title_en: "A-Frame Tent Pitching & Camp Craft",
    category: "da-ngoai-trai",
    subcategory: "Lều trại cơ bản",
    shortDescription: "Kỹ thuật dựng lều chữ A truyền thống bằng gậy và dây cọc, căng bạt chống mưa gió và đào rãnh thoát nước dã chiến.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Lều trại", "Dã ngoại", "Nút dây", "Leave No Trace"],
    media: {
      poster: "",
      videoId: "2J4jZJ4s2L8"
    },
    purpose: "Tạo nơi trú ngụ an toàn, che mưa nắng, bảo vệ sức khỏe và đồ đạc của toàn đội trong các kỳ trại dã ngoại thiên nhiên.",
    equipment: ["Vải lều chữ A hoặc bạt chống thấm (3x4m)", "2 cây gậy chính (1m8 - 2m)", "4 cây cọc góc (40cm)", "6-8 cọc lều", "Dây dù lều (dây căng chịu lực)"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết dọn sạch sỏi đá khu vực dựng lều, phụ giúp giữ cột lều thẳng đứng và biết đóng cọc góc nghiêng 45 độ hướng ra ngoài."
      },
      thieu: {
        target: "Thành thạo thắt nút thuyền chài, nút dẹt để căng dây neo lều, đóng cọc lều chắc chắn và đào rãnh thoát nước quanh lều trước khi trời mưa."
      },
      trang: {
        target: "Thiết kế mặt bằng đất trại hợp lý (hướng gió, hướng nắng, khu bếp, khu vệ sinh), hướng dẫn và kiểm tra độ an toàn lều trại của các bầy/đoàn em."
      }
    },
    steps: [
      "<strong>Bước 1 - Dọn nền:</strong> Nhặt sạch đá nhọn, cành cây khô và kiểm tra tổ kiến/côn trùng tại khu đất.",
      "<strong>Bước 2 - Trải bạt đáy & định vị cọc:</strong> Trải bạt đáy phẳng, đóng 4 cọc góc nghiêng 45 độ hướng ra phía ngoài lều.",
      "<strong>Bước 3 - Dựng 2 cột chính:</strong> Buộc dây đỉnh lều bằng nút thuyền chài, nâng 2 cột chính đứng thẳng vuông góc mặt đất.",
      "<strong>Bước 4 - Căng dây neo đỉnh:</strong> Kéo căng 2 dây neo chính ra phía trước và sau lều, cố định vào cọc neo chính.",
      "<strong>Bước 5 - Căng các mép mái lều:</strong> Buộc và căng đều các dây mép lều sao cho mặt bạt thẳng thớm không bị chùng đọng nước.",
      "<strong>Bước 6 - Đào rãnh thoát nước:</strong> Đào rãnh sâu 10-15cm xung quanh mép mái lều theo hướng dốc để nước mưa thoát nhanh."
    ],
    commonMistakes: [
      "Đóng cọc thẳng đứng 90 độ khiến dây néo dễ bị bật khi gió thổi mạnh.",
      "Mái lều bị chùng đọng vũng nước mưa làm rò rỉ ướt đồ trong lều.",
      "Dựng lều dưới tán cây khô có nguy cơ gãy đổ khi có gió bão."
    ],
    safety: "Không bao giờ dùng nến hoặc đốt lửa bên trong lều. Luôn kiểm tra dây lều vào ban đêm tránh vấp ngã.",
    practice: "Thực hành dựng lều chữ A cùng 3 bạn đội viên trong thời gian dưới 12 phút.",
    challenge: "Hoàn thiện lều trại kiên cố chịu được gió mạnh và kiểm tra rãnh thoát nước hoạt động tốt khi gặp mưa rào.",
    assessment: "Bạn đạt khi: Dựng lều đúng quy cách trong 15 phút, mái lều căng phẳng không đọng nước, cọc đóng chuẩn 45 độ.",
    relatedSkills: ["nut-day", "bep-hoang-cam", "di-bo"]
  },

  // 2. SCOUTCRAFT
  {
    id: "sk-gay-thieu-sinh",
    slug: "gay-thieu-sinh",
    title: "Gậy Thiếu Sinh: Ý Nghĩa & Lợi Ích Trong Hướng Đạo",
    title_en: "The Scout Staff: Significance & Practical Applications",
    category: "scoutcraft",
    subcategory: "Gậy thiếu sinh",
    shortDescription: "Chiếc gậy thiếu sinh dài 1m50 là người bạn đường trung thành: trợ lực leo dốc, đo đạc khoảng cách, làm cáng cứu thương và tháp tiên phong.",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Scoutcraft", "Gậy thiếu sinh", "Tiên phong", "Sơ cứu"],
    media: {
      poster: "image/kynang/gay-thieu-sinh.png",
      videoId: ""
    },
    purpose: "Công cụ đa năng không thể thiếu của người thiếu sinh Hướng đạo, vừa là biểu tượng tinh thần chuẩn bị sẵn sàng, vừa là trang bị sinh tồn thực tế.",
    equipment: ["Gậy gỗ tre dẻo dai dài 1m50, đường kính 3cm", "Thước đo để khắc vạch xăng-ti-mét", "Dây dù buộc đầu gậy"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết cách cầm gậy đúng tư thế khi chào và diễu hành, biết dùng gậy để giữ khoảng cách đội hình vòng tròn."
      },
      thieu: {
        target: "Sử dụng thành thạo gậy làm trợ lực vượt dốc, đo đạc chiều dài/chiều cao, dò bùn lầy và kết hợp với bạn làm cáng cứu thương khẩn cấp."
      },
      trang: {
        target: "Ứng dụng gậy trong các công trình tiên phong nâng cao (cầu chữ A, tháp canh, giá treo cờ), bảo quản và truyền dạy kỹ năng gậy cho đàn em."
      }
    },
    steps: [
      "<strong>1. Trợ lực đường trường:</strong> Cầm chắc gậy ở 2/3 thân gậy, chống gậy về phía trước khi lên dốc và chống phía sau khi xuống dốc giúp giảm 25% áp lực đầu gối.",
      "<strong>2. Đo đạc & Ước lượng:</strong> Sử dụng các vạch chia 10cm, 50cm, 1m khắc sẵn trên thân gậy để đo chiều dài rãnh nước, đo độ sâu của suối hoặc làm cọc tiêu ước đạc chiều cao cây.",
      "<strong>3. Làm cáng cứu thương khẩn cấp:</strong> Luồn 2 chiếc gậy qua 2 ống tay của 2 chiếc áo đồng phục cài cúc để làm cáng cứu nạn nhân chuyển về trạm y tế.",
      "<strong>4. Tiên phong & Vượt rào:</strong> Kết hợp các nút ráp nối gỗ để nối nhiều gậy làm cầu chữ A, tháp canh hoặc vượt qua hào rãnh dã chiến."
    ],
    commonMistakes: [
      "Dùng gậy để đùa nghịch, múa gậy gây nguy hiểm cho bạn bè xung quanh.",
      "Chọn gậy gỗ mục, giòn dễ gãy khi chịu lực nặng.",
      "Không khắc vạch chia đo đạc trước chuyến thám du."
    ],
    safety: "Gậy thiếu sinh là dụng cụ học tập và bảo vệ bản thân, tuyệt đối không dùng gậy làm vũ khí tấn công dưới bất kỳ hình thức nào.",
    practice: "Dùng gậy thiếu sinh đo chiều rộng của một đoạn đường và phối hợp với bạn làm cáng chuyển thương 20m.",
    challenge: "Cùng phân đội dùng 6 cây gậy và dây dù dựng thành công một giá ba chân treo nồi nấu ăn vững chắc.",
    assessment: "Bạn đạt khi: Giải thích được 4 công dụng thực tế của gậy và thực hành làm cáng chuyển thương đạt yêu cầu an toàn.",
    relatedSkills: ["di-bo", "nut-day", "so-cuu"]
  },

  {
    id: "sk-nut-day-co-ban",
    slug: "nut-day",
    title: "Nút Dây Thực Dụng & Tiên Phong Hướng Đạo",
    title_en: "Practical Scout Knots & Lashings",
    category: "scoutcraft",
    subcategory: "Nút dây cơ bản",
    shortDescription: "Thành thạo các nút dây kinh điển: nút dẹt, nút thuyền chài, nút thòng lọng (ghế đơn), nút chịu đơn và kỹ thuật ráp nối gỗ tiên phong.",
    environment: "both",
    difficulty: "medium",
    tags: ["Nút dây", "Pioneering", "Scoutcraft", "Sinh tồn"],
    media: {
      poster: "",
      videoId: "2J4jZJ4s2L8"
    },
    purpose: "Giúp liên kết dây thừng, néo lều trại, cứu hộ người bị nạn và xây dựng các công trình dã ngoại chắc chắn, dễ tháo khi cần.",
    equipment: ["Dây thừng dã ngoại (dài 2m - 3m)", "Các đoạn cây/gậy gỗ thực hành"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Thắt thành thạo Nút Chịu Đơn (Overhand) để chặn đầu dây, Nút Dẹt (Reef Knot) để buộc dây giày và băng bó sơ cứu."
      },
      thieu: {
        target: "Thành thạo 6 nút căn bản: Nút Dẹt, Nút Thuyền Chài (Clove Hitch), Nút Thòng Lọng (Bowline), Nút Thợ Dệt (Sheet Bend), Nút Chạy và Nút Ghế Đơn cứu hộ."
      },
      trang: {
        target: "Thành thạo các nút ráp nối gỗ (Ráp chữ thập, Ráp chéo, Ráp song song), tính toán lực kéo an toàn cho công trình cầu tháp tiên phong."
      }
    },
    steps: [
      "<strong>Nút Dẹt (Reef Knot):</strong> 'Phải qua trái, trái qua phải' - Nối 2 đầu dây có cùng tiết diện, dùng buộc gói hàng hoặc băng bó cứu thương.",
      "<strong>Nút Thuyền Chài (Clove Hitch):</strong> Quấn 2 vòng quanh thân cây và luồn đầu dây - Khởi đầu và kết thúc cho hầu hết các nút ráp nối gỗ tiên phong.",
      "<strong>Nút Thòng Lọng (Bowline):</strong> Tạo một vòng tròn cố định không bao giờ thít chặt - 'Vua của các loại nút' dùng quăng cứu người đuối nước hoặc kéo người từ trên cao xuống.",
      "<strong>Nút Thợ Dệt (Sheet Bend):</strong> Nối 2 sợi dây có tiết diện to nhỏ không bằng nhau mà không bị tuột trơn.",
      "<strong>Nút Ráp Chữ Thập (Square Lashing):</strong> Khởi đầu bằng nút thuyền chài, quấn 3 vòng quanh 2 thân gỗ vuông góc, siết chặt 2 vòng then và kết thúc bằng thuyền chài."
    ],
    commonMistakes: [
      "Thắt nhầm Nút Dẹt thành Nút Bò (Granny Knot) khiến dây dễ bị tuột hoặc kẹt cứng không tháo được.",
      "Không siết chặt các vòng then khi ráp nối gỗ khiến công trình bị lỏng lẻo lung lay.",
      "Để đầu dây bị tưa sợi mà không bọc đầu dây (Whipping)."
    ],
    safety: "Kiểm tra độ chắc chắn của dây thừng trước khi dùng chịu lực người. Không dùng dây mục, dây mòn để cứu hộ.",
    practice: "Thực hành thắt nút Dẹt, Thuyền Chài, Thòng Lọng khi nhắm mắt trong thời gian dưới 10 giây mỗi nút.",
    challenge: "Cùng đội ráp một giá ba chân (Tripod Lashing) chịu được sức nặng của một thùng nước 10L.",
    assessment: "Bạn đạt khi: Thắt đúng và giải thích được công dụng của 6 nút cơ bản, có thể tháo mở nhanh chóng sau khi chịu lực.",
    relatedSkills: ["gay-thieu-sinh", "leu-trai", "so-cuu"]
  },

  // 3. LỬA & NẤU ĂN
  {
    id: "sk-bep-hoang-cam",
    slug: "tao-lua",
    title: "Tạo Lửa Đá Lửa & Bếp Hoàng Cầm Dã Chiến",
    title_en: "Flint Firecraft & Smokeless Camp Stove",
    category: "lua-nau-an",
    subcategory: "Tạo lửa an toàn",
    shortDescription: "Kỹ năng đánh lửa bằng thanh đá lửa ferrocerium, phân loại củi khô (bùi nhùi, củi mồi, củi chính) và đào rãnh bếp Hoàng Cầm không khói.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Lửa trại", "Bếp trại", "Sinh tồn", "Nấu ăn"],
    media: {
      poster: "",
      videoId: "7CgtIgSyQ14"
    },
    purpose: "Cung cấp nguồn nhiệt sưởi ấm, đun nước sạch và nấu chín thức ăn trong điều kiện dã ngoại mà không để lại khói mù mịt.",
    equipment: ["Thanh đánh lửa đá lửa (Ferro rod)", "Bùi nhùi khô (bông gòn, vỏ cây bổi, xơ dừa)", "Củi khô 3 cỡ (cỡ tăm, cỡ ngón tay, cỡ cổ tay)", "Chiếc xẻng/bay đào đất"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết phân biệt củi khô và củi ẩm ướt, biết cách nhặt bùi nhùi khô và nắm rõ quy tắc an toàn: không bao giờ nghịch lửa khi không có Trưởng."
      },
      thieu: {
        target: "Tự tay đánh lửa bằng thanh đá lửa trong 3 lần quẹt, tự xếp củi hình tháp chữ A và đào rãnh bếp Hoàng Cầm dã chiến dẫn khói ngầm."
      },
      trang: {
        target: "Quản lý ngọn lửa trại lớn của liên đoàn, xử lý an toàn cháy rừng, dọn sạch tro than và trả lại nguyên trạng mặt đất theo nguyên tắc Leave No Trace."
      }
    },
    steps: [
      "<strong>Bước 1 - Chuẩn bị bùi nhùi:</strong> Vò tơi xơ dừa hoặc bông gòn tẩm sáp khô đặt ở tâm tổ chim củi mồi.",
      "<strong>Bước 2 - Xếp củi 3 tầng:</strong> Xếp củi cỡ que tăm xung quanh bùi nhùi, tiếp đến củi cỡ ngón tay để hở khoảng trống cho oxy lưu thông.",
      "<strong>Bước 3 - Đánh tia lửa:</strong> Đặt lưỡi gạt nghiêng 45 độ, quẹt mạnh dọc thân đá lửa hướng tia lửa thẳng vào tâm bùi nhùi.",
      "<strong>Bước 4 - Thổi lửa:</strong> Khi thấy đốm khói đỏ, thổi nhẹ nhàng và đều hơi cho đến khi ngọn lửa bùng lên.",
      "<strong>Bước 5 - Đào bếp Hoàng Cầm:</strong> Đào hố đặt nồi sâu 30cm, khoét rãnh dẫn khói ngầm dài 2-3m phủ cành cây và đất ẩm để tản khói vào không khí."
    ],
    commonMistakes: [
      "Chất củi quá dày làm ngạt oxy khiến lửa tắt lịm.",
      "Đánh lửa trên nền đất ẩm mà không lót vỏ cây khô bên dưới.",
      "Bỏ đi khi tro than chưa tắt ngấm hoàn toàn."
    ],
    safety: "Luôn để xô nước hoặc cát cạnh bếp lửa. Dập tắt hoàn toàn tro than bằng nước và vùi đất trước khi rời bãi trại.",
    practice: "Tự tay nhóm một bếp lửa nhỏ và đun sôi 500ml nước trong vòng 10 phút.",
    challenge: "Nhóm lửa thành công trong điều kiện trời vừa mưa ẩm bằng cách tách lõi gỗ khô bên trong.",
    assessment: "Bạn đạt khi: Tự nhóm được lửa không dùng diêm/bật lửa ga, nấu chín bữa ăn đơn giản và dọn sạch tro than an toàn.",
    relatedSkills: ["nut-day", "ha-than-nhiet", "leu-trai"]
  },

  // 4. KHÁM PHÁ & ĐỊNH HƯỚNG
  {
    id: "sk-uoc-dac-ban-do",
    slug: "uoc-dac",
    title: "Ước Đạc Thực Địa & Định Hướng La Bàn",
    title_en: "Field Estimation & Magnetic Compass Navigation",
    category: "kham-pha-dinh-huong",
    subcategory: "Ước đạc thực địa",
    shortDescription: "Đọc bản đồ địa hình, sử dụng la bàn từ tính, ước lượng chiều cao cây, độ rộng sông bằng phương pháp tam giác đồng dạng và định hướng mặt trời.",
    environment: "outdoor",
    difficulty: "hard",
    tags: ["Ước đạc", "La bàn", "Bản đồ", "Toán học thực tế"],
    media: {
      poster: "",
      videoId: ""
    },
    purpose: "Giúp Hướng đạo sinh không bị lạc đường, xác định phương hướng chính xác và tính toán khoảng cách thực tế mà không cần thiết bị điện tử GPS.",
    equipment: ["La bàn từ tính Silva (đĩa xoay chia độ)", "Bản đồ địa hình tỷ lệ 1:25000", "Gậy thiếu sinh đã khắc vạch đo", "Sổ nhật ký hành trình"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết được 4 hướng chính Đông - Tây - Nam - Bắc qua mặt trời mọc/lặn và biết nhìn kim nam châm chỉ về hướng Bắc từ."
      },
      thieu: {
        target: "Xác định góc phương vị (Azimuth) bằng la bàn, đi theo góc độ định trước qua các mốc chuẩn và ước tính chiều cao cây bằng phương pháp tỷ lệ gậy 1:10."
      },
      trang: {
        target: "Vẽ sơ đồ hành trình thám du (Trail map), giải mã tọa độ lưới bản đồ quân sự, dẫn đường đội hình băng qua địa hình rừng núi phức tạp."
      }
    },
    steps: [
      "<strong>1. Xác định hướng Bắc:</strong> Đặt la bàn nằm ngang trên lòng bàn tay, xoay đĩa chia độ cho vạch 'N' trùng khít với mũi tên từ tính màu đỏ.",
      "<strong>2. Đo góc phương vị mục tiêu:</strong> Hướng mũi tên chỉ hướng về vật chuẩn phía trước (ngọn cây, đỉnh núi) và đọc chỉ số độ trên vành chia.",
      "<strong>3. Ước đạc chiều cao cây (Phương pháp gậy):</strong> Cắm thẳng cây gậy 1m xuống đất, đo chiều dài bóng gậy và bóng cây, dùng quy tắc tam giác đồng dạng để suy ra chiều cao cây.",
      "<strong>4. Ước đạc độ rộng sông (Phương pháp mũ cối):</strong> Đứng bờ sông, hạ vành mũ sao cho mép vành chạm mép nước bờ đối diện; xoay người 90 độ dọc bờ sông, điểm chạm mép mũ chính là khoảng cách bằng độ rộng sông."
    ],
    commonMistakes: [
      "Đặt la bàn gần đồng hồ kim loại, điện thoại hoặc dao găm gây lệch kim từ tính.",
      "Quên tính góc lệch từ thiên giữa Bắc thực và Bắc từ tính.",
      "Bước chân không đều khi đo khoảng cách bằng bước chân đôi (Pace count)."
    ],
    safety: "Khi đi rừng, luôn ghi nhớ vật chuẩn nổi bật phía sau lưng để làm mốc quay về nếu mất phương hướng.",
    practice: "Dùng bước chân đôi đo chiều dài sân sinh hoạt Bắc Biên và dùng la bàn đi theo lộ trình zíc-zắc 3 góc phương vị.",
    challenge: "Tìm ra hộp kho báu được giấu trong khu rừng nhỏ chỉ bằng bản đồ thô và 4 góc phương vị liên tiếp.",
    assessment: "Bạn đạt khi: Đọc chuẩn xác góc phương vị của 3 mục tiêu bất kỳ và ước lượng chiều cao cây sai số không quá 10%.",
    relatedSkills: ["gay-thieu-sinh", "di-bo", "tham-du"]
  },

  // 5. SƠ CỨU & AN TOÀN
  {
    id: "sk-ha-than-nhiet-so-cuu",
    slug: "ha-than-nhiet",
    title: "Hạ Thân Nhiệt: Triệu Chứng & Sơ Cứu Khẩn Cấp",
    title_en: "Hypothermia: Recognition, Field Treatment & Prevention",
    category: "so-cuu-an-toan",
    subcategory: "Thời tiết & Môi trường",
    shortDescription: "Nhận diện triệu chứng run buốt, cách ly nguồn lạnh, thay đồ khô, làm ấm đúng cách từ vùng lõi cơ thể và phòng ngừa khi đi trại mùa đông.",
    environment: "both",
    difficulty: "medium",
    tags: ["Sơ cấp cứu", "An toàn", "Thời tiết lạnh", "Sinh tồn"],
    media: {
      poster: "image/kynang/ha-than-nhiet-so-cuu.png",
      videoId: ""
    },
    purpose: "Bảo vệ tính mạng người bị nạn khi thân nhiệt lõi tụt xuống dưới 35°C do ngâm nước lạnh, dầm mưa giông hoặc gió rét kéo dài.",
    equipment: ["Chăn cứu sinh nhôm phản nhiệt (Emergency blanket)", "Túi ngủ / chăn khô", "Quần áo khô sạch", "Túi chườm ấm hoặc chai nước ấm bọc khăn", "Nước đường gừng ấm"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết dấu hiệu khi bản thân hoặc bạn bị rét run lập cập, môi tím tái và biết báo ngay cho Huynh trưởng / người lớn."
      },
      thieu: {
        target: "Biết cách ly nạn nhân khỏi gió mưa, cởi bỏ đồ ướt thay đồ khô, đắp chăn nhôm phản nhiệt và chườm ấm đúng vị trí (cổ, nách, bẹn)."
      },
      trang: {
        target: "Đánh giá mức độ hạ thân nhiệt (nhẹ, trung bình, nặng), theo dõi dấu hiệu sinh tồn và tổ chức vận chuyển nạn nhân đến cơ sở y tế an toàn."
      }
    },
    steps: [
      "<strong>Nhận biết triệu chứng:</strong> Run rẩy dữ dội, da tái nhợt, môi tím ngắt, cử động vụng về, nói lắp bắp, mất phương hướng.",
      "<strong>Bước 1 - Cách ly nguồn lạnh:</strong> Đưa nạn nhân ngay vào lều kín gió, trải thảm cách nhiệt hoặc lá khô dưới lưng để ngăn mất nhiệt qua nền đất.",
      "<strong>Bước 2 - Thay đồ khô:</strong> Nhẹ nhàng cởi bỏ toàn bộ quần áo ẩm ướt, lau khô người và mặc quần áo ấm khô ráo.",
      "<strong>Bước 3 - Quấn chăn giữ nhiệt:</strong> Bọc nạn nhân trong chăn cứu sinh bằng nhôm hoặc túi ngủ dày.",
      "<strong>Bước 4 - Làm ấm từ vùng lõi:</strong> Đặt chai nước ấm bọc khăn vào các vị trí mạch máu lớn: 2 bên nách, 2 bên bẹn và vùng cổ. Cho uống nước đường ấm hoặc trà gừng nếu nạn nhân tỉnh táo.",
      "<strong>Điều cấm kỵ:</strong> Tuyệt đối không xoa bóp mạnh tay chân (gây sốc tim do máu lạnh tràn về tim), không cho uống rượu cồn hoặc nước đá."
    ],
    commonMistakes: [
      "Hơ lửa trực tiếp vào bàn tay/bàn chân bị cóng gây bỏng mô tế bào.",
      "Để nạn nhân nằm trực tiếp trên nền đất lạnh mà không lót thảm cách nhiệt.",
      "Cho người bất tỉnh uống nước gây sặc đường thở."
    ],
    safety: "Nếu nạn nhân ngừng thở hoặc hôn mê sâu, lập tức tiến hành ép tim ngoài lồng ngực (CPR) và gọi cấp cứu y tế 115.",
    practice: "Thực hành quấn chăn cứu sinh nhôm và cố định chai chườm ấm cho bạn giả định trong buổi sinh hoạt bầy.",
    challenge: "Thiết lập quy trình giữ ấm cơ thể cho cả phân đội trong một đêm trại mùa đông rét dưới 12°C.",
    assessment: "Bạn đạt khi: Trình bày chính xác 5 bước sơ cứu hạ thân nhiệt và nêu được 3 điều cấm kỵ tuyệt đối khi cấp cứu.",
    relatedSkills: ["di-bo", "leu-trai", "so-cuu"]
  },

  // 6. THIÊN NHIÊN
  {
    id: "sk-quan-sat-thien-nhien",
    slug: "thien-nhien",
    title: "Quan Sát Thiên Nhiên & Dự Báo Thời Tiết",
    title_en: "Nature Observation & Weather Forecasting",
    category: "thien-nhien",
    subcategory: "Quan sát thời tiết",
    shortDescription: "Đọc dấu hiệu mây trời, hướng gió, quan sát tập tính côn trùng động vật để dự đoán mưa bão và tìm cây cỏ hữu ích trong rừng.",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Thiên nhiên", "Môi trường", "Thời tiết", "Sinh học"],
    media: {
      poster: "",
      videoId: ""
    },
    purpose: "Giúp Hướng đạo sinh hòa mình với tự nhiên, chủ động ứng phó trước sự thay đổi của thời tiết và yêu quý thế giới động thực vật.",
    equipment: ["Kính lúp nhỏ", "Sổ tay ký họa thiên nhiên", "Bảng tra cứu các dạng mây"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết được mây mưa (mây đen sà thấp), chuồn chuồn bay thấp thì mưa và biết yêu thương chăm sóc cây xanh quanh mình."
      },
      thieu: {
        target: "Phân biệt được 4 tầng mây chính (mây tích, mây tầng, mây ti), đọc hướng gió bằng dải ruy băng và nhận biết cây cỏ lá ngón có độc."
      },
      trang: {
        target: "Xây dựng giáo án thiên nhiên học cho bầy đàn, tổ chức các dự án bảo tồn môi trường và làm sạch rác bãi bồi sông Hồng."
      }
    },
    steps: [
      "<strong>1. Quan sát mây:</strong> Mây vảy cá (mây ti) báo hiệu trời đẹp; mây đen hình đe (mây vũ tích) báo hiệu dông bão sấm sét sắp tới.",
      "<strong>2. Quan sát động vật:</strong> Kiến chuyển tổ lên cao, chuồn chuồn bay là là mặt nước là dấu hiệu trời sắp đổ mưa rào.",
      "<strong>3. Quan sát sương sớm:</strong> Sáng sớm cỏ đẫm sương đêm thường là ngày nắng ráo; sáng sớm trời oi bức không có sương dễ có mưa chiều.",
      "<strong>4. Nguyên tắc 7 điều Leave No Trace:</strong> Không để lại gì ngoài những dấu chân, không lấy đi gì ngoài những bức ảnh đẹp."
    ],
    commonMistakes: [
      "Hái hoặc nếm thử các loại nấm sặc sỡ trong rừng.",
      "Bẻ cành cây tươi bừa bãi khi sinh hoạt dã ngoại.",
      "Chủ quan không chuẩn bị bạt che khi thấy mây tích đen xuất hiện phía chân trời."
    ],
    safety: "Tuyệt đối không ăn nấm lạ, quả dại trong rừng khi chưa có sự kiểm định của Huynh trưởng am hiểu thực vật.",
    practice: "Ghi chép nhật ký thời tiết trong 7 ngày liên tiếp và so sánh với diễn biến thực tế.",
    challenge: "Dự đoán chính xác khả năng có mưa trước 2 tiếng trong kỳ trại chỉ dựa vào quan sát bầu trời và hướng gió.",
    assessment: "Bạn đạt khi: Nhận diện đúng 3 dạng mây cơ bản và phân tích được 4 dấu hiệu thời tiết trong dân gian.",
    relatedSkills: ["di-bo", "leu-trai", "bep-hoang-cam"]
  },

  // 7. TRUYỀN TIN & TRÒ CHƠI
  {
    id: "sk-mat-thu-semaphore",
    slug: "tham-du",
    title: "Mật Thư Dã Ngoại & Cờ Semaphore Truyền Tin",
    title_en: "Scout Ciphers, Trail Tracking & Semaphore",
    category: "truyen-tin-tro-choi",
    subcategory: "Mật thư & Giải mã",
    shortDescription: "Giải mã mật thư chữ thay thế, mật thư tọa độ, phát tín hiệu cờ Semaphore 2 tay và nhận biết dấu vết đi đường trên cành cây, sỏi đá.",
    environment: "both",
    difficulty: "medium",
    tags: ["Mật thư", "Semaphore", "Truyền tin", "Trò chơi lớn"],
    media: {
      poster: "",
      videoId: ""
    },
    purpose: "Kênh liên lạc bí mật và nhanh chóng giữa các phân đội khi thám du dã ngoại, rèn luyện tư duy logic, sự tập trung và tinh thần đồng đội.",
    equipment: ["2 lá cờ Semaphore (vuông 40x40cm, chia 2 màu đỏ-vàng)", "Bảng chữ cái mã hóa", "Giấy bút giải mã mật thư"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết được 6 dấu đi đường căn bản (Đi lối này, Cấm đi lối này, Có nước uống, Nước độc, Nguy hiểm, Về đất trại) xếp bằng cành cây sỏi đá."
      },
      thieu: {
        target: "Giải được các dạng mật thư chữ (chuồng bò, số thay chữ, quốc ngữ điện tín Telex) và phát nhận được 26 chữ cái cờ Semaphore tốc độ 15 ký tự/phút."
      },
      trang: {
        target: "Thiết kế hệ thống mật thư đa tầng cho Trò Chơi Lớn liên đoàn, điều phối các trạm truyền tin khoảng cách xa bằng cờ và gương phản chiếu."
      }
    },
    steps: [
      "<strong>1. Dấu đi đường (Trail signs):</strong> Vẽ hoặc xếp đá/cành cây trên mặt đất: mũi tên chỉ đường đi, chữ X cấm đi, vòng tròn có chấm ở giữa là về đất trại.",
      "<strong>2. Mật thư Chuồng Bò (Pigpen cipher):</strong> Dựa vào các ô lưới chữ thập và dấu chấm để biểu diễn từng ký tự tương ứng.",
      "<strong>3. Mật thư Quốc Ngữ Điện Tín:</strong> Áp dụng quy tắc gõ Telex (aa &rarr; â, oo &rarr; ô, s &rarr; dấu sắc, f &rarr; dấu huyền...).",
      "<strong>4. Cờ Semaphore:</strong> Giữ 2 tay thẳng tạo góc 45 độ theo 7 vòng xoay kim đồng hồ, tư thế đứng thẳng trang nghiêm, chuyển động dứt khoát."
    ],
    commonMistakes: [
      "Tay cầm cờ bị cong khuỷu tay làm sai lệch góc độ Semaphore khiến người đọc dịch nhầm chữ.",
      "Xếp dấu đi đường ở nơi người đi bộ dễ đá văng mất.",
      "Đọc sai chìa khóa (key) mật thư do không chú ý câu đố gợi ý ở đầu trang."
    ],
    safety: "Khi chạy trạm giải mật thư, luôn quan sát xe cộ và chướng ngại vật xung quanh, không vừa chạy vừa nhìn giấy.",
    practice: "Phát nhận thông điệp Semaphore 20 từ cùng bạn ở khoảng cách 50m qua sông hoặc sân bóng.",
    challenge: "Giải mã bức mật thư 3 tầng khóa trong thời gian dưới 8 phút để tìm ra tọa độ trạm dừng chân tiếp theo.",
    assessment: "Bạn đạt khi: Phát và nhận đúng bảng chữ cái Semaphore không sai quá 2 lỗi, giải đúng 3 dạng mật thư căn bản.",
    relatedSkills: ["uoc-dac", "di-bo", "nut-day"]
  },

  // 8. KỸ NĂNG SỐNG
  {
    id: "sk-an-toan-so-40",
    slug: "an-toan-so",
    title: "An Toàn Số 4.0 – Vững Vàng Trên Không Gian Mạng",
    title_en: "Cybersecurity & Responsible Digital Citizenship",
    category: "ky-nang-song",
    subcategory: "An toàn số 4.0",
    shortDescription: "Kỹ năng bảo mật mật khẩu 2 lớp, nhận diện lừa đảo trực tuyến, bảo vệ quyền riêng tư cá nhân và ứng xử văn minh trên mạng xã hội.",
    environment: "indoor",
    difficulty: "easy",
    tags: ["Kỹ năng số", "An toàn mạng", "Kỹ năng sống", "Công dân số"],
    media: {
      poster: "",
      videoId: ""
    },
    purpose: "Giúp các em Hướng đạo sinh thời đại 4.0 tự tin làm chủ công nghệ, không bị kẻ xấu lừa gạt trên Internet và xây dựng lối sống lành mạnh.",
    equipment: ["Điện thoại / máy tính kết nối Internet", "Sổ tay bảo mật thông tin"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết không bao giờ gửi ảnh cá nhân, địa chỉ nhà hay số điện thoại của bố mẹ cho người lạ trên mạng; biết xin phép bố mẹ trước khi tải ứng dụng mới."
      },
      thieu: {
        target: "Tự tạo mật khẩu mạnh (chữ hoa, số, ký tự đặc biệt), cài đặt xác thực 2 bước (2FA), nhận diện các đường link lừa đảo phishing và không chia sẻ tin giả."
      },
      trang: {
        target: "Quản trị an toàn thông tin các kênh truyền thông của liên đoàn, hướng dẫn các em nhỏ kỹ năng phòng chống bắt nạt trên mạng (Cyberbullying)."
      }
    },
    steps: [
      "<strong>1. Nguyên tắc 4 KHÔNG:</strong> Không bấm link lạ, Không gửi mã OTP cho bất kỳ ai, Không chia sẻ mật khẩu, Không kết bạn với tài khoản ẩn danh đáng ngờ.",
      "<strong>2. Đặt mật khẩu an toàn:</strong> Sử dụng cụm mật khẩu dài từ 12 ký tự trở lên kết hợp chữ hoa, chữ thường, số và biểu tượng đặc biệt.",
      "<strong>3. Xác thực 2 bước (2FA):</strong> Luôn bật bảo mật 2 lớp bằng ứng dụng Authenticator cho tài khoản Google, Facebook, Zalo.",
      "<strong>4. Ứng xử Hướng đạo trên mạng:</strong> Tuân thủ Điều luật thứ 5 và thứ 10: luôn lịch sự, tôn trọng người khác, không bình luận công kích hay chia sẻ nội dung độc hại."
    ],
    commonMistakes: [
      "Dùng ngày sinh hoặc số điện thoại làm mật khẩu cho mọi tài khoản.",
      "Đăng lịch trình đi du lịch hoặc vị trí check-in thời gian thực khi đang ở một mình.",
      "Tin vào các thông báo 'Trúng thưởng khủng' yêu cầu nạp thẻ cào."
    ],
    safety: "Khi gặp tin nhắn đe dọa, tống tiền hoặc dụ dỗ trên mạng, hãy chụp màn hình lại và báo ngay cho bố mẹ, Huynh trưởng hoặc thầy cô.",
    practice: "Kiểm tra và bật bảo mật 2 lớp cho tài khoản email và tài khoản mạng xã hội của chính mình.",
    challenge: "Thiết kế một cẩm nang đồ họa 5 quy tắc an toàn mạng để chia sẻ cho các bạn cùng lớp học.",
    assessment: "Bạn đạt khi: Thiết lập mật khẩu chuẩn an toàn cho các tài khoản cá nhân và vượt qua bài trắc nghiệm nhận diện 5 tình huống lừa đảo số.",
    relatedSkills: ["phuong-phap-edge", "ky-nang-song"]
  },

  // 9. CHUYÊN HIỆU (SECONDARY AREA)
  {
    id: "sk-chuyen-hieu-pet",
    slug: "chuyen-hieu-pet",
    title: "Chuyên Hiệu Chăn Nuôi: Chăm Sóc Cún Con & Chó",
    title_en: "Pet Care & Dog Handling Proficiency Badge",
    category: "chuyen-hieu",
    subcategory: "Chuyên hiệu ngành Thiếu",
    shortDescription: "Rèn luyện tình yêu thương động vật, tính kiên nhẫn, lòng trắc ẩn và tinh thần trách nhiệm chăm sóc vật nuôi trong gia đình theo Điều luật thứ 6.",
    environment: "both",
    difficulty: "medium",
    tags: ["Chuyên hiệu", "Thú cưng", "Động vật", "Trách nhiệm"],
    media: {
      poster: "image/kynang/chuyen-hieu-chan-nuoi-cho-cun.png",
      videoId: ""
    },
    purpose: "Chứng chỉ ghi nhận sự kiên trì và tinh thần trách nhiệm của người thiếu sinh trong việc tự tay nuôi dưỡng, chăm sóc và huấn luyện chó cưng.",
    equipment: ["Sổ theo dõi lịch ăn uống, tiêm phòng", "Dây dắt chó an toàn", "Bát đựng thức ăn/nước sạch", "Bàn chải lông và xà phòng tắm chuyên dụng"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết cho chó uống nước sạch đúng giờ, biết cách vuốt ve an toàn không làm chó giật mình và tuân thủ nguyên tắc rửa tay sau khi chơi với thú cưng."
      },
      thieu: {
        target: "Tự tay đảm nhận việc chăm sóc một chú cún trong 3 tháng liên tục: lên khẩu phần ăn, tắm chải lông, dắt đi dạo hàng ngày và dạy 3 lệnh cơ bản (Ngồi, Nằm, Lại đây)."
      },
      trang: {
        target: "Tuyên truyền ý thức tiêm phòng dại trong khu dân cư, hỗ trợ các trạm cứu hộ động vật và hướng dẫn đàn em thi lấy chuyên hiệu."
      }
    },
    steps: [
      "<strong>1. Dinh dưỡng & Vệ sinh:</strong> Lên thời gian biểu cho ăn đúng bữa, luôn có bát nước sạch, rửa sạch khay ăn và tắm rửa định kỳ 1-2 tuần/lần.",
      "<strong>2. Huấn luyện hành vi:</strong> Dùng phương pháp khen thưởng tích cực (thưởng hạt thức ăn và lời khen) để dạy lệnh: Ngồi (Sit), Nằm (Down), Lại đây (Come), Đứng yên (Stay).",
      "<strong>3. Theo dõi sức khỏe:</strong> Theo dõi lịch tiêm phòng vắc-xin dại hàng năm, tẩy giun định kỳ và nhận biết các dấu hiệu ốm sốt, bỏ ăn, tiêu chảy để đưa đi thú y.",
      "<strong>4. Tinh thần trách nhiệm:</strong> Luôn đeo dây dắt và rọ mõm khi đưa chó ra nơi công cộng, tự giác dọn sạch chất thải của thú cưng để bảo vệ vệ sinh chung."
    ],
    commonMistakes: [
      "Cho chó ăn thức ăn có chứa sô-cô-la, hành tỏi hoặc xương dăm gia cầm nhọn nguy hiểm.",
      "Đánh mắng chó khi huấn luyện khiến chó bị hoảng loạn, sợ hãi.",
      "Quên lịch tiêm phòng dại định kỳ hàng năm."
    ],
    safety: "Không chạm vào chó lạ khi chưa có sự đồng ý của chủ nuôi. Không chọc phá khi chó đang ăn hoặc đang ngủ.",
    practice: "Ghi chép sổ nhật ký chăm sóc cún cưng trong 4 tuần liên tiếp kèm ảnh chụp minh chứng.",
    challenge: "Huấn luyện chú cún thực hiện chuẩn xác chuỗi 3 lệnh Ngồi - Nằm - Bắt tay trước ban giám khảo Huynh trưởng.",
    assessment: "Bạn đạt chuyên hiệu khi: Huynh trưởng kiểm tra sổ theo dõi đạt chuẩn và chú cún thực hiện tốt các bài kiểm tra hành vi thân thiện.",
    relatedSkills: ["thien-nhien", "an-toan-so"]
  },

  // 10. GÓC HUYNH TRƯỞNG (SECONDARY AREA)
  {
    id: "sk-phuong-phap-edge",
    slug: "phuong-phap-edge",
    title: "Phương Pháp EDGE: Kỹ Năng Sư Phạm Của Huynh Trưởng",
    title_en: "The EDGE Teaching Method for Scout Leaders",
    category: "goc-huynh-truong",
    subcategory: "Kỹ năng lãnh đạo",
    shortDescription: "Phương pháp sư phạm 4 bước kinh điển của phong trào Hướng đạo thế giới: Giải thích (Explain) &rarr; Làm mẫu (Demonstrate) &rarr; Kèm cặp (Guide) &rarr; Trao quyền (Enable).",
    environment: "both",
    difficulty: "hard",
    tags: ["Huynh trưởng", "EDGE Method", "Sư phạm", "Lãnh đạo"],
    media: {
      poster: "image/kynang/phuong-phap-edge.png",
      videoId: ""
    },
    purpose: "Trang bị cho các bạn Huynh trưởng và Đội trưởng phương pháp truyền đạt kỹ năng khoa học, giúp đàn em học nhanh, hiểu sâu và tự tin làm được.",
    equipment: ["Giáo án bài học kỹ năng", "Dụng cụ trực quan thực hành", "Sổ theo dõi tiến độ đoàn sinh"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Các em đoàn sinh cảm nhận được sự kèm cặp tận tình của Trưởng, hào hứng làm theo mẫu và tự tin làm lại cho bạn bên cạnh."
      },
      thieu: {
        target: "Các bạn Đội trưởng / Đội phó biết áp dụng 4 bước EDGE để hướng dẫn các bạn mới vào đội thắt nút dây hoặc dựng lều."
      },
      trang: {
        target: "Các Huynh trưởng thiết kế trọn vẹn giáo án buổi sinh hoạt theo chuẩn EDGE, quan sát và đánh giá chính xác từng mức độ tiếp thu của đoàn sinh."
      }
    },
    steps: [
      "<strong>E - Explain (Giải thích):</strong> Trưởng nói rõ kỹ năng này tên là gì, tại sao cần học, áp dụng trong tình huống thực tế nào và mô tả tổng quan các bước.",
      "<strong>D - Demonstrate (Làm mẫu):</strong> Trưởng trực tiếp làm mẫu từng bước chậm rãi, rõ ràng trước mắt các em, vừa làm vừa nhấn mạnh các điểm quan trọng.",
      "<strong>G - Guide (Kèm cặp / Hướng dẫn):</strong> Để các em tự tay bắt đầu làm thử, Trưởng đứng cạnh quan sát, nhẹ nhàng uốn nắn sửa sai và khen ngợi động viên.",
      "<strong>E - Enable (Trao quyền / Tự làm):</strong> Để các em tự làm hoàn chỉnh từ đầu đến cuối mà không cần Trưởng can thiệp, tạo cơ hội cho các em dạy lại cho bạn bè."
    ],
    commonMistakes: [
      "Trưởng nói quá nhiều lý thuyết (bước Explain quá dài) mà không cho các em thực hành.",
      "Trưởng làm thay các em ở bước Guide vì sốt ruột thay vì kiên nhẫn để các em tự thử và sai.",
      "Không trao quyền (Enable) khiến các em luôn có tâm lý dựa dẫm vào Trưởng."
    ],
    safety: "Luôn tạo không khí cởi mở, tôn trọng, không trách phạt khi các em làm sai mà khích lệ tinh thần 'Gắng sức'.",
    practice: "Soạn một giáo án ngắn 10 phút hướng dẫn nút Dẹt theo đúng 4 bước E-D-G-E và dạy thử cho 2 bạn.",
    challenge: "Hướng dẫn thành công cho 100% thành viên trong phân đội nắm vững một kỹ năng mới trong 1 buổi sinh hoạt.",
    assessment: "Bạn đạt khi: Thực hiện đầy đủ 4 bước EDGE trước hội đồng Huynh trưởng và đoàn sinh thực hành đạt kết quả chuẩn xác.",
    relatedSkills: ["nut-day", "an-toan-so", "gay-thieu-sinh"]
  }
];

if (typeof window !== 'undefined') {
  window.SCOUT_SKILL_CATEGORIES = SCOUT_SKILL_CATEGORIES;
  window.SCOUT_SECONDARY_AREAS = SCOUT_SECONDARY_AREAS;
  window.SCOUT_SKILLS_DATA = SCOUT_SKILLS_DATA;
}
