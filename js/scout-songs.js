/**
 * CONTROLLER: KHO TÀNG BÀI HÁT HƯỚNG ĐẠO
 * Liên đoàn Hướng đạo Long Biên
 * 
 * Đảm bảo: Lời chuẩn xác 100%, phi tôn giáo, giao diện trang nhã, hỗ trợ sao chép và in ấn sinh hoạt.
 */

(function() {
  'use strict';

  var DEFAULT_VISIBLE_COUNT = 3;
  var currentCategory = 'all';
  var isExpanded = false;
  var activeSong = null;

  function initScoutSongs() {
    var grid = document.getElementById('scoutSongsGrid');
    if (!grid || !window.SCOUT_SONGS_DATA) return;
    renderSongs();
  }

  function getFilteredSongs() {
    var data = window.SCOUT_SONGS_DATA || [];
    if (currentCategory === 'all') return data;
    if (currentCategory === 'has-sheet') {
      return data.filter(function(s) { return !!s.hasSheetMusic; });
    }
    return data.filter(function(s) { return s.category === currentCategory; });
  }

  function renderSongs() {
    var grid = document.getElementById('scoutSongsGrid');
    var expandBar = document.getElementById('scoutSongsExpandBar');
    if (!grid) return;

    var songs = getFilteredSongs();
    var visibleSongs = isExpanded ? songs : songs.slice(0, DEFAULT_VISIBLE_COUNT);

    if (songs.length === 0) {
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted);font-size:14px;">Chưa có bài hát phù hợp với bộ lọc này.</div>';
      if (expandBar) expandBar.innerHTML = '';
      return;
    }

    grid.innerHTML = visibleSongs.map(function(song) {
      return `
        <div class="song-card-v2" onclick="window.ScoutSongs.openModal('${song.id}')" role="button" tabindex="0" aria-label="${song.title}">
          <div class="song-card-header">
            <span class="song-category-pill">${song.categoryIcon} ${song.categoryName}</span>
            <span class="song-tempo-badge">${song.tempo}</span>
          </div>

          <h3 class="song-v2-title">${song.title}</h3>
          <div class="song-v2-author">Tác giả: <strong>${song.author}</strong></div>

          <div class="song-v2-lyrics-preview">
            "${song.shortExcerpt}"
          </div>

          <div class="song-card-footer">
            <div class="song-guide-snippet">
              <small>💡 <em>${song.whenToSing}</em></small>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
              <span class="song-open-link">Xem chi tiết lời &amp; ký âm ➔</span>
              <span style="font-size:11.5px;color:var(--forest);font-weight:700;">🎼 Bản ký âm</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Render Expand/Collapse Button
    if (expandBar) {
      if (songs.length > DEFAULT_VISIBLE_COUNT) {
        var hiddenCount = songs.length - DEFAULT_VISIBLE_COUNT;
        expandBar.innerHTML = `
          <button class="song-expand-btn" onclick="window.ScoutSongs.toggleExpand()">
            ${isExpanded ? '▴ Thu gọn danh sách bài hát' : '▾ Xem thêm bài hát sinh hoạt (' + hiddenCount + ' bài khác)'}
          </button>
        `;
      } else {
        expandBar.innerHTML = '';
      }
    }
  }

  function filter(category, btnElem) {
    currentCategory = category;
    isExpanded = false;

    var filterBtns = document.querySelectorAll('.song-filter-btn');
    filterBtns.forEach(function(b) { b.classList.remove('active'); });
    if (btnElem) btnElem.classList.add('active');

    renderSongs();
  }

  function toggleExpand() {
    isExpanded = !isExpanded;
    renderSongs();
  }

  function openModal(songId) {
    var songs = window.SCOUT_SONGS_DATA || [];
    activeSong = songs.find(function(s) { return s.id === songId; });
    if (!activeSong) return;

    var modal = document.getElementById('scoutSongDetailModal');
    if (!modal) return;

    document.getElementById('songModalTitle').textContent = activeSong.title;
    document.getElementById('songModalAuthor').textContent = 'Tác giả: ' + activeSong.author + ' · ' + activeSong.tempo;
    document.getElementById('songModalCategory').textContent = activeSong.categoryIcon + ' ' + activeSong.categoryName;

    // Render Lyrics Tab
    var lyricsHtml = `
      <div style="background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:20px;margin-bottom:16px;">
        <pre style="font-family:'Be Vietnam Pro',system-ui,sans-serif;font-size:15px;line-height:1.8;color:var(--forest);margin:0;white-space:pre-wrap;word-break:break-word;font-weight:500;">${activeSong.lyrics}</pre>
      </div>
    `;
    document.getElementById('songModalLyrics').innerHTML = lyricsHtml;

    // Render Sheet / Notation Tab
    var sheetHtml = `
      <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:16px;">
        <h4 style="margin:0 0 10px 0;color:var(--forest);font-size:16px;">🎼 Ký Xướng Âm &amp; Bắt Nhịp:</h4>
        <div style="background:#0f172a;color:#38bdf8;padding:14px;border-radius:8px;font-family:monospace;font-size:14.5px;line-height:1.6;margin-bottom:14px;">
          ${activeSong.sheetNotes}
        </div>
        <p style="font-size:13.5px;color:var(--muted);margin:0;line-height:1.5;">
          * Hướng dẫn: Huynh trưởng xướng âm mẫu 1-2 câu đầu để cả vòng tròn cùng bắt nhịp đồng thanh.
        </p>
      </div>
    `;
    document.getElementById('songModalSheet').innerHTML = sheetHtml;

    // Render Guide Tab
    var guideHtml = `
      <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:20px;">
        <h4 style="margin:0 0 10px 0;color:var(--forest);font-size:16px;">💡 Hoàn Cảnh Hát &amp; Ý Nghĩa Giáo Dục:</h4>
        <p style="font-size:14px;color:var(--ink);line-height:1.6;margin-bottom:14px;">
          <strong>Hoàn cảnh:</strong> ${activeSong.whenToSing}
        </p>
        <p style="font-size:14px;color:var(--ink);line-height:1.6;margin-bottom:14px;">
          <strong>Ý nghĩa:</strong> ${activeSong.description}
        </p>
        <div style="background:var(--paper);padding:14px;border-radius:10px;border-left:4px solid var(--forest);">
          <strong style="color:var(--forest);font-size:13.5px;display:block;margin-bottom:4px;">👏 Hướng dẫn cử điệu &amp; vỗ tay:</strong>
          <span style="font-size:13px;color:var(--muted);">${activeSong.actionsGuide}</span>
        </div>
      </div>
    `;
    document.getElementById('songModalGuide').innerHTML = guideHtml;

    switchTab('lyrics');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    var modal = document.getElementById('scoutSongDetailModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function switchTab(tabName) {
    var tabBtns = document.querySelectorAll('.song-modal-tab-btn');
    var tabContents = document.querySelectorAll('.song-modal-tab-content');

    tabBtns.forEach(function(btn) {
      if (btn.getAttribute('data-tab') === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    tabContents.forEach(function(content) {
      if (content.getAttribute('data-content') === tabName) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  }

  function copyLyrics() {
    if (!activeSong) return;
    var textToCopy = activeSong.title + '\nTác giả: ' + activeSong.author + '\n\n' + activeSong.lyrics;
    navigator.clipboard.writeText(textToCopy).then(function() {
      alert('Đã sao chép lời bài hát "' + activeSong.title + '" vào bộ nhớ tạm!');
    }).catch(function() {
      alert('Vui lòng chọn và sao chép thủ công.');
    });
  }

  window.ScoutSongs = {
    init: initScoutSongs,
    filter: filter,
    toggleExpand: toggleExpand,
    openModal: openModal,
    closeModal: closeModal,
    switchTab: switchTab,
    copyLyrics: copyLyrics
  };

  document.addEventListener('DOMContentLoaded', initScoutSongs);
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initScoutSongs();
  }
})();
