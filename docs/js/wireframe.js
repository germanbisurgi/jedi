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
    __webpack_require__(6);
    module.exports = __webpack_require__(7);


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
          window.addEventListener('click', function (event) {
            if (event.target.getAttribute('data-toggle') === 'theme') {
              event.preventDefault();
              var toggle = event.target;
              var mode = toggle.getAttribute('data-theme');

              if (mode) {
                _this.mode = mode;

                _this["switch"]();
              }
            }
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

    window.addEventListener('click', function (event) {
      if (event.target.getAttribute('data-toggle') === 'collapse') {
        event.preventDefault();
        var collapseToggle = event.target;
        var targetSelector = collapseToggle.getAttribute('data-target');
        var collapse = document.querySelector(targetSelector);
        collapse.classList.toggle('in');
      }
    });

    /***/ }),
  /* 6 */
  /***/ (function(module, exports) {

    window.addEventListener('click', function (event) {
      var dropdowns = document.querySelectorAll('[data-toggle="dropdown"]');

      if (event.target.getAttribute('data-toggle') === 'dropdown') {
        event.preventDefault();
        var toggle = event.target;
        var dropdown = toggle.parentNode;

        if (dropdown) {
          dropdown.classList.toggle('open');
        }
      } else {
        dropdowns.forEach(function (toggle) {
          var dropdown = toggle.parentNode;

          if (dropdown) {
            dropdown.classList.remove('open');
          }
        });
      }
    });

    /***/ }),
  /* 7 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Njcm9sbHNweS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29sb3Itc2NoZW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZHJvcGRvd25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90YWJzLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJzY3JvbGxzcHkiLCJpZCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImludGVyc2VjdGlvblJhdGlvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsIm9ic2VydmUiLCJDb2xvclNjaGVtZSIsIm9zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1vZGUiLCJ0aGVtZSIsImluaXQiLCJkZXRlY3QiLCJsaXN0ZW4iLCJib2R5Iiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsImNvbGxhcHNlVG9nZ2xlIiwidGFyZ2V0U2VsZWN0b3IiLCJjb2xsYXBzZSIsImRyb3Bkb3ducyIsImRyb3Bkb3duIiwicGFyZW50Tm9kZSIsInRhYiIsInRhYlBhbmVTZWxlY3RvciIsInRhYlBhbmUiLCJuYXZUYWJzIiwidGFicyIsInRhYkNvbnRlbnQiLCJ0YWJQYW5lcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtHOzs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDRHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUVBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0VBQ2hELElBQU1DLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFBQyxPQUFPLEVBQUk7SUFDbkRBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFBQyxTQUFTLEVBQUk7TUFDM0IsSUFBTUMsRUFBRSxHQUFHRCxTQUFTLENBQUNFLE1BQVYsQ0FBaUJDLFlBQWpCLENBQThCLHdCQUE5QixDQUFYOztNQUVBLElBQUlILFNBQVMsQ0FBQ0ksaUJBQVYsR0FBOEIsQ0FBbEMsRUFBcUM7UUFDbkNDLFFBQVEsQ0FBQ0MsYUFBVCxzQ0FBb0RMLEVBQXBELFVBQTRETSxTQUE1RCxDQUFzRUMsR0FBdEUsQ0FBMEUsUUFBMUU7TUFDRCxDQUZELE1BRU87UUFDTEgsUUFBUSxDQUFDQyxhQUFULHNDQUFvREwsRUFBcEQsVUFBNERNLFNBQTVELENBQXNFRSxNQUF0RSxDQUE2RSxRQUE3RTtNQUNEO0lBQ0YsQ0FSRDtFQVNELENBVmdCLENBQWpCO0VBWUFKLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsMEJBQTFCLEVBQXNEWCxPQUF0RCxDQUE4RCxVQUFDQyxTQUFELEVBQWU7SUFDM0VKLFFBQVEsQ0FBQ2UsT0FBVCxDQUFpQlgsU0FBakI7RUFDRCxDQUZEO0FBR0QsQ0FoQkQsRTs7Ozs7Ozs7Ozs7Ozs7O0lDRk1ZLFc7RUFDSix1QkFBZTtJQUFBOztJQUNiLEtBQUtDLEVBQUwsR0FBVW5CLE1BQU0sQ0FBQ29CLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLGlCQUE1QixLQUFrRCxPQUE1RDtJQUNBLEtBQUtDLElBQUwsR0FBWXRCLE1BQU0sQ0FBQ29CLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLG1CQUE1QixLQUFvRCxJQUFoRTtJQUNBLEtBQUtFLEtBQUwsR0FBYXZCLE1BQU0sQ0FBQ29CLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLG9CQUE1QixLQUFxRCxPQUFsRTtJQUNBLEtBQUtHLElBQUw7RUFDRDs7OztXQUVELGdCQUFRO01BQ04sS0FBS0MsTUFBTDtNQUNBLEtBQUtDLE1BQUw7SUFDRDs7O1dBRUQsbUJBQVU7TUFDUixLQUFLSCxLQUFMLEdBQWEsS0FBS0QsSUFBTCxLQUFjLElBQWQsR0FBcUIsS0FBS0gsRUFBMUIsR0FBK0IsS0FBS0csSUFBakQ7TUFDQVgsUUFBUSxDQUFDZ0IsSUFBVCxDQUFjQyxZQUFkLENBQTJCLGNBQTNCLEVBQTJDLEtBQUtMLEtBQWhEO01BQ0F2QixNQUFNLENBQUNvQixZQUFQLENBQW9CUyxPQUFwQixDQUE0QixpQkFBNUIsRUFBK0MsS0FBS1YsRUFBcEQ7TUFDQW5CLE1BQU0sQ0FBQ29CLFlBQVAsQ0FBb0JTLE9BQXBCLENBQTRCLG1CQUE1QixFQUFpRCxLQUFLUCxJQUF0RDtNQUNBdEIsTUFBTSxDQUFDb0IsWUFBUCxDQUFvQlMsT0FBcEIsQ0FBNEIsb0JBQTVCLEVBQWtELEtBQUtOLEtBQXZEO0lBQ0Q7OztXQUVELGtCQUFVO01BQ1IsSUFBSXZCLE1BQU0sQ0FBQzhCLFVBQVAsSUFBcUI5QixNQUFNLENBQUM4QixVQUFQLENBQWtCLDhCQUFsQixFQUFrREMsT0FBM0UsRUFBb0Y7UUFDbEYsS0FBS1osRUFBTCxHQUFVLE1BQVY7TUFDRCxDQUZELE1BRU87UUFDTCxLQUFLQSxFQUFMLEdBQVUsT0FBVjtNQUNEOztNQUNEO0lBQ0Q7OztXQUVELGtCQUFVO01BQUE7O01BQ1JuQixNQUFNLENBQUM4QixVQUFQLENBQWtCLDhCQUFsQixFQUFrRDdCLGdCQUFsRCxDQUFtRSxRQUFuRSxFQUE2RSxVQUFBK0IsS0FBSyxFQUFJO1FBQ3BGLEtBQUksQ0FBQ2IsRUFBTCxHQUFVYSxLQUFLLENBQUNELE9BQU4sR0FBZ0IsTUFBaEIsR0FBeUIsT0FBbkM7O1FBQ0EsS0FBSSxVQUFKO01BQ0QsQ0FIRDtNQUtBL0IsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFDK0IsS0FBRCxFQUFXO1FBQzFDLElBQUlBLEtBQUssQ0FBQ3hCLE1BQU4sQ0FBYUMsWUFBYixDQUEwQixhQUExQixNQUE2QyxPQUFqRCxFQUEwRDtVQUN4RHVCLEtBQUssQ0FBQ0MsY0FBTjtVQUNBLElBQU1DLE1BQU0sR0FBR0YsS0FBSyxDQUFDeEIsTUFBckI7VUFDQSxJQUFNYyxJQUFJLEdBQUdZLE1BQU0sQ0FBQ3pCLFlBQVAsQ0FBb0IsWUFBcEIsQ0FBYjs7VUFFQSxJQUFJYSxJQUFKLEVBQVU7WUFDUixLQUFJLENBQUNBLElBQUwsR0FBWUEsSUFBWjs7WUFDQSxLQUFJLFVBQUo7VUFDRDtRQUNGO01BQ0YsQ0FYRDtJQVlEOzs7Ozs7QUFHSHRCLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07RUFDaEQsSUFBSWlCLFdBQUo7QUFDRCxDQUZELEU7Ozs7OztBQ25EQWxCLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQytCLEtBQUQsRUFBVztFQUMxQyxJQUFJQSxLQUFLLENBQUN4QixNQUFOLENBQWFDLFlBQWIsQ0FBMEIsYUFBMUIsTUFBNkMsVUFBakQsRUFBNkQ7SUFDM0R1QixLQUFLLENBQUNDLGNBQU47SUFDQSxJQUFNRSxjQUFjLEdBQUdILEtBQUssQ0FBQ3hCLE1BQTdCO0lBQ0EsSUFBTTRCLGNBQWMsR0FBR0QsY0FBYyxDQUFDMUIsWUFBZixDQUE0QixhQUE1QixDQUF2QjtJQUNBLElBQU00QixRQUFRLEdBQUcxQixRQUFRLENBQUNDLGFBQVQsQ0FBdUJ3QixjQUF2QixDQUFqQjtJQUNBQyxRQUFRLENBQUN4QixTQUFULENBQW1CcUIsTUFBbkIsQ0FBMEIsSUFBMUI7RUFDRDtBQUNGLENBUkQsRTs7Ozs7O0FDQUFsQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQUMrQixLQUFELEVBQVc7RUFDMUMsSUFBTU0sU0FBUyxHQUFHM0IsUUFBUSxDQUFDSyxnQkFBVCxDQUEwQiwwQkFBMUIsQ0FBbEI7O0VBRUEsSUFBSWdCLEtBQUssQ0FBQ3hCLE1BQU4sQ0FBYUMsWUFBYixDQUEwQixhQUExQixNQUE2QyxVQUFqRCxFQUE2RDtJQUMzRHVCLEtBQUssQ0FBQ0MsY0FBTjtJQUNBLElBQU1DLE1BQU0sR0FBR0YsS0FBSyxDQUFDeEIsTUFBckI7SUFDQSxJQUFNK0IsUUFBUSxHQUFHTCxNQUFNLENBQUNNLFVBQXhCOztJQUVBLElBQUlELFFBQUosRUFBYztNQUNaQSxRQUFRLENBQUMxQixTQUFULENBQW1CcUIsTUFBbkIsQ0FBMEIsTUFBMUI7SUFDRDtFQUNGLENBUkQsTUFRTztJQUNMSSxTQUFTLENBQUNqQyxPQUFWLENBQWtCLFVBQUM2QixNQUFELEVBQVk7TUFDNUIsSUFBTUssUUFBUSxHQUFHTCxNQUFNLENBQUNNLFVBQXhCOztNQUVBLElBQUlELFFBQUosRUFBYztRQUNaQSxRQUFRLENBQUMxQixTQUFULENBQW1CRSxNQUFuQixDQUEwQixNQUExQjtNQUNEO0lBQ0YsQ0FORDtFQU9EO0FBQ0YsQ0FwQkQsRTs7Ozs7O0FDQUFmLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQytCLEtBQUQsRUFBVztFQUMxQyxJQUFJQSxLQUFLLENBQUN4QixNQUFOLENBQWFDLFlBQWIsQ0FBMEIsYUFBMUIsTUFBNkMsS0FBakQsRUFBd0Q7SUFDdER1QixLQUFLLENBQUNDLGNBQU47SUFDQSxJQUFNUSxHQUFHLEdBQUdULEtBQUssQ0FBQ3hCLE1BQWxCO0lBQ0EsSUFBTWtDLGVBQWUsR0FBR0QsR0FBRyxDQUFDaEMsWUFBSixDQUFpQixNQUFqQixDQUF4QjtJQUNBLElBQU1rQyxPQUFPLEdBQUdoQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUI4QixlQUF2QixDQUFoQixDQUpzRCxDQU10RDs7SUFDQSxJQUFNRSxPQUFPLEdBQUdILEdBQUcsQ0FBQ0QsVUFBSixDQUFlQSxVQUEvQjtJQUNBLElBQU1LLElBQUksR0FBR0QsT0FBTyxDQUFDNUIsZ0JBQVIsQ0FBeUIscUJBQXpCLENBQWI7O0lBRUEsSUFBSTZCLElBQUosRUFBVTtNQUNSQSxJQUFJLENBQUN4QyxPQUFMLENBQWEsVUFBQ29DLEdBQUQsRUFBUztRQUNwQkEsR0FBRyxDQUFDRCxVQUFKLENBQWUzQixTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxRQUFoQztNQUNELENBRkQ7SUFHRDs7SUFFRDBCLEdBQUcsQ0FBQ0QsVUFBSixDQUFlM0IsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0I7O0lBRUEsSUFBSTZCLE9BQUosRUFBYTtNQUNYLElBQU1HLFVBQVUsR0FBR0gsT0FBTyxDQUFDSCxVQUEzQjtNQUNBLElBQU1PLFFBQVEsR0FBR0QsVUFBVSxDQUFDOUIsZ0JBQVgsQ0FBNEIsV0FBNUIsQ0FBakI7O01BRUEsSUFBSStCLFFBQUosRUFBYztRQUNaQSxRQUFRLENBQUMxQyxPQUFULENBQWlCLFVBQUNzQyxPQUFELEVBQWE7VUFDNUJBLE9BQU8sQ0FBQzlCLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLFFBQXpCO1FBQ0QsQ0FGRDtNQUdEOztNQUNENEIsT0FBTyxDQUFDOUIsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsUUFBdEI7SUFDRDtFQUNGO0FBQ0YsQ0EvQkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvKiBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgKi9cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaChzY3JvbGxzcHkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBzY3JvbGxzcHkudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGxzcHktc2VjdGlvbicpXG5cbiAgICAgIGlmIChzY3JvbGxzcHkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNjcm9sbHNweS1mZWVkYmFjaz1cIiR7aWR9XCJdYCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNjcm9sbHNweS1mZWVkYmFjaz1cIiR7aWR9XCJdYCkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNjcm9sbHNweS1zZWN0aW9uXScpLmZvckVhY2goKHNjcm9sbHNweSkgPT4ge1xuICAgIG9ic2VydmVyLm9ic2VydmUoc2Nyb2xsc3B5KVxuICB9KVxufSlcbiIsImNsYXNzIENvbG9yU2NoZW1lIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMub3MgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yLXNjaGVtZS1vcycpIHx8ICdsaWdodCdcbiAgICB0aGlzLm1vZGUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yLXNjaGVtZS1tb2RlJykgfHwgJ29zJ1xuICAgIHRoaXMudGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yLXNjaGVtZS10aGVtZScpIHx8ICdsaWdodCdcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5kZXRlY3QoKVxuICAgIHRoaXMubGlzdGVuKClcbiAgfVxuXG4gIHN3aXRjaCAoKSB7XG4gICAgdGhpcy50aGVtZSA9IHRoaXMubW9kZSA9PT0gJ29zJyA/IHRoaXMub3MgOiB0aGlzLm1vZGVcbiAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnY29sb3Itc2NoZW1lJywgdGhpcy50aGVtZSlcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbG9yLXNjaGVtZS1vcycsIHRoaXMub3MpXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xvci1zY2hlbWUtbW9kZScsIHRoaXMubW9kZSlcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbG9yLXNjaGVtZS10aGVtZScsIHRoaXMudGhlbWUpXG4gIH1cblxuICBkZXRlY3QgKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIHtcbiAgICAgIHRoaXMub3MgPSAnZGFyaydcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcyA9ICdsaWdodCdcbiAgICB9XG4gICAgdGhpcy5zd2l0Y2goKVxuICB9XG5cbiAgbGlzdGVuICgpIHtcbiAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMub3MgPSBldmVudC5tYXRjaGVzID8gJ2RhcmsnIDogJ2xpZ2h0J1xuICAgICAgdGhpcy5zd2l0Y2goKVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpID09PSAndGhlbWUnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gZXZlbnQudGFyZ2V0XG4gICAgICAgIGNvbnN0IG1vZGUgPSB0b2dnbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJylcblxuICAgICAgICBpZiAobW9kZSkge1xuICAgICAgICAgIHRoaXMubW9kZSA9IG1vZGVcbiAgICAgICAgICB0aGlzLnN3aXRjaCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBuZXcgQ29sb3JTY2hlbWUoKVxufSlcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnKSA9PT0gJ2NvbGxhcHNlJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBjb2xsYXBzZVRvZ2dsZSA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gY29sbGFwc2VUb2dnbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXG4gICAgY29uc3QgY29sbGFwc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKVxuICAgIGNvbGxhcHNlLmNsYXNzTGlzdC50b2dnbGUoJ2luJylcbiAgfVxufSlcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBjb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScpXG5cbiAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJykgPT09ICdkcm9wZG93bicpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG9nZ2xlID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgZHJvcGRvd24gPSB0b2dnbGUucGFyZW50Tm9kZVxuXG4gICAgaWYgKGRyb3Bkb3duKSB7XG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJylcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZHJvcGRvd25zLmZvckVhY2goKHRvZ2dsZSkgPT4ge1xuICAgICAgY29uc3QgZHJvcGRvd24gPSB0b2dnbGUucGFyZW50Tm9kZVxuXG4gICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnKSA9PT0gJ3RhYicpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdGFiID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgdGFiUGFuZVNlbGVjdG9yID0gdGFiLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgY29uc3QgdGFiUGFuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFiUGFuZVNlbGVjdG9yKVxuXG4gICAgLy8gcmVzZXRcbiAgICBjb25zdCBuYXZUYWJzID0gdGFiLnBhcmVudE5vZGUucGFyZW50Tm9kZVxuICAgIGNvbnN0IHRhYnMgPSBuYXZUYWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpXG5cbiAgICBpZiAodGFicykge1xuICAgICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgdGFiLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGFiLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgIGlmICh0YWJQYW5lKSB7XG4gICAgICBjb25zdCB0YWJDb250ZW50ID0gdGFiUGFuZS5wYXJlbnROb2RlXG4gICAgICBjb25zdCB0YWJQYW5lcyA9IHRhYkNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1wYW5lJylcblxuICAgICAgaWYgKHRhYlBhbmVzKSB7XG4gICAgICAgIHRhYlBhbmVzLmZvckVhY2goKHRhYlBhbmUpID0+IHtcbiAgICAgICAgICB0YWJQYW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0YWJQYW5lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
