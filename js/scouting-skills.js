/**
 * Scouting Skills Knowledge System V1 - UI Controller
 * Lien Doan Huong Dao Long Bien
 */

(function () {
  let activeCategoryId = null;
  let activeSubcategory = 'all';
  let currentLevelFilter = 'all';
  let searchQuery = '';
  let activeSkillInModal = null;
  let activeModalLevel = 'thieu';

  // Slug mapping for backward compatibility with previous calls
  const SLUG_MAPPING = {
    'di-bo': 'di-bo',
    'gay-thieu-sinh': 'gay-thieu-sinh',
    'ha-than-nhiet': 'ha-than-nhiet',
    'phuong-phap-edge': 'phuong-phap-edge',
    'chuyen-hieu-pet': 'chuyen-hieu-pet',
    'nut-day': 'nut-day',
    'leu-trai': 'leu-trai',
    'tao-lua': 'tao-lua',
    'so-cuu': 'ha-than-nhiet',
    'uoc-dac': 'uoc-dac',
    'tham-du': 'tham-du'
  };

  const getSkillsForCategory = (catId) => {
    const allSkills = window.SCOUT_SKILLS_DATA || [];
    return allSkills.filter(s => s.category === catId);
  };

  const filterSkills = (skills) => {
    return skills.filter(s => {
      // Subcategory filter
      if (activeSubcategory !== 'all' && s.subcategory !== activeSubcategory) return false;
      // Level filter
      if (currentLevelFilter !== 'all' && (!s.levels || !s.levels[currentLevelFilter])) return false;
      // Search query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchTitle = s.title.toLowerCase().includes(q);
        const matchDesc = (s.shortDescription || '').toLowerCase().includes(q);
        const matchTag = (s.tags || []).some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchTag) return false;
      }
      return true;
    });
  };

  // Main Render Function
  const renderApp = () => {
    const mountEl = document.getElementById('scoutSkillsApp');
    if (!mountEl) return;

    const categories = window.SCOUT_SKILL_CATEGORIES || [];
    const secondaryAreas = window.SCOUT_SECONDARY_AREAS || [];
    const allSkills = window.SCOUT_SKILLS_DATA || [];

    // If a category is active, render the drill-down view
    if (activeCategoryId) {
      const activeCat = [...categories, ...secondaryAreas].find(c => c.id === activeCategoryId);
      if (!activeCat) {
        activeCategoryId = null;
        renderApp();
        return;
      }

      const catSkills = getSkillsForCategory(activeCategoryId);
      const filteredSkills = filterSkills(catSkills);

      // Extract unique subcategories
      const subcats = activeCat.subcategories || [];

      let subcatTabsHtml = `
        <button class="sk-subcat-pill ${activeSubcategory === 'all' ? 'active' : ''}" onclick="window.ScoutSkills.setSubcategory('all')">Tất cả (${catSkills.length})</button>
      `;
      subcats.forEach(sub => {
        const count = catSkills.filter(s => s.subcategory === sub).length;
        subcatTabsHtml += `
          <button class="sk-subcat-pill ${activeSubcategory === sub ? 'active' : ''}" onclick="window.ScoutSkills.setSubcategory('${sub}')">${sub} (${count})</button>
        `;
      });

      let skillCardsHtml = '';
      if (filteredSkills.length === 0) {
        skillCardsHtml = `
          <div style="grid-column:1/-1;text-align:center;padding:36px;color:var(--muted);background:var(--paper);border-radius:12px;">
            <div style="font-size:32px;margin-bottom:8px;">🔍</div>
            <strong>Chưa tìm thấy kỹ năng phù hợp</strong>
            <p style="font-size:13px;margin-top:4px;">Vui lòng chọn bộ lọc khác hoặc nhập từ khóa tìm kiếm.</p>
          </div>
        `;
      } else {
        filteredSkills.forEach(s => {
          skillCardsHtml += `
            <div class="sk-skill-item" onclick="window.openSkillModal('${s.slug}')">
              <div>
                <div class="sk-skill-item-head">
                  <span class="sk-skill-tag">${s.subcategory}</span>
                  <span style="font-size:12px;color:var(--muted);">${s.environment === 'outdoor' ? '🌲 Dã ngoại' : s.environment === 'indoor' ? '🏠 Trong nhà' : '⛺ Đa năng'}</span>
                </div>
                <h4 class="sk-skill-title">${s.title}</h4>
                <p class="sk-skill-desc">${s.shortDescription}</p>
                <div class="sk-skill-level-badges">
                  <span class="sk-badge-lvl ${currentLevelFilter === 'au' || currentLevelFilter === 'all' ? 'active-lvl' : ''}">Ấu: Biết</span>
                  <span class="sk-badge-lvl ${currentLevelFilter === 'thieu' || currentLevelFilter === 'all' ? 'active-lvl' : ''}">Thiếu: Làm</span>
                  <span class="sk-badge-lvl ${currentLevelFilter === 'trang' || currentLevelFilter === 'all' ? 'active-lvl' : ''}">Tráng: Dẫn</span>
                </div>
              </div>
              <span class="sk-skill-cta">Xem chi tiết &amp; Thực hành ↗</span>
            </div>
          `;
        });
      }

      mountEl.innerHTML = `
        <div class="sk-app-container">
          <div class="sk-active-view">
            <div class="sk-active-header">
              <div>
                <div class="sk-breadcrumb">
                  <button class="sk-breadcrumb-btn" onclick="window.ScoutSkills.backToCategories()">← 8 Nhóm Kỹ Năng</button>
                  <span>/</span>
                  <span>Nhóm ${activeCat.number || ''}</span>
                </div>
                <h3 class="sk-active-title">${activeCat.icon} ${activeCat.name}</h3>
              </div>
              <div class="sk-search-box">
                <span class="sk-search-icon">🔍</span>
                <input type="text" class="sk-search-input" placeholder="Tìm trong chuyên mục này..." value="${searchQuery}" oninput="window.ScoutSkills.setSearch(this.value)" />
              </div>
            </div>

            ${subcats.length > 0 ? `<div class="sk-subcat-tabs">${subcatTabsHtml}</div>` : ''}

            <div class="sk-skills-list">
              ${skillCardsHtml}
            </div>
          </div>
        </div>
      `;
      return;
    }

    // Default Overview Screen (8 Primary Categories + Level Filter + Search + 2 Secondary Areas)
    let catCardsHtml = '';
    categories.forEach(cat => {
      const skillsInCat = getSkillsForCategory(cat.id);
      catCardsHtml += `
        <div class="sk-cat-card" onclick="window.ScoutSkills.selectCategory('${cat.id}')">
          <div>
            <div class="sk-cat-head">
              <span class="sk-cat-icon">${cat.icon}</span>
              <span class="sk-cat-no">${cat.number}</span>
            </div>
            <h4 class="sk-cat-title">${cat.name}</h4>
            <p class="sk-cat-desc">${cat.desc}</p>
          </div>
          <div class="sk-cat-count">
            <span>${skillsInCat.length > 0 ? `${skillsInCat.length} Kỹ năng cơ bản` : `${cat.subcategories ? cat.subcategories.length : 0} Chuyên đề`}</span>
            <span>↗</span>
          </div>
        </div>
      `;
    });

    let secondaryCardsHtml = '';
    secondaryAreas.forEach(area => {
      const skillsInArea = getSkillsForCategory(area.id);
      secondaryCardsHtml += `
        <div class="sk-secondary-card" onclick="window.ScoutSkills.selectCategory('${area.id}')">
          <div class="sk-secondary-icon">${area.icon}</div>
          <div style="flex:1;">
            <div style="font-size:11px;font-weight:800;color:var(--fire);text-transform:uppercase;letter-spacing:.05em;">CHUYÊN ĐỀ ${area.number}</div>
            <h4 style="font-family:'Roboto Slab',serif;font-size:16px;color:var(--forest);margin:2px 0 4px;">${area.name}</h4>
            <p style="font-size:12.5px;color:var(--muted);line-height:1.5;margin:0;">${area.desc}</p>
          </div>
          <span style="font-size:12px;font-weight:700;color:var(--fire);">Xem ↗</span>
        </div>
      `;
    });

    mountEl.innerHTML = `
      <div class="sk-app-container">
        <!-- Control bar with Level filters and Search -->
        <div class="sk-controls-bar">
          <div class="sk-level-filters">
            <span class="sk-level-title">Cấp Độ:</span>
            <button class="sk-level-pill ${currentLevelFilter === 'all' ? 'active' : ''}" onclick="window.ScoutSkills.setLevelFilter('all')">Tất Cả</button>
            <button class="sk-level-pill ${currentLevelFilter === 'au' ? 'active' : ''}" onclick="window.ScoutSkills.setLevelFilter('au')">🐺 Ấu (Biết)</button>
            <button class="sk-level-pill ${currentLevelFilter === 'thieu' ? 'active' : ''}" onclick="window.ScoutSkills.setLevelFilter('thieu')">⚜️ Thiếu (Làm được)</button>
            <button class="sk-level-pill ${currentLevelFilter === 'trang' ? 'active' : ''}" onclick="window.ScoutSkills.setLevelFilter('trang')">🧭 Tráng (Dẫn được)</button>
          </div>
          <div class="sk-search-box">
            <span class="sk-search-icon">🔍</span>
            <input type="text" class="sk-search-input" placeholder="Tìm kỹ năng (nút dây, hạ thân nhiệt...)" value="${searchQuery}" oninput="window.ScoutSkills.setSearch(this.value)" />
          </div>
        </div>

        <!-- 8 Primary Categories -->
        <div class="sk-categories-grid">
          ${catCardsHtml}
        </div>

        <!-- 2 Secondary Areas -->
        <div class="sk-secondary-wrap">
          <h4 class="sk-secondary-title">🏅 Chuyên Hiệu &amp; Nghiên Cứu Huynh Trưởng</h4>
          <div class="sk-secondary-grid">
            ${secondaryCardsHtml}
          </div>
        </div>
      </div>
    `;
  };

  // Skill Detail Progressive Disclosure Template
  const renderSkillModal = (skill) => {
    const modalEl = document.getElementById('skillDetailModalV1');
    const contentEl = document.getElementById('skillDetailModalContentV1');
    if (!modalEl || !contentEl) return;

    activeSkillInModal = skill;

    // Levels mapping
    const auTarget = (skill.levels && skill.levels.au) ? (skill.levels.au.target || skill.levels.au) : '';
    const thieuTarget = (skill.levels && skill.levels.thieu) ? (skill.levels.thieu.target || skill.levels.thieu) : '';
    const trangTarget = (skill.levels && skill.levels.trang) ? (skill.levels.trang.target || skill.levels.trang) : '';

    let currentTargetText = thieuTarget;
    let currentLevelName = 'Thiếu Sinh (11–15t) — Mục Tiêu: "LÀM ĐƯỢC"';
    if (activeModalLevel === 'au') {
      currentTargetText = auTarget;
      currentLevelName = 'Sói Con Ngành Ấu (7–11t) — Mục Tiêu: "BIẾT"';
    } else if (activeModalLevel === 'trang') {
      currentTargetText = trangTarget;
      currentLevelName = 'Tráng Sinh & Huynh Trưởng (18+t) — Mục Tiêu: "DẪN ĐƯỢC"';
    }

    // Steps list
    let stepsHtml = '';
    (skill.steps || []).forEach(step => {
      stepsHtml += `<li>${step}</li>`;
    });

    // Equipment list
    let equipHtml = '';
    (skill.equipment || []).forEach(eq => {
      equipHtml += `<li>✓ ${eq}</li>`;
    });

    // Mistakes list
    let mistakesHtml = '';
    (skill.commonMistakes || []).forEach(m => {
      mistakesHtml += `<li>⚠️ ${m}</li>`;
    });

    // Media / Poster
    let mediaHtml = '';
    if (skill.media && skill.media.poster) {
      mediaHtml += `
        <div class="sk-media-box">
          <a href="${skill.media.poster}" target="_blank" title="Bấm để xem ảnh gốc khổ lớn">
            <img src="${skill.media.poster}" alt="${skill.title}" />
          </a>
          <div class="sk-media-hint">🔍 <em>Bấm vào ảnh trên để mở xem ảnh Infographic gốc Full HD trong tab mới</em></div>
        </div>
      `;
    }

    contentEl.innerHTML = `
      <div class="sk-detail-header">
        <div class="sk-detail-eyebrow">
          <span>${skill.category.toUpperCase()}</span>
          <span>·</span>
          <span>${skill.subcategory}</span>
        </div>
        <h2 class="sk-detail-title">${skill.title}</h2>
        <p class="sk-detail-desc">${skill.purpose || skill.shortDescription}</p>
      </div>

      ${mediaHtml}

      <!-- 3-Level Interactive Switcher -->
      <div class="sk-level-selector">
        <button class="sk-level-tab ${activeModalLevel === 'au' ? 'active' : ''}" onclick="window.ScoutSkills.setModalLevel('au')">
          <strong>🐺 Cấp Ấu</strong>
          <small>BIẾT &amp; Hiểu</small>
        </button>
        <button class="sk-level-tab ${activeModalLevel === 'thieu' ? 'active' : ''}" onclick="window.ScoutSkills.setModalLevel('thieu')">
          <strong>⚜️ Cấp Thiếu</strong>
          <small>LÀM ĐƯỢC Độc Lập</small>
        </button>
        <button class="sk-level-tab ${activeModalLevel === 'trang' ? 'active' : ''}" onclick="window.ScoutSkills.setModalLevel('trang')">
          <strong>🧭 Cấp Tráng</strong>
          <small>DẪN ĐƯỢC Đàn Em</small>
        </button>
      </div>

      <!-- Level Target Box -->
      <div class="sk-level-target-box">
        <span class="icon">🎯</span>
        <div>
          <strong>${currentLevelName}</strong>
          <p>${currentTargetText || 'Thực hành theo hướng dẫn của Huynh trưởng tại buổi sinh hoạt.'}</p>
        </div>
      </div>

      <!-- Progressive Disclosure Accordions -->
      ${skill.equipment && skill.equipment.length > 0 ? `
        <div class="sk-accordion open" id="accEquip">
          <button class="sk-accordion-header" type="button" onclick="window.ScoutSkills.toggleAccordion('accEquip')">
            <span>🎒 Dụng Cụ Cần Chuẩn Bị (${skill.equipment.length})</span>
            <span class="sk-accordion-icon">▼</span>
          </button>
          <div class="sk-accordion-body">
            <ul class="sk-equip-grid">${equipHtml}</ul>
          </div>
        </div>
      ` : ''}

      ${skill.steps && skill.steps.length > 0 ? `
        <div class="sk-accordion open" id="accSteps">
          <button class="sk-accordion-header" type="button" onclick="window.ScoutSkills.toggleAccordion('accSteps')">
            <span>📋 Hướng Dẫn Từng Bước Thực Hành</span>
            <span class="sk-accordion-icon">▼</span>
          </button>
          <div class="sk-accordion-body">
            <ol class="sk-steps-list">${stepsHtml}</ol>
          </div>
        </div>
      ` : ''}

      ${skill.safety || (skill.commonMistakes && skill.commonMistakes.length > 0) ? `
        <div class="sk-accordion" id="accSafety">
          <button class="sk-accordion-header" type="button" onclick="window.ScoutSkills.toggleAccordion('accSafety')">
            <span>⚠️ Cảnh Báo An Toàn &amp; Lỗi Thường Gặp</span>
            <span class="sk-accordion-icon">▼</span>
          </button>
          <div class="sk-accordion-body">
            ${skill.safety ? `<p style="margin-bottom:12px;"><strong>🚨 An toàn:</strong> ${skill.safety}</p>` : ''}
            ${skill.commonMistakes ? `<ul style="list-style:none;padding:0;margin:0;">${mistakesHtml}</ul>` : ''}
          </div>
        </div>
      ` : ''}

      ${skill.practice || skill.challenge ? `
        <div class="sk-accordion" id="accPractice">
          <button class="sk-accordion-header" type="button" onclick="window.ScoutSkills.toggleAccordion('accPractice')">
            <span>💪 Bài Tập Thực Hành &amp; Thử Thách</span>
            <span class="sk-accordion-icon">▼</span>
          </button>
          <div class="sk-accordion-body">
            ${skill.practice ? `<p><strong>Bài tập:</strong> ${skill.practice}</p>` : ''}
            ${skill.challenge ? `<p style="margin-top:8px;"><strong>🏆 Thử thách:</strong> ${skill.challenge}</p>` : ''}
          </div>
        </div>
      ` : ''}

      <!-- Assessment Checklist -->
      ${skill.assessment ? `
        <div class="sk-assessment-box">
          <strong>✅ “BẠN ĐẠT KHI…”</strong>
          <p>${skill.assessment}</p>
        </div>
      ` : ''}
    `;

    modalEl.classList.add('sk-open');
    document.body.style.overflow = 'hidden';
  };

  // Public Interface attached to window.ScoutSkills
  window.ScoutSkills = {
    init: () => {
      renderApp();
    },
    selectCategory: (catId) => {
      activeCategoryId = catId;
      activeSubcategory = 'all';
      renderApp();
    },
    backToCategories: () => {
      activeCategoryId = null;
      activeSubcategory = 'all';
      renderApp();
    },
    setSubcategory: (sub) => {
      activeSubcategory = sub;
      renderApp();
    },
    setLevelFilter: (lvl) => {
      currentLevelFilter = lvl;
      renderApp();
    },
    setSearch: (q) => {
      searchQuery = q;
      renderApp();
    },
    setModalLevel: (lvl) => {
      activeModalLevel = lvl;
      if (activeSkillInModal) renderSkillModal(activeSkillInModal);
    },
    toggleAccordion: (id) => {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('open');
    },
    closeModal: () => {
      const modalEl = document.getElementById('skillDetailModalV1');
      if (modalEl) modalEl.classList.remove('sk-open');
      document.body.style.overflow = '';
      activeSkillInModal = null;
    }
  };

  // Universal openSkillModal for backward compatibility
  window.openSkillModal = (slugOrKey) => {
    const targetSlug = SLUG_MAPPING[slugOrKey] || slugOrKey;
    const allSkills = window.SCOUT_SKILLS_DATA || [];
    const foundSkill = allSkills.find(s => s.slug === targetSlug || s.id === targetSlug);

    if (foundSkill) {
      renderSkillModal(foundSkill);
    } else {
      console.warn('Skill not found for slug:', slugOrKey);
    }
  };

  window.closeSkillModal = () => {
    window.ScoutSkills.closeModal();
  };

  // Listeners
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.ScoutSkills.closeModal();
    }
  });

  // Auto init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.ScoutSkills.init);
  } else {
    window.ScoutSkills.init();
  }
})();
