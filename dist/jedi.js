(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Jedi"] = factory();
	else
		root["Jedi"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/editors/array-nav.js":
/*!**********************************!*\
  !*** ./src/editors/array-nav.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./src/editors/array.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents an EditorArrayNav instance.
 * @extends EditorArray
 */
class EditorArrayNav extends _array_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  init () {
    super.init()
    this.activeTabIndex = 0
  }

  addEventListeners () {
    this.control.addBtn.addEventListener('click', () => {
      this.activeTabIndex = this.instance.value.length
      this.instance.addItem()
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.childrenSlot.innerHTML = ''

    const navCols = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'navCols')
    const navStacked = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'navStacked')
    const navType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'navType')

    const row = this.theme.getRow()
    const cols = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(navCols) ? navCols : 3
    const tabListCol = this.theme.getCol(12, cols)
    const tabContentCol = this.theme.getCol(12, (12 - cols))
    const tabContent = this.theme.getTabContent()
    const tabList = this.theme.getTabList({
      stacked: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(navStacked) ? navStacked : false,
      type: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(navType) ? navType : 'pils'
    })

    this.control.childrenSlot.appendChild(row)
    row.appendChild(tabListCol)
    row.appendChild(tabContentCol)
    tabListCol.appendChild(tabList)
    tabContentCol.appendChild(tabContent)

    this.instance.children.forEach((child, index) => {
      const deleteBtn = this.theme.getDeleteItemBtn()
      const moveUpBtn = this.theme.getMoveUpItemBtn()
      const moveDownBtn = this.theme.getMoveDownItemBtn()

      child.ui.control.arrayActions.innerHTML = ''
      child.ui.control.arrayActions.appendChild(deleteBtn)
      child.ui.control.arrayActions.appendChild(moveUpBtn)
      child.ui.control.arrayActions.appendChild(moveDownBtn)

      this.control.childrenSlot.appendChild(child.ui.control.container)

      let childTitle
      const schemaOptionItemTemplate = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'itemTemplate')

      if (schemaOptionItemTemplate) {
        const template = schemaOptionItemTemplate
        const data = {
          i0: index,
          i1: (index + 1),
          value: child.getValue()
        }
        childTitle = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.compileTemplate)(template, data)
      } else {
        const schemaTitle = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(child.schema)
        childTitle = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaTitle) ? schemaTitle + ' ' + (index + 1) : child.getKey()
      }

      deleteBtn.addEventListener('click', () => {
        this.activeTabIndex = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.clamp)((index - 1), 0, (this.instance.value.length - 1))
        this.instance.deleteItem(index)
      })

      moveUpBtn.addEventListener('click', () => {
        const toIndex = index - 1
        this.activeTabIndex = toIndex
        this.instance.move(index, toIndex)
      })

      moveDownBtn.addEventListener('click', () => {
        const toIndex = index + 1
        this.activeTabIndex = toIndex
        this.instance.move(index, toIndex)
      })

      const active = index === this.activeTabIndex
      const id = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(child.path)

      const tab = this.theme.getTab({
        title: childTitle,
        id: id,
        active: active
      })

      tab.list.addEventListener('click', () => {
        this.activeTabIndex = index
      })

      this.theme.setTabPaneAttributes(child.ui.control.container, active, id)
      tabList.appendChild(tab.list)
      tabContent.appendChild(child.ui.control.container)

      if (this.disabled || this.instance.isReadOnly()) {
        child.ui.disable()
      } else {
        child.ui.enable()
      }

      if (index === 0) {
        moveUpBtn.setAttribute('disabled', '')
      }

      if ((this.instance.value.length - 1) === index) {
        moveDownBtn.setAttribute('disabled', '')
      }
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorArrayNav);


/***/ }),

/***/ "./src/editors/array.js":
/*!******************************!*\
  !*** ./src/editors/array.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.js */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents an EditorArray instance.
 * @extends Editor
 */
class EditorArray extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getArrayControl({
      title: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden'),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.addBtn.addEventListener('click', () => {
      this.instance.addItem()
    })
  }

  getInvalidFeedback (config) {
    return this.theme.getAlert(config)
  }

  sanitize (value) {
    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
      return value
    }

    return []
  }

  refreshUI () {
    this.refreshInteractiveElements()

    const maxItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaMaxItems)(this.instance.schema)
    const minItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaMinItems)(this.instance.schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(maxItems) && maxItems === this.instance.value.length) {
      this.control.addBtn.setAttribute('disabled', '')
    }

    this.control.childrenSlot.innerHTML = ''

    this.instance.children.forEach((child) => {
      const itemIndex = Number(child.getKey())
      const deleteBtn = this.theme.getDeleteItemBtn()
      const moveUpBtn = this.theme.getMoveUpItemBtn()
      const moveDownBtn = this.theme.getMoveDownItemBtn()

      child.ui.control.arrayActions.innerHTML = ''
      child.ui.control.arrayActions.appendChild(deleteBtn)
      child.ui.control.arrayActions.appendChild(moveUpBtn)
      child.ui.control.arrayActions.appendChild(moveDownBtn)

      this.control.childrenSlot.appendChild(child.ui.control.container)

      deleteBtn.addEventListener('click', () => {
        const itemIndex = Number(child.path.split(this.instance.jedi.pathSeparator).pop())
        this.instance.deleteItem(itemIndex)
      })

      moveUpBtn.addEventListener('click', () => {
        const toIndex = itemIndex - 1
        this.instance.move(itemIndex, toIndex)
      })

      moveDownBtn.addEventListener('click', () => {
        const toIndex = itemIndex + 1
        this.instance.move(itemIndex, toIndex)
      })

      if (this.disabled || this.instance.isReadOnly()) {
        child.ui.disable()
      } else {
        child.ui.enable()
      }

      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(minItems) && this.instance.value.length <= minItems) {
        deleteBtn.setAttribute('disabled', '')
      }
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorArray);


/***/ }),

/***/ "./src/editors/boolean-enum-radio.js":
/*!*******************************************!*\
  !*** ./src/editors/boolean-enum-radio.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _boolean_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boolean.js */ "./src/editors/boolean.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents an EditorBooleanEnumRadio instance.
 * @extends EditorBoolean
 */
class EditorBooleanEnumRadio extends _boolean_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getRadiosControl({
      values: ['false', 'true'],
      titles: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enumTitles') || ['false', 'true'],
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        const radioValue = radio.value === 'true'
        this.instance.setValue(radioValue)
      })
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.radios.forEach((radio) => {
      const radioValue = radio.value === 'true'
      radio.checked = radioValue === this.instance.getValue()
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorBooleanEnumRadio);


/***/ }),

/***/ "./src/editors/boolean-enum-select.js":
/*!********************************************!*\
  !*** ./src/editors/boolean-enum-select.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _boolean_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boolean.js */ "./src/editors/boolean.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents an EditorBooleanEnumSelect instance.
 * @extends EditorBoolean
 */
class EditorBooleanEnumSelect extends _boolean_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getSelectControl({
      values: ['false', 'true'],
      titles: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enumTitles') || ['false', 'true'],
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.control.input.value === 'true'
      this.instance.setValue(value)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.value = this.instance.getValue() === true ? 'true' : 'false'
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorBooleanEnumSelect);


/***/ }),

/***/ "./src/editors/boolean.js":
/*!********************************!*\
  !*** ./src/editors/boolean.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.js */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorBoolean instance.
 * @extends Editor
 */
class EditorBoolean extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getCheckboxControl({
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.checked)
    })
  }

  sanitize (value) {
    return Boolean(value)
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.checked = this.instance.getValue()
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorBoolean);


/***/ }),

/***/ "./src/editors/editor.js":
/*!*******************************!*\
  !*** ./src/editors/editor.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../themes/icons/icons.js */ "./src/themes/icons/icons.js");
/* harmony import */ var _themes_bootstrap3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes/bootstrap3.js */ "./src/themes/bootstrap3.js");
/* harmony import */ var _themes_bootstrap4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/bootstrap4.js */ "./src/themes/bootstrap4.js");
/* harmony import */ var _themes_bootstrap5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/bootstrap5.js */ "./src/themes/bootstrap5.js");
/* harmony import */ var _themes_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes/theme.js */ "./src/themes/theme.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");








/**
 * Represents an Editor instance.
 * @extends EventEmitter
 */
class Editor {
  constructor (instance) {
    /**
     * A reference to the Instance being controlled by this editor.
     * @type {Instance}
     * @private
     */
    this.instance = instance

    /**
     * Theme instance used to build the Editor user interface.
     * @type {Theme}
     * @private
     */
    this.theme = null

    /**
     * The user interface html for this editor
     * @type {HTMLElement}
     * @protected
     */
    this.control = null

    /**
     * Disabled status for this editor user interface
     * @type {boolean}
     * @private
     */
    this.disabled = false

    /**
     * Read only status for this editor user interface
     * @type {boolean}
     * @private
     */
    this.readOnly = this.instance.isReadOnly()

    this.init()
    this.build()
    this.coerceValue()
    this.addEventListeners()
    this.setContainerAttributes()
    this.refreshUI()

    const alwaysShowErrors = this.instance.jedi.options.showErrors === 'always' || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__.getSchemaOption)(this.instance.schema, 'showErrors') === 'always'

    if (alwaysShowErrors) {
      const errors = this.instance.getErrors()
      this.showValidationErrors(errors)
    }

    this.instance.on('set-value', () => {
      this.refreshUI()
      const errors = this.instance.getErrors()
      this.showValidationErrors(errors)
    })

    this.instance.on('change', () => {
      this.refreshUI()
      const errors = this.instance.getErrors()
      this.showValidationErrors(errors)
    })
  }

  /**
   * Initializes the editor
   * @private
   */
  init () {
    let icons = null

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__.isSet)(this.instance.jedi.options.iconLib)) {
      switch (this.instance.jedi.options.iconLib) {
        case 'glyphicons':
          icons = _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_0__.glyphicons
          break
        case 'bootstrap-icons':
          icons = _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_0__.bootstrapIcons
          break
        case 'fontawesome3':
          icons = _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_0__.fontAwesome3
          break
        case 'fontawesome4':
          icons = _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_0__.fontAwesome4
          break
        case 'fontawesome5':
          icons = _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_0__.fontAwesome5
          break
        case 'fontawesome6':
          icons = _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_0__.fontAwesome6
          break
      }
    }

    switch (this.instance.jedi.options.theme) {
      case 'bootstrap3':
        this.theme = new _themes_bootstrap3_js__WEBPACK_IMPORTED_MODULE_1__["default"](icons)
        break
      case 'bootstrap4':
        this.theme = new _themes_bootstrap4_js__WEBPACK_IMPORTED_MODULE_2__["default"](icons)
        break
      case 'bootstrap5':
        this.theme = new _themes_bootstrap5_js__WEBPACK_IMPORTED_MODULE_3__["default"](icons)
        break
      default:
        this.theme = new _themes_theme_js__WEBPACK_IMPORTED_MODULE_4__["default"](icons)
    }
  }

  /**
   * Sets container attributes like data-path and data-type
   * @private
   */
  setContainerAttributes () {
    this.control.container.setAttribute('data-path', this.instance.path)
    this.control.container.setAttribute('data-type', (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__.getSchemaType)(this.instance.schema))
  }

  /**
   * Builds the editor control and appends it to the editor container
   * @private
   */
  build () {
  }

  /**
   * Updates the value of the instance by making assumptions based on constrains
   */
  coerceValue () {
    const schemaEnum = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__.getSchemaEnum)(this.instance.schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__.isSet)(schemaEnum) && !schemaEnum.includes(this.instance.getValue()) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__.isSet)(schemaEnum[0])) {
      this.instance.setValue(schemaEnum[0], false)
    }
  }

  /**
   * Add event listeners to ui elements
   * @private
   */
  addEventListeners () {
  }

  /**
   * Shows validation messages in the editor container.
   * @private
   */
  showValidationErrors (errors) {
    const neverShowErrors = this.instance.jedi.options.showErrors === 'never' || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__.getSchemaOption)(this.instance.schema, 'showErrors') === 'never'

    if (neverShowErrors) {
      return
    }

    this.control.messages.innerHTML = ''

    const label = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__.getSchemaTitle)(this.instance.schema) || this.instance.getKey()

    errors.forEach((error) => {
      error.messages.forEach((message) => {
        const invalidFeedback = this.getInvalidFeedback({
          message: label + ': ' + message
        })
        this.control.messages.appendChild(invalidFeedback)
      })
    })
  }

  /**
   * Get an error message container
   * @private
   */
  getInvalidFeedback (config) {
    return this.theme.getInvalidFeedback(config)
  }

  /**
   * Disables the editor
   */
  disable () {
    this.disabled = true
    this.refreshUI()
  }

  /**
   * Enables the editor
   */
  enable () {
    this.disabled = false
    this.refreshUI()
  }

  /**
   * Updates control UI when its state changes
   * @private
   */
  refreshUI () {
    this.refreshInteractiveElements()
  }

  refreshInteractiveElements () {
    const interactiveElements = this.control.container.querySelectorAll('button, input, select, textarea')

    interactiveElements.forEach((element) => {
      if (this.disabled || this.readOnly) {
        element.setAttribute('disabled', '')
      } else {
        element.removeAttribute('disabled', '')
      }
    })
  }

  /**
   * Transforms the input value if necessary before value set
   * @private
   */
  sanitize (value) {
    return value
  }

  /**
   * Destroys the editor
   * @private
   */
  destroy () {
    if (this.control.container && this.control.container.parentNode) {
      this.control.container.parentNode.removeChild(this.control.container)
    }

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);


/***/ }),

/***/ "./src/editors/multiple.js":
/*!*********************************!*\
  !*** ./src/editors/multiple.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.js */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents an EditorMultiple instance.
 * @extends Editor
 */
class EditorMultiple extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getMultipleControl({
      title: 'Options',
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden'),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema),
      switcherOptionValues: this.instance.switcherOptionValues,
      switcherOptionsLabels: this.instance.switcherOptionsLabels
    })
  }

  addEventListeners () {
    this.control.switcher.input.addEventListener('change', () => {
      const index = Number(this.control.switcher.input.value)
      this.instance.switchInstance(index)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.childrenSlot.innerHTML = ''
    this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container)
    this.control.switcher.input.value = this.instance.index

    if (this.disabled || this.instance.isReadOnly()) {
      this.instance.activeInstance.ui.disable()
    } else {
      this.instance.activeInstance.ui.enable()
    }
  }

  getInvalidFeedback (config) {
    return this.theme.getAlert(config)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorMultiple);


/***/ }),

/***/ "./src/editors/null.js":
/*!*****************************!*\
  !*** ./src/editors/null.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.js */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorNull instance.
 * @extends Editor
 */
class EditorNull extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getNullControl({
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaFormat)(this.instance.schema) === 'hidden',
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  sanitize () {
    return null
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorNull);


/***/ }),

/***/ "./src/editors/number-enum-radio.js":
/*!******************************************!*\
  !*** ./src/editors/number-enum-radio.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./src/editors/number.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents an EditorNumberEnumRadio instance.
 * @extends EditorNumber
 */
class EditorNumberEnumRadio extends _number_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getRadiosControl({
      values: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      titles: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enumTitles') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        const value = this.sanitize(radio.value)
        this.instance.setValue(value)
      })
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.radios.forEach((radio) => {
      radio.checked = (Number(radio.value) === Number(this.instance.getValue()))
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorNumberEnumRadio);


/***/ }),

/***/ "./src/editors/number-enum-select.js":
/*!*******************************************!*\
  !*** ./src/editors/number-enum-select.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./src/editors/number.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents an EditorNumberEnumSelect instance.
 * @extends EditorNumber
 */
class EditorNumberEnumSelect extends _number_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getSelectControl({
      values: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      titles: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enumTitles') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value)
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorNumberEnumSelect);


/***/ }),

/***/ "./src/editors/number.js":
/*!*******************************!*\
  !*** ./src/editors/number.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.js */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorNumber instance.
 * @extends Editor
 */
class EditorNumber extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getInputControl({
      type: 'number',
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaFormat)(this.instance.schema) === 'hidden',
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value)
    })
  }

  sanitize (value) {
    if ((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(this.instance.schema) === 'integer') {
      return Math.floor(Number(value))
    } else {
      return Number(value)
    }
  }

  refreshUI () {
    this.refreshInteractiveElements()
    const value = this.instance.getValue()

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(value)) {
      this.control.input.value = this.instance.getValue()
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorNumber);


/***/ }),

/***/ "./src/editors/object-grid.js":
/*!************************************!*\
  !*** ./src/editors/object-grid.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object.js */ "./src/editors/object.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");



/**
 * Represents a EditorObjectGrid instance.
 * @extends EditorObject
 */
class EditorObjectGrid extends _object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  refreshEditors () {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild)
    }

    let row = this.theme.getRow()
    this.control.childrenSlot.appendChild(row)

    this.instance.children.forEach((child) => {
      if (child.isActive) {
        const columns = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaOption)(child.schema, 'columns') || 12
        const offset = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaOption)(child.schema, 'offset') || 0
        const col = this.theme.getCol(12, columns, offset)

        if ((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaOption)(child.schema, 'newRow') === true) {
          row = this.theme.getRow()
          this.control.childrenSlot.appendChild(row)
        }

        row.appendChild(col)
        col.appendChild(child.ui.control.container)

        if (this.disabled || this.instance.isReadOnly()) {
          child.ui.disable()
        } else {
          child.ui.enable()
        }
      }
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorObjectGrid);


/***/ }),

/***/ "./src/editors/object-nav.js":
/*!***********************************!*\
  !*** ./src/editors/object-nav.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object.js */ "./src/editors/object.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorObjectNav instance.
 * @extends EditorObject
 */
class EditorObjectNav extends _object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  init () {
    super.init()
    this.activeTabIndex = 0
  }

  refreshEditors () {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild)
    }

    const controlCols = this.instance.schema['x-control-cols']
    const controlStacked = this.instance.schema['x-control-stacked']
    const controlVariant = this.instance.schema['x-control-variant']

    const row = this.theme.getRow()
    const cols = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(controlCols) ? controlCols : 3
    const tabListCol = this.theme.getCol(12, cols)
    const tabContentCol = this.theme.getCol(12, (12 - cols))
    const tabContent = this.theme.getTabContent()
    const tabList = this.theme.getTabList({
      stacked: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(controlStacked) ? controlStacked : false,
      type: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(controlVariant) ? controlVariant : 'pils'
    })

    this.control.childrenSlot.appendChild(row)
    row.appendChild(tabListCol)
    row.appendChild(tabContentCol)
    tabListCol.appendChild(tabList)
    tabContentCol.appendChild(tabContent)

    this.instance.children.forEach((child, index) => {
      if (child.isActive) {
        const active = index === this.activeTabIndex
        const id = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(child.path)
        const schemaTitle = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(child.schema)

        const tab = this.theme.getTab({
          title: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaTitle) ? schemaTitle : child.getKey(),
          id: id,
          active: active
        })

        tab.list.addEventListener('click', () => {
          this.activeTabIndex = index
        })

        this.theme.setTabPaneAttributes(child.ui.control.container, active, id)

        tabList.appendChild(tab.list)
        tabContent.appendChild(child.ui.control.container)

        if (this.disabled || this.instance.isReadOnly()) {
          child.ui.disable()
        } else {
          child.ui.enable()
        }
      }
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorObjectNav);


/***/ }),

/***/ "./src/editors/object.js":
/*!*******************************!*\
  !*** ./src/editors/object.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.js */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents an EditorObject instance.
 * @extends Editor
 */
class EditorObject extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.propertyActivators = {}
    const schemaOptions = this.instance.schema.options || {}
    let addProperty = true
    const additionalProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAdditionalProperties)(this.instance.schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(additionalProperties) && additionalProperties === false) {
      addProperty = false
    }

    let editableProperties = false

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(this.instance.jedi.options.editableProperties)) {
      editableProperties = this.instance.jedi.options.editableProperties
    }

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaOptions.editableProperties)) {
      editableProperties = schemaOptions.editableProperties
    }

    this.control = this.theme.getObjectControl({
      title: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden'),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema),
      editableProperties: editableProperties,
      addProperty: addProperty
    })
  }

  addEventListeners () {
    this.control.addPropertyBtn.addEventListener('click', () => {
      const key = this.control.addPropertyControl.input.value.split(' ').join('')

      const propertyNameEmpty = key.length === 0

      if (propertyNameEmpty) {
        return
      }

      const propertyExist = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(this.instance.value[key])

      if (propertyExist) {
        return
      }

      let schema = {}

      const schemaAdditionalProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAdditionalProperties)(this.instance.schema)

      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaAdditionalProperties)) {
        schema = schemaAdditionalProperties
      }

      const child = this.instance.createChild(schema, key)
      child.activate()
      this.instance.properties[key] = { schema }
      this.instance.setValue(this.instance.value)
      this.control.addPropertyControl.input.value = ''

      const ariaLive = this.control.ariaLive
      ariaLive.innerHTML = ''
      const schemaTitle = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(child.schema)
      const label = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaTitle) ? schemaTitle : key
      const ariaLiveMessage = this.theme.getAriaLiveMessage()
      ariaLiveMessage.textContent = label + ' field was added to the form'
      ariaLive.appendChild(ariaLiveMessage)

      // keeps dialog open
      this.control.propertiesContainer.close()
      this.control.propertiesContainer.showModal()
    })
  }

  sanitize (value) {
    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(value)) {
      return value
    }

    return {}
  }

  getInvalidFeedback (config) {
    return this.theme.getAlert(config)
  }

  refreshPropertiesSlot () {
    const schemaOptionEditableProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'editableProperties')

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.equal)(this.instance.jedi.options.editableProperties, true) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.equal)(schemaOptionEditableProperties, true)) {
      Object.keys(this.instance.properties).forEach((property) => {
        // refactor with isNotRequired
        const isRequired = this.instance.isRequired(property)
        const isDependentRequired = this.instance.isDependentRequired(property)
        const notRequired = !isRequired && !isDependentRequired

        const activatorInDom = this.propertyActivators[property]
        const ariaLive = this.control.ariaLive
        const schema = this.instance.properties[property].schema
        const schemaTitle = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(schema)
        const path = this.instance.path + this.instance.jedi.pathSeparator + property
        const id = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(path) + '-activator'
        const label = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaTitle) ? schemaTitle : property

        if (notRequired && !activatorInDom) {
          const checkboxControl = this.theme.getCheckboxControl({
            id: id,
            label: label,
            titleHidden: false
          })

          const checkbox = checkboxControl.input
          this.propertyActivators[property] = checkbox

          checkbox.addEventListener('change', () => {
            ariaLive.innerHTML = ''
            const ariaLiveMessage = this.theme.getAriaLiveMessage()

            if (checkbox.checked) {
              const child = this.instance.getChild(property)

              if (!child) {
                this.instance.createChild(schema, property)
              }

              this.instance.getChild(property).activate()
              ariaLiveMessage.textContent = label + ' field was added to the form'
              ariaLive.appendChild(ariaLiveMessage)
            } else {
              this.instance.getChild(property).deactivate()
              ariaLiveMessage.textContent = label + ' field was removed from the form'
              ariaLive.appendChild(ariaLiveMessage)
            }

            // keeps dialog open
            this.control.propertiesContainer.close()
            this.control.propertiesContainer.showModal()
          })

          this.control.propertiesActivators.appendChild(checkboxControl.container)
        }

        const checkbox = this.propertyActivators[property]
        if (checkbox) {
          checkbox.disabled = this.disabled
          checkbox.checked = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(this.instance.getValue(), property)
        }
      })
    }
  }

  refreshEditors () {
    this.instance.children.forEach((child) => {
      if (child.isActive) {
        if (child.ui.control.container.parentNode === null) {
          this.control.childrenSlot.appendChild(child.ui.control.container)
        }

        if (this.disabled || this.instance.isReadOnly()) {
          child.ui.disable()
        } else {
          child.ui.enable()
        }
      } else {
        if (child.ui.control.container.parentNode) {
          child.ui.control.container.parentNode.removeChild(child.ui.control.container)
        }
      }
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.refreshPropertiesSlot()
    this.refreshEditors()
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorObject);


/***/ }),

/***/ "./src/editors/string-enum-radio.js":
/*!******************************************!*\
  !*** ./src/editors/string-enum-radio.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorStringEnumRadio instance.
 * @extends Editor
 */
class EditorStringEnumRadio extends _string_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getRadiosControl({
      values: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      titles: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enumTitles') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        this.instance.setValue(radio.value)
      })
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.radios.forEach((radio) => {
      radio.checked = (radio.value === this.instance.getValue())
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorStringEnumRadio);


/***/ }),

/***/ "./src/editors/string-enum-select.js":
/*!*******************************************!*\
  !*** ./src/editors/string-enum-select.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorStringEnumSelect instance.
 * @extends Editor
 */
class EditorStringEnumSelect extends _string_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getSelectControl({
      values: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      titles: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enumTitles') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })

    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorStringEnumSelect);


/***/ }),

/***/ "./src/editors/string-textarea.js":
/*!****************************************!*\
  !*** ./src/editors/string-textarea.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.js */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorStringTextarea instance.
 * @extends Editor
 */
class EditorStringTextarea extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getTextareaControl({
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaFormat)(this.instance.schema) === 'hidden',
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })
  }

  sanitize (value) {
    return String(value)
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.value = this.instance.getValue()
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorStringTextarea);


/***/ }),

/***/ "./src/editors/string.js":
/*!*******************************!*\
  !*** ./src/editors/string.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.js */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorString instance.
 * @extends Editor
 */
class EditorString extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    const inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week']
    const schemaFormat = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaFormat)(this.instance.schema)

    this.control = this.theme.getInputControl({
      type: inputTypes.includes(schemaFormat) ? schemaFormat : 'text',
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden') || schemaFormat === 'hidden',
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })

    // fix color picker bug
    if (schemaFormat === 'color' && this.instance.value.length === 0) {
      this.instance.setValue('#000000', false)
    }
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })
  }

  sanitize (value) {
    return String(value)
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.value = this.instance.getValue()
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorString);


/***/ }),

/***/ "./src/event-emitter.js":
/*!******************************!*\
  !*** ./src/event-emitter.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Represents an EventEmitter instance.
 */
class EventEmitter {
  constructor () {
    this.listeners = []
  }

  /**
   * Adds a named event listener
   * @public
   * @param {string} name - The name of the event
   * @param {function} callback - A callback functions that will be executed when this event is emitted
   */
  on (name, callback) {
    this.listeners.push({ name, callback })
  }

  off (name) {
    this.listeners = this.listeners.filter(listener => listener.name !== name)
  }

  /**
   * Triggers the callback function of a named event listener
   * @public
   * @param {string} name - The name of the event to be emitted
   * @param {*} payload - Payload containing data that is passed along with the callback function
   */
  emit (name, payload = undefined) {
    const listeners = this.listeners.filter(listener => listener.name === name)

    listeners.forEach((listener) => {
      listener.callback(payload)
    })
  }

  /**
   * Deletes all properties of the class
   */
  destroy () {
    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventEmitter);


/***/ }),

/***/ "./src/helpers/schema.js":
/*!*******************************!*\
  !*** ./src/helpers/schema.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSchemaAdditionalProperties: () => (/* binding */ getSchemaAdditionalProperties),
/* harmony export */   getSchemaAllOf: () => (/* binding */ getSchemaAllOf),
/* harmony export */   getSchemaAnyOf: () => (/* binding */ getSchemaAnyOf),
/* harmony export */   getSchemaConst: () => (/* binding */ getSchemaConst),
/* harmony export */   getSchemaContains: () => (/* binding */ getSchemaContains),
/* harmony export */   getSchemaDefault: () => (/* binding */ getSchemaDefault),
/* harmony export */   getSchemaDependentRequired: () => (/* binding */ getSchemaDependentRequired),
/* harmony export */   getSchemaDependentSchemas: () => (/* binding */ getSchemaDependentSchemas),
/* harmony export */   getSchemaDescription: () => (/* binding */ getSchemaDescription),
/* harmony export */   getSchemaElse: () => (/* binding */ getSchemaElse),
/* harmony export */   getSchemaEnum: () => (/* binding */ getSchemaEnum),
/* harmony export */   getSchemaExclusiveMaximum: () => (/* binding */ getSchemaExclusiveMaximum),
/* harmony export */   getSchemaExclusiveMinimum: () => (/* binding */ getSchemaExclusiveMinimum),
/* harmony export */   getSchemaFormat: () => (/* binding */ getSchemaFormat),
/* harmony export */   getSchemaIf: () => (/* binding */ getSchemaIf),
/* harmony export */   getSchemaItems: () => (/* binding */ getSchemaItems),
/* harmony export */   getSchemaMaxContains: () => (/* binding */ getSchemaMaxContains),
/* harmony export */   getSchemaMaxItems: () => (/* binding */ getSchemaMaxItems),
/* harmony export */   getSchemaMaxLength: () => (/* binding */ getSchemaMaxLength),
/* harmony export */   getSchemaMaxProperties: () => (/* binding */ getSchemaMaxProperties),
/* harmony export */   getSchemaMaximum: () => (/* binding */ getSchemaMaximum),
/* harmony export */   getSchemaMinContains: () => (/* binding */ getSchemaMinContains),
/* harmony export */   getSchemaMinItems: () => (/* binding */ getSchemaMinItems),
/* harmony export */   getSchemaMinLength: () => (/* binding */ getSchemaMinLength),
/* harmony export */   getSchemaMinProperties: () => (/* binding */ getSchemaMinProperties),
/* harmony export */   getSchemaMinimum: () => (/* binding */ getSchemaMinimum),
/* harmony export */   getSchemaMultipleOf: () => (/* binding */ getSchemaMultipleOf),
/* harmony export */   getSchemaNot: () => (/* binding */ getSchemaNot),
/* harmony export */   getSchemaOneOf: () => (/* binding */ getSchemaOneOf),
/* harmony export */   getSchemaOption: () => (/* binding */ getSchemaOption),
/* harmony export */   getSchemaPattern: () => (/* binding */ getSchemaPattern),
/* harmony export */   getSchemaPatternProperties: () => (/* binding */ getSchemaPatternProperties),
/* harmony export */   getSchemaPrefixItems: () => (/* binding */ getSchemaPrefixItems),
/* harmony export */   getSchemaProperties: () => (/* binding */ getSchemaProperties),
/* harmony export */   getSchemaPropertyNames: () => (/* binding */ getSchemaPropertyNames),
/* harmony export */   getSchemaReadOnly: () => (/* binding */ getSchemaReadOnly),
/* harmony export */   getSchemaRequired: () => (/* binding */ getSchemaRequired),
/* harmony export */   getSchemaSchema: () => (/* binding */ getSchemaSchema),
/* harmony export */   getSchemaThen: () => (/* binding */ getSchemaThen),
/* harmony export */   getSchemaTitle: () => (/* binding */ getSchemaTitle),
/* harmony export */   getSchemaType: () => (/* binding */ getSchemaType),
/* harmony export */   getSchemaUnevaluatedProperties: () => (/* binding */ getSchemaUnevaluatedProperties),
/* harmony export */   getSchemaUniqueItems: () => (/* binding */ getSchemaUniqueItems),
/* harmony export */   getSchemaX: () => (/* binding */ getSchemaX)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/helpers/utils.js");


function getSchemaX (schema, keyword) {
  const key = 'x-' + keyword
  return schema[key]
}

function getSchemaSchema (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(schema.$schema) ? schema.$schema : undefined
}

function getSchemaAdditionalProperties (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.additionalProperties) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.additionalProperties) ? schema.additionalProperties : undefined
}

function getSchemaPropertyNames (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.propertyNames) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.propertyNames) ? schema.propertyNames : undefined
}

function getSchemaAllOf (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.allOf) ? schema.allOf : undefined
}

function getSchemaAnyOf (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.anyOf) ? schema.anyOf : undefined
}

function getSchemaConst (schema) {
  return schema.const
}

function getSchemaContains (schema) {
  return ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.contains) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.contains)) ? schema.contains : undefined
}

function getSchemaDefault (schema) {
  return schema.default
}

function getSchemaDependentRequired (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.dependentRequired) ? schema.dependentRequired : undefined
}

function getSchemaDependentSchemas (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.dependentSchemas) ? schema.dependentSchemas : undefined
}

function getSchemaDescription (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(schema.description) ? schema.description : undefined
}

function getSchemaElse (schema) {
  return ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.else) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.else)) ? schema.else : undefined
}

function getSchemaEnum (schema) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.enum) && schema.enum.length > 0) {
    return schema.enum
  }

  return undefined
}

function getSchemaExclusiveMaximum (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(schema.exclusiveMaximum) ? schema.exclusiveMaximum : undefined
}

function getSchemaExclusiveMinimum (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(schema.exclusiveMinimum) ? schema.exclusiveMinimum : undefined
}

function getSchemaFormat (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(schema.format) ? schema.format : undefined
}

function getSchemaIf (schema) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.if)) {
    return schema.if
  }

  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.if)) {
    return schema.if
  }

  return undefined
}

function getSchemaItems (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.items) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.items) ? schema.items : undefined
}

function getSchemaMaximum (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(schema.maximum) ? schema.maximum : undefined
}

function getSchemaMaxContains (schema) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.maxContains) && schema.maxContains >= 0) {
    return schema.maxContains
  }

  return undefined
}

function getSchemaMaxItems (schema) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.maxItems) && schema.maxItems >= 0) {
    return schema.maxItems
  }

  return undefined
}

function getSchemaMaxLength (schema) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.maxLength) && schema.maxLength >= 0) {
    return schema.maxLength
  }

  return undefined
}

function getSchemaMaxProperties (schema) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.maxProperties)) {
    return schema.maxProperties
  }

  return undefined
}

function getSchemaMinimum (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(schema.minimum) ? schema.minimum : undefined
}

function getSchemaMinContains (schema) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.minContains) && schema.minContains >= 0) {
    return schema.minContains
  }

  return undefined
}

function getSchemaMinItems (schema) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.minItems) && schema.minItems >= 0) {
    return schema.minItems
  }

  return undefined
}

function getSchemaMinLength (schema) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.minLength) && schema.minLength >= 0) {
    return schema.minLength
  }

  return undefined
}

function getSchemaMinProperties (schema) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.minProperties) && schema.minProperties >= 0) {
    return schema.minProperties
  }

  return undefined
}

function getSchemaMultipleOf (schema) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(schema.multipleOf) && schema.multipleOf >= 0) {
    return schema.multipleOf
  }

  return undefined
}

function getSchemaNot (schema) {
  return ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.not) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.not)) ? schema.not : undefined
}

function getSchemaOption (schema, option) {
  return (schema.options && schema.options[option]) ? schema.options[option] : undefined
}

function getSchemaPattern (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(schema.pattern) ? schema.pattern : undefined
}

function getSchemaPatternProperties (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.patternProperties) ? schema.patternProperties : undefined
}

function getSchemaPrefixItems (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.prefixItems) ? schema.prefixItems : undefined
}

function getSchemaProperties (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.properties) ? schema.properties : undefined
}

function getSchemaReadOnly (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.readOnly) ? schema.readOnly : undefined
}

function getSchemaRequired (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.required) ? [...new Set(schema.required)] : undefined
}

function getSchemaThen (schema) {
  return ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.then) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.then)) ? schema.then : undefined
}

function getSchemaTitle (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(schema.title) ? schema.title : undefined
}

function getSchemaType (schema) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(schema.type) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.type)) {
    return schema.type
  }

  return undefined
}

function getSchemaOneOf (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.oneOf) ? schema.oneOf : undefined
}

function getSchemaUnevaluatedProperties (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.unevaluatedProperties) ? schema.unevaluatedProperties : undefined
}

function getSchemaUniqueItems (schema) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.uniqueItems) ? schema.uniqueItems : undefined
}


/***/ }),

/***/ "./src/helpers/utils.js":
/*!******************************!*\
  !*** ./src/helpers/utils.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   compileTemplate: () => (/* binding */ compileTemplate),
/* harmony export */   different: () => (/* binding */ different),
/* harmony export */   equal: () => (/* binding */ equal),
/* harmony export */   escapeRegExp: () => (/* binding */ escapeRegExp),
/* harmony export */   getCircularReplacer: () => (/* binding */ getCircularReplacer),
/* harmony export */   getType: () => (/* binding */ getType),
/* harmony export */   getValueByJSONPath: () => (/* binding */ getValueByJSONPath),
/* harmony export */   hasOwn: () => (/* binding */ hasOwn),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isBoolean: () => (/* binding */ isBoolean),
/* harmony export */   isInteger: () => (/* binding */ isInteger),
/* harmony export */   isNull: () => (/* binding */ isNull),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isSet: () => (/* binding */ isSet),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   mergeDeep: () => (/* binding */ mergeDeep),
/* harmony export */   notSet: () => (/* binding */ notSet),
/* harmony export */   overwriteExistingProperties: () => (/* binding */ overwriteExistingProperties),
/* harmony export */   pathToAttribute: () => (/* binding */ pathToAttribute),
/* harmony export */   removeDuplicatesFromArray: () => (/* binding */ removeDuplicatesFromArray),
/* harmony export */   replaceAll: () => (/* binding */ replaceAll),
/* harmony export */   sortObject: () => (/* binding */ sortObject)
/* harmony export */ });
/**
 * Utils.
 * @module utils
 */

function getCircularReplacer () {
  const ancestors = []

  return function (key, value) {
    if (typeof value !== 'object' || value === null) {
      return value
    }
    // `this` is the object that value is contained in,
    // i.e., its direct parent.
    while (ancestors.length > 0 && ancestors.at(-1) !== this) {
      ancestors.pop()
    }
    if (ancestors.includes(value)) {
      return '[Circular]'
    }
    ancestors.push(value)
    return value
  }
}

/**
 * Returns a clone of a thing
 * @param {*} thing - The thing to be cloned
 * @return {*} The clone of the thing
 */
function clone (thing) {
  if (typeof thing === 'undefined') {
    return undefined
  }

  return JSON.parse(JSON.stringify(thing, getCircularReplacer()))
}

/**
 * Returns escaped regexp
 * @param {string} string - The string
 * @return {string} Escaped regexp
 */
function escapeRegExp (string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

/**
 * Multiple search and replace
 * @param {string} str - The string
 * @param {string} find - The part to be replaced
 * @param {string} replace - The replacement
 * @return {void}
 */
function replaceAll (str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace)
}

/**
 * Formats a json path to be used as an html attribute value
 * @param {string} path - The json path
 * @return {string}
 */
function pathToAttribute (path) {
  return replaceAll(replaceAll(path, '#', 'root'), '/', '-')
}

/**
 * Returns true if a given object has a given property
 * @param {object} obj - The object
 * @param {string} prop - The property
 * @return {boolean}
 */
function hasOwn (obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

/**
 * Sort object properties
 * @param {object} obj - The object
 * @return {void}
 */
function sortObject (obj) {
  return Object.keys(obj).sort().reduce((result, key) => {
    result[key] = obj[key]
    return result
  }, {})
}

/**
 * Returns true if the two values passed are equal
 * @param {*} a - Value A
 * @param {*} b - Value B
 * @return {boolean}
 */
function equal (a, b) {
  if (isObject(a) && isObject(b)) {
    a = sortObject(a)
    b = sortObject(b)
  }
  return JSON.stringify(a) === JSON.stringify(b)
}

/**
 * Returns true if the two values passed are different
 * @param {*} a - Value A
 * @param {*} b - Value B
 * @return {boolean}
 */
function different (a, b) {
  return !equal(a, b)
}

/**
 * Returns true if the value passed is null
 * @param {*} value - The value
 * @return {boolean}
 */
function isNull (value) {
  return value === null
}

/**
 * Returns true if the value is defined
 * @param {*} value - The value
 * @return {boolean}
 */
function isSet (value) {
  return typeof value !== 'undefined'
}

/**
 * Returns true if the value is undefined
 * @param {*} value - The value
 * @return {boolean}
 */
function notSet (value) {
  return typeof value === 'undefined'
}

/**
 * Returns true if the value passed is a number
 * @param {*} value - The value
 * @return {boolean}
 */
function isNumber (value) {
  return typeof value === 'number'
}

/**
 * Returns true if the value passed is an integer
 * @param {*} value - The value
 * @return {boolean}
 */
function isInteger (value) {
  return isNumber(value) && value === Math.floor(value)
}

/**
 * Returns true if the value passed is a string
 * @param {*} value - The value
 * @return {boolean}
 */
function isString (value) {
  return typeof value === 'string'
}

/**
 * Returns true if the value passed is a boolean
 * @param {*} value - The value
 * @return {boolean}
 */
function isBoolean (value) {
  return typeof value === 'boolean'
}

/**
 * Returns true if the value passed is an array
 * @param {*} value - The value
 * @return {boolean}
 */
function isArray (value) {
  return Array.isArray(value)
}

/**
 * Returns true if the value passed is an object
 * @param {*} value - The value
 * @return {boolean}
 */
function isObject (value) {
  return !isNull(value) && !isArray(value) && typeof value === 'object'
}

/**
 * Returns the type of a value
 * @param {*} value - The value
 * @return {string} The type of the value
 */
function getType (value) {
  let type = 'any'

  if (isNumber(value)) {
    type = isInteger(value) ? 'integer' : 'number'
  } else if (isString(value)) {
    type = 'string'
  } else if (isBoolean(value)) {
    type = 'boolean'
  } else if (isArray(value)) {
    type = 'array'
  } else if (isNull(value)) {
    type = 'null'
  } else if (isObject(value)) {
    type = 'object'
  }

  return type
}

/**
 * Merges objects
 * @param {object} target - The target object
 * @param {object[]} sources - Objects to be merged into the target object
 * @return {object} The merged object
 */
function mergeDeep (target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, {
            [key]: {}
          })
        }
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, {
          [key]: source[key]
        })
      }
    })
  }

  return mergeDeep(target, ...sources)
}

/**
 * Merges objects but only the properties that exists in boths objects
 * if they are the same type of value
 * @param {object} obj1 - The target object
 * @param {object[]} obj2 - Objects who's properties are the overrides
 * @return {object} The overwritten object
 */
function overwriteExistingProperties (obj1, obj2) {
  Object.keys(obj2).forEach(function (key) {
    if (key in obj1) {
      if (typeof obj1[key] === typeof obj2[key]) {
        obj1[key] = obj2[key]
      }
    }
  })

  return obj1
}

/**
 * Get some value by traversing the data using JSON path
 * @param {object} data - The data source
 * @param {string} path - JSON path
 * @return {*}
 */
function getValueByJSONPath (data, path) {
  const keys = path.split('.') // Split the path into individual keys

  let value = data
  for (const key of keys) {
    if (Array.isArray(value) && /^\d+$/.test(key)) {
      const index = parseInt(key)
      if (index >= 0 && index < value.length) {
        value = value[index]
      } else {
        return undefined // Index is out of bounds, return undefined
      }
    } else if (hasOwn(value, key)) {
      value = value[key]
    } else {
      return undefined // Key doesn't exist, return undefined
    }
  }

  return value
}

/**
 * Compiles a template by search and replace
 * @param {string} template - The template string
 * @param {object} data - Where template data lives
 * @return {string}
 */
function compileTemplate (template, data) {
  return template.replace(/{{(.*?)}}/g, (match) => {
    match = match.replace(/\s/g, '')
    const path = match.split(/{{|}}/)[1]
    return getValueByJSONPath(data, path)
  })
}

function clamp (number, min, max) {
  return Math.max(min, Math.min(number, max))
}

function removeDuplicatesFromArray (arr) {
  const uniqueObjects = []
  const uniqueValues = new Set()

  for (const obj of arr) {
    const objString = JSON.stringify(obj)
    if (!uniqueValues.has(objString)) {
      uniqueValues.add(objString)
      uniqueObjects.push(obj)
    }
  }

  return uniqueObjects
}


/***/ }),

/***/ "./src/i18n.js":
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i18n: () => (/* binding */ i18n)
/* harmony export */ });
/**
 * Simple translation module.
 * @module i18n
 */

/**
 * Locale messages
 * @type {object}
 */
const i18n = {
  errorAdditionalProperties: 'Has additional property "{{ property }}" but no additional properties are allowed.',
  errorAnyOf: 'Must validate against at least one of the provided schemas.',
  errorConst: 'Must have value of: {{ const }}.',
  errorContains: 'Must contain at least one item matching the provided schema.',
  errorDependentRequired: 'Must have the required properties: {{ dependentRequired }}.',
  errorEnum: 'Must be one of the enumerated values: {{ enum }}.',
  errorExclusiveMaximum: 'Must be less than {{ exclusiveMaximum }}.',
  errorExclusiveMinimum: 'Must be greater than {{ exclusiveMinimum }}.',
  errorFormat: 'Must be a valid {{ format }}.',
  errorItems: 'Must have items that validate against the provided schema.',
  errorMaximum: 'Must be at most {{ maximum }}.',
  errorMaxItems: 'Must have at most {{ maxItems }} items.',
  errorMaxLength: 'Must be at most {{ maxLength }} characters long.',
  errorMaxProperties: 'Must have at most {{ maxProperties }} properties.',
  errorMaxContains: 'Must contain at most {{ maxContains }} items matching the provided schema. It currently contains {{ counter }}.',
  errorMinContains: 'Must contain at least {{ minContains }} items matching the provided schema. It currently contains {{ counter }}.',
  errorMinimum: 'Must be at least {{ minimum }}.',
  errorMinItems: 'Must have at least {{ minItems }} items.',
  errorMinLength: 'Must be at least {{ minLength }} characters long.',
  errorMinProperties: 'Must have at least {{ minProperties }} properties.',
  errorMultipleOf: 'Must be multiple of {{ multipleOf }}.',
  errorNot: 'Must not validate against the provided schema.',
  errorOneOf: 'Must validate against exactly one of the provided schemas. It currently validates against {{ counter }} of the schemas.',
  errorPattern: 'Must match the pattern: "{{ pattern }}".',
  errorPrefixItems: 'Item {{ index }} fails validation.',
  errorPropertyNames: 'Property name "{{ propertyName }}" fails validation.',
  errorRequired: 'Must have the required properties: {{ required }}.',
  errorType: 'Must be of type {{ type }}.',
  errorUnevaluatedProperties: 'Has invalid unevaluated property "{{ property }}"',
  errorUniqueItems: 'Must have unique items.'
}


/***/ }),

/***/ "./src/instances/array.js":
/*!********************************!*\
  !*** ./src/instances/array.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance.js */ "./src/instances/instance.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _editors_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editors/array.js */ "./src/editors/array.js");
/* harmony import */ var _editors_array_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editors/array-nav.js */ "./src/editors/array-nav.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");






/**
 * Represents an InstanceArray instance.
 * @extends Instance
 */
class InstanceArray extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_4__.getSchemaType)(this.schema)
    const schemaFormat = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_4__.getSchemaFormat)(this.schema)

    if (schemaType === 'array' && schemaFormat === 'nav') {
      this.ui = new _editors_array_nav_js__WEBPACK_IMPORTED_MODULE_3__["default"](this)
    } else {
      this.ui = new _editors_array_js__WEBPACK_IMPORTED_MODULE_2__["default"](this)
    }
  }

  prepare () {
    this.refreshChildren()

    this.on('set-value', () => {
      this.refreshChildren()
    })
  }

  createItemInstance (value) {
    let schema
    const itemsCount = this.children.length
    const schemaItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_4__.getSchemaItems)(this.schema)
    const schemaPrefixItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_4__.getSchemaPrefixItems)(this.schema)
    schema = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaItems) ? schemaItems : {}

    const hasPrefixItemsSchema = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaPrefixItems) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaPrefixItems[itemsCount])

    if (hasPrefixItemsSchema) {
      schema = schemaPrefixItems[itemsCount]
    }

    const child = this.jedi.createInstance({
      jedi: this.jedi,
      schema: schema,
      path: this.path + this.jedi.pathSeparator + itemsCount,
      parent: this,
      value: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.clone)(value)
    })

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
      child.setValue(value, false)
    }

    return child
  }

  move (fromIndex, toIndex) {
    const value = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.getValue())
    const item = value[fromIndex]
    value.splice(fromIndex, 1)
    value.splice(toIndex, 0, item)
    this.setValue(value)
  }

  addItem () {
    const tempEditor = this.createItemInstance()
    const value = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.getValue())
    value.push(tempEditor.getValue())
    tempEditor.destroy()
    this.setValue(value)
  }

  deleteItem (itemIndex) {
    const currentValue = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.getValue())
    const newValue = currentValue.filter((item, index) => index !== itemIndex)
    this.setValue(newValue)
  }

  onChildChange () {
    const value = []

    this.children.forEach((child) => {
      value.push(child.getValue())
    })

    this.value = value
    this.emit('change')
  }

  refreshChildren () {
    this.children = []

    const value = this.getValue()

    if (!(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
      return
    }

    value.forEach((itemValue) => {
      const child = this.createItemInstance(itemValue)
      this.children.push(child)
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceArray);


/***/ }),

/***/ "./src/instances/boolean.js":
/*!**********************************!*\
  !*** ./src/instances/boolean.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance.js */ "./src/instances/instance.js");
/* harmony import */ var _editors_boolean_enum_radio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/boolean-enum-radio.js */ "./src/editors/boolean-enum-radio.js");
/* harmony import */ var _editors_boolean_enum_select_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editors/boolean-enum-select.js */ "./src/editors/boolean-enum-select.js");
/* harmony import */ var _editors_boolean_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editors/boolean.js */ "./src/editors/boolean.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");






/**
 * Represents a InstanceBoolean instance.
 * @extends Instance
 */
class InstanceBoolean extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_4__.getSchemaType)(this.schema)
    const schemaFormat = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_4__.getSchemaFormat)(this.schema)

    if (schemaType === 'boolean' && schemaFormat === 'radio') {
      this.ui = new _editors_boolean_enum_radio_js__WEBPACK_IMPORTED_MODULE_1__["default"](this)
    } else if (schemaType === 'boolean' && schemaFormat === 'select') {
      this.ui = new _editors_boolean_enum_select_js__WEBPACK_IMPORTED_MODULE_2__["default"](this)
    } else if (schemaType === 'boolean') {
      this.ui = new _editors_boolean_js__WEBPACK_IMPORTED_MODULE_3__["default"](this)
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceBoolean);


/***/ }),

/***/ "./src/instances/if-then-else.js":
/*!***************************************!*\
  !*** ./src/instances/if-then-else.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance.js */ "./src/instances/instance.js");
/* harmony import */ var _editors_multiple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/multiple.js */ "./src/editors/multiple.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jedi.js */ "./src/jedi.js");






/**
 * Represents a InstanceMultiple instance.
 * @extends Instance
 */
class InstanceIfThenElse extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    this.ui = new _editors_multiple_js__WEBPACK_IMPORTED_MODULE_1__["default"](this)
  }

  prepare () {
    this.instances = []
    this.activeInstance = null
    this.activeInstanceChanged = true
    this.index = 0
    this.schemas = []
    this.switcherOptionValues = []
    this.switcherOptionsLabels = []
    this.ifThenElseShemas = []

    this.traverseSchema(this.schema)

    delete this.schema.if
    delete this.schema.then
    delete this.schema.else

    let index = 0

    this.ifThenElseShemas.forEach((item) => {
      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)(item.then)) {
        this.schemas.push((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)({}, (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.schema), item.then))
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(JSON.stringify(item.then))
        index++
      }

      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)(item.else)) {
        this.schemas.push((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)({}, (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.schema), item.else))
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(JSON.stringify(item.else))
        index++
      }
    })

    const schemaClone = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.schema)
    delete schemaClone.if
    delete schemaClone.then
    delete schemaClone.else

    const instanceWithoutIf = this.jedi.createInstance({
      jedi: this.jedi,
      schema: schemaClone,
      path: this.path,
      parent: this.parent
    })

    this.schemas.forEach((schema) => {
      const instance = this.jedi.createInstance({
        jedi: this.jedi,
        schema: schema,
        path: this.path,
        parent: this.parent
      })

      instance.unregister()

      instance.on('change', () => {
        const afterChangeValue = this.activeInstance.getValue()
        const fittestIndex = this.getFittestIndex(afterChangeValue)
        const mustSwitch = fittestIndex !== this.index

        if (mustSwitch) {
          this.setValue(afterChangeValue)
        } else {
          this.value = this.activeInstance.getValue()
          this.emit('change')
        }
      })

      this.instances.push(instance)

      this.register()
    })

    this.on('set-value', (newValue) => {
      this.instances.forEach((instance) => {
        const valueBefore = instance.getValue()
        let futureValue = newValue

        if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(valueBefore) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(futureValue)) {
          futureValue = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.overwriteExistingProperties)(valueBefore, futureValue)
        }

        instance.setValue(futureValue, false)
      })

      const fittestIndex = this.getFittestIndex(newValue)
      const mustSwitch = fittestIndex !== this.index

      if (mustSwitch) {
        this.switchInstance(fittestIndex)
        this.emit('change')
      }
    })

    // initial value and active instance
    this.value = instanceWithoutIf.getValue()
    instanceWithoutIf.destroy()
    const fittestIndex = this.getFittestIndex(this.value)
    this.switchInstance(fittestIndex)
  }

  switchInstance (index) {
    this.index = index
    this.activeInstance = this.instances[this.index]
    this.value = this.activeInstance.getValue()
    this.emit('change')
  }

  traverseSchema (schema) {
    const schemaIf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__.getSchemaIf)(schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)(schemaIf)) {
      const schemaThen = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__.getSchemaThen)(schema)
      const schemaElse = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__.getSchemaElse)(schema)

      this.ifThenElseShemas.push({
        if: schemaIf,
        then: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)(schemaThen) ? schemaThen : {}
      })

      this.ifThenElseShemas.push({
        if: schemaIf,
        else: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)(schemaElse) ? schemaElse : {}
      })
    }
  }

  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex (value) {
    let fittestIndex = this.index

    this.ifThenElseShemas.forEach((schema, index) => {
      const ifValidator = new _jedi_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
        schema: schema.if,
        data: value
      })

      const ifErrors = ifValidator.getErrors()
      ifValidator.destroy()

      if (ifErrors.length === 0 && schema.then) {
        fittestIndex = index
      }

      if (ifErrors.length > 0 && schema.else) {
        fittestIndex = index
      }
    })

    return fittestIndex
  }

  destroy () {
    this.instances.forEach((instance) => {
      instance.destroy()
    })

    super.destroy()
  }

  getAllOfCombinations (schemas) {
    const result = []

    const combineProperties = (schema1, schema2) => {
      return { ...schema1, ...schema2 }
    }

    const generateCombinations = (current, remaining) => {
      if (remaining.length === 0) {
        result.push(current)
        return
      }

      const nextSchema = remaining[0]

      generateCombinations(combineProperties(current, nextSchema), remaining.slice(1))
      generateCombinations(current, remaining.slice(1))
    }

    for (let i = 0; i < schemas.length; i++) {
      generateCombinations(schemas[i], schemas.slice(i + 1))
    }

    result.sort((a, b) => Object.keys(a).length - Object.keys(b).length)

    return result
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceIfThenElse);


/***/ }),

/***/ "./src/instances/instance.js":
/*!***********************************!*\
  !*** ./src/instances/instance.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event-emitter.js */ "./src/event-emitter.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a JSON instance.
 */
class Instance extends _event_emitter_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor (config) {
    super()

    /**
     * A reference to the Jedi instance to which this instance belongs.
     * @type {Jedi}
     * @protected
     */
    this.jedi = config.jedi

    /**
     * The schema path of this instance.
     * @type {string}
     * @private
     */
    this.path = config.path || this.jedi.rootName

    /**
     * A JSON schema.
     * @type {boolean|object}
     * @private
     */
    this.schema = config.schema

    /**
     * The json value of this instance.
     * @type {*}
     * @protected
     */
    this.value = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(config.value) ? config.value : undefined

    /**
     * The active state of this instance. If false the editor is not participating
     * in the value.
     * @type {boolean}
     * @private
     */
    this.isActive = true

    /**
     * The Parent instance of this instance.
     * @type {Instance|null}
     * @private
     */
    this.parent = config.parent || null

    /**
     * Child instances of this instance.
     * @type {Instance[]}
     * @private
     */
    this.children = []

    /**
     * The editor controlling this Instance if any
     * @type {Editor|null}
     * @private
     */
    this.ui = null

    this.init()
  }

  /**
   * Initializes and register the instance
   */
  init () {
    this.register()
    this.setInitialValue()
    this.prepare()
    this.setDefaultValue()

    if (this.jedi.options.container) {
      this.setUI()
    }

    this.on('change', () => {
      if (this.parent) {
        this.parent.onChildChange()
      }
    })
  }

  /**
   * Sets the instance ui property. UI can be an editor instance or similar
   */
  setUI () {
  }

  /**
   * Return the last part of the instance path
   */
  getKey () {
    return this.path.split(this.jedi.pathSeparator).pop()
  }

  /**
   * Adds a child instance pointer to the instances list
   */
  register () {
    this.jedi.register(this)
  }

  /**
   * Deletes a child instance pointer from the instances list
   */
  unregister () {
    this.jedi.unregister(this)
  }

  /**
   * Sets the default value of the instance based on it's type
   */
  setInitialValue () {
    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.notSet)(this.value)) {
      let value
      const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(this.schema)

      if (schemaType === 'boolean') value = false
      if (schemaType === 'number') value = 0.0
      if (schemaType === 'integer') value = 0
      if (schemaType === 'string') value = ''
      if (schemaType === 'array') value = []
      if (schemaType === 'object') value = {}
      if (schemaType === 'null') value = null

      this.value = value
    }
  }

  setDefaultValue () {
    const schemaDefault = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDefault)(this.schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaDefault)) {
      this.setValue(schemaDefault, false)
    }
  }

  /**
   * Returns the value of the instance
   */
  getValue () {
    return this.value
  }

  /**
   * Sets the instance value
   */
  setValue (newValue, triggersChange = true) {
    this.value = newValue

    this.emit('set-value', newValue)

    if (triggersChange) {
      this.emit('change')
    }
  }

  /**
   * Fires when a child's instance state changes
   */
  onChildChange () {
  }

  /**
   * Returns an array of validation error messages
   */
  getErrors () {
    if (!this.isActive) {
      return []
    }

    const errors = this.jedi.validator.getErrors(this.getValue(), this.schema, this.getKey(), this.path)

    return (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeDuplicatesFromArray)(errors)
  }

  /**
   * Prepare data before building the editor
   */
  prepare () {
  }

  /**
   * Activates the instance
   */
  activate () {
    if (this.isActive === false) {
      this.isActive = true
      this.emit('change')
    }
  }

  /**
   * Deactivates the instance
   */
  deactivate () {
    if (this.isActive === true) {
      this.isActive = false
      this.emit('change')
    }
  }

  /**
   * Returns true if this instance is read only
   */
  isReadOnly () {
    let readOnly = false

    if ((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaReadOnly)(this.schema) === true) {
      readOnly = true
    }

    if (this.parent && (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaReadOnly)(this.parent.schema) === true) {
      readOnly = true
    }

    return readOnly
  }

  /**
   * Destroy the instance and it's children
   */
  destroy () {
    this.listeners = []

    this.children.forEach((child) => {
      child.destroy()
    })

    this.unregister()

    if (this.ui) {
      this.ui.destroy()
    }

    Object.keys(this).forEach((key) => {
      delete this[key]
    })

    super.destroy()
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instance);


/***/ }),

/***/ "./src/instances/multiple.js":
/*!***********************************!*\
  !*** ./src/instances/multiple.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance.js */ "./src/instances/instance.js");
/* harmony import */ var _editors_multiple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/multiple.js */ "./src/editors/multiple.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");





/**
 * Represents a InstanceMultiple instance.
 * @extends Instance
 */
class InstanceMultiple extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    this.ui = new _editors_multiple_js__WEBPACK_IMPORTED_MODULE_1__["default"](this)
  }

  prepare () {
    this.instances = []
    this.activeInstance = null
    this.lastIndex = 0
    this.index = 0
    this.schemas = []
    this.switcherOptionValues = []
    this.switcherOptionsLabels = []

    this.on('set-value', () => {
      this.onSetValue()
    })

    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__.getSchemaType)(this.schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__.getSchemaAnyOf)(this.schema)) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__.getSchemaOneOf)(this.schema))) {
      const schemasOf = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__.getSchemaAnyOf)(this.schema)) ? (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__.getSchemaAnyOf)(this.schema) : (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__.getSchemaOneOf)(this.schema)
      const schemaCopy = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.schema)
      delete schemaCopy['anyOf']
      delete schemaCopy['oneOf']
      delete schemaCopy['options']

      schemasOf.forEach((schema, index) => {
        schema = { ...schemaCopy, ...schema }

        if (this.jedi.refParser) {
          schema = this.jedi.refParser.expand(schema)
        }

        let switcherOptionsLabel = 'Option-' + (index + 1)
        const switcherTitle = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__.getSchemaOption)(schema, 'switcherTitle')
        const schemaTitle = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__.getSchemaTitle)(schema)

        if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)(schemaTitle)) {
          switcherOptionsLabel = schemaTitle
        }

        if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)(switcherTitle)) {
          switcherOptionsLabel = switcherTitle
        }

        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(switcherOptionsLabel)
        this.schemas.push(schema)
      })
    } else if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(schemaType)) {
      schemaType.forEach((type, index) => {
        const schemaClone = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)(this.schema)

        const schema = {
          ...schemaClone,
          ...{ type: type, title: type[0].toUpperCase() + type.slice(1) }
        }

        if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)(schemaClone.title)) {
          schema.title = schemaClone.title
        }

        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(type.charAt(0).toUpperCase() + type.slice(1))

        this.schemas.push(schema)
      })
    } else if (schemaType === 'any' || !schemaType) {
      const schemaClone = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.schema)

      this.schemas = [
        { ...schemaClone, ...{ type: 'object' } },
        { ...schemaClone, ...{ type: 'array' } },
        { ...schemaClone, ...{ type: 'string' } },
        { ...schemaClone, ...{ type: 'number' } },
        { ...schemaClone, ...{ type: 'integer' } },
        { ...schemaClone, ...{ type: 'boolean' } },
        { ...schemaClone, ...{ type: 'null' } }
      ]

      this.schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
      })

      this.switcherOptionsLabels = [
        'Object', 'Array', 'String', 'Number', 'Integer', 'Boolean', 'Null'
      ]
    }

    this.schemas.forEach((schema) => {
      const instance = this.jedi.createInstance({
        jedi: this.jedi,
        schema: schema,
        path: this.path,
        parent: this.parent,
        value: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.value)
      })

      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)(this.value)) {
        instance.setValue(this.value, false)
      }

      instance.unregister()

      instance.off('change')

      instance.on('change', () => {
        this.value = this.activeInstance.getValue()
        this.emit('change')
      })

      this.instances.push(instance)

      this.register()
    })

    const fittestIndex = this.getFittestIndex(this.value)
    this.switchInstance(fittestIndex, this.value)
  }

  switchInstance (index, value) {
    this.lastIndex = this.index
    this.index = index
    this.activeInstance = this.instances[index]

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)(value)) {
      this.activeInstance.setValue(value, false)
    }

    this.setValue(this.activeInstance.getValue())
  }

  onSetValue () {
    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.different)(this.activeInstance.getValue(), this.value)) {
      const fittestIndex = this.getFittestIndex(this.value)
      this.switchInstance(fittestIndex, this.value)
    }
  }

  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex (value) {
    let index = 0
    let fittestIndex
    let championErrors

    for (const instance of this.instances) {
      const instanceErrors = this.jedi.validator.getErrors(value, instance.schema, instance.getKey(), instance.path)

      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.notSet)(fittestIndex) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.notSet)(championErrors)) {
        fittestIndex = index
        championErrors = instanceErrors
      }

      if (instanceErrors.length < championErrors.length) {
        fittestIndex = index
        championErrors = instanceErrors
      }

      index++
    }

    return fittestIndex
  }

  destroy () {
    this.instances.forEach((instance) => {
      instance.destroy()
    })

    super.destroy()
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceMultiple);


/***/ }),

/***/ "./src/instances/null.js":
/*!*******************************!*\
  !*** ./src/instances/null.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance.js */ "./src/instances/instance.js");
/* harmony import */ var _editors_null_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/null.js */ "./src/editors/null.js");



/**
 * Represents a InstanceNull instance.
 * @extends Instance
 */
class InstanceNull extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    this.ui = new _editors_null_js__WEBPACK_IMPORTED_MODULE_1__["default"](this)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceNull);


/***/ }),

/***/ "./src/instances/number.js":
/*!*********************************!*\
  !*** ./src/instances/number.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance.js */ "./src/instances/instance.js");
/* harmony import */ var _editors_number_enum_radio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/number-enum-radio.js */ "./src/editors/number-enum-radio.js");
/* harmony import */ var _editors_number_enum_select_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editors/number-enum-select.js */ "./src/editors/number-enum-select.js");
/* harmony import */ var _editors_number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editors/number.js */ "./src/editors/number.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");







/**
 * Represents a InstanceNumber instance.
 * @extends Instance
 */
class InstanceNumber extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaType)(this.schema)
    const schemaEnum = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaEnum)(this.schema)
    const schemaFormat = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaFormat)(this.schema)
    const typeIsNumeric = schemaType === 'number' || schemaType === 'integer'

    if (typeIsNumeric && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_4__.isSet)(schemaEnum) && schemaFormat === 'radio') {
      this.ui = new _editors_number_enum_radio_js__WEBPACK_IMPORTED_MODULE_1__["default"](this)
    } else if (typeIsNumeric && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_4__.isSet)(schemaEnum)) {
      this.ui = new _editors_number_enum_select_js__WEBPACK_IMPORTED_MODULE_2__["default"](this)
    } else if (typeIsNumeric) {
      this.ui = new _editors_number_js__WEBPACK_IMPORTED_MODULE_3__["default"](this)
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceNumber);


/***/ }),

/***/ "./src/instances/object.js":
/*!*********************************!*\
  !*** ./src/instances/object.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance.js */ "./src/instances/instance.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _editors_object_grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editors/object-grid.js */ "./src/editors/object-grid.js");
/* harmony import */ var _editors_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editors/object.js */ "./src/editors/object.js");
/* harmony import */ var _editors_object_nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editors/object-nav.js */ "./src/editors/object-nav.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");







/**
 * Represents an InstanceObject instance.
 * @extends Instance
 */
class InstanceObject extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaType)(this.schema)
    const schemaFormat = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaFormat)(this.schema)
    const schemaControl = this.schema['x-control']

    if (schemaType === 'object' && schemaFormat === 'grid') {
      this.ui = new _editors_object_grid_js__WEBPACK_IMPORTED_MODULE_2__["default"](this)
    } else if (schemaType === 'object' && schemaControl === 'nav') {
      this.ui = new _editors_object_nav_js__WEBPACK_IMPORTED_MODULE_4__["default"](this)
    } else {
      this.ui = new _editors_object_js__WEBPACK_IMPORTED_MODULE_3__["default"](this)
    }
  }

  prepare () {
    this.properties = {}
    const schemaProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaProperties)(this.schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaProperties)) {
      Object.keys(schemaProperties).forEach((key) => {
        const schema = schemaProperties[key]
        this.properties[key] = { schema }

        let musstCreateChild = true

        const deactivateNonRequired = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaOption)(this.schema, 'deactivateNonRequired')
        const schemaDeactivateNonRequired = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaOption)(schema, 'deactivateNonRequired')

        if (this.isNotRequired(key) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(deactivateNonRequired) && deactivateNonRequired === true) {
          musstCreateChild = false
        }

        if (this.isNotRequired(key) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaDeactivateNonRequired) && schemaDeactivateNonRequired === true) {
          musstCreateChild = false
        }

        if (musstCreateChild) {
          this.createChild(schema, key)
        }
      })
    }

    this.refreshInstances()

    this.on('set-value', () => {
      this.refreshInstances()
    })
  }

  /**
   * Returns true if the property is required
   */
  isRequired (property) {
    const schemaRequired = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaRequired)(this.schema)

    return (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaRequired) && schemaRequired.includes(property)
  }

  /**
   * Returns true if the property is dependent required
   */
  isDependentRequired (property) {
    const dependentRequired = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaDependentRequired)(this.schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(dependentRequired)) {
      let missingProperties = []

      Object.keys(dependentRequired).forEach((key) => {
        if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(this.value[key])) {
          const requiredProperties = dependentRequired[key]

          missingProperties = requiredProperties.filter((property) => {
            return !(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(this.value, property)
          })
        }
      })

      return missingProperties.includes(property)
    }

    return false
  }

  createChild (schema, key, value) {
    const instance = this.jedi.createInstance({
      jedi: this.jedi,
      schema: schema,
      path: this.path + this.jedi.pathSeparator + key,
      parent: this,
      value: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.clone)(value)
    })

    this.children.push(instance)
    this.value[key] = instance.getValue()

    const deactivateNonRequired = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaOption)(this.schema, 'deactivateNonRequired')

    if (this.isNotRequired(key) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(deactivateNonRequired) && deactivateNonRequired === true) {
      instance.deactivate()
    }

    return instance
  }

  isNotRequired (property) {
    return !this.isRequired(property) && !this.isDependentRequired(property)
  }

  deleteChild (key) {
    for (let i = this.children.length - 1; i >= 0; i--) {
      const instance = this.children[i]
      if (instance.getKey() === key) {
        instance.destroy()
        this.children.splice(i, 1)
        this.onChildChange()
      }
    }
  }

  getChild (key) {
    return this.children.find((instance) => {
      return key === instance.getKey().split(this.jedi.pathSeparator).pop()
    })
  }

  onChildChange () {
    const value = {}

    this.children.forEach((child) => {
      if (child.isActive) {
        value[child.getKey()] = child.getValue()
      }
    })

    this.value = value
    this.emit('change')
  }

  refreshInstances () {
    const value = this.getValue()

    if (!(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(value)) {
      return
    }

    Object.keys(value).forEach((key) => {
      const child = this.getChild(key)

      // If a value has a already a child instance
      if (child) {
        child.activate()
        const oldValue = child.getValue()
        const newValue = value[child.getKey()]

        // update child value if the old value and the new value are different
        if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.different)(oldValue, newValue)) {
          child.setValue(newValue, false)
        }
      } else {
        // create new child instance for the new value entry having the value as default
        this.createChild({}, key, value[key])
      }
    })

    // remove any children that are not included in the value
    for (let i = this.children.length - 1; i >= 0; i--) {
      const instance = this.children[i]
      const key = instance.getKey()
      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.notSet)(value[key])) {
        if (this.getChild(key)) {
          instance.deactivate()
        } else {
          this.deleteChild(key)
        }
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceObject);


/***/ }),

/***/ "./src/instances/string.js":
/*!*********************************!*\
  !*** ./src/instances/string.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance.js */ "./src/instances/instance.js");
/* harmony import */ var _editors_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/string.js */ "./src/editors/string.js");
/* harmony import */ var _editors_string_enum_radio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editors/string-enum-radio.js */ "./src/editors/string-enum-radio.js");
/* harmony import */ var _editors_string_enum_select_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editors/string-enum-select.js */ "./src/editors/string-enum-select.js");
/* harmony import */ var _editors_string_textarea_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editors/string-textarea.js */ "./src/editors/string-textarea.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");








/**
 * Represents a InstanceString instance.
 * @extends Instance
 */
class InstanceString extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__.getSchemaType)(this.schema)
    const schemaEnum = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__.getSchemaEnum)(this.schema)
    const schemaFormat = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__.getSchemaFormat)(this.schema)

    if (schemaType === 'string' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__.isSet)(schemaEnum) && schemaFormat === 'radio') {
      this.ui = new _editors_string_enum_radio_js__WEBPACK_IMPORTED_MODULE_2__["default"](this)
    } else if (schemaType === 'string' && schemaFormat === 'textarea') {
      this.ui = new _editors_string_textarea_js__WEBPACK_IMPORTED_MODULE_4__["default"](this)
    } else if (schemaType === 'string' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__.isSet)(schemaEnum)) {
      this.ui = new _editors_string_enum_select_js__WEBPACK_IMPORTED_MODULE_3__["default"](this)
    } else if (schemaType === 'string') {
      this.ui = new _editors_string_js__WEBPACK_IMPORTED_MODULE_1__["default"](this)
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceString);


/***/ }),

/***/ "./src/jedi.js":
/*!*********************!*\
  !*** ./src/jedi.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validation_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation/validator.js */ "./src/validation/validator.js");
/* harmony import */ var _event_emitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-emitter.js */ "./src/event-emitter.js");
/* harmony import */ var _instances_if_then_else_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instances/if-then-else.js */ "./src/instances/if-then-else.js");
/* harmony import */ var _instances_multiple_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instances/multiple.js */ "./src/instances/multiple.js");
/* harmony import */ var _instances_boolean_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instances/boolean.js */ "./src/instances/boolean.js");
/* harmony import */ var _instances_object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instances/object.js */ "./src/instances/object.js");
/* harmony import */ var _instances_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instances/array.js */ "./src/instances/array.js");
/* harmony import */ var _instances_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instances/string.js */ "./src/instances/string.js");
/* harmony import */ var _instances_number_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instances/number.js */ "./src/instances/number.js");
/* harmony import */ var _instances_null_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./instances/null.js */ "./src/instances/null.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/schema.js */ "./src/helpers/schema.js");













/**
 * Represents a Jedi instance.
 */
class Jedi extends _event_emitter_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.container - Where the UI controls will be rendered
   * @param {string} options.theme - How the UI controls will be rendered
   */
  constructor (options) {
    super()

    this.options = Object.assign({
      container: null,
      refParser: null,
      editableProperties: false,
      schema: {},
      showErrors: 'change',
      data: undefined,
      validateFormat: false
    }, options)

    /**
     * Roots symbol used in paths
     * @type {string}
     * @private
     */
    this.rootName = '#'

    /**
     * Separator symbol used in paths
     * @type {string}
     * @private
     */
    this.pathSeparator = '/'

    /**
     * List of registered instances
     * @type {object}
     * @private
     */
    this.instances = {}

    /**
     * The root editor
     * @type {Instance}
     * @private
     */
    this.root = null

    /**
     * The Theme instance used to generate editors user interfaces
     * @type {Theme}
     * @private
     */
    this.theme = null

    /**
     * The Validator instance used to validate instance values
     * @type {Validator}
     * @private
     */
    this.validator = null

    /**
     * A json schema used
     * @type {*}
     * @private
     */
    this.schema = {}

    /**
     * A RefParser instance
     * @type {RefParser}
     * @private
     */
    this.refParser = this.options.refParser ? this.options.refParser : null

    this.init()
  }

  /**
   * Initializes instance properties
   * @private
   */
  init () {
    this.schema = this.options.schema
    this.validator = new _validation_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ refParser: this.refParser, validateFormat: this.options.validateFormat })

    this.root = this.createInstance({
      jedi: this,
      schema: this.options.schema,
      path: this.rootName
    })

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_10__.isSet)(this.options.data)) {
      this.root.setValue(this.options.data, false)
    }

    if (this.options.container) {
      this.container = this.options.container
      this.appendHiddenInput()
      this.container.appendChild(this.root.ui.control.container)
      this.container.classList.add('jedi-ready')
    }

    this.bindEventListeners()
  }

  bindEventListeners () {
    if (this.root) {
      this.root.on('change', () => {
        this.emit('change')
      })
    }

    if (this.hiddenInput) {
      this.on('change', () => {
        this.hiddenInput.value = JSON.stringify(this.getValue())
      })
    }
  }

  /**
   * Appends a hidden input to the root container whose value will be the value
   * of the root instance.
   * @private
   */
  appendHiddenInput () {
    const hiddenControl = this.root.ui.theme.getInputControl({
      type: 'hidden',
      id: 'jedi-hidden-input'
    })

    this.hiddenInput = hiddenControl.input
    this.hiddenInput.setAttribute('name', 'json')
    this.hiddenInput.removeAttribute('aria-describedby')
    this.container.appendChild(this.hiddenInput)
    this.hiddenInput.value = JSON.stringify(this.getValue())
  }

  /**
   * Adds a child instance pointer to the instances list
   * @private
   */
  register (instance) {
    this.instances[instance.path] = instance
  }

  /**
   * Deletes a child instance pointer from the instances list
   * @private
   */
  unregister (instance) {
    this.instances[instance.path] = null
    delete this.instances[instance.path]
  }

  /**
   * Creates a json instance and dereference schema on the fly if needed.
   * @private
   */
  createInstance (config) {
    if (this.refParser) {
      config.schema = this.refParser.expand(config.schema, config.path)
    }
    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_11__.getSchemaType)(config.schema)
    const schemaOneOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_11__.getSchemaOneOf)(config.schema)
    const schemaAnyOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_11__.getSchemaAnyOf)(config.schema)
    const schemaIf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_11__.getSchemaIf)(config.schema)
    const schemaThen = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_11__.getSchemaThen)(config.schema)
    const schemaElse = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_11__.getSchemaElse)(config.schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_10__.isSet)(schemaAnyOf) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_10__.isSet)(schemaOneOf) || schemaType === 'any' || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_10__.isArray)(schemaType) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_10__.notSet)(schemaType)) {
      return new _instances_multiple_js__WEBPACK_IMPORTED_MODULE_3__["default"](config)
    }

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_10__.isSet)(schemaIf) && ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_10__.isSet)(schemaThen) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_10__.isSet)(schemaElse))) {
      return new _instances_if_then_else_js__WEBPACK_IMPORTED_MODULE_2__["default"](config)
    }

    if (schemaType === 'object') {
      return new _instances_object_js__WEBPACK_IMPORTED_MODULE_5__["default"](config)
    }

    if (schemaType === 'array') {
      return new _instances_array_js__WEBPACK_IMPORTED_MODULE_6__["default"](config)
    }

    if (schemaType === 'string') {
      return new _instances_string_js__WEBPACK_IMPORTED_MODULE_7__["default"](config)
    }

    if (schemaType === 'number' || schemaType === 'integer') {
      return new _instances_number_js__WEBPACK_IMPORTED_MODULE_8__["default"](config)
    }

    if (schemaType === 'boolean') {
      return new _instances_boolean_js__WEBPACK_IMPORTED_MODULE_4__["default"](config)
    }

    if (schemaType === 'null') {
      return new _instances_null_js__WEBPACK_IMPORTED_MODULE_9__["default"](config)
    }
  }

  /**
   * Returns the value of the root instance
   * @return {*}
   */
  getValue () {
    return this.root.getValue()
  }

  /**
   * Sets the value of the root instance
   */
  setValue () {
    this.root.setValue(...arguments)
  }

  /**
   * Returns an instance by path
   * @return {*}
   */
  getInstance (path) {
    return this.instances[path]
  }

  /**
   * Disables the root instance and it's children user interfaces
   */
  disable () {
    this.root.ui.disable()
  }

  /**
   * Enables the root instance and it's children user interfaces
   */
  enable () {
    this.root.ui.enable()
  }

  /**
   * Returns an array of validation error messages
   */
  getErrors () {
    let errors = []

    Object.keys(this.instances).forEach((key) => {
      const instance = this.instances[key]
      errors = [...errors, ...instance.getErrors()]
    })

    return errors
  }

  /**
   * Destroy the root instance and it's children
   */
  destroy () {
    this.root.destroy()

    if (this.options.container) {
      this.container.innerHTML = ''
    }

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Jedi);


/***/ }),

/***/ "./src/ref-parser/ref-parser.js":
/*!**************************************!*\
  !*** ./src/ref-parser/ref-parser.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class RefParser {
  constructor () {
    this.refs = {}
  }

  async dereference (schema) {
    await this.traverseExternal(schema)
    this.traverseLocal(schema)
  }

  /**
   * Traverses the given schema recursively and for each schema with $ref
   * add a new property in the this.refs object with key being the json path to that schema.
   * Initially the added properties will habe a value of null. This value will be later
   * replaced with the resolved schema for that json path using resolveExternal() and resolveLocal().
   *
   * It also adds a new property in the this.refs object with key being the json path to that schema
   * and value being the schema.
   * @param schema
   * @param path
   */
  async traverseExternal (schema, path = '#') {
    if (typeof schema !== 'object' || schema === null) {
      return
    }

    for (const [key, value] of Object.entries(schema)) {
      const nextPath = path ? `${path}/${key}` : `/${key}`

      if (this.hasRef(schema)) {
        const ref = schema['$ref']

        if (this.refs[ref]) {
          return
        }

        this.refs[ref] = null

        if (this.hasExternalRef(schema)) {
          const resolvedSchema = await this.resolveExternal(schema)
          await this.traverseExternal(resolvedSchema, nextPath)
        }
      }

      this.refs[path] = schema

      await this.traverseExternal(value, nextPath)
    }
  }

  traverseLocal (schema, path = '#') {
    if (typeof schema !== 'object' || schema === null) {
      return
    }

    for (const [key, value] of Object.entries(schema)) {
      const nextPath = path ? `${path}/${key}` : `/${key}`

      if (this.hasRef(schema)) {
        const ref = schema['$ref']

        if (this.refs[ref]) {
          return
        }

        if (!this.hasExternalRef(schema)) {
          const resolvedSchema = this.resolveLocal(schema)
          this.traverseLocal(resolvedSchema, nextPath)
        }
      }

      this.traverseLocal(value, nextPath)
    }
  }

  /**
   * Iterates through the this.refs object keys. If the key is an uri containing "http" or "https" then
   * uses that key as the url in a http request to retrieve the external schema. The retrieved schema
   * will be used for the value of that property
   */
  async resolveExternal (schema) {
    const ref = schema['$ref']
    const resolvedSchema = await this.load(ref)
    this.refs[ref] = resolvedSchema
    return resolvedSchema
  }

  /**
   * Iterates through the this.refs object keys and resolve all schemas that can be found in this.refs object
   */
  resolveLocal (schema) {
    const ref = schema['$ref']

    let resolvedSchema = null

    if (this.refs[ref]) {
      resolvedSchema = this.refs[ref]
      this.refs[ref] = resolvedSchema
    }

    return resolvedSchema
  }

  hasRef (schema) {
    return typeof schema['$ref'] !== 'undefined'
  }

  hasExternalRef (schema) {
    const ref = schema['$ref']

    if (typeof ref !== 'string') {
      return false
    }

    return ref.startsWith('http') || ref.startsWith('https')
  }

  isCircularRef (ref) {
    const test = `"$ref":"${ref}"`
    const refSchema = this.refs[ref]
    const schemaString = JSON.stringify(refSchema)
    return schemaString.includes(test)
  }

  isObject (value) {
    return value !== null && typeof value === 'object'
  }

  expand (schema) {
    const cloneSchema = JSON.parse(JSON.stringify(schema))

    if (this.isObject(cloneSchema) && '$ref' in cloneSchema) {
      const ref = cloneSchema.$ref
      delete cloneSchema['$ref']
      return Object.assign({}, this.refs[ref], cloneSchema)
    }

    return cloneSchema
  }

  /**
   * Loads a schema with a synchronous http request
   * @param uri
   * @returns {any}
   */
  async load (uri) {
    try {
      const response = await fetch(uri)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return await response.json()
    } catch (error) {
      console.error('Error loading', uri, error)
      throw error
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefParser);


/***/ }),

/***/ "./src/themes/bootstrap3.js":
/*!**********************************!*\
  !*** ./src/themes/bootstrap3.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.js */ "./src/themes/theme.js");


/**
 * Represents a ThemeBootstrap3 instance.
 * @extends Theme
 */
class ThemeBootstrap3 extends _theme_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  init () {
    this.useToggleEvents = false
  }

  getFieldset () {
    const fieldset = document.createElement('fieldset')
    fieldset.classList.add('panel')
    fieldset.classList.add('panel-default')
    return fieldset
  }

  getLegend (config) {
    const legend = super.getLegend(config)
    legend.classList.add('h5')
    legend.classList.add('panel-heading')
    legend.classList.add('pull-left')
    legend.setAttribute('style', 'margin: 0; display: flex; justify-content: space-between; align-items: center;')
    return legend
  }

  getCard () {
    const card = super.getCard()
    card.classList.add('panel')
    card.classList.add('panel-default')
    return card
  }

  getCardHeader (config) {
    const header = super.getCardHeader(config)
    header.classList.add('panel-heading')
    header.classList.add('text-right')
    return header
  }

  getCardBody () {
    const html = super.getCardBody()
    html.classList.add('panel-body')
    html.style.clear = 'both'
    return html
  }

  getBtnGroup () {
    const html = super.getBtnGroup()
    html.classList.add('btn-group')
    return html
  }

  getButton (config) {
    const html = super.getButton(config)
    html.classList.add('btn')
    html.classList.add('btn-xs')
    html.classList.add('btn-default')
    return html
  }

  getDescription (config) {
    const description = super.getDescription(config)
    description.classList.add('text-muted')
    return description
  }

  getTextareaControl (config) {
    const control = super.getTextareaControl(config)
    const { container, input, label } = control
    container.classList.add('form-group')
    input.classList.add('form-control')

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    return control
  }

  getInputControl (config) {
    const control = super.getInputControl(config)
    const { container, input, label } = control
    container.classList.add('form-group')
    input.classList.add('form-control')

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    return control
  }

  getRadiosControl (config) {
    const control = super.getRadiosControl(config)
    const { body, radios, labels, labelTexts, radioControls, description, messages } = control

    radioControls.forEach((radioControl, index) => {
      radioControl.classList.add('radio')

      body.appendChild(radioControls[index])
      radioControl.appendChild(labels[index])
      labels[index].appendChild(radios[index])
      labels[index].appendChild(labelTexts[index])
    })

    body.appendChild(description)
    body.appendChild(messages)

    return control
  }

  getCheckboxControl (config) {
    const control = super.getCheckboxControl(config)
    const { container, formGroup, input, label, labelText, description, messages } = control
    formGroup.classList.add('checkbox')

    container.appendChild(formGroup)
    formGroup.appendChild(label)
    label.appendChild(input)
    label.appendChild(labelText)
    formGroup.appendChild(description)
    formGroup.appendChild(messages)
    return control
  }

  getSelectControl (config) {
    const control = super.getSelectControl(config)
    const { container, input, label } = control
    container.classList.add('form-group')
    input.classList.add('form-control')

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    return control
  }

  getSwitcher (config) {
    const control = super.getSwitcher(config)
    const { container, input } = control
    container.classList.remove('form-group')
    input.classList.remove('form-control')
    return control
  }

  getAlert (config) {
    const html = super.getAlert(config)
    html.classList.add('alert')
    html.classList.add('alert-danger')
    return html
  }

  getInvalidFeedback (config) {
    const html = super.getInvalidFeedback(config)
    html.classList.add('text-danger')
    return html
  }

  getRow () {
    const row = super.getRow()
    row.classList.add('row')
    return row
  }

  getCol (xs, md, offsetMd) {
    const col = super.getRow()
    col.classList.add('col-xs-' + xs)
    col.classList.add('col-md-' + md)

    if (offsetMd) {
      col.classList.add('col-md-offset-' + offsetMd)
    }

    return col
  }

  getTabList (config) {
    const tabList = super.getTabList(config)
    tabList.classList.add('nav')

    if (config.type === 'tabs') {
      tabList.classList.add('nav-tabs')
    } else {
      tabList.classList.add('nav-pills')
    }

    tabList.classList.add('nav-stacked')

    if (config.stacked === false) {
      tabList.classList.remove('nav-stacked')
    }

    return tabList
  }

  getTab (config) {
    const tab = super.getTab(config)

    if (config.active) {
      tab.list.classList.add('active')
    }

    tab.link.setAttribute('data-toggle', 'tab')
    return tab
  }

  setTabPaneAttributes (element, active, id) {
    super.setTabPaneAttributes(element, active, id)
    element.classList.add('tab-pane')

    if (active) {
      element.classList.add('in')
      element.classList.add('active')
    }
  }

  visuallyHidden (element) {
    element.classList.add('sr-only')
  }

  visuallyVisible (element) {
    element.classList.remove('sr-only')
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeBootstrap3);


/***/ }),

/***/ "./src/themes/bootstrap4.js":
/*!**********************************!*\
  !*** ./src/themes/bootstrap4.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.js */ "./src/themes/theme.js");


/**
 * Represents a ThemeBootstrap4 instance.
 * @extends Theme
 */
class ThemeBootstrap4 extends _theme_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  init () {
    this.useToggleEvents = false
  }

  getFieldset () {
    const fieldset = document.createElement('fieldset')
    fieldset.classList.add('card')
    fieldset.classList.add('mb-3')
    return fieldset
  }

  getLegend (config) {
    const legend = super.getLegend(config)
    legend.classList.add('h6')
    legend.classList.add('card-header')
    legend.classList.add('d-flex')
    legend.classList.add('justify-content-between')
    legend.classList.add('align-items-center')
    legend.classList.add('float-left')
    legend.classList.add('py-2')
    return legend
  }

  getCard () {
    const card = super.getCard()
    card.classList.add('card')
    card.classList.add('mb-3')
    return card
  }

  getCardHeader (config) {
    const html = super.getCardHeader(config)
    html.classList.add('card-header')
    html.classList.add('d-flex')
    html.classList.add('justify-content-end')
    html.classList.add('align-items-center')
    html.classList.add('py-1')
    return html
  }

  getCardBody () {
    const html = super.getCardBody()
    html.classList.add('card-body')
    return html
  }

  getBtnGroup () {
    const html = super.getBtnGroup()
    html.classList.add('btn-group')
    return html
  }

  getButton (config) {
    const html = super.getButton(config)
    html.classList.add('btn')
    html.classList.add('btn-sm')
    return html
  }

  getDescription (config) {
    const description = super.getDescription(config)
    description.classList.add('text-muted')
    return description
  }

  getTextareaControl (config) {
    const control = super.getTextareaControl(config)
    const { container, input, label } = control
    container.classList.add('form-group')
    input.classList.add('form-control')

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    return control
  }

  getInputControl (config) {
    const control = super.getInputControl(config)
    const { container, input, label } = control
    container.classList.add('form-group')
    input.classList.add('form-control')

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    return control
  }

  getRadiosControl (config) {
    const control = super.getRadiosControl(config)
    const { container, body, radios, labels, labelTexts, radioControls, description, messages } = control

    container.classList.add('form-group')

    radioControls.forEach((radioControl, index) => {
      radioControl.classList.add('form-check')
      radios[index].classList.add('form-check-input')
      labels[index].classList.add('form-check-label')

      body.appendChild(radioControls[index])
      radioControl.appendChild(radios[index])
      radioControl.appendChild(labels[index])
      labels[index].appendChild(labelTexts[index])
    })

    body.appendChild(description)
    body.appendChild(messages)

    return control
  }

  getCheckboxControl (config) {
    const control = super.getCheckboxControl(config)
    const { container, formGroup, input, label, description, messages } = control
    formGroup.classList.add('form-group')
    formGroup.classList.add('form-check')
    input.classList.add('form-check-input')
    label.classList.add('form-check-label')

    container.appendChild(formGroup)
    formGroup.appendChild(input)
    formGroup.appendChild(label)
    formGroup.appendChild(description)
    formGroup.appendChild(messages)
    return control
  }

  getSelectControl (config) {
    const control = super.getSelectControl(config)
    const { container, input } = control
    container.classList.add('form-group')
    input.classList.add('form-control')
    return control
  }

  getSwitcher (config) {
    const control = super.getSwitcher(config)
    const { container, input } = control
    container.classList.remove('form-group')
    input.classList.remove('form-control')
    return control
  }

  getAlert (config) {
    const html = super.getAlert(config)
    html.classList.add('alert')
    html.classList.add('alert-danger')
    return html
  }

  getInvalidFeedback (config) {
    const html = super.getInvalidFeedback(config)
    html.classList.add('text-danger')
    html.classList.add('form-text')
    html.classList.add('d-block')
    return html
  }

  getColumnClass (size, cols) {
    return 'col-' + size + '-' + cols
  }

  getRow () {
    const row = super.getRow()
    row.classList.add('row')
    return row
  }

  getCol (xs, md, offsetMd) {
    const col = super.getRow(xs, md, offsetMd)
    col.classList.add('col-' + xs)
    col.classList.add('col-md-' + md)

    if (offsetMd) {
      col.classList.add('offset-md-' + offsetMd)
    }

    return col
  }

  getTabList (config) {
    const tabList = super.getTabList()
    tabList.classList.add('nav')

    if (config.type === 'tabs') {
      tabList.classList.add('nav-tabs')
    } else {
      tabList.classList.add('nav-pills')
    }

    tabList.classList.add('flex-column')

    if (config.stacked === false) {
      tabList.classList.remove('flex-column')
    }

    return tabList
  }

  getTab (config) {
    const tab = super.getTab(config)
    tab.list.classList.add('nav-item')

    tab.link.classList.add('nav-link')
    tab.link.setAttribute('data-toggle', 'tab')

    if (config.active) {
      tab.link.classList.add('active')
    }

    return tab
  }

  setTabPaneAttributes (element, active, id) {
    super.setTabPaneAttributes(element, active, id)
    element.classList.add('tab-pane')

    if (active) {
      element.classList.add('active')
    }
  }

  visuallyHidden (element) {
    element.classList.add('sr-only')
  }

  visuallyVisible (element) {
    element.classList.remove('sr-only')
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeBootstrap4);


/***/ }),

/***/ "./src/themes/bootstrap5.js":
/*!**********************************!*\
  !*** ./src/themes/bootstrap5.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.js */ "./src/themes/theme.js");


/**
 * Represents a ThemeBootstrap5 instance.
 * @extends Theme
 */
class ThemeBootstrap5 extends _theme_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  init () {
    this.useToggleEvents = false
  }

  getFieldset () {
    const fieldset = document.createElement('fieldset')
    fieldset.classList.add('card')
    fieldset.classList.add('mb-3')
    return fieldset
  }

  getLegend (config) {
    const legend = super.getLegend(config)
    legend.classList.add('h6')
    legend.classList.add('card-header')
    legend.classList.add('d-flex')
    legend.classList.add('justify-content-between')
    legend.classList.add('align-items-center')
    legend.classList.add('py-2')
    return legend
  }

  getCard () {
    const card = super.getCard()
    card.classList.add('card')
    card.classList.add('mb-3')
    return card
  }

  getCardHeader (config) {
    const html = super.getCardHeader(config)
    html.classList.add('card-header')
    html.classList.add('d-flex')
    html.classList.add('justify-content-end')
    html.classList.add('align-items-center')
    html.classList.add('py-1')
    return html
  }

  getCardBody () {
    const html = super.getCardBody()
    html.classList.add('card-body')
    return html
  }

  getControlSlot () {
    const controlSlot = super.getControlSlot()
    controlSlot.classList.add('mb-3')
    return controlSlot
  }

  getBtnGroup () {
    const html = super.getBtnGroup()
    html.classList.add('btn-group')
    return html
  }

  getButton (config) {
    const html = super.getButton(config)
    html.classList.add('btn')
    html.classList.add('btn-sm')
    return html
  }

  getDescription (config) {
    const description = super.getDescription(config)
    description.classList.add('text-muted')
    return description
  }

  getTextareaControl (config) {
    const control = super.getTextareaControl(config)
    const { container, input, label } = control
    container.classList.add('mb-3')
    input.classList.add('form-control')

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    return control
  }

  getInputControl (config) {
    const control = super.getInputControl(config)
    const { container, input, label } = control
    container.classList.add('mb-3')
    input.classList.add('form-control')

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    return control
  }

  getRadiosControl (config) {
    const control = super.getRadiosControl(config)
    const { container, body, radios, labels, labelTexts, radioControls, description, messages } = control

    container.classList.add('mb-3')

    radioControls.forEach((radioControl, index) => {
      radioControl.classList.add('form-check')
      radios[index].classList.add('form-check-input')
      labels[index].classList.add('form-check-label')

      body.appendChild(radioControls[index])
      radioControl.appendChild(radios[index])
      radioControl.appendChild(labels[index])
      labels[index].appendChild(labelTexts[index])
    })

    body.appendChild(description)
    body.appendChild(messages)

    return control
  }

  getCheckboxControl (config) {
    const control = super.getCheckboxControl(config)
    const { container, formGroup, input, label, description, messages } = control
    container.classList.add('mb-3')
    formGroup.classList.add('form-check')
    input.classList.add('form-check-input')
    label.classList.add('form-check-label')

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    container.appendChild(formGroup)
    formGroup.appendChild(input)
    formGroup.appendChild(label)
    formGroup.appendChild(description)
    formGroup.appendChild(messages)
    return control
  }

  getSelectControl (config) {
    const control = super.getSelectControl(config)
    const { container, input } = control
    container.classList.add('mb-3')
    input.classList.add('form-select')
    return control
  }

  getSwitcher (config) {
    const control = super.getSwitcher(config)
    const { container, input, label } = control
    container.classList.remove('mb-3')
    input.classList.remove('form-select')
    this.visuallyHidden(label)
    return control
  }

  getAlert (config) {
    const html = super.getAlert(config)
    html.classList.add('alert')
    html.classList.add('alert-danger')
    return html
  }

  getInvalidFeedback (config) {
    const html = super.getInvalidFeedback(config)
    html.classList.add('text-danger')
    html.classList.add('d-block')
    html.classList.add('form-text')
    html.classList.add('form-text')
    return html
  }

  getRow () {
    const row = super.getRow()
    row.classList.add('row')
    return row
  }

  getCol (xs, md, offsetMd) {
    const col = super.getRow(xs, md, offsetMd)
    col.classList.add('col-' + xs)
    col.classList.add('col-md-' + md)

    if (offsetMd) {
      col.classList.add('offset-md-' + offsetMd)
    }

    return col
  }

  getTabList (config) {
    const tabList = super.getTabList(config)
    tabList.classList.add('nav')

    if (config.type === 'tabs') {
      tabList.classList.add('nav-tabs')
    } else {
      tabList.classList.add('nav-pills')
    }

    tabList.classList.add('flex-column')

    if (config.stacked === false) {
      tabList.classList.remove('flex-column')
    }

    return tabList
  }

  getTab (config) {
    const tab = super.getTab(config)
    tab.list.classList.add('nav-item')

    tab.link.classList.add('nav-link')
    tab.link.setAttribute('data-bs-toggle', 'tab')

    if (config.active) {
      tab.link.classList.add('active')
    }

    return tab
  }

  setTabPaneAttributes (element, active, id) {
    super.setTabPaneAttributes(element, active, id)
    element.classList.add('tab-pane')

    if (active) {
      element.classList.add('active')
    }
  }

  visuallyHidden (element) {
    element.classList.add('visually-hidden')
  }

  visuallyVisible (element) {
    element.classList.remove('visually-hidden')
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeBootstrap5);


/***/ }),

/***/ "./src/themes/icons/icons.js":
/*!***********************************!*\
  !*** ./src/themes/icons/icons.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bootstrapIcons: () => (/* binding */ bootstrapIcons),
/* harmony export */   fontAwesome3: () => (/* binding */ fontAwesome3),
/* harmony export */   fontAwesome4: () => (/* binding */ fontAwesome4),
/* harmony export */   fontAwesome5: () => (/* binding */ fontAwesome5),
/* harmony export */   fontAwesome6: () => (/* binding */ fontAwesome6),
/* harmony export */   glyphicons: () => (/* binding */ glyphicons)
/* harmony export */ });
/**
 * Lists of html classes used for icons.
 * @module icons
 */

/**
 * HTML classes for glyphicons icons
 * @type {object}
 */
const glyphicons = {
  properties: 'glyphicon glyphicon-list',
  delete: 'glyphicon glyphicon-trash',
  add: 'glyphicon glyphicon-plus',
  moveUp: 'glyphicon glyphicon-arrow-up',
  moveDown: 'glyphicon glyphicon-arrow-down'
}

/**
 * HTML classes for bootstrap-icons icons
 * @type {object}
 */
const bootstrapIcons = {
  properties: 'bi bi-card-list',
  delete: 'bi bi-trash2',
  add: 'bi bi-plus',
  moveUp: 'bi bi-arrow-up',
  moveDown: 'bi bi-arrow-down'
}

/**
 * HTML classes for fontawesome3 icons
 * @type {object}
 */
const fontAwesome3 = {
  properties: 'icon-list',
  delete: 'icon-trash',
  add: 'icon-plus',
  moveUp: 'icon-arrow-up',
  moveDown: 'icon-arrow-down'
}

/**
 * HTML classes for fontawesome4 icons
 * @type {object}
 */
const fontAwesome4 = {
  properties: 'fa fa-list',
  delete: 'fa fa-trash-o',
  add: 'fa fa-plus',
  moveUp: 'fa fa-arrow-up',
  moveDown: 'fa fa-arrow-down'
}

/**
 * HTML classes for fontawesome5 icons
 * @type {object}
 */
const fontAwesome5 = {
  properties: 'fas fa-list',
  delete: 'fas fa-trash',
  add: 'fas fa-plus',
  moveUp: 'fas fa-arrow-up',
  moveDown: 'fas fa-arrow-down'
}

/**
 * HTML classes for fontawesome6 icons
 * @type {object}
 */
const fontAwesome6 = {
  properties: 'fa-solid fa-list',
  delete: 'fa-solid fa-trash',
  add: 'fa-solid fa-plus',
  moveUp: 'fa-solid fa-arrow-up',
  moveDown: 'fa-solid fa-arrow-down'
}


/***/ }),

/***/ "./src/themes/theme.js":
/*!*****************************!*\
  !*** ./src/themes/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Represents a Theme instance.
 */
class Theme {
  constructor (icons = null) {
    this.icons = icons
    this.useToggleEvents = true
    this.init()
  }

  /**
   * Inits some instance properties
   * @private
   */
  init () {
    this.useToggleEvents = true
  }

  /**
   * Returns a icon element
   * @private
   */
  getIcon (name) {
    const icon = document.createElement('i')
    const iconClasses = this.icons[name].split(' ')

    if (iconClasses.length > 0) {
      iconClasses.forEach((className) => {
        icon.classList.add(className)
      })
    }

    return icon
  }

  /**
   * Used to wrap the editor UI elements
   * @private
   */
  getEditorContainer () {
    const html = document.createElement('div')
    html.classList.add('jedi-editor-container')
    return html
  }

  /**
   * Used to group several controls
   * @private
   */
  getFieldset () {
    const html = document.createElement('fieldset')
    html.classList.add('jedi-editor-fieldset')
    return html
  }

  /**
   * Represents a caption for the content of its parent fieldset
   * @private
   */
  getLegend (config) {
    const legend = document.createElement('legend')
    const legendText = document.createElement('span')
    legend.classList.add('jedi-editor-legend')
    legendText.classList.add('jedi-editor-legend-text')
    legend.setAttribute('aria-labelledby', '#legend-' + config.id)
    legendText.textContent = config.textContent
    legendText.setAttribute('id', '#legend-' + config.id)
    legend.appendChild(legendText)
    return legend
  }

  /**
   * Container for complex editors like arrays, objects and multiple
   * @private
   */
  getCard () {
    const html = document.createElement('div')
    html.classList.add('jedi-editor-card')
    return html
  }

  /**
   * Header for cards
   * @private
   */
  getCardHeader () {
    const html = document.createElement('div')
    html.classList.add('jedi-editor-card-header')
    return html
  }

  /**
   * A body for the cards
   * @private
   */
  getCardBody () {
    const html = document.createElement('div')
    html.classList.add('jedi-editor-card-body')
    return html
  }

  /**
   * Wrapper for editor actions buttons
   * @private
   */
  getActionsSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-actions-slot')
    return html
  }

  /**
   * Wrapper for editor array specific actions buttons
   * @private
   */
  getArrayActionsSlot () {
    const html = this.getBtnGroup()
    html.classList.add('jedi-array-actions-slot')
    return html
  }

  /**
   * Wrapper for child editors
   * @private
   */
  getChildrenSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-children-slot')
    return html
  }

  /**
   * Wrapper for error messages
   * @private
   */
  getMessagesSlot (config = {}) {
    const html = document.createElement('div')
    html.classList.add('jedi-messages-slot')
    html.setAttribute('aria-atomic', 'false')
    html.setAttribute('aria-live', 'polite')

    if (config.id) {
      html.setAttribute('id', config.id)
    }

    return html
  }

  /**
   * Wrapper for editor controls
   * @private
   */
  getControlSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-control-slot')
    return html
  }

  /**
   * Toggles the ObjectEditor properties wrapper visibility
   * @private
   */
  getPropertiesToggle (config) {
    const toggle = this.getButton(config)
    toggle.classList.add('jedi-properties-toggle')

    // if (this.useToggleEvents) {
    toggle.addEventListener('click', () => {
      if (config.propertiesContainer.open) {
        config.propertiesContainer.close()
      } else {
        config.propertiesContainer.showModal()
      }
    })
    // }

    return toggle
  }

  /**
   * Container for properties editing elements like property activators
   * @private
   */
  getPropertiesSlot (config) {
    const html = document.createElement('dialog')
    html.classList.add('jedi-properties-slot')
    html.setAttribute('id', config.id)

    window.addEventListener('click', (event) => {
      if (event.target === html) {
        html.close()
      }
    })

    return html
  }

  /**
   * Container for screen reader announced messages
   * @private
   */
  getPropertiesAriaLive () {
    const html = document.createElement('div')
    html.classList.add('jedi-properties-aria-live')
    html.setAttribute('role', 'status')
    html.setAttribute('aria-live', 'polite')
    return html
  }

  /**
   * A message that will be announced by screen reader
   * @private
   */
  getAriaLiveMessage (message) {
    const html = document.createElement('p')
    html.classList.add('jedi-aria-live-message')
    html.textContent = message
    this.visuallyHidden(html)
    return html
  }

  /**
   * Wrapper for property activators
   * @private
   */
  getPropertiesActivators () {
    const html = document.createElement('div')
    html.classList.add('jedi-properties-activators')
    return html
  }

  /**
   * Wrapper buttons
   * @private
   */
  getBtnGroup () {
    const html = document.createElement('span')
    html.classList.add('jedi-btn-group')
    html.style.display = 'initial'
    return html
  }

  /**
   * A button
   * @private
   */
  getButton (config) {
    const button = document.createElement('button')
    button.classList.add('jedi-btn')

    button.setAttribute('type', 'button')

    if (config.value) {
      button.value = config.value
    }

    if (config.id) {
      button.setAttribute('id', config.id)
    }

    const text = document.createElement('span')
    text.textContent = config.textContent

    if (this.icons && config.icon) {
      const icon = this.getIcon(config.icon)
      icon.setAttribute('title', config.textContent)
      button.appendChild(icon)
      this.visuallyHidden(text)
    }

    button.appendChild(text)

    return button
  }

  /**
   * Array "add" item button
   * @private
   */
  getArrayBtnAdd () {
    const html = this.getButton({
      textContent: 'Add item into',
      icon: 'add'
    })
    html.classList.add('jedi-array-add')
    return html
  }

  getAddPropertyButton () {
    const html = this.getButton({
      textContent: 'Add property'
    })
    html.classList.add('jedi-add-property-btn')
    return html
  }

  /**
   * Array "delete" item button
   * @private
   */
  getDeleteItemBtn () {
    const deleteItemBtn = this.getButton({
      textContent: 'Delete item',
      icon: 'delete'
    })

    deleteItemBtn.classList.add('jedi-array-delete')

    return deleteItemBtn
  }

  /**
   * Array "move up" item button
   * @private
   */
  getMoveUpItemBtn () {
    const moveUpItemBtn = this.getButton({
      textContent: 'Move up',
      icon: 'moveUp'
    })

    moveUpItemBtn.classList.add('jedi-array-move-up')

    return moveUpItemBtn
  }

  /**
   * Array "move down" item button
   * @private
   */
  getMoveDownItemBtn () {
    const moveDownItemBtn = this.getButton({
      textContent: 'Move down',
      icon: 'moveDown'
    })

    moveDownItemBtn.classList.add('jedi-array-move-down')

    return moveDownItemBtn
  }

  /**
   * Wrapper for the editor description
   * @private
   */
  getDescription (config = {}) {
    const description = document.createElement('small')
    description.classList.add('jedi-description')

    if (config.textContent) {
      description.textContent = config.textContent
    }

    if (config.id) {
      description.setAttribute('id', config.id)
    }

    return description
  }

  /**
   * Object control is a card containing multiple editors.
   * Each editor is mapped to an object instance property.
   * Properties can be added, activated and deactivated depending on configuration
   * @private
   */
  getObjectControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()
    const body = this.getCardBody()
    const ariaLive = this.getPropertiesAriaLive()

    const description = this.getDescription({
      textContent: config.description
    })

    const messages = this.getMessagesSlot()
    const childrenSlot = this.getChildrenSlot()

    const propertiesContainer = this.getPropertiesSlot({
      id: 'properties-slot-' + config.id
    })

    const propertiesToggle = this.getPropertiesToggle({
      textContent: config.title + ' ' + 'properties',
      id: 'properties-slot-toggle-' + config.id,
      icon: 'properties',
      propertiesContainer: propertiesContainer
    })

    const propertiesActivators = this.getPropertiesActivators()

    const addPropertyControl = this.getInputControl({
      type: 'text',
      id: 'jedi-add-property-input-' + config.id,
      label: 'Property'
    })

    const addPropertyBtn = this.getAddPropertyButton()

    const fieldset = this.getFieldset()
    const legend = this.getLegend({
      textContent: config.title,
      id: config.id
    })

    addPropertyBtn.classList.add('jedi-object-add')

    container.appendChild(fieldset)
    fieldset.appendChild(legend)
    fieldset.appendChild(body)
    body.appendChild(description)
    body.appendChild(messages)
    legend.appendChild(actions)
    actions.appendChild(arrayActions)
    body.appendChild(propertiesContainer)
    body.appendChild(childrenSlot)

    if (config.addProperty) {
      propertiesContainer.appendChild(addPropertyControl.container)
      propertiesContainer.appendChild(addPropertyBtn)
    }

    if (config.editableProperties) {
      actions.appendChild(propertiesToggle)
      propertiesContainer.appendChild(ariaLive)
      propertiesContainer.appendChild(propertiesActivators)
    }

    return {
      container,
      body,
      actions,
      messages,
      childrenSlot,
      propertiesToggle,
      propertiesContainer,
      addPropertyControl,
      addPropertyBtn,
      ariaLive,
      propertiesActivators,
      arrayActions
    }
  }

  /**
   * Array control is a card containing multiple editors.
   * Items can bve added, deleted or moved up or down.
   * @private
   */
  getArrayControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()
    const body = this.getCardBody()

    const description = this.getDescription({
      textContent: config.description
    })

    const messages = this.getMessagesSlot()
    const childrenSlot = this.getChildrenSlot()
    const btnGroup = this.getBtnGroup()
    const addBtn = this.getArrayBtnAdd()
    const fieldset = this.getFieldset()
    const legend = this.getLegend({
      textContent: config.title,
      id: config.id
    })

    container.appendChild(fieldset)
    fieldset.appendChild(legend)
    fieldset.appendChild(body)
    body.appendChild(description)
    body.appendChild(messages)
    legend.appendChild(actions)
    actions.appendChild(btnGroup)
    btnGroup.appendChild(addBtn)
    actions.appendChild(arrayActions)
    body.appendChild(childrenSlot)

    return {
      container,
      body,
      actions,
      messages,
      childrenSlot,
      btnGroup,
      addBtn,
      arrayActions
    }
  }

  /**
   * Multiple control is a card containing multiple editors options that can be
   * selected with a switcher control. Only one editor can be active/visible
   * at a time
   * @private
   */
  getMultipleControl (config) {
    const container = document.createElement('div')
    const card = this.getCard()
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const header = this.getCardHeader({
      textContent: config.title,
      titleHidden: config.titleHidden
    })

    const body = this.getCardBody()

    const description = this.getDescription({
      textContent: config.description
    })

    const messages = this.getMessagesSlot()

    const childrenSlot = this.getChildrenSlot()

    const switcher = this.getSwitcher({
      values: config.switcherOptionValues,
      titles: config.switcherOptionsLabels,
      id: config.id + '-switcher',
      label: config.id + '-switcher',
      titleHidden: true,
      readOnly: config.readOnly
    })

    switcher.container.classList.add('jedi-switcher')

    container.appendChild(description)
    container.appendChild(card)
    card.appendChild(header)
    card.appendChild(body)
    header.appendChild(actions)
    actions.appendChild(arrayActions)
    actions.appendChild(switcher.container)
    body.appendChild(messages)
    body.appendChild(childrenSlot)

    return {
      container,
      card,
      header,
      body,
      actions,
      messages,
      childrenSlot,
      switcher,
      arrayActions
    }
  }

  /**
   * Control for NullEditor
   * @private
   */
  getNullControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const label = document.createElement('label')
    label.setAttribute('for', config.id)

    const labelText = document.createElement('span')
    labelText.textContent = config.label

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      textContent: config.description,
      id: descriptionId
    })

    const messages = this.getMessagesSlot()

    container.appendChild(label)
    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(actions)
    actions.appendChild(arrayActions)
    label.appendChild(labelText)

    return { container, label, labelText, description, messages, actions, arrayActions }
  }

  /**
   * A Textarea
   * @private
   */
  getTextareaControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const input = document.createElement('textarea')
    input.setAttribute('id', config.id)
    input.style.width = '100%'

    const label = document.createElement('label')
    label.setAttribute('for', config.id)

    const labelText = document.createElement('span')
    labelText.textContent = config.label

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      textContent: config.description,
      id: descriptionId
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    const describedBy = messagesId + ' ' + descriptionId
    input.setAttribute('aria-describedby', describedBy)

    container.appendChild(label)
    container.appendChild(input)
    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(actions)
    actions.appendChild(arrayActions)
    label.appendChild(labelText)

    return { container, input, label, labelText, description, messages, actions, arrayActions }
  }

  /**
   * An Input control
   * @private
   */
  getInputControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const input = document.createElement('input')
    input.setAttribute('type', config.type)
    input.setAttribute('id', config.id)
    input.style.width = '100%'

    const label = document.createElement('label')
    label.setAttribute('for', config.id)

    const labelText = document.createElement('span')
    labelText.textContent = config.label

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      textContent: config.description,
      id: descriptionId
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    const describedBy = messagesId + ' ' + descriptionId
    input.setAttribute('aria-describedby', describedBy)

    container.appendChild(label)
    container.appendChild(input)
    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(actions)
    actions.appendChild(arrayActions)
    label.appendChild(labelText)

    return { container, input, label, labelText, description, messages, actions, arrayActions }
  }

  /**
   * A radio group control
   * @private
   */
  getRadiosControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()
    const fieldset = this.getFieldset()
    const body = this.getCardBody()
    const legend = this.getLegend({
      textContent: config.label,
      id: config.id
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      textContent: config.description,
      id: descriptionId
    })

    if (config.titleHidden) {
      this.visuallyHidden(legend)
    }

    const radioControls = []
    const radios = []
    const labels = []
    const labelTexts = []

    config.values.forEach((value, index) => {
      const radioControl = document.createElement('div')
      radioControls.push(radioControl)

      const radio = document.createElement('input')
      radio.setAttribute('type', 'radio')
      radio.setAttribute('id', config.id + '-' + index)
      radio.setAttribute('value', value)
      radios.push(radio)

      const describedBy = messagesId + ' ' + descriptionId
      radio.setAttribute('aria-describedby', describedBy)

      const label = document.createElement('label')
      label.setAttribute('for', config.id + '-' + index)

      const labelText = document.createElement('span')
      labelTexts.push(labelText)

      if (config.titles && config.titles[index]) {
        labelText.textContent = config.titles[index]
      }

      labels.push(label)
    })

    container.appendChild(fieldset)
    container.appendChild(actions)
    fieldset.appendChild(legend)
    fieldset.appendChild(body)
    actions.appendChild(arrayActions)

    radioControls.forEach((radioControl, index) => {
      body.appendChild(radioControls[index])
      radioControl.appendChild(radios[index])
      radioControl.appendChild(labels[index])
      labels[index].appendChild(labelTexts[index])
    })

    fieldset.appendChild(description)
    fieldset.appendChild(messages)

    return { container, fieldset, legend, body, radios, labels, labelTexts, radioControls, description, messages, actions, arrayActions }
  }

  /**
   * A checkbox control
   * @private
   */
  getCheckboxControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const formGroup = document.createElement('div')

    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('id', config.id)

    const label = document.createElement('label')
    label.setAttribute('for', config.id)

    const labelText = document.createElement('span')
    labelText.textContent = config.label

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      textContent: config.description,
      id: descriptionId
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    const describedBy = messagesId + ' ' + descriptionId
    input.setAttribute('aria-describedby', describedBy)

    container.appendChild(formGroup)
    container.appendChild(actions)
    actions.appendChild(arrayActions)
    formGroup.appendChild(input)
    formGroup.appendChild(label)
    label.appendChild(labelText)
    formGroup.appendChild(description)
    formGroup.appendChild(messages)

    return { container, formGroup, input, label, labelText, description, messages, actions, arrayActions }
  }

  /**
   * A select control
   * @private
   */
  getSelectControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const input = document.createElement('select')
    input.setAttribute('id', config.id)
    input.style.width = '100%'

    config.values.forEach((value, index) => {
      const option = document.createElement('option')
      option.setAttribute('value', value)

      if (config.titles && config.titles[index]) {
        option.textContent = config.titles[index]
      }

      input.appendChild(option)
    })

    const label = document.createElement('label')
    label.setAttribute('for', config.id)

    const labelText = document.createElement('span')
    labelText.textContent = config.label

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      textContent: config.description,
      id: descriptionId
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    const describedBy = messagesId + ' ' + descriptionId
    input.setAttribute('aria-describedby', describedBy)

    container.appendChild(label)
    container.appendChild(input)
    label.appendChild(labelText)
    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(actions)
    actions.appendChild(arrayActions)

    return { container, input, label, labelText, description, messages, actions, arrayActions }
  }

  /**
   * Control to switch between multiple editors options
   * @private
   */
  getSwitcher (config) {
    return this.getSelectControl(config)
  }

  /**
   * Another type of error message container used for more complex editors like
   * object, array and multiple editors
   * @private
   */
  getAlert (config) {
    return this.getInvalidFeedback(config)
  }

  /**
   * Error messages
   * @public
   */
  getInvalidFeedback (config) {
    const html = document.createElement('div')
    const invalidFeedbackText = document.createElement('span')
    const invalidFeedbackIcon = document.createElement('span')
    invalidFeedbackText.textContent = config.message
    invalidFeedbackIcon.textContent = '⚠ '
    invalidFeedbackIcon.classList.add('jedi-error-message')
    invalidFeedbackIcon.setAttribute('aria-hidden', 'true')
    html.classList.add('jedi-error-message')
    html.appendChild(invalidFeedbackIcon)
    html.appendChild(invalidFeedbackText)
    return html
  }

  /**
   * Container for columns
   * @private
   */
  getRow () {
    const row = document.createElement('div')
    row.classList.add('jedi-row')
    return row
  }

  /**
   * A column to contain content to a specific width
   * @private
   */
  getCol (xs, md, offsetMd) {
    const col = document.createElement('div')
    col.classList.add('jedi-col-xs-' + xs)
    col.classList.add('jedi-col-md-' + md)

    if (offsetMd) {
      col.classList.add('jedi-col-md-offset-' + offsetMd)
    }

    return col
  }

  /**
   * Tab list is a list of links that triggers tabs visibility ne at the time
   * @private
   */
  getTabList () {
    const tabList = document.createElement('ul')
    tabList.classList.add('jedi-nav-list')
    return tabList
  }

  /**
   * A Tab is a wrapper for content
   * @private
   */
  getTab (config) {
    const list = document.createElement('li')
    const link = document.createElement('a')
    link.classList.add('jedi-nav-link')
    link.setAttribute('href', '#' + config.id)
    link.textContent = config.title
    list.appendChild(link)
    return { list, link }
  }

  /**
   * Wrapper for tabs
   * @private
   */
  getTabContent () {
    const tabContent = document.createElement('div')
    tabContent.classList.add('tab-content')
    return tabContent
  }

  /**
   * Set tab attributes to make it toggleable
   * @private
   */
  setTabPaneAttributes (element, active, id) {
    element.setAttribute('id', id)
    element.classList.add('jedi-tab-pane')
  }

  /**
   * Makes an element visually hidden
   * @private
   */
  visuallyHidden (element) {
    element.setAttribute('style', 'position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;')
  }

  /**
   * Reveals a visually hidden element
   * @private
   */
  visuallyVisible (element) {
    element.removeAttribute('style')
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);


/***/ }),

/***/ "./src/validation/constrains/additionalProperties.js":
/*!***********************************************************!*\
  !*** ./src/validation/constrains/additionalProperties.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   additionalProperties: () => (/* binding */ additionalProperties)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi.js */ "./src/jedi.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");
/**
 * constrains additionalProperties
 */






function additionalProperties (validator, value, schema, key, path) {
  let errors = []
  const schemaAdditionalProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAdditionalProperties)(schema)
  const schemaPatternProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaPatternProperties)(schema)
  const schemaProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaProperties)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaAdditionalProperties)) {
    const properties = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaProperties) ? schemaProperties : {}
    const additionalProperties = schemaAdditionalProperties
    const patternProperties = schemaPatternProperties

    if (properties) {
      Object.keys(value).forEach((property) => {
        let definedInPatternProperty = false

        if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(patternProperties)) {
          Object.keys(patternProperties).forEach((pattern) => {
            const regexp = new RegExp(pattern)
            definedInPatternProperty = regexp.test(property)
          })
        }

        if (!definedInPatternProperty && additionalProperties === false && !(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(properties, property)) {
          errors.push({
            messages: [
              (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_3__.i18n.errorAdditionalProperties, {
                property: property
              })
            ],
            path: path,
            constrain: 'additionalProperties'
          })
        }

        if (!definedInPatternProperty && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(additionalProperties) && !(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(properties, property)) {
          const editor = new _jedi_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
            refParser: validator.refParser,
            schema: additionalProperties,
            data: value[property]
          })

          const additionalPropertyErrors = editor.getErrors().map((error) => {
            return {
              messages: error.messages,
              path: property,
              constrain: 'additionalProperties'
            }
          })

          errors = [...errors, ...additionalPropertyErrors]

          editor.destroy()
        }
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/allOf.js":
/*!********************************************!*\
  !*** ./src/validation/constrains/allOf.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allOf: () => (/* binding */ allOf)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi.js */ "./src/jedi.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");




function allOf (validator, value, schema, key) {
  let errors = []
  const allOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAllOf)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(allOf)) {
    allOf.forEach((schema) => {
      const subSchemaEditor = new _jedi_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ refParser: validator.refParser, schema: schema, data: value, rootName: key })
      const subSchemaErrors = subSchemaEditor.getErrors()
      subSchemaEditor.destroy()
      errors = [...errors, ...subSchemaErrors]
      errors = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.removeDuplicatesFromArray)(errors)
    })
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/anyOf.js":
/*!********************************************!*\
  !*** ./src/validation/constrains/anyOf.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anyOf: () => (/* binding */ anyOf)
/* harmony export */ });
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jedi.js */ "./src/jedi.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");





function anyOf (validator, value, schema, key, path) {
  const errors = []
  const anyOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAnyOf)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(anyOf)) {
    let valid = false

    anyOf.forEach((schema) => {
      const anyOfEditor = new _jedi_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ refParser: validator.refParser, schema: schema, data: value })
      const anyOfErrors = anyOfEditor.getErrors()
      anyOfEditor.destroy()

      if (anyOfErrors.length === 0) {
        valid = true
      }
    })

    if (!valid) {
      errors.push({
        messages: [
          _i18n_js__WEBPACK_IMPORTED_MODULE_3__.i18n.errorAnyOf
        ],
        path: path,
        constrain: 'anyOf'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/const.js":
/*!********************************************!*\
  !*** ./src/validation/constrains/const.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _const: () => (/* binding */ _const)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function _const (validator, value, schema, key, path) {
  const errors = []
  const schemaConst = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaConst)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaConst)) {
    const valueIsNotEqualConst = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.different)(value, schemaConst)
    const invalid = (valueIsNotEqualConst)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorConst, {
            const: JSON.stringify(schemaConst)
          })
        ],
        path: path,
        constrain: 'const'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/contains.js":
/*!***********************************************!*\
  !*** ./src/validation/constrains/contains.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contains: () => (/* binding */ contains)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi.js */ "./src/jedi.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");





function contains (validator, value, schema, key, path) {
  const errors = []
  const contains = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaContains)(schema)
  const minContains = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaMinContains)(schema)
  const maxContains = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaMaxContains)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(contains)) {
    let counter = 0

    value.forEach((item) => {
      const containsEditor = new _jedi_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ refParser: validator.refParser, schema: contains, data: item })
      const containsErrors = containsEditor.getErrors()

      if (containsErrors.length === 0) {
        counter++
      }

      containsEditor.destroy()
    })

    const containsInvalid = (counter === 0)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(minContains)) {
      const minContainsInvalid = (counter < minContains)

      if (minContainsInvalid) {
        errors.push({
          messages: [
            (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_3__.i18n.errorMinContains, {
              counter: counter,
              minContains: minContains
            })
          ],
          path: path,
          constrain: 'minContains'
        })
      }
    } else {
      if (containsInvalid) {
        errors.push({
          messages: [_i18n_js__WEBPACK_IMPORTED_MODULE_3__.i18n.errorContains],
          path: path,
          constrain: 'contains'
        })
      }
    }

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(maxContains)) {
      const maxContainsInvalid = (counter > maxContains)

      if (maxContainsInvalid) {
        errors.push({
          messages: [
            (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_3__.i18n.errorMaxContains, {
              counter: counter,
              maxContains: maxContains
            })
          ],
          path: path,
          constrain: 'maxContains'
        })
      }
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/dependentRequired.js":
/*!********************************************************!*\
  !*** ./src/validation/constrains/dependentRequired.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dependentRequired: () => (/* binding */ dependentRequired)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function dependentRequired (validator, value, schema, key, path) {
  const errors = []
  const dependentRequired = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaDependentRequired)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(dependentRequired)) {
    let missingProperties = []

    Object.keys(dependentRequired).forEach((key) => {
      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(value[key])) {
        const requiredProperties = dependentRequired[key]

        missingProperties = requiredProperties.filter((property) => {
          return !(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(value, property)
        })
      }
    })

    const invalid = missingProperties.length > 0

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorDependentRequired, {
            dependentRequired: missingProperties.join(', ')
          })
        ],
        path: path,
        constrain: 'dependentRequired'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/dependentSchemas.js":
/*!*******************************************************!*\
  !*** ./src/validation/constrains/dependentSchemas.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dependentSchemas: () => (/* binding */ dependentSchemas)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi.js */ "./src/jedi.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");




function dependentSchemas (validator, value, schema) {
  let errors = []
  const dependentSchemas = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDependentSchemas)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(dependentSchemas)) {
    Object.keys(dependentSchemas).forEach((key) => {
      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(value[key])) {
        const dependentSchema = dependentSchemas[key]
        const tmpEditor = new _jedi_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ refParser: validator.refParser, schema: dependentSchema, data: value })
        const tmpErrors = tmpEditor.getErrors()
        tmpEditor.destroy()
        errors = [...errors, ...tmpErrors]
      }
    })
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/enum.js":
/*!*******************************************!*\
  !*** ./src/validation/constrains/enum.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _enum: () => (/* binding */ _enum)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function _enum (validator, value, schema, key, path) {
  const errors = []
  const schemaEnum = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaEnum)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaEnum)) {
    const invalid = !schemaEnum.some(e => JSON.stringify(value) === JSON.stringify(e))

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorEnum, {
            enum: JSON.stringify(schemaEnum)
          })
        ],
        path: path,
        constrain: 'enum'
      })
    }
  }
  return errors
}


/***/ }),

/***/ "./src/validation/constrains/exclusiveMaximum.js":
/*!*******************************************************!*\
  !*** ./src/validation/constrains/exclusiveMaximum.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exclusiveMaximum: () => (/* binding */ exclusiveMaximum)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function exclusiveMaximum (validator, value, schema, key, path) {
  const errors = []
  const exclusiveMaximum = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaExclusiveMaximum)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(exclusiveMaximum)) {
    const invalid = (value >= exclusiveMaximum)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorExclusiveMaximum, {
            exclusiveMaximum: exclusiveMaximum
          })
        ],
        path: path,
        constrain: 'exclusiveMaximum'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/exclusiveMinimum.js":
/*!*******************************************************!*\
  !*** ./src/validation/constrains/exclusiveMinimum.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exclusiveMinimum: () => (/* binding */ exclusiveMinimum)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function exclusiveMinimum (validator, value, schema, key, path) {
  const errors = []
  const exclusiveMinimum = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaExclusiveMinimum)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(exclusiveMinimum)) {
    const invalid = (value <= exclusiveMinimum)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorExclusiveMinimum, {
            exclusiveMinimum: exclusiveMinimum
          })
        ],
        path: path,
        constrain: 'exclusiveMinimum'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/format.js":
/*!*********************************************!*\
  !*** ./src/validation/constrains/format.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   format: () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function format (validator, value, schema, key, path) {
  const errors = []
  const format = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaFormat)(schema)
  let validateFormat = validator.validateFormat

  if ((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaOption)(schema, 'validateFormat')) {
    validateFormat = schema.options.validateFormat
  }

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(format) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && validateFormat) {
    let regexp

    if (format === 'email') {
      regexp = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)
    }

    if (format === 'url') {
      regexp = new RegExp(/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu)
    }

    if (format === 'uuid') {
      regexp = new RegExp(/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i)
    }

    const invalid = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(regexp) && !regexp.test(value)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorFormat, { format: format })
        ],
        path: path,
        constrain: 'format'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/if-then-else.js":
/*!***************************************************!*\
  !*** ./src/validation/constrains/if-then-else.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ifThenElse: () => (/* binding */ ifThenElse)
/* harmony export */ });
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jedi.js */ "./src/jedi.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");




function ifThenElse (validator, value, schema) {
  const errors = []
  const schemaIf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaIf)(schema)
  const schemaThen = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaThen)(schema)
  const schemaElse = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaElse)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaIf)) {
    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.notSet)(schemaThen) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.notSet)(schemaElse)) {
      return errors
    }

    const ifEditor = new _jedi_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ refParser: validator.refParser, schema: schemaIf, data: value })
    const ifErrors = ifEditor.getErrors()
    ifEditor.destroy()

    let thenErrors = []
    let elseErrors = []

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaThen)) {
      const thenEditor = new _jedi_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ refParser: validator.refParser, schema: schemaThen, data: value })
      thenErrors = thenEditor.getErrors()
      thenEditor.destroy()
    }

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaElse)) {
      const elseEditor = new _jedi_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ refParser: validator.refParser, schema: schemaElse, data: value })
      elseErrors = elseEditor.getErrors()
      elseEditor.destroy()
    }

    if (schemaIf === true) {
      return thenErrors
    }

    if (schemaIf === false) {
      return elseErrors
    }

    if (ifErrors.length === 0) {
      return thenErrors
    }

    if (ifErrors.length > 0) {
      return elseErrors
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/items.js":
/*!********************************************!*\
  !*** ./src/validation/constrains/items.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   items: () => (/* binding */ items)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function items (validator, value, schema, key, path) {
  const errors = []
  const items = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaItems)(schema)
  const prefixItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaPrefixItems)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(items)) {
    const prefixItemsSchemasCount = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(prefixItems) ? prefixItems.length : 0

    if (items === false && value.length > 0 && value.length > prefixItemsSchemasCount) {
      errors.push({
        messages: [_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorItems],
        path: path,
        constrain: 'items'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/maxItems.js":
/*!***********************************************!*\
  !*** ./src/validation/constrains/maxItems.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maxItems: () => (/* binding */ maxItems)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function maxItems (validator, value, schema, key, path) {
  const errors = []
  const maxItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaMaxItems)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(maxItems)) {
    const invalid = (value.length > maxItems)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMaxItems, {
            maxItems: maxItems
          })
        ],
        path: path,
        constrain: 'maxItems'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/maxLength.js":
/*!************************************************!*\
  !*** ./src/validation/constrains/maxLength.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maxLength: () => (/* binding */ maxLength)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function maxLength (validator, value, schema, key, path) {
  const errors = []
  const maxLength = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaMaxLength)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(maxLength)) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length > maxLength)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMaxLength, {
            maxLength: maxLength
          })
        ],
        path: path,
        constrain: 'maxLength'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/maxProperties.js":
/*!****************************************************!*\
  !*** ./src/validation/constrains/maxProperties.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maxProperties: () => (/* binding */ maxProperties)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function maxProperties (validator, value, schema, key, path) {
  const errors = []
  const maxProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaMaxProperties)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(maxProperties)) {
    const propertiesCount = Object.keys(value).length
    const invalid = (propertiesCount > maxProperties)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMaxProperties, {
            maxProperties: maxProperties
          })
        ],
        path: path,
        constrain: 'maxProperties'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/maximum.js":
/*!**********************************************!*\
  !*** ./src/validation/constrains/maximum.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maximum: () => (/* binding */ maximum)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function maximum (validator, value, schema, key, path) {
  const errors = []
  const maximum = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaMaximum)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(maximum)) {
    const invalid = (value > maximum)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMaximum, {
            maximum: maximum
          })
        ],
        path: path,
        constrain: 'maximum'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/minItems.js":
/*!***********************************************!*\
  !*** ./src/validation/constrains/minItems.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   minItems: () => (/* binding */ minItems)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function minItems (validator, value, schema, key, path) {
  const errors = []
  const minItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaMinItems)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(minItems)) {
    const invalid = (value.length < minItems)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMinItems, {
            minItems: minItems
          })
        ],
        path: path,
        constrain: 'minItems'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/minLength.js":
/*!************************************************!*\
  !*** ./src/validation/constrains/minLength.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   minLength: () => (/* binding */ minLength)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function minLength (validator, value, schema, key, path) {
  const errors = []
  const minLength = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaMinLength)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(minLength)) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length < minLength)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMinLength, {
            minLength: minLength
          })
        ],
        path: path,
        constrain: 'minLength'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/minProperties.js":
/*!****************************************************!*\
  !*** ./src/validation/constrains/minProperties.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   minProperties: () => (/* binding */ minProperties)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function minProperties (validator, value, schema, key, path) {
  const errors = []
  const minProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaMinProperties)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(minProperties)) {
    const propertiesCount = Object.keys(value).length
    const invalid = (propertiesCount < minProperties)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMinProperties, {
            minProperties: minProperties
          })
        ],
        path: path,
        constrain: 'minProperties'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/minimum.js":
/*!**********************************************!*\
  !*** ./src/validation/constrains/minimum.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   minimum: () => (/* binding */ minimum)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function minimum (validator, value, schema, key, path) {
  const errors = []
  const minimum = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaMinimum)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(minimum)) {
    const invalid = (value < minimum)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMinimum, {
            minimum: minimum
          })
        ],
        path: path,
        constrain: 'minimum'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/multipleOf.js":
/*!*************************************************!*\
  !*** ./src/validation/constrains/multipleOf.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   multipleOf: () => (/* binding */ multipleOf)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function multipleOf (validator, value, schema, key, path) {
  const errors = []
  const multipleOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaMultipleOf)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(multipleOf)) {
    if (value === 0) {
      return errors
    }

    const isMultipleOf = (value / multipleOf === Math.floor(value / multipleOf))
    const invalid = (!isMultipleOf || value.toString().includes('e'))

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMultipleOf, {
            multipleOf: multipleOf
          })
        ],
        path: path,
        constrain: 'multipleOf'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/not.js":
/*!******************************************!*\
  !*** ./src/validation/constrains/not.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   not: () => (/* binding */ not)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jedi.js */ "./src/jedi.js");





function not (validator, value, schema, key, path) {
  const errors = []
  const not = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaNot)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(not)) {
    const notEditor = new _jedi_js__WEBPACK_IMPORTED_MODULE_3__["default"]({ refParser: validator.refParser, schema: not, data: value })
    const notErrors = notEditor.getErrors()
    notEditor.destroy()

    const invalid = notErrors.length === 0

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorNot)
        ],
        path: path,
        constrain: 'not'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/oneOf.js":
/*!********************************************!*\
  !*** ./src/validation/constrains/oneOf.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oneOf: () => (/* binding */ oneOf)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi.js */ "./src/jedi.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");





function oneOf (validator, value, schema, key, path) {
  const errors = []
  const oneOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOneOf)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(oneOf)) {
    let counter = 0

    oneOf.forEach((schema) => {
      const oneOfEditor = new _jedi_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ refParser: validator.refParser, schema: schema, data: value })
      const oneOfErrors = oneOfEditor.getErrors()
      oneOfEditor.destroy()

      if (oneOfErrors.length === 0) {
        counter++
      }
    })

    if (counter !== 1) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_3__.i18n.errorOneOf, {
            counter: counter
          })
        ],
        path: path,
        constrain: 'oneOf'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/pattern.js":
/*!**********************************************!*\
  !*** ./src/validation/constrains/pattern.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pattern: () => (/* binding */ pattern)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function pattern (validator, value, schema, key, path) {
  const errors = []
  const pattern = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaPattern)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(pattern)) {
    const regexp = new RegExp(pattern)
    const invalid = !regexp.test(value)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorPattern, {
            pattern: pattern
          })
        ],
        path: path,
        constrain: 'pattern'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/patternProperties.js":
/*!********************************************************!*\
  !*** ./src/validation/constrains/patternProperties.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   patternProperties: () => (/* binding */ patternProperties)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi.js */ "./src/jedi.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");




function patternProperties (validator, value, schema, path) {
  let errors = []
  const patternProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaPatternProperties)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(patternProperties)) {
    Object.keys(value).forEach((propertyName) => {
      Object.keys(patternProperties).forEach((pattern) => {
        const regexp = new RegExp(pattern)
        if (regexp.test(propertyName)) {
          const schema = patternProperties[pattern]

          const editor = new _jedi_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
            refParser: validator.refParser,
            schema: schema,
            data: value[propertyName]
          })

          const editorErrors = editor.getErrors().map((error) => {
            return {
              messages: error.messages,
              path: path + '/' + propertyName,
              constrain: 'patternProperties'
            }
          })

          errors = [...errors, ...editorErrors]

          editor.destroy()
        }
      })
    })
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/prefixItems.js":
/*!**************************************************!*\
  !*** ./src/validation/constrains/prefixItems.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefixItems: () => (/* binding */ prefixItems)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi.js */ "./src/jedi.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");





function prefixItems (validator, value, schema, key, path) {
  const errors = []
  const prefixItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaPrefixItems)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(prefixItems)) {
    prefixItems.forEach((itemSchema, index) => {
      const itemValue = value[index]

      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(itemValue)) {
        const tmpEditor = new _jedi_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ refParser: validator.refParser, schema: itemSchema, data: itemValue })
        const tmpErrors = tmpEditor.getErrors()
        tmpEditor.destroy()

        if (tmpErrors.length > 0) {
          errors.push({
            messages: [
              (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_3__.i18n.errorPrefixItems, {
                index: index
              })
            ],
            path: path,
            constrain: 'prefixItems'
          })
        }
      }
    })
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/propertyNames.js":
/*!****************************************************!*\
  !*** ./src/validation/constrains/propertyNames.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   propertyNames: () => (/* binding */ propertyNames)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi.js */ "./src/jedi.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");
/**
 * constrains propertyNames
 */






function propertyNames (validator, value, schema, key, path) {
  const errors = []
  const schemaPropertyNames = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaPropertyNames)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaPropertyNames)) {
    Object.keys(value).forEach((propertyName) => {
      const editor = new _jedi_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        refParser: validator.refParser,
        schema: schemaPropertyNames,
        data: propertyName
      })

      const invalid = editor.getErrors().length > 0

      if (invalid) {
        errors.push({
          messages: [
            (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_3__.i18n.errorPropertyNames, { propertyName: propertyName })
          ],
          path: path,
          constrain: 'propertyNames'
        })
      }
    })
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/required.js":
/*!***********************************************!*\
  !*** ./src/validation/constrains/required.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   required: () => (/* binding */ required)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function required (validator, value, schema, key, path) {
  const errors = []
  const required = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaRequired)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(required)) {
    const missingProperties = []
    const keys = Object.keys(value)

    required.forEach((key) => {
      if (!keys.includes(key)) {
        missingProperties.push(key)
      }
    })

    const invalid = missingProperties.length > 0

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorRequired, {
            required: missingProperties.join(', ')
          })
        ],
        path: path,
        constrain: 'required'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/type.js":
/*!*******************************************!*\
  !*** ./src/validation/constrains/type.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   type: () => (/* binding */ type)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function type (validator, value, schema, key, path) {
  const errors = []
  const type = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaType)(schema)

  if (type === 'any') {
    return errors
  }

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(type)) {
    const types = {
      string: value => (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(value),
      number: value => (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value),
      integer: value => (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(value),
      boolean: value => (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(value),
      array: value => (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(value),
      object: value => (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(value),
      null: value => (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isNull)(value)
    }

    let valid = true

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(type)) {
      valid = type.some((type) => {
        return types[type](value)
      })
    } else {
      valid = types[type](value)
    }

    if (!valid) {
      errors.push({
        messages: [
          (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorType, {
            type: type,
            valueType: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.getType)(value)
          })
        ],
        path: path,
        constrain: 'type'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/unevaluatedProperties.js":
/*!************************************************************!*\
  !*** ./src/validation/constrains/unevaluatedProperties.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unevaluatedProperties: () => (/* binding */ unevaluatedProperties)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi.js */ "./src/jedi.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");
/**
 * constrains unevaluatedProperties
 */






function unevaluatedProperties (validator, value, schema, key, path) {
  let errors = []
  const schemaUnevaluatedProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaUnevaluatedProperties)(schema)
  const schemaPatternProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaPatternProperties)(schema)
  const schemaProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaProperties)(schema)
  const schemaAllOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAllOf)(schema)
  const schemaAnyOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAnyOf)(schema)
  const schemaOneOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOneOf)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaUnevaluatedProperties)) {
    let properties = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaProperties) ? schemaProperties : {}
    const unevaluatedProperties = schemaUnevaluatedProperties
    const patternProperties = schemaPatternProperties

    // see through allOf, anyOf and oneOf
    const ofSchemas = [
      schemaAllOf,
      schemaAnyOf,
      schemaOneOf
    ]

    ofSchemas.forEach((subSchema) => {
      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(subSchema)) {
        subSchema.forEach((subschema) => {
          if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(subschema['properties'])) {
            properties = { ...properties, ...subschema['properties'] }
          }
        })
      }
    })

    if (properties) {
      Object.keys(value).forEach((property) => {
        let definedInPatternProperty = false

        if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(patternProperties)) {
          Object.keys(patternProperties).forEach((pattern) => {
            const regexp = new RegExp(pattern)
            definedInPatternProperty = regexp.test(property)
          })
        }

        if (!definedInPatternProperty && unevaluatedProperties === false && !(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(properties, property)) {
          errors.push({
            messages: [
              (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_3__.i18n.errorUnevaluatedProperties, {
                property: property
              })
            ],
            path: path,
            constrain: 'unevaluatedProperties'
          })
        }

        if (!definedInPatternProperty && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(unevaluatedProperties) && !(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(properties, property)) {
          const editor = new _jedi_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
            refParser: validator.refParser,
            schema: unevaluatedProperties,
            data: value[property]
          })

          const unevaluatedPropertiesErrors = editor.getErrors().map((error) => {
            return {
              messages: error.messages,
              path: property,
              constrain: 'unevaluatedProperties'
            }
          })

          errors = [...errors, ...unevaluatedPropertiesErrors]

          editor.destroy()
        }
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/uniqueItems.js":
/*!**************************************************!*\
  !*** ./src/validation/constrains/uniqueItems.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uniqueItems: () => (/* binding */ uniqueItems)
/* harmony export */ });
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.js */ "./src/i18n.js");




function uniqueItems (validator, value, schema, key, path) {
  const errors = []
  const uniqueItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaUniqueItems)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(uniqueItems) && uniqueItems === true) {
    const seen = []
    let hasDuplicatedItems = false

    for (let i = 0; i < value.length; i++) {
      let item = value[i]

      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(item)) {
        item = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.sortObject)(item)
      }

      const itemStringified = JSON.stringify(item)
      hasDuplicatedItems = seen.some((seen) => seen === itemStringified)

      if (hasDuplicatedItems) {
        break
      } else {
        seen.push(itemStringified)
      }
    }

    const invalid = (hasDuplicatedItems)

    if (invalid) {
      errors.push({
        messages: [
          _i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.errorUniqueItems
        ],
        path: path,
        constrain: 'uniqueItems'
      })
    }
  }

  return errors
}


/***/ }),

/***/ "./src/validation/drafts/draft-04.js":
/*!*******************************************!*\
  !*** ./src/validation/drafts/draft-04.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constrains_allOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constrains/allOf.js */ "./src/validation/constrains/allOf.js");
/* harmony import */ var _constrains_minLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constrains/minLength.js */ "./src/validation/constrains/minLength.js");
/* harmony import */ var _constrains_anyOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constrains/anyOf.js */ "./src/validation/constrains/anyOf.js");
/* harmony import */ var _constrains_enum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constrains/enum.js */ "./src/validation/constrains/enum.js");
/* harmony import */ var _constrains_exclusiveMaximum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constrains/exclusiveMaximum.js */ "./src/validation/constrains/exclusiveMaximum.js");
/* harmony import */ var _constrains_exclusiveMinimum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constrains/exclusiveMinimum.js */ "./src/validation/constrains/exclusiveMinimum.js");
/* harmony import */ var _constrains_format_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constrains/format.js */ "./src/validation/constrains/format.js");
/* harmony import */ var _constrains_items_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constrains/items.js */ "./src/validation/constrains/items.js");
/* harmony import */ var _constrains_maxItems_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constrains/maxItems.js */ "./src/validation/constrains/maxItems.js");
/* harmony import */ var _constrains_maxLength_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constrains/maxLength.js */ "./src/validation/constrains/maxLength.js");
/* harmony import */ var _constrains_maxProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constrains/maxProperties.js */ "./src/validation/constrains/maxProperties.js");
/* harmony import */ var _constrains_minimum_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constrains/minimum.js */ "./src/validation/constrains/minimum.js");
/* harmony import */ var _constrains_minItems_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constrains/minItems.js */ "./src/validation/constrains/minItems.js");
/* harmony import */ var _constrains_minProperties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constrains/minProperties.js */ "./src/validation/constrains/minProperties.js");
/* harmony import */ var _constrains_multipleOf_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constrains/multipleOf.js */ "./src/validation/constrains/multipleOf.js");
/* harmony import */ var _constrains_not_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constrains/not.js */ "./src/validation/constrains/not.js");
/* harmony import */ var _constrains_oneOf_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constrains/oneOf.js */ "./src/validation/constrains/oneOf.js");
/* harmony import */ var _constrains_pattern_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constrains/pattern.js */ "./src/validation/constrains/pattern.js");
/* harmony import */ var _constrains_patternProperties_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constrains/patternProperties.js */ "./src/validation/constrains/patternProperties.js");
/* harmony import */ var _constrains_required_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constrains/required.js */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../constrains/type.js */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../constrains/maximum.js */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constrains/uniqueItems.js */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constrains/additionalProperties.js */ "./src/validation/constrains/additionalProperties.js");

























/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  additionalProperties: _constrains_additionalProperties_js__WEBPACK_IMPORTED_MODULE_23__.additionalProperties,
  allOf: _constrains_allOf_js__WEBPACK_IMPORTED_MODULE_0__.allOf,
  anyOf: _constrains_anyOf_js__WEBPACK_IMPORTED_MODULE_2__.anyOf,
  enum: _constrains_enum_js__WEBPACK_IMPORTED_MODULE_3__._enum,
  exclusiveMaximum: _constrains_exclusiveMaximum_js__WEBPACK_IMPORTED_MODULE_4__.exclusiveMaximum,
  exclusiveMinimum: _constrains_exclusiveMinimum_js__WEBPACK_IMPORTED_MODULE_5__.exclusiveMinimum,
  format: _constrains_format_js__WEBPACK_IMPORTED_MODULE_6__.format,
  items: _constrains_items_js__WEBPACK_IMPORTED_MODULE_7__.items,
  maximum: _constrains_maximum_js__WEBPACK_IMPORTED_MODULE_21__.maximum,
  maxItems: _constrains_maxItems_js__WEBPACK_IMPORTED_MODULE_8__.maxItems,
  maxLength: _constrains_maxLength_js__WEBPACK_IMPORTED_MODULE_9__.maxLength,
  maxProperties: _constrains_maxProperties_js__WEBPACK_IMPORTED_MODULE_10__.maxProperties,
  minimum: _constrains_minimum_js__WEBPACK_IMPORTED_MODULE_11__.minimum,
  minItems: _constrains_minItems_js__WEBPACK_IMPORTED_MODULE_12__.minItems,
  minLength: _constrains_minLength_js__WEBPACK_IMPORTED_MODULE_1__.minLength,
  minProperties: _constrains_minProperties_js__WEBPACK_IMPORTED_MODULE_13__.minProperties,
  multipleOf: _constrains_multipleOf_js__WEBPACK_IMPORTED_MODULE_14__.multipleOf,
  not: _constrains_not_js__WEBPACK_IMPORTED_MODULE_15__.not,
  oneOf: _constrains_oneOf_js__WEBPACK_IMPORTED_MODULE_16__.oneOf,
  pattern: _constrains_pattern_js__WEBPACK_IMPORTED_MODULE_17__.pattern,
  patternProperties: _constrains_patternProperties_js__WEBPACK_IMPORTED_MODULE_18__.patternProperties,
  required: _constrains_required_js__WEBPACK_IMPORTED_MODULE_19__.required,
  type: _constrains_type_js__WEBPACK_IMPORTED_MODULE_20__.type,
  uniqueItems: _constrains_uniqueItems_js__WEBPACK_IMPORTED_MODULE_22__.uniqueItems
});


/***/ }),

/***/ "./src/validation/drafts/draft-06.js":
/*!*******************************************!*\
  !*** ./src/validation/drafts/draft-06.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constrains_allOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constrains/allOf.js */ "./src/validation/constrains/allOf.js");
/* harmony import */ var _constrains_minLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constrains/minLength.js */ "./src/validation/constrains/minLength.js");
/* harmony import */ var _constrains_const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constrains/const.js */ "./src/validation/constrains/const.js");
/* harmony import */ var _constrains_contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constrains/contains.js */ "./src/validation/constrains/contains.js");
/* harmony import */ var _constrains_anyOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constrains/anyOf.js */ "./src/validation/constrains/anyOf.js");
/* harmony import */ var _constrains_dependentRequired_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constrains/dependentRequired.js */ "./src/validation/constrains/dependentRequired.js");
/* harmony import */ var _constrains_dependentSchemas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constrains/dependentSchemas.js */ "./src/validation/constrains/dependentSchemas.js");
/* harmony import */ var _constrains_enum_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constrains/enum.js */ "./src/validation/constrains/enum.js");
/* harmony import */ var _constrains_exclusiveMaximum_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constrains/exclusiveMaximum.js */ "./src/validation/constrains/exclusiveMaximum.js");
/* harmony import */ var _constrains_exclusiveMinimum_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constrains/exclusiveMinimum.js */ "./src/validation/constrains/exclusiveMinimum.js");
/* harmony import */ var _constrains_format_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constrains/format.js */ "./src/validation/constrains/format.js");
/* harmony import */ var _constrains_if_then_else_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constrains/if-then-else.js */ "./src/validation/constrains/if-then-else.js");
/* harmony import */ var _constrains_items_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constrains/items.js */ "./src/validation/constrains/items.js");
/* harmony import */ var _constrains_maxItems_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constrains/maxItems.js */ "./src/validation/constrains/maxItems.js");
/* harmony import */ var _constrains_maxLength_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constrains/maxLength.js */ "./src/validation/constrains/maxLength.js");
/* harmony import */ var _constrains_maxProperties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constrains/maxProperties.js */ "./src/validation/constrains/maxProperties.js");
/* harmony import */ var _constrains_minimum_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constrains/minimum.js */ "./src/validation/constrains/minimum.js");
/* harmony import */ var _constrains_minItems_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constrains/minItems.js */ "./src/validation/constrains/minItems.js");
/* harmony import */ var _constrains_minProperties_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constrains/minProperties.js */ "./src/validation/constrains/minProperties.js");
/* harmony import */ var _constrains_multipleOf_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constrains/multipleOf.js */ "./src/validation/constrains/multipleOf.js");
/* harmony import */ var _constrains_not_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../constrains/not.js */ "./src/validation/constrains/not.js");
/* harmony import */ var _constrains_oneOf_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../constrains/oneOf.js */ "./src/validation/constrains/oneOf.js");
/* harmony import */ var _constrains_pattern_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constrains/pattern.js */ "./src/validation/constrains/pattern.js");
/* harmony import */ var _constrains_patternProperties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constrains/patternProperties.js */ "./src/validation/constrains/patternProperties.js");
/* harmony import */ var _constrains_prefixItems_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../constrains/prefixItems.js */ "./src/validation/constrains/prefixItems.js");
/* harmony import */ var _constrains_required_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../constrains/required.js */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../constrains/type.js */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../constrains/maximum.js */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../constrains/uniqueItems.js */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../constrains/additionalProperties.js */ "./src/validation/constrains/additionalProperties.js");































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  additionalProperties: _constrains_additionalProperties_js__WEBPACK_IMPORTED_MODULE_29__.additionalProperties,
  allOf: _constrains_allOf_js__WEBPACK_IMPORTED_MODULE_0__.allOf,
  anyOf: _constrains_anyOf_js__WEBPACK_IMPORTED_MODULE_4__.anyOf,
  const: _constrains_const_js__WEBPACK_IMPORTED_MODULE_2__._const,
  contains: _constrains_contains_js__WEBPACK_IMPORTED_MODULE_3__.contains,
  dependentRequired: _constrains_dependentRequired_js__WEBPACK_IMPORTED_MODULE_5__.dependentRequired,
  dependentSchemas: _constrains_dependentSchemas_js__WEBPACK_IMPORTED_MODULE_6__.dependentSchemas,
  enum: _constrains_enum_js__WEBPACK_IMPORTED_MODULE_7__._enum,
  exclusiveMaximum: _constrains_exclusiveMaximum_js__WEBPACK_IMPORTED_MODULE_8__.exclusiveMaximum,
  exclusiveMinimum: _constrains_exclusiveMinimum_js__WEBPACK_IMPORTED_MODULE_9__.exclusiveMinimum,
  format: _constrains_format_js__WEBPACK_IMPORTED_MODULE_10__.format,
  if: _constrains_if_then_else_js__WEBPACK_IMPORTED_MODULE_11__.ifThenElse,
  items: _constrains_items_js__WEBPACK_IMPORTED_MODULE_12__.items,
  maximum: _constrains_maximum_js__WEBPACK_IMPORTED_MODULE_27__.maximum,
  maxItems: _constrains_maxItems_js__WEBPACK_IMPORTED_MODULE_13__.maxItems,
  maxLength: _constrains_maxLength_js__WEBPACK_IMPORTED_MODULE_14__.maxLength,
  maxProperties: _constrains_maxProperties_js__WEBPACK_IMPORTED_MODULE_15__.maxProperties,
  minimum: _constrains_minimum_js__WEBPACK_IMPORTED_MODULE_16__.minimum,
  minItems: _constrains_minItems_js__WEBPACK_IMPORTED_MODULE_17__.minItems,
  minLength: _constrains_minLength_js__WEBPACK_IMPORTED_MODULE_1__.minLength,
  minProperties: _constrains_minProperties_js__WEBPACK_IMPORTED_MODULE_18__.minProperties,
  multipleOf: _constrains_multipleOf_js__WEBPACK_IMPORTED_MODULE_19__.multipleOf,
  not: _constrains_not_js__WEBPACK_IMPORTED_MODULE_20__.not,
  oneOf: _constrains_oneOf_js__WEBPACK_IMPORTED_MODULE_21__.oneOf,
  pattern: _constrains_pattern_js__WEBPACK_IMPORTED_MODULE_22__.pattern,
  patternProperties: _constrains_patternProperties_js__WEBPACK_IMPORTED_MODULE_23__.patternProperties,
  prefixItems: _constrains_prefixItems_js__WEBPACK_IMPORTED_MODULE_24__.prefixItems,
  required: _constrains_required_js__WEBPACK_IMPORTED_MODULE_25__.required,
  type: _constrains_type_js__WEBPACK_IMPORTED_MODULE_26__.type,
  uniqueItems: _constrains_uniqueItems_js__WEBPACK_IMPORTED_MODULE_28__.uniqueItems
});


/***/ }),

/***/ "./src/validation/drafts/draft-07.js":
/*!*******************************************!*\
  !*** ./src/validation/drafts/draft-07.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constrains_allOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constrains/allOf.js */ "./src/validation/constrains/allOf.js");
/* harmony import */ var _constrains_minLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constrains/minLength.js */ "./src/validation/constrains/minLength.js");
/* harmony import */ var _constrains_const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constrains/const.js */ "./src/validation/constrains/const.js");
/* harmony import */ var _constrains_contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constrains/contains.js */ "./src/validation/constrains/contains.js");
/* harmony import */ var _constrains_anyOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constrains/anyOf.js */ "./src/validation/constrains/anyOf.js");
/* harmony import */ var _constrains_dependentRequired_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constrains/dependentRequired.js */ "./src/validation/constrains/dependentRequired.js");
/* harmony import */ var _constrains_dependentSchemas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constrains/dependentSchemas.js */ "./src/validation/constrains/dependentSchemas.js");
/* harmony import */ var _constrains_enum_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constrains/enum.js */ "./src/validation/constrains/enum.js");
/* harmony import */ var _constrains_exclusiveMaximum_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constrains/exclusiveMaximum.js */ "./src/validation/constrains/exclusiveMaximum.js");
/* harmony import */ var _constrains_exclusiveMinimum_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constrains/exclusiveMinimum.js */ "./src/validation/constrains/exclusiveMinimum.js");
/* harmony import */ var _constrains_format_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constrains/format.js */ "./src/validation/constrains/format.js");
/* harmony import */ var _constrains_if_then_else_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constrains/if-then-else.js */ "./src/validation/constrains/if-then-else.js");
/* harmony import */ var _constrains_items_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constrains/items.js */ "./src/validation/constrains/items.js");
/* harmony import */ var _constrains_maxItems_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constrains/maxItems.js */ "./src/validation/constrains/maxItems.js");
/* harmony import */ var _constrains_maxLength_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constrains/maxLength.js */ "./src/validation/constrains/maxLength.js");
/* harmony import */ var _constrains_maxProperties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constrains/maxProperties.js */ "./src/validation/constrains/maxProperties.js");
/* harmony import */ var _constrains_minimum_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constrains/minimum.js */ "./src/validation/constrains/minimum.js");
/* harmony import */ var _constrains_minItems_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constrains/minItems.js */ "./src/validation/constrains/minItems.js");
/* harmony import */ var _constrains_minProperties_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constrains/minProperties.js */ "./src/validation/constrains/minProperties.js");
/* harmony import */ var _constrains_multipleOf_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constrains/multipleOf.js */ "./src/validation/constrains/multipleOf.js");
/* harmony import */ var _constrains_not_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../constrains/not.js */ "./src/validation/constrains/not.js");
/* harmony import */ var _constrains_oneOf_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../constrains/oneOf.js */ "./src/validation/constrains/oneOf.js");
/* harmony import */ var _constrains_pattern_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constrains/pattern.js */ "./src/validation/constrains/pattern.js");
/* harmony import */ var _constrains_patternProperties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constrains/patternProperties.js */ "./src/validation/constrains/patternProperties.js");
/* harmony import */ var _constrains_prefixItems_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../constrains/prefixItems.js */ "./src/validation/constrains/prefixItems.js");
/* harmony import */ var _constrains_required_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../constrains/required.js */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../constrains/type.js */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../constrains/maximum.js */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../constrains/uniqueItems.js */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../constrains/additionalProperties.js */ "./src/validation/constrains/additionalProperties.js");































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  additionalProperties: _constrains_additionalProperties_js__WEBPACK_IMPORTED_MODULE_29__.additionalProperties,
  allOf: _constrains_allOf_js__WEBPACK_IMPORTED_MODULE_0__.allOf,
  anyOf: _constrains_anyOf_js__WEBPACK_IMPORTED_MODULE_4__.anyOf,
  const: _constrains_const_js__WEBPACK_IMPORTED_MODULE_2__._const,
  contains: _constrains_contains_js__WEBPACK_IMPORTED_MODULE_3__.contains,
  dependentRequired: _constrains_dependentRequired_js__WEBPACK_IMPORTED_MODULE_5__.dependentRequired,
  dependentSchemas: _constrains_dependentSchemas_js__WEBPACK_IMPORTED_MODULE_6__.dependentSchemas,
  enum: _constrains_enum_js__WEBPACK_IMPORTED_MODULE_7__._enum,
  exclusiveMaximum: _constrains_exclusiveMaximum_js__WEBPACK_IMPORTED_MODULE_8__.exclusiveMaximum,
  exclusiveMinimum: _constrains_exclusiveMinimum_js__WEBPACK_IMPORTED_MODULE_9__.exclusiveMinimum,
  format: _constrains_format_js__WEBPACK_IMPORTED_MODULE_10__.format,
  if: _constrains_if_then_else_js__WEBPACK_IMPORTED_MODULE_11__.ifThenElse,
  items: _constrains_items_js__WEBPACK_IMPORTED_MODULE_12__.items,
  maximum: _constrains_maximum_js__WEBPACK_IMPORTED_MODULE_27__.maximum,
  maxItems: _constrains_maxItems_js__WEBPACK_IMPORTED_MODULE_13__.maxItems,
  maxLength: _constrains_maxLength_js__WEBPACK_IMPORTED_MODULE_14__.maxLength,
  maxProperties: _constrains_maxProperties_js__WEBPACK_IMPORTED_MODULE_15__.maxProperties,
  minimum: _constrains_minimum_js__WEBPACK_IMPORTED_MODULE_16__.minimum,
  minItems: _constrains_minItems_js__WEBPACK_IMPORTED_MODULE_17__.minItems,
  minLength: _constrains_minLength_js__WEBPACK_IMPORTED_MODULE_1__.minLength,
  minProperties: _constrains_minProperties_js__WEBPACK_IMPORTED_MODULE_18__.minProperties,
  multipleOf: _constrains_multipleOf_js__WEBPACK_IMPORTED_MODULE_19__.multipleOf,
  not: _constrains_not_js__WEBPACK_IMPORTED_MODULE_20__.not,
  oneOf: _constrains_oneOf_js__WEBPACK_IMPORTED_MODULE_21__.oneOf,
  pattern: _constrains_pattern_js__WEBPACK_IMPORTED_MODULE_22__.pattern,
  patternProperties: _constrains_patternProperties_js__WEBPACK_IMPORTED_MODULE_23__.patternProperties,
  prefixItems: _constrains_prefixItems_js__WEBPACK_IMPORTED_MODULE_24__.prefixItems,
  required: _constrains_required_js__WEBPACK_IMPORTED_MODULE_25__.required,
  type: _constrains_type_js__WEBPACK_IMPORTED_MODULE_26__.type,
  uniqueItems: _constrains_uniqueItems_js__WEBPACK_IMPORTED_MODULE_28__.uniqueItems
});


/***/ }),

/***/ "./src/validation/drafts/draft-2019-09.js":
/*!************************************************!*\
  !*** ./src/validation/drafts/draft-2019-09.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constrains_allOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constrains/allOf.js */ "./src/validation/constrains/allOf.js");
/* harmony import */ var _constrains_minLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constrains/minLength.js */ "./src/validation/constrains/minLength.js");
/* harmony import */ var _constrains_const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constrains/const.js */ "./src/validation/constrains/const.js");
/* harmony import */ var _constrains_contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constrains/contains.js */ "./src/validation/constrains/contains.js");
/* harmony import */ var _constrains_anyOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constrains/anyOf.js */ "./src/validation/constrains/anyOf.js");
/* harmony import */ var _constrains_dependentRequired_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constrains/dependentRequired.js */ "./src/validation/constrains/dependentRequired.js");
/* harmony import */ var _constrains_dependentSchemas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constrains/dependentSchemas.js */ "./src/validation/constrains/dependentSchemas.js");
/* harmony import */ var _constrains_enum_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constrains/enum.js */ "./src/validation/constrains/enum.js");
/* harmony import */ var _constrains_exclusiveMaximum_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constrains/exclusiveMaximum.js */ "./src/validation/constrains/exclusiveMaximum.js");
/* harmony import */ var _constrains_exclusiveMinimum_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constrains/exclusiveMinimum.js */ "./src/validation/constrains/exclusiveMinimum.js");
/* harmony import */ var _constrains_format_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constrains/format.js */ "./src/validation/constrains/format.js");
/* harmony import */ var _constrains_if_then_else_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constrains/if-then-else.js */ "./src/validation/constrains/if-then-else.js");
/* harmony import */ var _constrains_items_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constrains/items.js */ "./src/validation/constrains/items.js");
/* harmony import */ var _constrains_maxItems_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constrains/maxItems.js */ "./src/validation/constrains/maxItems.js");
/* harmony import */ var _constrains_maxLength_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constrains/maxLength.js */ "./src/validation/constrains/maxLength.js");
/* harmony import */ var _constrains_maxProperties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constrains/maxProperties.js */ "./src/validation/constrains/maxProperties.js");
/* harmony import */ var _constrains_minimum_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constrains/minimum.js */ "./src/validation/constrains/minimum.js");
/* harmony import */ var _constrains_minItems_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constrains/minItems.js */ "./src/validation/constrains/minItems.js");
/* harmony import */ var _constrains_minProperties_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constrains/minProperties.js */ "./src/validation/constrains/minProperties.js");
/* harmony import */ var _constrains_multipleOf_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constrains/multipleOf.js */ "./src/validation/constrains/multipleOf.js");
/* harmony import */ var _constrains_not_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../constrains/not.js */ "./src/validation/constrains/not.js");
/* harmony import */ var _constrains_oneOf_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../constrains/oneOf.js */ "./src/validation/constrains/oneOf.js");
/* harmony import */ var _constrains_pattern_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constrains/pattern.js */ "./src/validation/constrains/pattern.js");
/* harmony import */ var _constrains_patternProperties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constrains/patternProperties.js */ "./src/validation/constrains/patternProperties.js");
/* harmony import */ var _constrains_prefixItems_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../constrains/prefixItems.js */ "./src/validation/constrains/prefixItems.js");
/* harmony import */ var _constrains_required_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../constrains/required.js */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../constrains/type.js */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../constrains/maximum.js */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../constrains/uniqueItems.js */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../constrains/additionalProperties.js */ "./src/validation/constrains/additionalProperties.js");
/* harmony import */ var _constrains_unevaluatedProperties_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../constrains/unevaluatedProperties.js */ "./src/validation/constrains/unevaluatedProperties.js");
































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  additionalProperties: _constrains_additionalProperties_js__WEBPACK_IMPORTED_MODULE_29__.additionalProperties,
  allOf: _constrains_allOf_js__WEBPACK_IMPORTED_MODULE_0__.allOf,
  anyOf: _constrains_anyOf_js__WEBPACK_IMPORTED_MODULE_4__.anyOf,
  const: _constrains_const_js__WEBPACK_IMPORTED_MODULE_2__._const,
  contains: _constrains_contains_js__WEBPACK_IMPORTED_MODULE_3__.contains,
  dependentRequired: _constrains_dependentRequired_js__WEBPACK_IMPORTED_MODULE_5__.dependentRequired,
  dependentSchemas: _constrains_dependentSchemas_js__WEBPACK_IMPORTED_MODULE_6__.dependentSchemas,
  enum: _constrains_enum_js__WEBPACK_IMPORTED_MODULE_7__._enum,
  exclusiveMaximum: _constrains_exclusiveMaximum_js__WEBPACK_IMPORTED_MODULE_8__.exclusiveMaximum,
  exclusiveMinimum: _constrains_exclusiveMinimum_js__WEBPACK_IMPORTED_MODULE_9__.exclusiveMinimum,
  format: _constrains_format_js__WEBPACK_IMPORTED_MODULE_10__.format,
  if: _constrains_if_then_else_js__WEBPACK_IMPORTED_MODULE_11__.ifThenElse,
  items: _constrains_items_js__WEBPACK_IMPORTED_MODULE_12__.items,
  maximum: _constrains_maximum_js__WEBPACK_IMPORTED_MODULE_27__.maximum,
  maxItems: _constrains_maxItems_js__WEBPACK_IMPORTED_MODULE_13__.maxItems,
  maxLength: _constrains_maxLength_js__WEBPACK_IMPORTED_MODULE_14__.maxLength,
  maxProperties: _constrains_maxProperties_js__WEBPACK_IMPORTED_MODULE_15__.maxProperties,
  minimum: _constrains_minimum_js__WEBPACK_IMPORTED_MODULE_16__.minimum,
  minItems: _constrains_minItems_js__WEBPACK_IMPORTED_MODULE_17__.minItems,
  minLength: _constrains_minLength_js__WEBPACK_IMPORTED_MODULE_1__.minLength,
  minProperties: _constrains_minProperties_js__WEBPACK_IMPORTED_MODULE_18__.minProperties,
  multipleOf: _constrains_multipleOf_js__WEBPACK_IMPORTED_MODULE_19__.multipleOf,
  not: _constrains_not_js__WEBPACK_IMPORTED_MODULE_20__.not,
  oneOf: _constrains_oneOf_js__WEBPACK_IMPORTED_MODULE_21__.oneOf,
  pattern: _constrains_pattern_js__WEBPACK_IMPORTED_MODULE_22__.pattern,
  patternProperties: _constrains_patternProperties_js__WEBPACK_IMPORTED_MODULE_23__.patternProperties,
  prefixItems: _constrains_prefixItems_js__WEBPACK_IMPORTED_MODULE_24__.prefixItems,
  required: _constrains_required_js__WEBPACK_IMPORTED_MODULE_25__.required,
  type: _constrains_type_js__WEBPACK_IMPORTED_MODULE_26__.type,
  unevaluatedProperties: _constrains_unevaluatedProperties_js__WEBPACK_IMPORTED_MODULE_30__.unevaluatedProperties,
  uniqueItems: _constrains_uniqueItems_js__WEBPACK_IMPORTED_MODULE_28__.uniqueItems
});


/***/ }),

/***/ "./src/validation/drafts/draft-2020-12.js":
/*!************************************************!*\
  !*** ./src/validation/drafts/draft-2020-12.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constrains_allOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constrains/allOf.js */ "./src/validation/constrains/allOf.js");
/* harmony import */ var _constrains_minLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constrains/minLength.js */ "./src/validation/constrains/minLength.js");
/* harmony import */ var _constrains_const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constrains/const.js */ "./src/validation/constrains/const.js");
/* harmony import */ var _constrains_contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constrains/contains.js */ "./src/validation/constrains/contains.js");
/* harmony import */ var _constrains_anyOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constrains/anyOf.js */ "./src/validation/constrains/anyOf.js");
/* harmony import */ var _constrains_dependentRequired_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constrains/dependentRequired.js */ "./src/validation/constrains/dependentRequired.js");
/* harmony import */ var _constrains_dependentSchemas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constrains/dependentSchemas.js */ "./src/validation/constrains/dependentSchemas.js");
/* harmony import */ var _constrains_enum_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constrains/enum.js */ "./src/validation/constrains/enum.js");
/* harmony import */ var _constrains_exclusiveMaximum_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constrains/exclusiveMaximum.js */ "./src/validation/constrains/exclusiveMaximum.js");
/* harmony import */ var _constrains_exclusiveMinimum_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constrains/exclusiveMinimum.js */ "./src/validation/constrains/exclusiveMinimum.js");
/* harmony import */ var _constrains_format_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constrains/format.js */ "./src/validation/constrains/format.js");
/* harmony import */ var _constrains_if_then_else_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constrains/if-then-else.js */ "./src/validation/constrains/if-then-else.js");
/* harmony import */ var _constrains_items_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constrains/items.js */ "./src/validation/constrains/items.js");
/* harmony import */ var _constrains_maxItems_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constrains/maxItems.js */ "./src/validation/constrains/maxItems.js");
/* harmony import */ var _constrains_maxLength_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constrains/maxLength.js */ "./src/validation/constrains/maxLength.js");
/* harmony import */ var _constrains_maxProperties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constrains/maxProperties.js */ "./src/validation/constrains/maxProperties.js");
/* harmony import */ var _constrains_minimum_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constrains/minimum.js */ "./src/validation/constrains/minimum.js");
/* harmony import */ var _constrains_minItems_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constrains/minItems.js */ "./src/validation/constrains/minItems.js");
/* harmony import */ var _constrains_minProperties_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constrains/minProperties.js */ "./src/validation/constrains/minProperties.js");
/* harmony import */ var _constrains_multipleOf_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constrains/multipleOf.js */ "./src/validation/constrains/multipleOf.js");
/* harmony import */ var _constrains_not_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../constrains/not.js */ "./src/validation/constrains/not.js");
/* harmony import */ var _constrains_oneOf_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../constrains/oneOf.js */ "./src/validation/constrains/oneOf.js");
/* harmony import */ var _constrains_pattern_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constrains/pattern.js */ "./src/validation/constrains/pattern.js");
/* harmony import */ var _constrains_patternProperties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constrains/patternProperties.js */ "./src/validation/constrains/patternProperties.js");
/* harmony import */ var _constrains_prefixItems_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../constrains/prefixItems.js */ "./src/validation/constrains/prefixItems.js");
/* harmony import */ var _constrains_propertyNames_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../constrains/propertyNames.js */ "./src/validation/constrains/propertyNames.js");
/* harmony import */ var _constrains_required_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../constrains/required.js */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../constrains/type.js */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../constrains/maximum.js */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../constrains/uniqueItems.js */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../constrains/additionalProperties.js */ "./src/validation/constrains/additionalProperties.js");
/* harmony import */ var _constrains_unevaluatedProperties_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../constrains/unevaluatedProperties.js */ "./src/validation/constrains/unevaluatedProperties.js");

































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  additionalProperties: _constrains_additionalProperties_js__WEBPACK_IMPORTED_MODULE_30__.additionalProperties,
  allOf: _constrains_allOf_js__WEBPACK_IMPORTED_MODULE_0__.allOf,
  anyOf: _constrains_anyOf_js__WEBPACK_IMPORTED_MODULE_4__.anyOf,
  const: _constrains_const_js__WEBPACK_IMPORTED_MODULE_2__._const,
  contains: _constrains_contains_js__WEBPACK_IMPORTED_MODULE_3__.contains,
  dependentRequired: _constrains_dependentRequired_js__WEBPACK_IMPORTED_MODULE_5__.dependentRequired,
  dependentSchemas: _constrains_dependentSchemas_js__WEBPACK_IMPORTED_MODULE_6__.dependentSchemas,
  enum: _constrains_enum_js__WEBPACK_IMPORTED_MODULE_7__._enum,
  exclusiveMaximum: _constrains_exclusiveMaximum_js__WEBPACK_IMPORTED_MODULE_8__.exclusiveMaximum,
  exclusiveMinimum: _constrains_exclusiveMinimum_js__WEBPACK_IMPORTED_MODULE_9__.exclusiveMinimum,
  format: _constrains_format_js__WEBPACK_IMPORTED_MODULE_10__.format,
  if: _constrains_if_then_else_js__WEBPACK_IMPORTED_MODULE_11__.ifThenElse,
  items: _constrains_items_js__WEBPACK_IMPORTED_MODULE_12__.items,
  maximum: _constrains_maximum_js__WEBPACK_IMPORTED_MODULE_28__.maximum,
  maxItems: _constrains_maxItems_js__WEBPACK_IMPORTED_MODULE_13__.maxItems,
  maxLength: _constrains_maxLength_js__WEBPACK_IMPORTED_MODULE_14__.maxLength,
  maxProperties: _constrains_maxProperties_js__WEBPACK_IMPORTED_MODULE_15__.maxProperties,
  minimum: _constrains_minimum_js__WEBPACK_IMPORTED_MODULE_16__.minimum,
  minItems: _constrains_minItems_js__WEBPACK_IMPORTED_MODULE_17__.minItems,
  minLength: _constrains_minLength_js__WEBPACK_IMPORTED_MODULE_1__.minLength,
  minProperties: _constrains_minProperties_js__WEBPACK_IMPORTED_MODULE_18__.minProperties,
  multipleOf: _constrains_multipleOf_js__WEBPACK_IMPORTED_MODULE_19__.multipleOf,
  not: _constrains_not_js__WEBPACK_IMPORTED_MODULE_20__.not,
  oneOf: _constrains_oneOf_js__WEBPACK_IMPORTED_MODULE_21__.oneOf,
  pattern: _constrains_pattern_js__WEBPACK_IMPORTED_MODULE_22__.pattern,
  patternProperties: _constrains_patternProperties_js__WEBPACK_IMPORTED_MODULE_23__.patternProperties,
  prefixItems: _constrains_prefixItems_js__WEBPACK_IMPORTED_MODULE_24__.prefixItems,
  propertyNames: _constrains_propertyNames_js__WEBPACK_IMPORTED_MODULE_25__.propertyNames,
  required: _constrains_required_js__WEBPACK_IMPORTED_MODULE_26__.required,
  type: _constrains_type_js__WEBPACK_IMPORTED_MODULE_27__.type,
  unevaluatedProperties: _constrains_unevaluatedProperties_js__WEBPACK_IMPORTED_MODULE_31__.unevaluatedProperties,
  uniqueItems: _constrains_uniqueItems_js__WEBPACK_IMPORTED_MODULE_29__.uniqueItems
});


/***/ }),

/***/ "./src/validation/validator.js":
/*!*************************************!*\
  !*** ./src/validation/validator.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _drafts_draft_04_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drafts/draft-04.js */ "./src/validation/drafts/draft-04.js");
/* harmony import */ var _drafts_draft_06_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drafts/draft-06.js */ "./src/validation/drafts/draft-06.js");
/* harmony import */ var _drafts_draft_07_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drafts/draft-07.js */ "./src/validation/drafts/draft-07.js");
/* harmony import */ var _drafts_draft_2019_09_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drafts/draft-2019-09.js */ "./src/validation/drafts/draft-2019-09.js");
/* harmony import */ var _drafts_draft_2020_12_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drafts/draft-2020-12.js */ "./src/validation/drafts/draft-2020-12.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");








/**
 * Represents a Validator instance.
 */
class Validator {
  constructor (config = {}) {
    this.refParser = config.refParser
    this.validateFormat = config.validateFormat ? config.validateFormat : false
    this.draft = _drafts_draft_2020_12_js__WEBPACK_IMPORTED_MODULE_4__["default"]

    this.jsonSchemaDrafts = {
      'http://json-schema.org/draft-04/schema#': _drafts_draft_04_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      'http://json-schema.org/draft-06/schema#': _drafts_draft_06_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      'http://json-schema.org/draft-07/schema#': _drafts_draft_07_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      'https://json-schema.org/draft/2019-09/schema': _drafts_draft_2019_09_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      'https://json-schema.org/draft/2020-12/schema': _drafts_draft_2020_12_js__WEBPACK_IMPORTED_MODULE_4__["default"]
    }
  }

  /**
   * Validates a value against it's schema
   */
  getErrors (value, schema, key, path) {
    let schemaErrors = []
    const schemaOptionsMessages = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__.getSchemaOption)(schema, 'messages')

    const schemaClone = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__.clone)(schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__.isBoolean)(schemaClone) && schemaClone === true) {
      return schemaErrors
    }

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__.isBoolean)(schemaClone) && schemaClone === false) {
      return [{
        messages: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__.isSet)(schemaOptionsMessages) ? schemaOptionsMessages : ['invalid'],
        path: path
      }]
    }

    Object.keys(this.draft).forEach((constrain) => {
      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_5__.hasOwn)(schemaClone, constrain)) {
        const validator = this.draft[constrain]
        const validatorErrors = validator(this, value, schema, key, path)

        if (validatorErrors) {
          schemaErrors = [...schemaErrors, ...validatorErrors]
        }
      }
    })

    if (schemaErrors.length > 0 && schemaOptionsMessages) {
      schemaErrors = [
        {
          messages: schemaOptionsMessages,
          path: path
        }
      ]
    }

    return schemaErrors
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validator);


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jedi.js */ "./src/jedi.js");
/* harmony import */ var _ref_parser_ref_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ref-parser/ref-parser.js */ "./src/ref-parser/ref-parser.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Jedi: _jedi_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  RefParser: _ref_parser_ref_parser_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDalBBOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpREFBSztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0ZBQW9GOztBQUVoRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDREQUE0RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDBCQUEwQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFA5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUNBLGtCQUFrQix3REFBSztBQUN2QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLFVBQVUseURBQU07QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7OztVQ3RFeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDc0I7O0FBRWxELGlFQUFlO0FBQ2YsTUFBTTtBQUNOLFdBQVc7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSmVkaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtZ3JpZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9oZWxwZXJzL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pMThuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvaWYtdGhlbi1lbHNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9qZWRpLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2ljb25zL2ljb25zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL3RoZW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnRhaW5zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZW51bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZm9ybWF0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2lmLXRoZW4tZWxzZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbmltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wcmVmaXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wcm9wZXJ0eU5hbWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3JlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3R5cGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA3LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAxOS0wOS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0plZGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IEVkaXRvckFycmF5IGZyb20gJy4vYXJyYXkuanMnXG5pbXBvcnQgeyBjbGFtcCwgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckFycmF5TmF2IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQXJyYXlcbiAqL1xuY2xhc3MgRWRpdG9yQXJyYXlOYXYgZXh0ZW5kcyBFZGl0b3JBcnJheSB7XG4gIGluaXQgKCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aFxuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBuYXZDb2xzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2Q29scycpXG4gICAgY29uc3QgbmF2U3RhY2tlZCA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdlN0YWNrZWQnKVxuICAgIGNvbnN0IG5hdlR5cGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXZUeXBlJylcblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gaXNTZXQobmF2Q29scykgPyBuYXZDb2xzIDogM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogaXNTZXQobmF2U3RhY2tlZCkgPyBuYXZTdGFja2VkIDogZmFsc2UsXG4gICAgICB0eXBlOiBpc1NldChuYXZUeXBlKSA/IG5hdlR5cGUgOiAncGlscydcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkxpc3RDb2wpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkNvbnRlbnRDb2wpXG4gICAgdGFiTGlzdENvbC5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuICAgIHRhYkNvbnRlbnRDb2wuYXBwZW5kQ2hpbGQodGFiQ29udGVudClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGxldCBjaGlsZFRpdGxlXG4gICAgICBjb25zdCBzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdpdGVtVGVtcGxhdGUnKVxuXG4gICAgICBpZiAoc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgaTA6IGluZGV4LFxuICAgICAgICAgIGkxOiAoaW5kZXggKyAxKSxcbiAgICAgICAgICB2YWx1ZTogY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkVGl0bGUgPSBjb21waWxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcbiAgICAgICAgY2hpbGRUaXRsZSA9IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlICsgJyAnICsgKGluZGV4ICsgMSkgOiBjaGlsZC5nZXRLZXkoKVxuICAgICAgfVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBjbGFtcCgoaW5kZXggLSAxKSwgMCwgKHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoIC0gMSkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGluZGV4IC0gMVxuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdG9JbmRleFxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGluZGV4ICsgMVxuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdG9JbmRleFxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aClcblxuICAgICAgY29uc3QgdGFiID0gdGhpcy50aGVtZS5nZXRUYWIoe1xuICAgICAgICB0aXRsZTogY2hpbGRUaXRsZSxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgfSlcblxuICAgICAgdGFiLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBpbmRleFxuICAgICAgfSlcblxuICAgICAgdGhpcy50aGVtZS5zZXRUYWJQYW5lQXR0cmlidXRlcyhjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lciwgYWN0aXZlLCBpZClcbiAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBtb3ZlVXBCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuXG4gICAgICBpZiAoKHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoIC0gMSkgPT09IGluZGV4KSB7XG4gICAgICAgIG1vdmVEb3duQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckFycmF5TmF2XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yLmpzJ1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hTWF4SXRlbXMsXG4gIGdldFNjaGVtYU1pbkl0ZW1zLFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQXJyYXkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yQXJyYXkgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRBcnJheUNvbnRyb2woe1xuICAgICAgdGl0bGU6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgdGl0bGVIaWRkZW46IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydChjb25maWcpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcblxuICAgIGNvbnN0IG1heEl0ZW1zID0gZ2V0U2NoZW1hTWF4SXRlbXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3QgbWluSXRlbXMgPSBnZXRTY2hlbWFNaW5JdGVtcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChtYXhJdGVtcykgJiYgbWF4SXRlbXMgPT09IHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5pbnN0YW5jZS5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc1NldChtaW5JdGVtcykgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPD0gbWluSXRlbXMpIHtcbiAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckFycmF5XG4iLCJpbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4uanMnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JCb29sZWFuXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JCb29sZWFuIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhbkVudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi9ib29sZWFuLmpzJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckJvb2xlYW5cbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JCb29sZWFuIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JCb29sZWFuIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW4gZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgdGl0bGVIaWRkZW46IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhblxuIiwiaW1wb3J0IHsgZ2x5cGhpY29ucywgYm9vdHN0cmFwSWNvbnMsIGZvbnRBd2Vzb21lMywgZm9udEF3ZXNvbWU0LCBmb250QXdlc29tZTUsIGZvbnRBd2Vzb21lNiB9IGZyb20gJy4uL3RoZW1lcy9pY29ucy9pY29ucy5qcydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDMgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDMuanMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0LmpzJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNS5qcydcbmltcG9ydCBUaGVtZSBmcm9tICcuLi90aGVtZXMvdGhlbWUuanMnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIEluc3RhbmNlIGJlaW5nIGNvbnRyb2xsZWQgYnkgdGhpcyBlZGl0b3IuXG4gICAgICogQHR5cGUge0luc3RhbmNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBpbnN0YW5jZSB1c2VkIHRvIGJ1aWxkIHRoZSBFZGl0b3IgdXNlciBpbnRlcmZhY2UuXG4gICAgICogQHR5cGUge1RoZW1lfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50aGVtZSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyIGludGVyZmFjZSBodG1sIGZvciB0aGlzIGVkaXRvclxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdGhpcy5jb250cm9sID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZWQgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG5cbiAgICAvKipcbiAgICAgKiBSZWFkIG9ubHkgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yZWFkT25seSA9IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpXG5cbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuY29lcmNlVmFsdWUoKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgY29uc3QgYWx3YXlzU2hvd0Vycm9ycyA9IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnNob3dFcnJvcnMgPT09ICdhbHdheXMnIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3Nob3dFcnJvcnMnKSA9PT0gJ2Fsd2F5cydcblxuICAgIGlmIChhbHdheXNTaG93RXJyb3JzKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgZWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICBsZXQgaWNvbnMgPSBudWxsXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuaWNvbkxpYikpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuaWNvbkxpYikge1xuICAgICAgICBjYXNlICdnbHlwaGljb25zJzpcbiAgICAgICAgICBpY29ucyA9IGdseXBoaWNvbnNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdib290c3RyYXAtaWNvbnMnOlxuICAgICAgICAgIGljb25zID0gYm9vdHN0cmFwSWNvbnNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTMnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWUzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWU0JzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lNFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNSc6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTVcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTYnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU2XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICdib290c3RyYXAzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDMoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKGljb25zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNvbnRhaW5lciBhdHRyaWJ1dGVzIGxpa2UgZGF0YS1wYXRoIGFuZCBkYXRhLXR5cGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIGdldFNjaGVtYVR5cGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpKVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZWRpdG9yIGNvbnRyb2wgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGVkaXRvciBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYnkgbWFraW5nIGFzc3VtcHRpb25zIGJhc2VkIG9uIGNvbnN0cmFpbnNcbiAgICovXG4gIGNvZXJjZVZhbHVlICgpIHtcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFFbnVtKSAmJiAhc2NoZW1hRW51bS5pbmNsdWRlcyh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpICYmIGlzU2V0KHNjaGVtYUVudW1bMF0pKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHNjaGVtYUVudW1bMF0sIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHVpIGVsZW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzIChlcnJvcnMpIHtcbiAgICBjb25zdCBuZXZlclNob3dFcnJvcnMgPSB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5zaG93RXJyb3JzID09PSAnbmV2ZXInIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3Nob3dFcnJvcnMnKSA9PT0gJ25ldmVyJ1xuXG4gICAgaWYgKG5ldmVyU2hvd0Vycm9ycykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBsYWJlbCA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgICAgIG1lc3NhZ2U6IGxhYmVsICsgJzogJyArIG1lc3NhZ2VcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXJyb3IgbWVzc2FnZSBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgY29udHJvbCBVSSB3aGVuIGl0cyBzdGF0ZSBjaGFuZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICB9XG5cbiAgcmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMgKCkge1xuICAgIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudHMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxuXG4gICAgaW50ZXJhY3RpdmVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbC5jb250YWluZXIgJiYgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JNdWx0aXBsZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JNdWx0aXBsZSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE11bHRpcGxlQ29udHJvbCh7XG4gICAgICB0aXRsZTogJ09wdGlvbnMnLFxuICAgICAgdGl0bGVIaWRkZW46IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgc3dpdGNoZXJPcHRpb25WYWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICBzd2l0Y2hlck9wdGlvbnNMYWJlbHM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuaW5kZXhcblxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmVuYWJsZSgpXG4gICAgfVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydChjb25maWcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTXVsdGlwbGVcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3IuanMnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JOdWxsIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck51bGwgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXROdWxsQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSB8fCBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVsbFxuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlci5qcydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1SYWRpbyBleHRlbmRzIEVkaXRvck51bWJlciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgdGl0bGVIaWRkZW46IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZShyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlckVudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlci5qcydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck51bWJlclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yTnVtYmVyIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlckVudW1TZWxlY3RcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3IuanMnXG5pbXBvcnQgeyBpc051bWJlciwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7XG4gIGdldFNjaGVtYURlc2NyaXB0aW9uLFxuICBnZXRTY2hlbWFGb3JtYXQsXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hVGl0bGUsIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck51bWJlciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXIgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSB8fCBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGdldFNjaGVtYVR5cGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlclxuIiwiaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuL29iamVjdC5qcydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JPYmplY3RHcmlkIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yT2JqZWN0XG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdEdyaWQgZXh0ZW5kcyBFZGl0b3JPYmplY3Qge1xuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBsZXQgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRTY2hlbWFPcHRpb24oY2hpbGQuc2NoZW1hLCAnY29sdW1ucycpIHx8IDEyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICdvZmZzZXQnKSB8fCAwXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2x1bW5zLCBvZmZzZXQpXG5cbiAgICAgICAgaWYgKGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICduZXdSb3cnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb2wpXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdEdyaWRcbiIsImltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi9vYmplY3QuanMnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck9iamVjdE5hdiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck9iamVjdFxuICovXG5jbGFzcyBFZGl0b3JPYmplY3ROYXYgZXh0ZW5kcyBFZGl0b3JPYmplY3Qge1xuICBpbml0ICgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gMFxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbENvbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYVsneC1jb250cm9sLWNvbHMnXVxuICAgIGNvbnN0IGNvbnRyb2xTdGFja2VkID0gdGhpcy5pbnN0YW5jZS5zY2hlbWFbJ3gtY29udHJvbC1zdGFja2VkJ11cbiAgICBjb25zdCBjb250cm9sVmFyaWFudCA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hWyd4LWNvbnRyb2wtdmFyaWFudCddXG5cbiAgICBjb25zdCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgY29uc3QgY29scyA9IGlzU2V0KGNvbnRyb2xDb2xzKSA/IGNvbnRyb2xDb2xzIDogM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogaXNTZXQoY29udHJvbFN0YWNrZWQpID8gY29udHJvbFN0YWNrZWQgOiBmYWxzZSxcbiAgICAgIHR5cGU6IGlzU2V0KGNvbnRyb2xWYXJpYW50KSA/IGNvbnRyb2xWYXJpYW50IDogJ3BpbHMnXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJMaXN0Q29sKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJDb250ZW50Q29sKVxuICAgIHRhYkxpc3RDb2wuYXBwZW5kQ2hpbGQodGFiTGlzdClcbiAgICB0YWJDb250ZW50Q29sLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGluZGV4ID09PSB0aGlzLmFjdGl2ZVRhYkluZGV4XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2hpbGQuc2NoZW1hKVxuXG4gICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgICB0aXRsZTogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgICAgfSlcblxuICAgICAgICB0YWIubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRoZW1lLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLCBhY3RpdmUsIGlkKVxuXG4gICAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3ROYXZcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3IuanMnXG5pbXBvcnQge1xuICBlcXVhbCxcbiAgaGFzT3duLFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIHBhdGhUb0F0dHJpYnV0ZVxufSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGdldFNjaGVtYURlc2NyaXB0aW9uLFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yT2JqZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdCBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLnByb3BlcnR5QWN0aXZhdG9ycyA9IHt9XG4gICAgY29uc3Qgc2NoZW1hT3B0aW9ucyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbnMgfHwge31cbiAgICBsZXQgYWRkUHJvcGVydHkgPSB0cnVlXG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlKSB7XG4gICAgICBhZGRQcm9wZXJ0eSA9IGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IGVkaXRhYmxlUHJvcGVydGllcyA9IGZhbHNlXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzKSkge1xuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYU9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzKSkge1xuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzID0gc2NoZW1hT3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXNcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE9iamVjdENvbnRyb2woe1xuICAgICAgdGl0bGU6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgdGl0bGVIaWRkZW46IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBlZGl0YWJsZVByb3BlcnRpZXMsXG4gICAgICBhZGRQcm9wZXJ0eTogYWRkUHJvcGVydHlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWUuc3BsaXQoJyAnKS5qb2luKCcnKVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWVFbXB0eSA9IGtleS5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHByb3BlcnR5TmFtZUVtcHR5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eUV4aXN0ID0gaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKVxuXG4gICAgICBpZiAocHJvcGVydHlFeGlzdCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IHNjaGVtYSA9IHt9XG5cbiAgICAgIGNvbnN0IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICAgIGlmIChpc1NldChzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5wcm9wZXJ0aWVzW2tleV0gPSB7IHNjaGVtYSB9XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlID0gJydcblxuICAgICAgY29uc3QgYXJpYUxpdmUgPSB0aGlzLmNvbnRyb2wuYXJpYUxpdmVcbiAgICAgIGFyaWFMaXZlLmlubmVySFRNTCA9ICcnXG4gICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcbiAgICAgIGNvbnN0IGxhYmVsID0gaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiBrZXlcbiAgICAgIGNvbnN0IGFyaWFMaXZlTWVzc2FnZSA9IHRoaXMudGhlbWUuZ2V0QXJpYUxpdmVNZXNzYWdlKClcbiAgICAgIGFyaWFMaXZlTWVzc2FnZS50ZXh0Q29udGVudCA9IGxhYmVsICsgJyBmaWVsZCB3YXMgYWRkZWQgdG8gdGhlIGZvcm0nXG4gICAgICBhcmlhTGl2ZS5hcHBlbmRDaGlsZChhcmlhTGl2ZU1lc3NhZ2UpXG5cbiAgICAgIC8vIGtlZXBzIGRpYWxvZyBvcGVuXG4gICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc0NvbnRhaW5lci5jbG9zZSgpXG4gICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc0NvbnRhaW5lci5zaG93TW9kYWwoKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoY29uZmlnKVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBzY2hlbWFPcHRpb25FZGl0YWJsZVByb3BlcnRpZXMgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlZGl0YWJsZVByb3BlcnRpZXMnKVxuXG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwoc2NoZW1hT3B0aW9uRWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAvLyByZWZhY3RvciB3aXRoIGlzTm90UmVxdWlyZWRcbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChwcm9wZXJ0eSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChwcm9wZXJ0eSlcbiAgICAgICAgY29uc3Qgbm90UmVxdWlyZWQgPSAhaXNSZXF1aXJlZCAmJiAhaXNEZXBlbmRlbnRSZXF1aXJlZFxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvckluRG9tID0gdGhpcy5wcm9wZXJ0eUFjdGl2YXRvcnNbcHJvcGVydHldXG4gICAgICAgIGNvbnN0IGFyaWFMaXZlID0gdGhpcy5jb250cm9sLmFyaWFMaXZlXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuaW5zdGFuY2UucHJvcGVydGllc1twcm9wZXJ0eV0uc2NoZW1hXG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoc2NoZW1hKVxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5pbnN0YW5jZS5wYXRoICsgdGhpcy5pbnN0YW5jZS5qZWRpLnBhdGhTZXBhcmF0b3IgKyBwcm9wZXJ0eVxuICAgICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShwYXRoKSArICctYWN0aXZhdG9yJ1xuICAgICAgICBjb25zdCBsYWJlbCA9IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogcHJvcGVydHlcblxuICAgICAgICBpZiAobm90UmVxdWlyZWQgJiYgIWFjdGl2YXRvckluRG9tKSB7XG4gICAgICAgICAgY29uc3QgY2hlY2tib3hDb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgdGl0bGVIaWRkZW46IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY2hlY2tib3hDb250cm9sLmlucHV0XG4gICAgICAgICAgdGhpcy5wcm9wZXJ0eUFjdGl2YXRvcnNbcHJvcGVydHldID0gY2hlY2tib3hcblxuICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGFyaWFMaXZlLmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICBjb25zdCBhcmlhTGl2ZU1lc3NhZ2UgPSB0aGlzLnRoZW1lLmdldEFyaWFMaXZlTWVzc2FnZSgpXG5cbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5nZXRDaGlsZChwcm9wZXJ0eSlcblxuICAgICAgICAgICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIHByb3BlcnR5KVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5nZXRDaGlsZChwcm9wZXJ0eSkuYWN0aXZhdGUoKVxuICAgICAgICAgICAgICBhcmlhTGl2ZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBsYWJlbCArICcgZmllbGQgd2FzIGFkZGVkIHRvIHRoZSBmb3JtJ1xuICAgICAgICAgICAgICBhcmlhTGl2ZS5hcHBlbmRDaGlsZChhcmlhTGl2ZU1lc3NhZ2UpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmdldENoaWxkKHByb3BlcnR5KS5kZWFjdGl2YXRlKClcbiAgICAgICAgICAgICAgYXJpYUxpdmVNZXNzYWdlLnRleHRDb250ZW50ID0gbGFiZWwgKyAnIGZpZWxkIHdhcyByZW1vdmVkIGZyb20gdGhlIGZvcm0nXG4gICAgICAgICAgICAgIGFyaWFMaXZlLmFwcGVuZENoaWxkKGFyaWFMaXZlTWVzc2FnZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8ga2VlcHMgZGlhbG9nIG9wZW5cbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQ29udGFpbmVyLmNsb3NlKClcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQ29udGFpbmVyLnNob3dNb2RhbCgpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5hcHBlbmRDaGlsZChjaGVja2JveENvbnRyb2wuY29udGFpbmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSB0aGlzLnByb3BlcnR5QWN0aXZhdG9yc1twcm9wZXJ0eV1cbiAgICAgICAgaWYgKGNoZWNrYm94KSB7XG4gICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIHByb3BlcnR5KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgaWYgKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLnJlZnJlc2hQcm9wZXJ0aWVzU2xvdCgpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0XG4iLCJpbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4vc3RyaW5nLmpzJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ0VudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JTdHJpbmcge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdFbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcuanMnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ1RleHRhcmVhIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ1RleHRhcmVhIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWFDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpIHx8IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdUZXh0YXJlYVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmcgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHNjaGVtYUZvcm1hdCkgPyBzY2hlbWFGb3JtYXQgOiAndGV4dCcsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSB8fCBzY2hlbWFGb3JtYXQgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmIChzY2hlbWFGb3JtYXQgPT09ICdjb2xvcicgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdcbiIsIi8qKlxuICogUmVwcmVzZW50cyBhbiBFdmVudEVtaXR0ZXIgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGlzIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICovXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgb2ZmIChuYW1lKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSAhPT0gbmFtZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgYSBuYW1lZCBldmVudCBsaXN0ZW5lclxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGJlIGVtaXR0ZWRcbiAgICogQHBhcmFtIHsqfSBwYXlsb2FkIC0gUGF5bG9hZCBjb250YWluaW5nIGRhdGEgdGhhdCBpcyBwYXNzZWQgYWxvbmcgd2l0aCB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIGVtaXQgKG5hbWUsIHBheWxvYWQgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2socGF5bG9hZClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWxzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hWCAoc2NoZW1hLCBrZXl3b3JkKSB7XG4gIGNvbnN0IGtleSA9ICd4LScgKyBrZXl3b3JkXG4gIHJldHVybiBzY2hlbWFba2V5XVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hU2NoZW1hIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS4kc2NoZW1hKSA/IHNjaGVtYS4kc2NoZW1hIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbihzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQcm9wZXJ0eU5hbWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wcm9wZXJ0eU5hbWVzKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLnByb3BlcnR5TmFtZXMpID8gc2NoZW1hLnByb3BlcnR5TmFtZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFsbE9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLmFsbE9mKSA/IHNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQW55T2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEuYW55T2YpID8gc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFDb25zdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuY29uc3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUNvbnRhaW5zIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbihzY2hlbWEuY29udGFpbnMpKSA/IHNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVmYXVsdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuZGVmYXVsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVzY3JpcHRpb24gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRWxzZSAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbihzY2hlbWEuZWxzZSkpID8gc2NoZW1hLmVsc2UgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUVudW0gKHNjaGVtYSkge1xuICBpZiAoaXNBcnJheShzY2hlbWEuZW51bSkgJiYgc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBzY2hlbWEuZW51bVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRm9ybWF0IChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5mb3JtYXQpID8gc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hSWYgKHNjaGVtYSkge1xuICBpZiAoaXNPYmplY3Qoc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIGlmIChpc0Jvb2xlYW4oc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHNjaGVtYS5pdGVtcykgPyBzY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heGltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1heGltdW0pID8gc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heENvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4Q29udGFpbnMpICYmIHNjaGVtYS5tYXhDb250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhDb250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4SXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhJdGVtcykgJiYgc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heEl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhMZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhMZW5ndGgpICYmIHNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4TGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbmltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1pbmltdW0pID8gc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkNvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluQ29udGFpbnMpICYmIHNjaGVtYS5taW5Db250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5Db250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluSXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5JdGVtcykgJiYgc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5MZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5MZW5ndGgpICYmIHNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluTGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluUHJvcGVydGllcykgJiYgc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluUHJvcGVydGllc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTXVsdGlwbGVPZiAoc2NoZW1hKSB7XG4gIGlmIChpc051bWJlcihzY2hlbWEubXVsdGlwbGVPZikgJiYgc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubXVsdGlwbGVPZlxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTm90IChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4oc2NoZW1hLm5vdCkpID8gc2NoZW1hLm5vdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hT3B0aW9uIChzY2hlbWEsIG9wdGlvbikge1xuICByZXR1cm4gKHNjaGVtYS5vcHRpb25zICYmIHNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUGF0dGVybiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEucGF0dGVybikgPyBzY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSA/IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUHJlZml4SXRlbXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEucHJlZml4SXRlbXMpID8gc2NoZW1hLnByZWZpeEl0ZW1zIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wcm9wZXJ0aWVzKSA/IHNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFSZWFkT25seSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0Jvb2xlYW4oc2NoZW1hLnJlYWRPbmx5KSA/IHNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUmVxdWlyZWQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEucmVxdWlyZWQpID8gWy4uLm5ldyBTZXQoc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVRoZW4gKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS50aGVuKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLnRoZW4pKSA/IHNjaGVtYS50aGVuIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFUaXRsZSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEudGl0bGUpID8gc2NoZW1hLnRpdGxlIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFUeXBlIChzY2hlbWEpIHtcbiAgaWYgKGlzU3RyaW5nKHNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHNjaGVtYS50eXBlKSkge1xuICAgIHJldHVybiBzY2hlbWEudHlwZVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hT25lT2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEub25lT2YpID8gc2NoZW1hLm9uZU9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFVbmV2YWx1YXRlZFByb3BlcnRpZXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS51bmV2YWx1YXRlZFByb3BlcnRpZXMpID8gc2NoZW1hLnVuZXZhbHVhdGVkUHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVW5pcXVlSXRlbXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS51bmlxdWVJdGVtcykgPyBzY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbn1cbiIsIi8qKlxuICogVXRpbHMuXG4gKiBAbW9kdWxlIHV0aWxzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENpcmN1bGFyUmVwbGFjZXIgKCkge1xuICBjb25zdCBhbmNlc3RvcnMgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgLy8gYHRoaXNgIGlzIHRoZSBvYmplY3QgdGhhdCB2YWx1ZSBpcyBjb250YWluZWQgaW4sXG4gICAgLy8gaS5lLiwgaXRzIGRpcmVjdCBwYXJlbnQuXG4gICAgd2hpbGUgKGFuY2VzdG9ycy5sZW5ndGggPiAwICYmIGFuY2VzdG9ycy5hdCgtMSkgIT09IHRoaXMpIHtcbiAgICAgIGFuY2VzdG9ycy5wb3AoKVxuICAgIH1cbiAgICBpZiAoYW5jZXN0b3JzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJ1xuICAgIH1cbiAgICBhbmNlc3RvcnMucHVzaCh2YWx1ZSlcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBjbG9uZSBvZiBhIHRoaW5nXG4gKiBAcGFyYW0geyp9IHRoaW5nIC0gVGhlIHRoaW5nIHRvIGJlIGNsb25lZFxuICogQHJldHVybiB7Kn0gVGhlIGNsb25lIG9mIHRoZSB0aGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUgKHRoaW5nKSB7XG4gIGlmICh0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcsIGdldENpcmN1bGFyUmVwbGFjZXIoKSkpXG59XG5cbi8qKlxuICogUmV0dXJucyBlc2NhcGVkIHJlZ2V4cFxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCByZWdleHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gZmluZCAtIFRoZSBwYXJ0IHRvIGJlIHJlcGxhY2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZSAtIFRoZSByZXBsYWNlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwgKHN0ciwgZmluZCwgcmVwbGFjZSkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIGpzb24gcGF0aCB0byBiZSB1c2VkIGFzIGFuIGh0bWwgYXR0cmlidXRlIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBqc29uIHBhdGhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhUb0F0dHJpYnV0ZSAocGF0aCkge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgLSBUaGUgcHJvcGVydHlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24gKG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn1cblxuLyoqXG4gKiBTb3J0IG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRPYmplY3QgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHZhbHVlcyBwYXNzZWQgYXJlIGVxdWFsXG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWwgKGEsIGIpIHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBkaWZmZXJlbnRcbiAqIEBwYXJhbSB7Kn0gYSAtIFZhbHVlIEFcbiAqIEBwYXJhbSB7Kn0gYiAtIFZhbHVlIEJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbnQgKGEsIGIpIHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG51bGxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwgKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90U2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgbnVtYmVyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gaW50ZWdlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlciAodmFsdWUpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIHN0cmluZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgYm9vbGVhblxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5ICh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAodmFsdWUpIHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBhIHZhbHVlXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0eXBlIG9mIHRoZSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSAodmFsdWUpIHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gc291cmNlcyAtIE9iamVjdHMgdG8gYmUgbWVyZ2VkIGludG8gdGhlIHRhcmdldCBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG1lcmdlZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHMgYnV0IG9ubHkgdGhlIHByb3BlcnRpZXMgdGhhdCBleGlzdHMgaW4gYm90aHMgb2JqZWN0c1xuICogaWYgdGhleSBhcmUgdGhlIHNhbWUgdHlwZSBvZiB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IG9iajEgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gb2JqMiAtIE9iamVjdHMgd2hvJ3MgcHJvcGVydGllcyBhcmUgdGhlIG92ZXJyaWRlc1xuICogQHJldHVybiB7b2JqZWN0fSBUaGUgb3ZlcndyaXR0ZW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMgKG9iajEsIG9iajIpIHtcbiAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmoxKSB7XG4gICAgICBpZiAodHlwZW9mIG9iajFba2V5XSA9PT0gdHlwZW9mIG9iajJba2V5XSkge1xuICAgICAgICBvYmoxW2tleV0gPSBvYmoyW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG9iajFcbn1cblxuLyoqXG4gKiBHZXQgc29tZSB2YWx1ZSBieSB0cmF2ZXJzaW5nIHRoZSBkYXRhIHVzaW5nIEpTT04gcGF0aFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBzb3VyY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gSlNPTiBwYXRoXG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVCeUpTT05QYXRoIChkYXRhLCBwYXRoKSB7XG4gIGNvbnN0IGtleXMgPSBwYXRoLnNwbGl0KCcuJykgLy8gU3BsaXQgdGhlIHBhdGggaW50byBpbmRpdmlkdWFsIGtleXNcblxuICBsZXQgdmFsdWUgPSBkYXRhXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgL15cXGQrJC8udGVzdChrZXkpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGtleSlcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbaW5kZXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEluZGV4IGlzIG91dCBvZiBib3VuZHMsIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhc093bih2YWx1ZSwga2V5KSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gS2V5IGRvZXNuJ3QgZXhpc3QsIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBDb21waWxlcyBhIHRlbXBsYXRlIGJ5IHNlYXJjaCBhbmQgcmVwbGFjZVxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIC0gVGhlIHRlbXBsYXRlIHN0cmluZ1xuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBXaGVyZSB0ZW1wbGF0ZSBkYXRhIGxpdmVzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlVGVtcGxhdGUgKHRlbXBsYXRlLCBkYXRhKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC97eyguKj8pfX0vZywgKG1hdGNoKSA9PiB7XG4gICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9cXHMvZywgJycpXG4gICAgY29uc3QgcGF0aCA9IG1hdGNoLnNwbGl0KC97e3x9fS8pWzFdXG4gICAgcmV0dXJuIGdldFZhbHVlQnlKU09OUGF0aChkYXRhLCBwYXRoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAgKG51bWJlciwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obnVtYmVyLCBtYXgpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheSAoYXJyKSB7XG4gIGNvbnN0IHVuaXF1ZU9iamVjdHMgPSBbXVxuICBjb25zdCB1bmlxdWVWYWx1ZXMgPSBuZXcgU2V0KClcblxuICBmb3IgKGNvbnN0IG9iaiBvZiBhcnIpIHtcbiAgICBjb25zdCBvYmpTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvYmopXG4gICAgaWYgKCF1bmlxdWVWYWx1ZXMuaGFzKG9ialN0cmluZykpIHtcbiAgICAgIHVuaXF1ZVZhbHVlcy5hZGQob2JqU3RyaW5nKVxuICAgICAgdW5pcXVlT2JqZWN0cy5wdXNoKG9iailcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pcXVlT2JqZWN0c1xufVxuIiwiLyoqXG4gKiBTaW1wbGUgdHJhbnNsYXRpb24gbW9kdWxlLlxuICogQG1vZHVsZSBpMThuXG4gKi9cblxuLyoqXG4gKiBMb2NhbGUgbWVzc2FnZXNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBpMThuID0ge1xuICBlcnJvckFkZGl0aW9uYWxQcm9wZXJ0aWVzOiAnSGFzIGFkZGl0aW9uYWwgcHJvcGVydHkgXCJ7eyBwcm9wZXJ0eSB9fVwiIGJ1dCBubyBhZGRpdGlvbmFsIHByb3BlcnRpZXMgYXJlIGFsbG93ZWQuJyxcbiAgZXJyb3JBbnlPZjogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuJyxcbiAgZXJyb3JDb25zdDogJ011c3QgaGF2ZSB2YWx1ZSBvZjoge3sgY29uc3QgfX0uJyxcbiAgZXJyb3JDb250YWluczogJ011c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgaXRlbSBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hLicsXG4gIGVycm9yRGVwZW5kZW50UmVxdWlyZWQ6ICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6IHt7IGRlcGVuZGVudFJlcXVpcmVkIH19LicsXG4gIGVycm9yRW51bTogJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczoge3sgZW51bSB9fS4nLFxuICBlcnJvckV4Y2x1c2l2ZU1heGltdW06ICdNdXN0IGJlIGxlc3MgdGhhbiB7eyBleGNsdXNpdmVNYXhpbXVtIH19LicsXG4gIGVycm9yRXhjbHVzaXZlTWluaW11bTogJ011c3QgYmUgZ3JlYXRlciB0aGFuIHt7IGV4Y2x1c2l2ZU1pbmltdW0gfX0uJyxcbiAgZXJyb3JGb3JtYXQ6ICdNdXN0IGJlIGEgdmFsaWQge3sgZm9ybWF0IH19LicsXG4gIGVycm9ySXRlbXM6ICdNdXN0IGhhdmUgaXRlbXMgdGhhdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEuJyxcbiAgZXJyb3JNYXhpbXVtOiAnTXVzdCBiZSBhdCBtb3N0IHt7IG1heGltdW0gfX0uJyxcbiAgZXJyb3JNYXhJdGVtczogJ011c3QgaGF2ZSBhdCBtb3N0IHt7IG1heEl0ZW1zIH19IGl0ZW1zLicsXG4gIGVycm9yTWF4TGVuZ3RoOiAnTXVzdCBiZSBhdCBtb3N0IHt7IG1heExlbmd0aCB9fSBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgZXJyb3JNYXhQcm9wZXJ0aWVzOiAnTXVzdCBoYXZlIGF0IG1vc3Qge3sgbWF4UHJvcGVydGllcyB9fSBwcm9wZXJ0aWVzLicsXG4gIGVycm9yTWF4Q29udGFpbnM6ICdNdXN0IGNvbnRhaW4gYXQgbW9zdCB7eyBtYXhDb250YWlucyB9fSBpdGVtcyBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hLiBJdCBjdXJyZW50bHkgY29udGFpbnMge3sgY291bnRlciB9fS4nLFxuICBlcnJvck1pbkNvbnRhaW5zOiAnTXVzdCBjb250YWluIGF0IGxlYXN0IHt7IG1pbkNvbnRhaW5zIH19IGl0ZW1zIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEuIEl0IGN1cnJlbnRseSBjb250YWlucyB7eyBjb3VudGVyIH19LicsXG4gIGVycm9yTWluaW11bTogJ011c3QgYmUgYXQgbGVhc3Qge3sgbWluaW11bSB9fS4nLFxuICBlcnJvck1pbkl0ZW1zOiAnTXVzdCBoYXZlIGF0IGxlYXN0IHt7IG1pbkl0ZW1zIH19IGl0ZW1zLicsXG4gIGVycm9yTWluTGVuZ3RoOiAnTXVzdCBiZSBhdCBsZWFzdCB7eyBtaW5MZW5ndGggfX0gY2hhcmFjdGVycyBsb25nLicsXG4gIGVycm9yTWluUHJvcGVydGllczogJ011c3QgaGF2ZSBhdCBsZWFzdCB7eyBtaW5Qcm9wZXJ0aWVzIH19IHByb3BlcnRpZXMuJyxcbiAgZXJyb3JNdWx0aXBsZU9mOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiB7eyBtdWx0aXBsZU9mIH19LicsXG4gIGVycm9yTm90OiAnTXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hLicsXG4gIGVycm9yT25lT2Y6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCB7eyBjb3VudGVyIH19IG9mIHRoZSBzY2hlbWFzLicsXG4gIGVycm9yUGF0dGVybjogJ011c3QgbWF0Y2ggdGhlIHBhdHRlcm46IFwie3sgcGF0dGVybiB9fVwiLicsXG4gIGVycm9yUHJlZml4SXRlbXM6ICdJdGVtIHt7IGluZGV4IH19IGZhaWxzIHZhbGlkYXRpb24uJyxcbiAgZXJyb3JQcm9wZXJ0eU5hbWVzOiAnUHJvcGVydHkgbmFtZSBcInt7IHByb3BlcnR5TmFtZSB9fVwiIGZhaWxzIHZhbGlkYXRpb24uJyxcbiAgZXJyb3JSZXF1aXJlZDogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczoge3sgcmVxdWlyZWQgfX0uJyxcbiAgZXJyb3JUeXBlOiAnTXVzdCBiZSBvZiB0eXBlIHt7IHR5cGUgfX0uJyxcbiAgZXJyb3JVbmV2YWx1YXRlZFByb3BlcnRpZXM6ICdIYXMgaW52YWxpZCB1bmV2YWx1YXRlZCBwcm9wZXJ0eSBcInt7IHByb3BlcnR5IH19XCInLFxuICBlcnJvclVuaXF1ZUl0ZW1zOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcy4nXG59XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZS5qcydcbmltcG9ydCB7IGlzU2V0LCBjbG9uZSwgaXNBcnJheSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgRWRpdG9yQXJyYXkgZnJvbSAnLi4vZWRpdG9ycy9hcnJheS5qcydcbmltcG9ydCBFZGl0b3JBcnJheU5hdiBmcm9tICcuLi9lZGl0b3JzL2FycmF5LW5hdi5qcydcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hSXRlbXMsIGdldFNjaGVtYVByZWZpeEl0ZW1zLCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBJbnN0YW5jZUFycmF5IGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VBcnJheSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknICYmIHNjaGVtYUZvcm1hdCA9PT0gJ25hdicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQXJyYXlOYXYodGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JBcnJheSh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGxldCBzY2hlbWFcbiAgICBjb25zdCBpdGVtc0NvdW50ID0gdGhpcy5jaGlsZHJlbi5sZW5ndGhcbiAgICBjb25zdCBzY2hlbWFJdGVtcyA9IGdldFNjaGVtYUl0ZW1zKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYVByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXModGhpcy5zY2hlbWEpXG4gICAgc2NoZW1hID0gaXNTZXQoc2NoZW1hSXRlbXMpID8gc2NoZW1hSXRlbXMgOiB7fVxuXG4gICAgY29uc3QgaGFzUHJlZml4SXRlbXNTY2hlbWEgPSBpc1NldChzY2hlbWFQcmVmaXhJdGVtcykgJiYgaXNTZXQoc2NoZW1hUHJlZml4SXRlbXNbaXRlbXNDb3VudF0pXG5cbiAgICBpZiAoaGFzUHJlZml4SXRlbXNTY2hlbWEpIHtcbiAgICAgIHNjaGVtYSA9IHNjaGVtYVByZWZpeEl0ZW1zW2l0ZW1zQ291bnRdXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGl0ZW1zQ291bnQsXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICB2YWx1ZTogY2xvbmUodmFsdWUpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gIH1cblxuICByZWZyZXNoQ2hpbGRyZW4gKCkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUFycmF5XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZS5qcydcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzJ1xuaW1wb3J0IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcydcbmltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi5qcydcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZUJvb2xlYW4gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUJvb2xlYW4gZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hRm9ybWF0ID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW4odGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VCb29sZWFuXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZS5qcydcbmltcG9ydCBFZGl0b3JNdWx0aXBsZSBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlLmpzJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgY2xvbmUsXG4gIGlzT2JqZWN0LFxuICBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXNcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUVsc2UsXG4gIGdldFNjaGVtYUlmLFxuICBnZXRTY2hlbWFUaGVuXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vamVkaS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VNdWx0aXBsZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlSWZUaGVuRWxzZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTXVsdGlwbGUodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkID0gdHJ1ZVxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG4gICAgdGhpcy5pZlRoZW5FbHNlU2hlbWFzID0gW11cblxuICAgIHRoaXMudHJhdmVyc2VTY2hlbWEodGhpcy5zY2hlbWEpXG5cbiAgICBkZWxldGUgdGhpcy5zY2hlbWEuaWZcbiAgICBkZWxldGUgdGhpcy5zY2hlbWEudGhlblxuICAgIGRlbGV0ZSB0aGlzLnNjaGVtYS5lbHNlXG5cbiAgICBsZXQgaW5kZXggPSAwXG5cbiAgICB0aGlzLmlmVGhlbkVsc2VTaGVtYXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KGl0ZW0udGhlbikpIHtcbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2gobWVyZ2VEZWVwKHt9LCBjbG9uZSh0aGlzLnNjaGVtYSksIGl0ZW0udGhlbikpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChKU09OLnN0cmluZ2lmeShpdGVtLnRoZW4pKVxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG5cbiAgICAgIGlmIChpc1NldChpdGVtLmVsc2UpKSB7XG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKG1lcmdlRGVlcCh7fSwgY2xvbmUodGhpcy5zY2hlbWEpLCBpdGVtLmVsc2UpKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goSlNPTi5zdHJpbmdpZnkoaXRlbS5lbHNlKSlcbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHRoaXMuc2NoZW1hKVxuICAgIGRlbGV0ZSBzY2hlbWFDbG9uZS5pZlxuICAgIGRlbGV0ZSBzY2hlbWFDbG9uZS50aGVuXG4gICAgZGVsZXRlIHNjaGVtYUNsb25lLmVsc2VcblxuICAgIGNvbnN0IGluc3RhbmNlV2l0aG91dElmID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hQ2xvbmUsXG4gICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgfSlcblxuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgYWZ0ZXJDaGFuZ2VWYWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleChhZnRlckNoYW5nZVZhbHVlKVxuICAgICAgICBjb25zdCBtdXN0U3dpdGNoID0gZml0dGVzdEluZGV4ICE9PSB0aGlzLmluZGV4XG5cbiAgICAgICAgaWYgKG11c3RTd2l0Y2gpIHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKGFmdGVyQ2hhbmdlVmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVCZWZvcmUgPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICAgIGxldCBmdXR1cmVWYWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlQmVmb3JlKSAmJiBpc09iamVjdChmdXR1cmVWYWx1ZSkpIHtcbiAgICAgICAgICBmdXR1cmVWYWx1ZSA9IG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyh2YWx1ZUJlZm9yZSwgZnV0dXJlVmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZShmdXR1cmVWYWx1ZSwgZmFsc2UpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleChuZXdWYWx1ZSlcbiAgICAgIGNvbnN0IG11c3RTd2l0Y2ggPSBmaXR0ZXN0SW5kZXggIT09IHRoaXMuaW5kZXhcblxuICAgICAgaWYgKG11c3RTd2l0Y2gpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgpXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gaW5pdGlhbCB2YWx1ZSBhbmQgYWN0aXZlIGluc3RhbmNlXG4gICAgdGhpcy52YWx1ZSA9IGluc3RhbmNlV2l0aG91dElmLmdldFZhbHVlKClcbiAgICBpbnN0YW5jZVdpdGhvdXRJZi5kZXN0cm95KClcbiAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh0aGlzLnZhbHVlKVxuICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4KVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMuaW5kZXhdXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgfVxuXG4gIHRyYXZlcnNlU2NoZW1hIChzY2hlbWEpIHtcbiAgICBjb25zdCBzY2hlbWFJZiA9IGdldFNjaGVtYUlmKHNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFJZikpIHtcbiAgICAgIGNvbnN0IHNjaGVtYVRoZW4gPSBnZXRTY2hlbWFUaGVuKHNjaGVtYSlcbiAgICAgIGNvbnN0IHNjaGVtYUVsc2UgPSBnZXRTY2hlbWFFbHNlKHNjaGVtYSlcblxuICAgICAgdGhpcy5pZlRoZW5FbHNlU2hlbWFzLnB1c2goe1xuICAgICAgICBpZjogc2NoZW1hSWYsXG4gICAgICAgIHRoZW46IGlzU2V0KHNjaGVtYVRoZW4pID8gc2NoZW1hVGhlbiA6IHt9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLmlmVGhlbkVsc2VTaGVtYXMucHVzaCh7XG4gICAgICAgIGlmOiBzY2hlbWFJZixcbiAgICAgICAgZWxzZTogaXNTZXQoc2NoZW1hRWxzZSkgPyBzY2hlbWFFbHNlIDoge31cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpbnN0YW5jZSB0aGF0IGhhcyBsZXNzIHZhbGlkYXRpb24gZXJyb3JzXG4gICAqL1xuICBnZXRGaXR0ZXN0SW5kZXggKHZhbHVlKSB7XG4gICAgbGV0IGZpdHRlc3RJbmRleCA9IHRoaXMuaW5kZXhcblxuICAgIHRoaXMuaWZUaGVuRWxzZVNoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpZlZhbGlkYXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEuaWYsXG4gICAgICAgIGRhdGE6IHZhbHVlXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBpZkVycm9ycyA9IGlmVmFsaWRhdG9yLmdldEVycm9ycygpXG4gICAgICBpZlZhbGlkYXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCAmJiBzY2hlbWEudGhlbikge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgfVxuXG4gICAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEuZWxzZSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgZ2V0QWxsT2ZDb21iaW5hdGlvbnMgKHNjaGVtYXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXVxuXG4gICAgY29uc3QgY29tYmluZVByb3BlcnRpZXMgPSAoc2NoZW1hMSwgc2NoZW1hMikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc2NoZW1hMSwgLi4uc2NoZW1hMiB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVDb21iaW5hdGlvbnMgPSAoY3VycmVudCwgcmVtYWluaW5nKSA9PiB7XG4gICAgICBpZiAocmVtYWluaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXN1bHQucHVzaChjdXJyZW50KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV4dFNjaGVtYSA9IHJlbWFpbmluZ1swXVxuXG4gICAgICBnZW5lcmF0ZUNvbWJpbmF0aW9ucyhjb21iaW5lUHJvcGVydGllcyhjdXJyZW50LCBuZXh0U2NoZW1hKSwgcmVtYWluaW5nLnNsaWNlKDEpKVxuICAgICAgZ2VuZXJhdGVDb21iaW5hdGlvbnMoY3VycmVudCwgcmVtYWluaW5nLnNsaWNlKDEpKVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NoZW1hcy5sZW5ndGg7IGkrKykge1xuICAgICAgZ2VuZXJhdGVDb21iaW5hdGlvbnMoc2NoZW1hc1tpXSwgc2NoZW1hcy5zbGljZShpICsgMSkpXG4gICAgfVxuXG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IE9iamVjdC5rZXlzKGEpLmxlbmd0aCAtIE9iamVjdC5rZXlzKGIpLmxlbmd0aClcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUlmVGhlbkVsc2VcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlci5qcydcbmltcG9ydCB7XG4gIGlzU2V0LCBub3RTZXQsIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXlcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7XG4gIGdldFNjaGVtYURlZmF1bHQsXG4gIGdldFNjaGVtYVJlYWRPbmx5LFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKU09OIGluc3RhbmNlLlxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSmVkaSBpbnN0YW5jZSB0byB3aGljaCB0aGlzIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICogQHR5cGUge0plZGl9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2NoZW1hIHBhdGggb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgdGhpcy5qZWRpLnJvb3ROYW1lXG5cbiAgICAvKipcbiAgICAgKiBBIEpTT04gc2NoZW1hLlxuICAgICAqIEB0eXBlIHtib29sZWFufG9iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuXG4gICAgLyoqXG4gICAgICogVGhlIGpzb24gdmFsdWUgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdGhpcy52YWx1ZSA9IGlzU2V0KGNvbmZpZy52YWx1ZSkgPyBjb25maWcudmFsdWUgOiB1bmRlZmluZWRcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3RpdmUgc3RhdGUgb2YgdGhpcyBpbnN0YW5jZS4gSWYgZmFsc2UgdGhlIGVkaXRvciBpcyBub3QgcGFydGljaXBhdGluZ1xuICAgICAqIGluIHRoZSB2YWx1ZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG5cbiAgICAvKipcbiAgICAgKiBUaGUgUGFyZW50IGluc3RhbmNlIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge0luc3RhbmNlfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuXG4gICAgLyoqXG4gICAgICogQ2hpbGQgaW5zdGFuY2VzIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge0luc3RhbmNlW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIC8qKlxuICAgICAqIFRoZSBlZGl0b3IgY29udHJvbGxpbmcgdGhpcyBJbnN0YW5jZSBpZiBhbnlcbiAgICAgKiBAdHlwZSB7RWRpdG9yfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnVpID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbmQgcmVnaXN0ZXIgdGhlIGluc3RhbmNlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdzIHR5cGVcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgaWYgKG5vdFNldCh0aGlzLnZhbHVlKSkge1xuICAgICAgbGV0IHZhbHVlXG4gICAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcblxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGNvbnN0IHNjaGVtYURlZmF1bHQgPSBnZXRTY2hlbWFEZWZhdWx0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYURlZmF1bHQpKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHNjaGVtYURlZmF1bHQsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnLCBuZXdWYWx1ZSlcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG5cbiAgICByZXR1cm4gcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheShlcnJvcnMpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgaW5zdGFuY2UgaXMgcmVhZCBvbmx5XG4gICAqL1xuICBpc1JlYWRPbmx5ICgpIHtcbiAgICBsZXQgcmVhZE9ubHkgPSBmYWxzZVxuXG4gICAgaWYgKGdldFNjaGVtYVJlYWRPbmx5KHRoaXMuc2NoZW1hKSA9PT0gdHJ1ZSkge1xuICAgICAgcmVhZE9ubHkgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFyZW50ICYmIGdldFNjaGVtYVJlYWRPbmx5KHRoaXMucGFyZW50LnNjaGVtYSkgPT09IHRydWUpIHtcbiAgICAgIHJlYWRPbmx5ID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiByZWFkT25seVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UuanMnXG5pbXBvcnQgRWRpdG9yTXVsdGlwbGUgZnJvbSAnLi4vZWRpdG9ycy9tdWx0aXBsZS5qcydcbmltcG9ydCB7XG4gIGlzU2V0LFxuICBpc0FycmF5LFxuICBkaWZmZXJlbnQsXG4gIG5vdFNldCxcbiAgY2xvbmUsXG4gIG1lcmdlRGVlcFxufSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYU9uZU9mLFxuICBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU11bHRpcGxlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VNdWx0aXBsZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTXVsdGlwbGUodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChnZXRTY2hlbWFBbnlPZih0aGlzLnNjaGVtYSkpIHx8IGlzU2V0KGdldFNjaGVtYU9uZU9mKHRoaXMuc2NoZW1hKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IGlzU2V0KGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSkgPyBnZXRTY2hlbWFBbnlPZih0aGlzLnNjaGVtYSkgOiBnZXRTY2hlbWFPbmVPZih0aGlzLnNjaGVtYSlcbiAgICAgIGNvbnN0IHNjaGVtYUNvcHkgPSBjbG9uZSh0aGlzLnNjaGVtYSlcbiAgICAgIGRlbGV0ZSBzY2hlbWFDb3B5WydhbnlPZiddXG4gICAgICBkZWxldGUgc2NoZW1hQ29weVsnb25lT2YnXVxuICAgICAgZGVsZXRlIHNjaGVtYUNvcHlbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLnNjaGVtYUNvcHksIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgaWYgKHRoaXMuamVkaS5yZWZQYXJzZXIpIHtcbiAgICAgICAgICBzY2hlbWEgPSB0aGlzLmplZGkucmVmUGFyc2VyLmV4cGFuZChzY2hlbWEpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICBjb25zdCBzd2l0Y2hlclRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHNjaGVtYSwgJ3N3aXRjaGVyVGl0bGUnKVxuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHNjaGVtYSlcblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hVGl0bGUpKSB7XG4gICAgICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWFUaXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHN3aXRjaGVyVGl0bGUpKSB7XG4gICAgICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzd2l0Y2hlclRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHNjaGVtYVR5cGUpKSB7XG4gICAgICBzY2hlbWFUeXBlLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gbWVyZ2VEZWVwKHRoaXMuc2NoZW1hKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYW55JyB8fCAhc2NoZW1hVHlwZSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjbG9uZSh0aGlzLnNjaGVtYSlcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnT2JqZWN0JywgJ0FycmF5JywgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICAgIHZhbHVlOiBjbG9uZSh0aGlzLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWUpKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHRoaXMudmFsdWUsIGZhbHNlKVxuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub2ZmKCdjaGFuZ2UnKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh0aGlzLnZhbHVlKVxuICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4LCB0aGlzLnZhbHVlKVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKGluZGV4LCB2YWx1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1tpbmRleF1cblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCksIHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh0aGlzLnZhbHVlKVxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIHRoaXMudmFsdWUpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpbnN0YW5jZSB0aGF0IGhhcyBsZXNzIHZhbGlkYXRpb24gZXJyb3JzXG4gICAqL1xuICBnZXRGaXR0ZXN0SW5kZXggKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBmaXR0ZXN0SW5kZXhcbiAgICBsZXQgY2hhbXBpb25FcnJvcnNcblxuICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgdGhpcy5pbnN0YW5jZXMpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlRXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTXVsdGlwbGVcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlLmpzJ1xuaW1wb3J0IEVkaXRvck51bGwgZnJvbSAnLi4vZWRpdG9ycy9udWxsLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU51bGwgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU51bGwgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bGwodGhpcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU51bGxcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlLmpzJ1xuaW1wb3J0IEVkaXRvck51bWJlckVudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzJ1xuaW1wb3J0IEVkaXRvck51bWJlckVudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMnXG5pbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLmpzJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTnVtYmVyIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VOdW1iZXIgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgdHlwZUlzTnVtZXJpYyA9IHNjaGVtYVR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJ1xuXG4gICAgaWYgKHR5cGVJc051bWVyaWMgJiYgaXNTZXQoc2NoZW1hRW51bSkgJiYgc2NoZW1hRm9ybWF0ID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlckVudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAodHlwZUlzTnVtZXJpYyAmJiBpc1NldChzY2hlbWFFbnVtKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0KHRoaXMpXG4gICAgfSBlbHNlIGlmICh0eXBlSXNOdW1lcmljKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU51bWJlclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UuanMnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGlzT2JqZWN0LCBoYXNPd24sIGNsb25lIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBFZGl0b3JPYmplY3RHcmlkIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LWdyaWQuanMnXG5pbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LmpzJ1xuaW1wb3J0IEVkaXRvck9iamVjdE5hdiBmcm9tICcuLi9lZGl0b3JzL29iamVjdC1uYXYuanMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCxcbiAgZ2V0U2NoZW1hRm9ybWF0LFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVByb3BlcnRpZXMsXG4gIGdldFNjaGVtYVJlcXVpcmVkLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gSW5zdGFuY2VPYmplY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU9iamVjdCBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFDb250cm9sID0gdGhpcy5zY2hlbWFbJ3gtY29udHJvbCddXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hRm9ybWF0ID09PSAnZ3JpZCcpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0R3JpZCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hQ29udHJvbCA9PT0gJ25hdicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0TmF2KHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0ge31cbiAgICBjb25zdCBzY2hlbWFQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUHJvcGVydGllcyh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFQcm9wZXJ0aWVzKSkge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hUHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHNjaGVtYVByb3BlcnRpZXNba2V5XVxuICAgICAgICB0aGlzLnByb3BlcnRpZXNba2V5XSA9IHsgc2NoZW1hIH1cblxuICAgICAgICBsZXQgbXVzc3RDcmVhdGVDaGlsZCA9IHRydWVcblxuICAgICAgICBjb25zdCBkZWFjdGl2YXRlTm9uUmVxdWlyZWQgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5zY2hlbWEsICdkZWFjdGl2YXRlTm9uUmVxdWlyZWQnKVxuICAgICAgICBjb25zdCBzY2hlbWFEZWFjdGl2YXRlTm9uUmVxdWlyZWQgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnZGVhY3RpdmF0ZU5vblJlcXVpcmVkJylcblxuICAgICAgICBpZiAodGhpcy5pc05vdFJlcXVpcmVkKGtleSkgJiYgaXNTZXQoZGVhY3RpdmF0ZU5vblJlcXVpcmVkKSAmJiBkZWFjdGl2YXRlTm9uUmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBtdXNzdENyZWF0ZUNoaWxkID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzTm90UmVxdWlyZWQoa2V5KSAmJiBpc1NldChzY2hlbWFEZWFjdGl2YXRlTm9uUmVxdWlyZWQpICYmIHNjaGVtYURlYWN0aXZhdGVOb25SZXF1aXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG11c3N0Q3JlYXRlQ2hpbGQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG11c3N0Q3JlYXRlQ2hpbGQpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBzY2hlbWFSZXF1aXJlZCA9IGdldFNjaGVtYVJlcXVpcmVkKHRoaXMuc2NoZW1hKVxuXG4gICAgcmV0dXJuIGlzU2V0KHNjaGVtYVJlcXVpcmVkKSAmJiBzY2hlbWFSZXF1aXJlZC5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkKHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgdmFsdWU6IGNsb25lKHZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgZGVhY3RpdmF0ZU5vblJlcXVpcmVkID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuc2NoZW1hLCAnZGVhY3RpdmF0ZU5vblJlcXVpcmVkJylcblxuICAgIGlmICh0aGlzLmlzTm90UmVxdWlyZWQoa2V5KSAmJiBpc1NldChkZWFjdGl2YXRlTm9uUmVxdWlyZWQpICYmIGRlYWN0aXZhdGVOb25SZXF1aXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBpc05vdFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhdGhpcy5pc1JlcXVpcmVkKHByb3BlcnR5KSAmJiAhdGhpcy5pc0RlcGVuZGVudFJlcXVpcmVkKHByb3BlcnR5KVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHt9LCBrZXksIHZhbHVlW2tleV0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU9iamVjdFxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UuanMnXG5pbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLmpzJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMnXG5pbXBvcnQgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEuanMnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZVN0cmluZyBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBpc1NldChzY2hlbWFFbnVtKSAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBzY2hlbWFGb3JtYXQgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nVGV4dGFyZWEodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnICYmIGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ0VudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZyh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVN0cmluZ1xuIiwiaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5pbXBvcnQgSW5zdGFuY2VJZlRoZW5FbHNlIGZyb20gJy4vaW5zdGFuY2VzL2lmLXRoZW4tZWxzZS5qcydcbmltcG9ydCBJbnN0YW5jZU11bHRpcGxlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlLmpzJ1xuaW1wb3J0IEluc3RhbmNlQm9vbGVhbiBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuLmpzJ1xuaW1wb3J0IEluc3RhbmNlT2JqZWN0IGZyb20gJy4vaW5zdGFuY2VzL29iamVjdC5qcydcbmltcG9ydCBJbnN0YW5jZUFycmF5IGZyb20gJy4vaW5zdGFuY2VzL2FycmF5LmpzJ1xuaW1wb3J0IEluc3RhbmNlU3RyaW5nIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZy5qcydcbmltcG9ydCBJbnN0YW5jZU51bWJlciBmcm9tICcuL2luc3RhbmNlcy9udW1iZXIuanMnXG5pbXBvcnQgSW5zdGFuY2VOdWxsIGZyb20gJy4vaW5zdGFuY2VzL251bGwuanMnXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc1NldCxcbiAgbm90U2V0XG59IGZyb20gJy4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUFueU9mLFxuICBnZXRTY2hlbWFFbHNlLFxuICBnZXRTY2hlbWFJZixcbiAgZ2V0U2NoZW1hT25lT2YsXG4gIGdldFNjaGVtYVRoZW4sXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSmVkaSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgSmVkaSBpbnN0YW5jZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge29iamVjdHxib29sZWFufSBvcHRpb25zLnNjaGVtYSAtIEEgSlNPTiBzY2hlbWFcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNvbnRhaW5lciAtIFdoZXJlIHRoZSBVSSBjb250cm9scyB3aWxsIGJlIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRoZW1lIC0gSG93IHRoZSBVSSBjb250cm9scyB3aWxsIGJlIHJlbmRlcmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgcmVmUGFyc2VyOiBudWxsLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICBzaG93RXJyb3JzOiAnY2hhbmdlJyxcbiAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgIHZhbGlkYXRlRm9ybWF0OiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICAvKipcbiAgICAgKiBSb290cyBzeW1ib2wgdXNlZCBpbiBwYXRoc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3ROYW1lID0gJyMnXG5cbiAgICAvKipcbiAgICAgKiBTZXBhcmF0b3Igc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wYXRoU2VwYXJhdG9yID0gJy8nXG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIHJlZ2lzdGVyZWQgaW5zdGFuY2VzXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW5zdGFuY2VzID0ge31cblxuICAgIC8qKlxuICAgICAqIFRoZSByb290IGVkaXRvclxuICAgICAqIEB0eXBlIHtJbnN0YW5jZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucm9vdCA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIFRoZSBUaGVtZSBpbnN0YW5jZSB1c2VkIHRvIGdlbmVyYXRlIGVkaXRvcnMgdXNlciBpbnRlcmZhY2VzXG4gICAgICogQHR5cGUge1RoZW1lfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50aGVtZSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIFRoZSBWYWxpZGF0b3IgaW5zdGFuY2UgdXNlZCB0byB2YWxpZGF0ZSBpbnN0YW5jZSB2YWx1ZXNcbiAgICAgKiBAdHlwZSB7VmFsaWRhdG9yfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0b3IgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBBIGpzb24gc2NoZW1hIHVzZWRcbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2NoZW1hID0ge31cblxuICAgIC8qKlxuICAgICAqIEEgUmVmUGFyc2VyIGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlZlBhcnNlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVmUGFyc2VyID0gdGhpcy5vcHRpb25zLnJlZlBhcnNlciA/IHRoaXMub3B0aW9ucy5yZWZQYXJzZXIgOiBudWxsXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMuc2NoZW1hID0gdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcih7IHJlZlBhcnNlcjogdGhpcy5yZWZQYXJzZXIsIHZhbGlkYXRlRm9ybWF0OiB0aGlzLm9wdGlvbnMudmFsaWRhdGVGb3JtYXQgfSlcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucm9vdE5hbWVcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5kYXRhKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5kYXRhLCBmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMuYmluZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIGJpbmRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGlkZGVuSW5wdXQpIHtcbiAgICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdob3NlIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIGNvbnN0IGhpZGRlbkNvbnRyb2wgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IGhpZGRlbkNvbnRyb2wuaW5wdXRcbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcbiAgICB0aGlzLmhpZGRlbklucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBqc29uIGluc3RhbmNlIGFuZCBkZXJlZmVyZW5jZSBzY2hlbWEgb24gdGhlIGZseSBpZiBuZWVkZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgaWYgKHRoaXMucmVmUGFyc2VyKSB7XG4gICAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZXhwYW5kKGNvbmZpZy5zY2hlbWEsIGNvbmZpZy5wYXRoKVxuICAgIH1cbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZShjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYU9uZU9mID0gZ2V0U2NoZW1hT25lT2YoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFBbnlPZiA9IGdldFNjaGVtYUFueU9mKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hSWYgPSBnZXRTY2hlbWFJZihjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYVRoZW4gPSBnZXRTY2hlbWFUaGVuKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRWxzZSA9IGdldFNjaGVtYUVsc2UoY29uZmlnLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFBbnlPZikgfHwgaXNTZXQoc2NoZW1hT25lT2YpIHx8IHNjaGVtYVR5cGUgPT09ICdhbnknIHx8IGlzQXJyYXkoc2NoZW1hVHlwZSkgfHwgbm90U2V0KHNjaGVtYVR5cGUpKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlTXVsdGlwbGUoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWFJZikgJiYgKGlzU2V0KHNjaGVtYVRoZW4pIHx8IGlzU2V0KHNjaGVtYUVsc2UpKSkge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZUlmVGhlbkVsc2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU9iamVjdChjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VBcnJheShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlU3RyaW5nKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlTnVtYmVyKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlQm9vbGVhbihjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU51bGwoY29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBnZXRFcnJvcnMgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5pbnN0YW5jZS5nZXRFcnJvcnMoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIiwiY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucmVmcyA9IHt9XG4gIH1cblxuICBhc3luYyBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgYXdhaXQgdGhpcy50cmF2ZXJzZUV4dGVybmFsKHNjaGVtYSlcbiAgICB0aGlzLnRyYXZlcnNlTG9jYWwoc2NoZW1hKVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYXZlcnNlcyB0aGUgZ2l2ZW4gc2NoZW1hIHJlY3Vyc2l2ZWx5IGFuZCBmb3IgZWFjaCBzY2hlbWEgd2l0aCAkcmVmXG4gICAqIGFkZCBhIG5ldyBwcm9wZXJ0eSBpbiB0aGUgdGhpcy5yZWZzIG9iamVjdCB3aXRoIGtleSBiZWluZyB0aGUganNvbiBwYXRoIHRvIHRoYXQgc2NoZW1hLlxuICAgKiBJbml0aWFsbHkgdGhlIGFkZGVkIHByb3BlcnRpZXMgd2lsbCBoYWJlIGEgdmFsdWUgb2YgbnVsbC4gVGhpcyB2YWx1ZSB3aWxsIGJlIGxhdGVyXG4gICAqIHJlcGxhY2VkIHdpdGggdGhlIHJlc29sdmVkIHNjaGVtYSBmb3IgdGhhdCBqc29uIHBhdGggdXNpbmcgcmVzb2x2ZUV4dGVybmFsKCkgYW5kIHJlc29sdmVMb2NhbCgpLlxuICAgKlxuICAgKiBJdCBhbHNvIGFkZHMgYSBuZXcgcHJvcGVydHkgaW4gdGhlIHRoaXMucmVmcyBvYmplY3Qgd2l0aCBrZXkgYmVpbmcgdGhlIGpzb24gcGF0aCB0byB0aGF0IHNjaGVtYVxuICAgKiBhbmQgdmFsdWUgYmVpbmcgdGhlIHNjaGVtYS5cbiAgICogQHBhcmFtIHNjaGVtYVxuICAgKiBAcGFyYW0gcGF0aFxuICAgKi9cbiAgYXN5bmMgdHJhdmVyc2VFeHRlcm5hbCAoc2NoZW1hLCBwYXRoID0gJyMnKSB7XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEgIT09ICdvYmplY3QnIHx8IHNjaGVtYSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc2NoZW1hKSkge1xuICAgICAgY29uc3QgbmV4dFBhdGggPSBwYXRoID8gYCR7cGF0aH0vJHtrZXl9YCA6IGAvJHtrZXl9YFxuXG4gICAgICBpZiAodGhpcy5oYXNSZWYoc2NoZW1hKSkge1xuICAgICAgICBjb25zdCByZWYgPSBzY2hlbWFbJyRyZWYnXVxuXG4gICAgICAgIGlmICh0aGlzLnJlZnNbcmVmXSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWZzW3JlZl0gPSBudWxsXG5cbiAgICAgICAgaWYgKHRoaXMuaGFzRXh0ZXJuYWxSZWYoc2NoZW1hKSkge1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVkU2NoZW1hID0gYXdhaXQgdGhpcy5yZXNvbHZlRXh0ZXJuYWwoc2NoZW1hKVxuICAgICAgICAgIGF3YWl0IHRoaXMudHJhdmVyc2VFeHRlcm5hbChyZXNvbHZlZFNjaGVtYSwgbmV4dFBhdGgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWZzW3BhdGhdID0gc2NoZW1hXG5cbiAgICAgIGF3YWl0IHRoaXMudHJhdmVyc2VFeHRlcm5hbCh2YWx1ZSwgbmV4dFBhdGgpXG4gICAgfVxuICB9XG5cbiAgdHJhdmVyc2VMb2NhbCAoc2NoZW1hLCBwYXRoID0gJyMnKSB7XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEgIT09ICdvYmplY3QnIHx8IHNjaGVtYSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc2NoZW1hKSkge1xuICAgICAgY29uc3QgbmV4dFBhdGggPSBwYXRoID8gYCR7cGF0aH0vJHtrZXl9YCA6IGAvJHtrZXl9YFxuXG4gICAgICBpZiAodGhpcy5oYXNSZWYoc2NoZW1hKSkge1xuICAgICAgICBjb25zdCByZWYgPSBzY2hlbWFbJyRyZWYnXVxuXG4gICAgICAgIGlmICh0aGlzLnJlZnNbcmVmXSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0V4dGVybmFsUmVmKHNjaGVtYSkpIHtcbiAgICAgICAgICBjb25zdCByZXNvbHZlZFNjaGVtYSA9IHRoaXMucmVzb2x2ZUxvY2FsKHNjaGVtYSlcbiAgICAgICAgICB0aGlzLnRyYXZlcnNlTG9jYWwocmVzb2x2ZWRTY2hlbWEsIG5leHRQYXRoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhdmVyc2VMb2NhbCh2YWx1ZSwgbmV4dFBhdGgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggdGhlIHRoaXMucmVmcyBvYmplY3Qga2V5cy4gSWYgdGhlIGtleSBpcyBhbiB1cmkgY29udGFpbmluZyBcImh0dHBcIiBvciBcImh0dHBzXCIgdGhlblxuICAgKiB1c2VzIHRoYXQga2V5IGFzIHRoZSB1cmwgaW4gYSBodHRwIHJlcXVlc3QgdG8gcmV0cmlldmUgdGhlIGV4dGVybmFsIHNjaGVtYS4gVGhlIHJldHJpZXZlZCBzY2hlbWFcbiAgICogd2lsbCBiZSB1c2VkIGZvciB0aGUgdmFsdWUgb2YgdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgYXN5bmMgcmVzb2x2ZUV4dGVybmFsIChzY2hlbWEpIHtcbiAgICBjb25zdCByZWYgPSBzY2hlbWFbJyRyZWYnXVxuICAgIGNvbnN0IHJlc29sdmVkU2NoZW1hID0gYXdhaXQgdGhpcy5sb2FkKHJlZilcbiAgICB0aGlzLnJlZnNbcmVmXSA9IHJlc29sdmVkU2NoZW1hXG4gICAgcmV0dXJuIHJlc29sdmVkU2NoZW1hXG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCB0aGUgdGhpcy5yZWZzIG9iamVjdCBrZXlzIGFuZCByZXNvbHZlIGFsbCBzY2hlbWFzIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoaXMucmVmcyBvYmplY3RcbiAgICovXG4gIHJlc29sdmVMb2NhbCAoc2NoZW1hKSB7XG4gICAgY29uc3QgcmVmID0gc2NoZW1hWyckcmVmJ11cblxuICAgIGxldCByZXNvbHZlZFNjaGVtYSA9IG51bGxcblxuICAgIGlmICh0aGlzLnJlZnNbcmVmXSkge1xuICAgICAgcmVzb2x2ZWRTY2hlbWEgPSB0aGlzLnJlZnNbcmVmXVxuICAgICAgdGhpcy5yZWZzW3JlZl0gPSByZXNvbHZlZFNjaGVtYVxuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZFNjaGVtYVxuICB9XG5cbiAgaGFzUmVmIChzY2hlbWEpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNjaGVtYVsnJHJlZiddICE9PSAndW5kZWZpbmVkJ1xuICB9XG5cbiAgaGFzRXh0ZXJuYWxSZWYgKHNjaGVtYSkge1xuICAgIGNvbnN0IHJlZiA9IHNjaGVtYVsnJHJlZiddXG5cbiAgICBpZiAodHlwZW9mIHJlZiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiByZWYuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHJlZi5zdGFydHNXaXRoKCdodHRwcycpXG4gIH1cblxuICBpc0NpcmN1bGFyUmVmIChyZWYpIHtcbiAgICBjb25zdCB0ZXN0ID0gYFwiJHJlZlwiOlwiJHtyZWZ9XCJgXG4gICAgY29uc3QgcmVmU2NoZW1hID0gdGhpcy5yZWZzW3JlZl1cbiAgICBjb25zdCBzY2hlbWFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyZWZTY2hlbWEpXG4gICAgcmV0dXJuIHNjaGVtYVN0cmluZy5pbmNsdWRlcyh0ZXN0KVxuICB9XG5cbiAgaXNPYmplY3QgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbiAgfVxuXG4gIGV4cGFuZCAoc2NoZW1hKSB7XG4gICAgY29uc3QgY2xvbmVTY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNjaGVtYSkpXG5cbiAgICBpZiAodGhpcy5pc09iamVjdChjbG9uZVNjaGVtYSkgJiYgJyRyZWYnIGluIGNsb25lU2NoZW1hKSB7XG4gICAgICBjb25zdCByZWYgPSBjbG9uZVNjaGVtYS4kcmVmXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJyRyZWYnXVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucmVmc1tyZWZdLCBjbG9uZVNjaGVtYSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVTY2hlbWFcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIHNjaGVtYSB3aXRoIGEgc3luY2hyb25vdXMgaHR0cCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmlcbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIGFzeW5jIGxvYWQgKHVyaSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSlcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nJywgdXJpLCBlcnJvcilcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwMyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwMyBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1kZWZhdWx0JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnaDUnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgncHVsbC1sZWZ0JylcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXJnaW46IDA7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsnKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtcmlnaHQnKVxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgaHRtbC5zdHlsZS5jbGVhciA9ICdib3RoJ1xuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnRpdGxlSGlkZGVuKSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGJvZHksIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ3JhZGlvJylcblxuICAgICAgYm9keS5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wteHMtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLW9mZnNldC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXN0YWNrZWQnKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCduYXYtc3RhY2tlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcblxuICAgIGlmIChjb25maWcuYWN0aXZlKSB7XG4gICAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHRhYi5saW5rLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAndGFiJylcbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luJylcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICB2aXN1YWxseUhpZGRlbiAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gIH1cblxuICB2aXN1YWxseVZpc2libGUgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdoNicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1sZWZ0JylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgncHktMicpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1lbmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBib2R5LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBib2R5LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbHVtbkNsYXNzIChzaXplLCBjb2xzKSB7XG4gICAgcmV0dXJuICdjb2wtJyArIHNpemUgKyAnLScgKyBjb2xzXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KHhzLCBtZCwgb2Zmc2V0TWQpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdvZmZzZXQtbWQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KClcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29sdW1uJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1jb2x1bW4nKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG4gICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKVxuXG4gICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKVxuICAgIHRhYi5saW5rLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAndGFiJylcblxuICAgIGlmIChjb25maWcuYWN0aXZlKSB7XG4gICAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICB2aXN1YWxseUhpZGRlbiAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gIH1cblxuICB2aXN1YWxseVZpc2libGUgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdoNicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdweS0yJylcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWVuZCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnRpdGxlSGlkZGVuKSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGJvZHksIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1zZWxlY3QnKVxuICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIHZpc3VhbGx5SGlkZGVuIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICB9XG5cbiAgdmlzdWFsbHlWaXNpYmxlIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseS1oaWRkZW4nKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiLyoqXG4gKiBMaXN0cyBvZiBodG1sIGNsYXNzZXMgdXNlZCBmb3IgaWNvbnMuXG4gKiBAbW9kdWxlIGljb25zXG4gKi9cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGdseXBoaWNvbnMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBnbHlwaGljb25zID0ge1xuICBwcm9wZXJ0aWVzOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0JyxcbiAgZGVsZXRlOiAnZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaCcsXG4gIGFkZDogJ2dseXBoaWNvbiBnbHlwaGljb24tcGx1cycsXG4gIG1vdmVVcDogJ2dseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2dseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGJvb3RzdHJhcC1pY29ucyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGJvb3RzdHJhcEljb25zID0ge1xuICBwcm9wZXJ0aWVzOiAnYmkgYmktY2FyZC1saXN0JyxcbiAgZGVsZXRlOiAnYmkgYmktdHJhc2gyJyxcbiAgYWRkOiAnYmkgYmktcGx1cycsXG4gIG1vdmVVcDogJ2JpIGJpLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdiaSBiaS1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWUzIGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWUzID0ge1xuICBwcm9wZXJ0aWVzOiAnaWNvbi1saXN0JyxcbiAgZGVsZXRlOiAnaWNvbi10cmFzaCcsXG4gIGFkZDogJ2ljb24tcGx1cycsXG4gIG1vdmVVcDogJ2ljb24tYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ljb24tYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lNCBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNCA9IHtcbiAgcHJvcGVydGllczogJ2ZhIGZhLWxpc3QnLFxuICBkZWxldGU6ICdmYSBmYS10cmFzaC1vJyxcbiAgYWRkOiAnZmEgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYSBmYS1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWU1IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU1ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmFzIGZhLWxpc3QnLFxuICBkZWxldGU6ICdmYXMgZmEtdHJhc2gnLFxuICBhZGQ6ICdmYXMgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhcyBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmFzIGZhLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250YXdlc29tZTYgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTYgPSB7XG4gIHByb3BlcnRpZXM6ICdmYS1zb2xpZCBmYS1saXN0JyxcbiAgZGVsZXRlOiAnZmEtc29saWQgZmEtdHJhc2gnLFxuICBhZGQ6ICdmYS1zb2xpZCBmYS1wbHVzJyxcbiAgbW92ZVVwOiAnZmEtc29saWQgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhLXNvbGlkIGZhLWFycm93LWRvd24nXG59XG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVGhlbWUge1xuICBjb25zdHJ1Y3RvciAoaWNvbnMgPSBudWxsKSB7XG4gICAgdGhpcy5pY29ucyA9IGljb25zXG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSB0cnVlXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0cyBzb21lIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpY29uIGVsZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEljb24gKG5hbWUpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgY29uc3QgaWNvbkNsYXNzZXMgPSB0aGlzLmljb25zW25hbWVdLnNwbGl0KCcgJylcblxuICAgIGlmIChpY29uQ2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpY29uQ2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGljb25cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHdyYXAgdGhlIGVkaXRvciBVSSBlbGVtZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGdyb3VwIHNldmVyYWwgY29udHJvbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItZmllbGRzZXQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIGNhcHRpb24gZm9yIHRoZSBjb250ZW50IG9mIGl0cyBwYXJlbnQgZmllbGRzZXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBjb25zdCBsZWdlbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWxlZ2VuZCcpXG4gICAgbGVnZW5kVGV4dC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1sZWdlbmQtdGV4dCcpXG4gICAgbGVnZW5kLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgJyNsZWdlbmQtJyArIGNvbmZpZy5pZClcbiAgICBsZWdlbmRUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgbGVnZW5kVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJyNsZWdlbmQtJyArIGNvbmZpZy5pZClcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQobGVnZW5kVGV4dClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb21wbGV4IGVkaXRvcnMgbGlrZSBhcnJheXMsIG9iamVjdHMgYW5kIG11bHRpcGxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNhcmQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogSGVhZGVyIGZvciBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEhlYWRlciAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jYXJkLWhlYWRlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJvZHkgZm9yIHRoZSBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhcnJheSBzcGVjaWZpYyBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGNoaWxkIGVkaXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkcmVuLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1lc3NhZ2VzU2xvdCAoY29uZmlnID0ge30pIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYXRvbWljJywgJ2ZhbHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpXG5cbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgY29udHJvbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIE9iamVjdEVkaXRvciBwcm9wZXJ0aWVzIHdyYXBwZXIgdmlzaWJpbGl0eVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcblxuICAgIC8vIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cykge1xuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maWcucHJvcGVydGllc0NvbnRhaW5lci5vcGVuKSB7XG4gICAgICAgIGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyLmNsb3NlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyLnNob3dNb2RhbCgpXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyB9XG5cbiAgICByZXR1cm4gdG9nZ2xlXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBwcm9wZXJ0aWVzIGVkaXRpbmcgZWxlbWVudHMgbGlrZSBwcm9wZXJ0eSBhY3RpdmF0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtc2xvdCcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBodG1sKSB7XG4gICAgICAgIGh0bWwuY2xvc2UoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3Igc2NyZWVuIHJlYWRlciBhbm5vdW5jZWQgbWVzc2FnZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNBcmlhTGl2ZSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtYXJpYS1saXZlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgncm9sZScsICdzdGF0dXMnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEEgbWVzc2FnZSB0aGF0IHdpbGwgYmUgYW5ub3VuY2VkIGJ5IHNjcmVlbiByZWFkZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFyaWFMaXZlTWVzc2FnZSAobWVzc2FnZSkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJpYS1saXZlLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgdGhpcy52aXN1YWxseUhpZGRlbihodG1sKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWFjdGl2YXRvcnMnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBidXR0b25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1idG4tZ3JvdXAnKVxuICAgIGh0bWwuc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJ1xuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnamVkaS1idG4nKVxuXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmICh0aGlzLmljb25zICYmIGNvbmZpZy5pY29uKSB7XG4gICAgICBjb25zdCBpY29uID0gdGhpcy5nZXRJY29uKGNvbmZpZy5pY29uKVxuICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgY29uZmlnLnRleHRDb250ZW50KVxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pXG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKHRleHQpXG4gICAgfVxuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpXG5cbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJhZGRcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlCdG5BZGQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtIGludG8nLFxuICAgICAgaWNvbjogJ2FkZCdcbiAgICB9KVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBZGRQcm9wZXJ0eUJ1dHRvbiAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFkZC1wcm9wZXJ0eS1idG4nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJkZWxldGVcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVsZXRlSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgZGVsZXRlSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nLFxuICAgICAgaWNvbjogJ2RlbGV0ZSdcbiAgICB9KVxuXG4gICAgZGVsZXRlSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICByZXR1cm4gZGVsZXRlSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwibW92ZSB1cFwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNb3ZlVXBJdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlVXBJdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJyxcbiAgICAgIGljb246ICdtb3ZlVXAnXG4gICAgfSlcblxuICAgIG1vdmVVcEl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgIHJldHVybiBtb3ZlVXBJdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJtb3ZlIGRvd25cIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZURvd25JdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlRG93bkl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bicsXG4gICAgICBpY29uOiAnbW92ZURvd24nXG4gICAgfSlcblxuICAgIG1vdmVEb3duSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICByZXR1cm4gbW92ZURvd25JdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgdGhlIGVkaXRvciBkZXNjcmlwdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZyA9IHt9KSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnamVkaS1kZXNjcmlwdGlvbicpXG5cbiAgICBpZiAoY29uZmlnLnRleHRDb250ZW50KSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICAvKipcbiAgICogT2JqZWN0IGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycy5cbiAgICogRWFjaCBlZGl0b3IgaXMgbWFwcGVkIHRvIGFuIG9iamVjdCBpbnN0YW5jZSBwcm9wZXJ0eS5cbiAgICogUHJvcGVydGllcyBjYW4gYmUgYWRkZWQsIGFjdGl2YXRlZCBhbmQgZGVhY3RpdmF0ZWQgZGVwZW5kaW5nIG9uIGNvbmZpZ3VyYXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE9iamVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuICAgIGNvbnN0IGFyaWFMaXZlID0gdGhpcy5nZXRQcm9wZXJ0aWVzQXJpYUxpdmUoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3QgcHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzVG9nZ2xlID0gdGhpcy5nZXRQcm9wZXJ0aWVzVG9nZ2xlKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUgKyAnICcgKyAncHJvcGVydGllcycsXG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC10b2dnbGUtJyArIGNvbmZpZy5pZCxcbiAgICAgIGljb246ICdwcm9wZXJ0aWVzJyxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXI6IHByb3BlcnRpZXNDb250YWluZXJcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc0FjdGl2YXRvcnMgPSB0aGlzLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcblxuICAgIGNvbnN0IGFkZFByb3BlcnR5Q29udHJvbCA9IHRoaXMuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIGNvbmZpZy5pZCxcbiAgICAgIGxhYmVsOiAnUHJvcGVydHknXG4gICAgfSlcblxuICAgIGNvbnN0IGFkZFByb3BlcnR5QnRuID0gdGhpcy5nZXRBZGRQcm9wZXJ0eUJ1dHRvbigpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBpZDogY29uZmlnLmlkXG4gICAgfSlcblxuICAgIGFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJvcGVydGllc0NvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIGlmIChjb25maWcuYWRkUHJvcGVydHkpIHtcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5lZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJpYUxpdmUpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnRpZXNBY3RpdmF0b3JzKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgcHJvcGVydGllc1RvZ2dsZSxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIsXG4gICAgICBhZGRQcm9wZXJ0eUNvbnRyb2wsXG4gICAgICBhZGRQcm9wZXJ0eUJ0bixcbiAgICAgIGFyaWFMaXZlLFxuICAgICAgcHJvcGVydGllc0FjdGl2YXRvcnMsXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzLlxuICAgKiBJdGVtcyBjYW4gYnZlIGFkZGVkLCBkZWxldGVkIG9yIG1vdmVkIHVwIG9yIGRvd24uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5nZXRCdG5Hcm91cCgpXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5nZXRBcnJheUJ0bkFkZCgpXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgaWQ6IGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBidG5Hcm91cCxcbiAgICAgIGFkZEJ0bixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBsZSBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMgb3B0aW9ucyB0aGF0IGNhbiBiZVxuICAgKiBzZWxlY3RlZCB3aXRoIGEgc3dpdGNoZXIgY29udHJvbC4gT25seSBvbmUgZWRpdG9yIGNhbiBiZSBhY3RpdmUvdmlzaWJsZVxuICAgKiBhdCBhIHRpbWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE11bHRpcGxlQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgdGl0bGVIaWRkZW46IGNvbmZpZy50aXRsZUhpZGRlblxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHN3aXRjaGVyID0gdGhpcy5nZXRTd2l0Y2hlcih7XG4gICAgICB2YWx1ZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHRpdGxlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIGxhYmVsOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIHRpdGxlSGlkZGVuOiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IGNvbmZpZy5yZWFkT25seVxuICAgIH0pXG5cbiAgICBzd2l0Y2hlci5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoc3dpdGNoZXIuY29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGhlYWRlcixcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBzd2l0Y2hlcixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sIGZvciBOdWxsRWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXROdWxsQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnRpdGxlSGlkZGVuKSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uLFxuICAgICAgaWQ6IGRlc2NyaXB0aW9uSWRcbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRleHRhcmVhXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LnN0eWxlLndpZHRoID0gJzEwMCUnXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkZXNjcmlwdGlvbklkXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3Qoe1xuICAgICAgaWQ6IG1lc3NhZ2VzSWRcbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpYmVkQnkgPSBtZXNzYWdlc0lkICsgJyAnICsgZGVzY3JpcHRpb25JZFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBJbnB1dCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LnN0eWxlLndpZHRoID0gJzEwMCUnXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkZXNjcmlwdGlvbklkXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3Qoe1xuICAgICAgaWQ6IG1lc3NhZ2VzSWRcbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpYmVkQnkgPSBtZXNzYWdlc0lkICsgJyAnICsgZGVzY3JpcHRpb25JZFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHJhZGlvIGdyb3VwIGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5sYWJlbCxcbiAgICAgIGlkOiBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXNJZCA9IGNvbmZpZy5pZCArICctbWVzc2FnZXMnXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCh7XG4gICAgICBpZDogbWVzc2FnZXNJZFxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkZXNjcmlwdGlvbklkXG4gICAgfSlcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGVnZW5kKVxuICAgIH1cblxuICAgIGNvbnN0IHJhZGlvQ29udHJvbHMgPSBbXVxuICAgIGNvbnN0IHJhZGlvcyA9IFtdXG4gICAgY29uc3QgbGFiZWxzID0gW11cbiAgICBjb25zdCBsYWJlbFRleHRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9scy5wdXNoKHJhZGlvQ29udHJvbClcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW9zLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGRlc2NyaWJlZEJ5ID0gbWVzc2FnZXNJZCArICcgJyArIGRlc2NyaXB0aW9uSWRcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG5cbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbGFiZWxUZXh0cy5wdXNoKGxhYmVsVGV4dClcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgbGFiZWxzLnB1c2gobGFiZWwpXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgZmllbGRzZXQsIGxlZ2VuZCwgYm9keSwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNoZWNrYm94IGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGZvcm1Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkZXNjcmlwdGlvbklkXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3Qoe1xuICAgICAgaWQ6IG1lc3NhZ2VzSWRcbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpYmVkQnkgPSBtZXNzYWdlc0lkICsgJyAnICsgZGVzY3JpcHRpb25JZFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBzZWxlY3QgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LnN0eWxlLndpZHRoID0gJzEwMCUnXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb24sXG4gICAgICBpZDogZGVzY3JpcHRpb25JZFxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KHtcbiAgICAgIGlkOiBtZXNzYWdlc0lkXG4gICAgfSlcblxuICAgIGNvbnN0IGRlc2NyaWJlZEJ5ID0gbWVzc2FnZXNJZCArICcgJyArIGRlc2NyaXB0aW9uSWRcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmliZWRCeSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB0byBzd2l0Y2ggYmV0d2VlbiBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbm90aGVyIHR5cGUgb2YgZXJyb3IgbWVzc2FnZSBjb250YWluZXIgdXNlZCBmb3IgbW9yZSBjb21wbGV4IGVkaXRvcnMgbGlrZVxuICAgKiBvYmplY3QsIGFycmF5IGFuZCBtdWx0aXBsZSBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGludmFsaWRGZWVkYmFja1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgaW52YWxpZEZlZWRiYWNrVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgaW52YWxpZEZlZWRiYWNrSWNvbi50ZXh0Q29udGVudCA9ICfimqAgJ1xuICAgIGludmFsaWRGZWVkYmFja0ljb24uY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBpbnZhbGlkRmVlZGJhY2tJY29uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrSWNvbilcbiAgICBodG1sLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFja1RleHQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWluZXIgZm9yIGNvbHVtbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgnamVkaS1yb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNvbHVtbiB0byBjb250YWluIGNvbnRlbnQgdG8gYSBzcGVjaWZpYyB3aWR0aFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wteHMtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC1tZC1vZmZzZXQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWIgbGlzdCBpcyBhIGxpc3Qgb2YgbGlua3MgdGhhdCB0cmlnZ2VycyB0YWJzIHZpc2liaWxpdHkgbmUgYXQgdGhlIHRpbWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYkxpc3QgKCkge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdqZWRpLW5hdi1saXN0JylcbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgLyoqXG4gICAqIEEgVGFiIGlzIGEgd3JhcHBlciBmb3IgY29udGVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2plZGktbmF2LWxpbmsnKVxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgY29uZmlnLmlkKVxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpbmspXG4gICAgcmV0dXJuIHsgbGlzdCwgbGluayB9XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgdGFic1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGFiQ29udGVudCAoKSB7XG4gICAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudCcpXG4gICAgcmV0dXJuIHRhYkNvbnRlbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGFiIGF0dHJpYnV0ZXMgdG8gbWFrZSBpdCB0b2dnbGVhYmxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnamVkaS10YWItcGFuZScpXG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYW4gZWxlbWVudCB2aXN1YWxseSBoaWRkZW5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHZpc3VhbGx5SGlkZGVuIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMXB4O2hlaWdodDogMXB4O3BhZGRpbmc6IDA7bWFyZ2luOiAtMXB4O292ZXJmbG93OiBoaWRkZW47Y2xpcDogcmVjdCgwLDAsMCwwKTtib3JkZXI6IDA7JylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXZlYWxzIGEgdmlzdWFsbHkgaGlkZGVuIGVsZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHZpc3VhbGx5VmlzaWJsZSAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiIsIi8qKlxuICogY29uc3RyYWlucyBhZGRpdGlvbmFsUHJvcGVydGllc1xuICovXG5cbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcywgZ2V0U2NoZW1hUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRpdGlvbmFsUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYVByb3BlcnRpZXMpID8gc2NoZW1hUHJvcGVydGllcyA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllc1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hUGF0dGVyblByb3BlcnRpZXNcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JBZGRpdGlvbmFsUHJvcGVydGllcywge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICBjb25zdHJhaW46ICdhZGRpdGlvbmFsUHJvcGVydGllcydcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlW3Byb3BlcnR5XVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgY29uc3RyYWluOiAnYWRkaXRpb25hbFByb3BlcnRpZXMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQWxsT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGFsbE9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3QgYWxsT2YgPSBnZXRTY2hlbWFBbGxPZihzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KGFsbE9mKSkge1xuICAgIGFsbE9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgc3ViU2NoZW1hRWRpdG9yID0gbmV3IEplZGkoeyByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsIHNjaGVtYTogc2NoZW1hLCBkYXRhOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgICBlcnJvcnMgPSByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5KGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUFueU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGFueU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBhbnlPZiA9IGdldFNjaGVtYUFueU9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoYW55T2YpKSB7XG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlciwgc2NoZW1hOiBzY2hlbWEsIGRhdGE6IHZhbHVlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBhbnlPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGkxOG4uZXJyb3JBbnlPZlxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdhbnlPZidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGRpZmZlcmVudCwgY29tcGlsZVRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUNvbnN0IH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIF9jb25zdCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hQ29uc3QgPSBnZXRTY2hlbWFDb25zdChzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUNvbnN0KSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWFDb25zdClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckNvbnN0LCB7XG4gICAgICAgICAgICBjb25zdDogSlNPTi5zdHJpbmdpZnkoc2NoZW1hQ29uc3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnY29uc3QnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7IGdldFNjaGVtYUNvbnRhaW5zLCBnZXRTY2hlbWFNYXhDb250YWlucywgZ2V0U2NoZW1hTWluQ29udGFpbnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGNvbnRhaW5zID0gZ2V0U2NoZW1hQ29udGFpbnMoc2NoZW1hKVxuICBjb25zdCBtaW5Db250YWlucyA9IGdldFNjaGVtYU1pbkNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3QgbWF4Q29udGFpbnMgPSBnZXRTY2hlbWFNYXhDb250YWlucyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KGNvbnRhaW5zKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbnNFZGl0b3IgPSBuZXcgSmVkaSh7IHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlciwgc2NoZW1hOiBjb250YWlucywgZGF0YTogaXRlbSB9KVxuICAgICAgY29uc3QgY29udGFpbnNFcnJvcnMgPSBjb250YWluc0VkaXRvci5nZXRFcnJvcnMoKVxuXG4gICAgICBpZiAoY29udGFpbnNFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBjb250YWluc0VkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPT09IDApXG5cbiAgICBpZiAoaXNTZXQobWluQ29udGFpbnMpKSB7XG4gICAgICBjb25zdCBtaW5Db250YWluc0ludmFsaWQgPSAoY291bnRlciA8IG1pbkNvbnRhaW5zKVxuXG4gICAgICBpZiAobWluQ29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5Db250YWlucywge1xuICAgICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyLFxuICAgICAgICAgICAgICBtaW5Db250YWluczogbWluQ29udGFpbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIGNvbnN0cmFpbjogJ21pbkNvbnRhaW5zJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JDb250YWluc10sXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBjb25zdHJhaW46ICdjb250YWlucydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQobWF4Q29udGFpbnMpKSB7XG4gICAgICBjb25zdCBtYXhDb250YWluc0ludmFsaWQgPSAoY291bnRlciA+IG1heENvbnRhaW5zKVxuXG4gICAgICBpZiAobWF4Q29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhDb250YWlucywge1xuICAgICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyLFxuICAgICAgICAgICAgICBtYXhDb250YWluczogbWF4Q29udGFpbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIGNvbnN0cmFpbjogJ21heENvbnRhaW5zJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW50UmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JEZXBlbmRlbnRSZXF1aXJlZCwge1xuICAgICAgICAgICAgZGVwZW5kZW50UmVxdWlyZWQ6IG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdkZXBlbmRlbnRSZXF1aXJlZCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGkuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXBlbmRlbnRTY2hlbWFzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGRlcGVuZGVudFNjaGVtYXMgPSBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KGRlcGVuZGVudFNjaGVtYXMpKSB7XG4gICAgT2JqZWN0LmtleXMoZGVwZW5kZW50U2NoZW1hcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50U2NoZW1hID0gZGVwZW5kZW50U2NoZW1hc1trZXldXG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLCBzY2hlbWE6IGRlcGVuZGVudFNjaGVtYSwgZGF0YTogdmFsdWUgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLmdldEVycm9ycygpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4udG1wRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2VudW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hRW51bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYUVudW0uc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRW51bSwge1xuICAgICAgICAgICAgZW51bTogSlNPTi5zdHJpbmdpZnkoc2NoZW1hRW51bSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdlbnVtJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNYXhpbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBleGNsdXNpdmVNYXhpbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChleGNsdXNpdmVNYXhpbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gZXhjbHVzaXZlTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFeGNsdXNpdmVNYXhpbXVtLCB7XG4gICAgICAgICAgICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnZXhjbHVzaXZlTWF4aW11bSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChleGNsdXNpdmVNaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gZXhjbHVzaXZlTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFeGNsdXNpdmVNaW5pbXVtLCB7XG4gICAgICAgICAgICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnZXhjbHVzaXZlTWluaW11bSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBmb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQoc2NoZW1hKVxuICBsZXQgdmFsaWRhdGVGb3JtYXQgPSB2YWxpZGF0b3IudmFsaWRhdGVGb3JtYXRcblxuICBpZiAoZ2V0U2NoZW1hT3B0aW9uKHNjaGVtYSwgJ3ZhbGlkYXRlRm9ybWF0JykpIHtcbiAgICB2YWxpZGF0ZUZvcm1hdCA9IHNjaGVtYS5vcHRpb25zLnZhbGlkYXRlRm9ybWF0XG4gIH1cblxuICBpZiAoaXNTZXQoZm9ybWF0KSAmJiBpc1N0cmluZyh2YWx1ZSkgJiYgdmFsaWRhdGVGb3JtYXQpIHtcbiAgICBsZXQgcmVnZXhwXG5cbiAgICBpZiAoZm9ybWF0ID09PSAnZW1haWwnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC9pKVxuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09ICd1cmwnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSg/OlxcLig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1KVxuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09ICd1dWlkJykge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/OnVybjp1dWlkOik/WzAtOWEtZl17OH0tKD86WzAtOWEtZl17NH0tKXszfVswLTlhLWZdezEyfSQvaSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gaXNTZXQocmVnZXhwKSAmJiAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRm9ybWF0LCB7IGZvcm1hdDogZm9ybWF0IH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ2Zvcm1hdCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7IGlzU2V0LCBub3RTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRWxzZSwgZ2V0U2NoZW1hSWYsIGdldFNjaGVtYVRoZW4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGlmVGhlbkVsc2UgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFJZiA9IGdldFNjaGVtYUlmKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hVGhlbiA9IGdldFNjaGVtYVRoZW4oc2NoZW1hKVxuICBjb25zdCBzY2hlbWFFbHNlID0gZ2V0U2NoZW1hRWxzZShzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUlmKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hVGhlbikgJiYgbm90U2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlciwgc2NoZW1hOiBzY2hlbWFJZiwgZGF0YTogdmFsdWUgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLmdldEVycm9ycygpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBsZXQgdGhlbkVycm9ycyA9IFtdXG4gICAgbGV0IGVsc2VFcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYVRoZW4pKSB7XG4gICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsIHNjaGVtYTogc2NoZW1hVGhlbiwgZGF0YTogdmFsdWUgfSlcbiAgICAgIHRoZW5FcnJvcnMgPSB0aGVuRWRpdG9yLmdldEVycm9ycygpXG4gICAgICB0aGVuRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWFFbHNlKSkge1xuICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLCBzY2hlbWE6IHNjaGVtYUVsc2UsIGRhdGE6IHZhbHVlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hSWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUlmID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUl0ZW1zLCBnZXRTY2hlbWFQcmVmaXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgaXRlbXMgPSBnZXRTY2hlbWFJdGVtcyhzY2hlbWEpXG4gIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChpdGVtcykpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHByZWZpeEl0ZW1zKSA/IHByZWZpeEl0ZW1zLmxlbmd0aCA6IDBcblxuICAgIGlmIChpdGVtcyA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JJdGVtc10sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ2l0ZW1zJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYU1heEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIG1heEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQobWF4SXRlbXMpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBtYXhJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhJdGVtcywge1xuICAgICAgICAgICAgbWF4SXRlbXM6IG1heEl0ZW1zXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbWF4SXRlbXMnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYU1heExlbmd0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhMZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1heExlbmd0aCA9IGdldFNjaGVtYU1heExlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChtYXhMZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4TGVuZ3RoLCB7XG4gICAgICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ21heExlbmd0aCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4UHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhQcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hTWF4UHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChtYXhQcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IG1heFByb3BlcnRpZXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4UHJvcGVydGllcywge1xuICAgICAgICAgICAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ21heFByb3BlcnRpZXMnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4aW11bSA9IGdldFNjaGVtYU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gbWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhpbXVtLCB7XG4gICAgICAgICAgICBtYXhpbXVtOiBtYXhpbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbWF4aW11bSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5JdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5JdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWluSXRlbXMgPSBnZXRTY2hlbWFNaW5JdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KG1pbkl0ZW1zKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgbWluSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluSXRlbXMsIHtcbiAgICAgICAgICAgIG1pbkl0ZW1zOiBtaW5JdGVtc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ21pbkl0ZW1zJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5MZW5ndGggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluTGVuZ3RoICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5MZW5ndGggPSBnZXRTY2hlbWFNaW5MZW5ndGgoc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQobWluTGVuZ3RoKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbkxlbmd0aCwge1xuICAgICAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdtaW5MZW5ndGgnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYU1pblByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWluUHJvcGVydGllcyA9IGdldFNjaGVtYU1pblByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQobWluUHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBtaW5Qcm9wZXJ0aWVzKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pblByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdtaW5Qcm9wZXJ0aWVzJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5pbXVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIG1pbmltdW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbmltdW0gPSBnZXRTY2hlbWFNaW5pbXVtKHNjaGVtYSlcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KG1pbmltdW0pKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IG1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluaW11bSwge1xuICAgICAgICAgICAgbWluaW11bTogbWluaW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ21pbmltdW0nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYU11bHRpcGxlT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbGVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbXVsdGlwbGVPZiA9IGdldFNjaGVtYU11bHRpcGxlT2Yoc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobXVsdGlwbGVPZikpIHtcbiAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBtdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gbXVsdGlwbGVPZikpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNdWx0aXBsZU9mLCB7XG4gICAgICAgICAgICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbXVsdGlwbGVPZidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFOb3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgbm90ID0gZ2V0U2NoZW1hTm90KHNjaGVtYSlcblxuICBpZiAoaXNTZXQobm90KSkge1xuICAgIGNvbnN0IG5vdEVkaXRvciA9IG5ldyBKZWRpKHsgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLCBzY2hlbWE6IG5vdCwgZGF0YTogdmFsdWUgfSlcbiAgICBjb25zdCBub3RFcnJvcnMgPSBub3RFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBub3RFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck5vdClcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbm90J1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGkuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFPbmVPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBvbmVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgb25lT2YgPSBnZXRTY2hlbWFPbmVPZihzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KG9uZU9mKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgb25lT2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLCBzY2hlbWE6IHNjaGVtYSwgZGF0YTogdmFsdWUgfSlcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gb25lT2ZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yT25lT2YsIHtcbiAgICAgICAgICAgIGNvdW50ZXI6IGNvdW50ZXJcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdvbmVPZidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUGF0dGVybiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXR0ZXJuICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBwYXR0ZXJuID0gZ2V0U2NoZW1hUGF0dGVybihzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChwYXR0ZXJuKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclBhdHRlcm4sIHtcbiAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm5cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdwYXR0ZXJuJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXR0ZXJuUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLFxuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGVkaXRvckVycm9ycyA9IGVkaXRvci5nZXRFcnJvcnMoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlczogZXJyb3IubWVzc2FnZXMsXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGggKyAnLycgKyBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgIGNvbnN0cmFpbjogJ3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7IGdldFNjaGVtYVByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBwcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQocHJlZml4SXRlbXMpKSB7XG4gICAgcHJlZml4SXRlbXMuZm9yRWFjaCgoaXRlbVNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IHZhbHVlW2luZGV4XVxuXG4gICAgICBpZiAoaXNTZXQoaXRlbVZhbHVlKSkge1xuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlciwgc2NoZW1hOiBpdGVtU2NoZW1hLCBkYXRhOiBpdGVtVmFsdWUgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLmdldEVycm9ycygpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcblxuICAgICAgICBpZiAodG1wRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclByZWZpeEl0ZW1zLCB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgIGNvbnN0cmFpbjogJ3ByZWZpeEl0ZW1zJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiLyoqXG4gKiBjb25zdHJhaW5zIHByb3BlcnR5TmFtZXNcbiAqL1xuXG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hUHJvcGVydHlOYW1lc1xufSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHlOYW1lcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hUHJvcGVydHlOYW1lcyA9IGdldFNjaGVtYVByb3BlcnR5TmFtZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hUHJvcGVydHlOYW1lcykpIHtcbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgIHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlcixcbiAgICAgICAgc2NoZW1hOiBzY2hlbWFQcm9wZXJ0eU5hbWVzLFxuICAgICAgICBkYXRhOiBwcm9wZXJ0eU5hbWVcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubGVuZ3RoID4gMFxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUHJvcGVydHlOYW1lcywgeyBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBjb25zdHJhaW46ICdwcm9wZXJ0eU5hbWVzJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFSZXF1aXJlZCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgcmVxdWlyZWQgPSBnZXRTY2hlbWFSZXF1aXJlZChzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChyZXF1aXJlZCkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgcmVxdWlyZWQuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JSZXF1aXJlZCwge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdyZXF1aXJlZCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHtcbiAgY29tcGlsZVRlbXBsYXRlLCBnZXRUeXBlLFxuICBpc0FycmF5LFxuICBpc0Jvb2xlYW4sXG4gIGlzSW50ZWdlcixcbiAgaXNOdWxsLFxuICBpc051bWJlcixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBpc1N0cmluZ1xufSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCB0eXBlID0gZ2V0U2NoZW1hVHlwZShzY2hlbWEpXG5cbiAgaWYgKHR5cGUgPT09ICdhbnknKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKGlzU2V0KHR5cGUpKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICB9XG5cbiAgICBsZXQgdmFsaWQgPSB0cnVlXG5cbiAgICBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgdmFsaWQgPSB0eXBlLnNvbWUoKHR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JUeXBlLCB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgdmFsdWVUeXBlOiBnZXRUeXBlKHZhbHVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ3R5cGUnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsIi8qKlxuICogY29uc3RyYWlucyB1bmV2YWx1YXRlZFByb3BlcnRpZXNcbiAqL1xuXG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGkuanMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFVbmV2YWx1YXRlZFByb3BlcnRpZXMsXG4gIGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFQcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFBbnlPZiwgZ2V0U2NoZW1hQWxsT2YsIGdldFNjaGVtYU9uZU9mXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiB1bmV2YWx1YXRlZFByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFVbmV2YWx1YXRlZFByb3BlcnRpZXMgPSBnZXRTY2hlbWFVbmV2YWx1YXRlZFByb3BlcnRpZXMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFBbGxPZiA9IGdldFNjaGVtYUFsbE9mKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hQW55T2YgPSBnZXRTY2hlbWFBbnlPZihzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYU9uZU9mID0gZ2V0U2NoZW1hT25lT2Yoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hVW5ldmFsdWF0ZWRQcm9wZXJ0aWVzKSkge1xuICAgIGxldCBwcm9wZXJ0aWVzID0gaXNTZXQoc2NoZW1hUHJvcGVydGllcykgPyBzY2hlbWFQcm9wZXJ0aWVzIDoge31cbiAgICBjb25zdCB1bmV2YWx1YXRlZFByb3BlcnRpZXMgPSBzY2hlbWFVbmV2YWx1YXRlZFByb3BlcnRpZXNcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzXG5cbiAgICAvLyBzZWUgdGhyb3VnaCBhbGxPZiwgYW55T2YgYW5kIG9uZU9mXG4gICAgY29uc3Qgb2ZTY2hlbWFzID0gW1xuICAgICAgc2NoZW1hQWxsT2YsXG4gICAgICBzY2hlbWFBbnlPZixcbiAgICAgIHNjaGVtYU9uZU9mXG4gICAgXVxuXG4gICAgb2ZTY2hlbWFzLmZvckVhY2goKHN1YlNjaGVtYSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHN1YlNjaGVtYSkpIHtcbiAgICAgICAgc3ViU2NoZW1hLmZvckVhY2goKHN1YnNjaGVtYSkgPT4ge1xuICAgICAgICAgIGlmIChpc1NldChzdWJzY2hlbWFbJ3Byb3BlcnRpZXMnXSkpIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSB7IC4uLnByb3BlcnRpZXMsIC4uLnN1YnNjaGVtYVsncHJvcGVydGllcyddIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yVW5ldmFsdWF0ZWRQcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgIGNvbnN0cmFpbjogJ3VuZXZhbHVhdGVkUHJvcGVydGllcydcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QodW5ldmFsdWF0ZWRQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlcixcbiAgICAgICAgICAgIHNjaGVtYTogdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgZGF0YTogdmFsdWVbcHJvcGVydHldXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IHVuZXZhbHVhdGVkUHJvcGVydGllc0Vycm9ycyA9IGVkaXRvci5nZXRFcnJvcnMoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlczogZXJyb3IubWVzc2FnZXMsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5LFxuICAgICAgICAgICAgICBjb25zdHJhaW46ICd1bmV2YWx1YXRlZFByb3BlcnRpZXMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnVuZXZhbHVhdGVkUHJvcGVydGllc0Vycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIHNvcnRPYmplY3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVW5pcXVlSXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHVuaXF1ZUl0ZW1zID0gZ2V0U2NoZW1hVW5pcXVlSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldCh1bmlxdWVJdGVtcykgJiYgdW5pcXVlSXRlbXMgPT09IHRydWUpIHtcbiAgICBjb25zdCBzZWVuID0gW11cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdmFsdWVbaV1cblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIGl0ZW0gPSBzb3J0T2JqZWN0KGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1TdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pXG4gICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSBzZWVuLnNvbWUoKHNlZW4pID0+IHNlZW4gPT09IGl0ZW1TdHJpbmdpZmllZClcblxuICAgICAgaWYgKGhhc0R1cGxpY2F0ZWRJdGVtcykge1xuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5wdXNoKGl0ZW1TdHJpbmdpZmllZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgaTE4bi5lcnJvclVuaXF1ZUl0ZW1zXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ3VuaXF1ZUl0ZW1zJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YuanMnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZi5qcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtLmpzJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcydcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0uanMnXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdC5qcydcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcy5qcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcy5qcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0uanMnXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMuanMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcydcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90LmpzJ1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mLmpzJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybi5qcydcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZC5qcydcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUuanMnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtLmpzJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YuanMnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcydcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QuanMnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMuanMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YuanMnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzLmpzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0uanMnXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtLmpzJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcydcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaWZUaGVuRWxzZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYtdGhlbi1lbHNlLmpzJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zLmpzJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zLmpzJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGguanMnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bS5qcydcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcy5qcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mLmpzJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QuanMnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YuanMnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuLmpzJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zLmpzJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkLmpzJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZS5qcydcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0uanMnXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IGlmVGhlbkVsc2UsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YuanMnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcydcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QuanMnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMuanMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YuanMnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzLmpzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0uanMnXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtLmpzJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcydcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaWZUaGVuRWxzZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYtdGhlbi1lbHNlLmpzJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zLmpzJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zLmpzJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGguanMnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bS5qcydcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcy5qcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mLmpzJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QuanMnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YuanMnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuLmpzJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zLmpzJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkLmpzJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZS5qcydcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0uanMnXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IGlmVGhlbkVsc2UsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YuanMnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcydcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QuanMnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMuanMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YuanMnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzLmpzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0uanMnXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtLmpzJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcydcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaWZUaGVuRWxzZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYtdGhlbi1lbHNlLmpzJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zLmpzJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zLmpzJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGguanMnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bS5qcydcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcy5qcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mLmpzJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QuanMnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YuanMnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuLmpzJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zLmpzJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkLmpzJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZS5qcydcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0uanMnXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyB1bmV2YWx1YXRlZFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuZXZhbHVhdGVkUHJvcGVydGllcy5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogaWZUaGVuRWxzZSxcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmV2YWx1YXRlZFByb3BlcnRpZXM6IHVuZXZhbHVhdGVkUHJvcGVydGllcyxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YuanMnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcydcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QuanMnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMuanMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YuanMnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzLmpzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0uanMnXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtLmpzJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcydcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaWZUaGVuRWxzZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYtdGhlbi1lbHNlLmpzJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zLmpzJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zLmpzJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGguanMnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bS5qcydcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcy5qcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mLmpzJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QuanMnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YuanMnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuLmpzJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zLmpzJ1xuaW1wb3J0IHsgcHJvcGVydHlOYW1lcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJvcGVydHlOYW1lcy5qcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZC5qcydcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUuanMnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtLmpzJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmV2YWx1YXRlZFByb3BlcnRpZXMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IGlmVGhlbkVsc2UsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHByb3BlcnR5TmFtZXM6IHByb3BlcnR5TmFtZXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzOiB1bmV2YWx1YXRlZFByb3BlcnRpZXMsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IGRyYWZ0MDQgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDQuanMnXG5pbXBvcnQgZHJhZnQwNiBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNi5qcydcbmltcG9ydCBkcmFmdDA3IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA3LmpzJ1xuaW1wb3J0IGRyYWZ0MjAxOTA5IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMTktMDkuanMnXG5pbXBvcnQgZHJhZnQyMDIwMTIgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcydcbmltcG9ydCB7IGhhc093biwgaXNCb29sZWFuLCBjbG9uZSwgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFZhbGlkYXRvciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5yZWZQYXJzZXIgPSBjb25maWcucmVmUGFyc2VyXG4gICAgdGhpcy52YWxpZGF0ZUZvcm1hdCA9IGNvbmZpZy52YWxpZGF0ZUZvcm1hdCA/IGNvbmZpZy52YWxpZGF0ZUZvcm1hdCA6IGZhbHNlXG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0MjAyMDEyXG5cbiAgICB0aGlzLmpzb25TY2hlbWFEcmFmdHMgPSB7XG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjJzogZHJhZnQwNCxcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA2L3NjaGVtYSMnOiBkcmFmdDA2LFxuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hIyc6IGRyYWZ0MDcsXG4gICAgICAnaHR0cHM6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQvMjAxOS0wOS9zY2hlbWEnOiBkcmFmdDIwMTkwOSxcbiAgICAgICdodHRwczovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC8yMDIwLTEyL3NjaGVtYSc6IGRyYWZ0MjAyMDEyXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIGdldEVycm9ycyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uc01lc3NhZ2VzID0gZ2V0U2NoZW1hT3B0aW9uKHNjaGVtYSwgJ21lc3NhZ2VzJylcblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gY2xvbmUoc2NoZW1hKVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBtZXNzYWdlczogaXNTZXQoc2NoZW1hT3B0aW9uc01lc3NhZ2VzKSA/IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyA6IFsnaW52YWxpZCddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9XVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZHJhZnQpLmZvckVhY2goKGNvbnN0cmFpbikgPT4ge1xuICAgICAgaWYgKGhhc093bihzY2hlbWFDbG9uZSwgY29uc3RyYWluKSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmRyYWZ0W2NvbnN0cmFpbl1cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdmFsaWRhdG9yKHRoaXMsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgICAgc2NoZW1hRXJyb3JzID0gWy4uLnNjaGVtYUVycm9ycywgLi4udmFsaWRhdG9yRXJyb3JzXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWFPcHRpb25zTWVzc2FnZXMpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2VzOiBzY2hlbWFPcHRpb25zTWVzc2FnZXMsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSmVkaSBmcm9tICcuL2plZGkuanMnXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlci9yZWYtcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEplZGksXG4gIFJlZlBhcnNlclxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9