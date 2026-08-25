/* ========================================================
   LONG BIEN SCOUTS — INSTANT CLIENT-SIDE SITE SEARCH ENGINE
   High-performance, zero-dependency in-memory fuzzy & keyword search
   ======================================================== */

(function() {
  // Static Core Knowledge & FAQ Index
  const BASE_SEARCH_INDEX = [
    {
      title: "Lịch Sử & Phát Triển của Hướng Đạo (Infographics)",
      category: "Thông Tin Cần Biết",
      badge: "📜 Tư Liệu Trực Quan",
      keywords: ["lịch sử", "lich su", "phát triển", "phat trien", "nguồn gốc", "nguon goc", "baden powell", "wosm", "lịch sử hình thành", "brownsea", "trần văn khắc", "lịch sử hướng đạo việt nam", "lịch sử phát triển"],
      desc: "Tư liệu infographic trực quan: Khởi nguồn phong trào Hướng đạo từ năm 1907, lịch sử Hướng đạo Việt Nam và sự hình thành các ngành sinh hoạt.",
      url: "#lich-su-huong-dao",
      action: "Xem tư liệu Infographic"
    },

    // --- 1. AGE & SECTIONS ---
    {
      title: "Ngành Ấu (Sói Con 7–11 Tuổi)",
      category: "Các Ngành Sinh Hoạt",
      badge: "🐺 Ấu Đoàn",
      keywords: ["7 tuổi", "8 tuổi", "9 tuổi", "10 tuổi", "11 tuổi", "tiểu học", "sói con", "ấu đoàn", "ngành ấu", "gắng sức", "akela", "bầy", "lớp 1", "lớp 2", "lớp 3", "lớp 4", "lớp 5"],
      desc: "Chương trình giáo dục qua truyện kể rừng già Mowgli và trò chơi vận động, rèn tính tự lập, tự phục vụ và tinh thần làm việc nhóm.",
      url: "#cac-nganh",
      action: "Xem chi tiết Ngành Ấu"
    },
    {
      title: "Ngành Thiếu (Thiếu Sinh 11–15 Tuổi)",
      category: "Các Ngành Sinh Hoạt",
      badge: "⚜️ Thiếu Đoàn",
      keywords: ["11 tuổi", "12 tuổi", "13 tuổi", "14 tuổi", "15 tuổi", "thcs", "cấp 2", "thiếu sinh", "thiếu đoàn", "ngành thiếu", "sắp sẵn", "hàng đội", "đội trưởng", "lớp 6", "lớp 7", "lớp 8", "lớp 9"],
      desc: "Phương pháp Hàng Đội tự quản: tự phân công, tự xoay xở, rèn kỹ năng sinh tồn, dã ngoại, dựng lều, thám du và lãnh đạo.",
      url: "#cac-nganh",
      action: "Xem chi tiết Ngành Thiếu"
    },
    {
      title: "Ngành Tráng (Tráng Sinh 18+ Tuổi)",
      category: "Các Ngành Sinh Hoạt",
      badge: "🏕️ Tráng Đoàn",
      keywords: ["18 tuổi", "đại học", "thanh niên", "tráng sinh", "tráng đoàn", "ngành tráng", "phụng sự", "tình nguyện", "giúp ích"],
      desc: "Ngành lớn nhất: chuyển từ người tham gia sang người dẫn dắt, tổ chức chương trình và thực hiện các dự án phụng sự cộng đồng.",
      url: "#cac-nganh",
      action: "Xem chi tiết Ngành Tráng"
    },

    // --- 2. FAQ & ONBOARDING KEYWORDS ---
    {
      title: "Học Phí & Chi Phí Tham Gia",
      category: "Hỏi Đáp Phụ Huynh",
      badge: "💰 Chi Phí 0đ",
      keywords: ["học phí", "chi phí", "bao nhiêu tiền", "đóng tiền", "phi lợi nhuận", "học phí không", "kinh phí", "miễn phí", "tiền"],
      desc: "Liên đoàn hoạt động phi lợi nhuận, hoàn toàn KHÔNG thu học phí. Các kỳ trại thực tế được tính toán minh bạch chi phí ăn ở, xe cộ.",
      url: "#hoi-dap",
      action: "Xem chi tiết câu trả lời"
    },
    {
      title: "Quy Trình 2 Buổi Dự Thính Trải Nghiệm Thực Tế",
      category: "Gia Nhập & Đăng Ký",
      badge: "🌱 Dự Thính",
      keywords: ["dự thính", "học thử", "trải nghiệm thử", "tham gia thử", "buổi đầu", "quy trình", "đăng ký", "thủ tục", "xin vào", "nhập đoàn"],
      desc: "Phụ huynh đưa con đến trải nghiệm thực tế 2 buổi sáng Chủ nhật tại Vườn hoa Bắc Biên trước khi gia đình và Liên đoàn quyết định kết nạp.",
      url: "#quy-trinh",
      action: "Xem quy trình 5 bước"
    },
    {
      title: "Lịch Sinh Hoạt & Địa Điểm (Sáng Chủ Nhật)",
      category: "Thông Tin Cần Biết",
      badge: "📅 Lịch Định Kỳ",
      keywords: ["chủ nhật", "thời gian", "mấy giờ", "ở đâu", "địa điểm", "bắc biên", "vườn hoa bắc biên", "ngọc thụy", "long biên", "lịch sinh hoạt", "giờ"],
      desc: "Sinh hoạt đều đặn từ 09h00 đến 11h00 sáng Chủ nhật hằng tuần tại Vườn hoa Bắc Biên (chân cầu Long Biên, Ngọc Thụy, Hà Nội).",
      url: "#journeyTitle",
      action: "Xem địa điểm & chỉ đường"
    },
    {
      title: "Chính Sách An Toàn Trẻ Em (Safe From Harm)",
      category: "Cam Kết Giáo Dục",
      badge: "🛡️ An Toàn Tuyệt Đối",
      keywords: ["an toàn", "bảo vệ trẻ em", "safe from harm", "đánh mắng", "bạo lực", "nguyên tắc 2 người", "quy tắc ứng xử"],
      desc: "Tuân thủ nghiêm ngặt chuẩn quốc tế WOSM: Tuyệt đối không bạo lực thân thể hay tinh thần, luôn có tối thiểu 2 Trưởng/phụ huynh giám sát.",
      url: "#quy-trinh",
      action: "Xem cam kết 3 bên"
    },

    // --- 3. KEY SCOUTCRAFT SKILLS ---
    {
      title: "Nút Ghế Đơn (Bowline Knot)",
      category: "Kỹ Năng Hướng Đạo",
      badge: "🪢 Scoutcraft",
      keywords: ["nút ghế", "nút ghế đơn", "bowline", "nút dây", "cứu thương", "cứu nạn", "dây thừng", "vua các loại nút"],
      desc: "Vua của các loại nút dây: tạo vòng tròn cố định không bị thít chặt, dùng để cứu người dưới giếng sâu, vách núi hoặc cột dây thuyền.",
      url: "#ky-nang",
      skillId: "nut-ghe-don-bowline",
      action: "Mở bài học & Infographic"
    },
    {
      title: "Ráp Cây Chữ Thập & Ráp Vuông (Square Lashing)",
      category: "Kỹ Năng Hướng Đạo",
      badge: "🪢 Scoutcraft",
      keywords: ["ráp vuông", "ráp cây", "lashing", "dựng trại", "cột cờ", "bàn ghế dã ngoại", "scoutcraft", "công trình trại"],
      desc: "Kỹ thuật liên kết 2 cây gỗ vuông góc nhau, nền tảng để dựng cổng trại, tháp quan sát, bàn ăn dã ngoại và cầu khỉ.",
      url: "#ky-nang",
      skillId: "rap-vuong-square-lashing",
      action: "Mở bài học & Infographic"
    },
    {
      title: "Phương Pháp Nhóm Lửa An Toàn & Bếp Dã Ngoại",
      category: "Kỹ Năng Hướng Đạo",
      badge: "🔥 Firecraft",
      keywords: ["nhóm lửa", "tạo lửa", "tam giác lửa", "bếp dã ngoại", "củi", "mồi lửa", "an toàn lửa", "nấu ăn dã chiến"],
      desc: "Nguyên lý Tam giác tạo lửa (Nhiệt - Oxy - Nhiên liệu), kỹ thuật xếp củi hình nón/kim tự tháp và an toàn dập lửa Leave No Trace.",
      url: "#ky-nang",
      skillId: "tam-giac-tao-lua",
      action: "Mở bài học & Infographic"
    },
    {
      title: "Định Hướng Bằng La Bàn & Bản Đồ Địa Hình",
      category: "Kỹ Năng Hướng Đạo",
      badge: "🧭 Navigation",
      keywords: ["la bàn", "bản đồ", "định hướng", "phương vị", "tìm đường", "góc phương vị", "lạc đường", "mặt trời"],
      desc: "Cách sử dụng la bàn Silva ngắm góc phương vị (Azimuth), đọc đường đồng mức bản đồ địa hình và tìm hướng bằng thiên nhiên.",
      url: "#ky-nang",
      skillId: "su-dung-la-ban-dia-la",
      action: "Mở bài học & Infographic"
    },
    {
      title: "Sơ Cứu Trầy Xước, Bỏng & Băng Bó Vết Thương",
      category: "Kỹ Năng Hướng Đạo",
      badge: "🩹 First Aid",
      keywords: ["sơ cứu", "băng bó", "vết thương", "trầy xước", "bỏng", "chảy máu", "băng tam giác", "túi sơ cấp cứu"],
      desc: "Xử lý chuẩn y khoa các tai nạn dã ngoại: rửa sạch vết thương, cầm máu, băng ép tam giác và sơ cứu say nắng, bỏng nhẹ.",
      url: "#ky-nang",
      skillId: "xu-ly-vet-cat-tray-xuoc",
      action: "Mở bài học & Infographic"
    },
    {
      title: "Bảng Mã Morse & Kỹ Thuật Truyền Tin Bằng Âm Thanh / Ánh Sáng",
      category: "Kỹ Năng Hướng Đạo",
      badge: "🚩 Signaling",
      keywords: ["morse", "mã morse", "tít te", "truyền tin", "mật thư", "âm thanh", "còi", "đèn pin", "tín hiệu"],
      desc: "Học bảng mã Morse quốc tế theo các nhóm chữ đối xứng, luyện phản xạ nghe tiếng còi tít-te và dịch mật thư đất trại.",
      url: "#ky-nang",
      skillId: "morse-am-thanh-anh-sang",
      action: "Mở bài học & Infographic"
    },

        // --- 5. EXTENDED PRACTICAL SCOUTCRAFT & ESSENTIALS ---
    {
      title: "Kỹ Năng Sinh Tồn & Mưu Sinh Thoát Hiểm Dã Ngoại",
      category: "Kỹ Năng Hướng Đạo",
      badge: "🏕️ Sinh Tồn",
      keywords: ["sinh tồn", "sinh ton", "mưu sinh", "muu sinh", "thoát hiểm", "thoat hiem", "rừng rậm", "kỹ năng sống", "tồn tại", "nguy hiểm", "dã ngoại"],
      desc: "Nguyên tắc sinh tồn STOP, cách lọc nước dã chiến, tìm nơi trú ẩn khẩn cấp và bảo vệ thân nhiệt giữa thiên nhiên hoang dã.",
      url: "#ky-nang",
      skillId: "nguyen-tac-sinh-ton-stop",
      action: "Mở bài học & Infographic"
    },
    {
      title: "Địa Điểm Sinh Hoạt & Hướng Dẫn Chỉ Đường (Vườn Hoa Bắc Biên)",
      category: "Thông Tin Cần Biết",
      badge: "📍 Địa Điểm",
      keywords: ["địa chỉ", "dia chi", "ở đâu", "o dau", "bắc biên", "bac bien", "chỉ đường", "chi duong", "vườn hoa", "vuon hoa", "ngọc thụy", "ngoc thuy", "bản đồ", "ban do"],
      desc: "Vườn hoa Bắc Biên (chân cầu Long Biên, lối rẽ đê Ngọc Thụy, quận Long Biên, Hà Nội). Không gian xanh mát ven bãi sông Hồng.",
      url: "#journeyTitle",
      action: "Xem bản đồ & chỉ đường"
    },
    {
      title: "Sơ Cấp Cứu & Xử Lý Chấn Thương Ngoài Trời",
      category: "Kỹ Năng Hướng Đạo",
      badge: "🩹 Sơ Cứu",
      keywords: ["sơ cứu", "so cuu", "băng bó", "bang bo", "vết thương", "vet thuong", "cứu thương", "cuu thuong", "say nắng", "chảy máu", "túi y tế"],
      desc: "Quy trình sơ cấp cứu ban đầu (DRABC), rửa sát khuẩn vết thương hở, xử trí bỏng nhiệt và kỹ thuật quấn băng tam giác chuẩn.",
      url: "#ky-nang",
      skillId: "xu-ly-vet-cat-tray-xuoc",
      action: "Mở bài học & Infographic"
    },
    {
      title: "Ngành Thiếu (Thiếu Sinh 11–15 Tuổi)",
      category: "Các Ngành Sinh Hoạt",
      badge: "⚜️ Thiếu Đoàn",
      keywords: ["11 tuổi", "12 tuổi", "12 tuoi", "13 tuổi", "13 tuoi", "14 tuổi", "14 tuoi", "15 tuổi", "15 tuoi", "thcs", "cấp 2", "thiếu sinh", "thiếu đoàn", "sắp sẵn"],
      desc: "Học sinh THCS từ 11–15 tuổi: rèn kỹ năng tự lập, tự quản hàng đội, thám du rừng sâu, dựng trại và lửa bếp dã chiến.",
      url: "#cac-nganh",
      action: "Xem chi tiết Ngành Thiếu"
    },

    // --- 4. PARENTING & STORIES ---
    {
      title: "Góc Phụ Huynh: Rèn Luyện Tính Tự Lập Cho Con",
      category: "Góc Phụ Huynh",
      badge: "❤️ Nuôi Con Tự Lập",
      keywords: ["tự lập", "tự chăm sóc", "nuôi dạy con", "trách nhiệm", "ỷ lại", "phụ huynh", "cha mẹ", "tính cách", "trưởng thành"],
      desc: "Làm thế nào để con tự giác sắp xếp ba lô, tự chuẩn bị bữa ăn và không còn ỷ lại vào cha mẹ? Bài học từ phương pháp Hướng đạo.",
      url: "#goc-phu-huynh",
      action: "Đọc cẩm nang phụ huynh"
    },
    {
      title: "Góc Phụ Huynh: Giúp Con Cai Nghiện Màn Hình (Digital Detox)",
      category: "Góc Phụ Huynh",
      badge: "🌿 Về Với Thiên Nhiên",
      keywords: ["màn hình", "điện thoại", "ipad", "game", "nghiện game", "nghiện điện thoại", "digital detox", "thiên nhiên", "ngoài trời"],
      desc: "Phương pháp kéo trẻ ra khỏi màn hình tivi, điện thoại bằng những hoạt động thực tế cuốn hút giữa cỏ cây và bạn bè trang lứa.",
      url: "#goc-phu-huynh",
      action: "Đọc cẩm nang phụ huynh"
    },
    {
      title: "Nhật Ký Trại Vươn Xa: Con Lớn Khôn Sau Chuyến Bay Ngàn Dặm",
      category: "Tiếng Nói Từ Trái Tim",
      badge: "💌 Mẹ Thùy Dung",
      keywords: ["thùy dung", "mẹ thùy dung", "vươn xa", "cảm nhận", "nhật ký", "tâm thư", "đất trại", "sân bay nội bài"],
      desc: "Trang nhật ký xúc động của phụ huynh khi đón con gái rám nắng, tự tin và tự lập trở về sau kỳ trại toàn quốc tại Nam Bộ.",
      url: "#goc-phu-huynh",
      storyId: "phuhuynh-thuydung",
      action: "Đọc trọn vẹn bài viết"
    }
  ];

  // Helper to compile dynamic index combining Base + window.SCOUT_SKILLS_DATA
  function getFullSearchIndex() {
    let index = [...BASE_SEARCH_INDEX];
    if (window.SCOUT_SKILLS_DATA && Array.isArray(window.SCOUT_SKILLS_DATA)) {
      window.SCOUT_SKILLS_DATA.forEach(s => {
        // avoid duplicating items already in BASE_SEARCH_INDEX
        if (!index.some(item => item.skillId === s.id)) {
          index.push({
            title: s.title,
            category: "Kho Kỹ Năng Hướng Đạo",
            badge: "⚜️ Kỹ Năng",
            keywords: [s.title, s.subcategory || '', s.category || '', ...(s.tags || [])],
            desc: s.shortDescription || s.purpose || "Kỹ năng thực hành Hướng đạo chính thức.",
            url: "#ky-nang",
            skillId: s.id,
            action: "Mở bài học & Infographic"
          });
        }
      });
    }
    return index;
  }

  // Global ScoutSearch API
  window.ScoutSearch = {
    openModal: function() {
      if (typeof closeMobileNav === 'function') closeMobileNav();
      const modal = document.getElementById('siteSearchModal');
      const input = document.getElementById('siteSearchInput');
      if (modal) {
        modal.classList.add('open');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        if (input) {
          setTimeout(() => {
            input.focus();
            input.select();
          }, 80);
          if (!input.value) this.renderQuickSuggestions();
        }
      }
    },

        closeModal: function(e) {
      if (e) {
        if (typeof e.stopPropagation === 'function') e.stopPropagation();
        if (typeof e.preventDefault === 'function') e.preventDefault();
      }
      const modal = document.getElementById('siteSearchModal');
      if (modal) {
        modal.classList.remove('open');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
      document.body.style.overflow = '';
      const input = document.getElementById('siteSearchInput');
      if (input) {
        input.value = '';
      }
    },

    normalize: function(text) {
      return (text || '').toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'd')
        .trim();
    },

    performSearch: function(rawQuery) {
      const q = this.normalize(rawQuery);
      const resBox = document.getElementById('siteSearchResults');
      if (!resBox) return;

      if (!q) {
        this.renderQuickSuggestions();
        return;
      }

      const allItems = getFullSearchIndex();
      const matches = allItems.filter(item => {
        const titleNorm = this.normalize(item.title);
        const descNorm = this.normalize(item.desc);
        const catNorm = this.normalize(item.category);
        const kwNorm = (item.keywords || []).map(k => this.normalize(k)).join(' ');

        return titleNorm.includes(q) || descNorm.includes(q) || catNorm.includes(q) || kwNorm.includes(q);
      });

      if (matches.length === 0) {
        resBox.innerHTML = `
          <div class="search-empty-state">
            <span style="font-size:36px;display:block;margin-bottom:8px;">🔍</span>
            <strong style="color:var(--forest);font-size:15px;display:block;margin-bottom:4px;">Không tìm thấy kết quả phù hợp cho "${rawQuery}"</strong>
            <p style="color:var(--muted);font-size:13px;margin:0;">Thử tìm kiếm với các từ khóa phổ biến: <em>"9 tuổi", "học phí", "nút ghế", "chủ nhật", "dự thính"</em></p>
          </div>
        `;
        return;
      }

      let html = `<div class="search-results-list">`;
      matches.slice(0, 20).forEach(item => {
        const clickHandler = item.skillId 
          ? `onclick="ScoutSearch.closeModal(); if(window.ScoutSkills) window.ScoutSkills.openModal('${item.skillId}');"`
          : (item.storyId 
              ? `onclick="ScoutSearch.closeModal(); if(window.openStoryModal) window.openStoryModal('${item.storyId}');"`
              : `onclick="ScoutSearch.closeModal();"`);

        html += `
          <a class="search-result-item" href="${item.url}" ${clickHandler}>
            <div class="search-item-head">
              <span class="search-item-badge">${item.badge}</span>
              <span class="search-item-cat">${item.category}</span>
            </div>
            <strong class="search-item-title">${item.title}</strong>
            <p class="search-item-desc">${item.desc}</p>
            <span class="search-item-action">${item.action} ↗</span>
          </a>
        `;
      });
      html += `</div>`;
      resBox.innerHTML = html;
    },

    renderQuickSuggestions: function() {
      const resBox = document.getElementById('siteSearchResults');
      if (!resBox) return;

      resBox.innerHTML = `
        <div class="search-suggestions-wrap">
          <div class="search-sugg-title">GỢI Ý TÌM KIẾM NHANH</div>
          <div class="search-pills-row">
            <button type="button" class="search-pill" onclick="ScoutSearch.fillQuery('9 tuổi')">🐺 9 tuổi (Ấu)</button>
            <button type="button" class="search-pill" onclick="ScoutSearch.fillQuery('học phí')">💰 Học phí &amp; Chi phí</button>
            <button type="button" class="search-pill" onclick="ScoutSearch.fillQuery('nút ghế')">🪢 Nút ghế đơn</button>
            <button type="button" class="search-pill" onclick="ScoutSearch.fillQuery('chủ nhật')">📅 Sáng Chủ nhật</button>
            <button type="button" class="search-pill" onclick="ScoutSearch.fillQuery('dự thính')">🌱 2 Buổi dự thính</button>
            <button type="button" class="search-pill" onclick="ScoutSearch.fillQuery('tự lập')">❤️ Nuôi con tự lập</button>
          </div>
        </div>
      `;
    },

    fillQuery: function(term) {
      const input = document.getElementById('siteSearchInput');
      if (input) {
        input.value = term;
        this.performSearch(term);
        input.focus();
      }
    }
  };

  window.openSearchModal = function() { window.ScoutSearch.openModal(); };

  // Capture-phase Global Delegated Close & Open Handler
  document.addEventListener('click', function(e) {
    // 1. Close button clicked
    const closeBtn = e.target.closest('#searchCloseBtn, .search-close-btn, [data-search-close]');
    if (closeBtn) {
      e.preventDefault();
      e.stopPropagation();
      window.ScoutSearch.closeModal(e);
      return;
    }

    // 2. Clicked on modal dark backdrop directly
    if (e.target && e.target.id === 'siteSearchModal') {
      e.preventDefault();
      e.stopPropagation();
      window.ScoutSearch.closeModal(e);
      return;
    }

    // 3. Open search button clicked
    const searchBtn = e.target.closest('.nav-search-btn, [data-search], [onclick*="ScoutSearch.openModal"]');
    if (searchBtn && !searchBtn.closest('#siteSearchModal')) {
      e.preventDefault();
      e.stopPropagation();
      window.ScoutSearch.openModal();
    }
  }, true);

  // Capture-phase Escape key handler
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
      const modal = document.getElementById('siteSearchModal');
      if (modal && (modal.classList.contains('open') || modal.style.display === 'flex')) {
        e.preventDefault();
        e.stopPropagation();
        window.ScoutSearch.closeModal(e);
      }
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      window.ScoutSearch.openModal();
    }
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      window.ScoutSearch.openModal();
    }
  }, true);

})();
