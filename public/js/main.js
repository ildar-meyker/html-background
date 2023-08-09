/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function() {

function handleBurgerClick() {
  var isActive = $(this).hasClass("active");
  $(this).toggleClass("active", !isActive);
  $("#nav-down").toggleClass("active", !isActive);
}

$(function () {
  $(document).on("click", ".js-burger-open", handleBurgerClick);
});

/***/ }),

/***/ "./src/js/modules/customScroll.js":
/*!****************************************!*\
  !*** ./src/js/modules/customScroll.js ***!
  \****************************************/
/***/ (function() {

//
$(function () {
  $(".scroll-area").each(function () {
    Scrollbar.init(this);
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
var pubdate = new Date("2023-12-01");
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

/***/ "./src/js/modules/intro.js":
/*!*********************************!*\
  !*** ./src/js/modules/intro.js ***!
  \*********************************/
/***/ (function() {

$(function () {
  $("#header").addClass("header--active");
  setTimeout(function () {
    $(".intro__title > div > div").addClass("active");
  }, 500);
  setTimeout(function () {
    $(".intro__btn").addClass("active");
  }, 1500);
  setTimeout(function () {
    $(".counts__about").addClass("active");
  }, 1500);
  setTimeout(function () {
    $(".intro__desc").addClass("active");
  }, 1800);
});

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

/***/ }),

/***/ "./src/js/modules/waypoints.js":
/*!*************************************!*\
  !*** ./src/js/modules/waypoints.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js");
// shifting
var shiftCalcs = {};
var $shiftTitle = $();
var scrollbar = null; // counts

var countsState = [];


function handleShift(status) {
  var scrollTop = scrollbar ? status.offset.y : $(".page__window").scrollTop();
  var isVisible = scrollTop + shiftCalcs.windowHeight > shiftCalcs.offsetTop && shiftCalcs.offsetTop + shiftCalcs.blockHeight > scrollTop;

  if (isVisible) {
    var shiftValue = (scrollTop + shiftCalcs.windowHeight - shiftCalcs.offsetTop) / shiftCalcs.windowHeight;
    $shiftTitle.css("transform", "translateX(".concat(100 - 100 * shiftValue, "%)"));
  }
}

function handleHeader(status) {
  var scrollTop = scrollbar ? status.offset.y : $(".page__window").scrollTop();
  $("#header").toggleClass("header--hidden", scrollTop > 10);

  if (scrollTop < 10) {
    resetCounts();
  }
}

function updateCalcs() {
  shiftCalcs = {
    offsetTop: $shiftTitle.offset().top,
    blockHeight: $shiftTitle.outerHeight(),
    windowHeight: $("#page__window").height()
  };
}

function resetCounts() {
  countsState.forEach(function (item) {
    item.instance.reset();
    item.animated = false;
  });
}

$(function () {
  if (!Modernizr.touchevents) {
    scrollbar = Scrollbar.init(document.querySelector("#page__window"), {
      damping: 0.03
    });
    scrollbar.addListener(handleHeader);
  } else {
    $(".page__window").on("scroll", handleHeader);
  }

  $shiftTitle = $(".offices__title");
  if ($shiftTitle.length === 0) return;
  updateCalcs();
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (!Modernizr.touchevents) {
        if (entry.isIntersecting) {
          scrollbar.addListener(handleShift);
        } else {
          scrollbar.removeListener(handleShift);
        }
      } else {
        if (entry.isIntersecting) {
          $(".page__window").on("scroll", handleShift);
        } else {
          $(".page__window").off("scroll", handleShift);
        }
      }
    });
  }, {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0
  });
  observer.observe($shiftTitle[0]);
  $(window).on("resize", updateCalcs);
});
$(function () {
  var $values = $(".counts__value__num");
  $values.each(function () {
    countsState.push({
      target: this,
      instance: new countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp(this, this.textContent),
      animated: false
    });
  });
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var number = countsState.filter(function (item) {
          return item.target === entry.target;
        })[0];
        if (number.animated) return;
        number.instance.start();
        number.animated = true;
      }
    });
  }, {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0
  });
  $values.each(function () {
    observer.observe(this);
  });
});

/***/ }),

/***/ "./node_modules/countup.js/dist/countUp.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/countup.js/dist/countUp.min.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountUp": function() { return /* binding */ i; }
/* harmony export */ });
var t=function(){return t=Object.assign||function(t){for(var i,n=1,s=arguments.length;n<s;n++)for(var a in i=arguments[n])Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);return t},t.apply(this,arguments)},i=function(){function i(i,n,s){var a=this;this.endVal=n,this.options=s,this.version="2.6.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){a.startTime||(a.startTime=t);var i=t-a.startTime;a.remaining=a.duration-i,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(i,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(i,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(i/a.duration);var n=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=n?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),i<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.options.onCompleteCallback&&a.options.onCompleteCallback()},this.formatNumber=function(t){var i,n,s,e,o=t<0?"-":"";i=Math.abs(t).toFixed(a.options.decimalPlaces);var r=(i+="").split(".");if(n=r[0],s=r.length>1?a.options.decimal+r[1]:"",a.options.useGrouping){e="";for(var l=3,h=0,u=0,p=n.length;u<p;++u)a.options.useIndianSeparators&&4===u&&(l=2,h=1),0!==u&&h%l==0&&(e=a.options.separator+e),h++,e=n[p-u-1]+e;n=e}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]})),s=s.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]}))),o+a.options.prefix+n+s+a.options.suffix},this.easeOutExpo=function(t,i,n,s){return n*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=t(t({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof i?document.getElementById(i):i,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,i):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return a.handleScroll(a)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return i.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),s=n.top+window.pageYOffset,a=n.top+n.height+window.pageYOffset;a<i&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||s>i)&&!t.paused&&t.reset()}},i.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(t){this.error||(t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(t){var i;if(this.el){var n=this.formattingFn(t);if(null===(i=this.options.plugin)||void 0===i?void 0:i.render)this.options.plugin.render(this.el,n);else if("INPUT"===this.el.tagName)this.el.value=n;else"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},i.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},i.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i}();


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
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_burger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_waypoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/waypoints */ "./src/js/modules/waypoints.js");
/* harmony import */ var _modules_intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/intro */ "./src/js/modules/intro.js");
/* harmony import */ var _modules_intro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_intro__WEBPACK_IMPORTED_MODULE_7__);








}();
/******/ })()
;