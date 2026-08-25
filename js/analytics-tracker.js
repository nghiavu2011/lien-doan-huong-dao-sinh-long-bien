/**
 * LONG BIEN SCOUTS - ADVANCED ANALYTICS & CONVERSION TRACKING ENGINE
 * Integrated Multi-Source Tracker: GA4 + Vercel Analytics + Lead Acquisition Detector
 */

(function() {
  'use strict';

  // 1. UTM & Acquisition Channel Detection
  const urlParams = new URLSearchParams(window.location.search);
  const acquisitionData = {
    source: urlParams.get('utm_source') || (document.referrer.includes('facebook.com') ? 'facebook' : document.referrer.includes('zalo') ? 'zalo' : document.referrer.includes('google') ? 'google_search' : 'direct'),
    medium: urlParams.get('utm_medium') || (urlParams.get('fbclid') ? 'social_fb' : 'web'),
    campaign: urlParams.get('utm_campaign') || 'organic_longbienscout',
    referrer: document.referrer || 'direct',
    landingPage: window.location.pathname + window.location.hash,
    timestamp: new Date().toISOString()
  };

  try {
    sessionStorage.setItem('scout_acquisition_channel', JSON.stringify(acquisitionData));
  } catch (e) {}

  // 2. Custom Event Dispatcher
  window.trackScoutEvent = function(eventName, eventParams) {
    const payload = Object.assign({}, acquisitionData, eventParams || {});
    
    // Google Analytics 4 (if gtag loaded)
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);
    }

    // Vercel Analytics custom event bridge (if present)
    if (window.va) {
      window.va('event', { name: eventName, data: payload });
    }

    // Console logging in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log(`[ScoutAnalytics] 📊 Event: ${eventName}`, payload);
    }
  };

  // 3. Auto-track High-Value Conversion Actions
  document.addEventListener('DOMContentLoaded', function() {
    // A. Track Registration CTA Clicks
    document.querySelectorAll('[data-form], [data-join], .mob-btn-primary, [onclick*="openSurveyModal"]').forEach(function(el) {
      el.addEventListener('click', function() {
        window.trackScoutEvent('conversion_registration_click', {
          cta_label: this.innerText ? this.innerText.trim() : 'Đăng ký cho con',
          location: 'web_homepage'
        });
      });
    });

    // B. Track Zalo Inquiries
    document.querySelectorAll('a[href*="zalo.me"]').forEach(function(el) {
      el.addEventListener('click', function() {
        window.trackScoutEvent('conversion_zalo_click', {
          target_phone: '0982669456',
          location: 'zalo_button'
        });
      });
    });

    // C. Track Facebook Fanpage Clicks
    document.querySelectorAll('a[href*="facebook.com"]').forEach(function(el) {
      el.addEventListener('click', function() {
        window.trackScoutEvent('conversion_facebook_click', {
          fb_url: this.href,
          location: 'facebook_link'
        });
      });
    });

    // D. Track History Infographic Zoom Views
    document.querySelectorAll('.history-card').forEach(function(el) {
      el.addEventListener('click', function() {
        const titleEl = this.querySelector('h3');
        window.trackScoutEvent('infographic_zoom_view', {
          infographic_title: titleEl ? titleEl.innerText.trim() : 'Infographic'
        });
      });
    });

    // E. Track Scroll Depth Milestones (50% & 90%)
    let tracked50 = false;
    let tracked90 = false;
    window.addEventListener('scroll', function() {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
      if (scrollPercent >= 50 && !tracked50) {
        tracked50 = true;
        window.trackScoutEvent('scroll_depth_50', { depth: '50%' });
      }
      if (scrollPercent >= 90 && !tracked90) {
        tracked90 = true;
        window.trackScoutEvent('scroll_depth_90', { depth: '90%' });
      }
    }, { passive: true });
  });

  // Track initial page view event
  window.trackScoutEvent('page_view_engaged', {
    page_title: document.title,
    screen_width: window.innerWidth,
    screen_height: window.innerHeight
  });

})();
