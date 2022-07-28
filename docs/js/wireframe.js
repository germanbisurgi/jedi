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
  /******/ 	return __webpack_require__(__webpack_require__.s = 2);
  /******/ })
/************************************************************************/
/******/ ([
  /* 0 */
  /***/ (function(module, exports) {

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

    /***/ }),
  /* 1 */
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
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }

    module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

    /***/ }),
  /* 2 */
  /***/ (function(module, exports, __webpack_require__) {

    __webpack_require__(3);
    __webpack_require__(4);
    __webpack_require__(5);
    module.exports = __webpack_require__(6);


    /***/ }),
  /* 3 */
  /***/ (function(module, exports) {

    /* global IntersectionObserver */
    window.addEventListener('DOMContentLoaded', function () {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (scrollspy) {
          var id = scrollspy.target.getAttribute('data-scrollspy-section');

          if (scrollspy.intersectionRatio > 0) {
            document.querySelector("[data-scrollspy-feedback=\"".concat(id, "\"]")).classList.add('active');
          } else {
            document.querySelector("[data-scrollspy-feedback=\"".concat(id, "\"]")).classList.remove('active');
          }
        });
      });
      document.querySelectorAll('[data-scrollspy-section]').forEach(function (scrollspy) {
        observer.observe(scrollspy);
      });
    });

    /***/ }),
  /* 4 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
    /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



    var ColorScheme = /*#__PURE__*/function () {
      function ColorScheme() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ColorScheme);

        this.os = window.localStorage.getItem('color-scheme-os') || 'light';
        this.mode = window.localStorage.getItem('color-scheme-mode') || 'os';
        this.theme = window.localStorage.getItem('color-scheme-theme') || 'light';
        this.init();
      }

      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ColorScheme, [{
        key: "init",
        value: function init() {
          this.detect();
          this.listen();
        }
      }, {
        key: "switch",
        value: function _switch() {
          this.theme = this.mode === 'os' ? this.os : this.mode;
          document.body.setAttribute('color-scheme', this.theme);
          window.localStorage.setItem('color-scheme-os', this.os);
          window.localStorage.setItem('color-scheme-mode', this.mode);
          window.localStorage.setItem('color-scheme-theme', this.theme);
        }
      }, {
        key: "detect",
        value: function detect() {
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.os = 'dark';
          } else {
            this.os = 'light';
          }

          this["switch"]();
        }
      }, {
        key: "listen",
        value: function listen() {
          var _this = this;

          window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (event) {
            _this.os = event.matches ? 'dark' : 'light';

            _this["switch"]();
          });
          document.querySelectorAll('[color-scheme-toggle]').forEach(function (toggle) {
            toggle.addEventListener('click', function () {
              var mode = toggle.getAttribute('color-scheme-toggle');

              if (mode) {
                _this.mode = mode;

                _this["switch"]();
              }
            });
          });
        }
      }]);

      return ColorScheme;
    }();

    window.addEventListener('DOMContentLoaded', function () {
      new ColorScheme();
    });

    /***/ }),
  /* 5 */
  /***/ (function(module, exports) {

    window.addEventListener('DOMContentLoaded', function () {
      var dropdowns = document.querySelectorAll('[data-toggle="dropdown"]');
      dropdowns.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
          var dropdown = toggle.parentNode;

          if (dropdown) {
            dropdown.classList.toggle('open');
          }
        });
      });
      window.addEventListener('click', function (event) {
        var clickedElement = event.target;

        if (!clickedElement.matches('.dropdown-toggle')) {
          dropdowns.forEach(function (toggle) {
            var dropdown = toggle.parentNode;

            if (dropdown) {
              dropdown.classList.remove('open');
            }
          });
        }
      });
    });

    /***/ }),
  /* 6 */
  /***/ (function(module, exports) {

    window.addEventListener('click', function (event) {
      if (event.target.getAttribute('data-toggle') === 'tab') {
        event.preventDefault();
        var tab = event.target;
        var tabPaneSelector = tab.getAttribute('href');
        var tabPane = document.querySelector(tabPaneSelector); // reset

        var navTabs = tab.parentNode.parentNode;
        var tabs = navTabs.querySelectorAll('[data-toggle="tab"]');

        if (tabs) {
          tabs.forEach(function (tab) {
            tab.parentNode.classList.remove('active');
          });
        }

        tab.parentNode.classList.add('active');

        if (tabPane) {
          var tabContent = tabPane.parentNode;
          var tabPanes = tabContent.querySelectorAll('.tab-pane');

          if (tabPanes) {
            tabPanes.forEach(function (tabPane) {
              tabPane.classList.remove('active');
            });
          }

          tabPane.classList.add('active');
        }
      }
    });

    /***/ })
  /******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Njcm9sbHNweS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29sb3Itc2NoZW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kcm9wZG93bnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYnMuanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsInNjcm9sbHNweSIsImlkIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZSIsIkNvbG9yU2NoZW1lIiwib3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibW9kZSIsInRoZW1lIiwiaW5pdCIsImRldGVjdCIsImxpc3RlbiIsImJvZHkiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJldmVudCIsInRvZ2dsZSIsImRyb3Bkb3ducyIsImRyb3Bkb3duIiwicGFyZW50Tm9kZSIsImNsaWNrZWRFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJ0YWIiLCJ0YWJQYW5lU2VsZWN0b3IiLCJ0YWJQYW5lIiwibmF2VGFicyIsInRhYnMiLCJ0YWJDb250ZW50IiwidGFiUGFuZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRzs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSw0Rzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUVBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0VBQ2hELElBQU1DLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFBQyxPQUFPLEVBQUk7SUFDbkRBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFBQyxTQUFTLEVBQUk7TUFDM0IsSUFBTUMsRUFBRSxHQUFHRCxTQUFTLENBQUNFLE1BQVYsQ0FBaUJDLFlBQWpCLENBQThCLHdCQUE5QixDQUFYOztNQUVBLElBQUlILFNBQVMsQ0FBQ0ksaUJBQVYsR0FBOEIsQ0FBbEMsRUFBcUM7UUFDbkNDLFFBQVEsQ0FBQ0MsYUFBVCxzQ0FBb0RMLEVBQXBELFVBQTRETSxTQUE1RCxDQUFzRUMsR0FBdEUsQ0FBMEUsUUFBMUU7TUFDRCxDQUZELE1BRU87UUFDTEgsUUFBUSxDQUFDQyxhQUFULHNDQUFvREwsRUFBcEQsVUFBNERNLFNBQTVELENBQXNFRSxNQUF0RSxDQUE2RSxRQUE3RTtNQUNEO0lBQ0YsQ0FSRDtFQVNELENBVmdCLENBQWpCO0VBWUFKLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsMEJBQTFCLEVBQXNEWCxPQUF0RCxDQUE4RCxVQUFDQyxTQUFELEVBQWU7SUFDM0VKLFFBQVEsQ0FBQ2UsT0FBVCxDQUFpQlgsU0FBakI7RUFDRCxDQUZEO0FBR0QsQ0FoQkQsRTs7Ozs7Ozs7Ozs7Ozs7O0lDRk1ZLFc7RUFDSix1QkFBZTtJQUFBOztJQUNiLEtBQUtDLEVBQUwsR0FBVW5CLE1BQU0sQ0FBQ29CLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLGlCQUE1QixLQUFrRCxPQUE1RDtJQUNBLEtBQUtDLElBQUwsR0FBWXRCLE1BQU0sQ0FBQ29CLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLG1CQUE1QixLQUFvRCxJQUFoRTtJQUNBLEtBQUtFLEtBQUwsR0FBYXZCLE1BQU0sQ0FBQ29CLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLG9CQUE1QixLQUFxRCxPQUFsRTtJQUNBLEtBQUtHLElBQUw7RUFDRDs7OztXQUVELGdCQUFRO01BQ04sS0FBS0MsTUFBTDtNQUNBLEtBQUtDLE1BQUw7SUFDRDs7O1dBRUQsbUJBQVU7TUFDUixLQUFLSCxLQUFMLEdBQWEsS0FBS0QsSUFBTCxLQUFjLElBQWQsR0FBcUIsS0FBS0gsRUFBMUIsR0FBK0IsS0FBS0csSUFBakQ7TUFDQVgsUUFBUSxDQUFDZ0IsSUFBVCxDQUFjQyxZQUFkLENBQTJCLGNBQTNCLEVBQTJDLEtBQUtMLEtBQWhEO01BQ0F2QixNQUFNLENBQUNvQixZQUFQLENBQW9CUyxPQUFwQixDQUE0QixpQkFBNUIsRUFBK0MsS0FBS1YsRUFBcEQ7TUFDQW5CLE1BQU0sQ0FBQ29CLFlBQVAsQ0FBb0JTLE9BQXBCLENBQTRCLG1CQUE1QixFQUFpRCxLQUFLUCxJQUF0RDtNQUNBdEIsTUFBTSxDQUFDb0IsWUFBUCxDQUFvQlMsT0FBcEIsQ0FBNEIsb0JBQTVCLEVBQWtELEtBQUtOLEtBQXZEO0lBQ0Q7OztXQUVELGtCQUFVO01BQ1IsSUFBSXZCLE1BQU0sQ0FBQzhCLFVBQVAsSUFBcUI5QixNQUFNLENBQUM4QixVQUFQLENBQWtCLDhCQUFsQixFQUFrREMsT0FBM0UsRUFBb0Y7UUFDbEYsS0FBS1osRUFBTCxHQUFVLE1BQVY7TUFDRCxDQUZELE1BRU87UUFDTCxLQUFLQSxFQUFMLEdBQVUsT0FBVjtNQUNEOztNQUNEO0lBQ0Q7OztXQUVELGtCQUFVO01BQUE7O01BQ1JuQixNQUFNLENBQUM4QixVQUFQLENBQWtCLDhCQUFsQixFQUFrRDdCLGdCQUFsRCxDQUFtRSxRQUFuRSxFQUE2RSxVQUFBK0IsS0FBSyxFQUFJO1FBQ3BGLEtBQUksQ0FBQ2IsRUFBTCxHQUFVYSxLQUFLLENBQUNELE9BQU4sR0FBZ0IsTUFBaEIsR0FBeUIsT0FBbkM7O1FBQ0EsS0FBSSxVQUFKO01BQ0QsQ0FIRDtNQUtBcEIsUUFBUSxDQUFDSyxnQkFBVCxDQUEwQix1QkFBMUIsRUFBbURYLE9BQW5ELENBQTJELFVBQUM0QixNQUFELEVBQVk7UUFDckVBLE1BQU0sQ0FBQ2hDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07VUFDckMsSUFBTXFCLElBQUksR0FBR1csTUFBTSxDQUFDeEIsWUFBUCxDQUFvQixxQkFBcEIsQ0FBYjs7VUFFQSxJQUFJYSxJQUFKLEVBQVU7WUFDUixLQUFJLENBQUNBLElBQUwsR0FBWUEsSUFBWjs7WUFDQSxLQUFJLFVBQUo7VUFDRDtRQUNGLENBUEQ7TUFRRCxDQVREO0lBVUQ7Ozs7OztBQUdIdEIsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtFQUNoRCxJQUFJaUIsV0FBSjtBQUNELENBRkQsRTs7Ozs7O0FDakRBbEIsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtFQUNoRCxJQUFNaUMsU0FBUyxHQUFHdkIsUUFBUSxDQUFDSyxnQkFBVCxDQUEwQiwwQkFBMUIsQ0FBbEI7RUFFQWtCLFNBQVMsQ0FBQzdCLE9BQVYsQ0FBa0IsVUFBQzRCLE1BQUQsRUFBWTtJQUM1QkEsTUFBTSxDQUFDaEMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtNQUNyQyxJQUFNa0MsUUFBUSxHQUFHRixNQUFNLENBQUNHLFVBQXhCOztNQUVBLElBQUlELFFBQUosRUFBYztRQUNaQSxRQUFRLENBQUN0QixTQUFULENBQW1Cb0IsTUFBbkIsQ0FBMEIsTUFBMUI7TUFDRDtJQUNGLENBTkQ7RUFPRCxDQVJEO0VBVUFqQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQUMrQixLQUFELEVBQVc7SUFDMUMsSUFBTUssY0FBYyxHQUFHTCxLQUFLLENBQUN4QixNQUE3Qjs7SUFFQSxJQUFJLENBQUM2QixjQUFjLENBQUNOLE9BQWYsQ0FBdUIsa0JBQXZCLENBQUwsRUFBaUQ7TUFDL0NHLFNBQVMsQ0FBQzdCLE9BQVYsQ0FBa0IsVUFBQzRCLE1BQUQsRUFBWTtRQUM1QixJQUFNRSxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0csVUFBeEI7O1FBRUEsSUFBSUQsUUFBSixFQUFjO1VBQ1pBLFFBQVEsQ0FBQ3RCLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLE1BQTFCO1FBQ0Q7TUFDRixDQU5EO0lBT0Q7RUFDRixDQVpEO0FBYUQsQ0ExQkQsRTs7Ozs7O0FDQUFmLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQytCLEtBQUQsRUFBVztFQUMxQyxJQUFJQSxLQUFLLENBQUN4QixNQUFOLENBQWFDLFlBQWIsQ0FBMEIsYUFBMUIsTUFBNkMsS0FBakQsRUFBd0Q7SUFDdER1QixLQUFLLENBQUNNLGNBQU47SUFDQSxJQUFNQyxHQUFHLEdBQUdQLEtBQUssQ0FBQ3hCLE1BQWxCO0lBQ0EsSUFBTWdDLGVBQWUsR0FBR0QsR0FBRyxDQUFDOUIsWUFBSixDQUFpQixNQUFqQixDQUF4QjtJQUNBLElBQU1nQyxPQUFPLEdBQUc5QixRQUFRLENBQUNDLGFBQVQsQ0FBdUI0QixlQUF2QixDQUFoQixDQUpzRCxDQU10RDs7SUFDQSxJQUFNRSxPQUFPLEdBQUdILEdBQUcsQ0FBQ0gsVUFBSixDQUFlQSxVQUEvQjtJQUNBLElBQU1PLElBQUksR0FBR0QsT0FBTyxDQUFDMUIsZ0JBQVIsQ0FBeUIscUJBQXpCLENBQWI7O0lBRUEsSUFBSTJCLElBQUosRUFBVTtNQUNSQSxJQUFJLENBQUN0QyxPQUFMLENBQWEsVUFBQ2tDLEdBQUQsRUFBUztRQUNwQkEsR0FBRyxDQUFDSCxVQUFKLENBQWV2QixTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxRQUFoQztNQUNELENBRkQ7SUFHRDs7SUFFRHdCLEdBQUcsQ0FBQ0gsVUFBSixDQUFldkIsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0I7O0lBRUEsSUFBSTJCLE9BQUosRUFBYTtNQUNYLElBQU1HLFVBQVUsR0FBR0gsT0FBTyxDQUFDTCxVQUEzQjtNQUNBLElBQU1TLFFBQVEsR0FBR0QsVUFBVSxDQUFDNUIsZ0JBQVgsQ0FBNEIsV0FBNUIsQ0FBakI7O01BRUEsSUFBSTZCLFFBQUosRUFBYztRQUNaQSxRQUFRLENBQUN4QyxPQUFULENBQWlCLFVBQUNvQyxPQUFELEVBQWE7VUFDNUJBLE9BQU8sQ0FBQzVCLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLFFBQXpCO1FBQ0QsQ0FGRDtNQUdEOztNQUNEMEIsT0FBTyxDQUFDNUIsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsUUFBdEI7SUFDRDtFQUNGO0FBQ0YsQ0EvQkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvKiBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgKi9cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaChzY3JvbGxzcHkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBzY3JvbGxzcHkudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGxzcHktc2VjdGlvbicpXG5cbiAgICAgIGlmIChzY3JvbGxzcHkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNjcm9sbHNweS1mZWVkYmFjaz1cIiR7aWR9XCJdYCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNjcm9sbHNweS1mZWVkYmFjaz1cIiR7aWR9XCJdYCkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNjcm9sbHNweS1zZWN0aW9uXScpLmZvckVhY2goKHNjcm9sbHNweSkgPT4ge1xuICAgIG9ic2VydmVyLm9ic2VydmUoc2Nyb2xsc3B5KVxuICB9KVxufSlcbiIsImNsYXNzIENvbG9yU2NoZW1lIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMub3MgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yLXNjaGVtZS1vcycpIHx8ICdsaWdodCdcbiAgICB0aGlzLm1vZGUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yLXNjaGVtZS1tb2RlJykgfHwgJ29zJ1xuICAgIHRoaXMudGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yLXNjaGVtZS10aGVtZScpIHx8ICdsaWdodCdcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5kZXRlY3QoKVxuICAgIHRoaXMubGlzdGVuKClcbiAgfVxuXG4gIHN3aXRjaCAoKSB7XG4gICAgdGhpcy50aGVtZSA9IHRoaXMubW9kZSA9PT0gJ29zJyA/IHRoaXMub3MgOiB0aGlzLm1vZGVcbiAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnY29sb3Itc2NoZW1lJywgdGhpcy50aGVtZSlcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbG9yLXNjaGVtZS1vcycsIHRoaXMub3MpXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xvci1zY2hlbWUtbW9kZScsIHRoaXMubW9kZSlcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbG9yLXNjaGVtZS10aGVtZScsIHRoaXMudGhlbWUpXG4gIH1cblxuICBkZXRlY3QgKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIHtcbiAgICAgIHRoaXMub3MgPSAnZGFyaydcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcyA9ICdsaWdodCdcbiAgICB9XG4gICAgdGhpcy5zd2l0Y2goKVxuICB9XG5cbiAgbGlzdGVuICgpIHtcbiAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMub3MgPSBldmVudC5tYXRjaGVzID8gJ2RhcmsnIDogJ2xpZ2h0J1xuICAgICAgdGhpcy5zd2l0Y2goKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY29sb3Itc2NoZW1lLXRvZ2dsZV0nKS5mb3JFYWNoKCh0b2dnbGUpID0+IHtcbiAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZSA9IHRvZ2dsZS5nZXRBdHRyaWJ1dGUoJ2NvbG9yLXNjaGVtZS10b2dnbGUnKVxuXG4gICAgICAgIGlmIChtb2RlKSB7XG4gICAgICAgICAgdGhpcy5tb2RlID0gbW9kZVxuICAgICAgICAgIHRoaXMuc3dpdGNoKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBuZXcgQ29sb3JTY2hlbWUoKVxufSlcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScpXG5cbiAgZHJvcGRvd25zLmZvckVhY2goKHRvZ2dsZSkgPT4ge1xuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGRyb3Bkb3duID0gdG9nZ2xlLnBhcmVudE5vZGVcblxuICAgICAgaWYgKGRyb3Bkb3duKSB7XG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBldmVudC50YXJnZXRcblxuICAgIGlmICghY2xpY2tlZEVsZW1lbnQubWF0Y2hlcygnLmRyb3Bkb3duLXRvZ2dsZScpKSB7XG4gICAgICBkcm9wZG93bnMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdG9nZ2xlLnBhcmVudE5vZGVcblxuICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpID09PSAndGFiJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0YWIgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCB0YWJQYW5lU2VsZWN0b3IgPSB0YWIuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICBjb25zdCB0YWJQYW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWJQYW5lU2VsZWN0b3IpXG5cbiAgICAvLyByZXNldFxuICAgIGNvbnN0IG5hdlRhYnMgPSB0YWIucGFyZW50Tm9kZS5wYXJlbnROb2RlXG4gICAgY29uc3QgdGFicyA9IG5hdlRhYnMucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJylcblxuICAgIGlmICh0YWJzKSB7XG4gICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICB0YWIucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0YWIucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG4gICAgaWYgKHRhYlBhbmUpIHtcbiAgICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0YWJQYW5lLnBhcmVudE5vZGVcbiAgICAgIGNvbnN0IHRhYlBhbmVzID0gdGFiQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLXBhbmUnKVxuXG4gICAgICBpZiAodGFiUGFuZXMpIHtcbiAgICAgICAgdGFiUGFuZXMuZm9yRWFjaCgodGFiUGFuZSkgPT4ge1xuICAgICAgICAgIHRhYlBhbmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRhYlBhbmUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9
