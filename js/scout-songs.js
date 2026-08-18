/**
 * SCOUT SONGS CONTROLLER & WEB AUDIO SYNTHESIZER
 * Liên đoàn Hướng đạo Long Biên
 */
(function() {
  'use strict';

  let currentFilter = 'all';
  let isExpanded = false;
  let audioCtx = null;
  let activeOscillators = [];
  let isPlayingMelody = false;
  let activeSongId = null;

  // Initialize Web Audio Context on user interaction
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Note frequency map (in Hz)
  const NOTE_FREQS = {
    "C4": 261.63, "D4": 293.66, "E4": 329.63, "F4": 349.23, "G4": 392.00, "A4": 440.00, "B4": 493.88,
    "C5": 523.25, "D5": 587.33, "E5": 659.25, "F5": 698.46, "G5": 783.99, "A5": 880.00, "B5": 987.77,
    "C6": 1046.50
  };

  function playTone(freq, duration, startTime) {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle'; // Warm, flute-like scout tone
    osc.frequency.setValueAtTime(freq, startTime);

    // Envelope for natural acoustic sound
    gain.gain.setValueAtTime(0.01, startTime);
    gain.gain.exponentialRampToValueAtTime(0.3, startTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration - 0.02);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
    activeOscillators.push(osc);
  }

  function stopAllAudio() {
    isPlayingMelody = false;
    if (activeOscillators.length > 0) {
      activeOscillators.forEach(osc => {
        try { osc.stop(); } catch(e) {}
      });
      activeOscillators = [];
    }
    const playBtn = document.getElementById('songMelodyPlayBtn');
    if (playBtn) {
      playBtn.innerHTML = '▶️ Phát Giai Điệu';
      playBtn.classList.remove('playing');
    }
    const wave = document.getElementById('songAudioWave');
    if (wave) wave.classList.remove('active');
  }

  function playSongMelody(song) {
    if (isPlayingMelody) {
      stopAllAudio();
      return;
    }

    if (!song || !song.audioMelodyNotes || song.audioMelodyNotes.length === 0) {
      alert("Bài hát này hiện chưa có bản nốt giai điệu tự động.");
      return;
    }

    const ctx = getAudioContext();
    stopAllAudio();
    isPlayingMelody = true;

    const playBtn = document.getElementById('songMelodyPlayBtn');
    if (playBtn) {
      playBtn.innerHTML = '⏸️ Tạm Dừng Giai Điệu';
      playBtn.classList.add('playing');
    }
    const wave = document.getElementById('songAudioWave');
    if (wave) wave.classList.add('active');

    let curTime = ctx.currentTime + 0.1;
    song.audioMelodyNotes.forEach(item => {
      const freq = NOTE_FREQS[item.note] || 440;
      playTone(freq, item.dur, curTime);
      curTime += item.dur;
    });

    const totalDuration = (curTime - ctx.currentTime) * 1000;
    setTimeout(() => {
      if (isPlayingMelody) {
        stopAllAudio();
      }
    }, totalDuration);
  }

  // Render songs grid with filter & expand limit
  function renderSongs() {
    const container = document.getElementById('scoutSongsGrid');
    if (!container) return;

    const allSongs = window.SCOUT_SONGS_DATA || [];
    const filtered = allSongs.filter(s => {
      if (currentFilter === 'all') return true;
      if (currentFilter === 'has-sheet') return s.hasSheetMusic;
      return s.category === currentFilter;
    });

    const displayCount = isExpanded ? filtered.length : Math.min(3, filtered.length);
    const visibleSongs = filtered.slice(0, displayCount);

    let html = '';
    visibleSongs.forEach(song => {
      html += `
        <div class="song-card song-card-v2" onclick="window.ScoutSongs.openModal('${song.id}')">
          <div class="song-card-header">
            <span class="song-category-pill">${song.categoryIcon} ${song.categoryName}</span>
            <span class="song-tempo-badge">${song.tempo.split('(')[0].trim()}</span>
          </div>
          <div class="song-card-body">
            <h3 class="song-v2-title">🎵 ${song.title}</h3>
            <div class="song-v2-author">Tác giả: <strong>${song.author}</strong></div>
            <div class="song-v2-lyrics-preview">"${song.shortExcerpt}"</div>
          </div>
          <div class="song-card-footer">
            <div class="song-tags-list">
              <span class="song-micro-tag">📜 Lời đầy đủ</span>
              <span class="song-micro-tag">🎼 Bản ký âm</span>
              <span class="song-micro-tag">🎵 Giai điệu</span>
            </div>
            <button class="song-open-btn" aria-label="Xem bài hát ${song.title}">Hát &amp; Nghe nhạc ↗</button>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    // Handle expand/collapse button
    const expandContainer = document.getElementById('scoutSongsExpandBar');
    if (expandContainer) {
      if (filtered.length > 3) {
        expandContainer.style.display = 'block';
        expandContainer.innerHTML = `
          <button class="song-expand-btn" onclick="window.ScoutSongs.toggleExpand()">
            ${isExpanded 
              ? `Thu gọn danh sách (Hiện 3/${filtered.length} bài) ▴` 
              : `Xem thêm bài hát Hướng đạo (${filtered.length - 3} bài khác) ▾`}
          </button>
        `;
      } else {
        expandContainer.style.display = 'none';
      }
    }
  }

  function filterSongs(filterKey, btnElement) {
    currentFilter = filterKey;
    isExpanded = false; // Reset to 3 on filter switch

    // Update active button state
    const bar = document.getElementById('songFilterBar');
    if (bar) {
      bar.querySelectorAll('.song-filter-btn').forEach(b => b.classList.remove('active'));
    }
    if (btnElement) {
      btnElement.classList.add('active');
    }

    renderSongs();
  }

  function toggleExpand() {
    isExpanded = !isExpanded;
    renderSongs();
  }

  function openSongModal(songId) {
    const allSongs = window.SCOUT_SONGS_DATA || [];
    const song = allSongs.find(s => s.id === songId);
    if (!song) return;

    activeSongId = songId;
    stopAllAudio();

    const modal = document.getElementById('scoutSongDetailModal');
    if (!modal) return;

    // Fill Content
    document.getElementById('songModalTitle').innerText = song.title;
    document.getElementById('songModalCategory').innerText = `${song.categoryIcon} ${song.categoryName}`;
    document.getElementById('songModalAuthor').innerText = `Tác giả: ${song.author} · Điệu thức: ${song.tempo}`;
    
    // Lyrics Tab
    document.getElementById('songModalLyrics').innerHTML = `
      <div class="song-lyrics-formatted">${song.lyrics.replace(/\n/g, '<br>')}</div>
    `;

    // Sheet Tab
    document.getElementById('songModalSheet').innerHTML = `
      <div class="song-sheet-box">
        <div class="song-sheet-header">
          <strong>🎼 Ký xướng âm &amp; Nốt giai điệu</strong>
          <span class="sheet-badge">Nhịp: ${song.tempo}</span>
        </div>
        <div class="song-sheet-notation">${song.sheetNotes}</div>
        <div class="song-sheet-stave">
          <div class="musical-clef">𝄞</div>
          <div class="musical-notes-visual">
            <span class="m-note note-1">𝅘𝅥</span>
            <span class="m-note note-2">𝅘𝅥</span>
            <span class="m-note note-3">𝅘𝅥</span>
            <span class="m-note note-4">𝅘𝅥</span>
            <span class="m-note note-5">𝅘𝅥</span>
            <span class="m-note note-6">𝅘𝅥</span>
            <span class="m-note note-7">𝅘𝅥</span>
            <span class="m-note note-8">𝅘𝅥</span>
          </div>
        </div>
        <p style="font-size:13px;color:var(--muted);margin-top:10px;">* Huynh trưởng và đội sinh có thể nhìn nốt nhạc xướng âm mẫu để bắt nhịp chuẩn cho toàn đội.</p>
      </div>
    `;

    // Guide Tab
    document.getElementById('songModalGuide').innerHTML = `
      <div class="song-guide-box">
        <div class="guide-item">
          <strong>⏱️ Khi nào cất tiếng hát:</strong>
          <p>${song.whenToSing}</p>
        </div>
        <div class="guide-item">
          <strong>📖 Ý nghĩa giáo dục &amp; Tinh thần:</strong>
          <p>${song.description}</p>
        </div>
        <div class="guide-item">
          <strong>👏 Cử điệu &amp; Động tác kèm theo:</strong>
          <p>${song.actionsGuide}</p>
        </div>
      </div>
    `;

    // Set default tab to lyrics
    switchSongModalTab('lyrics');

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSongModal() {
    stopAllAudio();
    const modal = document.getElementById('scoutSongDetailModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function switchSongModalTab(tabName) {
    const tabs = document.querySelectorAll('.song-modal-tab-btn');
    const contents = document.querySelectorAll('.song-modal-tab-content');

    tabs.forEach(t => {
      if (t.getAttribute('data-tab') === tabName) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    contents.forEach(c => {
      if (c.getAttribute('data-content') === tabName) {
        c.style.display = 'block';
      } else {
        c.style.display = 'none';
      }
    });
  }

  function playActiveSongMelody() {
    const allSongs = window.SCOUT_SONGS_DATA || [];
    const song = allSongs.find(s => s.id === activeSongId);
    if (song) {
      playSongMelody(song);
    }
  }

  // Public API
  window.ScoutSongs = {
    init: function() {
      renderSongs();
    },
    filter: filterSongs,
    toggleExpand: toggleExpand,
    openModal: openSongModal,
    closeModal: closeSongModal,
    switchTab: switchSongModalTab,
    playActiveMelody: playActiveSongMelody,
    stopAudio: stopAllAudio
  };

  // Auto init when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.ScoutSongs.init);
  } else {
    window.ScoutSongs.init();
  }
})();
