// src/types/global.d.ts

export {};

declare global {
  interface Window {
    /**
     * Google Analytics gtag function
     * Example usage:
     * gtag('event', 'click', { event_category: 'video' });
     */
    gtag: (
      command: 'config' | 'event' | 'set',
      target: string,
      options?: Record<string, unknown>
    ) => void;
  }
}
