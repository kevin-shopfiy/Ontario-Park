!function(u){function t(t){for(var e,r,n=t[0],i=t[1],o=t[2],a=0,c=[];a<n.length;a++)r=n[a],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&c.push(s[r][0]),s[r]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(u[e]=i[e]);for(p&&p(t);c.length;)c.shift()();return l.push.apply(l,o||[]),d()}function d(){for(var t,e=0;e<l.length;e++){for(var r=l[e],n=!0,i=1;i<r.length;i++){var o=r[i];0!==s[o]&&(n=!1)}n&&(l.splice(e--,1),t=a(a.s=r[0]))}return t}var r={},s={6:0},l=[];function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return u[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=u,a.c=r,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var e=window.avatarWebpackJsonp=window.avatarWebpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var p=n;l.push([57,0]),d()}({14:function(t,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return o});var n={addToCartForms:"[data-ajax-submit]"};function i(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document;Shopify.designMode&&Avatar.theme.sections.SliderCart&&(t=Avatar.theme.sections.SliderCart.addToCartEvent,e.querySelector(n.addToCartForms).addEventListener("submit",t))}function o(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document;Shopify.designMode&&Avatar.theme.sections.SliderCart&&(t=Avatar.theme.sections.SliderCart.addToCartEvent,e.querySelector(n.addToCartForms).removeEventListener("submit",t))}},57:function(t,e,r){"use strict";r.r(e);var n=r(11),k=r.n(n),i=r(1),T=r.n(i),o=r(5),O=r.n(o),x=(r(8),r(65)),e=r(59),n=r(60),i=r(63),o=r(64),N=r(7),B=r(6),_=r(14),r=r(3);Avatar.theme=Avatar.theme||{},Avatar.theme.ProductRecommendations={init:function(e){var r=new Event("product-recommendations"),t=(o=e.dataset).baseUrl,n=o.productId,i=o.limit,o=o.sectionType,i="\n      ".concat(t,"?section_id=").concat(o,"&product_id=").concat(n,"&limit=").concat(i,"\n    ");fetch(i).then(function(t){return t.text()}).then(function(t){""!==t.trim()&&(e.innerHTML=t,e.innerHTML=e.firstElementChild.innerHTML,document.dispatchEvent(r))})}},Object(r.d)("product-recommendations",{onLoad:function(){Avatar.theme.ProductRecommendations.init(this.container)}}),Object(r.c)("product-recommendations"),x.a.use([e.a,n.a,i.a,o.a]),Avatar.theme=Avatar.theme||{},Avatar.theme.Product=new function(){var t,r=this,d=B.f("main-product"),s={productContainer:"[data-product-container]",productMedia:".product-media",productMediaItem:"[data-media-id]",productImageZoomWrapper:"[data-image-zoom-wrapper]",productMediaNav:".product-media-nav",productMediaNavItem:".product-media-nav-item",productForm:".product-form",storeAvailabilityContainer:"[data-store-availability-container]",productTabs:"[data-tabs]",productVariant:".product-variant",productSku:"[data-sku]",productQuantityStep:".product-quantity-step",productQuantityInput:".product-quantity-input",productPrices:".product-prices",productPrice:".product-price",productComparePrice:".product-compare-price",productUnitPrice:"[data-unit-price]",productUnitPriceBase:"[data-unit-price-base-unit]",productButton:".product-button",productButtonText:".product-button__text",productOption:".product-option",productOptionByIdex:function(t){return"[data-product-option-".concat(t,"]")},productOptionLabel:".form-check-label",productOptions:"[data-product-options]",checkedInput:"input:checked",productHandle:"[data-product-handle]",jsPlayer:".js-player",ytPlayer:".yt-player",vmPlayer:".vm-player",modelViewer:".model-viewer",swatchInputById:function(t){return"[id='".concat(t,"']")},swatchByOptionIndex:function(t){return'.form-check-swatch[data-option-index="'.concat(t,'"]')},swatchInputByOptionIndex:function(t){return'\n      .form-check-swatch[data-option-index="'.concat(t,'"]\n      .form-check-input\n    ')},stickyCart:".sticky-cart",stickyAddCart:"[data-sticky-add-to-cart]",stickySelectOptions:"[data-select-options]",intersect:"[data-intersect]",sliderNext:".swiper-button-next",sliderPrev:".swiper-button-prev",sliderNavThumbActive:function(t){return".".concat(t)},sectionById:function(t){return"#shopify-section-".concat(t)},productJsonById:function(t){return"#ProductJson-".concat(t)}},l={soldout:"soldout",hideOption:"hide-option",showOption:"show-option",active:"active",hidden:"tw-hidden",invisible:"tw-invisible",defaultCursor:"tw-cursor-default",sliderDisabledClass:"swiper-button-disabled invisible",sliderNavThumbActive:"swiper-slide-thumb-active",opacityNone:"tw-opacity-0",heightNone:"tw-h-0",iframeWrapper:"tw-video-wrapper"},e=13,n=32,i=[],p={};function o(){(function(){var t=document.querySelector(s.sectionById(d));this.productMedia=t.querySelector(s.productMedia),this.productMediaItems=t.querySelectorAll(s.productMediaItem),this.productImageZoomWrapper=t.querySelectorAll(s.productImageZoomWrapper),this.productMediaNav=t.querySelector(s.productMediaNav),this.productMediaNavButtons=t.querySelectorAll(s.productMediaNavItem),this.productForm=t.querySelector(s.productForm),this.storeAvailabilityContainer=t.querySelector(s.storeAvailabilityContainer),this.productTabs=t.querySelector(s.productTabs),this.productVariant=t.querySelector(s.productVariant),this.productSku=t.querySelector(s.productSku),this.productQuantityStep=t.querySelectorAll(s.productQuantityStep),this.productQuantityInput=t.querySelector(s.productQuantityInput),this.productPrices=t.querySelector(s.productPrices),this.productPrice=t.querySelector(s.productPrice),this.productComparePrice=t.querySelector(s.productComparePrice),this.productUnitPrice=t.querySelector(s.productUnitPrice),this.productUnitPriceBase=t.querySelector(s.productUnitPriceBase),this.productButton=t.querySelector(s.productButton),this.productButtonText=t.querySelector(s.productButtonText),this.productOption=t.querySelectorAll(s.productOption),this.productOptions=t.querySelector(s.productOptions),this.productHandle=t.querySelector(s.productHandle),this.intersect=document.querySelector(s.intersect),this.ytPlayers=t.querySelectorAll(s.ytPlayer),this.vmPlayers=t.querySelectorAll(s.vmPlayer),this.jsPlayers=t.querySelectorAll(s.jsPlayer),this.ytAPI=[],this.vmAPI=[],this.modelViewers=t.querySelectorAll(s.modelViewer),this.mqSmall=window.matchMedia(Avatar.theme.settings.mediaQuery.small),this.mqSmall.onchange=v.bind(this)}).bind(r)(),c.bind(r)(),v.bind(r)(),function(){if(!this.storeAvailabilityContainer)return;this.storeAvailability=new Avatar.theme.StoreAvailability(this.storeAvailabilityContainer)}.bind(r)(),m.bind(r)(),function(){if(!this.productTabs)return;this.productTabs=new Avatar.theme.Tabs(this.productTabs)}.bind(r)(),function(){var t=Avatar.theme.rte.iframeSelectors;Avatar.theme.rte.wrapIframe({iframes:document.querySelectorAll(t),iframeWrapperClass:l.iframeWrapper})}.bind(r)(),f.bind(r)(),function(){var t=document.querySelector(s.stickyCart),e=document.querySelector(s.stickyAddCart),r=document.querySelector(s.stickySelectOptions);e&&e.addEventListener("click",w);r&&r.addEventListener("click",g);t&&function(){var e=document.querySelector(s.stickyCart),r=document.querySelector("#shopify-section-header"),t=JSON.parse(e.dataset.stickyCartSettings),n=t.position,i=t.mobile,o=t.desktop,a=this.mqSmall;t=this.intersect;new IntersectionObserver(function(t){t.forEach(function(t){t.isIntersecting?(e.classList.remove(l.active),A()&&"top"===n&&I(r)):(e.classList.add(l.active),!i&&a.matches||(o||a.matches)&&A()&&"top"===n&&q(r))})}).observe(t)}.bind(this)()}.bind(r)(),function(){if(!this.productForm)return;this.productForm.addEventListener("keydown",C)}.bind(r)(),p=a()}function a(){return!!(t=document.querySelector(s.productContainer))&&(p=JSON.parse(t.getAttribute("data-product-settings")))}function c(){var t,e,a,r=this;this.productMedia&&(this.productMediaItems.length<=1&&this.productMediaItems[0].classList.remove(l.invisible),0<this.jsPlayers.length&&(Shopify.loadFeatures([{name:"video-ui",version:"1.0",onLoad:function(t){if(t)return;this.jsPlayers=Shopify.Plyr.setup(s.jsPlayer)}.bind(this)}]),Avatar.theme.LibraryLoader.load("plyrShopifyStyles")),0<this.ytPlayers.length&&((t=document.createElement("script")).src="https://www.youtube.com/iframe_api",(e=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,e),window.onYouTubeIframeAPIReady=function(){r.ytPlayers.forEach(function(t){r.ytAPI.push(new YT.Player(t))})}),0<this.vmPlayers.length&&((t=document.createElement("script")).src="https://player.vimeo.com/api/player.js",(e=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,e),B.a().then(function(){r.vmPlayers.forEach(function(t){r.vmAPI.push(new Vimeo.Player(t))})}).catch(function(t){return console.log(t)})),0<this.modelViewers.length&&Avatar.theme.ProductModel.init(d),this.productMediaNav&&((a=this).productMediaNavSwiper=new x.a(this.productMediaNav,{observer:!0,observeParents:!0,slidesPerView:6,spaceBetween:1,watchOverflow:!0,touchRatio:1,breakpoints:{768:{slidesPerGroup:2,touchRatio:0,navigation:{nextEl:s.sliderNext,prevEl:s.sliderPrev,disabledClass:l.sliderDisabledClass}}},on:{afterInit:function(){window.onload=function(){a.productMediaNav.classList.add("loaded"),a.productMedia.classList.add("loaded")}}}}),this.productMediaSwiper=new x.a(this.productMedia,{effect:"fade",fadeEffect:{crossFade:!0},observer:!0,observeParents:!0,navigation:{nextEl:s.sliderNext,prevEl:s.sliderPrev,disabledClass:l.sliderDisabledClass},preloadImages:!1,autoHeight:!0,simulateTouch:!1,preventClicks:!1,preventClicksPropagation:!1,followFinger:!1,thumbs:{swiper:a.productMediaNavSwiper,autoScrollOffset:2,slideThumbActiveClass:l.sliderNavThumbActive},on:{afterInit:function(){a.productMediaNav.classList.remove(l.heightNone),setTimeout(function(){a.productMediaItems[0].hasAttribute("data-product-media-type-model")&&(a.productMediaSwiper.allowTouchMove=!1)},0)},slideChange:function(){var t,e,r;0<a.productMediaSwiper.slides.length&&(t={bubbles:!0,cancelable:!0,detail:{swiper:a.productMediaSwiper}},e=(n=a.productMediaSwiper).slides,r=n.previousIndex,n=n.realIndex,r=e[r],n=e[n],r.dispatchEvent(new CustomEvent("mediaHidden",t)),n.dispatchEvent(new CustomEvent("mediaVisible",t)),n.classList.remove(l.invisible));var n=a.productMediaSwiper,i=n.slides,o=n.realIndex;0<a.ytAPI.length&&(a.ytAPI.forEach(function(t){return t.pauseVideo()}),a.ytAPI.forEach(function(t){t.h===i[o].firstElementChild&&t.playVideo()})),0<a.vmAPI.length&&(a.vmAPI.forEach(function(t){return t.pause()}),a.vmAPI.forEach(function(t){t.element===i[o].firstElementChild&&t.play()})),a.jsPlayers&&(a.jsPlayers.forEach(function(t){return t.pause()}),a.jsPlayers.forEach(function(t){t.elements.container===i[o].firstElementChild&&t.play()})),function(){var e=this;this.productMediaNav.querySelectorAll(s.productMediaNavItem).forEach(function(t){return t.removeAttribute("aria-current")}),setTimeout(function(){var t=e.productMediaNav.querySelector(s.sliderNavThumbActive(l.sliderNavThumbActive));t&&t.setAttribute("aria-current",!0)},300)}.bind(a)()}}}),this.productMediaNav.addEventListener("keydown",u.bind(this)),this.productMediaNavButtons.forEach(function(t){t.addEventListener("click",h.bind(r))})))}function u(t){[n,e].includes(t.keyCode)&&(t=Array.from(this.productMediaNav.querySelectorAll(s.productMediaNavItem)).indexOf(t.target),this.productMedia.swiper.slideTo(t))}function h(t){var e=t.currentTarget.dataset.slideIndex,t=this.productMediaSwiper.slides[e];this.productMediaSwiper.slideTo(e),t.classList.remove(l.invisible),B.e(t,{preventScroll:!0})}function v(){a().enableImageZoom&&(this.mqSmall.matches?this.productImageZoomWrapper.forEach(function(t,e){return function(t){if(0===i.length)return;i[t].unload()}(e)}):this.productImageZoomWrapper.forEach(function(t,e){return t=t,void(i[e]=new Avatar.theme.Zoom(t))}))}function m(){var r,n,t,e=document.querySelector(s.productJsonById(d));e&&e.innerHTML.length&&((r=JSON.parse(e.innerHTML)).available||p.showUnavailable||this.productOption.forEach(function(t){return t.classList.add(l.hidden)}),n=this,r&&1<=r.options.length&&("swatches"===p.variantSelectors&&E(r),p.fadeInSelectors&&this.productOptions.classList.remove(l.opacityNone)),r.options=r.options.map(function(t){return{name:t}}),t=new Avatar.theme.ProductForm(this.productForm,r,{onOptionChange:function(t){var e=t.dataset,t=e.variant;e.options;N.c(n.productMediaSwiper,t,n.productMediaItems),N.d(n.productPrices,n.productPrice,t),N.b(n.productComparePrice,t),N.f(n.productUnitPrice,n.productUnitPriceBase,t),N.e(n.productSku,t),N.a(n.productButtonText,t),N.i(n.productVariant,t),N.g(t),N.h(n.storeAvailability,t),"swatches"===p.variantSelectors&&L(r)}}),this.productForm.dispatchEvent(new CustomEvent("product:form:loaded",{detail:{variant:t.variant(),target:t},bubbles:!0})),e=t.variant(),t.options(),N.c(this.productMediaSwiper,e,this.productMediaItems),N.a(n.productButtonText,e),this.storeAvailability&&e.available&&this.storeAvailability.updateContent(e.id),p.ajaxSubmit&&_.a())}function f(){var e=this;0!==this.productQuantityStep.length&&(this.productQuantityStep.forEach(function(t){return t.addEventListener("click",y.bind(e))}),this.productQuantityInput.addEventListener("change",b.bind(this)))}function y(t){t=t.currentTarget;t.hasAttribute("data-step-up")?this.productQuantityInput.stepUp():t.hasAttribute("data-step-down")&&this.productQuantityInput.stepDown(),parseInt(this.productQuantityInput.value,10)<=1?this.productQuantityInput.previousElementSibling.setAttribute("disabled",!0):this.productQuantityInput.previousElementSibling.removeAttribute("disabled")}function b(t){t=t.currentTarget;"1"===t.value?t.previousElementSibling.setAttribute("disabled",!0):t.previousElementSibling.removeAttribute("disabled")}var S=function(){var t=O()(T.a.mark(function t(){var e;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.productHandle.getAttribute("data-product-handle"),t.next=3,fetch("/products/".concat(e,".js")).then(function(t){return t.json()});case 3:t.sent;case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();function w(){var t=document.querySelector(s.productForm),e=t.querySelector('[type="submit"]');p.ajaxSubmit?e.click():t.submit()}function g(){var t=document.querySelector(s.stickyCart),e=document.querySelector(s.productForm),e=window.pageYOffset+e.getBoundingClientRect().top,t=t.scrollHeight;Avatar.theme.Utilities.smoothScrollTo(0,e-t,700)}var A=function(){var t=document.querySelector('[data-section-type="header"]');return JSON.parse(t.dataset.sectionSettings).sticky},I=function(t){t.classList.remove("tw-transition-opacity","tw-duration-150","tw-opacity-0","tw-pointer-events-none")},q=function(t){t.classList.add("tw-transition-opacity","tw-duration-150","tw-opacity-0","tw-pointer-events-none")},P={};function M(t,e){var r,n=document.querySelector(s.sectionById(d));function i(t){var e=1===t?(e=n.querySelectorAll(s.productOption)[0]).querySelector(s.checkedInput).value:(e=n.querySelectorAll(s.productOption)[0].querySelector(s.checkedInput).value,e+=" / ",e+=n.querySelectorAll(s.productOption)[1].querySelector(s.checkedInput).value);return e}switch(t){case 0:r="root";break;case 1:case 2:r=i(t);break;default:console.log("error")}var o,a,c=P[r],u=n.querySelectorAll(s.swatchInputByOptionIndex(t)),e=e.options.findIndex(function(t){var e=t;return"object"===k()(t)&&(e=t.name),"color"===e.toLowerCase()});-1!==e&&(o=(e=n.querySelector(s.productOptionByIdex(e))).querySelector(s.checkedInput).value,(e=e.querySelector(".color-option-label"))&&(e.innerHTML=o)),p.hideSingleOption&&!p.showUnavailable&&(o=u[0].closest(s.productOption),c.length<=1?o.classList.add(l.hidden):o.classList.remove(l.hidden)),u.forEach(function(t){var e=t.value,t=t.parentElement;c&&c.includes(e)?(t.classList.remove(l.hidden,l.soldout),t.querySelector("input").removeAttribute("disabled"),t.querySelector("label").classList.remove(l.defaultCursor),t.classList.add(l.showOption),t.classList.remove(l.hideOption)):(p.showUnavailable||t.classList.add(l.hidden),p.disableUnavailable&&(t.querySelector("label").classList.add(l.defaultCursor),t.querySelector("input").setAttribute("disabled",!0)),t.classList.remove(l.showOption),t.classList.add(l.hideOption),t.classList.add(l.soldout))}),p.disableUnavailable&&(a=null,(u=document.querySelectorAll(s.swatchByOptionIndex(t))).forEach(function(t){t.querySelector("input").checked&&(a=t.querySelector(s.checkedInput).parentElement)}),a&&(!a.classList.contains(l.hideOption)||(u=u[0].parentElement.querySelector(".form-check-swatch.".concat(l.showOption)))&&u.querySelector("input").click()))}function E(t){for(var e=0;e<t.variants.length;e++){var r,n=t.variants[e];n.available&&(P.root=P.root||[],P.root.push(n.option1),P.root=Avatar.theme.Utilities.uniq(P.root),1<t.options.length&&(r=n.option1,P[r]=P[r]||[],P[r].push(n.option2),P[r]=Avatar.theme.Utilities.uniq(P[r])),3===t.options.length&&(r="".concat(n.option1," / ").concat(n.option2),P[r]=P[r]||[],P[r].push(n.option3),P[r]=Avatar.theme.Utilities.uniq(P[r])))}L(t)}function L(t){M(0,t),1<t.options.length&&M(1,t),3===t.options.length&&M(2,t)}function C(r){[n,e].includes(r.keyCode)&&document.querySelector(s.sectionById(d)).querySelectorAll(s.productOptionLabel).forEach(function(t){var e;t===document.activeElement&&(r.preventDefault(),e=s.swatchInputById(t.getAttribute("for")),document.querySelector(e).checked=!0,t=new Event("change"),document.querySelector(e).dispatchEvent(t))})}return"product"===Avatar.theme.current.pageType&&o(),{init:o,destroy:function(){r.productForm&&r.productForm.removeEventListener("keydown",C),r.productQuantityStep.forEach(function(t){t.removeEventListener("click",y)}),r.productQuantityInput&&r.productQuantityInput.removeEventListener("change",b),r.productMediaNav&&(r.productMediaNav.removeEventListener("keydown",u),r.productMediaNavButtons.forEach(function(t){t.removeEventListener("click",h.bind)})),r.productMediaNav&&r.productMediaNav.initialized&&r.productMediaNavSwiper.destroy(),r.productMedia&&r.productMedia.initialized&&r.productMediaSwiper.destroy(),r.productTabs.destroy(),p.ajaxSubmit&&_.b(),Avatar.theme.ProductModel.removeSectionModels(d)},initProductMedia:c,initProductForm:m,initProductQuantity:f,initLinkedOptions:E,getProductJson:S}}},6:function(t,e,r){"use strict";r.d(e,"c",function(){return n}),r.d(e,"j",function(){return i}),r.d(e,"g",function(){return o}),r.d(e,"d",function(){return a}),r.d(e,"k",function(){return c}),r.d(e,"i",function(){return d}),r.d(e,"h",function(){return s}),r.d(e,"b",function(){return l}),r.d(e,"e",function(){return p}),r.d(e,"a",function(){return h}),r.d(e,"f",function(){return v});var n=function(n,i){var o;return function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];clearTimeout(o),o=setTimeout(function(){n.apply(void 0,e)},i)}};function i(n){var i=this,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:100,a=null;return function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];null===a&&(a=setTimeout(function(){n.apply(i,e),a=null},o))}}var o=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},a=function(){document.querySelectorAll("[data-form-status]").forEach(function(t){t.setAttribute("tabindex",-1),t.focus(),t.addEventListener("blur",function(t){t.target.removeAttribute("tabindex")},{once:!0})})};function c(t){for(var e=[],r=0;r<t.length;r++)!function(t,e){for(var r=0;r<t.length;r++)if(t[r]===e)return 1}(e,t[r])&&e.push(t[r]);return e}function u(t){t=t.hasAttribute("data-image-loading-placeholder")?t:t.closest("[data-image-loading-placeholder]");t&&t.removeAttribute("data-image-loading-placeholder")}function d(){document.addEventListener("lazyloaded",function(t){u(t.target)})}function s(){document.querySelectorAll(".lazyloaded").forEach(function(t){u(t)})}function l(){var t=navigator.cookieEnabled;return t||(document.cookie="testcookie",t=-1!==document.cookie.indexOf("testcookie")),t}function p(r,n){n=n||{};var i=r.tabIndex;r.tabIndex=-1,r.dataset.tabIndex=i,n.preventScroll?r.focus({preventScroll:!0}):r.focus(),void 0!==n.className&&r.classList.add(n.className),r.addEventListener("blur",function t(e){e.target.removeEventListener(e.type,t);r.tabIndex=i;delete r.dataset.tabIndex;void 0!==n.className&&r.classList.remove(n.className)})}function h(){return new Promise(function(t,e){var r=setInterval(function(){"undefined"!=typeof Vimeo&&(clearInterval(r),clearTimeout(n),window.vimeoLoaded=!0,t())},500),n=setTimeout(function(){clearInterval(r),e()},4e3)})}function v(t){t=document.querySelector('[id$="__'.concat(t,'"]')).id.split("shopify-section-");return 0<t.length?t[1]:""}},7:function(t,e,r){"use strict";r.d(e,"c",function(){return n}),r.d(e,"d",function(){return o}),r.d(e,"b",function(){return a}),r.d(e,"f",function(){return c}),r.d(e,"e",function(){return u}),r.d(e,"a",function(){return d}),r.d(e,"i",function(){return s}),r.d(e,"g",function(){return l}),r.d(e,"h",function(){return p});var i={hidden:"tw-hidden",invisible:"tw-invisible"};function n(t,e,r){var n;t&&0!==t.length&&e&&(n=0,e.featured_media&&(n=e.featured_media.position-1),r[n].classList.remove(i.invisible),t.slideTo(n))}function o(t,e,r){e.innerHTML=r?Avatar.theme.Currency.formatMoney(r.price):Avatar.theme.i18n.unavailable}function a(t,e){var r;t&&(r=t,e?e.compare_at_price>e.price?(r.innerHTML=Avatar.theme.Currency.formatMoney(e.compare_at_price),t.classList.remove(i.hidden)):(r.textContent="",t.classList.add(i.hidden)):r.textContent="")}function c(t,e,r){r&&t&&r.unit_price_measurement&&(e=e,t.innerHTML=Avatar.theme.Currency.formatMoney(r.unit_price),e.textContent=1===r.unit_price_measurement.reference_value?r.unit_price_measurement.reference_unit:r.unit_price_measurement.reference_value+r.unit_price_measurement.reference_unit)}function u(t,e){var r;t&&e&&(t=(r=t).parentElement,e.sku?t.classList.remove(i.hidden):t.classList.add(i.hidden),r.textContent=e.sku)}function d(t,e){var r=t.parentElement,n=r.querySelector(".icon"),t=t;e?e.available?(r.removeAttribute("disabled"),t.textContent=Avatar.theme.i18n.addToCart,n&&n.classList.remove(i.hidden)):(r.setAttribute("disabled",!0),t.textContent=Avatar.theme.i18n.soldOut,n&&n.classList.add(i.hidden)):(r.setAttribute("disabled",!0),t.textContent=Avatar.theme.i18n.unavailable,n&&n.classList.add(i.hidden))}function s(t,e){e&&(t.value=e.id)}function l(t){t&&(t=function(t,e){{if(/variant=/.test(t))return t.replace(/(variant=)[^&]+/,"$1"+e);if(/\?/.test(t))return t.concat("&variant=").concat(e)}return t.concat("?variant=").concat(e)}(window.location.href,t.id),window.history.replaceState({path:t},"",t))}function p(t,e){e&&t&&e.available?t.updateContent(e.id):t.clearContent()}}});