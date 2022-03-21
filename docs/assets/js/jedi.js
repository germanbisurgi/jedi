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
      minimum: function minimum(schema, value, path) {
        var isNumericType = schema.type === 'number' || schema.type === 'integer';
        var exclusiveMinimum = schema.exclusiveMinimum;
        var minimum = schema.minimum;

        var hasMinimum = _this.isSet(minimum) && _this.isNumber(minimum);

        var hasExclusiveMinimum = _this.isSet(exclusiveMinimum) && exclusiveMinimum === true;
        var finalMinimum = hasExclusiveMinimum ? minimum + 1 : minimum;
        var invalid = isNumericType && hasMinimum && value < finalMinimum;

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
        var exclusiveMaximum = schema.exclusiveMaximum;
        var maximum = schema.maximum;

        var hasMaximum = _this.isSet(maximum) && _this.isNumber(maximum);

        var hasExclusiveMaximum = _this.isSet(exclusiveMaximum) && exclusiveMaximum === true;
        var finalMaximum = hasExclusiveMaximum ? maximum - 1 : maximum;
        var invalid = isNumericType && hasMaximum && value > finalMaximum;

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
        var multipleOf = schema.multipleOf;

        var hasMultipleOf = _this.isSet(multipleOf) && _this.isNumber(multipleOf);

        var isMultipleOf = value / multipleOf === Math.floor(value / multipleOf);
        var invalid = isNumericType && hasMultipleOf && !isMultipleOf;

        if (invalid) {
          return {
            message: 'Must be multiple of ' + multipleOf,
            path: path
          };
        }

        return false;
      },
      "const": function _const(schema, value, path) {
        var hasConst = _this.isSet(schema["const"]);

        if (hasConst && JSON.stringify(schema["const"]) !== JSON.stringify(value)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRoZW1lIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsIm1lc3NhZ2UiLCJlcnJvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwYXRoIiwiZ2V0QXR0cmlidXRlIiwic2VsZWN0b3IiLCJlcnJvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJ0ZXh0IiwiYnV0dG9uIiwibGFiZWxUZXh0IiwibGFiZWwiLCJzZXRBdHRyaWJ1dGVzIiwiaW5wdXQiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwic2VsZWN0SWQiLCJzZWxlY3QiLCJ2YWx1ZSIsImluZGV4Iiwib3B0aW9uIiwib3V0cHV0IiwiRWRpdG9yIiwiY29uZmlnIiwiamVkaSIsInNjaGVtYSIsInVuZGVmaW5lZCIsInBhcmVudCIsImNoaWxkRWRpdG9ycyIsImluaXQiLCJzZXRDb250YWluZXIiLCJidWlsZCIsInNldERlZmF1bHRWYWx1ZSIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwicmVnaXN0ZXIiLCJzcGxpdCIsInBvcCIsInRoZW1lIiwiZ2V0Q29udGFpbmVyIiwidHlwZSIsInJlZ2lzdGVyRWRpdG9yIiwidW5yZWdpc3RlckVkaXRvciIsInNldFZhbHVlIiwibmV3VmFsdWUiLCJpbml0aWFsIiwic2FuaXRpemUiLCJjdXJyZW50VmFsdWUiLCJnZXRWYWx1ZSIsIm9uQ2hhbmdlIiwicmVmcmVzaFVJIiwidmFsaWRhdG9yIiwidmFsaWRhdGUiLCJyZW1vdmVJbnB1dEVycm9yIiwiYWRkSW5wdXRFcnJvciIsInVucmVnaXN0ZXIiLCJ1dGlscyIsImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJBcnJheUVkaXRvciIsInRpdGxlIiwiZ2V0TGFiZWwiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsIml0ZW1FZGl0b3IiLCJjcmVhdGVFZGl0b3IiLCJpdGVtcyIsImxlbmd0aCIsIml0ZW1JbmRleCIsImdldEtleSIsImRlbGV0ZUJ0biIsIk51bWJlciIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiZnJvbUluZGV4IiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjcmVhdGVJdGVtRWRpdG9yIiwicHVzaCIsImRlc3Ryb3kiLCJ3aW5kb3ciLCJjb25maXJtIiwiZmlsdGVyIiwiZWRpdG9yIiwiQm9vbGVhbkVkaXRvciIsImdldElucHV0IiwiaWQiLCJjaGVja2VkIiwiQm9vbGVhbiIsIk9iamVjdEVkaXRvciIsInByb3BlcnRpZXMiLCJwcm9wIiwiY2hpbGRFZGl0b3IiLCJTdHJpbmdFZGl0b3IiLCJpbnB1dFR5cGVzIiwiaW5jbHVkZXMiLCJmb3JtYXQiLCJTdHJpbmciLCJOdW1iZXJFZGl0b3IiLCJJbnRlZ2VyRWRpdG9yIiwiTnVsbEVkaXRvciIsIlJlc29sdmVyIiwicmVzb2x2ZXJzIiwicmVzb2x2ZXIiLCJ1bnNoaWZ0IiwiZWRpdG9yQ2xhc3MiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwidHlwZXMiLCJzdHJpbmciLCJpc1N0cmluZyIsIm51bWJlciIsImlzTnVtYmVyIiwiaW50ZWdlciIsImlzSW50ZWdlciIsImlzQm9vbGVhbiIsImFycmF5IiwiaXNBcnJheSIsIm9iamVjdCIsImlzT2JqZWN0IiwiaXNOdWxsIiwidmFsaWQiLCJtaW5pbXVtIiwiaXNOdW1lcmljVHlwZSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJoYXNNaW5pbXVtIiwiaXNTZXQiLCJoYXNFeGNsdXNpdmVNaW5pbXVtIiwiZmluYWxNaW5pbXVtIiwiaW52YWxpZCIsIm1heGltdW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiaGFzTWF4aW11bSIsImhhc0V4Y2x1c2l2ZU1heGltdW0iLCJmaW5hbE1heGltdW0iLCJtdWx0aXBsZU9mIiwiaGFzTXVsdGlwbGVPZiIsImlzTXVsdGlwbGVPZiIsIk1hdGgiLCJmbG9vciIsImhhc0NvbnN0IiwibmFtZSIsIkFycmF5IiwiSmVkaSIsInJvb3QiLCJlZGl0b3JzIiwibG9hZEVkaXRvcnMiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQs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cEksTUFBTSxDQUFDRSxNQUE3QixDQUFMLEVBQTJDRixNQUEzQyxDQUFQO0FBQ0Q7OztXQUVELG9CQUFZO0FBQ1YsYUFBTyxLQUFLaUksSUFBTCxDQUFVekcsUUFBVixFQUFQO0FBQ0Q7OztXQUVELG1CQUFXN0MsSUFBWCxFQUFpQjtBQUNmLGFBQU8sS0FBS3VKLE9BQUwsQ0FBYXZKLElBQWIsQ0FBUDtBQUNEOzs7Ozs7QUFHWXFKLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJjbGFzcyBUaGVtZSB7XG4gIHNldEF0dHJpYnV0ZXMgKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSBzcGVjaWZpZWQgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIGFkZElucHV0RXJyb3IgKGNvbnRhaW5lciwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IG1lc3NhZ2VcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3IpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbnkgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHJlbW92ZUlucHV0RXJyb3IgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHBhdGggPSBjb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnKVxuICAgIGNvbnN0IHNlbGVjdG9yID0gJ1tkYXRhLXBhdGg9XCInICsgcGF0aCArICdcIl0gPiAuamVkaS1lcnJvci1tZXNzYWdlJ1xuICAgIGNvbnN0IGVycm9ycyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGVycm9yKVxuICAgIH0pXG4gIH1cblxuICBnZXRCdXR0b24gKHRleHQpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGFiZWwgKGxhYmVsVGV4dCwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHRcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMobGFiZWwsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRJbnB1dCAoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuc2V0QXR0cmlidXRlcyhpbnB1dCwgYXR0cmlidXRlcylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldFNlbGVjdCAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCBzZWxlY3RJZCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBzZWxlY3RJZClcbiAgICBvcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0T3V0cHV0IChhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0JylcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMob3V0cHV0LCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgYnVpbGQgcGlwZWxpbmUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5zZXRDb250YWluZXIoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgfVxuXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCgnLicpLnBvcCgpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkIHRoZSBlZGl0b3IncyB1c2VyIGludGVyZmFjZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGRlZmF1bHQgdmFsdWUgaW4gdGhlIHByb3BlcnR5IFwiZGVmYXVsdFwiIGlzIHNldCBpbiB0aGUgc2NoZW1hXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5kZWZhdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIHZhbHVlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgdmFsdWUgYW5kIGNhbGxzIHJlZnJlc2hVSSByaWdodCBhZnRlci4gVGhlIG9uQ2hhbmdlIG1ldGhvZFxuICAgKiB3aWxsIGJlIGNhbGxlZCBpZiB0aGUgbmV3IHZhbHVlIGlzIG5vdCBhbiBpbml0aWFsIG9yIGRlZmF1bHQgdmFsdWUgYW5kIHRoZVxuICAgKiBuZXcgdmFsdWUgaXMgZGlmZmVyZW50IHRoYW4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIGluaXRpYWwgPSBmYWxzZSkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcblxuICAgIGlmICghaW5pdGlhbCAmJiBjdXJyZW50VmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKClcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgVUkgb2YgdGhlIGVkaXRvciB0byByZWZsZWN0IGl0J3MgdmFsdWUuIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW5cbiAgICogdXNpbmcgc2V0VmFsdWUgdG8gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEsIHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5wYXRoKVxuICAgIHRoaXMuamVkaS50aGVtZS5yZW1vdmVJbnB1dEVycm9yKHRoaXMuY29udGFpbmVyKVxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5qZWRpLnRoZW1lLmFkZElucHV0RXJyb3IodGhpcy5jb250YWluZXIsIGVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgZWRpdG9yIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZSAoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudC5vbkNoYW5nZSgpXG4gICAgfVxuICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3IsIGFuZCBldmVyeSByZWZlcmVuY2UgdGhhdCBpdCBpcyBhdHRhY2hlZCB0byBpdC5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMudW5yZWdpc3RlcigpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJjb25zdCB1dGlscyA9IHtcbiAgY2xvbmU6ICh0aGluZykgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGFkZEJ0blxuICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ2FkZCcpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWRkSXRlbSgpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1FZGl0b3IgKCkge1xuICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWEuaXRlbXMsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGgsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgY29uc3QgaXRlbUluZGV4ID0gaXRlbUVkaXRvci5nZXRLZXkoKVxuXG4gICAgaWYgKGl0ZW1FZGl0b3IuaW5wdXQpIHtcbiAgICAgIGl0ZW1FZGl0b3IuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICAgICAgdmFsdWVbaXRlbUluZGV4XSA9IHV0aWxzLmNsb25lKGl0ZW1FZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignZGVsZXRlJylcbiAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IucGF0aC5zcGxpdCgnLicpLnBvcCgpKVxuICAgICAgdGhpcy5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignbW92ZSB1cCcpXG4gICAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdtb3ZlIGRvd24nKVxuICAgICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1FZGl0b3JcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZScpKSB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuXG4gICAgdGhpcy5nZXRWYWx1ZSgpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtRWRpdG9yKClcbiAgICAgIGl0ZW1FZGl0b3Iuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGl0ZW1FZGl0b3IpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGNoaWxkIGVkaXRvcnNcbiAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdXG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgcHJvcCxcbiAgICAgICAgcGFyZW50OiB0aGlzXG4gICAgICB9KVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnB1c2goZWRpdG9yKVxuICAgIH0pXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgdGhpcy52YWx1ZVtjaGlsZEVkaXRvci5nZXRLZXkoKV0gPSBjaGlsZEVkaXRvci5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnY29sb3InLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbW9udGgnLCAnc2VhcmNoJywgJ3RlbCcsICd0ZXh0JywgJ3RpbWUnLCAndXJsJywgJ3dlZWsnXVxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogJ3RleHQnLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgSW50ZWdlckVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7fVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlZ2VyRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9hcnJheSdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IEludGVnZXJFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2ludGVnZXInXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVkaXRvciBjbGFzcyBpZiB0aGUgY29uZGl0aW9uIHBhc3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdmVycyA9IFtcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbkVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICByZXR1cm4gQXJyYXlFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBOdW1iZXJFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgICAgICByZXR1cm4gSW50ZWdlckVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdudWxsJykge1xuICAgICAgICAgIHJldHVybiBOdWxsRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHJlc29sdmVyIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRSZXNvbHZlciAocmVzb2x2ZXIpIHtcbiAgICB0aGlzLnJlc29sdmVycy51bnNoaWZ0KHJlc29sdmVyKVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICByZXNvbHZlIChzY2hlbWEpIHtcbiAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IHJlc29sdmVyKHNjaGVtYSlcbiAgICAgIGlmICh0eXBlb2YgZWRpdG9yQ2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBlZGl0b3JDbGFzc1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvbHZlclxuIiwiY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBhbiBlcnJvciBvYmplY3QgaWYgdGhlIHRoZSB2YWxpZGF0aW9uIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IHtcbiAgICAgIHR5cGU6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgICAgIHN0cmluZzogdmFsdWUgPT4gdGhpcy5pc1N0cmluZyh2YWx1ZSksXG4gICAgICAgICAgbnVtYmVyOiB2YWx1ZSA9PiB0aGlzLmlzTnVtYmVyKHZhbHVlKSxcbiAgICAgICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiB0aGlzLmlzSW50ZWdlcih2YWx1ZSksXG4gICAgICAgICAgYm9vbGVhbjogdmFsdWUgPT4gdGhpcy5pc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgICAgIGFycmF5OiB2YWx1ZSA9PiB0aGlzLmlzQXJyYXkodmFsdWUpLFxuICAgICAgICAgIG9iamVjdDogdmFsdWUgPT4gdGhpcy5pc09iamVjdCh2YWx1ZSksXG4gICAgICAgICAgbnVsbDogdmFsdWUgPT4gdGhpcy5pc051bGwodmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlXSh2YWx1ZSlcblxuICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1pbmltdW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW1cbiAgICAgICAgY29uc3QgbWluaW11bSA9IHNjaGVtYS5taW5pbXVtXG4gICAgICAgIGNvbnN0IGhhc01pbmltdW0gPSB0aGlzLmlzU2V0KG1pbmltdW0pICYmIHRoaXMuaXNOdW1iZXIobWluaW11bSlcbiAgICAgICAgY29uc3QgaGFzRXhjbHVzaXZlTWluaW11bSA9IHRoaXMuaXNTZXQoZXhjbHVzaXZlTWluaW11bSkgJiYgZXhjbHVzaXZlTWluaW11bSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBmaW5hbE1pbmltdW0gPSBoYXNFeGNsdXNpdmVNaW5pbXVtID8gbWluaW11bSArIDEgOiBtaW5pbXVtXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaXNOdW1lcmljVHlwZSAmJiBoYXNNaW5pbXVtICYmIHZhbHVlIDwgZmluYWxNaW5pbXVtKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBmaW5hbE1pbmltdW0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWF4aW11bTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGNvbnN0IGV4Y2x1c2l2ZU1heGltdW0gPSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICBjb25zdCBtYXhpbXVtID0gc2NoZW1hLm1heGltdW1cbiAgICAgICAgY29uc3QgaGFzTWF4aW11bSA9IHRoaXMuaXNTZXQobWF4aW11bSkgJiYgdGhpcy5pc051bWJlcihtYXhpbXVtKVxuICAgICAgICBjb25zdCBoYXNFeGNsdXNpdmVNYXhpbXVtID0gdGhpcy5pc1NldChleGNsdXNpdmVNYXhpbXVtKSAmJiBleGNsdXNpdmVNYXhpbXVtID09PSB0cnVlXG4gICAgICAgIGNvbnN0IGZpbmFsTWF4aW11bSA9IGhhc0V4Y2x1c2l2ZU1heGltdW0gPyBtYXhpbXVtIC0gMSA6IG1heGltdW1cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChpc051bWVyaWNUeXBlICYmIGhhc01heGltdW0gJiYgdmFsdWUgPiBmaW5hbE1heGltdW0pXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBmaW5hbE1heGltdW0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbXVsdGlwbGVPZjogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGNvbnN0IG11bHRpcGxlT2YgPSBzY2hlbWEubXVsdGlwbGVPZlxuICAgICAgICBjb25zdCBoYXNNdWx0aXBsZU9mID0gdGhpcy5pc1NldChtdWx0aXBsZU9mKSAmJiB0aGlzLmlzTnVtYmVyKG11bHRpcGxlT2YpXG4gICAgICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIG11bHRpcGxlT2YgPT09IE1hdGguZmxvb3IodmFsdWUgLyBtdWx0aXBsZU9mKSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChpc051bWVyaWNUeXBlICYmIGhhc011bHRpcGxlT2YgJiYgIWlzTXVsdGlwbGVPZilcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgbXVsdGlwbGVPZixcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBjb25zdDogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaGFzQ29uc3QgPSB0aGlzLmlzU2V0KHNjaGVtYS5jb25zdClcblxuICAgICAgICBpZiAoaGFzQ29uc3QgJiYgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KSAhPT0gSlNPTi5zdHJpbmdpZnkodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvciBjb25zdCcsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB2YWxpZGF0b3IgZnVuY3Rpb25cbiAgICovXG4gIGFkZFZhbGlkYXRvciAobmFtZSwgdmFsaWRhdG9yKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzW25hbWVdID0gdmFsaWRhdG9yXG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHNjaGVtYSwgdmFsdWUsIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuICAgIE9iamVjdC5rZXlzKHRoaXMudmFsaWRhdG9ycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcnNba2V5XVxuICAgICAgY29uc3QgZXJyb3IgPSB2YWxpZGF0b3Ioc2NoZW1hLCB2YWx1ZSwgcGF0aClcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBlcnJvcnMucHVzaChlcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlzU2V0ICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG4gIH1cblxuICBpc051bWJlciAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xuICB9XG5cbiAgaXNJbnRlZ2VyICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgfVxuXG4gIGlzU3RyaW5nICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gIH1cblxuICBpc0Jvb2xlYW4gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIH1cblxuICBpc0FycmF5ICh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICB9XG5cbiAgaXNPYmplY3QgKHZhbHVlKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzTnVsbCh2YWx1ZSkgJiYgIXRoaXMuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICB9XG5cbiAgaXNOdWxsICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcidcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0b3InXG5cbmNsYXNzIEplZGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpXG4gICAgdGhpcy5yZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXJcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy5lZGl0b3JzID0ge31cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5sb2FkRWRpdG9ycygpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdXG4gIH1cblxuICBsb2FkRWRpdG9ycyAoKSB7XG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWFcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC5jb250YWluZXIpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1sb2FkZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGJhc2VkIG9uIHRoZSBwYXNzZWQgc2NoZW1hIGFuZCBjb25maWdcbiAgICovXG4gIGNyZWF0ZUVkaXRvciAoY29uZmlnKSB7XG4gICAgLy8gdG9kbyBleHBhbmQgZGVmc1xuICAgIHJldHVybiBuZXcgKHRoaXMucmVzb2x2ZXIucmVzb2x2ZShjb25maWcuc2NoZW1hKSkoY29uZmlnKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=