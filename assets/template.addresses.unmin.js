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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// import { AddressForm } from '@shopify/theme-addresses';
Avatar.theme = Avatar.theme || {};

function Addresses() {
  var _this = this;

  var selectors = {
    form: '[data-address-form]',
    newAddressForm: '[data-new-address-form]',
    newAddressButton: '[data-new-address-button]',
    editAddressForms: '[data-edit-address-form]',
    editAddressButtons: '[data-edit-address-button]',
    deleteAddressButtons: '[data-address-delete]',
    cancelNewAddressButton: '[data-cancel-new-address-button]',
    cancelEditAddressButtons: '[data-cancel-edit-address-button]',
    dataFormStatus: '[data-form-status]'
  };
  var classes = {
    hide: 'tw-hidden'
  };
  this.forms = document.querySelectorAll(selectors.form);
  this.newAddressForm = document.querySelector(selectors.newAddressForm);
  this.newAddressButton = document.querySelector(selectors.newAddressButton);
  this.editAddressForms = document.querySelectorAll(selectors.editAddressForms);
  this.editAddressButtons = document.querySelectorAll(selectors.editAddressButtons);
  this.deleteAddressButtons = document.querySelectorAll(selectors.deleteAddressButtons);
  this.cancelNewAddressButton = document.querySelector(selectors.cancelNewAddressButton);
  this.cancelEditAddressButtons = document.querySelectorAll(selectors.cancelEditAddressButtons);

  var initForms = function initForms() {
    if (!_this.newAddressForm) return;

    if (Shopify) {
      // eslint-disable-next-line no-new
      new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
        hideElement: 'AddressProvinceContainerNew'
      });
    }

    document.querySelectorAll('.address-country-option').forEach(function (option) {
      var formId = option.dataset.formId;
      var countrySelector = "AddressCountry_".concat(formId);
      var provinceSelector = "AddressProvince_".concat(formId);
      var containerSelector = "AddressProvinceContainer_".concat(formId); // eslint-disable-next-line no-new

      new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
        hideElement: containerSelector
      });
    });

    if (_this.newAddressForm.querySelector(selectors.dataFormStatus)) {
      toggleNewAddressForm();
    } // const { locale } = Avatar.theme.current;
    // this.forms.forEach(form => {
    //   Shopify.theme.addresses.AddressForm(form);
    // });

  };

  var initListeners = function initListeners() {
    if (_this.newAddressForm) {
      _this.newAddressButton.addEventListener('click', toggleNewAddressForm.bind(_this));

      _this.cancelNewAddressButton.addEventListener('click', toggleNewAddressForm.bind(_this));
    }

    if (_this.editAddressForms) {
      _this.editAddressButtons.forEach(function (button) {
        return button.addEventListener('click', toggleEditForm.bind(_this));
      });

      _this.cancelEditAddressButtons.forEach(function (button) {
        return button.addEventListener('click', toggleEditForm.bind(_this));
      });

      _this.deleteAddressButtons.forEach(function (button) {
        return button.addEventListener('click', handleDeleteButton.bind(_this));
      });
    }
  };

  var toggleNewAddressForm = function toggleNewAddressForm() {
    var isExpanded = _this.newAddressButton.getAttribute('aria-expanded') === 'true';

    _this.newAddressForm.classList.toggle(classes.hide);

    _this.newAddressButton.setAttribute('aria-expanded', !isExpanded);

    _this.newAddressButton.focus();
  };

  var toggleEditForm = function toggleEditForm(evt) {
    var formId = evt.target.dataset.formId;
    var editButton = document.querySelector("[data-edit-address-button=\"".concat(formId, "\"]"));
    var editForm = document.querySelector("[data-edit-address-Form=\"".concat(formId, "\"]"));
    var isExpanded = editButton.getAttribute('aria-expanded') === 'true';
    editForm.classList.toggle(classes.hide);
    editButton.setAttribute('aria-expanded', !isExpanded);
    editButton.focus();
  };

  var handleDeleteButton = function handleDeleteButton(evt) {
    evt.preventDefault();
    var target = evt.currentTarget.dataset.target;
    var confirmMessage = evt.currentTarget.dataset.confirmMessage; // eslint-disable-next-line no-alert

    if ( // eslint-disable-next-line no-alert
    confirm(confirmMessage || 'Are you sure you wish to delete this address?')) {
      Shopify.postLink(target, {
        parameters: {
          _method: 'delete'
        }
      });
    }
  };

  initForms();
  initListeners();
  return {
    initForms: initForms,
    initListeners: initListeners
  };
}

Avatar.theme.Addresses = new Addresses(); // document.addEventListener('DOMContentLoaded', () => {
// });


    // If we reached this module (the entry point), it means no one accepted the HRM.
    // Let's reload the page then.
    if (false) {}
  

/***/ })

/******/ });