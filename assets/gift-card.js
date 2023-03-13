window.addEventListener('DOMContentLoaded', function() {
  const selectors = {
    qrCode : '[data-qr-code]',
    giftCardDigits: '[data-gift-card-digits]',
  }

  function init() {
    initQrCode();
    initDigitsAutoSelection();
  }

  function initQrCode() {
    const qrCode = document.querySelector(selectors.qrCode);

    new QRCode(qrCode, {
      text: qrCode.dataset.identifier,
      width: 120,
      height: 120,
      imageAltText: theme.strings.qrImageAlt
    });
  }

  function initDigitsAutoSelection() {
    const giftCardDigits = document.querySelector(selectors.giftCardDigits);
    giftCardDigits.addEventListener('focus', (e) => e.target.select());
  }

  init();
});
