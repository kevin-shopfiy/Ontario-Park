/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["avatarWebpackJsonp"] = window["avatarWebpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([56,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@shopify/theme-sections/theme-sections.js + 1 modules
var theme_sections = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@shopify/theme-cart/theme-cart.js + 2 modules
var theme_cart = __webpack_require__(12);

// EXTERNAL MODULE: ./app/scripts/utilities/helpers.js
var helpers = __webpack_require__(6);

// CONCATENATED MODULE: ./app/scripts/components/cart-recommendations.js
/* eslint-disable no-param-reassign */

Avatar.theme = Avatar.theme || {};

Avatar.theme.CartRecommendations = function CartRecommendations() {
  function init(container) {
    var _container$dataset = container.dataset,
        baseUrl = _container$dataset.baseUrl,
        productId = _container$dataset.productId,
        limit = _container$dataset.limit,
        sectionType = _container$dataset.sectionType;
    var request = "\n      ".concat(baseUrl, "?section_id=").concat(sectionType, "&product_id=").concat(productId, "&limit=").concat(limit, "\n    ");
    if (productId === '') return;
    fetch(request).then(function (res) {
      return res.text();
    }).then(function (productHtml) {
      if (productHtml.trim() === '') return;
      container.innerHTML = productHtml;
      container.innerHTML = container.firstElementChild.innerHTML;
    });
  }

  return {
    init: init
  };
}();

Object(theme_sections["d" /* register */])('cart-recommendations', {
  onLoad: function onLoad() {
    Avatar.theme.CartRecommendations.init(this.container);
  }
});
Object(theme_sections["c" /* load */])('cart-recommendations');
// CONCATENATED MODULE: ./app/scripts/templates/cart.js




Avatar.theme = Avatar.theme || {};

Avatar.theme.Cart = function CartFn() {
  var selectors = {
    container: '[data-section-type="cart-template"]',
    cartTitle: '.cart-title',
    cartForm: '.cart-form',
    cartCount: '.cart-count',
    cartCountText: '.cart-count-text',
    cartTotal: '.cart-total',
    cartPrice: '.cart-price',
    cartPriceSubtotal: '[data-cart-price-subtotal]',
    cartPriceBreakdown: '[data-price-breakdown]',
    cartPriceLabel: '[data-cart-price-label]',
    cartItem: '.cart-item',
    cartItemQuantity: '.cart-item-quantity',
    cartItemQuantityStep: '.cart-item-quantity-step',
    cartItemQuantityInput: '.cart-item-quantity-input',
    cartItemPrice: '[data-cart-final-price]',
    cartItemPriceOriginal: '[data-cart-original-price]',
    cartItemDiscounts: '[data-cart-item-discount-amount]',
    cartDiscounts: '[data-cart-discount-applications]',
    cartItemRemove: '.cart-item-remove',
    linePrice: '[data-line-price]',
    linePriceDiscounted: '[data-line-price-discounted]'
  };
  var classes = {
    flex: 'tw-flex',
    hidden: 'tw-hidden',
    textRight: 'tw-text-right',
    textCenter: 'tw-text-center',
    widthLeft: 'tw-w-2/3',
    widthRight: 'tw-w-1/3',
    noCookies: 'no-cookies'
  };
  var data = {
    key: 'data-item-key'
  };
  var cache = {};

  function cacheDOM() {
    cache = {
      container: document.querySelector(selectors.container),
      cartTitle: document.querySelector(selectors.cartTitle),
      cartForm: document.querySelector(selectors.cartForm),
      cartCount: document.querySelectorAll(selectors.cartCount),
      cartCountText: document.querySelector(selectors.cartCountText),
      cartPrice: document.querySelector(selectors.cartPrice),
      cartItem: document.querySelectorAll(selectors.cartItem),
      cartItemQuantity: document.querySelectorAll(selectors.cartItemQuantity),
      cartItemPrice: document.querySelectorAll(selectors.cartItemPrice),
      cartItemRemove: document.querySelectorAll(selectors.cartItemRemove)
    };
  }

  function init() {
    cacheDOM();
    initCartForm();
    checkCookies();
  }

  function initCartForm() {
    cache.cartItemQuantity.forEach(function (quantity) {
      var cartItemQuantityStep = quantity.querySelectorAll(selectors.cartItemQuantityStep);
      var cartItemQuantityInput = quantity.querySelectorAll(selectors.cartItemQuantityInput);
      cartItemQuantityStep.forEach(function (step) {
        return step.addEventListener('click', handleQuantityClick);
      });
      cartItemQuantityInput.forEach(function (input) {
        return input.addEventListener('change', handleQuantityChange);
      });
    });
    cache.cartItemRemove.forEach(function (removeBtn) {
      return removeBtn.addEventListener('click', handleItemRemove);
    });
  }

  function handleQuantityClick(evt) {
    var currentTarget = evt.currentTarget;
    var quantityInput = currentTarget.parentElement.querySelector(selectors.cartItemQuantityInput);

    if (currentTarget.hasAttribute('data-step-up')) {
      quantityInput.stepUp();
    } else if (currentTarget.hasAttribute('data-step-down')) {
      quantityInput.stepDown();
    }

    setQuantityControls(quantityInput);
    var changeEvent = new Event('change');
    quantityInput.dispatchEvent(changeEvent);
  }

  function handleQuantityChange(evt) {
    var currentTarget = evt.currentTarget;
    var cartItem = evt.currentTarget.closest(selectors.cartItem);
    var key = cartItem.getAttribute(data.key);
    var quantity = setQuantityControls(currentTarget);

    if (quantity <= 0) {
      removeItem(cartItem);
      return;
    }

    theme_cart["e" /* updateItem */](key, {
      quantity: quantity
    }).then(function (cart) {
      var item = cart.items.find(function (item) {
        return item.key.split(':')[0] === key.split(':')[0];
      });
      renderCount(cart.item_count);
      renderCartPrices(cart);
      renderLinePrice(item, cartItem, cart.cart_level_discount_applications);
      updateCartItemsKey(cart);
    });
  }

  function handleItemRemove(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var currentTarget = evt.currentTarget;
    var cartItem = currentTarget.closest(selectors.cartItem);
    removeItem(cartItem);
  }
  /**
   * Removes item from cart
   *
   * @param object cartItem dom object
   * @return void
   */


  function removeItem(cartItem) {
    var key = cartItem.dataset.itemKey;
    theme_cart["d" /* removeItem */](key).then(function (cart) {
      if (cart.item_count > 0) {
        cartItem.remove();
        renderCount(cart.item_count);
        renderCartPrices(cart);
        updateCartItemsKey(cart);
      } else {
        renderEmptyCart();
      }
    });
  }

  function updateCartItemsKey(cart) {
    var cartItems = document.querySelectorAll(selectors.cartItem);
    cart.items.forEach(function (item) {
      var variantId = item.key.split(':')[0];
      cartItems.forEach(function (cartItem) {
        var cartItemVariantId = cartItem.dataset.itemKey.split(':')[0];

        if (cartItemVariantId === variantId) {
          cartItem.dataset.itemKey = item.key;
        }
      });
    });
  }

  function renderCount(count) {
    cache.cartCount.forEach(function (countText) {
      var countTextEl = countText;
      countTextEl.textContent = count;
    });
    cache.cartCountText.textContent = Avatar.theme.i18n[count === 1 ? 'item' : 'items'];
  }

  function renderLinePrice(item, cartItem, cartDiscounts) {
    var currency = Avatar.theme.Currency;
    var quantityInput = cartItem.querySelector(selectors.cartItemQuantityInput);
    quantityInput.value = item.quantity;
    var prices = cartItem.querySelectorAll(selectors.cartItemPrice);
    prices.forEach(function (price) {
      return price.textContent = currency.formatMoney(item.final_line_price);
    });

    if (item.final_line_price !== item.original_line_price) {
      var priceOriginal = cartItem.querySelector(selectors.cartItemPriceOriginal);
      priceOriginal.textContent = currency.formatMoney(item.original_line_price);
    }

    var linePriceDiscounted = cartItem.querySelector(selectors.linePriceDiscounted);
    var linePriceContainer = cartItem.querySelector(selectors.linePrice); // Only show line item discount if there is not cart level discounts

    if (item.discounts.length > 0 && cartDiscounts.length <= 0) {
      linePriceDiscounted.classList.remove(classes.hidden);
      linePriceContainer.classList.add(classes.hidden);
    } else {
      linePriceDiscounted.classList.add(classes.hidden);
      linePriceContainer.classList.remove(classes.hidden);
    }

    renderItemDiscounts(item.discounts, cartItem);
  }

  function renderEmptyCart() {
    var emptyHtml = "\n      <p class=\"mb-5 text-center\">".concat(Avatar.theme.i18n.empty, "</p>\n      <a class=\"tw-btn tw-btn-primary rounded-pill font-600 tw-block tw-mx-auto tw-w-full md:tw-w-1/4\"\n          href=\"").concat(Avatar.theme.settings.cart.continueShopping, "\">\n          ").concat(Avatar.theme.i18n.continue, "\n      </a>\n    ");
    var htmlObject = document.createElement('div');
    htmlObject.innerHTML = emptyHtml;
    cache.cartTitle.after(htmlObject);
    cache.cartCount.forEach(function (count) {
      return count.remove();
    });
    cache.cartCountText.remove();
    cache.cartForm.remove();

    if (Avatar.theme.settings.cart.showRecsOnEmptyCart === false) {
      document.querySelector('.cart-recommendations').remove();
    }
  }
  /**
   * Renders discount allocations
   *
   * @param {array} discounts
   * @param {object} $cartItem
   */


  function renderItemDiscounts(discounts, cartItem) {
    // const cartItem = $cartItem[0];
    var discounstContainer = cartItem.querySelector(selectors.cartItemDiscounts);

    if (!discounstContainer) {
      return;
    }

    discounstContainer.innerHTML = '';
    discounts.forEach(function (discount) {
      discounstContainer.innerHTML += "\n        <div>\n          <i class=\"fa fa-tags\"></i> ".concat(discount.title, "\n          (-<span>").concat(Avatar.theme.Currency.formatMoney(discount.amount), "</span>)\n        <div>\n      ");
    });
  }

  ;

  function renderCartPrices(cart) {
    var currency = Avatar.theme.Currency;
    var discounts = cart.cart_level_discount_applications;
    var cartPriceBreakdown = document.querySelector(selectors.cartPriceBreakdown);
    var cartPriceSubtotalContainer = document.querySelector(selectors.cartPriceSubtotal);
    var cartDiscountsContainer = document.querySelector(selectors.cartDiscounts);
    var cartPriceLabel = document.querySelector(selectors.cartPriceLabel);
    var totalPrices = document.querySelectorAll(selectors.cartPrice);
    var cartTotal = document.querySelectorAll(selectors.cartTotal);
    totalPrices.forEach(function (price) {
      return price.textContent = currency.formatMoney(cart.total_price);
    });

    if (discounts.length > 0) {
      cartTotal.forEach(function (item) {
        item.classList.add(classes.textRight);
        item.classList.remove(classes.textCenter);
      });
      cartPriceBreakdown.classList.remove(classes.hidden);
      cartPriceLabel.classList.add(classes.widthLeft);
      cartPriceLabel.parentElement.classList.add(classes.flex);
      cartPriceLabel.parentElement.classList.remove(classes.textCenter);
      totalPrices.forEach(function (price) {
        if (price.previousSibling) {
          price.classList.add(classes.widthRight);
        }
      });
    } else {
      cartTotal.forEach(function (item) {
        item.classList.add(classes.textCenter);
        item.classList.remove(classes.textRight);
      });
      cartPriceBreakdown.classList.add(classes.hidden);
      cartPriceLabel.classList.remove(classes.widthLeft);
      cartPriceLabel.parentElement.classList.add(classes.textCenter);
      cartPriceLabel.parentElement.classList.remove(classes.flex);
      totalPrices.forEach(function (price) {
        if (price.previousSibling) {
          price.classList.remove(classes.widthRight);
        }
      });
    }

    if (cartPriceSubtotalContainer) {
      cartPriceSubtotalContainer.textContent = currency.formatMoney(cart.original_total_price);
    }

    cartDiscountsContainer.innerHTML = '';
    discounts.forEach(function (discount) {
      cartDiscountsContainer.innerHTML += "\n        <div class=\"tw-text-sm text-primary tw-flex\">\n          <span class=\"font-600 tw-w-2/3\">\n            <i class=\"fa fa-tags\"></i> ".concat(discount.title, "\n          </span>\n          <span class=\"ml-1 tw-w-1/3\">\n            -").concat(currency.formatMoney(discount.total_allocated_amount), "\n          </span>\n        </div>\n      ");
    });
  }
  /**
   * Updates the status of quantity elements
   *
   * @param {object} $quantityInput
   * @return {int}
   */


  function setQuantityControls(quantityInput) {
    var quantity = parseInt(quantityInput.value, 10);
    var max = parseInt(quantityInput.getAttribute('max'), 10);

    if (quantity <= 0) {
      quantityInput.previousElementSibling.setAttribute('disabled', true);
    } else {
      quantityInput.previousElementSibling.removeAttribute('disabled');
    }

    if (quantity >= max) {
      quantityInput.nextElementSibling.setAttribute('disabled', true);
    } else {
      quantityInput.nextElementSibling.removeAttribute('disabled');
    }

    return quantity;
  }

  function checkCookies() {
    if (!cache.container) return;
    if (helpers["b" /* cookiesEnabled */]()) return;
    cache.container.classList.add(classes.noCookies);
  }

  init();
  return {
    init: init,
    initCartForm: initCartForm,
    checkCookies: checkCookies
  };
}();

Object(theme_sections["d" /* register */])('cart-template', {
  onLoad: function onLoad() {
    Avatar.theme.Cart.init();
  }
});


    // If we reached this module (the entry point), it means no one accepted the HRM.
    // Let's reload the page then.
    if (false) {}
  

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return htmlEscape; });
/* unused harmony export toCamelCase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return focusFormStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return uniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return swapImagePlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return onLoadHideImagePlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cookiesEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return forceFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkVimeoReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getSectionIdByName; });
var debounce = function debounce(callback, wait) {
  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timerId);
    timerId = setTimeout(function () {
      callback.apply(void 0, args);
    }, wait);
  };
};
function throttle(func) {
  var _this = this;

  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var timer = null;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (timer === null) {
      timer = setTimeout(function () {
        func.apply(_this, args);
        timer = null;
      }, wait);
    }
  };
}
var htmlEscape = function htmlEscape(input) {
  return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
};
var toCamelCase = function toCamelCase(str) {
  return str.replace(/\s(.)/g, function ($1) {
    return $1.toUpperCase();
  }).replace(/\s/g, '').replace(/^(.)/, function ($1) {
    return $1.toLowerCase();
  });
};
var focusFormStatus = function focusFormStatus() {
  var selectors = {
    statusMessage: '[data-form-status]'
  };
  var statusMessages = document.querySelectorAll(selectors.statusMessage);
  statusMessages.forEach(function (statusMessage) {
    statusMessage.setAttribute('tabindex', -1);
    statusMessage.focus();
    statusMessage.addEventListener('blur', function (evt) {
      evt.target.removeAttribute('tabindex');
    }, {
      once: true
    });
  });
};

function arrayIncludes(e, t) {
  for (var n = 0; n < e.length; n++) {
    if (e[n] === t) return !0;
  }

  return !1;
}

function uniq(e) {
  for (var t = [], n = 0; n < e.length; n++) {
    arrayIncludes(t, e[n]) || t.push(e[n]);
  }

  return t;
}

function removeImageLoadingPlaceholder(image) {
  // Remove loading placeholder
  var imageWrapper = image.hasAttribute('data-image-loading-placeholder') ? image : image.closest('[data-image-loading-placeholder]');

  if (imageWrapper) {
    imageWrapper.removeAttribute('data-image-loading-placeholder');
  }
}

function swapImagePlaceholder() {
  document.addEventListener('lazyloaded', function (evt) {
    var image = evt.target;
    removeImageLoadingPlaceholder(image);
  });
}
function onLoadHideImagePlaceholder() {
  var alreadyLazyloaded = document.querySelectorAll('.lazyloaded');
  alreadyLazyloaded.forEach(function (image) {
    removeImageLoadingPlaceholder(image);
  });
}
function cookiesEnabled() {
  var _navigator = navigator,
      cookieEnabled = _navigator.cookieEnabled;

  if (!cookieEnabled) {
    document.cookie = 'testcookie';
    cookieEnabled = document.cookie.indexOf('testcookie') !== -1;
  }

  return cookieEnabled;
}
function forceFocus(element, options) {
  options = options || {};
  var savedTabIndex = element.tabIndex;
  element.tabIndex = -1;
  element.dataset.tabIndex = savedTabIndex;
  options.preventScroll ? element.focus({
    preventScroll: true
  }) : element.focus();

  if (typeof options.className !== 'undefined') {
    element.classList.add(options.className);
  }

  element.addEventListener('blur', callback);

  function callback(event) {
    event.target.removeEventListener(event.type, callback);
    element.tabIndex = savedTabIndex;
    delete element.dataset.tabIndex;

    if (typeof options.className !== 'undefined') {
      element.classList.remove(options.className);
    }
  }
}
function checkVimeoReady() {
  var vimeoPromise = new Promise(function (resolve, reject) {
    var interval = setInterval(function () {
      if (typeof Vimeo === 'undefined') {
        return;
      }

      clearInterval(interval);
      clearTimeout(timeout);
      window.vimeoLoaded = true;
      resolve();
    }, 500);
    var timeout = setTimeout(function () {
      clearInterval(interval);
      reject();
    }, 4000);
  });
  return vimeoPromise;
}
function getSectionIdByName(sectionName) {
  var sectionElement = document.querySelector("[id$=\"__".concat(sectionName, "\"]"));
  var parts = sectionElement.id.split('shopify-section-');
  return parts.length > 0 ? parts[1] : '';
}

/***/ })

/******/ });