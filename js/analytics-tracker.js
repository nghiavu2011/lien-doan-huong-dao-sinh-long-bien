// Ponytail: Consolidated into js/scout-telemetry.js for zero-redundancy performance
// Backward compatibility shim
if (!window.trackScoutEvent && window.logScoutAnalyticsEvent) {
  window.trackScoutEvent = window.logScoutAnalyticsEvent;
}
