/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/customScroll.js":
/*!****************************************!*\
  !*** ./src/js/modules/customScroll.js ***!
  \****************************************/
/***/ (function() {

//
$(function () {
  $(".scroll-area").each(function () {
    new SimpleBar(this);
  });
});

/***/ }),

/***/ "./src/js/modules/developers.js":
/*!**************************************!*\
  !*** ./src/js/modules/developers.js ***!
  \**************************************/
/***/ (function() {

var iconStyles = " font-size:50px;";
var titleStyles = "font-size:12px; font-weight: bold;";
var textStyles = "font-size:12px;";
var pubdate = new Date("2023-09-21");
var log = console.log;

function print() {
  log("%c😼", iconStyles);
  log("%cDeveloped by:", titleStyles);
  log("%cFront-end: ildar.meyker@gmail.com, +79297287297", textStyles);
}

if (pubdate < new Date()) {
  print();
}

/***/ }),

/***/ "./src/js/modules/masks.js":
/*!*********************************!*\
  !*** ./src/js/modules/masks.js ***!
  \*********************************/
/***/ (function() {

$(function () {
  $(".js-phone").each(function () {
    IMask(this, {
      mask: "+{7}(000)000-00-00"
    });
  });
});

/***/ }),

/***/ "./src/js/modules/submenu.js":
/*!***********************************!*\
  !*** ./src/js/modules/submenu.js ***!
  \***********************************/
/***/ (function() {

var timer = null;
var $activePanel = $();
var $activeItem = $();

function closePanel() {
  $activePanel.removeClass("active");
  $activeItem.removeClass("active");
}

$(".js-submenu-item").on("mouseenter", function () {
  clearTimeout(timer);
  closePanel();
  var target = $(this).data("submenu");
  if (!target) return;
  $activePanel = $("#" + target);
  $activeItem = $(this);
  $activePanel.addClass("active");
  $activeItem.addClass("active");
});
$(".js-submenu-item").on("mouseleave", function () {
  timer = setTimeout(closePanel, 200);
});
$(".js-submenu").on("mouseenter", function () {
  clearTimeout(timer);
});
$(".js-submenu").on("mouseleave", function () {
  timer = setTimeout(closePanel, 200);
});

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function() {

var setActiveButton = function setActiveButton($tabs, index) {
  $tabs.find("li").removeClass("active").eq(index).addClass("active");
};

var setActiveContent = function setActiveContent(id) {
  if ($(id).hasClass("tabs-content")) {
    $(id).children().addClass("active");
    return;
  }

  $(id).siblings().removeClass("active").end().addClass("active");
};

function handleTabClick(e) {
  e.preventDefault();
  var index = $(this).parent().index();
  setActiveButton($(this).closest(".js-tabs"), index);
  setActiveContent($(this).attr("href"));
}

$(function () {
  $(document).on("click", ".js-tabs a", handleTabClick);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_developers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/developers */ "./src/js/modules/developers.js");
/* harmony import */ var _modules_developers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_developers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_masks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/masks */ "./src/js/modules/masks.js");
/* harmony import */ var _modules_masks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_masks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_submenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/submenu */ "./src/js/modules/submenu.js");
/* harmony import */ var _modules_submenu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_submenu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_customScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/customScroll */ "./src/js/modules/customScroll.js");
/* harmony import */ var _modules_customScroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_customScroll__WEBPACK_IMPORTED_MODULE_4__);





}();
/******/ })()
;