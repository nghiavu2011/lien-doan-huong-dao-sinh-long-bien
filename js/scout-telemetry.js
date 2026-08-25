/**
 * SCOUT TELEMETRY & AUTO ANALYTICS ENGINE
 * Automatic Visitor Tracking, Traffic Source Attribution, Conversion Logging & Admin Dashboard
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'scout_analytics_db_v1';
  const SESSION_KEY = 'scout_session_id';
  const urlParams = new URLSearchParams(window.location.search);

  // 1. Initialize or Retrieve Local Analytics Database
  function getDB() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {}
    return {
      totalVisits: 0,
      uniqueVisitors: {},
      sources: { facebook: 0, zalo: 0, google_search: 0, direct: 0, other: 0 },
      conversions: { registration_clicks: 0, zalo_leads: 0, facebook_visits: 0, search_queries: 0, history_views: 0 },
      devices: { mobile: 0, desktop: 0, tablet: 0 },
      searchTerms: {},
      recentLogs: []
    };
  }

  function saveDB(db) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch (e) {}
  }

  // 2. Identify Device Type
  function getDeviceType() {
    const w = window.innerWidth;
    if (w <= 768) return 'mobile';
    if (w <= 1024) return 'tablet';
    return 'desktop';
  }

  // 3. Identify Traffic Source from URL / Referrer
  function detectSource() {
    const utmSource = (urlParams.get('utm_source') || '').toLowerCase();
    const fbclid = urlParams.get('fbclid');
    const ref = (document.referrer || '').toLowerCase();

    if (utmSource.includes('facebook') || fbclid || ref.includes('facebook.com') || ref.includes('fb.me')) {
      return 'facebook';
    }
    if (utmSource.includes('zalo') || ref.includes('zalo.me')) {
      return 'zalo';
    }
    if (utmSource.includes('google') || ref.includes('google.com') || ref.includes('google.com.vn')) {
      return 'google_search';
    }
    if (ref && !ref.includes(window.location.hostname)) {
      return 'other';
    }
    return 'direct';
  }

  // 4. Session Identification & Hit Tracking
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  const isNewSession = !sessionId;
  if (isNewSession) {
    sessionId = 's_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }

  const db = getDB();
  const source = detectSource();
  const device = getDeviceType();

  if (isNewSession) {
    db.totalVisits++;
    db.sources[source] = (db.sources[source] || 0) + 1;
    db.devices[device] = (db.devices[device] || 0) + 1;

    // Add log
    db.recentLogs.unshift({
      type: 'visit',
      source: source,
      device: device,
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }),
      path: window.location.hash || '#home'
    });
    if (db.recentLogs.length > 50) db.recentLogs.pop();
    saveDB(db);
  }

  // 5. Global Log Event Function
  window.logScoutAnalyticsEvent = function(category, detail) {
    const currentDb = getDB();
    if (!currentDb.conversions[category]) {
      currentDb.conversions[category] = 0;
    }
    currentDb.conversions[category]++;

    if (category === 'search_queries' && detail) {
      currentDb.searchTerms[detail] = (currentDb.searchTerms[detail] || 0) + 1;
    }

    currentDb.recentLogs.unshift({
      type: 'event',
      category: category,
      detail: detail || '',
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })
    });
    if (currentDb.recentLogs.length > 50) currentDb.recentLogs.pop();
    saveDB(currentDb);

    // Also forward to Google Analytics gtag if available
    if (typeof window.gtag === 'function') {
      window.gtag('event', category, { event_label: detail, source: source });
    }
  };

  // 6. Interactive Analytics Dashboard Modal Controller
  window.openScoutAnalyticsModal = function() {
    let modal = document.getElementById('scoutAnalyticsDashboardModal');
    if (!modal) {
      createAnalyticsModalDOM();
      modal = document.getElementById('scoutAnalyticsDashboardModal');
    }
    renderAnalyticsData();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  window.closeScoutAnalyticsModal = function() {
    const modal = document.getElementById('scoutAnalyticsDashboardModal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  window.clearScoutAnalyticsData = function() {
    if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ số liệu thống kê về 0?')) {
      localStorage.removeItem(STORAGE_KEY);
      renderAnalyticsData();
    }
  };

  function createAnalyticsModalDOM() {
    if (document.getElementById('scoutAnalyticsDashboardModal')) return;
    const div = document.createElement('div');
    div.id = 'scoutAnalyticsDashboardModal';
    div.className = 'scout-analytics-overlay';
    div.style.cssText = `
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(10, 30, 33, 0.95);
      backdrop-filter: blur(12px);
      z-index: 9999999;
      align-items: center;
      justify-content: center;
      padding: 16px;
      box-sizing: border-box;
      font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, sans-serif;
    `;
    div.innerHTML = `
      <div style="background:#ffffff;border-radius:18px;max-width:960px;width:100%;max-height:92vh;overflow-y:auto;box-shadow:0 30px 80px rgba(0,0,0,0.6);display:flex;flex-direction:column;" onclick="event.stopPropagation()">
        <!-- Header -->
        <div style="padding:18px 24px;background:#113237;color:#ffffff;border-radius:18px 18px 0 0;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="font-size:22px;">📊</span>
              <h2 style="margin:0;font-size:18px;font-family:'Roboto Slab',Georgia,serif;color:#ffffff;">Bảng Thống Kê &amp; Phân Tích Traffic (Google Analytics Engine)</h2>
            </div>
            <p style="margin:4px 0 0;font-size:12.5px;color:#a3cbcd;">Theo dõi thời gian thực lượt truy cập, nguồn Facebook/Zalo/Google và tỷ lệ đăng ký</p>
          </div>
          <button type="button" onclick="closeScoutAnalyticsModal()" style="background:rgba(255,255,255,0.15);border:none;color:#fff;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:18px;font-weight:bold;display:grid;place-items:center;" aria-label="Đóng">✕</button>
        </div>

        <!-- Body Content -->
        <div id="scoutAnalyticsBody" style="padding:24px;display:flex;flex-direction:column;gap:20px;background:#f8fafb;">
          <!-- Content rendered by renderAnalyticsData() -->
        </div>

        <!-- Footer -->
        <div style="padding:14px 24px;background:#f0f4f5;border-top:1px solid #e1e8ea;display:flex;justify-content:space-between;align-items:center;border-radius:0 0 18px 18px;flex-wrap:wrap;gap:10px;">
          <div style="font-size:12px;color:#677572;">🟢 Hệ thống đang hoạt động tự động · Dữ liệu được bảo mật an toàn</div>
          <div style="display:flex;gap:10px;">
            <button type="button" onclick="clearScoutAnalyticsData()" style="padding:7px 14px;background:#fff;border:1px solid #d0d7d9;border-radius:6px;font-size:12px;cursor:pointer;color:#c64e3b;font-weight:600;">🗑️ Đặt lại số liệu</button>
            <button type="button" onclick="closeScoutAnalyticsModal()" style="padding:7px 18px;background:#113237;color:#fff;border:none;border-radius:6px;font-size:12px;cursor:pointer;font-weight:bold;">Đóng bảng</button>
          </div>
        </div>
      </div>
    `;
    div.onclick = function(e) {
      if (e.target === div) closeScoutAnalyticsModal();
    };
    document.body.appendChild(div);
  }

  function renderAnalyticsData() {
    const body = document.getElementById('scoutAnalyticsBody');
    if (!body) return;

    const data = getDB();
    const totalV = data.totalVisits || 1;
    const fbPercent = Math.round(((data.sources.facebook || 0) / totalV) * 100);
    const zaloPercent = Math.round(((data.sources.zalo || 0) / totalV) * 100);
    const googlePercent = Math.round(((data.sources.google_search || 0) / totalV) * 100);
    const directPercent = Math.round(((data.sources.direct || 0) / totalV) * 100);

    body.innerHTML = `
      <!-- KPI Top Cards -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:14px;">
        <div style="background:#ffffff;padding:16px;border-radius:12px;border:1px solid #e1e8ea;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
          <div style="font-size:12px;color:#677572;font-weight:bold;text-transform:uppercase;">👥 Tổng Lượt Vào Web</div>
          <div style="font-size:28px;font-weight:800;color:#113237;margin-top:6px;">${data.totalVisits} <small style="font-size:14px;color:#2e7d32;">lượt</small></div>
        </div>
        <div style="background:#ffffff;padding:16px;border-radius:12px;border:1px solid #e1e8ea;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
          <div style="font-size:12px;color:#677572;font-weight:bold;text-transform:uppercase;">🎯 Click Đăng Ký Học</div>
          <div style="font-size:28px;font-weight:800;color:#ed7b2b;margin-top:6px;">${data.conversions.registration_clicks || 0} <small style="font-size:14px;color:#677572;">lần</small></div>
        </div>
        <div style="background:#ffffff;padding:16px;border-radius:12px;border:1px solid #e1e8ea;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
          <div style="font-size:12px;color:#677572;font-weight:bold;text-transform:uppercase;">💬 Click Nhắn Zalo</div>
          <div style="font-size:28px;font-weight:800;color:#0288d1;margin-top:6px;">${data.conversions.zalo_leads || 0} <small style="font-size:14px;color:#677572;">tin</small></div>
        </div>
        <div style="background:#ffffff;padding:16px;border-radius:12px;border:1px solid #e1e8ea;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
          <div style="font-size:12px;color:#677572;font-weight:bold;text-transform:uppercase;">📜 Xem Lịch Sử Hướng Đạo</div>
          <div style="font-size:28px;font-weight:800;color:#18373a;margin-top:6px;">${data.conversions.history_views || 0} <small style="font-size:14px;color:#677572;">lần</small></div>
        </div>
      </div>

      <!-- Traffic Source Breakdown -->
      <div style="background:#ffffff;padding:18px;border-radius:12px;border:1px solid #e1e8ea;">
        <h4 style="margin:0 0 14px;font-size:15px;color:#113237;">🌐 Nguồn Người Dùng Đến Từ Đâu (Acquisition Channels)</h4>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div>
            <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:4px;">
              <span>📘 Facebook (Fanpage / Group / Share)</span>
              <span>${data.sources.facebook || 0} lượt (${fbPercent}%)</span>
            </div>
            <div style="height:10px;background:#eef2f3;border-radius:5px;overflow:hidden;">
              <div style="width:${fbPercent}%;height:100%;background:#1877f2;border-radius:5px;"></div>
            </div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:4px;">
              <span>💬 Tin nhắn Zalo</span>
              <span>${data.sources.zalo || 0} lượt (${zaloPercent}%)</span>
            </div>
            <div style="height:10px;background:#eef2f3;border-radius:5px;overflow:hidden;">
              <div style="width:${zaloPercent}%;height:100%;background:#0068ff;border-radius:5px;"></div>
            </div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:4px;">
              <span>🔍 Tìm kiếm Google (Organic Search)</span>
              <span>${data.sources.google_search || 0} lượt (${googlePercent}%)</span>
            </div>
            <div style="height:10px;background:#eef2f3;border-radius:5px;overflow:hidden;">
              <div style="width:${googlePercent}%;height:100%;background:#0f9d58;border-radius:5px;"></div>
            </div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:4px;">
              <span>🔗 Truy cập trực tiếp / Gõ link web</span>
              <span>${data.sources.direct || 0} lượt (${directPercent}%)</span>
            </div>
            <div style="height:10px;background:#eef2f3;border-radius:5px;overflow:hidden;">
              <div style="width:${directPercent}%;height:100%;background:#677572;border-radius:5px;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Real-time Activity Timeline -->
      <div style="background:#ffffff;padding:18px;border-radius:12px;border:1px solid #e1e8ea;">
        <h4 style="margin:0 0 12px;font-size:15px;color:#113237;">⏱️ Nhật Ký Hoạt Động Thời Gian Thực Gần Nhất</h4>
        <div style="max-height:180px;overflow-y:auto;display:flex;flex-direction:column;gap:8px;font-size:12.5px;">
          ${(data.recentLogs && data.recentLogs.length > 0) ? data.recentLogs.map(log => `
            <div style="padding:6px 10px;background:#f9fbfb;border-left:3px solid ${log.type === 'visit' ? '#0f9d58' : '#ed7b2b'};border-radius:4px;display:flex;justify-content:space-between;">
              <span>${log.type === 'visit' ? `🟢 <strong>Khách vào trang</strong> từ <em>${log.source}</em> (${log.device})` : `⚡ <strong>Hành động:</strong> ${log.category} ${log.detail ? `(${log.detail})` : ''}`}</span>
              <span style="color:#8a9997;">${log.time}</span>
            </div>
          `).join('') : '<div style="color:#8a9997;text-align:center;padding:12px;">Chưa có hoạt động ghi nhận</div>'}
        </div>
      </div>
    `;
  }

  // 7. Auto Attach Event Listeners on Page
  document.addEventListener('DOMContentLoaded', function() {
    createAnalyticsModalDOM();

    // Track Registration CTA
    document.querySelectorAll('[data-form], [data-join], .mob-btn-primary, [onclick*="openSurveyModal"]').forEach(function(el) {
      el.addEventListener('click', function() {
        window.logScoutAnalyticsEvent('registration_clicks', this.innerText ? this.innerText.trim() : 'Đăng ký cho con');
      });
    });

    // Track Zalo Clicks
    document.querySelectorAll('a[href*="zalo.me"]').forEach(function(el) {
      el.addEventListener('click', function() {
        window.logScoutAnalyticsEvent('zalo_leads', '0982669456');
      });
    });

    // Track History Infographic
    document.querySelectorAll('.history-card').forEach(function(el) {
      el.addEventListener('click', function() {
        const h3 = this.querySelector('h3');
        window.logScoutAnalyticsEvent('history_views', h3 ? h3.innerText.trim() : 'Infographic');
      });
    });

    // Keyboard shortcut: Shift + A or Alt + A opens dashboard
    document.addEventListener('keydown', function(e) {
      if ((e.shiftKey && (e.key === 'A' || e.key === 'a')) || (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a'))) {
        e.preventDefault();
        window.openScoutAnalyticsModal();
      }
    });

    // Check URL query ?analytics=1
    if (urlParams.get('analytics') === '1' || urlParams.get('stats') === '1') {
      setTimeout(window.openScoutAnalyticsModal, 300);
    }
  });

})();
