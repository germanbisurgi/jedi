(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Jedi"] = factory();
	else
		root["Jedi"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(5);

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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(6)["default"];

var assertThisInitialized = __webpack_require__(7);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/theme.js



var theme_Theme = /*#__PURE__*/function () {
  function Theme() {
    classCallCheck_default()(this, Theme);
  }

  createClass_default()(Theme, [{
    key: "addInputError",
    value:
    /**
     * Adds an error message to the specified editor container.
     */
    function addInputError(container, message) {
      var error = document.createElement('div');
      error.classList.add('jedi-error-message');
      error.textContent = message;
      container.appendChild(error);
    }
    /**
     * Removes any error message from the specified editor container.
     */

  }, {
    key: "removeInputError",
    value: function removeInputError(container) {
      var errors = container.querySelectorAll('.jedi-error-message');
      errors.forEach(function (error) {
        container.removeChild(error);
      });
    }
  }, {
    key: "getButton",
    value: function getButton(text) {
      var button = document.createElement('button');
      button.textContent = text;
      return button;
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return document.createElement('div');
    }
  }, {
    key: "getLabel",
    value: function getLabel(text) {
      var label = document.createElement('label');
      label.textContent = text;
      return label;
    }
  }, {
    key: "getInput",
    value: function getInput(type) {
      var input = document.createElement('input');
      input.setAttribute('type', type);
      return input;
    }
  }, {
    key: "getSelect",
    value: function getSelect(optionValues, optionsLabels) {
      var select = document.createElement('select');
      optionValues.forEach(function (value, index) {
        var option = document.createElement('option');
        option.setAttribute('value', value);
        option.textContent = optionsLabels[index];
        select.appendChild(option);
      });
      return select;
    }
  }]);

  return Theme;
}();

/* harmony default export */ var theme = (theme_Theme);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(3);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// CONCATENATED MODULE: ./src/editor.js



var editor_Editor = /*#__PURE__*/function () {
  function Editor(config) {
    classCallCheck_default()(this, Editor);

    this.jedi = config.jedi;
    this.schema = config.schema;
    this.value = config.value || undefined;
    this.path = config.path || 'root';
    this.parent = config.parent || null;
    this.container = null;
    this.childEditors = [];
    this.init();
  }
  /**
   * Starts the build pipeline of the editor
   */


  createClass_default()(Editor, [{
    key: "init",
    value: function init() {
      this.setContainer();
      this.build();
      this.setDefaultValue();
      this.showValidationErrors();
      this.register();
    }
  }, {
    key: "setContainer",
    value: function setContainer() {
      this.container = this.jedi.theme.getContainer();
      this.container.setAttribute('data-path', this.path);
      this.container.setAttribute('data-type', this.schema.type);
    }
    /**
     * build the editor's user interface
     */

  }, {
    key: "build",
    value: function build() {}
    /**
     * Adds this editor instance in the jedi.editors object
     */

  }, {
    key: "register",
    value: function register() {
      this.jedi.registerEditor(this);
    }
    /**
     * Removes this editor instance from the jedi.editors object
     */

  }, {
    key: "unregister",
    value: function unregister() {
      this.jedi.unregisterEditor(this);
    }
    /**
     * Sets a default value in the property "default" is set in the schema
     */

  }, {
    key: "setDefaultValue",
    value: function setDefaultValue() {
      var value;
      if (this.schema.type === 'boolean') value = false;
      if (this.schema.type === 'number') value = 0.0;
      if (this.schema.type === 'integer') value = 0;
      if (this.schema.type === 'string') value = '';
      if (this.schema.type === 'object') value = {};
      if (this.schema.type === 'array') value = [];

      if (typeof this.schema["default"] !== 'undefined') {
        value = this.schema["default"];
      }

      this.setValue(value, true);
    }
    /**
     * Returns the current value of the editor
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
    /**
     * Sanitize value
     */

  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return value;
    }
    /**
     * Sets the editor value and calls refreshUI right after. The onChange method
     * will be called if the new value is not an initial or default value and the
     * new value is different than the current value.
     */

  }, {
    key: "setValue",
    value: function setValue(newValue) {
      var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      newValue = this.sanitize(newValue);
      var currentValue = this.getValue();

      if (!initial && currentValue !== newValue) {
        this.onChange();
      }

      this.value = newValue;
      this.refreshUI();
    }
    /**
     * Refresh the UI of the editor to reflect it's value. This is necessary when
     * using setValue to set the value programmatically.
     */

  }, {
    key: "refreshUI",
    value: function refreshUI() {}
    /**
     * Shows validation messages in the editor container.
     */

  }, {
    key: "showValidationErrors",
    value: function showValidationErrors() {
      var _this = this;

      var errors = this.jedi.validator.validate(this.schema, this.getValue(), this.path);
      this.jedi.theme.removeInputError(this.container);
      errors.forEach(function (error) {
        _this.jedi.theme.addInputError(_this.container, error.message);
      });
    }
    /**
     * Fires when the value of the editor changes.
     */

  }, {
    key: "onChange",
    value: function onChange() {
      if (this.parent) {
        this.parent.onChange();
      }

      this.showValidationErrors();
    }
    /**
     * Destroys the editor, and every reference that it is attached to it.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.unregister();
    }
  }]);

  return Editor;
}();

/* harmony default export */ var editor = (editor_Editor);
// CONCATENATED MODULE: ./src/utils.js
var utils = {
  clone: function clone(thing) {
    return JSON.parse(JSON.stringify(thing));
  }
};
/* harmony default export */ var src_utils = (utils);
// CONCATENATED MODULE: ./src/editors/array.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var array_ArrayEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(ArrayEditor, _Editor);

  var _super = _createSuper(ArrayEditor);

  function ArrayEditor() {
    classCallCheck_default()(this, ArrayEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(ArrayEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      var label = this.jedi.theme.getLabel('array');
      this.container.appendChild(label);
      var addBtn = this.jedi.theme.getButton('add');
      this.container.appendChild(addBtn);
      addBtn.addEventListener('click', function () {
        _this.addItem();
      });
    }
  }, {
    key: "createItemEditor",
    value: function createItemEditor() {
      var _this2 = this;

      var itemEditor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: this.schema.items,
        path: this.path + '.' + this.childEditors.length,
        parent: this
      });
      var itemIndex = Number(itemEditor.path.split('.').pop());
      itemEditor.input.addEventListener('change', function () {
        var value = src_utils.clone(_this2.getValue());
        value[itemIndex] = src_utils.clone(itemEditor.getValue());

        _this2.setValue(value);
      });
      var deleteBtn = this.jedi.theme.getButton('delete');
      itemEditor.container.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', function () {
        var itemIndex = Number(itemEditor.path.split('.').pop());

        _this2.deleteItem(itemIndex);
      });

      if (this.childEditors.length !== 0) {
        var moveUpBtn = this.jedi.theme.getButton('move up');
        itemEditor.container.appendChild(moveUpBtn);
        moveUpBtn.addEventListener('click', function () {
          var toIndex = itemIndex - 1;

          _this2.move(itemIndex, toIndex);
        });
      }

      if (this.value.length - 1 !== itemIndex) {
        var moveDownBtn = this.jedi.theme.getButton('move down');
        itemEditor.container.appendChild(moveDownBtn);
        moveDownBtn.addEventListener('click', function () {
          var toIndex = itemIndex + 1;

          _this2.move(itemIndex, toIndex);
        });
      }

      return itemEditor;
    }
  }, {
    key: "move",
    value: function move(fromIndex, toIndex) {
      var value = src_utils.clone(this.getValue());
      var item = value[fromIndex];
      value.splice(fromIndex, 1);
      value.splice(toIndex, 0, item);
      this.setValue(value);
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var tempEditor = this.createItemEditor();
      var value = src_utils.clone(this.getValue());
      value.push(tempEditor.getValue());
      tempEditor.destroy();
      this.setValue(value);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(itemIndex) {
      if (window.confirm('Confirm to delete')) {
        var currentValue = src_utils.clone(this.getValue());
        var newValue = currentValue.filter(function (item, index) {
          return index !== itemIndex;
        });
        this.setValue(newValue);
      }
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this3 = this;

      this.childEditors.forEach(function (editor) {
        _this3.container.removeChild(editor.container);

        editor.destroy();
      });
      this.childEditors = [];
      this.getValue().forEach(function (value) {
        var itemEditor = _this3.createItemEditor();

        itemEditor.setValue(value, true);

        _this3.childEditors.push(itemEditor);
      });
      this.childEditors.forEach(function (editor) {
        _this3.container.appendChild(editor.container);
      });
    }
  }, {
    key: "showValidationErrors",
    value: function showValidationErrors() {}
  }]);

  return ArrayEditor;
}(editor);

/* harmony default export */ var array = (array_ArrayEditor);
// CONCATENATED MODULE: ./src/editors/boolean.js






function boolean_createSuper(Derived) { var hasNativeReflectConstruct = boolean_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var boolean_BooleanEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(BooleanEditor, _Editor);

  var _super = boolean_createSuper(BooleanEditor);

  function BooleanEditor() {
    classCallCheck_default()(this, BooleanEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanEditor, [{
    key: "sanitize",
    value: function sanitize(value) {
      return Boolean(value);
    }
  }]);

  return BooleanEditor;
}(editor);

/* harmony default export */ var editors_boolean = (boolean_BooleanEditor);
// CONCATENATED MODULE: ./src/editors/boolean-checkbox.js






function boolean_checkbox_createSuper(Derived) { var hasNativeReflectConstruct = boolean_checkbox_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_checkbox_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var boolean_checkbox_BooleanCheckbox = /*#__PURE__*/function (_BooleanEditor) {
  inherits_default()(BooleanCheckbox, _BooleanEditor);

  var _super = boolean_checkbox_createSuper(BooleanCheckbox);

  function BooleanCheckbox() {
    classCallCheck_default()(this, BooleanCheckbox);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanCheckbox, [{
    key: "build",
    value: function build() {
      var _this = this;

      var label = this.jedi.theme.getLabel(this.schema.title);
      this.container.appendChild(label);
      this.input = this.jedi.theme.getInput('checkbox');
      this.container.appendChild(this.input);
      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.checked);
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.checked = this.value;
    }
  }]);

  return BooleanCheckbox;
}(editors_boolean);

/* harmony default export */ var boolean_checkbox = (boolean_checkbox_BooleanCheckbox);
// CONCATENATED MODULE: ./src/editors/boolean-select.js






function boolean_select_createSuper(Derived) { var hasNativeReflectConstruct = boolean_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var boolean_select_BooleanSelect = /*#__PURE__*/function (_BooleanEditor) {
  inherits_default()(BooleanSelect, _BooleanEditor);

  var _super = boolean_select_createSuper(BooleanSelect);

  function BooleanSelect() {
    classCallCheck_default()(this, BooleanSelect);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanSelect, [{
    key: "build",
    value: function build() {
      var _this = this;

      var label = this.jedi.theme.getLabel(this.schema.title);
      this.container.appendChild(label);
      var optionValues = ['', '1'];
      var optionsLabels = ['false', 'true'];
      this.input = this.jedi.theme.getSelect(optionValues, optionsLabels);
      this.container.appendChild(this.input);
      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.value ? '1' : '';
    }
  }]);

  return BooleanSelect;
}(editors_boolean);

/* harmony default export */ var boolean_select = (boolean_select_BooleanSelect);
// CONCATENATED MODULE: ./src/editors/object.js






function object_createSuper(Derived) { var hasNativeReflectConstruct = object_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function object_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var object_ObjectEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(ObjectEditor, _Editor);

  var _super = object_createSuper(ObjectEditor);

  function ObjectEditor() {
    classCallCheck_default()(this, ObjectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(ObjectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      var label = this.jedi.theme.getLabel('object');
      this.container.appendChild(label);
      Object.keys(this.schema.properties).forEach(function (prop) {
        var schema = _this.schema.properties[prop];

        var editor = _this.jedi.createEditor({
          jedi: _this.jedi,
          schema: schema,
          path: _this.path + '.' + prop,
          parent: _this
        });

        _this.container.appendChild(editor.container);

        _this.childEditors[prop] = editor;
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this2 = this;

      this.value = {};
      Object.keys(this.childEditors).forEach(function (prop) {
        _this2.value[prop] = _this2.childEditors[prop].getValue();
      });
      return this.value;
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {}
  }, {
    key: "showValidationErrors",
    value: function showValidationErrors() {}
  }]);

  return ObjectEditor;
}(editor);

/* harmony default export */ var object = (object_ObjectEditor);
// CONCATENATED MODULE: ./src/editors/string.js






function string_createSuper(Derived) { var hasNativeReflectConstruct = string_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function string_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var string_StringEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(StringEditor, _Editor);

  var _super = string_createSuper(StringEditor);

  function StringEditor() {
    classCallCheck_default()(this, StringEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      var label = this.jedi.theme.getLabel(this.schema.title);
      var inputTypes = ['color', 'text'];
      var inputType = inputTypes.includes(this.schema.format) ? this.schema.format : 'text';
      this.input = this.jedi.theme.getInput(inputType);
      this.container.appendChild(label);
      this.container.appendChild(this.input);
      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return String(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.getValue();
    }
  }]);

  return StringEditor;
}(editor);

/* harmony default export */ var string = (string_StringEditor);
// CONCATENATED MODULE: ./src/resolver.js



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var resolver_Resolver = /*#__PURE__*/function () {
  function Resolver() {
    classCallCheck_default()(this, Resolver);

    /**
     * Functions that return an editor class if the condition pass
     */
    this.resolvers = [function (schema) {
      if (schema.type === 'boolean' && schema.format === 'checkbox') {
        return boolean_checkbox;
      }
    }, function (schema) {
      if (schema.type === 'boolean' && schema.format === 'select') {
        return boolean_select;
      }
    }, function (schema) {
      if (schema.type === 'boolean') {
        return boolean_checkbox;
      }
    }, function (schema) {
      if (schema.type === 'object') {
        return object;
      }
    }, function (schema) {
      if (schema.type === 'array') {
        return array;
      }
    }, function (schema) {
      if (schema.type === 'string') {
        return string;
      }
    }];
  }
  /**
   * Adds a resolver function
   */


  createClass_default()(Resolver, [{
    key: "addResolver",
    value: function addResolver(resolver) {
      this.resolvers.unshift(resolver);
    }
    /**
     * returns the first editor class that matches the passed schema.
     */

  }, {
    key: "resolve",
    value: function resolve(schema) {
      var _iterator = _createForOfIteratorHelper(this.resolvers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var resolver = _step.value;
          var editorClass = resolver(schema);

          if (typeof editorClass !== 'undefined') {
            return editorClass;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Resolver;
}();

/* harmony default export */ var resolver = (resolver_Resolver);
// CONCATENATED MODULE: ./src/validator.js



function validator_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = validator_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function validator_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return validator_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return validator_arrayLikeToArray(o, minLen); }

function validator_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var validator_Validator = /*#__PURE__*/function () {
  function Validator() {
    classCallCheck_default()(this, Validator);

    /**
     * Functions that return an error object if the the validation condition is not met.
     */
    this.validators = [function (schema, value, path) {
      if (JSON.stringify(schema["const"]) && JSON.stringify(schema["const"] !== value)) {
        return {
          message: 'error const',
          path: path
        };
      }

      return false;
    }];
  }
  /**
   * Adds a validator function
   */


  createClass_default()(Validator, [{
    key: "addValidator",
    value: function addValidator(validator) {
      this.validators.unshift(validator);
    }
    /**
     * returns the first editor class that matches the passed schema.
     */

  }, {
    key: "validate",
    value: function validate(schema, value, path) {
      var errors = [];

      var _iterator = validator_createForOfIteratorHelper(this.validators),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var validator = _step.value;
          var error = validator(schema, value, path);

          if (error) {
            errors.push(error);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return errors;
    }
  }]);

  return Validator;
}();

/* harmony default export */ var validator = (validator_Validator);
// CONCATENATED MODULE: ./src/index.js






var src_Jedi = /*#__PURE__*/function () {
  function Jedi(config) {
    classCallCheck_default()(this, Jedi);

    this.theme = new theme();
    this.resolver = new resolver();
    this.validator = new validator();
    this.container = config.container;
    this.schema = config.schema;
    this.root = null;
    this.editors = {};
    this.init();
  }

  createClass_default()(Jedi, [{
    key: "init",
    value: function init() {
      this.loadEditors();
    }
    /**
     * Adds an editor instance in the editors object
     */

  }, {
    key: "registerEditor",
    value: function registerEditor(editor) {
      this.editors[editor.path] = editor;
    }
    /**
     * Removes an editor instance from the editors object
     */

  }, {
    key: "unregisterEditor",
    value: function unregisterEditor(editor) {
      this.editors[editor.path] = null;
      delete this.editors[editor.path]; // todo delete?
    }
  }, {
    key: "loadEditors",
    value: function loadEditors() {
      this.root = this.createEditor({
        jedi: this,
        schema: this.schema
      });
      this.container.appendChild(this.root.container);
      this.container.classList.add('jedi-loaded');
    }
    /**
     * Creates an editor instance based on the passed schema and config
     */

  }, {
    key: "createEditor",
    value: function createEditor(config) {
      // todo expand defs
      return new (this.resolver.resolve(config.schema))(config);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.root.getValue();
    }
  }, {
    key: "getEditor",
    value: function getEditor(path) {
      return this.editors[path];
    }
  }]);

  return Jedi;
}();

/* harmony default export */ var src = __webpack_exports__["default"] = (src_Jedi);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3Jlc29sdmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGhlbWUiLCJjb250YWluZXIiLCJtZXNzYWdlIiwiZXJyb3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiZXJyb3JzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyZW1vdmVDaGlsZCIsInRleHQiLCJidXR0b24iLCJsYWJlbCIsInR5cGUiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsIm9wdGlvblZhbHVlcyIsIm9wdGlvbnNMYWJlbHMiLCJzZWxlY3QiLCJ2YWx1ZSIsImluZGV4Iiwib3B0aW9uIiwiRWRpdG9yIiwiY29uZmlnIiwiamVkaSIsInNjaGVtYSIsInVuZGVmaW5lZCIsInBhdGgiLCJwYXJlbnQiLCJjaGlsZEVkaXRvcnMiLCJpbml0Iiwic2V0Q29udGFpbmVyIiwiYnVpbGQiLCJzZXREZWZhdWx0VmFsdWUiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsInJlZ2lzdGVyIiwidGhlbWUiLCJnZXRDb250YWluZXIiLCJyZWdpc3RlckVkaXRvciIsInVucmVnaXN0ZXJFZGl0b3IiLCJzZXRWYWx1ZSIsIm5ld1ZhbHVlIiwiaW5pdGlhbCIsInNhbml0aXplIiwiY3VycmVudFZhbHVlIiwiZ2V0VmFsdWUiLCJvbkNoYW5nZSIsInJlZnJlc2hVSSIsInZhbGlkYXRvciIsInZhbGlkYXRlIiwicmVtb3ZlSW5wdXRFcnJvciIsImFkZElucHV0RXJyb3IiLCJ1bnJlZ2lzdGVyIiwidXRpbHMiLCJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiQXJyYXlFZGl0b3IiLCJnZXRMYWJlbCIsImFkZEJ0biIsImdldEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRJdGVtIiwiaXRlbUVkaXRvciIsImNyZWF0ZUVkaXRvciIsIml0ZW1zIiwibGVuZ3RoIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwic3BsaXQiLCJwb3AiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsImZyb21JbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY3JlYXRlSXRlbUVkaXRvciIsInB1c2giLCJkZXN0cm95Iiwid2luZG93IiwiY29uZmlybSIsImZpbHRlciIsImVkaXRvciIsIkJvb2xlYW5FZGl0b3IiLCJCb29sZWFuIiwiQm9vbGVhbkNoZWNrYm94IiwidGl0bGUiLCJnZXRJbnB1dCIsImNoZWNrZWQiLCJCb29sZWFuU2VsZWN0IiwiZ2V0U2VsZWN0IiwiT2JqZWN0RWRpdG9yIiwiT2JqZWN0Iiwia2V5cyIsInByb3BlcnRpZXMiLCJwcm9wIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsImlucHV0VHlwZSIsImluY2x1ZGVzIiwiZm9ybWF0IiwiU3RyaW5nIiwiUmVzb2x2ZXIiLCJyZXNvbHZlcnMiLCJyZXNvbHZlciIsInVuc2hpZnQiLCJlZGl0b3JDbGFzcyIsIlZhbGlkYXRvciIsInZhbGlkYXRvcnMiLCJKZWRpIiwicm9vdCIsImVkaXRvcnMiLCJsb2FkRWRpdG9ycyIsInJlc29sdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QXNCakcsTUFBTSxDQUFDRSxNQUE3QixDQUFMLEVBQTJDRixNQUEzQyxDQUFQO0FBQ0Q7OztXQUVELG9CQUFZO0FBQ1YsYUFBTyxLQUFLOEYsSUFBTCxDQUFVeEUsUUFBVixFQUFQO0FBQ0Q7OztXQUVELG1CQUFXbEIsSUFBWCxFQUFpQjtBQUNmLGFBQU8sS0FBSzJGLE9BQUwsQ0FBYTNGLElBQWIsQ0FBUDtBQUNEOzs7Ozs7QUFHWXlGLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJjbGFzcyBUaGVtZSB7XG4gIC8qKlxuICAgKiBBZGRzIGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIHNwZWNpZmllZCBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgYWRkSW5wdXRFcnJvciAoY29udGFpbmVyLCBtZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW55IGVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICByZW1vdmVJbnB1dEVycm9yIChjb250YWluZXIpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmplZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIGdldEJ1dHRvbiAodGV4dCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMYWJlbCAodGV4dCkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0SW5wdXQgKHR5cGUpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0U2VsZWN0IChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIG9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiIsImNsYXNzIEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgJ3Jvb3QnXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLmNoaWxkRWRpdG9ycyA9IFtdXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGJ1aWxkIHBpcGVsaW5lIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5yZWdpc3RlcigpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkIHRoZSBlZGl0b3IncyB1c2VyIGludGVyZmFjZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGRlZmF1bHQgdmFsdWUgaW4gdGhlIHByb3BlcnR5IFwiZGVmYXVsdFwiIGlzIHNldCBpbiB0aGUgc2NoZW1hXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5kZWZhdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIHZhbHVlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgdmFsdWUgYW5kIGNhbGxzIHJlZnJlc2hVSSByaWdodCBhZnRlci4gVGhlIG9uQ2hhbmdlIG1ldGhvZFxuICAgKiB3aWxsIGJlIGNhbGxlZCBpZiB0aGUgbmV3IHZhbHVlIGlzIG5vdCBhbiBpbml0aWFsIG9yIGRlZmF1bHQgdmFsdWUgYW5kIHRoZVxuICAgKiBuZXcgdmFsdWUgaXMgZGlmZmVyZW50IHRoYW4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIGluaXRpYWwgPSBmYWxzZSkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaW5pdGlhbCAmJiBjdXJyZW50VmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKClcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgVUkgb2YgdGhlIGVkaXRvciB0byByZWZsZWN0IGl0J3MgdmFsdWUuIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW5cbiAgICogdXNpbmcgc2V0VmFsdWUgdG8gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEsIHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5wYXRoKVxuICAgIHRoaXMuamVkaS50aGVtZS5yZW1vdmVJbnB1dEVycm9yKHRoaXMuY29udGFpbmVyKVxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5qZWRpLnRoZW1lLmFkZElucHV0RXJyb3IodGhpcy5jb250YWluZXIsIGVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgZWRpdG9yIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZSAoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudC5vbkNoYW5nZSgpXG4gICAgfVxuICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3IsIGFuZCBldmVyeSByZWZlcmVuY2UgdGhhdCBpdCBpcyBhdHRhY2hlZCB0byBpdC5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMudW5yZWdpc3RlcigpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJjb25zdCB1dGlscyA9IHtcbiAgY2xvbmU6ICh0aGluZykgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoJ2FycmF5JylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb25zdCBhZGRCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdhZGQnKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtRWRpdG9yICgpIHtcbiAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hLml0ZW1zLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcblxuICAgIGl0ZW1FZGl0b3IuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICB2YWx1ZVtpdGVtSW5kZXhdID0gdXRpbHMuY2xvbmUoaXRlbUVkaXRvci5nZXRWYWx1ZSgpKVxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignZGVsZXRlJylcbiAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IucGF0aC5zcGxpdCgnLicpLnBvcCgpKVxuICAgICAgdGhpcy5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignbW92ZSB1cCcpXG4gICAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdtb3ZlIGRvd24nKVxuICAgICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1FZGl0b3JcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZScpKSB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuXG4gICAgdGhpcy5nZXRWYWx1ZSgpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtRWRpdG9yKClcbiAgICAgIGl0ZW1FZGl0b3Iuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGl0ZW1FZGl0b3IpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICB9KVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkNoZWNrYm94IGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh0aGlzLnNjaGVtYS50aXRsZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KCdjaGVja2JveCcpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5DaGVja2JveFxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuU2VsZWN0IGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh0aGlzLnNjaGVtYS50aXRsZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSBbJycsICcxJ11cbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlID8gJzEnIDogJydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKCdvYmplY3QnKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcF1cbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBwcm9wLFxuICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnNbcHJvcF0gPSBlZGl0b3JcbiAgICB9KVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHRoaXMudmFsdWUgPSB7fVxuICAgIE9iamVjdC5rZXlzKHRoaXMuY2hpbGRFZGl0b3JzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgdGhpcy52YWx1ZVtwcm9wXSA9IHRoaXMuY2hpbGRFZGl0b3JzW3Byb3BdLmdldFZhbHVlKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7fVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh0aGlzLnNjaGVtYS50aXRsZSlcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydjb2xvcicsICd0ZXh0J11cbiAgICBjb25zdCBpbnB1dFR5cGUgPSBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiAndGV4dCdcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KGlucHV0VHlwZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkNoZWNrYm94IGZyb20gJy4vZWRpdG9ycy9ib29sZWFuLWNoZWNrYm94J1xuaW1wb3J0IEJvb2xlYW5TZWxlY3QgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4tc2VsZWN0J1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nJ1xuXG5jbGFzcyBSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZWRpdG9yIGNsYXNzIGlmIHRoZSBjb25kaXRpb24gcGFzc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x2ZXJzID0gW1xuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJyAmJiBzY2hlbWEuZm9ybWF0ID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5DaGVja2JveFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJyAmJiBzY2hlbWEuZm9ybWF0ID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuU2VsZWN0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5DaGVja2JveFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICByZXR1cm4gQXJyYXlFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcmVzb2x2ZXIgZnVuY3Rpb25cbiAgICovXG4gIGFkZFJlc29sdmVyIChyZXNvbHZlcikge1xuICAgIHRoaXMucmVzb2x2ZXJzLnVuc2hpZnQocmVzb2x2ZXIpXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHJlc29sdmUgKHNjaGVtYSkge1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgIGNvbnN0IGVkaXRvckNsYXNzID0gcmVzb2x2ZXIoc2NoZW1hKVxuICAgICAgaWYgKHR5cGVvZiBlZGl0b3JDbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvckNsYXNzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc29sdmVyXG4iLCJjbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVycm9yIG9iamVjdCBpZiB0aGUgdGhlIHZhbGlkYXRpb24gY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0b3JzID0gW1xuICAgICAgKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCkgJiYgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0ICE9PSB2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ2Vycm9yIGNvbnN0JyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB2YWxpZGF0b3IgZnVuY3Rpb25cbiAgICovXG4gIGFkZFZhbGlkYXRvciAodmFsaWRhdG9yKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzLnVuc2hpZnQodmFsaWRhdG9yKVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICB2YWxpZGF0ZSAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG4gICAgZm9yIChjb25zdCB2YWxpZGF0b3Igb2YgdGhpcy52YWxpZGF0b3JzKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHZhbGlkYXRvcihzY2hlbWEsIHZhbHVlLCBwYXRoKVxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcbmltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRvcidcblxuY2xhc3MgSmVkaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKClcbiAgICB0aGlzLnJlc29sdmVyID0gbmV3IFJlc29sdmVyKClcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lclxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLmVkaXRvcnMgPSB7fVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLmxvYWRFZGl0b3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF1cbiAgICAvLyB0b2RvIGRlbGV0ZT9cbiAgfVxuXG4gIGxvYWRFZGl0b3JzICgpIHtcbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLWxvYWRlZCcpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBlZGl0b3IgaW5zdGFuY2UgYmFzZWQgb24gdGhlIHBhc3NlZCBzY2hlbWEgYW5kIGNvbmZpZ1xuICAgKi9cbiAgY3JlYXRlRWRpdG9yIChjb25maWcpIHtcbiAgICAvLyB0b2RvIGV4cGFuZCBkZWZzXG4gICAgcmV0dXJuIG5ldyAodGhpcy5yZXNvbHZlci5yZXNvbHZlKGNvbmZpZy5zY2hlbWEpKShjb25maWcpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICBnZXRFZGl0b3IgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JzW3BhdGhdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==