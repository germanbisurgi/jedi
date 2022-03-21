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
      var itemIndex = itemEditor.getKey();

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
        var hasConstConstrain = _this.isSet(schema["const"]);

        if (hasConstConstrain && JSON.stringify(schema["const"]) !== JSON.stringify(value)) {
          return {
            message: 'error const',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRoZW1lIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsIm1lc3NhZ2UiLCJlcnJvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwYXRoIiwiZ2V0QXR0cmlidXRlIiwic2VsZWN0b3IiLCJlcnJvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJ0ZXh0IiwiYnV0dG9uIiwibGFiZWxUZXh0IiwibGFiZWwiLCJzZXRBdHRyaWJ1dGVzIiwiaW5wdXQiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwic2VsZWN0SWQiLCJzZWxlY3QiLCJ2YWx1ZSIsImluZGV4Iiwib3B0aW9uIiwib3V0cHV0IiwiRWRpdG9yIiwiY29uZmlnIiwiamVkaSIsInNjaGVtYSIsInVuZGVmaW5lZCIsInBhcmVudCIsImNoaWxkRWRpdG9ycyIsImluaXQiLCJzZXRDb250YWluZXIiLCJidWlsZCIsInNldERlZmF1bHRWYWx1ZSIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwicmVnaXN0ZXIiLCJzcGxpdCIsInBvcCIsInRoZW1lIiwiZ2V0Q29udGFpbmVyIiwidHlwZSIsInJlZ2lzdGVyRWRpdG9yIiwidW5yZWdpc3RlckVkaXRvciIsInNldFZhbHVlIiwibmV3VmFsdWUiLCJpbml0aWFsIiwic2FuaXRpemUiLCJjdXJyZW50VmFsdWUiLCJnZXRWYWx1ZSIsIm9uQ2hhbmdlIiwicmVmcmVzaFVJIiwidmFsaWRhdG9yIiwidmFsaWRhdGUiLCJyZW1vdmVJbnB1dEVycm9yIiwiYWRkSW5wdXRFcnJvciIsInVucmVnaXN0ZXIiLCJ1dGlscyIsImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJBcnJheUVkaXRvciIsInRpdGxlIiwiZ2V0TGFiZWwiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsIml0ZW1FZGl0b3IiLCJjcmVhdGVFZGl0b3IiLCJpdGVtcyIsImxlbmd0aCIsIml0ZW1JbmRleCIsImdldEtleSIsImRlbGV0ZUJ0biIsIk51bWJlciIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiZnJvbUluZGV4IiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjcmVhdGVJdGVtRWRpdG9yIiwicHVzaCIsImRlc3Ryb3kiLCJ3aW5kb3ciLCJjb25maXJtIiwiZmlsdGVyIiwiZWRpdG9yIiwiQm9vbGVhbkVkaXRvciIsImdldElucHV0IiwiaWQiLCJjaGVja2VkIiwiQm9vbGVhbiIsIk9iamVjdEVkaXRvciIsInByb3BlcnRpZXMiLCJwcm9wIiwiY2hpbGRFZGl0b3IiLCJTdHJpbmdFZGl0b3IiLCJpbnB1dFR5cGVzIiwiaW5jbHVkZXMiLCJmb3JtYXQiLCJTdHJpbmciLCJOdW1iZXJFZGl0b3IiLCJJbnRlZ2VyRWRpdG9yIiwiTnVsbEVkaXRvciIsIlJlc29sdmVyIiwicmVzb2x2ZXJzIiwicmVzb2x2ZXIiLCJ1bnNoaWZ0IiwiZWRpdG9yQ2xhc3MiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwidHlwZXMiLCJzdHJpbmciLCJpc1N0cmluZyIsIm51bWJlciIsImlzTnVtYmVyIiwiaW50ZWdlciIsImlzSW50ZWdlciIsImlzQm9vbGVhbiIsImFycmF5IiwiaXNBcnJheSIsIm9iamVjdCIsImlzT2JqZWN0IiwiaXNOdWxsIiwidmFsaWQiLCJ1bmlxdWVJdGVtcyIsImlzQXJyYXlUeXBlIiwiaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4iLCJpc1NldCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJpIiwiaW52YWxpZCIsIm1pbkl0ZW1zIiwiaGFzTWluSXRlbXNDb25zdHJhaW4iLCJtYXhJdGVtcyIsImhhc01heEl0ZW1zQ29uc3RyYWluIiwibWluTGVuZ3RoIiwiaXNTdHJpbmdUeXBlIiwiaGFzTWluTGVuZ3RoQ29uc3RyYWluIiwibWF4TGVuZ3RoIiwiaGFzTWF4TGVuZ3RoQ29uc3RyYWluIiwicGF0dGVybiIsImhhc1BhdHRlcm5Db25zdHJhaW4iLCJyZWdleHAiLCJSZWdFeHAiLCJtYXRjaFBhdHRlcm4iLCJ0ZXN0IiwibWluaW11bSIsImlzTnVtZXJpY1R5cGUiLCJleGNsdXNpdmVNaW5pbXVtIiwiaGFzTWluaW11bUNvbnN0cmFpbiIsImhhc0V4Y2x1c2l2ZU1pbmltdW1Db25zdHJhaW4iLCJmaW5hbE1pbmltdW0iLCJtYXhpbXVtIiwiZXhjbHVzaXZlTWF4aW11bSIsImhhc01heGltdW1Db25zdHJhaW4iLCJoYXNFeGNsdXNpdmVNYXhpbXVtQ29uc3RyYWluIiwiZmluYWxNYXhpbXVtIiwibXVsdGlwbGVPZiIsImhhc011bHRpcGxlT2ZDb25zdHJhaW4iLCJpc011bHRpcGxlT2YiLCJNYXRoIiwiZmxvb3IiLCJoYXNDb25zdENvbnN0cmFpbiIsIm5hbWUiLCJBcnJheSIsIkplZGkiLCJyb290IiwiZWRpdG9ycyIsImxvYWRFZGl0b3JzIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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U0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsYUFBN0I7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLHNCQUFjd0IsTUFBZCxFQUFzQjtBQUNwQjtBQUNBLGFBQU8sS0FBSyxLQUFLd0YsUUFBTCxDQUFjaUUsT0FBZCxDQUFzQnpKLE1BQU0sQ0FBQ0UsTUFBN0IsQ0FBTCxFQUEyQ0YsTUFBM0MsQ0FBUDtBQUNEOzs7V0FFRCxvQkFBWTtBQUNWLGFBQU8sS0FBS3NKLElBQUwsQ0FBVTlILFFBQVYsRUFBUDtBQUNEOzs7V0FFRCxtQkFBVzdDLElBQVgsRUFBaUI7QUFDZixhQUFPLEtBQUs0SyxPQUFMLENBQWE1SyxJQUFiLENBQVA7QUFDRDs7Ozs7O0FBR1kwSyxpRkFBZixFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiY2xhc3MgVGhlbWUge1xuICBzZXRBdHRyaWJ1dGVzIChlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgc3BlY2lmaWVkIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBhZGRJbnB1dEVycm9yIChjb250YWluZXIsIG1lc3NhZ2UpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW55IGVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICByZW1vdmVJbnB1dEVycm9yIChjb250YWluZXIpIHtcbiAgICBjb25zdCBwYXRoID0gY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJylcbiAgICBjb25zdCBzZWxlY3RvciA9ICdbZGF0YS1wYXRoPVwiJyArIHBhdGggKyAnXCJdID4gLmplZGktZXJyb3ItbWVzc2FnZSdcbiAgICBjb25zdCBlcnJvcnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChlcnJvcilcbiAgICB9KVxuICB9XG5cbiAgZ2V0QnV0dG9uICh0ZXh0KSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExhYmVsIChsYWJlbFRleHQsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGxhYmVsLCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0SW5wdXQgKGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMoaW5wdXQsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRTZWxlY3QgKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgc2VsZWN0SWQpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgc2VsZWN0SWQpXG4gICAgb3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldE91dHB1dCAoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKG91dHB1dCwgYXR0cmlidXRlcylcbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiIsImNsYXNzIEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgJ3Jvb3QnXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLmNoaWxkRWRpdG9ycyA9IFtdXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGJ1aWxkIHBpcGVsaW5lIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5yZWdpc3RlcigpXG4gIH1cblxuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRDb250YWluZXIoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5wYXRoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5zY2hlbWEudHlwZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBidWlsZCB0aGUgZWRpdG9yJ3MgdXNlciBpbnRlcmZhY2VcbiAgICovXG4gIGJ1aWxkICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGluIHRoZSBqZWRpLmVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGlzIGVkaXRvciBpbnN0YW5jZSBmcm9tIHRoZSBqZWRpLmVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3RlckVkaXRvcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBkZWZhdWx0IHZhbHVlIGluIHRoZSBwcm9wZXJ0eSBcImRlZmF1bHRcIiBpcyBzZXQgaW4gdGhlIHNjaGVtYVxuICAgKi9cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHZhbHVlID0gW11cblxuICAgIGlmICh0eXBlb2YgdGhpcy5zY2hlbWEuZGVmYXVsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZGVmYXVsdFxuICAgIH1cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTYW5pdGl6ZSB2YWx1ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZWRpdG9yIHZhbHVlIGFuZCBjYWxscyByZWZyZXNoVUkgcmlnaHQgYWZ0ZXIuIFRoZSBvbkNoYW5nZSBtZXRob2RcbiAgICogd2lsbCBiZSBjYWxsZWQgaWYgdGhlIG5ldyB2YWx1ZSBpcyBub3QgYW4gaW5pdGlhbCBvciBkZWZhdWx0IHZhbHVlIGFuZCB0aGVcbiAgICogbmV3IHZhbHVlIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCBpbml0aWFsID0gZmFsc2UpIHtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuc2FuaXRpemUobmV3VmFsdWUpXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICBpZiAoIWluaXRpYWwgJiYgY3VycmVudFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSgpXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIFVJIG9mIHRoZSBlZGl0b3IgdG8gcmVmbGVjdCBpdCdzIHZhbHVlLiBUaGlzIGlzIG5lY2Vzc2FyeSB3aGVuXG4gICAqIHVzaW5nIHNldFZhbHVlIHRvIHNldCB0aGUgdmFsdWUgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIHJlZnJlc2hVSSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuc2NoZW1hLCB0aGlzLmdldFZhbHVlKCksIHRoaXMucGF0aClcbiAgICB0aGlzLmplZGkudGhlbWUucmVtb3ZlSW5wdXRFcnJvcih0aGlzLmNvbnRhaW5lcilcbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMuamVkaS50aGVtZS5hZGRJbnB1dEVycm9yKHRoaXMuY29udGFpbmVyLCBlcnJvci5tZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGVkaXRvciBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2UgKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQub25DaGFuZ2UoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yLCBhbmQgZXZlcnkgcmVmZXJlbmNlIHRoYXQgaXQgaXMgYXR0YWNoZWQgdG8gaXQuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiY29uc3QgdXRpbHMgPSB7XG4gIGNsb25lOiAodGhpbmcpID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1dGlsc1xuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBhZGRCdG5cbiAgICBjb25zdCBhZGRCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdhZGQnKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtRWRpdG9yICgpIHtcbiAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hLml0ZW1zLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IGl0ZW1FZGl0b3IuZ2V0S2V5KClcblxuICAgIGlmIChpdGVtRWRpdG9yLmlucHV0KSB7XG4gICAgICBpdGVtRWRpdG9yLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICAgIHZhbHVlW2l0ZW1JbmRleF0gPSB1dGlscy5jbG9uZShpdGVtRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ2RlbGV0ZScpXG4gICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcbiAgICAgIHRoaXMuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ21vdmUgdXAnKVxuICAgICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignbW92ZSBkb3duJylcbiAgICAgIGl0ZW1FZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtRWRpdG9yXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoKVxuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUnKSkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cblxuICAgIHRoaXMuZ2V0VmFsdWUoKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgICBpdGVtRWRpdG9yLnNldFZhbHVlKHZhbHVlLCB0cnVlKVxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChpdGVtRWRpdG9yKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBjaGlsZCBlZGl0b3JzXG4gICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wXVxuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHByb3AsXG4gICAgICAgIHBhcmVudDogdGhpc1xuICAgICAgfSlcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB9KVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHRoaXMudmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIHRoaXMudmFsdWVbY2hpbGRFZGl0b3IuZ2V0S2V5KCldID0gY2hpbGRFZGl0b3IuZ2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2NvbG9yJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ21vbnRoJywgJ3NlYXJjaCcsICd0ZWwnLCAndGV4dCcsICd0aW1lJywgJ3VybCcsICd3ZWVrJ11cbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6ICd0ZXh0JyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIEludGVnZXJFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige31cblxuZXhwb3J0IGRlZmF1bHQgSW50ZWdlckVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCBJbnRlZ2VyRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9pbnRlZ2VyJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIFJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBhbiBlZGl0b3IgY2xhc3MgaWYgdGhlIGNvbmRpdGlvbiBwYXNzXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHZlcnMgPSBbXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiBPYmplY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgcmV0dXJuIEFycmF5RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICAgICAgcmV0dXJuIEludGVnZXJFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnbnVsbCcpIHtcbiAgICAgICAgICByZXR1cm4gTnVsbEVkaXRvclxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSByZXNvbHZlciBmdW5jdGlvblxuICAgKi9cbiAgYWRkUmVzb2x2ZXIgKHJlc29sdmVyKSB7XG4gICAgdGhpcy5yZXNvbHZlcnMudW5zaGlmdChyZXNvbHZlcilcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBmaXJzdCBlZGl0b3IgY2xhc3MgdGhhdCBtYXRjaGVzIHRoZSBwYXNzZWQgc2NoZW1hLlxuICAgKi9cbiAgcmVzb2x2ZSAoc2NoZW1hKSB7XG4gICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgY29uc3QgZWRpdG9yQ2xhc3MgPSByZXNvbHZlcihzY2hlbWEpXG4gICAgICBpZiAodHlwZW9mIGVkaXRvckNsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZWRpdG9yQ2xhc3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb2x2ZXJcbiIsImNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZXJyb3Igb2JqZWN0IGlmIHRoZSB0aGUgdmFsaWRhdGlvbiBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRvcnMgPSB7XG4gICAgICB0eXBlOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgICAgICBzdHJpbmc6IHZhbHVlID0+IHRoaXMuaXNTdHJpbmcodmFsdWUpLFxuICAgICAgICAgIG51bWJlcjogdmFsdWUgPT4gdGhpcy5pc051bWJlcih2YWx1ZSksXG4gICAgICAgICAgaW50ZWdlcjogdmFsdWUgPT4gdGhpcy5pc0ludGVnZXIodmFsdWUpLFxuICAgICAgICAgIGJvb2xlYW46IHZhbHVlID0+IHRoaXMuaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgICAgICBhcnJheTogdmFsdWUgPT4gdGhpcy5pc0FycmF5KHZhbHVlKSxcbiAgICAgICAgICBvYmplY3Q6IHZhbHVlID0+IHRoaXMuaXNPYmplY3QodmFsdWUpLFxuICAgICAgICAgIG51bGw6IHZhbHVlID0+IHRoaXMuaXNOdWxsKHZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZV0odmFsdWUpXG5cbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICB1bmlxdWVJdGVtczogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBcnJheVR5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ2FycmF5J1xuICAgICAgICBpZiAoIWlzQXJyYXlUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgdW5pcXVlSXRlbXMgPSBzY2hlbWEudW5pcXVlSXRlbXNcbiAgICAgICAgY29uc3QgaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4gPSB0aGlzLmlzU2V0KHVuaXF1ZUl0ZW1zKSAmJiB0aGlzLmlzQm9vbGVhbih1bmlxdWVJdGVtcylcbiAgICAgICAgY29uc3Qgc2VlbiA9IHt9XG4gICAgICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkodmFsdWVbaV0pXG4gICAgICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc1VuaXF1ZUl0ZW1zQ29uc3RyYWluICYmIGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWluSXRlbXM6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXJyYXlUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdhcnJheSdcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1pbkl0ZW1zID0gc2NoZW1hLm1pbkl0ZW1zXG4gICAgICAgIGNvbnN0IGhhc01pbkl0ZW1zQ29uc3RyYWluID0gdGhpcy5pc1NldChtaW5JdGVtcykgJiYgdGhpcy5pc051bWJlcihtaW5JdGVtcylcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNaW5JdGVtc0NvbnN0cmFpbiAmJiB2YWx1ZS5sZW5ndGggPCBtaW5JdGVtcylcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBtaW5JdGVtcyArICcgaXRlbXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heEl0ZW1zOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc0FycmF5VHlwZSA9IHNjaGVtYS50eXBlID09PSAnYXJyYXknXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtYXhJdGVtcyA9IHNjaGVtYS5tYXhJdGVtc1xuICAgICAgICBjb25zdCBoYXNNYXhJdGVtc0NvbnN0cmFpbiA9IHRoaXMuaXNTZXQobWF4SXRlbXMpICYmIHRoaXMuaXNOdW1iZXIobWF4SXRlbXMpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWF4SXRlbXNDb25zdHJhaW4gJiYgdmFsdWUubGVuZ3RoID4gbWF4SXRlbXMpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBtYXhJdGVtcyArICcgaXRlbXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1pbkxlbmd0aDogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgIGlmICghaXNTdHJpbmdUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWluTGVuZ3RoID0gc2NoZW1hLm1pbkxlbmd0aFxuICAgICAgICBjb25zdCBoYXNNaW5MZW5ndGhDb25zdHJhaW4gPSB0aGlzLmlzU2V0KG1pbkxlbmd0aCkgJiYgdGhpcy5pc051bWJlcihtaW5MZW5ndGgpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWluTGVuZ3RoQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgbWluTGVuZ3RoICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heExlbmd0aDogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgIGlmICghaXNTdHJpbmdUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gc2NoZW1hLm1heExlbmd0aFxuICAgICAgICBjb25zdCBoYXNNYXhMZW5ndGhDb25zdHJhaW4gPSB0aGlzLmlzU2V0KG1heExlbmd0aCkgJiYgdGhpcy5pc051bWJlcihtYXhMZW5ndGgpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWF4TGVuZ3RoQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA+IG1heExlbmd0aClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBtb3N0ICcgKyBtYXhMZW5ndGggKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgcGF0dGVybjogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgIGlmICghaXNTdHJpbmdUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgcGF0dGVybiA9IHNjaGVtYS5wYXR0ZXJuXG4gICAgICAgIGNvbnN0IGhhc1BhdHRlcm5Db25zdHJhaW4gPSB0aGlzLmlzU2V0KHBhdHRlcm4pICYmIHRoaXMuaXNTdHJpbmcocGF0dGVybilcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBjb25zdCBtYXRjaFBhdHRlcm4gPSByZWdleHAudGVzdCh2YWx1ZSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNQYXR0ZXJuQ29uc3RyYWluICYmICFtYXRjaFBhdHRlcm4pXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBwYXR0ZXJuLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1pbmltdW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoIWlzTnVtZXJpY1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW1cbiAgICAgICAgY29uc3QgbWluaW11bSA9IHNjaGVtYS5taW5pbXVtXG4gICAgICAgIGNvbnN0IGhhc01pbmltdW1Db25zdHJhaW4gPSB0aGlzLmlzU2V0KG1pbmltdW0pICYmIHRoaXMuaXNOdW1iZXIobWluaW11bSlcbiAgICAgICAgY29uc3QgaGFzRXhjbHVzaXZlTWluaW11bUNvbnN0cmFpbiA9IHRoaXMuaXNTZXQoZXhjbHVzaXZlTWluaW11bSkgJiYgZXhjbHVzaXZlTWluaW11bSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBmaW5hbE1pbmltdW0gPSBoYXNFeGNsdXNpdmVNaW5pbXVtQ29uc3RyYWluID8gbWluaW11bSArIDEgOiBtaW5pbXVtXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWluaW11bUNvbnN0cmFpbiAmJiB2YWx1ZSA8IGZpbmFsTWluaW11bSlcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgZmluYWxNaW5pbXVtLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heGltdW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoIWlzTnVtZXJpY1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBleGNsdXNpdmVNYXhpbXVtID0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW1cbiAgICAgICAgY29uc3QgbWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtXG4gICAgICAgIGNvbnN0IGhhc01heGltdW1Db25zdHJhaW4gPSB0aGlzLmlzU2V0KG1heGltdW0pICYmIHRoaXMuaXNOdW1iZXIobWF4aW11bSlcbiAgICAgICAgY29uc3QgaGFzRXhjbHVzaXZlTWF4aW11bUNvbnN0cmFpbiA9IHRoaXMuaXNTZXQoZXhjbHVzaXZlTWF4aW11bSkgJiYgZXhjbHVzaXZlTWF4aW11bSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBmaW5hbE1heGltdW0gPSBoYXNFeGNsdXNpdmVNYXhpbXVtQ29uc3RyYWluID8gbWF4aW11bSAtIDEgOiBtYXhpbXVtXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWF4aW11bUNvbnN0cmFpbiAmJiB2YWx1ZSA+IGZpbmFsTWF4aW11bSlcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGZpbmFsTWF4aW11bSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtdWx0aXBsZU9mOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgaWYgKCFpc051bWVyaWNUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbXVsdGlwbGVPZiA9IHNjaGVtYS5tdWx0aXBsZU9mXG4gICAgICAgIGNvbnN0IGhhc011bHRpcGxlT2ZDb25zdHJhaW4gPSB0aGlzLmlzU2V0KG11bHRpcGxlT2YpICYmIHRoaXMuaXNOdW1iZXIobXVsdGlwbGVPZilcbiAgICAgICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gbXVsdGlwbGVPZiA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIG11bHRpcGxlT2YpKVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc011bHRpcGxlT2ZDb25zdHJhaW4gJiYgIWlzTXVsdGlwbGVPZilcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgbXVsdGlwbGVPZixcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBjb25zdDogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaGFzQ29uc3RDb25zdHJhaW4gPSB0aGlzLmlzU2V0KHNjaGVtYS5jb25zdClcblxuICAgICAgICBpZiAoaGFzQ29uc3RDb25zdHJhaW4gJiYgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KSAhPT0gSlNPTi5zdHJpbmdpZnkodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvciBjb25zdCcsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB2YWxpZGF0b3IgZnVuY3Rpb25cbiAgICovXG4gIGFkZFZhbGlkYXRvciAobmFtZSwgdmFsaWRhdG9yKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzW25hbWVdID0gdmFsaWRhdG9yXG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHNjaGVtYSwgdmFsdWUsIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuICAgIE9iamVjdC5rZXlzKHRoaXMudmFsaWRhdG9ycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcnNba2V5XVxuICAgICAgY29uc3QgZXJyb3IgPSB2YWxpZGF0b3Ioc2NoZW1hLCB2YWx1ZSwgcGF0aClcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBlcnJvcnMucHVzaChlcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlzU2V0ICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG4gIH1cblxuICBpc051bWJlciAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xuICB9XG5cbiAgaXNJbnRlZ2VyICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgfVxuXG4gIGlzU3RyaW5nICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gIH1cblxuICBpc0Jvb2xlYW4gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIH1cblxuICBpc0FycmF5ICh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICB9XG5cbiAgaXNPYmplY3QgKHZhbHVlKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzTnVsbCh2YWx1ZSkgJiYgIXRoaXMuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICB9XG5cbiAgaXNOdWxsICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcidcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0b3InXG5cbmNsYXNzIEplZGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpXG4gICAgdGhpcy5yZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXJcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy5lZGl0b3JzID0ge31cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5sb2FkRWRpdG9ycygpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdXG4gIH1cblxuICBsb2FkRWRpdG9ycyAoKSB7XG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWFcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC5jb250YWluZXIpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1sb2FkZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGJhc2VkIG9uIHRoZSBwYXNzZWQgc2NoZW1hIGFuZCBjb25maWdcbiAgICovXG4gIGNyZWF0ZUVkaXRvciAoY29uZmlnKSB7XG4gICAgLy8gdG9kbyBleHBhbmQgZGVmc1xuICAgIHJldHVybiBuZXcgKHRoaXMucmVzb2x2ZXIucmVzb2x2ZShjb25maWcuc2NoZW1hKSkoY29uZmlnKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=