/**
 * Client-side JavaScript for the /go/links admin page
 * QR code generation, copy-to-clipboard, and toast notifications
 */

import { renderPrintScript } from './print-cards'

/** Split string prevents the HTML parser from closing the <script> tag prematurely */
const SCRIPT_CLOSE_TAG = '</' + 'script>'

const QR_CDN_URL = 'https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.min.js'

export function renderScript(): string {
  const cdnTag = `<script src="${QR_CDN_URL}">${SCRIPT_CLOSE_TAG}`

  return `${cdnTag}
  <script>
    var sourceInput = document.getElementById('source-input');
    var qrDarkInput = document.getElementById('qr-dark');
    var qrLightInput = document.getElementById('qr-light');
    var cards = document.querySelectorAll('.card[data-slug]');
    var toastEl = document.getElementById('toast');
    var toastTimer = null;

    function showToast(msg) {
      toastEl.textContent = msg;
      toastEl.classList.add('visible');
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(function() { toastEl.classList.remove('visible'); }, 1800);
    }

    function getFullUrl(baseUrl) {
      var source = sourceInput.value.trim();
      if (!source) return baseUrl;
      return baseUrl + '?source=' + encodeURIComponent(source);
    }

    function updateAllCards() {
      var darkColor = qrDarkInput.value;
      var lightColor = qrLightInput.value;
      cards.forEach(function(card) {
        var baseUrl = card.getAttribute('data-base-url');
        var fullUrl = getFullUrl(baseUrl);
        var urlDisplay = card.querySelector('[data-url-display]');
        var canvas = card.querySelector('[data-qr-canvas]');
        if (urlDisplay) urlDisplay.textContent = fullUrl;
        if (canvas && typeof QRCode !== 'undefined') {
          QRCode.toCanvas(canvas, fullUrl, {
            width: 180, margin: 2,
            color: { dark: darkColor, light: lightColor }
          });
        }
      });
      updatePrintCards();
    }

    sourceInput.addEventListener('input', updateAllCards);
    qrDarkInput.addEventListener('input', updateAllCards);
    qrLightInput.addEventListener('input', updateAllCards);

    document.addEventListener('click', function(e) {
      var copyUrlBtn = e.target.closest('[data-copy-url]');
      if (copyUrlBtn) {
        var card = copyUrlBtn.closest('.card');
        var fullUrl = getFullUrl(card.getAttribute('data-base-url'));
        navigator.clipboard.writeText(fullUrl).then(function() {
          copyUrlBtn.classList.add('copied');
          showToast('Link copied');
          setTimeout(function() { copyUrlBtn.classList.remove('copied'); }, 1800);
        }).catch(function() { showToast('Copy failed'); });
        return;
      }

      var copyQrBtn = e.target.closest('[data-copy-qr]');
      if (copyQrBtn) {
        var qrCard = copyQrBtn.closest('.card');
        var canvas = qrCard.querySelector('[data-qr-canvas]');
        canvas.toBlob(function(blob) {
          if (!blob) { showToast('QR generation failed'); return; }
          navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]).then(function() {
            copyQrBtn.classList.add('copied');
            copyQrBtn.textContent = 'Copied!';
            showToast('QR image copied');
            setTimeout(function() {
              copyQrBtn.classList.remove('copied');
              copyQrBtn.textContent = 'Copy QR';
            }, 1800);
          }).catch(function() { showToast('Copy failed'); });
        });
      }
    });

    window.addEventListener('load', updateAllCards);

    ${renderPrintScript()}
  ${SCRIPT_CLOSE_TAG}`
}
