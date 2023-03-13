/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ({

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

Avatar.theme = Avatar.theme || {};

Avatar.theme.Login = function Login() {
  var selectors = {
    login: '[data-login]',
    loginHeading: '[data-login-heading]',
    loginForm: '[data-login-form]',
    recoverHeading: '[data-recover-password-heading]',
    recoverEmailInput: '[data-recover-password-email-input]',
    recoverPasswordForm: '[data-recover-password-form]',
    recoverPasswordLink: '[data-recover-password-link]',
    recoverPasswordCancel: '[data-recover-password-cancel]'
  };
  var classes = {
    hide: 'tw-hidden'
  };

  function initEventListeners() {
    this.login = document.querySelector(selectors.login);
    if (!this.login) return;
    this.loginHeading = document.querySelector(selectors.loginHeading);
    this.loginHeading = document.querySelector(selectors.loginHeading);
    this.loginForm = document.querySelector(selectors.loginForm);
    this.recoverHeading = document.querySelector(selectors.recoverHeading);
    this.recoverPasswordForm = document.querySelector(selectors.recoverPasswordForm);
    this.recoverEmail = document.querySelector(selectors.recoverEmailInput);
    this.recoverPasswordLink = document.querySelector(selectors.recoverPasswordLink);
    this.recoverPasswordCancel = document.querySelector(selectors.recoverPasswordCancel); // Show reset password form

    if (this.recoverPasswordLink) {
      this.recoverPasswordLink.addEventListener('click', showRecoverPasswordForm.bind(this));
    } // Hide reset password form


    if (this.recoverPasswordCancel) {
      this.recoverPasswordCancel.addEventListener('click', hideRecoverPasswordForm.bind(this));
    }

    if (this.recoverHeading) {
      this.recoverHeading.addEventListener('blur', function (evt) {
        evt.target.removeAttribute('tabindex');
      });
    }

    if (this.loginHeading) {
      this.loginHeading.addEventListener('blur', function (evt) {
        evt.target.removeAttribute('tabindex');
      });
    }
  }

  function showRecoverPasswordForm() {
    this.recoverPasswordForm.classList.remove(classes.hide);
    this.loginForm.classList.add(classes.hide);
    this.recoverHeading.setAttribute('tabindex', '-1');
    this.recoverHeading.focus();

    if (this.recoverEmail.getAttribute('aria-invalid') === 'true') {
      this.recoverEmail.focus();
    }
  }

  function hideRecoverPasswordForm() {
    this.recoverPasswordForm.classList.add(classes.hide);
    this.loginForm.classList.remove(classes.hide);
    this.loginHeading.setAttribute('tabindex', '-1');
    this.loginHeading.focus();
  }

  function resetPasswordSuccess() {
    var formState = document.querySelector('[data-reset-success]');

    if (!formState) {
      return;
    }

    var resetSuccess = document.querySelector('[data-reset-success-message]');
    resetSuccess.classList.remove(classes.hide);
    resetSuccess.focus();
  }

  function resetPasswordError() {
    var formState = document.querySelector('[data-reset-error]');

    if (!formState) {
      return;
    }

    var resetError = document.querySelector('[data-reset-error-message]');
    var formError = formState.textContent;
    resetError.textContent = formError;
    resetError.classList.remove(classes.hide);
    resetError.focus();
  }

  function checkUrlHash() {
    var hash = window.location.hash; // Allow deep linking to recover password form

    if (hash === '#recover') {
      showRecoverPasswordForm.bind(this)();
    }
  }

  initEventListeners();
  resetPasswordSuccess();
  resetPasswordError();
  checkUrlHash();
  return {
    initEventListeners: initEventListeners,
    showRecoverPasswordForm: showRecoverPasswordForm,
    hideRecoverPasswordForm: hideRecoverPasswordForm,
    resetPasswordSuccess: resetPasswordSuccess
  };
}();


    // If we reached this module (the entry point), it means no one accepted the HRM.
    // Let's reload the page then.
    if (false) {}
  

/***/ })

/******/ });