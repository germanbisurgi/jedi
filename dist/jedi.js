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
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema),
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enableCollapseToggle'),
      startCollapsed: this.instance.jedi.options.startCollapsed || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'startCollapsed')
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
      const btnGroup = this.theme.getBtnGroup()

      child.ui.control.arrayActions.innerHTML = ''
      child.ui.control.arrayActions.appendChild(btnGroup)
      btnGroup.appendChild(deleteBtn)
      btnGroup.appendChild(moveUpBtn)
      btnGroup.appendChild(moveDownBtn)

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
 * @extends EditorBooleanCheckbox
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
 * @extends EditorBooleanCheckbox
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
 * Represents a EditorBooleanCheckbox instance.
 * @extends Editor
 */
class EditorBooleanCheckbox extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorBooleanCheckbox);


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

    let enablePropertiesToggle = false

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(this.instance.jedi.options.enablePropertiesToggle)) {
      enablePropertiesToggle = this.instance.jedi.options.enablePropertiesToggle
    }

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaOptions.enablePropertiesToggle)) {
      enablePropertiesToggle = schemaOptions.enablePropertiesToggle
    }

    this.control = this.theme.getObjectControl({
      title: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden'),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema),
      enablePropertiesToggle: enablePropertiesToggle,
      addProperty: addProperty,
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enableCollapseToggle'),
      startCollapsed: this.instance.jedi.options.startCollapsed || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'startCollapsed')
    })
  }

  addEventListeners () {
    this.control.addPropertyBtn.addEventListener('click', () => {
      const propertyName = this.control.addPropertyControl.input.value.split(' ').join('')

      const propertyNameEmpty = propertyName.length === 0

      if (propertyNameEmpty) {
        return
      }

      const propertyExist = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(this.instance.value[propertyName])

      if (propertyExist) {
        return
      }

      const schema = this.instance.getPropertySchema(propertyName)

      const child = this.instance.createChild(schema, propertyName)
      child.activate()
      this.instance.setValue(this.instance.value)
      this.control.addPropertyControl.input.value = ''

      const ariaLive = this.control.ariaLive
      ariaLive.innerHTML = ''
      const schemaTitle = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(child.schema)
      const label = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaTitle) ? schemaTitle : propertyName
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
    const schemaOptionEnablePropertiesToggle = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enablePropertiesToggle')

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.equal)(this.instance.jedi.options.enablePropertiesToggle, true) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.equal)(schemaOptionEnablePropertiesToggle, true)) {
      // todo: delete "this.properties and this.instance.properties"
      const schemaProperties = Object.keys(this.instance.properties)
      const childrenProperties = this.instance.children.map((child) => child.getKey())
      const properties = [...schemaProperties, ...childrenProperties]

      properties.forEach((property) => {
        const isRequired = this.instance.isRequired(property)
        const isDependentRequired = this.instance.isDependentRequired(property)
        const notRequired = !isRequired && !isDependentRequired
        const activatorInDom = this.propertyActivators[property]
        const ariaLive = this.control.ariaLive
        const schema = this.instance.getPropertySchema(property)

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

/***/ "./src/editors/string-awesomplete.js":
/*!*******************************************!*\
  !*** ./src/editors/string-awesomplete.js ***!
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
 * Represents a EditorStringAwesomplete instance.
 * @extends Editor
 */
class EditorStringAwesomplete extends _string_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getInputControl({
      type: 'text',
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })

    try {
      new window.Awesomplete(this.control.input, (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'awesomplete'))
      this.control.container.querySelector('.awesomplete').style.display = 'block'
    } catch (e) {
      console.error('Awesomplete is not available or not loaded correctly.', e)
    }
  }

  addEventListeners () {
  }

  refreshUI () {
    this.refreshInteractiveElements()

    // this.control.radios.forEach((radio) => {
    //   radio.checked = (radio.value === this.instance.getValue())
    // })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorStringAwesomplete);


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
/* harmony export */   getSchemaX: () => (/* binding */ getSchemaX),
/* harmony export */   getSchemaXOption: () => (/* binding */ getSchemaXOption)
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

function getSchemaXOption (schema, option) {
  return (schema['x-options'] && schema['x-options'][option]) ? schema['x-options'][option] : undefined
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
    } else if (schemaType === 'boolean' && schemaFormat === 'checkbox') {
      this.ui = new _editors_boolean_js__WEBPACK_IMPORTED_MODULE_3__["default"](this)
    } else if (schemaType === 'boolean') {
      this.ui = new _editors_boolean_enum_select_js__WEBPACK_IMPORTED_MODULE_2__["default"](this)
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

        const optionsDeactivateNonRequired = this.jedi.options.deactivateNonRequired
        const deactivateNonRequired = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaOption)(this.schema, 'deactivateNonRequired')
        const schemaDeactivateNonRequired = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaOption)(schema, 'deactivateNonRequired')

        if (this.isNotRequired(key) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(optionsDeactivateNonRequired) && optionsDeactivateNonRequired === true) {
          musstCreateChild = false
        }

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

  createChild (schema, key, value, activate = false) {
    const instance = this.jedi.createInstance({
      jedi: this.jedi,
      schema: schema,
      path: this.path + this.jedi.pathSeparator + key,
      parent: this,
      value: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.clone)(value)
    })

    this.children.push(instance)
    this.value[key] = instance.getValue()

    const deactivateNonRequired = this.jedi.options.deactivateNonRequired || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaOption)(this.schema, 'deactivateNonRequired')

    if (this.isNotRequired(key) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(deactivateNonRequired) && deactivateNonRequired === true && !activate) {
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

  getPropertySchema (propertyName) {
    let schema
    const schemaAdditionalProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaAdditionalProperties)(this.schema)
    const schemaProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaProperties)(this.schema)
    const schemaPatternProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_5__.getSchemaPatternProperties)(this.schema)

    // Determine the appropriate schema
    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaProperties) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(schemaProperties, propertyName)) {
      // If the propertyName is explicitly defined in `properties`, use it
      schema = schemaProperties[propertyName]
    } else if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaPatternProperties)) {
      // If no exact match in `properties`, check if it matches any pattern in `patternProperties`
      Object.keys(schemaPatternProperties).forEach((pattern) => {
        const regexp = new RegExp(pattern)
        if (regexp.test(propertyName)) {
          schema = schemaPatternProperties[pattern]
        }
      })
    }

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.notSet)(schema) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaAdditionalProperties)) {
      // If no match was found in `properties` or `patternProperties`, use `additionalProperties`
      schema = schemaAdditionalProperties
    }

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.notSet)(schema)) {
      schema = {}
    }

    return schema
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

    Object.keys(value).forEach((propertyName) => {
      const child = this.getChild(propertyName)

      // If a value has already a child instance
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
        const schema = this.getPropertySchema(propertyName)

        this.createChild(schema, propertyName, value[propertyName], true)
      }
    })

    // remove any children that are not included in the value
    for (let i = this.children.length - 1; i >= 0; i--) {
      const instance = this.children[i]
      const propertyName = instance.getKey()
      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.notSet)(value[propertyName])) {
        if (this.getChild(propertyName)) {
          instance.deactivate()
        } else {
          this.deleteChild(propertyName)
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
/* harmony import */ var _editors_string_awesomplete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editors/string-awesomplete.js */ "./src/editors/string-awesomplete.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");









/**
 * Represents a InstanceString instance.
 * @extends Instance
 */
class InstanceString extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_7__.getSchemaType)(this.schema)
    const schemaEnum = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_7__.getSchemaEnum)(this.schema)
    const schemaFormat = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_7__.getSchemaFormat)(this.schema)
    const awesomplete = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_7__.getSchemaXOption)(this.schema, 'awesomplete')

    if (schemaType === 'string' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_6__.isSet)(schemaEnum) && schemaFormat === 'radio') {
      this.ui = new _editors_string_enum_radio_js__WEBPACK_IMPORTED_MODULE_2__["default"](this)
    } else if (schemaType === 'string' && schemaFormat === 'textarea') {
      this.ui = new _editors_string_textarea_js__WEBPACK_IMPORTED_MODULE_4__["default"](this)
    } else if (schemaType === 'string' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_6__.isSet)(schemaEnum)) {
      this.ui = new _editors_string_enum_select_js__WEBPACK_IMPORTED_MODULE_3__["default"](this)
    } else if (schemaType === 'string' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_6__.isSet)(awesomplete)) {
      this.ui = new _editors_string_awesomplete_js__WEBPACK_IMPORTED_MODULE_5__["default"](this)
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
      enablePropertiesToggle: false,
      enableCollapseToggle: false,
      startCollapsed: false,
      deactivateNonRequired: false,
      schema: {},
      showErrors: 'change',
      data: undefined,
      validateFormat: false,
      mergeAllOf: false
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
   */
  createInstance (config) {
    const mergeAllOf = this.options.mergeAllOf || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_11__.getSchemaOption)(config.schema, 'mergeAllOf')

    if (mergeAllOf) {
      const allOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_11__.getSchemaAllOf)(config.schema)

      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_10__.isSet)(allOf)) {
        allOf.forEach((subschema) => {
          config.schema = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_10__.mergeDeep)({}, config.schema, subschema)
        })
      }
    }

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
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");


class RefParser {
  constructor () {
    this.refs = {}
    this.data = {}
  }

  async dereference (schema) {
    await this.collectRefs(schema)

    while (this.refsResolved() === false) {
      await this.collectRefs(schema)
    }
  }

  refsResolved () {
    return Object.values(this.refs).every((value) => {
      return value !== null
    })
  }

  /**
   * Traverses the given schema recursively and for each schema with $ref
   * add a new property in the this.refs object with key being the json path to that schema.
   * If the ref has no value in data will be given a value of null. This value will be later
   * replaced in a future iteration. At that time the data will be available
   * @param schema
   * @param path
   */
  async collectRefs (schema, path = '#') {
    if (typeof schema !== 'object' || schema === null) {
      return
    }

    for (const [key, value] of Object.entries(schema)) {
      const nextPath = path ? `${path}/${key}` : `/${key}`

      if (this.hasRef(schema)) {
        const ref = schema['$ref']

        if (this.isExternalRef(ref)) {
          const resolvedSchema = await this.load(ref)
          this.refs[ref] = resolvedSchema
          await this.collectRefs(resolvedSchema, nextPath)
        } else {
          this.refs[ref] = this.data[ref] ?? null
        }
      }

      this.data[path] = schema

      await this.collectRefs(value, nextPath)
    }
  }

  hasRef (schema) {
    return typeof schema['$ref'] !== 'undefined' && typeof schema['$ref'] === 'string'
  }

  isExternalRef (ref) {
    if (typeof ref !== 'string') {
      return false
    }

    return ref.startsWith('http') || ref.startsWith('https')
  }

  isObject (value) {
    return value !== null && typeof value === 'object'
  }

  expand (schema) {
    const cloneSchema = JSON.parse(JSON.stringify(schema))

    if (this.isObject(cloneSchema) && this.hasRef(cloneSchema)) {
      const ref = cloneSchema.$ref
      delete cloneSchema['$ref']
      return this.expand((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)({}, this.refs[ref], cloneSchema))
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

  getAddPropertyButton () {
    const btn = super.getAddPropertyButton()
    btn.classList.add('btn-primary')
    btn.classList.add('btn-block')
    return btn
  }

  getCollapseToggle (config) {
    const toggle = super.getCollapseToggle(config)
    toggle.setAttribute('href', '#' + config.collapseId)
    toggle.setAttribute('data-toggle', 'collapse')
    return toggle
  }

  getCollapse (config) {
    const collapse = super.getCollapse(config)
    collapse.classList.add('collapse')

    if (!config.startCollapsed) {
      collapse.classList.add('in')
    }

    return collapse
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

  getAddPropertyButton () {
    const btn = super.getAddPropertyButton()
    btn.classList.add('btn-primary')
    btn.classList.add('btn-block')
    return btn
  }

  getCollapseToggle (config) {
    const toggle = super.getCollapseToggle(config)
    toggle.setAttribute('href', '#' + config.collapseId)
    toggle.setAttribute('data-toggle', 'collapse')
    return toggle
  }

  getCollapse (config) {
    const collapse = super.getCollapse(config)
    collapse.classList.add('collapse')

    if (!config.startCollapsed) {
      collapse.classList.add('show')
    }

    return collapse
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
    html.classList.add('pb-0')
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

  getAddPropertyButton () {
    const btn = super.getAddPropertyButton()
    btn.classList.add('btn-primary')
    btn.classList.add('w-100')
    return btn
  }

  getCollapseToggle (config) {
    const toggle = super.getCollapseToggle(config)
    toggle.setAttribute('href', '#' + config.collapseId)
    toggle.setAttribute('data-bs-toggle', 'collapse')
    return toggle
  }

  getCollapse (config) {
    const collapse = super.getCollapse(config)
    collapse.classList.add('collapse')

    if (!config.startCollapsed) {
      collapse.classList.add('show')
    }

    return collapse
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
    html.classList.add('pb-0')
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
  moveDown: 'glyphicon glyphicon-arrow-down',
  collapse: 'glyphicon glyphicon-chevron-down'
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
  moveDown: 'bi bi-arrow-down',
  collapse: 'bi bi-chevron-down'
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
  moveDown: 'icon-arrow-down',
  collapse: 'icon-chevron-down'
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
  moveDown: 'fa fa-arrow-down',
  collapse: 'fa fa-chevron-down'
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
  moveDown: 'fas fa-arrow-down',
  collapse: 'fas fa-chevron-down'
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
  moveDown: 'fa-solid fa-arrow-down',
  collapse: 'fa-solid fa-chevron-down'
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
    const html = document.createElement('span')
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
   * Container that will collapse and expand to show and hide it contents
   * @private
   */
  getCollapse (config) {
    const collapse = document.createElement('div')
    collapse.classList.add('jedi-collapse')
    collapse.setAttribute('id', config.id)

    if (this.useToggleEvents && config.startCollapsed) {
      collapse.style.display = 'none'
    }

    return collapse
  }

  /**
   * Toggle button for collapse
   * @private
   */
  getCollapseToggle (config) {
    const toggle = this.getButton(config)
    toggle.classList.add('jedi-collapse-toggle')

    if (this.useToggleEvents) {
      toggle.addEventListener('click', () => {
        if (config.collapse.style.display === 'none') {
          config.collapse.style.display = 'block'
        } else {
          config.collapse.style.display = 'none'
        }
      })
    }

    let collapsed = config.startCollapsed

    toggle.style.transition = 'transform 0.1s ease'

    if (collapsed) {
      toggle.style.transform = 'rotate(90deg)'
    }

    toggle.addEventListener('click', () => {
      if (collapsed) {
        toggle.style.transform = 'rotate(0deg)'
      } else {
        toggle.style.transform = 'rotate(90deg)'
      }

      collapsed = !collapsed
    })

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
      textContent: 'Add item',
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

    const collapseId = 'collapse-' + config.id

    const collapse = this.getCollapse({
      id: collapseId,
      startCollapsed: config.startCollapsed
    })

    const collapseToggle = this.getCollapseToggle({
      textContent: config.title + ' ' + 'properties',
      id: 'collapse-toggle-' + config.id,
      icon: 'collapse',
      collapseId: collapseId,
      collapse: collapse,
      startCollapsed: config.startCollapsed
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
    container.appendChild(propertiesContainer)
    fieldset.appendChild(legend)
    fieldset.appendChild(collapse)
    collapse.appendChild(body)
    body.appendChild(description)
    body.appendChild(messages)
    legend.appendChild(actions)
    actions.appendChild(arrayActions)
    body.appendChild(childrenSlot)

    if (config.addProperty) {
      propertiesContainer.appendChild(addPropertyControl.container)
      propertiesContainer.appendChild(addPropertyBtn)
      propertiesContainer.appendChild(document.createElement('hr'))
    }

    if (config.enablePropertiesToggle) {
      actions.appendChild(propertiesToggle)
      propertiesContainer.appendChild(ariaLive)
      propertiesContainer.appendChild(propertiesActivators)
    }

    if (config.enableCollapseToggle) {
      actions.appendChild(collapseToggle)
    }

    return {
      container,
      collapse,
      collapseToggle,
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

    const collapseId = 'collapse-' + config.id

    const collapse = this.getCollapse({
      id: collapseId,
      startCollapsed: config.startCollapsed
    })

    const collapseToggle = this.getCollapseToggle({
      textContent: config.title + ' ' + 'properties',
      id: 'collapse-toggle-' + config.id,
      icon: 'collapse',
      collapseId: collapseId,
      collapse: collapse,
      startCollapsed: config.startCollapsed
    })

    container.appendChild(fieldset)
    fieldset.appendChild(legend)
    fieldset.appendChild(collapse)
    collapse.appendChild(body)
    body.appendChild(description)
    body.appendChild(messages)
    legend.appendChild(actions)
    actions.appendChild(btnGroup)
    btnGroup.appendChild(addBtn)
    actions.appendChild(arrayActions)
    body.appendChild(childrenSlot)

    if (config.enableCollapseToggle) {
      actions.appendChild(collapseToggle)
    }

    return {
      container,
      collapseToggle,
      collapse,
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
    actions.appendChild(switcher.container)
    actions.appendChild(arrayActions)
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

    return {
      container,
      fieldset,
      legend,
      body,
      radios,
      labels,
      labelTexts,
      radioControls,
      description,
      messages,
      actions,
      arrayActions
    }
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
    const container = document.createElement('span')
    const input = document.createElement('select')
    input.setAttribute('id', config.id)

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

    this.visuallyHidden(label)

    container.appendChild(label)
    container.appendChild(input)
    label.appendChild(labelText)

    return { container, input, label, labelText }
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
 * Constrains additionalProperties
 */






function additionalProperties (validator, value, schema, key, path) {
  const errors = []
  const schemaAdditionalProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAdditionalProperties)(schema)
  const schemaPatternProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaPatternProperties)(schema)
  const schemaProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaProperties)(schema)

  if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaAdditionalProperties)) {
    const properties = schemaProperties || {}
    const additionalProperties = schemaAdditionalProperties
    const patternProperties = schemaPatternProperties || {}

    Object.keys(value).forEach((property) => {
      const definedInPatternProperty = Object.keys(patternProperties).some((pattern) => {
        const regexp = new RegExp(pattern)
        return regexp.test(property)
      })

      const isDefinedInProperties = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(properties, property)

      if (!definedInPatternProperty && !isDefinedInProperties) {
        if (additionalProperties === false) {
          errors.push({
            messages: [
              (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n_js__WEBPACK_IMPORTED_MODULE_3__.i18n.errorAdditionalProperties, { property })
            ],
            path,
            constrain: 'additionalProperties'
          })
        } else if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(additionalProperties)) {
          const editor = new _jedi_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
            refParser: validator.refParser,
            schema: additionalProperties,
            data: value[property]
          })

          const additionalPropertyErrors = editor.getErrors().map((error) => ({
            messages: error.messages,
            path: `${path}.${property}`,
            constrain: 'additionalProperties'
          }))

          errors.push(...additionalPropertyErrors)
          editor.destroy()
        }
      }
    })
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
      regexp = new RegExp(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/i)
    }

    if (format === 'url') {
      regexp = new RegExp(/^(?:https?|ftp):\/\/(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:[^\s:@](?:[^\s:@-]*[^\s:@])?\.?)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3})(?::\d{2,5})?(?:\/[^\s]*)?$/i)
    }

    if (format === 'uuid') {
      regexp = new RegExp(/^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/i)
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

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxvRkFBb0Y7O0FBRWhHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksNERBQTREO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuUUE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlEQUFLO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDBCQUEwQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDBCQUEwQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG9GQUFvRjs7QUFFaEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSw0REFBNEQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pROUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxXQUFXLFlBQVksV0FBVyxhQUFhLGlCQUFpQixvQkFBb0IsVUFBVTtBQUNwSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwbkNwQjtBQUNBO0FBQ0E7O0FBRWlGO0FBQ2pEO0FBQ3dGO0FBQ3BGOztBQUU3QjtBQUNQO0FBQ0EscUNBQXFDLGlGQUE2QjtBQUNsRSxrQ0FBa0MsOEVBQTBCO0FBQzVELDJCQUEyQix1RUFBbUI7O0FBRTlDLE1BQU0sMkRBQVEsV0FBVyx3REFBSztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLG9DQUFvQyx5REFBTTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtFQUFlLENBQUMsMENBQUksOEJBQThCLFVBQVU7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVUsU0FBUywyREFBUTtBQUMzQiw2QkFBNkIsZ0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0EscUJBQXFCLEtBQUssR0FBRyxTQUFTO0FBQ3RDO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRHlFO0FBQ3pDO0FBQ3dCOztBQUVqRDtBQUNQO0FBQ0EsZ0JBQWdCLGtFQUFjOztBQUU5QixNQUFNLHdEQUFLO0FBQ1g7QUFDQSxrQ0FBa0MsZ0RBQUksR0FBRyw0RUFBNEU7QUFDckg7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0RUFBeUI7QUFDeEMsS0FBSztBQUNMOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmdDO0FBQ2M7QUFDVTtBQUNwQjs7QUFFN0I7QUFDUDtBQUNBLGdCQUFnQixrRUFBYzs7QUFFOUIsTUFBTSx3REFBSztBQUNYOztBQUVBO0FBQ0EsOEJBQThCLGdEQUFJLEdBQUcsNkRBQTZEO0FBQ2xHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEMwRTtBQUNsQjtBQUNwQjs7QUFFN0I7QUFDUDtBQUNBLHNCQUFzQixrRUFBYzs7QUFFcEMsTUFBTSx3REFBSztBQUNYLGlDQUFpQyw0REFBUztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtFQUFlLENBQUMsMENBQUk7QUFDOUI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCd0U7QUFDeEM7QUFDdUU7QUFDbkU7O0FBRTdCO0FBQ1A7QUFDQSxtQkFBbUIscUVBQWlCO0FBQ3BDLHNCQUFzQix3RUFBb0I7QUFDMUMsc0JBQXNCLHdFQUFvQjs7QUFFMUMsTUFBTSwwREFBTyxXQUFXLHdEQUFLO0FBQzdCOztBQUVBO0FBQ0EsaUNBQWlDLGdEQUFJLEdBQUcsOERBQThEO0FBQ3RHOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEsUUFBUSx3REFBSztBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0VBQWUsQ0FBQywwQ0FBSTtBQUNoQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EscUJBQXFCLDBDQUFJO0FBQ3pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxRQUFRLHdEQUFLO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrRUFBZSxDQUFDLDBDQUFJO0FBQ2hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RWlGO0FBQ2I7QUFDaEM7O0FBRTdCO0FBQ1A7QUFDQSw0QkFBNEIsOEVBQTBCOztBQUV0RCxNQUFNLDJEQUFRLFdBQVcsd0RBQUs7QUFDOUI7O0FBRUE7QUFDQSxVQUFVLHdEQUFLO0FBQ2Y7O0FBRUE7QUFDQSxrQkFBa0IseURBQU07QUFDeEIsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtFQUFlLENBQUMsMENBQUk7QUFDOUI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckN3RDtBQUN4QjtBQUNtQzs7QUFFNUQ7QUFDUDtBQUNBLDJCQUEyQiw2RUFBeUI7O0FBRXBELE1BQU0sMkRBQVEsV0FBVyx3REFBSztBQUM5QjtBQUNBLFVBQVUsd0RBQUs7QUFDZjtBQUNBLDhCQUE4QixnREFBSSxHQUFHLHNFQUFzRTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQitEO0FBQ1I7QUFDbkI7O0FBRTdCO0FBQ1A7QUFDQSxxQkFBcUIsaUVBQWE7O0FBRWxDLE1BQU0sd0RBQUs7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtFQUFlLENBQUMsMENBQUk7QUFDOUI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnlFO0FBQ047QUFDL0I7O0FBRTdCO0FBQ1A7QUFDQSwyQkFBMkIsNkVBQXlCOztBQUVwRCxNQUFNLDJEQUFRLFdBQVcsd0RBQUs7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrRUFBZSxDQUFDLDBDQUFJO0FBQzlCO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCeUU7QUFDTjtBQUMvQjs7QUFFN0I7QUFDUDtBQUNBLDJCQUEyQiw2RUFBeUI7O0FBRXBELE1BQU0sMkRBQVEsV0FBVyx3REFBSztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtFQUFlLENBQUMsMENBQUk7QUFDOUI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJ5RTtBQUNDO0FBQ3RDOztBQUU3QjtBQUNQO0FBQ0EsaUJBQWlCLG1FQUFlO0FBQ2hDOztBQUVBLE1BQU0sbUVBQWU7QUFDckI7QUFDQTs7QUFFQSxNQUFNLHdEQUFLLFlBQVksMkRBQVE7QUFDL0I7O0FBRUE7QUFDQSxxREFBcUQsRUFBRSxrQ0FBa0MsRUFBRSwrREFBK0QsR0FBRztBQUM3Sjs7QUFFQTtBQUNBLHVKQUF1SixHQUFHLE9BQU8sSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLFFBQVEsSUFBSTtBQUM5TDs7QUFFQTtBQUNBLHNEQUFzRCxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxZQUFZLEdBQUc7QUFDOUY7O0FBRUEsb0JBQW9CLHdEQUFLOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtFQUFlLENBQUMsMENBQUksZ0JBQWdCLGdCQUFnQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ2dDO0FBQ3NCO0FBQzZCOztBQUU1RTtBQUNQO0FBQ0EsbUJBQW1CLCtEQUFXO0FBQzlCLHFCQUFxQixpRUFBYTtBQUNsQyxxQkFBcUIsaUVBQWE7O0FBRWxDLE1BQU0sd0RBQUs7QUFDWCxRQUFRLHlEQUFNLGdCQUFnQix5REFBTTtBQUNwQztBQUNBOztBQUVBLHlCQUF5QixnREFBSSxHQUFHLCtEQUErRDtBQUMvRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSx3REFBSztBQUNiLDZCQUE2QixnREFBSSxHQUFHLGlFQUFpRTtBQUNyRztBQUNBO0FBQ0E7O0FBRUEsUUFBUSx3REFBSztBQUNiLDZCQUE2QixnREFBSSxHQUFHLGlFQUFpRTtBQUNyRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcER1RDtBQUN1QjtBQUMxQzs7QUFFN0I7QUFDUDtBQUNBLGdCQUFnQixrRUFBYztBQUM5QixzQkFBc0Isd0VBQW9COztBQUUxQyxNQUFNLDBEQUFPLFdBQVcsd0RBQUs7QUFDN0Isb0NBQW9DLHdEQUFLOztBQUV6QztBQUNBO0FBQ0EsbUJBQW1CLDBDQUFJO0FBQ3ZCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QndFO0FBQ2I7QUFDdkI7O0FBRTdCO0FBQ1A7QUFDQSxtQkFBbUIscUVBQWlCOztBQUVwQyxNQUFNLDBEQUFPLFdBQVcsd0RBQUs7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrRUFBZSxDQUFDLDBDQUFJO0FBQzlCO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCeUU7QUFDYjtBQUN4Qjs7QUFFN0I7QUFDUDtBQUNBLG9CQUFvQixzRUFBa0I7O0FBRXRDLE1BQU0sMkRBQVEsV0FBVyx3REFBSztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0VBQWUsQ0FBQywwQ0FBSTtBQUM5QjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnlFO0FBQ1Q7QUFDNUI7O0FBRTdCO0FBQ1A7QUFDQSx3QkFBd0IsMEVBQXNCOztBQUU5QyxNQUFNLDJEQUFRLFdBQVcsd0RBQUs7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtFQUFlLENBQUMsMENBQUk7QUFDOUI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ5RTtBQUNmO0FBQ3RCOztBQUU3QjtBQUNQO0FBQ0Esa0JBQWtCLG9FQUFnQjs7QUFFbEMsTUFBTSwyREFBUSxXQUFXLHdEQUFLO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0VBQWUsQ0FBQywwQ0FBSTtBQUM5QjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QndFO0FBQ2I7QUFDdkI7O0FBRTdCO0FBQ1A7QUFDQSxtQkFBbUIscUVBQWlCOztBQUVwQyxNQUFNLDBEQUFPLFdBQVcsd0RBQUs7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrRUFBZSxDQUFDLDBDQUFJO0FBQzlCO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCeUU7QUFDYjtBQUN4Qjs7QUFFN0I7QUFDUDtBQUNBLG9CQUFvQixzRUFBa0I7O0FBRXRDLE1BQU0sMkRBQVEsV0FBVyx3REFBSztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0VBQWUsQ0FBQywwQ0FBSTtBQUM5QjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnlFO0FBQ1Q7QUFDNUI7O0FBRTdCO0FBQ1A7QUFDQSx3QkFBd0IsMEVBQXNCOztBQUU5QyxNQUFNLDJEQUFRLFdBQVcsd0RBQUs7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtFQUFlLENBQUMsMENBQUk7QUFDOUI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ5RTtBQUNmO0FBQ3RCOztBQUU3QjtBQUNQO0FBQ0Esa0JBQWtCLG9FQUFnQjs7QUFFbEMsTUFBTSwyREFBUSxXQUFXLHdEQUFLO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0VBQWUsQ0FBQywwQ0FBSTtBQUM5QjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnlFO0FBQ1o7QUFDekI7O0FBRTdCO0FBQ1A7QUFDQSxxQkFBcUIsdUVBQW1COztBQUV4QyxNQUFNLDJEQUFRLFdBQVcsd0RBQUs7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrRUFBZSxDQUFDLDBDQUFJO0FBQzlCO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QitEO0FBQ1Q7QUFDbEI7QUFDSjs7QUFFekI7QUFDUDtBQUNBLGNBQWMsZ0VBQVk7O0FBRTFCLE1BQU0sd0RBQUs7QUFDWCwwQkFBMEIsZ0RBQUksR0FBRywwREFBMEQ7QUFDM0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtFQUFlLENBQUMsMENBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCK0Q7QUFDL0I7QUFDd0I7QUFDcEI7O0FBRTdCO0FBQ1A7QUFDQSxnQkFBZ0Isa0VBQWM7O0FBRTlCLE1BQU0sd0RBQUs7QUFDWDs7QUFFQTtBQUNBLDhCQUE4QixnREFBSSxHQUFHLDZEQUE2RDtBQUNsRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrRUFBZSxDQUFDLDBDQUFJO0FBQzlCO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDeUU7QUFDZjtBQUN0Qjs7QUFFN0I7QUFDUDtBQUNBLGtCQUFrQixvRUFBZ0I7O0FBRWxDLE1BQU0sMkRBQVEsV0FBVyx3REFBSztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0VBQWUsQ0FBQywwQ0FBSTtBQUM5QjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQndEO0FBQ3hCO0FBQ29DOztBQUU3RDtBQUNQO0FBQ0EsNEJBQTRCLDhFQUEwQjs7QUFFdEQsTUFBTSwyREFBUSxXQUFXLHdEQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLGdEQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEN3RTtBQUN4QztBQUM4QjtBQUMxQjs7QUFFN0I7QUFDUDtBQUNBLHNCQUFzQix3RUFBb0I7O0FBRTFDLE1BQU0sMERBQU8sV0FBVyx3REFBSztBQUM3QjtBQUNBOztBQUVBLFVBQVUsd0RBQUs7QUFDZiw4QkFBOEIsZ0RBQUksR0FBRyxxRUFBcUU7QUFDMUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtFQUFlLENBQUMsMENBQUk7QUFDbEM7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7O0FBRXlFO0FBQ3pDO0FBR0E7QUFDSTs7QUFFN0I7QUFDUDtBQUNBLDhCQUE4QiwwRUFBc0I7O0FBRXBELE1BQU0sMkRBQVEsV0FBVyx3REFBSztBQUM5QjtBQUNBLHlCQUF5QixnREFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0VBQWUsQ0FBQywwQ0FBSSx1QkFBdUIsNEJBQTRCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3lFO0FBQ2Q7QUFDdkI7O0FBRTdCO0FBQ1A7QUFDQSxtQkFBbUIscUVBQWlCOztBQUVwQyxNQUFNLDJEQUFRLFdBQVcsd0RBQUs7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrRUFBZSxDQUFDLDBDQUFJO0FBQzlCO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCK0I7QUFDd0I7QUFDbkI7O0FBRTdCO0FBQ1A7QUFDQSxlQUFlLGlFQUFhOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUEsTUFBTSx3REFBSztBQUNYO0FBQ0EsdUJBQXVCLDJEQUFRO0FBQy9CLHVCQUF1QiwyREFBUTtBQUMvQix3QkFBd0IsNERBQVM7QUFDakMsd0JBQXdCLDREQUFTO0FBQ2pDLHNCQUFzQiwwREFBTztBQUM3Qix1QkFBdUIsMkRBQVE7QUFDL0IscUJBQXFCLHlEQUFNO0FBQzNCOztBQUVBOztBQUVBLFFBQVEsMERBQU87QUFDZjtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0VBQWUsQ0FBQywwQ0FBSTtBQUM5QjtBQUNBLHVCQUF1QiwwREFBTztBQUM5QixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7O0FBRWlGO0FBQ2pEO0FBTUE7QUFDSTs7QUFFN0I7QUFDUDtBQUNBLHNDQUFzQyxrRkFBOEI7QUFDcEUsa0NBQWtDLDhFQUEwQjtBQUM1RCwyQkFBMkIsdUVBQW1CO0FBQzlDLHNCQUFzQixrRUFBYztBQUNwQyxzQkFBc0Isa0VBQWM7QUFDcEMsc0JBQXNCLGtFQUFjOztBQUVwQyxNQUFNLDJEQUFRLFdBQVcsd0RBQUs7QUFDOUIscUJBQXFCLHdEQUFLO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSx3REFBSztBQUNmO0FBQ0EsY0FBYyx3REFBSztBQUNuQiwyQkFBMkI7QUFDM0I7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLHdEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQSw2RUFBNkUseURBQU07QUFDbkY7QUFDQTtBQUNBLGNBQWMsa0VBQWUsQ0FBQywwQ0FBSTtBQUNsQztBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUEseUNBQXlDLDJEQUFRLDRCQUE0Qix5REFBTTtBQUNuRiw2QkFBNkIsZ0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RjZFO0FBQ2Y7QUFDMUI7O0FBRTdCO0FBQ1A7QUFDQSxzQkFBc0Isd0VBQW9COztBQUUxQyxNQUFNLDBEQUFPLFdBQVcsd0RBQUs7QUFDN0I7QUFDQTs7QUFFQSxvQkFBb0Isa0JBQWtCO0FBQ3RDOztBQUVBLFVBQVUsMkRBQVE7QUFDbEIsZUFBZSw2REFBVTtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMENBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQzhDO0FBQ1E7QUFDUjtBQUNEO0FBQ3VCO0FBQ0E7QUFDcEI7QUFDRjtBQUNNO0FBQ0U7QUFDUTtBQUNaO0FBQ0U7QUFDVTtBQUNOO0FBQ2Q7QUFDSTtBQUNJO0FBQ29CO0FBQ2xCO0FBQ1I7QUFDTTtBQUNRO0FBQ2tCOztBQUU1RSxpRUFBZTtBQUNmLHdCQUF3QixzRkFBb0I7QUFDNUMsU0FBUyx1REFBSztBQUNkLFNBQVMsdURBQUs7QUFDZCxRQUFRLHNEQUFLO0FBQ2Isb0JBQW9CLDZFQUFnQjtBQUNwQyxvQkFBb0IsNkVBQWdCO0FBQ3BDLFVBQVUseURBQU07QUFDaEIsU0FBUyx1REFBSztBQUNkLFdBQVcsNERBQU87QUFDbEIsWUFBWSw2REFBUTtBQUNwQixhQUFhLCtEQUFTO0FBQ3RCLGlCQUFpQix3RUFBYTtBQUM5QixXQUFXLDREQUFPO0FBQ2xCLFlBQVksOERBQVE7QUFDcEIsYUFBYSwrREFBUztBQUN0QixpQkFBaUIsd0VBQWE7QUFDOUIsY0FBYyxrRUFBVTtBQUN4QixPQUFPLG9EQUFHO0FBQ1YsU0FBUyx3REFBSztBQUNkLFdBQVcsNERBQU87QUFDbEIscUJBQXFCLGdGQUFpQjtBQUN0QyxZQUFZLDhEQUFRO0FBQ3BCLFFBQVEsc0RBQUk7QUFDWixlQUFlLG9FQUFXO0FBQzFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xENkM7QUFDUTtBQUNQO0FBQ0s7QUFDTjtBQUN3QjtBQUNGO0FBQ3ZCO0FBQ3VCO0FBQ0E7QUFDcEI7QUFDVTtBQUNaO0FBQ007QUFDRTtBQUNRO0FBQ1o7QUFDRTtBQUNVO0FBQ047QUFDZDtBQUNJO0FBQ0k7QUFDb0I7QUFDWjtBQUNOO0FBQ1I7QUFDTTtBQUNRO0FBQ2tCOztBQUU1RSxpRUFBZTtBQUNmLHdCQUF3QixzRkFBb0I7QUFDNUMsU0FBUyx1REFBSztBQUNkLFNBQVMsdURBQUs7QUFDZCxTQUFTLHdEQUFNO0FBQ2YsWUFBWSw2REFBUTtBQUNwQixxQkFBcUIsK0VBQWlCO0FBQ3RDLG9CQUFvQiw2RUFBZ0I7QUFDcEMsUUFBUSxzREFBSztBQUNiLG9CQUFvQiw2RUFBZ0I7QUFDcEMsb0JBQW9CLDZFQUFnQjtBQUNwQyxVQUFVLDBEQUFNO0FBQ2hCLE1BQU0sb0VBQVU7QUFDaEIsU0FBUyx3REFBSztBQUNkLFdBQVcsNERBQU87QUFDbEIsWUFBWSw4REFBUTtBQUNwQixhQUFhLGdFQUFTO0FBQ3RCLGlCQUFpQix3RUFBYTtBQUM5QixXQUFXLDREQUFPO0FBQ2xCLFlBQVksOERBQVE7QUFDcEIsYUFBYSwrREFBUztBQUN0QixpQkFBaUIsd0VBQWE7QUFDOUIsY0FBYyxrRUFBVTtBQUN4QixPQUFPLG9EQUFHO0FBQ1YsU0FBUyx3REFBSztBQUNkLFdBQVcsNERBQU87QUFDbEIscUJBQXFCLGdGQUFpQjtBQUN0QyxlQUFlLG9FQUFXO0FBQzFCLFlBQVksOERBQVE7QUFDcEIsUUFBUSxzREFBSTtBQUNaLGVBQWUsb0VBQVc7QUFDMUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUQ2QztBQUNRO0FBQ1A7QUFDSztBQUNOO0FBQ3dCO0FBQ0Y7QUFDdkI7QUFDdUI7QUFDQTtBQUNwQjtBQUNVO0FBQ1o7QUFDTTtBQUNFO0FBQ1E7QUFDWjtBQUNFO0FBQ1U7QUFDTjtBQUNkO0FBQ0k7QUFDSTtBQUNvQjtBQUNaO0FBQ047QUFDUjtBQUNNO0FBQ1E7QUFDa0I7O0FBRTVFLGlFQUFlO0FBQ2Ysd0JBQXdCLHNGQUFvQjtBQUM1QyxTQUFTLHVEQUFLO0FBQ2QsU0FBUyx1REFBSztBQUNkLFNBQVMsd0RBQU07QUFDZixZQUFZLDZEQUFRO0FBQ3BCLHFCQUFxQiwrRUFBaUI7QUFDdEMsb0JBQW9CLDZFQUFnQjtBQUNwQyxRQUFRLHNEQUFLO0FBQ2Isb0JBQW9CLDZFQUFnQjtBQUNwQyxvQkFBb0IsNkVBQWdCO0FBQ3BDLFVBQVUsMERBQU07QUFDaEIsTUFBTSxvRUFBVTtBQUNoQixTQUFTLHdEQUFLO0FBQ2QsV0FBVyw0REFBTztBQUNsQixZQUFZLDhEQUFRO0FBQ3BCLGFBQWEsZ0VBQVM7QUFDdEIsaUJBQWlCLHdFQUFhO0FBQzlCLFdBQVcsNERBQU87QUFDbEIsWUFBWSw4REFBUTtBQUNwQixhQUFhLCtEQUFTO0FBQ3RCLGlCQUFpQix3RUFBYTtBQUM5QixjQUFjLGtFQUFVO0FBQ3hCLE9BQU8sb0RBQUc7QUFDVixTQUFTLHdEQUFLO0FBQ2QsV0FBVyw0REFBTztBQUNsQixxQkFBcUIsZ0ZBQWlCO0FBQ3RDLGVBQWUsb0VBQVc7QUFDMUIsWUFBWSw4REFBUTtBQUNwQixRQUFRLHNEQUFJO0FBQ1osZUFBZSxvRUFBVztBQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUQ2QztBQUNRO0FBQ1A7QUFDSztBQUNOO0FBQ3dCO0FBQ0Y7QUFDdkI7QUFDdUI7QUFDQTtBQUNwQjtBQUNVO0FBQ1o7QUFDTTtBQUNFO0FBQ1E7QUFDWjtBQUNFO0FBQ1U7QUFDTjtBQUNkO0FBQ0k7QUFDSTtBQUNvQjtBQUNaO0FBQ047QUFDUjtBQUNNO0FBQ1E7QUFDa0I7QUFDRTs7QUFFOUUsaUVBQWU7QUFDZix3QkFBd0Isc0ZBQW9CO0FBQzVDLFNBQVMsdURBQUs7QUFDZCxTQUFTLHVEQUFLO0FBQ2QsU0FBUyx3REFBTTtBQUNmLFlBQVksNkRBQVE7QUFDcEIscUJBQXFCLCtFQUFpQjtBQUN0QyxvQkFBb0IsNkVBQWdCO0FBQ3BDLFFBQVEsc0RBQUs7QUFDYixvQkFBb0IsNkVBQWdCO0FBQ3BDLG9CQUFvQiw2RUFBZ0I7QUFDcEMsVUFBVSwwREFBTTtBQUNoQixNQUFNLG9FQUFVO0FBQ2hCLFNBQVMsd0RBQUs7QUFDZCxXQUFXLDREQUFPO0FBQ2xCLFlBQVksOERBQVE7QUFDcEIsYUFBYSxnRUFBUztBQUN0QixpQkFBaUIsd0VBQWE7QUFDOUIsV0FBVyw0REFBTztBQUNsQixZQUFZLDhEQUFRO0FBQ3BCLGFBQWEsK0RBQVM7QUFDdEIsaUJBQWlCLHdFQUFhO0FBQzlCLGNBQWMsa0VBQVU7QUFDeEIsT0FBTyxvREFBRztBQUNWLFNBQVMsd0RBQUs7QUFDZCxXQUFXLDREQUFPO0FBQ2xCLHFCQUFxQixnRkFBaUI7QUFDdEMsZUFBZSxvRUFBVztBQUMxQixZQUFZLDhEQUFRO0FBQ3BCLFFBQVEsc0RBQUk7QUFDWix5QkFBeUIsd0ZBQXFCO0FBQzlDLGVBQWUsb0VBQVc7QUFDMUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRTZDO0FBQ1E7QUFDUDtBQUNLO0FBQ047QUFDd0I7QUFDRjtBQUN2QjtBQUN1QjtBQUNBO0FBQ3BCO0FBQ1U7QUFDWjtBQUNNO0FBQ0U7QUFDUTtBQUNaO0FBQ0U7QUFDVTtBQUNOO0FBQ2Q7QUFDSTtBQUNJO0FBQ29CO0FBQ1o7QUFDSTtBQUNWO0FBQ1I7QUFDTTtBQUNRO0FBQ2tCO0FBQ0U7O0FBRTlFLGlFQUFlO0FBQ2Ysd0JBQXdCLHNGQUFvQjtBQUM1QyxTQUFTLHVEQUFLO0FBQ2QsU0FBUyx1REFBSztBQUNkLFNBQVMsd0RBQU07QUFDZixZQUFZLDZEQUFRO0FBQ3BCLHFCQUFxQiwrRUFBaUI7QUFDdEMsb0JBQW9CLDZFQUFnQjtBQUNwQyxRQUFRLHNEQUFLO0FBQ2Isb0JBQW9CLDZFQUFnQjtBQUNwQyxvQkFBb0IsNkVBQWdCO0FBQ3BDLFVBQVUsMERBQU07QUFDaEIsTUFBTSxvRUFBVTtBQUNoQixTQUFTLHdEQUFLO0FBQ2QsV0FBVyw0REFBTztBQUNsQixZQUFZLDhEQUFRO0FBQ3BCLGFBQWEsZ0VBQVM7QUFDdEIsaUJBQWlCLHdFQUFhO0FBQzlCLFdBQVcsNERBQU87QUFDbEIsWUFBWSw4REFBUTtBQUNwQixhQUFhLCtEQUFTO0FBQ3RCLGlCQUFpQix3RUFBYTtBQUM5QixjQUFjLGtFQUFVO0FBQ3hCLE9BQU8sb0RBQUc7QUFDVixTQUFTLHdEQUFLO0FBQ2QsV0FBVyw0REFBTztBQUNsQixxQkFBcUIsZ0ZBQWlCO0FBQ3RDLGVBQWUsb0VBQVc7QUFDMUIsaUJBQWlCLHdFQUFhO0FBQzlCLFlBQVksOERBQVE7QUFDcEIsUUFBUSxzREFBSTtBQUNaLHlCQUF5Qix3RkFBcUI7QUFDOUMsZUFBZSxvRUFBVztBQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEV5QztBQUNBO0FBQ0E7QUFDUztBQUNBO0FBQ2tCO0FBQ2Y7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUIsZ0VBQVc7O0FBRTVCO0FBQ0EsaURBQWlELDJEQUFPO0FBQ3hELGlEQUFpRCwyREFBTztBQUN4RCxpREFBaUQsMkRBQU87QUFDeEQsc0RBQXNELGdFQUFXO0FBQ2pFLHNEQUFzRCxnRUFBVztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsbUVBQWU7O0FBRWpELHdCQUF3Qix3REFBSzs7QUFFN0IsUUFBUSw0REFBUztBQUNqQjtBQUNBOztBQUVBLFFBQVEsNERBQVM7QUFDakI7QUFDQSxrQkFBa0Isd0RBQUs7QUFDdkI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxVQUFVLHlEQUFNO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7VUN0RXhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNzQjs7QUFFbEQsaUVBQWU7QUFDZixNQUFNO0FBQ04sV0FBVztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXktbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC1ncmlkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1hd2Vzb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLXRleHRhcmVhLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaGVscGVycy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9oZWxwZXJzL3V0aWxzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaTE4bi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2lmLXRoZW4tZWxzZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXAzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9pY29ucy9pY29ucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbGxPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi10aGVuLWVsc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJvcGVydHlOYW1lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuZXZhbHVhdGVkUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMTktMDkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSmVkaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCBFZGl0b3JBcnJheSBmcm9tICcuL2FycmF5LmpzJ1xuaW1wb3J0IHsgY2xhbXAsIGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JBcnJheU5hdiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckFycmF5XG4gKi9cbmNsYXNzIEVkaXRvckFycmF5TmF2IGV4dGVuZHMgRWRpdG9yQXJyYXkge1xuICBpbml0ICgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gMFxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGhcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgbmF2Q29scyA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdkNvbHMnKVxuICAgIGNvbnN0IG5hdlN0YWNrZWQgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXZTdGFja2VkJylcbiAgICBjb25zdCBuYXZUeXBlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2VHlwZScpXG5cbiAgICBjb25zdCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgY29uc3QgY29scyA9IGlzU2V0KG5hdkNvbHMpID8gbmF2Q29scyA6IDNcbiAgICBjb25zdCB0YWJMaXN0Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHMpXG4gICAgY29uc3QgdGFiQ29udGVudENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCAoMTIgLSBjb2xzKSlcbiAgICBjb25zdCB0YWJDb250ZW50ID0gdGhpcy50aGVtZS5nZXRUYWJDb250ZW50KClcbiAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50aGVtZS5nZXRUYWJMaXN0KHtcbiAgICAgIHN0YWNrZWQ6IGlzU2V0KG5hdlN0YWNrZWQpID8gbmF2U3RhY2tlZCA6IGZhbHNlLFxuICAgICAgdHlwZTogaXNTZXQobmF2VHlwZSkgPyBuYXZUeXBlIDogJ3BpbHMnXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJMaXN0Q29sKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJDb250ZW50Q29sKVxuICAgIHRhYkxpc3RDb2wuYXBwZW5kQ2hpbGQodGFiTGlzdClcbiAgICB0YWJDb250ZW50Q29sLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXREZWxldGVJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZVVwSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZURvd25JdGVtQnRuKClcblxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuaW5uZXJIVE1MID0gJydcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBsZXQgY2hpbGRUaXRsZVxuICAgICAgY29uc3Qgc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaXRlbVRlbXBsYXRlJylcblxuICAgICAgaWYgKHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZSkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGkwOiBpbmRleCxcbiAgICAgICAgICBpMTogKGluZGV4ICsgMSksXG4gICAgICAgICAgdmFsdWU6IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgfVxuICAgICAgICBjaGlsZFRpdGxlID0gY29tcGlsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICAgIGNoaWxkVGl0bGUgPSBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSArICcgJyArIChpbmRleCArIDEpIDogY2hpbGQuZ2V0S2V5KClcbiAgICAgIH1cblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gY2xhbXAoKGluZGV4IC0gMSksIDAsICh0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCAtIDEpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleCAtIDFcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRvSW5kZXhcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleCArIDFcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRvSW5kZXhcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPT09IHRoaXMuYWN0aXZlVGFiSW5kZXhcbiAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG5cbiAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgdGl0bGU6IGNoaWxkVGl0bGUsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgIH0pXG5cbiAgICAgIHRhYi5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMudGhlbWUuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIsIGFjdGl2ZSwgaWQpXG4gICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgbW92ZVVwQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cblxuICAgICAgaWYgKCh0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCAtIDEpID09PSBpbmRleCkge1xuICAgICAgICBtb3ZlRG93bkJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JBcnJheU5hdlxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYU1heEl0ZW1zLFxuICBnZXRTY2hlbWFNaW5JdGVtcyxcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckFycmF5IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvckFycmF5IGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0QXJyYXlDb250cm9sKHtcbiAgICAgIHRpdGxlOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGVuYWJsZUNvbGxhcHNlVG9nZ2xlOiB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lbmFibGVDb2xsYXBzZVRvZ2dsZSB8fCBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbmFibGVDb2xsYXBzZVRvZ2dsZScpLFxuICAgICAgc3RhcnRDb2xsYXBzZWQ6IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnN0YXJ0Q29sbGFwc2VkIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3N0YXJ0Q29sbGFwc2VkJylcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KGNvbmZpZylcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuXG4gICAgY29uc3QgbWF4SXRlbXMgPSBnZXRTY2hlbWFNYXhJdGVtcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBtaW5JdGVtcyA9IGdldFNjaGVtYU1pbkl0ZW1zKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KG1heEl0ZW1zKSAmJiBtYXhJdGVtcyA9PT0gdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY29udHJvbC5hZGRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0RGVsZXRlSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVVcEl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVEb3duSXRlbUJ0bigpXG4gICAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCh0aGlzLmluc3RhbmNlLmplZGkucGF0aFNlcGFyYXRvcikucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU2V0KG1pbkl0ZW1zKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA8PSBtaW5JdGVtcykge1xuICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQXJyYXlcbiIsImltcG9ydCBFZGl0b3JCb29sZWFuQ2hlY2tib3ggZnJvbSAnLi9ib29sZWFuLmpzJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQm9vbGVhbkNoZWNrYm94XG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JCb29sZWFuQ2hlY2tib3gge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yQm9vbGVhbkNoZWNrYm94IGZyb20gJy4vYm9vbGVhbi5qcydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JCb29sZWFuQ2hlY2tib3hcbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JCb29sZWFuQ2hlY2tib3gge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yLmpzJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvckJvb2xlYW5DaGVja2JveCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuQ2hlY2tib3ggZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgdGl0bGVIaWRkZW46IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhbkNoZWNrYm94XG4iLCJpbXBvcnQgeyBnbHlwaGljb25zLCBib290c3RyYXBJY29ucywgZm9udEF3ZXNvbWUzLCBmb250QXdlc29tZTQsIGZvbnRBd2Vzb21lNSwgZm9udEF3ZXNvbWU2IH0gZnJvbSAnLi4vdGhlbWVzL2ljb25zL2ljb25zLmpzJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMy5qcydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQuanMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1LmpzJ1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3RoZW1lcy90aGVtZS5qcydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBFZGl0b3Ige1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSW5zdGFuY2UgYmVpbmcgY29udHJvbGxlZCBieSB0aGlzIGVkaXRvci5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIGluc3RhbmNlIHVzZWQgdG8gYnVpbGQgdGhlIEVkaXRvciB1c2VyIGludGVyZmFjZS5cbiAgICAgKiBAdHlwZSB7VGhlbWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVzZXIgaW50ZXJmYWNlIGh0bWwgZm9yIHRoaXMgZWRpdG9yXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRyb2wgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlZCBzdGF0dXMgZm9yIHRoaXMgZWRpdG9yIHVzZXIgaW50ZXJmYWNlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcblxuICAgIC8qKlxuICAgICAqIFJlYWQgb25seSBzdGF0dXMgZm9yIHRoaXMgZWRpdG9yIHVzZXIgaW50ZXJmYWNlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJlYWRPbmx5ID0gdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KClcblxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5jb2VyY2VWYWx1ZSgpXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBjb25zdCBhbHdheXNTaG93RXJyb3JzID0gdGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuc2hvd0Vycm9ycyA9PT0gJ2Fsd2F5cycgfHwgZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnc2hvd0Vycm9ycycpID09PSAnYWx3YXlzJ1xuXG4gICAgaWYgKGFsd2F5c1Nob3dFcnJvcnMpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIGxldCBpY29ucyA9IG51bGxcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5pY29uTGliKSkge1xuICAgICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5pY29uTGliKSB7XG4gICAgICAgIGNhc2UgJ2dseXBoaWNvbnMnOlxuICAgICAgICAgIGljb25zID0gZ2x5cGhpY29uc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2Jvb3RzdHJhcC1pY29ucyc6XG4gICAgICAgICAgaWNvbnMgPSBib290c3RyYXBJY29uc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lMyc6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTQnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU0XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWU1JzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lNVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNic6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTZcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMyhpY29ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNChpY29ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNShpY29ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWUoaWNvbnMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29udGFpbmVyIGF0dHJpYnV0ZXMgbGlrZSBkYXRhLXBhdGggYW5kIGRhdGEtdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgZ2V0U2NoZW1hVHlwZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkpXG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIHRoZSBlZGl0b3IgY29udHJvbCBhbmQgYXBwZW5kcyBpdCB0byB0aGUgZWRpdG9yIGNvbnRhaW5lclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBieSBtYWtpbmcgYXNzdW1wdGlvbnMgYmFzZWQgb24gY29uc3RyYWluc1xuICAgKi9cbiAgY29lcmNlVmFsdWUgKCkge1xuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUVudW0pICYmICFzY2hlbWFFbnVtLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkgJiYgaXNTZXQoc2NoZW1hRW51bVswXSkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoc2NoZW1hRW51bVswXSwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdWkgZWxlbWVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKGVycm9ycykge1xuICAgIGNvbnN0IG5ldmVyU2hvd0Vycm9ycyA9IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnNob3dFcnJvcnMgPT09ICduZXZlcicgfHwgZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnc2hvd0Vycm9ycycpID09PSAnbmV2ZXInXG5cbiAgICBpZiAobmV2ZXJTaG93RXJyb3JzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wubWVzc2FnZXMuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IGxhYmVsID0gZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgZXJyb3IubWVzc2FnZXMuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayh7XG4gICAgICAgICAgbWVzc2FnZTogbGFiZWwgKyAnOiAnICsgbWVzc2FnZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmNvbnRyb2wubWVzc2FnZXMuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBlcnJvciBtZXNzYWdlIGNvbnRhaW5lclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBjb250cm9sIFVJIHdoZW4gaXRzIHN0YXRlIGNoYW5nZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gIH1cblxuICByZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cyAoKSB7XG4gICAgY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50cyA9IHRoaXMuY29udHJvbC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXG5cbiAgICBpbnRlcmFjdGl2ZUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250cm9sLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yLmpzJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24gfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck11bHRpcGxlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck11bHRpcGxlIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TXVsdGlwbGVDb250cm9sKHtcbiAgICAgIHRpdGxlOiAnT3B0aW9ucycsXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBzd2l0Y2hlck9wdGlvblZhbHVlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5pbmRleFxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICB9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KGNvbmZpZylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JNdWx0aXBsZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck51bGwgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVsbCBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE51bGxDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpIHx8IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdWxsXG4iLCJpbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4vbnVtYmVyLmpzJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JOdW1iZXJFbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JOdW1iZXJcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyRW51bVJhZGlvIGV4dGVuZHMgRWRpdG9yTnVtYmVyIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHJhZGlvLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4vbnVtYmVyLmpzJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JOdW1iZXIge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7IGlzTnVtYmVyLCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYUZvcm1hdCxcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yTnVtYmVyIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpIHx8IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoZ2V0U2NoZW1hVHlwZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdpbnRlZ2VyJykge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyXG4iLCJpbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4vb2JqZWN0LmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck9iamVjdEdyaWQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JPYmplY3RcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0R3JpZCBleHRlbmRzIEVkaXRvck9iamVjdCB7XG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGxldCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICdjb2x1bW5zJykgfHwgMTJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ29mZnNldCcpIHx8IDBcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHVtbnMsIG9mZnNldClcblxuICAgICAgICBpZiAoZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ25ld1JvdycpID09PSB0cnVlKSB7XG4gICAgICAgICAgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgICAgICB9XG5cbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbClcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0R3JpZFxuIiwiaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuL29iamVjdC5qcydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yT2JqZWN0TmF2IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yT2JqZWN0XG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdE5hdiBleHRlbmRzIEVkaXRvck9iamVjdCB7XG4gIGluaXQgKCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwXG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sQ29scyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hWyd4LWNvbnRyb2wtY29scyddXG4gICAgY29uc3QgY29udHJvbFN0YWNrZWQgPSB0aGlzLmluc3RhbmNlLnNjaGVtYVsneC1jb250cm9sLXN0YWNrZWQnXVxuICAgIGNvbnN0IGNvbnRyb2xWYXJpYW50ID0gdGhpcy5pbnN0YW5jZS5zY2hlbWFbJ3gtY29udHJvbC12YXJpYW50J11cblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gaXNTZXQoY29udHJvbENvbHMpID8gY29udHJvbENvbHMgOiAzXG4gICAgY29uc3QgdGFiTGlzdENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2xzKVxuICAgIGNvbnN0IHRhYkNvbnRlbnRDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgKDEyIC0gY29scykpXG4gICAgY29uc3QgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuZ2V0VGFiQ29udGVudCgpXG4gICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGhlbWUuZ2V0VGFiTGlzdCh7XG4gICAgICBzdGFja2VkOiBpc1NldChjb250cm9sU3RhY2tlZCkgPyBjb250cm9sU3RhY2tlZCA6IGZhbHNlLFxuICAgICAgdHlwZTogaXNTZXQoY29udHJvbFZhcmlhbnQpID8gY29udHJvbFZhcmlhbnQgOiAncGlscydcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkxpc3RDb2wpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkNvbnRlbnRDb2wpXG4gICAgdGFiTGlzdENvbC5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuICAgIHRhYkNvbnRlbnRDb2wuYXBwZW5kQ2hpbGQodGFiQ29udGVudClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPT09IHRoaXMuYWN0aXZlVGFiSW5kZXhcbiAgICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aClcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG5cbiAgICAgICAgY29uc3QgdGFiID0gdGhpcy50aGVtZS5nZXRUYWIoe1xuICAgICAgICAgIHRpdGxlOiBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRhYi5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBpbmRleFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMudGhlbWUuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIsIGFjdGl2ZSwgaWQpXG5cbiAgICAgICAgdGFiTGlzdC5hcHBlbmRDaGlsZCh0YWIubGlzdClcbiAgICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdE5hdlxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7XG4gIGVxdWFsLFxuICBoYXNPd24sXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgcGF0aFRvQXR0cmlidXRlXG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hVGl0bGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JPYmplY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0IGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMucHJvcGVydHlBY3RpdmF0b3JzID0ge31cbiAgICBjb25zdCBzY2hlbWFPcHRpb25zID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9ucyB8fCB7fVxuICAgIGxldCBhZGRQcm9wZXJ0eSA9IHRydWVcbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiBhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UpIHtcbiAgICAgIGFkZFByb3BlcnR5ID0gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgZW5hYmxlUHJvcGVydGllc1RvZ2dsZSA9IGZhbHNlXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZW5hYmxlUHJvcGVydGllc1RvZ2dsZSkpIHtcbiAgICAgIGVuYWJsZVByb3BlcnRpZXNUb2dnbGUgPSB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lbmFibGVQcm9wZXJ0aWVzVG9nZ2xlXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYU9wdGlvbnMuZW5hYmxlUHJvcGVydGllc1RvZ2dsZSkpIHtcbiAgICAgIGVuYWJsZVByb3BlcnRpZXNUb2dnbGUgPSBzY2hlbWFPcHRpb25zLmVuYWJsZVByb3BlcnRpZXNUb2dnbGVcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE9iamVjdENvbnRyb2woe1xuICAgICAgdGl0bGU6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgdGl0bGVIaWRkZW46IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgZW5hYmxlUHJvcGVydGllc1RvZ2dsZTogZW5hYmxlUHJvcGVydGllc1RvZ2dsZSxcbiAgICAgIGFkZFByb3BlcnR5OiBhZGRQcm9wZXJ0eSxcbiAgICAgIGVuYWJsZUNvbGxhcHNlVG9nZ2xlOiB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lbmFibGVDb2xsYXBzZVRvZ2dsZSB8fCBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbmFibGVDb2xsYXBzZVRvZ2dsZScpLFxuICAgICAgc3RhcnRDb2xsYXBzZWQ6IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnN0YXJ0Q29sbGFwc2VkIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3N0YXJ0Q29sbGFwc2VkJylcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWUuc3BsaXQoJyAnKS5qb2luKCcnKVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWVFbXB0eSA9IHByb3BlcnR5TmFtZS5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHByb3BlcnR5TmFtZUVtcHR5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eUV4aXN0ID0gaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtwcm9wZXJ0eU5hbWVdKVxuXG4gICAgICBpZiAocHJvcGVydHlFeGlzdCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5pbnN0YW5jZS5nZXRQcm9wZXJ0eVNjaGVtYShwcm9wZXJ0eU5hbWUpXG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIHByb3BlcnR5TmFtZSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWUgPSAnJ1xuXG4gICAgICBjb25zdCBhcmlhTGl2ZSA9IHRoaXMuY29udHJvbC5hcmlhTGl2ZVxuICAgICAgYXJpYUxpdmUuaW5uZXJIVE1MID0gJydcbiAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2hpbGQuc2NoZW1hKVxuICAgICAgY29uc3QgbGFiZWwgPSBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSA6IHByb3BlcnR5TmFtZVxuICAgICAgY29uc3QgYXJpYUxpdmVNZXNzYWdlID0gdGhpcy50aGVtZS5nZXRBcmlhTGl2ZU1lc3NhZ2UoKVxuICAgICAgYXJpYUxpdmVNZXNzYWdlLnRleHRDb250ZW50ID0gbGFiZWwgKyAnIGZpZWxkIHdhcyBhZGRlZCB0byB0aGUgZm9ybSdcbiAgICAgIGFyaWFMaXZlLmFwcGVuZENoaWxkKGFyaWFMaXZlTWVzc2FnZSlcblxuICAgICAgLy8ga2VlcHMgZGlhbG9nIG9wZW5cbiAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQ29udGFpbmVyLmNsb3NlKClcbiAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQ29udGFpbmVyLnNob3dNb2RhbCgpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydChjb25maWcpXG4gIH1cblxuICByZWZyZXNoUHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkVuYWJsZVByb3BlcnRpZXNUb2dnbGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbmFibGVQcm9wZXJ0aWVzVG9nZ2xlJylcblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lbmFibGVQcm9wZXJ0aWVzVG9nZ2xlLCB0cnVlKSB8fCBlcXVhbChzY2hlbWFPcHRpb25FbmFibGVQcm9wZXJ0aWVzVG9nZ2xlLCB0cnVlKSkge1xuICAgICAgLy8gdG9kbzogZGVsZXRlIFwidGhpcy5wcm9wZXJ0aWVzIGFuZCB0aGlzLmluc3RhbmNlLnByb3BlcnRpZXNcIlxuICAgICAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2UucHJvcGVydGllcylcbiAgICAgIGNvbnN0IGNoaWxkcmVuUHJvcGVydGllcyA9IHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQuZ2V0S2V5KCkpXG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gWy4uLnNjaGVtYVByb3BlcnRpZXMsIC4uLmNoaWxkcmVuUHJvcGVydGllc11cblxuICAgICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKHByb3BlcnR5KVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKHByb3BlcnR5KVxuICAgICAgICBjb25zdCBub3RSZXF1aXJlZCA9ICFpc1JlcXVpcmVkICYmICFpc0RlcGVuZGVudFJlcXVpcmVkXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvckluRG9tID0gdGhpcy5wcm9wZXJ0eUFjdGl2YXRvcnNbcHJvcGVydHldXG4gICAgICAgIGNvbnN0IGFyaWFMaXZlID0gdGhpcy5jb250cm9sLmFyaWFMaXZlXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuaW5zdGFuY2UuZ2V0UHJvcGVydHlTY2hlbWEocHJvcGVydHkpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShzY2hlbWEpXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmluc3RhbmNlLnBhdGggKyB0aGlzLmluc3RhbmNlLmplZGkucGF0aFNlcGFyYXRvciArIHByb3BlcnR5XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKHBhdGgpICsgJy1hY3RpdmF0b3InXG4gICAgICAgIGNvbnN0IGxhYmVsID0gaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiBwcm9wZXJ0eVxuXG4gICAgICAgIGlmIChub3RSZXF1aXJlZCAmJiAhYWN0aXZhdG9ySW5Eb20pIHtcbiAgICAgICAgICBjb25zdCBjaGVja2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICB0aXRsZUhpZGRlbjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjaGVja2JveENvbnRyb2wuaW5wdXRcbiAgICAgICAgICB0aGlzLnByb3BlcnR5QWN0aXZhdG9yc1twcm9wZXJ0eV0gPSBjaGVja2JveFxuXG4gICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgYXJpYUxpdmUuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgIGNvbnN0IGFyaWFMaXZlTWVzc2FnZSA9IHRoaXMudGhlbWUuZ2V0QXJpYUxpdmVNZXNzYWdlKClcblxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmdldENoaWxkKHByb3BlcnR5KVxuXG4gICAgICAgICAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwgcHJvcGVydHkpXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmdldENoaWxkKHByb3BlcnR5KS5hY3RpdmF0ZSgpXG4gICAgICAgICAgICAgIGFyaWFMaXZlTWVzc2FnZS50ZXh0Q29udGVudCA9IGxhYmVsICsgJyBmaWVsZCB3YXMgYWRkZWQgdG8gdGhlIGZvcm0nXG4gICAgICAgICAgICAgIGFyaWFMaXZlLmFwcGVuZENoaWxkKGFyaWFMaXZlTWVzc2FnZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZ2V0Q2hpbGQocHJvcGVydHkpLmRlYWN0aXZhdGUoKVxuICAgICAgICAgICAgICBhcmlhTGl2ZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBsYWJlbCArICcgZmllbGQgd2FzIHJlbW92ZWQgZnJvbSB0aGUgZm9ybSdcbiAgICAgICAgICAgICAgYXJpYUxpdmUuYXBwZW5kQ2hpbGQoYXJpYUxpdmVNZXNzYWdlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBrZWVwcyBkaWFsb2cgb3BlblxuICAgICAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNDb250YWluZXIuY2xvc2UoKVxuICAgICAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNDb250YWluZXIuc2hvd01vZGFsKClcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udHJvbC5jb250YWluZXIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IHRoaXMucHJvcGVydHlBY3RpdmF0b3JzW3Byb3BlcnR5XVxuXG4gICAgICAgIGlmIChjaGVja2JveCkge1xuICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBoYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBwcm9wZXJ0eSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGlmIChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdFxuIiwiaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuL3N0cmluZy5qcydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hWE9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdBd2Vzb21wbGV0ZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdBd2Vzb21wbGV0ZSBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgdHJ5IHtcbiAgICAgIG5ldyB3aW5kb3cuQXdlc29tcGxldGUodGhpcy5jb250cm9sLmlucHV0LCBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnYXdlc29tcGxldGUnKSlcbiAgICAgIHRoaXMuY29udHJvbC5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmF3ZXNvbXBsZXRlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdBd2Vzb21wbGV0ZSBpcyBub3QgYXZhaWxhYmxlIG9yIG5vdCBsb2FkZWQgY29ycmVjdGx5LicsIGUpXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcblxuICAgIC8vIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAvLyAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAvLyB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ0F3ZXNvbXBsZXRlXG4iLCJpbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4vc3RyaW5nLmpzJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ0VudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JTdHJpbmcge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdFbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcuanMnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ1RleHRhcmVhIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ1RleHRhcmVhIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWFDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpIHx8IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdUZXh0YXJlYVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmcgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHNjaGVtYUZvcm1hdCkgPyBzY2hlbWFGb3JtYXQgOiAndGV4dCcsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSB8fCBzY2hlbWFGb3JtYXQgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmIChzY2hlbWFGb3JtYXQgPT09ICdjb2xvcicgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdcbiIsIi8qKlxuICogUmVwcmVzZW50cyBhbiBFdmVudEVtaXR0ZXIgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGlzIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICovXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgb2ZmIChuYW1lKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSAhPT0gbmFtZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgYSBuYW1lZCBldmVudCBsaXN0ZW5lclxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGJlIGVtaXR0ZWRcbiAgICogQHBhcmFtIHsqfSBwYXlsb2FkIC0gUGF5bG9hZCBjb250YWluaW5nIGRhdGEgdGhhdCBpcyBwYXNzZWQgYWxvbmcgd2l0aCB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIGVtaXQgKG5hbWUsIHBheWxvYWQgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2socGF5bG9hZClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWxzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hWCAoc2NoZW1hLCBrZXl3b3JkKSB7XG4gIGNvbnN0IGtleSA9ICd4LScgKyBrZXl3b3JkXG4gIHJldHVybiBzY2hlbWFba2V5XVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hU2NoZW1hIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS4kc2NoZW1hKSA/IHNjaGVtYS4kc2NoZW1hIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbihzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQcm9wZXJ0eU5hbWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wcm9wZXJ0eU5hbWVzKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLnByb3BlcnR5TmFtZXMpID8gc2NoZW1hLnByb3BlcnR5TmFtZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFsbE9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLmFsbE9mKSA/IHNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQW55T2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEuYW55T2YpID8gc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFDb25zdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuY29uc3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUNvbnRhaW5zIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbihzY2hlbWEuY29udGFpbnMpKSA/IHNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVmYXVsdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuZGVmYXVsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVzY3JpcHRpb24gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRWxzZSAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbihzY2hlbWEuZWxzZSkpID8gc2NoZW1hLmVsc2UgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUVudW0gKHNjaGVtYSkge1xuICBpZiAoaXNBcnJheShzY2hlbWEuZW51bSkgJiYgc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBzY2hlbWEuZW51bVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRm9ybWF0IChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5mb3JtYXQpID8gc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hSWYgKHNjaGVtYSkge1xuICBpZiAoaXNPYmplY3Qoc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIGlmIChpc0Jvb2xlYW4oc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHNjaGVtYS5pdGVtcykgPyBzY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heGltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1heGltdW0pID8gc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heENvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4Q29udGFpbnMpICYmIHNjaGVtYS5tYXhDb250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhDb250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4SXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhJdGVtcykgJiYgc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heEl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhMZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhMZW5ndGgpICYmIHNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4TGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbmltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1pbmltdW0pID8gc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkNvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluQ29udGFpbnMpICYmIHNjaGVtYS5taW5Db250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5Db250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluSXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5JdGVtcykgJiYgc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5MZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5MZW5ndGgpICYmIHNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluTGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluUHJvcGVydGllcykgJiYgc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluUHJvcGVydGllc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTXVsdGlwbGVPZiAoc2NoZW1hKSB7XG4gIGlmIChpc051bWJlcihzY2hlbWEubXVsdGlwbGVPZikgJiYgc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubXVsdGlwbGVPZlxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTm90IChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4oc2NoZW1hLm5vdCkpID8gc2NoZW1hLm5vdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hT3B0aW9uIChzY2hlbWEsIG9wdGlvbikge1xuICByZXR1cm4gKHNjaGVtYS5vcHRpb25zICYmIHNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hWE9wdGlvbiAoc2NoZW1hLCBvcHRpb24pIHtcbiAgcmV0dXJuIChzY2hlbWFbJ3gtb3B0aW9ucyddICYmIHNjaGVtYVsneC1vcHRpb25zJ11bb3B0aW9uXSkgPyBzY2hlbWFbJ3gtb3B0aW9ucyddW29wdGlvbl0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm4gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnBhdHRlcm4pID8gc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByZWZpeEl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHNjaGVtYS5wcmVmaXhJdGVtcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEucHJvcGVydGllcykgPyBzY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUmVhZE9ubHkgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS5yZWFkT25seSkgPyBzY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVJlcXVpcmVkIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFUaGVuIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHNjaGVtYS50aGVuKSkgPyBzY2hlbWEudGhlbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVGl0bGUgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnRpdGxlKSA/IHNjaGVtYS50aXRsZSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVHlwZSAoc2NoZW1hKSB7XG4gIGlmIChpc1N0cmluZyhzY2hlbWEudHlwZSkgfHwgaXNBcnJheShzY2hlbWEudHlwZSkpIHtcbiAgICByZXR1cm4gc2NoZW1hLnR5cGVcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU9uZU9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLm9uZU9mKSA/IHNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVW5ldmFsdWF0ZWRQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEudW5ldmFsdWF0ZWRQcm9wZXJ0aWVzKSA/IHNjaGVtYS51bmV2YWx1YXRlZFByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVVuaXF1ZUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEudW5pcXVlSXRlbXMpID8gc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG59XG4iLCIvKipcbiAqIFV0aWxzLlxuICogQG1vZHVsZSB1dGlsc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaXJjdWxhclJlcGxhY2VyICgpIHtcbiAgY29uc3QgYW5jZXN0b3JzID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIC8vIGB0aGlzYCBpcyB0aGUgb2JqZWN0IHRoYXQgdmFsdWUgaXMgY29udGFpbmVkIGluLFxuICAgIC8vIGkuZS4sIGl0cyBkaXJlY3QgcGFyZW50LlxuICAgIHdoaWxlIChhbmNlc3RvcnMubGVuZ3RoID4gMCAmJiBhbmNlc3RvcnMuYXQoLTEpICE9PSB0aGlzKSB7XG4gICAgICBhbmNlc3RvcnMucG9wKClcbiAgICB9XG4gICAgaWYgKGFuY2VzdG9ycy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnW0NpcmN1bGFyXSdcbiAgICB9XG4gICAgYW5jZXN0b3JzLnB1c2godmFsdWUpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgY2xvbmUgb2YgYSB0aGluZ1xuICogQHBhcmFtIHsqfSB0aGluZyAtIFRoZSB0aGluZyB0byBiZSBjbG9uZWRcbiAqIEByZXR1cm4geyp9IFRoZSBjbG9uZSBvZiB0aGUgdGhpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lICh0aGluZykge1xuICBpZiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nLCBnZXRDaXJjdWxhclJlcGxhY2VyKCkpKVxufVxuXG4vKipcbiAqIFJldHVybnMgZXNjYXBlZCByZWdleHBcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEVzY2FwZWQgcmVnZXhwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAgKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbi8qKlxuICogTXVsdGlwbGUgc2VhcmNoIGFuZCByZXBsYWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IGZpbmQgLSBUaGUgcGFydCB0byBiZSByZXBsYWNlZFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2UgLSBUaGUgcmVwbGFjZW1lbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQWxsIChzdHIsIGZpbmQsIHJlcGxhY2UpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKGZpbmQpLCAnZycpLCByZXBsYWNlKVxufVxuXG4vKipcbiAqIEZvcm1hdHMgYSBqc29uIHBhdGggdG8gYmUgdXNlZCBhcyBhbiBodG1sIGF0dHJpYnV0ZSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUganNvbiBwYXRoXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRoVG9BdHRyaWJ1dGUgKHBhdGgpIHtcbiAgcmV0dXJuIHJlcGxhY2VBbGwocmVwbGFjZUFsbChwYXRoLCAnIycsICdyb290JyksICcvJywgJy0nKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIFRoZSBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIC0gVGhlIHByb3BlcnR5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duIChvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApXG59XG5cbi8qKlxuICogU29ydCBvYmplY3QgcHJvcGVydGllc1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIFRoZSBvYmplY3RcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0T2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBlcXVhbFxuICogQHBhcmFtIHsqfSBhIC0gVmFsdWUgQVxuICogQHBhcmFtIHsqfSBiIC0gVmFsdWUgQlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsIChhLCBiKSB7XG4gIGlmIChpc09iamVjdChhKSAmJiBpc09iamVjdChiKSkge1xuICAgIGEgPSBzb3J0T2JqZWN0KGEpXG4gICAgYiA9IHNvcnRPYmplY3QoYilcbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gdmFsdWVzIHBhc3NlZCBhcmUgZGlmZmVyZW50XG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW50IChhLCBiKSB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBudWxsXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NldCAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdFNldCAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIG51bWJlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGFuIGludGVnZXJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIgKHZhbHVlKSB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYSBzdHJpbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIGJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGFuIGFycmF5XG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSAodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gb2JqZWN0XG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKHZhbHVlKSB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHR5cGUgb2YgYSB2YWx1ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgdHlwZSBvZiB0aGUgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUgKHZhbHVlKSB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG4vKipcbiAqIE1lcmdlcyBvYmplY3RzXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0W119IHNvdXJjZXMgLSBPYmplY3RzIHRvIGJlIG1lcmdlZCBpbnRvIHRoZSB0YXJnZXQgb2JqZWN0XG4gKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBtZXJnZWQgb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAgKHRhcmdldCwgLi4uc291cmNlcykge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuXG4vKipcbiAqIE1lcmdlcyBvYmplY3RzIGJ1dCBvbmx5IHRoZSBwcm9wZXJ0aWVzIHRoYXQgZXhpc3RzIGluIGJvdGhzIG9iamVjdHNcbiAqIGlmIHRoZXkgYXJlIHRoZSBzYW1lIHR5cGUgb2YgdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmoxIC0gVGhlIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0W119IG9iajIgLSBPYmplY3RzIHdobydzIHByb3BlcnRpZXMgYXJlIHRoZSBvdmVycmlkZXNcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG92ZXJ3cml0dGVuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzIChvYmoxLCBvYmoyKSB7XG4gIE9iamVjdC5rZXlzKG9iajIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgaW4gb2JqMSkge1xuICAgICAgaWYgKHR5cGVvZiBvYmoxW2tleV0gPT09IHR5cGVvZiBvYmoyW2tleV0pIHtcbiAgICAgICAgb2JqMVtrZXldID0gb2JqMltrZXldXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBvYmoxXG59XG5cbi8qKlxuICogR2V0IHNvbWUgdmFsdWUgYnkgdHJhdmVyc2luZyB0aGUgZGF0YSB1c2luZyBKU09OIHBhdGhcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgc291cmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIEpTT04gcGF0aFxuICogQHJldHVybiB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlQnlKU09OUGF0aCAoZGF0YSwgcGF0aCkge1xuICBjb25zdCBrZXlzID0gcGF0aC5zcGxpdCgnLicpIC8vIFNwbGl0IHRoZSBwYXRoIGludG8gaW5kaXZpZHVhbCBrZXlzXG5cbiAgbGV0IHZhbHVlID0gZGF0YVxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIC9eXFxkKyQvLnRlc3Qoa2V5KSkge1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChrZXkpXG4gICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW2luZGV4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCAvLyBJbmRleCBpcyBvdXQgb2YgYm91bmRzLCByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoYXNPd24odmFsdWUsIGtleSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWVba2V5XVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEtleSBkb2Vzbid0IGV4aXN0LCByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogQ29tcGlsZXMgYSB0ZW1wbGF0ZSBieSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSAtIFRoZSB0ZW1wbGF0ZSBzdHJpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gV2hlcmUgdGVtcGxhdGUgZGF0YSBsaXZlc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlICh0ZW1wbGF0ZSwgZGF0YSkge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgve3soLio/KX19L2csIChtYXRjaCkgPT4ge1xuICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvXFxzL2csICcnKVxuICAgIGNvbnN0IHBhdGggPSBtYXRjaC5zcGxpdCgve3t8fX0vKVsxXVxuICAgIHJldHVybiBnZXRWYWx1ZUJ5SlNPTlBhdGgoZGF0YSwgcGF0aClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wIChudW1iZXIsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG51bWJlciwgbWF4KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkgKGFycikge1xuICBjb25zdCB1bmlxdWVPYmplY3RzID0gW11cbiAgY29uc3QgdW5pcXVlVmFsdWVzID0gbmV3IFNldCgpXG5cbiAgZm9yIChjb25zdCBvYmogb2YgYXJyKSB7XG4gICAgY29uc3Qgb2JqU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob2JqKVxuICAgIGlmICghdW5pcXVlVmFsdWVzLmhhcyhvYmpTdHJpbmcpKSB7XG4gICAgICB1bmlxdWVWYWx1ZXMuYWRkKG9ialN0cmluZylcbiAgICAgIHVuaXF1ZU9iamVjdHMucHVzaChvYmopXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaXF1ZU9iamVjdHNcbn1cbiIsIi8qKlxuICogU2ltcGxlIHRyYW5zbGF0aW9uIG1vZHVsZS5cbiAqIEBtb2R1bGUgaTE4blxuICovXG5cbi8qKlxuICogTG9jYWxlIG1lc3NhZ2VzXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgaTE4biA9IHtcbiAgZXJyb3JBZGRpdGlvbmFsUHJvcGVydGllczogJ0hhcyBhZGRpdGlvbmFsIHByb3BlcnR5IFwie3sgcHJvcGVydHkgfX1cIiBidXQgbm8gYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBhbGxvd2VkLicsXG4gIGVycm9yQW55T2Y6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLicsXG4gIGVycm9yQ29uc3Q6ICdNdXN0IGhhdmUgdmFsdWUgb2Y6IHt7IGNvbnN0IH19LicsXG4gIGVycm9yQ29udGFpbnM6ICdNdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGl0ZW0gbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHNjaGVtYS4nLFxuICBlcnJvckRlcGVuZGVudFJlcXVpcmVkOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiB7eyBkZXBlbmRlbnRSZXF1aXJlZCB9fS4nLFxuICBlcnJvckVudW06ICdNdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6IHt7IGVudW0gfX0uJyxcbiAgZXJyb3JFeGNsdXNpdmVNYXhpbXVtOiAnTXVzdCBiZSBsZXNzIHRoYW4ge3sgZXhjbHVzaXZlTWF4aW11bSB9fS4nLFxuICBlcnJvckV4Y2x1c2l2ZU1pbmltdW06ICdNdXN0IGJlIGdyZWF0ZXIgdGhhbiB7eyBleGNsdXNpdmVNaW5pbXVtIH19LicsXG4gIGVycm9yRm9ybWF0OiAnTXVzdCBiZSBhIHZhbGlkIHt7IGZvcm1hdCB9fS4nLFxuICBlcnJvckl0ZW1zOiAnTXVzdCBoYXZlIGl0ZW1zIHRoYXQgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hLicsXG4gIGVycm9yTWF4aW11bTogJ011c3QgYmUgYXQgbW9zdCB7eyBtYXhpbXVtIH19LicsXG4gIGVycm9yTWF4SXRlbXM6ICdNdXN0IGhhdmUgYXQgbW9zdCB7eyBtYXhJdGVtcyB9fSBpdGVtcy4nLFxuICBlcnJvck1heExlbmd0aDogJ011c3QgYmUgYXQgbW9zdCB7eyBtYXhMZW5ndGggfX0gY2hhcmFjdGVycyBsb25nLicsXG4gIGVycm9yTWF4UHJvcGVydGllczogJ011c3QgaGF2ZSBhdCBtb3N0IHt7IG1heFByb3BlcnRpZXMgfX0gcHJvcGVydGllcy4nLFxuICBlcnJvck1heENvbnRhaW5zOiAnTXVzdCBjb250YWluIGF0IG1vc3Qge3sgbWF4Q29udGFpbnMgfX0gaXRlbXMgbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHNjaGVtYS4gSXQgY3VycmVudGx5IGNvbnRhaW5zIHt7IGNvdW50ZXIgfX0uJyxcbiAgZXJyb3JNaW5Db250YWluczogJ011c3QgY29udGFpbiBhdCBsZWFzdCB7eyBtaW5Db250YWlucyB9fSBpdGVtcyBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hLiBJdCBjdXJyZW50bHkgY29udGFpbnMge3sgY291bnRlciB9fS4nLFxuICBlcnJvck1pbmltdW06ICdNdXN0IGJlIGF0IGxlYXN0IHt7IG1pbmltdW0gfX0uJyxcbiAgZXJyb3JNaW5JdGVtczogJ011c3QgaGF2ZSBhdCBsZWFzdCB7eyBtaW5JdGVtcyB9fSBpdGVtcy4nLFxuICBlcnJvck1pbkxlbmd0aDogJ011c3QgYmUgYXQgbGVhc3Qge3sgbWluTGVuZ3RoIH19IGNoYXJhY3RlcnMgbG9uZy4nLFxuICBlcnJvck1pblByb3BlcnRpZXM6ICdNdXN0IGhhdmUgYXQgbGVhc3Qge3sgbWluUHJvcGVydGllcyB9fSBwcm9wZXJ0aWVzLicsXG4gIGVycm9yTXVsdGlwbGVPZjogJ011c3QgYmUgbXVsdGlwbGUgb2Yge3sgbXVsdGlwbGVPZiB9fS4nLFxuICBlcnJvck5vdDogJ011c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYS4nLFxuICBlcnJvck9uZU9mOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3Qge3sgY291bnRlciB9fSBvZiB0aGUgc2NoZW1hcy4nLFxuICBlcnJvclBhdHRlcm46ICdNdXN0IG1hdGNoIHRoZSBwYXR0ZXJuOiBcInt7IHBhdHRlcm4gfX1cIi4nLFxuICBlcnJvclByZWZpeEl0ZW1zOiAnSXRlbSB7eyBpbmRleCB9fSBmYWlscyB2YWxpZGF0aW9uLicsXG4gIGVycm9yUHJvcGVydHlOYW1lczogJ1Byb3BlcnR5IG5hbWUgXCJ7eyBwcm9wZXJ0eU5hbWUgfX1cIiBmYWlscyB2YWxpZGF0aW9uLicsXG4gIGVycm9yUmVxdWlyZWQ6ICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6IHt7IHJlcXVpcmVkIH19LicsXG4gIGVycm9yVHlwZTogJ011c3QgYmUgb2YgdHlwZSB7eyB0eXBlIH19LicsXG4gIGVycm9yVW5ldmFsdWF0ZWRQcm9wZXJ0aWVzOiAnSGFzIGludmFsaWQgdW5ldmFsdWF0ZWQgcHJvcGVydHkgXCJ7eyBwcm9wZXJ0eSB9fVwiJyxcbiAgZXJyb3JVbmlxdWVJdGVtczogJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMuJ1xufVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UuanMnXG5pbXBvcnQgeyBpc1NldCwgY2xvbmUsIGlzQXJyYXkgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IEVkaXRvckFycmF5IGZyb20gJy4uL2VkaXRvcnMvYXJyYXkuanMnXG5pbXBvcnQgRWRpdG9yQXJyYXlOYXYgZnJvbSAnLi4vZWRpdG9ycy9hcnJheS1uYXYuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYUl0ZW1zLCBnZXRTY2hlbWFQcmVmaXhJdGVtcywgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gSW5zdGFuY2VBcnJheSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlQXJyYXkgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FycmF5JyAmJiBzY2hlbWFGb3JtYXQgPT09ICduYXYnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckFycmF5TmF2KHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQXJyYXkodGhpcylcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBsZXQgc2NoZW1hXG4gICAgY29uc3QgaXRlbXNDb3VudCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgY29uc3Qgc2NoZW1hSXRlbXMgPSBnZXRTY2hlbWFJdGVtcyh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFQcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHRoaXMuc2NoZW1hKVxuICAgIHNjaGVtYSA9IGlzU2V0KHNjaGVtYUl0ZW1zKSA/IHNjaGVtYUl0ZW1zIDoge31cblxuICAgIGNvbnN0IGhhc1ByZWZpeEl0ZW1zU2NoZW1hID0gaXNTZXQoc2NoZW1hUHJlZml4SXRlbXMpICYmIGlzU2V0KHNjaGVtYVByZWZpeEl0ZW1zW2l0ZW1zQ291bnRdKVxuXG4gICAgaWYgKGhhc1ByZWZpeEl0ZW1zU2NoZW1hKSB7XG4gICAgICBzY2hlbWEgPSBzY2hlbWFQcmVmaXhJdGVtc1tpdGVtc0NvdW50XVxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBpdGVtc0NvdW50LFxuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgdmFsdWU6IGNsb25lKHZhbHVlKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VBcnJheVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UuanMnXG5pbXBvcnQgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcydcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMnXG5pbXBvcnQgRWRpdG9yQm9vbGVhbkNoZWNrYm94IGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi5qcydcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZUJvb2xlYW4gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUJvb2xlYW4gZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hRm9ybWF0ID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHNjaGVtYUZvcm1hdCA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuQ2hlY2tib3godGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUJvb2xlYW5cbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlLmpzJ1xuaW1wb3J0IEVkaXRvck11bHRpcGxlIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUuanMnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgbWVyZ2VEZWVwLFxuICBjbG9uZSxcbiAgaXNPYmplY3QsXG4gIG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllc1xufSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRWxzZSxcbiAgZ2V0U2NoZW1hSWYsXG4gIGdldFNjaGVtYVRoZW5cbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU11bHRpcGxlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VJZlRoZW5FbHNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JNdWx0aXBsZSh0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQgPSB0cnVlXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cbiAgICB0aGlzLmlmVGhlbkVsc2VTaGVtYXMgPSBbXVxuXG4gICAgdGhpcy50cmF2ZXJzZVNjaGVtYSh0aGlzLnNjaGVtYSlcblxuICAgIGRlbGV0ZSB0aGlzLnNjaGVtYS5pZlxuICAgIGRlbGV0ZSB0aGlzLnNjaGVtYS50aGVuXG4gICAgZGVsZXRlIHRoaXMuc2NoZW1hLmVsc2VcblxuICAgIGxldCBpbmRleCA9IDBcblxuICAgIHRoaXMuaWZUaGVuRWxzZVNoZW1hcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXNTZXQoaXRlbS50aGVuKSkge1xuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChtZXJnZURlZXAoe30sIGNsb25lKHRoaXMuc2NoZW1hKSwgaXRlbS50aGVuKSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKEpTT04uc3RyaW5naWZ5KGl0ZW0udGhlbikpXG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU2V0KGl0ZW0uZWxzZSkpIHtcbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2gobWVyZ2VEZWVwKHt9LCBjbG9uZSh0aGlzLnNjaGVtYSksIGl0ZW0uZWxzZSkpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChKU09OLnN0cmluZ2lmeShpdGVtLmVsc2UpKVxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gY2xvbmUodGhpcy5zY2hlbWEpXG4gICAgZGVsZXRlIHNjaGVtYUNsb25lLmlmXG4gICAgZGVsZXRlIHNjaGVtYUNsb25lLnRoZW5cbiAgICBkZWxldGUgc2NoZW1hQ2xvbmUuZWxzZVxuXG4gICAgY29uc3QgaW5zdGFuY2VXaXRob3V0SWYgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWFDbG9uZSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICB9KVxuXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhZnRlckNoYW5nZVZhbHVlID0gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KGFmdGVyQ2hhbmdlVmFsdWUpXG4gICAgICAgIGNvbnN0IG11c3RTd2l0Y2ggPSBmaXR0ZXN0SW5kZXggIT09IHRoaXMuaW5kZXhcblxuICAgICAgICBpZiAobXVzdFN3aXRjaCkge1xuICAgICAgICAgIHRoaXMuc2V0VmFsdWUoYWZ0ZXJDaGFuZ2VWYWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKG5ld1ZhbHVlKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZUJlZm9yZSA9IGluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgICAgbGV0IGZ1dHVyZVZhbHVlID0gbmV3VmFsdWVcblxuICAgICAgICBpZiAoaXNPYmplY3QodmFsdWVCZWZvcmUpICYmIGlzT2JqZWN0KGZ1dHVyZVZhbHVlKSkge1xuICAgICAgICAgIGZ1dHVyZVZhbHVlID0gb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzKHZhbHVlQmVmb3JlLCBmdXR1cmVWYWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKGZ1dHVyZVZhbHVlLCBmYWxzZSlcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KG5ld1ZhbHVlKVxuICAgICAgY29uc3QgbXVzdFN3aXRjaCA9IGZpdHRlc3RJbmRleCAhPT0gdGhpcy5pbmRleFxuXG4gICAgICBpZiAobXVzdFN3aXRjaCkge1xuICAgICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleClcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBpbml0aWFsIHZhbHVlIGFuZCBhY3RpdmUgaW5zdGFuY2VcbiAgICB0aGlzLnZhbHVlID0gaW5zdGFuY2VXaXRob3V0SWYuZ2V0VmFsdWUoKVxuICAgIGluc3RhbmNlV2l0aG91dElmLmRlc3Ryb3koKVxuICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHRoaXMudmFsdWUpXG4gICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgpXG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5pbmRleF1cbiAgICB0aGlzLnZhbHVlID0gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICB9XG5cbiAgdHJhdmVyc2VTY2hlbWEgKHNjaGVtYSkge1xuICAgIGNvbnN0IHNjaGVtYUlmID0gZ2V0U2NoZW1hSWYoc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUlmKSkge1xuICAgICAgY29uc3Qgc2NoZW1hVGhlbiA9IGdldFNjaGVtYVRoZW4oc2NoZW1hKVxuICAgICAgY29uc3Qgc2NoZW1hRWxzZSA9IGdldFNjaGVtYUVsc2Uoc2NoZW1hKVxuXG4gICAgICB0aGlzLmlmVGhlbkVsc2VTaGVtYXMucHVzaCh7XG4gICAgICAgIGlmOiBzY2hlbWFJZixcbiAgICAgICAgdGhlbjogaXNTZXQoc2NoZW1hVGhlbikgPyBzY2hlbWFUaGVuIDoge31cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaWZUaGVuRWxzZVNoZW1hcy5wdXNoKHtcbiAgICAgICAgaWY6IHNjaGVtYUlmLFxuICAgICAgICBlbHNlOiBpc1NldChzY2hlbWFFbHNlKSA/IHNjaGVtYUVsc2UgOiB7fVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGluc3RhbmNlIHRoYXQgaGFzIGxlc3MgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICovXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgZml0dGVzdEluZGV4ID0gdGhpcy5pbmRleFxuXG4gICAgdGhpcy5pZlRoZW5FbHNlU2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGlmVmFsaWRhdG9yID0gbmV3IEplZGkoe1xuICAgICAgICBzY2hlbWE6IHNjaGVtYS5pZixcbiAgICAgICAgZGF0YTogdmFsdWVcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGlmRXJyb3JzID0gaWZWYWxpZGF0b3IuZ2V0RXJyb3JzKClcbiAgICAgIGlmVmFsaWRhdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwICYmIHNjaGVtYS50aGVuKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICB9XG5cbiAgICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5lbHNlKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBnZXRBbGxPZkNvbWJpbmF0aW9ucyAoc2NoZW1hcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgICBjb25zdCBjb21iaW5lUHJvcGVydGllcyA9IChzY2hlbWExLCBzY2hlbWEyKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5zY2hlbWExLCAuLi5zY2hlbWEyIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZUNvbWJpbmF0aW9ucyA9IChjdXJyZW50LCByZW1haW5pbmcpID0+IHtcbiAgICAgIGlmIChyZW1haW5pbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXh0U2NoZW1hID0gcmVtYWluaW5nWzBdXG5cbiAgICAgIGdlbmVyYXRlQ29tYmluYXRpb25zKGNvbWJpbmVQcm9wZXJ0aWVzKGN1cnJlbnQsIG5leHRTY2hlbWEpLCByZW1haW5pbmcuc2xpY2UoMSkpXG4gICAgICBnZW5lcmF0ZUNvbWJpbmF0aW9ucyhjdXJyZW50LCByZW1haW5pbmcuc2xpY2UoMSkpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2hlbWFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBnZW5lcmF0ZUNvbWJpbmF0aW9ucyhzY2hlbWFzW2ldLCBzY2hlbWFzLnNsaWNlKGkgKyAxKSlcbiAgICB9XG5cbiAgICByZXN1bHQuc29ydCgoYSwgYikgPT4gT2JqZWN0LmtleXMoYSkubGVuZ3RoIC0gT2JqZWN0LmtleXMoYikubGVuZ3RoKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlSWZUaGVuRWxzZVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyLmpzJ1xuaW1wb3J0IHtcbiAgaXNTZXQsIG5vdFNldCwgcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheVxufSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRGVmYXVsdCxcbiAgZ2V0U2NoZW1hUmVhZE9ubHksXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEpTT04gaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBKZWRpIGluc3RhbmNlIHRvIHdoaWNoIHRoaXMgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKiBAdHlwZSB7SmVkaX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcblxuICAgIC8qKlxuICAgICAqIFRoZSBzY2hlbWEgcGF0aCBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkucm9vdE5hbWVcblxuICAgIC8qKlxuICAgICAqIEEgSlNPTiBzY2hlbWEuXG4gICAgICogQHR5cGUge2Jvb2xlYW58b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG5cbiAgICAvKipcbiAgICAgKiBUaGUganNvbiB2YWx1ZSBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHsqfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gaXNTZXQoY29uZmlnLnZhbHVlKSA/IGNvbmZpZy52YWx1ZSA6IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGlzIGluc3RhbmNlLiBJZiBmYWxzZSB0aGUgZWRpdG9yIGlzIG5vdCBwYXJ0aWNpcGF0aW5nXG4gICAgICogaW4gdGhlIHZhbHVlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBQYXJlbnQgaW5zdGFuY2Ugb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG5cbiAgICAvKipcbiAgICAgKiBDaGlsZCBpbnN0YW5jZXMgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2VbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVkaXRvciBjb250cm9sbGluZyB0aGlzIEluc3RhbmNlIGlmIGFueVxuICAgICAqIEB0eXBlIHtFZGl0b3J8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudWkgPSBudWxsXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJhc2VkIG9uIGl0J3MgdHlwZVxuICAgKi9cbiAgc2V0SW5pdGlhbFZhbHVlICgpIHtcbiAgICBpZiAobm90U2V0KHRoaXMudmFsdWUpKSB7XG4gICAgICBsZXQgdmFsdWVcbiAgICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hRGVmYXVsdCA9IGdldFNjaGVtYURlZmF1bHQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRGVmYXVsdCkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoc2NoZW1hRGVmYXVsdCwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScsIG5ld1ZhbHVlKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcblxuICAgIHJldHVybiByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5KGVycm9ycylcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBpbnN0YW5jZSBpcyByZWFkIG9ubHlcbiAgICovXG4gIGlzUmVhZE9ubHkgKCkge1xuICAgIGxldCByZWFkT25seSA9IGZhbHNlXG5cbiAgICBpZiAoZ2V0U2NoZW1hUmVhZE9ubHkodGhpcy5zY2hlbWEpID09PSB0cnVlKSB7XG4gICAgICByZWFkT25seSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgZ2V0U2NoZW1hUmVhZE9ubHkodGhpcy5wYXJlbnQuc2NoZW1hKSA9PT0gdHJ1ZSkge1xuICAgICAgcmVhZE9ubHkgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZS5qcydcbmltcG9ydCBFZGl0b3JNdWx0aXBsZSBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlLmpzJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIGlzQXJyYXksXG4gIGRpZmZlcmVudCxcbiAgbm90U2V0LFxuICBjbG9uZSxcbiAgbWVyZ2VEZWVwXG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBbnlPZixcbiAgZ2V0U2NoZW1hT25lT2YsXG4gIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUsXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU11bHRpcGxlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JNdWx0aXBsZSh0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSkgfHwgaXNTZXQoZ2V0U2NoZW1hT25lT2YodGhpcy5zY2hlbWEpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQoZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpKSA/IGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSA6IGdldFNjaGVtYU9uZU9mKHRoaXMuc2NoZW1hKVxuICAgICAgY29uc3Qgc2NoZW1hQ29weSA9IGNsb25lKHRoaXMuc2NoZW1hKVxuICAgICAgZGVsZXRlIHNjaGVtYUNvcHlbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBzY2hlbWFDb3B5WydvbmVPZiddXG4gICAgICBkZWxldGUgc2NoZW1hQ29weVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uc2NoZW1hQ29weSwgLi4uc2NoZW1hIH1cblxuICAgICAgICBpZiAodGhpcy5qZWRpLnJlZlBhcnNlcikge1xuICAgICAgICAgIHNjaGVtYSA9IHRoaXMuamVkaS5yZWZQYXJzZXIuZXhwYW5kKHNjaGVtYSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9ICdPcHRpb24tJyArIChpbmRleCArIDEpXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyVGl0bGUgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnc3dpdGNoZXJUaXRsZScpXG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoc2NoZW1hKVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFUaXRsZSkpIHtcbiAgICAgICAgICBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYVRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc3dpdGNoZXJUaXRsZSkpIHtcbiAgICAgICAgICBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHN3aXRjaGVyVGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChzd2l0Y2hlck9wdGlvbnNMYWJlbClcbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoc2NoZW1hVHlwZSkpIHtcbiAgICAgIHNjaGVtYVR5cGUuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBtZXJnZURlZXAodGhpcy5zY2hlbWEpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdhbnknIHx8ICFzY2hlbWFUeXBlKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHRoaXMuc2NoZW1hKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdPYmplY3QnLCAnQXJyYXknLCAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgICAgdmFsdWU6IGNsb25lKHRoaXMudmFsdWUpXG4gICAgICB9KVxuXG4gICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy52YWx1ZSwgZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vZmYoJ2NoYW5nZScpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHRoaXMudmFsdWUpXG4gICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIHRoaXMudmFsdWUpXG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAoaW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW2luZGV4XVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCkpXG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdGhpcy52YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHRoaXMudmFsdWUpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleCwgdGhpcy52YWx1ZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGluc3RhbmNlIHRoYXQgaGFzIGxlc3MgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICovXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VNdWx0aXBsZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UuanMnXG5pbXBvcnQgRWRpdG9yTnVsbCBmcm9tICcuLi9lZGl0b3JzL251bGwuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTnVsbCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTnVsbCBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVsbCh0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTnVsbFxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UuanMnXG5pbXBvcnQgRWRpdG9yTnVtYmVyRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMnXG5pbXBvcnQgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcydcbmltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXIuanMnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VOdW1iZXIgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU51bWJlciBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCB0eXBlSXNOdW1lcmljID0gc2NoZW1hVHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInXG5cbiAgICBpZiAodHlwZUlzTnVtZXJpYyAmJiBpc1NldChzY2hlbWFFbnVtKSAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0eXBlSXNOdW1lcmljICYmIGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlckVudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHR5cGVJc051bWVyaWMpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTnVtYmVyXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZS5qcydcbmltcG9ydCB7IGRpZmZlcmVudCwgaXNTZXQsIG5vdFNldCwgaXNPYmplY3QsIGhhc093biwgY2xvbmUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IEVkaXRvck9iamVjdEdyaWQgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QtZ3JpZC5qcydcbmltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QuanMnXG5pbXBvcnQgRWRpdG9yT2JqZWN0TmF2IGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LW5hdi5qcydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCxcbiAgZ2V0U2NoZW1hRm9ybWF0LFxuICBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFQcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFSZXF1aXJlZCxcbiAgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEluc3RhbmNlT2JqZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VPYmplY3QgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hQ29udHJvbCA9IHRoaXMuc2NoZW1hWyd4LWNvbnRyb2wnXVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnICYmIHNjaGVtYUZvcm1hdCA9PT0gJ2dyaWQnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdEdyaWQodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnICYmIHNjaGVtYUNvbnRyb2wgPT09ICduYXYnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdE5hdih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHt9XG4gICAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXModGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hUHJvcGVydGllcykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYVByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBzY2hlbWFQcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW2tleV0gPSB7IHNjaGVtYSB9XG5cbiAgICAgICAgbGV0IG11c3N0Q3JlYXRlQ2hpbGQgPSB0cnVlXG5cbiAgICAgICAgY29uc3Qgb3B0aW9uc0RlYWN0aXZhdGVOb25SZXF1aXJlZCA9IHRoaXMuamVkaS5vcHRpb25zLmRlYWN0aXZhdGVOb25SZXF1aXJlZFxuICAgICAgICBjb25zdCBkZWFjdGl2YXRlTm9uUmVxdWlyZWQgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5zY2hlbWEsICdkZWFjdGl2YXRlTm9uUmVxdWlyZWQnKVxuICAgICAgICBjb25zdCBzY2hlbWFEZWFjdGl2YXRlTm9uUmVxdWlyZWQgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnZGVhY3RpdmF0ZU5vblJlcXVpcmVkJylcblxuICAgICAgICBpZiAodGhpcy5pc05vdFJlcXVpcmVkKGtleSkgJiYgaXNTZXQob3B0aW9uc0RlYWN0aXZhdGVOb25SZXF1aXJlZCkgJiYgb3B0aW9uc0RlYWN0aXZhdGVOb25SZXF1aXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG11c3N0Q3JlYXRlQ2hpbGQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNOb3RSZXF1aXJlZChrZXkpICYmIGlzU2V0KGRlYWN0aXZhdGVOb25SZXF1aXJlZCkgJiYgZGVhY3RpdmF0ZU5vblJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgbXVzc3RDcmVhdGVDaGlsZCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc05vdFJlcXVpcmVkKGtleSkgJiYgaXNTZXQoc2NoZW1hRGVhY3RpdmF0ZU5vblJlcXVpcmVkKSAmJiBzY2hlbWFEZWFjdGl2YXRlTm9uUmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBtdXNzdENyZWF0ZUNoaWxkID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtdXNzdENyZWF0ZUNoaWxkKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3Qgc2NoZW1hUmVxdWlyZWQgPSBnZXRTY2hlbWFSZXF1aXJlZCh0aGlzLnNjaGVtYSlcblxuICAgIHJldHVybiBpc1NldChzY2hlbWFSZXF1aXJlZCkgJiYgc2NoZW1hUmVxdWlyZWQuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChkZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc093bih0aGlzLnZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWlzc2luZ1Byb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjcmVhdGVDaGlsZCAoc2NoZW1hLCBrZXksIHZhbHVlLCBhY3RpdmF0ZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGtleSxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIHZhbHVlOiBjbG9uZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGNvbnN0IGRlYWN0aXZhdGVOb25SZXF1aXJlZCA9IHRoaXMuamVkaS5vcHRpb25zLmRlYWN0aXZhdGVOb25SZXF1aXJlZCB8fCBnZXRTY2hlbWFPcHRpb24odGhpcy5zY2hlbWEsICdkZWFjdGl2YXRlTm9uUmVxdWlyZWQnKVxuXG4gICAgaWYgKHRoaXMuaXNOb3RSZXF1aXJlZChrZXkpICYmIGlzU2V0KGRlYWN0aXZhdGVOb25SZXF1aXJlZCkgJiYgZGVhY3RpdmF0ZU5vblJlcXVpcmVkID09PSB0cnVlICYmICFhY3RpdmF0ZSkge1xuICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBpc05vdFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhdGhpcy5pc1JlcXVpcmVkKHByb3BlcnR5KSAmJiAhdGhpcy5pc0RlcGVuZGVudFJlcXVpcmVkKHByb3BlcnR5KVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIGdldFByb3BlcnR5U2NoZW1hIChwcm9wZXJ0eU5hbWUpIHtcbiAgICBsZXQgc2NoZW1hXG4gICAgY29uc3Qgc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUHJvcGVydGllcyh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHRoaXMuc2NoZW1hKVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBhcHByb3ByaWF0ZSBzY2hlbWFcbiAgICBpZiAoaXNTZXQoc2NoZW1hUHJvcGVydGllcykgJiYgaGFzT3duKHNjaGVtYVByb3BlcnRpZXMsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgIC8vIElmIHRoZSBwcm9wZXJ0eU5hbWUgaXMgZXhwbGljaXRseSBkZWZpbmVkIGluIGBwcm9wZXJ0aWVzYCwgdXNlIGl0XG4gICAgICBzY2hlbWEgPSBzY2hlbWFQcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV1cbiAgICB9IGVsc2UgaWYgKGlzU2V0KHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgLy8gSWYgbm8gZXhhY3QgbWF0Y2ggaW4gYHByb3BlcnRpZXNgLCBjaGVjayBpZiBpdCBtYXRjaGVzIGFueSBwYXR0ZXJuIGluIGBwYXR0ZXJuUHJvcGVydGllc2BcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBzY2hlbWEgPSBzY2hlbWFQYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChub3RTZXQoc2NoZW1hKSAmJiBpc1NldChzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgIC8vIElmIG5vIG1hdGNoIHdhcyBmb3VuZCBpbiBgcHJvcGVydGllc2Agb3IgYHBhdHRlcm5Qcm9wZXJ0aWVzYCwgdXNlIGBhZGRpdGlvbmFsUHJvcGVydGllc2BcbiAgICAgIHNjaGVtYSA9IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgaWYgKG5vdFNldChzY2hlbWEpKSB7XG4gICAgICBzY2hlbWEgPSB7fVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKHByb3BlcnR5TmFtZSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5nZXRQcm9wZXJ0eVNjaGVtYShwcm9wZXJ0eU5hbWUpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIHByb3BlcnR5TmFtZSwgdmFsdWVbcHJvcGVydHlOYW1lXSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVbcHJvcGVydHlOYW1lXSkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQocHJvcGVydHlOYW1lKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlT2JqZWN0XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZS5qcydcbmltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcuanMnXG5pbXBvcnQgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMnXG5pbXBvcnQgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcydcbmltcG9ydCBFZGl0b3JTdHJpbmdUZXh0YXJlYSBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy10ZXh0YXJlYS5qcydcbmltcG9ydCBFZGl0b3JTdHJpbmdBd2Vzb21wbGV0ZSBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1hd2Vzb21wbGV0ZS5qcydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUVudW0sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hWE9wdGlvbiwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZVN0cmluZyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlU3RyaW5nIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IGF3ZXNvbXBsZXRlID0gZ2V0U2NoZW1hWE9wdGlvbih0aGlzLnNjaGVtYSwgJ2F3ZXNvbXBsZXRlJylcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBpc1NldChzY2hlbWFFbnVtKSAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBzY2hlbWFGb3JtYXQgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nVGV4dGFyZWEodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnICYmIGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ0VudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnICYmIGlzU2V0KGF3ZXNvbXBsZXRlKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JTdHJpbmdBd2Vzb21wbGV0ZSh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlU3RyaW5nXG4iLCJpbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0b3IuanMnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcydcbmltcG9ydCBJbnN0YW5jZUlmVGhlbkVsc2UgZnJvbSAnLi9pbnN0YW5jZXMvaWYtdGhlbi1lbHNlLmpzJ1xuaW1wb3J0IEluc3RhbmNlTXVsdGlwbGUgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUuanMnXG5pbXBvcnQgSW5zdGFuY2VCb29sZWFuIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4uanMnXG5pbXBvcnQgSW5zdGFuY2VPYmplY3QgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0LmpzJ1xuaW1wb3J0IEluc3RhbmNlQXJyYXkgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXkuanMnXG5pbXBvcnQgSW5zdGFuY2VTdHJpbmcgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nLmpzJ1xuaW1wb3J0IEluc3RhbmNlTnVtYmVyIGZyb20gJy4vaW5zdGFuY2VzL251bWJlci5qcydcbmltcG9ydCBJbnN0YW5jZU51bGwgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbC5qcydcbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzU2V0LCBtZXJnZURlZXAsXG4gIG5vdFNldFxufSBmcm9tICcuL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBbGxPZixcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYUVsc2UsXG4gIGdldFNjaGVtYUlmLFxuICBnZXRTY2hlbWFPbmVPZiwgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaGVuLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEplZGkgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIEplZGkgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtvYmplY3R8Ym9vbGVhbn0gb3B0aW9ucy5zY2hlbWEgLSBBIEpTT04gc2NoZW1hXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5jb250YWluZXIgLSBXaGVyZSB0aGUgVUkgY29udHJvbHMgd2lsbCBiZSByZW5kZXJlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50aGVtZSAtIEhvdyB0aGUgVUkgY29udHJvbHMgd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIHJlZlBhcnNlcjogbnVsbCxcbiAgICAgIGVuYWJsZVByb3BlcnRpZXNUb2dnbGU6IGZhbHNlLFxuICAgICAgZW5hYmxlQ29sbGFwc2VUb2dnbGU6IGZhbHNlLFxuICAgICAgc3RhcnRDb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgZGVhY3RpdmF0ZU5vblJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICBzaG93RXJyb3JzOiAnY2hhbmdlJyxcbiAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgIHZhbGlkYXRlRm9ybWF0OiBmYWxzZSxcbiAgICAgIG1lcmdlQWxsT2Y6IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIC8qKlxuICAgICAqIFJvb3RzIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucm9vdE5hbWUgPSAnIydcblxuICAgIC8qKlxuICAgICAqIFNlcGFyYXRvciBzeW1ib2wgdXNlZCBpbiBwYXRoc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhdGhTZXBhcmF0b3IgPSAnLydcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgcmVnaXN0ZXJlZCBpbnN0YW5jZXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuXG4gICAgLyoqXG4gICAgICogVGhlIHJvb3QgZWRpdG9yXG4gICAgICogQHR5cGUge0luc3RhbmNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290ID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIFRoZW1lIGluc3RhbmNlIHVzZWQgdG8gZ2VuZXJhdGUgZWRpdG9ycyB1c2VyIGludGVyZmFjZXNcbiAgICAgKiBAdHlwZSB7VGhlbWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIFZhbGlkYXRvciBpbnN0YW5jZSB1c2VkIHRvIHZhbGlkYXRlIGluc3RhbmNlIHZhbHVlc1xuICAgICAqIEB0eXBlIHtWYWxpZGF0b3J9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRvciA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEganNvbiBzY2hlbWEgdXNlZFxuICAgICAqIEB0eXBlIHsqfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zY2hlbWEgPSB7fVxuXG4gICAgLyoqXG4gICAgICogQSBSZWZQYXJzZXIgaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7UmVmUGFyc2VyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yZWZQYXJzZXIgPSB0aGlzLm9wdGlvbnMucmVmUGFyc2VyID8gdGhpcy5vcHRpb25zLnJlZlBhcnNlciA6IG51bGxcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgaW5zdGFuY2UgcHJvcGVydGllc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5zY2hlbWEgPSB0aGlzLm9wdGlvbnMuc2NoZW1hXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKHsgcmVmUGFyc2VyOiB0aGlzLnJlZlBhcnNlciwgdmFsaWRhdGVGb3JtYXQ6IHRoaXMub3B0aW9ucy52YWxpZGF0ZUZvcm1hdCB9KVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLm9wdGlvbnMuc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5yb290TmFtZVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLmRhdGEpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLmRhdGEsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgYmluZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oaWRkZW5JbnB1dCkge1xuICAgICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvc2UgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgY29uc3QgaGlkZGVuQ29udHJvbCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG5cbiAgICB0aGlzLmhpZGRlbklucHV0ID0gaGlkZGVuQ29udHJvbC5pbnB1dFxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuICAgIHRoaXMuaGlkZGVuSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGpzb24gaW5zdGFuY2UgYW5kIGRlcmVmZXJlbmNlIHNjaGVtYSBvbiB0aGUgZmx5IGlmIG5lZWRlZC5cbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBjb25zdCBtZXJnZUFsbE9mID0gdGhpcy5vcHRpb25zLm1lcmdlQWxsT2YgfHwgZ2V0U2NoZW1hT3B0aW9uKGNvbmZpZy5zY2hlbWEsICdtZXJnZUFsbE9mJylcblxuICAgIGlmIChtZXJnZUFsbE9mKSB7XG4gICAgICBjb25zdCBhbGxPZiA9IGdldFNjaGVtYUFsbE9mKGNvbmZpZy5zY2hlbWEpXG5cbiAgICAgIGlmIChpc1NldChhbGxPZikpIHtcbiAgICAgICAgYWxsT2YuZm9yRWFjaCgoc3Vic2NoZW1hKSA9PiB7XG4gICAgICAgICAgY29uZmlnLnNjaGVtYSA9IG1lcmdlRGVlcCh7fSwgY29uZmlnLnNjaGVtYSwgc3Vic2NoZW1hKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnJlZlBhcnNlcikge1xuICAgICAgY29uZmlnLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmV4cGFuZChjb25maWcuc2NoZW1hLCBjb25maWcucGF0aClcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZShjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYU9uZU9mID0gZ2V0U2NoZW1hT25lT2YoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFBbnlPZiA9IGdldFNjaGVtYUFueU9mKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hSWYgPSBnZXRTY2hlbWFJZihjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYVRoZW4gPSBnZXRTY2hlbWFUaGVuKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRWxzZSA9IGdldFNjaGVtYUVsc2UoY29uZmlnLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFBbnlPZikgfHwgaXNTZXQoc2NoZW1hT25lT2YpIHx8IHNjaGVtYVR5cGUgPT09ICdhbnknIHx8IGlzQXJyYXkoc2NoZW1hVHlwZSkgfHwgbm90U2V0KHNjaGVtYVR5cGUpKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlTXVsdGlwbGUoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWFJZikgJiYgKGlzU2V0KHNjaGVtYVRoZW4pIHx8IGlzU2V0KHNjaGVtYUVsc2UpKSkge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZUlmVGhlbkVsc2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU9iamVjdChjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VBcnJheShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlU3RyaW5nKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlTnVtYmVyKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlQm9vbGVhbihjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU51bGwoY29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBnZXRFcnJvcnMgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5pbnN0YW5jZS5nZXRFcnJvcnMoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIiwiaW1wb3J0IHsgbWVyZ2VEZWVwIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucmVmcyA9IHt9XG4gICAgdGhpcy5kYXRhID0ge31cbiAgfVxuXG4gIGFzeW5jIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICBhd2FpdCB0aGlzLmNvbGxlY3RSZWZzKHNjaGVtYSlcblxuICAgIHdoaWxlICh0aGlzLnJlZnNSZXNvbHZlZCgpID09PSBmYWxzZSkge1xuICAgICAgYXdhaXQgdGhpcy5jb2xsZWN0UmVmcyhzY2hlbWEpXG4gICAgfVxuICB9XG5cbiAgcmVmc1Jlc29sdmVkICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnJlZnMpLmV2ZXJ5KCh2YWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmF2ZXJzZXMgdGhlIGdpdmVuIHNjaGVtYSByZWN1cnNpdmVseSBhbmQgZm9yIGVhY2ggc2NoZW1hIHdpdGggJHJlZlxuICAgKiBhZGQgYSBuZXcgcHJvcGVydHkgaW4gdGhlIHRoaXMucmVmcyBvYmplY3Qgd2l0aCBrZXkgYmVpbmcgdGhlIGpzb24gcGF0aCB0byB0aGF0IHNjaGVtYS5cbiAgICogSWYgdGhlIHJlZiBoYXMgbm8gdmFsdWUgaW4gZGF0YSB3aWxsIGJlIGdpdmVuIGEgdmFsdWUgb2YgbnVsbC4gVGhpcyB2YWx1ZSB3aWxsIGJlIGxhdGVyXG4gICAqIHJlcGxhY2VkIGluIGEgZnV0dXJlIGl0ZXJhdGlvbi4gQXQgdGhhdCB0aW1lIHRoZSBkYXRhIHdpbGwgYmUgYXZhaWxhYmxlXG4gICAqIEBwYXJhbSBzY2hlbWFcbiAgICogQHBhcmFtIHBhdGhcbiAgICovXG4gIGFzeW5jIGNvbGxlY3RSZWZzIChzY2hlbWEsIHBhdGggPSAnIycpIHtcbiAgICBpZiAodHlwZW9mIHNjaGVtYSAhPT0gJ29iamVjdCcgfHwgc2NoZW1hID09PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzY2hlbWEpKSB7XG4gICAgICBjb25zdCBuZXh0UGF0aCA9IHBhdGggPyBgJHtwYXRofS8ke2tleX1gIDogYC8ke2tleX1gXG5cbiAgICAgIGlmICh0aGlzLmhhc1JlZihzY2hlbWEpKSB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHNjaGVtYVsnJHJlZiddXG5cbiAgICAgICAgaWYgKHRoaXMuaXNFeHRlcm5hbFJlZihyZWYpKSB7XG4gICAgICAgICAgY29uc3QgcmVzb2x2ZWRTY2hlbWEgPSBhd2FpdCB0aGlzLmxvYWQocmVmKVxuICAgICAgICAgIHRoaXMucmVmc1tyZWZdID0gcmVzb2x2ZWRTY2hlbWFcbiAgICAgICAgICBhd2FpdCB0aGlzLmNvbGxlY3RSZWZzKHJlc29sdmVkU2NoZW1hLCBuZXh0UGF0aClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlZnNbcmVmXSA9IHRoaXMuZGF0YVtyZWZdID8/IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGFbcGF0aF0gPSBzY2hlbWFcblxuICAgICAgYXdhaXQgdGhpcy5jb2xsZWN0UmVmcyh2YWx1ZSwgbmV4dFBhdGgpXG4gICAgfVxuICB9XG5cbiAgaGFzUmVmIChzY2hlbWEpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNjaGVtYVsnJHJlZiddICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2NoZW1hWyckcmVmJ10gPT09ICdzdHJpbmcnXG4gIH1cblxuICBpc0V4dGVybmFsUmVmIChyZWYpIHtcbiAgICBpZiAodHlwZW9mIHJlZiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiByZWYuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHJlZi5zdGFydHNXaXRoKCdodHRwcycpXG4gIH1cblxuICBpc09iamVjdCAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICB9XG5cbiAgZXhwYW5kIChzY2hlbWEpIHtcbiAgICBjb25zdCBjbG9uZVNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2NoZW1hKSlcblxuICAgIGlmICh0aGlzLmlzT2JqZWN0KGNsb25lU2NoZW1hKSAmJiB0aGlzLmhhc1JlZihjbG9uZVNjaGVtYSkpIHtcbiAgICAgIGNvbnN0IHJlZiA9IGNsb25lU2NoZW1hLiRyZWZcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnJHJlZiddXG4gICAgICByZXR1cm4gdGhpcy5leHBhbmQobWVyZ2VEZWVwKHt9LCB0aGlzLnJlZnNbcmVmXSwgY2xvbmVTY2hlbWEpKVxuICAgIH1cblxuICAgIHJldHVybiBjbG9uZVNjaGVtYVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgc2NoZW1hIHdpdGggYSBzeW5jaHJvbm91cyBodHRwIHJlcXVlc3RcbiAgICogQHBhcmFtIHVyaVxuICAgKiBAcmV0dXJucyB7YW55fVxuICAgKi9cbiAgYXN5bmMgbG9hZCAodXJpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJpKVxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpXG4gICAgICB9XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcnLCB1cmksIGVycm9yKVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXAzIGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWUge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IGZhbHNlXG4gIH1cblxuICBnZXRBZGRQcm9wZXJ0eUJ1dHRvbiAoKSB7XG4gICAgY29uc3QgYnRuID0gc3VwZXIuZ2V0QWRkUHJvcGVydHlCdXR0b24oKVxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tcHJpbWFyeScpXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1ibG9jaycpXG4gICAgcmV0dXJuIGJ0blxuICB9XG5cbiAgZ2V0Q29sbGFwc2VUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHN1cGVyLmdldENvbGxhcHNlVG9nZ2xlKGNvbmZpZylcbiAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgY29uZmlnLmNvbGxhcHNlSWQpXG4gICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIHJldHVybiB0b2dnbGVcbiAgfVxuXG4gIGdldENvbGxhcHNlIChjb25maWcpIHtcbiAgICBjb25zdCBjb2xsYXBzZSA9IHN1cGVyLmdldENvbGxhcHNlKGNvbmZpZylcbiAgICBjb2xsYXBzZS5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG5cbiAgICBpZiAoIWNvbmZpZy5zdGFydENvbGxhcHNlZCkge1xuICAgICAgY29sbGFwc2UuY2xhc3NMaXN0LmFkZCgnaW4nKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xsYXBzZVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1kZWZhdWx0JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnaDUnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgncHVsbC1sZWZ0JylcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXJnaW46IDA7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsnKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtcmlnaHQnKVxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgaHRtbC5zdHlsZS5jbGVhciA9ICdib3RoJ1xuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnRpdGxlSGlkZGVuKSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGJvZHksIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ3JhZGlvJylcblxuICAgICAgYm9keS5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdygpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdChjb25maWcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtc3RhY2tlZCcpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1zdGFja2VkJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIHZpc3VhbGx5SGlkZGVuIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgfVxuXG4gIHZpc3VhbGx5VmlzaWJsZSAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3Itb25seScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXAzXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXA0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWUge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IGZhbHNlXG4gIH1cblxuICBnZXRBZGRQcm9wZXJ0eUJ1dHRvbiAoKSB7XG4gICAgY29uc3QgYnRuID0gc3VwZXIuZ2V0QWRkUHJvcGVydHlCdXR0b24oKVxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tcHJpbWFyeScpXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1ibG9jaycpXG4gICAgcmV0dXJuIGJ0blxuICB9XG5cbiAgZ2V0Q29sbGFwc2VUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHN1cGVyLmdldENvbGxhcHNlVG9nZ2xlKGNvbmZpZylcbiAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgY29uZmlnLmNvbGxhcHNlSWQpXG4gICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIHJldHVybiB0b2dnbGVcbiAgfVxuXG4gIGdldENvbGxhcHNlIChjb25maWcpIHtcbiAgICBjb25zdCBjb2xsYXBzZSA9IHN1cGVyLmdldENvbGxhcHNlKGNvbmZpZylcbiAgICBjb2xsYXBzZS5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG5cbiAgICBpZiAoIWNvbmZpZy5zdGFydENvbGxhcHNlZCkge1xuICAgICAgY29sbGFwc2UuY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxhcHNlXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2g2JylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LWxlZnQnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdweS0yJylcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWVuZCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BiLTAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnRpdGxlSGlkZGVuKSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgYm9keSwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgYm9keS5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbHVtbkNsYXNzIChzaXplLCBjb2xzKSB7XG4gICAgcmV0dXJuICdjb2wtJyArIHNpemUgKyAnLScgKyBjb2xzXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KHhzLCBtZCwgb2Zmc2V0TWQpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdvZmZzZXQtbWQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KClcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29sdW1uJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1jb2x1bW4nKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG4gICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKVxuXG4gICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKVxuICAgIHRhYi5saW5rLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAndGFiJylcblxuICAgIGlmIChjb25maWcuYWN0aXZlKSB7XG4gICAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICB2aXN1YWxseUhpZGRlbiAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gIH1cblxuICB2aXN1YWxseVZpc2libGUgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0QWRkUHJvcGVydHlCdXR0b24gKCkge1xuICAgIGNvbnN0IGJ0biA9IHN1cGVyLmdldEFkZFByb3BlcnR5QnV0dG9uKClcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLXByaW1hcnknKVxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCd3LTEwMCcpXG4gICAgcmV0dXJuIGJ0blxuICB9XG5cbiAgZ2V0Q29sbGFwc2VUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHN1cGVyLmdldENvbGxhcHNlVG9nZ2xlKGNvbmZpZylcbiAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgY29uZmlnLmNvbGxhcHNlSWQpXG4gICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIHJldHVybiB0b2dnbGVcbiAgfVxuXG4gIGdldENvbGxhcHNlIChjb25maWcpIHtcbiAgICBjb25zdCBjb2xsYXBzZSA9IHN1cGVyLmdldENvbGxhcHNlKGNvbmZpZylcbiAgICBjb2xsYXBzZS5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG5cbiAgICBpZiAoIWNvbmZpZy5zdGFydENvbGxhcHNlZCkge1xuICAgICAgY29sbGFwc2UuY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxhcHNlXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2g2JylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3B5LTInKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtZW5kJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGItMCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBib2R5LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBib2R5LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KHhzLCBtZCwgb2Zmc2V0TWQpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdvZmZzZXQtbWQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29sdW1uJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1jb2x1bW4nKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG4gICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKVxuXG4gICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKVxuICAgIHRhYi5saW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAndGFiJylcblxuICAgIGlmIChjb25maWcuYWN0aXZlKSB7XG4gICAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICB2aXN1YWxseUhpZGRlbiAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgfVxuXG4gIHZpc3VhbGx5VmlzaWJsZSAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsIi8qKlxuICogTGlzdHMgb2YgaHRtbCBjbGFzc2VzIHVzZWQgZm9yIGljb25zLlxuICogQG1vZHVsZSBpY29uc1xuICovXG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBnbHlwaGljb25zIGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZ2x5cGhpY29ucyA9IHtcbiAgcHJvcGVydGllczogJ2dseXBoaWNvbiBnbHlwaGljb24tbGlzdCcsXG4gIGRlbGV0ZTogJ2dseXBoaWNvbiBnbHlwaGljb24tdHJhc2gnLFxuICBhZGQ6ICdnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMnLFxuICBtb3ZlVXA6ICdnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWRvd24nLFxuICBjb2xsYXBzZTogJ2dseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgYm9vdHN0cmFwLWljb25zIGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgYm9vdHN0cmFwSWNvbnMgPSB7XG4gIHByb3BlcnRpZXM6ICdiaSBiaS1jYXJkLWxpc3QnLFxuICBkZWxldGU6ICdiaSBiaS10cmFzaDInLFxuICBhZGQ6ICdiaSBiaS1wbHVzJyxcbiAgbW92ZVVwOiAnYmkgYmktYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2JpIGJpLWFycm93LWRvd24nLFxuICBjb2xsYXBzZTogJ2JpIGJpLWNoZXZyb24tZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lMyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lMyA9IHtcbiAgcHJvcGVydGllczogJ2ljb24tbGlzdCcsXG4gIGRlbGV0ZTogJ2ljb24tdHJhc2gnLFxuICBhZGQ6ICdpY29uLXBsdXMnLFxuICBtb3ZlVXA6ICdpY29uLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdpY29uLWFycm93LWRvd24nLFxuICBjb2xsYXBzZTogJ2ljb24tY2hldnJvbi1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWU0IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU0ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmEgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhIGZhLXRyYXNoLW8nLFxuICBhZGQ6ICdmYSBmYS1wbHVzJyxcbiAgbW92ZVVwOiAnZmEgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhIGZhLWFycm93LWRvd24nLFxuICBjb2xsYXBzZTogJ2ZhIGZhLWNoZXZyb24tZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lNSBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNSA9IHtcbiAgcHJvcGVydGllczogJ2ZhcyBmYS1saXN0JyxcbiAgZGVsZXRlOiAnZmFzIGZhLXRyYXNoJyxcbiAgYWRkOiAnZmFzIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYXMgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhcyBmYS1hcnJvdy1kb3duJyxcbiAgY29sbGFwc2U6ICdmYXMgZmEtY2hldnJvbi1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWU2IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU2ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmEtc29saWQgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhLXNvbGlkIGZhLXRyYXNoJyxcbiAgYWRkOiAnZmEtc29saWQgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhLXNvbGlkIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYS1zb2xpZCBmYS1hcnJvdy1kb3duJyxcbiAgY29sbGFwc2U6ICdmYS1zb2xpZCBmYS1jaGV2cm9uLWRvd24nXG59XG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVGhlbWUge1xuICBjb25zdHJ1Y3RvciAoaWNvbnMgPSBudWxsKSB7XG4gICAgdGhpcy5pY29ucyA9IGljb25zXG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSB0cnVlXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0cyBzb21lIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpY29uIGVsZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEljb24gKG5hbWUpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgY29uc3QgaWNvbkNsYXNzZXMgPSB0aGlzLmljb25zW25hbWVdLnNwbGl0KCcgJylcblxuICAgIGlmIChpY29uQ2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpY29uQ2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGljb25cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHdyYXAgdGhlIGVkaXRvciBVSSBlbGVtZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGdyb3VwIHNldmVyYWwgY29udHJvbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItZmllbGRzZXQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIGNhcHRpb24gZm9yIHRoZSBjb250ZW50IG9mIGl0cyBwYXJlbnQgZmllbGRzZXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBjb25zdCBsZWdlbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWxlZ2VuZCcpXG4gICAgbGVnZW5kVGV4dC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1sZWdlbmQtdGV4dCcpXG4gICAgbGVnZW5kLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgJyNsZWdlbmQtJyArIGNvbmZpZy5pZClcbiAgICBsZWdlbmRUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgbGVnZW5kVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJyNsZWdlbmQtJyArIGNvbmZpZy5pZClcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQobGVnZW5kVGV4dClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb21wbGV4IGVkaXRvcnMgbGlrZSBhcnJheXMsIG9iamVjdHMgYW5kIG11bHRpcGxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNhcmQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogSGVhZGVyIGZvciBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEhlYWRlciAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jYXJkLWhlYWRlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJvZHkgZm9yIHRoZSBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhcnJheSBzcGVjaWZpYyBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGNoaWxkIGVkaXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkcmVuLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1lc3NhZ2VzU2xvdCAoY29uZmlnID0ge30pIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYXRvbWljJywgJ2ZhbHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpXG5cbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgY29udHJvbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIE9iamVjdEVkaXRvciBwcm9wZXJ0aWVzIHdyYXBwZXIgdmlzaWJpbGl0eVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcblxuICAgIC8vIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cykge1xuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maWcucHJvcGVydGllc0NvbnRhaW5lci5vcGVuKSB7XG4gICAgICAgIGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyLmNsb3NlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyLnNob3dNb2RhbCgpXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyB9XG5cbiAgICByZXR1cm4gdG9nZ2xlXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIHRoYXQgd2lsbCBjb2xsYXBzZSBhbmQgZXhwYW5kIHRvIHNob3cgYW5kIGhpZGUgaXQgY29udGVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbGxhcHNlIChjb25maWcpIHtcbiAgICBjb25zdCBjb2xsYXBzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29sbGFwc2UuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2xsYXBzZScpXG4gICAgY29sbGFwc2Uuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cyAmJiBjb25maWcuc3RhcnRDb2xsYXBzZWQpIHtcbiAgICAgIGNvbGxhcHNlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGFwc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgYnV0dG9uIGZvciBjb2xsYXBzZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q29sbGFwc2VUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2xsYXBzZS10b2dnbGUnKVxuXG4gICAgaWYgKHRoaXMudXNlVG9nZ2xlRXZlbnRzKSB7XG4gICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChjb25maWcuY29sbGFwc2Uuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgY29uZmlnLmNvbGxhcHNlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uZmlnLmNvbGxhcHNlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBsZXQgY29sbGFwc2VkID0gY29uZmlnLnN0YXJ0Q29sbGFwc2VkXG5cbiAgICB0b2dnbGUuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4xcyBlYXNlJ1xuXG4gICAgaWYgKGNvbGxhcHNlZCkge1xuICAgICAgdG9nZ2xlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJ1xuICAgIH1cblxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb2xsYXBzZWQpIHtcbiAgICAgICAgdG9nZ2xlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknXG4gICAgICB9XG5cbiAgICAgIGNvbGxhcHNlZCA9ICFjb2xsYXBzZWRcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRvZ2dsZVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgcHJvcGVydGllcyBlZGl0aW5nIGVsZW1lbnRzIGxpa2UgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gaHRtbCkge1xuICAgICAgICBodG1sLmNsb3NlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWluZXIgZm9yIHNjcmVlbiByZWFkZXIgYW5ub3VuY2VkIG1lc3NhZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzQXJpYUxpdmUgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWFyaWEtbGl2ZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnc3RhdHVzJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1lc3NhZ2UgdGhhdCB3aWxsIGJlIGFubm91bmNlZCBieSBzY3JlZW4gcmVhZGVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcmlhTGl2ZU1lc3NhZ2UgKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFyaWEtbGl2ZS1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIHRoaXMudmlzdWFsbHlIaWRkZW4oaHRtbClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHByb3BlcnR5IGFjdGl2YXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1hY3RpdmF0b3JzJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEEgYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2plZGktYnRuJylcblxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIH1cblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAodGhpcy5pY29ucyAmJiBjb25maWcuaWNvbikge1xuICAgICAgY29uc3QgaWNvbiA9IHRoaXMuZ2V0SWNvbihjb25maWcuaWNvbilcbiAgICAgIGljb24uc2V0QXR0cmlidXRlKCd0aXRsZScsIGNvbmZpZy50ZXh0Q29udGVudClcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKVxuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbih0ZXh0KVxuICAgIH1cblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KVxuXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwiYWRkXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QnRuQWRkICgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbScsXG4gICAgICBpY29uOiAnYWRkJ1xuICAgIH0pXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFkZCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFkZFByb3BlcnR5QnV0dG9uICgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYWRkLXByb3BlcnR5LWJ0bicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcImRlbGV0ZVwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXREZWxldGVJdGVtQnRuICgpIHtcbiAgICBjb25zdCBkZWxldGVJdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbScsXG4gICAgICBpY29uOiAnZGVsZXRlJ1xuICAgIH0pXG5cbiAgICBkZWxldGVJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZGVsZXRlJylcblxuICAgIHJldHVybiBkZWxldGVJdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJtb3ZlIHVwXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1vdmVVcEl0ZW1CdG4gKCkge1xuICAgIGNvbnN0IG1vdmVVcEl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ01vdmUgdXAnLFxuICAgICAgaWNvbjogJ21vdmVVcCdcbiAgICB9KVxuXG4gICAgbW92ZVVwSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtdXAnKVxuXG4gICAgcmV0dXJuIG1vdmVVcEl0ZW1CdG5cbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcIm1vdmUgZG93blwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNb3ZlRG93bkl0ZW1CdG4gKCkge1xuICAgIGNvbnN0IG1vdmVEb3duSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJyxcbiAgICAgIGljb246ICdtb3ZlRG93bidcbiAgICB9KVxuXG4gICAgbW92ZURvd25JdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS1kb3duJylcblxuICAgIHJldHVybiBtb3ZlRG93bkl0ZW1CdG5cbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciB0aGUgZWRpdG9yIGRlc2NyaXB0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnID0ge30pIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdqZWRpLWRlc2NyaXB0aW9uJylcblxuICAgIGlmIChjb25maWcudGV4dENvbnRlbnQpIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIC8qKlxuICAgKiBPYmplY3QgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzLlxuICAgKiBFYWNoIGVkaXRvciBpcyBtYXBwZWQgdG8gYW4gb2JqZWN0IGluc3RhbmNlIHByb3BlcnR5LlxuICAgKiBQcm9wZXJ0aWVzIGNhbiBiZSBhZGRlZCwgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZCBkZXBlbmRpbmcgb24gY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0T2JqZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG4gICAgY29uc3QgYXJpYUxpdmUgPSB0aGlzLmdldFByb3BlcnRpZXNBcmlhTGl2ZSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQ29udGFpbmVyID0gdGhpcy5nZXRQcm9wZXJ0aWVzU2xvdCh7XG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgY29uZmlnLmlkXG4gICAgfSlcblxuICAgIGNvbnN0IHByb3BlcnRpZXNUb2dnbGUgPSB0aGlzLmdldFByb3BlcnRpZXNUb2dnbGUoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSArICcgJyArICdwcm9wZXJ0aWVzJyxcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LXRvZ2dsZS0nICsgY29uZmlnLmlkLFxuICAgICAgaWNvbjogJ3Byb3BlcnRpZXMnLFxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lcjogcHJvcGVydGllc0NvbnRhaW5lclxuICAgIH0pXG5cbiAgICBjb25zdCBjb2xsYXBzZUlkID0gJ2NvbGxhcHNlLScgKyBjb25maWcuaWRcblxuICAgIGNvbnN0IGNvbGxhcHNlID0gdGhpcy5nZXRDb2xsYXBzZSh7XG4gICAgICBpZDogY29sbGFwc2VJZCxcbiAgICAgIHN0YXJ0Q29sbGFwc2VkOiBjb25maWcuc3RhcnRDb2xsYXBzZWRcbiAgICB9KVxuXG4gICAgY29uc3QgY29sbGFwc2VUb2dnbGUgPSB0aGlzLmdldENvbGxhcHNlVG9nZ2xlKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUgKyAnICcgKyAncHJvcGVydGllcycsXG4gICAgICBpZDogJ2NvbGxhcHNlLXRvZ2dsZS0nICsgY29uZmlnLmlkLFxuICAgICAgaWNvbjogJ2NvbGxhcHNlJyxcbiAgICAgIGNvbGxhcHNlSWQ6IGNvbGxhcHNlSWQsXG4gICAgICBjb2xsYXBzZTogY29sbGFwc2UsXG4gICAgICBzdGFydENvbGxhcHNlZDogY29uZmlnLnN0YXJ0Q29sbGFwc2VkXG4gICAgfSlcblxuICAgIGNvbnN0IHByb3BlcnRpZXNBY3RpdmF0b3JzID0gdGhpcy5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUNvbnRyb2wgPSB0aGlzLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyBjb25maWcuaWQsXG4gICAgICBsYWJlbDogJ1Byb3BlcnR5J1xuICAgIH0pXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUJ0biA9IHRoaXMuZ2V0QWRkUHJvcGVydHlCdXR0b24oKVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgaWQ6IGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBhZGRQcm9wZXJ0eUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLW9iamVjdC1hZGQnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChjb2xsYXBzZSlcbiAgICBjb2xsYXBzZS5hcHBlbmRDaGlsZChib2R5KVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIGlmIChjb25maWcuYWRkUHJvcGVydHkpIHtcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlCdG4pXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5lbmFibGVQcm9wZXJ0aWVzVG9nZ2xlKSB7XG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKHByb3BlcnRpZXNUb2dnbGUpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFyaWFMaXZlKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzQWN0aXZhdG9ycylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmVuYWJsZUNvbGxhcHNlVG9nZ2xlKSB7XG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGNvbGxhcHNlVG9nZ2xlKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjb2xsYXBzZSxcbiAgICAgIGNvbGxhcHNlVG9nZ2xlLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHByb3BlcnRpZXNUb2dnbGUsXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLFxuICAgICAgYWRkUHJvcGVydHlDb250cm9sLFxuICAgICAgYWRkUHJvcGVydHlCdG4sXG4gICAgICBhcmlhTGl2ZSxcbiAgICAgIHByb3BlcnRpZXNBY3RpdmF0b3JzLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycy5cbiAgICogSXRlbXMgY2FuIGJ2ZSBhZGRlZCwgZGVsZXRlZCBvciBtb3ZlZCB1cCBvciBkb3duLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuZ2V0QnRuR3JvdXAoKVxuICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuZ2V0QXJyYXlCdG5BZGQoKVxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5nZXRGaWVsZHNldCgpXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIGlkOiBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29uc3QgY29sbGFwc2VJZCA9ICdjb2xsYXBzZS0nICsgY29uZmlnLmlkXG5cbiAgICBjb25zdCBjb2xsYXBzZSA9IHRoaXMuZ2V0Q29sbGFwc2Uoe1xuICAgICAgaWQ6IGNvbGxhcHNlSWQsXG4gICAgICBzdGFydENvbGxhcHNlZDogY29uZmlnLnN0YXJ0Q29sbGFwc2VkXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbGxhcHNlVG9nZ2xlID0gdGhpcy5nZXRDb2xsYXBzZVRvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlICsgJyAnICsgJ3Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdjb2xsYXBzZS10b2dnbGUtJyArIGNvbmZpZy5pZCxcbiAgICAgIGljb246ICdjb2xsYXBzZScsXG4gICAgICBjb2xsYXBzZUlkOiBjb2xsYXBzZUlkLFxuICAgICAgY29sbGFwc2U6IGNvbGxhcHNlLFxuICAgICAgc3RhcnRDb2xsYXBzZWQ6IGNvbmZpZy5zdGFydENvbGxhcHNlZFxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNvbGxhcHNlKVxuICAgIGNvbGxhcHNlLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGNvbmZpZy5lbmFibGVDb2xsYXBzZVRvZ2dsZSkge1xuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChjb2xsYXBzZVRvZ2dsZSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY29sbGFwc2VUb2dnbGUsXG4gICAgICBjb2xsYXBzZSxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBidG5Hcm91cCxcbiAgICAgIGFkZEJ0bixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBsZSBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMgb3B0aW9ucyB0aGF0IGNhbiBiZVxuICAgKiBzZWxlY3RlZCB3aXRoIGEgc3dpdGNoZXIgY29udHJvbC4gT25seSBvbmUgZWRpdG9yIGNhbiBiZSBhY3RpdmUvdmlzaWJsZVxuICAgKiBhdCBhIHRpbWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE11bHRpcGxlQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgdGl0bGVIaWRkZW46IGNvbmZpZy50aXRsZUhpZGRlblxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHN3aXRjaGVyID0gdGhpcy5nZXRTd2l0Y2hlcih7XG4gICAgICB2YWx1ZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHRpdGxlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIGxhYmVsOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIHRpdGxlSGlkZGVuOiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IGNvbmZpZy5yZWFkT25seVxuICAgIH0pXG5cbiAgICBzd2l0Y2hlci5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoc3dpdGNoZXIuY29udGFpbmVyKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGhlYWRlcixcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBzd2l0Y2hlcixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sIGZvciBOdWxsRWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXROdWxsQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnRpdGxlSGlkZGVuKSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uLFxuICAgICAgaWQ6IGRlc2NyaXB0aW9uSWRcbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRleHRhcmVhXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LnN0eWxlLndpZHRoID0gJzEwMCUnXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkZXNjcmlwdGlvbklkXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3Qoe1xuICAgICAgaWQ6IG1lc3NhZ2VzSWRcbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpYmVkQnkgPSBtZXNzYWdlc0lkICsgJyAnICsgZGVzY3JpcHRpb25JZFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBJbnB1dCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LnN0eWxlLndpZHRoID0gJzEwMCUnXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkZXNjcmlwdGlvbklkXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3Qoe1xuICAgICAgaWQ6IG1lc3NhZ2VzSWRcbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpYmVkQnkgPSBtZXNzYWdlc0lkICsgJyAnICsgZGVzY3JpcHRpb25JZFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHJhZGlvIGdyb3VwIGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5sYWJlbCxcbiAgICAgIGlkOiBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXNJZCA9IGNvbmZpZy5pZCArICctbWVzc2FnZXMnXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCh7XG4gICAgICBpZDogbWVzc2FnZXNJZFxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkZXNjcmlwdGlvbklkXG4gICAgfSlcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGVnZW5kKVxuICAgIH1cblxuICAgIGNvbnN0IHJhZGlvQ29udHJvbHMgPSBbXVxuICAgIGNvbnN0IHJhZGlvcyA9IFtdXG4gICAgY29uc3QgbGFiZWxzID0gW11cbiAgICBjb25zdCBsYWJlbFRleHRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9scy5wdXNoKHJhZGlvQ29udHJvbClcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW9zLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGRlc2NyaWJlZEJ5ID0gbWVzc2FnZXNJZCArICcgJyArIGRlc2NyaXB0aW9uSWRcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG5cbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbGFiZWxUZXh0cy5wdXNoKGxhYmVsVGV4dClcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgbGFiZWxzLnB1c2gobGFiZWwpXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBmaWVsZHNldCxcbiAgICAgIGxlZ2VuZCxcbiAgICAgIGJvZHksXG4gICAgICByYWRpb3MsXG4gICAgICBsYWJlbHMsXG4gICAgICBsYWJlbFRleHRzLFxuICAgICAgcmFkaW9Db250cm9scyxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBhY3Rpb25zLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgY2hlY2tib3ggY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnRpdGxlSGlkZGVuKSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uLFxuICAgICAgaWQ6IGRlc2NyaXB0aW9uSWRcbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXNJZCA9IGNvbmZpZy5pZCArICctbWVzc2FnZXMnXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCh7XG4gICAgICBpZDogbWVzc2FnZXNJZFxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmliZWRCeSA9IG1lc3NhZ2VzSWQgKyAnICcgKyBkZXNjcmlwdGlvbklkXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpYmVkQnkpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNlbGVjdCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb24sXG4gICAgICBpZDogZGVzY3JpcHRpb25JZFxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KHtcbiAgICAgIGlkOiBtZXNzYWdlc0lkXG4gICAgfSlcblxuICAgIGNvbnN0IGRlc2NyaWJlZEJ5ID0gbWVzc2FnZXNJZCArICcgJyArIGRlc2NyaXB0aW9uSWRcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmliZWRCeSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB0byBzd2l0Y2ggYmV0d2VlbiBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICAvKipcbiAgICogQW5vdGhlciB0eXBlIG9mIGVycm9yIG1lc3NhZ2UgY29udGFpbmVyIHVzZWQgZm9yIG1vcmUgY29tcGxleCBlZGl0b3JzIGxpa2VcbiAgICogb2JqZWN0LCBhcnJheSBhbmQgbXVsdGlwbGUgZWRpdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gIH1cblxuICAvKipcbiAgICogRXJyb3IgbWVzc2FnZXNcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgY29uc3QgaW52YWxpZEZlZWRiYWNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGludmFsaWRGZWVkYmFja1RleHQudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIGludmFsaWRGZWVkYmFja0ljb24udGV4dENvbnRlbnQgPSAn4pqgICdcbiAgICBpbnZhbGlkRmVlZGJhY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaW52YWxpZEZlZWRiYWNrSWNvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFja0ljb24pXG4gICAgaHRtbC5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2tUZXh0KVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb2x1bW5zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2plZGktcm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICAvKipcbiAgICogQSBjb2x1bW4gdG8gY29udGFpbiBjb250ZW50IHRvIGEgc3BlY2lmaWMgd2lkdGhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICAvKipcbiAgICogVGFiIGxpc3QgaXMgYSBsaXN0IG9mIGxpbmtzIHRoYXQgdHJpZ2dlcnMgdGFicyB2aXNpYmlsaXR5IG5lIGF0IHRoZSB0aW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWJMaXN0ICgpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGlzdCcpXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRhYiBpcyBhIHdyYXBwZXIgZm9yIGNvbnRlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdqZWRpLW5hdi1saW5rJylcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGNvbmZpZy5pZClcbiAgICBsaW5rLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rKVxuICAgIHJldHVybiB7IGxpc3QsIGxpbmsgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRhYnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYkNvbnRlbnQgKCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKVxuICAgIHJldHVybiB0YWJDb250ZW50XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRhYiBhdHRyaWJ1dGVzIHRvIG1ha2UgaXQgdG9nZ2xlYWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2plZGktdGFiLXBhbmUnKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB2aXN1YWxseUhpZGRlbiAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDFweDtoZWlnaHQ6IDFweDtwYWRkaW5nOiAwO21hcmdpbjogLTFweDtvdmVyZmxvdzogaGlkZGVuO2NsaXA6IHJlY3QoMCwwLDAsMCk7Ym9yZGVyOiAwOycpXG4gIH1cblxuICAvKipcbiAgICogUmV2ZWFscyBhIHZpc3VhbGx5IGhpZGRlbiBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB2aXN1YWxseVZpc2libGUgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lXG4iLCIvKipcbiAqIENvbnN0cmFpbnMgYWRkaXRpb25hbFByb3BlcnRpZXNcbiAqL1xuXG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGkuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcywgZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMsIGdldFNjaGVtYVByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkaXRpb25hbFByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHNjaGVtYVByb3BlcnRpZXMgfHwge31cbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyB8fCB7fVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuc29tZSgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIHJldHVybiByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGlzRGVmaW5lZEluUHJvcGVydGllcyA9IGhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSlcblxuICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgIWlzRGVmaW5lZEluUHJvcGVydGllcykge1xuICAgICAgICBpZiAoYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JBZGRpdGlvbmFsUHJvcGVydGllcywgeyBwcm9wZXJ0eSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBjb25zdHJhaW46ICdhZGRpdGlvbmFsUHJvcGVydGllcydcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlcixcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZVtwcm9wZXJ0eV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+ICh7XG4gICAgICAgICAgICBtZXNzYWdlczogZXJyb3IubWVzc2FnZXMsXG4gICAgICAgICAgICBwYXRoOiBgJHtwYXRofS4ke3Byb3BlcnR5fWAsXG4gICAgICAgICAgICBjb25zdHJhaW46ICdhZGRpdGlvbmFsUHJvcGVydGllcydcbiAgICAgICAgICB9KSlcblxuICAgICAgICAgIGVycm9ycy5wdXNoKC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycylcbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7IGdldFNjaGVtYUFsbE9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXkpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGFsbE9mID0gZ2V0U2NoZW1hQWxsT2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChhbGxPZikpIHtcbiAgICBhbGxPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLCBzY2hlbWE6IHNjaGVtYSwgZGF0YTogdmFsdWUsIHJvb3ROYW1lOiBrZXkgfSlcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVycm9ycyA9IHN1YlNjaGVtYUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgc3ViU2NoZW1hRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uc3ViU2NoZW1hRXJyb3JzXVxuICAgICAgZXJyb3JzID0gcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheShlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGkuanMnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFBbnlPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBhbnlPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgYW55T2YgPSBnZXRTY2hlbWFBbnlPZihzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KGFueU9mKSkge1xuICAgIGxldCB2YWxpZCA9IGZhbHNlXG5cbiAgICBhbnlPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFueU9mRWRpdG9yID0gbmV3IEplZGkoeyByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsIHNjaGVtYTogc2NoZW1hLCBkYXRhOiB2YWx1ZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBpMThuLmVycm9yQW55T2ZcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnYW55T2YnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQsIGNvbXBpbGVUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFDb25zdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBfY29uc3QgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUNvbnN0ID0gZ2V0U2NoZW1hQ29uc3Qoc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFDb25zdCkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IGRpZmZlcmVudCh2YWx1ZSwgc2NoZW1hQ29uc3QpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JDb25zdCwge1xuICAgICAgICAgICAgY29uc3Q6IEpTT04uc3RyaW5naWZ5KHNjaGVtYUNvbnN0KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ2NvbnN0J1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGkuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFDb250YWlucywgZ2V0U2NoZW1hTWF4Q29udGFpbnMsIGdldFNjaGVtYU1pbkNvbnRhaW5zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBjb250YWlucyA9IGdldFNjaGVtYUNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3QgbWluQ29udGFpbnMgPSBnZXRTY2hlbWFNaW5Db250YWlucyhzY2hlbWEpXG4gIGNvbnN0IG1heENvbnRhaW5zID0gZ2V0U2NoZW1hTWF4Q29udGFpbnMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChjb250YWlucykpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsIHNjaGVtYTogY29udGFpbnMsIGRhdGE6IGl0ZW0gfSlcbiAgICAgIGNvbnN0IGNvbnRhaW5zRXJyb3JzID0gY29udGFpbnNFZGl0b3IuZ2V0RXJyb3JzKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KG1pbkNvbnRhaW5zKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBtaW5Db250YWlucylcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluQ29udGFpbnMsIHtcbiAgICAgICAgICAgICAgY291bnRlcjogY291bnRlcixcbiAgICAgICAgICAgICAgbWluQ29udGFpbnM6IG1pbkNvbnRhaW5zXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBjb25zdHJhaW46ICdtaW5Db250YWlucydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtpMThuLmVycm9yQ29udGFpbnNdLFxuICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgY29uc3RyYWluOiAnY29udGFpbnMnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KG1heENvbnRhaW5zKSkge1xuICAgICAgY29uc3QgbWF4Q29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPiBtYXhDb250YWlucylcblxuICAgICAgaWYgKG1heENvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4Q29udGFpbnMsIHtcbiAgICAgICAgICAgICAgY291bnRlcjogY291bnRlcixcbiAgICAgICAgICAgICAgbWF4Q29udGFpbnM6IG1heENvbnRhaW5zXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBjb25zdHJhaW46ICdtYXhDb250YWlucydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVudFJlcXVpcmVkICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRGVwZW5kZW50UmVxdWlyZWQsIHtcbiAgICAgICAgICAgIGRlcGVuZGVudFJlcXVpcmVkOiBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnZGVwZW5kZW50UmVxdWlyZWQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW50U2NoZW1hcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBkZXBlbmRlbnRTY2hlbWFzID0gZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChkZXBlbmRlbnRTY2hlbWFzKSkge1xuICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFNjaGVtYXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVudFNjaGVtYSA9IGRlcGVuZGVudFNjaGVtYXNba2V5XVxuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlciwgc2NoZW1hOiBkZXBlbmRlbnRTY2hlbWEsIGRhdGE6IHZhbHVlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnRtcEVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIF9lbnVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bShzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWFFbnVtLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckVudW0sIHtcbiAgICAgICAgICAgIGVudW06IEpTT04uc3RyaW5naWZ5KHNjaGVtYUVudW0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnZW51bSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVzaXZlTWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoZXhjbHVzaXZlTWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IGV4Y2x1c2l2ZU1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRXhjbHVzaXZlTWF4aW11bSwge1xuICAgICAgICAgICAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ2V4Y2x1c2l2ZU1heGltdW0nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVzaXZlTWluaW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZXhjbHVzaXZlTWluaW11bSA9IGdldFNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoZXhjbHVzaXZlTWluaW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDw9IGV4Y2x1c2l2ZU1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRXhjbHVzaXZlTWluaW11bSwge1xuICAgICAgICAgICAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ2V4Y2x1c2l2ZU1pbmltdW0nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHNjaGVtYSlcbiAgbGV0IHZhbGlkYXRlRm9ybWF0ID0gdmFsaWRhdG9yLnZhbGlkYXRlRm9ybWF0XG5cbiAgaWYgKGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICd2YWxpZGF0ZUZvcm1hdCcpKSB7XG4gICAgdmFsaWRhdGVGb3JtYXQgPSBzY2hlbWEub3B0aW9ucy52YWxpZGF0ZUZvcm1hdFxuICB9XG5cbiAgaWYgKGlzU2V0KGZvcm1hdCkgJiYgaXNTdHJpbmcodmFsdWUpICYmIHZhbGlkYXRlRm9ybWF0KSB7XG4gICAgbGV0IHJlZ2V4cFxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ2VtYWlsJykge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXpBLVowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16QS1aMC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV0qW2EtekEtWjAtOV0pP1xcLikrW2EtekEtWl17Mix9JC9pKVxuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09ICd1cmwnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86W15cXHM6QF0rKD86OlteXFxzOkBdKik/QCk/KD86KD86W15cXHM6QF0rKD86OlteXFxzOkBdKik/QCk/KD86W15cXHM6QF0oPzpbXlxcczpALV0qW15cXHM6QF0pP1xcLj8pK1thLXpBLVpdezIsfXwoPzpcXGR7MSwzfVxcLil7M31cXGR7MSwzfSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaSlcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSAndXVpZCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzp1cm46dXVpZDopP1swLTlhLWZBLUZdezh9LSg/OlswLTlhLWZBLUZdezR9LSl7M31bMC05YS1mQS1GXXsxMn0kL2kpXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckZvcm1hdCwgeyBmb3JtYXQ6IGZvcm1hdCB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdmb3JtYXQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGkuanMnXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUVsc2UsIGdldFNjaGVtYUlmLCBnZXRTY2hlbWFUaGVuIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBpZlRoZW5FbHNlICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hSWYgPSBnZXRTY2hlbWFJZihzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVRoZW4gPSBnZXRTY2hlbWFUaGVuKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hRWxzZSA9IGdldFNjaGVtYUVsc2Uoc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFJZikpIHtcbiAgICBpZiAobm90U2V0KHNjaGVtYVRoZW4pICYmIG5vdFNldChzY2hlbWFFbHNlKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsIHNjaGVtYTogc2NoZW1hSWYsIGRhdGE6IHZhbHVlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWFUaGVuKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLCBzY2hlbWE6IHNjaGVtYVRoZW4sIGRhdGE6IHZhbHVlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRWxzZSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlciwgc2NoZW1hOiBzY2hlbWFFbHNlLCBkYXRhOiB2YWx1ZSB9KVxuICAgICAgZWxzZUVycm9ycyA9IGVsc2VFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIGVsc2VFZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUlmID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWFJZiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFJdGVtcywgZ2V0U2NoZW1hUHJlZml4SXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGl0ZW1zID0gZ2V0U2NoZW1hSXRlbXMoc2NoZW1hKVxuICBjb25zdCBwcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoaXRlbXMpKSB7XG4gICAgY29uc3QgcHJlZml4SXRlbXNTY2hlbWFzQ291bnQgPSBpc1NldChwcmVmaXhJdGVtcykgPyBwcmVmaXhJdGVtcy5sZW5ndGggOiAwXG5cbiAgICBpZiAoaXRlbXMgPT09IGZhbHNlICYmIHZhbHVlLmxlbmd0aCA+IDAgJiYgdmFsdWUubGVuZ3RoID4gcHJlZml4SXRlbXNTY2hlbWFzQ291bnQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtpMThuLmVycm9ySXRlbXNdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdpdGVtcydcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNYXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhJdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4SXRlbXMgPSBnZXRTY2hlbWFNYXhJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KG1heEl0ZW1zKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gbWF4SXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4SXRlbXMsIHtcbiAgICAgICAgICAgIG1heEl0ZW1zOiBtYXhJdGVtc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ21heEl0ZW1zJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNYXhMZW5ndGggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4TGVuZ3RoICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhMZW5ndGggPSBnZXRTY2hlbWFNYXhMZW5ndGgoc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQobWF4TGVuZ3RoKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heExlbmd0aCwge1xuICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdtYXhMZW5ndGgnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYU1heFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4UHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4UHJvcGVydGllcyA9IGdldFNjaGVtYU1heFByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQobWF4UHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBtYXhQcm9wZXJ0aWVzKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heFByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdtYXhQcm9wZXJ0aWVzJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNYXhpbXVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIG1heGltdW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1heGltdW0gPSBnZXRTY2hlbWFNYXhpbXVtKHNjaGVtYSlcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KG1heGltdW0pKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IG1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4aW11bSwge1xuICAgICAgICAgICAgbWF4aW11bTogbWF4aW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ21heGltdW0nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluSXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkl0ZW1zID0gZ2V0U2NoZW1hTWluSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChtaW5JdGVtcykpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IG1pbkl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbkl0ZW1zLCB7XG4gICAgICAgICAgICBtaW5JdGVtczogbWluSXRlbXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdtaW5JdGVtcydcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluTGVuZ3RoIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIG1pbkxlbmd0aCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWluTGVuZ3RoID0gZ2V0U2NoZW1hTWluTGVuZ3RoKHNjaGVtYSlcblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KG1pbkxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5MZW5ndGgsIHtcbiAgICAgICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbWluTGVuZ3RoJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIG1pblByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pblByb3BlcnRpZXMgPSBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KG1pblByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgbWluUHJvcGVydGllcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5Qcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbWluUHJvcGVydGllcydcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5pbXVtID0gZ2V0U2NoZW1hTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBtaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbmltdW0sIHtcbiAgICAgICAgICAgIG1pbmltdW06IG1pbmltdW1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdtaW5pbXVtJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNdWx0aXBsZU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGxlT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG11bHRpcGxlT2YgPSBnZXRTY2hlbWFNdWx0aXBsZU9mKHNjaGVtYSlcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KG11bHRpcGxlT2YpKSB7XG4gICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gbXVsdGlwbGVPZiA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIG11bHRpcGxlT2YpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTXVsdGlwbGVPZiwge1xuICAgICAgICAgICAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZlxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ211bHRpcGxlT2YnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTm90IH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGkuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBub3QgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG5vdCA9IGdldFNjaGVtYU5vdChzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KG5vdCkpIHtcbiAgICBjb25zdCBub3RFZGl0b3IgPSBuZXcgSmVkaSh7IHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlciwgc2NoZW1hOiBub3QsIGRhdGE6IHZhbHVlIH0pXG4gICAgY29uc3Qgbm90RXJyb3JzID0gbm90RWRpdG9yLmdldEVycm9ycygpXG4gICAgbm90RWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JOb3QpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ25vdCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT25lT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gb25lT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG9uZU9mID0gZ2V0U2NoZW1hT25lT2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChvbmVPZikpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIG9uZU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlciwgc2NoZW1hOiBzY2hlbWEsIGRhdGE6IHZhbHVlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBvbmVPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck9uZU9mLCB7XG4gICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnb25lT2YnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYVBhdHRlcm4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVybiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgcGF0dGVybiA9IGdldFNjaGVtYVBhdHRlcm4oc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQocGF0dGVybikpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JQYXR0ZXJuLCB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAncGF0dGVybidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGkuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVyblByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlcixcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgZGF0YTogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3JFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy8nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICBjb25zdHJhaW46ICdwYXR0ZXJuUHJvcGVydGllcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yRXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGkuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFQcmVmaXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhJdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgcHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHByZWZpeEl0ZW1zKSkge1xuICAgIHByZWZpeEl0ZW1zLmZvckVhY2goKGl0ZW1TY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSB2YWx1ZVtpbmRleF1cblxuICAgICAgaWYgKGlzU2V0KGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsIHNjaGVtYTogaXRlbVNjaGVtYSwgZGF0YTogaXRlbVZhbHVlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgICAgaWYgKHRtcEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JQcmVmaXhJdGVtcywge1xuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICBjb25zdHJhaW46ICdwcmVmaXhJdGVtcydcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsIi8qKlxuICogY29uc3RyYWlucyBwcm9wZXJ0eU5hbWVzXG4gKi9cblxuaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7XG4gIGdldFNjaGVtYVByb3BlcnR5TmFtZXNcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5TmFtZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYVByb3BlcnR5TmFtZXMgPSBnZXRTY2hlbWFQcm9wZXJ0eU5hbWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYVByb3BlcnR5TmFtZXMpKSB7XG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsXG4gICAgICAgIHNjaGVtYTogc2NoZW1hUHJvcGVydHlOYW1lcyxcbiAgICAgICAgZGF0YTogcHJvcGVydHlOYW1lXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gZWRpdG9yLmdldEVycm9ycygpLmxlbmd0aCA+IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclByb3BlcnR5TmFtZXMsIHsgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgY29uc3RyYWluOiAncHJvcGVydHlOYW1lcydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHJlcXVpcmVkID0gZ2V0U2NoZW1hUmVxdWlyZWQoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQocmVxdWlyZWQpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHJlcXVpcmVkLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUmVxdWlyZWQsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAncmVxdWlyZWQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7XG4gIGNvbXBpbGVUZW1wbGF0ZSwgZ2V0VHlwZSxcbiAgaXNBcnJheSxcbiAgaXNCb29sZWFuLFxuICBpc0ludGVnZXIsXG4gIGlzTnVsbCxcbiAgaXNOdW1iZXIsXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmdcbn0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgdHlwZSA9IGdldFNjaGVtYVR5cGUoc2NoZW1hKVxuXG4gIGlmICh0eXBlID09PSAnYW55Jykge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldCh0eXBlKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHZhbGlkID0gdHlwZS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yVHlwZSwge1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIHZhbHVlVHlwZTogZ2V0VHlwZSh2YWx1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICd0eXBlJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCIvKipcbiAqIGNvbnN0cmFpbnMgdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzXG4gKi9cblxuaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hVW5ldmFsdWF0ZWRQcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hQW55T2YsIGdldFNjaGVtYUFsbE9mLCBnZXRTY2hlbWFPbmVPZlxufSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hVW5ldmFsdWF0ZWRQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hVW5ldmFsdWF0ZWRQcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUGF0dGVyblByb3BlcnRpZXMgPSBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVByb3BlcnRpZXMgPSBnZXRTY2hlbWFQcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hQWxsT2YgPSBnZXRTY2hlbWFBbGxPZihzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYUFueU9mID0gZ2V0U2NoZW1hQW55T2Yoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFPbmVPZiA9IGdldFNjaGVtYU9uZU9mKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYVVuZXZhbHVhdGVkUHJvcGVydGllcykpIHtcbiAgICBsZXQgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYVByb3BlcnRpZXMpID8gc2NoZW1hUHJvcGVydGllcyA6IHt9XG4gICAgY29uc3QgdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzID0gc2NoZW1hVW5ldmFsdWF0ZWRQcm9wZXJ0aWVzXG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWFQYXR0ZXJuUHJvcGVydGllc1xuXG4gICAgLy8gc2VlIHRocm91Z2ggYWxsT2YsIGFueU9mIGFuZCBvbmVPZlxuICAgIGNvbnN0IG9mU2NoZW1hcyA9IFtcbiAgICAgIHNjaGVtYUFsbE9mLFxuICAgICAgc2NoZW1hQW55T2YsXG4gICAgICBzY2hlbWFPbmVPZlxuICAgIF1cblxuICAgIG9mU2NoZW1hcy5mb3JFYWNoKChzdWJTY2hlbWEpID0+IHtcbiAgICAgIGlmIChpc1NldChzdWJTY2hlbWEpKSB7XG4gICAgICAgIHN1YlNjaGVtYS5mb3JFYWNoKChzdWJzY2hlbWEpID0+IHtcbiAgICAgICAgICBpZiAoaXNTZXQoc3Vic2NoZW1hWydwcm9wZXJ0aWVzJ10pKSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0geyAuLi5wcm9wZXJ0aWVzLCAuLi5zdWJzY2hlbWFbJ3Byb3BlcnRpZXMnXSB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIHVuZXZhbHVhdGVkUHJvcGVydGllcyA9PT0gZmFsc2UgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclVuZXZhbHVhdGVkUHJvcGVydGllcywge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICBjb25zdHJhaW46ICd1bmV2YWx1YXRlZFByb3BlcnRpZXMnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KHVuZXZhbHVhdGVkUHJvcGVydGllcykgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsXG4gICAgICAgICAgICBzY2hlbWE6IHVuZXZhbHVhdGVkUHJvcGVydGllcyxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlW3Byb3BlcnR5XVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCB1bmV2YWx1YXRlZFByb3BlcnRpZXNFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgY29uc3RyYWluOiAndW5ldmFsdWF0ZWRQcm9wZXJ0aWVzJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi51bmV2YWx1YXRlZFByb3BlcnRpZXNFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU2V0LCBzb3J0T2JqZWN0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYVVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZUl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCB1bmlxdWVJdGVtcyA9IGdldFNjaGVtYVVuaXF1ZUl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQodW5pcXVlSXRlbXMpICYmIHVuaXF1ZUl0ZW1zID09PSB0cnVlKSB7XG4gICAgY29uc3Qgc2VlbiA9IFtdXG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHZhbHVlW2ldXG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSkge1xuICAgICAgICBpdGVtID0gc29ydE9iamVjdChpdGVtKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpdGVtU3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShpdGVtKVxuICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gc2Vlbi5zb21lKChzZWVuKSA9PiBzZWVuID09PSBpdGVtU3RyaW5naWZpZWQpXG5cbiAgICAgIGlmIChoYXNEdXBsaWNhdGVkSXRlbXMpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZW4ucHVzaChpdGVtU3RyaW5naWZpZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGkxOG4uZXJyb3JVbmlxdWVJdGVtc1xuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICd1bmlxdWVJdGVtcydcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mLmpzJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGguanMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YuanMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bS5qcydcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMnXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQuanMnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMuanMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aC5qcydcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtLmpzJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdC5qcydcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZi5qcydcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4uanMnXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlLmpzJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bS5qcydcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcy5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mLmpzJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGguanMnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0LmpzJ1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zLmpzJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mLmpzJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtLmpzJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcydcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0uanMnXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdC5qcydcbmltcG9ydCB7IGlmVGhlbkVsc2UgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmLXRoZW4tZWxzZS5qcydcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcy5qcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcy5qcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0uanMnXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMuanMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcydcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90LmpzJ1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mLmpzJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybi5qcydcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcy5qcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZC5qcydcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUuanMnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtLmpzJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBpZlRoZW5FbHNlLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mLmpzJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGguanMnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0LmpzJ1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zLmpzJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mLmpzJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtLmpzJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcydcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0uanMnXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdC5qcydcbmltcG9ydCB7IGlmVGhlbkVsc2UgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmLXRoZW4tZWxzZS5qcydcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcy5qcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcy5qcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0uanMnXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMuanMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcydcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90LmpzJ1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mLmpzJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybi5qcydcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcy5qcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZC5qcydcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUuanMnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtLmpzJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBpZlRoZW5FbHNlLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mLmpzJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGguanMnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0LmpzJ1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zLmpzJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mLmpzJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtLmpzJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcydcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0uanMnXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdC5qcydcbmltcG9ydCB7IGlmVGhlbkVsc2UgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmLXRoZW4tZWxzZS5qcydcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcy5qcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcy5qcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0uanMnXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMuanMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcydcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90LmpzJ1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mLmpzJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybi5qcydcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcy5qcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZC5qcydcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUuanMnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtLmpzJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmV2YWx1YXRlZFByb3BlcnRpZXMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IGlmVGhlbkVsc2UsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzOiB1bmV2YWx1YXRlZFByb3BlcnRpZXMsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mLmpzJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGguanMnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0LmpzJ1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zLmpzJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mLmpzJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtLmpzJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcydcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0uanMnXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdC5qcydcbmltcG9ydCB7IGlmVGhlbkVsc2UgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmLXRoZW4tZWxzZS5qcydcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcy5qcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcy5qcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0uanMnXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMuanMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcydcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90LmpzJ1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mLmpzJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybi5qcydcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcy5qcydcbmltcG9ydCB7IHByb3BlcnR5TmFtZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3Byb3BlcnR5TmFtZXMuanMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlLmpzJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bS5qcydcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcy5qcydcbmltcG9ydCB7IHVuZXZhbHVhdGVkUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBpZlRoZW5FbHNlLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICBwcm9wZXJ0eU5hbWVzOiBwcm9wZXJ0eU5hbWVzLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuZXZhbHVhdGVkUHJvcGVydGllczogdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCBkcmFmdDA0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA0LmpzJ1xuaW1wb3J0IGRyYWZ0MDYgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDYuanMnXG5pbXBvcnQgZHJhZnQwNyBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNy5qcydcbmltcG9ydCBkcmFmdDIwMTkwOSBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDE5LTA5LmpzJ1xuaW1wb3J0IGRyYWZ0MjAyMDEyIGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMnXG5pbXBvcnQgeyBoYXNPd24sIGlzQm9vbGVhbiwgY2xvbmUsIGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBWYWxpZGF0b3IgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHRoaXMucmVmUGFyc2VyID0gY29uZmlnLnJlZlBhcnNlclxuICAgIHRoaXMudmFsaWRhdGVGb3JtYXQgPSBjb25maWcudmFsaWRhdGVGb3JtYXQgPyBjb25maWcudmFsaWRhdGVGb3JtYXQgOiBmYWxzZVxuICAgIHRoaXMuZHJhZnQgPSBkcmFmdDIwMjAxMlxuXG4gICAgdGhpcy5qc29uU2NoZW1hRHJhZnRzID0ge1xuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIyc6IGRyYWZ0MDQsXG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNi9zY2hlbWEjJzogZHJhZnQwNixcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSMnOiBkcmFmdDA3LFxuICAgICAgJ2h0dHBzOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LzIwMTktMDkvc2NoZW1hJzogZHJhZnQyMDE5MDksXG4gICAgICAnaHR0cHM6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQvMjAyMC0xMi9zY2hlbWEnOiBkcmFmdDIwMjAxMlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICBnZXRFcnJvcnMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyA9IGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICdtZXNzYWdlcycpXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHNjaGVtYSlcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZXM6IGlzU2V0KHNjaGVtYU9wdGlvbnNNZXNzYWdlcykgPyBzY2hlbWFPcHRpb25zTWVzc2FnZXMgOiBbJ2ludmFsaWQnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRyYWZ0KS5mb3JFYWNoKChjb25zdHJhaW4pID0+IHtcbiAgICAgIGlmIChoYXNPd24oc2NoZW1hQ2xvbmUsIGNvbnN0cmFpbikpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5kcmFmdFtjb25zdHJhaW5dXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hT3B0aW9uc01lc3NhZ2VzKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlczogc2NoZW1hT3B0aW9uc01lc3NhZ2VzLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEplZGkgZnJvbSAnLi9qZWRpLmpzJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXIvcmVmLXBhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBKZWRpLFxuICBSZWZQYXJzZXJcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==