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
/******/ 		1: 0
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
/******/ 	deferredModules.push([55,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initAjaxAddToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initAjaxAddToCartDestroy; });
var selectors = {
  addToCartForms: '[data-ajax-submit]'
}; // eslint-disable-next-line import/prefer-default-export

function initAjaxAddToCart() {
  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  if (!Shopify.designMode) return;
  if (!Avatar.theme.sections.SliderCart) return;
  var addToCartEvent = Avatar.theme.sections.SliderCart.addToCartEvent;
  var productForms = container.querySelector(selectors.addToCartForms);
  productForms.addEventListener('submit', addToCartEvent);
}
function initAjaxAddToCartDestroy() {
  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  if (!Shopify.designMode) return;
  if (!Avatar.theme.sections.SliderCart) return;
  var addToCartEvent = Avatar.theme.sections.SliderCart.addToCartEvent;
  var productForms = container.querySelector(selectors.addToCartForms);
  productForms.removeEventListener('submit', addToCartEvent);
}

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

Avatar.theme = Avatar.theme || {};

Avatar.theme.LibraryLoader = function () {
  var types = {
    link: 'link',
    script: 'script'
  };
  var status = {
    requested: 'requested',
    loaded: 'loaded'
  };
  var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';
  var libraries = {
    youtubeSdk: {
      tagId: 'youtube-sdk',
      src: 'https://www.youtube.com/iframe_api',
      type: types.script
    },
    plyrShopifyStyles: {
      tagId: 'plyr-shopify-styles',
      src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
      type: types.link
    },
    modelViewerUiStyles: {
      tagId: 'shopify-model-viewer-ui-styles',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
      type: types.link
    },
    googleModelViewerJs: {
      tagId: 'google-model-viewer-js',
      src: 'https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js',
      type: types.script
    }
  };

  function load(libraryName, callback) {
    var library = libraries[libraryName];
    if (!library) return;
    if (library.status === status.requested) return;

    callback = callback || function () {};

    if (library.status === status.loaded) {
      callback();
      return;
    }

    library.status = status.requested;
    var tag;

    switch (library.type) {
      case types.script:
        tag = createScriptTag(library, callback);
        break;

      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }

    tag.id = library.tagId;
    library.element = tag;
    var firstScriptTag = document.getElementsByTagName(library.type)[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback) {
    var tag = document.createElement('script');
    tag.src = library.src;
    tag.addEventListener('load', function () {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  function createLinkTag(library, callback) {
    var tag = document.createElement('link');
    tag.href = library.src;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.addEventListener('load', function () {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  return {
    load: load
  };
}();

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

Avatar.theme = Avatar.theme || {};

Avatar.theme.Currency = function () {
  var moneyFormat = '${{amount}}';

  function formatWithDelimiters(number) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var thousands = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
    var decimal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';

    if (isNaN(number) || number == null) {
      return 0;
    }

    ;
    number = (number / 100.0).toFixed(precision);
    var parts = number.split('.');
    var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
    var centsAmount = parts[1] ? decimal + parts[1] : '';
    return dollarsAmount + centsAmount;
  }

  ;

  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }

    ;

    if (!format) {
      format = Avatar.shop.moneyFormat;
    }

    ;
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = format || moneyFormat;

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;

      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;

      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;

      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  ;
  return {
    formatWithDelimiters: formatWithDelimiters,
    formatMoney: formatMoney
  };
}();

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

Shopify = Shopify || {};
Shopify.theme = Shopify.theme || {};

Shopify.theme.ThemeImages = function () {
  'use strict';
  /**
   * Image Helper Functions
   * -----------------------------------------------------------------------------
   * https://github.com/Shopify/slate.git.
   *
   */

  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      loadImage(getSizedImageUrl(image, size));
    }
  }
  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */


  function loadImage(path) {
    new Image().src = path;
  }
  /**
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */


  function imageSize(src) {
    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

    if (match) {
      return match[1];
    } else {
      return null;
    }
  }
  /**
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */


  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return removeProtocol(src);
    }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

    if (match) {
      var prefix = src.split(match[0]);
      var suffix = match[0];
      return removeProtocol("".concat(prefix[0], "_").concat(size).concat(suffix));
    } else {
      return null;
    }
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    getSizedImageUrl: getSizedImageUrl
  };
}();

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

Avatar.theme = Avatar.theme || {};

Avatar.theme.Utilities = function Utilities() {
  function smoothScrollTo(endX, endY, duration) {
    var startX = window.scrollX || window.pageXOffset;
    var startY = window.scrollY || window.pageYOffset;
    var distanceX = endX - startX;
    var distanceY = endY - startY;
    var startTime = new Date().getTime(); // Easing function

    function easeInOutQuart(time, from, distance, transitionDuration) {
      // eslint-disable-next-line no-cond-assign
      if ((time /= transitionDuration / 2) < 1) {
        return distance / 2 * time * time * time * time + from;
      } // eslint-disable-next-line no-return-assign


      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    }

    var timer = window.setInterval(function () {
      var time = new Date().getTime() - startTime;
      var newX = easeInOutQuart(time, startX, distanceX, duration);
      var newY = easeInOutQuart(time, startY, distanceY, duration);

      if (time >= duration) {
        window.clearInterval(timer);
      }

      window.scrollTo(newX, newY);
    }, 1000 / 60); // 60 fps
  } // Required functionality from depricated options_selection.js


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

  return {
    smoothScrollTo: smoothScrollTo,
    uniq: uniq
  };
}();

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

Avatar.theme = Avatar.theme || {};

Avatar.theme.rte = function rte() {
  var selectors = {
    tables: '.rte table',
    iframes: '.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]'
  };
  var classes = {
    tableWrapper: 'tw-scrollable-wrapper',
    iframeWrapper: 'tw-video-wrapper'
  };

  function wrapTable(options) {
    if (!options.tables) return;
    options.tables.forEach(function (table) {
      var wrapper = document.createElement('div');
      wrapper.classList.add(options.tableWrapperClass);
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }

  function wrapIframe(options) {
    options.iframes.forEach(function (iframe) {
      if (iframe.closest(".".concat(classes.iframeWrapper))) return;
      var wrapper = document.createElement('div');
      wrapper.classList.add(options.iframeWrapperClass);
      iframe.parentNode.insertBefore(wrapper, iframe);
      wrapper.appendChild(iframe); // eslint-disable-next-line no-param-reassign, no-self-assign

      iframe.src = iframe.src;
    });
  }

  wrapTable({
    tables: document.querySelectorAll(selectors.tables),
    tableWrapperClass: classes.tableWrapper
  });
  wrapIframe({
    iframes: document.querySelectorAll(selectors.iframes),
    iframeWrapperClass: classes.iframeWrapper
  });
  return {
    wrapTable: wrapTable,
    wrapIframe: wrapIframe,
    iframeSelectors: selectors.iframes
  };
}();

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

// focus - focusOptions - preventScroll polyfill
(function () {
  if (typeof window === "undefined" || typeof document === "undefined" || typeof HTMLElement === "undefined") {
    return;
  }

  var supportsPreventScrollOption = false;

  try {
    var focusElem = document.createElement("div");
    focusElem.addEventListener("focus", function (event) {
      event.preventDefault();
      event.stopPropagation();
    }, true);
    focusElem.focus(Object.defineProperty({}, "preventScroll", {
      get: function get() {
        // Edge v18 gives a false positive for supporting inputs
        if (navigator && typeof navigator.userAgent !== 'undefined' && navigator.userAgent && navigator.userAgent.match(/Edge\/1[7-8]/)) {
          return supportsPreventScrollOption = false;
        }

        supportsPreventScrollOption = true;
      }
    }));
  } catch (e) {}

  if (HTMLElement.prototype.nativeFocus === undefined && !supportsPreventScrollOption) {
    HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;

    var calcScrollableElements = function calcScrollableElements(element) {
      var parent = element.parentNode;
      var scrollableElements = [];
      var rootScrollingElement = document.scrollingElement || document.documentElement;

      while (parent && parent !== rootScrollingElement) {
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
          scrollableElements.push([parent, parent.scrollTop, parent.scrollLeft]);
        }

        parent = parent.parentNode;
      }

      parent = rootScrollingElement;
      scrollableElements.push([parent, parent.scrollTop, parent.scrollLeft]);
      return scrollableElements;
    };

    var restoreScrollPosition = function restoreScrollPosition(scrollableElements) {
      for (var i = 0; i < scrollableElements.length; i++) {
        scrollableElements[i][0].scrollTop = scrollableElements[i][1];
        scrollableElements[i][0].scrollLeft = scrollableElements[i][2];
      }

      scrollableElements = [];
    };

    var patchedFocus = function patchedFocus(args) {
      if (args && args.preventScroll) {
        var evScrollableElements = calcScrollableElements(this);

        if (typeof setTimeout === 'function') {
          var thisElem = this;
          setTimeout(function () {
            thisElem.nativeFocus();
            restoreScrollPosition(evScrollableElements);
          }, 0);
        } else {
          this.nativeFocus();
          restoreScrollPosition(evScrollableElements);
        }
      } else {
        this.nativeFocus();
      }
    };

    HTMLElement.prototype.focus = patchedFocus;
  }
})();

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

window.YTQueue = {
  hasRun: false,
  queuedItems: [],
  run: function run() {
    this.queuedItems.forEach(function (item) {
      return item();
    });
    this.queuedItems = [];
    this.hasRun = true;
    window.youtubeLoaded = true;
  },
  queueItem: function queueItem(item) {
    // eslint-disable-next-line no-unused-expressions
    this.hasRun ? item() : this.queuedItems.push(item);
  }
};

window.onYouTubeIframeAPIReady = function () {
  return window.YTQueue.run();
};

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

Avatar.theme = Avatar.theme || {};

Avatar.theme.BlogTagFilter = function BlogTagFilter() {
  var selectors = {
    blogTags: '[data-blog-tag-filter]'
  };

  function filterByTag() {
    var blogTags = document.querySelectorAll(selectors.blogTags);
    if (!blogTags.length) return;
    blogTags.forEach(function (tag) {
      tag.addEventListener('change', function (evt) {
        location.href = evt.target.value;
      });
    });
  }

  filterByTag();
  return {
    filterByTag: filterByTag
  };
}();

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/object-fit/ls.object-fit.js
var ls_object_fit = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/rias/ls.rias.js
var ls_rias = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/bgset/ls.bgset.js
var ls_bgset = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/aspectratio/ls.aspectratio.js
var ls_aspectratio = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/respimg/ls.respimg.js
var ls_respimg = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/focus-visible/dist/focus-visible.js
var focus_visible = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__(22);

// EXTERNAL MODULE: ./app/styles/theme.scss
var theme = __webpack_require__(35);

// EXTERNAL MODULE: ./app/styles/theme.css
var styles_theme = __webpack_require__(36);

// EXTERNAL MODULE: ./app/scripts/utilities/helpers.js
var helpers = __webpack_require__(6);

// CONCATENATED MODULE: ./app/scripts/utilities/base.js

Avatar.theme = Avatar.theme || {};

Avatar.theme.Base = function Base() {
  var selectors = {
    spinner: '.spinner'
  };

  function init() {
    initSpinner();
    helpers["d" /* focusFormStatus */]();
    helpers["i" /* swapImagePlaceholder */]();
    helpers["h" /* onLoadHideImagePlaceholder */]();
  }

  function initSpinner() {
    var state = document.readyState;
    var spinner = document.querySelector(selectors.spinner);

    if (state === 'interactive') {
      spinner.classList.add('hidden');

      spinner.ontransitionend = function () {
        spinner.classList.add('loaded');
      };
    }
  }

  init();
  return {
    init: init
  };
}();
// EXTERNAL MODULE: ./app/scripts/utilities/currency.js
var currency = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/@shopify/theme-sections/theme-sections.js + 1 modules
var theme_sections = __webpack_require__(3);

// CONCATENATED MODULE: ./app/scripts/utilities/sections.js

Avatar.theme = Avatar.theme || {};
Avatar.theme.sections = Avatar.theme.sections || {};

Avatar.theme.sections.register = function Sections() {
  Object(theme_sections["d" /* register */])('product-template', {
    onLoad: function onLoad() {
      Avatar.theme.Product.init();
    },
    onUnload: function onUnload() {
      Avatar.theme.Product.destroy();
    }
  });
  Object(theme_sections["d" /* register */])('blog-template', {
    onLoad: function onLoad() {
      Avatar.theme.BlogTagFilter.filterByTag();
    }
  });
}();
// EXTERNAL MODULE: ./app/scripts/utilities/theme-images.js
var theme_images = __webpack_require__(38);

// EXTERNAL MODULE: ./app/scripts/utilities/library-loader.js
var library_loader = __webpack_require__(23);

// EXTERNAL MODULE: ./app/scripts/utilities/utilities.js
var utilities = __webpack_require__(39);

// CONCATENATED MODULE: ./app/scripts/utilities/layout.js
var layout_selectors = {
  themeOverlay: '[data-overlay]'
};
var layout_classes = {
  overlayOpacity: 'tw-opacity-0',
  hidden: 'tw-hidden'
};
var overlay = document.querySelector(layout_selectors.themeOverlay);
var fadeInOverlay = function fadeInOverlay() {
  overlay.classList.remove(layout_classes.hidden);
  setTimeout(function () {
    overlay.classList.remove(layout_classes.overlayOpacity);
  }, 100);
};
var fadeOutOverlay = function fadeOutOverlay() {
  overlay.classList.add(layout_classes.overlayOpacity);
  setTimeout(function () {
    overlay.classList.add(layout_classes.hidden);
  }, 100);
};
var scrollLock = function scrollLock() {
  var mobileOverflow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  document.documentElement.style.overflow = 'hidden';
  document.body.scroll = 'no';

  if (mobileOverflow === 1 && window.innerWidth < 640) {
    document.body.style.overflow = 'hidden';
  }
};
var scrollUnlock = function scrollUnlock() {
  var mobileOverflow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  document.documentElement.style.overflow = '';
  document.body.scroll = '';

  if (mobileOverflow === 1 && window.innerWidth < 640) {
    document.body.style.overflow = '';
  }
};
/* Based on the prepareTransition by Jonathan Snook */

/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */

var prepareTransition = function prepareTransition(element) {
  element.addEventListener('transitionend', function (event) {
    event.currentTarget.classList.remove('is-transitioning');
  }, {
    once: true
  });
  var properties = ['transition-duration', '-moz-transition-duration', '-webkit-transition-duration', '-o-transition-duration'];
  var duration = 0;
  properties.forEach(function (property) {
    var computedValue = getComputedStyle(element)[property];

    if (computedValue) {
      computedValue.replace(/\D/g, '');
      duration || (duration = parseFloat(computedValue));
    }
  });

  if (duration !== 0) {
    element.classList.add('is-transitioning');
    element.offsetWidth;
  }
};
// EXTERNAL MODULE: ./app/scripts/utilities/rte.js
var rte = __webpack_require__(40);

// CONCATENATED MODULE: ./app/scripts/utilities/local-storage-cookie.js
var setExpiration = function setExpiration(name, days) {
  var date = new Date();
  var secondsFromNow = 1000 * 60 * 60 * 24 * days;
  var expires = date.setTime(date.getTime() + secondsFromNow);
  window.localStorage.setItem(name, expires);
  return true;
};
var checkExpiration = function checkExpiration(name, days) {
  var expires = window.localStorage.getItem(name);
  var now = new Date().getTime();

  if (parseInt(expires - now, 10) <= 0) {
    setExpiration(name, days);
    return false;
  }

  return true;
};
var get = function get(name) {
  return window.localStorage.getItem(name);
};
// EXTERNAL MODULE: ./app/scripts/utilities/prevent-scroll-poly.js
var prevent_scroll_poly = __webpack_require__(41);

// EXTERNAL MODULE: ./app/scripts/utilities/queue-youtube.js
var queue_youtube = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/@shopify/theme-predictive-search/src/theme-predictive-search.js + 7 modules
var theme_predictive_search = __webpack_require__(27);

// CONCATENATED MODULE: ./app/scripts/components/predictive-search.js


Avatar.theme = Avatar.theme || {};

function Search() {
  var _this = this;

  var selectors = {
    searchForm: '[data-search-form]',
    searchInput: '[data-search-input]',
    searchResults: '[data-predictive-search-results]',
    searchResult: '[data-search-result]',
    searchClear: '[data-search-clear]'
  };
  var classes = {
    itemSelected: 'predictive-search-item--selected',
    searchHeader: 'predictive-search__list-header',
    hide: 'tw-hidden'
  };
  this.searchForms = document.querySelectorAll(selectors.searchForm);
  this.searchInputs = document.querySelectorAll(selectors.searchInput);
  this.searchResults = document.querySelectorAll(selectors.searchResults);
  this.searchResult = document.querySelectorAll(selectors.searchResult);
  this.searchClear = document.querySelectorAll(selectors.searchClear);
  var searchConfig = searchConfig || {};
  var isResultVisible = false;
  var allSearchResults;
  var searchKeyword;
  var strings = Avatar.theme.i18n.search;
  var searchSettings = Avatar.theme.settings.search;
  var searchPath = "".concat(Avatar.shop.root !== '/' ? Avatar.shop.root : '', "/search");
  searchConfig.TYPES = ['product'];
  searchSettings.showCollections && searchConfig.TYPES.push('collection');
  searchSettings.showArticles && searchConfig.TYPES.push('article');
  searchSettings.showPages && searchConfig.TYPES.push('page');
  searchConfig.FIELDS = ['title'];
  searchSettings.searchType && searchConfig.FIELDS.push('product_type');
  searchSettings.searchVendor && searchConfig.FIELDS.push('vendor');
  searchSettings.searchTag && searchConfig.FIELDS.push('tag');
  searchSettings.searchSku && searchConfig.FIELDS.push('variants.sku');
  searchSettings.searchVariantTitle && searchConfig.FIELDS.push('variants.title');
  searchSettings.searchBarcode && searchConfig.FIELDS.push('variants.barcode');
  searchSettings.searchDescriptions && searchConfig.FIELDS.push('body');
  searchSettings.searchAuthor && searchConfig.FIELDS.push('author');
  searchConfig.UNAVAILABLE_PRODUCTS = searchSettings.showUnavailableProducts;
  searchConfig.LIMIT = searchSettings.limit;

  var init = function init() {
    if (!canInitializePredictiveSearch()) {
      return;
    }

    addInputEventListeners();

    _addBodyEventListener();

    initPredictiveSearch(searchConfig);
    handleSearch();
  };

  var predictiveSearch = new theme_predictive_search["a" /* default */]({
    search_path: searchPath,
    resources: {
      type: searchConfig.TYPES.join(','),
      limit: searchConfig.LIMIT,
      options: {
        unavailable_products: searchConfig.UNAVAILABLE_PRODUCTS,
        fields: searchConfig.FIELDS.join(',')
      }
    }
  });

  function isPredictiveSearchSupported() {
    if (Avatar.theme.current.pageType === 'password') return false;
    var shopifyFeatures = JSON.parse(document.getElementById('shopify-features').textContent);
    return shopifyFeatures.predictiveSearch;
  }

  function isPredictiveSearchEnabled() {
    return searchSettings.enabled;
  }

  function canInitializePredictiveSearch() {
    return isPredictiveSearchSupported() && isPredictiveSearchEnabled();
  }

  var handleSearch = function handleSearch() {
    if (_this.searchInputs) {
      _this.searchInputs.forEach(function (input) {
        input.addEventListener('keyup', handleSearchInput);
        input.addEventListener('focusin', handleSearchInput);
      });
    }
  };

  var handleSearchInput = function handleSearchInput(evt) {
    var currentTarget = evt.currentTarget;
    var searchValue = currentTarget.value;
    var isFocus = currentTarget === document.activeElement;
    toggleClearButton(searchValue);
    var UP_ARROW_KEY_CODE = 38;
    var DOWN_ARROW_KEY_CODE = 40;
    var RETURN_KEY_CODE = 13;
    var ESCAPE_KEY_CODE = 27;

    if (evt.keyCode === UP_ARROW_KEY_CODE || evt.keyCode === DOWN_ARROW_KEY_CODE || evt.keyCode === RETURN_KEY_CODE || evt.keyCode === ESCAPE_KEY_CODE) {
      evt.preventDefault();

      _handleInputKeyup(evt);

      return false;
    }

    if (searchValue.length > 0 && isFocus) {
      if (searchKeyword !== searchValue) {
        predictiveSearch.query(searchValue);
      }

      showResults();
    } else {
      hideResults();
    }
  };

  var showResults = function showResults() {
    _this.searchResults.forEach(function (results) {
      return results.classList.add('active');
    });

    _this.searchInputs.forEach(function (input) {
      return input.setAttribute('aria-expanded', true);
    });

    isResultVisible = true;
  };

  var hideResults = function hideResults() {
    _this.searchResults.forEach(function (results) {
      return results.classList.remove('active');
    });

    _this.searchInputs.forEach(function (input) {
      return input.setAttribute('aria-expanded', false);
    });

    isResultVisible = false;
  }; // Render Results


  function renderSearchResults(results, query, count) {
    return ['<div class="predictive-search__list p-0 m-0">', '<ul id="predictive-search-results" class="predictive-search__list-wrapper">', renderCollections(results.collections), renderProducts(results.products), renderArticles(results.articles), renderPages(results.pages), '</ul>', renderViewAll(query, count), '</div>'].join('');
  }

  function renderNoResults(results, query, count) {
    return ['<ul id="predictive-search-results" class="predictive-search__list p-0 m-0">', "<li class=\"predictive-search-item predictive-search-item--none text-center p-3\">\n        ".concat(strings.results.none, " &ldquo;").concat(helpers["g" /* htmlEscape */](query), "&rdquo;\n      </li>"), renderViewAll(query, count), '</ul>'].join('');
  } // Render Collections


  function renderCollections(collections) {
    if (collections === undefined || !collections.length) {
      return '';
    }

    return ["<li class=\"predictive-search__list-header p-2\">".concat(strings.placeholders.collections, "</li>"), collections.map(function (collection) {
      return renderCollection(collection);
    }).join('')].join('');
  }

  function renderCollection(collection) {
    return "<li class=\"predictive-search-item\" data-search-result>\n              <a href=\"".concat(collection.url, "\" class=\"d-flex align-items-center p-2\">\n                ").concat(renderResultImg(collection.featured_image, 'collection'), "\n                <div class=\"predictive-search-item__content pl-3\">\n                  <span class=\"font-head\">").concat(collection.title, "</span>\n                </div>\n              </a>\n            </li>");
  } // Render Products


  function renderProducts(products) {
    if (products === undefined || !products.length) {
      return '';
    }

    return ["<li class=\"predictive-search__list-header pt-2 mt-2 px-2\">\n       ".concat(strings.placeholders.products, "\n      </li>"), products.map(function (product) {
      return renderProduct(normalizeProduct(product));
    }).join('')].join('');
  }

  function renderProduct(product) {
    return "<li class=\"predictive-search-item\" data-search-result>\n              <a href=\"".concat(product.url, "\" class=\"d-flex align-items-center p-2\">\n                ").concat(renderResultImg(product.image, 'product'), "\n                <div class=\"predictive-search-item__content pl-3\">\n                  <span class=\"font-head\">\n                    ").concat(product.title, "\n                  </span>\n                  ").concat(renderProductDetails(product), "\n                </div>\n              </a>\n            </li>");
  }

  function normalizeProduct(product) {
    var productOrVariant = product.variants.length > 0 ? product.variants[0] : product;
    return {
      url: productOrVariant.url,
      image: getProductImage(product),
      title: product.title,
      vendor: product.vendor || '',
      price: Avatar.theme.Currency.formatMoney(product.price_min),
      compareAtPrice: Avatar.theme.Currency.formatMoney(product.compare_at_price_min),
      available: product.available,
      isOnSale: isOnSale(product),
      isPriceVaries: isPriceVaries(product),
      isCompareVaries: isCompareVaries(product)
    };
  }

  function getProductImage(product) {
    var image;
    var featuredImage;

    if (product.variants.length > 0 && product.variants[0].image !== null) {
      featuredImage = product.variants[0].featured_image;
    } else if (product.image) {
      featuredImage = product.featured_image;
    } else {
      image = null;
    }

    if (image !== null) {
      image = {
        url: featuredImage.url,
        alt: featuredImage.alt
      };
    }

    return image;
  }

  function renderProductDetails(product) {
    return "<dl class=\"predictive-search-item__details\">\n             <div class=\"predictive-search-item__detail predictive-search-item__detail--inline\">\n               ".concat(renderProductPrice(product), "\n             </div>\n           </dl>");
  }

  function isOnSale(product) {
    return product.compare_at_price_min !== null && parseInt(product.compare_at_price_min, 10) > parseInt(product.price_min, 10);
  }

  function isPriceVaries(product) {
    return product.price_max !== product.price_min;
  }

  function isCompareVaries(product) {
    return product.compare_at_price_max !== product.compare_at_price_min;
  }

  function renderProductPrice(product) {
    var priceMarkup = "<div class=\"price__regular\">".concat(renderPrice(product), "</div>");
    var salePriceMarkup = "<div class=\"price__sale d-flex align-items-baseline\">".concat(renderSalePrice(product), "</div>");
    return "<div class=\"price__pricing-group font-600\">\n              ".concat(product.isOnSale ? salePriceMarkup : priceMarkup, "\n            </div>");
  }

  function renderSalePrice(product) {
    return ['<dt>', "<span class=\"sr-only\">".concat(Avatar.theme.i18n.salePrice, "</span>"), '</dt>', '<dd>', "<span class=\"sale tw-text-price font-body\">\n      ".concat(product.isPriceVaries ? strings.fromLowestPrice.replace('[price]', product.price) : product.price, "\n        </span>"), '</dd>', renderCompareAtPrice(product)].join('');
  }

  function renderCompareAtPrice(product) {
    return ['<dt>', "<span class=\"sr-only\">".concat(Avatar.theme.i18n.regularPrice, "</span> "), '</dt>', '<dd>', "<s class=\"compare ml-1 tw-text-price-sale font-body\">\n        ".concat(product.compareAtPrice, "\n      </s>"), '</dd>'].join('');
  }

  function renderPrice(product) {
    return ['<dt>', "<span class=\"sr-only\">".concat(Avatar.theme.i18n.regularPrice, "</span>"), '</dt>', '<dd>', "<span class=\"regular font-body\">\n        ".concat(product.isPriceVaries ? strings.fromLowestPrice.replace('[price]', product.price) : product.price, "\n      </span>"), '</dd>'].join('');
  } // Render Pages


  function renderPages(pages) {
    if (pages === undefined || !pages.length) {
      return '';
    }

    return ["<li class=\"predictive-search__list-header pt-2 mt-2 px-2\">\n        ".concat(strings.placeholders.pages, "\n      </li>"), pages.map(function (page) {
      return renderPage(page);
    }).join('')].join('');
  }

  function renderPage(page) {
    return "<li class=\"predictive-search-item \" data-search-result>\n              <a href=\"".concat(page.url, "\" class=\"d-flex align-items-center p-2\">\n                ").concat(renderFallbackImg('page'), "\n                <div class=\"predictive-search-item__content pl-3 font-head\">\n                  ").concat(page.title, "\n                </div>\n              </a>\n            </li>");
  } // Render Articles


  function renderArticles(articles) {
    if (articles === undefined || !articles.length) {
      return '';
    }

    return ["<li class=\"predictive-search__list-header pt-2 mt-2 px-2\">\n        ".concat(strings.placeholders.articles, "\n      </li>"), articles.map(function (article) {
      return renderArticle(article);
    }).join('')].join('');
  }

  function renderArticle(article) {
    return "<li class=\"predictive-search-item\" data-search-result>\n              <a href=\"".concat(article.url, "\" class=\"d-flex align-items-center p-2\">\n                ").concat(renderResultImg(article.featured_image, 'article'), "\n                <div class=\"predictive-search-item__content pl-3 font-head\">\n                  ").concat(article.title, "\n                </div>\n              </a>\n            </li>");
  } // Render Images


  function renderResultImg(image, type) {
    if (image !== null && image.url !== null) {
      return "<img class=\"predictive-search-item__image lazyload\" data-src=\"".concat(Shopify.theme.ThemeImages.getSizedImageUrl(image.url, '120x'), "\" alt=\"").concat(image.alt, "\" data-image-loading-placeholder/>");
    }

    return renderFallbackImg(type);
  }

  function renderFallbackImg(type) {
    var icon;

    switch (type) {
      case 'collection':
        icon = Avatar.icons.collection;
        break;

      case 'product':
        icon = Avatar.icons.product;
        break;

      case 'page':
        icon = Avatar.icons.page;
        break;

      case 'article':
        icon = Avatar.icons.article;
        break;

      default:
        icon = Avatar.icons.product;
        break;
    }

    return "<img class=\"predictive-search-item__image lazyload\" src=\"".concat(icon, "\" alt=\"").concat(type, "\"/>");
  } // Render View All


  function renderViewAll(query, count) {
    if (count === 0) {
      return '';
    }

    return "<div class=\"predictive-search-item predictive-search-view-all\" data-search-result>\n              <button\n                class=\"predictive-search-view-all__button py-2 tw-font-semibold\"\n                type=\"submit\">\n                ".concat(strings.results.show, " &ldquo;").concat(helpers["g" /* htmlEscape */](query), "&rdquo;\n              </button>\n            </div>");
  } // Initialize


  var initPredictiveSearch = function initPredictiveSearch() {
    predictiveSearch.on('success', function (json) {
      var results = json.resources.results;
      var query = json.query;
      var collections = results.collections,
          products = results.products,
          articles = results.articles,
          pages = results.pages;
      var resultsArray = [];
      collections && resultsArray.push(collections);
      products && resultsArray.push(products);
      articles && resultsArray.push(articles);
      pages && resultsArray.push(pages);
      var resultsCount = resultsArray.flat().length;
      var resultsHtml;

      if (resultsCount > 0) {
        resultsHtml = renderSearchResults(results, query, resultsCount);
        allSearchResults = resultsArray;
        searchKeyword = query;
      } else {
        resultsHtml = renderNoResults(results, query, resultsCount);
        allSearchResults = null;
      }

      _this.searchResults.forEach(function (container) {
        // eslint-disable-next-line no-param-reassign
        container.innerHTML = resultsHtml;
      });
    });
    predictiveSearch.on('error', function (error) {
      console.log(error);
    });
  }; // Helpers


  var addInputEventListeners = function addInputEventListeners() {
    if (!_this.searchInputs) {
      return;
    } // input.addEventListener("focus", this._handleInputFocus);
    // input.addEventListener("blur", this._handleInputBlur);
    // input.on("keyup", _handleInputKeyup);
    // form.on('submit', _handleFormSubmit);


    _this.searchInputs.forEach(function (input) {
      return input.addEventListener('keydown', _handleInputKeydown);
    });

    _this.searchClear.forEach(function (clear) {
      return clear.addEventListener('click', _handleClearSearch.bind(_this));
    }); // input.on('keydown', _handleInputKeydown);
    // if (reset) {
    //   this._handleInputReset = this._handleInputReset.bind(this);
    //   reset.addEventListener("click", this._handleInputReset);
    // }

  };

  function _handleInputKeydown(evt) {
    var UP_ARROW_KEY_CODE = 38;
    var DOWN_ARROW_KEY_CODE = 40;
    var RETURN_KEY_CODE = 13; // Prevent the cursor from moving in the input when using the up and down arrow keys

    if (evt.keyCode === UP_ARROW_KEY_CODE || evt.keyCode === DOWN_ARROW_KEY_CODE || evt.keyCode === RETURN_KEY_CODE) {
      evt.preventDefault();
    }
  }

  function _handleInputKeyup(evt) {
    var UP_ARROW_KEY_CODE = 38;
    var DOWN_ARROW_KEY_CODE = 40;
    var RETURN_KEY_CODE = 13;
    var ESCAPE_KEY_CODE = 27;
    var BACKSPACE = 8;

    if (isResultVisible && allSearchResults !== null) {
      if (evt.keyCode === UP_ARROW_KEY_CODE) {
        _navigateOption(evt, 'UP');

        return true;
      }

      if (evt.keyCode === DOWN_ARROW_KEY_CODE) {
        _navigateOption(evt, 'DOWN');

        return true;
      }

      if (evt.keyCode === RETURN_KEY_CODE) {
        _selectOption();

        return true;
      }
    }

    if (evt.keyCode === ESCAPE_KEY_CODE) {
      resetSearch();
    }

    if (BACKSPACE === 8 && evt.target.value.length <= 0) {
      hideResults();
    }

    return true;
  }

  function _getSelectedOption() {
    var results = document.querySelector(selectors.searchResults);
    return results.querySelector(".".concat(classes.itemSelected));
  }

  var _selectOption = function _selectOption() {
    var selectedOption = _getSelectedOption();

    if (selectedOption) {
      selectedOption.querySelector('a, button').click();
    } // Let returns still submit form


    if (selectedOption === null && searchKeyword.length !== 0) {
      var searchForm = _this.searchForms[0];
      var searchInput = searchForm.querySelector(selectors.searchInput);
      var submitValue = searchKeyword;
      searchInput.value = submitValue;
      searchForm.submit();
    }
  };

  function _handleClearSearch(evt) {
    evt.preventDefault();
    resetSearch();
  }

  var resetSearch = function resetSearch() {
    _this.searchInputs.forEach(function (input) {
      // eslint-disable-next-line no-param-reassign
      input.value = '';
    });

    var searchList = document.querySelectorAll('.predictive-search__list');
    searchList.forEach(function (list) {
      return list.remove();
    });
    searchKeyword = '';
    hideResults();
    toggleClearButton(searchKeyword);
  };

  var toggleClearButton = function toggleClearButton(value) {
    if (value.length > 0) {
      _this.searchClear.forEach(function (clear) {
        clear.classList.remove(classes.hide);
      });
    } else {
      _this.searchClear.forEach(function (clear) {
        clear.classList.add(classes.hide);
      });
    }
  };

  function _navigateOption(evt, direction) {
    var results = document.querySelector(selectors.searchResults);

    var currentOption = _getSelectedOption();

    if (!currentOption) {
      var firstOption = results.querySelector(selectors.searchResult);
      firstOption.classList.add(classes.itemSelected); // this._updateAccessibilityAttributesAfterSelectingElement(null, firstOption);
    } else if (direction === 'DOWN') {
      var nextOption = currentOption.nextElementSibling;

      if (nextOption && nextOption.classList.contains(classes.searchHeader)) {
        nextOption = currentOption.nextElementSibling.nextElementSibling;
      }

      if (nextOption) {
        currentOption.classList.remove(classes.itemSelected);
        nextOption.classList.add(classes.itemSelected); // this._updateAccessibilityAttributesAfterSelectingElement(
        //   currentOption,
        //   nextOption
        // );
      }
    } else {
      var previousOption = currentOption.previousElementSibling;

      if (previousOption.classList.contains(classes.searchHeader)) {
        previousOption = currentOption.previousElementSibling.previousElementSibling;
      }

      if (previousOption) {
        currentOption.classList.remove(classes.itemSelected);
        previousOption.classList.add(classes.itemSelected); // this._updateAccessibilityAttributesAfterSelectingElement(
        //   currentOption,
        //   previousOption
        // );
      }
    }
  } // function _handleFormSubmit(evt) {
  //   if (_getSelectedOption() != null) {
  //     evt.preventDefault();
  //     _selectOption();
  //     return true;
  //   }
  // }


  function _addBodyEventListener() {
    document.querySelector('body').addEventListener('mousedown', _handleBodyMousedown);
  }

  function _handleBodyMousedown(evt) {
    if (isResultVisible && allSearchResults !== null) {
      if (evt.target.isEqualNode(document.querySelector(selectors.searchInput)) || evt.target.closest(selectors.searchResults) || evt.target.closest(selectors.searchResult) || evt.target.closest(selectors.searchForm)) {
        return false;
      }

      hideResults();
    }
  }

  function _removeBodyEventListener() {
    document.querySelector('body').removeEventListener('mousedown', _handleBodyMousedown);
  }

  var removeInputEventListeners = function removeInputEventListeners() {
    if (!_this.searchInputs) {
      return;
    }

    _this.searchInputs.forEach(function (input) {
      input.removeEventListener('keydown', _handleInputKeydown);
      input.removeEventListener('keyup', handleSearchInput);
      input.removeEventListener('focusin', handleSearchInput);
    });

    _this.searchClear.forEach(function (clear) {
      return clear.addEventListener('click', _handleClearSearch);
    });
  };

  function destroy() {
    hideResults();

    _removeBodyEventListener();

    removeInputEventListeners();
  }

  init();
  return {
    init: init,
    initPredictiveSearch: initPredictiveSearch,
    destroy: destroy
  };
}

Avatar.theme.PredictiveSearch = new Search();
// EXTERNAL MODULE: ./app/scripts/components/blog-filter.js
var blog_filter = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(10);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./app/scripts/components/disclosures.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Avatar.theme = Avatar.theme || {}; // eslint-disable-next-line func-names

Avatar.theme.Disclosure = function () {
  var selectors = {
    disclosureForm: '[data-disclosure-form]',
    disclosureList: '[data-disclosure-list]',
    disclosureToggle: '[data-disclosure-toggle]',
    disclosureInput: '[data-disclosure-input]',
    disclosureOptions: '[data-disclosure-option]'
  };
  var classes = {
    listVisible: 'disclosure-list--visible',
    active: 'active-disclose',
    opacityFull: 'tw-opacity-100',
    opacityNone: 'tw-opacity-0',
    hide: 'tw-hidden'
  };

  function Disclosure(disclosure) {
    this.container = disclosure;

    this._cacheSelectors();

    this._setupListeners();
  }

  Disclosure.prototype = _objectSpread(_objectSpread({}, Disclosure.prototype), {}, {
    _cacheSelectors: function _cacheSelectors() {
      this.cache = {
        disclosureForm: this.container.closest(selectors.disclosureForm),
        disclosureList: this.container.querySelector(selectors.disclosureList),
        disclosureToggle: this.container.querySelector(selectors.disclosureToggle),
        disclosureInput: this.container.querySelector(selectors.disclosureInput),
        disclosureOptions: this.container.querySelectorAll(selectors.disclosureOptions)
      };
    },
    _setupListeners: function _setupListeners() {
      var _this = this;

      this.eventHandlers = this._setupEventHandlers();
      this.cache.disclosureToggle.addEventListener('click', this.eventHandlers.toggleList);
      this.cache.disclosureOptions.forEach(function (disclosureOption) {
        disclosureOption.addEventListener('click', _this.eventHandlers.connectOptions);
      }, this);
      this.container.addEventListener('keyup', this.eventHandlers.onDisclosureKeyUp);
      this.cache.disclosureList.addEventListener('focusout', this.eventHandlers.onDisclosureListFocusOut);
      this.cache.disclosureToggle.addEventListener('focusout', this.eventHandlers.onDisclosureToggleFocusOut);
      document.body.addEventListener('click', this.eventHandlers.onBodyClick);
    },
    _setupEventHandlers: function _setupEventHandlers() {
      return {
        connectOptions: this._connectOptions.bind(this),
        toggleList: this._toggleList.bind(this),
        onBodyClick: this._onBodyClick.bind(this),
        onDisclosureKeyUp: this._onDisclosureKeyUp.bind(this),
        onDisclosureListFocusOut: this._onDisclosureListFocusOut.bind(this),
        onDisclosureToggleFocusOut: this._onDisclosureToggleFocusOut.bind(this)
      };
    },
    _connectOptions: function _connectOptions(event) {
      event.preventDefault();

      this._submitForm(event.currentTarget.dataset.value);
    },
    _onDisclosureToggleFocusOut: function _onDisclosureToggleFocusOut(event) {
      var disclosureLostFocus = this.container.contains(event.relatedTarget) === false;

      if (disclosureLostFocus) {
        this._hideList();
      }
    },
    _onDisclosureListFocusOut: function _onDisclosureListFocusOut(event) {
      var childInFocus = event.currentTarget.contains(event.relatedTarget);
      var isVisible = this.cache.disclosureList.classList.contains(classes.active);

      if (isVisible && !childInFocus) {
        this._hideList();
      }
    },
    _onDisclosureKeyUp: function _onDisclosureKeyUp(event) {
      if (event.which !== 27) return;

      this._hideList();

      this.cache.disclosureToggle.focus();
    },
    _onBodyClick: function _onBodyClick(event) {
      var isOption = this.container.contains(event.target);
      var isVisible = this.cache.disclosureList.classList.contains(classes.active);

      if (isVisible && !isOption) {
        this._hideList();
      }
    },
    _submitForm: function _submitForm(value) {
      this.cache.disclosureInput.value = value;
      this.cache.disclosureForm.submit();
    },
    _hideList: function _hideList() {
      this.cache.disclosureList.classList.remove(classes.active, classes.opacityFull);
      this.cache.disclosureList.classList.add(classes.hide);
      this.cache.disclosureToggle.setAttribute('aria-expanded', false);
    },
    _toggleList: function _toggleList() {
      var ariaExpanded = this.cache.disclosureToggle.getAttribute('aria-expanded') === 'true';
      this.cache.disclosureList.classList.toggle(classes.active);

      if (this.cache.disclosureList.classList.contains(classes.opacityFull)) {
        this.cache.disclosureList.classList.replace(classes.opacityFull, classes.opacityNone);
        this.cache.disclosureList.classList.add(classes.hide);
      } else {
        this.cache.disclosureList.classList.remove(classes.hide);
        this.cache.disclosureList.classList.replace(classes.opacityNone, classes.opacityFull);
      }

      this.cache.disclosureToggle.setAttribute('aria-expanded', !ariaExpanded);
    },
    destroy: function destroy() {
      var _this2 = this;

      this.cache.disclosureToggle.removeEventListener('click', this.eventHandlers.toggleList);
      this.cache.disclosureOptions.forEach(function (disclosureOption) {
        disclosureOption.removeEventListener('click', _this2.eventHandlers.connectOptions);
      }, this);
      this.container.removeEventListener('keyup', this.eventHandlers.onDisclosureKeyUp);
      this.cache.disclosureList.removeEventListener('focusout', this.eventHandlers.onDisclosureListFocusOut);
      this.cache.disclosureToggle.removeEventListener('focusout', this.eventHandlers.onDisclosureToggleFocusOut);
      document.body.removeEventListener('click', this.eventHandlers.onBodyClick);
    }
  });
  return Disclosure;
}();
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./app/scripts/components/zoom.js




function zoom_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function zoom_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { zoom_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { zoom_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Avatar.theme = Avatar.theme || {}; // eslint-disable-next-line func-names

Avatar.theme.Zoom = function () {
  var selectors = {
    imageZoom: '[data-image-zoom]'
  };
  var attributes = {
    imageZoomTarget: 'data-image-zoom-target'
  };

  function Zoom(container) {
    this.container = container;
    this.cache = {};
    this.url = container.dataset.zoom;

    this._cacheSelectors();

    if (!this.cache.sourceImage) return;

    this._duplicateImage();
  }

  Zoom.prototype = zoom_objectSpread(zoom_objectSpread({}, Zoom.prototype), {}, {
    _cacheSelectors: function _cacheSelectors() {
      this.cache = {
        sourceImage: this.container.querySelector(selectors.imageZoom)
      };
    },
    _init: function _init() {
      var targetWidth = this.cache.targetImage.width;
      var targetHeight = this.cache.targetImage.height;

      if (this.cache.sourceImage === this.cache.targetImage) {
        this.sourceWidth = targetWidth;
        this.sourceHeight = targetHeight;
      } else {
        this.sourceWidth = this.cache.sourceImage.width;
        this.sourceHeight = this.cache.sourceImage.height;
      }

      this.xRatio = (this.cache.sourceImage.width - targetWidth) / this.sourceWidth;
      this.yRatio = (this.cache.sourceImage.height - targetHeight) / this.sourceHeight;
    },
    _start: function _start(evt) {
      this._init();

      this._move(evt);

      this.cache.sourceImage.style.opacity = 0;
    },
    _stop: function _stop() {
      this.cache.sourceImage.style.opacity = 1;
      this.cache.targetImage.style.opacity = 0;
    },
    _setTopLeftMaxValues: function _setTopLeftMaxValues(top, left) {
      return {
        left: Math.max(Math.min(left, this.sourceWidth), 0),
        top: Math.max(Math.min(top, this.sourceHeight), 0)
      };
    },
    _move: function _move(evt) {
      // eslint-disable-next-line max-len
      var left = evt.pageX - (this.cache.sourceImage.getBoundingClientRect().left + window.scrollX);
      var top = evt.pageY - (this.cache.sourceImage.getBoundingClientRect().top + window.scrollY);

      var position = this._setTopLeftMaxValues(top, left);

      top = position.top;
      left = position.left;
      this.cache.targetImage.style.left = "".concat(-(left * -this.xRatio), "px");
      this.cache.targetImage.style.top = "".concat(-(top * -this.yRatio), "px");
      this.cache.targetImage.style.opacity = 1;
    },
    _duplicateImage: function _duplicateImage() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var image;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this._loadImage().catch(function (error) {
                  console.warn('Error fetching image', error);
                });

              case 2:
                image = _context.sent;
                _this.cache.targetImage = image;
                image.style.width = "".concat(image.width, "px");
                image.style.height = "".concat(image.height, "px");
                image.style.position = 'absolute';
                image.style.maxWidth = 'none';
                image.style.maxHeight = 'none';
                image.style.opacity = 0;
                image.style.border = 'none';
                image.style.left = 0;
                image.style.top = 0;

                _this.container.appendChild(image);

                if (!(image.width < 600 || image.height < 600)) {
                  _context.next = 17;
                  break;
                }

                // eslint-disable-next-line max-len
                console.warn("Uploaded image is too small to zoom. Zoomable images need to be at least 600x600, current upload is ".concat(image.width, "x").concat(image.height, " - ").concat(image.src));
                return _context.abrupt("return");

              case 17:
                _this._init();

                _this._start = _this._start.bind(_this);
                _this._stop = _this._stop.bind(_this);
                _this._move = _this._move.bind(_this);

                _this.container.addEventListener('mouseenter', _this._start);

                _this.container.addEventListener('mouseleave', _this._stop);

                _this.container.addEventListener('mousemove', _this._move);

                _this.container.style.position = 'relative';
                _this.container.style.overflow = 'hidden';

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    _loadImage: function _loadImage() {
      var _this2 = this;

      // eslint-disable-next-line
      return new Promise(function (resolve, reject) {
        var image = new Image();
        image.setAttribute('role', 'presentation');
        image.setAttribute(attributes.imageZoomTarget, true);
        image.src = _this2.url;
        image.addEventListener('load', function () {
          return resolve(image);
        });
        image.addEventListener('error', function (error) {
          return reject(error);
        });
      });
    },
    unload: function unload() {
      var targetImage = this.container.querySelector("[".concat(attributes.imageZoomTarget, "]"));

      if (targetImage) {
        targetImage.remove();
      }

      this.container.removeEventListener('mouseenter', this._start);
      this.container.removeEventListener('mouseleave', this._stop);
      this.container.removeEventListener('mousemove', this._move);
    }
  });
  return Zoom;
}();
// CONCATENATED MODULE: ./app/scripts/components/product-model.js

Avatar.theme = Avatar.theme || {};

Avatar.theme.ProductModel = function () {
  var modelJsonSections = {};
  var models = {};
  var xrButtons = {};
  var selectors = {
    sectionById: function sectionById(id) {
      return "#shopify-section-".concat(id);
    },
    productMediaTypeModel: '[data-product-media-type-model]',
    mediaGroup: '[data-product-single-media-group]',
    xrButton: '[data-shopify-xr]',
    modelViewer: '.model-viewer',
    jsonModelById: function jsonModelById(id) {
      return "#ModelJson-".concat(id);
    }
  };
  var attributes = {
    mediaId: 'data-media-id',
    modelId: 'data-model-id'
  };

  function init(sectionId) {
    var section = document.querySelector(selectors.sectionById(sectionId));
    var modelViewerContainers = section.querySelectorAll(selectors.productMediaTypeModel);
    if (modelViewerContainers.length < 1) return;
    modelJsonSections[sectionId] = {
      loaded: false
    };
    modelViewerContainers.forEach(function (modelViewerContainer, index) {
      var mediaId = modelViewerContainer.getAttribute(attributes.mediaId);
      var modelViewerElement = modelViewerContainer.querySelector(selectors.modelViewer);
      var modelId = modelViewerElement.getAttribute(attributes.modelId);

      if (index === 0) {
        var mediaGroup = modelViewerContainer.closest(selectors.mediaGroup);
        var xrButton = mediaGroup.querySelector(selectors.xrButton);
        xrButtons[sectionId] = {
          element: xrButton,
          defaultId: modelId
        };
      }

      models[mediaId] = {
        modelId: modelId,
        sectionId: sectionId,
        container: modelViewerContainer,
        element: modelViewerElement
      };
    });
    window.Shopify.loadFeatures([{
      name: 'shopify-xr',
      version: '1.0',
      onLoad: setupShopifyXr
    }, {
      name: 'model-viewer-ui',
      version: '1.0',
      onLoad: setupModelViewerUi
    }]);
    Avatar.theme.LibraryLoader.load('modelViewerUiStyles');
  }

  function setupShopifyXr(errors) {
    if (errors) return;

    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', function () {
        setupShopifyXr();
      });
      return;
    }

    for (var sectionId in modelJsonSections) {
      if (modelJsonSections.hasOwnProperty(sectionId)) {
        var modelSection = modelJsonSections[sectionId];
        if (modelSection.loaded) continue;
        var modelJson = document.querySelector(selectors.jsonModelById(sectionId));
        window.ShopifyXR.addModels(JSON.parse(modelJson.innerHTML));
        modelSection.loaded = true;
      }
    }

    window.ShopifyXR.setupXRElements();
  }

  function setupModelViewerUi(errors) {
    if (errors) {
      return;
    }

    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];

        if (!model.modelViewerUi) {
          model.modelViewerUi = new Shopify.ModelViewerUI(model.element);
        }

        setupModelViewerListeners(model);
      }
    }
  }

  function setupModelViewerListeners(model) {
    var xrButton = xrButtons[model.sectionId];
    model.container.addEventListener('mediaVisible', function (evt) {
      xrButton.element.setAttribute('data-shopify-model3d-id', model.modelId);
      var swiper = evt.detail.swiper;
      swiper.allowTouchMove = false;
    });
    model.container.addEventListener('mediaHidden', function (evt) {
      xrButton.element.setAttribute('data-shopify-model3d-id', xrButton.defaultId);
      var swiper = evt.detail.swiper;
      swiper.allowTouchMove = true;
    });
  }

  function removeSectionModels(sectionId) {
    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];

        if (model.sectionId === sectionId) {
          models[key].modelViewerUi.destroy();
          delete models[key];
        }
      }
    }

    delete modelJsonSections[sectionId];
  }

  return {
    init: init,
    removeSectionModels: removeSectionModels
  };
}();
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(11);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./app/scripts/components/product-form.js

Avatar.theme = Avatar.theme || {};

function Listeners() {
  this.entries = [];
}

Listeners.prototype.add = function (element, event, fn) {
  this.entries.push({
    element: element,
    event: event,
    fn: fn
  });
  element.addEventListener(event, fn);
};

Listeners.prototype.removeAll = function () {
  this.entries = this.entries.filter(function (listener) {
    listener.element.removeEventListener(listener.event, listener.fn);
    return false;
  });
};

var product_form_selectors = {
  idInput: '[name="id"]',
  optionInput: '[name^="options"]',
  quantityInput: '[name="quantity"]',
  propertyInput: '[name^="properties"]'
};

Avatar.theme.ProductForm = function ProductFormFn(element, product, options) {
  this.element = element;
  this.product = _validateProductObject(product);
  options = options || {};
  this._listeners = new Listeners();

  this._listeners.add(this.element, 'submit', this._onSubmit.bind(this, options));

  this.optionInputs = this._initInputs(product_form_selectors.optionInput, options.onOptionChange); // this.quantityInputs = this._initInputs(
  //   selectors.quantityInput,
  //   options.onQuantityChange
  // );

  this.propertyInputs = this._initInputs(product_form_selectors.propertyInput, options.onPropertyChange);
};

Avatar.theme.ProductForm.prototype.destroy = function () {
  this._listeners.removeAll();
};

Avatar.theme.ProductForm.prototype.options = function () {
  return _serializeOptionValues(this.optionInputs, function (item) {
    var regex = /(?:^(options\[))(.*?)(?:\])/;
    item.name = regex.exec(item.name)[2]; // Use just the value between 'options[' and ']'

    return item;
  });
};

Avatar.theme.ProductForm.prototype.variant = function () {
  return getVariantFromSerializedArray(this.product, this.options());
};

Avatar.theme.ProductForm.prototype.properties = function () {
  var properties = _serializePropertyValues(this.propertyInputs, function (propertyName) {
    var regex = /(?:^(properties\[))(.*?)(?:\])/;
    var name = regex.exec(propertyName)[2]; // Use just the value between 'properties[' and ']'

    return name;
  });

  return Object.entries(properties).length === 0 ? null : properties;
};

Avatar.theme.ProductForm.prototype.quantity = function () {
  return this.quantityInputs[0] ? Number.parseInt(this.quantityInputs[0].value, 10) : 1;
};

Avatar.theme.ProductForm.prototype._setIdInputValue = function (value) {
  var idInputElement = this.element.querySelector(product_form_selectors.idInput);

  if (!idInputElement) {
    idInputElement = document.createElement('input');
    idInputElement.type = 'hidden';
    idInputElement.name = 'id';
    this.element.appendChild(idInputElement);
  }

  idInputElement.value = value.toString();
};

Avatar.theme.ProductForm.prototype._onSubmit = function (options, event) {
  event.dataset = this._getProductFormEventData();

  if (event.dataset.variant) {
    this._setIdInputValue(event.dataset.variant.id);
  }

  if (options.onFormSubmit) {
    options.onFormSubmit(event);
  }
};

Avatar.theme.ProductForm.prototype._onFormEvent = function (cb) {
  if (typeof cb === 'undefined') {
    return Function.prototype;
  }

  return function (event) {
    event.dataset = this._getProductFormEventData();
    cb(event);
  }.bind(this);
};

Avatar.theme.ProductForm.prototype._initInputs = function (selector, cb) {
  var elements = Array.prototype.slice.call(this.element.querySelectorAll(selector));
  return elements.map(function (element) {
    this._listeners.add(element, 'change', this._onFormEvent(cb));

    return element;
  }.bind(this));
};

Avatar.theme.ProductForm.prototype._getProductFormEventData = function () {
  return {
    options: this.options(),
    variant: this.variant(),
    properties: this.properties() // quantity: this.quantity()

  };
};

function _serializeOptionValues(inputs, transform) {
  return inputs.reduce(function (options, input) {
    if (input.checked // If input is a checked (means type radio or checkbox)
    || input.type !== 'radio' && input.type !== 'checkbox' // Or if its any other type of input
    ) {
        options.push(transform({
          name: input.name,
          value: input.value
        }));
      }

    return options;
  }, []);
}

function _serializePropertyValues(inputs, transform) {
  return inputs.reduce(function (properties, input) {
    if (input.checked // If input is a checked (means type radio or checkbox)
    || input.type !== 'radio' && input.type !== 'checkbox' // Or if its any other type of input
    ) {
        properties[transform(input.name)] = input.value;
      }

    return properties;
  }, {});
}

function _validateProductObject(product) {
  if (typeof_default()(product) !== 'object') {
    throw new TypeError("".concat(product, " is not an object."));
  }

  if (typeof product.variants[0].options === 'undefined') {
    throw new TypeError('Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route');
  }

  return product;
} // Theme Product Helpers


function getVariantFromSerializedArray(product, collection) {
  _validateProductStructure(product); // If value is an array of options


  var optionArray = _createOptionArrayFromOptionCollection(product, collection);

  return getVariantFromOptionArray(product, optionArray);
}

function _createOptionArrayFromOptionCollection(product, collection) {
  _validateProductStructure(product);

  _validateSerializedArray(collection);

  var optionArray = [];
  collection.forEach(function (option) {
    for (var i = 0; i < product.options.length; i++) {
      if (product.options[i].name.toLowerCase() === option.name.toLowerCase()) {
        optionArray[i] = option.value;
        break;
      }
    }
  });
  return optionArray;
}

function getVariantFromOptionArray(product, options) {
  _validateProductStructure(product);

  _validateOptionsArray(options);

  var result = product.variants.filter(function (variant) {
    return options.every(function (option, index) {
      return variant.options[index] === option;
    });
  });
  return result[0] || null;
}

function _validateProductStructure(product) {
  if (typeof_default()(product) !== 'object') {
    throw new TypeError(product + ' is not an object.');
  }

  if (Object.keys(product).length === 0 && product.constructor === Object) {
    throw new Error(product + ' is empty.');
  }
}

function _validateSerializedArray(collection) {
  if (!Array.isArray(collection)) {
    throw new TypeError(collection + ' is not an array.');
  }

  if (collection.length === 0) {
    return [];
  }

  if (collection[0].hasOwnProperty('name')) {
    if (typeof collection[0].name !== 'string') {
      throw new TypeError('Invalid value type passed for name of option ' + collection[0].name + '. Value should be string.');
    }
  } else {
    throw new Error(collection[0] + 'does not contain name key.');
  }
}

function _validateOptionsArray(options) {
  if (Array.isArray(options) && typeof_default()(options[0]) === 'object') {
    throw new Error(options + 'is not a valid array of options.');
  }
}
// CONCATENATED MODULE: ./app/scripts/components/tabs.js


function tabs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tabs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tabs_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tabs_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Avatar.theme = Avatar.theme || {};

Avatar.theme.Tabs = function TabsFn() {
  var selectors = {
    tabLink: '[data-toggle="tab"]',
    tabPane: '.tab-pane',
    tabContainer: '[data-tabs]',
    tabById: function tabById(id) {
      return "#".concat(id);
    }
  };
  var classes = {
    active: 'active'
  };

  function Tabs(tabs) {
    this.container = tabs;

    this._cacheSelectors();

    this._setupListeners();
  }

  Tabs.prototype = tabs_objectSpread(tabs_objectSpread({}, Tabs.prototype), {}, {
    _cacheSelectors: function _cacheSelectors() {
      this.cache = {
        tabLinks: this.container.querySelectorAll(selectors.tabLink),
        tabPanes: this.container.querySelectorAll(selectors.tabPane)
      };
    },
    _setupListeners: function _setupListeners() {
      var _this = this;

      this.eventHandlers = this._setupEventHandlers();
      this.cache.tabLinks.forEach(function (tabLink) {
        tabLink.addEventListener('click', _this.eventHandlers.handleTabLinkClick);
      });
    },
    _setupEventHandlers: function _setupEventHandlers() {
      return {
        handleTabLinkClick: this._handleTabLinkClick.bind(this)
      };
    },
    _handleTabLinkClick: function _handleTabLinkClick(evt) {
      evt.preventDefault();
      var currentTarget = evt.currentTarget;
      var tabIndex = currentTarget.dataset.tabIndex;
      var container = currentTarget.closest(selectors.tabContainer);
      var parent = currentTarget.closest('li');
      var tabId = parent.getAttribute('aria-controls'); // Remove from all

      this.cache.tabLinks.forEach(function (tabLink) {
        return tabLink.classList.remove(classes.active);
      });
      this.cache.tabLinks.forEach(function (tabLink) {
        return tabLink.setAttribute('aria-selected', false);
      });
      this.cache.tabPanes.forEach(function (tabLink) {
        return tabLink.classList.remove(classes.active);
      }); // Add to one

      currentTarget.classList.add(classes.active);
      currentTarget.setAttribute('aria-selected', true);
      var pane = container.querySelector(selectors.tabById(tabId));

      if (pane) {
        pane.classList.add(classes.active);
      } else {
        this.cache.tabPanes[tabIndex].classList.add(classes.active);
      }
    },
    destroy: function destroy() {
      var _this2 = this;

      this.cache.tabLinks.forEach(function (tabLink) {
        tabLink.removeEventListener('click', _this2.eventHandlers.handleTabLinkClick);
      });
    }
  });
  return Tabs;
}();
// CONCATENATED MODULE: ./app/scripts/components/collapse.js


function collapse_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function collapse_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { collapse_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { collapse_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Avatar.theme = Avatar.theme || {};

Avatar.theme.Collapse = function CollapseFn() {
  var classes = {
    show: 'show',
    collapse: 'collapse',
    collapsed: 'collapsed',
    collapsing: 'collapsing'
  };

  function Collapse(toggle, target) {
    this.toggle = toggle;
    this.target = target;

    this._cacheSelectors();

    this._setupListeners();
  }

  Collapse.prototype = collapse_objectSpread(collapse_objectSpread({}, Collapse.prototype), {}, {
    _cacheSelectors: function _cacheSelectors() {
      this.cache = {
        toggle: this.toggle,
        target: document.querySelector("".concat(this.target))
      };
    },
    _setupListeners: function _setupListeners() {
      this.eventHandlers = this._setupEventHandlers();
      this.cache.toggle.addEventListener('click', this.eventHandlers.handleToggleClick);
    },
    _setupEventHandlers: function _setupEventHandlers() {
      return {
        handleToggleClick: this._handleToggleClick.bind(this)
      };
    },
    _handleToggleClick: function _handleToggleClick(evt) {
      evt.preventDefault();

      if (this.cache.target.classList.contains(classes.show)) {
        this._hide();
      } else {
        this._show();
      }
    },
    _show: function _show() {
      var _this = this;

      this.cache.target.classList.remove(classes.collapse);
      this.cache.target.classList.add(classes.collapsing);
      this.cache.target.style.height = 0;
      this.cache.target.style.height = "".concat(this.cache.target.scrollHeight, "px");

      this.cache.target.ontransitionend = function () {
        _this.cache.target.style.height = '';

        _this.cache.target.classList.remove(classes.collapsing);

        _this.cache.target.classList.add(classes.collapse, classes.show);
      };

      this.cache.toggle.setAttribute('aria-expanded', true);
    },
    _hide: function _hide() {
      var _this2 = this;

      this.cache.target.style.height = "".concat(this.cache.target.getBoundingClientRect().height, "px");
      this.cache.target.classList.add(classes.collapsing);
      this.cache.target.classList.remove(classes.collapse, classes.show);

      this._reflow(this.cache.target);

      this.cache.target.ontransitionend = function () {
        _this2.cache.target.classList.remove(classes.collapsing);

        _this2.cache.target.classList.add(classes.collapse);
      };

      this.cache.target.style.height = '';
      this.cache.toggle.setAttribute('aria-expanded', false);
    },
    _reflow: function _reflow(element) {
      return element.offsetHeight;
    },
    destroy: function destroy() {
      this.cache.toggle.removeEventListener('click', this.eventHandlers.handleToggleClick);
    }
  });
  return Collapse;
}();
// EXTERNAL MODULE: ./node_modules/@shopify/theme-a11y/theme-a11y.js
var theme_a11y = __webpack_require__(8);

// CONCATENATED MODULE: ./app/scripts/components/a11y-dropdown.js


function a11y_dropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function a11y_dropdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { a11y_dropdown_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { a11y_dropdown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


Avatar.theme = Avatar.theme || {};

Avatar.theme.A11yDropdown = function A11yDropdownFn() {
  var classes = {
    active: 'active'
  };
  var key = {
    enter: 13,
    space: 32,
    esc: 27,
    tab: 9
  };

  function A11yDropdown(trigger, dropdown) {
    this.trigger = trigger;
    this.triggerParent = trigger.parentElement;
    this.dropdown = dropdown;
    this.dropdownFirstLink = dropdown.querySelector('a');

    this._setupListeners();
  }

  A11yDropdown.prototype = a11y_dropdown_objectSpread(a11y_dropdown_objectSpread({}, A11yDropdown.prototype), {}, {
    _setupListeners: function _setupListeners() {
      this.eventHandlers = this._setupEventHandlers();
      this.trigger.addEventListener('keydown', this.eventHandlers.handleTriggerKey);
      this.dropdown.addEventListener('keydown', this.eventHandlers.handleDropdownEsc);
      this.dropdown.addEventListener('focusout', this.eventHandlers.handleDropdownFocusOut);
    },
    _setupEventHandlers: function _setupEventHandlers() {
      return {
        handleTriggerKey: this._handleTriggerKey.bind(this),
        handleDropdownEsc: this._handleDropdownEsc.bind(this),
        handleDropdownFocusOut: this._handleDropdownFocusOut.bind(this)
      };
    },
    _handleTriggerKey: function _handleTriggerKey(evt) {
      var keyCode = evt.keyCode;

      if (keyCode === key.enter || keyCode === key.space) {
        evt.preventDefault();
        this.triggerParent.classList.add(classes.active);
        this.trigger.setAttribute('aria-expanded', true);
        this.dropdownFirstLink.focus();
      }
    },
    _handleDropdownEsc: function _handleDropdownEsc(evt) {
      var keyCode = evt.keyCode;
      if (keyCode === key.tab || keyCode === key.enter || keyCode === key.space) return;

      if (keyCode === key.esc) {
        this.triggerParent.classList.remove(classes.active);
        this.trigger.setAttribute('aria-expanded', false);
        theme_a11y["b" /* removeTrapFocus */]();
        this.trigger.focus();
      }
    },
    _handleDropdownFocusOut: function _handleDropdownFocusOut(evt) {
      var childInFocus = evt.currentTarget.contains(evt.relatedTarget);
      var isVisible = this.triggerParent.classList.contains(classes.active);

      if (isVisible && !childInFocus) {
        this.triggerParent.classList.remove(classes.active);
        this.trigger.setAttribute('aria-expanded', false);
      }
    },
    destroy: function destroy() {
      this.trigger.removeEventListener('keydown', this.eventHandlers.handleTriggerKey);
      this.dropdown.removeEventListener('keydown', this.eventHandlers.handleDropdownEsc);
      this.dropdown.removeEventListener('focusout', this.eventHandlers.handleDropdownFocusOut);
    }
  });
  return A11yDropdown;
}();
// CONCATENATED MODULE: ./app/scripts/components/store-pickup.js


function store_pickup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_pickup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_pickup_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_pickup_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Avatar.theme = Avatar.theme || {};

Avatar.theme.StoreAvailability = function StoreAvailabilityFn() {
  var selectors = {
    storeAvailabilityModalOpen: '[data-store-availability-modal-open]',
    storeAvailabilityModalProductTitle: '[data-store-availability-modal-product-title]',
    storeAvailabilityModalVariantTitle: '[data-store-availability-modal-variant-title]'
  };
  var classes = {
    hidden: 'tw-hidden'
  };

  function StoreAvailability(container) {
    this.container = container;
    this.productTitle = this.container.dataset.productTitle;
    this.hasOnlyDefaultVariant = this.container.dataset.hasOnlyDefaultVariant === 'true';
  }

  StoreAvailability.prototype = store_pickup_objectSpread(store_pickup_objectSpread({}, StoreAvailability.prototype), {}, {
    updateContent: function updateContent(variantId) {
      var variantSectionUrl = "".concat(this.container.dataset.baseUrl, "/variants/").concat(variantId, "/?section_id=store-availability");
      var self = this;
      var storeAvailabilityModalOpen = self.container.querySelector(selectors.storeAvailabilityModalOpen);
      this.container.style.opacity = 0.5;

      if (storeAvailabilityModalOpen) {
        storeAvailabilityModalOpen.disabled = true;
        storeAvailabilityModalOpen.setAttribute('aria-busy', true);
      }

      fetch(variantSectionUrl).then(function (response) {
        return response.text();
      }).then(function (storeAvailabilityHTML) {
        if (storeAvailabilityHTML.trim() === '') {
          return;
        }

        self.container.innerHTML = storeAvailabilityHTML;
        self.container.innerHTML = self.container.firstElementChild.innerHTML;
        self.container.style.opacity = 1; // Need to query this again because we updated the DOM

        storeAvailabilityModalOpen = self.container.querySelector(selectors.storeAvailabilityModalOpen);

        if (!storeAvailabilityModalOpen) {
          return;
        }

        storeAvailabilityModalOpen.addEventListener('click', self._onClickModalOpen.bind(self));
        self.modal = self._initModal();

        self._updateProductTitle();

        if (self.hasOnlyDefaultVariant) {
          self._hideVariantTitle();
        }
      });
    },
    clearContent: function clearContent() {
      this.container.innerHTML = '';
    },
    _onClickModalOpen: function _onClickModalOpen() {
      this.container.dispatchEvent(new CustomEvent('storeAvailabilityModalOpened', {
        bubbles: true,
        cancelable: true
      }));
    },
    _initModal: function _initModal() {
      return new Avatar.theme.Modals('StoreAvailabilityModal', 'store-availability-modal', {
        closeModalOnClick: true,
        close: '.js-modal-close-store-availability-modal',
        drawer: true,
        container: this.container
      });
    },
    _updateProductTitle: function _updateProductTitle() {
      var storeAvailabilityModalProductTitle = this.container.querySelector(selectors.storeAvailabilityModalProductTitle);
      storeAvailabilityModalProductTitle.textContent = this.productTitle;
    },
    _hideVariantTitle: function _hideVariantTitle() {
      var storeAvailabilityModalVariantTitle = this.container.querySelector(selectors.storeAvailabilityModalVariantTitle);
      storeAvailabilityModalVariantTitle.classList.add(classes.hidden);
    }
  });
  return StoreAvailability;
}();
// CONCATENATED MODULE: ./app/scripts/components/modals.js


Avatar.theme = Avatar.theme || {};

Avatar.theme.Modals = function ModalFn() {
  var classes = {
    drawerTranslate: 'tw-translate-x-full',
    hide: 'tw-hidden'
  };

  function Modal(id, name, options) {
    var defaults = {
      close: '.js-modal-close',
      open: ".js-modal-open-".concat(name),
      openClass: 'modal--is-active',
      closeModalOnClick: false,
      drawer: false
    };

    if (options.container) {
      this.modal = options.container.querySelector("#".concat(id));
    } else {
      this.modal = document.getElementById(id);
    }

    if (!this.modal) return false;
    this.nodes = {
      parents: [document.querySelector('html'), document.body]
    };
    this.config = Object.assign(defaults, options);
    this.modalIsOpen = false;
    this.focusOnOpen = this.config.focusOnOpen ? document.getElementById(this.config.focusOnOpen) : this.modal;

    if (options.container) {
      this.openElement = options.container.querySelector(this.config.open);
    } else {
      this.openElement = document.querySelector(this.config.open);
    }

    this.init();
  }

  Modal.prototype.init = function () {
    if (this.config.drawer) {
      this.openElement.addEventListener('click', this.openDrawer.bind(this));
      this.modal.querySelector(this.config.close).addEventListener('click', this.closeDrawer.bind(this));
    } else {
      this.openElement.addEventListener('click', this.open.bind(this));
      this.modal.querySelector(this.config.close).addEventListener('click', this.closeModal.bind(this));
    }
  };

  Modal.prototype.open = function (evt) {
    var self = this;
    fadeInOverlay();
    scrollLock(); // Keep track if modal was opened from a click, or called by another function

    var externalCall = false;
    if (this.modalIsOpen) return; // Prevent following href if link is clicked

    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    } // Without this, the modal opens, the click event bubbles up
    // which closes the modal.


    if (evt && evt.stopPropagation) {
      evt.stopPropagation();
    }

    if (this.modalIsOpen && !externalCall) {
      this.closeModal();
    }

    this.modal.classList.add(this.config.openClass);
    this.nodes.parents.forEach(function (node) {
      node.classList.add(self.config.openClass);
    });
    this.modalIsOpen = true;
    theme_a11y["c" /* trapFocus */](this.modal, {
      elementToFocus: this.focusOnOpen
    });
    this.bindEvents();
  };

  Modal.prototype.openDrawer = function (evt) {
    var _this = this;

    var self = this; // Layout.fadeInOverlay();
    // Layout.scrollLock();
    // Keep track if modal was opened from a click, or called by another function

    var externalCall = false;
    if (this.modalIsOpen) return; // Prevent following href if link is clicked

    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    } // Without this, the modal opens, the click event bubbles up
    // which closes the modal.


    if (evt && evt.stopPropagation) {
      evt.stopPropagation();
    }

    if (this.modalIsOpen && !externalCall) {
      this.closeDrawer();
    }

    this.modal.classList.remove(classes.hide);
    setTimeout(function () {
      _this.modal.classList.remove(classes.drawerTranslate);
    }, 0);
    this.modal.addEventListener('transitionend', function () {
      theme_a11y["c" /* trapFocus */](_this.modal);
    }, {
      once: true
    });
    this.nodes.parents.forEach(function (node) {
      node.classList.remove(classes.hide);
    });
    this.modalIsOpen = true;
    this.bindEvents();
  };

  Modal.prototype.closeModal = function () {
    if (!this.modalIsOpen) return;
    fadeOutOverlay();
    scrollUnlock();
    document.activeElement.blur();
    this.modal.classList.remove(this.config.openClass);
    var self = this;
    this.nodes.parents.forEach(function (node) {
      node.classList.remove(self.config.openClass);
    });
    this.modalIsOpen = false;
    theme_a11y["b" /* removeTrapFocus */]({
      container: this.modal
    });
    this.openElement.focus();
    this.unbindEvents();
  };

  Modal.prototype.closeDrawer = function () {
    var _this2 = this;

    if (!this.modalIsOpen) return; // Layout.fadeOutOverlay();
    // Layout.scrollUnlock();

    document.activeElement.blur();
    this.modal.classList.add(classes.drawerTranslate);
    this.modal.addEventListener('transitionend', function () {
      _this2.modal.classList.add(classes.hide);
    }, {
      once: true
    });
    var self = this;
    this.nodes.parents.forEach(function (node) {
      node.classList.remove(self.config.openClass);
    });
    this.modalIsOpen = false;
    theme_a11y["b" /* removeTrapFocus */]();
    this.openElement.focus();
    this.unbindEvents();
  };

  Modal.prototype.bindEvents = function () {
    this.keyupHandler = this.keyupHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    document.body.addEventListener('keyup', this.keyupHandler);
    document.body.addEventListener('click', this.clickHandler);
  };

  Modal.prototype.unbindEvents = function () {
    document.body.removeEventListener('keyup', this.keyupHandler);
    document.body.removeEventListener('click', this.clickHandler);
  };

  Modal.prototype.keyupHandler = function (event) {
    if (event.keyCode === 27) {
      if (this.config.drawer) {
        this.closeDrawer();
      } else {
        this.closeModal();
      }
    }
  };

  Modal.prototype.clickHandler = function (event) {
    if (this.config.closeModalOnClick && !this.modal.contains(event.target)) {
      if (this.config.drawer) {
        this.closeDrawer();
      } else {
        this.closeModal();
      }
    }
  };

  return Modal;
}();
// CONCATENATED MODULE: ./app/scripts/sections/header.js




Avatar.theme = Avatar.theme || {};
Avatar.theme.sections = Avatar.theme.sections || {};
var header_sectionName = 'header';

Avatar.theme.sections.Header = function Header() {
  var selectors = {
    header: '[data-header]',
    headerNav: '[data-header-nav]',
    mobileMenuToggles: '[data-toggle="collapse"]',
    a11yDropdownTrigger: '[data-a11y-dropdown]',
    dropdown: '.nav-dropdown',
    intersect: '[data-intersect]',
    isDropdown: '.is-dropdown',
    hasDropdown: '.has-dropdown'
  };
  var classes = {
    sticky: 'tw-sticky',
    top: 'tw-top-0',
    z: 'tw-z-10',
    negativeZ: 'tw--z-10',
    shadow: 'tw-shadow',
    translateY: 'tw--translate-y-full',
    hide: 'tw-hidden',
    pointerNone: 'tw-pointer-events-none',
    rightFull: 'to-right',
    leftFull: 'to-left'
  };
  Object(theme_sections["d" /* register */])(header_sectionName, {
    onLoad: function onLoad() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var container;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                container = _this.container;
                _this.headerContainerParent = container.parentElement;
                _this.headerContainer = container;
                _this.intersect = document.querySelector(selectors.intersect);
                _this.header = container.querySelector(selectors.header);
                _this.headerNav = container.querySelector(selectors.headerNav);
                _this.mobileMenuToggles = container.querySelectorAll(selectors.mobileMenuToggles);
                _this.a11yDropdownTriggers = container.querySelectorAll(selectors.a11yDropdownTrigger);
                _this.eventHandlers = {};
                _this.settings = {};
                _this.collapses = [];
                _this.dropdowns = [];
                _this.scrollPosition = 0;
                _this.mqMediumUp = window.matchMedia(Avatar.theme.settings.mediaQuery.mediumUp);

                if (_this.headerContainer) {
                  _this.getSettings();
                }

                if (_this.settings.sticky) {
                  _this.initStickyHeader();

                  _this.eventHandlers.checkScrollDirection = helpers["j" /* throttle */](_this.checkScrollDirection.bind(_this), 100);

                  _this.initScrollListener();

                  _this.mqMediumUp.onchange = _this.initScrollListener.bind(_this);
                }

                if (_this.a11yDropdownTriggers) {
                  _this.a11yDropdownTriggers.forEach(function (trigger) {
                    var submenu = trigger.parentElement.querySelector(selectors.dropdown);
                    var a11yDropdown = new Avatar.theme.A11yDropdown(trigger, submenu);

                    _this.dropdowns.push(a11yDropdown);
                  });
                }

                if (_this.mobileMenuToggles) {
                  _this.mobileMenuToggles.forEach(function (toggle) {
                    var target = toggle.dataset.target;
                    var menu = new Avatar.theme.Collapse(toggle, target);

                    _this.collapses.push(menu);
                  });
                }

                if (_this.settings.menuStyle == 'menu-dropdown') {
                  _this.setupSubmenuPostion();

                  window.addEventListener('resize', _this.setupSubmenuPostion.bind(_this));
                }

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getSettings: function getSettings() {
      this.settings = JSON.parse(this.container.getAttribute('data-section-settings'));
      return this.settings;
    },
    setupSubmenuPostion: function setupSubmenuPostion() {
      var _this2 = this;

      var mainTitles = this.headerNav.querySelectorAll(selectors.hasDropdown);
      mainTitles.forEach(function (title) {
        var uls = title.querySelectorAll('ul ul.flex-column');
        uls.forEach(function (ul) {
          return _this2.checkSubmenuPostion(ul);
        });
      });
    },
    getOffset: function getOffset(el) {
      var rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };
    },
    checkSubmenuPostion: function checkSubmenuPostion(ul) {
      var off = this.getOffset(ul);
      var l = off.left;
      var w = ul.clientWidth;
      var docW = this.headerNav.clientWidth;
      var isEntirelyVisible = l + w <= docW;

      if (!isEntirelyVisible) {
        ul.classList.remove(classes.leftFull);
        ul.classList.add(classes.rightFull);
      } else {
        ul.classList.remove(classes.rightFull);
        ul.classList.add(classes.leftFull);
      }
    },
    initStickyHeader: function initStickyHeader() {
      this.headerContainerParent.classList.add(classes.sticky, classes.top, classes.z);

      if (!this.mqMediumUp.matches) {
        this.header.classList.add(classes.shadow);
      }
    },
    checkScrollDirection: function checkScrollDirection() {
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll < 1) {
        this.headerContainerParent.classList.remove(classes.shadow); // Need these if add back nav slide
        // this.showNav();
        // return;
      } else {
        // Don't need this else if add back nav slide
        this.headerContainerParent.classList.add(classes.shadow);
      } // Temporarily disable nav slide until we have better design/UX also check removeListener - 159
      // if (currentScroll > this.scrollPosition) {
      //   this.hideNav(currentScroll);
      // } else {
      //   this.showNav(currentScroll);
      // }

    },
    showNav: function showNav(currentScroll) {
      var _this3 = this;

      this.headerNav.classList.remove(classes.translateY, classes.pointerNone);
      this.header.classList.remove(classes.shadow);

      this.headerNav.ontransitionend = function () {
        _this3.headerNav.classList.remove(classes.negativeZ);

        if (currentScroll > 1) {
          _this3.headerContainerParent.classList.add(classes.shadow);
        }
      };

      this.scrollPosition = currentScroll <= 0 ? 0 : currentScroll;
    },
    hideNav: function hideNav(currentScroll) {
      var _this4 = this;

      this.headerNav.classList.add(classes.translateY, classes.negativeZ, classes.pointerNone);
      this.headerContainerParent.classList.remove(classes.shadow);

      this.headerNav.ontransitionend = function () {
        _this4.header.classList.add(classes.shadow);
      };

      this.scrollPosition = currentScroll <= 0 ? 0 : currentScroll;
    },
    initScrollListener: function initScrollListener() {
      if (this.mqMediumUp.matches) {
        window.addEventListener('scroll', this.eventHandlers.checkScrollDirection);
      } else {
        window.removeEventListener('scroll', this.eventHandlers.checkScrollDirection);
      }
    },
    onSelect: function onSelect() {},
    onDeselect: function onDeselect() {},
    onBlockSelect: function onBlockSelect() {},
    onBlockDeselect: function onBlockDeselect() {},
    onUnload: function onUnload() {
      // window.removeEventListener('scroll', this.eventHandlers.checkScrollDirection);
      this.collapses.forEach(function (collapse) {
        collapse.destroy();
      });
      this.dropdowns.forEach(function (dropdown) {
        dropdown.destroy();
      });
      Avatar.theme.PredictiveSearch.destroy();
      Avatar.theme.sections.AnnouncementBar.destroy();
    }
  });
  Object(theme_sections["c" /* load */])(header_sectionName);
  var instance = Object(theme_sections["a" /* getInstances */])(header_sectionName);
  return instance[0];
}();
// CONCATENATED MODULE: ./app/scripts/sections/announcement-bar.js



Avatar.theme = Avatar.theme || {};
Avatar.theme.sections = Avatar.theme.sections || {};
var announcement_bar_sectionName = 'announcement-bar';

Avatar.theme.sections.AnnouncementBar = function AnnouncementBar() {
  var selectors = {
    announcementContent: '[data-announcement-bar-content]',
    announcementClose: '[data-announcement-bar-close]'
  };
  var classes = {
    closeHeight: 'tw-max-h-0',
    invisible: 'tw-invisible',
    pointerNone: 'tw-pointer-events-none'
  };
  Object(theme_sections["d" /* register */])(announcement_bar_sectionName, {
    onLoad: function onLoad() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var container;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                container = _this.container;
                _this.announcementContainer = container;
                _this.announcementContent = container.querySelector(selectors.announcementContent);
                _this.announcementClose = container.querySelector(selectors.announcementClose);
                _this.eventHandlers = {};
                _this.settings = {};

                if (_this.announcementContainer) {
                  _this.getSettings();
                }

                if (_this.settings.dismiss) {
                  _this.eventHandlers.handleCloseClick = _this.handleCloseClick.bind(_this);

                  _this.announcementClose.addEventListener('click', _this.eventHandlers.handleCloseClick);
                }

                if (_this.settings.autoDismiss) {
                  _this.autoClose(_this.settings.delay);
                }

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getSettings: function getSettings() {
      this.settings = JSON.parse(this.announcementContainer.getAttribute('data-announcement-settings'));
      return this.settings;
    },
    handleCloseClick: function handleCloseClick(evt) {
      evt.preventDefault();
      this.closeAnnouncementBar();
      evt.currentTarget.blur();
    },
    closeAnnouncementBar: function closeAnnouncementBar() {
      var regex = new RegExp('(..:)?tw-max-h-..', 'g');
      var newClasses = this.announcementContainer.className.replace(regex, '-');
      this.announcementContainer.className = newClasses;
      this.announcementContainer.classList.add(classes.closeHeight);
      this.announcementContent.classList.add(classes.invisible);
      this.announcementContent.classList.add(classes.pointerNone);

      if (this.announcementClose) {
        this.announcementClose.classList.add(classes.invisible);
        this.announcementClose.classList.add(classes.pointerNone);
      }
    },
    autoClose: function autoClose(delay) {
      var _this2 = this;

      document.addEventListener('readystatechange', function (evt) {
        if (evt.target.readyState === 'complete') {
          setTimeout(function () {
            _this2.closeAnnouncementBar();
          }, delay);
        }
      });
    },
    onUnload: function onUnload() {
      this.announcementClose.removeEventListener('click', this.eventHandlers.handleCloseClick);
    }
  });
  Object(theme_sections["c" /* load */])(announcement_bar_sectionName);
  var instances = Object(theme_sections["a" /* getInstances */])(announcement_bar_sectionName);
  var instance = instances[0];

  function destroy() {
    instance.announcementClose.removeEventListener('click', instance.eventHandlers.handleCloseClick);
  }

  return {
    instance: instance,
    destroy: destroy
  };
}();
// EXTERNAL MODULE: ./node_modules/swiper/esm/components/core/core-class.js + 66 modules
var core_class = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/swiper/esm/components/navigation/navigation.js
var navigation = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/swiper/esm/components/pagination/pagination.js
var pagination = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/swiper/esm/components/autoplay/autoplay.js
var autoplay = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/swiper/esm/components/a11y/a11y.js
var a11y = __webpack_require__(62);

// CONCATENATED MODULE: ./app/scripts/sections/slideshow.js



core_class["a" /* default */].use([navigation["a" /* default */], pagination["a" /* default */], autoplay["a" /* default */], a11y["a" /* default */]]);
Avatar.theme = Avatar.theme || {};
Avatar.theme.sections = Avatar.theme.sections || {};
var slideshow_sectionName = 'slideshow';

Avatar.theme.sections.Slideshow = function Slideshow() {
  var selectors = {
    slideshow: '[data-slideshow]',
    slideshowSlide: function slideshowSlide(id) {
      return "[data-slideshow-slide=\"".concat(id, "\"]");
    }
  };
  Object(theme_sections["d" /* register */])(slideshow_sectionName, {
    onLoad: function onLoad() {
      var container = this.container;
      this.slideshows = container.querySelectorAll(selectors.slideshow);
      this.swipers = [];
      this.autoHeight = this.slideshows[0].dataset.swiperAutoheight;

      if (this.slideshows.length > 0) {
        this.initSlideshow();
      }
    },
    onBlockSelect: function onBlockSelect(evt) {
      this.swipers.forEach(function (swiper) {
        var i = swiper.el.querySelector(selectors.slideshowSlide(evt.detail.blockId)).getAttribute('data-index');
        swiper.slideTo(i);
        swiper.autoplay.stop();
      });
    },
    onBlockDeselect: function onBlockDeselect() {
      this.swipers.forEach(function (swiper) {
        return swiper.autoplay.start();
      });
    },
    initSlideshow: function initSlideshow() {
      var _this = this;

      this.slideshows.forEach(function (slideshow) {
        return _this.swipers.push(_this.swiperInstance(slideshow));
      });
    },
    swiperInstance: function swiperInstance(selector) {
      return new core_class["a" /* default */](selector, {
        observer: true,
        observeParents: true,
        loop: true,
        preloadImages: false,
        autoHeight: this.autoHeight,
        speed: 700,
        autoplay: {
          delay: 1000000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        a11y: {
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          paginationBulletMessage: 'Go to slide {{index}}'
        },
        breakpoints: {
          640: {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }
        }
      });
    },
    onUnload: function onUnload() {
      this.swipers.forEach(function (swiper) {
        return swiper.destroy();
      });
    }
  });
  Object(theme_sections["c" /* load */])(slideshow_sectionName);
  var instance = Object(theme_sections["a" /* getInstances */])(slideshow_sectionName);
  return instance[0];
}();
// EXTERNAL MODULE: ./node_modules/swiper/esm/components/thumbs/thumbs.js
var thumbs = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/swiper/esm/components/effect-fade/effect-fade.js
var effect_fade = __webpack_require__(64);

// EXTERNAL MODULE: ./app/scripts/utilities/product-utils.js
var product_utils = __webpack_require__(7);

// CONCATENATED MODULE: ./app/scripts/utilities/library-loader-webpack.js
var types = {
  link: 'link',
  script: 'script'
};
var library_loader_webpack_status = {
  requested: 'requested',
  loaded: 'loaded'
};
var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';
var libraries = {
  youtubeSdk: {
    tagId: 'youtube-sdk',
    src: 'https://www.youtube.com/iframe_api',
    type: types.script
  },
  plyrShopifyStyles: {
    tagId: 'plyr-shopify-styles',
    src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
    type: types.link
  },
  modelViewerUiStyles: {
    tagId: 'shopify-model-viewer-ui-styles',
    src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
    type: types.link
  },
  googleModelViewerJs: {
    tagId: 'google-model-viewer-js',
    src: 'https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js',
    type: types.script
  }
}; // eslint-disable-next-line import/prefer-default-export

function load(libraryName, callback) {
  var library = libraries[libraryName];
  if (!library) return;
  if (library.status === library_loader_webpack_status.requested) return;

  callback = callback || function () {};

  if (library.status === library_loader_webpack_status.loaded) {
    callback();
    return;
  }

  library.status = library_loader_webpack_status.requested;
  var tag;

  switch (library.type) {
    case types.script:
      tag = createScriptTag(library, callback);
      break;

    case types.link:
      tag = createLinkTag(library, callback);
      break;
  }

  tag.id = library.tagId;
  library.element = tag;
  var firstScriptTag = document.getElementsByTagName(library.type)[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function createScriptTag(library, callback) {
  var tag = document.createElement('script');
  tag.src = library.src;
  tag.addEventListener('load', function () {
    library.status = library_loader_webpack_status.loaded;
    callback();
  });
  return tag;
}

function createLinkTag(library, callback) {
  var tag = document.createElement('link');
  tag.href = library.src;
  tag.rel = 'stylesheet';
  tag.type = 'text/css';
  tag.addEventListener('load', function () {
    library.status = library_loader_webpack_status.loaded;
    callback();
  });
  return tag;
}
// EXTERNAL MODULE: ./app/scripts/utilities/design-mode-util.js
var design_mode_util = __webpack_require__(14);

// CONCATENATED MODULE: ./app/scripts/sections/featured-product.js










core_class["a" /* default */].use([navigation["a" /* default */], pagination["a" /* default */], thumbs["a" /* default */], effect_fade["a" /* default */]]);
Avatar.theme = Avatar.theme || {};
Avatar.theme.sections = Avatar.theme.sections || {};
var featured_product_sectionName = 'featured-product';

Avatar.theme.sections.FeaturedProduct = function FeaturedProduct() {
  var selectors = {
    productMedia: '.product-media',
    productMediaItem: '[data-media-id]',
    productMediaById: function productMediaById(id) {
      return "[data-product-media=\"".concat(id, "\"]");
    },
    productMediaNav: '.product-media-nav',
    productMediaNavItem: '.product-media-nav-item',
    productMediaNavById: function productMediaNavById(id) {
      return "[data-product-media-nav=\"".concat(id, "\"]");
    },
    productForm: '.product-form',
    storeAvailabilityContainer: '[data-store-availability-container]',
    productTabs: '[data-tabs]',
    productVariant: '.product-variant',
    productSku: '[data-sku]',
    productQuantityStep: '.product-quantity-step',
    productQuantityInput: '.product-quantity-input',
    productPrices: '.product-prices',
    productPrice: '.product-price',
    productComparePrice: '.product-compare-price',
    productUnitPrice: '[data-unit-price]',
    productUnitPriceBase: '[data-unit-price-base-unit]',
    productButton: '.product-button',
    productButtonText: '.product-button__text',
    productOption: '.product-option',
    productOptionLabel: '.form-check-label',
    productOptionByIdex: function productOptionByIdex(index) {
      return "[data-product-option-".concat(index, "]");
    },
    checkedInput: 'input:checked',
    productHandle: '[data-product-handle]',
    jsPlayer: '.js-player',
    ytPlayer: '.yt-player',
    vmPlayer: '.vm-player',
    modelViewer: '.model-viewer',
    swatchInputById: function swatchInputById(id) {
      return "[id='".concat(id, "']");
    },
    swatchByOptionIndex: function swatchByOptionIndex(index) {
      return ".form-check-swatch[data-option-index=\"".concat(index, "\"]");
    },
    swatchInputByOptionIndex: function swatchInputByOptionIndex(index) {
      return "\n      .form-check-swatch[data-option-index=\"".concat(index, "\"]\n      .form-check-input\n    ");
    },
    stickyCart: '.sticky-cart',
    stickyAddCart: '[data-sticky-add-to-cart]',
    stickySelectOptions: '[data-select-options]',
    sliderNextWithParentId: function sliderNextWithParentId(id) {
      return "#shopify-section-".concat(id, " .swiper-button-next");
    },
    sliderPrevWithParentId: function sliderPrevWithParentId(id) {
      return "#shopify-section-".concat(id, " .swiper-button-prev");
    },
    sliderNavThumbActive: function sliderNavThumbActive(name) {
      return ".".concat(name);
    },
    productJsonBySectionId: function productJsonBySectionId(id) {
      return "ProductJson-".concat(id);
    }
  };
  var classes = {
    soldout: 'soldout',
    hideOption: 'hide-option',
    showOption: 'show-option',
    active: 'active',
    hidden: 'tw-hidden',
    invisible: 'tw-invisible',
    defaultCursor: 'tw-cursor-default',
    sliderDisabledClass: 'swiper-button-disabled invisible',
    sliderNavThumbActive: 'swiper-slide-thumb-active',
    iframeWrapper: 'tw-video-wrapper'
  };
  var ENTER_KEY_CODE = 13;
  var SPACE_KEY_CODE = 32;
  Object(theme_sections["d" /* register */])(featured_product_sectionName, {
    onLoad: function onLoad() {
      var _this = this;

      var container = this.container;
      this.sectionId = container.getAttribute('data-section-id');
      this.productContainer = container;
      this.productMedia = container.querySelector(selectors.productMedia);
      this.productMediaItems = container.querySelectorAll(selectors.productMediaItem);
      this.productMediaNav = container.querySelector(selectors.productMediaNav);
      this.productMediaNavButtons = container.querySelectorAll(selectors.productMediaNavItem);
      this.productForm = container.querySelector(selectors.productForm);
      this.storeAvailabilityContainer = container.querySelector(selectors.storeAvailabilityContainer);
      this.productTabs = container.querySelector(selectors.productTabs);
      this.productVariant = container.querySelector(selectors.productVariant);
      this.productSku = container.querySelector(selectors.productSku);
      this.productQuantityStep = container.querySelectorAll(selectors.productQuantityStep);
      this.productQuantityInput = container.querySelector(selectors.productQuantityInput);
      this.productPrices = container.querySelector(selectors.productPrices);
      this.productPrice = container.querySelector(selectors.productPrice);
      this.productComparePrice = container.querySelector(selectors.productComparePrice);
      this.productUnitPrice = container.querySelector(selectors.productUnitPrice);
      this.productUnitPriceBase = container.querySelector(selectors.productUnitPriceBase);
      this.productButton = container.querySelector(selectors.productButton);
      this.productButtonText = container.querySelector(selectors.productButtonText);
      this.productOption = container.querySelectorAll(selectors.productOption);
      this.productHandle = container.querySelector(selectors.productHandle);
      this.ytPlayers = container.querySelectorAll(selectors.ytPlayer);
      this.vmPlayers = document.querySelectorAll(selectors.vmPlayer);
      this.jsPlayers = container.querySelectorAll(selectors.jsPlayer);
      Avatar.theme.videos = Avatar.theme.videos || {};
      Avatar.theme.videoPlayers = Avatar.theme.videoPlayers || [];
      this.modelViewers = container.querySelectorAll(selectors.modelViewer);
      this.productMediaSwiper = [];
      this.productMediaNavSwiper = [];
      Avatar.theme.jsPlayersCollection = Avatar.theme.jsPlayersCollection || [];
      this.modelViewersCollection = [];
      this.eventHandlers = {};
      this.settings = {};
      this.optionsMap = {};

      if (this.productContainer) {
        this.getSettings();
        this.initProductMedia();
        this.initProductForm();
        this.initRteIframes();
      }

      if (this.productForm) {
        this.eventHandlers.handleOnKeyDown = this.handleOnKeyDown.bind(this);
        this.productForm.addEventListener('keydown', this.eventHandlers.handleOnKeyDown);
      }

      if (this.productTabs) {
        this.productTabs = new Avatar.theme.Tabs(this.productTabs);
      }

      if (this.productQuantityInput) {
        this.eventHandlers.handleQuantityClick = this.handleQuantityClick.bind(this);
        this.productQuantityStep.forEach(function (step) {
          step.addEventListener('click', _this.eventHandlers.handleQuantityClick.bind(_this));
        });
        this.eventHandlers.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.productQuantityInput.addEventListener('change', this.eventHandlers.handleQuantityChange.bind(this));
      }
    },
    getSettings: function getSettings() {
      this.settings = JSON.parse(this.productContainer.getAttribute('data-product-settings'));
      return this.settings;
    },
    initProductMedia: function initProductMedia() {
      var _this2 = this;

      if (!this.productMedia) {
        return;
      }

      if (this.productMediaItems.length === 1) {
        this.productMediaItems[0].classList.remove(classes.invisible);
      }

      if (this.jsPlayers.length > 0) {
        Shopify.loadFeatures([{
          name: 'video-ui',
          version: '1.0',
          onLoad: this.setupPlyrVideos.bind(this)
        }]);
        load('plyrShopifyStyles');
      }

      if (this.ytPlayers.length > 0) {
        if (!window.youtubeLoaded) {
          var tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        window.YTQueue.queueItem(function () {
          _this2.container.querySelectorAll(selectors.ytPlayer).forEach(function (player) {
            Avatar.theme.videoPlayers.push(new YT.Player(player));
          });
        });
      }

      if (this.vmPlayers.length > 0) {
        if (!window.vimeoLoaded) {
          var _tag = document.createElement('script');

          _tag.src = 'https://player.vimeo.com/api/player.js';
          var _firstScriptTag = document.getElementsByTagName('script')[0];

          _firstScriptTag.parentNode.insertBefore(_tag, _firstScriptTag);
        }

        helpers["a" /* checkVimeoReady */]().then(function () {
          _this2.container.querySelectorAll(selectors.vmPlayer).forEach(function (player) {
            Avatar.theme.videoPlayers.push(new Vimeo.Player(player));
          });
        }).catch(function (err) {
          return console.log(err);
        });
      }

      if (this.modelViewers.length > 0) {
        Avatar.theme.ProductModel.init(this.sectionId);
      }

      if (this.productMediaNav) {
        var self = this;
        this.productMediaNavSwiper = new core_class["a" /* default */](selectors.productMediaNavById(this.id), {
          observer: true,
          observeParents: true,
          slidesPerView: 6,
          spaceBetween: 1,
          touchRatio: 1,
          breakpoints: {
            768: {
              slidesPerGroup: 2,
              touchRatio: 0,
              navigation: {
                nextEl: selectors.sliderNextWithParentId(this.id),
                prevEl: selectors.sliderPrevWithParentId(this.id),
                disabledClass: classes.sliderDisabledClass
              }
            }
          }
        });
        this.productMediaSwiper = new core_class["a" /* default */](selectors.productMediaById(this.id), {
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          observer: true,
          observeParents: true,
          navigation: {
            nextEl: selectors.sliderNextWithParentId(this.id),
            prevEl: selectors.sliderPrevWithParentId(this.id),
            disabledClass: classes.sliderDisabledClass
          },
          preloadImages: false,
          autoHeight: true,
          simulateTouch: false,
          preventClicks: false,
          preventClicksPropagation: false,
          followFinger: false,
          thumbs: {
            swiper: this.productMediaNavSwiper,
            autoScrollOffset: 2,
            slideThumbActiveClass: classes.sliderNavThumbActive
          },
          on: {
            afterInit: function afterInit() {
              setTimeout(function () {
                if (self.productMediaItems[0].hasAttribute('data-product-media-type-model')) {
                  self.productMediaSwiper.allowTouchMove = false;
                }
              }, 0);
            },
            slideChange: function slideChange() {
              if (self.productMediaSwiper.slides.length > 0) {
                var eventOptions = {
                  bubbles: true,
                  cancelable: true,
                  detail: {
                    swiper: self.productMediaSwiper
                  }
                };
                var _self$productMediaSwi = self.productMediaSwiper,
                    _slides = _self$productMediaSwi.slides,
                    previousIndex = _self$productMediaSwi.previousIndex,
                    _realIndex = _self$productMediaSwi.realIndex;
                var previousSlide = _slides[previousIndex];
                var currentSlide = _slides[_realIndex];
                previousSlide.dispatchEvent(new CustomEvent('mediaHidden', eventOptions));
                currentSlide.dispatchEvent(new CustomEvent('mediaVisible', eventOptions));
                currentSlide.classList.remove(classes.invisible);
              }

              var _self$productMediaSwi2 = self.productMediaSwiper,
                  slides = _self$productMediaSwi2.slides,
                  realIndex = _self$productMediaSwi2.realIndex;

              if (Avatar.theme.videoPlayers.length > 0) {
                Avatar.theme.videoPlayers.forEach(function (player) {
                  if (typeof player.pauseVideo === 'function') {
                    player.pauseVideo();
                  } else if (typeof player.pause === 'function') {
                    player.pause();
                  }
                });
                Avatar.theme.videoPlayers.forEach(function (player) {
                  if (typeof_default()(player.h) === 'object' && player.h === slides[realIndex].firstElementChild) {
                    player.playVideo();
                  } else if (typeof_default()(player.element) === 'object' && player.element === slides[realIndex].firstElementChild) {
                    player.play();
                  }
                });
              }

              if (Avatar.theme.jsPlayersCollection.length > 0) {
                Avatar.theme.jsPlayersCollection.forEach(function (player) {
                  return player.pause();
                });
                Avatar.theme.jsPlayersCollection.forEach(function (player) {
                  if (player.elements.container === slides[realIndex].firstElementChild) {
                    player.play();
                  }
                });
              }

              self.setCurrentSlideAttributes();
            }
          }
        });
        this.productMediaNav.addEventListener('keydown', this.handleThumbnailKeyDown.bind(this));
        this.productMediaNavButtons.forEach(function (button) {
          button.addEventListener('click', _this2.handleThumbnailClick.bind(_this2));
        });
      }
    },
    handleThumbnailKeyDown: function handleThumbnailKeyDown(evt) {
      if (![SPACE_KEY_CODE, ENTER_KEY_CODE].includes(evt.keyCode)) {
        return;
      }

      var index = Array.from(this.productMediaNav.querySelectorAll(selectors.productMediaNavItem)).indexOf(evt.target);
      this.productMediaSwiper.slideTo(index);
    },
    setCurrentSlideAttributes: function setCurrentSlideAttributes() {
      var _this3 = this;

      var thumbs = this.productMediaNav.querySelectorAll(selectors.productMediaNavItem);
      thumbs.forEach(function (thumb) {
        return thumb.removeAttribute('aria-current');
      });
      setTimeout(function () {
        var activeThumb = _this3.productMediaNav.querySelector(selectors.sliderNavThumbActive(classes.sliderNavThumbActive));

        if (activeThumb) {
          activeThumb.setAttribute('aria-current', true);
        }
      }, 300);
    },
    handleThumbnailClick: function handleThumbnailClick(evt) {
      var currentTarget = evt.currentTarget;
      var slideIndex = currentTarget.dataset.slideIndex;
      var targetSlide = this.productMediaSwiper.slides[slideIndex];
      this.productMediaSwiper.slideTo(slideIndex);
      targetSlide.classList.remove(classes.invisible);
      helpers["e" /* forceFocus */](targetSlide, {
        preventScroll: true
      });
    },
    setupPlyrVideos: function setupPlyrVideos() {
      this.jsPlayers.forEach(function (player) {
        Avatar.theme.jsPlayersCollection.push(new Shopify.Plyr(player));
      });
    },
    setupModelViewerUi: function setupModelViewerUi() {
      if (Shopify.ModelViewerUI) {
        this.modelViewersCollection = Shopify.ModelViewerUI.setup(selectors.modelViewer);
      }
    },
    initProductForm: function initProductForm() {
      if (!this.productForm) {
        return;
      }

      var jsonTag = document.getElementById(selectors.productJsonBySectionId(this.sectionId));

      if (!jsonTag || !jsonTag.innerHTML.length) {
        return;
      }

      var productJson = JSON.parse(jsonTag.innerHTML);

      if (!productJson.available && !this.settings.showUnavailable) {
        this.productOption.forEach(function (options) {
          return options.classList.add(classes.hidden);
        });
      }

      var self = this;

      if (productJson && productJson.options.length >= 1) {
        if (this.settings.variantSelectors === 'swatches') {
          this.initLinkedOptions(productJson);
        }
      }

      productJson.options = productJson.options.map(function (option) {
        return {
          name: option
        };
      });
      this.productFormInstance = new Avatar.theme.ProductForm(this.productForm, productJson, {
        onOptionChange: function onOptionChange(e) {
          var _e$dataset = e.dataset,
              variant = _e$dataset.variant,
              options = _e$dataset.options;
          product_utils["c" /* renderMedia */](self.productMediaSwiper, variant, self.productMediaItems);
          product_utils["d" /* renderPrice */](self.productPrices, self.productPrice, variant);
          product_utils["b" /* renderComparePrice */](self.productComparePrice, variant);
          product_utils["f" /* renderUnitPrice */](self.productUnitPrice, self.productUnitPriceBase, variant);
          product_utils["e" /* renderSku */](self.productSku, variant);
          product_utils["a" /* renderButton */](self.productButtonText, variant);
          product_utils["i" /* updateVariant */](self.productVariant, variant);
          product_utils["h" /* updateStoreAvailabilityContent */](self.storeAvailability, variant);

          if (self.settings.variantSelectors === 'swatches') {
            self.updateSwatches(productJson);
          }
        }
      });
      product_utils["c" /* renderMedia */](self.productMediaSwiper, this.productFormInstance.variant(), this.productMediaItems);
      product_utils["a" /* renderButton */](self.productButtonText, this.productFormInstance.variant());
      var currentOptions = this.productFormInstance.options();
      var currentVariant = this.productFormInstance.variant();

      if (this.storeAvailabilityContainer) {
        this.storeAvailability = new Avatar.theme.StoreAvailability(this.storeAvailabilityContainer);
      }

      if (this.storeAvailability && currentVariant.available) {
        this.storeAvailability.updateContent(currentVariant.id);
      }

      if (this.settings.ajaxSubmit) {
        design_mode_util["a" /* initAjaxAddToCart */](this.container);
      }
    },
    initRteIframes: function initRteIframes() {
      var iframes = Avatar.theme.rte.iframeSelectors;
      Avatar.theme.rte.wrapIframe({
        iframes: document.querySelectorAll(iframes),
        iframeWrapperClass: classes.iframeWrapper
      });
    },
    handleQuantityClick: function handleQuantityClick(evt) {
      var currentTarget = evt.currentTarget;

      if (currentTarget.hasAttribute('data-step-up')) {
        this.productQuantityInput.stepUp();
      } else if (currentTarget.hasAttribute('data-step-down')) {
        this.productQuantityInput.stepDown();
      }

      if (parseInt(this.productQuantityInput.value, 10) <= 1) {
        this.productQuantityInput.previousElementSibling.setAttribute('disabled', true);
      } else {
        this.productQuantityInput.previousElementSibling.removeAttribute('disabled');
      }
    },
    handleQuantityChange: function handleQuantityChange(evt) {
      var currentTarget = evt.currentTarget;

      if (currentTarget.value === '1') {
        currentTarget.previousElementSibling.setAttribute('disabled', true);
      } else {
        currentTarget.previousElementSibling.removeAttribute('disabled');
      }
    },
    getProductJson: function getProductJson() {
      var _this4 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var productHandle, product;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                productHandle = _this4.productContainer.dataset.productHandle; // eslint-disable-next-line max-len

                _context.next = 3;
                return fetch("/products/".concat(productHandle, ".js")).then(function (response) {
                  return response.json();
                });

              case 3:
                product = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateOptionsInSelector: function updateOptionsInSelector(selectorIndex, product) {
      var _this5 = this;

      var key;

      var getKey = function getKey(optionLevel) {
        var option;
        var checkedValue;

        if (optionLevel === 1) {
          // eslint-disable-next-line prefer-destructuring
          option = _this5.productContainer.querySelectorAll(selectors.productOption)[0];
          checkedValue = option.querySelector(selectors.checkedInput).value;
        } else {
          option = _this5.productContainer.querySelectorAll(selectors.productOption)[0].querySelector(selectors.checkedInput).value;
          option += ' / ';
          option += _this5.productContainer.querySelectorAll(selectors.productOption)[1].querySelector(selectors.checkedInput).value;
          checkedValue = option;
        }

        return checkedValue;
      };

      switch (selectorIndex) {
        case 0:
          key = 'root';
          break;

        case 1:
          key = getKey(selectorIndex);
          break;

        case 2:
          key = getKey(selectorIndex);
          break;

        default:
          console.log('error');
      }

      var initialValue = key;
      var availableOptions = this.optionsMap[initialValue];
      var swatchInputOptionRow = this.productContainer.querySelectorAll(selectors.swatchInputByOptionIndex(selectorIndex));
      var colorIndex = product.options.findIndex(function (option) {
        var value = option;

        if (typeof_default()(option) === 'object') {
          value = option.name;
        }

        return value.toLowerCase() === 'color';
      });

      if (colorIndex !== -1) {
        var optionContainer = this.productContainer.querySelector(selectors.productOptionByIdex(colorIndex));
        var colorValue = optionContainer.querySelector(selectors.checkedInput).value;
        var span = optionContainer.querySelector('label span');

        if (span) {
          span.innerHTML = colorValue;
        }
      }

      if (this.settings.hideSingleOption && !this.settings.showUnavailable) {
        var optionRow = swatchInputOptionRow[0].closest(selectors.productOption);

        if (availableOptions.length <= 1) {
          optionRow.classList.add(classes.hidden);
        } else {
          optionRow.classList.remove(classes.hidden);
        }
      }

      swatchInputOptionRow.forEach(function (swatchInput) {
        var swatchValue = swatchInput.value;
        var swatchContainer = swatchInput.parentElement;

        if (availableOptions && availableOptions.includes(swatchValue)) {
          swatchContainer.classList.remove(classes.hidden, classes.soldout);
          swatchContainer.querySelector('input').removeAttribute('disabled');
          swatchContainer.querySelector('label').classList.remove(classes.defaultCursor);
          swatchContainer.classList.add(classes.showOption);
          swatchContainer.classList.remove(classes.hideOption);
        } else {
          if (!_this5.settings.showUnavailable) {
            swatchContainer.classList.add(classes.hidden);
          }

          if (_this5.settings.disableUnavailable) {
            swatchContainer.querySelector('label').classList.add(classes.defaultCursor);
            swatchContainer.querySelector('input').setAttribute('disabled', true);
          }

          swatchContainer.classList.remove(classes.showOption);
          swatchContainer.classList.add(classes.hideOption);
          swatchContainer.classList.add(classes.soldout);
        }
      });

      if (this.settings.disableUnavailable) {
        var currentCheckedOption;
        var currentOptions = this.productContainer.querySelectorAll(selectors.swatchByOptionIndex(selectorIndex));
        currentOptions.forEach(function (option) {
          var optionInput = option.querySelector('input');

          if (optionInput.checked) {
            currentCheckedOption = option.querySelector(selectors.checkedInput).parentElement;
          }
        });

        if (currentCheckedOption) {
          if (currentCheckedOption.classList.contains(classes.hideOption)) {
            var firstAvailableOption = currentOptions[0].parentElement.querySelector(".form-check-swatch.".concat(classes.showOption));
            firstAvailableOption && firstAvailableOption.querySelector('input').click();
          }
        }
      }
    },
    initLinkedOptions: function initLinkedOptions(product) {
      // Building our mapping object.
      for (var i = 0; i < product.variants.length; i++) {
        var variant = product.variants[i]; // Add code back to variant.available if needed

        if (variant.available) {
          // Gathering values for the 1st drop-down.
          this.optionsMap.root = this.optionsMap.root || [];
          this.optionsMap.root.push(variant.option1);
          this.optionsMap.root = helpers["k" /* uniq */](this.optionsMap.root); // Gathering values for the 2nd drop-down.

          if (product.options.length > 1) {
            var key = variant.option1;
            this.optionsMap[key] = this.optionsMap[key] || [];
            this.optionsMap[key].push(variant.option2);
            this.optionsMap[key] = helpers["k" /* uniq */](this.optionsMap[key]);
          } // Gathering values for the 3rd drop-down.


          if (product.options.length === 3) {
            var _key = "".concat(variant.option1, " / ").concat(variant.option2);

            this.optionsMap[_key] = this.optionsMap[_key] || [];

            this.optionsMap[_key].push(variant.option3);

            this.optionsMap[_key] = helpers["k" /* uniq */](this.optionsMap[_key]);
          }
        }
      }

      this.updateSwatches(product);
    },
    updateSwatches: function updateSwatches(product) {
      this.updateOptionsInSelector(0, product);
      if (product.options.length > 1) this.updateOptionsInSelector(1, product);
      if (product.options.length === 3) this.updateOptionsInSelector(2, product);
    },
    handleOnKeyDown: function handleOnKeyDown(evt) {
      var _this6 = this;

      if ([SPACE_KEY_CODE, ENTER_KEY_CODE].includes(evt.keyCode)) {
        var labels = this.productContainer.querySelectorAll(selectors.productOptionLabel);
        labels.forEach(function (label) {
          if (label === document.activeElement) {
            evt.preventDefault();
            var inputSelector = selectors.swatchInputById(label.getAttribute('for'));
            _this6.productContainer.querySelector(inputSelector).checked = true;
            var changeEvent = new Event('change');

            _this6.productContainer.querySelector(inputSelector).dispatchEvent(changeEvent);
          }
        });
      }
    },
    onUnload: function onUnload() {
      var _this7 = this;

      if (this.productForm) {
        this.productForm.removeEventListener('keydown', this.eventHandlers.handleOnKeyDown);
      }

      this.productQuantityStep.forEach(function (step) {
        step.removeEventListener('click', _this7.eventHandlers.handleQuantityClick.bind(_this7));
      });

      if (this.productQuantityInput) {
        this.productQuantityInput.removeEventListener('change', this.eventHandlers.handleQuantityChange.bind(this));
      }

      if (this.productFormInstance) {
        this.productFormInstance.destroy();
      }

      if (this.productMediaNav) {
        this.productMediaNav.removeEventListener('keydown', this.handleThumbnailKeyDown.bind(this));
        this.productMediaNavButtons.forEach(function (button) {
          button.removeEventListener('click', _this7.handleThumbnailClick.bind(_this7));
        });
      }

      if (this.productMediaNavSwiper.initialized) {
        this.productMediaNavSwiper.destroy();
      }

      if (this.productMediaSwiper.initialized) {
        this.productMediaSwiper.destroy();
      }

      this.productTabs.destroy();

      if (this.settings.ajaxSubmit) {
        design_mode_util["b" /* initAjaxAddToCartDestroy */]();
      }

      Avatar.theme.ProductModel.removeSectionModels(this.sectionId);
    }
  });
  Object(theme_sections["c" /* load */])(featured_product_sectionName);
  var instances = Object(theme_sections["a" /* getInstances */])(featured_product_sectionName);
  return instances;
}();
// EXTERNAL MODULE: ./node_modules/@shopify/theme-cart/theme-cart.js + 2 modules
var theme_cart = __webpack_require__(12);

// CONCATENATED MODULE: ./app/scripts/sections/slider-cart.js



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







core_class["a" /* default */].use([navigation["a" /* default */]]);
Avatar.theme = Avatar.theme || {};
Avatar.skup = Avatar.skup || {};
Avatar.theme.sections = Avatar.theme.sections || {};

Avatar.theme.sections.SliderCart = function SliderCart() {
  var selectors = {
    sliderCartContainer: '[]',
    themeOverlay: '[data-overlay]',
    sliderCartOpen: '[data-slider-cart-open]',
    sliderCartClose: '[data-slider-cart-close]',
    sliderCart: '[data-slider-cart]',
    sliderCartLoading: '[data-slider-cart-loading]',
    sliderCartCount: '[data-slider-cart-count]',
    sliderCartItems: '[data-slider-cart-items]',
    sliderCartHeader: '[data-slider-cart-header]',
    sliderCartFooter: '[data-slider-cart-footer]',
    sliderCartRecommendations: '[data-slider-cart-recommendations]',
    sliderCartRecommendation: '[data-recommend-product]',
    addToCartForms: '[data-ajax-submit]',
    addToCartError: '[data-ajax-error]',
    addRecProductToCart: '[data-add-rec]',
    qtyStep: '[data-slider-cart-qty]',
    removeItem: '[data-remove-item]',
    lineItem: '[data-item-key]',
    sliderCartPrices: '[data-slider-cart-total-container]',
    productRecommendations: '.product-recommendations',
    cartItemQuantityInput: '.cart-item-quantity-input',
    sliderCartAdditionalButtons: '[data-slider-cart-additional-checkout]'
  };
  var classes = {
    sliderCartTranslate: 'tw-translate-x-full',
    halfOpacity: 'tw-opacity-50',
    hide: 'tw-hidden',
    textRight: 'tw-text-right',
    textCenter: 'tw-text-center',
    noCookies: 'no-cookies'
  };
  var sectionName = 'slider-cart';
  Object(theme_sections["d" /* register */])(sectionName, {
    onLoad: function onLoad() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var container;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                container = _this.container;
                _this.sliderCart = container.querySelector(selectors.sliderCart);
                _this.sliderCartContainer = container;
                _this.sliderCartLoading = container.querySelector(selectors.sliderCartLoading);
                _this.sliderCartHeader = container.querySelector(selectors.sliderCartHeader);
                _this.sliderCartFooter = container.querySelector(selectors.sliderCartFooter);
                _this.sliderCartItems = container.querySelector(selectors.sliderCartItems);
                _this.sliderCartOpen = document.querySelector(selectors.sliderCartOpen);
                _this.sliderCartClose = container.querySelector(selectors.sliderCartClose);
                _this.themeOverlay = document.querySelector(selectors.themeOverlay);
                _this.addToCartForms = document.querySelectorAll(selectors.addToCartForms);
                _this.addRecProductToCart = container.querySelectorAll(selectors.addRecProductToCart);
                _this.removeItems = container.querySelectorAll(selectors.removeItem);
                _this.qtyStep = container.querySelectorAll(selectors.qtyStep);
                _this.sliderCartRecommendationsContainer = container.querySelector(selectors.sliderCartRecommendations);
                _this.sliderCartRecommendation = container.querySelectorAll(selectors.sliderCartRecommendation);
                _this.sliderCartAdditionalButtons = container.querySelector(selectors.sliderCartAdditionalButtons);
                _this.eventHandlers = {};
                _this.mqSmall = window.matchMedia(Avatar.theme.settings.mediaQuery.small);
                _this.mqSmall.onchange = _this.sizeCart.bind(_this);

                if (_this.sliderCartOpen) {
                  _this.eventHandlers.openSliderCart = _this.openSliderCart.bind(_this);

                  _this.sliderCartOpen.addEventListener('click', _this.eventHandlers.openSliderCart);
                }

                if (_this.sliderCartClose) {
                  _this.eventHandlers.closeSliderCart = _this.closeSliderCart.bind(_this);

                  _this.sliderCartClose.addEventListener('click', _this.eventHandlers.closeSliderCart);
                }

                if (_this.addToCartForms) {
                  _this.setAjaxForms(_this.addToCartForms);

                  _this.eventHandlers.addToCart = _this.addToCart.bind(_this);

                  _this.addToCartForms.forEach(function (form) {
                    return form.addEventListener('submit', _this.eventHandlers.addToCart);
                  });

                  _this.eventHandlers.getNewForms = _this.getNewForms.bind(_this);
                  document.addEventListener('product-recommendations', _this.eventHandlers.getNewForms);
                }

                if (_this.removeItems || _this.qtyStep) {
                  _this.initSliderCartListeners();
                }

                if (_this.sliderCart) {
                  _this.sizeCart();

                  _this.eventHandlers.sliderCartKeyupHandler = _this.sliderCartKeyupHandler.bind(_this);
                  _this.eventHandlers.sizeCart = _this.sizeCart.bind(_this);
                  window.addEventListener('resize', _this.eventHandlers.sizeCart);

                  _this.initMutationObservers();

                  _this.checkCookies();
                }

                if (_this.addRecProductToCart) {
                  _this.initRecListeners();

                  _this.sizeCart();
                }

                if (_this.sliderCartRecommendationsContainer) {
                  _this.initSlider();
                }

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // Only needed if included as section instead of static global settings
    // onSelect() {
    //   Avatar.skup.sliderCart = true;
    //   const timer = setInterval(previewSliderCart.bind(this), 250);
    //   function previewSliderCart() {
    //     if (this.sliderCart) {
    //       this.openSliderCart();
    //       clearInterval(timer);
    //     }
    //   }
    // },
    // onDeselect() {
    //   this.closeSliderCart();
    // },
    // onBlockSelect() {
    // },
    openSliderCart: function openSliderCart(evt) {
      var _this2 = this;

      // Only needed if we want to prevent slider cart on '/cart' route.
      // if (window.location.pathname.includes('/cart')) {
      //   evt.preventDefault();
      //   return;
      // }
      evt && evt.preventDefault();
      fadeInOverlay();
      scrollLock();
      this.sliderCart.classList.remove(classes.hide);
      this.container.classList.remove(classes.hide);
      setTimeout(function () {
        _this2.sliderCart.classList.remove(classes.sliderCartTranslate);

        _this2.sizeCart();
      }, 0);
      this.eventHandlers.handleOutsideClick = this.handleOutsideClick.bind(this);
      this.container.addEventListener('click', this.eventHandlers.handleOutsideClick);
      this.container.addEventListener('keyup', this.eventHandlers.sliderCartKeyupHandler);
      theme_a11y["c" /* trapFocus */](this.sliderCartContainer, {
        elementToFocus: this.sliderCart
      });
    },
    closeSliderCart: function closeSliderCart() {
      var _this3 = this;

      fadeOutOverlay();
      scrollUnlock();
      this.sliderCart.classList.add(classes.sliderCartTranslate);
      this.sliderCart.addEventListener('transitionend', function () {
        _this3.sliderCart.classList.add(classes.hide);

        _this3.container.classList.add(classes.hide);
      }, {
        once: true
      });
      this.container.removeEventListener('keyup', this.eventHandlers.sliderCartKeyupHandler);
      this.container.removeEventListener('click', this.eventHandlers.handleOutsideClick);
      theme_a11y["b" /* removeTrapFocus */]();
      theme_a11y["a" /* forceFocus */](document.body);
    },
    handleOutsideClick: function handleOutsideClick(evt) {
      var target = evt.target;

      if (!target.closest(selectors.sliderCart)) {
        this.closeSliderCart();
      }
    },
    sizeCart: function sizeCart() {
      if (!this.sliderCartItems) {
        return;
      }

      var windowHeight = window.innerHeight;
      var headerHeight = this.sliderCartHeader.clientHeight;
      var footerHeight = this.sliderCartFooter.clientHeight;
      var spacingHeight = 22;
      var itemsHeight = windowHeight - headerHeight - footerHeight - spacingHeight;

      if (this.mqSmall.matches && itemsHeight < 300) {
        this.sliderCartItems.style.height = '';
        return;
      }

      this.sliderCartItems.style.height = "".concat(itemsHeight, "px");
    },
    initMutationObservers: function initMutationObservers() {
      var _this4 = this;

      var cartItems = this.sliderCartItems;
      var checkoutButtons = this.sliderCartAdditionalButtons;
      var config = {
        attributes: true,
        childList: true,
        subtree: true
      };

      var handleCartItemChange = function handleCartItemChange(mutationsList) {
        // eslint-disable-next-line no-restricted-syntax
        var _iterator = _createForOfIteratorHelper(mutationsList),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var mutation = _step.value;

            if (mutation.type === 'childList') {
              _this4.sizeCart();

              return;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };

      var handleCheckoutButtonChange = function handleCheckoutButtonChange(mutationsList) {
        // eslint-disable-next-line no-restricted-syntax
        var _iterator2 = _createForOfIteratorHelper(mutationsList),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var mutation = _step2.value;

            if (mutation.type === 'attributes') {
              _this4.sizeCart();

              return;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      };

      var itemObserver = new MutationObserver(handleCartItemChange);
      itemObserver.observe(cartItems, config);

      if (checkoutButtons) {
        var checkoutButtonsObserver = new MutationObserver(handleCheckoutButtonChange);
        checkoutButtonsObserver.observe(checkoutButtons, config);
      }
    },
    sliderCartKeyupHandler: function sliderCartKeyupHandler(evt) {
      if (evt.keyCode === Avatar.theme.keyboardKeys.ESCAPE) {
        this.closeSliderCart();
      }
    },
    setAjaxForms: function setAjaxForms(forms) {
      forms.forEach(function (form) {
        form.setAttribute('data-ajax-submit', true);
      });
    },
    getNewForms: function getNewForms() {
      var _this5 = this;

      var recommendationsContainer = document.querySelector(selectors.productRecommendations);
      var forms = recommendationsContainer.querySelectorAll('[data-ajax-submit]');
      this.setAjaxForms(forms);
      forms.forEach(function (form) {
        return form.addEventListener('submit', _this5.addToCart.bind(_this5));
      });
    },
    addToCart: function addToCart(evt) {
      var _this6 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var productForm, product;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                productForm = evt.currentTarget;

                if (window.location.pathname.includes('/cart')) {
                  productForm.submit();
                }

                evt.preventDefault();

                _this6.showAndSizeLoader();

                _context3.next = 6;
                return theme_cart["b" /* addItemFromForm */](productForm).catch( /*#__PURE__*/function () {
                  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(err) {
                    var json;
                    return regenerator_default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return err.json();

                          case 2:
                            json = _context2.sent;
                            _context2.next = 5;
                            return _this6.handleCartError(json, productForm);

                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 6:
                product = _context3.sent;

                if (product) {
                  if (_this6.sliderCartRecommendationsContainer) {
                    _this6.getRecommendedProducts(product.product_id);
                  }

                  _this6.openSliderCart();

                  _this6.refreshCartSlider();
                }

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    handleCartError: function handleCartError(error, currentForm) {
      var _this7 = this;

      var ajaxError = currentForm.parentElement.querySelector(selectors.addToCartError);
      var errorMessage = "".concat(error.message, ": ").concat(error.description);
      ajaxError.textContent = errorMessage;
      ajaxError.classList.remove(classes.hide);
      ajaxError.focus();
      setTimeout(function () {
        ajaxError.classList.add(classes.hide);

        _this7.sizeCart();
      }, 6000);
    },
    getRecommendedProducts: function getRecommendedProducts(productId) {
      var _this8 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        var url, res, recJson;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = "/recommendations/products.json?product_id=".concat(productId, "&limit=3");
                _context4.next = 3;
                return fetch(url);

              case 3:
                res = _context4.sent;
                _context4.next = 6;
                return res.json();

              case 6:
                recJson = _context4.sent;

                if (recJson.products.length !== 0) {
                  _this8.renderRecommendations(recJson.products);
                }

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    renderRecommendations: function renderRecommendations(products) {
      var _this9 = this;

      var currentRecs = document.querySelectorAll(selectors.sliderCartRecommendation);
      var originalSlides = Array.from(currentRecs).filter(function (rec) {
        return !rec.classList.contains('swiper-slide-duplicate');
      });
      var swiperDuplicates = Array.from(currentRecs).filter(function (rec) {
        return rec.classList.contains('swiper-slide-duplicate');
      });
      products.forEach(function (product, idx) {
        _this9.replaceRecommendationContent(originalSlides, product, idx);
      });

      for (var i = 0; i < swiperDuplicates.length; i++) {
        var productJson = i === 0 ? products[products.length - 1] : products[0];
        this.replaceRecommendationContent(swiperDuplicates, productJson, i);
      }
    },
    replaceRecommendationContent: function replaceRecommendationContent(elements, content, idx) {
      var recImage = elements[idx].querySelector('[data-rec-image]');
      var recTitle = elements[idx].querySelector('[data-rec-title]');
      var recPrice = elements[idx].querySelector('[data-rec-price]');
      var recProductId = elements[idx].querySelector('[data-rec-product-id]');
      var recProductLink = elements[idx].querySelector('[data-rec-link]');
      var recProductLinkContent = elements[idx].querySelector('[data-rec-link-content]');
      recImage.dataset.src = Shopify.theme.ThemeImages.getSizedImageUrl(content.featured_image, '250x');
      recImage.src = Shopify.theme.ThemeImages.getSizedImageUrl(content.featured_image, '250x');
      recImage.alt = content.media[0].alt || content.title;
      recTitle.textContent = content.title;
      recPrice.textContent = Avatar.theme.Currency.formatMoney(content.price);
      recProductId.setAttribute('data-rec-product-id', content.variants[0].id);
      recProductLink.href = content.url;
      recProductLinkContent.href = content.url;

      if (content.variants[0].available === false) {
        recProductId.textContent = Avatar.theme.i18n.soldOut;
        recProductId.setAttribute('disabled', true);
      }
    },
    addRecProduct: function addRecProduct(evt) {
      var _this10 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
        var currentTarget, productId;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                evt.preventDefault();

                _this10.showAndSizeLoader();

                currentTarget = evt.currentTarget;
                productId = parseInt(currentTarget.getAttribute('data-rec-product-id'), 10);
                _context6.next = 6;
                return theme_cart["a" /* addItem */](productId).catch( /*#__PURE__*/function () {
                  var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5(err) {
                    var json;
                    return regenerator_default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return err.json();

                          case 2:
                            json = _context5.sent;
                            _context5.next = 5;
                            return _this10.handleCartError(json, _this10.sliderCart);

                          case 5:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 6:
                _this10.refreshCartSlider();

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    handleQtyClick: function handleQtyClick(evt) {
      var _this11 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee7() {
        var target, qtyInput, currentVal, newVal;
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                evt.preventDefault();

                _this11.showAndSizeLoader();

                target = evt.currentTarget;
                qtyInput = target.previousElementSibling || target.nextElementSibling;
                currentVal = parseInt(qtyInput.value, 10);
                target.style.pointerEvents = 'none';
                target.disabled = 'true';
                target.style.opacity = '0.5';

                if ('stepUp' in target.dataset) {
                  newVal = currentVal + 1;

                  _this11.changeItem(target, newVal);
                } else if ('stepDown' in target.dataset) {
                  newVal = currentVal - 1;

                  _this11.changeItem(target, newVal);
                }

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    handleQtyChange: function handleQtyChange(evt) {
      var _this12 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee8() {
        var qtyInput, stepUpButton;
        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                evt.preventDefault();

                _this12.showAndSizeLoader();

                qtyInput = evt.currentTarget;
                stepUpButton = qtyInput.nextElementSibling;

                _this12.changeItem(stepUpButton, parseInt(qtyInput.value, 10));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    changeItem: function changeItem(target, quantity) {
      var _this13 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee9() {
        var lineItem, key;
        return regenerator_default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                lineItem = target.closest(selectors.lineItem);
                key = lineItem.getAttribute('data-item-key');
                _context9.next = 4;
                return theme_cart["e" /* updateItem */](key, {
                  quantity: quantity
                });

              case 4:
                _this13.refreshCartSlider();

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    removeCartItem: function removeCartItem(evt) {
      var _this14 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee10() {
        var lineItem, key;
        return regenerator_default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                evt.preventDefault();

                _this14.showAndSizeLoader();

                lineItem = evt.target.closest(selectors.lineItem);
                key = lineItem.getAttribute('data-item-key');
                lineItem.classList.add(classes.halfOpacity);
                _context10.next = 7;
                return theme_cart["d" /* removeItem */](key);

              case 7:
                lineItem.remove();

                _this14.refreshCartSlider();

              case 9:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    refreshCartSlider: function refreshCartSlider() {
      var _this15 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee11() {
        var cart, sliderCartLoading, sliderCartPrices, url, page, html, domParser, doc, sliderCartLoadingShadow, sliderCartShadow, sliderCart, sliderCartPricesShadow, sliderCartTotalContainer, sliderCartCountShadow, sliderCartCount;
        return regenerator_default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return theme_cart["c" /* getState */]();

              case 2:
                cart = _context11.sent;

                _this15.updateCartData(cart);

                sliderCartLoading = document.querySelector(selectors.sliderCartLoading);
                sliderCartPrices = document.querySelector(selectors.sliderCartPrices);

                _this15.showAndSizeLoader();

                url = '/cart?view=ajax';
                _context11.next = 10;
                return fetch(url);

              case 10:
                page = _context11.sent;
                _context11.next = 13;
                return page.text();

              case 13:
                html = _context11.sent;
                domParser = new DOMParser();
                doc = domParser.parseFromString(html, 'text/html');
                sliderCartLoadingShadow = doc.querySelector(selectors.sliderCartLoading);

                _this15.showAndSizeLoader(doc);

                sliderCartShadow = doc.querySelector(selectors.sliderCartItems);
                sliderCart = document.querySelector(selectors.sliderCartItems);
                sliderCart.innerHTML = sliderCartShadow.innerHTML;
                sliderCartPricesShadow = doc.querySelector(selectors.sliderCartPrices);
                sliderCartPrices.innerHTML = sliderCartPricesShadow.innerHTML;
                sliderCartTotalContainer = document.querySelector(selectors.sliderCartPrices);

                if (cart.cart_level_discount_applications.length > 0) {
                  sliderCartTotalContainer.classList.add(classes.textRight);
                  sliderCartTotalContainer.classList.remove(classes.textCenter);
                } else {
                  sliderCartTotalContainer.classList.add(classes.textCenter);
                  sliderCartTotalContainer.classList.remove(classes.textRight);
                }

                sliderCartCountShadow = doc.querySelector(selectors.sliderCartCount);
                sliderCartCount = document.querySelector(selectors.sliderCartCount);
                sliderCartCount.textContent = sliderCartCountShadow.textContent;
                sliderCartLoading = document.querySelector(selectors.sliderCartLoading);
                sliderCartLoading.classList.add(classes.hide);

                _this15.initSliderCartListeners();

              case 31:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    showAndSizeLoader: function showAndSizeLoader() {
      var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      var loader = doc.querySelector(selectors.sliderCartLoading);
      var cartItems = doc.querySelector(selectors.sliderCartItems);
      loader.classList.remove(classes.hide);
      loader.style.height = "".concat(cartItems.scrollHeight, "px");
    },
    updateCartData: function updateCartData(cart) {
      var _this16 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee12() {
        var item_count, items_subtotal_price, headerCartCount, sliderCartCountContainer, sliderCartCount, sliderCartCountText, sliderCartTotalContainer, sliderCartCheckoutButton, sliderCartContinueButton, sliderCartAdditionalButtons, sliderCartShippingTax, _Avatar$theme$i18n$ca, item, items;

        return regenerator_default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                item_count = cart.item_count, items_subtotal_price = cart.items_subtotal_price;
                headerCartCount = document.querySelector('.cart-count');
                sliderCartCountContainer = document.querySelector('[data-slider-cart-count-container]');
                sliderCartCount = document.querySelector('[data-slider-cart-count]');
                sliderCartCountText = document.querySelector('[data-slider-cart-count-text]');
                sliderCartTotalContainer = document.querySelector(selectors.sliderCartPrices);
                sliderCartCheckoutButton = document.querySelector('[data-slider-cart-checkout]');
                sliderCartContinueButton = document.querySelector('[data-slider-cart-continue-shopping]');
                sliderCartAdditionalButtons = document.querySelector('[data-slider-cart-additional-checkout]');
                sliderCartShippingTax = document.querySelector('[data-slider-cart-shipping-tax]');

                if (item_count > 0) {
                  headerCartCount.classList.remove(classes.hide);
                  sliderCartCountContainer.classList.remove(classes.hide);
                  headerCartCount.textContent = item_count;
                  sliderCartCount.textContent = item_count;
                  _Avatar$theme$i18n$ca = Avatar.theme.i18n.cart, item = _Avatar$theme$i18n$ca.item, items = _Avatar$theme$i18n$ca.items;
                  sliderCartCountText.textContent = item_count > 1 ? items : item;
                  sliderCartTotalContainer.classList.remove(classes.hide);
                  sliderCartCheckoutButton.classList.remove(classes.hide);
                  sliderCartContinueButton.classList.add(classes.hide);
                  sliderCartShippingTax.classList.remove(classes.hide);

                  if (sliderCartAdditionalButtons) {
                    sliderCartAdditionalButtons.classList.remove(classes.hide);
                  }
                } else {
                  headerCartCount.classList.add(classes.hide);
                  sliderCartCountContainer.classList.add(classes.hide);
                  sliderCartTotalContainer.classList.add(classes.hide);
                  sliderCartCheckoutButton.classList.add(classes.hide);
                  sliderCartShippingTax.classList.add(classes.hide);
                  sliderCartContinueButton.classList.remove(classes.hide);

                  if (sliderCartAdditionalButtons) {
                    sliderCartAdditionalButtons.classList.add(classes.hide);
                  }
                }

                _this16.sizeCart();

              case 12:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    initSliderCartListeners: function initSliderCartListeners() {
      var _this17 = this;

      var sliderCart = document.querySelector(selectors.sliderCart);

      if (!sliderCart) {
        return;
      }

      var removeItems = sliderCart.querySelectorAll(selectors.removeItem);
      var qtySteps = sliderCart.querySelectorAll(selectors.qtyStep);
      var qtyInputs = sliderCart.querySelectorAll(selectors.cartItemQuantityInput);
      removeItems.forEach(function (item) {
        return item.addEventListener('click', _this17.removeCartItem.bind(_this17));
      });
      qtySteps.forEach(function (step) {
        return step.addEventListener('click', _this17.handleQtyClick.bind(_this17));
      });
      qtyInputs.forEach(function (step) {
        return step.addEventListener('change', _this17.handleQtyChange.bind(_this17));
      });
    },
    initRecListeners: function initRecListeners() {
      var _this18 = this;

      document.querySelectorAll(selectors.addRecProductToCart).forEach(function (button) {
        return button.addEventListener('click', _this18.addRecProduct.bind(_this18));
      });
    },
    initSlider: function initSlider() {
      this.recSlider = new core_class["a" /* default */](this.sliderCartRecommendationsContainer, {
        observer: true,
        observeParents: true,
        spaceBetween: 32,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
      this.initRecListeners();
    },
    removeSliderCartListeners: function removeSliderCartListeners() {
      var _this19 = this;

      var sliderCart = document.querySelector(selectors.sliderCart);

      if (!sliderCart) {
        return;
      }

      var removeItems = sliderCart.querySelectorAll(selectors.removeItem);
      var qtySteps = sliderCart.querySelectorAll(selectors.qtyStep);
      var qtyInputs = sliderCart.querySelectorAll(selectors.cartItemQuantityInput);
      removeItems.forEach(function (item) {
        return item.removeEventListener('click', _this19.removeCartItem.bind(_this19));
      });
      qtySteps.forEach(function (step) {
        return step.removeEventListener('click', _this19.handleQtyClick.bind(_this19));
      });
      qtyInputs.forEach(function (step) {
        return step.removeEventListener('change', _this19.handleQtyChange.bind(_this19));
      });
    },
    removeRecListeners: function removeRecListeners() {
      var _this20 = this;

      document.querySelectorAll(selectors.addRecProductToCart).forEach(function (button) {
        return button.removeEventListener('click', _this20.addRecProduct.bind(_this20));
      });
    },
    checkCookies: function checkCookies() {
      if (helpers["b" /* cookiesEnabled */]()) return;
      this.container.classList.add(classes.noCookies);
    },
    onUnload: function onUnload() {
      var _this21 = this;

      fadeOutOverlay();
      scrollUnlock();
      this.sliderCartOpen.removeEventListener('click', this.eventHandlers.openSliderCart);
      this.sliderCartClose.removeEventListener('click', this.eventHandlers.closeSliderCart);
      this.addToCartForms.forEach(function (form) {
        return form.removeEventListener('submit', _this21.eventHandlers.addToCart);
      });
      document.removeEventListener('product-recommendations', this.eventHandlers.getNewForms);
      window.removeEventListener('resize', this.eventHandlers.sizeCart);
      this.recSlider.destroy();
      this.removeSliderCartListeners();
      this.removeRecListeners();
    }
  });
  Object(theme_sections["c" /* load */])(sectionName);
  var exists = Object(theme_sections["b" /* isInstance */])(sectionName);

  if (exists) {
    var instance = Object(theme_sections["a" /* getInstances */])(sectionName);
    return {
      instance: instance[0],
      addToCartEvent: instance[0].eventHandlers.addToCart
    };
  }
}();
// CONCATENATED MODULE: ./app/scripts/sections/email-modal.js







Avatar.theme = Avatar.theme || {};
Avatar.skup = Avatar.skup || {};
Avatar.theme.sections = Avatar.theme.sections || {};
var email_modal_sectionName = 'email-modal';

Avatar.theme.sections.EmailModal = function EmailModal() {
  var selectors = {
    modalContent: '[data-email-modal-content]',
    modalForm: '[data-email-modal-form]',
    modalInput: '[data-email-modal-input-field]',
    modalSubmit: '[data-email-modal-submit]',
    modalSubmitContent: '[data-email-modal-submit-content]',
    modalSpinner: '[data-email-modal-spinner]',
    modalClose: '[data-email-modal-close]',
    modalSuccess: '[data-email-modal-success]',
    modalSuccessAr: '[data-email-modal-ar-success]',
    modalError: '[data-email-modal-error]',
    modalErrorAr: '[data-email-modal-ar-error]'
  };
  var classes = {
    opacityNone: 'tw-opacity-0',
    pointerEventsNone: 'tw-pointer-events-none',
    invisible: 'tw-invisible',
    hide: 'tw-hidden'
  };
  Object(theme_sections["d" /* register */])(email_modal_sectionName, {
    onLoad: function onLoad() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var container;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                container = _this.container;
                _this.modal = _this.container;
                _this.modalContent = container.querySelector(selectors.modalContent);
                _this.modalForm = container.querySelector(selectors.modalForm);
                _this.modalInputs = container.querySelectorAll(selectors.modalInput);
                _this.modalSubmit = container.querySelector(selectors.modalSubmit);
                _this.modalSubmitContent = container.querySelector(selectors.modalSubmitContent);
                _this.modalSpinner = container.querySelector(selectors.modalSpinner);
                _this.modalClose = container.querySelector(selectors.modalClose);
                _this.modalSuccess = container.querySelector(selectors.modalSuccess);
                _this.modalSuccessAr = container.querySelector(selectors.modalSuccessAr);
                _this.modalError = container.querySelector(selectors.modalError);
                _this.modalErrorAr = container.querySelector(selectors.modalErrorAr);
                _this.eventHandlers = {};
                _this.settings = {};
                _this.scrollPosition = 0;

                if (_this.modal) {
                  _this.getSettings();

                  _this.eventHandlers.handleWindowOut = _this.handleWindowOut.bind(_this);

                  if (!Shopify.designMode) {
                    document.addEventListener('mouseout', _this.eventHandlers.handleWindowOut);
                  }

                  _this.eventHandlers.handleMobileExitIntent = _this.handleMobileExitIntent.bind(_this);
                  document.body.addEventListener('touchmove', helpers["c" /* debounce */](_this.eventHandlers.handleMobileExitIntent, 100), {
                    passive: true
                  });

                  if (_this.modalSuccess || _this.modalError) {
                    _this.checkFormStatus();
                  }

                  if (_this.modalSubmit) {
                    _this.eventHandlers.detectFormSubmit = _this.detectFormSubmit.bind(_this);

                    _this.modalSubmit.addEventListener('click', _this.eventHandlers.detectFormSubmit);
                  }

                  if (_this.settings.thirdParty) {
                    _this.eventHandlers.handleThirdPartySetup = _this.handleThirdPartySetup.bind(_this);

                    _this.modalForm.addEventListener('submit', _this.eventHandlers.handleThirdPartySetup);
                  }
                }

                if (_this.modalClose && !Shopify.designMode) {
                  _this.eventHandlers.handleCloseClick = _this.handleCloseClick.bind(_this);

                  _this.modalClose.addEventListener('click', _this.eventHandlers.handleCloseClick);

                  _this.eventHandlers.handleEscKeyup = _this.handleEscKeyup.bind(_this);

                  _this.container.addEventListener('keyup', _this.eventHandlers.handleEscKeyup);

                  _this.eventHandlers.handleClickOutsideModal = _this.handleClickOutsideModal.bind(_this);

                  _this.modal.addEventListener('click', _this.eventHandlers.handleClickOutsideModal);
                }

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getSettings: function getSettings() {
      this.settings = JSON.parse(this.container.getAttribute('data-section-settings'));
      return this.settings;
    },
    onSelect: function onSelect() {
      Avatar.skup.exitModal = true;
      var timer = setInterval(previewExitModal.bind(this), 250);

      function previewExitModal() {
        if (this.modal) {
          clearInterval(timer);
          this.openModal();
        }
      }
    },
    onDeselect: function onDeselect() {
      if (this.modal) {
        this.closeModal();
      }

      window.scrollTo(0, 0);
    },
    handleWindowOut: function handleWindowOut(evt) {
      if (!evt.toElement && !evt.relatedTarget) {
        this.openModal();
      }
    },
    handleMobileExitIntent: function handleMobileExitIntent() {
      var currentScroll = window.pageYOffset;

      if (currentScroll < this.scrollPosition) {
        this.openModal();
      }

      this.scrollPosition = currentScroll;
    },
    openModal: function openModal() {
      if (!Shopify.designMode && !this.modalSuccess && !this.modalError && checkExpiration('email-modal', this.settings.cookieLength) && this.settings.testMode === false) {
        return;
      }

      this.modal.classList.remove(classes.opacityNone);
      this.modal.classList.remove(classes.pointerEventsNone);
      this.modal.classList.remove(classes.invisible);
      fadeInOverlay();
      scrollLock(0);
      theme_a11y["c" /* trapFocus */](this.container, {
        elementToFocus: this.modalContent
      });
      this.modalSuccess = null;
      this.modalError = null;
    },
    handleCloseClick: function handleCloseClick(evt) {
      evt.preventDefault();
      this.closeModal();
    },
    handleClickOutsideModal: function handleClickOutsideModal(evt) {
      var target = evt.target;

      if (!target.closest(selectors.modalContent)) {
        this.closeModal();
      }
    },
    handleEscKeyup: function handleEscKeyup(evt) {
      if (evt.keyCode === Avatar.theme.keyboardKeys.ESCAPE) {
        this.closeModal();
      }
    },
    closeModal: function closeModal() {
      var _this2 = this;

      this.modal.classList.add(classes.opacityNone);
      this.modal.classList.add(classes.pointerEventsNone);
      this.modal.addEventListener('transitionend', function () {
        _this2.modal.classList.add(classes.invisible);
      }, {
        once: true
      });
      fadeOutOverlay();
      scrollUnlock(0);
      this.container.removeEventListener('keyup', this.eventHandlers.handleEscKeyup);
      theme_a11y["b" /* removeTrapFocus */]();
      theme_a11y["a" /* forceFocus */](document.body);
    },
    checkFormStatus: function checkFormStatus() {
      if (this.settings.thirdParty) {
        return;
      }

      var modalSubmit = window.sessionStorage.getItem('modal-submit');
      window.sessionStorage.setItem('modal-submit', false);

      if (modalSubmit !== 'true') {
        this.modalSuccess = null;
        this.modalError = null;
        return;
      }

      this.openModal();
      var otherFormStatuses = document.querySelectorAll('[data-form-status]');
      otherFormStatuses.forEach(function (statusMessage) {
        if (statusMessage.closest('[data-form-status-container]')) {
          statusMessage.closest('[data-form-status-container]').remove();
        }

        statusMessage.remove();
      });

      if (this.modalSuccess) {
        this.setStatusFocus(this.modalSuccess);
      }

      if (this.modalError) {
        this.setStatusFocus(this.modalError);
      }
    },
    detectFormSubmit: function detectFormSubmit() {
      window.sessionStorage.setItem('modal-submit', true);
    },
    setStatusFocus: function setStatusFocus(element) {
      element.setAttribute('tabindex', -1);
      element.focus();
      element.addEventListener('blur', function (evt) {
        evt.target.removeAttribute('tabindex');
      }, {
        once: true
      });
    },
    handleThirdPartySetup: function handleThirdPartySetup(evt) {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var target, membersUrl, formData, res, jsonRes;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                evt.preventDefault();
                target = evt.target;
                membersUrl = 'https://members.smar7apps.com/api/email/integration';
                formData = new FormData(target);

                _this3.modalSubmitContent.classList.add(classes.hide);

                _this3.modalSubmitContent.parentElement.disabled = true;

                _this3.modalSpinner.classList.remove(classes.hide);

                _context2.next = 9;
                return fetch(membersUrl, {
                  method: 'POST',
                  body: formData
                });

              case 9:
                res = _context2.sent;
                _context2.next = 12;
                return res.json();

              case 12:
                jsonRes = _context2.sent;

                if (res.status === 200) {
                  _this3.showSuccessMessage();
                } else {
                  _this3.showErrorMessage(jsonRes);
                }

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    showSuccessMessage: function showSuccessMessage() {
      this.modalErrorAr.classList.add(classes.hide);
      this.modalSuccessAr.classList.remove(classes.hide);
      this.modalInputs.forEach(function (input) {
        return input.classList.add(classes.hide);
      });
      this.setStatusFocus(this.modalSuccessAr);
    },
    showErrorMessage: function showErrorMessage(res) {
      this.modalErrorAr.classList.remove(classes.hide);
      this.modalSubmitContent.classList.remove(classes.hide);
      this.modalSubmitContent.parentElement.disabled = false;
      this.modalSpinner.classList.add(classes.hide);
      this.modalErrorAr.textContent = res.error;
      this.setStatusFocus(this.modalErrorAr);
    },
    onUnload: function onUnload() {
      document.removeEventListener('mouseout', this.eventHandlers.handleWindowOut);
      document.body.removeEventListener('touchmove', this.eventHandlers.handleMobileExitIntent);
      this.modalClose.removeEventListener('click', this.eventHandlers.handleCloseClick);
      this.modal.removeEventListener('click', this.eventHandlers.handleClickOutsideModal);
      this.modalForm.removeEventListener('submit', this.eventHandlers.handleThirdPartySetup);
      this.modalSubmit.removeEventListener('click', this.eventHandlers.detectFormSubmit);
      fadeOutOverlay();
      scrollUnlock();
      Avatar.skup.exitModal = false;
    }
  });
  Object(theme_sections["c" /* load */])(email_modal_sectionName);
  var instance = Object(theme_sections["a" /* getInstances */])(email_modal_sectionName);
  return instance[0];
}();
// CONCATENATED MODULE: ./app/scripts/sections/password.js



Avatar.theme = Avatar.theme || {};
Avatar.theme.sections = Avatar.theme.sections || {};
var password_sectionName = 'password-template';

Avatar.theme.sections.Password = function Password() {
  var selectors = {
    openPassword: '[data-login-open]',
    passwordField: '[data-password-field]',
    cancelPassword: '[data-login-cancel]',
    newsletterContent: '[data-newsletter]',
    passwordEntryContent: '[data-password-entry]'
  };
  var classes = {
    hidden: 'tw-hidden'
  };
  var data = {
    formError: 'data-error'
  };
  Object(theme_sections["d" /* register */])(password_sectionName, {
    onLoad: function onLoad() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var container;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                container = _this.container;
                _this.passwordField = container.querySelector(selectors.passwordField);
                _this.openPasswordLink = container.querySelector(selectors.openPassword);
                _this.cancelPasswordLink = container.querySelector(selectors.cancelPassword);
                _this.newsletterContainer = container.querySelector(selectors.newsletterContent);
                _this.passwordEntryContainer = container.querySelector(selectors.passwordEntryContent);

                if (_this.passwordField.hasAttribute(data.formError)) {
                  _this.togglePasswordOverlay();
                }

                _this.addEventListener();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addEventListener: function addEventListener() {
      this.openPasswordLink.addEventListener('click', this.togglePasswordOverlay.bind(this));
      this.cancelPasswordLink.addEventListener('click', this.togglePasswordOverlay.bind(this));
    },
    togglePasswordOverlay: function togglePasswordOverlay() {
      this.openPasswordLink.classList.toggle(classes.hidden);
      this.cancelPasswordLink.classList.toggle(classes.hidden);
      this.newsletterContainer.classList.toggle(classes.hidden);
      this.passwordEntryContainer.classList.toggle(classes.hidden);
    }
  });
  Object(theme_sections["c" /* load */])(password_sectionName);
  var instance = Object(theme_sections["a" /* getInstances */])(password_sectionName);
  return instance[0];
}();
// CONCATENATED MODULE: ./app/scripts/sections/video.js




Avatar.theme = Avatar.theme || {};
Avatar.theme.sections = Avatar.theme.sections || {};
var video_sectionName = 'video';

Avatar.theme.sections.Video = function Video() {
  var selectors = {
    section: '[data-section-type="video"]',
    video: '.video',
    videoWrapper: '.video-section-wrapper',
    playVideoBtn: '.video-control__play',
    closeVideoBtn: '.video-control__close-wrapper',
    pauseVideoBtn: '.video__pause',
    pauseVideoStop: '.video__pause-stop',
    pauseVideoResume: '.video__pause-resume',
    videoImage: '.video__image',
    fallbackText: '.sr-only'
  };
  var classes = {
    playing: 'video-is-playing',
    paused: 'video-is-paused',
    loading: 'video-is-loading',
    loaded: 'video-is-loaded',
    backgroundVideoWrapper: 'video-background-wrapper',
    videoWithImage: 'video--image_with_play',
    backgroundVideo: 'video--background',
    userPaused: 'is-paused',
    supportsAutoplay: 'autoplay',
    supportsNoAutoplay: 'no-autoplay',
    wrapperMinHeight: 'video-section-wrapper--min-height'
  };
  Object(theme_sections["d" /* register */])(video_sectionName, {
    onLoad: function onLoad() {
      var container = this.container;
      this.video = this.container.querySelector(selectors.video);
      this.eventHandlers = {};
      this.autoplayCheckComplete = false;
      this.playOnClickChecked = false;
      this.playOnClick = false;
      this.youtubeLoaded = window.youtubeLoaded;
      this.vimeoLoaded = window.vimeoLoaded;
      this.source = this.video.dataset.source;
      this.coverImage = this.video.dataset.coverImage;
      Avatar.theme.videos = Avatar.theme.videos || {};
      Avatar.theme.videoPlayers = Avatar.theme.videoPlayers || [];
      Avatar.theme.videoSources = Avatar.theme.videoSources || [];
      this.videoOptions = {
        ratio: 16 / 9,
        scrollAnimationDuration: 400,
        playerVars: {
          // eslint-disable-next-line camelcase
          iv_load_policy: 3,
          modestbranding: 1,
          autoplay: 0,
          controls: 0,
          wmode: 'opaque',
          branding: 0,
          autohide: 0,
          rel: 0
        },
        events: {
          onReady: this.onPlayerReady.bind(this),
          onStateChange: this.onPlayerChange.bind(this)
        }
      };

      if (this.video) {
        this.init(this.video); // this.editorLoadVideo(this.video.id);

        Avatar.theme.videoSources.push(this.source);
      }
    },
    init: function init(video) {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var source, tag, firstScriptTag, _tag, _firstScriptTag;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (video) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                Avatar.theme.videos[video.id] = {
                  id: video.id,
                  videoId: video.dataset.id,
                  type: video.dataset.type,
                  status: video.dataset.type === 'image_with_play' ? 'closed' : 'background',
                  // closed, open, background
                  video: video,
                  videoWrapper: video.closest(selectors.videoWrapper),
                  section: video.closest(selectors.section),
                  controls: video.dataset.type === 'background' ? 0 : 1,
                  width: video.dataset.width,
                  source: video.dataset.source
                };
                source = video.dataset.source;

                if (source === 'youtube' && !window.youtubeLoaded) {
                  // This code loads the IFrame Player API code asynchronously.
                  tag = document.createElement('script');
                  tag.src = 'https://www.youtube.com/iframe_api';
                  firstScriptTag = document.getElementsByTagName('script')[0];
                  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                }

                if (source === 'vimeo' && !window.vimeoLoaded) {
                  _tag = document.createElement('script');
                  _tag.src = 'https://player.vimeo.com/api/player.js';
                  _firstScriptTag = document.getElementsByTagName('script')[0];

                  _firstScriptTag.parentNode.insertBefore(_tag, _firstScriptTag);
                }

                if (source === 'vimeo') {
                  _this.checkVimeoReady().then(function () {
                    _this.loadVideos();

                    _this.onVimeoReady(video);
                  }).catch(function (err) {
                    console.log(err);
                  });
                }

                if (source === 'youtube') {
                  window.YTQueue.queueItem(function () {
                    _this.loadVideos();
                  });
                }

                _this.playOnClickCheck();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    checkVimeoReady: function checkVimeoReady() {
      var vimeoPromise = new Promise(function (resolve, reject) {
        var interval = setInterval(function () {
          if (Avatar.theme.videoSources.includes('youtube')) {
            if (typeof Vimeo === 'undefined' || !YT.loaded) {
              return;
            }
          } else if (typeof Vimeo === 'undefined') {
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
    },
    customPlayVideo: function customPlayVideo(playerId) {
      // Make sure we have carried out the playOnClick check first
      if (!this.playOnClickChecked && !this.playOnClick) {
        return;
      }

      if (playerId && typeof Avatar.theme.videoPlayers[playerId].playVideo === 'function') {
        this.privatePlayVideo(playerId);
      }
    },
    pauseVideo: function pauseVideo(playerId) {
      if (Avatar.theme.videoPlayers[playerId] && typeof Avatar.theme.videoPlayers[playerId].pauseVideo === 'function') {
        Avatar.theme.videoPlayers[playerId].pauseVideo();
      } else if (Avatar.theme.videoPlayers[playerId] && typeof Avatar.theme.videoPlayers[playerId].pause === 'function') {
        Avatar.theme.videoPlayers[playerId].pause();
      }
    },
    loadVideos: function loadVideos() {
      // eslint-disable-next-line no-restricted-syntax
      for (var key in Avatar.theme.videos) {
        if (Avatar.theme.videos.hasOwnProperty(key)) {
          if (Avatar.theme.videos[key].source === 'youtube' && !Avatar.theme.videos[key].init) {
            this.createPlayer(key, 'youtube');
          }

          if (Avatar.theme.videos[key].source === 'vimeo' && !Avatar.theme.videos[key].init) {
            this.createPlayer(key, 'vimeo');
          }
        }
      }

      this.initEvents();
    },
    editorLoadVideo: function editorLoadVideo(key) {
      if (Shopify.designMode) {
        if (this.source === 'youtube' && !window.youtubeLoaded) return;
        if (this.source === 'vimeo' && !window.vimeoLoaded) return; // this.createPlayer(key);

        this.initEvents();
      }
    },
    privatePlayVideo: function privatePlayVideo(id, clicked) {
      var videoData = Avatar.theme.videos[id];
      var player = Avatar.theme.videoPlayers[id];
      var videoWrapper = videoData.videoWrapper,
          source = videoData.source;

      if (this.playOnClick) {
        // playOnClick means we are probably on mobile (no autoplay).
        // setAsPlaying will show the iframe, requiring another click
        // to play the video.
        this.setAsPlaying(videoData);
      } else if (clicked || this.autoplayCheckComplete) {
        // Play if autoplay is available or clicked to play
        videoWrapper.classList.remove(classes.loading);
        this.setAsPlaying(videoData);
        setTimeout(function () {
          source === 'youtube' ? player.playVideo() : player.play();
        }, this.videoOptions.scrollAnimationDuration);
      } else {
        source === 'youtube' ? player.playVideo() : player.play();
      }
    },
    setAutoplaySupport: function setAutoplaySupport(supported) {
      var supportClass = supported ? classes.supportsAutoplay : classes.supportsNoAutoplay;
      document.documentElement.classList.remove(classes.supportsAutoplay, classes.supportsNoAutoplay);
      document.documentElement.classList.add(supportClass);

      if (!supported) {
        this.playOnClick = true;
      }

      this.autoplayCheckComplete = true;
    },
    playOnClickCheck: function playOnClickCheck() {
      if (this.playOnClickChecked) {
        return;
      }

      if (this.isMobile()) {
        this.playOnClick = false;
      }

      if (this.playOnClick) {
        // No need to also do the autoplay check
        this.setAutoplaySupport(false);
      }

      this.playOnClickChecked = true;
    },
    // The API will call this function when each video player is ready
    onPlayerReady: function onPlayerReady(evt) {
      evt.target.setPlaybackQuality('hd1080');
      var videoData = this.getVideoOptions(evt);
      var videoTitle = evt.target.getVideoData().title;
      this.playOnClickCheck(); // Prevent tabbing through YouTube player controls until visible

      document.getElementById(videoData.id).setAttribute('tabindex', '-1');
      this.sizeBackgroundVideos();
      this.setButtonLabels(videoData.videoWrapper, videoTitle); // Customize based on options from the video ID

      if (videoData.type === 'background') {
        if (this.isMobile() === false) {
          evt.target.mute();
          this.privatePlayVideo(videoData.id);
        }
      }

      videoData.videoWrapper.classList.add(classes.loaded);
    },
    onVimeoReady: function onVimeoReady(video) {
      var _this2 = this;

      this.playOnClickCheck();
      var videoData = Avatar.theme.videos[video.id];
      videoData.videoWrapper.classList.add(classes.loaded);
      document.getElementById(videoData.id).setAttribute('tabindex', '-1');
      this.sizeBackgroundVideos();
      Avatar.theme.videoPlayers[videoData.id].getVideoTitle().then(function (title) {
        _this2.setButtonLabels(videoData.videoWrapper, title);
      });

      if (videoData.type === 'background') {
        if (!this.isMobile()) {
          this.privatePlayVideo(videoData.id);
          this.setAutoplaySupport(true);
        }
      }
    },
    onPlayerChange: function onPlayerChange(evt) {
      var _this3 = this;

      var videoData = this.getVideoOptions(evt);

      if (videoData.status === 'background' && !this.isMobile() && !this.autoplayCheckComplete && (evt.data === YT.PlayerState.PLAYING || evt.data === YT.PlayerState.BUFFERING)) {
        this.setAutoplaySupport(true);
        this.autoplayCheckComplete = true;
        videoData.videoWrapper.classList.remove(classes.loading);
      } // eslint-disable-next-line default-case


      switch (evt.data) {
        case YT.PlayerState.ENDED:
          this.setAsFinished(videoData);
          break;

        case YT.PlayerState.PAUSED:
          // Seeking on a YouTube video also fires a PAUSED state change,
          // checking the state after a delay prevents us pausing the video when
          // the user is seeking instead of pausing
          setTimeout(function () {
            if (evt.target.getPlayerState() === YT.PlayerState.PAUSED) {
              if (_this3.isMobile()) return;

              _this3.setAsPaused(videoData);
            }
          }, 200);
          break;
      }
    },
    setAsFinished: function setAsFinished(videoData) {
      // eslint-disable-next-line default-case
      switch (videoData.type) {
        case 'background':
          Avatar.theme.videoPlayers[videoData.id].seekTo(0);
          break;

        case 'image_with_play':
          this.closeVideo(videoData.id);
          this.toggleExpandVideo(videoData.id, false);
          break;
      }
    },
    setAsPlaying: function setAsPlaying(videoData) {
      var videoWrapper = videoData.videoWrapper;
      var pauseButton = videoWrapper.querySelector(selectors.pauseVideoBtn);
      videoWrapper.classList.remove(classes.loading);

      if (pauseButton.classList.contains(classes.userPaused)) {
        pauseButton.classList.remove(classes.userPaused);
      } // Do not change element visibility if it is a background video


      if (videoData.status === 'background') {
        return;
      }

      document.getElementById(videoData.id).setAttribute('tabindex', '0');

      if (videoData.type === 'image_with_play') {
        videoWrapper.classList.remove(classes.paused);
        setTimeout(function () {
          videoWrapper.classList.add(classes.playing);
        }, this.videoOptions.scrollAnimationDuration + 100);
      } // Update focus to the close button so we stay within the video wrapper,
      // allowing time for the scroll animation


      setTimeout(function () {
        videoWrapper.querySelector(selectors.closeVideoBtn).focus();
      }, this.videoOptions.scrollAnimationDuration);
    },
    setAsPaused: function setAsPaused(videoData) {
      var videoWrapper = videoData.videoWrapper; // YT's events fire after our click event. This status flag ensures
      // we don't interact with a closed or background video.

      if (videoData.type === 'image_with_play') {
        if (videoData.status === 'closed') {
          videoWrapper.classList.remove(classes.paused);
        } else {
          videoWrapper.classList.add(classes.paused);
        }
      }

      videoWrapper.classList.remove(classes.playing);
    },
    closeVideo: function closeVideo(playerId) {
      var videoData = Avatar.theme.videos[playerId];
      var videoWrapper = videoData.videoWrapper,
          source = videoData.source;
      document.getElementById(videoData.id).setAttribute('tabindex', '-1');
      videoData.status = 'closed'; // eslint-disable-next-line default-case

      switch (videoData.type) {
        case 'image_with_play':
          if (source === 'youtube') {
            Avatar.theme.videoPlayers[playerId].stopVideo();
          } else {
            Avatar.theme.videoPlayers[playerId].pause();
            Avatar.theme.videoPlayers[playerId].setCurrentTime(0);
          }

          this.setAsPaused(videoData); // in case the video is already paused

          break;

        case 'background':
          if (source === 'youtube') {
            Avatar.theme.videoPlayers[playerId].mute();
          } else {
            Avatar.theme.videoPlayers[playerId].setVolume(0);
          }

          this.setBackgroundVideo(playerId);
          break;
      }

      videoWrapper.classList.remove(classes.paused, classes.playing);
    },
    getVideoOptions: function getVideoOptions(evt) {
      var _evt$target$getIframe = evt.target.getIframe(),
          id = _evt$target$getIframe.id;

      return Avatar.theme.videos[id];
    },
    toggleExpandVideo: function toggleExpandVideo(playerId, expand) {
      var video = Avatar.theme.videos[playerId];
      var elementTop = video.videoWrapper.getBoundingClientRect().top + window.pageYOffset;
      var playButton = video.videoWrapper.querySelector(selectors.playVideoBtn);
      var offset = 0;
      var newHeight = 0; // if (this.isMobile()) {
      //   video.videoWrapper.parentElement.classList.toggle(`${video.width}`, !expand);
      // }

      if (expand) {
        if (this.isMobile()) {
          newHeight = window.innerWidth / this.videoOptions.ratio;
        } else {
          newHeight = video.videoWrapper.offsetWidth / this.videoOptions.ratio;
        }

        offset = (window.innerHeight - newHeight) / 2;
        video.videoWrapper.style.height = "".concat(video.videoWrapper.getBoundingClientRect().height, "px");
        video.videoWrapper.classList.remove(classes.wrapperMinHeight);
        video.videoWrapper.style.height = "".concat(newHeight, "px"); // Animate doesn't work in mobile editor, so we don't use it

        if (!(this.isMobile() && Shopify.designMode)) {
          var scrollBehavior = document.documentElement.style.scrollBehavior;
          document.documentElement.style.scrollBehavior = 'smooth';
          window.scrollTo({
            top: elementTop - offset
          });
          document.documentElement.style.scrollBehavior = scrollBehavior;
        }
      } else {
        if (this.isMobile()) {
          newHeight = video.videoWrapper.dataset.mobileHeight;
        } else {
          newHeight = video.videoWrapper.dataset.desktopHeight;
        }

        video.videoWrapper.style.height = "".concat(newHeight, "px");
        setTimeout(function () {
          video.videoWrapper.classList.add(classes.wrapperMinHeight);
        }, 600); // Set focus on play button, but don't scroll page

        var x = window.scrollX;
        var y = window.scrollY;
        playButton.focus();
        window.scrollTo(x, y);
      }
    },
    togglePause: function togglePause(playerId) {
      var pauseButton = Avatar.theme.videos[playerId].videoWrapper.querySelector(selectors.pauseVideoBtn);
      var paused = pauseButton.classList.contains(classes.userPaused);

      if (paused) {
        pauseButton.classList.remove(classes.userPaused);
        this.customPlayVideo(playerId);
        this.privatePlayVideo(playerId);
      } else {
        pauseButton.classList.add(classes.userPaused);
        this.pauseVideo(playerId);
      }

      pauseButton.setAttribute('aria-pressed', !paused);
    },
    startVideoOnClick: function startVideoOnClick(playerId) {
      var video = Avatar.theme.videos[playerId]; // add loading class to wrapper

      video.videoWrapper.classList.add(classes.loading); // Explicity set the video wrapper height (needed for height transition)

      video.videoWrapper.style.height = "".concat(video.videoWrapper.offsetHeight, "px");
      video.status = 'open'; // eslint-disable-next-line default-case

      switch (video.type) {
        case 'image_with_play':
          this.privatePlayVideo(playerId, true);
          break;

        case 'background':
          this.unsetBackgroundVideo(playerId, video);

          if (video.source === 'youtube') {
            Avatar.theme.videoPlayers[playerId].unMute();
          } else if (video.source === 'vimeo') {
            Avatar.theme.videoPlayers[playerId].setVolume(1);
            Avatar.theme.videoPlayers[playerId].setLoop(false);
          }

          this.privatePlayVideo(playerId, true);
          break;
      }

      this.toggleExpandVideo(playerId, true); // esc to close video player

      document.addEventListener('keydown', this.handleVideoPlayerKeydown);
    },
    handleVideoPlayerKeydown: function handleVideoPlayerKeydown(evt) {
      var playerId = document.activeElement.dataset.controls;

      if (evt.keyCode !== Avatar.theme.keyboardKeys.ESCAPE || !playerId) {
        return;
      }

      this.closeVideo(playerId);
      this.toggleExpandVideo(playerId, false);
    },
    sizeBackgroundVideos: function sizeBackgroundVideos() {
      var _this4 = this;

      var backgroundVideos = document.querySelectorAll(".".concat(classes.backgroundVideo));
      backgroundVideos.forEach(function (el) {
        _this4.sizeBackgroundVideo(el);
      });
    },
    sizeBackgroundVideo: function sizeBackgroundVideo(videoPlayer) {
      if (this.source === 'youtube' && !window.youtubeLoaded) return;
      if (this.source === 'vimeo' && !window.vimeoLoaded) return;

      if (this.isMobile()) {
        videoPlayer.style.cssText = null;
      } else {
        var videoWrapper = videoPlayer.closest(selectors.videoWrapper);
        var videoWidth = videoWrapper.clientWidth;
        var playerWidth = videoPlayer.clientWidth;
        var desktopHeight = videoWrapper.dataset.desktopHeight; // when screen aspect ratio differs from video, video must center and underlay one dimension

        if (videoWidth / this.videoOptions.ratio < desktopHeight) {
          playerWidth = Math.ceil(desktopHeight * this.videoOptions.ratio); // get new player width

          var styles = "width: ".concat(playerWidth, "px; height: ").concat(desktopHeight, "px; left: ").concat((videoWidth - playerWidth) / 2, "px; top: 0;");
          videoPlayer.style.cssText = styles;
        } else {
          // new video width < window width (gap to right)
          desktopHeight = Math.ceil(videoWidth / this.videoOptions.ratio); // get new player height

          var styles2 = "width: ".concat(videoWidth, "px; height: ").concat(desktopHeight, "px; top: ").concat((desktopHeight - desktopHeight) / 2, "px; left: 0;"); // player height is greater, offset top; reset left

          videoPlayer.style.cssText = styles2;
        } // theme.Helpers.prepareTransition(videoPlayer);


        videoWrapper.classList.add(classes.loaded);
      }
    },
    unsetBackgroundVideo: function unsetBackgroundVideo(playerId) {
      // Switch the background video to a chrome-only player once played
      var player = document.getElementById(playerId);
      player.classList.remove(classes.backgroundVideo);
      player.classList.add(classes.videoWithImage);
      setTimeout(function () {
        document.getElementById(playerId).style.cssText = null;
      }, 600);
      Avatar.theme.videos[playerId].videoWrapper.classList.remove(classes.backgroundVideoWrapper);
      Avatar.theme.videos[playerId].videoWrapper.classList.add(classes.playing);
      Avatar.theme.videos[playerId].status = 'open';
    },
    setBackgroundVideo: function setBackgroundVideo(playerId) {
      var player = document.getElementById(playerId);
      player.classList.remove(classes.videoWithImage);
      player.classList.add(classes.backgroundVideo);
      Avatar.theme.videos[playerId].videoWrapper.classList.add(classes.backgroundVideoWrapper);
      Avatar.theme.videos[playerId].status = 'background';
      this.sizeBackgroundVideo(player);
    },
    isMobile: function isMobile() {
      return window.matchMedia(Avatar.theme.settings.mediaQuery.small).matches;
    },
    handleWindowResize: function handleWindowResize() {
      if (this.source === 'youtube' && !window.youtubeLoaded) return;
      if (this.source === 'vimeo' && !window.vimeoLoaded) return;
      var key;
      var fullscreen = window.innerHeight === screen.height;
      this.sizeBackgroundVideos();

      if (this.isMobile()) {
        // eslint-disable-next-line no-restricted-syntax
        for (key in Avatar.theme.videos) {
          if (Avatar.theme.videos.hasOwnProperty(key)) {
            if (Avatar.theme.videos[key].videoWrapper.classList.contains(classes.playing)) {
              if (!fullscreen) {
                this.pauseVideo(key);
                this.setAsPaused(Avatar.theme.videos[key]);
              }
            }

            Avatar.theme.videos[key].videoWrapper.style.height = "\n              ".concat(document.documentElement.clientWidth / this.videoOptions.ratio, "px\n            ");
          }
        }

        this.setAutoplaySupport(false);
      } else {
        this.setAutoplaySupport(true); // eslint-disable-next-line no-restricted-syntax

        for (key in Avatar.theme.videos) {
          var videosWithImage = Avatar.theme.videos[key].videoWrapper.querySelectorAll(".".concat(classes.videoWithImage));
          this.closeVideo(key);
          this.toggleExpandVideo(key, false);

          if (videosWithImage.length) {
            continue;
          }

          if (Avatar.theme.videos[key].source === 'youtube') {
            Avatar.theme.videoPlayers[key].playVideo();
          } else {
            Avatar.theme.videoPlayers[key].play();
          }

          this.setAsPlaying(Avatar.theme.videos[key]);
        }
      }

      ;
    },
    handleWindowScroll: function handleWindowScroll() {
      if (this.source === 'youtube' && !window.youtubeLoaded) return;
      if (this.source === 'vimeo' && !window.vimeoLoaded) return; // eslint-disable-next-line no-restricted-syntax

      for (var key in Avatar.theme.videos) {
        if (Avatar.theme.videos.hasOwnProperty(key)) {
          var videoWrapper = Avatar.theme.videos[key].videoWrapper;
          var condition = videoWrapper.getBoundingClientRect().top + window.pageYOffset + videoWrapper.offsetHeight * 0.85 < window.pageYOffset || videoWrapper.getBoundingClientRect().top + window.pageYOffset + videoWrapper.offsetHeight * 0.15 > window.pageYOffset + window.innerHeight; // Close the video if more than 75% of it is scrolled out of view

          if (videoWrapper.classList.contains(classes.playing)) {
            if (!condition) return;
            this.closeVideo(key);
            this.toggleExpandVideo(key, false);
          }
        }
      }
    },
    initEvents: function initEvents() {
      var _this5 = this;

      var playVideoBtns = this.container.querySelectorAll(selectors.playVideoBtn);
      var closeVideoBtns = this.container.querySelectorAll(selectors.closeVideoBtn);
      var pauseVideoBtns = this.container.querySelectorAll(selectors.pauseVideoBtn);
      playVideoBtns.forEach(function (btn) {
        btn.addEventListener('click', function (evt) {
          var playerId = evt.currentTarget.dataset.controls;

          _this5.startVideoOnClick(playerId);
        });
      });
      closeVideoBtns.forEach(function (btn) {
        btn.addEventListener('click', function (evt) {
          var playerId = evt.currentTarget.dataset.controls;
          evt.currentTarget.blur();

          _this5.closeVideo(playerId);

          _this5.toggleExpandVideo(playerId, false);
        });
      });
      pauseVideoBtns.forEach(function (btn) {
        btn.addEventListener('click', function (evt) {
          var playerId = evt.currentTarget.dataset.controls;

          _this5.togglePause(playerId);
        });
      }); // Listen to resize to keep a background-size:cover-like layout

      this.eventHandlers.handleWindowResize = helpers["c" /* debounce */](this.handleWindowResize.bind(this), 200);
      window.addEventListener('resize', this.eventHandlers.handleWindowResize);
      this.eventHandlers.handleWindowScroll = helpers["c" /* debounce */](this.handleWindowScroll.bind(this), 50);
      window.addEventListener('scroll', this.eventHandlers.handleWindowScroll);
    },
    createPlayer: function createPlayer(key, source) {
      var args = Object.assign(this.videoOptions, Avatar.theme.videos[key]);
      args.playerVars.controls = args.controls;

      if (source === 'youtube') {
        Avatar.theme.videoPlayers[key] = new YT.Player(key, args);
        Avatar.theme.videos[key].init = true;
      }

      if (source === 'vimeo') {
        var vimeoOptions = {
          id: args.videoId,
          muted: args.type === 'background',
          loop: args.type === 'background'
        };
        Avatar.theme.videoPlayers[key] = new Vimeo.Player(key, vimeoOptions);
        Avatar.theme.videos[key].init = true;
      }
    },
    removeEvents: function removeEvents() {
      var _this6 = this;

      document.removeEventListener('keydown', this.handleVideoPlayerKeydown);
      window.removeEventListener('resize', this.eventHandlers.handleWindowResize);
      window.removeEventListener('scroll', this.eventHandlers.handleWindowScroll);
      var playVideoBtns = this.container.querySelectorAll(selectors.playVideoBtn);
      var closeVideoBtns = this.container.querySelectorAll(selectors.closeVideoBtn);
      var pauseVideoBtns = this.container.querySelectorAll(selectors.pauseVideoBtn);
      playVideoBtns.forEach(function (btn) {
        btn.removeEventListener('click', function (evt) {
          var playerId = evt.currentTarget.dataset.controls;

          _this6.startVideoOnClick(playerId);
        });
      });
      closeVideoBtns.forEach(function (btn) {
        btn.removeEventListener('click', function (evt) {
          var playerId = evt.currentTarget.dataset.controls;
          evt.currentTarget.blur();

          _this6.closeVideo(playerId);

          _this6.toggleExpandVideo(playerId, false);
        });
      });
      pauseVideoBtns.forEach(function (btn) {
        btn.removeEventListener('click', function (evt) {
          var playerId = evt.currentTarget.dataset.controls;

          _this6.togglePause(playerId);
        });
      });
    },
    setButtonLabels: function setButtonLabels(videoWrapper, title) {
      var playButtons = videoWrapper.querySelectorAll(selectors.playVideoBtn);
      var closeButton = videoWrapper.querySelector(selectors.closeVideoBtn);
      var pauseButton = videoWrapper.querySelector(selectors.pauseVideoBtn);
      var closeButtonText = closeButton.querySelector(selectors.fallbackText);
      var pauseButtonStop = pauseButton.querySelector(selectors.pauseVideoStop);
      var pauseButtonStopText = pauseButtonStop.querySelector(selectors.fallbackText);
      var pauseButtonResume = pauseButton.querySelector(selectors.pauseVideoResume);
      var pauseButtonResumeText = pauseButtonResume.querySelector(selectors.fallbackText); // Insert the video title retrieved from YouTube into the instructional text
      // for each button

      playButtons.forEach(function (playButton) {
        var playButtonText = playButton.querySelector(selectors.fallbackText);
        playButtonText.textContent = playButtonText.textContent.replace('[video_title]', title);
      });
      closeButtonText.textContent = closeButtonText.textContent.replace('[video_title]', title);
      pauseButtonStopText.textContent = pauseButtonStopText.textContent.replace('[video_title]', title);
      pauseButtonResumeText.textContent = pauseButtonResumeText.textContent.replace('[video_title]', title);
    },
    onUnload: function onUnload() {
      this.removeEvents();
    }
  });
  Object(theme_sections["c" /* load */])(video_sectionName);
  var instances = Object(theme_sections["a" /* getInstances */])(video_sectionName);
  return instances;
}();
// CONCATENATED MODULE: ./app/scripts/sections/footer.js



Avatar.theme = Avatar.theme || {};
Avatar.theme.sections = Avatar.theme.sections || {};
var footer_sectionName = 'footer';

Avatar.theme.sections.SectionName = function SectionName() {
  var selectors = {
    disclosureLocale: '[data-disclosure-locale]',
    disclosureCurrency: '[data-disclosure-currency]'
  };
  Object(theme_sections["d" /* register */])(footer_sectionName, {
    onLoad: function onLoad() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var container;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                container = _this.container;
                _this.localeDisclosure = container.querySelector(selectors.disclosureLocale);
                _this.currencyDisclosure = container.querySelector(selectors.disclosureCurrency);

                if (_this.localeDisclosure) {
                  _this.localeDisclosure = new Avatar.theme.Disclosure(_this.localeDisclosure);
                }

                if (_this.currencyDisclosure) {
                  _this.currencyDisclosure = new Avatar.theme.Disclosure(_this.currencyDisclosure);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onUnload: function onUnload() {
      if (this.cache.localeDisclosure) {
        this.localeDisclosure.destroy();
      }

      if (this.cache.currencyDisclosure) {
        this.currencyDisclosure.destroy();
      }
    }
  });
  Object(theme_sections["c" /* load */])(footer_sectionName);
  var instance = Object(theme_sections["a" /* getInstances */])(footer_sectionName);
  return instance[0];
}();
// CONCATENATED MODULE: ./app/scripts/layout/theme.js
/**
 * Theme Layout Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts and styles for all pages.
 *
 * @namespace theme
 * @file vendors@layout.theme.css.liquid
 * @file vendors@layout.theme.js
 * @file layout.theme.css.liquid
 * @file layout.theme.js
 *
 */







window.lazySizes.cfg.loadHidden = false;



 // Utilities











 // Components











 // Sections




 // Temporarily remove section
// import "../sections/mobile-navigation";








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

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return renderMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return renderPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return renderComparePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return renderUnitPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return renderSku; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return updateStoreAvailabilityContent; });
var classes = {
  hidden: 'tw-hidden',
  invisible: 'tw-invisible'
};
function renderMedia(productMedia, variant, media) {
  if (!productMedia || productMedia.length === 0) {
    return;
  }

  if (!variant) {
    return;
  }

  var index = 0;

  if (variant.featured_media) {
    index = variant.featured_media.position - 1;
  }

  var targetSlide = media[index];
  targetSlide.classList.remove(classes.invisible);
  productMedia.slideTo(index);
}
function renderPrice(productPrices, productPrice, variant) {
  var productPriceEl = productPrice;

  if (variant) {
    productPriceEl.innerHTML = Avatar.theme.Currency.formatMoney(variant.price);
  } else {
    productPriceEl.innerHTML = Avatar.theme.i18n.unavailable;
  }
}
function renderComparePrice(productComparePrice, variant) {
  if (!productComparePrice) return;
  var productComparePriceEl = productComparePrice;

  if (!variant) {
    productComparePriceEl.textContent = '';
    return;
  }

  if (variant.compare_at_price > variant.price) {
    // eslint-disable-next-line max-len
    productComparePriceEl.innerHTML = Avatar.theme.Currency.formatMoney(variant.compare_at_price);
    productComparePrice.classList.remove(classes.hidden);
  } else {
    productComparePriceEl.textContent = '';
    productComparePrice.classList.add(classes.hidden);
  }
}
function renderUnitPrice(unitPrice, baseUnit, variant) {
  if (!variant || !unitPrice) return;
  if (!variant.unit_price_measurement) return;
  var unitPriceEl = unitPrice;
  var baseUnitEl = baseUnit;
  unitPriceEl.innerHTML = Avatar.theme.Currency.formatMoney(variant.unit_price);
  baseUnitEl.textContent = variant.unit_price_measurement.reference_value === 1 ? variant.unit_price_measurement.reference_unit : variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit;
}
function renderSku(sku, variant) {
  if (!sku || !variant) return;
  var skuEl = sku;
  var skuElParent = sku.parentElement; // eslint-disable-next-line no-unused-expressions

  variant.sku ? skuElParent.classList.remove(classes.hidden) : skuElParent.classList.add(classes.hidden);
  skuEl.textContent = variant.sku;
}
function renderButton(productButtonText, variant) {
  var productButton = productButtonText.parentElement;
  var icon = productButton.querySelector('.icon');
  var productButtonTextEl = productButtonText;

  if (!variant) {
    productButton.setAttribute('disabled', true);
    productButtonTextEl.textContent = Avatar.theme.i18n.unavailable;
    icon && icon.classList.add(classes.hidden);
  } else if (variant.available) {
    productButton.removeAttribute('disabled');
    productButtonTextEl.textContent = Avatar.theme.i18n.addToCart;
    icon && icon.classList.remove(classes.hidden);
  } else {
    productButton.setAttribute('disabled', true);
    productButtonTextEl.textContent = Avatar.theme.i18n.soldOut;
    icon && icon.classList.add(classes.hidden);
  }
}
function updateVariant(productVariant, variant) {
  if (!variant) return; // eslint-disable-next-line no-param-reassign

  productVariant.value = variant.id;
}
function updateBrowserHistory(variant) {
  if (!variant) return;
  var url = getUrlWithVariant(window.location.href, variant.id);
  window.history.replaceState({
    path: url
  }, '', url);
}
function updateStoreAvailabilityContent(storeAvailability, variant) {
  if (!variant || !storeAvailability) {
    storeAvailability.clearContent();
    return;
  }

  if (variant.available) {
    storeAvailability.updateContent(variant.id);
  } else {
    storeAvailability.clearContent();
  }
}

function getUrlWithVariant(url, id) {
  if (/variant=/.test(url)) {
    return url.replace(/(variant=)[^&]+/, '$1' + id);
  } else if (/\?/.test(url)) {
    return url.concat('&variant=').concat(id);
  }

  return url.concat('?variant=').concat(id);
}

/***/ })

/******/ });