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
    value: function setAttributes(element, attributes) {
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
    value: function getInput(attributes) {
      var input = document.createElement('input');
      this.setAttributes(input, attributes);
      return input;
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
    value: function getOutput(attributes) {
      var output = document.createElement('output');
      this.setAttributes(output, attributes);
      return output;
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
// CONCATENATED MODULE: ./src/editors/integer.js






function integer_createSuper(Derived) { var hasNativeReflectConstruct = integer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function integer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var integer_IntegerEditor = /*#__PURE__*/function (_NumberEditor) {
  inherits_default()(IntegerEditor, _NumberEditor);

  var _super = integer_createSuper(IntegerEditor);

  function IntegerEditor() {
    classCallCheck_default()(this, IntegerEditor);

    return _super.apply(this, arguments);
  }

  return createClass_default()(IntegerEditor);
}(editors_number);

/* harmony default export */ var editors_integer = (integer_IntegerEditor);
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
      if (schema.type === 'string') {
        return editors_string;
      }
    }, function (schema) {
      if (schema.type === 'number') {
        return editors_number;
      }
    }, function (schema) {
      if (schema.type === 'integer') {
        return editors_integer;
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




var validator_Validator = /*#__PURE__*/function () {
  function Validator() {
    var _this = this;

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
            return _this.isNull(value);
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
      var _this2 = this;

      var errors = [];
      Object.keys(this.validators).forEach(function (key) {
        var validator = _this2.validators[key];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRoZW1lIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsIm1lc3NhZ2UiLCJlcnJvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwYXRoIiwiZ2V0QXR0cmlidXRlIiwic2VsZWN0b3IiLCJlcnJvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJ0ZXh0IiwiYnV0dG9uIiwibGFiZWxUZXh0IiwibGFiZWwiLCJzZXRBdHRyaWJ1dGVzIiwiaW5wdXQiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwic2VsZWN0SWQiLCJzZWxlY3QiLCJ2YWx1ZSIsImluZGV4Iiwib3B0aW9uIiwib3V0cHV0IiwiRWRpdG9yIiwiY29uZmlnIiwiamVkaSIsInNjaGVtYSIsInVuZGVmaW5lZCIsInBhcmVudCIsImNoaWxkRWRpdG9ycyIsImluaXQiLCJzZXRDb250YWluZXIiLCJidWlsZCIsInNldERlZmF1bHRWYWx1ZSIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwicmVnaXN0ZXIiLCJzcGxpdCIsInBvcCIsInRoZW1lIiwiZ2V0Q29udGFpbmVyIiwidHlwZSIsInJlZ2lzdGVyRWRpdG9yIiwidW5yZWdpc3RlckVkaXRvciIsInNldFZhbHVlIiwibmV3VmFsdWUiLCJpbml0aWFsIiwic2FuaXRpemUiLCJjdXJyZW50VmFsdWUiLCJnZXRWYWx1ZSIsIm9uQ2hhbmdlIiwicmVmcmVzaFVJIiwidmFsaWRhdG9yIiwidmFsaWRhdGUiLCJyZW1vdmVJbnB1dEVycm9yIiwiYWRkSW5wdXRFcnJvciIsInVucmVnaXN0ZXIiLCJVdGlscyIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiaXNOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJBcnJheSIsImlzQXJyYXkiLCJpc051bGwiLCJBcnJheUVkaXRvciIsInRpdGxlIiwiZ2V0TGFiZWwiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsIml0ZW1FZGl0b3IiLCJjcmVhdGVFZGl0b3IiLCJpdGVtcyIsImxlbmd0aCIsIml0ZW1JbmRleCIsIk51bWJlciIsImdldEtleSIsInV0aWxzIiwiY2xvbmUiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsImZyb21JbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY3JlYXRlSXRlbUVkaXRvciIsInB1c2giLCJkZXN0cm95Iiwid2luZG93IiwiY29uZmlybSIsImZpbHRlciIsImVkaXRvciIsIkJvb2xlYW5FZGl0b3IiLCJnZXRJbnB1dCIsImlkIiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJPYmplY3RFZGl0b3IiLCJwcm9wZXJ0aWVzIiwicHJvcCIsImNoaWxkRWRpdG9yIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsImluY2x1ZGVzIiwiZm9ybWF0IiwiU3RyaW5nIiwiTnVtYmVyRWRpdG9yIiwiSW50ZWdlckVkaXRvciIsIk51bGxFZGl0b3IiLCJSZXNvbHZlciIsInJlc29sdmVycyIsInJlc29sdmVyIiwidW5zaGlmdCIsImVkaXRvckNsYXNzIiwiVmFsaWRhdG9yIiwidmFsaWRhdG9ycyIsInR5cGVzIiwic3RyaW5nIiwiaXNTdHJpbmciLCJudW1iZXIiLCJpbnRlZ2VyIiwiaXNJbnRlZ2VyIiwiaXNCb29sZWFuIiwiYXJyYXkiLCJvYmplY3QiLCJpc09iamVjdCIsInZhbGlkIiwidW5pcXVlSXRlbXMiLCJpc0FycmF5VHlwZSIsImhhc1VuaXF1ZUl0ZW1zQ29uc3RyYWluIiwiaXNTZXQiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsImludmFsaWQiLCJtaW5JdGVtcyIsImhhc01pbkl0ZW1zQ29uc3RyYWluIiwibWF4SXRlbXMiLCJoYXNNYXhJdGVtc0NvbnN0cmFpbiIsIm1pbkxlbmd0aCIsImlzU3RyaW5nVHlwZSIsImhhc01pbkxlbmd0aENvbnN0cmFpbiIsIm1heExlbmd0aCIsImhhc01heExlbmd0aENvbnN0cmFpbiIsInBhdHRlcm4iLCJoYXNQYXR0ZXJuQ29uc3RyYWluIiwicmVnZXhwIiwiUmVnRXhwIiwibWF0Y2hQYXR0ZXJuIiwidGVzdCIsIm1pbmltdW0iLCJpc051bWVyaWNUeXBlIiwiZXhjbHVzaXZlTWluaW11bSIsImhhc01pbmltdW1Db25zdHJhaW4iLCJoYXNFeGNsdXNpdmVNaW5pbXVtQ29uc3RyYWluIiwiZmluYWxNaW5pbXVtIiwibWF4aW11bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJoYXNNYXhpbXVtQ29uc3RyYWluIiwiaGFzRXhjbHVzaXZlTWF4aW11bUNvbnN0cmFpbiIsImZpbmFsTWF4aW11bSIsIm11bHRpcGxlT2YiLCJoYXNNdWx0aXBsZU9mQ29uc3RyYWluIiwiaXNNdWx0aXBsZU9mIiwiX2NvbnN0IiwiaGFzQ29uc3RDb25zdHJhaW4iLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsIl9lbnVtIiwiaGFzRW51bUNvbnN0cmFpbiIsInZhbHVlTm90SW5FbnVtIiwic29tZSIsImUiLCJuYW1lIiwiSmVkaSIsInJvb3QiLCJlZGl0b3JzIiwibG9hZEVkaXRvcnMiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoi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QWU7QUFDYixXQUFLbUwsSUFBTCxHQUFZLEtBQUszRyxZQUFMLENBQWtCO0FBQzVCbEQsWUFBSSxFQUFFLElBRHNCO0FBRTVCQyxjQUFNLEVBQUUsS0FBS0E7QUFGZSxPQUFsQixDQUFaO0FBSUEsV0FBS2hDLFNBQUwsQ0FBZVEsV0FBZixDQUEyQixLQUFLb0wsSUFBTCxDQUFVNUwsU0FBckM7QUFDQSxXQUFLQSxTQUFMLENBQWVLLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGFBQTdCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxzQkFBY3dCLE1BQWQsRUFBc0I7QUFDcEI7QUFDQSxhQUFPLEtBQUssS0FBSytGLFFBQUwsQ0FBY2tFLE9BQWQsQ0FBc0JqSyxNQUFNLENBQUNFLE1BQTdCLENBQUwsRUFBMkNGLE1BQTNDLENBQVA7QUFDRDs7O1dBRUQsb0JBQVk7QUFDVixhQUFPLEtBQUs4SixJQUFMLENBQVV0SSxRQUFWLEVBQVA7QUFDRDs7O1dBRUQsbUJBQVc3QyxJQUFYLEVBQWlCO0FBQ2YsYUFBTyxLQUFLb0wsT0FBTCxDQUFhcEwsSUFBYixDQUFQO0FBQ0Q7Ozs7OztBQUdZa0wsaUZBQWYsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImNsYXNzIFRoZW1lIHtcbiAgc2V0QXR0cmlidXRlcyAoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIHNwZWNpZmllZCBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgYWRkSW5wdXRFcnJvciAoY29udGFpbmVyLCBtZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvcilcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFueSBlcnJvciBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgcmVtb3ZlSW5wdXRFcnJvciAoY29udGFpbmVyKSB7XG4gICAgY29uc3QgcGF0aCA9IGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpXG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnW2RhdGEtcGF0aD1cIicgKyBwYXRoICsgJ1wiXSA+IC5qZWRpLWVycm9yLW1lc3NhZ2UnXG4gICAgY29uc3QgZXJyb3JzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIGdldEJ1dHRvbiAodGV4dCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMYWJlbCAobGFiZWxUZXh0LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dFxuICAgIHRoaXMuc2V0QXR0cmlidXRlcyhsYWJlbCwgYXR0cmlidXRlcylcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldElucHV0IChhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGlucHV0LCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0U2VsZWN0IChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHNlbGVjdElkKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIHNlbGVjdElkKVxuICAgIG9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRPdXRwdXQgKGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKVxuICAgIHRoaXMuc2V0QXR0cmlidXRlcyhvdXRwdXQsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lXG4iLCJjbGFzcyBFZGl0b3Ige1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8ICdyb290J1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBidWlsZCBwaXBlbGluZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnNldENvbnRhaW5lcigpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIHRoaXMucmVnaXN0ZXIoKVxuICB9XG5cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMucGF0aClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuc2NoZW1hLnR5cGUpXG4gIH1cblxuICAvKipcbiAgICogYnVpbGQgdGhlIGVkaXRvcidzIHVzZXIgaW50ZXJmYWNlXG4gICAqL1xuICBidWlsZCAoKSB7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGlzIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgamVkaS5lZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3RlckVkaXRvcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgamVkaS5lZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgZGVmYXVsdCB2YWx1ZSBpbiB0aGUgcHJvcGVydHkgXCJkZWZhdWx0XCIgaXMgc2V0IGluIHRoZSBzY2hlbWFcbiAgICovXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG5cbiAgICBpZiAodHlwZW9mIHRoaXMuc2NoZW1hLmRlZmF1bHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHRcbiAgICB9XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCB0cnVlKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemUgdmFsdWVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVkaXRvciB2YWx1ZSBhbmQgY2FsbHMgcmVmcmVzaFVJIHJpZ2h0IGFmdGVyLiBUaGUgb25DaGFuZ2UgbWV0aG9kXG4gICAqIHdpbGwgYmUgY2FsbGVkIGlmIHRoZSBuZXcgdmFsdWUgaXMgbm90IGFuIGluaXRpYWwgb3IgZGVmYXVsdCB2YWx1ZSBhbmQgdGhlXG4gICAqIG5ldyB2YWx1ZSBpcyBkaWZmZXJlbnQgdGhhbiB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgaW5pdGlhbCA9IGZhbHNlKSB7XG4gICAgbmV3VmFsdWUgPSB0aGlzLnNhbml0aXplKG5ld1ZhbHVlKVxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuXG4gICAgaWYgKCFpbml0aWFsICYmIGN1cnJlbnRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBVSSBvZiB0aGUgZWRpdG9yIHRvIHJlZmxlY3QgaXQncyB2YWx1ZS4gVGhpcyBpcyBuZWNlc3Nhcnkgd2hlblxuICAgKiB1c2luZyBzZXRWYWx1ZSB0byBzZXQgdGhlIHZhbHVlIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICByZWZyZXNoVUkgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLnNjaGVtYSwgdGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5qZWRpLnRoZW1lLnJlbW92ZUlucHV0RXJyb3IodGhpcy5jb250YWluZXIpXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLmplZGkudGhlbWUuYWRkSW5wdXRFcnJvcih0aGlzLmNvbnRhaW5lciwgZXJyb3IubWVzc2FnZSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBlZGl0b3IgY2hhbmdlcy5cbiAgICovXG4gIG9uQ2hhbmdlICgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50Lm9uQ2hhbmdlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvciwgYW5kIGV2ZXJ5IHJlZmVyZW5jZSB0aGF0IGl0IGlzIGF0dGFjaGVkIHRvIGl0LlxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImNsYXNzIFV0aWxzIHtcbiAgY2xvbmUgKHRoaW5nKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxuICB9XG5cbiAgaXNTZXQgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgfVxuXG4gIGlzTnVtYmVyICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG4gIH1cblxuICBpc0ludGVnZXIgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxuICB9XG5cbiAgaXNTdHJpbmcgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgfVxuXG4gIGlzQm9vbGVhbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgfVxuXG4gIGlzQXJyYXkgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gIH1cblxuICBpc09iamVjdCAodmFsdWUpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNOdWxsKHZhbHVlKSAmJiAhdGhpcy5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG4gIH1cblxuICBpc051bGwgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFV0aWxzKClcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignYWRkJylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUVkaXRvciAoKSB7XG4gICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5nZXRLZXkoKSlcblxuICAgIGlmIChpdGVtRWRpdG9yLmlucHV0KSB7XG4gICAgICBpdGVtRWRpdG9yLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICAgIHZhbHVlW2l0ZW1JbmRleF0gPSB1dGlscy5jbG9uZShpdGVtRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ2RlbGV0ZScpXG4gICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcbiAgICAgIHRoaXMuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ21vdmUgdXAnKVxuICAgICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignbW92ZSBkb3duJylcbiAgICAgIGl0ZW1FZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtRWRpdG9yXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoKVxuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUnKSkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cblxuICAgIHRoaXMuZ2V0VmFsdWUoKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgICBpdGVtRWRpdG9yLnNldFZhbHVlKHZhbHVlLCB0cnVlKVxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChpdGVtRWRpdG9yKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBjaGlsZCBlZGl0b3JzXG4gICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wXVxuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHByb3AsXG4gICAgICAgIHBhcmVudDogdGhpc1xuICAgICAgfSlcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB9KVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHRoaXMudmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIHRoaXMudmFsdWVbY2hpbGRFZGl0b3IuZ2V0S2V5KCldID0gY2hpbGRFZGl0b3IuZ2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2NvbG9yJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ21vbnRoJywgJ3NlYXJjaCcsICd0ZWwnLCAndGV4dCcsICd0aW1lJywgJ3VybCcsICd3ZWVrJ11cbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6ICd0ZXh0JyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIEludGVnZXJFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige31cblxuZXhwb3J0IGRlZmF1bHQgSW50ZWdlckVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCBJbnRlZ2VyRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9pbnRlZ2VyJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIFJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBhbiBlZGl0b3IgY2xhc3MgaWYgdGhlIGNvbmRpdGlvbiBwYXNzXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHZlcnMgPSBbXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiBPYmplY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgcmV0dXJuIEFycmF5RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICAgICAgcmV0dXJuIEludGVnZXJFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnbnVsbCcpIHtcbiAgICAgICAgICByZXR1cm4gTnVsbEVkaXRvclxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSByZXNvbHZlciBmdW5jdGlvblxuICAgKi9cbiAgYWRkUmVzb2x2ZXIgKHJlc29sdmVyKSB7XG4gICAgdGhpcy5yZXNvbHZlcnMudW5zaGlmdChyZXNvbHZlcilcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBmaXJzdCBlZGl0b3IgY2xhc3MgdGhhdCBtYXRjaGVzIHRoZSBwYXNzZWQgc2NoZW1hLlxuICAgKi9cbiAgcmVzb2x2ZSAoc2NoZW1hKSB7XG4gICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgY29uc3QgZWRpdG9yQ2xhc3MgPSByZXNvbHZlcihzY2hlbWEpXG4gICAgICBpZiAodHlwZW9mIGVkaXRvckNsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZWRpdG9yQ2xhc3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb2x2ZXJcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVycm9yIG9iamVjdCBpZiB0aGUgdGhlIHZhbGlkYXRpb24gY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0b3JzID0ge1xuICAgICAgdHlwZTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICAgICAgc3RyaW5nOiB2YWx1ZSA9PiB1dGlscy5pc1N0cmluZyh2YWx1ZSksXG4gICAgICAgICAgbnVtYmVyOiB2YWx1ZSA9PiB1dGlscy5pc051bWJlcih2YWx1ZSksXG4gICAgICAgICAgaW50ZWdlcjogdmFsdWUgPT4gdXRpbHMuaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgICAgICBib29sZWFuOiB2YWx1ZSA9PiB1dGlscy5pc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgICAgIGFycmF5OiB2YWx1ZSA9PiB1dGlscy5pc0FycmF5KHZhbHVlKSxcbiAgICAgICAgICBvYmplY3Q6IHZhbHVlID0+IHV0aWxzLmlzT2JqZWN0KHZhbHVlKSxcbiAgICAgICAgICBudWxsOiB2YWx1ZSA9PiB0aGlzLmlzTnVsbCh2YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGVdKHZhbHVlKVxuXG4gICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgdW5pcXVlSXRlbXM6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXJyYXlUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdhcnJheSdcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHVuaXF1ZUl0ZW1zID0gc2NoZW1hLnVuaXF1ZUl0ZW1zXG4gICAgICAgIGNvbnN0IGhhc1VuaXF1ZUl0ZW1zQ29uc3RyYWluID0gdXRpbHMuaXNTZXQodW5pcXVlSXRlbXMpICYmIHV0aWxzLmlzQm9vbGVhbih1bmlxdWVJdGVtcylcbiAgICAgICAgaWYgKCFoYXNVbmlxdWVJdGVtc0NvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgICAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWVuW2l0ZW1dID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNVbmlxdWVJdGVtc0NvbnN0cmFpbiAmJiBoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1pbkl0ZW1zOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc0FycmF5VHlwZSA9IHNjaGVtYS50eXBlID09PSAnYXJyYXknXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtaW5JdGVtcyA9IHNjaGVtYS5taW5JdGVtc1xuICAgICAgICBjb25zdCBoYXNNaW5JdGVtc0NvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1pbkl0ZW1zKSAmJiB1dGlscy5pc051bWJlcihtaW5JdGVtcylcbiAgICAgICAgaWYgKCFoYXNNaW5JdGVtc0NvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWluSXRlbXNDb25zdHJhaW4gJiYgdmFsdWUubGVuZ3RoIDwgbWluSXRlbXMpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgbWluSXRlbXMgKyAnIGl0ZW1zJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtYXhJdGVtczogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBcnJheVR5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ2FycmF5J1xuICAgICAgICBpZiAoIWlzQXJyYXlUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWF4SXRlbXMgPSBzY2hlbWEubWF4SXRlbXNcbiAgICAgICAgY29uc3QgaGFzTWF4SXRlbXNDb25zdHJhaW4gPSB1dGlscy5pc1NldChtYXhJdGVtcykgJiYgdXRpbHMuaXNOdW1iZXIobWF4SXRlbXMpXG4gICAgICAgIGlmICghaGFzTWF4SXRlbXNDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01heEl0ZW1zQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA+IG1heEl0ZW1zKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgbWF4SXRlbXMgKyAnIGl0ZW1zJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtaW5MZW5ndGg6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3RyaW5nVHlwZSA9IHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICBpZiAoIWlzU3RyaW5nVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IHNjaGVtYS5taW5MZW5ndGhcbiAgICAgICAgY29uc3QgaGFzTWluTGVuZ3RoQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWluTGVuZ3RoKSAmJiB1dGlscy5pc051bWJlcihtaW5MZW5ndGgpXG4gICAgICAgIGlmICghaGFzTWluTGVuZ3RoQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNaW5MZW5ndGhDb25zdHJhaW4gJiYgdmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBtaW5MZW5ndGggKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWF4TGVuZ3RoOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N0cmluZ1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgaWYgKCFpc1N0cmluZ1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtYXhMZW5ndGggPSBzY2hlbWEubWF4TGVuZ3RoXG4gICAgICAgIGNvbnN0IGhhc01heExlbmd0aENvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1heExlbmd0aCkgJiYgdXRpbHMuaXNOdW1iZXIobWF4TGVuZ3RoKVxuICAgICAgICBpZiAoIWhhc01heExlbmd0aENvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWF4TGVuZ3RoQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA+IG1heExlbmd0aClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBtb3N0ICcgKyBtYXhMZW5ndGggKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgcGF0dGVybjogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgIGlmICghaXNTdHJpbmdUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgcGF0dGVybiA9IHNjaGVtYS5wYXR0ZXJuXG4gICAgICAgIGNvbnN0IGhhc1BhdHRlcm5Db25zdHJhaW4gPSB1dGlscy5pc1NldChwYXR0ZXJuKSAmJiB1dGlscy5pc1N0cmluZyhwYXR0ZXJuKVxuICAgICAgICBpZiAoIWhhc1BhdHRlcm5Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9IHJlZ2V4cC50ZXN0KHZhbHVlKVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc1BhdHRlcm5Db25zdHJhaW4gJiYgIW1hdGNoUGF0dGVybilcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHBhdHRlcm4sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWluaW11bTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGlmICghaXNOdW1lcmljVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGV4Y2x1c2l2ZU1pbmltdW0gPSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bVxuICAgICAgICBjb25zdCBtaW5pbXVtID0gc2NoZW1hLm1pbmltdW1cbiAgICAgICAgY29uc3QgaGFzTWluaW11bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1pbmltdW0pICYmIHV0aWxzLmlzTnVtYmVyKG1pbmltdW0pXG4gICAgICAgIGlmICghaGFzTWluaW11bUNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGhhc0V4Y2x1c2l2ZU1pbmltdW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChleGNsdXNpdmVNaW5pbXVtKSAmJiBleGNsdXNpdmVNaW5pbXVtID09PSB0cnVlXG4gICAgICAgIGNvbnN0IGZpbmFsTWluaW11bSA9IGhhc0V4Y2x1c2l2ZU1pbmltdW1Db25zdHJhaW4gPyBtaW5pbXVtICsgMSA6IG1pbmltdW1cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNaW5pbXVtQ29uc3RyYWluICYmIHZhbHVlIDwgZmluYWxNaW5pbXVtKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBmaW5hbE1pbmltdW0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWF4aW11bTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGlmICghaXNOdW1lcmljVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGV4Y2x1c2l2ZU1heGltdW0gPSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICBjb25zdCBtYXhpbXVtID0gc2NoZW1hLm1heGltdW1cbiAgICAgICAgY29uc3QgaGFzTWF4aW11bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1heGltdW0pICYmIHV0aWxzLmlzTnVtYmVyKG1heGltdW0pXG4gICAgICAgIGlmICghaGFzTWF4aW11bUNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGhhc0V4Y2x1c2l2ZU1heGltdW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChleGNsdXNpdmVNYXhpbXVtKSAmJiBleGNsdXNpdmVNYXhpbXVtID09PSB0cnVlXG4gICAgICAgIGNvbnN0IGZpbmFsTWF4aW11bSA9IGhhc0V4Y2x1c2l2ZU1heGltdW1Db25zdHJhaW4gPyBtYXhpbXVtIC0gMSA6IG1heGltdW1cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNYXhpbXVtQ29uc3RyYWluICYmIHZhbHVlID4gZmluYWxNYXhpbXVtKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgZmluYWxNYXhpbXVtLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG11bHRpcGxlT2Y6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoIWlzTnVtZXJpY1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtdWx0aXBsZU9mID0gc2NoZW1hLm11bHRpcGxlT2ZcbiAgICAgICAgY29uc3QgaGFzTXVsdGlwbGVPZkNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG11bHRpcGxlT2YpICYmIHV0aWxzLmlzTnVtYmVyKG11bHRpcGxlT2YpXG4gICAgICAgIGlmICghaGFzTXVsdGlwbGVPZkNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIG11bHRpcGxlT2YgPT09IE1hdGguZmxvb3IodmFsdWUgLyBtdWx0aXBsZU9mKSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNdWx0aXBsZU9mQ29uc3RyYWluICYmICFpc011bHRpcGxlT2YpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbXVsdGlwbGUgb2YgJyArIG11bHRpcGxlT2YsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgY29uc3Q6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9jb25zdCA9IHNjaGVtYS5jb25zdFxuICAgICAgICBjb25zdCBoYXNDb25zdENvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KF9jb25zdClcbiAgICAgICAgaWYgKCFoYXNDb25zdENvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gKEpTT04uc3RyaW5naWZ5KHZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkoX2NvbnN0KSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNDb25zdENvbnN0cmFpbiAmJiB2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHZhbHVlOiAnICsgX2NvbnN0LFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGVudW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbnVtID0gc2NoZW1hLmVudW1cbiAgICAgICAgY29uc3QgaGFzRW51bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KF9lbnVtKSAmJiB1dGlscy5pc0FycmF5KF9lbnVtKVxuICAgICAgICBpZiAoIWhhc0VudW1Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCB2YWx1ZU5vdEluRW51bSA9ICFfZW51bS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNFbnVtQ29uc3RyYWluICYmIHZhbHVlTm90SW5FbnVtKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdWYWx1ZSBtdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdmFsaWRhdG9yIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRWYWxpZGF0b3IgKG5hbWUsIHZhbGlkYXRvcikge1xuICAgIHRoaXMudmFsaWRhdG9yc1tuYW1lXSA9IHZhbGlkYXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlIChzY2hlbWEsIHZhbHVlLCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cbiAgICBPYmplY3Qua2V5cyh0aGlzLnZhbGlkYXRvcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JzW2tleV1cbiAgICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdG9yKHNjaGVtYSwgdmFsdWUsIHBhdGgpXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcbmltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRvcidcblxuY2xhc3MgSmVkaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKClcbiAgICB0aGlzLnJlc29sdmVyID0gbmV3IFJlc29sdmVyKClcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lclxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLmVkaXRvcnMgPSB7fVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLmxvYWRFZGl0b3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF1cbiAgfVxuXG4gIGxvYWRFZGl0b3JzICgpIHtcbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLWxvYWRlZCcpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBlZGl0b3IgaW5zdGFuY2UgYmFzZWQgb24gdGhlIHBhc3NlZCBzY2hlbWEgYW5kIGNvbmZpZ1xuICAgKi9cbiAgY3JlYXRlRWRpdG9yIChjb25maWcpIHtcbiAgICAvLyB0b2RvIGV4cGFuZCBkZWZzXG4gICAgcmV0dXJuIG5ldyAodGhpcy5yZXNvbHZlci5yZXNvbHZlKGNvbmZpZy5zY2hlbWEpKShjb25maWcpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICBnZXRFZGl0b3IgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JzW3BhdGhdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==