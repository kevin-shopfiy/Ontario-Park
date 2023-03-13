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
/******/ 		4: 0
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
/******/ 	deferredModules.push([45,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(21);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(18);

var setPrototypeOf = __webpack_require__(21);

var isNativeFunction = __webpack_require__(50);

var construct = __webpack_require__(51);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(46);

var iterableToArray = __webpack_require__(47);

var unsupportedIterableToArray = __webpack_require__(48);

var nonIterableSpread = __webpack_require__(49);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(11);

var assertThisInitialized = __webpack_require__(13);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*import { register, load, getInstances } from '@shopify/theme-sections';

Avatar.theme = Avatar.theme || {};
Avatar.theme.sections = Avatar.theme.sections || {};

Avatar.theme.sections.Collection = (function Collection() {
  const selectors = {
    filterSelection: '[data-filter]',
    filterSelectIcon: '[data-filter-select-icon]',
    filterOptionsDropdown: '[data-filter-options-dropdown]',
    sortSelection: '[data-sort]',
    sortSelectIcon: '[data-sort-select-icon]',
    sortOptionsDropdown: '[data-sort-options-dropdown]',
    selectInput: '[data-select-input]',
    optionValues: '[data-value]',
  };

  const classes = {
    opacityFull: 'tw-opacity-100',
    hide: 'tw-hidden',
    rotate: 'tw-rotate-180',
  };

  register('collection-template', {
    onLoad() {
      const { container } = this;

      this.filterSelect = container.querySelector(selectors.filterSelection);
      this.filterSelectIcon = container.querySelector(selectors.filterSelectIcon);
      this.sortSelect = container.querySelector(selectors.sortSelection);
      this.sortSelectIcon = container.querySelector(selectors.sortSelectIcon);

      // For Custom Dropdown
      this.filterOptionsDropdown = container.querySelector(selectors.filterOptionsDropdown);
      // Might need again if we decided to make a filter that can use AND / OR filtering
      this.optionValues = container.querySelectorAll(selectors.optionValues);
      this.sortOptionsDropdown = container.querySelector(selectors.sortOptionsDropdown);

      this.selects = container.querySelectorAll(selectors.selectInput);

      this.eventHandlers = {};

      if (this.sortSelect) {
        this.defaultSort = this._getDefaultSortValue();
      }

      if (this.selects.length) {
        this.selects.forEach(select => {
          select.classList.remove('hidden');
        });
      }

      if (this.filterSelect) {
        if (this.filterSelect.dataset.selectInput === 'custom') {
          this.eventHandlers._onCustomFilterClick = this._onCustomFilterClick.bind(this);
          this.filterSelect.addEventListener('click', this.eventHandlers._onCustomFilterClick);

          this.eventHandlers._onFilterKeyUp = this._onFilterKeyUp.bind(this);
          this.filterSelect.parentElement.addEventListener('keyup', this.eventHandlers._onFilterKeyUp);

          this.eventHandlers._onFilterToggleFocusOut = this._onFilterToggleFocusOut.bind(this);
          this.filterSelect.addEventListener('focusout', this.eventHandlers._onFilterToggleFocusOut);

          this.eventHandlers._onFilterDropdownFocusOut = this._onFilterDropdownFocusOut.bind(this);
          this.filterOptionsDropdown.addEventListener('focusout', this.eventHandlers._onFilterDropdownFocusOut);
        } else {
          this.filterSelect.addEventListener('change', this._onFilterChange.bind(this));
        }
      }

      if (this.sortSelect) {
        if (this.sortSelect.dataset.selectInput === 'custom') {
          this.eventHandlers._onCustomSortClick = this._onCustomSortClick.bind(this);
          this.sortSelect.addEventListener('click', this.eventHandlers._onCustomSortClick);

          this.eventHandlers._onCustomOptionClick = this._onCustomOptionClick.bind(this);
          this.optionValues.forEach(option => option.addEventListener('click', this.eventHandlers._onCustomOptionClick));

          this.eventHandlers._onSortKeyUp = this._onSortKeyUp.bind(this);
          this.sortSelect.parentElement.addEventListener('keyup', this.eventHandlers._onSortKeyUp);

          this.eventHandlers._onSortToggleFocusOut = this._onSortToggleFocusOut.bind(this);
          this.sortSelect.addEventListener('focusout', this.eventHandlers._onSortToggleFocusOut);

          this.eventHandlers._onSortDropdownFocusOut = this._onSortDropdownFocusOut.bind(this);
          this.sortOptionsDropdown.addEventListener('focusout', this.eventHandlers._onSortDropdownFocusOut);
        } else {
          this.sortSelect.addEventListener('change', this._onSortChange.bind(this));
        }
      }

      if (this.filterSelect || this.sortSelect) {
        this.eventHandlers._onBodyClick = this._onBodyClick.bind(this);
        document.body.addEventListener('click', this.eventHandlers._onBodyClick);
      }

      this._initParams();
    },

    _initParams() {
      this.queryParams = {};
      if (location.search.length) {
        let aKeyValue;
        const aCouples = location.search.substr(1).split('&');
        aCouples.forEach(aCouple => {
          aKeyValue = aCouple.split('=');
          if (aKeyValue.length > 1) {
            this.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
          }
        });
      }
    },

    _onSortChange() {
      this.queryParams.sort_by = this._getSortValue();

      if (this.queryParams.page) {
        delete this.queryParams.page;
      }

      window.location.search = decodeURIComponent(
        new URLSearchParams(Object.entries(this.queryParams)).toString()
      );
    },

    _onCustomSortClick() {
      this._toggleDropdown(this.sortOptionsDropdown, this.sortSelectIcon, this.sortSelect);
    },

    _onFilterChange() {
      document.location.href = this._getFilterValue();
    },

    _onCustomFilterClick() {
      this._toggleDropdown(this.filterOptionsDropdown, this.filterSelectIcon, this.filterSelect);
    },

    _toggleDropdown(dropdown, icon, select) {
      if (dropdown.classList.contains(classes.opacityFull)) {
        dropdown.classList.remove(classes.opacityFull);
        icon.classList.remove(classes.rotate);
        setTimeout(() => {
          dropdown.classList.add(classes.hide);
        }, 100);
        select.setAttribute('aria-expanded', false);
      } else {
        dropdown.classList.remove(classes.hide);
        dropdown.classList.add(classes.opacityFull);
        icon.classList.add(classes.rotate);
        select.setAttribute('aria-expanded', true);
      }
    },

    _closeDropdown(dropdown, icon, select) {
      dropdown.classList.remove(classes.opacityFull);
      icon.classList.remove(classes.rotate);
      setTimeout(() => {
        dropdown.classList.add(classes.hide);
      }, 100);
      select.setAttribute('aria-expanded', false);
    },

    _onCustomOptionClick(evt) {
      evt.preventDefault();

      this.queryParams.sort_by = this._getCustomSortValue(evt);

      if (this.queryParams.page) {
        delete this.queryParams.page;
      }

      window.location.search = decodeURIComponent(
        new URLSearchParams(Object.entries(this.queryParams)).toString()
      );
    },

    _getSortValue() {
      return this.sortSelect.value || this.defaultSort;
    },

    _getCustomSortValue(evt) {
      return evt.currentTarget.dataset.value;
    },

    _getFilterValue() {
      return this.filterSelect.value;
    },

    _getDefaultSortValue() {
      return this.sortSelect.dataset.defaultSortby;
    },

    _onBodyClick(evt) {
      if (this.filterSelect) {
        if (
          !evt.target.closest(selectors.filterOptionsDropdown)
          && !evt.target.closest(selectors.filterSelection)
        ) {
          this._closeDropdown(this.filterOptionsDropdown, this.filterSelectIcon, this.filterSelect);
        }
      }

      if (this.sortSelect) {
        if (
          !evt.target.closest(selectors.sortOptionsDropdown)
          && !evt.target.closest(selectors.sortSelection)
        ) {
          this._closeDropdown(this.sortOptionsDropdown, this.sortSelectIcon, this.sortSelect);
        }
      }
    },

    _onFilterKeyUp(evt) {
      if (evt.which !== 27) return;
      this._closeDropdown(this.filterOptionsDropdown, this.filterSelectIcon, this.filterSelect);
      this.filterSelect.focus();
    },

    _onSortKeyUp(evt) {
      if (evt.which !== 27) return;
      this._closeDropdown(this.sortOptionsDropdown, this.sortSelectIcon, this.sortSelect);
      this.sortSelect.focus();
    },

    _onFilterToggleFocusOut(evt) {
      const FilterLostFocus = this.filterOptionsDropdown.contains(evt.relatedTarget) === false;

      if (FilterLostFocus) {
        this._closeDropdown(this.filterOptionsDropdown, this.filterSelectIcon, this.filterSelect);
      }
    },

    _onFilterDropdownFocusOut(evt) {
      const childInFocus = evt.currentTarget.contains(evt.relatedTarget);

      const isVisible = this.filterOptionsDropdown.classList.contains(classes.opacityFull);

      if (isVisible && !childInFocus) {
        this._closeDropdown(this.filterOptionsDropdown, this.filterSelectIcon, this.filterSelect);
      }
    },

    _onSortToggleFocusOut(evt) {
      const SortLostFocus = this.sortOptionsDropdown.contains(evt.relatedTarget) === false;

      if (SortLostFocus) {
        this._closeDropdown(this.sortOptionsDropdown, this.sortSelectIcon, this.sortSelect);
      }
    },

    _onSortDropdownFocusOut(evt) {
      const childInFocus = evt.currentTarget.contains(evt.relatedTarget);

      const isVisible = this.sortOptionsDropdown.classList.contains(classes.opacityFull);

      if (isVisible && !childInFocus) {
        this._closeDropdown(this.sortOptionsDropdown, this.sortSelectIcon, this.sortSelect);
      }
    },

    onUnload() {
      if (this.sortSelect) {
        this.sortSelect.removeEventListener('click', this.eventHandlers._onCustomSortClick);

        this.optionValues.forEach(option => option.removeEventListener('click', this.eventHandlers._onCustomOptionClick));

        this.sortSelect.parentElement.removeEventListener('keyup', this.eventHandlers._onSortKeyUp);
        this.sortSelect.removeEventListener('focusout', this.eventHandlers._onSortToggleFocusOut);
        this.sortOptionsDropdown.removeEventListener('focusout', this.eventHandlers._onSortDropdownFocusOut);
      }

      if (this.filterSelect) {
        this.filterSelect.removeEventListener('click', this.eventHandlers._onCustomFilterClick);
        this.filterSelect.parentElement.removeEventListener('keyup', this.eventHandlers.onFilterKeyUp);
        this.filterSelect.removeEventListener('focusout', this.eventHandlers._onFilterToggleFocusOut);
        this.filterOptionsDropdown.removeEventListener('focusout', this.eventHandlers._onFilterDropdownFocusOut);
      }
      document.body.removeEventListener('click', this.eventHandlers._onBodyClick);
    }
  });

  load('collection-template');

  const instance = getInstances('collection-template');
  return instance[0];
})();*/
var CollectionFiltersForm = /*#__PURE__*/function (_HTMLElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CollectionFiltersForm, _HTMLElement);

  var _super = _createSuper(CollectionFiltersForm);

  function CollectionFiltersForm() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CollectionFiltersForm);

    _this = _super.call(this);
    _this.filterData = [];
    _this.onActiveFilterClick = _this.onActiveFilterClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.debouncedOnSubmit = debounce(function (event) {
      _this.onSubmitHandler(event);
    }, 500);

    _this.querySelector('form').addEventListener('input', _this.debouncedOnSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)));

    window.addEventListener('popstate', _this.onHistoryChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)));

    _this.addClickOutsideHandler(document);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CollectionFiltersForm, [{
    key: "addClickOutsideHandler",
    value: function addClickOutsideHandler(container) {
      var displays = container.querySelectorAll('.facets__display');
      displays.forEach(function (item) {
        hideOnClickOutside(item);
      });
    }
  }, {
    key: "onSubmitHandler",
    value: function onSubmitHandler(event) {
      var _event$target;

      event.preventDefault();

      if ((_event$target = event.target) !== null && _event$target !== void 0 && _event$target.classList.contains('handle')) {
        return;
      }

      var formData = new FormData(event.target.closest('form'));
      var searchParams = new URLSearchParams(formData).toString();
      this.renderPage(searchParams, event);
    }
  }, {
    key: "onActiveFilterClick",
    value: function onActiveFilterClick(event) {
      event.preventDefault();
      this.toggleActiveFacets();
      this.renderPage(new URL(event.currentTarget.href).searchParams.toString());
    }
  }, {
    key: "onHistoryChange",
    value: function onHistoryChange(event) {
      var _event$state;

      var searchParams = ((_event$state = event.state) === null || _event$state === void 0 ? void 0 : _event$state.searchParams) || '';
      this.renderPage(searchParams, null, false);
    }
  }, {
    key: "toggleActiveFacets",
    value: function toggleActiveFacets() {
      var disable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      document.querySelectorAll('.js-facet-remove').forEach(function (element) {
        element.classList.toggle('disabled', disable);
      });
    }
  }, {
    key: "renderPage",
    value: function renderPage(searchParams, event) {
      var _this2 = this;

      var updateURLHash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var sections = this.getSections();
      document.querySelector('.loading-overlay').classList.remove('tw-hidden');
      sections.forEach(function (section) {
        var url = "".concat(window.location.pathname, "?section_id=").concat(section.section, "&").concat(searchParams);

        var filterDataUrl = function filterDataUrl(element) {
          return element.url === url;
        };

        _this2.filterData.some(filterDataUrl) ? _this2.renderSectionFromCache(filterDataUrl, event) : _this2.renderSectionFromFetch(url, event);
      });
      if (updateURLHash) this.updateURLHash(searchParams);
    }
  }, {
    key: "renderSectionFromFetch",
    value: function renderSectionFromFetch(url, event) {
      var _this3 = this;

      fetch(url).then(function (response) {
        return response.text();
      }).then(function (responseText) {
        var html = responseText;
        _this3.filterData = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this3.filterData), [{
          html: html,
          url: url
        }]);

        _this3.renderFilters(html, event);

        _this3.renderProductGrid(html);

        _this3.renderProductCount(html);
      });
    }
  }, {
    key: "renderSectionFromCache",
    value: function renderSectionFromCache(filterDataUrl, event) {
      var html = this.filterData.find(filterDataUrl).html;
      this.renderFilters(html, event);
      this.renderProductGrid(html);
      this.renderProductCount(html);
    }
  }, {
    key: "renderProductGrid",
    value: function renderProductGrid(html) {
      document.getElementById('CollectionProductGrid').innerHTML = new DOMParser().parseFromString(html, 'text/html').getElementById('CollectionProductGrid').innerHTML;
    }
  }, {
    key: "renderProductCount",
    value: function renderProductCount(html) {
      var count = new DOMParser().parseFromString(html, 'text/html').getElementById('CollectionProductCount').innerHTML;
      var containerDesktop = document.getElementById('CollectionProductCountDesktop');
      document.getElementById('CollectionProductCount').innerHTML = count;

      if (containerDesktop) {
        containerDesktop.innerHTML = count;
      }
    }
  }, {
    key: "renderFilters",
    value: function renderFilters(html, event) {
      var parsedHTML = new DOMParser().parseFromString(html, 'text/html');
      var facetDetailsElements = parsedHTML.querySelectorAll('#CollectionFiltersForm .js-filter, #CollectionFiltersFormMobile .js-filter');

      var matchesIndex = function matchesIndex(element) {
        var _event$target$closest;

        return element.dataset.index === (event === null || event === void 0 ? void 0 : (_event$target$closest = event.target.closest('.js-filter')) === null || _event$target$closest === void 0 ? void 0 : _event$target$closest.dataset.index);
      };

      var facetsToRender = Array.from(facetDetailsElements).filter(function (element) {
        return !matchesIndex(element);
      });
      var countsToRender = Array.from(facetDetailsElements).find(matchesIndex);
      var currentFacets = Array.from(facetDetailsElements).filter(function (element) {
        return matchesIndex(element);
      });
      currentFacets.forEach(function (element) {
        var target = document.querySelector(".js-filter[data-index=\"".concat(element.dataset.index, "\"]"));
        target.setAttribute('class', element.getAttribute('class'));

        if (target.dataset.index.includes('mobile')) {
          target.open = true;
          setTimeout(function () {
            target.classList.add('menu-opening');
          });
        }
      });
      facetsToRender.forEach(function (element) {
        var target = document.querySelector(".js-filter[data-index=\"".concat(element.dataset.index, "\"]"));
        target.innerHTML = element.innerHTML;
        target.setAttribute('class', element.getAttribute('class'));
      });
      this.addClickOutsideHandler(document);
      this.renderActiveFacets(parsedHTML);
      this.renderAdditionalElements(parsedHTML);
      if (countsToRender) this.renderCounts(countsToRender, event.target.closest('.js-filter'));
    }
  }, {
    key: "renderActiveFacets",
    value: function renderActiveFacets(html) {
      var activeFacetElementSelectors = ['.active-facets-mobile', '.active-facets-desktop'];
      activeFacetElementSelectors.forEach(function (selector) {
        var activeFacetsElement = html.querySelector(selector);
        if (!activeFacetsElement) return;
        document.querySelector(selector).innerHTML = activeFacetsElement.innerHTML;
      });
      this.toggleActiveFacets(false);
    }
  }, {
    key: "renderAdditionalElements",
    value: function renderAdditionalElements(html) {
      var mobileElementSelectors = ['.mobile-facets__open', '.mobile-facets__count', '.sorting'];
      mobileElementSelectors.forEach(function (selector) {
        if (!html.querySelector(selector)) return;
        document.querySelector(selector).innerHTML = html.querySelector(selector).innerHTML;
      });
      document.getElementById('CollectionFiltersFormMobile').closest('menu-drawer').bindEvents();
    }
  }, {
    key: "renderCounts",
    value: function renderCounts(source, target) {
      var countElementSelectors = ['.count-bubble', '.facets__selected'];
      countElementSelectors.forEach(function (selector) {
        var targetElement = target.querySelector(selector);
        var sourceElement = source.querySelector(selector);

        if (sourceElement && targetElement) {
          target.querySelector(selector).outerHTML = source.querySelector(selector).outerHTML;
        }
      });
    }
  }, {
    key: "updateURLHash",
    value: function updateURLHash(searchParams) {
      history.pushState({
        searchParams: searchParams
      }, '', "".concat(window.location.pathname).concat(searchParams && '?'.concat(searchParams)));
    }
  }, {
    key: "getSections",
    value: function getSections() {
      return [{
        id: 'main-collection',
        section: document.querySelector('[data-section-type="main-collection"]').dataset.sectionId
      }];
    }
  }]);

  return CollectionFiltersForm;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7___default()(HTMLElement));

customElements.define('collection-filters-form', CollectionFiltersForm);

var PriceRange = /*#__PURE__*/function (_HTMLElement2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PriceRange, _HTMLElement2);

  var _super2 = _createSuper(PriceRange);

  function PriceRange() {
    var _this4;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PriceRange);

    _this4 = _super2.call(this);

    _this4.querySelectorAll('input').forEach(function (element) {
      return element.addEventListener('change', _this4.onRangeChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this4)));
    });

    _this4.querySelectorAll('input[type="range"]').forEach(function (element) {
      return element.addEventListener('input', _this4.onSliderChange);
    });

    _this4.setMinAndMaxValues();

    _this4.initSlider();

    return _this4;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PriceRange, [{
    key: "initSlider",
    value: function initSlider() {
      var slider = PriceRange.getSliderElements(this);

      if (!slider.inputLeft) {
        return;
      } // Percentages


      var perecentage = Number(slider.inputLeft.value) * 100 / Number(slider.inputLeft.getAttribute('max'));
      var inversePercentage = 100 - perecentage;
      var perecentageTwo = Number(slider.inputRight.value) * 100 / Number(slider.inputRight.getAttribute('max'));
      var inversePercentageTwo = 100 - perecentageTwo;
      slider.inverseLeft.style.width = inversePercentage + '%';
      slider.inverseRight.style.width = inversePercentage + '%';
      slider.range.style.left = perecentage + '%';
      slider.range.style.right = inversePercentageTwo + '%';
      slider.thumbLeft.style.left = perecentage + '%';
      slider.thumbRight.style.left = perecentageTwo + '%';
    }
  }, {
    key: "onRangeChange",
    value: function onRangeChange(event) {
      if (event.currentTarget.classList.contains('handle')) {
        this.syncValuesFromSlider();
        return;
      }

      this.adjustToValidValues(event.currentTarget);
      this.setMinAndMaxValues();
    }
  }, {
    key: "onSliderChange",
    value: function onSliderChange(event) {
      var input = event.currentTarget;
      var container = input.closest('.facets__price');
      var slider = PriceRange.getSliderElements(container);

      if (input.dataset.handle === 'left') {
        input.value = Math.min(input.value, slider.inputRight.value - 1);
        var value = 100 / (parseInt(input.max) - parseInt(input.min)) * parseInt(input.value) - 100 / (parseInt(input.max) - parseInt(input.min)) * parseInt(input.min);
        slider.inverseLeft.style.width = value + '%';
        slider.range.style.left = value + '%';
        slider.thumbLeft.style.left = value + '%';
      }

      if (input.dataset.handle === 'right') {
        input.value = Math.max(input.value, slider.inputLeft.value - -1);

        var _value = 100 / (parseInt(input.max) - parseInt(input.min)) * parseInt(input.value) - 100 / (parseInt(input.max) - parseInt(input.min)) * parseInt(input.min);

        slider.inverseRight.style.width = 100 - _value + '%';
        slider.range.style.right = 100 - _value + '%';
        slider.thumbRight.style.left = _value + '%';
      }
    }
  }, {
    key: "setMinAndMaxValues",
    value: function setMinAndMaxValues() {
      var inputs = this.querySelectorAll('input:not([type="range"])');
      var minInput = inputs[0];
      var maxInput = inputs[1];
      if (maxInput.value) minInput.setAttribute('max', maxInput.value);
      if (minInput.value) maxInput.setAttribute('min', minInput.value);
      if (minInput.value === '') maxInput.setAttribute('min', 0);
      if (maxInput.value === '') minInput.setAttribute('max', maxInput.getAttribute('max'));
    }
  }, {
    key: "adjustToValidValues",
    value: function adjustToValidValues(input) {
      var value = Number(input.value);
      var min = Number(input.getAttribute('min'));
      var max = Number(input.getAttribute('max'));
      if (value < min) input.value = min;
      if (value > max) input.value = max;
    }
  }, {
    key: "syncValuesFromSlider",
    value: function syncValuesFromSlider() {
      var sliderInputs = this.querySelectorAll('input[type="range"]');
      var sliderMinInput = sliderInputs[0];
      var sliderMaxInput = sliderInputs[1];
      var inputs = this.querySelectorAll('input:not([type="range"])');
      var minInput = inputs[0];
      var maxInput = inputs[1];

      if (minInput.value !== sliderMinInput.value) {
        minInput.value = Number(sliderMinInput.value);
        minInput.dispatchEvent(new Event('input', {
          bubbles: true,
          cancelable: true
        }));
      }

      if (maxInput.value !== sliderMaxInput.value) {
        maxInput.value = Number(sliderMaxInput.value);
        maxInput.dispatchEvent(new Event('input', {
          bubbles: true,
          cancelable: true
        }));
      }
    }
  }], [{
    key: "getSliderElements",
    value: function getSliderElements(container) {
      return {
        'inverseLeft': container === null || container === void 0 ? void 0 : container.querySelector('div[inverse-left]'),
        'inverseRight': container === null || container === void 0 ? void 0 : container.querySelector('div[inverse-right]'),
        'range': container === null || container === void 0 ? void 0 : container.querySelector('div[range]'),
        'thumbLeft': container === null || container === void 0 ? void 0 : container.querySelector('span[thumb-left]'),
        'thumbRight': container === null || container === void 0 ? void 0 : container.querySelector('span[thumb-right]'),
        'inputLeft': container.querySelector('input[data-handle="left"]'),
        'inputRight': container.querySelector('input[data-handle="right"]')
      };
    }
  }]);

  return PriceRange;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7___default()(HTMLElement));

customElements.define('price-range', PriceRange);

var FacetRemove = /*#__PURE__*/function (_HTMLElement3) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(FacetRemove, _HTMLElement3);

  var _super3 = _createSuper(FacetRemove);

  function FacetRemove() {
    var _this5;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FacetRemove);

    _this5 = _super3.call(this);

    _this5.querySelector('a').addEventListener('click', function (event) {
      event.preventDefault();
      var form = _this5.closest('collection-filters-form') || document.querySelector('collection-filters-form');
      form.onActiveFilterClick(event);
    });

    return _this5;
  }

  return FacetRemove;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7___default()(HTMLElement));

customElements.define('facet-remove', FacetRemove);

var MenuDrawer = /*#__PURE__*/function (_HTMLElement4) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MenuDrawer, _HTMLElement4);

  var _super4 = _createSuper(MenuDrawer);

  function MenuDrawer() {
    var _this6;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MenuDrawer);

    _this6 = _super4.call(this);
    _this6.mainDetailsToggle = _this6.querySelector('details');

    var summaryElements = _this6.querySelectorAll('summary');

    _this6.addAccessibilityAttributes(summaryElements);

    if (navigator.platform === 'iPhone') document.documentElement.style.setProperty('--viewport-height', "".concat(window.innerHeight, "px"));

    _this6.addEventListener('keyup', _this6.onKeyUp.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this6)));

    _this6.addEventListener('focusout', _this6.onFocusOut.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this6)));

    _this6.bindEvents();

    return _this6;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MenuDrawer, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this7 = this;

      this.querySelectorAll('summary').forEach(function (summary) {
        return summary.addEventListener('click', _this7.onSummaryClick.bind(_this7));
      });
      this.querySelectorAll('button').forEach(function (button) {
        return button.addEventListener('click', _this7.onCloseButtonClick.bind(_this7));
      });
    }
  }, {
    key: "addAccessibilityAttributes",
    value: function addAccessibilityAttributes(summaryElements) {
      summaryElements.forEach(function (element) {
        element.setAttribute('role', 'button');
        element.setAttribute('aria-expanded', false);
        element.setAttribute('aria-controls', element.nextElementSibling.id);
      });
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      if (event.code.toUpperCase() !== 'ESCAPE') return;
      var openDetailsElement = event.target.closest('details[open]');
      if (!openDetailsElement) return;
      openDetailsElement === this.mainDetailsToggle ? this.closeMenuDrawer(this.mainDetailsToggle.querySelector('summary')) : this.closeSubmenu(openDetailsElement);
    }
  }, {
    key: "onSummaryClick",
    value: function onSummaryClick(event) {
      var summaryElement = event.currentTarget;
      var detailsElement = summaryElement.parentNode;
      var isOpen = detailsElement.hasAttribute('open');

      if (detailsElement === this.mainDetailsToggle) {
        if (isOpen) event.preventDefault();
        isOpen ? this.closeMenuDrawer(summaryElement) : this.openMenuDrawer(summaryElement);
      } else {
        trapFocus(summaryElement.nextElementSibling, detailsElement.querySelector('button'));
        setTimeout(function () {
          detailsElement.classList.add('menu-opening');
        });
      }
    }
  }, {
    key: "openMenuDrawer",
    value: function openMenuDrawer(summaryElement) {
      var _this8 = this;

      setTimeout(function () {
        _this8.mainDetailsToggle.classList.add('menu-opening');
      });
      summaryElement.setAttribute('aria-expanded', true);
      trapFocus(this.mainDetailsToggle, summaryElement);
      document.body.classList.add("overflow-hidden-".concat(this.dataset.breakpoint));
    }
  }, {
    key: "closeMenuDrawer",
    value: function closeMenuDrawer(event) {
      var elementToFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (event !== undefined) {
        this.mainDetailsToggle.classList.remove('menu-opening');
        this.mainDetailsToggle.querySelectorAll('details').forEach(function (details) {
          details.removeAttribute('open');
          details.classList.remove('menu-opening');
        });
        this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
        document.body.classList.remove("overflow-hidden-".concat(this.dataset.breakpoint));
        removeTrapFocus(elementToFocus);
        this.closeAnimation(this.mainDetailsToggle);
      }
    }
  }, {
    key: "onFocusOut",
    value: function onFocusOut(event) {
      var _this9 = this;

      setTimeout(function () {
        if (_this9.mainDetailsToggle.hasAttribute('open') && !_this9.mainDetailsToggle.contains(document.activeElement)) _this9.closeMenuDrawer();
      });
    }
  }, {
    key: "onCloseButtonClick",
    value: function onCloseButtonClick(event) {
      var detailsElement = event.currentTarget.closest('details');
      this.closeSubmenu(detailsElement);
    }
  }, {
    key: "closeSubmenu",
    value: function closeSubmenu(detailsElement) {
      detailsElement.classList.remove('menu-opening');
      removeTrapFocus();
      this.closeAnimation(detailsElement);
    }
  }, {
    key: "closeAnimation",
    value: function closeAnimation(detailsElement) {
      var animationStart;

      var handleAnimation = function handleAnimation(time) {
        if (animationStart === undefined) {
          animationStart = time;
        }

        var elapsedTime = time - animationStart;

        if (elapsedTime < 400) {
          window.requestAnimationFrame(handleAnimation);
        } else {
          detailsElement.removeAttribute('open');

          if (detailsElement.closest('details[open]')) {
            trapFocus(detailsElement.closest('details[open]'), detailsElement.querySelector('summary'));
          }
        }
      };

      window.requestAnimationFrame(handleAnimation);
    }
  }]);

  return MenuDrawer;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7___default()(HTMLElement));

customElements.define('menu-drawer', MenuDrawer);

function debounce(fn, wait) {
  var _this10 = this;

  var t;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(t);
    t = setTimeout(function () {
      return fn.apply(_this10, args);
    }, wait);
  };
}

var trapFocusHandlers = {};

function getFocusableElements(container) {
  return Array.from(container.querySelectorAll("summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"));
}

function removeTrapFocus() {
  var elementToFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  document.removeEventListener('focusin', trapFocusHandlers.focusin);
  document.removeEventListener('focusout', trapFocusHandlers.focusout);
  document.removeEventListener('keydown', trapFocusHandlers.keydown);
  if (elementToFocus) elementToFocus.focus();
}

function trapFocus(container) {
  var elementToFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : container;
  var elements = getFocusableElements(container);
  var first = elements[0];
  var last = elements[elements.length - 1];
  removeTrapFocus();

  trapFocusHandlers.focusin = function (event) {
    if (event.target !== container && event.target !== last && event.target !== first) return;
    document.addEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.focusout = function () {
    document.removeEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.keydown = function (event) {
    if (event.code.toUpperCase() !== 'TAB') return; // If not TAB key
    // On the last focusable element and tab forward, focus the first element.

    if (event.target === last && !event.shiftKey) {
      event.preventDefault();
      first.focus();
    } //  On the first focusable element and tab backward, focus the last element.


    if ((event.target === container || event.target === first) && event.shiftKey) {
      event.preventDefault();
      last.focus();
    }
  };

  document.addEventListener('focusout', trapFocusHandlers.focusout);
  document.addEventListener('focusin', trapFocusHandlers.focusin);
  elementToFocus.focus();
}

function hideOnClickOutside(element) {
  var isVisible = function isVisible(elem) {
    return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  var outsideClickListener = function outsideClickListener(event) {
    if (!element.contains(event.target) && isVisible(element)) {
      var _element$closest;

      (_element$closest = element.closest('details')) === null || _element$closest === void 0 ? void 0 : _element$closest.removeAttribute('open');
    }
  };

  document.addEventListener('click', outsideClickListener);
}


    // If we reached this module (the entry point), it means no one accepted the HRM.
    // Let's reload the page then.
    if (false) {}
  

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(24);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(24);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(21);

var isNativeReflectConstruct = __webpack_require__(52);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ })
/******/ ]);