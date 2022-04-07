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

var setPrototypeOf = __webpack_require__(6);

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

var _typeof = __webpack_require__(5)["default"];

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
/* 6 */
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
    key: "setAttributes",
    value: function setAttributes(element) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Object.keys(attributes).forEach(function (key) {
        element.setAttribute(key, attributes[key]);
      });
    }
    /**
     * Adds an error message to the specified editor container.
     */

  }, {
    key: "addInputError",
    value: function addInputError(container, message) {
      var error = document.createElement('p');
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
      var path = container.getAttribute('data-path');
      var selector = '[data-path="' + path + '"] > .jedi-error-message';
      var errors = container.querySelectorAll(selector);
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
    value: function getLabel(labelText) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var label = document.createElement('label');
      label.textContent = labelText;
      this.setAttributes(label, attributes);
      return label;
    }
  }, {
    key: "getInput",
    value: function getInput() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var input = document.createElement('input');
      this.setAttributes(input, attributes);
      return input;
    }
  }, {
    key: "getRadioGroup",
    value: function getRadioGroup(optionValues, optionsLabels, radioGroupName) {
      var _this = this;

      var radioGroup = this.getContainer();
      optionValues.forEach(function (value, index) {
        var labelText = optionsLabels[index];

        var label = _this.getLabel(labelText, {
          "for": radioGroupName + '[' + value + ']'
        });

        var radio = _this.getInput({
          type: 'radio',
          value: value,
          id: radioGroupName + '[' + value + ']',
          name: radioGroupName
        });

        radio.addEventListener('change', function () {
          console.log('radio change');
        });
        radioGroup.appendChild(label);
        radioGroup.appendChild(radio);
      });
      return radioGroup;
    }
  }, {
    key: "getSelect",
    value: function getSelect(optionValues, optionsLabels, selectId) {
      var select = document.createElement('select');
      select.setAttribute('id', selectId);
      optionValues.forEach(function (value, index) {
        var option = document.createElement('option');
        option.setAttribute('value', value);
        option.textContent = optionsLabels[index];
        select.appendChild(option);
      });
      return select;
    }
  }, {
    key: "getOutput",
    value: function getOutput() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var output = document.createElement('output');
      this.setAttributes(output, attributes);
      return output;
    }
  }]);

  return Theme;
}();

/* harmony default export */ var theme = (theme_Theme);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(5);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/utils.js




var utils_Utils = /*#__PURE__*/function () {
  function Utils() {
    classCallCheck_default()(this, Utils);
  }

  createClass_default()(Utils, [{
    key: "clone",
    value: function clone(thing) {
      return JSON.parse(JSON.stringify(thing));
    }
  }, {
    key: "isSet",
    value: function isSet(value) {
      return typeof value !== 'undefined';
    }
  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return typeof value === 'number';
    }
  }, {
    key: "isInteger",
    value: function isInteger(value) {
      return this.isNumber(value) && value === Math.floor(value);
    }
  }, {
    key: "isString",
    value: function isString(value) {
      return typeof value === 'string';
    }
  }, {
    key: "isBoolean",
    value: function isBoolean(value) {
      return typeof value === 'boolean';
    }
  }, {
    key: "isArray",
    value: function isArray(value) {
      return Array.isArray(value);
    }
  }, {
    key: "isObject",
    value: function isObject(value) {
      return !this.isNull(value) && !this.isArray(value) && typeof_default()(value) === 'object';
    }
  }, {
    key: "isNull",
    value: function isNull(value) {
      return value === null;
    }
  }]);

  return Utils;
}();

/* harmony default export */ var utils = (new utils_Utils());
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
    key: "getKey",
    value: function getKey() {
      return this.path.split('.').pop();
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
     * If schema.default is not difen, sets an initial value based on it's type.
     * If enum is defined and schema.default is not defined set the first item of
     * the enum als the default value.
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
      var defaulIsDefined = utils.isSet(this.schema["default"]);

      if (defaulIsDefined) {
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
      this.value = newValue;

      if (!initial && currentValue !== newValue) {
        this.onChange();
      }

      this.refreshUI();
      this.showValidationErrors();
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

      // label
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText);
      this.container.appendChild(label); // addBtn

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
      var itemIndex = Number(itemEditor.getKey());

      if (itemEditor.input) {
        itemEditor.input.addEventListener('change', function () {
          var value = utils.clone(_this2.getValue());
          value[itemIndex] = utils.clone(itemEditor.getValue());

          _this2.setValue(value);
        });
      }

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
      var value = utils.clone(this.getValue());
      var item = value[fromIndex];
      value.splice(fromIndex, 1);
      value.splice(toIndex, 0, item);
      this.setValue(value);
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var tempEditor = this.createItemEditor();
      var value = utils.clone(this.getValue());
      value.push(tempEditor.getValue());
      tempEditor.destroy();
      this.setValue(value);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(itemIndex) {
      if (window.confirm('Confirm to delete')) {
        var currentValue = utils.clone(this.getValue());
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
  }]);

  return ArrayEditor;
}(editor);

/* harmony default export */ var editors_array = (array_ArrayEditor);
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
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      this.input = this.jedi.theme.getInput({
        type: 'checkbox',
        id: this.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.checked);
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return Boolean(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.checked = this.value;
    }
  }]);

  return BooleanEditor;
}(editor);

/* harmony default export */ var editors_boolean = (boolean_BooleanEditor);
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

      // label
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText);
      this.container.appendChild(label); // child editors

      Object.keys(this.schema.properties).forEach(function (prop) {
        var schema = _this.schema.properties[prop];

        var editor = _this.jedi.createEditor({
          jedi: _this.jedi,
          schema: schema,
          path: _this.path + '.' + prop,
          parent: _this
        });

        _this.container.appendChild(editor.container);

        _this.childEditors.push(editor);
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this2 = this;

      this.value = {};
      this.childEditors.forEach(function (childEditor) {
        _this2.value[childEditor.getKey()] = childEditor.getValue();
      });
      return this.value;
    }
  }]);

  return ObjectEditor;
}(editor);

/* harmony default export */ var editors_object = (object_ObjectEditor);
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

      // label
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var inputTypes = ['color', 'datetime-local', 'email', 'month', 'search', 'tel', 'text', 'time', 'url', 'week'];
      this.input = this.jedi.theme.getInput({
        type: inputTypes.includes(this.schema.format) ? this.schema.format : 'text',
        id: this.path
      });
      this.container.appendChild(this.input); // events

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

/* harmony default export */ var editors_string = (string_StringEditor);
// CONCATENATED MODULE: ./src/editors/string-enum-select.js






function string_enum_select_createSuper(Derived) { var hasNativeReflectConstruct = string_enum_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function string_enum_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var string_enum_select_StringEnumSelectEditor = /*#__PURE__*/function (_StringEditor) {
  inherits_default()(StringEnumSelectEditor, _StringEditor);

  var _super = string_enum_select_createSuper(StringEnumSelectEditor);

  function StringEnumSelectEditor() {
    classCallCheck_default()(this, StringEnumSelectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = this.schema["enum"];
      var optionsLabels = this.schema.enumTitles || this.schema["enum"];
      this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, this.path);
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }]);

  return StringEnumSelectEditor;
}(editors_string);

/* harmony default export */ var string_enum_select = (string_enum_select_StringEnumSelectEditor);
// CONCATENATED MODULE: ./src/editors/string-enum-radio.js






function string_enum_radio_createSuper(Derived) { var hasNativeReflectConstruct = string_enum_radio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function string_enum_radio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var string_enum_radio_StringEnumRadioEditor = /*#__PURE__*/function (_StringEditor) {
  inherits_default()(StringEnumRadioEditor, _StringEditor);

  var _super = string_enum_radio_createSuper(StringEnumRadioEditor);

  function StringEnumRadioEditor() {
    classCallCheck_default()(this, StringEnumRadioEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = this.schema["enum"];
      var optionsLabels = this.schema.enumTitles || this.schema["enum"];
      var radioGroupName = this.path;
      var radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName);
      this.container.appendChild(radioGroup); // events

      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      radioInputs.forEach(function (radioInput) {
        radioInput.addEventListener('change', function () {
          _this.setValue(radioInput.value);
        });
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var radio = this.container.querySelector('[value="' + this.getValue() + '"]');

      if (radio) {
        radio.setAttribute('checked', 'checked');
      }
    }
  }]);

  return StringEnumRadioEditor;
}(editors_string);

/* harmony default export */ var string_enum_radio = (string_enum_radio_StringEnumRadioEditor);
// CONCATENATED MODULE: ./src/editors/number.js






function number_createSuper(Derived) { var hasNativeReflectConstruct = number_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function number_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var number_NumberEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(NumberEditor, _Editor);

  var _super = number_createSuper(NumberEditor);

  function NumberEditor() {
    classCallCheck_default()(this, NumberEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      this.input = this.jedi.theme.getInput({
        type: 'number',
        id: this.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return Number(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.getValue();
    }
  }]);

  return NumberEditor;
}(editor);

/* harmony default export */ var editors_number = (number_NumberEditor);
// CONCATENATED MODULE: ./src/editors/number-enum-select.js






function number_enum_select_createSuper(Derived) { var hasNativeReflectConstruct = number_enum_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function number_enum_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var number_enum_select_NumberEnumSelectEditor = /*#__PURE__*/function (_NumberEditor) {
  inherits_default()(NumberEnumSelectEditor, _NumberEditor);

  var _super = number_enum_select_createSuper(NumberEnumSelectEditor);

  function NumberEnumSelectEditor() {
    classCallCheck_default()(this, NumberEnumSelectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = this.schema["enum"];
      var optionsLabels = this.schema["enum"];
      this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, this.path);
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }]);

  return NumberEnumSelectEditor;
}(editors_number);

/* harmony default export */ var number_enum_select = (number_enum_select_NumberEnumSelectEditor);
// CONCATENATED MODULE: ./src/editors/number-enum-radio.js






function number_enum_radio_createSuper(Derived) { var hasNativeReflectConstruct = number_enum_radio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function number_enum_radio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var number_enum_radio_NumberEnumRadioEditor = /*#__PURE__*/function (_NumberEditor) {
  inherits_default()(NumberEnumRadioEditor, _NumberEditor);

  var _super = number_enum_radio_createSuper(NumberEnumRadioEditor);

  function NumberEnumRadioEditor() {
    classCallCheck_default()(this, NumberEnumRadioEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = this.schema["enum"];
      var optionsLabels = this.schema.enumTitles || this.schema["enum"];
      var radioGroupName = this.path;
      var radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName);
      this.container.appendChild(radioGroup); // events

      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      radioInputs.forEach(function (radioInput) {
        radioInput.addEventListener('change', function () {
          _this.setValue(radioInput.value);
        });
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var radio = this.container.querySelector('[value="' + this.getValue() + '"]');

      if (radio) {
        radio.setAttribute('checked', 'checked');
      }
    }
  }]);

  return NumberEnumRadioEditor;
}(editors_number);

/* harmony default export */ var number_enum_radio = (number_enum_radio_NumberEnumRadioEditor);
// CONCATENATED MODULE: ./src/editors/null.js






function null_createSuper(Derived) { var hasNativeReflectConstruct = null_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function null_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var null_NullEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(NullEditor, _Editor);

  var _super = null_createSuper(NullEditor);

  function NullEditor() {
    classCallCheck_default()(this, NullEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NullEditor, [{
    key: "sanitize",
    value: function sanitize(value) {
      return null;
    }
  }]);

  return NullEditor;
}(editor);

/* harmony default export */ var editors_null = (null_NullEditor);
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
      if (schema.type === 'boolean') {
        return editors_boolean;
      }
    }, function (schema) {
      if (schema.type === 'object') {
        return editors_object;
      }
    }, function (schema) {
      if (schema.type === 'array') {
        return editors_array;
      }
    }, function (schema) {
      var _enum = schema["enum"];
      var hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum);
      var format = schema.format;
      var hasFormatRadio = utils.isSet(format) && utils.isString(format) && format === 'radio';

      if (schema.type === 'string' && hasEnumConstrain && hasFormatRadio) {
        return string_enum_radio;
      }
    }, function (schema) {
      var _enum = schema["enum"];
      var hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum);

      if (schema.type === 'string' && hasEnumConstrain) {
        return string_enum_select;
      }
    }, function (schema) {
      if (schema.type === 'string') {
        return editors_string;
      }
    }, function (schema) {
      var isNumericType = schema.type === 'number' || schema.type === 'integer';
      var _enum = schema["enum"];
      var hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum);
      var format = schema.format;
      var hasFormatRadio = utils.isSet(format) && utils.isString(format) && format === 'radio';

      if (isNumericType && hasEnumConstrain && hasFormatRadio) {
        return number_enum_radio;
      }
    }, function (schema) {
      var isNumericType = schema.type === 'number' || schema.type === 'integer';
      var _enum = schema["enum"];
      var hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum);

      if (isNumericType && hasEnumConstrain) {
        return number_enum_select;
      }
    }, function (schema) {
      var isNumericType = schema.type === 'number' || schema.type === 'integer';

      if (isNumericType) {
        return editors_number;
      }
    }, function (schema) {
      if (schema.type === 'null') {
        return editors_null;
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

          if (utils.isSet(editorClass)) {
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

/* harmony default export */ var src_resolver = (resolver_Resolver);
// CONCATENATED MODULE: ./src/validator.js




var validator_Validator = /*#__PURE__*/function () {
  function Validator() {
    classCallCheck_default()(this, Validator);

    /**
     * Functions that return an error object if the the validation condition is not met.
     */
    this.validators = {
      type: function type(schema, value, path) {
        var types = {
          string: function string(value) {
            return utils.isString(value);
          },
          number: function number(value) {
            return utils.isNumber(value);
          },
          integer: function integer(value) {
            return utils.isInteger(value);
          },
          "boolean": function boolean(value) {
            return utils.isBoolean(value);
          },
          array: function array(value) {
            return utils.isArray(value);
          },
          object: function object(value) {
            return utils.isObject(value);
          },
          "null": function _null(value) {
            return utils.isNull(value);
          }
        };
        var valid = types[schema.type](value);

        if (!valid) {
          return {
            message: 'Must be of type ' + schema.type,
            path: path
          };
        }

        return false;
      },
      uniqueItems: function uniqueItems(schema, value, path) {
        var isArrayType = schema.type === 'array';
        if (!isArrayType) return;
        var uniqueItems = schema.uniqueItems;
        var hasUniqueItemsConstrain = utils.isSet(uniqueItems) && utils.isBoolean(uniqueItems);
        if (!hasUniqueItemsConstrain) return;
        var seen = {};
        var hasDuplicatedItems = false;

        for (var i = 0; i < value.length; i++) {
          var item = JSON.stringify(value[i]);

          if (seen[item]) {
            hasDuplicatedItems = true;
            break;
          }

          seen[item] = true;
        }

        var invalid = hasUniqueItemsConstrain && hasDuplicatedItems;

        if (invalid) {
          return {
            message: 'Must have unique items',
            path: path
          };
        }

        return false;
      },
      minItems: function minItems(schema, value, path) {
        var isArrayType = schema.type === 'array';
        if (!isArrayType) return;
        var minItems = schema.minItems;
        var hasMinItemsConstrain = utils.isSet(minItems) && utils.isNumber(minItems);
        if (!hasMinItemsConstrain) return;
        var invalid = hasMinItemsConstrain && value.length < minItems;

        if (invalid) {
          return {
            message: 'Must have at least ' + minItems + ' items',
            path: path
          };
        }

        return false;
      },
      maxItems: function maxItems(schema, value, path) {
        var isArrayType = schema.type === 'array';
        if (!isArrayType) return;
        var maxItems = schema.maxItems;
        var hasMaxItemsConstrain = utils.isSet(maxItems) && utils.isNumber(maxItems);
        if (!hasMaxItemsConstrain) return;
        var invalid = hasMaxItemsConstrain && value.length > maxItems;

        if (invalid) {
          return {
            message: 'Must have at most ' + maxItems + ' items',
            path: path
          };
        }

        return false;
      },
      minLength: function minLength(schema, value, path) {
        var isStringType = schema.type === 'string';
        if (!isStringType) return;
        var minLength = schema.minLength;
        var hasMinLengthConstrain = utils.isSet(minLength) && utils.isNumber(minLength);
        if (!hasMinLengthConstrain) return;
        var invalid = hasMinLengthConstrain && value.length < minLength;

        if (invalid) {
          return {
            message: 'Must be at least ' + minLength + ' characters long',
            path: path
          };
        }

        return false;
      },
      maxLength: function maxLength(schema, value, path) {
        var isStringType = schema.type === 'string';
        if (!isStringType) return;
        var maxLength = schema.maxLength;
        var hasMaxLengthConstrain = utils.isSet(maxLength) && utils.isNumber(maxLength);
        if (!hasMaxLengthConstrain) return;
        var invalid = hasMaxLengthConstrain && value.length > maxLength;

        if (invalid) {
          return {
            message: 'Must be at most ' + maxLength + ' characters long',
            path: path
          };
        }

        return false;
      },
      pattern: function pattern(schema, value, path) {
        var isStringType = schema.type === 'string';
        if (!isStringType) return;
        var pattern = schema.pattern;
        var hasPatternConstrain = utils.isSet(pattern) && utils.isString(pattern);
        if (!hasPatternConstrain) return;
        var regexp = new RegExp(pattern);
        var matchPattern = regexp.test(value);
        var invalid = hasPatternConstrain && !matchPattern;

        if (invalid) {
          return {
            message: 'Must be the pattern: ' + pattern,
            path: path
          };
        }

        return false;
      },
      minimum: function minimum(schema, value, path) {
        var isNumericType = schema.type === 'number' || schema.type === 'integer';
        if (!isNumericType) return;
        var exclusiveMinimum = schema.exclusiveMinimum;
        var minimum = schema.minimum;
        var hasMinimumConstrain = utils.isSet(minimum) && utils.isNumber(minimum);
        if (!hasMinimumConstrain) return;
        var hasExclusiveMinimumConstrain = utils.isSet(exclusiveMinimum) && exclusiveMinimum === true;
        var finalMinimum = hasExclusiveMinimumConstrain ? minimum + 1 : minimum;
        var invalid = hasMinimumConstrain && value < finalMinimum;

        if (invalid) {
          return {
            message: 'Must be at least ' + finalMinimum,
            path: path
          };
        }

        return false;
      },
      maximum: function maximum(schema, value, path) {
        var isNumericType = schema.type === 'number' || schema.type === 'integer';
        if (!isNumericType) return;
        var exclusiveMaximum = schema.exclusiveMaximum;
        var maximum = schema.maximum;
        var hasMaximumConstrain = utils.isSet(maximum) && utils.isNumber(maximum);
        if (!hasMaximumConstrain) return;
        var hasExclusiveMaximumConstrain = utils.isSet(exclusiveMaximum) && exclusiveMaximum === true;
        var finalMaximum = hasExclusiveMaximumConstrain ? maximum - 1 : maximum;
        var invalid = hasMaximumConstrain && value > finalMaximum;

        if (invalid) {
          return {
            message: 'Must be less than ' + finalMaximum,
            path: path
          };
        }

        return false;
      },
      multipleOf: function multipleOf(schema, value, path) {
        var isNumericType = schema.type === 'number' || schema.type === 'integer';
        if (!isNumericType) return;
        var multipleOf = schema.multipleOf;
        var hasMultipleOfConstrain = utils.isSet(multipleOf) && utils.isNumber(multipleOf);
        if (!hasMultipleOfConstrain) return;
        var isMultipleOf = value / multipleOf === Math.floor(value / multipleOf);
        var invalid = hasMultipleOfConstrain && !isMultipleOf;

        if (invalid) {
          return {
            message: 'Must be multiple of ' + multipleOf,
            path: path
          };
        }

        return false;
      },
      "const": function _const(schema, value, path) {
        var _const = schema["const"];
        var hasConstConstrain = utils.isSet(_const);
        if (!hasConstConstrain) return;
        var valueIsNotEqualConst = JSON.stringify(value) !== JSON.stringify(_const);
        var invalid = hasConstConstrain && valueIsNotEqualConst;

        if (invalid) {
          return {
            message: 'Must have value: ' + _const,
            path: path
          };
        }

        return false;
      },
      "enum": function _enum(schema, value, path) {
        var _enum = schema["enum"];
        var hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum);
        if (!hasEnumConstrain) return;
        var valueNotInEnum = !_enum.some(function (e) {
          return JSON.stringify(value) === JSON.stringify(e);
        });
        var invalid = hasEnumConstrain && valueNotInEnum;

        if (invalid) {
          return {
            message: 'Value must be one of the enumerated values',
            path: path
          };
        }

        return false;
      }
    };
  }
  /**
   * Adds a validator function
   */


  createClass_default()(Validator, [{
    key: "addValidator",
    value: function addValidator(name, validator) {
      this.validators[name] = validator;
    }
    /**
     * Validates a value against it's schema
     */

  }, {
    key: "validate",
    value: function validate(schema, value, path) {
      var _this = this;

      var errors = [];
      Object.keys(this.validators).forEach(function (key) {
        var validator = _this.validators[key];
        var error = validator(schema, value, path);

        if (error) {
          errors.push(error);
        }
      });
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
    this.resolver = new src_resolver();
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
      delete this.editors[editor.path];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRoZW1lIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsIm1lc3NhZ2UiLCJlcnJvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwYXRoIiwiZ2V0QXR0cmlidXRlIiwic2VsZWN0b3IiLCJlcnJvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJ0ZXh0IiwiYnV0dG9uIiwibGFiZWxUZXh0IiwibGFiZWwiLCJzZXRBdHRyaWJ1dGVzIiwiaW5wdXQiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwicmFkaW9Hcm91cE5hbWUiLCJyYWRpb0dyb3VwIiwiZ2V0Q29udGFpbmVyIiwidmFsdWUiLCJpbmRleCIsImdldExhYmVsIiwicmFkaW8iLCJnZXRJbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNlbGVjdElkIiwic2VsZWN0Iiwib3B0aW9uIiwib3V0cHV0IiwiVXRpbHMiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImlzTnVtYmVyIiwiTWF0aCIsImZsb29yIiwiQXJyYXkiLCJpc0FycmF5IiwiaXNOdWxsIiwiRWRpdG9yIiwiY29uZmlnIiwiamVkaSIsInNjaGVtYSIsInVuZGVmaW5lZCIsInBhcmVudCIsImNoaWxkRWRpdG9ycyIsImluaXQiLCJzZXRDb250YWluZXIiLCJidWlsZCIsInNldERlZmF1bHRWYWx1ZSIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwicmVnaXN0ZXIiLCJzcGxpdCIsInBvcCIsInRoZW1lIiwicmVnaXN0ZXJFZGl0b3IiLCJ1bnJlZ2lzdGVyRWRpdG9yIiwiZGVmYXVsSXNEZWZpbmVkIiwidXRpbHMiLCJpc1NldCIsInNldFZhbHVlIiwibmV3VmFsdWUiLCJpbml0aWFsIiwic2FuaXRpemUiLCJjdXJyZW50VmFsdWUiLCJnZXRWYWx1ZSIsIm9uQ2hhbmdlIiwicmVmcmVzaFVJIiwidmFsaWRhdG9yIiwidmFsaWRhdGUiLCJyZW1vdmVJbnB1dEVycm9yIiwiYWRkSW5wdXRFcnJvciIsInVucmVnaXN0ZXIiLCJBcnJheUVkaXRvciIsInRpdGxlIiwiYWRkQnRuIiwiZ2V0QnV0dG9uIiwiYWRkSXRlbSIsIml0ZW1FZGl0b3IiLCJjcmVhdGVFZGl0b3IiLCJpdGVtcyIsImxlbmd0aCIsIml0ZW1JbmRleCIsIk51bWJlciIsImdldEtleSIsImNsb25lIiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImNyZWF0ZUl0ZW1FZGl0b3IiLCJwdXNoIiwiZGVzdHJveSIsIndpbmRvdyIsImNvbmZpcm0iLCJmaWx0ZXIiLCJlZGl0b3IiLCJCb29sZWFuRWRpdG9yIiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJPYmplY3RFZGl0b3IiLCJwcm9wZXJ0aWVzIiwicHJvcCIsImNoaWxkRWRpdG9yIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsImluY2x1ZGVzIiwiZm9ybWF0IiwiU3RyaW5nIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsImVudW1UaXRsZXMiLCJnZXRTZWxlY3QiLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJnZXRSYWRpb0dyb3VwIiwicmFkaW9JbnB1dHMiLCJyYWRpb0lucHV0IiwicXVlcnlTZWxlY3RvciIsIk51bWJlckVkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJOdWxsRWRpdG9yIiwiUmVzb2x2ZXIiLCJyZXNvbHZlcnMiLCJfZW51bSIsImhhc0VudW1Db25zdHJhaW4iLCJoYXNGb3JtYXRSYWRpbyIsImlzU3RyaW5nIiwiaXNOdW1lcmljVHlwZSIsInJlc29sdmVyIiwidW5zaGlmdCIsImVkaXRvckNsYXNzIiwiVmFsaWRhdG9yIiwidmFsaWRhdG9ycyIsInR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiaW50ZWdlciIsImlzSW50ZWdlciIsImlzQm9vbGVhbiIsImFycmF5Iiwib2JqZWN0IiwiaXNPYmplY3QiLCJ2YWxpZCIsInVuaXF1ZUl0ZW1zIiwiaXNBcnJheVR5cGUiLCJoYXNVbmlxdWVJdGVtc0NvbnN0cmFpbiIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJpIiwiaW52YWxpZCIsIm1pbkl0ZW1zIiwiaGFzTWluSXRlbXNDb25zdHJhaW4iLCJtYXhJdGVtcyIsImhhc01heEl0ZW1zQ29uc3RyYWluIiwibWluTGVuZ3RoIiwiaXNTdHJpbmdUeXBlIiwiaGFzTWluTGVuZ3RoQ29uc3RyYWluIiwibWF4TGVuZ3RoIiwiaGFzTWF4TGVuZ3RoQ29uc3RyYWluIiwicGF0dGVybiIsImhhc1BhdHRlcm5Db25zdHJhaW4iLCJyZWdleHAiLCJSZWdFeHAiLCJtYXRjaFBhdHRlcm4iLCJ0ZXN0IiwibWluaW11bSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJoYXNNaW5pbXVtQ29uc3RyYWluIiwiaGFzRXhjbHVzaXZlTWluaW11bUNvbnN0cmFpbiIsImZpbmFsTWluaW11bSIsIm1heGltdW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiaGFzTWF4aW11bUNvbnN0cmFpbiIsImhhc0V4Y2x1c2l2ZU1heGltdW1Db25zdHJhaW4iLCJmaW5hbE1heGltdW0iLCJtdWx0aXBsZU9mIiwiaGFzTXVsdGlwbGVPZkNvbnN0cmFpbiIsImlzTXVsdGlwbGVPZiIsIl9jb25zdCIsImhhc0NvbnN0Q29uc3RyYWluIiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJ2YWx1ZU5vdEluRW51bSIsInNvbWUiLCJlIiwiSmVkaSIsInJvb3QiLCJlZGl0b3JzIiwibG9hZEVkaXRvcnMiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFD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QUwsQ0FBVTVNLFNBQXJDO0FBQ0EsV0FBS0EsU0FBTCxDQUFlSyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixhQUE3QjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usc0JBQWMrQyxNQUFkLEVBQXNCO0FBQ3BCO0FBQ0EsYUFBTyxLQUFLLEtBQUs4RixRQUFMLENBQWM0RCxPQUFkLENBQXNCMUosTUFBTSxDQUFDRSxNQUE3QixDQUFMLEVBQTJDRixNQUEzQyxDQUFQO0FBQ0Q7OztXQUVELG9CQUFZO0FBQ1YsYUFBTyxLQUFLdUosSUFBTCxDQUFVOUgsUUFBVixFQUFQO0FBQ0Q7OztXQUVELG1CQUFXckUsSUFBWCxFQUFpQjtBQUNmLGFBQU8sS0FBS29NLE9BQUwsQ0FBYXBNLElBQWIsQ0FBUDtBQUNEOzs7Ozs7QUFHWWtNLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJjbGFzcyBUaGVtZSB7XG4gIHNldEF0dHJpYnV0ZXMgKGVsZW1lbnQsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIHNwZWNpZmllZCBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgYWRkSW5wdXRFcnJvciAoY29udGFpbmVyLCBtZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvcilcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFueSBlcnJvciBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgcmVtb3ZlSW5wdXRFcnJvciAoY29udGFpbmVyKSB7XG4gICAgY29uc3QgcGF0aCA9IGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpXG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnW2RhdGEtcGF0aD1cIicgKyBwYXRoICsgJ1wiXSA+IC5qZWRpLWVycm9yLW1lc3NhZ2UnXG4gICAgY29uc3QgZXJyb3JzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIGdldEJ1dHRvbiAodGV4dCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMYWJlbCAobGFiZWxUZXh0LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dFxuICAgIHRoaXMuc2V0QXR0cmlidXRlcyhsYWJlbCwgYXR0cmlidXRlcylcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldElucHV0IChhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMoaW5wdXQsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRSYWRpb0dyb3VwIChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHJhZGlvR3JvdXBOYW1lKSB7XG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMuZ2V0Q29udGFpbmVyKClcblxuICAgIG9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IG9wdGlvbnNMYWJlbHNbaW5kZXhdXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgICAgZm9yOiByYWRpb0dyb3VwTmFtZSArICdbJyArIHZhbHVlICsgJ10nXG4gICAgICB9KVxuXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiByYWRpb0dyb3VwTmFtZSArICdbJyArIHZhbHVlICsgJ10nLFxuICAgICAgICBuYW1lOiByYWRpb0dyb3VwTmFtZVxuICAgICAgfSlcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmFkaW8gY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHJhZGlvR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICByYWRpb0dyb3VwLmFwcGVuZENoaWxkKHJhZGlvKVxuICAgIH0pXG4gICAgcmV0dXJuIHJhZGlvR3JvdXBcbiAgfVxuXG4gIGdldFNlbGVjdCAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCBzZWxlY3RJZCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBzZWxlY3RJZClcbiAgICBvcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0T3V0cHV0IChhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKVxuICAgIHRoaXMuc2V0QXR0cmlidXRlcyhvdXRwdXQsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lXG4iLCJjbGFzcyBVdGlscyB7XG4gIGNsb25lICh0aGluZykge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbiAgfVxuXG4gIGlzU2V0ICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG4gIH1cblxuICBpc051bWJlciAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xuICB9XG5cbiAgaXNJbnRlZ2VyICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgfVxuXG4gIGlzU3RyaW5nICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gIH1cblxuICBpc0Jvb2xlYW4gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIH1cblxuICBpc0FycmF5ICh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICB9XG5cbiAgaXNPYmplY3QgKHZhbHVlKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzTnVsbCh2YWx1ZSkgJiYgIXRoaXMuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICB9XG5cbiAgaXNOdWxsICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlscygpXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcblxuY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgYnVpbGQgcGlwZWxpbmUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5zZXRDb250YWluZXIoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgfVxuXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCgnLicpLnBvcCgpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkIHRoZSBlZGl0b3IncyB1c2VyIGludGVyZmFjZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogSWYgc2NoZW1hLmRlZmF1bHQgaXMgbm90IGRpZmVuLCBzZXRzIGFuIGluaXRpYWwgdmFsdWUgYmFzZWQgb24gaXQncyB0eXBlLlxuICAgKiBJZiBlbnVtIGlzIGRlZmluZWQgYW5kIHNjaGVtYS5kZWZhdWx0IGlzIG5vdCBkZWZpbmVkIHNldCB0aGUgZmlyc3QgaXRlbSBvZlxuICAgKiB0aGUgZW51bSBhbHMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuXG4gICAgY29uc3QgZGVmYXVsSXNEZWZpbmVkID0gdXRpbHMuaXNTZXQodGhpcy5zY2hlbWEuZGVmYXVsdClcbiAgICBpZiAoZGVmYXVsSXNEZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHRcbiAgICB9XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCB0cnVlKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemUgdmFsdWVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVkaXRvciB2YWx1ZSBhbmQgY2FsbHMgcmVmcmVzaFVJIHJpZ2h0IGFmdGVyLiBUaGUgb25DaGFuZ2UgbWV0aG9kXG4gICAqIHdpbGwgYmUgY2FsbGVkIGlmIHRoZSBuZXcgdmFsdWUgaXMgbm90IGFuIGluaXRpYWwgb3IgZGVmYXVsdCB2YWx1ZSBhbmQgdGhlXG4gICAqIG5ldyB2YWx1ZSBpcyBkaWZmZXJlbnQgdGhhbiB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgaW5pdGlhbCA9IGZhbHNlKSB7XG4gICAgbmV3VmFsdWUgPSB0aGlzLnNhbml0aXplKG5ld1ZhbHVlKVxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuXG4gICAgaWYgKCFpbml0aWFsICYmIGN1cnJlbnRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBVSSBvZiB0aGUgZWRpdG9yIHRvIHJlZmxlY3QgaXQncyB2YWx1ZS4gVGhpcyBpcyBuZWNlc3Nhcnkgd2hlblxuICAgKiB1c2luZyBzZXRWYWx1ZSB0byBzZXQgdGhlIHZhbHVlIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuc2NoZW1hLCB0aGlzLmdldFZhbHVlKCksIHRoaXMucGF0aClcbiAgICB0aGlzLmplZGkudGhlbWUucmVtb3ZlSW5wdXRFcnJvcih0aGlzLmNvbnRhaW5lcilcbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMuamVkaS50aGVtZS5hZGRJbnB1dEVycm9yKHRoaXMuY29udGFpbmVyLCBlcnJvci5tZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGVkaXRvciBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2UgKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQub25DaGFuZ2UoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yLCBhbmQgZXZlcnkgcmVmZXJlbmNlIHRoYXQgaXQgaXMgYXR0YWNoZWQgdG8gaXQuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBhZGRCdG5cbiAgICBjb25zdCBhZGRCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdhZGQnKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtRWRpdG9yICgpIHtcbiAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hLml0ZW1zLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLmdldEtleSgpKVxuXG4gICAgaWYgKGl0ZW1FZGl0b3IuaW5wdXQpIHtcbiAgICAgIGl0ZW1FZGl0b3IuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICAgICAgdmFsdWVbaXRlbUluZGV4XSA9IHV0aWxzLmNsb25lKGl0ZW1FZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignZGVsZXRlJylcbiAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IucGF0aC5zcGxpdCgnLicpLnBvcCgpKVxuICAgICAgdGhpcy5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignbW92ZSB1cCcpXG4gICAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdtb3ZlIGRvd24nKVxuICAgICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1FZGl0b3JcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZScpKSB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuXG4gICAgdGhpcy5nZXRWYWx1ZSgpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtRWRpdG9yKClcbiAgICAgIGl0ZW1FZGl0b3Iuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGl0ZW1FZGl0b3IpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGNoaWxkIGVkaXRvcnNcbiAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdXG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgcHJvcCxcbiAgICAgICAgcGFyZW50OiB0aGlzXG4gICAgICB9KVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnB1c2goZWRpdG9yKVxuICAgIH0pXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgdGhpcy52YWx1ZVtjaGlsZEVkaXRvci5nZXRLZXkoKV0gPSBjaGlsZEVkaXRvci5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnY29sb3InLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbW9udGgnLCAnc2VhcmNoJywgJ3RlbCcsICd0ZXh0JywgJ3RpbWUnLCAndXJsJywgJ3dlZWsnXVxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogJ3RleHQnLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtVGl0bGVzIHx8IHRoaXMuc2NoZW1hLmVudW1cbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHRoaXMucGF0aClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSB0aGlzLnNjaGVtYS5lbnVtXG4gICAgY29uc3Qgb3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLmVudW1UaXRsZXMgfHwgdGhpcy5zY2hlbWEuZW51bVxuICAgIGNvbnN0IHJhZGlvR3JvdXBOYW1lID0gdGhpcy5wYXRoXG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0dyb3VwKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgcmFkaW9Hcm91cE5hbWUpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Hcm91cClcblxuICAgIC8vIGV2ZW50c1xuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpb0lucHV0KSA9PiB7XG4gICAgICByYWRpb0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShyYWRpb0lucHV0LnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCByYWRpbyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyB0aGlzLmdldFZhbHVlKCkgKyAnXCJdJylcbiAgICBpZiAocmFkaW8pIHtcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW1cbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEuZW51bVxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgdGhpcy5wYXRoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW1cbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEuZW51bVRpdGxlcyB8fCB0aGlzLnNjaGVtYS5lbnVtXG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0dyb3VwID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvR3JvdXAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCByYWRpb0dyb3VwTmFtZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0dyb3VwKVxuXG4gICAgLy8gZXZlbnRzXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicgKyByYWRpb0dyb3VwTmFtZSArICdcIl0nKVxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvSW5wdXQpID0+IHtcbiAgICAgIHJhZGlvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvSW5wdXQudmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHJhZGlvID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIHRoaXMuZ2V0VmFsdWUoKSArICdcIl0nKVxuICAgIGlmIChyYWRpbykge1xuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udWxsJ1xuXG5jbGFzcyBSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZWRpdG9yIGNsYXNzIGlmIHRoZSBjb25kaXRpb24gcGFzc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x2ZXJzID0gW1xuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgIHJldHVybiBBcnJheUVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBfZW51bSA9IHNjaGVtYS5lbnVtXG4gICAgICAgIGNvbnN0IGhhc0VudW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChfZW51bSkgJiYgdXRpbHMuaXNBcnJheShfZW51bSlcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gc2NoZW1hLmZvcm1hdFxuICAgICAgICBjb25zdCBoYXNGb3JtYXRSYWRpbyA9IHV0aWxzLmlzU2V0KGZvcm1hdCkgJiYgdXRpbHMuaXNTdHJpbmcoZm9ybWF0KSAmJiBmb3JtYXQgPT09ICdyYWRpbydcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyAmJiBoYXNFbnVtQ29uc3RyYWluICYmIGhhc0Zvcm1hdFJhZGlvKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VudW1SYWRpb0VkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBfZW51bSA9IHNjaGVtYS5lbnVtXG4gICAgICAgIGNvbnN0IGhhc0VudW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChfZW51bSkgJiYgdXRpbHMuaXNBcnJheShfZW51bSlcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyAmJiBoYXNFbnVtQ29uc3RyYWluKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGNvbnN0IF9lbnVtID0gc2NoZW1hLmVudW1cbiAgICAgICAgY29uc3QgaGFzRW51bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KF9lbnVtKSAmJiB1dGlscy5pc0FycmF5KF9lbnVtKVxuICAgICAgICBjb25zdCBmb3JtYXQgPSBzY2hlbWEuZm9ybWF0XG4gICAgICAgIGNvbnN0IGhhc0Zvcm1hdFJhZGlvID0gdXRpbHMuaXNTZXQoZm9ybWF0KSAmJiB1dGlscy5pc1N0cmluZyhmb3JtYXQpICYmIGZvcm1hdCA9PT0gJ3JhZGlvJ1xuICAgICAgICBpZiAoaXNOdW1lcmljVHlwZSAmJiBoYXNFbnVtQ29uc3RyYWluICYmIGhhc0Zvcm1hdFJhZGlvKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlckVudW1SYWRpb0VkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgY29uc3QgX2VudW0gPSBzY2hlbWEuZW51bVxuICAgICAgICBjb25zdCBoYXNFbnVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoX2VudW0pICYmIHV0aWxzLmlzQXJyYXkoX2VudW0pXG4gICAgICAgIGlmIChpc051bWVyaWNUeXBlICYmIGhhc0VudW1Db25zdHJhaW4pIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgaWYgKGlzTnVtZXJpY1R5cGUpIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgcmV0dXJuIE51bGxFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcmVzb2x2ZXIgZnVuY3Rpb25cbiAgICovXG4gIGFkZFJlc29sdmVyIChyZXNvbHZlcikge1xuICAgIHRoaXMucmVzb2x2ZXJzLnVuc2hpZnQocmVzb2x2ZXIpXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHJlc29sdmUgKHNjaGVtYSkge1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgIGNvbnN0IGVkaXRvckNsYXNzID0gcmVzb2x2ZXIoc2NoZW1hKVxuICAgICAgaWYgKHV0aWxzLmlzU2V0KGVkaXRvckNsYXNzKSkge1xuICAgICAgICByZXR1cm4gZWRpdG9yQ2xhc3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb2x2ZXJcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVycm9yIG9iamVjdCBpZiB0aGUgdGhlIHZhbGlkYXRpb24gY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0b3JzID0ge1xuICAgICAgdHlwZTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICAgICAgc3RyaW5nOiB2YWx1ZSA9PiB1dGlscy5pc1N0cmluZyh2YWx1ZSksXG4gICAgICAgICAgbnVtYmVyOiB2YWx1ZSA9PiB1dGlscy5pc051bWJlcih2YWx1ZSksXG4gICAgICAgICAgaW50ZWdlcjogdmFsdWUgPT4gdXRpbHMuaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgICAgICBib29sZWFuOiB2YWx1ZSA9PiB1dGlscy5pc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgICAgIGFycmF5OiB2YWx1ZSA9PiB1dGlscy5pc0FycmF5KHZhbHVlKSxcbiAgICAgICAgICBvYmplY3Q6IHZhbHVlID0+IHV0aWxzLmlzT2JqZWN0KHZhbHVlKSxcbiAgICAgICAgICBudWxsOiB2YWx1ZSA9PiB1dGlscy5pc051bGwodmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlXSh2YWx1ZSlcblxuICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHVuaXF1ZUl0ZW1zOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc0FycmF5VHlwZSA9IHNjaGVtYS50eXBlID09PSAnYXJyYXknXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIHJldHVyblxuICAgICAgICBjb25zdCB1bmlxdWVJdGVtcyA9IHNjaGVtYS51bmlxdWVJdGVtc1xuICAgICAgICBjb25zdCBoYXNVbmlxdWVJdGVtc0NvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KHVuaXF1ZUl0ZW1zKSAmJiB1dGlscy5pc0Jvb2xlYW4odW5pcXVlSXRlbXMpXG4gICAgICAgIGlmICghaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBzZWVuID0ge31cbiAgICAgICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4gJiYgaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtaW5JdGVtczogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBcnJheVR5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ2FycmF5J1xuICAgICAgICBpZiAoIWlzQXJyYXlUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWluSXRlbXMgPSBzY2hlbWEubWluSXRlbXNcbiAgICAgICAgY29uc3QgaGFzTWluSXRlbXNDb25zdHJhaW4gPSB1dGlscy5pc1NldChtaW5JdGVtcykgJiYgdXRpbHMuaXNOdW1iZXIobWluSXRlbXMpXG4gICAgICAgIGlmICghaGFzTWluSXRlbXNDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01pbkl0ZW1zQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA8IG1pbkl0ZW1zKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIG1pbkl0ZW1zICsgJyBpdGVtcycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWF4SXRlbXM6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXJyYXlUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdhcnJheSdcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1heEl0ZW1zID0gc2NoZW1hLm1heEl0ZW1zXG4gICAgICAgIGNvbnN0IGhhc01heEl0ZW1zQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWF4SXRlbXMpICYmIHV0aWxzLmlzTnVtYmVyKG1heEl0ZW1zKVxuICAgICAgICBpZiAoIWhhc01heEl0ZW1zQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNYXhJdGVtc0NvbnN0cmFpbiAmJiB2YWx1ZS5sZW5ndGggPiBtYXhJdGVtcylcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIG1heEl0ZW1zICsgJyBpdGVtcycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWluTGVuZ3RoOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N0cmluZ1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgaWYgKCFpc1N0cmluZ1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtaW5MZW5ndGggPSBzY2hlbWEubWluTGVuZ3RoXG4gICAgICAgIGNvbnN0IGhhc01pbkxlbmd0aENvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1pbkxlbmd0aCkgJiYgdXRpbHMuaXNOdW1iZXIobWluTGVuZ3RoKVxuICAgICAgICBpZiAoIWhhc01pbkxlbmd0aENvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWluTGVuZ3RoQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgbWluTGVuZ3RoICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heExlbmd0aDogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgIGlmICghaXNTdHJpbmdUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gc2NoZW1hLm1heExlbmd0aFxuICAgICAgICBjb25zdCBoYXNNYXhMZW5ndGhDb25zdHJhaW4gPSB1dGlscy5pc1NldChtYXhMZW5ndGgpICYmIHV0aWxzLmlzTnVtYmVyKG1heExlbmd0aClcbiAgICAgICAgaWYgKCFoYXNNYXhMZW5ndGhDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01heExlbmd0aENvbnN0cmFpbiAmJiB2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGgpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbW9zdCAnICsgbWF4TGVuZ3RoICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHBhdHRlcm46IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3RyaW5nVHlwZSA9IHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICBpZiAoIWlzU3RyaW5nVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBzY2hlbWEucGF0dGVyblxuICAgICAgICBjb25zdCBoYXNQYXR0ZXJuQ29uc3RyYWluID0gdXRpbHMuaXNTZXQocGF0dGVybikgJiYgdXRpbHMuaXNTdHJpbmcocGF0dGVybilcbiAgICAgICAgaWYgKCFoYXNQYXR0ZXJuQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBjb25zdCBtYXRjaFBhdHRlcm4gPSByZWdleHAudGVzdCh2YWx1ZSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNQYXR0ZXJuQ29uc3RyYWluICYmICFtYXRjaFBhdHRlcm4pXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBwYXR0ZXJuLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1pbmltdW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoIWlzTnVtZXJpY1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW1cbiAgICAgICAgY29uc3QgbWluaW11bSA9IHNjaGVtYS5taW5pbXVtXG4gICAgICAgIGNvbnN0IGhhc01pbmltdW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChtaW5pbXVtKSAmJiB1dGlscy5pc051bWJlcihtaW5pbXVtKVxuICAgICAgICBpZiAoIWhhc01pbmltdW1Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBoYXNFeGNsdXNpdmVNaW5pbXVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoZXhjbHVzaXZlTWluaW11bSkgJiYgZXhjbHVzaXZlTWluaW11bSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBmaW5hbE1pbmltdW0gPSBoYXNFeGNsdXNpdmVNaW5pbXVtQ29uc3RyYWluID8gbWluaW11bSArIDEgOiBtaW5pbXVtXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWluaW11bUNvbnN0cmFpbiAmJiB2YWx1ZSA8IGZpbmFsTWluaW11bSlcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgZmluYWxNaW5pbXVtLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heGltdW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoIWlzTnVtZXJpY1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBleGNsdXNpdmVNYXhpbXVtID0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW1cbiAgICAgICAgY29uc3QgbWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtXG4gICAgICAgIGNvbnN0IGhhc01heGltdW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChtYXhpbXVtKSAmJiB1dGlscy5pc051bWJlcihtYXhpbXVtKVxuICAgICAgICBpZiAoIWhhc01heGltdW1Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBoYXNFeGNsdXNpdmVNYXhpbXVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoZXhjbHVzaXZlTWF4aW11bSkgJiYgZXhjbHVzaXZlTWF4aW11bSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBmaW5hbE1heGltdW0gPSBoYXNFeGNsdXNpdmVNYXhpbXVtQ29uc3RyYWluID8gbWF4aW11bSAtIDEgOiBtYXhpbXVtXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWF4aW11bUNvbnN0cmFpbiAmJiB2YWx1ZSA+IGZpbmFsTWF4aW11bSlcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGZpbmFsTWF4aW11bSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtdWx0aXBsZU9mOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgaWYgKCFpc051bWVyaWNUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbXVsdGlwbGVPZiA9IHNjaGVtYS5tdWx0aXBsZU9mXG4gICAgICAgIGNvbnN0IGhhc011bHRpcGxlT2ZDb25zdHJhaW4gPSB1dGlscy5pc1NldChtdWx0aXBsZU9mKSAmJiB1dGlscy5pc051bWJlcihtdWx0aXBsZU9mKVxuICAgICAgICBpZiAoIWhhc011bHRpcGxlT2ZDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBtdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gbXVsdGlwbGVPZikpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTXVsdGlwbGVPZkNvbnN0cmFpbiAmJiAhaXNNdWx0aXBsZU9mKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG11bHRpcGxlIG9mICcgKyBtdWx0aXBsZU9mLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNvbnN0OiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBfY29uc3QgPSBzY2hlbWEuY29uc3RcbiAgICAgICAgY29uc3QgaGFzQ29uc3RDb25zdHJhaW4gPSB1dGlscy5pc1NldChfY29uc3QpXG4gICAgICAgIGlmICghaGFzQ29uc3RDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IChKU09OLnN0cmluZ2lmeSh2YWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KF9jb25zdCkpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzQ29uc3RDb25zdHJhaW4gJiYgdmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB2YWx1ZTogJyArIF9jb25zdCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBlbnVtOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBfZW51bSA9IHNjaGVtYS5lbnVtXG4gICAgICAgIGNvbnN0IGhhc0VudW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChfZW51bSkgJiYgdXRpbHMuaXNBcnJheShfZW51bSlcbiAgICAgICAgaWYgKCFoYXNFbnVtQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgdmFsdWVOb3RJbkVudW0gPSAhX2VudW0uc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRW51bUNvbnN0cmFpbiAmJiB2YWx1ZU5vdEluRW51bSlcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnVmFsdWUgbXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbGlkYXRvciBmdW5jdGlvblxuICAgKi9cbiAgYWRkVmFsaWRhdG9yIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnNbbmFtZV0gPSB2YWxpZGF0b3JcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG4gICAgT2JqZWN0LmtleXModGhpcy52YWxpZGF0b3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yc1trZXldXG4gICAgICBjb25zdCBlcnJvciA9IHZhbGlkYXRvcihzY2hlbWEsIHZhbHVlLCBwYXRoKVxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcidcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0b3InXG5cbmNsYXNzIEplZGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpXG4gICAgdGhpcy5yZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXJcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy5lZGl0b3JzID0ge31cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5sb2FkRWRpdG9ycygpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdXG4gIH1cblxuICBsb2FkRWRpdG9ycyAoKSB7XG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWFcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC5jb250YWluZXIpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1sb2FkZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGJhc2VkIG9uIHRoZSBwYXNzZWQgc2NoZW1hIGFuZCBjb25maWdcbiAgICovXG4gIGNyZWF0ZUVkaXRvciAoY29uZmlnKSB7XG4gICAgLy8gdG9kbyBleHBhbmQgZGVmc1xuICAgIHJldHVybiBuZXcgKHRoaXMucmVzb2x2ZXIucmVzb2x2ZShjb25maWcuc2NoZW1hKSkoY29uZmlnKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=