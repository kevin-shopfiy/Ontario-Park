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
/******/ 		6: 0
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
/******/ 	deferredModules.push([57,0]);
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(11);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@shopify/theme-a11y/theme-a11y.js
var theme_a11y = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/swiper/esm/components/core/core-class.js + 66 modules
var core_class = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/swiper/esm/components/navigation/navigation.js
var navigation = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/swiper/esm/components/pagination/pagination.js
var pagination = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/swiper/esm/components/thumbs/thumbs.js
var thumbs = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/swiper/esm/components/effect-fade/effect-fade.js
var effect_fade = __webpack_require__(64);

// EXTERNAL MODULE: ./app/scripts/utilities/product-utils.js
var product_utils = __webpack_require__(7);

// EXTERNAL MODULE: ./app/scripts/utilities/helpers.js
var helpers = __webpack_require__(6);

// EXTERNAL MODULE: ./app/scripts/utilities/design-mode-util.js
var design_mode_util = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@shopify/theme-sections/theme-sections.js + 1 modules
var theme_sections = __webpack_require__(3);

// CONCATENATED MODULE: ./app/scripts/sections/product-recommendations.js
/* eslint-disable no-param-reassign */

Avatar.theme = Avatar.theme || {};

Avatar.theme.ProductRecommendations = function ProductRecommendations() {
  function init(container) {
    var productRecEvent = new Event('product-recommendations');
    var _container$dataset = container.dataset,
        baseUrl = _container$dataset.baseUrl,
        productId = _container$dataset.productId,
        limit = _container$dataset.limit,
        sectionType = _container$dataset.sectionType;
    var request = "\n      ".concat(baseUrl, "?section_id=").concat(sectionType, "&product_id=").concat(productId, "&limit=").concat(limit, "\n    ");
    fetch(request).then(function (res) {
      return res.text();
    }).then(function (productHtml) {
      if (productHtml.trim() === '') return;
      container.innerHTML = productHtml;
      container.innerHTML = container.firstElementChild.innerHTML;
      document.dispatchEvent(productRecEvent);
    });
  }

  return {
    init: init
  };
}();

Object(theme_sections["d" /* register */])('product-recommendations', {
  onLoad: function onLoad() {
    Avatar.theme.ProductRecommendations.init(this.container);
  }
});
Object(theme_sections["c" /* load */])('product-recommendations');
// CONCATENATED MODULE: ./app/scripts/templates/product.js









core_class["a" /* default */].use([navigation["a" /* default */], pagination["a" /* default */], thumbs["a" /* default */], effect_fade["a" /* default */]]);
Avatar.theme = Avatar.theme || {};

function Product() {
  var _this = this;

  var sectionName = 'main-product';
  var sectionId = helpers["f" /* getSectionIdByName */](sectionName);
  var selectors = {
    productContainer: '[data-product-container]',
    productMedia: '.product-media',
    productMediaItem: '[data-media-id]',
    productImageZoomWrapper: '[data-image-zoom-wrapper]',
    productMediaNav: '.product-media-nav',
    productMediaNavItem: '.product-media-nav-item',
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
    productOptionByIdex: function productOptionByIdex(index) {
      return "[data-product-option-".concat(index, "]");
    },
    productOptionLabel: '.form-check-label',
    productOptions: '[data-product-options]',
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
    intersect: '[data-intersect]',
    sliderNext: '.swiper-button-next',
    sliderPrev: '.swiper-button-prev',
    sliderNavThumbActive: function sliderNavThumbActive(name) {
      return ".".concat(name);
    },
    sectionById: function sectionById(id) {
      return "#shopify-section-".concat(id);
    },
    productJsonById: function productJsonById(id) {
      return "#ProductJson-".concat(id);
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
    opacityNone: 'tw-opacity-0',
    heightNone: 'tw-h-0',
    iframeWrapper: 'tw-video-wrapper'
  };
  var ENTER_KEY_CODE = 13;
  var SPACE_KEY_CODE = 32;
  var productMedia;
  var zoomPictures = [];
  var productMediaNav;
  var jsPlayers;
  var ytPlayers = [];
  var modelViewers;
  var productContainer;
  var settings = {};

  function cacheSelectors() {
    var container = document.querySelector(selectors.sectionById(sectionId));
    this.productMedia = container.querySelector(selectors.productMedia);
    this.productMediaItems = container.querySelectorAll(selectors.productMediaItem);
    this.productImageZoomWrapper = container.querySelectorAll(selectors.productImageZoomWrapper);
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
    this.productOptions = container.querySelector(selectors.productOptions);
    this.productHandle = container.querySelector(selectors.productHandle);
    this.intersect = document.querySelector(selectors.intersect);
    this.ytPlayers = container.querySelectorAll(selectors.ytPlayer);
    this.vmPlayers = container.querySelectorAll(selectors.vmPlayer);
    this.jsPlayers = container.querySelectorAll(selectors.jsPlayer);
    this.ytAPI = [];
    this.vmAPI = [];
    this.modelViewers = container.querySelectorAll(selectors.modelViewer);
    this.mqSmall = window.matchMedia(Avatar.theme.settings.mediaQuery.small);
    this.mqSmall.onchange = initImageZoom.bind(this);
  }

  var init = function init() {
    cacheSelectors.bind(_this)();
    initProductMedia.bind(_this)();
    initImageZoom.bind(_this)();
    initStoreAvailability.bind(_this)();
    initProductForm.bind(_this)();
    initProductTabs.bind(_this)();
    initRteIframes.bind(_this)();
    initProductQuantity.bind(_this)();
    initStickyCart.bind(_this)();
    initEventHandlers.bind(_this)();
    settings = getSettings();
  };

  function getSettings() {
    productContainer = document.querySelector(selectors.productContainer);

    if (!productContainer) {
      return false;
    }

    settings = JSON.parse(productContainer.getAttribute('data-product-settings'));
    return settings;
  }

  function initProductMedia() {
    var _this2 = this;

    if (!this.productMedia) {
      return;
    }

    if (this.productMediaItems.length <= 1) {
      this.productMediaItems[0].classList.remove(classes.invisible);
    }

    if (this.jsPlayers.length > 0) {
      Shopify.loadFeatures([{
        name: 'video-ui',
        version: '1.0',
        onLoad: setupPlyrVideos.bind(this)
      }]);
      Avatar.theme.LibraryLoader.load('plyrShopifyStyles');
    }

    if (this.ytPlayers.length > 0) {
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = function () {
        _this2.ytPlayers.forEach(function (player) {
          _this2.ytAPI.push(new YT.Player(player));
        });
      };
    }

    if (this.vmPlayers.length > 0) {
      var _tag = document.createElement('script');

      _tag.src = 'https://player.vimeo.com/api/player.js';
      var _firstScriptTag = document.getElementsByTagName('script')[0];

      _firstScriptTag.parentNode.insertBefore(_tag, _firstScriptTag);

      helpers["a" /* checkVimeoReady */]().then(function () {
        _this2.vmPlayers.forEach(function (player) {
          _this2.vmAPI.push(new Vimeo.Player(player));
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }

    if (this.modelViewers.length > 0) {
      Avatar.theme.ProductModel.init(sectionId);
    }

    if (this.productMediaNav) {
      var self = this;
      this.productMediaNavSwiper = new core_class["a" /* default */](this.productMediaNav, {
        observer: true,
        observeParents: true,
        slidesPerView: 6,
        spaceBetween: 1,
        watchOverflow: true,
        touchRatio: 1,
        breakpoints: {
          768: {
            slidesPerGroup: 2,
            touchRatio: 0,
            navigation: {
              nextEl: selectors.sliderNext,
              prevEl: selectors.sliderPrev,
              disabledClass: classes.sliderDisabledClass
            }
          }
        },
        on: {
          afterInit: function afterInit() {
            window.onload = function () {
              self.productMediaNav.classList.add('loaded');
              self.productMedia.classList.add('loaded');
            };
          }
        }
      });
      this.productMediaSwiper = new core_class["a" /* default */](this.productMedia, {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: selectors.sliderNext,
          prevEl: selectors.sliderPrev,
          disabledClass: classes.sliderDisabledClass
        },
        preloadImages: false,
        autoHeight: true,
        simulateTouch: false,
        preventClicks: false,
        preventClicksPropagation: false,
        followFinger: false,
        thumbs: {
          swiper: self.productMediaNavSwiper,
          autoScrollOffset: 2,
          slideThumbActiveClass: classes.sliderNavThumbActive
        },
        on: {
          afterInit: function afterInit() {
            self.productMediaNav.classList.remove(classes.heightNone);
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

            if (self.ytAPI.length > 0) {
              self.ytAPI.forEach(function (player) {
                return player.pauseVideo();
              });
              self.ytAPI.forEach(function (player) {
                if (player.h === slides[realIndex].firstElementChild) {
                  player.playVideo();
                }
              });
            }

            if (self.vmAPI.length > 0) {
              self.vmAPI.forEach(function (player) {
                return player.pause();
              });
              self.vmAPI.forEach(function (player) {
                if (player.element === slides[realIndex].firstElementChild) {
                  player.play();
                }
              });
            }

            if (self.jsPlayers) {
              self.jsPlayers.forEach(function (player) {
                return player.pause();
              });
              self.jsPlayers.forEach(function (player) {
                if (player.elements.container === slides[realIndex].firstElementChild) {
                  player.play();
                }
              });
            }

            setCurrentSlideAttributes.bind(self)();
          }
        }
      });
      this.productMediaNav.addEventListener('keydown', handleThumbnailKeyDown.bind(this));
      this.productMediaNavButtons.forEach(function (button) {
        button.addEventListener('click', handleThumbnailClick.bind(_this2));
      });
    }
  }

  function handleThumbnailKeyDown(evt) {
    if (![SPACE_KEY_CODE, ENTER_KEY_CODE].includes(evt.keyCode)) {
      return;
    }

    var index = Array.from(this.productMediaNav.querySelectorAll(selectors.productMediaNavItem)).indexOf(evt.target);
    this.productMedia.swiper.slideTo(index);
  }

  function setCurrentSlideAttributes() {
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
  }

  function handleThumbnailClick(evt) {
    var currentTarget = evt.currentTarget;
    var slideIndex = currentTarget.dataset.slideIndex;
    var targetSlide = this.productMediaSwiper.slides[slideIndex];
    this.productMediaSwiper.slideTo(slideIndex);
    targetSlide.classList.remove(classes.invisible);
    helpers["e" /* forceFocus */](targetSlide, {
      preventScroll: true
    });
  }

  function setupPlyrVideos(errors) {
    if (errors) {
      return;
    }

    this.jsPlayers = Shopify.Plyr.setup(selectors.jsPlayer);
  }

  function initImageZoom() {
    var _getSettings = getSettings(),
        enableImageZoom = _getSettings.enableImageZoom;

    if (!enableImageZoom) return;

    if (this.mqSmall.matches) {
      this.productImageZoomWrapper.forEach(function (element, index) {
        return destroyZoom(index);
      });
      return;
    }

    this.productImageZoomWrapper.forEach(function (element, index) {
      return enableZoom(element, index);
    });
  }

  function enableZoom(el, idx) {
    zoomPictures[idx] = new Avatar.theme.Zoom(el);
  }

  function destroyZoom(idx) {
    if (zoomPictures.length === 0) return;
    zoomPictures[idx].unload();
  }

  function initProductForm() {
    var jsonTag = document.querySelector(selectors.productJsonById(sectionId));

    if (!jsonTag || !jsonTag.innerHTML.length) {
      return;
    }

    var productJson = JSON.parse(jsonTag.innerHTML);

    if (!productJson.available && !settings.showUnavailable) {
      this.productOption.forEach(function (options) {
        return options.classList.add(classes.hidden);
      });
    }

    var self = this;

    if (productJson && productJson.options.length >= 1) {
      if (settings.variantSelectors === 'swatches') {
        initLinkedOptions(productJson);
      }

      if (settings.fadeInSelectors) {
        this.productOptions.classList.remove(classes.opacityNone);
      }
    }

    productJson.options = productJson.options.map(function (option) {
      return {
        name: option
      };
    });
    var productForm = new Avatar.theme.ProductForm(this.productForm, productJson, {
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
        product_utils["g" /* updateBrowserHistory */](variant);
        product_utils["h" /* updateStoreAvailabilityContent */](self.storeAvailability, variant);

        if (settings.variantSelectors === 'swatches') {
          updateSwatches(productJson);
        }
      }
    });
    this.productForm.dispatchEvent(new CustomEvent('product:form:loaded', {
      detail: {
        variant: productForm.variant(),
        target: productForm
      },
      bubbles: true
    }));
    var currentVariant = productForm.variant();
    var currentOptions = productForm.options();
    product_utils["c" /* renderMedia */](this.productMediaSwiper, currentVariant, this.productMediaItems);
    product_utils["a" /* renderButton */](self.productButtonText, currentVariant);

    if (this.storeAvailability && currentVariant.available) {
      this.storeAvailability.updateContent(currentVariant.id);
    }

    if (settings.ajaxSubmit) {
      design_mode_util["a" /* initAjaxAddToCart */]();
    }
  }

  function initStoreAvailability() {
    if (!this.storeAvailabilityContainer) return;
    this.storeAvailability = new Avatar.theme.StoreAvailability(this.storeAvailabilityContainer);
  }

  function initProductTabs() {
    if (!this.productTabs) return;
    this.productTabs = new Avatar.theme.Tabs(this.productTabs);
  }

  function initRteIframes() {
    var iframes = Avatar.theme.rte.iframeSelectors;
    Avatar.theme.rte.wrapIframe({
      iframes: document.querySelectorAll(iframes),
      iframeWrapperClass: classes.iframeWrapper
    });
  }

  function initProductQuantity() {
    var _this4 = this;

    if (this.productQuantityStep.length === 0) return;
    this.productQuantityStep.forEach(function (step) {
      return step.addEventListener('click', handleQuantityClick.bind(_this4));
    });
    this.productQuantityInput.addEventListener('change', handleQuantityChange.bind(this));
  }

  function handleQuantityClick(evt) {
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
  }

  function handleQuantityChange(evt) {
    var currentTarget = evt.currentTarget;

    if (currentTarget.value === '1') {
      currentTarget.previousElementSibling.setAttribute('disabled', true);
    } else {
      currentTarget.previousElementSibling.removeAttribute('disabled');
    }
  }

  var getProductJson = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var handle, product;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              handle = _this.productHandle.getAttribute('data-product-handle');
              _context.next = 3;
              return fetch("/products/".concat(handle, ".js")).then(function (response) {
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
    }));

    return function getProductJson() {
      return _ref.apply(this, arguments);
    };
  }();
  /* Sticky Cart */


  function initStickyCart() {
    var stickyCart = document.querySelector(selectors.stickyCart);
    var stickyAddCart = document.querySelector(selectors.stickyAddCart);
    var stickySelectOptions = document.querySelector(selectors.stickySelectOptions);

    if (stickyAddCart) {
      stickyAddCart.addEventListener('click', handleStickyAddCart);
    }

    if (stickySelectOptions) {
      stickySelectOptions.addEventListener('click', handleStickySelectOptions);
    }

    if (stickyCart) {
      initStickyCartObserver.bind(this)();
    }
  }

  function handleStickyAddCart() {
    var productForm = document.querySelector(selectors.productForm);
    var formAjaxSubmit = productForm.querySelector('[type="submit"]');

    if (settings.ajaxSubmit) {
      formAjaxSubmit.click();
    } else {
      productForm.submit();
    }
  }

  function handleStickySelectOptions() {
    var stickyCart = document.querySelector(selectors.stickyCart);
    var productForm = document.querySelector(selectors.productForm);
    var productFormPosition = window.pageYOffset + productForm.getBoundingClientRect().top;
    var stickyCartHeight = stickyCart.scrollHeight;
    Avatar.theme.Utilities.smoothScrollTo(0, productFormPosition - stickyCartHeight, 700);
  }

  function initStickyCartObserver() {
    var stickyCart = document.querySelector(selectors.stickyCart);
    var header = document.querySelector('#shopify-section-header');
    var stickyCartSettings = JSON.parse(stickyCart.dataset.stickyCartSettings);
    var position = stickyCartSettings.position,
        mobile = stickyCartSettings.mobile,
        desktop = stickyCartSettings.desktop;
    var mqSmall = this.mqSmall;

    function callback(entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          stickyCart.classList.add(classes.active);
          if (!mobile && mqSmall.matches) return;
          if (!desktop && !mqSmall.matches) return;

          if (headerIsSticky() && position === 'top') {
            hideHeader(header);
          }
        } else {
          stickyCart.classList.remove(classes.active);

          if (headerIsSticky() && position === 'top') {
            showHeader(header);
          }
        }
      });
    }

    var target = this.intersect;
    var observer = new IntersectionObserver(callback);
    observer.observe(target);
  }

  var headerIsSticky = function headerIsSticky() {
    var header = document.querySelector('[data-section-type="header"]');
    var headerSettings = JSON.parse(header.dataset.sectionSettings);
    var isSticky = headerSettings.sticky;
    return isSticky;
  };

  var showHeader = function showHeader(header) {
    header.classList.remove('tw-transition-opacity', 'tw-duration-150', 'tw-opacity-0', 'tw-pointer-events-none');
  };

  var hideHeader = function hideHeader(header) {
    header.classList.add('tw-transition-opacity', 'tw-duration-150', 'tw-opacity-0', 'tw-pointer-events-none');
  };
  /* Linked Options */


  var optionsMap = {};

  function updateOptionsInSelector(selectorIndex, product) {
    var key;
    var container = document.querySelector(selectors.sectionById(sectionId));

    function getKey(optionLevel) {
      var option;
      var checkedValue;

      if (optionLevel === 1) {
        // eslint-disable-next-line prefer-destructuring
        option = container.querySelectorAll(selectors.productOption)[0];
        checkedValue = option.querySelector(selectors.checkedInput).value;
      } else {
        option = container.querySelectorAll(selectors.productOption)[0].querySelector(selectors.checkedInput).value;
        option += ' / ';
        option += container.querySelectorAll(selectors.productOption)[1].querySelector(selectors.checkedInput).value;
        checkedValue = option;
      }

      return checkedValue;
    }

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
    var availableOptions = optionsMap[initialValue];
    var swatchInputOptionRow = container.querySelectorAll(selectors.swatchInputByOptionIndex(selectorIndex));
    var colorIndex = product.options.findIndex(function (option) {
      var value = option;

      if (typeof_default()(option) === 'object') {
        value = option.name;
      }

      return value.toLowerCase() === 'color';
    });

    if (colorIndex !== -1) {
      var optionContainer = container.querySelector(selectors.productOptionByIdex(colorIndex));
      var colorValue = optionContainer.querySelector(selectors.checkedInput).value;
      var span = optionContainer.querySelector('.color-option-label');

      if (span) {
        span.innerHTML = colorValue;
      }
    }

    if (settings.hideSingleOption && !settings.showUnavailable) {
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
        if (!settings.showUnavailable) {
          swatchContainer.classList.add(classes.hidden);
        }

        if (settings.disableUnavailable) {
          swatchContainer.querySelector('label').classList.add(classes.defaultCursor);
          swatchContainer.querySelector('input').setAttribute('disabled', true);
        }

        swatchContainer.classList.remove(classes.showOption);
        swatchContainer.classList.add(classes.hideOption);
        swatchContainer.classList.add(classes.soldout);
      }
    });

    if (settings.disableUnavailable) {
      var currentCheckedOption = null;
      var currentOptions = document.querySelectorAll(selectors.swatchByOptionIndex(selectorIndex));
      currentOptions.forEach(function (option) {
        var optionInput = option.querySelector('input');

        if (optionInput.checked) {
          currentCheckedOption = option.querySelector(selectors.checkedInput).parentElement;
        }
      }); // Make sure currentCheckedOption is not null, for products with no variants

      if (currentCheckedOption) {
        if (currentCheckedOption.classList.contains(classes.hideOption)) {
          var firstAvailableOption = currentOptions[0].parentElement.querySelector(".form-check-swatch.".concat(classes.showOption));
          firstAvailableOption && firstAvailableOption.querySelector('input').click();
        }
      }
    }
  }

  function initLinkedOptions(product) {
    // Building our mapping object.
    for (var i = 0; i < product.variants.length; i++) {
      var variant = product.variants[i]; // Add code back to variant.available if needed

      if (variant.available) {
        // Gathering values for the 1st drop-down.
        optionsMap.root = optionsMap.root || [];
        optionsMap.root.push(variant.option1);
        optionsMap.root = Avatar.theme.Utilities.uniq(optionsMap.root); // Gathering values for the 2nd drop-down.

        if (product.options.length > 1) {
          var key = variant.option1;
          optionsMap[key] = optionsMap[key] || [];
          optionsMap[key].push(variant.option2);
          optionsMap[key] = Avatar.theme.Utilities.uniq(optionsMap[key]);
        } // Gathering values for the 3rd drop-down.


        if (product.options.length === 3) {
          var _key = "".concat(variant.option1, " / ").concat(variant.option2);

          optionsMap[_key] = optionsMap[_key] || [];

          optionsMap[_key].push(variant.option3);

          optionsMap[_key] = Avatar.theme.Utilities.uniq(optionsMap[_key]);
        }
      }
    }

    updateSwatches(product);
  }

  function updateSwatches(product) {
    updateOptionsInSelector(0, product);
    if (product.options.length > 1) updateOptionsInSelector(1, product);
    if (product.options.length === 3) updateOptionsInSelector(2, product);
  }

  function initEventHandlers() {
    if (!this.productForm) {
      return;
    }

    this.productForm.addEventListener('keydown', handleOnKeyDown);
  }

  function handleOnKeyDown(evt) {
    if ([SPACE_KEY_CODE, ENTER_KEY_CODE].includes(evt.keyCode)) {
      var container = document.querySelector(selectors.sectionById(sectionId));
      var labels = container.querySelectorAll(selectors.productOptionLabel);
      labels.forEach(function (label) {
        if (label === document.activeElement) {
          evt.preventDefault();
          var inputSelector = selectors.swatchInputById(label.getAttribute('for'));
          document.querySelector(inputSelector).checked = true;
          var changeEvent = new Event('change');
          document.querySelector(inputSelector).dispatchEvent(changeEvent);
        }
      });
    }
  }

  var destroy = function destroy() {
    if (_this.productForm) {
      _this.productForm.removeEventListener('keydown', handleOnKeyDown);
    }

    _this.productQuantityStep.forEach(function (step) {
      step.removeEventListener('click', handleQuantityClick);
    });

    if (_this.productQuantityInput) {
      _this.productQuantityInput.removeEventListener('change', handleQuantityChange);
    } // this.productFormInstance.destroy();


    if (_this.productMediaNav) {
      _this.productMediaNav.removeEventListener('keydown', handleThumbnailKeyDown);

      _this.productMediaNavButtons.forEach(function (button) {
        button.removeEventListener('click', handleThumbnailClick.bind);
      });
    }

    if (_this.productMediaNav && _this.productMediaNav.initialized) {
      _this.productMediaNavSwiper.destroy();
    }

    if (_this.productMedia && _this.productMedia.initialized) {
      _this.productMediaSwiper.destroy();
    }

    _this.productTabs.destroy();

    if (settings.ajaxSubmit) {
      design_mode_util["b" /* initAjaxAddToCartDestroy */]();
    }

    Avatar.theme.ProductModel.removeSectionModels(sectionId);
  }; // TODO: Don't need this in production since this won't load on any other page.


  if (Avatar.theme.current.pageType === 'product') {
    init();
  }

  return {
    init: init,
    destroy: destroy,
    initProductMedia: initProductMedia,
    initProductForm: initProductForm,
    initProductQuantity: initProductQuantity,
    initLinkedOptions: initLinkedOptions,
    getProductJson: getProductJson
  };
}

Avatar.theme.Product = new Product();


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