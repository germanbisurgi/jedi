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
      console.log('onChange', this.path);
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
        path: this.path + '.' + this.childEditors.length
      });
      var deleteBtn = this.jedi.theme.getButton('delete');
      itemEditor.container.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', function () {
        var itemIndex = Number(itemEditor.path.split('.').pop());

        _this2.deleteItem(itemIndex);
      });
      var itemIndex = Number(itemEditor.path.split('.').pop());

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
        var currentValue = this.getValue();
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
          path: _this.path + '.' + prop
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
      this.input = this.jedi.theme.getInput('text');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3Jlc29sdmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGhlbWUiLCJjb250YWluZXIiLCJtZXNzYWdlIiwiZXJyb3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiZXJyb3JzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyZW1vdmVDaGlsZCIsInRleHQiLCJidXR0b24iLCJsYWJlbCIsInR5cGUiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsIm9wdGlvblZhbHVlcyIsIm9wdGlvbnNMYWJlbHMiLCJzZWxlY3QiLCJ2YWx1ZSIsImluZGV4Iiwib3B0aW9uIiwiRWRpdG9yIiwiY29uZmlnIiwiamVkaSIsInNjaGVtYSIsInVuZGVmaW5lZCIsInBhdGgiLCJjaGlsZEVkaXRvcnMiLCJpbml0Iiwic2V0Q29udGFpbmVyIiwiYnVpbGQiLCJzZXREZWZhdWx0VmFsdWUiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsInJlZ2lzdGVyIiwidGhlbWUiLCJnZXRDb250YWluZXIiLCJyZWdpc3RlckVkaXRvciIsInVucmVnaXN0ZXJFZGl0b3IiLCJzZXRWYWx1ZSIsIm5ld1ZhbHVlIiwiaW5pdGlhbCIsInNhbml0aXplIiwiY3VycmVudFZhbHVlIiwiZ2V0VmFsdWUiLCJvbkNoYW5nZSIsInJlZnJlc2hVSSIsInZhbGlkYXRvciIsInZhbGlkYXRlIiwicmVtb3ZlSW5wdXRFcnJvciIsImFkZElucHV0RXJyb3IiLCJjb25zb2xlIiwibG9nIiwidW5yZWdpc3RlciIsInV0aWxzIiwiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIkFycmF5RWRpdG9yIiwiZ2V0TGFiZWwiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsIml0ZW1FZGl0b3IiLCJjcmVhdGVFZGl0b3IiLCJpdGVtcyIsImxlbmd0aCIsImRlbGV0ZUJ0biIsIml0ZW1JbmRleCIsIk51bWJlciIsInNwbGl0IiwicG9wIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImNyZWF0ZUl0ZW1FZGl0b3IiLCJwdXNoIiwiZGVzdHJveSIsIndpbmRvdyIsImNvbmZpcm0iLCJmaWx0ZXIiLCJlZGl0b3IiLCJCb29sZWFuRWRpdG9yIiwiQm9vbGVhbiIsIkJvb2xlYW5DaGVja2JveCIsInRpdGxlIiwiZ2V0SW5wdXQiLCJjaGVja2VkIiwiQm9vbGVhblNlbGVjdCIsImdldFNlbGVjdCIsIk9iamVjdEVkaXRvciIsIk9iamVjdCIsImtleXMiLCJwcm9wZXJ0aWVzIiwicHJvcCIsIlN0cmluZ0VkaXRvciIsIlN0cmluZyIsIlJlc29sdmVyIiwicmVzb2x2ZXJzIiwiZm9ybWF0IiwicmVzb2x2ZXIiLCJ1bnNoaWZ0IiwiZWRpdG9yQ2xhc3MiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwiSmVkaSIsInJvb3QiLCJlZGl0b3JzIiwibG9hZEVkaXRvcnMiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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O0FBQ2IsV0FBS3dGLElBQUwsR0FBWSxLQUFLaEQsWUFBTCxDQUFrQjtBQUM1QjNDLFlBQUksRUFBRSxJQURzQjtBQUU1QkMsY0FBTSxFQUFFLEtBQUtBO0FBRmUsT0FBbEIsQ0FBWjtBQUlBLFdBQUs1QixTQUFMLENBQWVRLFdBQWYsQ0FBMkIsS0FBSzhHLElBQUwsQ0FBVXRILFNBQXJDO0FBQ0EsV0FBS0EsU0FBTCxDQUFlSyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixhQUE3QjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usc0JBQWNvQixNQUFkLEVBQXNCO0FBQ3BCO0FBQ0EsYUFBTyxLQUFLLEtBQUtzRixRQUFMLENBQWNTLE9BQWQsQ0FBc0IvRixNQUFNLENBQUNFLE1BQTdCLENBQUwsRUFBMkNGLE1BQTNDLENBQVA7QUFDRDs7O1dBRUQsb0JBQVk7QUFDVixhQUFPLEtBQUs0RixJQUFMLENBQVV2RSxRQUFWLEVBQVA7QUFDRDs7O1dBRUQsbUJBQVdqQixJQUFYLEVBQWlCO0FBQ2YsYUFBTyxLQUFLeUYsT0FBTCxDQUFhekYsSUFBYixDQUFQO0FBQ0Q7Ozs7OztBQUdZdUYsaUZBQWYsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImNsYXNzIFRoZW1lIHtcbiAgLyoqXG4gICAqIEFkZHMgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgc3BlY2lmaWVkIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBhZGRJbnB1dEVycm9yIChjb250YWluZXIsIG1lc3NhZ2UpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IG1lc3NhZ2VcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3IpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbnkgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHJlbW92ZUlucHV0RXJyb3IgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGVycm9ycyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChlcnJvcilcbiAgICB9KVxuICB9XG5cbiAgZ2V0QnV0dG9uICh0ZXh0KSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExhYmVsICh0ZXh0KSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRJbnB1dCAodHlwZSkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRTZWxlY3QgKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgb3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLmNoaWxkRWRpdG9ycyA9IFtdXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGJ1aWxkIHBpcGVsaW5lIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5yZWdpc3RlcigpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkIHRoZSBlZGl0b3IncyB1c2VyIGludGVyZmFjZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGRlZmF1bHQgdmFsdWUgaW4gdGhlIHByb3BlcnR5IFwiZGVmYXVsdFwiIGlzIHNldCBpbiB0aGUgc2NoZW1hXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5kZWZhdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIHZhbHVlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgdmFsdWUgYW5kIGNhbGxzIHJlZnJlc2hVSSByaWdodCBhZnRlci4gVGhlIG9uQ2hhbmdlIG1ldGhvZFxuICAgKiB3aWxsIGJlIGNhbGxlZCBpZiB0aGUgbmV3IHZhbHVlIGlzIG5vdCBhbiBpbml0aWFsIG9yIGRlZmF1bHQgdmFsdWUgYW5kIHRoZVxuICAgKiBuZXcgdmFsdWUgaXMgZGlmZmVyZW50IHRoYW4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIGluaXRpYWwgPSBmYWxzZSkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaW5pdGlhbCAmJiBjdXJyZW50VmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKClcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgVUkgb2YgdGhlIGVkaXRvciB0byByZWZsZWN0IGl0J3MgdmFsdWUuIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW5cbiAgICogdXNpbmcgc2V0VmFsdWUgdG8gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEsIHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5wYXRoKVxuICAgIHRoaXMuamVkaS50aGVtZS5yZW1vdmVJbnB1dEVycm9yKHRoaXMuY29udGFpbmVyKVxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5qZWRpLnRoZW1lLmFkZElucHV0RXJyb3IodGhpcy5jb250YWluZXIsIGVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgZWRpdG9yIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZSAoKSB7XG4gICAgY29uc29sZS5sb2coJ29uQ2hhbmdlJywgdGhpcy5wYXRoKVxuICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3IsIGFuZCBldmVyeSByZWZlcmVuY2UgdGhhdCBpdCBpcyBhdHRhY2hlZCB0byBpdC5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMudW5yZWdpc3RlcigpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJjb25zdCB1dGlscyA9IHtcbiAgY2xvbmU6ICh0aGluZykgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoJ2FycmF5JylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb25zdCBhZGRCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdhZGQnKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtRWRpdG9yICgpIHtcbiAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hLml0ZW1zLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoXG4gICAgfSlcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ2RlbGV0ZScpXG4gICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcbiAgICAgIHRoaXMuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgfSlcblxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcblxuICAgIGlmICh0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ21vdmUgdXAnKVxuICAgICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignbW92ZSBkb3duJylcbiAgICAgIGl0ZW1FZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtRWRpdG9yXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoKVxuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUnKSkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuXG4gICAgdGhpcy5nZXRWYWx1ZSgpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtRWRpdG9yKClcbiAgICAgIGl0ZW1FZGl0b3Iuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGl0ZW1FZGl0b3IpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICB9KVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkNoZWNrYm94IGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh0aGlzLnNjaGVtYS50aXRsZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KCdjaGVja2JveCcpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5DaGVja2JveFxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuU2VsZWN0IGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh0aGlzLnNjaGVtYS50aXRsZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSBbJycsICcxJ11cbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlID8gJzEnIDogJydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKCdvYmplY3QnKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcF1cbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBwcm9wXG4gICAgICB9KVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzW3Byb3BdID0gZWRpdG9yXG4gICAgfSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICB0aGlzLnZhbHVlID0ge31cbiAgICBPYmplY3Qua2V5cyh0aGlzLmNoaWxkRWRpdG9ycykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIHRoaXMudmFsdWVbcHJvcF0gPSB0aGlzLmNoaWxkRWRpdG9yc1twcm9wXS5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICByZWZyZXNoVUkgKCkge31cblxuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwodGhpcy5zY2hlbWEudGl0bGUpXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCgndGV4dCcpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEJvb2xlYW5DaGVja2JveCBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1jaGVja2JveCdcbmltcG9ydCBCb29sZWFuU2VsZWN0IGZyb20gJy4vZWRpdG9ycy9ib29sZWFuLXNlbGVjdCdcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZydcblxuY2xhc3MgUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVkaXRvciBjbGFzcyBpZiB0aGUgY29uZGl0aW9uIHBhc3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdmVycyA9IFtcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuQ2hlY2tib3hcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhblNlbGVjdFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuQ2hlY2tib3hcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiBPYmplY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgcmV0dXJuIEFycmF5RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHJlc29sdmVyIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRSZXNvbHZlciAocmVzb2x2ZXIpIHtcbiAgICB0aGlzLnJlc29sdmVycy51bnNoaWZ0KHJlc29sdmVyKVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICByZXNvbHZlIChzY2hlbWEpIHtcbiAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IHJlc29sdmVyKHNjaGVtYSlcbiAgICAgIGlmICh0eXBlb2YgZWRpdG9yQ2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBlZGl0b3JDbGFzc1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvbHZlclxuIiwiY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBhbiBlcnJvciBvYmplY3QgaWYgdGhlIHRoZSB2YWxpZGF0aW9uIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IFtcbiAgICAgIChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QpICYmIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCAhPT0gdmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvciBjb25zdCcsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdmFsaWRhdG9yIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRWYWxpZGF0b3IgKHZhbGlkYXRvcikge1xuICAgIHRoaXMudmFsaWRhdG9ycy51bnNoaWZ0KHZhbGlkYXRvcilcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBmaXJzdCBlZGl0b3IgY2xhc3MgdGhhdCBtYXRjaGVzIHRoZSBwYXNzZWQgc2NoZW1hLlxuICAgKi9cbiAgdmFsaWRhdGUgKHNjaGVtYSwgdmFsdWUsIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuICAgIGZvciAoY29uc3QgdmFsaWRhdG9yIG9mIHRoaXMudmFsaWRhdG9ycykge1xuICAgICAgY29uc3QgZXJyb3IgPSB2YWxpZGF0b3Ioc2NoZW1hLCB2YWx1ZSwgcGF0aClcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBlcnJvcnMucHVzaChlcnJvcilcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcidcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0b3InXG5cbmNsYXNzIEplZGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpXG4gICAgdGhpcy5yZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXJcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy5lZGl0b3JzID0ge31cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5sb2FkRWRpdG9ycygpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdXG4gICAgLy8gdG9kbyBkZWxldGU/XG4gIH1cblxuICBsb2FkRWRpdG9ycyAoKSB7XG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWFcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC5jb250YWluZXIpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1sb2FkZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGJhc2VkIG9uIHRoZSBwYXNzZWQgc2NoZW1hIGFuZCBjb25maWdcbiAgICovXG4gIGNyZWF0ZUVkaXRvciAoY29uZmlnKSB7XG4gICAgLy8gdG9kbyBleHBhbmQgZGVmc1xuICAgIHJldHVybiBuZXcgKHRoaXMucmVzb2x2ZXIucmVzb2x2ZShjb25maWcuc2NoZW1hKSkoY29uZmlnKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=