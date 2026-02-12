"use client";
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export const useTracker = () => {
  const searchParams = useSearchParams();

  // 1. CAPTURE & STORE (The "Safe" Logic)
  useEffect(() => {
    const utmSource = searchParams.get('utm_source');
    const fbclid = searchParams.get('fbclid'); // Meta Click ID
    const gclid = searchParams.get('gclid');   // Google Click ID

    // If we find any tracking data, we save it to the browser's memory
    if (utmSource || fbclid || gclid) {
      const trackingData = {
        source: utmSource || 'organic',
        medium: searchParams.get('utm_medium') || 'direct',
        campaign: searchParams.get('utm_campaign') || 'none',
        fbclid: fbclid || null,
        gclid: gclid || null,
        timestamp: new Date().toISOString(),
      };

      // localStorage keeps this data even if the user refreshes or returns later
      localStorage.setItem('taxflow_attribution', JSON.stringify(trackingData));
      console.log("✅ Attribution Stored in LocalStorage:", trackingData);
    }
  }, [searchParams]);

  // 2. THE TRACKING ENGINE (The "Envelope" Logic)
  const trackEvent = (eventName: string, properties: object = {}) => {
    // We grab the stored "Passport" (UTMs/Click IDs)
    const attribution = JSON.parse(localStorage.getItem('taxflow_attribution') || '{}');

    const eventPayload = {
      event: eventName,
      properties: {
        ...properties,
        ...attribution, // Merges the UTMs with the event (e.g., cta_click)
        url: window.location.href,
      },
      sent_at: new Date().toISOString(),
    };

    // This console log proves the "Frontend -> Backend" flow for Task 2
    console.log(`🚀 Event Fired: ${eventName}`, eventPayload);
    
    // NOTE: In production, you would 'fetch' this to your Make.com Webhook
  };

  return { trackEvent };
};