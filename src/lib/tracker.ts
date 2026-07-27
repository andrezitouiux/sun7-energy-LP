/**
 * SUN7 Energy - Conversion & Analytics Tracking
 * Lightweight, production-ready tracking abstraction for Google Analytics, Google Tag Manager, and Facebook Pixel.
 * Helps monitor conversions for "Síndico Co-Founder", WhatsApp inquiries, and Form submissions in Grande Florianópolis.
 */

// Extend window interface for global tracking scripts safely
interface CustomWindow extends Window {
  gtag?: (command: string, action: string, params?: Record<string, any>) => void;
  fbq?: (command: string, eventName: string, params?: Record<string, any>) => void;
  dataLayer?: Array<Record<string, any>>;
}

declare const window: CustomWindow;

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  try {
    const timestamp = new Date().toISOString();
    console.log(`[SUN7 Tracking] Event: "${eventName}"`, params, `at ${timestamp}`);

    // 1. Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // 2. Google Tag Manager (DataLayer push)
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        eventTimestamp: timestamp,
        ...params,
      });
    }

    // 3. Meta Pixel (Facebook Pixel)
    if (typeof window.fbq === 'function') {
      // Standard lead / conversion mapping
      if (eventName === 'form_submission' || eventName === 'whatsapp_click') {
        window.fbq('track', 'Lead', {
          content_name: params.label || eventName,
          value: params.value || 0,
          currency: 'BRL',
          ...params
        });
      } else {
        window.fbq('trackCustom', eventName, params);
      }
    }
  } catch (err) {
    console.warn('[SUN7 Tracking Error] Failed to dispatch event:', err);
  }
};
