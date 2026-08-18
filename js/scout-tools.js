/**
 * INTERACTIVE SCOUT TOOLS
 * Liên đoàn Hướng đạo Long Biên
 * Includes: Morse Synthesizer & Translator, Scout Whistle Simulator, Cipher Studio.
 */
(function() {
  'use strict';

  let audioCtx = null;
  let activeToolOsc = [];

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

  // Morse Map
  const MORSE_MAP = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    ' ': '/'
  };

  const REVERSE_MORSE_MAP = {};
  for (let k in MORSE_MAP) {
    REVERSE_MORSE_MAP[MORSE_MAP[k]] = k;
  }

  // Whistle Signals Map
  const WHISTLE_SIGNALS = {
    'sos': { name: '🚨 Tín hiệu Cấp Cứu (SOS)', pattern: [0.15, 0.1, 0.15, 0.1, 0.15, 0.3, 0.45, 0.1, 0.45, 0.1, 0.45, 0.3, 0.15, 0.1, 0.15, 0.1, 0.15], desc: 'Dùng khi gặp nguy hiểm tính mạng cần trợ giúp khẩn cấp.' },
    'attention': { name: '⚠️ Lệnh Chú Ý / Im Lặng', pattern: [0.8], desc: 'Một tiếng còi dài: Toàn trại lập tức dừng mọi việc, im lặng và hướng mắt về phía Huynh trưởng.' },
    'gather_fast': { name: '🏃 Lệnh Tập Hợp Khẩn Cấp', pattern: [0.2, 0.1, 0.2, 0.1, 0.2], desc: 'Ba tiếng ngắn: Mọi đoàn sinh chạy thật nhanh về vị trí tập hợp.' },
    'circle': { name: '⭕ Tập Hợp Vòng Tròn / Chữ U', pattern: [0.2, 0.1, 0.2, 0.1, 0.6], desc: 'Hai ngắn một dài (.. -): Đội hình tập hợp xếp thành vòng tròn hoặc chữ U quanh cờ.' },
    'column': { name: '📏 Tập Hợp Hàng Dọc', pattern: [0.6, 0.1, 0.2], desc: 'Một dài một ngắn (- .): Tập hợp thành các hàng dọc theo từng Đội.' }
  };

  // Play a shrill scout whistle burst
  function playWhistleSound(pattern, onFinish) {
    const ctx = getAudioContext();
    let curTime = ctx.currentTime + 0.05;

    for (let i = 0; i < pattern.length; i++) {
      const dur = pattern[i];
      if (i % 2 === 0) {
        // Sound burst
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        // High frequency dual-tone whistle (2600 Hz + modulation)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2650, curTime);
        osc.frequency.exponentialRampToValueAtTime(2800, curTime + dur * 0.5);

        gain.gain.setValueAtTime(0.01, curTime);
        gain.gain.linearRampToValueAtTime(0.4, curTime + 0.02);
        gain.gain.linearRampToValueAtTime(0.01, curTime + dur - 0.02);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(curTime);
        osc.stop(curTime + dur);
        activeToolOsc.push(osc);
      }
      curTime += dur;
    }

    const totalMs = (curTime - ctx.currentTime) * 1000;
    setTimeout(() => {
      if (onFinish) onFinish();
    }, totalMs);
  }

  // Play Morse tone (800Hz)
  function playMorseAudio(morseStr, onFinish) {
    const ctx = getAudioContext();
    const dotDuration = 0.08; // 80ms dot
    const dashDuration = dotDuration * 3;
    const elementSpace = dotDuration;
    const letterSpace = dotDuration * 3;
    const wordSpace = dotDuration * 7;

    let curTime = ctx.currentTime + 0.05;

    for (let i = 0; i < morseStr.length; i++) {
      const char = morseStr[i];
      if (char === '.') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, curTime);

        gain.gain.setValueAtTime(0.01, curTime);
        gain.gain.linearRampToValueAtTime(0.3, curTime + 0.01);
        gain.gain.linearRampToValueAtTime(0.01, curTime + dotDuration - 0.01);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(curTime);
        osc.stop(curTime + dotDuration);
        curTime += dotDuration + elementSpace;
      } else if (char === '-') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, curTime);

        gain.gain.setValueAtTime(0.01, curTime);
        gain.gain.linearRampToValueAtTime(0.3, curTime + 0.01);
        gain.gain.linearRampToValueAtTime(0.01, curTime + dashDuration - 0.01);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(curTime);
        osc.stop(curTime + dashDuration);
        curTime += dashDuration + elementSpace;
      } else if (char === ' ') {
        curTime += letterSpace;
      } else if (char === '/') {
        curTime += wordSpace;
      }
    }

    const totalMs = (curTime - ctx.currentTime) * 1000;
    setTimeout(() => {
      if (onFinish) onFinish();
    }, totalMs);
  }

  // Remove Vietnamese Diacritics
  function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
  }

  // Morse Translate
  function textToMorse(text) {
    const clean = removeVietnameseTones(text).toUpperCase();
    let morse = [];
    for (let char of clean) {
      if (MORSE_MAP[char]) {
        morse.push(MORSE_MAP[char]);
      }
    }
    return morse.join(' ');
  }

  function morseToText(morse) {
    const words = morse.trim().split('/');
    let text = [];
    for (let w of words) {
      const letters = w.trim().split(/\s+/);
      let wordChars = [];
      for (let l of letters) {
        if (REVERSE_MORSE_MAP[l]) {
          wordChars.push(REVERSE_MORSE_MAP[l]);
        }
      }
      text.push(wordChars.join(''));
    }
    return text.join(' ');
  }

  // Caesar Shift
  function caesarCipher(text, shift) {
    const clean = removeVietnameseTones(text).toUpperCase();
    let res = '';
    for (let i = 0; i < clean.length; i++) {
      let code = clean.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        res += String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else {
        res += clean[i];
      }
    }
    return res;
  }

  // Polybius Coordinates 5x5
  const POLYBIUS_GRID = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'K'], // I/J merge
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']
  ];

  function textToPolybius(text) {
    const clean = removeVietnameseTones(text).toUpperCase().replace(/J/g, 'I');
    let coords = [];
    for (let char of clean) {
      let found = false;
      for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
          if (POLYBIUS_GRID[r][c] === char) {
            coords.push(`${r + 1}${c + 1}`);
            found = true;
            break;
          }
        }
        if (found) break;
      }
      if (!found && char === ' ') coords.push('/');
    }
    return coords.join(' ');
  }

  // Public Interface
  window.ScoutTools = {
    playWhistle: function(signalKey, btnElement) {
      const sig = WHISTLE_SIGNALS[signalKey];
      if (!sig) return;

      if (btnElement) {
        btnElement.classList.add('playing-whistle');
        btnElement.disabled = true;
      }

      playWhistleSound(sig.pattern, () => {
        if (btnElement) {
          btnElement.classList.remove('playing-whistle');
          btnElement.disabled = false;
        }
      });
    },

    translateToMorse: function() {
      const input = document.getElementById('morseTextInput');
      const output = document.getElementById('morseCodeOutput');
      if (input && output) {
        output.innerText = textToMorse(input.value) || '... --- ...';
      }
    },

    playCurrentMorse: function(btnElement) {
      const output = document.getElementById('morseCodeOutput');
      if (!output) return;
      const code = output.innerText.trim();
      if (!code) return;

      if (btnElement) {
        btnElement.classList.add('playing-morse');
        btnElement.innerText = '🔊 Đang phát âm thanh...';
      }

      playMorseAudio(code, () => {
        if (btnElement) {
          btnElement.classList.remove('playing-morse');
          btnElement.innerText = '▶️ Phát Âm Thanh Morse';
        }
      });
    },

    encodeCaesar: function() {
      const input = document.getElementById('cipherTextInput');
      const shift = parseInt(document.getElementById('caesarShiftVal')?.value || 3, 10);
      const output = document.getElementById('cipherResultOutput');
      if (input && output) {
        output.innerText = caesarCipher(input.value, shift);
      }
    },

    encodePolybius: function() {
      const input = document.getElementById('cipherTextInput');
      const output = document.getElementById('cipherResultOutput');
      if (input && output) {
        output.innerText = textToPolybius(input.value);
      }
    },

    openToolsModal: function(tabName) {
      const modal = document.getElementById('scoutToolsModal');
      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (tabName) window.ScoutTools.switchTab(tabName);
      }
    },

    closeToolsModal: function() {
      const modal = document.getElementById('scoutToolsModal');
      if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    },

    switchTab: function(tabName) {
      const tabs = document.querySelectorAll('.tool-modal-tab-btn');
      const panels = document.querySelectorAll('.tool-modal-panel');

      tabs.forEach(t => {
        if (t.getAttribute('data-tool-tab') === tabName) {
          t.classList.add('active');
        } else {
          t.classList.remove('active');
        }
      });

      panels.forEach(p => {
        if (p.getAttribute('data-tool-panel') === tabName) {
          p.style.display = 'block';
        } else {
          p.style.display = 'none';
        }
      });
    }
  };
})();
