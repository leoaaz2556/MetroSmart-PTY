/**
 * detect-mobile.js
 * Script de detección de dispositivos móviles y redirección para MetroSmart PTY.
 */
const MobileDetector = {
  /**
   * Evalúa si el usuario accede desde un dispositivo móvil o tablet.
   * @returns {boolean}
   */
  isMobile: function () {
    // 1. Verificación por User Agent
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Kindle|Silk-Accelerated|Mobile/i;
    
    // 2. Verificación por ancho de pantalla (menor o igual a 768px)
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    // 3. Verificación de pantalla táctil primaria sin puntero fino
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    return mobileRegex.test(userAgent) || (isSmallScreen && isTouchDevice);
  },

  /**
   * Redirige automáticamente al archivo indicado si el usuario está en móvil.
   * @param {string} targetUrl URL o archivo de destino (ej. "mobile.html")
   */
  autoRedirect: function (targetUrl) {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Si la URL incluye "?view=desktop", cancela la redirección
    if (urlParams.get("view") === "desktop") {
      return;
    }

    if (this.isMobile() && !window.location.pathname.endsWith(targetUrl)) {
      window.location.href = targetUrl;
    }
  }
};