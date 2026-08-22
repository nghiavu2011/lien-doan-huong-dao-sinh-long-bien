/**
 * Scouting Skills Knowledge System V1 - Full Knowledge Base
 * Liên đoàn Hướng đạo Long Biên
 */

const SCOUT_SKILL_CATEGORIES = [
  {
    id: "da-ngoai-trai",
    number: "01",
    name: "Dã ngoại & Trại",
    name_en: "Camping & Outdoor",
    icon: "🏕️",
    desc: "Kỹ năng dựng lều, chọn đất trại, xếp ba lô, đi bộ đường dài và nguyên tắc Leave No Trace.",
    subcategories: ["Lều trại", "Đất trại & Bãi cắm", "Hành trang & Ba lô", "Đi bộ đường dài", "Kỷ luật đất trại"]
  },
  {
    id: "scoutcraft",
    number: "02",
    name: "Scoutcraft",
    name_en: "Scoutcraft & Pioneering",
    icon: "🪢",
    desc: "Nút dẹt, nút thuyền chài, nút ghế đơn, ráp vuông, ráp ba chân, làm cổng trại và gậy thiếu sinh.",
    subcategories: ["Nút dây cơ bản", "Nút ráp nối gỗ", "Công trình tiên phong", "Gậy thiếu sinh"]
  },
  {
    id: "lua-nau-an",
    number: "03",
    name: "Lửa & Nấu ăn",
    name_en: "Firecraft & Camp Cooking",
    icon: "🔥",
    desc: "Tam giác tạo lửa, chuẩn bị củi mồi, nhóm lửa an toàn, dập lửa, bếp dã ngoại, nấu cơm và bếp Hoàng Cầm.",
    subcategories: ["Tam giác lửa & Củi", "Nhóm & Dập lửa", "Bếp trại dã chiến", "Nấu ăn ngoài trời", "Dinh dưỡng & Thực đơn"]
  },
  {
    id: "kham-pha-dinh-huong",
    number: "04",
    name: "Khám phá & Định hướng",
    name_en: "Navigation & Exploration",
    icon: "🧭",
    desc: "Xác định phương hướng, sử dụng la bàn, đọc bản đồ địa hình, đi theo phương vị, đo bước chân và ước lượng.",
    subcategories: ["Phương hướng & La bàn", "Bản đồ địa hình", "Ước đạc thực địa", "Lập lộ trình Route Card"]
  },
  {
    id: "so-cuu-an-toan",
    number: "05",
    name: "Sơ cứu & An toàn",
    name_en: "First Aid & Safety",
    icon: "🩹",
    desc: "Túi sơ cứu, vết trầy xước, chảy máu, bong gân, phồng rộp chân, hạ thân nhiệt, kiệt sức do nóng và gọi trợ giúp.",
    subcategories: ["Túi sơ cứu & Chuẩn bị", "Chấn thương phần mềm", "Thời tiết & Môi trường", "Khẩn cấp & Gọi trợ giúp"]
  },
  {
    id: "thien-nhien",
    number: "06",
    name: "Thiên nhiên",
    name_en: "Nature & Environment",
    icon: "🌲",
    desc: "Nhận biết cây cỏ, quan sát chim, theo dấu động vật, quan sát mây thời tiết, bảo vệ nguồn nước và nhật ký thiên nhiên.",
    subcategories: ["Thực vật & Cây rừng", "Chim & Động vật", "Thời tiết & Nguồn nước", "Leave No Trace & Nhật ký"]
  },
  {
    id: "truyen-tin-tro-choi",
    number: "07",
    name: "Truyền tin & Trò chơi",
    name_en: "Signaling & Games",
    icon: "🚩",
    desc: "Morse cơ bản, Semaphore, tín hiệu còi lệnh, dấu đường, theo dấu vết, mật thư thay thế, tọa độ và trò chơi lớn.",
    subcategories: ["Morse & Semaphore", "Tín hiệu còi & Dấu đường", "Mật thư & Mã hóa", "Trò chơi lớn"]
  },
  {
    id: "ky-nang-song",
    number: "08",
    name: "Kỹ năng sống",
    name_en: "Life Skills & Leadership",
    icon: "💡",
    desc: "Tự chuẩn bị hành trang, quản lý thời gian, làm việc Đội, phân công nhiệm vụ, quản lý tiền, an toàn mạng và xử lý khi bị lạc.",
    subcategories: ["Tự lập & Quản lý", "Làm việc nhóm & Đội", "An toàn số & Ứng phó", "Phục vụ cộng đồng"]
  }
];

const SCOUT_SECONDARY_AREAS = [
  {
    id: "chuyen-hieu",
    number: "09",
    name: "Chuyên hiệu Hướng đạo",
    name_en: "Proficiency Badges",
    icon: "🏅",
    desc: "Hệ thống chuyên hiệu rèn luyện sở thích, nghề nghiệp và trách nhiệm bản thân (Thú cưng, Nhiếp ảnh, Nấu ăn, Sơ cứu...).",
    subcategories: ["Động vật & Thiên nhiên", "Kỹ năng thực hành", "Nghệ thuật & Thể thao", "Khoa học & Kỹ thuật", "Cứu nạn & Xã hội"]
  },
  {
    id: "goc-huynh-truong",
    number: "10",
    name: "Góc Huynh trưởng",
    name_en: "Scouters' Corner",
    icon: "🎓",
    desc: "Phương pháp sư phạm Hướng đạo, phương pháp EDGE, điều hành lửa trại, quản lý rủi ro và tâm lý lứa tuổi.",
    subcategories: ["Phương pháp sư phạm", "Tổ chức hoạt động trại", "Huấn luyện & Lãnh đạo", "Tâm lý & An toàn bảo vệ trẻ"]
  }
];

const SCOUT_SKILLS_DATA = [
  // ==========================================
  // 01. DÃ NGOẠI & TRẠI
  // ==========================================
  {
    id: "sk-dung-leu-dung-ky-thuat",
    slug: "leu-trai",
    title: "1. Dựng lều đúng kỹ thuật",
    title_en: "Pitching Tents with Proper Technique",
    category: "da-ngoai-trai",
    subcategory: "Lều trại",
    shortDescription: "Một chiếc lều dựng đúng không chỉ giúp chúng ta nghỉ ngơi tốt mà còn đảm bảo an toàn cho cả đội. Chọn vị trí, trải lều, dựng khung, đóng cọc và căng dây.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Lều trại", "Dã ngoại", "Nút dây", "Leave No Trace"],
    media: { poster: "image/kynang/1-dung-leu-dung-ky-thuat.jpg", videoId: "" },
    purpose: "Tạo nơi trú ngụ an toàn, khô ráo, che mưa nắng, bảo vệ sức khỏe và đồ đạc của toàn đội trong các kỳ trại dã ngoại thiên nhiên.",
    equipment: ["Vải lều chữ A hoặc bạt chống thấm (3x4m)", "2 cây gậy chính (1m8 - 2m)", "4 cọc góc (40cm)", "6-8 cọc lều", "Dây dù lều (dây căng chịu lực)", "Búa/vồ đóng cọc"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết các bộ phận của lều (thân lều, cọc, gậy chính, dây neo) và tham gia giữ cột, trải bạt cùng đội."
      },
      thieu: {
        target: "Tự dựng và tháo hoàn chỉnh một loại lều thông dụng (lều chữ A hoặc lều vòm igloo), đóng cọc nghiêng 45 độ hướng ra ngoài."
      },
      trang: {
        target: "Chọn khu đất trại tổng thể, tổ chức và hướng dẫn đội dựng nhiều lều thẳng hàng, đào rãnh thoát nước dã chiến trước khi mưa."
      }
    },
    steps: [
      "<strong>Bước 1 - Dọn nền:</strong> Nhặt sạch đá nhọn, cành khô, kiểm tra tổ côn trùng tại khu đất.",
      "<strong>Bước 2 - Trải đáy & định vị cọc:</strong> Trải bạt đáy phẳng, đóng 4 cọc góc nghiêng 45 độ hướng ra phía ngoài lều.",
      "<strong>Bước 3 - Dựng 2 cột chính:</strong> Buộc dây đỉnh lều bằng nút thuyền chài, nâng 2 cột chính đứng thẳng vuông góc mặt đất.",
      "<strong>Bước 4 - Căng dây neo đỉnh:</strong> Kéo căng 2 dây neo chính ra trước và sau lều, cố định vào cọc neo chính.",
      "<strong>Bước 5 - Căng các mép mái:</strong> Căng đều các dây mép sao cho mặt bạt thẳng thớm không bị chùng đọng nước.",
      "<strong>Bước 6 - Đào rãnh thoát nước:</strong> Đào rãnh sâu 10-15cm quanh mép mái theo hướng dốc."
    ],
    commonMistakes: [
      "Đóng cọc thẳng đứng 90 độ khiến cọc dễ bị nhổ khi có gió lớn.",
      "Mái lều chùng đọng nước làm thấm ướt vào trong lều.",
      "Dựng lều dưới tán cây khô có cành mục."
    ],
    safety: "Không bao giờ dùng nến hoặc đốt lửa trong lều. Luôn kiểm tra dây néo ban đêm tránh vấp ngã.",
    practice: "Cùng 3 bạn đội viên thực hành dựng hoàn chỉnh lều chữ A trong thời gian dưới 12 phút.",
    challenge: "Dựng lều kiên cố chịu được gió mạnh và kiểm tra rãnh thoát nước hoạt động tốt khi gặp mưa.",
    assessment: "Bạn đạt khi: Có thể dựng lều chắc chắn, đúng hướng và thu dọn hoàn chỉnh.",
    relatedSkills: ["chon-dat-trai", "nut-day", "bep-hoang-cam"]
  },

  {
    id: "sk-chon-dat-trai",
    slug: "chon-dat-trai",
    title: "2. Chọn đất trại an toàn",
    title_en: "Safe Camp Site Selection & Layout",
    category: "da-ngoai-trai",
    subcategory: "Đất trại & Bãi cắm",
    shortDescription: "Đọc địa hình – chọn nơi cao ráo – dựng trại an toàn. Sơ đồ bố trí tam giác: Khu lều ở giữa, khu nấu ăn cách 20-30m, khu vệ sinh cách 30-50m xuôi gió.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Đất trại", "An toàn", "Địa hình", "Dã ngoại"],
    media: { poster: "image/kynang/6-chon-dat-trai-an-toan.jpg", videoId: "" },
    purpose: "Đảm bảo sự an toàn tính mạng, giấc ngủ thoải mái và sinh hoạt thuận tiện cho cả liên đoàn trong suốt kỳ trại.",
    equipment: ["Bản đồ khu vực trại", "La bàn định hướng", "Sổ ghi chép khảo sát"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết được mặt đất bằng phẳng, không dựng lều ở lối đi chung hoặc nơi có rác bẩn."
      },
      thieu: {
        target: "Biết quan sát hướng gió, hướng nắng buổi sáng, nhận biết cành cây khô trên đầu và vệt nước lũ trên thân cây ven suối."
      },
      trang: {
        target: "Quy hoạch tổng thể mặt bằng đất trại: phân khu lều ngủ, khu bếp nấu cách 30m xuôi gió, khu vệ sinh cách 50m cuối nguồn nước và sân cờ trung tâm."
      }
    },
    steps: [
      "<strong>1. Kiểm tra mặt đất:</strong> Chọn nền đất cao ráo, hơi thoai thoải để thoát nước tốt, nền cỏ hoặc đất nén chặt.",
      "<strong>2. Kiểm tra trên cao (Widow-makers):</strong> Nhìn lên các tán cây phía trên, tránh xa các cành cây khô mục hoặc cây nghiêng dễ gãy.",
      "<strong>3. Khoảng cách nguồn nước:</strong> Hạ trại cách bờ sông suối tối thiểu 50-60m để tránh lũ quét bất ngờ và côn trùng.",
      "<strong>4. Hướng gió & Hướng nắng:</strong> Cửa lều nên quay về hướng Đông/Đông Nam đón nắng sớm, lưng lều đón hướng gió chính."
    ],
    commonMistakes: [
      "Hạ trại ở đáy thung lũng hoặc lòng suối cạn (nguy cơ lũ quét cực cao).",
      "Dựng lều ngay dưới cây to cô độc khi trời có nguy cơ dông sét."
    ],
    safety: "Luôn khảo sát bãi trại trước khi trời tối. Không bao giờ dựng trại ở vùng đất có dấu hiệu sạt lở bùn đất.",
    practice: "Khảo sát và vẽ sơ đồ phân khu cho một bãi đất trại diện tích 500m2.",
    challenge: "Đánh giá và chỉ ra 3 điểm nguy hiểm tiềm ẩn của một bãi cắm trại lạ trong vòng 5 phút.",
    assessment: "Bạn đạt khi: Giải thích được tại sao một vị trí phù hợp hoặc không phù hợp để dựng trại.",
    relatedSkills: ["leu-trai", "thu-trai-leave-no-trace", "thien-nhien"]
  },

  {
    id: "sk-xep-ba-lo",
    slug: "xep-ba-lo",
    title: "3. Xếp ba lô đúng cách",
    title_en: "Proper Backpack Packing - Balance & Access",
    category: "da-ngoai-trai",
    subcategory: "Hành trang & Ba lô",
    shortDescription: "Gọn – cân bằng – dễ lấy – đi đường đỡ mỏi. Sơ đồ cắt ngang: Đồ nặng sát giữa lưng, đồ ngủ dưới đáy, áo mưa/sơ cứu ngăn ngoài dễ lấy.",
    environment: "both",
    difficulty: "easy",
    tags: ["Ba lô", "Hành trang", "Tự lập", "Hiking"],
    media: { poster: "image/kynang/7-xep-ba-lo-dung-cach.jpg", videoId: "" },
    purpose: "Giúp trọng lượng phân bổ đều lên hông và vai, bảo vệ cột sống, không bị mất sức và giữ đồ đạc luôn khô ráo.",
    equipment: ["Ba lô dã ngoại có đai hông trợ lực", "Túi chống nước / bọc nilon bảo vệ đồ", "Hành trang cá nhân chuẩn"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Tự kiểm tra checklist đồ dùng cá nhân, tự gấp quần áo gọn gàng và tự đeo ba lô của mình."
      },
      thieu: {
        target: "Xếp ba lô theo nguyên tắc 3 tầng: Đồ nhẹ/túi ngủ dưới đáy &rarr; Đồ nặng sát sống lưng &rarr; Đồ hay dùng (áo mưa, sơ cứu) trên nắp."
      },
      trang: {
        target: "Kiểm soát trọng lượng ba lô toàn đội không vượt quá 20-25% trọng lượng cơ thể mỗi đoàn sinh, hướng dẫn phân bổ đồ dùng chung của đội."
      }
    },
    steps: [
      "<strong>Tầng 1 (Đáy ba lô):</strong> Túi ngủ, quần áo ngủ, thảm cách nhiệt (đồ nhẹ, chỉ dùng khi hạ trại).",
      "<strong>Tầng 2 (Sát sống lưng):</strong> Đồ nặng như bếp, xoong nồi, đồ hộp, lương khô (giúp trọng tâm kéo sát vào người).",
      "<strong>Tầng 3 (Phía ngoài & Trên đỉnh):</strong> Quần áo thay, áo khoác ấm, đồ dùng cá nhân.",
      "<strong>Ngăn nắp & Túi phụ:</strong> Áo mưa, bộ sơ cứu cá nhân, bình nước, còi cứu sinh, đèn pin (lấy ra ngay trong 5 giây mà không cần mở ba lô)."
    ],
    commonMistakes: [
      "Để đồ nặng ở đáy hoặc ngoài cùng ba lô khiến ba lô kéo người ngửa ra sau.",
      "Không bọc đồ trong túi nilon kín khiến quần áo ướt sũng khi gặp mưa.",
      "Treo móc quá nhiều đồ lủng lẳng bên ngoài ba lô gây vướng víu cây rừng."
    ],
    safety: "Điều chỉnh dây đai hông ôm khít xương chậu để 70% trọng lượng dồn vào hông, 30% dồn vào vai.",
    practice: "Tự chuẩn bị và xếp hoàn chỉnh ba lô cho chuyến đi 2 ngày trong 15 phút.",
    challenge: "Thực hiện thử thách ba lô tự đứng vững trên mặt đất mà không bị đổ nghiêng.",
    assessment: "Bạn đạt khi: Có thể tự chuẩn bị ba lô cho một chuyến đi 1–2 ngày.",
    relatedSkills: ["di-bo", "so-cuu", "tu-chuan-bi-hanh-trang"]
  },

  {
    id: "sk-di-bo-duong-dai",
    slug: "di-bo",
    title: "4. Đi bộ đường dài",
    title_en: "Trail Trekking - Pace, Formation & Safety",
    category: "da-ngoai-trai",
    subcategory: "Đi bộ đường dài",
    shortDescription: "Bền sức – giữ đội hình – an toàn trên đường. Đi đúng nhịp, nguyên tắc Buddy System, không tách đoàn, nghỉ hợp lý và xử lý 5 địa hình.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Hiking", "Thám du", "Dã ngoại", "Outdoor", "Địa hình"],
    media: { poster: "image/kynang/8-di-bo-duong-dai.jpg", videoId: "" },
    purpose: "Giúp đoàn sinh di chuyển an toàn, giữ sức bền, không bị kiệt sức, phòng ngừa chấn thương và xử lý sự cố trên 5 địa hình trọng yếu.",
    equipment: ["Giày đi bộ độ bám cao", "Gậy thiếu sinh", "Bình nước cá nhân (tối thiểu 1L)", "Mũ che nắng", "Áo mưa", "Còi cứu sinh"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Đi theo hàng một sau người dẫn đầu, duy trì khoảng cách 1.5m, biết báo hiệu khi cần dừng và không tự ý tách đoàn."
      },
      thieu: {
        target: "Duy trì nhịp thở 2 bước hít - 2 bước thở, sử dụng gậy thiếu sinh chống trơn zíc-zắc, nhấp nước từng ngụm nhỏ và biết chăm sóc bàn chân."
      },
      trang: {
        target: "Phân công người dẫn đầu (Pioneer) và chốt đoàn (Sweeper), điều tiết nhịp độ cả đoàn theo người đi chậm nhất, xử lý tình huống thời tiết xấu."
      }
    },
    steps: [
      "<strong>Khu vực 1 - Lối mòn đất phẳng:</strong> Đi đều bước, giữ nhịp thở, duy trì khoảng cách an toàn 1.5m giữa các đoàn sinh.",
      "<strong>Khu vực 2 - Sườn dốc trơn trượt:</strong> Chống gậy thiếu sinh tạo điểm tựa tam giác, hạ thấp trọng tâm, bước chéo chân theo đường zíc-zắc.",
      "<strong>Khu vực 3 - Băng qua suối đá cuội:</strong> Kiểm tra độ sâu bằng gậy, chỉ dẫm lên đá chìm có mặt nhám, không nhảy từ đá này sang đá khác.",
      "<strong>Khu vực 4 - Rừng rậm & Sương mù:</strong> Đi sát đội hình, quan sát kỹ dấu đi đường của người dẫn đầu.",
      "<strong>Khu vực 5 - Bãi hạ trại:</strong> Chọn nền bằng phẳng cao ráo, cách xa bờ nước lũ quét tối thiểu 50m."
    ],
    commonMistakes: [
      "Chạy nhanh lúc đầu làm kiệt sức giữa chặng.",
      "Uống nước ừng ực một lúc nhiều thay vì nhấp từng ngụm.",
      "Dẫm lên đá ướt có rêu trơn khi qua suối."
    ],
    safety: "Quy tắc nghỉ ngơi: Đi 50 phút - Nghỉ 10 phút. Khi nghỉ ngơi, nới lỏng dây giày và gác chân lên cao.",
    practice: "Thực hành đi bộ 5km quanh bãi bồi sông Hồng, mang ba lô 3kg đúng tư thế.",
    challenge: "Dẫn dắt phân đội hoàn thành cự ly 8km mà không có bạn nào bị phồng rộp chân.",
    assessment: "Bạn đạt khi: Hoàn thành hành trình đúng kế hoạch mà vẫn bảo đảm an toàn cho bản thân và đội.",
    relatedSkills: ["gay-thieu-sinh", "phong-rop-chan", "ha-than-nhiet"]
  },

  {
    id: "sk-sinh-hoat-trai",
    slug: "sinh-hoat-trai",
    title: "5. Sinh hoạt trại",
    title_en: "Camp Life Organization & Discipline",
    category: "da-ngoai-trai",
    subcategory: "Kỷ luật đất trại",
    shortDescription: "Tổ chức khu ngủ, khu bếp, đồ dùng, nước sạch và vệ sinh tại trại.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Đất trại", "Kỷ luật", "Vệ sinh", "Sinh hoạt"],
    media: { poster: "image/kynang/9-sinh-hoat-trai-bo-tri-khu-trai.jpg", videoId: "" },
    purpose: "Xây dựng nếp sống tự lập, kỷ luật tự giác, giữ gìn vệ sinh chung và đảm bảo cuộc sống tiện nghi, văn minh giữa thiên nhiên.",
    equipment: ["Thùng chứa nước sạch", "Xô rác phân loại", "Dụng cụ dọn vệ sinh", "Nội quy đất trại"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Tự sắp xếp giày dép trước cửa lều, tự bảo quản đồ dùng cá nhân và tuân thủ giờ giấc hiệu lệnh còi."
      },
      thieu: {
        target: "Thực hiện đúng lịch trực nhật phân đội: lấy nước sạch, dọn bàn ăn, rửa xoong nồi và giữ khu lều luôn ngăn nắp."
      },
      trang: {
        target: "Điều hành chương trình đất trại liên đoàn, kiểm tra vệ sinh an toàn thực phẩm và duy trì kỷ luật trực gác đêm."
      }
    },
    steps: [
      "<strong>1. Phân chia khu vực:</strong> Lều ngủ ngăn nắp, giày dép để trên giá dép ngoài hiên lều, ba lô đặt gọn ở góc.",
      "<strong>2. Quản lý nước sạch:</strong> Thùng nước uống có nắp đậy kín, có ca múc riêng, không rửa tay trực tiếp vào thùng nước.",
      "<strong>3. Khu vực bếp & Rửa dọn:</strong> Rửa bát xuôi nguồn gió, đổ nước thải vào hố thấm có phủ tro và lá cây.",
      "<strong>4. Kỷ luật âm thanh:</strong> Giữ yên lặng sau giờ giới nghiêm (Taps) để hồi phục sức khỏe cho ngày hôm sau."
    ],
    commonMistakes: [
      "Vứt rác bừa bãi quanh lều thu hút chuột bọ và kiến.",
      "Để đồ ướt lẫn lộn với đồ khô gây ẩm mốc."
    ],
    safety: "Luôn kiểm tra đèn pin và giày dép trước khi xỏ chân vào (đề phòng côn trùng hoặc bò cạp chui vào)."
    ,practice: "Đảm nhận nhiệm vụ Đội trực nhật trong 1 ngày trại và hoàn thành xuất sắc các khâu vệ sinh.",
    challenge: "Duy trì khu lều của phân đội đạt điểm 10 kiểm tra vệ sinh đất trại từ Ban Huynh trưởng.",
    assessment: "Bạn đạt khi: Giữ gìn khu vực lều trại luôn sạch sẽ, đúng giờ và hoàn thành tốt nhiệm vụ trực nhật.",
    relatedSkills: ["thu-trai-leave-no-trace", "bep-hoang-cam", "lam-viec-theo-doi"]
  },

  {
    id: "sk-thu-trai-leave-no-trace",
    slug: "thu-trai-leave-no-trace",
    title: "6. Thu trại – Leave No Trace",
    title_en: "Camp Strike & Leave No Trace Protocol",
    category: "da-ngoai-trai",
    subcategory: "Kỷ luật đất trại",
    shortDescription: "Rời đi gọn gàng – sạch sẽ – gần như không để lại dấu vết. Quy trình 6 bước: Kiểm kê đồ &rarr; Dọn rác &rarr; Xử lý tro bếp &rarr; Kiểm tra cọc đất &rarr; Hoàn trả hiện trạng &rarr; Kiểm tra lần cuối.",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Leave No Trace", "Môi trường", "Kỷ luật", "Thu trại"],
    media: { poster: "image/kynang/10-thu-trai-leave-no-trace.jpg", videoId: "" },
    purpose: "Bảo vệ môi trường tự nhiên, thể hiện phẩm cách của người Hướng đạo sinh: không để lại gì ngoài những dấu chân.",
    equipment: ["Túi đựng rác phân loại", "Bay/xẻng dã chiến lấp hố", "Dụng cụ dọn rác"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết nhặt sạch từng mẩu rác nhỏ quanh khu vực lều của mình và cho vào đúng túi rác."
      },
      thieu: {
        target: "Biết dập tắt hoàn toàn bếp lửa, lấp phẳng các rãnh thoát nước và hố rác hữu cơ, nhổ cọc và cuộn dây lều gọn gàng."
      },
      trang: {
        target: "Tổ chức 'Hàng quân rà rác' (Police sweep) toàn bộ bãi trại, nghiệm thu và trả lại nguyên trạng mặt bằng cho địa phương."
      }
    },
    steps: [
      "<strong>Bước 1 - Thu đồ cá nhân & Lều:</strong> Gấp lều khô ráo, đếm đủ số cọc lều, cuộn dây buộc theo con sâu.",
      "<strong>Bước 2 - Xử lý bếp lửa:</strong> Tưới nước dập tắt hoàn toàn tro than, đảo nguội, phân tán tro than và lấp phẳng đất.",
      "<strong>Bước 3 - Lấp rãnh thoát nước:</strong> Cào đất hoàn trả các rãnh nước và hố rác hữu cơ.",
      "<strong>Bước 4 - Hàng quân rà rác:</strong> Cả đội dàn hàng ngang cách nhau 1 sải tay, bước đều quét sạch 100% rác vô cơ mang về thành phố xử lý."
    ],
    commonMistakes: [
      "Gấp lều khi vải lều còn ướt sương gây mốc hỏng lều.",
      "Để sót cọc lều găm trong lòng đất gây nguy hiểm cho người đi sau."
    ],
    safety: "Chạm tay kiểm tra tro bếp đã nguội hẳn trước khi lấp đất.",
    practice: "Thực hiện quy trình rà soát Leave No Trace trên diện tích 200m2 bãi trại.",
    challenge: "Sau khi thu trại, khu đất trông tự nhiên và sạch hơn cả thời điểm trước khi đoàn đến dựng trại.",
    assessment: "Bạn đạt khi: Sau khi rời đi gần như không còn dấu vết của khu trại.",
    relatedSkills: ["sinh-hoat-trai", "dap-lua-hoan-toan", "thien-nhien"]
  },

  // ==========================================
  // 02. SCOUTCRAFT
  // ==========================================
  {
    id: "sk-nut-det",
    slug: "nut-det",
    title: "1. Nút dẹt (Reef Knot)",
    title_en: "Square / Reef Knot",
    category: "scoutcraft",
    subcategory: "Nút dây cơ bản",
    shortDescription: "Nối hai đầu của cùng một loại dây trong những tình huống phù hợp: gói hàng, buộc dây giày, băng bó cứu thương.",
    environment: "both",
    difficulty: "easy",
    tags: ["Nút dây", "Scoutcraft", "Sơ cứu", "Cơ bản"],
    media: { poster: "image/kynang/nut-det-chuan.png", videoId: "" },
    purpose: "Nối 2 đầu dây có cùng tiết diện và chất liệu, dễ thắt, nằm phẳng và rất dễ tháo mở khi cần.",
    equipment: ["Dây thừng dã ngoại 1m - 2m", "Băng tam giác cứu thương"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Buộc theo mẫu đúng quy tắc 'Phải qua Trái, Trái qua Phải'."
      },
      thieu: {
        target: "Tự thắt nhanh trong 5 giây, giải thích ứng dụng trong băng bó sơ cứu và gói buộc hàng."
      },
      trang: {
        target: "Hướng dẫn người khác thắt đúng, chỉ ra trường hợp không nên sử dụng (không dùng nối dây khác kích thước hoặc chịu tải cứu sinh leo núi)."
      }
    },
    steps: [
      "<strong>Bước 1:</strong> Cầm 2 đầu dây trên 2 tay.",
      "<strong>Bước 2:</strong> Đặt đầu dây Phải bắt chéo lên trên đầu dây Trái, luồn qua và siết nhẹ.",
      "<strong>Bước 3:</strong> Đặt đầu dây Trái bắt chéo lên trên đầu dây Phải, luồn qua và rút chặt.",
      "<strong>Kiểm tra:</strong> Hai vòng dây lồng vào nhau cân đối, nằm phẳng và có thể trượt nhẹ để tháo mở dễ dàng."
    ],
    commonMistakes: [
      "Thắt 'Phải qua Trái, Phải qua Trái' &rarr; Tạo thành Nút Bò (Granny Knot) dễ tuột hoặc bị kẹt cứng."
    ],
    safety: "Tuyệt đối không dùng nút dẹt để nối 2 sợi dây có kích thước khác nhau hoặc dùng để đu dây chịu tải trọng người.",
    practice: "Thực hành thắt nút dẹt khi nhắm mắt trong thời gian 5 giây.",
    challenge: "Ứng dụng nút dẹt để cố định băng tam giác sơ cứu vết thương trán đạt chuẩn y tế.",
    assessment: "Bạn đạt khi: Tự thắt đúng, tháo mở nhanh và giải thích được khi nào nên và không nên dùng.",
    relatedSkills: ["nut-thuyen-chai", "tui-so-cuu", "gay-thieu-sinh"]
  },

  {
    id: "sk-nut-thuyen-chai",
    slug: "nut-thuyen-chai",
    title: "2. Nút thuyền chài (Clove Hitch)",
    title_en: "Clove Hitch - Fast, Easy & Secure",
    category: "scoutcraft",
    subcategory: "Nút dây cơ bản",
    shortDescription: "Nút thuyền chài (Clove Hitch) là nút cơ bản dùng để buộc nhanh vào cọc, cột hoặc vật trụ: Dễ làm – Dễ tháo – Chắc chắn.",
    environment: "both",
    difficulty: "easy",
    tags: ["Nút dây", "Pioneering", "Scoutcraft", "Clove Hitch"],
    media: { poster: "image/kynang/2-nut-thuyen-chai.jpg", videoId: "" },
    purpose: "Khởi đầu và kết thúc cho hầu hết các nút ráp nối gỗ tiên phong, neo dây lều vào cọc và buộc thuyền vào bờ.",
    equipment: ["Dây thừng 2m", "Cọc gỗ hoặc gậy thiếu sinh"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết cách tròng 2 vòng tròn lồng vào nhau qua đầu cọc."
      },
      thieu: {
        target: "Tự quấn thắt trực tiếp lên thân cây đứng không có đầu cọc hở, siết chặt và khóa đuôi dây an toàn."
      },
      trang: {
        target: "Ứng dụng làm nút khởi đầu/kết thúc cho toàn bộ các nút ráp tiên phong cầu tháp của liên đoàn."
      }
    },
    steps: [
      "<strong>Cách 1 (Tròng qua đầu cọc):</strong> Tạo 2 vòng tròn ngược chiều nhau, đặt vòng sau chồng lên vòng trước, tròng qua cọc và rút chặt.",
      "<strong>Cách 2 (Quấn thân cây):</strong> Quấn 1 vòng quanh thân cây, bắt chéo qua sợi dây chính, quấn vòng thứ hai và luồn đầu dây dưới sợi bắt chéo, rút chặt."
    ],
    commonMistakes: [
      "Luồn đầu dây sai chiều khiến nút bị tuột khi có lực kéo một chiều."
    ],
    safety: "Khóa thêm nửa nút khóa (Half hitch) ở đuôi dây nếu dùng neo dây lều chịu gió giật.",
    practice: "Thực hành cả 2 cách thắt nút thuyền chài trong 10 giây mỗi cách.",
    challenge: "Neo cố định một đầu dây lều chịu lực căng mạnh mà nút không bị xê dịch.",
    assessment: "Bạn đạt khi: Thành thạo cả 2 cách thắt trên cọc hở và trên thân cây kín.",
    relatedSkills: ["nut-det", "rap-vuong", "rap-ba-chan"]
  },

  {
    id: "sk-nut-ghe-don",
    slug: "nut-ghe-don",
    title: "3. Nút ghế đơn (Bowline)",
    title_en: "Bowline Knot - The King of Knots",
    category: "scoutcraft",
    subcategory: "Nút dây cơ bản",
    shortDescription: "Tạo một vòng dây cố định không tự siết - 'Vua của các loại nút dây' dùng cứu nạn và cứu hộ.",
    environment: "both",
    difficulty: "medium",
    tags: ["Nút dây", "Cứu hộ", "Bowline", "Scoutcraft"],
    media: { poster: "image/kynang/nut-ghe-don-bowline.png", videoId: "" },
    purpose: "Tạo vòng dây không thít chặt quanh người bị nạn để kéo lên từ giếng sâu, vực dốc hoặc quăng dây cứu đuối nước.",
    equipment: ["Dây thừng cứu hộ 3m - 5m"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhớ câu chuyện 'Con thỏ chui ra khỏi hang, chạy quanh gốc cây rồi chui lại vào hang'."
      },
      thieu: {
        target: "Tự thắt nút ghế đơn quanh eo của chính mình bằng 1 tay trong tình huống cứu hộ giả định."
      },
      trang: {
        target: "Kiểm tra độ chịu lực của dây thừng, lập phương án tời kéo người bị nạn an toàn tuyệt đối."
      }
    },
    steps: [
      "<strong>Bước 1:</strong> Tạo một vòng lặp nhỏ (hang thỏ) trên sợi dây chính.",
      "<strong>Bước 2:</strong> Luồn đầu dây (con thỏ) từ dưới chui lên qua hang.",
      "<strong>Bước 3:</strong> Vòng đầu dây ra phía sau thân dây chính (gốc cây).",
      "<strong>Bước 4:</strong> Luồn đầu dây chui ngược trở lại xuống hang và rút chặt."
    ],
    commonMistakes: [
      "Tạo vòng hang thỏ sai chiều khiến nút bị lỏng biến thành nút chạy."
    ],
    safety: "Vòng dây không bao giờ tự siết chặt làm nạn nhân bị ngạt thở.",
    practice: "Thực hành thắt nút Bowline quanh thân cây và quanh eo mình trong 8 giây.",
    challenge: "Quăng đầu dây cứu nạn nhân cách xa 5m và người bị nạn tự thắt Bowline quanh người.",
    assessment: "Bạn đạt khi: Tự thắt đúng, vòng dây chịu lực không đổi kích thước và dễ tháo sau khi chịu tải.",
    relatedSkills: ["nut-thuyen-chai", "tui-so-cuu", "gay-thieu-sinh"]
  },

  {
    id: "sk-rap-vuong",
    slug: "rap-vuong",
    title: "4. Ráp vuông (Square Lashing)",
    title_en: "Square Lashing for Pioneering",
    category: "scoutcraft",
    subcategory: "Nút ráp nối gỗ",
    shortDescription: "Ghép hai cây gần vuông góc để làm công trình trại: giá treo, bàn ăn, thang leo, cầu tháp.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Ráp cây", "Pioneering", "Scoutcraft", "Tiên phong"],
    media: { poster: "image/kynang/rap-vuong-ba-chan.png", videoId: "" },
    purpose: "Liên kết vững chắc hai thanh gỗ giao nhau góc 90 độ mà không cần dùng đến đinh ốc.",
    equipment: ["2 khúc gỗ/gậy tre", "Dây dù ráp cây 3m - 4m"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Phụ giúp giữ 2 khúc gỗ vuông góc và hiểu nguyên lý quấn dây."
      },
      thieu: {
        target: "Thành thạo quy trình: Khởi đầu Thuyền chài &rarr; Quấn 3 vòng quanh gỗ &rarr; Siết 2 vòng then &rarr; Kết thúc Thuyền chài."
      },
      trang: {
        target: "Tính toán độ chịu lực của công trình, chỉ đạo phân đội thi công bàn ăn dã chiến vững chắc."
      }
    },
    steps: [
      "<strong>1. Khởi đầu:</strong> Thắt nút thuyền chài vào thân cây đứng ngay dưới cây ngang.",
      "<strong>2. Quấn dây (3-4 vòng):</strong> Đi dây trước cây ngang, sau cây đứng, trước cây ngang, sau cây đứng. Xếp các vòng dây ngay ngắn không đè lên nhau.",
      "<strong>3. Siết then (Frapping - 2-3 vòng):</strong> Quấn dây chen vào giữa 2 thân cây, kéo thật mạnh để siết chặt các vòng dây trước.",
      "<strong>4. Kết thúc:</strong> Thắt nút thuyền chài vào cây ngang và giấu đuôi dây thừa."
    ],
    commonMistakes: [
      "Không siết chặt các vòng then khiến công trình bị lung lay, lỏng lẻo.",
      "Các vòng quấn dây bị chồng chéo lên nhau làm giảm ma sát."
    ],
    safety: "Dùng chân hoặc găng tay để ghì chặt dây khi siết then, tránh đứt tay.",
    practice: "Làm một giá treo đồ hoặc bàn ăn dã chiến nhỏ cùng phân đội.",
    challenge: "Hoàn thiện 4 mối ráp vuông trong 15 phút, chịu được sức nặng 20kg.",
    assessment: "Bạn đạt khi: Hai khúc gỗ được cố định cứng cáp, góc vuông chuẩn xác, không xê dịch khi rung lắc.",
    relatedSkills: ["nut-thuyen-chai", "rap-ba-chan", "lam-cong-trai"]
  },

  {
    id: "sk-rap-ba-chan",
    slug: "rap-ba-chan",
    title: "5. Ráp ba chân (Tripod Lashing)",
    title_en: "Tripod Lashing",
    category: "scoutcraft",
    subcategory: "Nút ráp nối gỗ",
    shortDescription: "Tạo tripod vững chắc phục vụ bếp trại, giá treo xoong nồi hoặc công trình tháp canh nhỏ.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Tripod", "Ráp cây", "Pioneering", "Bếp trại"],
    media: { poster: "image/kynang/rap-vuong-ba-chan.png", videoId: "" },
    purpose: "Dựng cấu trúc kiên cố nhất trong hình học không gian (hình chóp tam giác) làm giá treo nồi nấu ăn hoặc chân tháp.",
    equipment: ["3 cây gậy thiếu sinh / cây gỗ dài bằng nhau", "Dây dù 4m"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết giữ chân giá ba chân tạo thành tam giác đều cân đối trên mặt đất."
      },
      thieu: {
        target: "Tự thắt hoàn chỉnh mối ráp số 8 quanh 3 thân gậy, siết 2 then giữa các khe và dựng đứng tripod vững chãi."
      },
      trang: {
        target: "Ứng dụng giá ba chân kết hợp ròng rọc nâng vật nặng hoặc làm tháp canh tín hiệu Semaphore."
      }
    },
    steps: [
      "<strong>Bước 1:</strong> Đặt 3 thân cây song song, cây ở giữa quay ngược đầu hoặc đặt sát nhau.",
      "<strong>Bước 2:</strong> Khởi đầu bằng nút thuyền chài ở 1 cây ngoài cùng.",
      "<strong>Bước 3:</strong> Luồn dây đan xen kẽ hình số 8 (trên - dưới - trên - dưới) qua 3 thân cây từ 4 đến 5 vòng.",
      "<strong>Bước 4:</strong> Siết then 2 vòng vào 2 khe hở giữa các cây.",
      "<strong>Bước 5:</strong> Kết thúc bằng thuyền chài ở cây ngoài cùng đối diện.",
      "<strong>Bước 6:</strong> Dựng đứng 3 cây và xoay chân cây giữa tạo thành giá 3 chân tự đứng."
    ],
    commonMistakes: [
      "Quấn dây quá chặt ở bước đan khiến khi mở chân tripod không xoay được.",
      "3 cây gậy có chiều dài không đều nhau khiến giá bị khập khiễng."
    ],
    safety: "Mở rộng 3 chân thành tam giác đều để trọng tâm rơi vào chính giữa đáy giá.",
    practice: "Dựng một giá ba chân treo nồi đun nước sôi dã chiến.",
    challenge: "Ráp giá ba chân chịu tải treo 1 xô nước 10L trong 10 phút.",
    assessment: "Bạn đạt khi: Tripod tự đứng vững, 3 chân cân đối và chịu được tải trọng yêu cầu.",
    relatedSkills: ["rap-vuong", "tao-lua", "lam-cong-trai"]
  },

  {
    id: "sk-lam-cong-trai",
    slug: "lam-cong-trai",
    title: "6. Làm cổng trại",
    title_en: "Camp Gateway Pioneering Project",
    category: "scoutcraft",
    subcategory: "Công trình tiên phong",
    shortDescription: "Ứng dụng nút dây, ráp cây, đo đạc và làm việc nhóm để tạo một công trình cổng trại hoàn chỉnh.",
    environment: "outdoor",
    difficulty: "hard",
    tags: ["Cổng trại", "Pioneering", "Tiên phong", "Làm việc nhóm"],
    media: { poster: "image/kynang/cong-trai-tien-phong.png", videoId: "" },
    purpose: "Tạo biểu tượng danh dự, ranh giới và bản sắc riêng của phân đội/liên đoàn tại kỳ trại.",
    equipment: ["Gậy tre/gỗ các kích thước", "Dây thừng ráp nối", "Biển tên phân đội", "Dây neo cọc chống gió"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Vẽ và trang trí biển tên phân đội, phụ giúp đưa dây và giữ cọc khi anh chị thi công."
      },
      thieu: {
        target: "Thực hiện thành thạo các mối ráp vuông, ráp chéo, ráp ba chân theo bản vẽ thiết kế đã duyệt."
      },
      trang: {
        target: "Lên bản vẽ kỹ thuật tỷ lệ, tính toán vật liệu dây gậy, chỉ huy thi công bảo đảm an toàn tuyệt đối."
      }
    },
    steps: [
      "<strong>1. Thiết kế:</strong> Lên bản vẽ phối cảnh cổng trại (cổng chữ A, cổng tháp đơn, cổng cầu thang).",
      "<strong>2. Chuẩn bị vật liệu:</strong> Cắt gậy theo kích thước, kiểm tra chất lượng dây thừng.",
      "<strong>3. Thi công từng mô-đun:</strong> Ráp 2 trụ chính phẳng trên mặt đất trước khi dựng đứng.",
      "<strong>4. Dựng & Căng néo:</strong> Dùng dây neo chính 4 góc kéo trụ đứng thẳng, đóng cọc neo kiên cố.",
      "<strong>5. Trang trí & Treo biển:</strong> Gắn biển tên phân đội, cờ hiệu và các chi tiết thủ công trại."
    ],
    commonMistakes: [
      "Không có dây neo chống gió khiến cổng bị đổ khi có gió giật.",
      "Dùng gậy giòn mục ở vị trí chịu lực chính."
    ],
    safety: "Luôn đội mũ bảo hộ khi thi công công trình trên cao. Thử nghiệm rung lắc trước khi đưa vào sử dụng.",
    practice: "Cùng phân đội dựng một cổng trại chữ A hoàn chỉnh trong 60 phút.",
    challenge: "Xây dựng cổng trại có nhịp cầu vượt hoặc giá treo cờ vươn cao 3m.",
    assessment: "Bạn đạt khi: Cổng trại kiên cố, đúng bản vẽ, an toàn và thể hiện được tinh thần của phân đội.",
    relatedSkills: ["rap-vuong", "rap-ba-chan", "gay-thieu-sinh"]
  },

  {
    id: "sk-gay-thieu-sinh",
    slug: "gay-thieu-sinh",
    title: "7. Sử dụng gậy Thiếu sinh",
    title_en: "The Scout Staff Practical Applications",
    category: "scoutcraft",
    subcategory: "Gậy thiếu sinh",
    shortDescription: "Dùng gậy trong đi đường, đo đạc, tín hiệu, làm cáng cứu thương và các hoạt động Scoutcraft thích hợp.",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Gậy thiếu sinh", "Scoutcraft", "Sơ cứu", "Tiên phong"],
    media: { poster: "image/kynang/gay-thieu-sinh.png", videoId: "" },
    purpose: "Vừa là người bạn đường trợ lực, vừa là công cụ đo đạc, cứu hộ và xây dựng đa năng của người Hướng đạo sinh.",
    equipment: ["Gậy tre dẻo dai dài 1m50 có khắc vạch đo cm"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Cầm gậy đúng tư thế khi chào và diễu hành, biết dùng gậy giữ cự ly vòng tròn bầy."
      },
      thieu: {
        target: "Dùng gậy trợ lực vượt dốc, đo đạc chiều dài/độ sâu suối, kết hợp làm cáng cứu thương dã chiến."
      },
      trang: {
        target: "Ứng dụng gậy trong các công trình tiên phong nâng cao và truyền dạy kỹ năng gậy cho đàn em."
      }
    },
    steps: [
      "<strong>1. Trợ lực đường trường:</strong> Cầm chắc ở 2/3 thân gậy, chống gậy phía trước khi lên dốc và phía sau khi xuống dốc.",
      "<strong>2. Đo đạc:</strong> Dùng vạch chia 10cm, 50cm, 1m khắc sẵn trên thân gậy để đo chiều dài rãnh nước hoặc ước lượng chiều cao cây.",
      "<strong>3. Làm cáng cứu thương:</strong> Luồn 2 gậy qua 2 ống tay của 2 chiếc áo đồng phục cài cúc tạo cáng chuyển thương khẩn cấp.",
      "<strong>4. Tiên phong:</strong> Dùng làm cột cờ tạm thời, giá treo ba lô hoặc tay vịn vượt suối."
    ],
    commonMistakes: [
      "Múa gậy đùa nghịch gây nguy hiểm cho bạn bè.",
      "Chọn gậy mục dễ gãy khi chịu lực nặng."
    ],
    safety: "Gậy thiếu sinh là dụng cụ học tập và bảo vệ bản thân, tuyệt đối không dùng làm vũ khí tấn công.",
    practice: "Dùng gậy đo chiều rộng một đoạn đường và phối hợp làm cáng chuyển thương 20m.",
    challenge: "Cùng phân đội dùng 6 cây gậy và dây dù ráp thành công một giá ba chân tự đứng.",
    assessment: "Bạn đạt khi: Sử dụng gậy đúng tư thế, giải thích được 4 công dụng thực tế và phối hợp làm cáng cứu thương an toàn.",
    relatedSkills: ["di-bo", "nut-day", "tui-so-cuu"]
  },

  // ==========================================
  // 03. LỬA & NẤU ĂN
  // ==========================================
  {
    id: "sk-tam-giac-tao-lua",
    slug: "tam-giac-tao-lua",
    title: "1. Tam giác tạo lửa",
    title_en: "The Fire Triangle Principles",
    category: "lua-nau-an",
    subcategory: "Tam giác lửa & Củi",
    shortDescription: "Hiểu ba yếu tố cần thiết để duy trì sự cháy: Nhiên liệu (Fuel), Nhiệt (Heat) và Oxy (Oxygen).",
    environment: "both",
    difficulty: "easy",
    tags: ["Lửa trại", "Vật lý", "An toàn", "Sinh tồn"],
    media: { poster: "image/kynang/tam-giac-tao-lua.png", videoId: "" },
    purpose: "Nắm vững nguyên lý khoa học để có thể nhóm lửa nhanh trong mọi điều kiện và dập tắt lửa tức thì khi khẩn cấp.",
    equipment: ["Sơ đồ tam giác lửa", "Mẫu vật liệu minh họa"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhớ tên 3 yếu tố: Củi (Nhiên liệu) + Tia lửa (Nhiệt) + Không khí (Oxy)."
      },
      thieu: {
        target: "Giải thích được cơ chế: Thổi nhẹ để tăng Oxy, che gió để giữ Nhiệt, dập lửa bằng cách cắt đứt 1 trong 3 cạnh tam giác."
      },
      trang: {
        target: "Ứng dụng nguyên lý tam giác lửa để huấn luyện an toàn phòng cháy chữa cháy cho toàn liên đoàn."
      }
    },
    steps: [
      "<strong>1. Nhiên liệu (Fuel):</strong> Gỗ, củi khô, bùi nhùi, cỏ khô (chất cháy).",
      "<strong>2. Nhiệt (Heat):</strong> Tia lửa từ đá lửa, ma sát hoặc diêm để đạt đến nhiệt độ bắt cháy.",
      "<strong>3. Oxy (Oxygen):</strong> Không khí lưu thông cung cấp khí O2 duy trì phản ứng cháy.",
      "<strong>Nguyên lý dập lửa:</strong> Triệt tiêu Oxy (trùm chăn ướt/đổ cát), giảm Nhiệt (phun nước làm mát), loại bỏ Nhiên liệu (cách ly củi khô xung quanh)."
    ],
    commonMistakes: [
      "Xếp củi quá kín làm nghẹt không khí (thiếu Oxy) khiến lửa bốc khói đen rồi tắt.",
      "Dùng củi ướt làm tiêu hao hết nguồn Nhiệt ban đầu."
    ],
    safety: "Không bao giờ dùng xăng dầu hoặc hóa chất dễ cháy nổ để nhóm lửa trại.",
    practice: "Giải thích nguyên lý tam giác lửa trước phân đội và chỉ ra cách dập lửa bằng đất cát.",
    challenge: "Điều chỉnh luồng gió và củi để duy trì ngọn lửa cháy đều không khói trong 15 phút.",
    assessment: "Bạn đạt khi: Giải thích rõ 3 yếu tố và áp dụng được vào thực tế nhóm/dập lửa.",
    relatedSkills: ["chuan-bi-vat-lieu-nhom-lua", "nhom-lua-an-toan", "dap-lua-hoan-toan"]
  },

  {
    id: "sk-chuan-bi-vat-lieu-nhom-lua",
    slug: "chuan-bi-vat-lieu-nhom-lua",
    title: "2. Chuẩn bị vật liệu nhóm lửa",
    title_en: "Tinder, Kindling & Fuel Preparation",
    category: "lua-nau-an",
    subcategory: "Tam giác lửa & Củi",
    shortDescription: "Phân biệt vật liệu bắt lửa (Tinder), cành nhỏ mồi lửa (Kindling) và nhiên liệu lớn (Fuel).",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Củi khô", "Bùi nhùi", "Lửa trại", "Sinh tồn"],
    media: { poster: "image/kynang/tam-giac-tao-lua.png", videoId: "" },
    purpose: "Chuẩn bị đầy đủ 3 loại củi trước khi đánh tia lửa, đảm bảo tỷ lệ thành công 100% ngay từ lần quẹt đầu tiên.",
    equipment: ["Bùi nhùi khô (xơ dừa, vỏ cây bổi, bông gòn)", "Cành củi que tăm (Kindling)", "Củi chính (Fuel)"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhặt đúng củi khô giòn (bẻ kêu 'rắc'), phân biệt với cành cây tươi dẻo bẻ không gãy."
      },
      thieu: {
        target: "Tự chuẩn bị đủ 3 đống củi riêng biệt theo kích cỡ: Bùi nhùi (Tinder) &rarr; Cành cỡ tăm/ngón tay (Kindling) &rarr; Củi cổ tay (Fuel)."
      },
      trang: {
        target: "Khai thác củi khô từ lõi cây gãy mục sau mưa, làm 'Cây lông vũ' (Feather stick) mồi lửa trong điều kiện ẩm ướt."
      }
    },
    steps: [
      "<strong>Cấp 1 - Bùi nhùi (Tinder):</strong> Vò tơi xơ dừa, vỏ cây khô, tổ chim bỏ hoang hoặc bông gòn tẩm sáp.",
      "<strong>Cấp 2 - Củi mồi (Kindling):</strong> Cành thông khô, que củi cỡ que tăm đến cỡ ngón tay trỏ bẻ giòn tan.",
      "<strong>Cấp 3 - Củi chính (Fuel wood):</strong> Các thanh củi gỗ cứng cỡ cổ tay trở lên, cháy đượm tạo than hồng lâu tàn."
    ],
    commonMistakes: [
      "Vội vàng bỏ củi to vào khi đốm than mồi vừa mới bén làm lửa bị đè tắt.",
      "Lấy cành cây dưới đất ẩm ướt thay vì nhặt cành khô treo trên tán cây."
    ],
    safety: "Tuyệt đối không chặt phá cành cây tươi đang sống.",
    practice: "Phân loại và xếp thành 3 đống vật liệu chuẩn bị cho một bếp lửa dã ngoại.",
    challenge: "Tìm kiếm đủ bùi nhùi và củi khô trong khu rừng ẩm ướt sau cơn mưa.",
    assessment: "Bạn đạt khi: Chuẩn bị đủ 3 nhóm vật liệu khô ráo trước khi tiến hành đánh lửa.",
    relatedSkills: ["tam-giac-tao-lua", "nhom-lua-an-toan", "tao-lua"]
  },

  {
    id: "sk-nhom-lua-an-toan",
    slug: "nhom-lua-an-toan",
    title: "3. Nhóm lửa an toàn",
    title_en: "Safe Fire Lighting & Control",
    category: "lua-nau-an",
    subcategory: "Nhóm & Dập lửa",
    shortDescription: "Lửa giúp giữ ấm, nấu ăn và báo hiệu. Luôn nhóm lửa an toàn, có trách nhiệm và dập tắt hoàn toàn sau khi sử dụng. An toàn là trên hết!",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Lửa trại", "Đá lửa", "An toàn", "Leave No Trace"],
    media: { poster: "image/kynang/3-nhom-lua-an-toan.jpg", videoId: "" },
    purpose: "Cung cấp nguồn nhiệt nấu chín thức ăn và sưởi ấm mà không gây nguy cơ cháy lan ra môi trường.",
    equipment: ["Thanh đánh lửa đá lửa (Ferro rod)", "Xô nước hoặc xẻng cát phòng cháy", "Vật liệu củi đã chuẩn bị"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết đứng xuôi chiều gió, giữ khoảng cách an toàn 2m với bếp lửa và không nghịch củi."
      },
      thieu: {
        target: "Dọn sạch lá khô bán kính 3m quanh bếp, xếp củi hình tháp chữ A, đánh lửa thành công bằng đá lửa trong 3 lần quẹt."
      },
      trang: {
        target: "Chỉ huy toàn bộ khu vực bếp nấu của liên đoàn, xử lý các sự cố gió to bất thường."
      }
    },
    steps: [
      "<strong>1. Khoanh vùng an toàn:</strong> Cào sạch lá khô, cỏ rác trong bán kính 3m, xếp đá bao quanh hố lửa.",
      "<strong>2. Xếp tổ mồi:</strong> Đặt bùi nhùi ở tâm, dựng các cành củi mồi nhỏ hình tháp chữ A để hở cửa đón gió.",
      "<strong>3. Đánh tia lửa:</strong> Kê sát thanh đá lửa góc 45 độ, quẹt mạnh dọc thân thanh lửa hướng tia lửa vào tâm bùi nhùi.",
      "<strong>4. Nuôi lửa:</strong> Thổi nhẹ nhàng đều hơi, khi lửa bùng lên thì tiếp thêm cành củi lớn dần."
    ],
    commonMistakes: [
      "Đốt lửa dưới tán cây thấp hoặc gần lều bạt dễ bén tàn lửa.",
      "Quạt gió quá mạnh thổi tắt đốm than mồi non nớt."
    ],
    safety: "Luôn có sẵn 1 xô nước hoặc 1 xô cát ngay bên cạnh bếp trước khi đánh tia lửa đầu tiên.",
    practice: "Nhóm một đống lửa nhỏ và đun sôi 500ml nước trong vòng 10 phút.",
    challenge: "Nhóm lửa thành công chỉ với 1 thanh đá lửa và vật liệu tự nhiên trong rừng.",
    assessment: "Bạn đạt khi: Có thể tạo và duy trì lửa mà vẫn kiểm soát được khu vực xung quanh.",
    relatedSkills: ["chuan-bi-vat-lieu-nhom-lua", "dap-lua-hoan-toan", "nau-com-ngoai-troi"]
  },

  {
    id: "sk-dap-lua-hoan-toan",
    slug: "dap-lua-hoan-toan",
    title: "4. Dập lửa hoàn toàn",
    title_en: "Total Fire Extinguishment & Cold Out",
    category: "lua-nau-an",
    subcategory: "Nhóm & Dập lửa",
    shortDescription: "Biết kiểm tra và xử lý khu vực sau khi sử dụng lửa theo nguyên tắc 'Dập tắt - Khuấy đều - Cảm nhận độ lạnh'.",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Dập lửa", "An toàn", "Leave No Trace", "Cháy rừng"],
    media: { poster: "image/kynang/dap-lua-hoan-toan.png", videoId: "" },
    purpose: "Triệt tiêu 100% tàn than âm ỉ dưới lòng đất, phòng ngừa cháy rừng và trả lại sự an toàn cho thiên nhiên.",
    equipment: ["Xô nước", "Gậy khuấy than", "Xẻng xúc đất"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết tưới nước lên tro than cùng anh chị và không chạm tay vào tro khi chưa kiểm tra."
      },
      thieu: {
        target: "Thực hiện thành thục quy trình 3 bước: Tưới nước ngập &rarr; Dùng gậy khuấy đều bùn than &rarr; Dùng mu bàn tay cảm nhận độ lạnh."
      },
      trang: {
        target: "Kiểm tra nghiệm thu toàn bộ các hố lửa của bầy đàn trước khi nhổ trại rút quân."
      }
    },
    steps: [
      "<strong>Bước 1 - Tưới nước:</strong> Rưới nước từ từ xung quanh mép vào tâm để tránh hơi nước nóng bốc lên mặt.",
      "<strong>Bước 2 - Khuấy đều:</strong> Dùng gậy đảo tung lớp tro than phía dưới lên, tưới thêm nước cho thành hỗn hợp bùn tro.",
      "<strong>Bước 3 - Cảm nhận độ lạnh (Cold-out test):</strong> Đưa mu bàn tay cách lớp tro 5cm, nếu không còn cảm thấy hơi ấm thì mới đạt an toàn.",
      "<strong>Bước 4 - Phân tán:</strong> Rải đều tro than và phủ lớp đất mặt hoàn trả hiện trạng."
    ],
    commonMistakes: [
      "Chỉ phủ đất cát lên đống than đỏ khiến than âm ỉ cháy ngầm dưới rễ cây suốt nhiều ngày."
    ],
    safety: "Không bao giờ rời bỏ bãi trại khi tro than chưa 'Lạnh ngắt như đá'.",
    practice: "Thực hành dập tắt hoàn toàn một bếp lửa trại và thực hiện bài test chạm tay.",
    challenge: "Dập tắt bếp lửa trong điều kiện hạn chế nước chỉ bằng phương pháp chia nhỏ và đất ẩm.",
    assessment: "Bạn đạt khi: Sau khi xử lý, tro than hoàn toàn nguội lạnh và mặt đất được hoàn trả an toàn.",
    relatedSkills: ["nhom-lua-an-toan", "thu-trai-leave-no-trace", "bep-hoang-cam"]
  },

  {
    id: "sk-su-dung-bep-da-ngoai",
    slug: "su-dung-bep-da-ngoai",
    title: "5. Sử dụng bếp dã ngoại",
    title_en: "Camp Stoves & Burner Operations",
    category: "lua-nau-an",
    subcategory: "Bếp trại dã chiến",
    shortDescription: "Chuẩn bị, vận hành và thu dọn bếp đúng quy trình an toàn (bếp ga mini, bếp cồn dã ngoại, bếp củi xếp).",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Bếp ga", "Nấu ăn", "Dã ngoại", "An toàn"],
    media: { poster: "image/kynang/nau-com-ngoai-troi.png", videoId: "" },
    purpose: "Nấu nướng nhanh chóng, tiện lợi, không để lại vết cháy đen trên mặt đất trong các khu vực cấm đốt lửa trại.",
    equipment: ["Bếp ga dã ngoại chân nhện hoặc bếp củi xếp gọn", "Bình ga du lịch chuẩn", "Tấm chắn gió nhôm"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết vị trí đặt bếp bằng phẳng, không đến gần hoặc xô đẩy bạn bè quanh khu vực bếp đang đỏ lửa."
      },
      thieu: {
        target: "Lắp đặt bình ga đúng khớp ren, kiểm tra rò rỉ khí ga bằng khứu giác, dựng tấm chắn gió và điều chỉnh lửa nấu."
      },
      trang: {
        target: "Bảo dưỡng van điều áp, xử lý sự cố kẹt van ga hoặc bình ga bị quá nhiệt an toàn."
      }
    },
    steps: [
      "<strong>1. Chọn vị trí:</strong> Đặt bếp trên mặt phẳng vững chắc, cách xa lều bạt tối thiểu 2m.",
      "<strong>2. Lắp bình nhiên liệu:</strong> Đặt bình ga đúng rãnh khớp, khóa chặt van an toàn trước khi mở khóa.",
      "<strong>3. Đánh lửa:</strong> Dùng tấm chắn gió bao quanh 3 mặt, bật mồi lửa trước khi vặn nhẹ van xả ga.",
      "<strong>4. Thu dọn:</strong> Chờ bếp nguội hẳn, tháo rời bình ga cất vào túi chống sốc riêng biệt."
    ],
    commonMistakes: [
      "Dùng tấm chắn gió quây quá kín bình ga làm bình ga bị om nhiệt nguy hiểm.",
      "Nấu bếp ga dã ngoại bên trong lều kín."
    ],
    safety: "Không bao giờ sử dụng bình ga bị móp méo, rỉ sét hoặc sang chiết lại nhiều lần.",
    practice: "Lắp ráp, nấu sôi 1 ấm nước và thu dọn bếp dã ngoại theo đúng quy trình.",
    challenge: "Vận hành bếp dã ngoại nấu ăn an toàn trong điều kiện gió mạnh cấp 4.",
    assessment: "Bạn đạt khi: Chuẩn bị, vận hành và thu dọn bếp đúng quy trình an toàn.",
    relatedSkills: ["nau-com-ngoai-troi", "lap-thuc-don-trai", "tui-so-cuu"]
  },

  {
    id: "sk-nau-com-ngoai-troi",
    slug: "nau-com-ngoai-troi",
    title: "6. Nấu cơm ngoài trời",
    title_en: "Outdoor Rice Cooking & Camp Meals",
    category: "lua-nau-an",
    subcategory: "Nấu ăn ngoài trời",
    shortDescription: "Đong nước theo đốt ngón tay, kiểm soát nhiệt độ 'sôi to - rút lửa - ủ than' để cơm chín dẻo không khê khét.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Nấu cơm", "Ẩm thực trại", "Teamwork", "Kỹ năng sống"],
    media: { poster: "image/kynang/nau-com-ngoai-troi.png", videoId: "" },
    purpose: "Đảm bảo nguồn năng lượng chính cho toàn phân đội, rèn luyện tính kiên nhẫn và sự phối hợp nhịp nhàng.",
    equipment: ["Nồi nấu dã chiến có nắp kín", "Gạo ngon", "Nước sạch", "Đũa bếp", "Lá chuối hoặc bạt lót"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Tham gia vo gạo sạch, nhặt sạn và biết đong nước ngang một đốt ngón tay trỏ."
      },
      thieu: {
        target: "Tự tay canh lửa nồi cơm: đun lửa to cho sôi bùng &rarr; cạn nước thì gạt bớt củi &rarr; vần nồi ủ than hồng 15 phút cho cơm chín đều."
      },
      trang: {
        target: "Tổ chức hội thi 'Bếp Hoàng Cầm / Nấu cơm dã chiến' và chấm điểm chất lượng bữa ăn của các phân đội."
      }
    },
    steps: [
      "<strong>1. Vo gạo & Đong nước:</strong> Vo gạo sạch, cho nước ngập mặt gạo khoảng 1 đốt ngón tay trỏ (hoặc tỷ lệ 1 gạo : 1.2 nước).",
      "<strong>2. Giai đoạn 1 (Lửa to):</strong> Đặt nồi lên bếp lửa mạnh cho nước sôi bùng lên, mở hé nắp khuấy nhẹ 1 lần cho đều.",
      "<strong>3. Giai đoạn 2 (Rút củi):</strong> Khi nước cạn sát mặt gạo, đậy chặt nắp nồi, rút hết củi lớn chỉ để lại than đỏ.",
      "<strong>4. Giai đoạn 3 (Ủ than):</strong> Vần nồi nghiêng quanh than hồng, ủ trong 15-20 phút cho hạt cơm chín rền."
    ],
    commonMistakes: [
      "Mở nắp nồi liên tục làm bay hơi nhiệt khiến cơm bị sống hạt (sượng).",
      "Để lửa ngọn liếm vào đáy nồi khi nước đã cạn làm cháy khê cơm."
    ],
    safety: "Dùng kẹp gắp hoặc giẻ lót tay dày khi di chuyển nồi than nóng.",
    practice: "Cùng đội nấu thành công 1 nồi cơm dã chiến cho 6 người ăn.",
    challenge: "Nấu cơm chín dẻo không khê khét bằng nồi nhôm trên bếp lửa củi tự nhiên.",
    assessment: "Bạn đạt khi: Một đội tự chuẩn bị và hoàn thành bữa cơm chín ngon cho toàn đội.",
    relatedSkills: ["nhom-lua-an-toan", "su-dung-bep-da-ngoai", "lap-thuc-don-trai"]
  },

  {
    id: "sk-lap-thuc-don-trai",
    slug: "lap-thuc-don-trai",
    title: "7. Lập thực đơn trại",
    title_en: "Camp Meal Planning & Nutrition",
    category: "lua-nau-an",
    subcategory: "Dinh dưỡng & Thực đơn",
    shortDescription: "Tính số người, khẩu phần, dinh dưỡng, chi phí và khả năng bảo quản thực phẩm trong điều kiện dã ngoại.",
    environment: "both",
    difficulty: "medium",
    tags: ["Thực đơn", "Dinh dưỡng", "Kế hoạch", "Tài chính"],
    media: { poster: "image/kynang/lap-thuc-don-trai.png", videoId: "" },
    purpose: "Cung cấp đầy đủ năng lượng cho các hoạt động thể lực cường độ cao, đảm bảo vệ sinh và tối ưu hóa ngân sách của đội.",
    equipment: ["Bảng tính khẩu phần dinh dưỡng", "Bảng giá thị trường", "Sổ tay kế hoạch"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết nêu các món ăn yêu thích giàu dinh dưỡng (thịt, trứng, rau xanh, hoa quả) và không đòi ăn đồ ăn vặt có hại."
      },
      thieu: {
        target: "Lập bảng thực đơn 3 bữa cho phân đội 6 người: cân đối 4 nhóm chất (đạm, bột đường, béo, vitamin) và lên danh sách đi chợ."
      },
      trang: {
        target: "Thẩm định an toàn thực phẩm, lên phương án bảo quản đồ tươi sống không cần tủ lạnh và quản lý ngân sách trại."
      }
    },
    steps: [
      "<strong>1. Xác định thông số:</strong> Số lượng người ăn, thời gian đi trại, thời tiết (mùa hè/mùa đông) và mức độ vận động.",
      "<strong>2. Cân đối 4 nhóm chất:</strong> Tinh bột (gạo, mì), Đạm (thịt lợn nạc, trứng, đậu), Chất béo (dầu mè), Vitamin & Khoáng chất (rau củ quả dễ bảo quản như bắp cải, cà rốt, bí xanh).",
      "<strong>3. Lựa chọn thực phẩm bền:</strong> Tránh các loại hải sản dễ ươn hỏng; ưu tiên đồ khô, thịt đã ướp muối hoặc hút chân không.",
      "<strong>4. Tính toán chi phí:</strong> Chia đều chi phí trên từng đầu đoàn sinh, dự phòng 10% phát sinh."
    ],
    commonMistakes: [
      "Mua các loại rau lá mỏng (rau cải, xà lách) dễ bị dập nát và thối hỏng trong ba lô.",
      "Mang quá nhiều đồ thừa gây lãng phí và nặng nhọc khi di chuyển."
    ],
    safety: "Thực phẩm sống và chín phải để riêng biệt. Luôn kiểm tra hạn sử dụng của đồ hộp.",
    practice: "Lập bảng kế hoạch thực đơn và ngân sách chi tiết cho chuyến đi cắm trại 2 ngày 1 đêm.",
    challenge: "Thiết kế thực đơn đầy đủ dinh dưỡng với ngân sách chỉ 80.000đ/người/ngày.",
    assessment: "Bạn đạt khi: Lập được bảng thực đơn khoa học, cân đối dinh dưỡng và chi phí hợp lý.",
    relatedSkills: ["nau-com-ngoai-troi", "quan-ly-tien", "sinh-hoat-trai"]
  },

  {
    id: "sk-bep-hoang-cam",
    slug: "tao-lua",
    title: "8. Bếp Hoàng Cầm",
    title_en: "Hoang Cam Smokeless Field Stove",
    category: "lua-nau-an",
    subcategory: "Bếp trại dã chiến",
    shortDescription: "Tìm hiểu cấu tạo, nguyên lý tản khói ngầm và giá trị lịch sử; áp dụng trong hoạt động giáo dục phù hợp.",
    environment: "outdoor",
    difficulty: "hard",
    tags: ["Bếp Hoàng Cầm", "Lịch sử", "Sáng tạo", "Dã chiến"],
    media: { poster: "image/kynang/bep-hoang-cam-da-chien.png", videoId: "" },
    purpose: "Kỹ thuật đào bếp quân sự huyền thoại của anh hùng Hoàng Cầm, cho phép nấu ăn cả ngày lẫn đêm mà không để lộ khói lửa cho máy bay trinh sát.",
    equipment: ["Xẻng/bay đào đất dã chiến", "Cành cây nhỏ & rơm rạ", "Đất ẩm & cỏ tươi làm mái tản khói"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Hiểu câu chuyện lịch sử về người anh nuôi Hoàng Cầm trong chiến dịch Điện Biên Phủ."
      },
      thieu: {
        target: "Hiểu nguyên lý hoạt động: hố đặt nồi đun &rarr; rãnh dẫn khói nghiêng &rarr; hầm chứa khói mù tản ngầm qua các khe cành cây phủ đất ẩm."
      },
      trang: {
        target: "Hướng dẫn đoàn sinh thi công bếp Hoàng Cầm mô hình thu nhỏ tại đất trại dã ngoại."
      }
    },
    steps: [
      "<strong>1. Đào hố đặt nồi:</strong> Đào hố sâu 35-40cm, khoét miệng vừa khít với đáy nồi nấu.",
      "<strong>2. Đào rãnh dẫn khói:</strong> Đào rãnh dài 2-3m thoai thoải dốc lên từ đáy hố lửa về phía sau.",
      "<strong>3. Làm hầm tản khói:</strong> Cuối rãnh khoét rộng thành 2-3 rãnh nhánh xương cá, đậy cành cây và phủ lớp đất ẩm/cỏ đẫm sương lên trên.",
      "<strong>4. Nguyên lý:</strong> Khói nóng bay qua đường rãnh dài sẽ bị nguội dần, gặp đất ẩm sẽ lắng đọng bồ hóng và tan biến là là sát mặt đất như sương mù."
    ],
    commonMistakes: [
      "Làm rãnh khói quá ngắn khiến khói vẫn còn nóng bốc thành luồng thẳng đứng.",
      "Phủ đất quá kín làm tắc đường thoát khiến bếp bị ngạt khói."
    ],
    safety: "Sau khi sử dụng xong, phải hoàn trả nguyên vẹn mặt đất, lấp kín hố rãnh tránh người khác bước sụt chân.",
    practice: "Đào và thử nghiệm một mô hình bếp Hoàng Cầm thu nhỏ cùng phân đội.",
    challenge: "Nấu chín nồi nước trên bếp Hoàng Cầm mà người đứng cách 20m không nhìn thấy khói bốc lên cao.",
    assessment: "Bạn đạt khi: Giải thích được nguyên lý lịch sử và thực hành thành công kỹ thuật tản khói.",
    relatedSkills: ["tam-giac-tao-lua", "nhom-lua-an-toan", "dap-lua-hoan-toan"]
  },

  // ==========================================
  // 04. KHÁM PHÁ & ĐỊNH HƯỚNG
  // ==========================================
  {
    id: "sk-xac-dinh-phuong-huong",
    slug: "xac-dinh-phuong-huong",
    title: "1. Xác định phương hướng",
    title_en: "Cardinal Directions & Natural Navigation",
    category: "kham-pha-dinh-huong",
    subcategory: "Phương hướng & La bàn",
    shortDescription: "Biết Bắc – Nam – Đông – Tây và 8 hướng cơ bản qua mặt trời, mặt trăng, bóng gậy và sao Bắc Cực.",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Phương hướng", "Định hướng", "Mặt trời", "Thiên văn"],
    media: { poster: "image/kynang/xac-dinh-phuong-huong.png", videoId: "" },
    purpose: "Giúp Hướng đạo sinh luôn làm chủ không gian, không bao giờ bị mất phương hướng khi ở giữa thiên nhiên hoang dã.",
    equipment: ["Gậy cắm cọc", "Sỏi đánh dấu bóng", "Đồng hồ kim"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Chỉ đúng 4 hướng chính qua hướng mặt trời mọc (Đông) và mặt trời lặn (Tây)."
      },
      thieu: {
        target: "Xác định 8 hướng la bàn (Đông, Tây, Nam, Bắc, Đông Bắc, Đông Nam, Tây Bắc, Tây Nam) và phương pháp bóng gậy (Shadow-stick method)."
      },
      trang: {
        target: "Định hướng ban đêm qua chòm sao Đại Hùng/sao Bắc Đẩu và chòm sao Nam Thập Tự."
      }
    },
    steps: [
      "<strong>1. Quy tắc mặt trời:</strong> Sáng hướng Đông, chiều hướng Tây, buổi trưa bóng ngả về hướng Bắc (ở Bắc bán cầu).",
      "<strong>2. Phương pháp bóng gậy (Shadow-stick):</strong> Cắm cọc thẳng, đánh dấu bóng đầu cọc điểm A &rarr; chờ 15 phút đánh dấu bóng điểm B &rarr; Nối A sang B là đường thẳng hướng Tây sang Đông.",
      "<strong>3. Phương pháp đồng hồ kim:</strong> Hướng kim giờ về phía mặt trời, đường phân giác giữa kim giờ và số 12 chính là trục Bắc - Nam."
    ],
    commonMistakes: [
      "Quên rằng mặt trời mọc chệch nhẹ theo mùa (mùa hè lệch Bắc, mùa đông lệch Nam)."
    ],
    safety: "Không bao giờ nhìn thẳng trực tiếp vào mặt trời bằng mắt thường.",
    practice: "Dùng phương pháp bóng gậy xác định hướng Bắc chính xác trong buổi sinh hoạt tại Vườn hoa Bắc Biên.",
    challenge: "Xác định phương hướng ban đêm chỉ bằng quan sát các vì sao trong 3 phút.",
    assessment: "Bạn đạt khi: Chỉ đúng 8 hướng cơ bản bằng ít nhất 2 phương pháp tự nhiên không dùng la bàn.",
    relatedSkills: ["su-dung-la-ban", "doc-ban-do", "di-theo-phuong-vi"]
  },

  {
    id: "sk-su-dung-la-ban",
    slug: "su-dung-la-ban",
    title: "2. Sử dụng la bàn",
    title_en: "Compass Reading - Orient, Sight & Navigate",
    category: "kham-pha-dinh-huong",
    subcategory: "Phương hướng & La bàn",
    shortDescription: "Hiểu hướng – Xác định đúng – Di chuyển tự tin. Nhận biết các bộ phận của la bàn, xác định hướng Bắc và chọn mốc di chuyển.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["La bàn", "Silva", "Định hướng", "Thám du"],
    media: { poster: "image/kynang/4-su-dung-la-ban.jpg", videoId: "" },
    purpose: "Công cụ định vị chuẩn xác nhất giúp người thám du đo góc phương vị và đi đúng đường trong sương mù, mưa rừng hoặc đêm tối.",
    equipment: ["La bàn Silva dã ngoại đĩa xoay chia độ 360°"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết đầu đỏ kim la bàn luôn chỉ về hướng Bắc từ tính và giữ la bàn thăng bằng trên tay."
      },
      thieu: {
        target: "Đọc thành thạo cấu tạo: kim nam châm, đĩa chia độ 360°, mũi tên chỉ hướng đi và xác định góc phương vị tới một vật chuẩn."
      },
      trang: {
        target: "Hiệu chỉnh góc từ thiên (Magnetic Declination) giữa Bắc Thực và Bắc Từ khi đối chiếu với bản đồ quân sự."
      }
    },
    steps: [
      "<strong>Bước 1 - Giữ la bàn thăng bằng:</strong> Đặt la bàn nằm ngang trên lòng bàn tay hoặc đặt trên mặt phẳng phi kim loại.",
      "<strong>Bước 2 - Ngắm vật chuẩn:</strong> Hướng mũi tên chỉ hướng di chuyển thẳng vào ngọn cây/đỉnh núi phía trước.",
      "<strong>Bước 3 - Xoay đĩa độ:</strong> Xoay đĩa chia độ sao cho 'ngôi nhà Bắc' (vạch N) trùng khít với đầu đỏ của kim nam châm.",
      "<strong>Bước 4 - Đọc góc phương vị:</strong> Đọc chỉ số độ tại điểm giao với mũi tên chỉ hướng (ví dụ: 45° Đông Bắc)."
    ],
    commonMistakes: [
      "Cầm la bàn gần điện thoại, đồng hồ kim loại, dao găm làm kim bị hút lệch hướng.",
      "Cầm nghiêng la bàn khiến kim bị kẹt vào mặt kính không xoay tự do."
    ],
    safety: "Luôn kiểm tra bọt khí trong buồng dầu la bàn. Tránh làm rơi vỡ mặt kính.",
    practice: "Đo góc phương vị của 3 vật chuẩn bất kỳ trên sân bãi.",
    challenge: "Đi theo 3 góc phương vị khép kín (tam giác 120°) và quay trở lại đúng điểm xuất phát ban đầu sai số dưới 1m.",
    assessment: "Bạn đạt khi: Nhận biết cấu tạo và đo chuẩn xác góc phương vị di chuyển.",
    relatedSkills: ["xac-dinh-phuong-huong", "di-theo-phuong-vi", "doc-ban-do"]
  },

  {
    id: "sk-doc-ban-do",
    slug: "doc-ban-do",
    title: "3. Đọc bản đồ",
    title_en: "Topographic Map Reading & Contour Lines",
    category: "kham-pha-dinh-huong",
    subcategory: "Bản đồ địa hình",
    shortDescription: "Hiểu tỷ lệ xích, hệ thống ký hiệu quy ước, địa hình đồi núi và đường đồng mức.",
    environment: "both",
    difficulty: "medium",
    tags: ["Bản đồ", "Địa hình", "Đường đồng mức", "Tỷ lệ"],
    media: { poster: "image/kynang/doc-ban-do-dia-hinh.png", videoId: "" },
    purpose: "Hình dung toàn bộ bức tranh địa hình 3D thực tế của khu vực rừng núi chỉ qua một tờ giấy bản đồ 2D phẳng.",
    equipment: ["Bản đồ địa hình tỷ lệ 1:25.000 hoặc 1:50.000", "Thước đo milimet", "Bảng chú giải ký hiệu"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết các màu sắc cơ bản trên bản đồ: xanh dương (sông hồ), xanh lá (rừng cây), nâu (đồi núi), đen (đường sá, nhà cửa)."
      },
      thieu: {
        target: "Đọc được tỷ lệ bản đồ (1cm = 250m thực địa), nhận biết đỉnh núi, thung lũng, yên ngựa qua khoảng cách các đường đồng mức."
      },
      trang: {
        target: "Xác định tọa độ lưới 6 số UTM/MGRS, tính toán độ dốc địa hình và độ chênh cao cung đường thám du."
      }
    },
    steps: [
      "<strong>1. Đọc tỷ lệ bản đồ:</strong> Tỷ lệ 1:25.000 có nghĩa là 1cm đo trên bản đồ tương đương 250m ngoài thực tế.",
      "<strong>2. Đường đồng mức (Contour lines):</strong> Các đường nối các điểm có cùng độ cao. Các đường càng sít nhau &rarr; sườn núi càng dốc đứng; các đường càng xa nhau &rarr; sườn núi càng thoai thoải.",
      "<strong>3. Nhận dạng địa hình:</strong> Vòng tròn đồng mức đồng tâm nhỏ nhất ở giữa là đỉnh núi; các đường hình chữ V chỉ ngược nguồn là khe suối lũng sâu."
    ],
    commonMistakes: [
      "Nhầm lẫn giữa sống núi (ridge) và khe suối (valley).",
      "Không quy đổi đúng tỷ lệ xích khi tính cự ly đi bộ."
    ],
    safety: "Bảo quản bản đồ trong túi nilon trong suốt chống thấm nước khi đi trời mưa.",
    practice: "Tìm vị trí điểm hạ trại và đo cự ly thực tế trên bản đồ địa hình 1:25.000.",
    challenge: "Vẽ lại phác họa địa hình 3D nhìn nghiêng dựa trên các đường đồng mức của một ngọn đồi.",
    assessment: "Bạn đạt khi: Hiểu tỷ lệ, ký hiệu, địa hình và đọc chuẩn xác độ dốc qua đường đồng mức.",
    relatedSkills: ["dinh-huong-ban-do", "di-theo-phuong-vi", "lap-hanh-trinh"]
  },

  {
    id: "sk-dinh-huong-ban-do",
    slug: "dinh-huong-ban-do",
    title: "4. Định hướng bản đồ",
    title_en: "Map Orientation to Ground",
    category: "kham-pha-dinh-huong",
    subcategory: "Bản đồ địa hình",
    shortDescription: "Xoay bản đồ sao cho các hướng và địa vật trên giấy trùng khớp hoàn toàn với thực địa ngoài đời thực.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Bản đồ", "La bàn", "Định hướng", "Thực địa"],
    media: { poster: "image/kynang/dinh-huong-ban-do-la-ban.png", videoId: "" },
    purpose: "Giúp người đi rừng nhìn bản đồ thấy con đường bên phải trên giấy chính là con đường bên tay phải ngoài đời thực, không bị ngược hướng.",
    equipment: ["Bản đồ địa hình", "La bàn Silva"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Xoay bản đồ theo vật chuẩn quen thuộc (con đường, dòng sông lớn trước mặt)."
      },
      thieu: {
        target: "Đặt cạnh la bàn trùng với đường kẻ Bắc của bản đồ, xoay cả người và bản đồ cho kim la bàn chỉ đúng hướng Bắc."
      },
      trang: {
        target: "Sử dụng kỹ thuật Giao hội thuận (Resection) ngắm 2 đỉnh núi xa để định vị chính xác vị trí mình đang đứng trên bản đồ."
      }
    },
    steps: [
      "<strong>Bước 1:</strong> Đặt bản đồ nằm ngang trên mặt đất hoặc mặt phẳng.",
      "<strong>Bước 2:</strong> Đặt cạnh dài của la bàn Silva trùng khít với đường lưới hướng Bắc (kinh tuyến) trên bản đồ.",
      "<strong>Bước 3:</strong> Giữ nguyên la bàn trên bản đồ, từ từ xoay cả bản đồ và người cho đến khi đầu đỏ kim nam châm chui vào đúng 'ngôi nhà Bắc' của đĩa chia độ.",
      "<strong>Kết quả:</strong> Toàn bộ các ngọn núi, dòng sông, con đường trên bản đồ giờ đây song song và trùng hướng 100% với thực địa xung quanh bạn."
    ],
    commonMistakes: [
      "Định hướng ngược Bắc - Nam khiến người đi lạc hướng 180°.",
      "Quên định hướng lại bản đồ mỗi khi rẽ vào khúc ngoặt mới."
    ],
    safety: "Luôn định hướng bản đồ tại mỗi ngã ba hoặc điểm dừng chân trước khi quyết định bước tiếp.",
    practice: "Thực hành định hướng bản đồ khu vực Bồ Đề - Long Biên bằng la bàn.",
    challenge: "Chỉ ra 3 ngọn núi/công trình ở xa ngoài thực tế tương ứng với vị trí nào trên bản đồ trong 60 giây.",
    assessment: "Bạn đạt khi: Xoay bản đồ đúng với địa hình thực tế nhanh chóng và chính xác.",
    relatedSkills: ["su-dung-la-ban", "doc-ban-do", "di-theo-phuong-vi"]
  },

  {
    id: "sk-di-theo-phuong-vi",
    slug: "di-theo-phuong-vi",
    title: "5. Đi theo phương vị",
    title_en: "Walking on an Azimuth / Bearing",
    category: "kham-pha-dinh-huong",
    subcategory: "Ước đạc thực địa",
    shortDescription: "Dùng la bàn để di chuyển chính xác tới một mục tiêu ẩn khuất xuyên qua rừng rậm hoặc sương mù.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Phương vị", "Azimuth", "La bàn", "Trekking"],
    media: { poster: "image/kynang/di-theo-phuong-vi-azimuth.png", videoId: "" },
    purpose: "Giúp người thám du đi theo đường thẳng tắp đến đích dù không nhìn thấy đích do bị cây rừng che khuất hoặc đêm tối.",
    equipment: ["La bàn Silva", "Sổ ghi phương vị"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Đi theo hàng thẳng hướng về một vật chuẩn trung gian được chỉ định."
      },
      thieu: {
        target: "Thiết lập góc phương vị trên la bàn, chọn vật chuẩn trung gian (Intermediate landmark) và di chuyển thẳng tới đích."
      },
      trang: {
        target: "Thực hiện kỹ thuật vòng tránh chướng ngại vật (90° Box deviation) khi gặp đầm lầy hoặc vách đá mà vẫn giữ đúng trục đường."
      }
    },
    steps: [
      "<strong>Bước 1 - Lấy phương vị:</strong> Xoay đĩa độ tới góc cần đi (vd: 75°).",
      "<strong>Bước 2 - Ngắm hướng:</strong> Cầm la bàn trước ngực, xoay người cho kim đỏ chui vào nhà Bắc. Mũi tên chỉ hướng lúc này chỉ thẳng hướng cần đi.",
      "<strong>Bước 3 - Chọn vật trung gian:</strong> Nhìn theo mũi tên chỉ hướng, chọn 1 thân cây to/tảng đá nổi bật trên đường ngắm (vật chuẩn trung gian).",
      "<strong>Bước 4 - Tiến bước:</strong> Cất la bàn, đi thẳng tới vật chuẩn đó. Đến nơi, lặp lại quy trình ngắm vật chuẩn tiếp theo."
    ],
    commonMistakes: [
      "Vừa đi vừa nhìn chằm chằm vào la bàn khiến bước chân bị lạng quạng vấp ngã.",
      "Chọn vật chuẩn trung gian di động (như con bò hoặc người đang đi lại)."
    ],
    safety: "Khi đi trong sương mù dày, phân công 1 bạn đi trước 10m làm cọc tiêu ngắm trực tiếp.",
    practice: "Đi theo phương vị 110° vượt qua bãi đất rộng 200m đến đúng cọc tiêu ẩn giấu.",
    challenge: "Di chuyển 500m xuyên qua rừng rậm bằng 3 góc phương vị liên tiếp mà không bị lệch đường.",
    assessment: "Bạn đạt khi: Dùng la bàn để di chuyển tới mục tiêu chính xác sai số không quá 2°.",
    relatedSkills: ["su-dung-la-ban", "do-khoang-cach-buoc-chan", "uoc-dac"]
  },

  {
    id: "sk-do-khoang-cach-buoc-chan",
    slug: "do-khoang-cach-buoc-chan",
    title: "6. Đo khoảng cách bằng bước chân",
    title_en: "Pace Counting for Distance Measurement",
    category: "kham-pha-dinh-huong",
    subcategory: "Ước đạc thực địa",
    shortDescription: "Tính chiều dài trung bình của bước chân đôi (Pace count) và áp dụng đo đạc cự ly ngoài thực địa.",
    environment: "both",
    difficulty: "easy",
    tags: ["Bước chân đôi", "Ước đạc", "Toán học thực tế"],
    media: { poster: "image/kynang/uoc-luong-chieu-cao.png", videoId: "" },
    purpose: "Biết chính xác mình đã đi được bao nhiêu mét trong rừng mà không cần dây đo hay máy đếm bước chân điện tử.",
    equipment: ["Thước dây 50m chuẩn để hiệu chuẩn", "Chuỗi hạt đếm bước (Ranger beads) hoặc sổ ghi"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết đếm bước chân đều đặn, không nhảy chân sáo khi làm nhiệm vụ trinh sát."
      },
      thieu: {
        target: "Tự tính chỉ số bước chân đôi cá nhân (vd: 100m = 65 bước đôi), biết quy đổi số bước chân ra mét thực tế."
      },
      trang: {
        target: "Hiệu chỉnh hệ số bước chân khi leo dốc (+10-15% số bước) hoặc khi mang ba lô nặng."
      }
    },
    steps: [
      "<strong>Bước 1 - Hiệu chuẩn:</strong> Đo một đoạn đường phẳng dài đúng 100m.",
      "<strong>Bước 2 - Đếm bước đôi:</strong> Đi bộ tự nhiên, đếm mỗi khi chân trái (hoặc chân phải) chạm đất. Đi 3 lần lấy số trung bình (ví dụ: 64 bước đôi / 100m).",
      "<strong>Bước 3 - Tính toán:</strong> Chiều dài 1 bước đôi = 100m / 64 = 1.56m.",
      "<strong>Bước 4 - Ứng dụng:</strong> Khi thám du, cứ đếm đủ 64 bước đôi nghĩa là bạn vừa đi được đúng 100m trên thực địa."
    ],
    commonMistakes: [
      "Cố tình sải chân quá dài khi hiệu chuẩn khiến khi mệt bước chân bị ngắn lại làm sai số.",
      "Quên số hạt đếm bước khi mải nói chuyện."
    ],
    safety: "Duy trì nhịp chân đều đặn giúp tiết kiệm thể lực tối đa trên đường dài.",
    practice: "Đo chiều dài sân sinh hoạt bằng bước chân đôi và đối chiếu lại với thước dây.",
    challenge: "Đo khoảng cách đoạn đường 300m ngoài thực địa sai số dưới 5m.",
    assessment: "Bạn đạt khi: Tính chuẩn xác hệ số bước chân của bản thân và đo khoảng cách thực tế tin cậy.",
    relatedSkills: ["di-theo-phuong-vi", "uoc-luong-chieu-cao", "lap-hanh-trinh"]
  },

  {
    id: "sk-uoc-luong-chieu-cao",
    slug: "uoc-dac",
    title: "7. Ước lượng chiều cao",
    title_en: "Height Estimation Techniques",
    category: "kham-pha-dinh-huong",
    subcategory: "Ước đạc thực địa",
    shortDescription: "Áp dụng các phương pháp đơn giản (bóng gậy, que đo tỷ lệ 1:10, phương pháp thợ rừng) để đo cây hoặc công trình.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Ước đạc", "Hình học", "Gậy thiếu sinh", "Scoutcraft"],
    media: { poster: "image/kynang/uoc-luong-chieu-cao.png", videoId: "" },
    purpose: "Xác định chiều cao của cây cổ thụ, cột cờ, vách núi để phục vụ thi công cầu tháp hoặc kiểm tra độ an toàn cây đổ.",
    equipment: ["Gậy thiếu sinh đã khắc vạch chia", "Thước đo que nhỏ"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Hiểu phương pháp so sánh chiều cao cây với chiều cao một người bạn đứng cạnh gốc cây."
      },
      thieu: {
        target: "Thành thạo Phương pháp que đo tỷ lệ 1:10 và Phương pháp bóng nắng tam giác đồng dạng."
      },
      trang: {
        target: "Ứng dụng giác kế tự chế (Clinometer) đo góc nghiêng và tính lượng giác chiều cao vách núi."
      }
    },
    steps: [
      "<strong>Phương pháp 1 (Tỷ lệ que 1:10):</strong> Cầm thẳng cây gậy 1m, lùi ra xa ngắm đỉnh gậy trùng đỉnh cây, chân gậy trùng gốc cây. Khoảng cách từ người tới cây chia 10 chính là chiều cao cây.",
      "<strong>Phương pháp 2 (Bóng nắng tam giác đồng dạng):</strong> Chiều cao cây = (Chiều dài bóng cây x Chiều cao gậy) / Chiều dài bóng gậy.",
      "<strong>Phương pháp 3 (Phương pháp thợ rừng - Lumberjack):</strong> Cầm que thẳng đứng bằng một cánh tay duỗi thẳng, xoay que nằm ngang 90°, điểm chạm đầu que trên mặt đất cách gốc cây chính bằng chiều cao ngọn cây."
    ],
    commonMistakes: [
      "Cầm que que nghiêng không vuông góc với tầm mắt.",
      "Đo bóng nắng khi mặt đất mấp mô gồ ghề làm sai chiều dài bóng."
    ],
    safety: "Đứng ở vị trí bằng phẳng, không lùi về phía sau mà không quan sát hố rãnh sau lưng.",
    practice: "Ước lượng chiều cao cột cờ và một cây xanh trong công viên.",
    challenge: "Đo chiều cao cây cổ thụ cao trên 15m với sai số không quá 10%.",
    assessment: "Bạn đạt khi: Áp dụng được ít nhất 2 phương pháp đo đơn giản và cho kết quả tin cậy.",
    relatedSkills: ["gay-thieu-sinh", "do-khoang-cach-buoc-chan", "xac-dinh-phuong-huong"]
  },

  {
    id: "sk-lap-hanh-trinh",
    slug: "lap-hanh-trinh",
    title: "8. Lập hành trình (Route Card)",
    title_en: "Route Card & Expedition Planning",
    category: "kham-pha-dinh-huong",
    subcategory: "Lập lộ trình Route Card",
    shortDescription: "Tạo Route Card gồm tuyến đường, khoảng cách, thời gian, chênh cao, điểm nghỉ và phương án dự phòng an toàn.",
    environment: "both",
    difficulty: "hard",
    tags: ["Route Card", "Kế hoạch", "Thám du", "Huynh trưởng"],
    media: { poster: "image/kynang/lap-hanh-trinh-route-card.png", videoId: "" },
    purpose: "Bản kế hoạch tác chiến chi tiết của chuyến thám du, giúp ban lãnh đạo theo dõi vị trí và xử lý cứu hộ kịp thời nếu có sự cố.",
    equipment: ["Bản đồ hành trình", "Biểu mẫu Route Card chuẩn", "Bút chì & Thước đo"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết lộ trình tổng quan chuyến đi (điểm xuất phát, điểm dừng chân, điểm về nhà)."
      },
      thieu: {
        target: "Biết đọc Route Card của đội: nắm được cự ly từng chặng, thời gian nghỉ và nhiệm vụ của mình."
      },
      trang: {
        target: "Tự lập trọn vẹn Route Card theo quy tắc Naismith (4km/h đi bộ + 10 phút cho mỗi 100m leo cao), lập điểm thoát hiểm dự phòng."
      }
    },
    steps: [
      "<strong>1. Chia chặng (Legs):</strong> Chia lộ trình thành các chặng ngắn 2-3km nối giữa các địa vật rõ nét (ngã ba, cây cầu, đỉnh dốc).",
      "<strong>2. Tính toán cự ly & Góc phương vị:</strong> Đo khoảng cách từng chặng trên bản đồ, ghi rõ góc phương vị di chuyển.",
      "<strong>3. Ước tính thời gian (Quy tắc Naismith):</strong> Tốc độ trung bình 4km/h trên đường phẳng + cộng thêm 10 phút cho mỗi 100m leo dốc.",
      "<strong>4. Phương án dự phòng (Escape routes):</strong> Ghi rõ trạm y tế gần nhất, số điện thoại khẩn cấp và đường thoát nhanh nếu gặp thời tiết nguy hiểm."
    ],
    commonMistakes: [
      "Lập kế hoạch quá lạc quan không tính thời gian nghỉ ngơi và thể lực của người yếu nhất.",
      "Không để lại bản sao Route Card cho người quản trại ở hậu cứ."
    ],
    safety: "Luôn gửi 1 bản Route Card cho gia đình và Ban Liên Đoàn trước khi xuất phát.",
    practice: "Lập biểu mẫu Route Card cho chuyến thám du dã ngoại 1 ngày cự ly 10km.",
    challenge: "Điều hành đội di chuyển bám sát thời gian biểu trong Route Card sai lệch dưới 15 phút.",
    assessment: "Bạn đạt khi: Tạo Route Card chuẩn xác gồm đầy đủ tuyến đường, cự ly, thời gian và phương án dự phòng.",
    relatedSkills: ["doc-ban-do", "di-bo", "goi-tro-giup"]
  },

  // ==========================================
  // 05. SƠ CỨU & AN TOÀN
  // ==========================================
  {
    id: "sk-tui-so-cuu",
    slug: "tui-so-cuu",
    title: "1. Túi sơ cứu (First Aid Kit)",
    title_en: "First Aid Kit Preparation & Inspection",
    category: "so-cuu-an-toan",
    subcategory: "Túi sơ cứu & Chuẩn bị",
    shortDescription: "Nhận biết công dụng của các vật dụng cơ bản và cách kiểm tra, bổ sung túi sơ cứu trước chuyến đi.",
    environment: "both",
    difficulty: "easy",
    tags: ["Túi sơ cứu", "Y tế", "Chuẩn bị", "An toàn"],
    media: { poster: "image/kynang/tui-so-cuu-da-ngoai.png", videoId: "" },
    purpose: "Trang bị phương tiện y tế thiết yếu để xử lý ngay tức thì các vết thương và tình huống khẩn cấp tại hiện trường dã ngoại.",
    equipment: ["Túi sơ cứu chống nước", "Băng dán Urgo", "Gạc vô trùng", "Băng cuộn y tế", "Băng tam giác", "Nước muối sinh lý NaCl 0.9%", "Cồn đỏ Povidone Iodine", "Kéo cắt y tế", "Găng tay cao su", "Nhíp gắp"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết vị trí để túi sơ cứu trong ba lô và công dụng của băng dán cá nhân Urgo, nước muối rửa vết thương."
      },
      thieu: {
        target: "Tự kiểm tra danh mục checklist túi sơ cứu phân đội, kiểm tra hạn sử dụng thuốc và biết bổ sung vật tư tiêu hao sau mỗi kỳ trại."
      },
      trang: {
        target: "Thiết kế túi cấp cứu chuyên sâu cho kỳ trại liên đoàn (bao gồm nẹp gãy xương, cáng cứu thương, chăn chống sốc nhiệt)."
      }
    },
    steps: [
      "<strong>1. Phân loại ngăn túi:</strong> Ngăn sát khuẩn (nước muối, cồn sát trùng) &rarr; Ngăn băng bó (gạc, băng cuộn, băng keo) &rarr; Ngăn dụng cụ (kéo, nhíp, găng tay) &rarr; Ngăn thuốc thông dụng.",
      "<strong>2. Kiểm tra trước chuyến đi:</strong> Đảm bảo các gói gạc còn nguyên niêm phong vô trùng, găng tay cao su không bị rách mục.",
      "<strong>3. Bảo quản:</strong> Để túi sơ cứu ở ngăn trên cùng hoặc ngăn ngoài dễ lấy nhất của ba lô, bọc túi nilon chống thấm nước 100%."
    ],
    commonMistakes: [
      "Để các lọ cồn lỏng bị hở nắp rò rỉ làm ướt hỏng các cuộn băng gạc.",
      "Dùng tay trần dính bẩn chạm trực tiếp vào vết thương hở của bạn."
    ],
    safety: "Luôn đeo găng tay y tế một lần trước khi tiến hành sơ cứu cho người khác.",
    practice: "Kiểm tra và sắp xếp hoàn chỉnh một túi sơ cứu cá nhân đạt chuẩn đi dã ngoại.",
    challenge: "Lấy chính xác dụng cụ sơ cứu cần thiết trong bóng tối trong vòng 10 giây.",
    assessment: "Bạn đạt khi: Nhận biết đúng công dụng của các vật dụng và tự chuẩn bị được túi sơ cứu đạt chuẩn.",
    relatedSkills: ["xu-ly-vet-tray-xuoc-nho", "chay-mau", "ha-than-nhiet"]
  },

  {
    id: "sk-xu-ly-vet-tray-xuoc-nho",
    slug: "xu-ly-vet-tray-xuoc-nho",
    title: "2. Xử lý vết trầy xước nhỏ",
    title_en: "Minor Cuts, Scrapes & Wound Care",
    category: "so-cuu-an-toan",
    subcategory: "Chấn thương phần mềm",
    shortDescription: "Đánh giá, làm sạch bằng nước muối sinh lý, sát trùng và bảo vệ vết thương tránh nhiễm trùng ngoài trời.",
    environment: "both",
    difficulty: "easy",
    tags: ["Sơ cứu", "Vết thương", "Vệ sinh", "An toàn"],
    media: { poster: "image/kynang/so-cuu-bang-bo-nep-chan.png", videoId: "" },
    purpose: "Ngăn ngừa vi khuẩn xâm nhập gây uốn ván, nhiễm trùng sưng mủ khi va quẹt cây cỏ, sỏi đá trong lúc sinh hoạt dã ngoại.",
    equipment: ["Găng tay y tế", "Nước muối sinh lý NaCl 0.9%", "Dung dịch sát khuẩn Povidone Iodine", "Gạc vô trùng", "Băng dán cá nhân"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết rửa vết trầy xước dưới vòi nước sạch và dán băng cá nhân bảo vệ."
      },
      thieu: {
        target: "Thực hiện đúng quy trình 4 bước: Rửa sạch dị vật &rarr; Sát trùng quanh mép &rarr; Băng gạc vô trùng &rarr; Theo dõi dấu hiệu nhiễm trùng."
      },
      trang: {
        target: "Đánh giá mức độ tổn thương sâu, xử lý các vết rách rỉ dịch và hướng dẫn tiêm ngừa uốn ván khi vết thương dính đất bẩn."
      }
    },
    steps: [
      "<strong>Bước 1 - Vệ sinh tay:</strong> Rửa sạch tay hoặc đeo găng tay y tế.",
      "<strong>Bước 2 - Rửa sạch vết thương:</strong> Dùng nước muối sinh lý hoặc nước sạch xối nhẹ để trôi sạch đất cát, bụi bẩn bám dính.",
      "<strong>Bước 3 - Sát trùng:</strong> Dùng bông gạc thấm dung dịch Povidone Iodine lau nhẹ nhàng từ trong miệng vết thương lan rộng ra ngoài xung quanh.",
      "<strong>Bước 4 - Băng bảo vệ:</strong> Đặt miếng gạc vô trùng lên trên và cố định bằng băng keo hoặc dán băng dán cá nhân."
    ],
    commonMistakes: [
      "Rắc thuốc bột kháng sinh hoặc đắp lá cây dại lạ lên vết thương hở.",
      "Dùng cồn 90 độ dội trực tiếp vào miệng vết thương sâu gây bỏng rát mô tế bào sống."
    ],
    safety: "Thay băng hàng ngày hoặc ngay khi băng bị ướt/bẩn.",
    practice: "Thực hành rửa và băng bó vết trầy xước ở cẳng tay cho bạn đội viên.",
    challenge: "Xử lý sạch sẽ một vết thương giả định có lẫn bùn đất trong 3 phút.",
    assessment: "Bạn đạt khi: Thực hiện đúng quy trình vô trùng và băng bó vết thương gọn gàng, êm ái.",
    relatedSkills: ["tui-so-cuu", "chay-mau", "phong-rop-chan"]
  },

  {
    id: "sk-chay-mau",
    slug: "chay-mau",
    title: "3. Chảy máu",
    title_en: "Bleeding Control & Pressure Bandaging",
    category: "so-cuu-an-toan",
    subcategory: "Chấn thương phần mềm",
    shortDescription: "Nhận biết tình huống cần hỗ trợ y tế và thực hành ép trực tiếp cầm máu ban đầu đúng kỹ thuật.",
    environment: "both",
    difficulty: "medium",
    tags: ["Cầm máu", "Sơ cứu", "Khẩn cấp", "Băng ép"],
    media: { poster: "image/kynang/so-cuu-bang-bo-nep-chan.png", videoId: "" },
    purpose: "Ngăn chặn sự mất máu nhanh chóng, chống sốc trụy tim mạch và bảo toàn tính mạng cho nạn nhân.",
    equipment: ["Găng tay y tế", "Gạc vô trùng dày", "Cuộn băng thun băng ép", "Băng tam giác"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết dùng miếng vải sạch ấn chặt vào vết thương đang chảy máu và lập tức hô hoán gọi người lớn."
      },
      thieu: {
        target: "Thành thạo kỹ thuật băng ép trực tiếp: Đặt gạc dày lên vết thương &rarr; Ép chặt bằng lòng bàn tay &rarr; Quấn băng thun ép chặt &rarr; Nâng cao chi bị thương."
      },
      trang: {
        target: "Nhận biết chảy máu động mạch (máu đỏ tươi phun thành tia), xử lý ấn điểm mạch chèn và lập phương án chuyển thương khẩn cấp."
      }
    },
    steps: [
      "<strong>1. An toàn:</strong> Đeo găng tay y tế bảo vệ chống lây nhiễm qua đường máu.",
      "<strong>2. Ép trực tiếp:</strong> Đặt miếng gạc vô trùng dày trực tiếp lên vết thương, dùng lòng bàn tay ấn mạnh liên tục trong 10-15 phút.",
      "<strong>3. Băng ép:</strong> Dùng cuộn băng thun quấn chặt cố định miếng gạc để duy trì lực ép (không quấn quá chặt làm tím tái đầu chi).",
      "<strong>4. Nâng cao chi:</strong> Nếu không bị gãy xương, nâng cao vị trí vết thương cao hơn tim để giảm áp lực máu dồn về.",
      "<strong>Lưu ý:</strong> Nếu máu thấm đẫm miếng gạc đầu tiên, TUYỆT ĐỐI KHÔNG BÓC RA mà hãy đặt thêm lớp gạc thứ hai đè lên trên và tiếp tục băng ép."
    ],
    commonMistakes: [
      "Bóc bỏ lớp gạc cũ làm rách cục máu đông vừa mới hình thành khiến máu chảy ồ ạt trở lại.",
      "Tự ý thắt Garo bừa bãi khi chưa có chỉ định chuyên môn gây hoại tử chi."
    ],
    safety: "Nếu máu phun thành tia hoặc không cầm sau 15 phút ép chặt, gọi cấp cứu 115 ngay lập tức.",
    practice: "Thực hành băng ép cầm máu vết thương rách sâu ở cẳng tay.",
    challenge: "Hoàn thiện băng ép cầm máu đúng kỹ thuật trong vòng 60 giây.",
    assessment: "Bạn đạt khi: Nắm vững kỹ thuật ép trực tiếp cầm máu và biết khi nào cần gọi hỗ trợ y tế khẩn cấp.",
    relatedSkills: ["tui-so-cuu", "bong-gan", "goi-tro-giup"]
  },

  {
    id: "sk-bong-gan",
    slug: "bong-gan",
    title: "4. Bong gân (Sprains & Strains)",
    title_en: "Sprain Management & R.I.C.E Protocol",
    category: "so-cuu-an-toan",
    subcategory: "Chấn thương phần mềm",
    shortDescription: "Nhận biết dấu hiệu sưng đau khớp chân/tay, áp dụng phác đồ R.I.C.E và biết khi nào phải dừng hoạt động.",
    environment: "both",
    difficulty: "medium",
    tags: ["Bong gân", "R.I.C.E", "Chấn thương", "Khớp"],
    media: { poster: "image/kynang/so-cuu-bang-bo-nep-chan.png", videoId: "" },
    purpose: "Giảm đau, hạn chế sưng nề tụ máu, bảo vệ dây chằng khớp và phục hồi vận động nhanh chóng sau chấn thương lật cổ chân.",
    equipment: ["Túi đá chườm lạnh hoặc khăn nhúng nước lạnh", "Cuộn băng thun co giãn (băng số 8)", "Gậy chống hoặc cáng chuyển thương"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết ngồi nghỉ ngay khi bị trẹo chân, không cố đi tiếp và báo cho Huynh trưởng."
      },
      thieu: {
        target: "Thành thạo nguyên tắc R.I.C.E: Rest (Nghỉ ngơi) &rarr; Ice (Chườm lạnh) &rarr; Compression (Băng ép số 8) &rarr; Elevation (Kê cao chi)."
      },
      trang: {
        target: "Phân biệt bong gân độ nhẹ với gãy xương kín (dấu hiệu biến dạng xương, điểm đau chói), cố định nẹp cứu thương an toàn."
      }
    },
    steps: [
      "<strong>R - Rest (Nghỉ ngơi):</strong> Dừng ngay hoạt động, tuyệt đối không dồn trọng lượng lên chân bị đau.",
      "<strong>I - Ice (Chườm lạnh):</strong> Chườm túi đá bọc khăn trong 15-20 phút (không chườm đá trực tiếp lên da), lặp lại sau mỗi 2-3 tiếng trong 24h đầu.",
      "<strong>C - Compression (Băng ép):</strong> Dùng băng thun quấn hình số 8 quanh cổ chân để nâng đỡ khớp và giảm sưng nề.",
      "<strong>E - Elevation (Kê cao):</strong> Kê cao chân bị thương trên ba lô cao hơn mức tim khi nằm nghỉ."
    ],
    commonMistakes: [
      "Dùng dầu nóng, cồn xoa bóp hoặc chườm nóng ngay sau chấn thương làm giãn mạch máu khiến sưng nề và tụ máu nặng hơn.",
      "Cố đi tiếp làm đứt rách dây chằng nghiêm trọng."
    ],
    safety: "Nếu khớp bị biến dạng, lệch trục hoặc đau chói dữ dội không thể cử động, nghi ngờ gãy xương &rarr; nẹp cố định và chuyển bệnh viện.",
    practice: "Thực hành quấn băng thun số 8 cố định khớp cổ chân cho bạn.",
    challenge: "Xử lý sơ cứu hoàn chỉnh một ca lật cổ chân giả định trên đường hành quân trong 5 phút.",
    assessment: "Bạn đạt khi: Nắm vững 4 bước R.I.C.E và quấn đúng kỹ thuật băng số 8 cố định khớp.",
    relatedSkills: ["di-bo", "gay-thieu-sinh", "tui-so-cuu"]
  },

  {
    id: "sk-phong-rop-chan",
    slug: "phong-rop-chan",
    title: "5. Phồng rộp chân (Blister Prevention & Care)",
    title_en: "Foot Blister Prevention & Field Treatment",
    category: "so-cuu-an-toan",
    subcategory: "Thời tiết & Môi trường",
    shortDescription: "Phòng ngừa và xử lý các vấn đề thường gặp ở bàn chân khi đi bộ đường dài (Hot spots & Blisters).",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Phồng rộp", "Chăm sóc chân", "Hiking", "Trekking"],
    media: { poster: "image/kynang/phong-rop-chan-blister.png", videoId: "" },
    purpose: "Bảo vệ đôi bàn chân - tài sản quý giá nhất của người đi bộ đường dài, giúp hoàn thành trọn vẹn hành trình thám du không đau đớn.",
    equipment: ["Băng keo cá nhân / Băng dính thể thao (Micropore/Zinc Oxide)", "Tất len/tất trekking chuyên dụng", "Kem chống ma sát (Vaseline)"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết đi giày vừa chân, xỏ tất phẳng không bị đùn vải và báo ngay khi gót chân bắt đầu thấy nóng rát."
      },
      thieu: {
        target: "Phát hiện 'Điểm nóng' (Hot spot) và dán băng keo bảo vệ ngay trước khi hình thành bọng nước; biết vệ sinh và băng bảo vệ bọng nước phồng rộp."
      },
      trang: {
        target: "Hướng dẫn đoàn sinh chọn giày trekking, cắt móng chân đúng cách trước chuyến đi và kiểm tra bàn chân của đội sau mỗi chặng 10km."
      }
    },
    steps: [
      "<strong>1. Phòng ngừa:</strong> Đi giày đã qua sử dụng (không đi giày mới tinh đi trại), mang tất dày hút ẩm, cắt ngắn móng chân.",
      "<strong>2. Xử lý Hot spot (Điểm nóng):</strong> Khi vừa cảm thấy gót chân nóng rát &rarr; DỪNG LẠI NGAY &rarr; dán một miếng băng keo y tế trơn lên vùng da đó để giảm ma sát.",
      "<strong>3. Xử lý khi đã có bọng nước:</strong> Rửa sạch bằng nước muối, KHÔNG TỰ Ý BÓC LỚP DA BỌNG NƯỚC (lớp da này là màng vô trùng tự nhiên). Dán miếng đệm hình bánh donut (khoét lỗ ở giữa) quanh bọng nước rồi băng nhẹ lại."
    ],
    commonMistakes: [
      "Dùng kim khâu bẩn chọc vỡ bọng nước gây nhiễm trùng loét sâu.",
      "Cố chịu đựng điểm nóng tiếp tục đi khiến vết phồng rộp rách toác."
    ],
    safety: "Giữ bàn chân luôn khô ráo. Thay tất khô mới ngay sau khi lội suối.",
    practice: "Dán băng dính bảo vệ gót chân và đệm ngón chân trước khi đi bộ đường dài.",
    challenge: "Hoàn thành hành trình trekking 10km mà bàn chân không bị một vết phồng rộp nào.",
    assessment: "Bạn đạt khi: Nắm vững các bước phòng ngừa và xử lý an toàn bọng nước bàn chân.",
    relatedSkills: ["di-bo", "tui-so-cuu", "xu-ly-vet-tray-xuoc-nho"]
  },

  {
    id: "sk-ha-than-nhiet",
    slug: "ha-than-nhiet",
    title: "6. Hạ thân nhiệt (Hypothermia)",
    title_en: "Hypothermia Recognition & 6-Step Field Treatment",
    category: "so-cuu-an-toan",
    subcategory: "Thời tiết & Môi trường",
    shortDescription: "Dấu hiệu nhận biết (run rẩy, da tái lạnh, nói chậm lơ mơ, mệt lả) và 6 bước xử lý ban đầu cấp cứu hạ thân nhiệt an toàn.",
    environment: "both",
    difficulty: "medium",
    tags: ["Hạ thân nhiệt", "Sơ cứu", "Mùa đông", "Sinh tồn"],
    media: { poster: "image/kynang/5-ha-than-nhiet.jpg", videoId: "" },
    purpose: "Bảo vệ tính mạng người bị nạn khi thân nhiệt lõi tụt giảm do ngâm nước lạnh, dầm mưa giông hoặc rét gió kéo dài.",
    equipment: ["Chăn cứu sinh nhôm phản nhiệt (Emergency blanket)", "Túi ngủ khô", "Quần áo ấm khô", "Chai nước ấm bọc khăn", "Nước đường gừng ấm"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết dấu hiệu rét run dữ dội, môi tím tái và báo ngay cho Huynh trưởng / người lớn."
      },
      thieu: {
        target: "Cách ly nạn nhân khỏi gió mưa, cởi bỏ đồ ướt thay đồ khô, bọc chăn nhôm giữ nhiệt và chườm ấm đúng vị trí (nách, bẹn, cổ)."
      },
      trang: {
        target: "Đánh giá mức độ hạ thân nhiệt (nhẹ, trung bình, nặng), theo dõi dấu hiệu sinh tồn và tổ chức chuyển viện khẩn cấp."
      }
    },
    steps: [
      "<strong>Dấu hiệu:</strong> Run rẩy dữ dội, da tái nhợt, môi tím ngắt, cử động vụng về, nói lắp bắp, lú lẫn.",
      "<strong>Bước 1 - Cách ly nguồn lạnh:</strong> Đưa ngay vào lều kín gió, trải thảm cách nhiệt dưới lưng ngăn mất nhiệt qua đất.",
      "<strong>Bước 2 - Thay đồ khô:</strong> Nhẹ nhàng cởi bỏ quần áo ẩm ướt, lau khô người và mặc đồ ấm khô ráo.",
      "<strong>Bước 3 - Quấn chăn giữ nhiệt:</strong> Bọc nạn nhân trong chăn cứu sinh nhôm hoặc túi ngủ dày.",
      "<strong>Bước 4 - Làm ấm từ vùng lõi:</strong> Đặt chai nước ấm bọc khăn vào các vị trí mạch máu lớn: 2 bên nách, 2 bên bẹn, vùng cổ. Cho uống nước đường gừng ấm nếu tỉnh táo.",
      "<strong>CẤM:</strong> Không xoa bóp mạnh tay chân (gây sốc tim), không hơ lửa trực tiếp vào chân tay bị cóng, không cho uống rượu."
    ],
    commonMistakes: [
      "Hơ lửa trực tiếp làm bỏng mô tế bào.",
      "Cho người hôn mê uống nước gây sặc đường thở."
    ],
    safety: "Nếu nạn nhân ngừng thở hoặc hôn mê sâu, tiến hành ép tim ngoài lồng ngực (CPR) và gọi 115 ngay lập tức.",
    practice: "Thực hành quấn chăn cứu sinh nhôm và cố định chai chườm ấm cho bạn giả định.",
    challenge: "Thiết lập quy trình giữ ấm cơ thể cho cả phân đội trong đêm trại rét dưới 12°C.",
    assessment: "Bạn đạt khi: Trình bày chính xác các bước sơ cứu hạ thân nhiệt và nêu được 3 điều cấm kỵ tuyệt đối.",
    relatedSkills: ["di-bo", "tui-so-cuu", "kiet-suc-do-nong"]
  },

  {
    id: "sk-kiet-suc-do-nong",
    slug: "kiet-suc-do-nong",
    title: "7. Kiệt sức do nóng (Heat Exhaustion & Heat Stroke)",
    title_en: "Heat Illness Recognition & Management",
    category: "so-cuu-an-toan",
    subcategory: "Thời tiết & Môi trường",
    shortDescription: "Nhận biết nguy cơ do nhiệt độ cao, mất nước, say nắng và xử lý làm mát hạ nhiệt khẩn cấp.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Say nắng", "Sốc nhiệt", "Mùa hè", "Sơ cứu"],
    media: { poster: "image/kynang/kiet-suc-do-nong-say-nang.png", videoId: "" },
    purpose: "Ngăn chặn tiến triển nguy hiểm từ Say nóng (Heat Exhaustion) sang Sốc nhiệt (Heat Stroke - nguy cơ tử vong cao).",
    equipment: ["Khăn ướt / nước mát", "Dung dịch bù nước Oresol hoặc nước khoáng điện giải", "Quạt tay"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết đội mũ che nắng khi ra trời nắng, uống nước đều đặn và báo ngay khi thấy chóng mặt, hoa mắt."
      },
      thieu: {
        target: "Đưa nạn nhân vào bóng râm, nới lỏng quần áo, chườm khăn mát vào trán/cổ/nách, quạt mát và cho uống nước từng ngụm nhỏ."
      },
      trang: {
        target: "Nhận diện dấu hiệu Sốc nhiệt nguy kịch (da nóng ran, đỏ bừng nhưng KHÔNG CÓ MỒ HÔI, co giật, hôn mê) &rarr; Làm mát tích cực và gọi 115 khẩn cấp."
      }
    },
    steps: [
      "<strong>1. Nhận biết Say nóng:</strong> Vã mồ hôi nhiều, da tái lạnh, chóng mặt, buồn nôn, mạch nhanh, khát nước.",
      "<strong>2. Di chuyển:</strong> Đưa ngay nạn nhân vào bóng râm thoáng gió, cho nằm ngửa nâng cao chân 20-30cm.",
      "<strong>3. Làm mát:</strong> Cởi bớt áo ngoài, dùng khăn ướt lau khắp người, chườm khăn mát vào nách, cổ, bẹn và dùng quạt phe phẩy.",
      "<strong>4. Bù nước điện giải:</strong> Nếu nạn nhân tỉnh táo, cho uống từng ngụm nước mát pha Oresol hoặc nước khoáng.",
      "<strong>Cảnh báo sốc nhiệt:</strong> Nếu da nạn nhân nóng rực, khô ráp, mê sảng &rarr; chườm nước đá hạ nhiệt khẩn cấp và đưa đến bệnh viện."
    ],
    commonMistakes: [
      "Cho nạn nhân uống nước đá quá lạnh đột ngột gây co thắt dạ dày.",
      "Để nạn nhân tiếp tục vận động ngoài trời nắng."
    ],
    safety: "Không bao giờ để đoàn sinh vận động thể lực nặng ngoài trời nắng gắt giữa trưa từ 11h - 14h.",
    practice: "Thực hành sơ cứu hạ nhiệt và bù nước cho một ca say nắng giả định.",
    challenge: "Lên kế hoạch đảm bảo nước uống và bóng mát cho 30 đoàn sinh trong buổi hoạt động mùa hè.",
    assessment: "Bạn đạt khi: Phân biệt được Say nóng và Sốc nhiệt, xử lý đúng quy trình làm mát hạ nhiệt.",
    relatedSkills: ["di-bo", "tui-so-cuu", "ha-than-nhiet"]
  },

  {
    id: "sk-goi-tro-giup",
    slug: "goi-tro-giup",
    title: "8. Gọi trợ giúp (Emergency Call Protocol)",
    title_en: "Emergency Dispatch Communication",
    category: "so-cuu-an-toan",
    subcategory: "Khẩn cấp & Gọi trợ giúp",
    shortDescription: "Biết cung cấp thông tin chuẩn 5W: Ai – Chuyện gì – Ở đâu – Bao nhiêu người – Nguy cơ gì đang tồn tại.",
    environment: "both",
    difficulty: "easy",
    tags: ["Khẩn cấp", "115", "Giao tiếp", "Cứu hộ"],
    media: { poster: "image/kynang/goi-tro-giup-khan-cap.png", videoId: "" },
    purpose: "Truyền đạt thông tin khẩn cấp rõ ràng, ngắn gọn để lực lượng cứu hộ y tế tiếp cận hiện trường nhanh nhất.",
    equipment: ["Điện thoại di động", "Tọa độ GPS / Mốc địa danh", "Sổ ghi thông tin"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhớ thuộc lòng 3 số điện thoại khẩn cấp: 114 (Cứu hỏa), 115 (Cấp cứu y tế), 113 (Công an)."
      },
      thieu: {
        target: "Nắm vững công thức 5W: Nêu rõ Địa điểm chính xác &rarr; Tình trạng nạn nhân &rarr; Sơ cứu đã thực hiện &rarr; Số lượng người &rarr; Chỉ cúp máy sau khi bên cứu hộ xác nhận."
      },
      trang: {
        target: "Điều phối phân công người ra đầu đường lớn đón xe cứu thương và chuẩn bị lối vào hiện trường."
      }
    },
    steps: [
      "<strong>1. AI (Who):</strong> Tên của bạn và số điện thoại đang dùng gọi.",
      "<strong>2. CHUYỆN GÌ (What):</strong> Mô tả ngắn gọn tai nạn (vd: 1 bạn bị ngã trượt dốc nghi ngờ gãy chân, đang tỉnh táo).",
      "<strong>3. Ở ĐÂU (Where):</strong> Vị trí chính xác (mốc địa danh, tọa độ GPS, cách đường lớn bao nhiêu mét).",
      "<strong>4. BAO NHIÊU NGƯỜI (How many):</strong> Số lượng nạn nhân và độ tuổi.",
      "<strong>5. NGUY CƠ GÌ (Hazards):</strong> Có nguy cơ sạt lở tiếp theo, mưa lũ hay cháy rừng hay không.",
      "<strong>QUY TẮC VÀNG:</strong> Giữ máy và chỉ cúp máy sau khi nhân viên trực tổng đài xác nhận và ngắt máy trước."
    ],
    commonMistakes: [
      "Hoảng loạn la hét trong điện thoại mà không cung cấp được địa chỉ vị trí.",
      "Cúp máy quá sớm khi bên cứu hộ chưa kịp hỏi xong các chi tiết quan trọng."
    ],
    safety: "Phân công 2 bạn cầm còi hoặc đèn pin đứng ở đầu ngõ/lối mòn đón xe cấp cứu vào hiện trường.",
    practice: "Đóng vai gọi cuộc gọi cấp cứu 115 giả định theo đúng công thức 5W trong 60 giây.",
    challenge: "Cung cấp tọa độ và dẫn đường chính xác cho đội cứu hộ tiếp cận vị trí trong rừng.",
    assessment: "Bạn đạt khi: Trình bày thông tin khẩn cấp rành mạch, chuẩn xác và bình tĩnh.",
    relatedSkills: ["tui-so-cuu", "chay-mau", "an-toan-so"]
  },

  // ==========================================
  // 06. THIÊN NHIÊN
  // ==========================================
  {
    id: "sk-nhan-biet-cay",
    slug: "nhan-biet-cay",
    title: "1. Nhận biết cây (Tree & Plant Identification)",
    title_en: "Tree & Plant Identification",
    category: "thien-nhien",
    subcategory: "Thực vật & Cây rừng",
    shortDescription: "Quan sát lá, thân, vỏ, hoa và môi trường sống để nhận biết các loài cây mà không phá hoại cây xanh.",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Thực vật", "Cây xanh", "Thiên nhiên", "Bảo tồn"],
    media: { poster: "image/kynang/nhan-biet-la-cay-rung.png", videoId: "" },
    purpose: "Hiểu biết về hệ thực vật bản địa, nhận diện cây gỗ tốt làm công trình trại, cây thuốc hữu ích và cây độc cần tránh.",
    equipment: ["Kính lúp nhỏ", "Sổ tay ký họa lá cây", "Thước đo"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết được 3 loại cây bóng mát quen thuộc trong công viên (cây bàng, cây phượng, cây xà cừ)."
      },
      thieu: {
        target: "Phân biệt lá đơn, lá kép, gân lá hình mạng/song song, nhận diện cây bạch đàn, cây thông lấy nhựa và cây lá ngón cực độc."
      },
      trang: {
        target: "Lập danh mục đa dạng sinh học thực vật khu vực cắm trại, hướng dẫn đàn em cách thu thập mẫu lá ép khô khoa học."
      }
    },
    steps: [
      "<strong>1. Quan sát hình dạng lá:</strong> Lá kim (thông), lá bản rộng, lá hình tim, mép lá có răng cưa hay nhẵn.",
      "<strong>2. Quan sát thân & vỏ cây:</strong> Vỏ cây trơn nhẵn, nứt nẻ hay có vảy sần sùi; thân có gai hay nhựa mủ.",
      "<strong>3. Nhận biết cây độc:</strong> Tránh xa cây Lá Ngón (dây leo lá xanh bóng, hoa vàng), cây mủ xương rồng độc.",
      "<strong>4. Bảo tồn:</strong> Chỉ nhặt lá rụng dưới đất để quan sát, tuyệt đối không bẻ cành tuốt lá cây tươi."
    ],
    commonMistakes: [
      "Hái nếm thử lá cây hoặc quả dại lạ trong rừng.",
      "Khắc tên, bẻ cành làm tổn thương thân cây."
    ],
    safety: "Không bao giờ ăn quả dại lạ khi chưa có sự cho phép của Huynh trưởng am hiểu thực vật.",
    practice: "Thu thập và ký họa 5 mẫu lá cây khác nhau trong công viên.",
    challenge: "Nhận diện đúng tên 5 loài cây chỉ qua hình dáng lá và vỏ thân cây.",
    assessment: "Bạn đạt khi: Nhận biết được ít nhất 5 loài cây thông dụng và phân biệt được cây độc cần tránh.",
    relatedSkills: ["thien-nhien", "theo-dau-dong-vat", "leave-no-trace"]
  },

  {
    id: "sk-quan-sat-chim",
    slug: "quan-sat-chim",
    title: "2. Quan sát chim (Bird Watching)",
    title_en: "Bird Watching & Identification",
    category: "thien-nhien",
    subcategory: "Chim & Động vật",
    shortDescription: "Nhận biết các loài chim thông qua hình dáng, màu lông, sải cánh, tiếng kêu và hành vi kiếm ăn.",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Quan sát chim", "Động vật", "Thiên nhiên", "Kiên nhẫn"],
    media: { poster: "image/kynang/quan-sat-chim.png", videoId: "" },
    purpose: "Rèn luyện đức tính kiên nhẫn, sự tĩnh lặng, tinh thần quan sát tinh tế và tình yêu thương muôn loài.",
    equipment: ["Ống nhòm dã ngoại (Binoculars)", "Sổ tay nhận diện chim", "Bút chì màu"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận diện được chim sẻ, bồ câu, chào mào và biết giữ im lặng khi quan sát chim non trong tổ."
      },
      thieu: {
        target: "Dùng ống nhòm quan sát hình dạng mỏ (mỏ ăn hạt, mỏ ăn sâu, mỏ ăn cá), kiểu bay lượn và phân biệt tiếng hót của 5 loài chim bản địa."
      },
      trang: {
        target: "Tổ chức các buổi đi dạo ngắm chim sáng sớm (Bird walk), ghi nhận các loài chim di cư tại bãi bồi sông Hồng."
      }
    },
    steps: [
      "<strong>1. Thời điểm vàng:</strong> Sáng sớm (6h - 8h) hoặc chiều muộn (16h - 17h30) khi chim ra khỏi tổ kiếm ăn.",
      "<strong>2. Giữ yên lặng:</strong> Mặc quần áo màu sẫm ngụy trang (xanh rêu, nâu đất), bước đi nhẹ nhàng không gây tiếng động.",
      "<strong>3. Quan sát các đặc điểm:</strong> Kích thước cơ thể, màu sắc vệt lông đầu/cánh, hình dạng mỏ và dáng đuôi.",
      "<strong>4. Ghi chép nhật ký:</strong> Ghi lại thời gian, địa điểm, loài chim và hành vi kiếm ăn vào sổ tay."
    ],
    commonMistakes: [
      "Mặc quần áo màu sặc sỡ và nói to khiến chim bay mất.",
      "Chọc phá tổ chim hoặc bắt chim non."
    ],
    safety: "Không đến quá gần mép bờ vực hoặc bụi rậm ẩm thấp khi đang mải nhìn qua ống nhòm.",
    practice: "Quan sát và ghi nhận 3 loài chim khác nhau tại Vườn hoa Bắc Biên trong 30 phút.",
    challenge: "Nhận diện đúng 3 loài chim chỉ qua việc lắng nghe tiếng hót trong tự nhiên.",
    assessment: "Bạn đạt khi: Nhận biết được 3–5 loài chim thông dụng và mô tả được tập tính của chúng.",
    relatedSkills: ["theo-dau-dong-vat", "nhan-biet-cay", "nhat-ky-thien-nhien"]
  },

  {
    id: "sk-theo-dau-dong-vat",
    slug: "theo-dau-dong-vat",
    title: "3. Theo dấu động vật (Animal Tracking)",
    title_en: "Animal Tracking & Sign Reading",
    category: "thien-nhien",
    subcategory: "Chim & Động vật",
    shortDescription: "Nhận biết dấu chân trên bùn cát, vết cắn trên cành cây, lông rụng và những dấu vết sinh hoạt khác.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Theo dấu", "Tracking", "Động vật", "Trinh sát"],
    media: { poster: "image/kynang/8-theo-dau-dong-vat.jpg", videoId: "" },
    purpose: "Kỹ năng trinh sát kinh điển của người thám hiểm, giúp hiểu được đời sống hoang dã mà không làm kinh động các loài vật.",
    equipment: ["Thước đo milimet", "Kính lúp", "Bột thạch cao đúc khuôn dấu chân (Plaster of Paris)"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Phân biệt được dấu chân chó (có vết móng vuốt) và dấu chân mèo (móng thu vào trong không để lại vết)."
      },
      thieu: {
        target: "Đo kích thước dấu chân, xác định hướng di chuyển, tốc độ (đi bộ hay chạy nhảy qua khoảng cách bước) và nhận biết phân động vật."
      },
      trang: {
        target: "Đúc khuôn thạch cao lưu giữ mẫu dấu chân động vật phục vụ trưng bày giáo dục tại góc truyền thống liên đoàn."
      }
    },
    steps: [
      "<strong>1. Tìm kiếm vị trí:</strong> Ven bờ suối, nền đất bùn mềm ẩm, bãi cát hoặc sau cơn mưa rào.",
      "<strong>2. Quan sát chi tiết dấu chân:</strong> Đếm số ngón chân, xem có vết móng vuốt nhọn hay không, đo chiều dài và chiều rộng vết chân.",
      "<strong>3. Xác định hành vi:</strong> Khoảng cách giữa các vết chân ngắn &rarr; đi dạo; khoảng cách dài, đất bị cày sâu phía sau &rarr; đang chạy trốn hoặc săn mồi.",
      "<strong>4. Dấu vết phụ:</strong> Lông vướng trên cành gai, vết mài sừng/vỏ cây bị bóc, vết thức ăn thừa (vỏ quả bị gặm)."
    ],
    commonMistakes: [
      "Dẫm đè lên dấu chân làm hỏng dấu vết trước khi kịp đo đạc.",
      "Đuổi theo động vật hoang dã có nguy cơ nguy hiểm."
    ],
    safety: "Không chạm tay trần vào phân hoặc xác động vật chết trong rừng.",
    practice: "Tìm và vẽ lại 2 mẫu dấu chân động vật khác nhau trên bãi cát sông Hồng.",
    challenge: "Đúc thành công một khuôn thạch cao dấu chân động vật hoàn chỉnh.",
    assessment: "Bạn đạt khi: Nhận diện đúng dấu chân của các loài vật thông dụng và phân tích được hướng di chuyển.",
    relatedSkills: ["quan-sat-chim", "nhan-biet-cay", "nhat-ky-thien-nhien"]
  },

  {
    id: "sk-quan-sat-may",
    slug: "quan-sat-may",
    title: "4. Quan sát mây (Cloud Formations & Weather)",
    title_en: "Cloud Observation & Weather Prediction",
    category: "thien-nhien",
    subcategory: "Thời tiết & Nguồn nước",
    shortDescription: "Nhận biết các dạng mây (mây tích, mây tầng, mây ti, mây vũ tích) để dự đoán thời tiết dã ngoại.",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Mây trời", "Thời tiết", "Khí tượng", "Dã ngoại"],
    media: { poster: "image/kynang/quan-sat-hinh-thai-may.png", videoId: "" },
    purpose: "Chủ động nhận biết trước các cơn dông bão sấm sét hoặc đợt không khí lạnh để chuẩn bị bạt che lều trại kịp thời.",
    equipment: ["Bảng phân loại các tầng mây", "Sổ ghi chép thời tiết"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết mây trắng xốp bông (trời đẹp nắng ráo) và mây đen xám xịt sà thấp (sắp có mưa to)."
      },
      thieu: {
        target: "Phân biệt 4 dạng mây chính: Mây Ti (Cirrus - vảy cá trên cao báo trời đẹp), Mây Tích (Cumulus - bông trắng), Mây Tầng (Stratus - sương mù bao phủ) và Mây Vũ Tích (Cumulonimbus - hình đe khổng lồ báo dông bão sấm sét)."
      },
      trang: {
        target: "Kết hợp quan sát mây, đo hướng gió và áp suất khí quyển để đưa ra quyết định hạ trại an toàn trước cơn bão."
      }
    },
    steps: [
      "<strong>1. Mây tầng cao (Mây Ti - Cirrus):</strong> Dải mây trắng mỏng manh như lông vũ ở độ cao trên 6.000m &rarr; Thời tiết đang đẹp, nhưng nếu mây ti dày dần thành quầng mặt trời &rarr; có thể có mưa sau 24h.",
      "<strong>2. Mây tầng trung (Mây Tích - Cumulus):</strong> Từng khối bông trắng bồng bềnh đáy phẳng &rarr; Thời tiết nắng đẹp lý tưởng.",
      "<strong>3. Mây nguy hiểm (Mây Vũ Tích - Cumulonimbus):</strong> Đỉnh mây vươn cao hình đe đe dọa, chân mây đen kịt &rarr; CỰC KỲ NGUY HIỂM: sắp có mưa rào xối xả, gió giật mạnh và sấm sét trong vòng 30 phút."
    ],
    commonMistakes: [
      "Chủ quan không chằng néo lều khi thấy mây hình đe xuất hiện phía chân trời."
    ],
    safety: "Khi thấy mây vũ tích đen kịt có sấm chớp &rarr; Rời ngay đỉnh đồi cao, tránh xa cây to cô độc và khu vực mặt nước.",
    practice: "Quan sát và ghi chép dạng mây xuất hiện trên bầu trời vào 3 thời điểm trong ngày.",
    challenge: "Dự báo chính xác diễn biến thời tiết trong buổi chiều dựa vào mây quan sát lúc 9h sáng.",
    assessment: "Bạn đạt khi: Nhận diện đúng các dạng mây cơ bản và phân tích được xu hướng thời tiết.",
    relatedSkills: ["thien-nhien", "chon-dat-trai", "ha-than-nhiet"]
  },

  {
    id: "sk-nguon-nuoc",
    slug: "nguon-nuoc",
    title: "5. Nguồn nước & Lọc nước sinh tồn",
    title_en: "Water Sources & Field Purification",
    category: "thien-nhien",
    subcategory: "Thời tiết & Nguồn nước",
    shortDescription: "Hiểu vai trò của nguồn nước đối với hệ sinh thái; tìm kiếm và lọc nước sạch uống an toàn trong tự nhiên.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Nước sạch", "Sinh tồn", "Lọc nước", "Môi trường"],
    media: { poster: "image/kynang/loc-nuoc-sinh-ton.png", videoId: "" },
    purpose: "Duy trì sự sống (cơ thể chỉ nhịn uống được tối đa 3 ngày), phòng ngừa các bệnh tả, kiết lỵ do vi khuẩn nguồn nước gây ra.",
    equipment: ["Vải lọc / khăn bandana", "Than củi giã nhỏ", "Cát sạch", "Sỏi cuội", "Viên khử khuẩn nước Aquatabs hoặc ấm đun sôi"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Hiểu nguyên tắc: Tuyệt đối không bao giờ uống trực tiếp nước suối/hồ chưa qua xử lý đun sôi."
      },
      thieu: {
        target: "Tự chế tạo cột lọc nước sinh tồn nhiều tầng (Sỏi &rarr; Cát &rarr; Than hoạt tính &rarr; Cát mịn &rarr; Vải) và đun sôi nước tối thiểu 3 phút."
      },
      trang: {
        target: "Đánh giá chất lượng nguồn nước đầu nguồn, lập hệ thống trữ và phân phối nước sạch cho toàn bộ kỳ trại 100 người."
      }
    },
    steps: [
      "<strong>1. Chọn nguồn nước:</strong> Ưu tiên nước suối chảy xiết trên cao &rarr; nước ngầm đào cạnh bờ suối &rarr; tránh xa vũng nước tù đọng có xác động vật/bọt váng.",
      "<strong>2. Lọc cơ học (Loại bỏ cặn bẩn):</strong> Cắt đáy chai nhựa, lót bông/vải ở miệng chai &rarr; xếp 1 lớp than củi giã nhỏ &rarr; 1 lớp cát mịn &rarr; 1 lớp cát thô &rarr; 1 lớp sỏi nhỏ. Rót nước đục qua cột lọc thu về nước trong veo.",
      "<strong>3. Tiệt trùng (Diệt khuẩn):</strong> Nước sau khi lọc trong phải được ĐUN SÔI SỦI BỌT LIÊN TỤC 3 PHÚT hoặc dùng viên khử khuẩn Aquatabs trước khi uống."
    ],
    commonMistakes: [
      "Nghĩ rằng nước suối trong vắt nhìn thấy đáy là sạch có thể uống ngay (nước trong vẫn chứa đầy ấu trùng amip và vi khuẩn e.coli).",
      "Lấy nước gần khu chăn thả gia súc hoặc xuôi dòng khu dân cư."
    ],
    safety: "Luôn đun sôi nước trước khi uống trong mọi trường hợp dã ngoại.",
    practice: "Làm một bộ lọc nước dã chiến từ chai nhựa và lọc trong 1 lít nước đục.",
    challenge: "Tự tạo ra 500ml nước uống sạch an toàn từ nguồn nước tự nhiên trong kỳ trại.",
    assessment: "Bạn đạt khi: Giải thích được tầm quan trọng của nguồn nước và thực hành thành công kỹ thuật lọc nước an toàn.",
    relatedSkills: ["nhom-lua-an-toan", "tam-giac-tao-lua", "tui-so-cuu"]
  },

  {
    id: "sk-khong-lam-phien-dong-vat",
    slug: "khong-lam-phien-dong-vat",
    title: "6. Không làm phiền động vật (Respect Wildlife)",
    title_en: "Respecting Wildlife & Ethical Observation",
    category: "thien-nhien",
    subcategory: "Chim & Động vật",
    shortDescription: "Quan sát ở khoảng cách phù hợp, bảo vệ nơi ở tự nhiên và không cho động vật hoang dã ăn thức ăn của người.",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Động vật", "Bảo tồn", "Leave No Trace", "Đạo đức"],
    media: { poster: "image/kynang/ton-trong-dong-vat-hoang-da.png", videoId: "" },
    purpose: "Bảo tồn tập tính hoang dã tự nhiên của các loài động vật, phòng ngừa nguy cơ bị thú cắn hoặc lây truyền bệnh dại.",
    equipment: ["Ống nhòm ngắm từ xa", "Quy tắc ngón tay cái (Rule of Thumb)"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Không ném đá, không xua đuổi chọc phá tổ chim, sóc, chó mèo và động vật hoang dã."
      },
      thieu: {
        target: "Áp dụng 'Quy tắc ngón tay cái': Duỗi thẳng tay giơ ngón tay cái lên, nếu ngón tay cái che khuất con vật thì khoảng cách là an toàn; nếu con vật to hơn ngón tay cái &rarr; bạn đang đứng quá gần."
      },
      trang: {
        target: "Tuyên truyền ý thức bảo vệ động vật quý hiếm, phòng chống buôn bán chim thú hoang dã tại địa phương."
      }
    },
    steps: [
      "<strong>1. Giữ khoảng cách an toàn:</strong> Sử dụng ống nhòm hoặc ống kính zoom để quan sát từ xa, không bao giờ tiến sát lại gần.",
      "<strong>2. Không cho ăn:</strong> Thức ăn của con người chứa nhiều muối đường và chất bảo quản gây hại cho dạ dày động vật và làm chúng mất khả năng tự kiếm ăn.",
      "<strong>3. Bảo quản rác & Thức ăn:</strong> Cất giữ đồ ăn trong hộp kín và treo cao để tránh chuột bọ hoặc thú rừng vào lục lọi ban đêm.",
      "<strong>4. Không làm phiền mùa sinh sản:</strong> Tránh xa các khu vực tổ đẻ, hang con non."
    ],
    commonMistakes: [
      "Ném bánh mì, bim bim cho chim khỉ ăn.",
      "Bắt chim non, rùa non mang về nhà nuôi làm cảnh."
    ],
    safety: "Nếu gặp động vật lạ gầm gừ đe dọa: Giữ bình tĩnh, không nhìn chằm chằm vào mắt nó, từ từ lùi lại phía sau, không bao giờ quay lưng bỏ chạy.",
    practice: "Quan sát và ghi lại hành vi của một đàn kiến hoặc đàn chim mà không làm chúng hoảng loạn.",
    challenge: "Bảo quản khu thực phẩm của phân đội an toàn tuyệt đối không bị động vật xâm nhập suốt 3 ngày trại.",
    assessment: "Bạn đạt khi: Thể hiện thái độ tôn trọng thiên nhiên và tuân thủ khoảng cách an toàn với động vật.",
    relatedSkills: ["quan-sat-chim", "theo-dau-dong-vat", "leave-no-trace"]
  },

  {
    id: "sk-leave-no-trace",
    slug: "leave-no-trace",
    title: "7. Leave No Trace – 7 Nguyên Tắc Đạo Đức",
    title_en: "The 7 Principles of Leave No Trace",
    category: "thien-nhien",
    subcategory: "Leave No Trace & Nhật ký",
    shortDescription: "Hiểu và thực hành 7 nguyên tắc giảm thiểu tối đa tác động tiêu cực của con người lên môi trường tự nhiên.",
    environment: "both",
    difficulty: "easy",
    tags: ["Leave No Trace", "Môi trường", "Đạo đức", "Bảo tồn"],
    media: { poster: "image/kynang/10-thu-trai-leave-no-trace.jpg", videoId: "" },
    purpose: "Bộ quy chuẩn đạo đức dã ngoại toàn cầu của Phong trào Hướng đạo, giúp giữ gìn vẻ đẹp hoang sơ của thiên nhiên cho các thế hệ mai sau.",
    equipment: ["Túi đựng rác tái sử dụng", "Sổ tay 7 nguyên tắc LNT"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Ghi nhớ câu thần chú: 'Không lấy đi gì ngoài những bức ảnh, không để lại gì ngoài những dấu chân'."
      },
      thieu: {
        target: "Thực hành trọn vẹn 7 nguyên tắc LNT trong suốt kỳ trại: từ chọn đất trại, xử lý chất thải đến bảo vệ thảm thực vật."
      },
      trang: {
        target: "Giáo dục và kiểm tra đánh giá tác động môi trường của các hoạt động dã ngoại quy mô lớn của liên đoàn."
      }
    },
    steps: [
      "<strong>1. Lên kế hoạch & Chuẩn bị trước:</strong> Tìm hiểu quy định, mang trang bị phù hợp, tránh lãng phí.",
      "<strong>2. Đi và cắm trại trên bề mặt bền vững:</strong> Đi trên đường mòn có sẵn, cắm trại trên nền đất phẳng không có cỏ non.",
      "<strong>3. Xử lý rác thải đúng cách:</strong> Mang tất cả những gì bạn mang đến trở về thành phố (Pack it in, pack it out).",
      "<strong>4. Giữ nguyên những gì bạn tìm thấy:</strong> Để lại hoa, đá, di tích lịch sử nguyên vẹn tại chỗ.",
      "<strong>5. Giảm thiểu tác động của lửa trại:</strong> Dùng bếp dã ngoại hoặc gom than tro trả lại nguyên trạng.",
      "<strong>6. Tôn trọng động vật hoang dã:</strong> Quan sát từ xa, không cho ăn, không đuổi bắt.",
      "<strong>7. Tôn trọng những người đi sau:</strong> Giữ trật tự, nhường đường trên lối mòn, tôn trọng không gian yên tĩnh của thiên nhiên."
    ],
    commonMistakes: [
      "Vứt vỏ kẹo, mẩu giấy nhỏ xuống rừng vì nghĩ rằng 'một mẩu nhỏ không sao'.",
      "Chặt cây tươi để làm gậy chống một lần rồi vứt bỏ."
    ],
    safety: "Tuân thủ LNT chính là cách tốt nhất để bảo vệ an toàn cho chính bản thân mình giữa thiên nhiên.",
    practice: "Thực hiện cam kết 7 nguyên tắc LNT trong một chuyến dã ngoại 1 ngày.",
    challenge: "Dẫn dắt phân đội hoàn thành kỳ trại 2 ngày với lượng rác thải xả ra môi trường bằng 0.",
    assessment: "Bạn đạt khi: Nêu và giải thích được 7 nguyên tắc LNT, áp dụng gương mẫu trong mọi chuyến đi.",
    relatedSkills: ["thu-trai-leave-no-trace", "nhan-biet-cay", "nhat-ky-thien-nhien"]
  },

  {
    id: "sk-nhat-ky-thien-nhien",
    slug: "nhat-ky-thien-nhien",
    title: "8. Nhật ký thiên nhiên (Nature Journaling)",
    title_en: "Nature Journaling & Field Sketching",
    category: "thien-nhien",
    subcategory: "Leave No Trace & Nhật ký",
    shortDescription: "Ghi lại bằng hình vẽ ký họa, mẫu ép lá, thời tiết và những điều kỳ diệu quan sát được trong chuyến đi.",
    environment: "both",
    difficulty: "medium",
    tags: ["Nhật ký", "Ký họa", "Quan sát", "Nghệ thuật"],
    media: { poster: "image/kynang/nhat-ky-thien-nhien.png", videoId: "" },
    purpose: "Phát triển năng lực biểu đạt cảm xúc, tư duy khoa học, khả năng ghi nhớ chi tiết và lưu giữ kỷ niệm tuổi thơ Hướng đạo.",
    equipment: ["Sổ tay bìa cứng giấy dày", "Bút chì, bút mực chống nước", "Hộp màu nước dã ngoại nhỏ", "Băng keo dán mẫu ép"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Vẽ lại một bông hoa hoặc một chú chim nhỏ em nhìn thấy trong buổi sinh hoạt và viết 2 câu cảm nghĩ."
      },
      thieu: {
        target: "Trình bày trang nhật ký thực địa khoa học: Ngày giờ, Địa điểm, Nhiệt độ/Thời tiết, Hình vẽ ký họa chú thích chi tiết và cảm xúc bản thân."
      },
      trang: {
        target: "Biên soạn kỷ yếu nhật ký hành trình kỳ trại của đoàn, tổ chức triển lãm sổ tay thiên nhiên cho các em nhỏ."
      }
    },
    steps: [
      "<strong>1. Ghi thông số đầu trang:</strong> Ngày, giờ, địa điểm tọa độ, điều kiện thời tiết (nắng/mưa, dạng mây, hướng gió).",
      "<strong>2. Ký họa thực địa (I Notice):</strong> Vẽ phác thảo nhanh một chiếc lá, bông hoa, tổ kiến hay vết chân thú vừa gặp. Không cần vẽ đẹp như họa sĩ, quan trọng là vẽ đúng chi tiết thực tế.",
      "<strong>3. Đặt câu hỏi (I Wonder):</strong> Ghi lại những thắc mắc tò mò (vd: 'Tại sao mặt dưới của chiếc lá này lại có lông mịn?').",
      "<strong>4. Liên tưởng (It Reminds Me Of):</strong> Ghi lại cảm xúc hoặc sự liên tưởng của bạn về thiên nhiên quanh mình."
    ],
    commonMistakes: [
      "Ngại ngùng không dám vẽ vì sợ vẽ không đẹp.",
      "Đợi về nhà mới vẽ lại khiến quên mất các chi tiết chân thực ngoài thực địa."
    ],
    safety: "Ngồi ở vị trí an toàn, râm mát khi vẽ; không ngồi giữa lối đi hoặc mép bờ dốc.",
    practice: "Hoàn thiện 2 trang nhật ký thiên nhiên trong chuyến dã ngoại cuối tuần.",
    challenge: "Lưu giữ một cuốn sổ nhật ký thiên nhiên ghi chép liên tục trong 4 tuần sinh hoạt.",
    assessment: "Bạn đạt khi: Tự tay hoàn thiện trang nhật ký có đầy đủ ngày giờ, hình vẽ ký họa và ghi chép quan sát.",
    relatedSkills: ["nhan-biet-cay", "quan-sat-chim", "quan-sat-may"]
  },

  // ==========================================
  // 07. TRUYỀN TIN & TRÒ CHƠI
  // ==========================================
  {
    id: "sk-morse-co-ban",
    slug: "morse-co-ban",
    title: "1. Morse cơ bản",
    title_en: "Morse Code Fundamentals",
    category: "truyen-tin-tro-choi",
    subcategory: "Morse & Semaphore",
    shortDescription: "Hiểu cấu tạo tín hiệu chấm (Tich / Dot) – gạch (Te / Dash) và phát/nhận giải mã các thông điệp đơn giản.",
    environment: "both",
    difficulty: "medium",
    tags: ["Morse", "Truyền tin", "Âm thanh", "Ánh sáng"],
    media: { poster: "image/kynang/ma-morse-co-ban.png", videoId: "" },
    purpose: "Phương thức liên lạc vô tuyến khẩn cấp toàn cầu qua âm thanh còi, ánh sáng đèn pin hoặc gõ nhịp khi mất sóng viễn thông.",
    equipment: ["Còi Morse", "Đèn pin phát tín hiệu", "Bảng mã Morse quốc tế", "Sổ ghi nhận tin"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhớ thuộc lòng tín hiệu cầu cứu khẩn cấp quốc tế S.O.S (• • •  — — —  • • •) và phát bằng còi/đèn."
      },
      thieu: {
        target: "Thuộc bảng mã chữ cái Morse theo các nhóm đối xứng (E-T, I-M, S-O, H-CH), phát và nhận thông điệp 15 từ tốc độ 10 ký tự/phút."
      },
      trang: {
        target: "Điều hành trạm phát Morse khoảng cách xa bằng đèn pha trong đêm tối cho Trò Chơi Lớn."
      }
    },
    steps: [
      "<strong>1. Quy tắc thời gian:</strong> 1 Tè (—) dài bằng 3 Tích (•). Khoảng cách giữa các ký tự bằng 3 Tích, giữa các từ bằng 7 Tích.",
      "<strong>2. Học theo nhóm đối xứng:</strong><br>• Nhóm Tích: E (•), I (••), S (•••), H (••••)<br>• Nhóm Tè: T (—), M (——), O (———)<br>• Nhóm đối lập: A (•—) ngược N (—•), W (•——) ngược G (——•)...",
      "<strong>3. Kỹ thuật nhận tin:</strong> Nghe đến đâu viết ký tự ra giấy đến đó, không dịch nhẩm trong đầu.",
      "<strong>4. Tín hiệu SOS:</strong> 3 ngắn - 3 dài - 3 ngắn (••• ——— •••) - không ngắt quãng giữa các chữ cái."
    ],
    commonMistakes: [
      "Thổi còi các tiếng Tè không đủ độ dài khiến người nghe nhầm thành tiếng Tích.",
      "Ghi chép chấm gạch ra giấy rồi mới dịch làm chậm tốc độ nhận tin."
    ],
    safety: "Không thổi còi Morse sát tai bạn bè gây tổn thương màng nhĩ.",
    practice: "Phát và nhận thành công bức điện tín Morse 10 từ cùng bạn trong đội.",
    challenge: "Giải mã đúng 100% bức điện mật mã Morse phát bằng đèn pin ban đêm.",
    assessment: "Bạn đạt khi: Phát và nhận đúng mã Morse tốc độ tối thiểu 10 ký tự/phút sai số dưới 2 lỗi.",
    relatedSkills: ["semaphore", "tin-hieu-coi", "mat-thu-thay-the"]
  },

  {
    id: "sk-semaphore",
    slug: "tham-du",
    title: "2. Semaphore",
    title_en: "Semaphore Flag Signaling",
    category: "truyen-tin-tro-choi",
    subcategory: "Morse & Semaphore",
    shortDescription: "Sử dụng vị trí góc độ của 2 lá cờ cầm tay để truyền đạt bảng chữ cái nhanh chóng qua khoảng cách xa.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Semaphore", "Cờ", "Truyền tin", "Thám du"],
    media: { poster: "image/kynang/danh-co-semaphore.png", videoId: "" },
    purpose: "Truyền tin thị giác cự ly xa qua thung lũng, hai bờ sông hoặc từ trên đỉnh đồi tháp canh dã ngoại.",
    equipment: ["2 lá cờ Semaphore vuông 40x40cm (chia 2 tam giác đỏ - vàng) có cán cầm 55cm"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Đứng đúng tư thế nghiêm cầm cờ và nhớ vị trí các chữ cái trong Vòng 1 (A, B, C, D, E, F, G)."
      },
      thieu: {
        target: "Thuộc trọn vẹn 7 vòng Semaphore (26 chữ cái), phát và nhận tin nhắn tốc độ 15-20 ký tự/phút."
      },
      trang: {
        target: "Tổ chức trạm truyền tin Semaphore vượt sông/đồi cho các phân đội trong kỳ trại liên đoàn."
      }
    },
    steps: [
      "<strong>1. Tư thế chuẩn bị:</strong> Đứng thẳng trang nghiêm, 2 tay cầm cờ bắt chéo trước đùi.",
      "<strong>2. Nguyên tắc 7 vòng quay:</strong> Cờ di chuyển theo 8 hướng chính của hình tròn (cách nhau góc 45°). Tay luôn giữ thẳng tắp, chuyển góc dứt khoát.",
      "• Vòng 1 (Tay trái cố định ở góc dưới, tay phải quay): A, B, C, D, E, F, G.<br>• Vòng 2: H, I, K, L, M.<br>• Vòng 3: N, O, P, Q, R, S, T...",
      "<strong>3. Nhận tin:</strong> Đọc theo vị trí cờ đối diện của người phát như soi gương."
    ],
    commonMistakes: [
      "Tay cầm cờ bị gập khuỷu tay làm sai lệch góc 45° khiến người nhận đọc nhầm chữ.",
      "Mặc áo cùng màu với cờ Semaphore hoặc đứng trước hậu cảnh bị rối mắt."
    ],
    safety: "Chọn vị trí đứng phát cờ cao ráo, phía sau là nền trời xanh hoặc vách núi đơn sắc để cờ nổi bật nhất.",
    practice: "Phát thông điệp Semaphore 15 từ cho bạn đứng cách xa 50m.",
    challenge: "Đạt tốc độ phát và nhận Semaphore 25 ký tự/phút không sai sót.",
    assessment: "Bạn đạt khi: Phát và nhận đúng 26 chữ cái Semaphore, chuyển cờ dứt khoát và chuẩn góc độ.",
    relatedSkills: ["morse-co-ban", "tin-hieu-coi", "tro-choi-lon"]
  },

  {
    id: "sk-tin-hieu-coi",
    slug: "tin-hieu-coi",
    title: "3. Tín hiệu còi",
    title_en: "Whistle Commands & Pack Signals",
    category: "truyen-tin-tro-choi",
    subcategory: "Tín hiệu còi & Dấu đường",
    shortDescription: "Hiểu và thống nhất các hiệu lệnh còi chỉ huy tập hợp đội hình, báo động nguy hiểm và cấp cứu.",
    environment: "both",
    difficulty: "easy",
    tags: ["Còi lệnh", "Kỷ luật", "Tập hợp", "Hiệu lệnh"],
    media: { poster: "image/kynang/tin-hieu-coi-lenh.png", videoId: "" },
    purpose: "Kênh ra lệnh nhanh nhất, to nhất của Huynh trưởng điều khiển đội hình cả trăm đoàn sinh giữa không gian rộng lớn.",
    equipment: ["Còi kim loại Fox 40 hoặc còi nhựa âm lượng cao", "Dây đeo còi quanh cổ"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nghe 1 tiếng còi dài &rarr; 'Đứng lại, im lặng, lắng nghe Huynh trưởng'; nghe hồi còi ngắn liên tục &rarr; 'Tập hợp nhanh'."
      },
      thieu: {
        target: "Thuộc các hiệu lệnh còi: Tập hợp hàng dọc (• —), Hàng ngang (• — •), Chữ U (•• —), Vòng tròn (• — —) và lệnh Cấp cứu (••• ——— •••)."
      },
      trang: {
        target: "Sử dụng còi lệnh dứt khoát, uy nghiêm điều hành nghi thức Chào cờ và diễu hành liên đoàn."
      }
    },
    steps: [
      "<strong>1. Lệnh chú ý (Attention):</strong> 1 tiếng còi Dài (—) &rarr; Mọi người lập tức dừng mọi việc, đứng nghiêm hướng về người thổi còi.",
      "<strong>2. Lệnh tập hợp khẩn:</strong> Một hồi còi ngắn dồn dập (••••••••) &rarr; Toàn bộ chạy nhanh về phía Huynh trưởng.",
      "<strong>3. Lệnh Đội trưởng:</strong> 3 tiếng ngắn - 1 tiếng dài (••• —) &rarr; Các bạn Đội trưởng lập tức có mặt tại lều chỉ huy.",
      "<strong>4. Lệnh Cấp cứu:</strong> 3 tiếng còi ngắn lặp đi lặp lại hoặc SOS (••• ——— •••)."
    ],
    commonMistakes: [
      "Thổi còi ngắt quãng không rõ ràng khiến đoàn sinh phân vân không hiểu lệnh.",
      "Đoàn sinh lạm dụng tự ý thổi còi đùa nghịch trong đất trại."
    ],
    safety: "Tuyệt đối không tự ý thổi còi trong giờ nghỉ ngơi hoặc thổi tín hiệu cấp cứu khi không có sự cố thật.",
    practice: "Nghe hiệu lệnh còi và vào đúng vị trí đội hình vòng tròn trong 15 giây.",
    challenge: "Điều khiển phân đội di chuyển và chuyển đổi 3 đội hình chỉ bằng hiệu lệnh còi.",
    assessment: "Bạn đạt khi: Phản xạ đúng 100% với các hiệu lệnh còi thông dụng của phong trào.",
    relatedSkills: ["morse-co-ban", "dau-duong", "sinh-hoat-trai"]
  },

  {
    id: "sk-dau-duong",
    slug: "dau-duong",
    title: "4. Dấu đường (Trail Signs)",
    title_en: "Scout Trail Signs & Ground Tracking",
    category: "truyen-tin-tro-choi",
    subcategory: "Tín hiệu còi & Dấu đường",
    shortDescription: "Đặt và đọc các ký hiệu chỉ đường bí mật bằng cành cây, sỏi đá, cỏ bện để chỉ dẫn người đi sau.",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Dấu đường", "Trail Signs", "Trinh sát", "Dã ngoại"],
    media: { poster: "image/kynang/bo-dau-duong-huong-dao.png", videoId: "" },
    purpose: "Để lại dấu vết chỉ đường bí mật cho phân đội đi sau bám theo mà không gây chú ý cho người lạ.",
    equipment: ["Vật liệu tự nhiên: cành cây, sỏi đá, cỏ, phấn vẽ"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết 6 dấu cơ bản: Đi lối này, Cấm đi lối này, Có nước uống, Nước độc, Nguy hiểm, Về đất trại."
      },
      thieu: {
        target: "Tự đặt dấu đường khéo léo bên tay phải lối đi (ở độ cao tầm mắt hoặc sát mép cỏ), xóa dấu sau khi cả đội đã qua."
      },
      trang: {
        target: "Thiết kế cung đường dấu vết dài 3km kết hợp mật thư và thử thách trinh sát cho Trò Chơi Lớn."
      }
    },
    steps: [
      "<strong>1. Dấu 'Đi lối này':</strong> Mũi tên xếp bằng 3 cành cây hoặc hòn đá nhọn đặt trên hòn đá to chỉ hướng đi.",
      "<strong>2. Dấu 'Cấm đi lối này / Nguy hiểm':</strong> Hai cành cây bắt chéo hình chữ X hoặc hòn đá đặt cạnh chữ X.",
      "<strong>3. Dấu 'Bện cỏ':</strong> Túm một cụm cỏ dài bện gập đầu ngả về hướng cần đi.",
      "<strong>4. Dấu 'Về đất trại' (Đã hoàn thành nhiệm vụ):</strong> Một vòng tròn đá khép kín có 1 hòn sỏi đặt chính giữa tâm.",
      "<strong>5. Dấu 'Mật thư giấu ở đây':</strong> Mũi tên chỉ vào gốc cây có 3 vạch ngang trên thân."
    ],
    commonMistakes: [
      "Đặt dấu đường giữa lối đi khiến người đi bộ đá văng mất dấu.",
      "Khắc vẽ dấu đường vĩnh viễn lên di tích lịch sử hoặc công trình công cộng."
    ],
    safety: "Dấu đường phải đặt ở nơi an toàn, không dẫn bạn vào mép vực sâu nguy hiểm.",
    practice: "Đặt một chuỗi 10 dấu đường dẫn lối cho phân đội bạn đi tìm.",
    challenge: "Bám theo tuyến đường dấu vết dài 1km và tìm ra điểm hẹn bí mật mà không bị mất dấu.",
    assessment: "Bạn đạt khi: Đọc và đặt chuẩn xác các dấu đường Hướng đạo cơ bản ngoài thực địa.",
    relatedSkills: ["theo-dau", "mat-thu-thay-the", "di-bo"]
  },

  {
    id: "sk-theo-dau",
    slug: "theo-dau",
    title: "5. Theo dấu (Tracking & Path Following)",
    title_en: "Trail Tracking & Path Finding",
    category: "truyen-tin-tro-choi",
    subcategory: "Tín hiệu còi & Dấu đường",
    shortDescription: "Quan sát dấu vết xáo trộn của môi trường và xác định tuyến đường của đội đi trước.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Theo dấu", "Trinh sát", "Quan sát", "Thám du"],
    media: { poster: "image/kynang/theo-dau-vet-duong-mon.png", videoId: "" },
    purpose: "Rèn luyện thị giác tinh tường, khả năng phán đoán logic và tinh thần trinh sát viên Hướng đạo.",
    equipment: ["Kính lúp", "Sổ tay trinh sát"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết tập trung quan sát mặt đất và mép đường, phát hiện dải ruy băng màu hoặc cành cây gãy chỉ đường."
      },
      thieu: {
        target: "Nhận biết các dấu vết vi mô: vết cỏ bị dẫm dẹp, đất mới bị cày xới, hạt sỏi bị lật mặt ướt lên trên, giọt nước rơi trên lá."
      },
      trang: {
        target: "Truy vết phân đội trinh sát đi trước cách 30 phút chỉ dựa vào dấu vết môi trường tự nhiên."
      }
    },
    steps: [
      "<strong>1. Quan sát tầm rộng & Tầm hẹp:</strong> Nhìn bao quát hướng đi chung của địa hình &rarr; nhìn chi tiết từng bước chân sát mặt đất.",
      "<strong>2. Chiều ánh sáng:</strong> Đi ngược chiều ánh sáng chếch giúp bóng đổ của các vết lồi lõm trên mặt đất hiện rõ hơn.",
      "<strong>3. Dấu hiệu thời gian (Age of track):</strong> Bụi đất trong vết chân còn ướt ẩm hay đã khô trắng? Vết cỏ gãy còn tươi hay đã úa vàng?",
      "<strong>4. Khi mất dấu:</strong> DỪNG LẠI NGAY tại dấu vết cuối cùng &rarr; đánh dấu &rarr; đi theo hình xoắn ốc mở rộng bán kính để tìm lại dấu vết tiếp theo."
    ],
    commonMistakes: [
      "Đi quá nhanh làm dẫm nát các dấu vết mỏng manh phía trước.",
      "Mất dấu nhưng vẫn cố đi mò dẫn đến lạc đường hoàn toàn."
    ],
    safety: "Luôn giữ liên lạc với đồng đội, không bao giờ tách lẻ 1 mình khi đi theo dấu trong rừng sâu.",
    practice: "Truy tìm dấu vết của người dẫn đường giấu đồ vật cách 300m.",
    challenge: "Theo dấu thành công qua đoạn đường đất cứng bị xáo trộn bởi nhiều người qua lại.",
    assessment: "Bạn đạt khi: Nhận diện và bám sát tuyến đường dấu vết liên tục mà không bị mất phương hướng.",
    relatedSkills: ["dau-duong", "theo-dau-dong-vat", "di-bo"]
  },

  {
    id: "sk-mat-thu-thay-the",
    slug: "mat-thu-thay-the",
    title: "6. Mật thư thay thế (Substitution Ciphers)",
    title_en: "Substitution & Caesar Ciphers",
    category: "truyen-tin-tro-choi",
    subcategory: "Mật thư & Mã hóa",
    shortDescription: "Làm quen với tư duy mã hóa và giải mã: Chuồng bò (Pigpen), Số thay chữ (A=1), Dời chữ Caesar và Quốc ngữ điện tín.",
    environment: "both",
    difficulty: "medium",
    tags: ["Mật thư", "Giải mã", "Mã hóa", "Tư duy logic"],
    media: { poster: "image/kynang/mat-thu-thay-the.png", videoId: "" },
    purpose: "Bảo mật thông tin chỉ dẫn trạm trong các trò chơi thám du, rèn luyện tư duy logic và khả năng phân tích mật mã.",
    equipment: ["Giấy bút giải mã", "Bảng chữ cái mã hóa"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Giải được dạng mật thư đơn giản: Số thay chữ (A=1, B=2... Z=26) và quy tắc gõ Telex (aa &rarr; â, oo &rarr; ô, s &rarr; dấu sắc)."
      },
      thieu: {
        target: "Thành thạo Mật thư Chuồng bò (Pigpen khung chữ thập), Mật thư dời bước Caesar (Khóa: OTT = 'Một bước tới', 'Hai bước lui')."
      },
      trang: {
        target: "Sáng tạo các dạng mật thư đa tầng khóa, mật thư hóa học tàng hình (dùng nước chanh hơ lửa) cho kỳ trại lớn."
      }
    },
    steps: [
      "<strong>1. Đọc kỹ Chìa khóa (Key):</strong> Chìa khóa gợi ý quy luật mã hóa (ví dụ: 'Khóa: Bò vào chuồng' &rarr; dùng mật mã Pigpen; 'Khóa: Em là số một' &rarr; A=1).",
      "<strong>2. Mật thư Chuồng Bò (Pigpen):</strong> Dùng 2 khung chữ thập (#) và 2 khung chữ X (X) có chấm và không chấm để biểu diễn 26 chữ cái.",
      "<strong>3. Mật thư Caesar:</strong> Nếu khóa là D=A (dời 3 bước lùi), chữ G trong mật thư sẽ giải mã thành chữ D.",
      "<strong>4. Đọc bản dịch:</strong> Ghép các chữ cái đã giải mã thành từ có nghĩa theo quy ước Quốc ngữ điện tín."
    ],
    commonMistakes: [
      "Bỏ qua câu thơ gợi ý chìa khóa mà cắm đầu vào dịch mò.",
      "Nhầm lẫn giữa các ô có chấm và không có chấm trong mật thư Chuồng bò."
    ],
    safety: "Khi chạy trạm giải mật thư, quan sát chướng ngại vật xung quanh, không vừa chạy vừa nhìn giấy.",
    practice: "Giải mã bức mật thư Chuồng bò 20 ký tự trong thời gian dưới 5 phút.",
    challenge: "Tự tạo một bức mật thư dời chữ Caesar với câu đố chìa khóa thông minh cho đội bạn.",
    assessment: "Bạn đạt khi: Giải đúng ít nhất 3 dạng mật thư thay thế cơ bản trong thời gian quy định.",
    relatedSkills: ["mat-thu-toa-do", "morse-co-ban", "tro-choi-lon"]
  },

  {
    id: "sk-mat-thu-toa-do",
    slug: "mat-thu-toa-do",
    title: "7. Mật thư tọa độ (Coordinate Grid Ciphers)",
    title_en: "Grid & Coordinate Ciphers",
    category: "truyen-tin-tro-choi",
    subcategory: "Mật thư & Mã hóa",
    shortDescription: "Sử dụng bảng ma trận chữ cái và tọa độ Hàng - Cột (Polybius square, tọa độ số/chữ) để mã hóa thông điệp.",
    environment: "both",
    difficulty: "medium",
    tags: ["Mật thư", "Tọa độ", "Toán học", "Trò chơi lớn"],
    media: { poster: "image/kynang/mat-thu-toa-do.png", videoId: "" },
    purpose: "Nâng cao năng lực giải mật mã logic đa chiều, ứng dụng tìm tọa độ kho báu trên bản đồ địa hình.",
    equipment: ["Bảng lưới tọa độ 5x5 hoặc 6x6", "Bút chì, thước kẻ"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Hiểu quy tắc đọc tọa độ: 'Ngang trước, Dọc sau' (Hoành độ trước, Tung độ sau) trên lưới ô vuông."
      },
      thieu: {
        target: "Giải thành thạo bảng mã Polybius 5x5 (ghép I/J chung một ô) và mật thư tọa độ chữ cái (vd: KHUNG = 12345)."
      },
      trang: {
        target: "Thiết kế ma trận mã hóa kết hợp tọa độ bản đồ thực tế để dẫn phân đội đến đúng mục tiêu bí mật."
      }
    },
    steps: [
      "<strong>1. Lập ma trận 5x5:</strong> Xếp 25 chữ cái vào lưới 5 hàng x 5 cột (chữ I và J xếp chung một ô).",
      "<strong>2. Đánh số tọa độ:</strong> Đánh số 1 đến 5 cho các Hàng (ngang) và Cột (dọc).",
      "<strong>3. Mã hóa:</strong> Mỗi chữ cái được biểu diễn bằng 2 chữ số (Số Hàng + Số Cột). Ví dụ: Chữ A ở hàng 1 cột 1 &rarr; Mã là 11; Chữ B ở hàng 1 cột 2 &rarr; Mã là 12.",
      "<strong>4. Giải mã:</strong> Tra số đầu tiên theo Hàng ngang, số thứ hai theo Cột dọc, giao điểm chính là chữ cái cần tìm."
    ],
    commonMistakes: [
      "Đọc nhầm Cột trước Hàng sau làm đảo lộn toàn bộ nội dung bức mật thư.",
      "Quên quy tắc ghép chung I và J làm lệch bảng chữ cái."
    ],
    safety: "Giữ gìn bản mật mã cẩn thận, không làm rách nát khi di chuyển qua mưa gió.",
    practice: "Giải mã thông điệp tọa độ 15 ký tự trong vòng 4 phút.",
    challenge: "Giải bức mật thư tọa độ ma trận chữ lồng từ khóa (Keyed matrix) của Ban Huynh trưởng.",
    assessment: "Bạn đạt khi: Đọc và giải chuẩn xác bảng mật thư tọa độ không sai sót.",
    relatedSkills: ["mat-thu-thay-the", "doc-ban-do", "tro-choi-lon"]
  },

  {
    id: "sk-tro-choi-lon",
    slug: "tro-choi-lon",
    title: "8. Trò chơi lớn (The Wide Game)",
    title_en: "The Scout Wide Game & Team Expedition",
    category: "truyen-tin-tro-choi",
    subcategory: "Trò chơi lớn",
    shortDescription: "Tổng hòa kỹ năng đỉnh cao: Bản đồ + Dấu đường + Mật thư + Morse + Teamwork + Scoutcraft vượt qua các trạm thử thách.",
    environment: "outdoor",
    difficulty: "hard",
    tags: ["Trò chơi lớn", "Wide Game", "Tổng hợp", "Teamwork"],
    media: { poster: "image/kynang/to-chuc-tro-choi-lon.png", videoId: "" },
    purpose: "Hoạt động cao trào hấp dẫn nhất của kỳ trại Hướng đạo, nơi các phân đội thể hiện tinh thần đoàn kết, trí tuệ và bản lĩnh sinh tồn.",
    equipment: ["Hành trang thám du cá nhân", "Bộ dụng cụ đội (la bàn, bản đồ, dây thừng, sơ cứu)", "Sổ lộ trình trạm"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Tham gia hào hứng cùng bầy, tuân thủ kỷ luật hàng quân và hoàn thành các trò chơi trạm của Sói già Akela."
      },
      thieu: {
        target: "Đóng vai trò trụ cột trong phân đội: giải mật thư trạm, dựng lều vượt chướng ngại vật, truyền tin Semaphore và bảo vệ an toàn cho cả đội."
      },
      trang: {
        target: "Thiết kế cốt truyện Trò Chơi Lớn (theo chủ đề lịch sử/khám phá), dựng các trạm thử thách và làm Trưởng trạm điều phối công bằng."
      }
    },
    steps: [
      "<strong>1. Nhận mật lệnh xuất phát:</strong> Phân đội giải mật thư đầu tiên để tìm tọa độ Trạm 1.",
      "<strong>2. Vượt địa hình theo dấu:</strong> Dùng la bàn và theo dấu đường di chuyển an toàn đến trạm.",
      "<strong>3. Thử thách tại trạm:</strong> Thực hiện bài thi kỹ năng thực hành (băng bó cứu thương, nhóm lửa đun nước, ráp cầu tháp, phát nhận Morse).",
      "<strong>4. Về đích & Tổng kết:</strong> Về đất trại đúng giờ quy định, nộp nhật ký hành trình và tham gia vòng tròn tổng kết vui tươi."
    ],
    commonMistakes: [
      "Mải mê thi đua tranh thắng thua mà bỏ rơi thành viên yếu sức phía sau.",
      "Vi phạm kỷ luật đất trại hoặc làm mất trang bị cá nhân trên đường chạy trạm."
    ],
    safety: "Luôn đi cùng nhau theo phân đội, không bao giờ để bất kỳ bạn nào bị tách lẻ một mình.",
    practice: "Tham gia trọn vẹn một cuộc Trò Chơi Lớn 4 tiếng cự ly 5km cùng liên đoàn.",
    challenge: "Thiết kế một kịch bản trò chơi trạm ngắn 30 phút cho các em ngành Ấu/ngành Thiếu.",
    assessment: "Bạn đạt khi: Hoàn thành tất cả các trạm thử thách với tinh thần đồng đội cao thượng và kỷ luật.",
    relatedSkills: ["mat-thu-thay-the", "semaphore", "morse-co-ban", "di-bo"]
  },

  // ==========================================
  // 08. KỸ NĂNG SỐNG
  // ==========================================
  {
    id: "sk-tu-chuan-bi-hanh-trang",
    slug: "tu-chuan-bi-hanh-trang",
    title: "1. Tự chuẩn bị hành trang",
    title_en: "Personal Packing & Self-Reliance Checklist",
    category: "ky-nang-song",
    subcategory: "Tự lập & Quản lý",
    shortDescription: "Tạo checklist, tự xếp đồ và tự chịu trách nhiệm hoàn toàn về tư trang cá nhân trước mọi chuyến đi.",
    environment: "both",
    difficulty: "easy",
    tags: ["Tự lập", "Checklist", "Trách nhiệm", "Kỹ năng sống"],
    media: { poster: "image/kynang/tu-chuan-bi-hanh-trang.png", videoId: "" },
    purpose: "Rèn luyện tính tự lập, không ỷ lại vào bố mẹ, hình thành thói quen chu đáo và chuẩn bị sẵn sàng cho mọi hoàn cảnh.",
    equipment: ["Bảng checklist đồ dùng cá nhân", "Ba lô cá nhân"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Tự chuẩn bị đồ đi sinh hoạt Chủ nhật (đồng phục, sổ bút, bình nước, mũ) mà không cần bố mẹ nhắc nhở."
      },
      thieu: {
        target: "Tự lập danh sách và đóng gói đầy đủ hành trang cho kỳ trại 3 ngày (quần áo, đồ vệ sinh, đèn pin, áo mưa, túi ngủ, đồ sơ cứu)."
      },
      trang: {
        target: "Soạn thảo cẩm nang hành trang mẫu cho toàn liên đoàn và kiểm tra trang bị của các em nhỏ trước giờ lên xe."
      }
    },
    steps: [
      "<strong>1. Lập Checklist:</strong> Viết ra giấy danh sách các đồ dùng cần thiết theo từng nhóm (Trang phục & Giày &rarr; Ăn uống & Ngủ nghỉ &rarr; Vệ sinh cá nhân &rarr; Dụng cụ Hướng đạo).",
      "<strong>2. Kiểm tra tình trạng:</strong> Thử pin đèn pin, kiểm tra áo mưa có bị rách, giày có vừa chân.",
      "<strong>3. Đóng gói & Đánh dấu:</strong> Tự tay gấp và xếp từng món vào ba lô, tích dấu 'V' vào checklist.",
      "<strong>4. Tự chịu trách nhiệm:</strong> Tự mang vác ba lô của mình trong suốt chuyến đi, tự quản lý đồ đạc không làm thất lạc."
    ],
    commonMistakes: [
      "Để bố mẹ xếp hộ đồ vào ba lô khiến khi đi trại không biết đồ của mình để ở ngăn nào.",
      "Mang theo đồ chơi điện tử đắt tiền hoặc đồ cồng kềnh không cần thiết."
    ],
    safety: "Ghi tên và số điện thoại của liên đoàn/gia đình vào thẻ thông tin gắn trên ba lô.",
    practice: "Tự chuẩn bị đầy đủ 100% đồ dùng theo checklist cho kỳ trại sắp tới.",
    challenge: "Không làm mất hoặc thất lạc bất kỳ một món đồ cá nhân nào trong suốt 3 ngày trại.",
    assessment: "Bạn đạt khi: Tự lập checklist, tự chuẩn bị hoàn chỉnh hành trang và tự chịu trách nhiệm về đồ dùng của mình.",
    relatedSkills: ["xep-ba-lo", "quan-ly-thoi-gian", "sinh-hoat-trai"]
  },

  {
    id: "sk-quan-ly-thoi-gian",
    slug: "quan-ly-thoi-gian",
    title: "2. Quản lý thời gian",
    title_en: "Time Management & Punctuality",
    category: "ky-nang-song",
    subcategory: "Tự lập & Quản lý",
    shortDescription: "Biết chia thời gian chuẩn bị, di chuyển, hoạt động, ăn uống và nghỉ ngơi khoa học, đúng giờ.",
    environment: "both",
    difficulty: "easy",
    tags: ["Thời gian", "Đúng giờ", "Kỷ luật", "Kế hoạch"],
    media: { poster: "image/kynang/quan-ly-thoi-gian-trai.png", videoId: "" },
    purpose: "Xây dựng phẩm chất người Hướng đạo sinh luôn đúng giờ, tôn trọng thời gian của người khác và làm việc hiệu quả.",
    equipment: ["Đồng hồ đeo tay", "Thời gian biểu hoạt động"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Đến sân sinh hoạt đúng 9h00 sáng Chủ nhật hàng tuần, không để cả bầy phải chờ đợi."
      },
      thieu: {
        target: "Tự phân bổ thời gian hợp lý: 30 phút nấu cơm, 45 phút ăn và rửa bát, 15 phút nghỉ ngơi trước khi bước vào hoạt động tiếp theo."
      },
      trang: {
        target: "Điều hành chương trình kỳ trại liên đoàn bám sát từng khung giờ, xử lý linh hoạt độ trễ thời gian."
      }
    },
    steps: [
      "<strong>1. Quy tắc Đúng giờ Hướng đạo:</strong> 'Đến sớm 5 phút là đúng giờ; đến đúng giờ là muộn; đến muộn là không thể chấp nhận'.",
      "<strong>2. Lập thời gian biểu:</strong> Chia công việc lớn thành các khối thời gian rõ ràng (Time-blocking).",
      "<strong>3. Dự phòng thời gian:</strong> Luôn cộng thêm 10-15 phút dự phòng cho việc di chuyển hoặc sự cố phát sinh.",
      "<strong>4. Tập trung hoàn thành:</strong> Làm việc nào dứt điểm việc đó, không vừa làm vừa chơi làm kéo dài thời gian của cả đội."
    ],
    commonMistakes: [
      "Dây dưa chậm chạp lúc thức dậy buổi sáng làm trễ giờ xuất phát của cả đoàn.",
      "Không đeo đồng hồ khi đi thám du dã ngoại."
    ],
    safety: "Tuân thủ nghiêm ngặt giờ giới nghiêm ban đêm để đảm bảo ngủ đủ giấc phục hồi sức khỏe.",
    practice: "Thực hiện đúng giờ 100% trong tất cả các buổi sinh hoạt của tháng.",
    challenge: "Lên kế hoạch thời gian và điều hành một buổi sinh hoạt phân đội 90 phút trọn vẹn đúng từng phút.",
    assessment: "Bạn đạt khi: Luôn có mặt đúng giờ và biết phân bổ thời gian hoạt động khoa học.",
    relatedSkills: ["tu-chuan-bi-hanh-trang", "lam-viec-theo-doi", "lap-hanh-trinh"]
  },

  {
    id: "sk-lam-viec-theo-doi",
    slug: "lam-viec-theo-doi",
    title: "3. Làm việc theo Đội (Patrol System)",
    title_en: "The Patrol System & Teamwork",
    category: "ky-nang-song",
    subcategory: "Làm việc nhóm & Đội",
    shortDescription: "Hiểu vai trò cá nhân trong phân đội, lắng nghe, tôn trọng sự khác biệt và hỗ trợ thành viên khác.",
    environment: "both",
    difficulty: "medium",
    tags: ["Hàng đội", "Teamwork", "Đoàn kết", "Patrol System"],
    media: { poster: "image/kynang/hop-doi-toa-dam.png", videoId: "" },
    purpose: "Trọng tâm của phương pháp giáo dục Hướng đạo: một nhóm nhỏ 6-8 em cùng tự quản, cùng học tập, cùng trưởng thành bên nhau.",
    equipment: ["Cờ hiệu phân đội", "Sổ nhật ký phân đội"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Hòa đồng với các bạn trong đàn (Đàn Nâu, Đàn Xám...), biết chia sẻ đồ chơi và đồ ăn cùng bạn."
      },
      thieu: {
        target: "Hiểu rõ vai trò của mình trong đội (Đội trưởng, Đội phó, Thủ kho, Thủ quỹ, Y tá, Phóng viên) và hoàn thành tốt nhiệm vụ được giao."
      },
      trang: {
        target: "Xây dựng tinh thần đồng đội keo sơn, lắng nghe giải quyết các mâu thuẫn nội bộ trong phân đội một cách êm đẹp và công bằng."
      }
    },
    steps: [
      "<strong>1. Tôn trọng phân công:</strong> Mỗi người một việc, không ai đứng nhìn khi đồng đội đang làm việc.",
      "<strong>2. Lắng nghe tích cực:</strong> Trong buổi họp Hội Đồng Đội, mọi thành viên đều có quyền phát biểu ý kiến bình đẳng.",
      "<strong>3. Hỗ trợ người yếu thế:</strong> Giúp đỡ bạn đi chậm nhất, cùng chia sẻ gánh nặng ba lô khi bạn mệt mỏi.",
      "<strong>4. Danh dự phân đội:</strong> Hành động vì danh dự và màu cờ sắc áo của toàn đội, đặt lợi ích tập thể lên trên cá nhân."
    ],
    commonMistakes: [
      "Tranh cãi đùn đẩy việc rửa bát, dọn lều cho nhau.",
      "Cười chê khi bạn trong đội làm sai hoặc chưa thành thạo kỹ năng."
    ],
    safety: "Tinh thần đồng đội là lá chắn an toàn lớn nhất: không bao giờ bỏ rơi một thành viên lại phía sau.",
    practice: "Phối hợp cùng phân đội hoàn thành một công trình trại hoặc bữa ăn chung.",
    challenge: "Dẫn dắt phân đội vượt qua thử thách khó khăn mà 100% thành viên đều vui vẻ đoàn kết.",
    assessment: "Bạn đạt khi: Thể hiện tinh thần đồng đội gương mẫu, tích cực đóng góp và hỗ trợ bạn bè.",
    relatedSkills: ["phan-cong-nhiem-vu", "sinh-hoat-trai", "tro-choi-lon"]
  },

  {
    id: "sk-phan-cong-nhiem-vu",
    slug: "phan-cong-nhiem-vu",
    title: "4. Phân công nhiệm vụ",
    title_en: "Task Delegation & Leadership",
    category: "ky-nang-song",
    subcategory: "Làm việc nhóm & Đội",
    shortDescription: "Biết chia một công việc lớn thành những nhiệm vụ nhỏ vừa sức và giao đúng người đúng việc.",
    environment: "both",
    difficulty: "medium",
    tags: ["Phân công", "Lãnh đạo", "Tổ chức", "Đội trưởng"],
    media: { poster: "image/kynang/hop-doi-toa-dam.png", videoId: "" },
    purpose: "Giúp công việc hoàn thành nhanh gấp nhiều lần, phát huy thế mạnh của từng cá nhân và rèn luyện kỹ năng lãnh đạo.",
    equipment: ["Bảng phân công nhiệm vụ (Duty Roster)"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận việc được giao và hoàn thành đúng hạn mà không bỏ dở giữa chừng."
      },
      thieu: {
        target: "Đội trưởng/Đội phó biết lập bảng phân công trực nhật: 2 bạn lấy củi nhóm lửa, 2 bạn nấu cơm, 2 bạn dựng lều, luân phiên đổi ca công bằng."
      },
      trang: {
        target: "Phân bổ nhân sự cho các ban chuyên môn (Ban Hậu cần, Ban Y tế, Ban Chương trình, Ban Kỹ thuật) của trại liên đoàn."
      }
    },
    steps: [
      "<strong>1. Liệt kê công việc:</strong> Xác định rõ cần làm những việc gì (vd: dựng lều, nấu ăn, lấy nước, đào rãnh).",
      "<strong>2. Hiểu rõ thế mạnh thành viên:</strong> Giao việc phù hợp với sức khỏe, sở trường và kỹ năng của từng bạn.",
      "<strong>3. Mô tả rõ kết quả mong đợi:</strong> Nói rõ việc cần làm là gì, thời gian xong khi nào, tiêu chuẩn đạt yêu cầu ra sao.",
      "<strong>4. Kiểm tra & Động viên:</strong> Theo dõi tiến độ, hỗ trợ khi bạn gặp khó khăn và khen ngợi khi hoàn thành tốt."
    ],
    commonMistakes: [
      "Đội trưởng ôm hết mọi việc vào mình hoặc chỉ đứng chỉ tay năm ngón mà không làm gì.",
      "Phân công không công bằng khiến một số bạn phải làm việc quá nhiều."
    ],
    safety: "Không giao các công việc nguy hiểm (chặt cây to, đun nước sôi) cho các em nhỏ chưa đủ kỹ năng.",
    practice: "Lập bảng phân công nhiệm vụ chi tiết cho phân đội trong 1 ngày cắm trại.",
    challenge: "Điều phối phân đội hoàn thành việc hạ trại và nấu ăn trong vòng 45 phút.",
    assessment: "Bạn đạt khi: Phân chia công việc rõ ràng, công bằng và phát huy được sức mạnh toàn đội.",
    relatedSkills: ["lam-viec-theo-doi", "quan-ly-thoi-gian", "phuong-phap-edge"]
  },

  {
    id: "sk-quan-ly-tien",
    slug: "quan-ly-tien",
    title: "5. Quản lý tiền & Ngân sách",
    title_en: "Budgeting & Financial Responsibility",
    category: "ky-nang-song",
    subcategory: "Tự lập & Quản lý",
    shortDescription: "Lập ngân sách đơn giản, thu chi minh bạch, tiết kiệm và quản lý chi phí cho chuyến đi hoặc hoạt động Đội.",
    environment: "both",
    difficulty: "medium",
    tags: ["Tài chính", "Ngân sách", "Tiết kiệm", "Minh bạch"],
    media: { poster: "image/kynang/quan-ly-ngan-sach-doi.png", videoId: "" },
    purpose: "Rèn luyện đức tính tiết kiệm (Điều luật thứ 9: 'Người Hướng đạo cần kiệm'), trung thực và biết quý trọng giá trị sức lao động.",
    equipment: ["Sổ thu chi phân đội", "Túi đựng tiền quỹ an toàn"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết giữ gìn cẩn thận tiền tiêu vặt cá nhân bố mẹ cho, không tiêu xài lãng phí vào quà vặt không lành mạnh."
      },
      thieu: {
        target: "Đảm nhận vai trò Thủ quỹ phân đội: lập bảng dự trù kinh phí mua đồ ăn, ghi chép sổ thu chi rõ ràng từng khoản và lưu giữ hóa đơn."
      },
      trang: {
        target: "Lập dự toán tài chính toàn diện cho kỳ trại liên đoàn, thực hiện gây quỹ (Fundraising) qua các dự án bán thủ công trại."
      }
    },
    steps: [
      "<strong>1. Dự toán thu:</strong> Xác định nguồn tiền (đóng góp của thành viên, quỹ đội hiện có).",
      "<strong>2. Dự toán chi:</strong> Liệt kê các khoản bắt buộc (tiền xe di chuyển, thực phẩm, vé vào cổng bãi trại, vật tư sơ cứu) và khoản dự phòng 10%.",
      "<strong>3. Chi tiêu tiết kiệm:</strong> Khảo sát giá chợ, mua đồ theo đúng danh sách đã duyệt, không mua phát sinh tùy tiện.",
      "<strong>4. Quyết toán công khai:</strong> Tổng kết hóa đơn chi tiêu và thông báo minh bạch cho toàn đội ngay sau chuyến đi."
    ],
    commonMistakes: [
      "Chi tiêu không ghi chép dẫn đến thất thoát, thâm hụt quỹ đội.",
      "Không có khoản dự phòng phát sinh khi có sự cố."
    ],
    safety: "Tiền quỹ đội phải được cất giữ ở ngăn an toàn có khóa kéo trong ba lô của Thủ quỹ.",
    practice: "Lập bảng thu chi thực tế cho một buổi dã ngoại phân đội với ngân sách 300.000đ.",
    challenge: "Tổ chức một hoạt động gây quỹ nhỏ (bán đồ tái chế hoặc làm bánh) để bổ sung vào quỹ phân đội.",
    assessment: "Bạn đạt khi: Lập được bảng dự trù ngân sách hợp lý, thu chi minh bạch và chính xác từng đồng.",
    relatedSkills: ["lap-thuc-don-trai", "tu-chuan-bi-hanh-trang", "lam-viec-theo-doi"]
  },

  {
    id: "sk-an-toan-so",
    slug: "an-toan-so",
    title: "6. An toàn trên Internet",
    title_en: "Cyber Safety & Digital Wellbeing",
    category: "ky-nang-song",
    subcategory: "An toàn số & Ứng phó",
    shortDescription: "Bảo vệ thông tin cá nhân, mật khẩu mạnh 2 lớp, nhận biết hành vi đáng ngờ và ứng xử văn minh trên mạng xã hội.",
    environment: "indoor",
    difficulty: "easy",
    tags: ["An toàn số", "Internet", "Bảo mật", "Công dân số"],
    media: { poster: "image/kynang/an-toan-khong-gian-mang.png", videoId: "" },
    purpose: "Giúp đoàn sinh thế hệ số tự tin làm chủ công nghệ, không bị kẻ xấu lừa gạt, bắt nạt trực tuyến và sống lành mạnh.",
    equipment: ["Điện thoại / máy tính cá nhân", "Sổ tay bảo mật số"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Không chia sẻ ảnh cá nhân, địa chỉ nhà, số điện thoại cho người lạ trên mạng; hỏi ý kiến bố mẹ trước khi tải game."
      },
      thieu: {
        target: "Thiết lập mật khẩu mạnh (>12 ký tự), bật xác thực 2 bước (2FA), nhận diện link lừa đảo (Phishing) và không lan truyền tin giả."
      },
      trang: {
        target: "Quản trị truyền thông fanpage liên đoàn an toàn, hướng dẫn đàn em cách ứng phó với bạo lực mạng (Cyberbullying)."
      }
    },
    steps: [
      "<strong>1. Quy tắc 4 KHÔNG:</strong> Không bấm link lạ, Không chia sẻ mã OTP, Không kết bạn với nick ảo lạ mặt, Không gửi thông tin nhạy cảm.",
      "<strong>2. Mật khẩu chuẩn an toàn:</strong> Sử dụng cụm mật khẩu dài kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt (vd: LongBienScouts@2026).",
      "<strong>3. Bảo vệ quyền riêng tư:</strong> Tắt định vị thời gian thực khi đăng ảnh, đặt chế độ bài viết bạn bè thay vì công khai.",
      "<strong>4. Văn hóa Hướng đạo trên mạng:</strong> Tuân thủ Điều luật thứ 5: 'Lịch sự và hào phóng' - không bình luận xúc phạm hay công kích người khác."
    ],
    commonMistakes: [
      "Dùng một mật khẩu đơn giản (ngày sinh/số điện thoại) cho tất cả tài khoản.",
      "Tin vào thông báo trúng thưởng yêu cầu nạp thẻ cào."
    ],
    safety: "Khi bị đe dọa hoặc quấy rối trên mạng: Chụp màn hình làm bằng chứng &rarr; Chặn tài khoản &rarr; Báo ngay cho bố mẹ hoặc Huynh trưởng.",
    practice: "Kiểm tra và kích hoạt bảo mật 2 lớp cho tài khoản email và Zalo của mình.",
    challenge: "Thiết kế cẩm nang đồ họa 5 quy tắc an toàn mạng chia sẻ cho các bạn trong lớp.",
    assessment: "Bạn đạt khi: Thiết lập bảo mật chuẩn cho tài khoản cá nhân và vượt qua bài trắc nghiệm an toàn mạng.",
    relatedSkills: ["tu-chuan-bi-hanh-trang", "goi-tro-giup", "phuong-phap-edge"]
  },

  {
    id: "sk-xu-ly-khi-bi-lac",
    slug: "xu-ly-khi-bi-lac",
    title: "7. Xử lý khi bị lạc (S.T.O.P Protocol)",
    title_en: "Lost in the Woods - S.T.O.P Survival Protocol",
    category: "ky-nang-song",
    subcategory: "An toàn số & Ứng phó",
    shortDescription: "Phác đồ sinh tồn S.T.O.P: Dừng lại (Stop) &rarr; Suy nghĩ (Think) &rarr; Quan sát (Observe) &rarr; Lập kế hoạch (Plan).",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Bị lạc", "STOP", "Sinh tồn", "An toàn"],
    media: { poster: "image/kynang/xu-ly-khi-bi-lac-stop.png", videoId: "" },
    purpose: "Giúp người bị lạc giữ vững tâm lý bình tĩnh, không hoảng loạn đi lung tung làm lạc sâu hơn và giúp đội tìm kiếm cứu hộ nhanh nhất.",
    equipment: ["Còi cứu sinh", "Áo khoác ấm", "Bình nước cá nhân", "Đèn pin"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Quy tắc Ôm Cây (Hug a Tree): Khi nhận ra bị lạc &rarr; Đứng yên tại chỗ ôm gốc cây to &rarr; Thổi 3 tiếng còi ngắn liên tục để gọi cứu hộ."
      },
      thieu: {
        target: "Thành thạo 4 bước S.T.O.P: Dừng lại bình tĩnh &rarr; Đánh giá đồ dùng hiện có &rarr; Tìm nơi trú ẩn an toàn khô ráo gần đó &rarr; Phát tín hiệu cấp cứu (âm thanh, ánh sáng, khói)."
      },
      trang: {
        target: "Lập phương án tổ chức đội tìm kiếm cứu hộ (Search and Rescue Grid) khi có đoàn sinh bị mất dấu trong rừng."
      }
    },
    steps: [
      "<strong>S - STOP (Dừng lại ngay):</strong> Dừng chân ngay tức khắc khi nhận ra mình không còn thấy dấu đường. Ngồi xuống uống một ngụm nước nhỏ để lấy lại bình tĩnh.",
      "<strong>T - THINK (Suy nghĩ):</strong> Nhớ lại lần cuối cùng mình nhìn thấy bạn bè/vật chuẩn quen thuộc là bao lâu trước? Mình đã đi về hướng nào?",
      "<strong>O - OBSERVE (Quan sát):</strong> Quan sát địa hình xung quanh: có chỗ nào khô ráo tránh mưa gió không? Nghe ngóng xem có tiếng còi gọi của đội hay không?",
      "<strong>P - PLAN (Lập kế hoạch):</strong> Đứng yên tại chỗ là phương án an toàn nhất! Mặc áo ấm, tìm chỗ trú, thổi 3 tiếng còi ngắn định kỳ sau mỗi 5 phút (Tín hiệu khẩn cấp quốc tế)."
    ],
    commonMistakes: [
      "Hoảng loạn cắm đầu chạy thục mạng tìm lối ra khiến kiệt sức và rơi vào vùng nguy hiểm.",
      "Đi men theo dòng suối lớn trong rừng rậm vào ban đêm dẫn tới vách thác đứng."
    ],
    safety: "Tín hiệu cứu nạn: 3 tiếng còi ngắn, 3 đốm lửa/khói hình tam giác, hoặc 3 lần nháy đèn pin liên tiếp.",
    practice: "Thực hành phản xạ dừng lại và thổi còi phát tín hiệu cứu hộ khi rơi vào tình huống giả định.",
    challenge: "Trải nghiệm thử thách ngồi yên tại chỗ trú ẩn an toàn trong 20 phút mà không hoảng sợ.",
    assessment: "Bạn đạt khi: Nêu và thực hiện chuẩn xác 4 bước S.T.O.P trong tình huống bị lạc.",
    relatedSkills: ["tin-hieu-coi", "di-bo", "goi-tro-giup"]
  },

  {
    id: "sk-giup-ich-cong-dong",
    slug: "giup-ich-cong-dong",
    title: "8. Giúp ích cộng đồng (Good Turns & Service)",
    title_en: "Community Service & Daily Good Turns",
    category: "ky-nang-song",
    subcategory: "Phục vụ cộng đồng",
    shortDescription: "Nhận diện một nhu cầu thực tế và cùng phân đội thực hiện một hoạt động giúp ích xã hội theo châm ngôn 'Mỗi ngày làm một việc thiện'.",
    environment: "both",
    difficulty: "easy",
    tags: ["Việc thiện", "Giúp ích", "Cộng đồng", "Trách nhiệm"],
    media: { poster: "image/kynang/moi-ngay-mot-viec-tot.png", videoId: "" },
    purpose: "Hình thành tinh thần công dân tích cực, lòng nhân ái, sự sẻ chia và thực hiện trọn vẹn Lời Hứa Hướng đạo: 'Giúp ích mọi người bất cứ lúc nào'.",
    equipment: ["Dụng cụ lao động tình nguyện", "Kế hoạch hoạt động thiện nguyện"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Thực hiện 'Mỗi ngày một việc thiện nhỏ' (nhặt rác giúp bà cụ, dọn bàn ăn giúp mẹ, nhường ghế xe bus)."
      },
      thieu: {
        target: "Cùng phân đội tổ chức một dự án dọn rác bảo vệ môi trường Vườn hoa Bắc Biên hoặc quyên góp sách vở cho trẻ em nghèo vùng cao."
      },
      trang: {
        target: "Khởi xướng và điều hành chiến dịch thiện nguyện lớn liên đoàn (Hiến máu, cứu trợ lũ lụt, xây dựng tủ sách vùng cao)."
      }
    },
    steps: [
      "<strong>1. Khảo sát nhu cầu:</strong> Quan sát xung quanh xem cộng đồng khu phố đang cần hỗ trợ điều gì (khu vui chơi bị bẩn rác, người già neo đơn cần giúp đỡ).",
      "<strong>2. Lập kế hoạch hành động:</strong> Bàn bạc cùng phân đội mục tiêu cụ thể, thời gian và dụng cụ cần chuẩn bị.",
      "<strong>3. Thực hiện với sự tận tâm:</strong> Lao động nhiệt tình, vui vẻ, không đòi hỏi khen thưởng hay trả công.",
      "<strong>4. Đánh giá & Rút kinh nghiệm:</strong> Chia sẻ cảm xúc sau chuyến đi và nuôi dưỡng thói quen làm việc tốt mỗi ngày."
    ],
    commonMistakes: [
      "Làm việc thiện hình thức để chụp ảnh khoe khoang thay vì xuất phát từ tấm lòng chân thành.",
      "Bỏ quên những việc giúp đỡ nhỏ bé ngay trong chính gia đình mình."
    ],
    safety: "Luôn đảm bảo an toàn lao động (đeo găng tay khi dọn rác, có người lớn đi kèm khi tham gia giao thông).",
    practice: "Ghi lại 7 việc tốt em đã tự giác thực hiện trong tuần vào sổ nhật ký.",
    challenge: "Cùng phân đội hoàn thành một dự án làm sạch một đoạn đê sông Hồng trong 1 buổi sáng.",
    assessment: "Bạn đạt khi: Tích cực tham gia và hoàn thành tốt một hoạt động phục vụ cộng đồng thực tế.",
    relatedSkills: ["lam-viec-theo-doi", "leave-no-trace", "an-toan-so"]
  },

  // ==========================================
  // 09. CHUYÊN HIỆU (SECONDARY AREA)
  // ==========================================
  {
    id: "sk-chuyen-hieu-pet",
    slug: "chuyen-hieu-pet",
    title: "Chuyên Hiệu Chăn Nuôi: Chăm Sóc Cún Con & Chó",
    title_en: "Pet Care & Dog Handling Proficiency Badge",
    category: "chuyen-hieu",
    subcategory: "Động vật & Thiên nhiên",
    shortDescription: "Rèn luyện tình yêu thương động vật, tính kiên nhẫn, lòng trắc ẩn và tinh thần trách nhiệm chăm sóc vật nuôi trong gia đình.",
    environment: "both",
    difficulty: "medium",
    tags: ["Chuyên hiệu", "Thú cưng", "Động vật", "Trách nhiệm"],
    media: { poster: "image/kynang/chuyen-hieu-chan-nuoi-cho-cun.png", videoId: "" },
    purpose: "Chứng chỉ ghi nhận sự kiên trì và tinh thần trách nhiệm của người thiếu sinh trong việc tự tay nuôi dưỡng, chăm sóc và huấn luyện chó cưng.",
    equipment: ["Sổ theo dõi tiêm phòng", "Dây dắt chó an toàn", "Bát đựng thức ăn/nước sạch", "Bàn chải lông và xà phòng tắm chuyên dụng"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết cho chó uống nước sạch đúng giờ, biết vuốt ve an toàn không làm chó giật mình và tuân thủ rửa tay sau khi chơi với thú cưng."
      },
      thieu: {
        target: "Tự tay chăm sóc một chú cún trong 3 tháng liên tục: lên khẩu phần ăn, tắm chải lông, dắt đi dạo và dạy 3 lệnh cơ bản (Ngồi, Nằm, Lại đây)."
      },
      trang: {
        target: "Tuyên truyền ý thức tiêm phòng dại trong khu dân cư, hỗ trợ các trạm cứu hộ động vật và hướng dẫn đàn em thi lấy chuyên hiệu."
      }
    },
    steps: [
      "<strong>1. Dinh dưỡng & Vệ sinh:</strong> Lên thời gian biểu cho ăn đúng bữa, luôn có bát nước sạch, rửa sạch khay ăn và tắm chải định kỳ.",
      "<strong>2. Huấn luyện hành vi:</strong> Dùng phương pháp khen thưởng tích cực (thưởng hạt và lời khen) để dạy lệnh: Ngồi (Sit), Nằm (Down), Lại đây (Come).",
      "<strong>3. Theo dõi sức khỏe:</strong> Tiêm phòng vắc-xin dại hàng năm, tẩy giun định kỳ và nhận biết dấu hiệu ốm sốt để đưa đi thú y.",
      "<strong>4. Trách nhiệm công cộng:</strong> Luôn đeo dây dắt khi ra nơi công cộng, tự giác dọn sạch chất thải của thú cưng để bảo vệ vệ sinh chung."
    ],
    commonMistakes: [
      "Cho chó ăn thức ăn có chứa sô-cô-la, hành tỏi hoặc xương dăm gia cầm nhọn nguy hiểm.",
      "Đánh mắng khi huấn luyện khiến chó bị hoảng sợ, hung dữ."
    ],
    safety: "Không chạm vào chó lạ khi chưa có sự đồng ý của chủ nuôi. Không chọc phá khi chó đang ăn hoặc ngủ.",
    practice: "Ghi chép sổ nhật ký chăm sóc cún cưng trong 4 tuần liên tiếp kèm ảnh chụp minh chứng.",
    challenge: "Huấn luyện chú cún thực hiện chuẩn xác chuỗi 3 lệnh Ngồi - Nằm - Bắt tay trước ban giám khảo Huynh trưởng.",
    assessment: "Bạn đạt chuyên hiệu khi: Huynh trưởng kiểm tra sổ theo dõi đạt chuẩn và chú cún thực hiện tốt bài kiểm tra hành vi thân thiện.",
    relatedSkills: ["thien-nhien", "khong-lam-phien-dong-vat", "an-toan-so"]
  },

  {
    id: "sk-chuyen-hieu-nhiep-anh",
    slug: "chuyen-hieu-nhiep-anh",
    title: "Chuyên Hiệu Nhiếp Ảnh: Ghi Lại Khoảnh Khắc",
    title_en: "Photography Proficiency Badge",
    category: "chuyen-hieu",
    subcategory: "Nghệ thuật & Thể thao",
    shortDescription: "Làm chủ quy tắc bố cục 1/3, ánh sáng, góc chụp và kể câu chuyện sống động về kỳ trại qua ống kính máy ảnh.",
    environment: "both",
    difficulty: "medium",
    tags: ["Nhiếp ảnh", "Nghệ thuật", "Chuyên hiệu", "Truyền thông"],
    media: { poster: "", videoId: "" },
    purpose: "Lưu giữ những khoảnh khắc đẹp nhất của tình anh em Hướng đạo và đóng góp tư liệu truyền thông cho liên đoàn.",
    equipment: ["Máy ảnh kỹ thuật số hoặc điện thoại thông minh có camera tốt", "Thẻ nhớ, pin dự phòng"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết cầm chắc máy ảnh bằng 2 tay, giữ ống kính sạch và chụp ảnh rõ nét không bị rung nhòe."
      },
      thieu: {
        target: "Áp dụng thành thạo quy tắc bố cục 1/3, chụp ảnh phong cảnh thiên nhiên, chân dung đồng đội và chụp bắt dính khoảnh khắc hành động lửa trại."
      },
      trang: {
        target: "Biên tập bộ phóng sự ảnh hoàn chỉnh về kỳ trại, biên tập video ngắn truyền thông trên fanpage liên đoàn."
      }
    },
    steps: [
      "<strong>1. Bố cục 1/3 (Rule of Thirds):</strong> Bật lưới 3x3, đặt chủ thể chính tại các điểm giao cắt của 4 đường lưới.",
      "<strong>2. Ánh sáng:</strong> Tận dụng 'Giờ Vàng' (Golden Hour) lúc bình minh hoặc hoàng hôn để có ánh sáng vàng ấm áp nhất.",
      "<strong>3. Góc chụp đa dạng:</strong> Chụp toàn cảnh bãi trại, chụp cận cảnh bàn tay đang thắt nút dây, chụp góc thấp tạo sự hùng vĩ.",
      "<strong>4. Đạo đức nhiếp ảnh:</strong> Luôn xin phép trước khi chụp ảnh chân dung người khác, không chụp những khoảnh khắc phản cảm hoặc gây xấu hổ cho bạn bè."
    ],
    commonMistakes: [
      "Chụp ngược sáng khiến mặt người bị tối đen như cái bóng.",
      "Để đường chân trời bị nghiêng lệch trong ảnh phong cảnh."
    ],
    safety: "Luôn đeo dây đeo máy ảnh vào cổ hoặc cổ tay để tránh rơi vỡ khi di chuyển trên địa hình gồ ghề.",
    practice: "Chụp một bộ ảnh 10 bức với các chủ đề: Phong cảnh, Chân dung và Hoạt động dã ngoại.",
    challenge: "Xuất bản một phóng sự ảnh kể trọn vẹn câu chuyện về một ngày sinh hoạt của Liên đoàn Long Biên.",
    assessment: "Bạn đạt chuyên hiệu khi: Nộp bộ ảnh đạt chuẩn bố cục, ánh sáng và được triển lãm trên trang truyền thông liên đoàn.",
    relatedSkills: ["nhat-ky-thien-nhien", "an-toan-so", "lam-viec-theo-doi"]
  },

  {
    id: "sk-chuyen-hieu-nau-an",
    slug: "chuyen-hieu-nau-an",
    title: "Chuyên Hiệu Nấu Ăn Dã Chiến (Camp Cook)",
    title_en: "Camp Cook Proficiency Badge",
    category: "chuyen-hieu",
    subcategory: "Dã ngoại & Kỹ thuật",
    shortDescription: "Tự tay lên thực đơn cân bằng dinh dưỡng, quản lý ngân sách, chuẩn bị nguyên liệu và nấu bữa ăn ngon miệng cho cả Đội ngoài trời.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Chuyên hiệu", "Nấu ăn", "Dã ngoại", "Hàng đội"],
    media: { poster: "", videoId: "7CgtIgSyQ14" },
    purpose: "Rèn luyện khả năng tự lập, chăm sóc sức khỏe đồng đội và kỹ năng ẩm thực dã chiến trong điều kiện thiếu thốn.",
    equipment: ["Bộ nồi dã ngoại", "Bếp củi / bếp gas", "Dao thớt sạch", "Thùng giữ nhiệt thực phẩm"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết phụ giúp nhặt rau, rửa củ quả, lau dọn bàn ăn và rửa bát đĩa sạch sẽ bằng xà phòng an toàn."
      },
      thieu: {
        target: "Tự tay nấu cơm chín dẻo không khê trên bếp củi, chế biến 1 món mặn + 1 món canh + 1 món xào phục vụ đủ 6–8 bạn trong Đội."
      },
      trang: {
        target: "Quản lý bếp trại cho toàn liên đoàn (30+ người), tính toán định lượng calo, bảo quản thực phẩm 3 ngày 2 đêm an toàn tuyệt đối."
      }
    },
    steps: [
      "<strong>1. Lập thực đơn:</strong> Cân đối đủ 4 nhóm chất (đạm, đường bột, béo, vitamin/khoáng chất), tính chi phí phù hợp ngân sách.",
      "<strong>2. Sơ chế hợp vệ sinh:</strong> Rửa sạch thực phẩm bằng nước hợp vệ sinh, phân chia dao thớt sống/chín riêng biệt.",
      "<strong>3. Nấu nướng dã chiến:</strong> Canh lửa đều, sử dụng các phương pháp luộc, xào, nướng vỉ, hầm canh.",
      "<strong>4. An toàn vệ sinh:</strong> Dọn sạch khu bếp, thu gom rác hữu cơ, đổ nước thải qua lưới lọc xa nguồn nước sinh hoạt."
    ],
    commonMistakes: [
      "Để đồ ăn sống chung với đồ chín gây nhiễm khuẩn chéo.",
      "Đun lửa quá to làm cháy khê cơm dã chiến."
    ],
    safety: "Luôn có găng tay bắc nồi chống bỏng, bình nước dập lửa cạnh bếp, không để trẻ nhỏ chạy nhảy trong khu vực bếp đang đỏ lửa.",
    practice: "Nấu thử 1 bữa ăn dã chiến hoàn chỉnh cho gia đình hoặc Đội vào buổi sinh hoạt cuối tuần.",
    challenge: "Nấu 1 bữa ăn gồm 3 món chỉ dùng duy nhất 1 chiếc nồi dã ngoại và bếp than củi trong 60 phút.",
    assessment: "Bạn đạt chuyên hiệu khi: Bữa ăn chín đều, ngon miệng, đúng giờ và khu bếp được thu dọn sạch bóng.",
    relatedSkills: ["nau-com-ngoai-troi", "lap-thuc-don-trai", "tam-giac-tao-lua"]
  },

  {
    id: "sk-chuyen-hieu-thien-van",
    slug: "chuyen-hieu-thien-van",
    title: "Chuyên Hiệu Thiên Văn Học (Astronomer)",
    title_en: "Astronomy & Stargazing Proficiency Badge",
    category: "chuyen-hieu",
    subcategory: "Khám phá & Khoa học",
    shortDescription: "Quan sát bầu trời đêm, nhận diện các chòm sao chính, tìm sao Bắc Cực định hướng và hiểu quy luật chuyển động của vũ trụ.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Chuyên hiệu", "Thiên văn", "Sao Bắc Cực", "Định hướng"],
    media: { poster: "", videoId: "" },
    purpose: "Mở rộng tầm mắt ra vũ trụ bao la, biết dùng bầu trời sao để định hướng ban đêm khi không có la bàn.",
    equipment: ["Bản đồ sao xoay", "Đèn pin ánh sáng đỏ (bảo vệ thị giác đêm)", "Ống nhòm thiên văn (tùy chọn)"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Nhận biết Mặt Trăng thay đổi hình dạng (Tròn, Khuyết), chỉ ra chòm sao Đại Hùng Tinh (Bắc Đẩu)."
      },
      thieu: {
        target: "Tìm chính xác sao Bắc Cực (Polaris) từ chòm Đại Hùng hoặc Thiên Hậu (Cassiopeia), nhận biết 5 chòm sao lớn và 3 hành tinh sáng."
      },
      trang: {
        target: "Tổ chức đêm quan sát thiên văn cho liên đoàn, hướng dẫn đàn em sử dụng bản đồ sao và kính thiên văn khúc xạ."
      }
    },
    steps: [
      "<strong>1. Thích nghi bóng tối:</strong> Để mắt làm quen với bóng đêm trong 15–20 phút, chỉ dùng đèn pin đỏ.",
      "<strong>2. Tìm chòm sao dẫn đường:</strong> Tìm hình 'Chiếc Gàu Sòng' (Đại Hùng), kéo dài 2 ngôi sao ở miệng gàu gấp 5 lần sẽ chạm sao Bắc Cực.",
      "<strong>3. Đọc bản đồ sao:</strong> Xoay bản đồ sao trùng với ngày giờ quan sát thực tế để đối chiếu vị trí các tinh tú.",
      "<strong>4. Ghi chép nhật ký:</strong> Vẽ lại vị trí Mặt Trăng và các chòm sao quan sát được qua các đêm trại."
    ],
    commonMistakes: [
      "Bật đèn pin trắng chiếu vào mắt làm mất khả năng nhìn đêm của cả đội.",
      "Nhầm sao Kim/sao Mộc (sáng tĩnh) với các vì sao nhấp nháy."
    ],
    safety: "Quan sát nơi bằng phẳng, không leo trèo lên mép đá cao trong đêm tối nguy hiểm.",
    practice: "Quan sát và vẽ lại hình dạng chòm sao Đại Hùng Tinh trong 3 đêm khác nhau.",
    challenge: "Xác định chính xác phương hướng Bắc chỉ bằng cách ngắm sao trong 2 phút giữa rừng đêm.",
    assessment: "Bạn đạt chuyên hiệu khi: Chỉ đúng sao Bắc Cực và kể tên được ít nhất 4 chòm sao trên bầu trời thực tế.",
    relatedSkills: ["xac-dinh-phuong-huong", "su-dung-la-ban", "nhat-ky-thien-nhien"]
  },

  {
    id: "sk-chuyen-hieu-cuu-thuong",
    slug: "chuyen-hieu-cuu-thuong",
    title: "Chuyên Hiệu Cứu Thương & Sơ Cấp Cứu (First Aider)",
    title_en: "First Aider & Lifesaver Proficiency Badge",
    category: "chuyen-hieu",
    subcategory: "Sơ cứu & An toàn",
    shortDescription: "Nắm vững kỹ thuật băng bó, cố định gãy xương, sơ cứu đuối nước/sốc nhiệt và phác đồ hồi sinh tim phổi (CPR) cơ bản.",
    environment: "both",
    difficulty: "hard",
    tags: ["Chuyên hiệu", "Sơ cứu", "Cứu thương", "CPR", "An toàn"],
    media: { poster: "", videoId: "" },
    purpose: "Trang bị kỹ năng vàng cứu người trong gang tấc, bảo vệ an toàn tính mạng cho gia đình và cộng đồng.",
    equipment: ["Băng tam giác Hướng đạo", "Băng cuộn y tế", "Nẹp gỗ/nẹp cành cây", "Túi sơ cứu chuẩn"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết số điện thoại cấp cứu 115, biết rửa vết thương nhỏ và an ủi bạn khi gặp tai nạn."
      },
      thieu: {
        target: "Thực hiện thành thạo 5 kiểu băng bó bằng khăn quàng Hướng đạo (băng đầu, băng tay, băng chéo), nẹp cố định cẳng tay gãy và làm cáng tải thương bằng 2 gậy."
      },
      trang: {
        target: "Đạt chứng chỉ Sơ cấp cứu Hội Chữ Thập Đỏ, huấn luyện CPR và quản lý trạm y tế trong các kỳ trại lớn."
      }
    },
    steps: [
      "<strong>1. Đánh giá hiện trường (DRSABC):</strong> Đảm bảo an toàn cho bản thân trước khi tiếp cận nạn nhân.",
      "<strong>2. Cầm máu & Băng bó:</strong> Ép trực tiếp cầm máu, dùng khăn tam giác hoặc băng thun quấn chắc không quá chặt.",
      "<strong>3. Cố định chấn thương:</strong> Cố định khớp trên và khớp dưới ổ gãy bằng nẹp đệm lót êm ái.",
      "<strong>4. Vận chuyển nạn nhân:</strong> Làm cáng dã chiến từ 2 gậy Thiếu sinh và áo khoác/áo mưa, khiêng đi nhịp nhàng."
    ],
    commonMistakes: [
      "Nắn bóp hoặc kéo thẳng chi bị gãy làm đứt mạch máu/dây thần kinh.",
      "Băng quá chặt làm ngón tay tím tái mất tuần hoàn."
    ],
    safety: "Luôn đeo găng tay y tế để phòng lây nhiễm qua đường máu. Gọi cấp cứu 115 ngay khi nạn nhân bất tỉnh.",
    practice: "Thực hành băng vết thương đầu và cẳng tay cho bạn cùng đội trong 3 phút.",
    challenge: "Cùng 1 bạn dựng cáng cứu thương bằng gậy và vận chuyển nạn nhân qua quãng đường 100m an toàn.",
    assessment: "Bạn đạt chuyên hiệu khi: Vượt qua bài kiểm tra tình huống cấp cứu giả định của Trưởng ban Y tế.",
    relatedSkills: ["chay-mau", "bong-gan", "ha-than-nhiet", "goi-tro-giup"]
  },

  {
    id: "sk-chuyen-hieu-lam-vuon",
    slug: "chuyen-hieu-lam-vuon",
    title: "Chuyên Hiệu Làm Vườn & Sinh Thái (Gardener)",
    title_en: "Gardener & Eco-Horticulture Proficiency Badge",
    category: "chuyen-hieu",
    subcategory: "Môi trường & Sinh thái",
    shortDescription: "Hiểu về đất trồng, tự tay ươm mầm, chăm sóc cây xanh, làm phân hữu cơ compost và phủ xanh môi trường sống.",
    environment: "outdoor",
    difficulty: "easy",
    tags: ["Chuyên hiệu", "Làm vườn", "Cây xanh", "Môi trường"],
    media: { poster: "", videoId: "" },
    purpose: "Giáo dục tình yêu lao động, sự gắn kết với đất mẹ và bảo vệ hệ sinh thái bền vững.",
    equipment: ["Cuốc xẻng nhỏ", "Bình tưới cây", "Hạt giống rau/hoa", "Khay ươm đất mùn"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết tưới cây hàng ngày, nhận biết 3 loại rau củ và không giẫm đạp lên bồn hoa công cộng."
      },
      thieu: {
        target: "Tự tay ươm và chăm sóc 1 khay rau mầm hoặc 3 chậu cây xanh trong 2 tháng cho đến ngày thu hoạch / ra hoa."
      },
      trang: {
        target: "Tổ chức chiến dịch 'Trồng cây xanh - Gieo tương lai' cho thiếu nhi khu dân cư, hướng dẫn phân loại rác hữu cơ ủ phân bón vi sinh."
      }
    },
    steps: [
      "<strong>1. Chuẩn bị đất trồng:</strong> Trộn đất thịt với xơ dừa, tro trấu và phân trùn quế tơi xốp thoát nước.",
      "<strong>2. Gieo hạt & Ươm mầm:</strong> Ngâm hạt giống nước ấm (2 sôi 3 lạnh), gieo hạt độ sâu gấp đôi kích thước hạt.",
      "<strong>3. Chăm sóc:</strong> Tưới ẩm vào sáng sớm hoặc chiều mát, nhổ cỏ dại và bắt sâu bọ thủ công.",
      "<strong>4. Thu hoạch & Nhân giống:</strong> Thu hoạch rau sạch và nhân giống cây bằng phương pháp giâm cành."
    ],
    commonMistakes: [
      "Tưới quá nhiều nước làm úng thối rễ cây non.",
      "Để cây ươm dưới nắng gắt trực tiếp làm cháy lá."
    ],
    safety: "Rửa tay sạch bằng xà phòng sau khi tiếp xúc với đất và phân bón. Cẩn thận khi dùng dụng cụ làm vườn sắc bén.",
    practice: "Trồng và chăm sóc thành công một luống rau sạch tại nhà hoặc tại góc sinh hoạt của Liên đoàn.",
    challenge: "Ủ thành công một thùng phân hữu cơ từ rác nhà bếp (vỏ trái cây, rau thừa) không mùi hôi.",
    assessment: "Bạn đạt chuyên hiệu khi: Cây trồng phát triển khỏe mạnh và giải thích được chu kỳ sinh trưởng của cây.",
    relatedSkills: ["nhan-biet-cay", "leave-no-trace", "nhat-ky-thien-nhien"]
  },

  {
    id: "sk-chuyen-hieu-xe-dap",
    slug: "chuyen-hieu-xe-dap",
    title: "Chuyên Hiệu Xe Đạp & Thám Du (Cyclist & Explorer)",
    title_en: "Cyclist & Expedition Explorer Badge",
    category: "chuyen-hieu",
    subcategory: "Thể thao & Vận động",
    shortDescription: "Bảo dưỡng xe đạp an toàn, sửa chữa săm lốp dã chiến, tuân thủ luật giao thông và hoàn thành chuyến thám du xe đạp 20km.",
    environment: "outdoor",
    difficulty: "medium",
    tags: ["Chuyên hiệu", "Xe đạp", "Thám du", "Thể thao"],
    media: { poster: "", videoId: "" },
    purpose: "Rèn luyện thể lực bền bỉ, tính cơ động và ý thức chấp hành an toàn giao thông đường bộ.",
    equipment: ["Xe đạp thể thao/địa hình", "Mũ bảo hiểm đạt chuẩn", "Bộ vá săm + bơm tay mini", "Đèn phản quang"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết đi xe đạp 2 bánh vững vàng, đội mũ bảo hiểm đúng quy cách và phanh xe an toàn."
      },
      thieu: {
        target: "Tự tay vá săm xe đạp, tăng xích, chỉnh phanh và hoàn thành chuyến thám du dã ngoại bằng xe đạp cự ly 15–20km."
      },
      trang: {
        target: "Lập lộ trình và dẫn dắt đoàn xe đạp 10+ thành viên đi thám du liên tỉnh (50km+) an toàn tuyệt đối."
      }
    },
    steps: [
      "<strong>1. Kiểm tra ABC:</strong> Air (Áp suất lốp) &rarr; Brakes (Hệ thống phanh trước/sau) &rarr; Chain (Xích líp trơn tru).",
      "<strong>2. Kỹ thuật vá săm:</strong> Dùng móc cạy lốp, tìm chỗ thủng bằng cách nhúng nước, chà nhám, dán miếng vá và ép chặt.",
      "<strong>3. Tín hiệu tay khi đi xe:</strong> Rẽ trái giơ tay trái ngang, rẽ phải giơ tay phải, dừng lại đưa tay trái chúc xuống dưới.",
      "<strong>4. Giữ cự ly:</strong> Đi theo hàng một, giữ khoảng cách 2 thân xe với bạn phía trước, không dàn hàng ngang."
    ],
    commonMistakes: [
      "Không kiểm tra phanh trước khi xuống dốc cầu/dốc đê.",
      "Đi xe dàn hàng ngang gây cản trở giao thông."
    ],
    safety: "Bắt buộc đội mũ bảo hiểm cài quai chắc chắn, mặc áo phản quang khi di chuyển lúc trời sẩm tối.",
    practice: "Tự tháo bánh xe và vá săm xe đạp hoàn chỉnh trong vòng 10 phút.",
    challenge: "Hoàn thành hành trình thám du xe đạp khám phá đê Long Biên - Cổ Loa (20km) cùng Hàng đội.",
    assessment: "Bạn đạt chuyên hiệu khi: Xe đạp luôn trong tình trạng an toàn và vượt qua bài thi thực hành đi đường trường.",
    relatedSkills: ["di-bo", "lap-hanh-trinh", "an-toan-so"]
  },

  {
    id: "sk-chuyen-hieu-boi-loi",
    slug: "chuyen-hieu-boi-loi",
    title: "Chuyên Hiệu Bơi Lội & An Toàn Dưới Nước (Swimmer & Lifesaver)",
    title_en: "Swimmer & Water Safety Proficiency Badge",
    category: "chuyen-hieu",
    subcategory: "Thể thao & Cứu nạn",
    shortDescription: "Bơi thành thạo cự ly 50m, nổi ngửa thả lỏng sinh tồn, nắm vững quy tắc cứu đuối gián tiếp (Ném phao - Đưa sào).",
    environment: "outdoor",
    difficulty: "hard",
    tags: ["Chuyên hiệu", "Bơi lội", "Sinh tồn", "Cứu đuối", "An toàn"],
    media: { poster: "", videoId: "" },
    purpose: "Xóa nạn mù bơi, xây dựng bản lĩnh tự tin dưới nước và kỹ năng cứu người đuối nước an toàn.",
    equipment: ["Kính bơi", "Phao cứu sinh / sào tre cứu nạn", "Áo phao dã ngoại"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Biết lặn thở dưới nước 15 giây, mặc áo phao đúng cách và tuân thủ không bao giờ tự ý lại gần ao hồ sông suối một mình."
      },
      thieu: {
        target: "Bơi liên tục 50m (bơi ếch hoặc bơi trườn sấp), nổi ngửa thả lỏng sinh tồn trong 3 phút và biết cách ném phao/đưa sào cứu nạn nhân đuối nước từ trên bờ."
      },
      trang: {
        target: "Đạt chứng nhận Cứu hộ bơi lội, bơi mang vác vật nặng 25m và hướng dẫn phổ cập bơi cho đoàn sinh đàn em."
      }
    },
    steps: [
      "<strong>1. Khởi động kỹ:</strong> Xoay kỹ các khớp cổ tay, cổ chân, vai, gối 10 phút trước khi xuống nước để tránh chuột rút.",
      "<strong>2. Bơi sinh tồn:</strong> Khi kiệt sức, lật ngửa người thả lỏng như chiếc thuyền, thở nông ngực căng phồng nổi tự nhiên.",
      "<strong>3. Nguyên tắc cứu đuối (Talk - Reach - Throw - Row - Go):</strong> Ưu tiên Đưa sào / Ném phao dây từ trên bờ, TUYỆT ĐỐI KHÔNG nhảy xuống nước ôm nạn nhân đang hoảng loạn.",
      "<strong>4. Sơ cứu ngạt nước:</strong> Đưa nạn nhân lên bờ khô ráo, làm thông thoáng đường thở và thực hiện ép tim CPR ngay lập tức nếu ngừng thở."
    ],
    commonMistakes: [
      "Nhảy xuống cứu người khi bản thân chưa được huấn luyện cứu hộ khiến cả 2 cùng chìm.",
      "Dốc ngược nạn nhân chạy vòng quanh làm mất thời gian vàng cấp cứu não."
    ],
    safety: "Chỉ bơi ở những nơi có cứu hộ và dòng chảy an toàn. Không bơi khi vừa ăn no hoặc khi trời sắp có dông sét.",
    practice: "Thực hành nổi ngửa sinh tồn trong bể bơi 3 phút liên tục không chạm chân xuống đáy.",
    challenge: "Ném chính xác phao cứu sinh trúng vị trí mục tiêu cách bờ 10m trong vòng 3 lần ném.",
    assessment: "Bạn đạt chuyên hiệu khi: Bơi hoàn thành cự ly 50m và thực hành đúng thao tác cứu hộ từ trên bờ.",
    relatedSkills: ["so-cuu-an-toan", "nguon-nuoc", "goi-tro-giup"]
  },

  // ==========================================
  // 10. GÓC HUYNH TRƯỞNG (SECONDARY AREA)
  // ==========================================
  {
    id: "sk-phuong-phap-edge",
    slug: "phuong-phap-edge",
    title: "Phương Pháp EDGE: Kỹ Năng Sư Phạm Của Huynh Trưởng",
    title_en: "The EDGE Teaching Method for Scout Leaders",
    category: "goc-huynh-truong",
    subcategory: "Phương pháp sư phạm",
    shortDescription: "Phương pháp sư phạm 4 bước kinh điển: Giải thích (Explain) &rarr; Làm mẫu (Demonstrate) &rarr; Kèm cặp (Guide) &rarr; Trao quyền (Enable).",
    environment: "both",
    difficulty: "hard",
    tags: ["Huynh trưởng", "EDGE Method", "Sư phạm", "Lãnh đạo"],
    media: { poster: "image/kynang/phuong-phap-edge.png", videoId: "" },
    purpose: "Trang bị cho Huynh trưởng và Đội trưởng phương pháp truyền đạt kỹ năng khoa học, giúp đoàn sinh học nhanh, hiểu sâu và tự tin tự làm được.",
    equipment: ["Giáo án bài học kỹ năng", "Dụng cụ trực quan thực hành", "Sổ theo dõi tiến độ"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Đoàn sinh cảm nhận được sự kèm cặp tận tình của Trưởng, hào hứng làm theo mẫu và tự tin làm lại cho bạn."
      },
      thieu: {
        target: "Đội trưởng / Đội phó biết áp dụng 4 bước EDGE để hướng dẫn các bạn mới vào đội thắt nút dây hoặc dựng lều."
      },
      trang: {
        target: "Huynh trưởng thiết kế trọn vẹn giáo án buổi sinh hoạt chuẩn EDGE, quan sát và đánh giá chính xác mức độ tiếp thu của đoàn sinh."
      }
    },
    steps: [
      "<strong>E - Explain (Giải thích):</strong> Trưởng nói rõ kỹ năng này tên là gì, tại sao cần học, áp dụng trong tình huống nào và mô tả tổng quan các bước.",
      "<strong>D - Demonstrate (Làm mẫu):</strong> Trưởng trực tiếp làm mẫu từng bước chậm rãi, rõ ràng trước mắt các em, vừa làm vừa nhấn mạnh các điểm then chốt.",
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
  },

  {
    id: "sk-dieu-hanh-lua-trai",
    slug: "dieu-hanh-lua-trai",
    title: "Nghệ Thuật Điều Hành Đêm Lửa Trại",
    title_en: "Campfire Leadership & Master of Ceremony",
    category: "goc-huynh-truong",
    subcategory: "Tổ chức hoạt động trại",
    shortDescription: "Quy luật 'Lửa bùng - Lửa tàn - Lửa thiêng': điều tiết cao trào cảm xúc từ sôi động cuồng nhiệt đến lắng đọng tâm tình.",
    environment: "outdoor",
    difficulty: "hard",
    tags: ["Lửa trại", "Quản trò", "Huynh trưởng", "Lãnh đạo"],
    media: { poster: "image/kynang/dem-lua-trai-vong-tron.png", videoId: "" },
    purpose: "Tạo nên đêm kỷ niệm cảm xúc thiêng liêng nhất của đời Hướng đạo, gắn kết tình huynh đệ và khắc sâu lý tưởng sống đẹp.",
    equipment: ["Tro củi thiêng lửa trại", "Kịch bản đêm lửa", "Đuốc châm lửa danh dự", "Dụng cụ an toàn phòng hỏa"],
    levels: {
      au: {
        tag: "BIẾT",
        target: "Hát thuộc các bài ca lửa trại truyền thống và tham gia diễn kịch vui quanh đốm lửa."
      },
      thieu: {
        target: "Tham gia chuẩn bị củi đống lửa hình kim tự tháp, dàn dựng tiết mục kịch vui (Skit) mang thông điệp giáo dục ý nghĩa."
      },
      trang: {
        target: "Đóng vai trò Trưởng Lửa (Campfire Chief) / Quản trò điều hành nhịp điệu đêm lửa trại, thực hiện nghi thức Tàn Lửa lắng đọng."
      }
    },
    steps: [
      "<strong>1. Giai đoạn 1 - Khởi Lửa (Mở màn):</strong> Nghi thức gọi lửa trang nghiêm &rarr; Ngọn lửa bùng sáng &rarr; Bài ca gọi lửa bốc cao tinh thần.",
      "<strong>2. Giai đoạn 2 - Lửa bùng (Cao trào sôi động):</strong> Các bài ca sinh hoạt, băng reo, trò chơi vận động tập thể và các vở kịch vui (Skit) dí dỏm của từng phân đội.",
      "<strong>3. Giai đoạn 3 - Lửa tàn (Lắng đọng):</strong> Than hồng rực rỡ &rarr; Giảm âm lượng &rarr; Những bài ca êm dịu, nhẹ nhàng (Bài ca Tạm Biệt, Taps).",
      "<strong>4. Giai đoạn 4 - Lửa thiêng (Tâm tình):</strong> Lời tâm tình của Liên Đoàn Trưởng gửi gắm tình yêu thương và bài học làm người trước khi giải tán trong yên lặng."
    ],
    commonMistakes: [
      "Để chương trình kéo dài lê thê sau 22h khiến các em mệt mỏi.",
      "Cho diễn các tiết mục hài nhảm, thô tục không phù hợp với văn hóa giáo dục Hướng đạo."
    ],
    safety: "Luôn có 2 Huynh trưởng túc trực xô nước phòng hỏa. Khoảng cách an toàn giữa vòng tròn đoàn sinh và đống lửa tối thiểu 4m.",
    practice: "Điều hành một phần kịch bản lửa trại 20 phút cùng ban quản trò.",
    challenge: "Dẫn dắt cảm xúc của 100 đoàn sinh từ đỉnh cao reo hò sôi nổi chuyển sang trạng thái im phăng phắc lắng đọng trong 3 phút.",
    assessment: "Bạn đạt khi: Thiết kế và điều hành thành công một đêm lửa trại ý nghĩa, an toàn tuyệt đối.",
    relatedSkills: ["tam-giac-tao-lua", "nhom-lua-an-toan", "phuong-phap-edge"]
  }
];

if (typeof window !== 'undefined') {
  window.SCOUT_SKILL_CATEGORIES = SCOUT_SKILL_CATEGORIES;
  window.SCOUT_SECONDARY_AREAS = SCOUT_SECONDARY_AREAS;
  window.SCOUT_SKILLS_DATA = SCOUT_SKILLS_DATA;
}
