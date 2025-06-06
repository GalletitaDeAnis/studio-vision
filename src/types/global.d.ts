// src/types/global.d.ts

export {};

declare global {
  interface Window {
    /**
     * Función global de Google Analytics 4 (gtag.js).
     * Ejemplo de uso: gtag('event', 'click', { event_category: 'video' });
     */
    gtag: (
      command: 'config' | 'event' | 'set',
      targetIdOrEventName: string,
      configOrParams?: Record<string, unknown>
    ) => void;
  }
}
