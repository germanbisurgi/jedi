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
          var value = src_utils.clone(_this2.getValue());
          value[itemIndex] = src_utils.clone(itemEditor.getValue());

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

/* harmony default export */ var string = (string_StringEditor);
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

/* harmony default export */ var number = (number_NumberEditor);
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
}(number);

/* harmony default export */ var integer = (integer_IntegerEditor);
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
    }, function (schema) {
      if (schema.type === 'number') {
        return number;
      }
    }, function (schema) {
      if (schema.type === 'integer') {
        return integer;
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(5);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

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
            return _this.isString(value);
          },
          number: function number(value) {
            return _this.isNumber(value);
          },
          integer: function integer(value) {
            return _this.isInteger(value);
          },
          "boolean": function boolean(value) {
            return _this.isBoolean(value);
          },
          array: function array(value) {
            return _this.isArray(value);
          },
          object: function object(value) {
            return _this.isObject(value);
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

        var hasUniqueItemsConstrain = _this.isSet(uniqueItems) && _this.isBoolean(uniqueItems);

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

        var hasMinItemsConstrain = _this.isSet(minItems) && _this.isNumber(minItems);

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

        var hasMaxItemsConstrain = _this.isSet(maxItems) && _this.isNumber(maxItems);

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

        var hasMinLengthConstrain = _this.isSet(minLength) && _this.isNumber(minLength);

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

        var hasMaxLengthConstrain = _this.isSet(maxLength) && _this.isNumber(maxLength);

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

        var hasPatternConstrain = _this.isSet(pattern) && _this.isString(pattern);

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

        var hasMinimumConstrain = _this.isSet(minimum) && _this.isNumber(minimum);

        if (!hasMinimumConstrain) return;
        var hasExclusiveMinimumConstrain = _this.isSet(exclusiveMinimum) && exclusiveMinimum === true;
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

        var hasMaximumConstrain = _this.isSet(maximum) && _this.isNumber(maximum);

        if (!hasMaximumConstrain) return;
        var hasExclusiveMaximumConstrain = _this.isSet(exclusiveMaximum) && exclusiveMaximum === true;
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

        var hasMultipleOfConstrain = _this.isSet(multipleOf) && _this.isNumber(multipleOf);

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

        var hasConstConstrain = _this.isSet(_const);

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

        var hasEnumConstrain = _this.isSet(_enum) && _this.isArray(_enum);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRoZW1lIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsIm1lc3NhZ2UiLCJlcnJvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwYXRoIiwiZ2V0QXR0cmlidXRlIiwic2VsZWN0b3IiLCJlcnJvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJ0ZXh0IiwiYnV0dG9uIiwibGFiZWxUZXh0IiwibGFiZWwiLCJzZXRBdHRyaWJ1dGVzIiwiaW5wdXQiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwic2VsZWN0SWQiLCJzZWxlY3QiLCJ2YWx1ZSIsImluZGV4Iiwib3B0aW9uIiwib3V0cHV0IiwiRWRpdG9yIiwiY29uZmlnIiwiamVkaSIsInNjaGVtYSIsInVuZGVmaW5lZCIsInBhcmVudCIsImNoaWxkRWRpdG9ycyIsImluaXQiLCJzZXRDb250YWluZXIiLCJidWlsZCIsInNldERlZmF1bHRWYWx1ZSIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwicmVnaXN0ZXIiLCJzcGxpdCIsInBvcCIsInRoZW1lIiwiZ2V0Q29udGFpbmVyIiwidHlwZSIsInJlZ2lzdGVyRWRpdG9yIiwidW5yZWdpc3RlckVkaXRvciIsInNldFZhbHVlIiwibmV3VmFsdWUiLCJpbml0aWFsIiwic2FuaXRpemUiLCJjdXJyZW50VmFsdWUiLCJnZXRWYWx1ZSIsIm9uQ2hhbmdlIiwicmVmcmVzaFVJIiwidmFsaWRhdG9yIiwidmFsaWRhdGUiLCJyZW1vdmVJbnB1dEVycm9yIiwiYWRkSW5wdXRFcnJvciIsInVucmVnaXN0ZXIiLCJ1dGlscyIsImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJBcnJheUVkaXRvciIsInRpdGxlIiwiZ2V0TGFiZWwiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsIml0ZW1FZGl0b3IiLCJjcmVhdGVFZGl0b3IiLCJpdGVtcyIsImxlbmd0aCIsIml0ZW1JbmRleCIsIk51bWJlciIsImdldEtleSIsImRlbGV0ZUJ0biIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiZnJvbUluZGV4IiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjcmVhdGVJdGVtRWRpdG9yIiwicHVzaCIsImRlc3Ryb3kiLCJ3aW5kb3ciLCJjb25maXJtIiwiZmlsdGVyIiwiZWRpdG9yIiwiQm9vbGVhbkVkaXRvciIsImdldElucHV0IiwiaWQiLCJjaGVja2VkIiwiQm9vbGVhbiIsIk9iamVjdEVkaXRvciIsInByb3BlcnRpZXMiLCJwcm9wIiwiY2hpbGRFZGl0b3IiLCJTdHJpbmdFZGl0b3IiLCJpbnB1dFR5cGVzIiwiaW5jbHVkZXMiLCJmb3JtYXQiLCJTdHJpbmciLCJOdW1iZXJFZGl0b3IiLCJJbnRlZ2VyRWRpdG9yIiwiTnVsbEVkaXRvciIsIlJlc29sdmVyIiwicmVzb2x2ZXJzIiwicmVzb2x2ZXIiLCJ1bnNoaWZ0IiwiZWRpdG9yQ2xhc3MiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwidHlwZXMiLCJzdHJpbmciLCJpc1N0cmluZyIsIm51bWJlciIsImlzTnVtYmVyIiwiaW50ZWdlciIsImlzSW50ZWdlciIsImlzQm9vbGVhbiIsImFycmF5IiwiaXNBcnJheSIsIm9iamVjdCIsImlzT2JqZWN0IiwiaXNOdWxsIiwidmFsaWQiLCJ1bmlxdWVJdGVtcyIsImlzQXJyYXlUeXBlIiwiaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4iLCJpc1NldCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJpIiwiaW52YWxpZCIsIm1pbkl0ZW1zIiwiaGFzTWluSXRlbXNDb25zdHJhaW4iLCJtYXhJdGVtcyIsImhhc01heEl0ZW1zQ29uc3RyYWluIiwibWluTGVuZ3RoIiwiaXNTdHJpbmdUeXBlIiwiaGFzTWluTGVuZ3RoQ29uc3RyYWluIiwibWF4TGVuZ3RoIiwiaGFzTWF4TGVuZ3RoQ29uc3RyYWluIiwicGF0dGVybiIsImhhc1BhdHRlcm5Db25zdHJhaW4iLCJyZWdleHAiLCJSZWdFeHAiLCJtYXRjaFBhdHRlcm4iLCJ0ZXN0IiwibWluaW11bSIsImlzTnVtZXJpY1R5cGUiLCJleGNsdXNpdmVNaW5pbXVtIiwiaGFzTWluaW11bUNvbnN0cmFpbiIsImhhc0V4Y2x1c2l2ZU1pbmltdW1Db25zdHJhaW4iLCJmaW5hbE1pbmltdW0iLCJtYXhpbXVtIiwiZXhjbHVzaXZlTWF4aW11bSIsImhhc01heGltdW1Db25zdHJhaW4iLCJoYXNFeGNsdXNpdmVNYXhpbXVtQ29uc3RyYWluIiwiZmluYWxNYXhpbXVtIiwibXVsdGlwbGVPZiIsImhhc011bHRpcGxlT2ZDb25zdHJhaW4iLCJpc011bHRpcGxlT2YiLCJNYXRoIiwiZmxvb3IiLCJfY29uc3QiLCJoYXNDb25zdENvbnN0cmFpbiIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiX2VudW0iLCJoYXNFbnVtQ29uc3RyYWluIiwidmFsdWVOb3RJbkVudW0iLCJzb21lIiwiZSIsIm5hbWUiLCJBcnJheSIsIkplZGkiLCJyb290IiwiZWRpdG9ycyIsImxvYWRFZGl0b3JzIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFD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QjtBQUU1QkMsY0FBTSxFQUFFLEtBQUtBO0FBRmUsT0FBbEIsQ0FBWjtBQUlBLFdBQUtoQyxTQUFMLENBQWVRLFdBQWYsQ0FBMkIsS0FBS21MLElBQUwsQ0FBVTNMLFNBQXJDO0FBQ0EsV0FBS0EsU0FBTCxDQUFlSyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixhQUE3QjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usc0JBQWN3QixNQUFkLEVBQXNCO0FBQ3BCO0FBQ0EsYUFBTyxLQUFLLEtBQUt3RixRQUFMLENBQWN3RSxPQUFkLENBQXNCaEssTUFBTSxDQUFDRSxNQUE3QixDQUFMLEVBQTJDRixNQUEzQyxDQUFQO0FBQ0Q7OztXQUVELG9CQUFZO0FBQ1YsYUFBTyxLQUFLNkosSUFBTCxDQUFVckksUUFBVixFQUFQO0FBQ0Q7OztXQUVELG1CQUFXN0MsSUFBWCxFQUFpQjtBQUNmLGFBQU8sS0FBS21MLE9BQUwsQ0FBYW5MLElBQWIsQ0FBUDtBQUNEOzs7Ozs7QUFHWWlMLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJjbGFzcyBUaGVtZSB7XG4gIHNldEF0dHJpYnV0ZXMgKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSBzcGVjaWZpZWQgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIGFkZElucHV0RXJyb3IgKGNvbnRhaW5lciwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IG1lc3NhZ2VcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3IpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbnkgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHJlbW92ZUlucHV0RXJyb3IgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHBhdGggPSBjb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnKVxuICAgIGNvbnN0IHNlbGVjdG9yID0gJ1tkYXRhLXBhdGg9XCInICsgcGF0aCArICdcIl0gPiAuamVkaS1lcnJvci1tZXNzYWdlJ1xuICAgIGNvbnN0IGVycm9ycyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGVycm9yKVxuICAgIH0pXG4gIH1cblxuICBnZXRCdXR0b24gKHRleHQpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGFiZWwgKGxhYmVsVGV4dCwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHRcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMobGFiZWwsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRJbnB1dCAoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuc2V0QXR0cmlidXRlcyhpbnB1dCwgYXR0cmlidXRlcylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldFNlbGVjdCAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCBzZWxlY3RJZCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBzZWxlY3RJZClcbiAgICBvcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0T3V0cHV0IChhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0JylcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMob3V0cHV0LCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgYnVpbGQgcGlwZWxpbmUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5zZXRDb250YWluZXIoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgfVxuXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCgnLicpLnBvcCgpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkIHRoZSBlZGl0b3IncyB1c2VyIGludGVyZmFjZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGRlZmF1bHQgdmFsdWUgaW4gdGhlIHByb3BlcnR5IFwiZGVmYXVsdFwiIGlzIHNldCBpbiB0aGUgc2NoZW1hXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5kZWZhdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIHZhbHVlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgdmFsdWUgYW5kIGNhbGxzIHJlZnJlc2hVSSByaWdodCBhZnRlci4gVGhlIG9uQ2hhbmdlIG1ldGhvZFxuICAgKiB3aWxsIGJlIGNhbGxlZCBpZiB0aGUgbmV3IHZhbHVlIGlzIG5vdCBhbiBpbml0aWFsIG9yIGRlZmF1bHQgdmFsdWUgYW5kIHRoZVxuICAgKiBuZXcgdmFsdWUgaXMgZGlmZmVyZW50IHRoYW4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIGluaXRpYWwgPSBmYWxzZSkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcblxuICAgIGlmICghaW5pdGlhbCAmJiBjdXJyZW50VmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKClcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgVUkgb2YgdGhlIGVkaXRvciB0byByZWZsZWN0IGl0J3MgdmFsdWUuIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW5cbiAgICogdXNpbmcgc2V0VmFsdWUgdG8gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEsIHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5wYXRoKVxuICAgIHRoaXMuamVkaS50aGVtZS5yZW1vdmVJbnB1dEVycm9yKHRoaXMuY29udGFpbmVyKVxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5qZWRpLnRoZW1lLmFkZElucHV0RXJyb3IodGhpcy5jb250YWluZXIsIGVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgZWRpdG9yIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZSAoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudC5vbkNoYW5nZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3IsIGFuZCBldmVyeSByZWZlcmVuY2UgdGhhdCBpdCBpcyBhdHRhY2hlZCB0byBpdC5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMudW5yZWdpc3RlcigpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJjb25zdCB1dGlscyA9IHtcbiAgY2xvbmU6ICh0aGluZykgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGFkZEJ0blxuICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ2FkZCcpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWRkSXRlbSgpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1FZGl0b3IgKCkge1xuICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWEuaXRlbXMsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGgsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IuZ2V0S2V5KCkpXG5cbiAgICBpZiAoaXRlbUVkaXRvci5pbnB1dCkge1xuICAgICAgaXRlbUVkaXRvci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgICB2YWx1ZVtpdGVtSW5kZXhdID0gdXRpbHMuY2xvbmUoaXRlbUVkaXRvci5nZXRWYWx1ZSgpKVxuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdkZWxldGUnKVxuICAgIGl0ZW1FZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICB0aGlzLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdtb3ZlIHVwJylcbiAgICAgIGl0ZW1FZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ21vdmUgZG93bicpXG4gICAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbUVkaXRvclxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtRWRpdG9yKClcbiAgICBjb25zdCB2YWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBpZiAod2luZG93LmNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlJykpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycyA9IFtdXG5cbiAgICB0aGlzLmdldFZhbHVlKCkuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoKVxuICAgICAgaXRlbUVkaXRvci5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnB1c2goaXRlbUVkaXRvcilcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gY2hpbGQgZWRpdG9yc1xuICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcF1cbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBwcm9wLFxuICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChlZGl0b3IpXG4gICAgfSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICB0aGlzLnZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlW2NoaWxkRWRpdG9yLmdldEtleSgpXSA9IGNoaWxkRWRpdG9yLmdldFZhbHVlKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydjb2xvcicsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdtb250aCcsICdzZWFyY2gnLCAndGVsJywgJ3RleHQnLCAndGltZScsICd1cmwnLCAnd2VlayddXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiAndGV4dCcsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBJbnRlZ2VyRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHt9XG5cbmV4cG9ydCBkZWZhdWx0IEludGVnZXJFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9vYmplY3QnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udW1iZXInXG5pbXBvcnQgSW50ZWdlckVkaXRvciBmcm9tICcuL2VkaXRvcnMvaW50ZWdlcidcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udWxsJ1xuXG5jbGFzcyBSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZWRpdG9yIGNsYXNzIGlmIHRoZSBjb25kaXRpb24gcGFzc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x2ZXJzID0gW1xuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgIHJldHVybiBBcnJheUVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlckVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgICAgIHJldHVybiBJbnRlZ2VyRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgcmV0dXJuIE51bGxFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcmVzb2x2ZXIgZnVuY3Rpb25cbiAgICovXG4gIGFkZFJlc29sdmVyIChyZXNvbHZlcikge1xuICAgIHRoaXMucmVzb2x2ZXJzLnVuc2hpZnQocmVzb2x2ZXIpXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHJlc29sdmUgKHNjaGVtYSkge1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgIGNvbnN0IGVkaXRvckNsYXNzID0gcmVzb2x2ZXIoc2NoZW1hKVxuICAgICAgaWYgKHR5cGVvZiBlZGl0b3JDbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvckNsYXNzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc29sdmVyXG4iLCJjbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVycm9yIG9iamVjdCBpZiB0aGUgdGhlIHZhbGlkYXRpb24gY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0b3JzID0ge1xuICAgICAgdHlwZTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICAgICAgc3RyaW5nOiB2YWx1ZSA9PiB0aGlzLmlzU3RyaW5nKHZhbHVlKSxcbiAgICAgICAgICBudW1iZXI6IHZhbHVlID0+IHRoaXMuaXNOdW1iZXIodmFsdWUpLFxuICAgICAgICAgIGludGVnZXI6IHZhbHVlID0+IHRoaXMuaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgICAgICBib29sZWFuOiB2YWx1ZSA9PiB0aGlzLmlzQm9vbGVhbih2YWx1ZSksXG4gICAgICAgICAgYXJyYXk6IHZhbHVlID0+IHRoaXMuaXNBcnJheSh2YWx1ZSksXG4gICAgICAgICAgb2JqZWN0OiB2YWx1ZSA9PiB0aGlzLmlzT2JqZWN0KHZhbHVlKSxcbiAgICAgICAgICBudWxsOiB2YWx1ZSA9PiB0aGlzLmlzTnVsbCh2YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGVdKHZhbHVlKVxuXG4gICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgdW5pcXVlSXRlbXM6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXJyYXlUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdhcnJheSdcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHVuaXF1ZUl0ZW1zID0gc2NoZW1hLnVuaXF1ZUl0ZW1zXG4gICAgICAgIGNvbnN0IGhhc1VuaXF1ZUl0ZW1zQ29uc3RyYWluID0gdGhpcy5pc1NldCh1bmlxdWVJdGVtcykgJiYgdGhpcy5pc0Jvb2xlYW4odW5pcXVlSXRlbXMpXG4gICAgICAgIGlmICghaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBzZWVuID0ge31cbiAgICAgICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4gJiYgaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtaW5JdGVtczogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBcnJheVR5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ2FycmF5J1xuICAgICAgICBpZiAoIWlzQXJyYXlUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWluSXRlbXMgPSBzY2hlbWEubWluSXRlbXNcbiAgICAgICAgY29uc3QgaGFzTWluSXRlbXNDb25zdHJhaW4gPSB0aGlzLmlzU2V0KG1pbkl0ZW1zKSAmJiB0aGlzLmlzTnVtYmVyKG1pbkl0ZW1zKVxuICAgICAgICBpZiAoIWhhc01pbkl0ZW1zQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNaW5JdGVtc0NvbnN0cmFpbiAmJiB2YWx1ZS5sZW5ndGggPCBtaW5JdGVtcylcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBtaW5JdGVtcyArICcgaXRlbXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heEl0ZW1zOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc0FycmF5VHlwZSA9IHNjaGVtYS50eXBlID09PSAnYXJyYXknXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtYXhJdGVtcyA9IHNjaGVtYS5tYXhJdGVtc1xuICAgICAgICBjb25zdCBoYXNNYXhJdGVtc0NvbnN0cmFpbiA9IHRoaXMuaXNTZXQobWF4SXRlbXMpICYmIHRoaXMuaXNOdW1iZXIobWF4SXRlbXMpXG4gICAgICAgIGlmICghaGFzTWF4SXRlbXNDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01heEl0ZW1zQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA+IG1heEl0ZW1zKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgbWF4SXRlbXMgKyAnIGl0ZW1zJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtaW5MZW5ndGg6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3RyaW5nVHlwZSA9IHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICBpZiAoIWlzU3RyaW5nVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IHNjaGVtYS5taW5MZW5ndGhcbiAgICAgICAgY29uc3QgaGFzTWluTGVuZ3RoQ29uc3RyYWluID0gdGhpcy5pc1NldChtaW5MZW5ndGgpICYmIHRoaXMuaXNOdW1iZXIobWluTGVuZ3RoKVxuICAgICAgICBpZiAoIWhhc01pbkxlbmd0aENvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWluTGVuZ3RoQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgbWluTGVuZ3RoICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heExlbmd0aDogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgIGlmICghaXNTdHJpbmdUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gc2NoZW1hLm1heExlbmd0aFxuICAgICAgICBjb25zdCBoYXNNYXhMZW5ndGhDb25zdHJhaW4gPSB0aGlzLmlzU2V0KG1heExlbmd0aCkgJiYgdGhpcy5pc051bWJlcihtYXhMZW5ndGgpXG4gICAgICAgIGlmICghaGFzTWF4TGVuZ3RoQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNYXhMZW5ndGhDb25zdHJhaW4gJiYgdmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IG1vc3QgJyArIG1heExlbmd0aCArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBwYXR0ZXJuOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N0cmluZ1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgaWYgKCFpc1N0cmluZ1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBwYXR0ZXJuID0gc2NoZW1hLnBhdHRlcm5cbiAgICAgICAgY29uc3QgaGFzUGF0dGVybkNvbnN0cmFpbiA9IHRoaXMuaXNTZXQocGF0dGVybikgJiYgdGhpcy5pc1N0cmluZyhwYXR0ZXJuKVxuICAgICAgICBpZiAoIWhhc1BhdHRlcm5Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9IHJlZ2V4cC50ZXN0KHZhbHVlKVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc1BhdHRlcm5Db25zdHJhaW4gJiYgIW1hdGNoUGF0dGVybilcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHBhdHRlcm4sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWluaW11bTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGlmICghaXNOdW1lcmljVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGV4Y2x1c2l2ZU1pbmltdW0gPSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bVxuICAgICAgICBjb25zdCBtaW5pbXVtID0gc2NoZW1hLm1pbmltdW1cbiAgICAgICAgY29uc3QgaGFzTWluaW11bUNvbnN0cmFpbiA9IHRoaXMuaXNTZXQobWluaW11bSkgJiYgdGhpcy5pc051bWJlcihtaW5pbXVtKVxuICAgICAgICBpZiAoIWhhc01pbmltdW1Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBoYXNFeGNsdXNpdmVNaW5pbXVtQ29uc3RyYWluID0gdGhpcy5pc1NldChleGNsdXNpdmVNaW5pbXVtKSAmJiBleGNsdXNpdmVNaW5pbXVtID09PSB0cnVlXG4gICAgICAgIGNvbnN0IGZpbmFsTWluaW11bSA9IGhhc0V4Y2x1c2l2ZU1pbmltdW1Db25zdHJhaW4gPyBtaW5pbXVtICsgMSA6IG1pbmltdW1cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNaW5pbXVtQ29uc3RyYWluICYmIHZhbHVlIDwgZmluYWxNaW5pbXVtKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBmaW5hbE1pbmltdW0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWF4aW11bTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGlmICghaXNOdW1lcmljVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGV4Y2x1c2l2ZU1heGltdW0gPSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICBjb25zdCBtYXhpbXVtID0gc2NoZW1hLm1heGltdW1cbiAgICAgICAgY29uc3QgaGFzTWF4aW11bUNvbnN0cmFpbiA9IHRoaXMuaXNTZXQobWF4aW11bSkgJiYgdGhpcy5pc051bWJlcihtYXhpbXVtKVxuICAgICAgICBpZiAoIWhhc01heGltdW1Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBoYXNFeGNsdXNpdmVNYXhpbXVtQ29uc3RyYWluID0gdGhpcy5pc1NldChleGNsdXNpdmVNYXhpbXVtKSAmJiBleGNsdXNpdmVNYXhpbXVtID09PSB0cnVlXG4gICAgICAgIGNvbnN0IGZpbmFsTWF4aW11bSA9IGhhc0V4Y2x1c2l2ZU1heGltdW1Db25zdHJhaW4gPyBtYXhpbXVtIC0gMSA6IG1heGltdW1cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNYXhpbXVtQ29uc3RyYWluICYmIHZhbHVlID4gZmluYWxNYXhpbXVtKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgZmluYWxNYXhpbXVtLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG11bHRpcGxlT2Y6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoIWlzTnVtZXJpY1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtdWx0aXBsZU9mID0gc2NoZW1hLm11bHRpcGxlT2ZcbiAgICAgICAgY29uc3QgaGFzTXVsdGlwbGVPZkNvbnN0cmFpbiA9IHRoaXMuaXNTZXQobXVsdGlwbGVPZikgJiYgdGhpcy5pc051bWJlcihtdWx0aXBsZU9mKVxuICAgICAgICBpZiAoIWhhc011bHRpcGxlT2ZDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBtdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gbXVsdGlwbGVPZikpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTXVsdGlwbGVPZkNvbnN0cmFpbiAmJiAhaXNNdWx0aXBsZU9mKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG11bHRpcGxlIG9mICcgKyBtdWx0aXBsZU9mLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNvbnN0OiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBfY29uc3QgPSBzY2hlbWEuY29uc3RcbiAgICAgICAgY29uc3QgaGFzQ29uc3RDb25zdHJhaW4gPSB0aGlzLmlzU2V0KF9jb25zdClcbiAgICAgICAgaWYgKCFoYXNDb25zdENvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gKEpTT04uc3RyaW5naWZ5KHZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkoX2NvbnN0KSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNDb25zdENvbnN0cmFpbiAmJiB2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHZhbHVlOiAnICsgX2NvbnN0LFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGVudW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbnVtID0gc2NoZW1hLmVudW1cbiAgICAgICAgY29uc3QgaGFzRW51bUNvbnN0cmFpbiA9IHRoaXMuaXNTZXQoX2VudW0pICYmIHRoaXMuaXNBcnJheShfZW51bSlcbiAgICAgICAgaWYgKCFoYXNFbnVtQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgdmFsdWVOb3RJbkVudW0gPSAhX2VudW0uc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRW51bUNvbnN0cmFpbiAmJiB2YWx1ZU5vdEluRW51bSlcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnVmFsdWUgbXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbGlkYXRvciBmdW5jdGlvblxuICAgKi9cbiAgYWRkVmFsaWRhdG9yIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnNbbmFtZV0gPSB2YWxpZGF0b3JcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG4gICAgT2JqZWN0LmtleXModGhpcy52YWxpZGF0b3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yc1trZXldXG4gICAgICBjb25zdCBlcnJvciA9IHZhbGlkYXRvcihzY2hlbWEsIHZhbHVlLCBwYXRoKVxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaXNTZXQgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgfVxuXG4gIGlzTnVtYmVyICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG4gIH1cblxuICBpc0ludGVnZXIgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxuICB9XG5cbiAgaXNTdHJpbmcgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgfVxuXG4gIGlzQm9vbGVhbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgfVxuXG4gIGlzQXJyYXkgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gIH1cblxuICBpc09iamVjdCAodmFsdWUpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNOdWxsKHZhbHVlKSAmJiAhdGhpcy5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG4gIH1cblxuICBpc051bGwgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcbmltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRvcidcblxuY2xhc3MgSmVkaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKClcbiAgICB0aGlzLnJlc29sdmVyID0gbmV3IFJlc29sdmVyKClcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lclxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLmVkaXRvcnMgPSB7fVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLmxvYWRFZGl0b3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF1cbiAgfVxuXG4gIGxvYWRFZGl0b3JzICgpIHtcbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLWxvYWRlZCcpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBlZGl0b3IgaW5zdGFuY2UgYmFzZWQgb24gdGhlIHBhc3NlZCBzY2hlbWEgYW5kIGNvbmZpZ1xuICAgKi9cbiAgY3JlYXRlRWRpdG9yIChjb25maWcpIHtcbiAgICAvLyB0b2RvIGV4cGFuZCBkZWZzXG4gICAgcmV0dXJuIG5ldyAodGhpcy5yZXNvbHZlci5yZXNvbHZlKGNvbmZpZy5zY2hlbWEpKShjb25maWcpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICBnZXRFZGl0b3IgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JzW3BhdGhdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==