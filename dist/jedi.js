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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./src/editors/array.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents an EditorArrayNav instance.
 * @extends EditorArray
 */
class EditorArrayNav extends _array__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

    const navCols = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'navCols')
    const navStacked = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'navStacked')
    const navType = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'navType')

    const row = this.theme.getRow()
    const cols = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(navCols) ? navCols : 3
    const tabListCol = this.theme.getCol(12, cols)
    const tabContentCol = this.theme.getCol(12, (12 - cols))
    const tabContent = this.theme.getTabContent()
    const tabList = this.theme.getTabList({
      stacked: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(navStacked) ? navStacked : false,
      type: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(navType) ? navType : 'pils'
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
      const schemaOptionItemTemplate = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'itemTemplate')

      if (schemaOptionItemTemplate) {
        const template = schemaOptionItemTemplate
        const data = {
          i0: index,
          i1: (index + 1),
          value: child.getValue()
        }
        childTitle = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.compileTemplate)(template, data)
      } else {
        const schemaTitle = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(child.schema)
        childTitle = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaTitle) ? schemaTitle + ' ' + (index + 1) : child.getKey()
      }

      deleteBtn.addEventListener('click', () => {
        this.activeTabIndex = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.clamp)((index - 1), 0, (this.instance.value.length - 1))
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
      const id = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(child.path)

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents an EditorArray instance.
 * @extends Editor
 */
class EditorArray extends _editor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getArrayControl({
      title: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle'),
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
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
    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
      return value
    }

    return []
  }

  refreshUI () {
    this.refreshInteractiveElements()

    const maxItems = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaMaxItems)(this.instance.schema)
    const minItems = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaMinItems)(this.instance.schema)

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(maxItems) && maxItems === this.instance.value.length) {
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

      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(minItems) && this.instance.value.length <= minItems) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boolean */ "./src/editors/boolean.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents an EditorBooleanEnumRadio instance.
 * @extends EditorBoolean
 */
class EditorBooleanEnumRadio extends _boolean__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getRadiosControl({
      values: ['false', 'true'],
      titles: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enumTitles') || ['false', 'true'],
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle'),
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boolean */ "./src/editors/boolean.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents an EditorBooleanEnumSelect instance.
 * @extends EditorBoolean
 */
class EditorBooleanEnumSelect extends _boolean__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getSelectControl({
      values: ['false', 'true'],
      titles: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enumTitles') || ['false', 'true'],
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle'),
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents a EditorBoolean instance.
 * @extends Editor
 */
class EditorBoolean extends _editor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getCheckboxControl({
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle'),
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _themes_icons_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../themes/icons/icons */ "./src/themes/icons/icons.js");
/* harmony import */ var _themes_bootstrap3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes/bootstrap3 */ "./src/themes/bootstrap3.js");
/* harmony import */ var _themes_bootstrap4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/bootstrap4 */ "./src/themes/bootstrap4.js");
/* harmony import */ var _themes_bootstrap5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/bootstrap5 */ "./src/themes/bootstrap5.js");
/* harmony import */ var _themes_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes/theme */ "./src/themes/theme.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");








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
     * @private
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

    const alwaysShowErrors = this.instance.jedi.options.showErrors === 'always' || (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_6__.getSchemaOption)(this.instance.schema, 'showErrors') === 'always'

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

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_5__.isSet)(this.instance.jedi.options.iconLib)) {
      switch (this.instance.jedi.options.iconLib) {
        case 'glyphicons':
          icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_0__.glyphicons
          break
        case 'bootstrap-icons':
          icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_0__.bootstrapIcons
          break
        case 'fontawesome3':
          icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_0__.fontAwesome3
          break
        case 'fontawesome4':
          icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_0__.fontAwesome4
          break
        case 'fontawesome5':
          icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_0__.fontAwesome5
          break
        case 'fontawesome6':
          icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_0__.fontAwesome6
          break
      }
    }

    switch (this.instance.jedi.options.theme) {
      case 'bootstrap3':
        this.theme = new _themes_bootstrap3__WEBPACK_IMPORTED_MODULE_1__["default"](icons)
        break
      case 'bootstrap4':
        this.theme = new _themes_bootstrap4__WEBPACK_IMPORTED_MODULE_2__["default"](icons)
        break
      case 'bootstrap5':
        this.theme = new _themes_bootstrap5__WEBPACK_IMPORTED_MODULE_3__["default"](icons)
        break
      default:
        this.theme = new _themes_theme__WEBPACK_IMPORTED_MODULE_4__["default"](icons)
    }
  }

  /**
   * Sets container attributes like data-path and data-type
   * @private
   */
  setContainerAttributes () {
    this.control.container.setAttribute('data-path', this.instance.path)
    this.control.container.setAttribute('data-type', (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_6__.getSchemaType)(this.instance.schema))
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
    const schemaEnum = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_6__.getSchemaEnum)(this.instance.schema)

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_5__.isSet)(schemaEnum) && !schemaEnum.includes(this.instance.getValue()) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_5__.isSet)(schemaEnum[0])) {
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
    const neverShowErrors = this.instance.jedi.options.showErrors === 'never' || (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_6__.getSchemaOption)(this.instance.schema, 'showErrors') === 'never'

    if (neverShowErrors) {
      return
    }

    this.control.messages.innerHTML = ''

    const label = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_6__.getSchemaTitle)(this.instance.schema) || this.instance.getKey()

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents an EditorMultiple instance.
 * @extends Editor
 */
class EditorMultiple extends _editor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getMultipleControl({
      title: 'Options',
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle'),
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema),
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents a EditorNull instance.
 * @extends Editor
 */
class EditorNull extends _editor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getNullControl({
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle') || (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaFormat)(this.instance.schema) === 'hidden',
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  sanitize (value) {
    return null
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorNull);


/***/ }),

/***/ "./src/editors/number-enum-radio.js":
/*!******************************************!*\
  !*** ./src/editors/number-enum-radio.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./src/editors/number.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents an EditorNumberEnumRadio instance.
 * @extends EditorNumber
 */
class EditorNumberEnumRadio extends _number__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getRadiosControl({
      values: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      titles: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enumTitles') || (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle'),
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./src/editors/number.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents an EditorNumberEnumSelect instance.
 * @extends EditorNumber
 */
class EditorNumberEnumSelect extends _number__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getSelectControl({
      values: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      titles: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enumTitles') || (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle'),
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents a EditorNumber instance.
 * @extends Editor
 */
class EditorNumber extends _editor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getInputControl({
      type: 'number',
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle') || (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaFormat)(this.instance.schema) === 'hidden',
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value)
    })
  }

  sanitize (value) {
    if ((0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(this.instance.schema) === 'integer') {
      return Math.floor(Number(value))
    } else {
      return Number(value)
    }
  }

  refreshUI () {
    this.refreshInteractiveElements()
    const value = this.instance.getValue()

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isNumber)(value)) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./src/editors/object.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");



/**
 * Represents a EditorObjectGrid instance.
 * @extends EditorObject
 */
class EditorObjectGrid extends _object__WEBPACK_IMPORTED_MODULE_0__["default"] {
  refreshEditors () {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild)
    }

    let row = this.theme.getRow()
    this.control.childrenSlot.appendChild(row)

    this.instance.children.forEach((child) => {
      if (child.isActive) {
        const columns = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaOption)(child.schema, 'columns') || 12
        const offset = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaOption)(child.schema, 'offset') || 0
        const col = this.theme.getCol(12, columns, offset)

        if ((0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaOption)(child.schema, 'newRow') === true) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./src/editors/object.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents a EditorObjectNav instance.
 * @extends EditorObject
 */
class EditorObjectNav extends _object__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    const cols = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(controlCols) ? controlCols : 3
    const tabListCol = this.theme.getCol(12, cols)
    const tabContentCol = this.theme.getCol(12, (12 - cols))
    const tabContent = this.theme.getTabContent()
    const tabList = this.theme.getTabList({
      stacked: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(controlStacked) ? controlStacked : false,
      type: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(controlVariant) ? controlVariant : 'pils'
    })

    this.control.childrenSlot.appendChild(row)
    row.appendChild(tabListCol)
    row.appendChild(tabContentCol)
    tabListCol.appendChild(tabList)
    tabContentCol.appendChild(tabContent)

    this.instance.children.forEach((child, index) => {
      if (child.isActive) {
        const active = index === this.activeTabIndex
        const id = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(child.path)
        const schemaTitle = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(child.schema)

        const tab = this.theme.getTab({
          title: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaTitle) ? schemaTitle : child.getKey(),
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents an EditorObject instance.
 * @extends Editor
 */
class EditorObject extends _editor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.propertyActivators = {}
    const schemaOptions = this.instance.schema.options || {}
    let addProperty = true
    const additionalProperties = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaAdditionalProperties)(this.instance.schema)

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(additionalProperties) && additionalProperties === false) {
      addProperty = false
    }

    let editableProperties = false

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(this.instance.jedi.options.editableProperties)) {
      editableProperties = this.instance.jedi.options.editableProperties
    }

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaOptions.editableProperties)) {
      editableProperties = schemaOptions.editableProperties
    }

    this.control = this.theme.getObjectControl({
      title: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle'),
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema),
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

      const propertyExist = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(this.instance.value[key])

      if (propertyExist) {
        return
      }

      let schema = {}

      const schemaAdditionalProperties = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaAdditionalProperties)(this.instance.schema)

      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaAdditionalProperties)) {
        schema = schemaAdditionalProperties
      }

      const child = this.instance.createChild(schema, key)
      child.activate()
      this.instance.properties[key] = { schema }
      this.instance.setValue(this.instance.value)
      this.control.addPropertyControl.input.value = ''

      const ariaLive = this.control.ariaLive
      ariaLive.innerHTML = ''
      const schemaTitle = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(child.schema)
      const label = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaTitle) ? schemaTitle : key
      const ariaLiveMessage = this.theme.getAriaLiveMessage()
      ariaLiveMessage.textContent = label + ' field was added to the form'
      ariaLive.appendChild(ariaLiveMessage)
    })
  }

  sanitize (value) {
    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isObject)(value)) {
      return value
    }

    return {}
  }

  getInvalidFeedback (config) {
    return this.theme.getAlert(config)
  }

  refreshPropertiesSlot () {
    const schemaOptionEditableProperties = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'editableProperties')

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.equal)(this.instance.jedi.options.editableProperties, true) || (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.equal)(schemaOptionEditableProperties, true)) {
      Object.keys(this.instance.properties).forEach((property) => {
        // refactor with isNotRequired
        const isRequired = this.instance.isRequired(property)
        const isDependentRequired = this.instance.isDependentRequired(property)
        const notRequired = !isRequired && !isDependentRequired

        const activatorInDom = this.propertyActivators[property]
        const ariaLive = this.control.ariaLive
        const schema = this.instance.properties[property].schema
        const schemaTitle = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(schema)
        const path = this.instance.path + this.instance.jedi.pathSeparator + property
        const id = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(path) + '-activator'
        const label = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaTitle) ? schemaTitle : property

        if (notRequired && !activatorInDom) {
          const checkboxControl = this.theme.getCheckboxControl({
            id: id,
            label: label,
            srOnly: false
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
          })

          this.control.propertiesActivators.appendChild(checkboxControl.container)
        }

        const checkbox = this.propertyActivators[property]
        if (checkbox) {
          checkbox.disabled = this.disabled
          checkbox.checked = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(this.instance.getValue(), property)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents a EditorStringEnumRadio instance.
 * @extends Editor
 */
class EditorStringEnumRadio extends _string__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getRadiosControl({
      values: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      titles: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enumTitles') || (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle'),
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents a EditorStringEnumSelect instance.
 * @extends Editor
 */
class EditorStringEnumSelect extends _string__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getSelectControl({
      values: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      titles: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'enumTitles') || (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle'),
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents a EditorStringTextarea instance.
 * @extends Editor
 */
class EditorStringTextarea extends _editor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    this.control = this.theme.getTextareaControl({
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle') || (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaFormat)(this.instance.schema) === 'hidden',
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents a EditorString instance.
 * @extends Editor
 */
class EditorString extends _editor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  build () {
    const inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week']
    const schemaFormat = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaFormat)(this.instance.schema)

    this.control = this.theme.getInputControl({
      type: inputTypes.includes(schemaFormat) ? schemaFormat : 'text',
      id: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      srOnly: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOption)(this.instance.schema, 'hideTitle') || schemaFormat === 'hidden',
      description: (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   getSchemaUniqueItems: () => (/* binding */ getSchemaUniqueItems),
/* harmony export */   getSchemaX: () => (/* binding */ getSchemaX)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/helpers/utils.js");


function getSchemaX (schema, keyword) {
  const key = 'x-' + keyword
  return schema[key]
}

function getSchemaSchema (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(schema.$schema) ? schema.$schema : undefined
}

function getSchemaAdditionalProperties (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.additionalProperties) || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.additionalProperties) ? schema.additionalProperties : undefined
}

function getSchemaPropertyNames (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.propertyNames) || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.propertyNames) ? schema.propertyNames : undefined
}

function getSchemaAllOf (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.allOf) ? schema.allOf : undefined
}

function getSchemaAnyOf (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.anyOf) ? schema.anyOf : undefined
}

function getSchemaConst (schema) {
  return schema.const
}

function getSchemaContains (schema) {
  return ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.contains) || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.contains)) ? schema.contains : undefined
}

function getSchemaDefault (schema) {
  return schema.default
}

function getSchemaDependentRequired (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.dependentRequired) ? schema.dependentRequired : undefined
}

function getSchemaDependentSchemas (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.dependentSchemas) ? schema.dependentSchemas : undefined
}

function getSchemaDescription (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(schema.description) ? schema.description : undefined
}

function getSchemaElse (schema) {
  return ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.else) || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.else)) ? schema.else : undefined
}

function getSchemaEnum (schema) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.enum) && schema.enum.length > 0) {
    return schema.enum
  }

  return undefined
}

function getSchemaExclusiveMaximum (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isNumber)(schema.exclusiveMaximum) ? schema.exclusiveMaximum : undefined
}

function getSchemaExclusiveMinimum (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isNumber)(schema.exclusiveMinimum) ? schema.exclusiveMinimum : undefined
}

function getSchemaFormat (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(schema.format) ? schema.format : undefined
}

function getSchemaIf (schema) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.if)) {
    return schema.if
  }

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.if)) {
    return schema.if
  }

  return undefined
}

function getSchemaItems (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.items) || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.items) ? schema.items : undefined
}

function getSchemaMaximum (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isNumber)(schema.maximum) ? schema.maximum : undefined
}

function getSchemaMaxContains (schema) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.maxContains) && schema.maxContains >= 0) {
    return schema.maxContains
  }

  return undefined
}

function getSchemaMaxItems (schema) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.maxItems) && schema.maxItems >= 0) {
    return schema.maxItems
  }

  return undefined
}

function getSchemaMaxLength (schema) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.maxLength) && schema.maxLength >= 0) {
    return schema.maxLength
  }

  return undefined
}

function getSchemaMaxProperties (schema) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.maxProperties)) {
    return schema.maxProperties
  }

  return undefined
}

function getSchemaMinimum (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isNumber)(schema.minimum) ? schema.minimum : undefined
}

function getSchemaMinContains (schema) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.minContains) && schema.minContains >= 0) {
    return schema.minContains
  }

  return undefined
}

function getSchemaMinItems (schema) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.minItems) && schema.minItems >= 0) {
    return schema.minItems
  }

  return undefined
}

function getSchemaMinLength (schema) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.minLength) && schema.minLength >= 0) {
    return schema.minLength
  }

  return undefined
}

function getSchemaMinProperties (schema) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isInteger)(schema.minProperties) && schema.minProperties >= 0) {
    return schema.minProperties
  }

  return undefined
}

function getSchemaMultipleOf (schema) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isNumber)(schema.multipleOf) && schema.multipleOf >= 0) {
    return schema.multipleOf
  }

  return undefined
}

function getSchemaNot (schema) {
  return ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.not) || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.not)) ? schema.not : undefined
}

function getSchemaOption (schema, option) {
  return (schema.options && schema.options[option]) ? schema.options[option] : undefined
}

function getSchemaPattern (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(schema.pattern) ? schema.pattern : undefined
}

function getSchemaPatternProperties (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.patternProperties) ? schema.patternProperties : undefined
}

function getSchemaPrefixItems (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.prefixItems) ? schema.prefixItems : undefined
}

function getSchemaProperties (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.properties) ? schema.properties : undefined
}

function getSchemaReadOnly (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.readOnly) ? schema.readOnly : undefined
}

function getSchemaRequired (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.required) ? [...new Set(schema.required)] : undefined
}

function getSchemaThen (schema) {
  return ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(schema.then) || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.then)) ? schema.then : undefined
}

function getSchemaTitle (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(schema.title) ? schema.title : undefined
}

function getSchemaType (schema) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(schema.type) || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.type)) {
    return schema.type
  }

  return undefined
}

function getSchemaOneOf (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(schema.oneOf) ? schema.oneOf : undefined
}

function getSchemaUniqueItems (schema) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(schema.uniqueItems) ? schema.uniqueItems : undefined
}


/***/ }),

/***/ "./src/helpers/utils.js":
/*!******************************!*\
  !*** ./src/helpers/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   compileTemplate: () => (/* binding */ compileTemplate),
/* harmony export */   deepCopy: () => (/* binding */ deepCopy),
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

function deepCopy (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    const copy = []
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i])
    }
    return copy
  }

  const copy = {}
  for (const key in obj) {
    if (hasOwn(obj, key)) {
      copy[key] = deepCopy(obj[key])
    }
  }
  return copy
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  errorUniqueItems: 'Must have unique items.'
}


/***/ }),

/***/ "./src/instances/array.js":
/*!********************************!*\
  !*** ./src/instances/array.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _editors_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editors/array */ "./src/editors/array.js");
/* harmony import */ var _editors_array_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editors/array-nav */ "./src/editors/array-nav.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");






/**
 * Represents an InstanceArray instance.
 * @extends Instance
 */
class InstanceArray extends _instance__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    const schemaType = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaType)(this.schema)
    const schemaFormat = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaFormat)(this.schema)

    if (schemaType === 'array' && schemaFormat === 'nav') {
      this.ui = new _editors_array_nav__WEBPACK_IMPORTED_MODULE_3__["default"](this)
    } else {
      this.ui = new _editors_array__WEBPACK_IMPORTED_MODULE_2__["default"](this)
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
    const schemaItems = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaItems)(this.schema)
    const schemaPrefixItems = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaPrefixItems)(this.schema)
    schema = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaItems) ? schemaItems : {}

    const hasPrefixItemsSchema = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaPrefixItems) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaPrefixItems[itemsCount])

    if (hasPrefixItemsSchema) {
      schema = schemaPrefixItems[itemsCount]
    }

    const child = this.jedi.createInstance({
      jedi: this.jedi,
      schema: schema,
      path: this.path + this.jedi.pathSeparator + itemsCount,
      parent: this,
      value: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.clone)(value)
    })

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
      child.setValue(value, false)
    }

    return child
  }

  move (fromIndex, toIndex) {
    const value = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.clone)(this.getValue())
    const item = value[fromIndex]
    value.splice(fromIndex, 1)
    value.splice(toIndex, 0, item)
    this.setValue(value)
  }

  addItem () {
    const tempEditor = this.createItemInstance()
    const value = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.clone)(this.getValue())
    value.push(tempEditor.getValue())
    tempEditor.destroy()
    this.setValue(value)
  }

  deleteItem (itemIndex) {
    const currentValue = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.clone)(this.getValue())
    const newValue = currentValue.filter((item, index) => index !== itemIndex)
    this.setValue(newValue)
  }

  onChildChange () {
    const value = []

    this.children.forEach((child) => {
      value.push(child.getValue())
    })

    this.setValue(value)
  }

  refreshChildren () {
    this.children = []

    const value = this.getValue()

    if (!(0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _editors_boolean_enum_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/boolean-enum-radio */ "./src/editors/boolean-enum-radio.js");
/* harmony import */ var _editors_boolean_enum_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editors/boolean-enum-select */ "./src/editors/boolean-enum-select.js");
/* harmony import */ var _editors_boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editors/boolean */ "./src/editors/boolean.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");






/**
 * Represents a InstanceBoolean instance.
 * @extends Instance
 */
class InstanceBoolean extends _instance__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    const schemaType = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaType)(this.schema)
    const schemaFormat = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaFormat)(this.schema)

    if (schemaType === 'boolean' && schemaFormat === 'radio') {
      this.ui = new _editors_boolean_enum_radio__WEBPACK_IMPORTED_MODULE_1__["default"](this)
    } else if (schemaType === 'boolean' && schemaFormat === 'select') {
      this.ui = new _editors_boolean_enum_select__WEBPACK_IMPORTED_MODULE_2__["default"](this)
    } else if (schemaType === 'boolean') {
      this.ui = new _editors_boolean__WEBPACK_IMPORTED_MODULE_3__["default"](this)
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceBoolean);


/***/ }),

/***/ "./src/instances/if-then-else.js":
/*!***************************************!*\
  !*** ./src/instances/if-then-else.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _editors_multiple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/multiple */ "./src/editors/multiple.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jedi */ "./src/jedi.js");






/**
 * Represents a InstanceMultiple instance.
 * @extends Instance
 */
class InstanceIfThenElse extends _instance__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    this.ui = new _editors_multiple__WEBPACK_IMPORTED_MODULE_1__["default"](this)
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
      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)(item.then)) {
        this.schemas.push((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)({}, (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.clone)(this.schema), item.then))
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(JSON.stringify(item.then))
        index++
      }

      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)(item.else)) {
        this.schemas.push((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)({}, (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.clone)(this.schema), item.else))
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(JSON.stringify(item.else))
        index++
      }
    })

    const schemaClone = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.clone)(this.schema)
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

        if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isObject)(valueBefore) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isObject)(futureValue)) {
          futureValue = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.overwriteExistingProperties)(valueBefore, futureValue)
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
    const schemaIf = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_3__.getSchemaIf)(schema)

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)(schemaIf)) {
      const schemaThen = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_3__.getSchemaThen)(schema)
      const schemaElse = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_3__.getSchemaElse)(schema)

      this.ifThenElseShemas.push({
        if: schemaIf,
        then: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)(schemaThen) ? schemaThen : {}
      })

      this.ifThenElseShemas.push({
        if: schemaIf,
        else: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)(schemaElse) ? schemaElse : {}
      })
    }
  }

  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex (value) {
    let fittestIndex = this.index

    this.ifThenElseShemas.forEach((schema, index) => {
      const ifValidator = new _jedi__WEBPACK_IMPORTED_MODULE_4__["default"]({
        XMLHttpRequest: this.jedi.validator.refParser.XMLHttpRequest,
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event-emitter */ "./src/event-emitter.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");




/**
 * Represents a JSON instance.
 */
class Instance extends _event_emitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    this.value = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(config.value) ? config.value : undefined

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

    if (this.jedi.options.isEditor) {
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
    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.notSet)(this.value)) {
      let value
      const schemaType = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(this.schema)

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
    const schemaDefault = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDefault)(this.schema)

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaDefault)) {
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

    return (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.removeDuplicatesFromArray)(errors)
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

    if ((0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaReadOnly)(this.schema) === true) {
      readOnly = true
    }

    if (this.parent && (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaReadOnly)(this.parent.schema) === true) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _editors_multiple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/multiple */ "./src/editors/multiple.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");






/**
 * Represents a InstanceMultiple instance.
 * @extends Instance
 */
class InstanceMultiple extends _instance__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    this.ui = new _editors_multiple__WEBPACK_IMPORTED_MODULE_1__["default"](this)
  }

  prepare () {
    this.instances = []
    this.activeInstance = null
    this.activeInstanceChanged = true
    this.lastIndex = 0
    this.index = 0
    this.schemas = []
    this.switcherOptionValues = []
    this.switcherOptionsLabels = []

    this.on('set-value', () => {
      this.onSetValue()
    })

    const schemaType = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaType)(this.schema)

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)((0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaAnyOf)(this.schema)) || (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)((0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaOneOf)(this.schema))) {
      const schemasOf = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)((0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaAnyOf)(this.schema)) ? (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaAnyOf)(this.schema) : (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaOneOf)(this.schema)
      const schemaCopy = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(this.schema)
      delete schemaCopy['anyOf']
      delete schemaCopy['oneOf']
      delete schemaCopy['options']

      schemasOf.forEach((schema, index) => {
        schema = { ...schemaCopy, ...schema }
        schema = this.jedi.refParser.expand(schema)

        let switcherOptionsLabel = 'Option-' + (index + 1)
        const switcherTitle = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaOption)(schema, 'switcherTitle')
        const schemaTitle = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_4__.getSchemaTitle)(schema)

        if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)(schemaTitle)) {
          switcherOptionsLabel = schemaTitle
        }

        if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)(switcherTitle)) {
          switcherOptionsLabel = switcherTitle
        }

        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(switcherOptionsLabel)
        this.schemas.push(schema)
      })
    } else if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isArray)(schemaType)) {
      schemaType.forEach((type, index) => {
        const schemaClone = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)(this.schema)

        const schema = {
          ...schemaClone,
          ...{ type: type, title: type[0].toUpperCase() + type.slice(1) }
        }

        if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)(schemaClone.title)) {
          schema.title = schemaClone.title
        }

        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(type.charAt(0).toUpperCase() + type.slice(1))

        this.schemas.push(schema)
      })
    } else if (schemaType === 'any' || !schemaType) {
      const schemaClone = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(this.schema)

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
        value: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.clone)(this.value)
      })

      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)(this.value)) {
        instance.setValue(this.value, false)
      }

      instance.unregister()

      instance.on('change', () => {
        this.activeInstanceChanged = true
        this.setValue(this.activeInstance.getValue())
      })

      this.instances.push(instance)

      this.register()
    })

    const fittestIndex = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)(this.if) ? this.getIfIndex(this.value) : this.getFittestIndex(this.value)
    this.switchInstance(fittestIndex, this.value)
  }

  switchInstance (index, value) {
    this.lastIndex = this.index
    this.index = index
    this.activeInstance = this.instances[index]

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)(value)) {
      this.activeInstance.setValue(value, false)
    }

    this.setValue(this.activeInstance.getValue())
  }

  onSetValue () {
    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.different)(this.activeInstance.getValue(), this.value) || this.activeInstanceChanged) {
      this.activeInstanceChanged = false
      const fittestIndex = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isSet)(this.if) ? this.getIfIndex(this.value) : this.getFittestIndex(this.value)
      this.switchInstance(fittestIndex, this.value)
    }
  }

  reassignValues () {
    const lastInstanceValue = this.instances[this.lastIndex].getValue()
    const currentInstanceValue = this.activeInstance.getValue()

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isObject)(lastInstanceValue) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isObject)(currentInstanceValue)) {
      const mergedValue = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.overwriteExistingProperties)(currentInstanceValue, lastInstanceValue)
      this.activeInstance.setValue(mergedValue, false)
    }
  }

  getIfIndex (value) {
    const ifEditor = new _jedi__WEBPACK_IMPORTED_MODULE_3__["default"]({ schema: this.if, data: value })
    const ifErrors = ifEditor.getErrors()
    ifEditor.destroy()
    return ifErrors.length === 0 ? 0 : 1
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

      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.notSet)(fittestIndex) || (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.notSet)(championErrors)) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _editors_null__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/null */ "./src/editors/null.js");



/**
 * Represents a InstanceNull instance.
 * @extends Instance
 */
class InstanceNull extends _instance__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    this.ui = new _editors_null__WEBPACK_IMPORTED_MODULE_1__["default"](this)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceNull);


/***/ }),

/***/ "./src/instances/number.js":
/*!*********************************!*\
  !*** ./src/instances/number.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _editors_number_enum_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/number-enum-radio */ "./src/editors/number-enum-radio.js");
/* harmony import */ var _editors_number_enum_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editors/number-enum-select */ "./src/editors/number-enum-select.js");
/* harmony import */ var _editors_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editors/number */ "./src/editors/number.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");







/**
 * Represents a InstanceNumber instance.
 * @extends Instance
 */
class InstanceNumber extends _instance__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    const schemaType = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_5__.getSchemaType)(this.schema)
    const schemaEnum = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_5__.getSchemaEnum)(this.schema)
    const schemaFormat = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_5__.getSchemaFormat)(this.schema)
    const typeIsNumeric = schemaType === 'number' || schemaType === 'integer'

    if (typeIsNumeric && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_4__.isSet)(schemaEnum) && schemaFormat === 'radio') {
      this.ui = new _editors_number_enum_radio__WEBPACK_IMPORTED_MODULE_1__["default"](this)
    } else if (typeIsNumeric && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_4__.isSet)(schemaEnum)) {
      this.ui = new _editors_number_enum_select__WEBPACK_IMPORTED_MODULE_2__["default"](this)
    } else if (typeIsNumeric) {
      this.ui = new _editors_number__WEBPACK_IMPORTED_MODULE_3__["default"](this)
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceNumber);


/***/ }),

/***/ "./src/instances/object.js":
/*!*********************************!*\
  !*** ./src/instances/object.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _editors_object_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editors/object-grid */ "./src/editors/object-grid.js");
/* harmony import */ var _editors_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editors/object */ "./src/editors/object.js");
/* harmony import */ var _editors_object_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editors/object-nav */ "./src/editors/object-nav.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");







/**
 * Represents an InstanceObject instance.
 * @extends Instance
 */
class InstanceObject extends _instance__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    const schemaType = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_5__.getSchemaType)(this.schema)
    const schemaFormat = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_5__.getSchemaFormat)(this.schema)
    const schemaControl = this.schema['x-control']

    if (schemaType === 'object' && schemaFormat === 'grid') {
      this.ui = new _editors_object_grid__WEBPACK_IMPORTED_MODULE_2__["default"](this)
    } else if (schemaType === 'object' && schemaControl === 'nav') {
      this.ui = new _editors_object_nav__WEBPACK_IMPORTED_MODULE_4__["default"](this)
    } else {
      this.ui = new _editors_object__WEBPACK_IMPORTED_MODULE_3__["default"](this)
    }
  }

  prepare () {
    this.properties = {}
    const schemaProperties = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_5__.getSchemaProperties)(this.schema)

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaProperties)) {
      Object.keys(schemaProperties).forEach((key) => {
        const schema = schemaProperties[key]
        this.properties[key] = { schema }

        let musstCreateChild = true

        const deactivateNonRequired = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_5__.getSchemaOption)(this.schema, 'deactivateNonRequired')
        // const schemaDeactivateNonRequired = getSchemaOption(schema, 'deactivateNonRequired')

        if (this.isNotRequired(key) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(deactivateNonRequired) && deactivateNonRequired === true) {
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
    const schemaRequired = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_5__.getSchemaRequired)(this.schema)

    return (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaRequired) && schemaRequired.includes(property)
  }

  /**
   * Returns true if the property is dependent required
   */
  isDependentRequired (property) {
    const dependentRequired = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_5__.getSchemaDependentRequired)(this.schema)

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(dependentRequired)) {
      let missingProperties = []

      Object.keys(dependentRequired).forEach((key) => {
        if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(this.value[key])) {
          const requiredProperties = dependentRequired[key]

          missingProperties = requiredProperties.filter((property) => {
            return !(0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(this.value, property)
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
      value: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.clone)(value)
    })

    this.children.push(instance)
    this.value[key] = instance.getValue()

    const deactivateNonRequired = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_5__.getSchemaOption)(this.schema, 'deactivateNonRequired')

    if (this.isNotRequired(key) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(deactivateNonRequired) && deactivateNonRequired === true) {
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

    this.setValue(value)
  }

  refreshInstances () {
    const value = this.getValue()

    if (!(0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isObject)(value)) {
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
        if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.different)(oldValue, newValue)) {
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
      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.notSet)(value[key])) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _editors_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/string */ "./src/editors/string.js");
/* harmony import */ var _editors_string_enum_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editors/string-enum-radio */ "./src/editors/string-enum-radio.js");
/* harmony import */ var _editors_string_enum_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editors/string-enum-select */ "./src/editors/string-enum-select.js");
/* harmony import */ var _editors_string_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editors/string-textarea */ "./src/editors/string-textarea.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");








/**
 * Represents a InstanceString instance.
 * @extends Instance
 */
class InstanceString extends _instance__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    const schemaType = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_6__.getSchemaType)(this.schema)
    const schemaEnum = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_6__.getSchemaEnum)(this.schema)
    const schemaFormat = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_6__.getSchemaFormat)(this.schema)

    if (schemaType === 'string' && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_5__.isSet)(schemaEnum) && schemaFormat === 'radio') {
      this.ui = new _editors_string_enum_radio__WEBPACK_IMPORTED_MODULE_2__["default"](this)
    } else if (schemaType === 'string' && schemaFormat === 'textarea') {
      this.ui = new _editors_string_textarea__WEBPACK_IMPORTED_MODULE_4__["default"](this)
    } else if (schemaType === 'string' && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_5__.isSet)(schemaEnum)) {
      this.ui = new _editors_string_enum_select__WEBPACK_IMPORTED_MODULE_3__["default"](this)
    } else if (schemaType === 'string') {
      this.ui = new _editors_string__WEBPACK_IMPORTED_MODULE_1__["default"](this)
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceString);


/***/ }),

/***/ "./src/jedi.js":
/*!*********************!*\
  !*** ./src/jedi.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validation_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation/validator */ "./src/validation/validator.js");
/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-emitter */ "./src/event-emitter.js");
/* harmony import */ var _instances_if_then_else__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instances/if-then-else */ "./src/instances/if-then-else.js");
/* harmony import */ var _instances_multiple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instances/multiple */ "./src/instances/multiple.js");
/* harmony import */ var _instances_boolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instances/boolean */ "./src/instances/boolean.js");
/* harmony import */ var _instances_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instances/object */ "./src/instances/object.js");
/* harmony import */ var _instances_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instances/array */ "./src/instances/array.js");
/* harmony import */ var _instances_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instances/string */ "./src/instances/string.js");
/* harmony import */ var _instances_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instances/number */ "./src/instances/number.js");
/* harmony import */ var _instances_null__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./instances/null */ "./src/instances/null.js");
/* harmony import */ var _ref_parser_ref_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ref-parser/ref-parser */ "./src/ref-parser/ref-parser.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/schema */ "./src/helpers/schema.js");














/**
 * Represents a Jedi instance.
 */
class Jedi extends _event_emitter__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.isEditor - Generates UI controls to edit the JSON value
   * @param {boolean} options.container - Where the UI controls will be rendered
   * @param {string} options.theme - How the UI controls will be rendered
   */
  constructor (options) {
    super()

    this.options = Object.assign({
      container: null,
      isEditor: false,
      editableProperties: false,
      schema: {},
      showErrors: 'change',
      data: undefined,
      validateFormat: false,
      XMLHttpRequest: undefined
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
    this.schema = null

    /**
     * A RefParser instance
     * @type {RefParser}
     * @private
     */
    this.refParser = null

    this.init()
  }

  /**
   * Initializes instance properties
   * @private
   */
  init () {
    this.schema = this.options.schema
    this.refParser = new _ref_parser_ref_parser__WEBPACK_IMPORTED_MODULE_10__["default"]({ XMLHttpRequest: this.options.XMLHttpRequest })
    this.refParser.dereference(this.options.schema)
    this.validator = new _validation_validator__WEBPACK_IMPORTED_MODULE_0__["default"]({ refParser: this.refParser, validateFormat: this.options.validateFormat })

    this.root = this.createInstance({
      jedi: this,
      schema: this.options.schema,
      path: this.rootName
    })

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_11__.isSet)(this.options.data)) {
      this.root.setValue(this.options.data, false)
    }

    if (this.options.isEditor && this.options.container) {
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
    config.schema = this.refParser.expand(config.schema, config.path)
    const schemaType = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_12__.getSchemaType)(config.schema)
    const schemaOneOf = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_12__.getSchemaOneOf)(config.schema)
    const schemaAnyOf = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_12__.getSchemaAnyOf)(config.schema)
    const schemaIf = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_12__.getSchemaIf)(config.schema)
    const schemaThen = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_12__.getSchemaThen)(config.schema)
    const schemaElse = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_12__.getSchemaElse)(config.schema)
    const schemaFormat = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_12__.getSchemaFormat)(config.schema)

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_11__.isSet)(schemaAnyOf) || (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_11__.isSet)(schemaOneOf) || schemaType === 'any' || (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_11__.isArray)(schemaType) || (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_11__.notSet)(schemaType)) {
      return new _instances_multiple__WEBPACK_IMPORTED_MODULE_3__["default"](config)
    }

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_11__.isSet)(schemaIf) && ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_11__.isSet)(schemaThen) || (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_11__.isSet)(schemaElse))) {
      return new _instances_if_then_else__WEBPACK_IMPORTED_MODULE_2__["default"](config)
    }

    if (schemaType === 'object') {
      return new _instances_object__WEBPACK_IMPORTED_MODULE_5__["default"](config)
    }

    if (schemaType === 'array') {
      return new _instances_array__WEBPACK_IMPORTED_MODULE_6__["default"](config)
    }

    if (schemaType === 'string') {
      return new _instances_string__WEBPACK_IMPORTED_MODULE_7__["default"](config)
    }

    if (schemaType === 'number' || schemaType === 'integer') {
      return new _instances_number__WEBPACK_IMPORTED_MODULE_8__["default"](config)
    }

    if (schemaType === 'boolean') {
      return new _instances_boolean__WEBPACK_IMPORTED_MODULE_4__["default"](config)
    }

    if (schemaType === 'null') {
      return new _instances_null__WEBPACK_IMPORTED_MODULE_9__["default"](config)
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

    if (this.options.isEditor) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* global XMLHttpRequest */



class RefParser {
  constructor (config = {}) {
    this.XMLHttpRequest = config.XMLHttpRequest
    this.maxDepths = 3
    this.refs = {}
    this.circularRefs = {}
  }

  dereference (schema) {
    this.traverseExternal(schema)
    this.traverseLocal(schema)
    this.populateCircularRefs()
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
  traverseExternal (schema, path = '#') {
    if (typeof schema !== 'object' || schema === null) {
      return
    }

    for (const [key, value] of Object.entries(schema)) {
      const nextPath = path ? `${path}/${key}` : `/${key}`

      if (this.hasRef(schema)) {
        const ref = schema['$ref']

        if (this.refs[ref]) {
          // console.log('Skipped $ref', ref)
          return
        }

        this.refs[ref] = null

        if (this.hasExternalRef(schema)) {
          const resolvedSchema = this.resolveExternal(schema)
          this.traverseExternal(resolvedSchema, nextPath)
        }
      }

      this.refs[path] = schema

      this.traverseExternal(value, nextPath)
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
          // console.log('Skipped $ref', ref)
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

  populateCircularRefs () {
    Object.keys(this.refs).forEach((ref) => {
      if (this.isCircularRef(ref)) {
        this.circularRefs[ref] = {
          pathDepths: []
        }
      }
    })
  }

  /**
   * Iterates through the this.refs object keys. If the key is an uri containing "http" or "https" then
   * uses that key as the url in a http request to retrieve the external schema. The retrieved schema
   * will be used for the value of that property
   */
  resolveExternal (schema) {
    const ref = schema['$ref']
    const resolvedSchema = this.load(ref)
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

  expand (schema, path) {
    const cloneSchema = JSON.parse(JSON.stringify(schema))

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(cloneSchema) && '$ref' in cloneSchema) {
      const ref = cloneSchema.$ref

      // if (this.circularRefs[ref]) {
      //   const pathDepth = path.split('/').length
      //   this.circularRefs[ref].pathDepths.push(pathDepth)
      //   this.circularRefs[ref].pathDepths = Array.from(new Set(this.circularRefs[ref].pathDepths))
      //   this.circularRefs[ref].pathDepths.splice(this.maxDepths)
      //
      //   if (!this.circularRefs[ref].pathDepths.includes(pathDepth)) {
      //     console.log('circular', JSON.stringify(cloneSchema))
      //
      //     // const stopSchema = Object.({}, cloneSchema, { format: 'circular' })
      //     // delete stopSchema.$ref
      //     // return stopSchema
      //     const refSchema = structuredClone(this.refs[ref])
      //     return JSON.parse(JSON.stringify(refSchema).replace(`"{$ref":"${ref}}"`, '{}'))
      //   }
      // }

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
  load (uri) {
    const request = this.XMLHttpRequest ? new this.XMLHttpRequest() : new XMLHttpRequest()
    request.open('GET', uri, false) // `false` makes the request synchronous
    request.send(null)

    if (request.status === 200) {
      return JSON.parse(request.responseText)
    } else {
      console.error('can not load', uri)
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefParser);


/***/ }),

/***/ "./src/themes/bootstrap3.js":
/*!**********************************!*\
  !*** ./src/themes/bootstrap3.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/themes/theme.js");


/**
 * Represents a ThemeBootstrap3 instance.
 * @extends Theme
 */
class ThemeBootstrap3 extends _theme__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

  getPropertiesToggle (config) {
    const html = this.getButton(config)
    html.setAttribute('data-toggle', 'collapse')
    html.setAttribute('data-target', '#' + config.propertiesContainer.id)
    html.classList.add('jedi-properties-toggle')
    return html
  }

  getPropertiesSlot (config) {
    const html = super.getPropertiesSlot(config)
    html.classList.add('collapse')
    html.setAttribute('id', config.id)
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

    if (config.srOnly) {
      this.visuallyHidden(label)
    }

    return control
  }

  getInputControl (config) {
    const control = super.getInputControl(config)
    const { container, input, label } = control
    container.classList.add('form-group')
    input.classList.add('form-control')

    if (config.srOnly) {
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

    if (config.srOnly) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/themes/theme.js");


/**
 * Represents a ThemeBootstrap4 instance.
 * @extends Theme
 */
class ThemeBootstrap4 extends _theme__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

  getPropertiesSlot (config) {
    const html = super.getPropertiesSlot(config)
    html.classList.add('collapse')
    html.setAttribute('id', config.id)
    return html
  }

  getPropertiesToggle (config) {
    const html = this.getButton(config)
    html.setAttribute('data-toggle', 'collapse')
    html.setAttribute('data-target', '#' + config.propertiesContainer.id)
    html.classList.add('jedi-properties-toggle')
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

    if (config.srOnly) {
      this.visuallyHidden(label)
    }

    return control
  }

  getInputControl (config) {
    const control = super.getInputControl(config)
    const { container, input, label } = control
    container.classList.add('form-group')
    input.classList.add('form-control')

    if (config.srOnly) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/themes/theme.js");


/**
 * Represents a ThemeBootstrap5 instance.
 * @extends Theme
 */
class ThemeBootstrap5 extends _theme__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

  getPropertiesSlot (config) {
    const html = super.getPropertiesSlot(config)
    html.classList.add('collapse')
    html.setAttribute('id', config.id)
    return html
  }

  getControlSlot () {
    const controlSlot = super.getControlSlot()
    controlSlot.classList.add('mb-3')
    return controlSlot
  }

  getPropertiesToggle (config) {
    const html = this.getButton(config)
    html.setAttribute('data-bs-toggle', 'collapse')
    html.setAttribute('data-bs-target', '#' + config.propertiesContainer.id)
    html.classList.add('jedi-properties-toggle')
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
    container.classList.add('mb-3')
    input.classList.add('form-control')

    if (config.srOnly) {
      this.visuallyHidden(label)
    }

    return control
  }

  getInputControl (config) {
    const control = super.getInputControl(config)
    const { container, input, label } = control
    container.classList.add('mb-3')
    input.classList.add('form-control')

    if (config.srOnly) {
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

    if (config.srOnly) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  init (name) {
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
    return document.createElement('fieldset')
  }

  /**
   * Represents a caption for the content of its parent fieldset
   * @private
   */
  getLegend (config) {
    const legend = document.createElement('legend')
    const legendText = document.createElement('span')
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
    return document.createElement('div')
  }

  /**
   * Header for cards
   * @private
   */
  getCardHeader (config = {}) {
    return document.createElement('div')
  }

  /**
   * A body for the cards
   * @private
   */
  getCardBody () {
    return document.createElement('div')
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
    html.classList.add('jedi-child-editors-slot')
    return html
  }

  /**
   * Wrapper for error messages
   * @private
   */
  getMessagesSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-messages-slot')
    html.setAttribute('aria-atomic', 'false')
    html.setAttribute('aria-live', 'polite')
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
   * Container for properties editing elements like property activators
   * @private
   */
  getPropertiesSlot (config) {
    const html = document.createElement('div')
    html.classList.add('jedi-properties-slot')
    html.setAttribute('id', config.id)

    if (this.useToggleEvents) {
      html.style.display = 'none'
    }

    return html
  }

  /**
   * Container for screen reader announced messages
   * @private
   */
  getPropertiesAriaLive (message) {
    const html = document.createElement('div')
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
    html.textContent = message
    this.visuallyHidden(html)
    return html
  }

  /**
   * Toggles the ObjectEditor properties wrapper visibility
   * @private
   */
  getPropertiesToggle (config) {
    const toggle = this.getButton(config)
    toggle.classList.add('jedi-properties-toggle')

    if (this.useToggleEvents) {
      toggle.addEventListener('click', () => {
        if (config.propertiesContainer.hasAttribute('style')) {
          this.visuallyVisible(config.propertiesContainer)
        } else {
          this.visuallyHidden(config.propertiesContainer)
        }
      })
    }

    return toggle
  }

  /**
   * Wrapper for property activators
   * @private
   */
  getPropertiesActivators () {
    const html = document.createElement('div')
    html.classList.add('jedi-properties-container')
    return html
  }

  /**
   * Wrapper buttons
   * @private
   */
  getBtnGroup () {
    const html = document.createElement('span')
    html.style.display = 'initial'
    return html
  }

  /**
   * A button
   * @private
   */
  getButton (config) {
    const button = document.createElement('button')
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
  getDescription (config) {
    const description = document.createElement('small')
    description.textContent = config.textContent
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
      srOnly: config.srOnly
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
      srOnly: true,
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
  getCircularControl () {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()
    const description = document.createElement('div')
    const messages = this.getMessagesSlot()

    description.textContent = 'CIRCULAR'

    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(actions)
    actions.appendChild(arrayActions)

    return { container, description, messages, actions, arrayActions }
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

    if (config.srOnly) {
      this.visuallyHidden(label)
    }

    const descriptionId = config.id + '-description'
    const description = document.createElement('div')
    description.setAttribute('id', descriptionId)

    if (config.description) {
      description.textContent = config.description
    }

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

    if (config.srOnly) {
      this.visuallyHidden(label)
    }

    const description = document.createElement('div')
    const descriptionId = config.id + '-description'
    description.setAttribute('id', descriptionId)

    if (config.description) {
      description.textContent = config.description
    }

    const messages = this.getMessagesSlot()
    const messagesId = config.id + '-messages'
    messages.setAttribute('id', messagesId)

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

    if (config.srOnly) {
      this.visuallyHidden(label)
    }

    const description = document.createElement('div')
    const descriptionId = config.id + '-description'
    description.setAttribute('id', descriptionId)

    if (config.description) {
      description.textContent = config.description
    }

    const messages = this.getMessagesSlot()
    const messagesId = config.id + '-messages'
    messages.setAttribute('id', messagesId)

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
    const messages = this.getMessagesSlot()
    const body = this.getCardBody()
    const legend = this.getLegend({
      id: config.label
    })

    const messagesId = config.id + '-messages'
    messages.setAttribute('id', messagesId)

    const description = document.createElement('div')
    const descriptionId = config.id + '-description'
    description.setAttribute('id', descriptionId)

    if (config.srOnly) {
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

    if (config.description) {
      description.textContent = config.description
    }

    if (config.label) {
      legend.textContent = config.label
    }

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

    if (config.srOnly) {
      this.visuallyHidden(label)
    }

    const description = document.createElement('div')
    const descriptionId = config.id + '-description'
    description.setAttribute('id', descriptionId)

    if (config.description) {
      description.textContent = config.description
    }

    const messages = this.getMessagesSlot()
    const messagesId = config.id + '-messages'
    messages.setAttribute('id', messagesId)

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

    if (config.srOnly) {
      this.visuallyHidden(label)
    }

    const description = document.createElement('div')
    const descriptionId = config.id + '-description'
    description.setAttribute('id', descriptionId)

    if (config.description) {
      description.textContent = config.description
    }

    const messages = this.getMessagesSlot()
    const messagesId = config.id + '-messages'
    messages.setAttribute('id', messagesId)

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
    const invalidFeedbackIcon = document.createElement('small')
    invalidFeedbackText.textContent = config.message
    invalidFeedbackIcon.textContent = '❌ '
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
  getTabList (config) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   additionalProperties: () => (/* binding */ additionalProperties)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");
/**
 * constrains additionalProperties
 */






function additionalProperties (validator, value, schema, key, path) {
  let errors = []
  const schemaAdditionalProperties = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaAdditionalProperties)(schema)
  const schemaPatternProperties = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaPatternProperties)(schema)
  const schemaProperties = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaProperties)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaAdditionalProperties)) {
    const properties = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaProperties) ? schemaProperties : {}
    const additionalProperties = schemaAdditionalProperties
    const patternProperties = schemaPatternProperties

    if (properties) {
      Object.keys(value).forEach((property) => {
        let definedInPatternProperty = false

        if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(patternProperties)) {
          Object.keys(patternProperties).forEach((pattern) => {
            const regexp = new RegExp(pattern)
            definedInPatternProperty = regexp.test(property)
          })
        }

        if (!definedInPatternProperty && additionalProperties === false && !(0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(properties, property)) {
          errors.push({
            messages: [
              (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.errorAdditionalProperties, {
                property: property
              })
            ],
            path: path,
            constrain: 'additionalProperties'
          })
        }

        if (!definedInPatternProperty && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(additionalProperties) && !(0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(properties, property)) {
          const editor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({
            XMLHttpRequest: validator.refParser.XMLHttpRequest,
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allOf: () => (/* binding */ allOf)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");




function allOf (validator, value, schema, key, path) {
  let errors = []
  const allOf = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaAllOf)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(allOf)) {
    allOf.forEach((schema) => {
      const subSchemaEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: schema, data: value, rootName: key })
      const subSchemaErrors = subSchemaEditor.getErrors()
      subSchemaEditor.destroy()
      errors = [...errors, ...subSchemaErrors]
      errors = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.removeDuplicatesFromArray)(errors)
    })
  }

  return errors
}


/***/ }),

/***/ "./src/validation/constrains/anyOf.js":
/*!********************************************!*\
  !*** ./src/validation/constrains/anyOf.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anyOf: () => (/* binding */ anyOf)
/* harmony export */ });
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");





function anyOf (validator, value, schema, key, path) {
  const errors = []
  const anyOf = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaAnyOf)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(anyOf)) {
    let valid = false

    anyOf.forEach((schema) => {
      const anyOfEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: schema, data: value })
      const anyOfErrors = anyOfEditor.getErrors()
      anyOfEditor.destroy()

      if (anyOfErrors.length === 0) {
        valid = true
      }
    })

    if (!valid) {
      errors.push({
        messages: [
          _i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.errorAnyOf
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _const: () => (/* binding */ _const)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function _const (validator, value, schema, key, path) {
  const errors = []
  const schemaConst = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaConst)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaConst)) {
    const valueIsNotEqualConst = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.different)(value, schemaConst)
    const invalid = (valueIsNotEqualConst)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorConst, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contains: () => (/* binding */ contains)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");





function contains (validator, value, schema, key, path) {
  const errors = []
  const contains = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaContains)(schema)
  const minContains = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaMinContains)(schema)
  const maxContains = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaMaxContains)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(contains)) {
    let counter = 0

    value.forEach((item) => {
      const containsEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: contains, data: item })
      const containsErrors = containsEditor.getErrors()

      if (containsErrors.length === 0) {
        counter++
      }

      containsEditor.destroy()
    })

    const containsInvalid = (counter === 0)

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(minContains)) {
      const minContainsInvalid = (counter < minContains)

      if (minContainsInvalid) {
        errors.push({
          messages: [
            (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.errorMinContains, {
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
          messages: [_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.errorContains],
          path: path,
          constrain: 'contains'
        })
      }
    }

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(maxContains)) {
      const maxContainsInvalid = (counter > maxContains)

      if (maxContainsInvalid) {
        errors.push({
          messages: [
            (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.errorMaxContains, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dependentRequired: () => (/* binding */ dependentRequired)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function dependentRequired (validator, value, schema, key, path) {
  const errors = []
  const dependentRequired = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaDependentRequired)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(dependentRequired)) {
    let missingProperties = []

    Object.keys(dependentRequired).forEach((key) => {
      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(value[key])) {
        const requiredProperties = dependentRequired[key]

        missingProperties = requiredProperties.filter((property) => {
          return !(0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(value, property)
        })
      }
    })

    const invalid = missingProperties.length > 0

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorDependentRequired, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dependentSchemas: () => (/* binding */ dependentSchemas)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");




function dependentSchemas (validator, value, schema, key, path) {
  let errors = []
  const dependentSchemas = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaDependentSchemas)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(dependentSchemas)) {
    Object.keys(dependentSchemas).forEach((key) => {
      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(value[key])) {
        const dependentSchema = dependentSchemas[key]
        const tmpEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: dependentSchema, data: value })
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _enum: () => (/* binding */ _enum)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function _enum (validator, value, schema, key, path) {
  const errors = []
  const schemaEnum = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaEnum)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaEnum)) {
    const invalid = !schemaEnum.some(e => JSON.stringify(value) === JSON.stringify(e))

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorEnum, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exclusiveMaximum: () => (/* binding */ exclusiveMaximum)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function exclusiveMaximum (validator, value, schema, key, path) {
  const errors = []
  const exclusiveMaximum = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaExclusiveMaximum)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(exclusiveMaximum)) {
    const invalid = (value >= exclusiveMaximum)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorExclusiveMaximum, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exclusiveMinimum: () => (/* binding */ exclusiveMinimum)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function exclusiveMinimum (validator, value, schema, key, path) {
  const errors = []
  const exclusiveMinimum = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaExclusiveMinimum)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(exclusiveMinimum)) {
    const invalid = (value <= exclusiveMinimum)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorExclusiveMinimum, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   format: () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function format (validator, value, schema, key, path) {
  const errors = []
  const format = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaFormat)(schema)
  let validateFormat = validator.validateFormat

  if ((0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaOption)(schema, 'validateFormat')) {
    validateFormat = schema.options.validateFormat
  }

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(format) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && validateFormat) {
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

    const invalid = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(regexp) && !regexp.test(value)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorFormat, { format: format })
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ifThenElse: () => (/* binding */ ifThenElse)
/* harmony export */ });
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");




function ifThenElse (validator, value, schema, key, path) {
  const errors = []
  const schemaIf = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaIf)(schema)
  const schemaThen = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaThen)(schema)
  const schemaElse = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaElse)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaIf)) {
    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.notSet)(schemaThen) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.notSet)(schemaElse)) {
      return errors
    }

    const ifEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: schemaIf, data: value })
    const ifErrors = ifEditor.getErrors()
    ifEditor.destroy()

    let thenErrors = []
    let elseErrors = []

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaThen)) {
      const thenEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: schemaThen, data: value })
      thenErrors = thenEditor.getErrors()
      thenEditor.destroy()
    }

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaElse)) {
      const elseEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: schemaElse, data: value })
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   items: () => (/* binding */ items)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function items (validator, value, schema, key, path) {
  const errors = []
  const items = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaItems)(schema)
  const prefixItems = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaPrefixItems)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(items)) {
    const prefixItemsSchemasCount = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(prefixItems) ? prefixItems.length : 0

    if (items === false && value.length > 0 && value.length > prefixItemsSchemasCount) {
      errors.push({
        messages: [_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorItems],
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maxItems: () => (/* binding */ maxItems)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function maxItems (validator, value, schema, key, path) {
  const errors = []
  const maxItems = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaMaxItems)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(maxItems)) {
    const invalid = (value.length > maxItems)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMaxItems, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maxLength: () => (/* binding */ maxLength)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function maxLength (validator, value, schema, key, path) {
  const errors = []
  const maxLength = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaMaxLength)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(maxLength)) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length > maxLength)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMaxLength, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maxProperties: () => (/* binding */ maxProperties)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function maxProperties (validator, value, schema, key, path) {
  const errors = []
  const maxProperties = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaMaxProperties)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(maxProperties)) {
    const propertiesCount = Object.keys(value).length
    const invalid = (propertiesCount > maxProperties)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMaxProperties, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maximum: () => (/* binding */ maximum)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function maximum (validator, value, schema, key, path) {
  const errors = []
  const maximum = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaMaximum)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(maximum)) {
    const invalid = (value > maximum)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMaximum, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   minItems: () => (/* binding */ minItems)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function minItems (validator, value, schema, key, path) {
  const errors = []
  const minItems = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaMinItems)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(minItems)) {
    const invalid = (value.length < minItems)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMinItems, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   minLength: () => (/* binding */ minLength)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function minLength (validator, value, schema, key, path) {
  const errors = []
  const minLength = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaMinLength)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(minLength)) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length < minLength)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMinLength, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   minProperties: () => (/* binding */ minProperties)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function minProperties (validator, value, schema, key, path) {
  const errors = []
  const minProperties = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaMinProperties)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(minProperties)) {
    const propertiesCount = Object.keys(value).length
    const invalid = (propertiesCount < minProperties)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMinProperties, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   minimum: () => (/* binding */ minimum)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function minimum (validator, value, schema, key, path) {
  const errors = []
  const minimum = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaMinimum)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(minimum)) {
    const invalid = (value < minimum)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMinimum, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   multipleOf: () => (/* binding */ multipleOf)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function multipleOf (validator, value, schema, key, path) {
  const errors = []
  const multipleOf = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaMultipleOf)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(multipleOf)) {
    if (value === 0) {
      return errors
    }

    const isMultipleOf = (value / multipleOf === Math.floor(value / multipleOf))
    const invalid = (!isMultipleOf || value.toString().includes('e'))

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorMultipleOf, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   not: () => (/* binding */ not)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");





function not (validator, value, schema, key, path) {
  const errors = []
  const not = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaNot)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(not)) {
    const notEditor = new _jedi__WEBPACK_IMPORTED_MODULE_3__["default"]({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: not, data: value })
    const notErrors = notEditor.getErrors()
    notEditor.destroy()

    const invalid = notErrors.length === 0

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorNot)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oneOf: () => (/* binding */ oneOf)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");





function oneOf (validator, value, schema, key, path) {
  const errors = []
  const oneOf = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaOneOf)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(oneOf)) {
    let counter = 0

    oneOf.forEach((schema) => {
      const oneOfEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: schema, data: value })
      const oneOfErrors = oneOfEditor.getErrors()
      oneOfEditor.destroy()

      if (oneOfErrors.length === 0) {
        counter++
      }
    })

    if (counter !== 1) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.errorOneOf, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pattern: () => (/* binding */ pattern)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function pattern (validator, value, schema, key, path) {
  const errors = []
  const pattern = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaPattern)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(pattern)) {
    const regexp = new RegExp(pattern)
    const invalid = !regexp.test(value)

    if (invalid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorPattern, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   patternProperties: () => (/* binding */ patternProperties)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");




function patternProperties (validator, value, schema, path) {
  let errors = []
  const patternProperties = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaPatternProperties)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(patternProperties)) {
    Object.keys(value).forEach((propertyName) => {
      Object.keys(patternProperties).forEach((pattern) => {
        const regexp = new RegExp(pattern)
        if (regexp.test(propertyName)) {
          const schema = patternProperties[pattern]

          const editor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({
            XMLHttpRequest: validator.refParser.XMLHttpRequest,
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefixItems: () => (/* binding */ prefixItems)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");





function prefixItems (validator, value, schema, key, path) {
  const errors = []
  const prefixItems = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaPrefixItems)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(prefixItems)) {
    prefixItems.forEach((itemSchema, index) => {
      const itemValue = value[index]

      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(itemValue)) {
        const tmpEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: itemSchema, data: itemValue })
        const tmpErrors = tmpEditor.getErrors()
        tmpEditor.destroy()

        if (tmpErrors.length > 0) {
          errors.push({
            messages: [
              (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.errorPrefixItems, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   propertyNames: () => (/* binding */ propertyNames)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");
/**
 * constrains propertyNames
 */






function propertyNames (validator, value, schema, key, path) {
  const errors = []
  const schemaPropertyNames = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_2__.getSchemaPropertyNames)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaPropertyNames)) {
    Object.keys(value).forEach((propertyName) => {
      const editor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({
        XMLHttpRequest: validator.refParser.XMLHttpRequest,
        schema: schemaPropertyNames,
        data: propertyName
      })

      const invalid = editor.getErrors().length > 0

      if (invalid) {
        errors.push({
          messages: [
            (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.errorPropertyNames, { propertyName: propertyName })
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   required: () => (/* binding */ required)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function required (validator, value, schema, key, path) {
  const errors = []
  const required = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaRequired)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(required)) {
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
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorRequired, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   type: () => (/* binding */ type)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function type (validator, value, schema, key, path) {
  const errors = []
  const type = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaType)(schema)

  if (type === 'any') {
    return errors
  }

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(type)) {
    const types = {
      string: value => (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(value),
      number: value => (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value),
      integer: value => (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isInteger)(value),
      boolean: value => (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(value),
      array: value => (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(value),
      object: value => (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(value),
      null: value => (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isNull)(value)
    }

    let valid = true

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(type)) {
      valid = type.some((type) => {
        return types[type](value)
      })
    } else {
      valid = types[type](value)
    }

    if (!valid) {
      errors.push({
        messages: [
          (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.compileTemplate)(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorType, {
            type: type,
            valueType: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.getType)(value)
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

/***/ "./src/validation/constrains/uniqueItems.js":
/*!**************************************************!*\
  !*** ./src/validation/constrains/uniqueItems.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uniqueItems: () => (/* binding */ uniqueItems)
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function uniqueItems (validator, value, schema, key, path) {
  const errors = []
  const uniqueItems = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_1__.getSchemaUniqueItems)(schema)

  if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isSet)(uniqueItems) && uniqueItems === true) {
    const seen = []
    let hasDuplicatedItems = false

    for (let i = 0; i < value.length; i++) {
      let item = value[i]

      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(item)) {
        item = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.sortObject)(item)
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
          _i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.errorUniqueItems
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constrains/allOf */ "./src/validation/constrains/allOf.js");
/* harmony import */ var _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constrains/minLength */ "./src/validation/constrains/minLength.js");
/* harmony import */ var _constrains_anyOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constrains/anyOf */ "./src/validation/constrains/anyOf.js");
/* harmony import */ var _constrains_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constrains/enum */ "./src/validation/constrains/enum.js");
/* harmony import */ var _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constrains/exclusiveMaximum */ "./src/validation/constrains/exclusiveMaximum.js");
/* harmony import */ var _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constrains/exclusiveMinimum */ "./src/validation/constrains/exclusiveMinimum.js");
/* harmony import */ var _constrains_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constrains/format */ "./src/validation/constrains/format.js");
/* harmony import */ var _constrains_items__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constrains/items */ "./src/validation/constrains/items.js");
/* harmony import */ var _constrains_maxItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constrains/maxItems */ "./src/validation/constrains/maxItems.js");
/* harmony import */ var _constrains_maxLength__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constrains/maxLength */ "./src/validation/constrains/maxLength.js");
/* harmony import */ var _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constrains/maxProperties */ "./src/validation/constrains/maxProperties.js");
/* harmony import */ var _constrains_minimum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constrains/minimum */ "./src/validation/constrains/minimum.js");
/* harmony import */ var _constrains_minItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constrains/minItems */ "./src/validation/constrains/minItems.js");
/* harmony import */ var _constrains_minProperties__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constrains/minProperties */ "./src/validation/constrains/minProperties.js");
/* harmony import */ var _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constrains/multipleOf */ "./src/validation/constrains/multipleOf.js");
/* harmony import */ var _constrains_not__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constrains/not */ "./src/validation/constrains/not.js");
/* harmony import */ var _constrains_oneOf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constrains/oneOf */ "./src/validation/constrains/oneOf.js");
/* harmony import */ var _constrains_pattern__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constrains/pattern */ "./src/validation/constrains/pattern.js");
/* harmony import */ var _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constrains/patternProperties */ "./src/validation/constrains/patternProperties.js");
/* harmony import */ var _constrains_required__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constrains/required */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../constrains/type */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../constrains/maximum */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constrains/uniqueItems */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constrains/additionalProperties */ "./src/validation/constrains/additionalProperties.js");

























/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  additionalProperties: _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_23__.additionalProperties,
  allOf: _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__.allOf,
  anyOf: _constrains_anyOf__WEBPACK_IMPORTED_MODULE_2__.anyOf,
  enum: _constrains_enum__WEBPACK_IMPORTED_MODULE_3__._enum,
  exclusiveMaximum: _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_4__.exclusiveMaximum,
  exclusiveMinimum: _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_5__.exclusiveMinimum,
  format: _constrains_format__WEBPACK_IMPORTED_MODULE_6__.format,
  items: _constrains_items__WEBPACK_IMPORTED_MODULE_7__.items,
  maximum: _constrains_maximum__WEBPACK_IMPORTED_MODULE_21__.maximum,
  maxItems: _constrains_maxItems__WEBPACK_IMPORTED_MODULE_8__.maxItems,
  maxLength: _constrains_maxLength__WEBPACK_IMPORTED_MODULE_9__.maxLength,
  maxProperties: _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_10__.maxProperties,
  minimum: _constrains_minimum__WEBPACK_IMPORTED_MODULE_11__.minimum,
  minItems: _constrains_minItems__WEBPACK_IMPORTED_MODULE_12__.minItems,
  minLength: _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__.minLength,
  minProperties: _constrains_minProperties__WEBPACK_IMPORTED_MODULE_13__.minProperties,
  multipleOf: _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_14__.multipleOf,
  not: _constrains_not__WEBPACK_IMPORTED_MODULE_15__.not,
  oneOf: _constrains_oneOf__WEBPACK_IMPORTED_MODULE_16__.oneOf,
  pattern: _constrains_pattern__WEBPACK_IMPORTED_MODULE_17__.pattern,
  patternProperties: _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_18__.patternProperties,
  required: _constrains_required__WEBPACK_IMPORTED_MODULE_19__.required,
  type: _constrains_type__WEBPACK_IMPORTED_MODULE_20__.type,
  uniqueItems: _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_22__.uniqueItems
});


/***/ }),

/***/ "./src/validation/drafts/draft-06.js":
/*!*******************************************!*\
  !*** ./src/validation/drafts/draft-06.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constrains/allOf */ "./src/validation/constrains/allOf.js");
/* harmony import */ var _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constrains/minLength */ "./src/validation/constrains/minLength.js");
/* harmony import */ var _constrains_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constrains/const */ "./src/validation/constrains/const.js");
/* harmony import */ var _constrains_contains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constrains/contains */ "./src/validation/constrains/contains.js");
/* harmony import */ var _constrains_anyOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constrains/anyOf */ "./src/validation/constrains/anyOf.js");
/* harmony import */ var _constrains_dependentRequired__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constrains/dependentRequired */ "./src/validation/constrains/dependentRequired.js");
/* harmony import */ var _constrains_dependentSchemas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constrains/dependentSchemas */ "./src/validation/constrains/dependentSchemas.js");
/* harmony import */ var _constrains_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constrains/enum */ "./src/validation/constrains/enum.js");
/* harmony import */ var _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constrains/exclusiveMaximum */ "./src/validation/constrains/exclusiveMaximum.js");
/* harmony import */ var _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constrains/exclusiveMinimum */ "./src/validation/constrains/exclusiveMinimum.js");
/* harmony import */ var _constrains_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constrains/format */ "./src/validation/constrains/format.js");
/* harmony import */ var _constrains_if_then_else__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constrains/if-then-else */ "./src/validation/constrains/if-then-else.js");
/* harmony import */ var _constrains_items__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constrains/items */ "./src/validation/constrains/items.js");
/* harmony import */ var _constrains_maxItems__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constrains/maxItems */ "./src/validation/constrains/maxItems.js");
/* harmony import */ var _constrains_maxLength__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constrains/maxLength */ "./src/validation/constrains/maxLength.js");
/* harmony import */ var _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constrains/maxProperties */ "./src/validation/constrains/maxProperties.js");
/* harmony import */ var _constrains_minimum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constrains/minimum */ "./src/validation/constrains/minimum.js");
/* harmony import */ var _constrains_minItems__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constrains/minItems */ "./src/validation/constrains/minItems.js");
/* harmony import */ var _constrains_minProperties__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constrains/minProperties */ "./src/validation/constrains/minProperties.js");
/* harmony import */ var _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constrains/multipleOf */ "./src/validation/constrains/multipleOf.js");
/* harmony import */ var _constrains_not__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../constrains/not */ "./src/validation/constrains/not.js");
/* harmony import */ var _constrains_oneOf__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../constrains/oneOf */ "./src/validation/constrains/oneOf.js");
/* harmony import */ var _constrains_pattern__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constrains/pattern */ "./src/validation/constrains/pattern.js");
/* harmony import */ var _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constrains/patternProperties */ "./src/validation/constrains/patternProperties.js");
/* harmony import */ var _constrains_prefixItems__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../constrains/prefixItems */ "./src/validation/constrains/prefixItems.js");
/* harmony import */ var _constrains_required__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../constrains/required */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../constrains/type */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../constrains/maximum */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../constrains/uniqueItems */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../constrains/additionalProperties */ "./src/validation/constrains/additionalProperties.js");































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  additionalProperties: _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_29__.additionalProperties,
  allOf: _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__.allOf,
  anyOf: _constrains_anyOf__WEBPACK_IMPORTED_MODULE_4__.anyOf,
  const: _constrains_const__WEBPACK_IMPORTED_MODULE_2__._const,
  contains: _constrains_contains__WEBPACK_IMPORTED_MODULE_3__.contains,
  dependentRequired: _constrains_dependentRequired__WEBPACK_IMPORTED_MODULE_5__.dependentRequired,
  dependentSchemas: _constrains_dependentSchemas__WEBPACK_IMPORTED_MODULE_6__.dependentSchemas,
  enum: _constrains_enum__WEBPACK_IMPORTED_MODULE_7__._enum,
  exclusiveMaximum: _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_8__.exclusiveMaximum,
  exclusiveMinimum: _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_9__.exclusiveMinimum,
  format: _constrains_format__WEBPACK_IMPORTED_MODULE_10__.format,
  if: _constrains_if_then_else__WEBPACK_IMPORTED_MODULE_11__.ifThenElse,
  items: _constrains_items__WEBPACK_IMPORTED_MODULE_12__.items,
  maximum: _constrains_maximum__WEBPACK_IMPORTED_MODULE_27__.maximum,
  maxItems: _constrains_maxItems__WEBPACK_IMPORTED_MODULE_13__.maxItems,
  maxLength: _constrains_maxLength__WEBPACK_IMPORTED_MODULE_14__.maxLength,
  maxProperties: _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_15__.maxProperties,
  minimum: _constrains_minimum__WEBPACK_IMPORTED_MODULE_16__.minimum,
  minItems: _constrains_minItems__WEBPACK_IMPORTED_MODULE_17__.minItems,
  minLength: _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__.minLength,
  minProperties: _constrains_minProperties__WEBPACK_IMPORTED_MODULE_18__.minProperties,
  multipleOf: _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_19__.multipleOf,
  not: _constrains_not__WEBPACK_IMPORTED_MODULE_20__.not,
  oneOf: _constrains_oneOf__WEBPACK_IMPORTED_MODULE_21__.oneOf,
  pattern: _constrains_pattern__WEBPACK_IMPORTED_MODULE_22__.pattern,
  patternProperties: _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_23__.patternProperties,
  prefixItems: _constrains_prefixItems__WEBPACK_IMPORTED_MODULE_24__.prefixItems,
  required: _constrains_required__WEBPACK_IMPORTED_MODULE_25__.required,
  type: _constrains_type__WEBPACK_IMPORTED_MODULE_26__.type,
  uniqueItems: _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_28__.uniqueItems
});


/***/ }),

/***/ "./src/validation/drafts/draft-07.js":
/*!*******************************************!*\
  !*** ./src/validation/drafts/draft-07.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constrains/allOf */ "./src/validation/constrains/allOf.js");
/* harmony import */ var _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constrains/minLength */ "./src/validation/constrains/minLength.js");
/* harmony import */ var _constrains_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constrains/const */ "./src/validation/constrains/const.js");
/* harmony import */ var _constrains_contains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constrains/contains */ "./src/validation/constrains/contains.js");
/* harmony import */ var _constrains_anyOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constrains/anyOf */ "./src/validation/constrains/anyOf.js");
/* harmony import */ var _constrains_dependentRequired__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constrains/dependentRequired */ "./src/validation/constrains/dependentRequired.js");
/* harmony import */ var _constrains_dependentSchemas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constrains/dependentSchemas */ "./src/validation/constrains/dependentSchemas.js");
/* harmony import */ var _constrains_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constrains/enum */ "./src/validation/constrains/enum.js");
/* harmony import */ var _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constrains/exclusiveMaximum */ "./src/validation/constrains/exclusiveMaximum.js");
/* harmony import */ var _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constrains/exclusiveMinimum */ "./src/validation/constrains/exclusiveMinimum.js");
/* harmony import */ var _constrains_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constrains/format */ "./src/validation/constrains/format.js");
/* harmony import */ var _constrains_if_then_else__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constrains/if-then-else */ "./src/validation/constrains/if-then-else.js");
/* harmony import */ var _constrains_items__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constrains/items */ "./src/validation/constrains/items.js");
/* harmony import */ var _constrains_maxItems__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constrains/maxItems */ "./src/validation/constrains/maxItems.js");
/* harmony import */ var _constrains_maxLength__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constrains/maxLength */ "./src/validation/constrains/maxLength.js");
/* harmony import */ var _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constrains/maxProperties */ "./src/validation/constrains/maxProperties.js");
/* harmony import */ var _constrains_minimum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constrains/minimum */ "./src/validation/constrains/minimum.js");
/* harmony import */ var _constrains_minItems__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constrains/minItems */ "./src/validation/constrains/minItems.js");
/* harmony import */ var _constrains_minProperties__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constrains/minProperties */ "./src/validation/constrains/minProperties.js");
/* harmony import */ var _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constrains/multipleOf */ "./src/validation/constrains/multipleOf.js");
/* harmony import */ var _constrains_not__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../constrains/not */ "./src/validation/constrains/not.js");
/* harmony import */ var _constrains_oneOf__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../constrains/oneOf */ "./src/validation/constrains/oneOf.js");
/* harmony import */ var _constrains_pattern__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constrains/pattern */ "./src/validation/constrains/pattern.js");
/* harmony import */ var _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constrains/patternProperties */ "./src/validation/constrains/patternProperties.js");
/* harmony import */ var _constrains_prefixItems__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../constrains/prefixItems */ "./src/validation/constrains/prefixItems.js");
/* harmony import */ var _constrains_required__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../constrains/required */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../constrains/type */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../constrains/maximum */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../constrains/uniqueItems */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../constrains/additionalProperties */ "./src/validation/constrains/additionalProperties.js");































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  additionalProperties: _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_29__.additionalProperties,
  allOf: _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__.allOf,
  anyOf: _constrains_anyOf__WEBPACK_IMPORTED_MODULE_4__.anyOf,
  const: _constrains_const__WEBPACK_IMPORTED_MODULE_2__._const,
  contains: _constrains_contains__WEBPACK_IMPORTED_MODULE_3__.contains,
  dependentRequired: _constrains_dependentRequired__WEBPACK_IMPORTED_MODULE_5__.dependentRequired,
  dependentSchemas: _constrains_dependentSchemas__WEBPACK_IMPORTED_MODULE_6__.dependentSchemas,
  enum: _constrains_enum__WEBPACK_IMPORTED_MODULE_7__._enum,
  exclusiveMaximum: _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_8__.exclusiveMaximum,
  exclusiveMinimum: _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_9__.exclusiveMinimum,
  format: _constrains_format__WEBPACK_IMPORTED_MODULE_10__.format,
  if: _constrains_if_then_else__WEBPACK_IMPORTED_MODULE_11__.ifThenElse,
  items: _constrains_items__WEBPACK_IMPORTED_MODULE_12__.items,
  maximum: _constrains_maximum__WEBPACK_IMPORTED_MODULE_27__.maximum,
  maxItems: _constrains_maxItems__WEBPACK_IMPORTED_MODULE_13__.maxItems,
  maxLength: _constrains_maxLength__WEBPACK_IMPORTED_MODULE_14__.maxLength,
  maxProperties: _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_15__.maxProperties,
  minimum: _constrains_minimum__WEBPACK_IMPORTED_MODULE_16__.minimum,
  minItems: _constrains_minItems__WEBPACK_IMPORTED_MODULE_17__.minItems,
  minLength: _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__.minLength,
  minProperties: _constrains_minProperties__WEBPACK_IMPORTED_MODULE_18__.minProperties,
  multipleOf: _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_19__.multipleOf,
  not: _constrains_not__WEBPACK_IMPORTED_MODULE_20__.not,
  oneOf: _constrains_oneOf__WEBPACK_IMPORTED_MODULE_21__.oneOf,
  pattern: _constrains_pattern__WEBPACK_IMPORTED_MODULE_22__.pattern,
  patternProperties: _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_23__.patternProperties,
  prefixItems: _constrains_prefixItems__WEBPACK_IMPORTED_MODULE_24__.prefixItems,
  required: _constrains_required__WEBPACK_IMPORTED_MODULE_25__.required,
  type: _constrains_type__WEBPACK_IMPORTED_MODULE_26__.type,
  uniqueItems: _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_28__.uniqueItems
});


/***/ }),

/***/ "./src/validation/drafts/draft-2019-09.js":
/*!************************************************!*\
  !*** ./src/validation/drafts/draft-2019-09.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constrains/allOf */ "./src/validation/constrains/allOf.js");
/* harmony import */ var _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constrains/minLength */ "./src/validation/constrains/minLength.js");
/* harmony import */ var _constrains_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constrains/const */ "./src/validation/constrains/const.js");
/* harmony import */ var _constrains_contains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constrains/contains */ "./src/validation/constrains/contains.js");
/* harmony import */ var _constrains_anyOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constrains/anyOf */ "./src/validation/constrains/anyOf.js");
/* harmony import */ var _constrains_dependentRequired__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constrains/dependentRequired */ "./src/validation/constrains/dependentRequired.js");
/* harmony import */ var _constrains_dependentSchemas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constrains/dependentSchemas */ "./src/validation/constrains/dependentSchemas.js");
/* harmony import */ var _constrains_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constrains/enum */ "./src/validation/constrains/enum.js");
/* harmony import */ var _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constrains/exclusiveMaximum */ "./src/validation/constrains/exclusiveMaximum.js");
/* harmony import */ var _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constrains/exclusiveMinimum */ "./src/validation/constrains/exclusiveMinimum.js");
/* harmony import */ var _constrains_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constrains/format */ "./src/validation/constrains/format.js");
/* harmony import */ var _constrains_if_then_else__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constrains/if-then-else */ "./src/validation/constrains/if-then-else.js");
/* harmony import */ var _constrains_items__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constrains/items */ "./src/validation/constrains/items.js");
/* harmony import */ var _constrains_maxItems__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constrains/maxItems */ "./src/validation/constrains/maxItems.js");
/* harmony import */ var _constrains_maxLength__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constrains/maxLength */ "./src/validation/constrains/maxLength.js");
/* harmony import */ var _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constrains/maxProperties */ "./src/validation/constrains/maxProperties.js");
/* harmony import */ var _constrains_minimum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constrains/minimum */ "./src/validation/constrains/minimum.js");
/* harmony import */ var _constrains_minItems__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constrains/minItems */ "./src/validation/constrains/minItems.js");
/* harmony import */ var _constrains_minProperties__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constrains/minProperties */ "./src/validation/constrains/minProperties.js");
/* harmony import */ var _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constrains/multipleOf */ "./src/validation/constrains/multipleOf.js");
/* harmony import */ var _constrains_not__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../constrains/not */ "./src/validation/constrains/not.js");
/* harmony import */ var _constrains_oneOf__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../constrains/oneOf */ "./src/validation/constrains/oneOf.js");
/* harmony import */ var _constrains_pattern__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constrains/pattern */ "./src/validation/constrains/pattern.js");
/* harmony import */ var _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constrains/patternProperties */ "./src/validation/constrains/patternProperties.js");
/* harmony import */ var _constrains_prefixItems__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../constrains/prefixItems */ "./src/validation/constrains/prefixItems.js");
/* harmony import */ var _constrains_required__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../constrains/required */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../constrains/type */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../constrains/maximum */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../constrains/uniqueItems */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../constrains/additionalProperties */ "./src/validation/constrains/additionalProperties.js");































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  additionalProperties: _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_29__.additionalProperties,
  allOf: _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__.allOf,
  anyOf: _constrains_anyOf__WEBPACK_IMPORTED_MODULE_4__.anyOf,
  const: _constrains_const__WEBPACK_IMPORTED_MODULE_2__._const,
  contains: _constrains_contains__WEBPACK_IMPORTED_MODULE_3__.contains,
  dependentRequired: _constrains_dependentRequired__WEBPACK_IMPORTED_MODULE_5__.dependentRequired,
  dependentSchemas: _constrains_dependentSchemas__WEBPACK_IMPORTED_MODULE_6__.dependentSchemas,
  enum: _constrains_enum__WEBPACK_IMPORTED_MODULE_7__._enum,
  exclusiveMaximum: _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_8__.exclusiveMaximum,
  exclusiveMinimum: _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_9__.exclusiveMinimum,
  format: _constrains_format__WEBPACK_IMPORTED_MODULE_10__.format,
  if: _constrains_if_then_else__WEBPACK_IMPORTED_MODULE_11__.ifThenElse,
  items: _constrains_items__WEBPACK_IMPORTED_MODULE_12__.items,
  maximum: _constrains_maximum__WEBPACK_IMPORTED_MODULE_27__.maximum,
  maxItems: _constrains_maxItems__WEBPACK_IMPORTED_MODULE_13__.maxItems,
  maxLength: _constrains_maxLength__WEBPACK_IMPORTED_MODULE_14__.maxLength,
  maxProperties: _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_15__.maxProperties,
  minimum: _constrains_minimum__WEBPACK_IMPORTED_MODULE_16__.minimum,
  minItems: _constrains_minItems__WEBPACK_IMPORTED_MODULE_17__.minItems,
  minLength: _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__.minLength,
  minProperties: _constrains_minProperties__WEBPACK_IMPORTED_MODULE_18__.minProperties,
  multipleOf: _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_19__.multipleOf,
  not: _constrains_not__WEBPACK_IMPORTED_MODULE_20__.not,
  oneOf: _constrains_oneOf__WEBPACK_IMPORTED_MODULE_21__.oneOf,
  pattern: _constrains_pattern__WEBPACK_IMPORTED_MODULE_22__.pattern,
  patternProperties: _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_23__.patternProperties,
  prefixItems: _constrains_prefixItems__WEBPACK_IMPORTED_MODULE_24__.prefixItems,
  required: _constrains_required__WEBPACK_IMPORTED_MODULE_25__.required,
  type: _constrains_type__WEBPACK_IMPORTED_MODULE_26__.type,
  uniqueItems: _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_28__.uniqueItems
});


/***/ }),

/***/ "./src/validation/drafts/draft-2020-12.js":
/*!************************************************!*\
  !*** ./src/validation/drafts/draft-2020-12.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constrains/allOf */ "./src/validation/constrains/allOf.js");
/* harmony import */ var _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constrains/minLength */ "./src/validation/constrains/minLength.js");
/* harmony import */ var _constrains_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constrains/const */ "./src/validation/constrains/const.js");
/* harmony import */ var _constrains_contains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constrains/contains */ "./src/validation/constrains/contains.js");
/* harmony import */ var _constrains_anyOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constrains/anyOf */ "./src/validation/constrains/anyOf.js");
/* harmony import */ var _constrains_dependentRequired__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constrains/dependentRequired */ "./src/validation/constrains/dependentRequired.js");
/* harmony import */ var _constrains_dependentSchemas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constrains/dependentSchemas */ "./src/validation/constrains/dependentSchemas.js");
/* harmony import */ var _constrains_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constrains/enum */ "./src/validation/constrains/enum.js");
/* harmony import */ var _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constrains/exclusiveMaximum */ "./src/validation/constrains/exclusiveMaximum.js");
/* harmony import */ var _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constrains/exclusiveMinimum */ "./src/validation/constrains/exclusiveMinimum.js");
/* harmony import */ var _constrains_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constrains/format */ "./src/validation/constrains/format.js");
/* harmony import */ var _constrains_if_then_else__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constrains/if-then-else */ "./src/validation/constrains/if-then-else.js");
/* harmony import */ var _constrains_items__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constrains/items */ "./src/validation/constrains/items.js");
/* harmony import */ var _constrains_maxItems__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constrains/maxItems */ "./src/validation/constrains/maxItems.js");
/* harmony import */ var _constrains_maxLength__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constrains/maxLength */ "./src/validation/constrains/maxLength.js");
/* harmony import */ var _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constrains/maxProperties */ "./src/validation/constrains/maxProperties.js");
/* harmony import */ var _constrains_minimum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constrains/minimum */ "./src/validation/constrains/minimum.js");
/* harmony import */ var _constrains_minItems__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constrains/minItems */ "./src/validation/constrains/minItems.js");
/* harmony import */ var _constrains_minProperties__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constrains/minProperties */ "./src/validation/constrains/minProperties.js");
/* harmony import */ var _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constrains/multipleOf */ "./src/validation/constrains/multipleOf.js");
/* harmony import */ var _constrains_not__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../constrains/not */ "./src/validation/constrains/not.js");
/* harmony import */ var _constrains_oneOf__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../constrains/oneOf */ "./src/validation/constrains/oneOf.js");
/* harmony import */ var _constrains_pattern__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constrains/pattern */ "./src/validation/constrains/pattern.js");
/* harmony import */ var _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constrains/patternProperties */ "./src/validation/constrains/patternProperties.js");
/* harmony import */ var _constrains_prefixItems__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../constrains/prefixItems */ "./src/validation/constrains/prefixItems.js");
/* harmony import */ var _constrains_propertyNames__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../constrains/propertyNames */ "./src/validation/constrains/propertyNames.js");
/* harmony import */ var _constrains_required__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../constrains/required */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../constrains/type */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../constrains/maximum */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../constrains/uniqueItems */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../constrains/additionalProperties */ "./src/validation/constrains/additionalProperties.js");
































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  additionalProperties: _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_30__.additionalProperties,
  allOf: _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__.allOf,
  anyOf: _constrains_anyOf__WEBPACK_IMPORTED_MODULE_4__.anyOf,
  const: _constrains_const__WEBPACK_IMPORTED_MODULE_2__._const,
  contains: _constrains_contains__WEBPACK_IMPORTED_MODULE_3__.contains,
  dependentRequired: _constrains_dependentRequired__WEBPACK_IMPORTED_MODULE_5__.dependentRequired,
  dependentSchemas: _constrains_dependentSchemas__WEBPACK_IMPORTED_MODULE_6__.dependentSchemas,
  enum: _constrains_enum__WEBPACK_IMPORTED_MODULE_7__._enum,
  exclusiveMaximum: _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_8__.exclusiveMaximum,
  exclusiveMinimum: _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_9__.exclusiveMinimum,
  format: _constrains_format__WEBPACK_IMPORTED_MODULE_10__.format,
  if: _constrains_if_then_else__WEBPACK_IMPORTED_MODULE_11__.ifThenElse,
  items: _constrains_items__WEBPACK_IMPORTED_MODULE_12__.items,
  maximum: _constrains_maximum__WEBPACK_IMPORTED_MODULE_28__.maximum,
  maxItems: _constrains_maxItems__WEBPACK_IMPORTED_MODULE_13__.maxItems,
  maxLength: _constrains_maxLength__WEBPACK_IMPORTED_MODULE_14__.maxLength,
  maxProperties: _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_15__.maxProperties,
  minimum: _constrains_minimum__WEBPACK_IMPORTED_MODULE_16__.minimum,
  minItems: _constrains_minItems__WEBPACK_IMPORTED_MODULE_17__.minItems,
  minLength: _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__.minLength,
  minProperties: _constrains_minProperties__WEBPACK_IMPORTED_MODULE_18__.minProperties,
  multipleOf: _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_19__.multipleOf,
  not: _constrains_not__WEBPACK_IMPORTED_MODULE_20__.not,
  oneOf: _constrains_oneOf__WEBPACK_IMPORTED_MODULE_21__.oneOf,
  pattern: _constrains_pattern__WEBPACK_IMPORTED_MODULE_22__.pattern,
  patternProperties: _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_23__.patternProperties,
  prefixItems: _constrains_prefixItems__WEBPACK_IMPORTED_MODULE_24__.prefixItems,
  propertyNames: _constrains_propertyNames__WEBPACK_IMPORTED_MODULE_25__.propertyNames,
  required: _constrains_required__WEBPACK_IMPORTED_MODULE_26__.required,
  type: _constrains_type__WEBPACK_IMPORTED_MODULE_27__.type,
  uniqueItems: _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_29__.uniqueItems
});


/***/ }),

/***/ "./src/validation/validator.js":
/*!*************************************!*\
  !*** ./src/validation/validator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _drafts_draft_04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drafts/draft-04 */ "./src/validation/drafts/draft-04.js");
/* harmony import */ var _drafts_draft_06__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drafts/draft-06 */ "./src/validation/drafts/draft-06.js");
/* harmony import */ var _drafts_draft_07__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drafts/draft-07 */ "./src/validation/drafts/draft-07.js");
/* harmony import */ var _drafts_draft_2019_09__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drafts/draft-2019-09 */ "./src/validation/drafts/draft-2019-09.js");
/* harmony import */ var _drafts_draft_2020_12__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drafts/draft-2020-12 */ "./src/validation/drafts/draft-2020-12.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");








/**
 * Represents a Validator instance.
 */
class Validator {
  constructor (config = {}) {
    this.refParser = config.refParser
    this.validateFormat = config.validateFormat ? config.validateFormat : false
    this.draft = _drafts_draft_2020_12__WEBPACK_IMPORTED_MODULE_4__["default"]

    this.jsonSchemaDrafts = {
      'http://json-schema.org/draft-04/schema#': _drafts_draft_04__WEBPACK_IMPORTED_MODULE_0__["default"],
      'http://json-schema.org/draft-06/schema#': _drafts_draft_06__WEBPACK_IMPORTED_MODULE_1__["default"],
      'http://json-schema.org/draft-07/schema#': _drafts_draft_07__WEBPACK_IMPORTED_MODULE_2__["default"],
      'https://json-schema.org/draft/2019-09/schema': _drafts_draft_2019_09__WEBPACK_IMPORTED_MODULE_3__["default"],
      'https://json-schema.org/draft/2020-12/schema': _drafts_draft_2020_12__WEBPACK_IMPORTED_MODULE_4__["default"]
    }
  }

  /**
   * Validates a value against it's schema
   */
  getErrors (value, schema, key, path) {
    let schemaErrors = []
    const schemaOptionsMessages = (0,_helpers_schema__WEBPACK_IMPORTED_MODULE_6__.getSchemaOption)(schema, 'messages')

    const schemaClone = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_5__.clone)(schema)

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_5__.isBoolean)(schemaClone) && schemaClone === true) {
      return schemaErrors
    }

    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_5__.isBoolean)(schemaClone) && schemaClone === false) {
      return [{
        messages: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_5__.isSet)(schemaOptionsMessages) ? schemaOptionsMessages : ['invalid'],
        path: path
      }]
    }

    Object.keys(this.draft).forEach((constrain) => {
      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_5__.hasOwn)(schemaClone, constrain)) {
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/jedi.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGlCQUFpQixxREFBSzs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFNO0FBQ2Q7QUFDQSx5QkFBeUIsOERBQWE7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixpRUFBZ0I7O0FBRTFDLFFBQVEscURBQUs7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxXQUFXLHlFQUF5QjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDaFRuQjs7QUFFMkM7O0FBRTNDO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsS0FBSyxHQUFHLElBQUksUUFBUSxJQUFJOztBQUV6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLEtBQUssR0FBRyxJQUFJLFFBQVEsSUFBSTs7QUFFekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixJQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSx3REFBUTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsaUJBQWlCLG9CQUFvQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsU0FBUyxLQUFLLE9BQU87QUFDekY7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNRzs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOENBQUs7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGVBQWUsZ0NBQWdDLG9CQUFvQjtBQUNoSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVkseUVBQXlFOztBQUVyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksdUVBQXVFO0FBQ25GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuUEg7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhDQUFLO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0ZBQW9GOztBQUVoRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDREQUE0RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hRSDs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOENBQUs7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxvRkFBb0Y7O0FBRWhHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksNERBQTREO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2UTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXktbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC1ncmlkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy10ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaGVscGVycy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2kxOG4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pZi10aGVuLWVsc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2plZGkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvaWNvbnMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYtdGhlbi1lbHNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2l0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heEl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heExlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tdWx0aXBsZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL25vdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9vbmVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3Byb3BlcnR5TmFtZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMTktMDkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSmVkaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0plZGkvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IEVkaXRvckFycmF5IGZyb20gJy4vYXJyYXknXG5pbXBvcnQgeyBjbGFtcCwgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckFycmF5TmF2IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQXJyYXlcbiAqL1xuY2xhc3MgRWRpdG9yQXJyYXlOYXYgZXh0ZW5kcyBFZGl0b3JBcnJheSB7XG4gIGluaXQgKCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aFxuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBuYXZDb2xzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2Q29scycpXG4gICAgY29uc3QgbmF2U3RhY2tlZCA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdlN0YWNrZWQnKVxuICAgIGNvbnN0IG5hdlR5cGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXZUeXBlJylcblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gaXNTZXQobmF2Q29scykgPyBuYXZDb2xzIDogM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogaXNTZXQobmF2U3RhY2tlZCkgPyBuYXZTdGFja2VkIDogZmFsc2UsXG4gICAgICB0eXBlOiBpc1NldChuYXZUeXBlKSA/IG5hdlR5cGUgOiAncGlscydcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkxpc3RDb2wpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkNvbnRlbnRDb2wpXG4gICAgdGFiTGlzdENvbC5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuICAgIHRhYkNvbnRlbnRDb2wuYXBwZW5kQ2hpbGQodGFiQ29udGVudClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGxldCBjaGlsZFRpdGxlXG4gICAgICBjb25zdCBzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdpdGVtVGVtcGxhdGUnKVxuXG4gICAgICBpZiAoc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgaTA6IGluZGV4LFxuICAgICAgICAgIGkxOiAoaW5kZXggKyAxKSxcbiAgICAgICAgICB2YWx1ZTogY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkVGl0bGUgPSBjb21waWxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcbiAgICAgICAgY2hpbGRUaXRsZSA9IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlICsgJyAnICsgKGluZGV4ICsgMSkgOiBjaGlsZC5nZXRLZXkoKVxuICAgICAgfVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBjbGFtcCgoaW5kZXggLSAxKSwgMCwgKHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoIC0gMSkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGluZGV4IC0gMVxuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdG9JbmRleFxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGluZGV4ICsgMVxuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdG9JbmRleFxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aClcblxuICAgICAgY29uc3QgdGFiID0gdGhpcy50aGVtZS5nZXRUYWIoe1xuICAgICAgICB0aXRsZTogY2hpbGRUaXRsZSxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgfSlcblxuICAgICAgdGFiLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBpbmRleFxuICAgICAgfSlcblxuICAgICAgdGhpcy50aGVtZS5zZXRUYWJQYW5lQXR0cmlidXRlcyhjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lciwgYWN0aXZlLCBpZClcbiAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBtb3ZlVXBCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuXG4gICAgICBpZiAoKHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoIC0gMSkgPT09IGluZGV4KSB7XG4gICAgICAgIG1vdmVEb3duQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckFycmF5TmF2XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hTWF4SXRlbXMsXG4gIGdldFNjaGVtYU1pbkl0ZW1zLFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQXJyYXkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yQXJyYXkgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRBcnJheUNvbnRyb2woe1xuICAgICAgdGl0bGU6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KGNvbmZpZylcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuXG4gICAgY29uc3QgbWF4SXRlbXMgPSBnZXRTY2hlbWFNYXhJdGVtcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBtaW5JdGVtcyA9IGdldFNjaGVtYU1pbkl0ZW1zKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KG1heEl0ZW1zKSAmJiBtYXhJdGVtcyA9PT0gdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY29udHJvbC5hZGRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0RGVsZXRlSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVVcEl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVEb3duSXRlbUJ0bigpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmlubmVySFRNTCA9ICcnXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCh0aGlzLmluc3RhbmNlLmplZGkucGF0aFNlcGFyYXRvcikucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU2V0KG1pbkl0ZW1zKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA8PSBtaW5JdGVtcykge1xuICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQXJyYXlcbiIsImltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckJvb2xlYW5cbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBleHRlbmRzIEVkaXRvckJvb2xlYW4ge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckJvb2xlYW5FbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JCb29sZWFuXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yQm9vbGVhbiB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JCb29sZWFuIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW4gZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuXG4iLCJpbXBvcnQgeyBnbHlwaGljb25zLCBib290c3RyYXBJY29ucywgZm9udEF3ZXNvbWUzLCBmb250QXdlc29tZTQsIGZvbnRBd2Vzb21lNSwgZm9udEF3ZXNvbWU2IH0gZnJvbSAnLi4vdGhlbWVzL2ljb25zL2ljb25zJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3RoZW1lcy90aGVtZSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBFZGl0b3Ige1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSW5zdGFuY2UgYmVpbmcgY29udHJvbGxlZCBieSB0aGlzIGVkaXRvci5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIGluc3RhbmNlIHVzZWQgdG8gYnVpbGQgdGhlIEVkaXRvciB1c2VyIGludGVyZmFjZS5cbiAgICAgKiBAdHlwZSB7VGhlbWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVzZXIgaW50ZXJmYWNlIGh0bWwgZm9yIHRoaXMgZWRpdG9yXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jb250cm9sID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZWQgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG5cbiAgICAvKipcbiAgICAgKiBSZWFkIG9ubHkgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yZWFkT25seSA9IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpXG5cbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuY29lcmNlVmFsdWUoKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgY29uc3QgYWx3YXlzU2hvd0Vycm9ycyA9IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnNob3dFcnJvcnMgPT09ICdhbHdheXMnIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3Nob3dFcnJvcnMnKSA9PT0gJ2Fsd2F5cydcblxuICAgIGlmIChhbHdheXNTaG93RXJyb3JzKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgZWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICBsZXQgaWNvbnMgPSBudWxsXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuaWNvbkxpYikpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuaWNvbkxpYikge1xuICAgICAgICBjYXNlICdnbHlwaGljb25zJzpcbiAgICAgICAgICBpY29ucyA9IGdseXBoaWNvbnNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdib290c3RyYXAtaWNvbnMnOlxuICAgICAgICAgIGljb25zID0gYm9vdHN0cmFwSWNvbnNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTMnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWUzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWU0JzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lNFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNSc6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTVcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTYnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU2XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICdib290c3RyYXAzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDMoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKGljb25zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNvbnRhaW5lciBhdHRyaWJ1dGVzIGxpa2UgZGF0YS1wYXRoIGFuZCBkYXRhLXR5cGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIGdldFNjaGVtYVR5cGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpKVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZWRpdG9yIGNvbnRyb2wgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGVkaXRvciBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYnkgbWFraW5nIGFzc3VtcHRpb25zIGJhc2VkIG9uIGNvbnN0cmFpbnNcbiAgICovXG4gIGNvZXJjZVZhbHVlICgpIHtcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFFbnVtKSAmJiAhc2NoZW1hRW51bS5pbmNsdWRlcyh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpICYmIGlzU2V0KHNjaGVtYUVudW1bMF0pKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHNjaGVtYUVudW1bMF0sIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHVpIGVsZW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzIChlcnJvcnMpIHtcbiAgICBjb25zdCBuZXZlclNob3dFcnJvcnMgPSB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5zaG93RXJyb3JzID09PSAnbmV2ZXInIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3Nob3dFcnJvcnMnKSA9PT0gJ25ldmVyJ1xuXG4gICAgaWYgKG5ldmVyU2hvd0Vycm9ycykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBsYWJlbCA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgICAgIG1lc3NhZ2U6IGxhYmVsICsgJzogJyArIG1lc3NhZ2VcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXJyb3IgbWVzc2FnZSBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgY29udHJvbCBVSSB3aGVuIGl0cyBzdGF0ZSBjaGFuZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICB9XG5cbiAgcmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMgKCkge1xuICAgIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudHMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxuXG4gICAgaW50ZXJhY3RpdmVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbC5jb250YWluZXIgJiYgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JNdWx0aXBsZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JNdWx0aXBsZSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE11bHRpcGxlQ29udHJvbCh7XG4gICAgICB0aXRsZTogJ09wdGlvbnMnLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBzd2l0Y2hlck9wdGlvblZhbHVlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5pbmRleFxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICB9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KGNvbmZpZylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JNdWx0aXBsZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck51bGwgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVsbCBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE51bGxDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVsbFxuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1SYWRpbyBleHRlbmRzIEVkaXRvck51bWJlciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHJhZGlvLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JOdW1iZXIge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hRm9ybWF0LFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JOdW1iZXIgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGdldFNjaGVtYVR5cGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlclxuIiwiaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuL29iamVjdCdcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JPYmplY3RHcmlkIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yT2JqZWN0XG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdEdyaWQgZXh0ZW5kcyBFZGl0b3JPYmplY3Qge1xuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBsZXQgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRTY2hlbWFPcHRpb24oY2hpbGQuc2NoZW1hLCAnY29sdW1ucycpIHx8IDEyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICdvZmZzZXQnKSB8fCAwXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2x1bW5zLCBvZmZzZXQpXG5cbiAgICAgICAgaWYgKGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICduZXdSb3cnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb2wpXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdEdyaWRcbiIsImltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi9vYmplY3QnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck9iamVjdE5hdiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck9iamVjdFxuICovXG5jbGFzcyBFZGl0b3JPYmplY3ROYXYgZXh0ZW5kcyBFZGl0b3JPYmplY3Qge1xuICBpbml0ICgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gMFxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbENvbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYVsneC1jb250cm9sLWNvbHMnXVxuICAgIGNvbnN0IGNvbnRyb2xTdGFja2VkID0gdGhpcy5pbnN0YW5jZS5zY2hlbWFbJ3gtY29udHJvbC1zdGFja2VkJ11cbiAgICBjb25zdCBjb250cm9sVmFyaWFudCA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hWyd4LWNvbnRyb2wtdmFyaWFudCddXG5cbiAgICBjb25zdCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgY29uc3QgY29scyA9IGlzU2V0KGNvbnRyb2xDb2xzKSA/IGNvbnRyb2xDb2xzIDogM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogaXNTZXQoY29udHJvbFN0YWNrZWQpID8gY29udHJvbFN0YWNrZWQgOiBmYWxzZSxcbiAgICAgIHR5cGU6IGlzU2V0KGNvbnRyb2xWYXJpYW50KSA/IGNvbnRyb2xWYXJpYW50IDogJ3BpbHMnXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJMaXN0Q29sKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJDb250ZW50Q29sKVxuICAgIHRhYkxpc3RDb2wuYXBwZW5kQ2hpbGQodGFiTGlzdClcbiAgICB0YWJDb250ZW50Q29sLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGluZGV4ID09PSB0aGlzLmFjdGl2ZVRhYkluZGV4XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2hpbGQuc2NoZW1hKVxuXG4gICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgICB0aXRsZTogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgICAgfSlcblxuICAgICAgICB0YWIubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRoZW1lLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLCBhY3RpdmUsIGlkKVxuXG4gICAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3ROYXZcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQge1xuICBlcXVhbCxcbiAgaGFzT3duLFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIHBhdGhUb0F0dHJpYnV0ZVxufSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGdldFNjaGVtYURlc2NyaXB0aW9uLFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yT2JqZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdCBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLnByb3BlcnR5QWN0aXZhdG9ycyA9IHt9XG4gICAgY29uc3Qgc2NoZW1hT3B0aW9ucyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbnMgfHwge31cbiAgICBsZXQgYWRkUHJvcGVydHkgPSB0cnVlXG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlKSB7XG4gICAgICBhZGRQcm9wZXJ0eSA9IGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IGVkaXRhYmxlUHJvcGVydGllcyA9IGZhbHNlXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzKSkge1xuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYU9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzKSkge1xuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzID0gc2NoZW1hT3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXNcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE9iamVjdENvbnRyb2woe1xuICAgICAgdGl0bGU6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGVkaXRhYmxlUHJvcGVydGllcyxcbiAgICAgIGFkZFByb3BlcnR5OiBhZGRQcm9wZXJ0eVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZS5zcGxpdCgnICcpLmpvaW4oJycpXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0ge31cblxuICAgICAgY29uc3Qgc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgICAgaWYgKGlzU2V0KHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgICAgICBzY2hlbWEgPSBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuaW5zdGFuY2UuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICB0aGlzLmluc3RhbmNlLnByb3BlcnRpZXNba2V5XSA9IHsgc2NoZW1hIH1cbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWUgPSAnJ1xuXG4gICAgICBjb25zdCBhcmlhTGl2ZSA9IHRoaXMuY29udHJvbC5hcmlhTGl2ZVxuICAgICAgYXJpYUxpdmUuaW5uZXJIVE1MID0gJydcbiAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2hpbGQuc2NoZW1hKVxuICAgICAgY29uc3QgbGFiZWwgPSBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSA6IGtleVxuICAgICAgY29uc3QgYXJpYUxpdmVNZXNzYWdlID0gdGhpcy50aGVtZS5nZXRBcmlhTGl2ZU1lc3NhZ2UoKVxuICAgICAgYXJpYUxpdmVNZXNzYWdlLnRleHRDb250ZW50ID0gbGFiZWwgKyAnIGZpZWxkIHdhcyBhZGRlZCB0byB0aGUgZm9ybSdcbiAgICAgIGFyaWFMaXZlLmFwcGVuZENoaWxkKGFyaWFMaXZlTWVzc2FnZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KGNvbmZpZylcbiAgfVxuXG4gIHJlZnJlc2hQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uRWRpdGFibGVQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZWRpdGFibGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2UucHJvcGVydGllcykuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgLy8gcmVmYWN0b3Igd2l0aCBpc05vdFJlcXVpcmVkXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQocHJvcGVydHkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQocHJvcGVydHkpXG4gICAgICAgIGNvbnN0IG5vdFJlcXVpcmVkID0gIWlzUmVxdWlyZWQgJiYgIWlzRGVwZW5kZW50UmVxdWlyZWRcblxuICAgICAgICBjb25zdCBhY3RpdmF0b3JJbkRvbSA9IHRoaXMucHJvcGVydHlBY3RpdmF0b3JzW3Byb3BlcnR5XVxuICAgICAgICBjb25zdCBhcmlhTGl2ZSA9IHRoaXMuY29udHJvbC5hcmlhTGl2ZVxuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLmluc3RhbmNlLnByb3BlcnRpZXNbcHJvcGVydHldLnNjaGVtYVxuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHNjaGVtYSlcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuaW5zdGFuY2UucGF0aCArIHRoaXMuaW5zdGFuY2UuamVkaS5wYXRoU2VwYXJhdG9yICsgcHJvcGVydHlcbiAgICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUocGF0aCkgKyAnLWFjdGl2YXRvcidcbiAgICAgICAgY29uc3QgbGFiZWwgPSBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSA6IHByb3BlcnR5XG5cbiAgICAgICAgaWYgKG5vdFJlcXVpcmVkICYmICFhY3RpdmF0b3JJbkRvbSkge1xuICAgICAgICAgIGNvbnN0IGNoZWNrYm94Q29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgIHNyT25seTogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjaGVja2JveENvbnRyb2wuaW5wdXRcbiAgICAgICAgICB0aGlzLnByb3BlcnR5QWN0aXZhdG9yc1twcm9wZXJ0eV0gPSBjaGVja2JveFxuXG4gICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgYXJpYUxpdmUuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgIGNvbnN0IGFyaWFMaXZlTWVzc2FnZSA9IHRoaXMudGhlbWUuZ2V0QXJpYUxpdmVNZXNzYWdlKClcblxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmdldENoaWxkKHByb3BlcnR5KVxuXG4gICAgICAgICAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwgcHJvcGVydHkpXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmdldENoaWxkKHByb3BlcnR5KS5hY3RpdmF0ZSgpXG4gICAgICAgICAgICAgIGFyaWFMaXZlTWVzc2FnZS50ZXh0Q29udGVudCA9IGxhYmVsICsgJyBmaWVsZCB3YXMgYWRkZWQgdG8gdGhlIGZvcm0nXG4gICAgICAgICAgICAgIGFyaWFMaXZlLmFwcGVuZENoaWxkKGFyaWFMaXZlTWVzc2FnZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZ2V0Q2hpbGQocHJvcGVydHkpLmRlYWN0aXZhdGUoKVxuICAgICAgICAgICAgICBhcmlhTGl2ZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBsYWJlbCArICcgZmllbGQgd2FzIHJlbW92ZWQgZnJvbSB0aGUgZm9ybSdcbiAgICAgICAgICAgICAgYXJpYUxpdmUuYXBwZW5kQ2hpbGQoYXJpYUxpdmVNZXNzYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250cm9sLmNvbnRhaW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGhpcy5wcm9wZXJ0eUFjdGl2YXRvcnNbcHJvcGVydHldXG4gICAgICAgIGlmIChjaGVja2JveCkge1xuICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBoYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBwcm9wZXJ0eSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGlmIChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdFxuIiwiaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdFbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nVGV4dGFyZWEgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nVGV4dGFyZWFcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyhzY2hlbWFGb3JtYXQpID8gc2NoZW1hRm9ybWF0IDogJ3RleHQnLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBzY2hlbWFGb3JtYXQgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmIChzY2hlbWFGb3JtYXQgPT09ICdjb2xvcicgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdcbiIsIi8qKlxuICogUmVwcmVzZW50cyBhbiBFdmVudEVtaXR0ZXIgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGlzIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICovXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBvZiBhIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gYmUgZW1pdHRlZFxuICAgKiBAcGFyYW0geyp9IHBheWxvYWQgLSBQYXlsb2FkIGNvbnRhaW5pbmcgZGF0YSB0aGF0IGlzIHBhc3NlZCBhbG9uZyB3aXRoIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgZW1pdCAobmFtZSwgcGF5bG9hZCA9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjayhwYXlsb2FkKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhbGwgcHJvcGVydGllcyBvZiB0aGUgY2xhc3NcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFYIChzY2hlbWEsIGtleXdvcmQpIHtcbiAgY29uc3Qga2V5ID0gJ3gtJyArIGtleXdvcmRcbiAgcmV0dXJuIHNjaGVtYVtrZXldXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFTY2hlbWEgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLiRzY2hlbWEpID8gc2NoZW1hLiRzY2hlbWEgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgfHwgaXNCb29sZWFuKHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByb3BlcnR5TmFtZXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLnByb3BlcnR5TmFtZXMpIHx8IGlzQm9vbGVhbihzY2hlbWEucHJvcGVydHlOYW1lcykgPyBzY2hlbWEucHJvcGVydHlOYW1lcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQWxsT2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEuYWxsT2YpID8gc2NoZW1hLmFsbE9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBbnlPZiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5hbnlPZikgPyBzY2hlbWEuYW55T2YgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUNvbnN0IChzY2hlbWEpIHtcbiAgcmV0dXJuIHNjaGVtYS5jb25zdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQ29udGFpbnMgKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS5jb250YWlucykgfHwgaXNCb29sZWFuKHNjaGVtYS5jb250YWlucykpID8gc2NoZW1hLmNvbnRhaW5zIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZWZhdWx0IChzY2hlbWEpIHtcbiAgcmV0dXJuIHNjaGVtYS5kZWZhdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzKSA/IHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZXNjcmlwdGlvbiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEuZGVzY3JpcHRpb24pID8gc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFbHNlIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEuZWxzZSkgfHwgaXNCb29sZWFuKHNjaGVtYS5lbHNlKSkgPyBzY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRW51bSAoc2NoZW1hKSB7XG4gIGlmIChpc0FycmF5KHNjaGVtYS5lbnVtKSAmJiBzY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5lbnVtXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFeGNsdXNpdmVNYXhpbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFGb3JtYXQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLmZvcm1hdCkgPyBzY2hlbWEuZm9ybWF0IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFJZiAoc2NoZW1hKSB7XG4gIGlmIChpc09iamVjdChzY2hlbWEuaWYpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5pZlxuICB9XG5cbiAgaWYgKGlzQm9vbGVhbihzY2hlbWEuaWYpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5pZlxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hSXRlbXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLml0ZW1zKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLml0ZW1zKSA/IHNjaGVtYS5pdGVtcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4aW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEubWF4aW11bSkgPyBzY2hlbWEubWF4aW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4Q29udGFpbnMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhDb250YWlucykgJiYgc2NoZW1hLm1heENvbnRhaW5zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heENvbnRhaW5zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhJdGVtcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heEl0ZW1zKSAmJiBzY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4SXRlbXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heExlbmd0aCAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heExlbmd0aCkgJiYgc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhMZW5ndGhcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heFByb3BlcnRpZXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgIHJldHVybiBzY2hlbWEubWF4UHJvcGVydGllc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluaW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEubWluaW11bSkgPyBzY2hlbWEubWluaW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluQ29udGFpbnMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5Db250YWlucykgJiYgc2NoZW1hLm1pbkNvbnRhaW5zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkNvbnRhaW5zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5JdGVtcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pbkl0ZW1zKSAmJiBzY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluSXRlbXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkxlbmd0aCAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pbkxlbmd0aCkgJiYgc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5MZW5ndGhcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pblByb3BlcnRpZXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiBzY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNdWx0aXBsZU9mIChzY2hlbWEpIHtcbiAgaWYgKGlzTnVtYmVyKHNjaGVtYS5tdWx0aXBsZU9mKSAmJiBzY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tdWx0aXBsZU9mXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFOb3QgKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS5ub3QpIHx8IGlzQm9vbGVhbihzY2hlbWEubm90KSkgPyBzY2hlbWEubm90IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFPcHRpb24gKHNjaGVtYSwgb3B0aW9uKSB7XG4gIHJldHVybiAoc2NoZW1hLm9wdGlvbnMgJiYgc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyBzY2hlbWEub3B0aW9uc1tvcHRpb25dIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQYXR0ZXJuIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5wYXR0ZXJuKSA/IHNjaGVtYS5wYXR0ZXJuIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQcmVmaXhJdGVtcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5wcmVmaXhJdGVtcykgPyBzY2hlbWEucHJlZml4SXRlbXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByb3BlcnRpZXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLnByb3BlcnRpZXMpID8gc2NoZW1hLnByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVJlYWRPbmx5IChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEucmVhZE9ubHkpID8gc2NoZW1hLnJlYWRPbmx5IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFSZXF1aXJlZCAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldChzY2hlbWEucmVxdWlyZWQpXSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVGhlbiAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbihzY2hlbWEudGhlbikpID8gc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVRpdGxlIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS50aXRsZSkgPyBzY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVR5cGUgKHNjaGVtYSkge1xuICBpZiAoaXNTdHJpbmcoc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkoc2NoZW1hLnR5cGUpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS50eXBlXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFPbmVPZiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5vbmVPZikgPyBzY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVVuaXF1ZUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEudW5pcXVlSXRlbXMpID8gc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG59XG4iLCIvKipcbiAqIFV0aWxzLlxuICogQG1vZHVsZSB1dGlsc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaXJjdWxhclJlcGxhY2VyICgpIHtcbiAgY29uc3QgYW5jZXN0b3JzID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIC8vIGB0aGlzYCBpcyB0aGUgb2JqZWN0IHRoYXQgdmFsdWUgaXMgY29udGFpbmVkIGluLFxuICAgIC8vIGkuZS4sIGl0cyBkaXJlY3QgcGFyZW50LlxuICAgIHdoaWxlIChhbmNlc3RvcnMubGVuZ3RoID4gMCAmJiBhbmNlc3RvcnMuYXQoLTEpICE9PSB0aGlzKSB7XG4gICAgICBhbmNlc3RvcnMucG9wKClcbiAgICB9XG4gICAgaWYgKGFuY2VzdG9ycy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnW0NpcmN1bGFyXSdcbiAgICB9XG4gICAgYW5jZXN0b3JzLnB1c2godmFsdWUpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgY2xvbmUgb2YgYSB0aGluZ1xuICogQHBhcmFtIHsqfSB0aGluZyAtIFRoZSB0aGluZyB0byBiZSBjbG9uZWRcbiAqIEByZXR1cm4geyp9IFRoZSBjbG9uZSBvZiB0aGUgdGhpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lICh0aGluZykge1xuICBpZiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nLCBnZXRDaXJjdWxhclJlcGxhY2VyKCkpKVxufVxuXG4vKipcbiAqIFJldHVybnMgZXNjYXBlZCByZWdleHBcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEVzY2FwZWQgcmVnZXhwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAgKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbi8qKlxuICogTXVsdGlwbGUgc2VhcmNoIGFuZCByZXBsYWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IGZpbmQgLSBUaGUgcGFydCB0byBiZSByZXBsYWNlZFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2UgLSBUaGUgcmVwbGFjZW1lbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQWxsIChzdHIsIGZpbmQsIHJlcGxhY2UpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKGZpbmQpLCAnZycpLCByZXBsYWNlKVxufVxuXG4vKipcbiAqIEZvcm1hdHMgYSBqc29uIHBhdGggdG8gYmUgdXNlZCBhcyBhbiBodG1sIGF0dHJpYnV0ZSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUganNvbiBwYXRoXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRoVG9BdHRyaWJ1dGUgKHBhdGgpIHtcbiAgcmV0dXJuIHJlcGxhY2VBbGwocmVwbGFjZUFsbChwYXRoLCAnIycsICdyb290JyksICcvJywgJy0nKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIFRoZSBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIC0gVGhlIHByb3BlcnR5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duIChvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApXG59XG5cbi8qKlxuICogU29ydCBvYmplY3QgcHJvcGVydGllc1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIFRoZSBvYmplY3RcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0T2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBlcXVhbFxuICogQHBhcmFtIHsqfSBhIC0gVmFsdWUgQVxuICogQHBhcmFtIHsqfSBiIC0gVmFsdWUgQlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsIChhLCBiKSB7XG4gIGlmIChpc09iamVjdChhKSAmJiBpc09iamVjdChiKSkge1xuICAgIGEgPSBzb3J0T2JqZWN0KGEpXG4gICAgYiA9IHNvcnRPYmplY3QoYilcbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gdmFsdWVzIHBhc3NlZCBhcmUgZGlmZmVyZW50XG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW50IChhLCBiKSB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBudWxsXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NldCAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdFNldCAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIG51bWJlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGFuIGludGVnZXJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIgKHZhbHVlKSB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYSBzdHJpbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIGJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGFuIGFycmF5XG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSAodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gb2JqZWN0XG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKHZhbHVlKSB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHR5cGUgb2YgYSB2YWx1ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgdHlwZSBvZiB0aGUgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUgKHZhbHVlKSB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG4vKipcbiAqIE1lcmdlcyBvYmplY3RzXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0W119IHNvdXJjZXMgLSBPYmplY3RzIHRvIGJlIG1lcmdlZCBpbnRvIHRoZSB0YXJnZXQgb2JqZWN0XG4gKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBtZXJnZWQgb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAgKHRhcmdldCwgLi4uc291cmNlcykge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkgKG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG9ialxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGNvbnN0IGNvcHkgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb3B5W2ldID0gZGVlcENvcHkob2JqW2ldKVxuICAgIH1cbiAgICByZXR1cm4gY29weVxuICB9XG5cbiAgY29uc3QgY29weSA9IHt9XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgICBjb3B5W2tleV0gPSBkZWVwQ29weShvYmpba2V5XSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvcHlcbn1cblxuLyoqXG4gKiBNZXJnZXMgb2JqZWN0cyBidXQgb25seSB0aGUgcHJvcGVydGllcyB0aGF0IGV4aXN0cyBpbiBib3RocyBvYmplY3RzXG4gKiBpZiB0aGV5IGFyZSB0aGUgc2FtZSB0eXBlIG9mIHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqMSAtIFRoZSB0YXJnZXQgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdFtdfSBvYmoyIC0gT2JqZWN0cyB3aG8ncyBwcm9wZXJ0aWVzIGFyZSB0aGUgb3ZlcnJpZGVzXG4gKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBvdmVyd3JpdHRlbiBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyAob2JqMSwgb2JqMikge1xuICBPYmplY3Qua2V5cyhvYmoyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5IGluIG9iajEpIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqMVtrZXldID09PSB0eXBlb2Ygb2JqMltrZXldKSB7XG4gICAgICAgIG9iajFba2V5XSA9IG9iajJba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gb2JqMVxufVxuXG4vKipcbiAqIEdldCBzb21lIHZhbHVlIGJ5IHRyYXZlcnNpbmcgdGhlIGRhdGEgdXNpbmcgSlNPTiBwYXRoXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFRoZSBkYXRhIHNvdXJjZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBKU09OIHBhdGhcbiAqIEByZXR1cm4geyp9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUJ5SlNPTlBhdGggKGRhdGEsIHBhdGgpIHtcbiAgY29uc3Qga2V5cyA9IHBhdGguc3BsaXQoJy4nKSAvLyBTcGxpdCB0aGUgcGF0aCBpbnRvIGluZGl2aWR1YWwga2V5c1xuXG4gIGxldCB2YWx1ZSA9IGRhdGFcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAvXlxcZCskLy50ZXN0KGtleSkpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoa2V5KVxuICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZVtpbmRleF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gSW5kZXggaXMgb3V0IG9mIGJvdW5kcywgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaGFzT3duKHZhbHVlLCBrZXkpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlW2tleV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZCAvLyBLZXkgZG9lc24ndCBleGlzdCwgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIENvbXBpbGVzIGEgdGVtcGxhdGUgYnkgc2VhcmNoIGFuZCByZXBsYWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgLSBUaGUgdGVtcGxhdGUgc3RyaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFdoZXJlIHRlbXBsYXRlIGRhdGEgbGl2ZXNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZSAodGVtcGxhdGUsIGRhdGEpIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL3t7KC4qPyl9fS9nLCAobWF0Y2gpID0+IHtcbiAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICBjb25zdCBwYXRoID0gbWF0Y2guc3BsaXQoL3t7fH19LylbMV1cbiAgICByZXR1cm4gZ2V0VmFsdWVCeUpTT05QYXRoKGRhdGEsIHBhdGgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCAobnVtYmVyLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihudW1iZXIsIG1heCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IChhcnIpIHtcbiAgY29uc3QgdW5pcXVlT2JqZWN0cyA9IFtdXG4gIGNvbnN0IHVuaXF1ZVZhbHVlcyA9IG5ldyBTZXQoKVxuXG4gIGZvciAoY29uc3Qgb2JqIG9mIGFycikge1xuICAgIGNvbnN0IG9ialN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG9iailcbiAgICBpZiAoIXVuaXF1ZVZhbHVlcy5oYXMob2JqU3RyaW5nKSkge1xuICAgICAgdW5pcXVlVmFsdWVzLmFkZChvYmpTdHJpbmcpXG4gICAgICB1bmlxdWVPYmplY3RzLnB1c2gob2JqKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlxdWVPYmplY3RzXG59XG4iLCIvKipcbiAqIFNpbXBsZSB0cmFuc2xhdGlvbiBtb2R1bGUuXG4gKiBAbW9kdWxlIGkxOG5cbiAqL1xuXG4vKipcbiAqIExvY2FsZSBtZXNzYWdlc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGkxOG4gPSB7XG4gIGVycm9yQWRkaXRpb25hbFByb3BlcnRpZXM6ICdIYXMgYWRkaXRpb25hbCBwcm9wZXJ0eSBcInt7IHByb3BlcnR5IH19XCIgYnV0IG5vIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgYWxsb3dlZC4nLFxuICBlcnJvckFueU9mOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4nLFxuICBlcnJvckNvbnN0OiAnTXVzdCBoYXZlIHZhbHVlIG9mOiB7eyBjb25zdCB9fS4nLFxuICBlcnJvckNvbnRhaW5zOiAnTXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBpdGVtIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEuJyxcbiAgZXJyb3JEZXBlbmRlbnRSZXF1aXJlZDogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczoge3sgZGVwZW5kZW50UmVxdWlyZWQgfX0uJyxcbiAgZXJyb3JFbnVtOiAnTXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiB7eyBlbnVtIH19LicsXG4gIGVycm9yRXhjbHVzaXZlTWF4aW11bTogJ011c3QgYmUgbGVzcyB0aGFuIHt7IGV4Y2x1c2l2ZU1heGltdW0gfX0uJyxcbiAgZXJyb3JFeGNsdXNpdmVNaW5pbXVtOiAnTXVzdCBiZSBncmVhdGVyIHRoYW4ge3sgZXhjbHVzaXZlTWluaW11bSB9fS4nLFxuICBlcnJvckZvcm1hdDogJ011c3QgYmUgYSB2YWxpZCB7eyBmb3JtYXQgfX0uJyxcbiAgZXJyb3JJdGVtczogJ011c3QgaGF2ZSBpdGVtcyB0aGF0IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYS4nLFxuICBlcnJvck1heGltdW06ICdNdXN0IGJlIGF0IG1vc3Qge3sgbWF4aW11bSB9fS4nLFxuICBlcnJvck1heEl0ZW1zOiAnTXVzdCBoYXZlIGF0IG1vc3Qge3sgbWF4SXRlbXMgfX0gaXRlbXMuJyxcbiAgZXJyb3JNYXhMZW5ndGg6ICdNdXN0IGJlIGF0IG1vc3Qge3sgbWF4TGVuZ3RoIH19IGNoYXJhY3RlcnMgbG9uZy4nLFxuICBlcnJvck1heFByb3BlcnRpZXM6ICdNdXN0IGhhdmUgYXQgbW9zdCB7eyBtYXhQcm9wZXJ0aWVzIH19IHByb3BlcnRpZXMuJyxcbiAgZXJyb3JNYXhDb250YWluczogJ011c3QgY29udGFpbiBhdCBtb3N0IHt7IG1heENvbnRhaW5zIH19IGl0ZW1zIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEuIEl0IGN1cnJlbnRseSBjb250YWlucyB7eyBjb3VudGVyIH19LicsXG4gIGVycm9yTWluQ29udGFpbnM6ICdNdXN0IGNvbnRhaW4gYXQgbGVhc3Qge3sgbWluQ29udGFpbnMgfX0gaXRlbXMgbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHNjaGVtYS4gSXQgY3VycmVudGx5IGNvbnRhaW5zIHt7IGNvdW50ZXIgfX0uJyxcbiAgZXJyb3JNaW5pbXVtOiAnTXVzdCBiZSBhdCBsZWFzdCB7eyBtaW5pbXVtIH19LicsXG4gIGVycm9yTWluSXRlbXM6ICdNdXN0IGhhdmUgYXQgbGVhc3Qge3sgbWluSXRlbXMgfX0gaXRlbXMuJyxcbiAgZXJyb3JNaW5MZW5ndGg6ICdNdXN0IGJlIGF0IGxlYXN0IHt7IG1pbkxlbmd0aCB9fSBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgZXJyb3JNaW5Qcm9wZXJ0aWVzOiAnTXVzdCBoYXZlIGF0IGxlYXN0IHt7IG1pblByb3BlcnRpZXMgfX0gcHJvcGVydGllcy4nLFxuICBlcnJvck11bHRpcGxlT2Y6ICdNdXN0IGJlIG11bHRpcGxlIG9mIHt7IG11bHRpcGxlT2YgfX0uJyxcbiAgZXJyb3JOb3Q6ICdNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEuJyxcbiAgZXJyb3JPbmVPZjogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0IHt7IGNvdW50ZXIgfX0gb2YgdGhlIHNjaGVtYXMuJyxcbiAgZXJyb3JQYXR0ZXJuOiAnTXVzdCBtYXRjaCB0aGUgcGF0dGVybjogXCJ7eyBwYXR0ZXJuIH19XCIuJyxcbiAgZXJyb3JQcmVmaXhJdGVtczogJ0l0ZW0ge3sgaW5kZXggfX0gZmFpbHMgdmFsaWRhdGlvbi4nLFxuICBlcnJvclByb3BlcnR5TmFtZXM6ICdQcm9wZXJ0eSBuYW1lIFwie3sgcHJvcGVydHlOYW1lIH19XCIgZmFpbHMgdmFsaWRhdGlvbi4nLFxuICBlcnJvclJlcXVpcmVkOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiB7eyByZXF1aXJlZCB9fS4nLFxuICBlcnJvclR5cGU6ICdNdXN0IGJlIG9mIHR5cGUge3sgdHlwZSB9fS4nLFxuICBlcnJvclVuaXF1ZUl0ZW1zOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcy4nXG59XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGlzU2V0LCBjbG9uZSwgaXNBcnJheSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgRWRpdG9yQXJyYXkgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcbmltcG9ydCBFZGl0b3JBcnJheU5hdiBmcm9tICcuLi9lZGl0b3JzL2FycmF5LW5hdidcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hSXRlbXMsIGdldFNjaGVtYVByZWZpeEl0ZW1zLCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBJbnN0YW5jZUFycmF5IGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VBcnJheSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknICYmIHNjaGVtYUZvcm1hdCA9PT0gJ25hdicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQXJyYXlOYXYodGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JBcnJheSh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGxldCBzY2hlbWFcbiAgICBjb25zdCBpdGVtc0NvdW50ID0gdGhpcy5jaGlsZHJlbi5sZW5ndGhcbiAgICBjb25zdCBzY2hlbWFJdGVtcyA9IGdldFNjaGVtYUl0ZW1zKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYVByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXModGhpcy5zY2hlbWEpXG4gICAgc2NoZW1hID0gaXNTZXQoc2NoZW1hSXRlbXMpID8gc2NoZW1hSXRlbXMgOiB7fVxuXG4gICAgY29uc3QgaGFzUHJlZml4SXRlbXNTY2hlbWEgPSBpc1NldChzY2hlbWFQcmVmaXhJdGVtcykgJiYgaXNTZXQoc2NoZW1hUHJlZml4SXRlbXNbaXRlbXNDb3VudF0pXG5cbiAgICBpZiAoaGFzUHJlZml4SXRlbXNTY2hlbWEpIHtcbiAgICAgIHNjaGVtYSA9IHNjaGVtYVByZWZpeEl0ZW1zW2l0ZW1zQ291bnRdXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGl0ZW1zQ291bnQsXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICB2YWx1ZTogY2xvbmUodmFsdWUpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VBcnJheVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VCb29sZWFuIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VCb29sZWFuIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJyAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlQm9vbGVhblxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yTXVsdGlwbGUgZnJvbSAnLi4vZWRpdG9ycy9tdWx0aXBsZSdcbmltcG9ydCB7XG4gIGlzU2V0LFxuICBtZXJnZURlZXAsXG4gIGNsb25lLFxuICBpc09iamVjdCxcbiAgb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzXG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFFbHNlLFxuICBnZXRTY2hlbWFJZixcbiAgZ2V0U2NoZW1hVGhlblxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCBKZWRpIGZyb20gJy4uL2plZGknXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUlmVGhlbkVsc2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEVkaXRvck11bHRpcGxlKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlQ2hhbmdlZCA9IHRydWVcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuICAgIHRoaXMuaWZUaGVuRWxzZVNoZW1hcyA9IFtdXG5cbiAgICB0aGlzLnRyYXZlcnNlU2NoZW1hKHRoaXMuc2NoZW1hKVxuXG4gICAgZGVsZXRlIHRoaXMuc2NoZW1hLmlmXG4gICAgZGVsZXRlIHRoaXMuc2NoZW1hLnRoZW5cbiAgICBkZWxldGUgdGhpcy5zY2hlbWEuZWxzZVxuXG4gICAgbGV0IGluZGV4ID0gMFxuXG4gICAgdGhpcy5pZlRoZW5FbHNlU2hlbWFzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpc1NldChpdGVtLnRoZW4pKSB7XG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKG1lcmdlRGVlcCh7fSwgY2xvbmUodGhpcy5zY2hlbWEpLCBpdGVtLnRoZW4pKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goSlNPTi5zdHJpbmdpZnkoaXRlbS50aGVuKSlcbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTZXQoaXRlbS5lbHNlKSkge1xuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChtZXJnZURlZXAoe30sIGNsb25lKHRoaXMuc2NoZW1hKSwgaXRlbS5lbHNlKSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKEpTT04uc3RyaW5naWZ5KGl0ZW0uZWxzZSkpXG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjbG9uZSh0aGlzLnNjaGVtYSlcbiAgICBkZWxldGUgc2NoZW1hQ2xvbmUuaWZcbiAgICBkZWxldGUgc2NoZW1hQ2xvbmUudGhlblxuICAgIGRlbGV0ZSBzY2hlbWFDbG9uZS5lbHNlXG5cbiAgICBjb25zdCBpbnN0YW5jZVdpdGhvdXRJZiA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYUNsb25lLFxuICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgIH0pXG5cbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFmdGVyQ2hhbmdlVmFsdWUgPSB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgZml0dGVzdEluZGV4ID0gdGhpcy5nZXRGaXR0ZXN0SW5kZXgoYWZ0ZXJDaGFuZ2VWYWx1ZSlcbiAgICAgICAgY29uc3QgbXVzdFN3aXRjaCA9IGZpdHRlc3RJbmRleCAhPT0gdGhpcy5pbmRleFxuXG4gICAgICAgIGlmIChtdXN0U3dpdGNoKSB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZShhZnRlckNoYW5nZVZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAobmV3VmFsdWUpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlQmVmb3JlID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgICBsZXQgZnV0dXJlVmFsdWUgPSBuZXdWYWx1ZVxuXG4gICAgICAgIGlmIChpc09iamVjdCh2YWx1ZUJlZm9yZSkgJiYgaXNPYmplY3QoZnV0dXJlVmFsdWUpKSB7XG4gICAgICAgICAgZnV0dXJlVmFsdWUgPSBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXModmFsdWVCZWZvcmUsIGZ1dHVyZVZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2Uuc2V0VmFsdWUoZnV0dXJlVmFsdWUsIGZhbHNlKVxuICAgICAgfSlcblxuICAgICAgY29uc3QgZml0dGVzdEluZGV4ID0gdGhpcy5nZXRGaXR0ZXN0SW5kZXgobmV3VmFsdWUpXG4gICAgICBjb25zdCBtdXN0U3dpdGNoID0gZml0dGVzdEluZGV4ICE9PSB0aGlzLmluZGV4XG5cbiAgICAgIGlmIChtdXN0U3dpdGNoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4KVxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIGluaXRpYWwgdmFsdWUgYW5kIGFjdGl2ZSBpbnN0YW5jZVxuICAgIHRoaXMudmFsdWUgPSBpbnN0YW5jZVdpdGhvdXRJZi5nZXRWYWx1ZSgpXG4gICAgaW5zdGFuY2VXaXRob3V0SWYuZGVzdHJveSgpXG4gICAgY29uc3QgZml0dGVzdEluZGV4ID0gdGhpcy5nZXRGaXR0ZXN0SW5kZXgodGhpcy52YWx1ZSlcbiAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleClcbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gIH1cblxuICB0cmF2ZXJzZVNjaGVtYSAoc2NoZW1hKSB7XG4gICAgY29uc3Qgc2NoZW1hSWYgPSBnZXRTY2hlbWFJZihzY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hSWYpKSB7XG4gICAgICBjb25zdCBzY2hlbWFUaGVuID0gZ2V0U2NoZW1hVGhlbihzY2hlbWEpXG4gICAgICBjb25zdCBzY2hlbWFFbHNlID0gZ2V0U2NoZW1hRWxzZShzY2hlbWEpXG5cbiAgICAgIHRoaXMuaWZUaGVuRWxzZVNoZW1hcy5wdXNoKHtcbiAgICAgICAgaWY6IHNjaGVtYUlmLFxuICAgICAgICB0aGVuOiBpc1NldChzY2hlbWFUaGVuKSA/IHNjaGVtYVRoZW4gOiB7fVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pZlRoZW5FbHNlU2hlbWFzLnB1c2goe1xuICAgICAgICBpZjogc2NoZW1hSWYsXG4gICAgICAgIGVsc2U6IGlzU2V0KHNjaGVtYUVsc2UpID8gc2NoZW1hRWxzZSA6IHt9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgaW5zdGFuY2UgdGhhdCBoYXMgbGVzcyB2YWxpZGF0aW9uIGVycm9yc1xuICAgKi9cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBmaXR0ZXN0SW5kZXggPSB0aGlzLmluZGV4XG5cbiAgICB0aGlzLmlmVGhlbkVsc2VTaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaWZWYWxpZGF0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgIFhNTEh0dHBSZXF1ZXN0OiB0aGlzLmplZGkudmFsaWRhdG9yLnJlZlBhcnNlci5YTUxIdHRwUmVxdWVzdCxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEuaWYsXG4gICAgICAgIGRhdGE6IHZhbHVlXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBpZkVycm9ycyA9IGlmVmFsaWRhdG9yLmdldEVycm9ycygpXG4gICAgICBpZlZhbGlkYXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCAmJiBzY2hlbWEudGhlbikge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgfVxuXG4gICAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEuZWxzZSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgZ2V0QWxsT2ZDb21iaW5hdGlvbnMgKHNjaGVtYXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXVxuXG4gICAgY29uc3QgY29tYmluZVByb3BlcnRpZXMgPSAoc2NoZW1hMSwgc2NoZW1hMikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc2NoZW1hMSwgLi4uc2NoZW1hMiB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVDb21iaW5hdGlvbnMgPSAoY3VycmVudCwgcmVtYWluaW5nKSA9PiB7XG4gICAgICBpZiAocmVtYWluaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXN1bHQucHVzaChjdXJyZW50KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV4dFNjaGVtYSA9IHJlbWFpbmluZ1swXVxuXG4gICAgICBnZW5lcmF0ZUNvbWJpbmF0aW9ucyhjb21iaW5lUHJvcGVydGllcyhjdXJyZW50LCBuZXh0U2NoZW1hKSwgcmVtYWluaW5nLnNsaWNlKDEpKVxuICAgICAgZ2VuZXJhdGVDb21iaW5hdGlvbnMoY3VycmVudCwgcmVtYWluaW5nLnNsaWNlKDEpKVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NoZW1hcy5sZW5ndGg7IGkrKykge1xuICAgICAgZ2VuZXJhdGVDb21iaW5hdGlvbnMoc2NoZW1hc1tpXSwgc2NoZW1hcy5zbGljZShpICsgMSkpXG4gICAgfVxuXG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IE9iamVjdC5rZXlzKGEpLmxlbmd0aCAtIE9iamVjdC5rZXlzKGIpLmxlbmd0aClcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUlmVGhlbkVsc2VcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7XG4gIGlzU2V0LCBub3RTZXQsIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXlcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYURlZmF1bHQsXG4gIGdldFNjaGVtYVJlYWRPbmx5LFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKU09OIGluc3RhbmNlLlxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSmVkaSBpbnN0YW5jZSB0byB3aGljaCB0aGlzIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICogQHR5cGUge0plZGl9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2NoZW1hIHBhdGggb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgdGhpcy5qZWRpLnJvb3ROYW1lXG5cbiAgICAvKipcbiAgICAgKiBBIEpTT04gc2NoZW1hLlxuICAgICAqIEB0eXBlIHtib29sZWFufG9iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuXG4gICAgLyoqXG4gICAgICogVGhlIGpzb24gdmFsdWUgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdGhpcy52YWx1ZSA9IGlzU2V0KGNvbmZpZy52YWx1ZSkgPyBjb25maWcudmFsdWUgOiB1bmRlZmluZWRcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3RpdmUgc3RhdGUgb2YgdGhpcyBpbnN0YW5jZS4gSWYgZmFsc2UgdGhlIGVkaXRvciBpcyBub3QgcGFydGljaXBhdGluZ1xuICAgICAqIGluIHRoZSB2YWx1ZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG5cbiAgICAvKipcbiAgICAgKiBUaGUgUGFyZW50IGluc3RhbmNlIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge0luc3RhbmNlfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuXG4gICAgLyoqXG4gICAgICogQ2hpbGQgaW5zdGFuY2VzIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge0luc3RhbmNlW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIC8qKlxuICAgICAqIFRoZSBlZGl0b3IgY29udHJvbGxpbmcgdGhpcyBJbnN0YW5jZSBpZiBhbnlcbiAgICAgKiBAdHlwZSB7RWRpdG9yfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnVpID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbmQgcmVnaXN0ZXIgdGhlIGluc3RhbmNlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJhc2VkIG9uIGl0J3MgdHlwZVxuICAgKi9cbiAgc2V0SW5pdGlhbFZhbHVlICgpIHtcbiAgICBpZiAobm90U2V0KHRoaXMudmFsdWUpKSB7XG4gICAgICBsZXQgdmFsdWVcbiAgICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hRGVmYXVsdCA9IGdldFNjaGVtYURlZmF1bHQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRGVmYXVsdCkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoc2NoZW1hRGVmYXVsdCwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScsIG5ld1ZhbHVlKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcblxuICAgIHJldHVybiByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5KGVycm9ycylcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBpbnN0YW5jZSBpcyByZWFkIG9ubHlcbiAgICovXG4gIGlzUmVhZE9ubHkgKCkge1xuICAgIGxldCByZWFkT25seSA9IGZhbHNlXG5cbiAgICBpZiAoZ2V0U2NoZW1hUmVhZE9ubHkodGhpcy5zY2hlbWEpID09PSB0cnVlKSB7XG4gICAgICByZWFkT25seSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgZ2V0U2NoZW1hUmVhZE9ubHkodGhpcy5wYXJlbnQuc2NoZW1hKSA9PT0gdHJ1ZSkge1xuICAgICAgcmVhZE9ubHkgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JNdWx0aXBsZSBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIGlzQXJyYXksXG4gIGRpZmZlcmVudCxcbiAgbm90U2V0LFxuICBjbG9uZSxcbiAgaXNPYmplY3QsXG4gIG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcywgbWVyZ2VEZWVwLCBkZWVwQ29weVxufSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vamVkaSdcbmltcG9ydCB7XG4gIGdldFNjaGVtYUFueU9mLFxuICBnZXRTY2hlbWFPbmVPZixcbiAgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSxcbiAgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VNdWx0aXBsZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTXVsdGlwbGUgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEVkaXRvck11bHRpcGxlKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlQ2hhbmdlZCA9IHRydWVcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNldFZhbHVlKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpKSB8fCBpc1NldChnZXRTY2hlbWFPbmVPZih0aGlzLnNjaGVtYSkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSBpc1NldChnZXRTY2hlbWFBbnlPZih0aGlzLnNjaGVtYSkpID8gZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpIDogZ2V0U2NoZW1hT25lT2YodGhpcy5zY2hlbWEpXG4gICAgICBjb25zdCBzY2hlbWFDb3B5ID0gZGVlcENvcHkodGhpcy5zY2hlbWEpXG4gICAgICBkZWxldGUgc2NoZW1hQ29weVsnYW55T2YnXVxuICAgICAgZGVsZXRlIHNjaGVtYUNvcHlbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBzY2hlbWFDb3B5WydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5zY2hlbWFDb3B5LCAuLi5zY2hlbWEgfVxuICAgICAgICBzY2hlbWEgPSB0aGlzLmplZGkucmVmUGFyc2VyLmV4cGFuZChzY2hlbWEpXG5cbiAgICAgICAgbGV0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJUaXRsZSA9IGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICdzd2l0Y2hlclRpdGxlJylcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShzY2hlbWEpXG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYVRpdGxlKSkge1xuICAgICAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hVGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzd2l0Y2hlclRpdGxlKSkge1xuICAgICAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc3dpdGNoZXJUaXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShzY2hlbWFUeXBlKSkge1xuICAgICAgc2NoZW1hVHlwZS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IG1lcmdlRGVlcCh0aGlzLnNjaGVtYSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FueScgfHwgIXNjaGVtYVR5cGUpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gZGVlcENvcHkodGhpcy5zY2hlbWEpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ09iamVjdCcsICdBcnJheScsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgICB2YWx1ZTogY2xvbmUodGhpcy52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlKSkge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLnZhbHVlLCBmYWxzZSlcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSBpc1NldCh0aGlzLmlmKSA/IHRoaXMuZ2V0SWZJbmRleCh0aGlzLnZhbHVlKSA6IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHRoaXMudmFsdWUpXG4gICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIHRoaXMudmFsdWUpXG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAoaW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW2luZGV4XVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCkpXG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdGhpcy52YWx1ZSkgfHwgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkID0gZmFsc2VcbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IGlzU2V0KHRoaXMuaWYpID8gdGhpcy5nZXRJZkluZGV4KHRoaXMudmFsdWUpIDogdGhpcy5nZXRGaXR0ZXN0SW5kZXgodGhpcy52YWx1ZSlcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4LCB0aGlzLnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlYXNzaWduVmFsdWVzICgpIHtcbiAgICBjb25zdCBsYXN0SW5zdGFuY2VWYWx1ZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMubGFzdEluZGV4XS5nZXRWYWx1ZSgpXG4gICAgY29uc3QgY3VycmVudEluc3RhbmNlVmFsdWUgPSB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc09iamVjdChsYXN0SW5zdGFuY2VWYWx1ZSkgJiYgaXNPYmplY3QoY3VycmVudEluc3RhbmNlVmFsdWUpKSB7XG4gICAgICBjb25zdCBtZXJnZWRWYWx1ZSA9IG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyhjdXJyZW50SW5zdGFuY2VWYWx1ZSwgbGFzdEluc3RhbmNlVmFsdWUpXG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKG1lcmdlZFZhbHVlLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBnZXRJZkluZGV4ICh2YWx1ZSkge1xuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHRoaXMuaWYsIGRhdGE6IHZhbHVlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuICAgIHJldHVybiBpZkVycm9ycy5sZW5ndGggPT09IDAgPyAwIDogMVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpbnN0YW5jZSB0aGF0IGhhcyBsZXNzIHZhbGlkYXRpb24gZXJyb3JzXG4gICAqL1xuICBnZXRGaXR0ZXN0SW5kZXggKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBmaXR0ZXN0SW5kZXhcbiAgICBsZXQgY2hhbXBpb25FcnJvcnNcblxuICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgdGhpcy5pbnN0YW5jZXMpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlRXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTXVsdGlwbGVcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvck51bGwgZnJvbSAnLi4vZWRpdG9ycy9udWxsJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU51bGwgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU51bGwgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bGwodGhpcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU51bGxcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvck51bWJlckVudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvck51bWJlckVudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTnVtYmVyIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VOdW1iZXIgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgdHlwZUlzTnVtZXJpYyA9IHNjaGVtYVR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJ1xuXG4gICAgaWYgKHR5cGVJc051bWVyaWMgJiYgaXNTZXQoc2NoZW1hRW51bSkgJiYgc2NoZW1hRm9ybWF0ID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlckVudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAodHlwZUlzTnVtZXJpYyAmJiBpc1NldChzY2hlbWFFbnVtKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0KHRoaXMpXG4gICAgfSBlbHNlIGlmICh0eXBlSXNOdW1lcmljKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU51bWJlclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGlzT2JqZWN0LCBoYXNPd24sIGNsb25lIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBFZGl0b3JPYmplY3RHcmlkIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LWdyaWQnXG5pbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IEVkaXRvck9iamVjdE5hdiBmcm9tICcuLi9lZGl0b3JzL29iamVjdC1uYXYnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCxcbiAgZ2V0U2NoZW1hRm9ybWF0LFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVByb3BlcnRpZXMsXG4gIGdldFNjaGVtYVJlcXVpcmVkLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gSW5zdGFuY2VPYmplY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU9iamVjdCBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFDb250cm9sID0gdGhpcy5zY2hlbWFbJ3gtY29udHJvbCddXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hRm9ybWF0ID09PSAnZ3JpZCcpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0R3JpZCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hQ29udHJvbCA9PT0gJ25hdicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0TmF2KHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0ge31cbiAgICBjb25zdCBzY2hlbWFQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUHJvcGVydGllcyh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFQcm9wZXJ0aWVzKSkge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hUHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHNjaGVtYVByb3BlcnRpZXNba2V5XVxuICAgICAgICB0aGlzLnByb3BlcnRpZXNba2V5XSA9IHsgc2NoZW1hIH1cblxuICAgICAgICBsZXQgbXVzc3RDcmVhdGVDaGlsZCA9IHRydWVcblxuICAgICAgICBjb25zdCBkZWFjdGl2YXRlTm9uUmVxdWlyZWQgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5zY2hlbWEsICdkZWFjdGl2YXRlTm9uUmVxdWlyZWQnKVxuICAgICAgICAvLyBjb25zdCBzY2hlbWFEZWFjdGl2YXRlTm9uUmVxdWlyZWQgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnZGVhY3RpdmF0ZU5vblJlcXVpcmVkJylcblxuICAgICAgICBpZiAodGhpcy5pc05vdFJlcXVpcmVkKGtleSkgJiYgaXNTZXQoZGVhY3RpdmF0ZU5vblJlcXVpcmVkKSAmJiBkZWFjdGl2YXRlTm9uUmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBtdXNzdENyZWF0ZUNoaWxkID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtdXNzdENyZWF0ZUNoaWxkKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3Qgc2NoZW1hUmVxdWlyZWQgPSBnZXRTY2hlbWFSZXF1aXJlZCh0aGlzLnNjaGVtYSlcblxuICAgIHJldHVybiBpc1NldChzY2hlbWFSZXF1aXJlZCkgJiYgc2NoZW1hUmVxdWlyZWQuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChkZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc093bih0aGlzLnZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWlzc2luZ1Byb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjcmVhdGVDaGlsZCAoc2NoZW1hLCBrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGtleSxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIHZhbHVlOiBjbG9uZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGNvbnN0IGRlYWN0aXZhdGVOb25SZXF1aXJlZCA9IGdldFNjaGVtYU9wdGlvbih0aGlzLnNjaGVtYSwgJ2RlYWN0aXZhdGVOb25SZXF1aXJlZCcpXG5cbiAgICBpZiAodGhpcy5pc05vdFJlcXVpcmVkKGtleSkgJiYgaXNTZXQoZGVhY3RpdmF0ZU5vblJlcXVpcmVkKSAmJiBkZWFjdGl2YXRlTm9uUmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgaXNOb3RSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNSZXF1aXJlZChwcm9wZXJ0eSkgJiYgIXRoaXMuaXNEZXBlbmRlbnRSZXF1aXJlZChwcm9wZXJ0eSlcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKVxuICAgIH0pXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdmFsdWVbY2hpbGQuZ2V0S2V5KCldID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVbY2hpbGQuZ2V0S2V5KCldXG5cbiAgICAgICAgLy8gdXBkYXRlIGNoaWxkIHZhbHVlIGlmIHRoZSBvbGQgdmFsdWUgYW5kIHRoZSBuZXcgdmFsdWUgYXJlIGRpZmZlcmVudFxuICAgICAgICBpZiAoZGlmZmVyZW50KG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGlsZC5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgY2hpbGQgaW5zdGFuY2UgZm9yIHRoZSBuZXcgdmFsdWUgZW50cnkgaGF2aW5nIHRoZSB2YWx1ZSBhcyBkZWZhdWx0XG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoe30sIGtleSwgdmFsdWVba2V5XSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlT2JqZWN0XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCBFZGl0b3JTdHJpbmdUZXh0YXJlYSBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy10ZXh0YXJlYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUVudW0sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZVN0cmluZyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlU3RyaW5nIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnICYmIGlzU2V0KHNjaGVtYUVudW0pICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JTdHJpbmdFbnVtUmFkaW8odGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JTdHJpbmdUZXh0YXJlYSh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycgJiYgaXNTZXQoc2NoZW1hRW51bSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlU3RyaW5nXG4iLCJpbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0b3InXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBJbnN0YW5jZUlmVGhlbkVsc2UgZnJvbSAnLi9pbnN0YW5jZXMvaWYtdGhlbi1lbHNlJ1xuaW1wb3J0IEluc3RhbmNlTXVsdGlwbGUgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgSW5zdGFuY2VCb29sZWFuIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgSW5zdGFuY2VPYmplY3QgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEluc3RhbmNlQXJyYXkgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgSW5zdGFuY2VTdHJpbmcgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IEluc3RhbmNlTnVtYmVyIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBJbnN0YW5jZU51bGwgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyL3JlZi1wYXJzZXInXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc1NldCxcbiAgbm90U2V0XG59IGZyb20gJy4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUFueU9mLFxuICBnZXRTY2hlbWFFbHNlLFxuICBnZXRTY2hlbWFGb3JtYXQsXG4gIGdldFNjaGVtYUlmLFxuICBnZXRTY2hlbWFPbmVPZixcbiAgZ2V0U2NoZW1hVGhlbixcbiAgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKZWRpIGluc3RhbmNlLlxuICovXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBKZWRpIGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7b2JqZWN0fGJvb2xlYW59IG9wdGlvbnMuc2NoZW1hIC0gQSBKU09OIHNjaGVtYVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuaXNFZGl0b3IgLSBHZW5lcmF0ZXMgVUkgY29udHJvbHMgdG8gZWRpdCB0aGUgSlNPTiB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY29udGFpbmVyIC0gV2hlcmUgdGhlIFVJIGNvbnRyb2xzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudGhlbWUgLSBIb3cgdGhlIFVJIGNvbnRyb2xzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHNob3dFcnJvcnM6ICdjaGFuZ2UnLFxuICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgdmFsaWRhdGVGb3JtYXQ6IGZhbHNlLFxuICAgICAgWE1MSHR0cFJlcXVlc3Q6IHVuZGVmaW5lZFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICAvKipcbiAgICAgKiBSb290cyBzeW1ib2wgdXNlZCBpbiBwYXRoc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3ROYW1lID0gJyMnXG5cbiAgICAvKipcbiAgICAgKiBTZXBhcmF0b3Igc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wYXRoU2VwYXJhdG9yID0gJy8nXG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIHJlZ2lzdGVyZWQgaW5zdGFuY2VzXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW5zdGFuY2VzID0ge31cblxuICAgIC8qKlxuICAgICAqIFRoZSByb290IGVkaXRvclxuICAgICAqIEB0eXBlIHtJbnN0YW5jZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucm9vdCA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIFRoZSBUaGVtZSBpbnN0YW5jZSB1c2VkIHRvIGdlbmVyYXRlIGVkaXRvcnMgdXNlciBpbnRlcmZhY2VzXG4gICAgICogQHR5cGUge1RoZW1lfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50aGVtZSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIFRoZSBWYWxpZGF0b3IgaW5zdGFuY2UgdXNlZCB0byB2YWxpZGF0ZSBpbnN0YW5jZSB2YWx1ZXNcbiAgICAgKiBAdHlwZSB7VmFsaWRhdG9yfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0b3IgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBBIGpzb24gc2NoZW1hIHVzZWRcbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQSBSZWZQYXJzZXIgaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7UmVmUGFyc2VyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBudWxsXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMuc2NoZW1hID0gdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcih7IFhNTEh0dHBSZXF1ZXN0OiB0aGlzLm9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfSlcbiAgICB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcih7IHJlZlBhcnNlcjogdGhpcy5yZWZQYXJzZXIsIHZhbGlkYXRlRm9ybWF0OiB0aGlzLm9wdGlvbnMudmFsaWRhdGVGb3JtYXQgfSlcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucm9vdE5hbWVcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5kYXRhKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5kYXRhLCBmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICBiaW5kRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhpZGRlbklucHV0KSB7XG4gICAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG9zZSB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICBjb25zdCBoaWRkZW5Db250cm9sID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSBoaWRkZW5Db250cm9sLmlucHV0XG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEganNvbiBpbnN0YW5jZSBhbmQgZGVyZWZlcmVuY2Ugc2NoZW1hIG9uIHRoZSBmbHkgaWYgbmVlZGVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGNvbmZpZy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5leHBhbmQoY29uZmlnLnNjaGVtYSwgY29uZmlnLnBhdGgpXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPbmVPZiA9IGdldFNjaGVtYU9uZU9mKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hQW55T2YgPSBnZXRTY2hlbWFBbnlPZihjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUlmID0gZ2V0U2NoZW1hSWYoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFUaGVuID0gZ2V0U2NoZW1hVGhlbihjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVsc2UgPSBnZXRTY2hlbWFFbHNlKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KGNvbmZpZy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hQW55T2YpIHx8IGlzU2V0KHNjaGVtYU9uZU9mKSB8fCBzY2hlbWFUeXBlID09PSAnYW55JyB8fCBpc0FycmF5KHNjaGVtYVR5cGUpIHx8IG5vdFNldChzY2hlbWFUeXBlKSkge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU11bHRpcGxlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hSWYpICYmIChpc1NldChzY2hlbWFUaGVuKSB8fCBpc1NldChzY2hlbWFFbHNlKSkpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VJZlRoZW5FbHNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VPYmplY3QoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlQXJyYXkoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZVN0cmluZyhjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU51bWJlcihjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZUJvb2xlYW4oY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VOdWxsKGNvbmZpZylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uaW5zdGFuY2UuZ2V0RXJyb3JzKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5YTUxIdHRwUmVxdWVzdCA9IGNvbmZpZy5YTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMubWF4RGVwdGhzID0gM1xuICAgIHRoaXMucmVmcyA9IHt9XG4gICAgdGhpcy5jaXJjdWxhclJlZnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIHRoaXMudHJhdmVyc2VFeHRlcm5hbChzY2hlbWEpXG4gICAgdGhpcy50cmF2ZXJzZUxvY2FsKHNjaGVtYSlcbiAgICB0aGlzLnBvcHVsYXRlQ2lyY3VsYXJSZWZzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmF2ZXJzZXMgdGhlIGdpdmVuIHNjaGVtYSByZWN1cnNpdmVseSBhbmQgZm9yIGVhY2ggc2NoZW1hIHdpdGggJHJlZlxuICAgKiBhZGQgYSBuZXcgcHJvcGVydHkgaW4gdGhlIHRoaXMucmVmcyBvYmplY3Qgd2l0aCBrZXkgYmVpbmcgdGhlIGpzb24gcGF0aCB0byB0aGF0IHNjaGVtYS5cbiAgICogSW5pdGlhbGx5IHRoZSBhZGRlZCBwcm9wZXJ0aWVzIHdpbGwgaGFiZSBhIHZhbHVlIG9mIG51bGwuIFRoaXMgdmFsdWUgd2lsbCBiZSBsYXRlclxuICAgKiByZXBsYWNlZCB3aXRoIHRoZSByZXNvbHZlZCBzY2hlbWEgZm9yIHRoYXQganNvbiBwYXRoIHVzaW5nIHJlc29sdmVFeHRlcm5hbCgpIGFuZCByZXNvbHZlTG9jYWwoKS5cbiAgICpcbiAgICogSXQgYWxzbyBhZGRzIGEgbmV3IHByb3BlcnR5IGluIHRoZSB0aGlzLnJlZnMgb2JqZWN0IHdpdGgga2V5IGJlaW5nIHRoZSBqc29uIHBhdGggdG8gdGhhdCBzY2hlbWFcbiAgICogYW5kIHZhbHVlIGJlaW5nIHRoZSBzY2hlbWEuXG4gICAqIEBwYXJhbSBzY2hlbWFcbiAgICogQHBhcmFtIHBhdGhcbiAgICovXG4gIHRyYXZlcnNlRXh0ZXJuYWwgKHNjaGVtYSwgcGF0aCA9ICcjJykge1xuICAgIGlmICh0eXBlb2Ygc2NoZW1hICE9PSAnb2JqZWN0JyB8fCBzY2hlbWEgPT09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNjaGVtYSkpIHtcbiAgICAgIGNvbnN0IG5leHRQYXRoID0gcGF0aCA/IGAke3BhdGh9LyR7a2V5fWAgOiBgLyR7a2V5fWBcblxuICAgICAgaWYgKHRoaXMuaGFzUmVmKHNjaGVtYSkpIHtcbiAgICAgICAgY29uc3QgcmVmID0gc2NoZW1hWyckcmVmJ11cblxuICAgICAgICBpZiAodGhpcy5yZWZzW3JlZl0pIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU2tpcHBlZCAkcmVmJywgcmVmKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWZzW3JlZl0gPSBudWxsXG5cbiAgICAgICAgaWYgKHRoaXMuaGFzRXh0ZXJuYWxSZWYoc2NoZW1hKSkge1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVkU2NoZW1hID0gdGhpcy5yZXNvbHZlRXh0ZXJuYWwoc2NoZW1hKVxuICAgICAgICAgIHRoaXMudHJhdmVyc2VFeHRlcm5hbChyZXNvbHZlZFNjaGVtYSwgbmV4dFBhdGgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWZzW3BhdGhdID0gc2NoZW1hXG5cbiAgICAgIHRoaXMudHJhdmVyc2VFeHRlcm5hbCh2YWx1ZSwgbmV4dFBhdGgpXG4gICAgfVxuICB9XG5cbiAgdHJhdmVyc2VMb2NhbCAoc2NoZW1hLCBwYXRoID0gJyMnKSB7XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEgIT09ICdvYmplY3QnIHx8IHNjaGVtYSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc2NoZW1hKSkge1xuICAgICAgY29uc3QgbmV4dFBhdGggPSBwYXRoID8gYCR7cGF0aH0vJHtrZXl9YCA6IGAvJHtrZXl9YFxuXG4gICAgICBpZiAodGhpcy5oYXNSZWYoc2NoZW1hKSkge1xuICAgICAgICBjb25zdCByZWYgPSBzY2hlbWFbJyRyZWYnXVxuXG4gICAgICAgIGlmICh0aGlzLnJlZnNbcmVmXSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTa2lwcGVkICRyZWYnLCByZWYpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaGFzRXh0ZXJuYWxSZWYoc2NoZW1hKSkge1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVkU2NoZW1hID0gdGhpcy5yZXNvbHZlTG9jYWwoc2NoZW1hKVxuICAgICAgICAgIHRoaXMudHJhdmVyc2VMb2NhbChyZXNvbHZlZFNjaGVtYSwgbmV4dFBhdGgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy50cmF2ZXJzZUxvY2FsKHZhbHVlLCBuZXh0UGF0aClcbiAgICB9XG4gIH1cblxuICBwb3B1bGF0ZUNpcmN1bGFyUmVmcyAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5yZWZzKS5mb3JFYWNoKChyZWYpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJSZWYocmVmKSkge1xuICAgICAgICB0aGlzLmNpcmN1bGFyUmVmc1tyZWZdID0ge1xuICAgICAgICAgIHBhdGhEZXB0aHM6IFtdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggdGhlIHRoaXMucmVmcyBvYmplY3Qga2V5cy4gSWYgdGhlIGtleSBpcyBhbiB1cmkgY29udGFpbmluZyBcImh0dHBcIiBvciBcImh0dHBzXCIgdGhlblxuICAgKiB1c2VzIHRoYXQga2V5IGFzIHRoZSB1cmwgaW4gYSBodHRwIHJlcXVlc3QgdG8gcmV0cmlldmUgdGhlIGV4dGVybmFsIHNjaGVtYS4gVGhlIHJldHJpZXZlZCBzY2hlbWFcbiAgICogd2lsbCBiZSB1c2VkIGZvciB0aGUgdmFsdWUgb2YgdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgcmVzb2x2ZUV4dGVybmFsIChzY2hlbWEpIHtcbiAgICBjb25zdCByZWYgPSBzY2hlbWFbJyRyZWYnXVxuICAgIGNvbnN0IHJlc29sdmVkU2NoZW1hID0gdGhpcy5sb2FkKHJlZilcbiAgICB0aGlzLnJlZnNbcmVmXSA9IHJlc29sdmVkU2NoZW1hXG4gICAgcmV0dXJuIHJlc29sdmVkU2NoZW1hXG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCB0aGUgdGhpcy5yZWZzIG9iamVjdCBrZXlzIGFuZCByZXNvbHZlIGFsbCBzY2hlbWFzIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoaXMucmVmcyBvYmplY3RcbiAgICovXG4gIHJlc29sdmVMb2NhbCAoc2NoZW1hKSB7XG4gICAgY29uc3QgcmVmID0gc2NoZW1hWyckcmVmJ11cblxuICAgIGxldCByZXNvbHZlZFNjaGVtYSA9IG51bGxcblxuICAgIGlmICh0aGlzLnJlZnNbcmVmXSkge1xuICAgICAgcmVzb2x2ZWRTY2hlbWEgPSB0aGlzLnJlZnNbcmVmXVxuICAgICAgdGhpcy5yZWZzW3JlZl0gPSByZXNvbHZlZFNjaGVtYVxuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZFNjaGVtYVxuICB9XG5cbiAgaGFzUmVmIChzY2hlbWEpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNjaGVtYVsnJHJlZiddICE9PSAndW5kZWZpbmVkJ1xuICB9XG5cbiAgaGFzRXh0ZXJuYWxSZWYgKHNjaGVtYSkge1xuICAgIGNvbnN0IHJlZiA9IHNjaGVtYVsnJHJlZiddXG5cbiAgICBpZiAodHlwZW9mIHJlZiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiByZWYuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHJlZi5zdGFydHNXaXRoKCdodHRwcycpXG4gIH1cblxuICBpc0NpcmN1bGFyUmVmIChyZWYpIHtcbiAgICBjb25zdCB0ZXN0ID0gYFwiJHJlZlwiOlwiJHtyZWZ9XCJgXG4gICAgY29uc3QgcmVmU2NoZW1hID0gdGhpcy5yZWZzW3JlZl1cbiAgICBjb25zdCBzY2hlbWFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyZWZTY2hlbWEpXG4gICAgcmV0dXJuIHNjaGVtYVN0cmluZy5pbmNsdWRlcyh0ZXN0KVxuICB9XG5cbiAgZXhwYW5kIChzY2hlbWEsIHBhdGgpIHtcbiAgICBjb25zdCBjbG9uZVNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2NoZW1hKSlcblxuICAgIGlmIChpc09iamVjdChjbG9uZVNjaGVtYSkgJiYgJyRyZWYnIGluIGNsb25lU2NoZW1hKSB7XG4gICAgICBjb25zdCByZWYgPSBjbG9uZVNjaGVtYS4kcmVmXG5cbiAgICAgIC8vIGlmICh0aGlzLmNpcmN1bGFyUmVmc1tyZWZdKSB7XG4gICAgICAvLyAgIGNvbnN0IHBhdGhEZXB0aCA9IHBhdGguc3BsaXQoJy8nKS5sZW5ndGhcbiAgICAgIC8vICAgdGhpcy5jaXJjdWxhclJlZnNbcmVmXS5wYXRoRGVwdGhzLnB1c2gocGF0aERlcHRoKVxuICAgICAgLy8gICB0aGlzLmNpcmN1bGFyUmVmc1tyZWZdLnBhdGhEZXB0aHMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5jaXJjdWxhclJlZnNbcmVmXS5wYXRoRGVwdGhzKSlcbiAgICAgIC8vICAgdGhpcy5jaXJjdWxhclJlZnNbcmVmXS5wYXRoRGVwdGhzLnNwbGljZSh0aGlzLm1heERlcHRocylcbiAgICAgIC8vXG4gICAgICAvLyAgIGlmICghdGhpcy5jaXJjdWxhclJlZnNbcmVmXS5wYXRoRGVwdGhzLmluY2x1ZGVzKHBhdGhEZXB0aCkpIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygnY2lyY3VsYXInLCBKU09OLnN0cmluZ2lmeShjbG9uZVNjaGVtYSkpXG4gICAgICAvL1xuICAgICAgLy8gICAgIC8vIGNvbnN0IHN0b3BTY2hlbWEgPSBPYmplY3QuKHt9LCBjbG9uZVNjaGVtYSwgeyBmb3JtYXQ6ICdjaXJjdWxhcicgfSlcbiAgICAgIC8vICAgICAvLyBkZWxldGUgc3RvcFNjaGVtYS4kcmVmXG4gICAgICAvLyAgICAgLy8gcmV0dXJuIHN0b3BTY2hlbWFcbiAgICAgIC8vICAgICBjb25zdCByZWZTY2hlbWEgPSBzdHJ1Y3R1cmVkQ2xvbmUodGhpcy5yZWZzW3JlZl0pXG4gICAgICAvLyAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVmU2NoZW1hKS5yZXBsYWNlKGBcInskcmVmXCI6XCIke3JlZn19XCJgLCAne30nKSlcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJyRyZWYnXVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucmVmc1tyZWZdLCBjbG9uZVNjaGVtYSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVTY2hlbWFcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIHNjaGVtYSB3aXRoIGEgc3luY2hyb25vdXMgaHR0cCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmlcbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIGxvYWQgKHVyaSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLlhNTEh0dHBSZXF1ZXN0ID8gbmV3IHRoaXMuWE1MSHR0cFJlcXVlc3QoKSA6IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmksIGZhbHNlKSAvLyBgZmFsc2VgIG1ha2VzIHRoZSByZXF1ZXN0IHN5bmNocm9ub3VzXG4gICAgcmVxdWVzdC5zZW5kKG51bGwpXG5cbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHVyaSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXAzIGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWUge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IGZhbHNlXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgncGFuZWwnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdoNScpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWhlYWRpbmcnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdwdWxsLWxlZnQnKVxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21hcmdpbjogMDsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOycpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncGFuZWwnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncGFuZWwtZGVmYXVsdCcpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGhlYWRlciA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndGV4dC1yaWdodCcpXG4gICAgcmV0dXJuIGhlYWRlclxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICBodG1sLnN0eWxlLmNsZWFyID0gJ2JvdGgnXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcucHJvcGVydGllc0NvbnRhaW5lci5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4teHMnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWRlZmF1bHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBib2R5LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXG5cbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdygpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdChjb25maWcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtc3RhY2tlZCcpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1zdGFja2VkJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIHZpc3VhbGx5SGlkZGVuIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgfVxuXG4gIHZpc3VhbGx5VmlzaWJsZSAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3Itb25seScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXAzXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXA0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWUge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IGZhbHNlXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2g2JylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LWxlZnQnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdweS0yJylcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWVuZCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgYm9keSwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgYm9keS5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb2x1bW5DbGFzcyAoc2l6ZSwgY29scykge1xuICAgIHJldHVybiAnY29sLScgKyBzaXplICsgJy0nICsgY29sc1xuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdyh4cywgbWQsIG9mZnNldE1kKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnb2Zmc2V0LW1kLScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdCgpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcblxuICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgdmlzdWFsbHlIaWRkZW4gKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICB9XG5cbiAgdmlzdWFsbHlWaXNpYmxlIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzci1vbmx5JylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gZmFsc2VcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnaDYnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgncHktMicpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1lbmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjJyArIGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGJvZHksIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tc2VsZWN0JylcbiAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KHhzLCBtZCwgb2Zmc2V0TWQpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdvZmZzZXQtbWQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29sdW1uJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1jb2x1bW4nKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG4gICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKVxuXG4gICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKVxuICAgIHRhYi5saW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAndGFiJylcblxuICAgIGlmIChjb25maWcuYWN0aXZlKSB7XG4gICAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICB2aXN1YWxseUhpZGRlbiAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgfVxuXG4gIHZpc3VhbGx5VmlzaWJsZSAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsIi8qKlxuICogTGlzdHMgb2YgaHRtbCBjbGFzc2VzIHVzZWQgZm9yIGljb25zLlxuICogQG1vZHVsZSBpY29uc1xuICovXG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBnbHlwaGljb25zIGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZ2x5cGhpY29ucyA9IHtcbiAgcHJvcGVydGllczogJ2dseXBoaWNvbiBnbHlwaGljb24tbGlzdCcsXG4gIGRlbGV0ZTogJ2dseXBoaWNvbiBnbHlwaGljb24tdHJhc2gnLFxuICBhZGQ6ICdnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMnLFxuICBtb3ZlVXA6ICdnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBib290c3RyYXAtaWNvbnMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBib290c3RyYXBJY29ucyA9IHtcbiAgcHJvcGVydGllczogJ2JpIGJpLWNhcmQtbGlzdCcsXG4gIGRlbGV0ZTogJ2JpIGJpLXRyYXNoMicsXG4gIGFkZDogJ2JpIGJpLXBsdXMnLFxuICBtb3ZlVXA6ICdiaSBiaS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnYmkgYmktYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lMyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lMyA9IHtcbiAgcHJvcGVydGllczogJ2ljb24tbGlzdCcsXG4gIGRlbGV0ZTogJ2ljb24tdHJhc2gnLFxuICBhZGQ6ICdpY29uLXBsdXMnLFxuICBtb3ZlVXA6ICdpY29uLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdpY29uLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250YXdlc29tZTQgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTQgPSB7XG4gIHByb3BlcnRpZXM6ICdmYSBmYS1saXN0JyxcbiAgZGVsZXRlOiAnZmEgZmEtdHJhc2gtbycsXG4gIGFkZDogJ2ZhIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYSBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmEgZmEtYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lNSBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNSA9IHtcbiAgcHJvcGVydGllczogJ2ZhcyBmYS1saXN0JyxcbiAgZGVsZXRlOiAnZmFzIGZhLXRyYXNoJyxcbiAgYWRkOiAnZmFzIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYXMgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhcyBmYS1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWU2IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU2ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmEtc29saWQgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhLXNvbGlkIGZhLXRyYXNoJyxcbiAgYWRkOiAnZmEtc29saWQgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhLXNvbGlkIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYS1zb2xpZCBmYS1hcnJvdy1kb3duJ1xufVxuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWUgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFRoZW1lIHtcbiAgY29uc3RydWN0b3IgKGljb25zID0gbnVsbCkge1xuICAgIHRoaXMuaWNvbnMgPSBpY29uc1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gdHJ1ZVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdHMgc29tZSBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0IChuYW1lKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSB0cnVlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGljb24gZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SWNvbiAobmFtZSkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBjb25zdCBpY29uQ2xhc3NlcyA9IHRoaXMuaWNvbnNbbmFtZV0uc3BsaXQoJyAnKVxuXG4gICAgaWYgKGljb25DbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGljb25DbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaWNvblxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gd3JhcCB0aGUgZWRpdG9yIFVJIGVsZW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZ3JvdXAgc2V2ZXJhbCBjb250cm9sc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIGNhcHRpb24gZm9yIHRoZSBjb250ZW50IG9mIGl0cyBwYXJlbnQgZmllbGRzZXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBjb25zdCBsZWdlbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGVnZW5kLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgJyNsZWdlbmQtJyArIGNvbmZpZy5pZClcbiAgICBsZWdlbmRUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgbGVnZW5kVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJyNsZWdlbmQtJyArIGNvbmZpZy5pZClcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQobGVnZW5kVGV4dClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb21wbGV4IGVkaXRvcnMgbGlrZSBhcnJheXMsIG9iamVjdHMgYW5kIG11bHRpcGxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWFkZXIgZm9yIGNhcmRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkSGVhZGVyIChjb25maWcgPSB7fSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIEEgYm9keSBmb3IgdGhlIGNhcmRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZWRpdG9yIGFjdGlvbnMgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZWRpdG9yIGFycmF5IHNwZWNpZmljIGFjdGlvbnMgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgY2hpbGQgZWRpdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnYXJpYS1hdG9taWMnLCAnZmFsc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBjb250cm9sc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBwcm9wZXJ0aWVzIGVkaXRpbmcgZWxlbWVudHMgbGlrZSBwcm9wZXJ0eSBhY3RpdmF0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtc2xvdCcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgaWYgKHRoaXMudXNlVG9nZ2xlRXZlbnRzKSB7XG4gICAgICBodG1sLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3Igc2NyZWVuIHJlYWRlciBhbm5vdW5jZWQgbWVzc2FnZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNBcmlhTGl2ZSAobWVzc2FnZSkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3N0YXR1cycpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQSBtZXNzYWdlIHRoYXQgd2lsbCBiZSBhbm5vdW5jZWQgYnkgc2NyZWVuIHJlYWRlclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJpYUxpdmVNZXNzYWdlIChtZXNzYWdlKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgdGhpcy52aXN1YWxseUhpZGRlbihodG1sKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgT2JqZWN0RWRpdG9yIHByb3BlcnRpZXMgd3JhcHBlciB2aXNpYmlsaXR5XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCB0b2dnbGUgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuXG4gICAgaWYgKHRoaXMudXNlVG9nZ2xlRXZlbnRzKSB7XG4gICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChjb25maWcucHJvcGVydGllc0NvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ3N0eWxlJykpIHtcbiAgICAgICAgICB0aGlzLnZpc3VhbGx5VmlzaWJsZShjb25maWcucHJvcGVydGllc0NvbnRhaW5lcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB0b2dnbGVcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBwcm9wZXJ0eSBhY3RpdmF0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBodG1sLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCdcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEEgYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmICh0aGlzLmljb25zICYmIGNvbmZpZy5pY29uKSB7XG4gICAgICBjb25zdCBpY29uID0gdGhpcy5nZXRJY29uKGNvbmZpZy5pY29uKVxuICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgY29uZmlnLnRleHRDb250ZW50KVxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pXG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKHRleHQpXG4gICAgfVxuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpXG5cbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJhZGRcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlCdG5BZGQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtIGludG8nLFxuICAgICAgaWNvbjogJ2FkZCdcbiAgICB9KVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBZGRQcm9wZXJ0eUJ1dHRvbiAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFkZC1wcm9wZXJ0eS1idG4nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJkZWxldGVcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVsZXRlSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgZGVsZXRlSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nLFxuICAgICAgaWNvbjogJ2RlbGV0ZSdcbiAgICB9KVxuXG4gICAgZGVsZXRlSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICByZXR1cm4gZGVsZXRlSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwibW92ZSB1cFwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNb3ZlVXBJdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlVXBJdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJyxcbiAgICAgIGljb246ICdtb3ZlVXAnXG4gICAgfSlcblxuICAgIG1vdmVVcEl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgIHJldHVybiBtb3ZlVXBJdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJtb3ZlIGRvd25cIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZURvd25JdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlRG93bkl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bicsXG4gICAgICBpY29uOiAnbW92ZURvd24nXG4gICAgfSlcblxuICAgIG1vdmVEb3duSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICByZXR1cm4gbW92ZURvd25JdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgdGhlIGVkaXRvciBkZXNjcmlwdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICAvKipcbiAgICogT2JqZWN0IGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycy5cbiAgICogRWFjaCBlZGl0b3IgaXMgbWFwcGVkIHRvIGFuIG9iamVjdCBpbnN0YW5jZSBwcm9wZXJ0eS5cbiAgICogUHJvcGVydGllcyBjYW4gYmUgYWRkZWQsIGFjdGl2YXRlZCBhbmQgZGVhY3RpdmF0ZWQgZGVwZW5kaW5nIG9uIGNvbmZpZ3VyYXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE9iamVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuICAgIGNvbnN0IGFyaWFMaXZlID0gdGhpcy5nZXRQcm9wZXJ0aWVzQXJpYUxpdmUoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3QgcHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzVG9nZ2xlID0gdGhpcy5nZXRQcm9wZXJ0aWVzVG9nZ2xlKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUgKyAnICcgKyAncHJvcGVydGllcycsXG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC10b2dnbGUtJyArIGNvbmZpZy5pZCxcbiAgICAgIGljb246ICdwcm9wZXJ0aWVzJyxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXI6IHByb3BlcnRpZXNDb250YWluZXJcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc0FjdGl2YXRvcnMgPSB0aGlzLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcblxuICAgIGNvbnN0IGFkZFByb3BlcnR5Q29udHJvbCA9IHRoaXMuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIGNvbmZpZy5pZCxcbiAgICAgIGxhYmVsOiAnUHJvcGVydHknXG4gICAgfSlcblxuICAgIGNvbnN0IGFkZFByb3BlcnR5QnRuID0gdGhpcy5nZXRBZGRQcm9wZXJ0eUJ1dHRvbigpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBpZDogY29uZmlnLmlkXG4gICAgfSlcblxuICAgIGFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJvcGVydGllc0NvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIGlmIChjb25maWcuYWRkUHJvcGVydHkpIHtcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5lZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJpYUxpdmUpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnRpZXNBY3RpdmF0b3JzKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgcHJvcGVydGllc1RvZ2dsZSxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIsXG4gICAgICBhZGRQcm9wZXJ0eUNvbnRyb2wsXG4gICAgICBhZGRQcm9wZXJ0eUJ0bixcbiAgICAgIGFyaWFMaXZlLFxuICAgICAgcHJvcGVydGllc0FjdGl2YXRvcnMsXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzLlxuICAgKiBJdGVtcyBjYW4gYnZlIGFkZGVkLCBkZWxldGVkIG9yIG1vdmVkIHVwIG9yIGRvd24uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5nZXRCdG5Hcm91cCgpXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5nZXRBcnJheUJ0bkFkZCgpXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgaWQ6IGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBidG5Hcm91cCxcbiAgICAgIGFkZEJ0bixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBsZSBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMgb3B0aW9ucyB0aGF0IGNhbiBiZVxuICAgKiBzZWxlY3RlZCB3aXRoIGEgc3dpdGNoZXIgY29udHJvbC4gT25seSBvbmUgZWRpdG9yIGNhbiBiZSBhY3RpdmUvdmlzaWJsZVxuICAgKiBhdCBhIHRpbWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE11bHRpcGxlQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3Qgc3dpdGNoZXIgPSB0aGlzLmdldFN3aXRjaGVyKHtcbiAgICAgIHZhbHVlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgdGl0bGVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgbGFiZWw6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgc3JPbmx5OiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IGNvbmZpZy5yZWFkT25seVxuICAgIH0pXG5cbiAgICBzd2l0Y2hlci5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoc3dpdGNoZXIuY29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGhlYWRlcixcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBzd2l0Y2hlcixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sIGZvciBOdWxsRWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDaXJjdWxhckNvbnRyb2wgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQ0lSQ1VMQVInXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCBmb3IgTnVsbEVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TnVsbENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgVGV4dGFyZWFcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuc3R5bGUud2lkdGggPSAnMTAwJSdcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIG1lc3NhZ2VzLnNldEF0dHJpYnV0ZSgnaWQnLCBtZXNzYWdlc0lkKVxuXG4gICAgY29uc3QgZGVzY3JpYmVkQnkgPSBtZXNzYWdlc0lkICsgJyAnICsgZGVzY3JpcHRpb25JZFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBJbnB1dCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LnN0eWxlLndpZHRoID0gJzEwMCUnXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBtZXNzYWdlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgbWVzc2FnZXNJZClcblxuICAgIGNvbnN0IGRlc2NyaWJlZEJ5ID0gbWVzc2FnZXNJZCArICcgJyArIGRlc2NyaXB0aW9uSWRcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmliZWRCeSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSByYWRpbyBncm91cCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5nZXRGaWVsZHNldCgpXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIGlkOiBjb25maWcubGFiZWxcbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXNJZCA9IGNvbmZpZy5pZCArICctbWVzc2FnZXMnXG4gICAgbWVzc2FnZXMuc2V0QXR0cmlidXRlKCdpZCcsIG1lc3NhZ2VzSWQpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsZWdlbmQpXG4gICAgfVxuXG4gICAgY29uc3QgcmFkaW9Db250cm9scyA9IFtdXG4gICAgY29uc3QgcmFkaW9zID0gW11cbiAgICBjb25zdCBsYWJlbHMgPSBbXVxuICAgIGNvbnN0IGxhYmVsVGV4dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2xzLnB1c2gocmFkaW9Db250cm9sKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICByYWRpb3MucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgZGVzY3JpYmVkQnkgPSBtZXNzYWdlc0lkICsgJyAnICsgZGVzY3JpcHRpb25JZFxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpYmVkQnkpXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcblxuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBsYWJlbFRleHRzLnB1c2gobGFiZWxUZXh0KVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBsYWJlbHMucHVzaChsYWJlbClcbiAgICB9KVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmxhYmVsKSB7XG4gICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZpZWxkc2V0LCBsZWdlbmQsIGJvZHksIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBjaGVja2JveCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgbWVzc2FnZXNJZCA9IGNvbmZpZy5pZCArICctbWVzc2FnZXMnXG4gICAgbWVzc2FnZXMuc2V0QXR0cmlidXRlKCdpZCcsIG1lc3NhZ2VzSWQpXG5cbiAgICBjb25zdCBkZXNjcmliZWRCeSA9IG1lc3NhZ2VzSWQgKyAnICcgKyBkZXNjcmlwdGlvbklkXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpYmVkQnkpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNlbGVjdCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuc3R5bGUud2lkdGggPSAnMTAwJSdcblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBtZXNzYWdlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgbWVzc2FnZXNJZClcblxuICAgIGNvbnN0IGRlc2NyaWJlZEJ5ID0gbWVzc2FnZXNJZCArICcgJyArIGRlc2NyaXB0aW9uSWRcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmliZWRCeSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB0byBzd2l0Y2ggYmV0d2VlbiBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbm90aGVyIHR5cGUgb2YgZXJyb3IgbWVzc2FnZSBjb250YWluZXIgdXNlZCBmb3IgbW9yZSBjb21wbGV4IGVkaXRvcnMgbGlrZVxuICAgKiBvYmplY3QsIGFycmF5IGFuZCBtdWx0aXBsZSBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGludmFsaWRGZWVkYmFja1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxuICAgIGludmFsaWRGZWVkYmFja1RleHQudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIGludmFsaWRGZWVkYmFja0ljb24udGV4dENvbnRlbnQgPSAn4p2MICdcbiAgICBpbnZhbGlkRmVlZGJhY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaW52YWxpZEZlZWRiYWNrSWNvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFja0ljb24pXG4gICAgaHRtbC5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2tUZXh0KVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb2x1bW5zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2plZGktcm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICAvKipcbiAgICogQSBjb2x1bW4gdG8gY29udGFpbiBjb250ZW50IHRvIGEgc3BlY2lmaWMgd2lkdGhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICAvKipcbiAgICogVGFiIGxpc3QgaXMgYSBsaXN0IG9mIGxpbmtzIHRoYXQgdHJpZ2dlcnMgdGFicyB2aXNpYmlsaXR5IG5lIGF0IHRoZSB0aW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGlzdCcpXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRhYiBpcyBhIHdyYXBwZXIgZm9yIGNvbnRlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdqZWRpLW5hdi1saW5rJylcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGNvbmZpZy5pZClcbiAgICBsaW5rLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rKVxuICAgIHJldHVybiB7IGxpc3QsIGxpbmsgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRhYnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYkNvbnRlbnQgKCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKVxuICAgIHJldHVybiB0YWJDb250ZW50XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRhYiBhdHRyaWJ1dGVzIHRvIG1ha2UgaXQgdG9nZ2xlYWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2plZGktdGFiLXBhbmUnKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB2aXN1YWxseUhpZGRlbiAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDFweDtoZWlnaHQ6IDFweDtwYWRkaW5nOiAwO21hcmdpbjogLTFweDtvdmVyZmxvdzogaGlkZGVuO2NsaXA6IHJlY3QoMCwwLDAsMCk7Ym9yZGVyOiAwOycpXG4gIH1cblxuICAvKipcbiAgICogUmV2ZWFscyBhIHZpc3VhbGx5IGhpZGRlbiBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB2aXN1YWxseVZpc2libGUgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lXG4iLCIvKipcbiAqIGNvbnN0cmFpbnMgYWRkaXRpb25hbFByb3BlcnRpZXNcbiAqL1xuXG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcywgZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMsIGdldFNjaGVtYVByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkaXRpb25hbFByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUGF0dGVyblByb3BlcnRpZXMgPSBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVByb3BlcnRpZXMgPSBnZXRTY2hlbWFQcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWFQcm9wZXJ0aWVzKSA/IHNjaGVtYVByb3BlcnRpZXMgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yQWRkaXRpb25hbFByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgY29uc3RyYWluOiAnYWRkaXRpb25hbFByb3BlcnRpZXMnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlW3Byb3BlcnR5XVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgY29uc3RyYWluOiAnYWRkaXRpb25hbFByb3BlcnRpZXMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQWxsT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGFsbE9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3QgYWxsT2YgPSBnZXRTY2hlbWFBbGxPZihzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KGFsbE9mKSkge1xuICAgIGFsbE9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgc3ViU2NoZW1hRWRpdG9yID0gbmV3IEplZGkoeyBYTUxIdHRwUmVxdWVzdDogdmFsaWRhdG9yLnJlZlBhcnNlci5YTUxIdHRwUmVxdWVzdCwgc2NoZW1hOiBzY2hlbWEsIGRhdGE6IHZhbHVlLCByb290TmFtZToga2V5IH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHN1YlNjaGVtYUVkaXRvci5kZXN0cm95KClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnN1YlNjaGVtYUVycm9yc11cbiAgICAgIGVycm9ycyA9IHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkoZXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQW55T2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gYW55T2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGFueU9mID0gZ2V0U2NoZW1hQW55T2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChhbnlPZikpIHtcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsIHNjaGVtYTogc2NoZW1hLCBkYXRhOiB2YWx1ZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBpMThuLmVycm9yQW55T2ZcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnYW55T2YnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQsIGNvbXBpbGVUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFDb25zdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBfY29uc3QgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUNvbnN0ID0gZ2V0U2NoZW1hQ29uc3Qoc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFDb25zdCkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IGRpZmZlcmVudCh2YWx1ZSwgc2NoZW1hQ29uc3QpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JDb25zdCwge1xuICAgICAgICAgICAgY29uc3Q6IEpTT04uc3RyaW5naWZ5KHNjaGVtYUNvbnN0KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ2NvbnN0J1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFDb250YWlucywgZ2V0U2NoZW1hTWF4Q29udGFpbnMsIGdldFNjaGVtYU1pbkNvbnRhaW5zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBjb250YWlucyA9IGdldFNjaGVtYUNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3QgbWluQ29udGFpbnMgPSBnZXRTY2hlbWFNaW5Db250YWlucyhzY2hlbWEpXG4gIGNvbnN0IG1heENvbnRhaW5zID0gZ2V0U2NoZW1hTWF4Q29udGFpbnMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChjb250YWlucykpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyBYTUxIdHRwUmVxdWVzdDogdmFsaWRhdG9yLnJlZlBhcnNlci5YTUxIdHRwUmVxdWVzdCwgc2NoZW1hOiBjb250YWlucywgZGF0YTogaXRlbSB9KVxuICAgICAgY29uc3QgY29udGFpbnNFcnJvcnMgPSBjb250YWluc0VkaXRvci5nZXRFcnJvcnMoKVxuXG4gICAgICBpZiAoY29udGFpbnNFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBjb250YWluc0VkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPT09IDApXG5cbiAgICBpZiAoaXNTZXQobWluQ29udGFpbnMpKSB7XG4gICAgICBjb25zdCBtaW5Db250YWluc0ludmFsaWQgPSAoY291bnRlciA8IG1pbkNvbnRhaW5zKVxuXG4gICAgICBpZiAobWluQ29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5Db250YWlucywge1xuICAgICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyLFxuICAgICAgICAgICAgICBtaW5Db250YWluczogbWluQ29udGFpbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIGNvbnN0cmFpbjogJ21pbkNvbnRhaW5zJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JDb250YWluc10sXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBjb25zdHJhaW46ICdjb250YWlucydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQobWF4Q29udGFpbnMpKSB7XG4gICAgICBjb25zdCBtYXhDb250YWluc0ludmFsaWQgPSAoY291bnRlciA+IG1heENvbnRhaW5zKVxuXG4gICAgICBpZiAobWF4Q29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhDb250YWlucywge1xuICAgICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyLFxuICAgICAgICAgICAgICBtYXhDb250YWluczogbWF4Q29udGFpbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIGNvbnN0cmFpbjogJ21heENvbnRhaW5zJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW50UmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JEZXBlbmRlbnRSZXF1aXJlZCwge1xuICAgICAgICAgICAgZGVwZW5kZW50UmVxdWlyZWQ6IG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdkZXBlbmRlbnRSZXF1aXJlZCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXBlbmRlbnRTY2hlbWFzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3QgZGVwZW5kZW50U2NoZW1hcyA9IGdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoZGVwZW5kZW50U2NoZW1hcykpIHtcbiAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRTY2hlbWFzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCBkZXBlbmRlbnRTY2hlbWEgPSBkZXBlbmRlbnRTY2hlbWFzW2tleV1cbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBYTUxIdHRwUmVxdWVzdDogdmFsaWRhdG9yLnJlZlBhcnNlci5YTUxIdHRwUmVxdWVzdCwgc2NoZW1hOiBkZXBlbmRlbnRTY2hlbWEsIGRhdGE6IHZhbHVlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnRtcEVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIF9lbnVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bShzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWFFbnVtLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckVudW0sIHtcbiAgICAgICAgICAgIGVudW06IEpTT04uc3RyaW5naWZ5KHNjaGVtYUVudW0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnZW51bSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVzaXZlTWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoZXhjbHVzaXZlTWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IGV4Y2x1c2l2ZU1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRXhjbHVzaXZlTWF4aW11bSwge1xuICAgICAgICAgICAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ2V4Y2x1c2l2ZU1heGltdW0nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVzaXZlTWluaW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZXhjbHVzaXZlTWluaW11bSA9IGdldFNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoZXhjbHVzaXZlTWluaW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDw9IGV4Y2x1c2l2ZU1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRXhjbHVzaXZlTWluaW11bSwge1xuICAgICAgICAgICAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ2V4Y2x1c2l2ZU1pbmltdW0nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHNjaGVtYSlcbiAgbGV0IHZhbGlkYXRlRm9ybWF0ID0gdmFsaWRhdG9yLnZhbGlkYXRlRm9ybWF0XG5cbiAgaWYgKGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICd2YWxpZGF0ZUZvcm1hdCcpKSB7XG4gICAgdmFsaWRhdGVGb3JtYXQgPSBzY2hlbWEub3B0aW9ucy52YWxpZGF0ZUZvcm1hdFxuICB9XG5cbiAgaWYgKGlzU2V0KGZvcm1hdCkgJiYgaXNTdHJpbmcodmFsdWUpICYmIHZhbGlkYXRlRm9ybWF0KSB7XG4gICAgbGV0IHJlZ2V4cFxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ2VtYWlsJykge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSAndXJsJykge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/Omh0dHBzP3xmdHApOlxcL1xcLyg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykoPzpcXC4oPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykqKD86XFwuKD86W2EtelxcdXswMGExfS1cXHV7ZmZmZn1dezIsfSkpKSg/OjpcXGR7Miw1fSk/KD86XFwvW15cXHNdKik/JC9pdSlcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSAndXVpZCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzp1cm46dXVpZDopP1swLTlhLWZdezh9LSg/OlswLTlhLWZdezR9LSl7M31bMC05YS1mXXsxMn0kL2kpXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckZvcm1hdCwgeyBmb3JtYXQ6IGZvcm1hdCB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdmb3JtYXQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUVsc2UsIGdldFNjaGVtYUlmLCBnZXRTY2hlbWFUaGVuIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBpZlRoZW5FbHNlICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFJZiA9IGdldFNjaGVtYUlmKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hVGhlbiA9IGdldFNjaGVtYVRoZW4oc2NoZW1hKVxuICBjb25zdCBzY2hlbWFFbHNlID0gZ2V0U2NoZW1hRWxzZShzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUlmKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hVGhlbikgJiYgbm90U2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYUlmLCBkYXRhOiB2YWx1ZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcblxuICAgIGxldCB0aGVuRXJyb3JzID0gW11cbiAgICBsZXQgZWxzZUVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hVGhlbikpIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYVRoZW4sIGRhdGE6IHZhbHVlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRWxzZSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYUVsc2UsIGRhdGE6IHZhbHVlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hSWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUlmID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUl0ZW1zLCBnZXRTY2hlbWFQcmVmaXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgaXRlbXMgPSBnZXRTY2hlbWFJdGVtcyhzY2hlbWEpXG4gIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChpdGVtcykpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHByZWZpeEl0ZW1zKSA/IHByZWZpeEl0ZW1zLmxlbmd0aCA6IDBcblxuICAgIGlmIChpdGVtcyA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JJdGVtc10sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ2l0ZW1zJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1heEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQobWF4SXRlbXMpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBtYXhJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhJdGVtcywge1xuICAgICAgICAgICAgbWF4SXRlbXM6IG1heEl0ZW1zXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbWF4SXRlbXMnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heExlbmd0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhMZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1heExlbmd0aCA9IGdldFNjaGVtYU1heExlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChtYXhMZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4TGVuZ3RoLCB7XG4gICAgICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ21heExlbmd0aCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4UHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhQcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hTWF4UHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChtYXhQcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IG1heFByb3BlcnRpZXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4UHJvcGVydGllcywge1xuICAgICAgICAgICAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ21heFByb3BlcnRpZXMnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4aW11bSA9IGdldFNjaGVtYU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gbWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhpbXVtLCB7XG4gICAgICAgICAgICBtYXhpbXVtOiBtYXhpbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbWF4aW11bSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5JdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5JdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWluSXRlbXMgPSBnZXRTY2hlbWFNaW5JdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KG1pbkl0ZW1zKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgbWluSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluSXRlbXMsIHtcbiAgICAgICAgICAgIG1pbkl0ZW1zOiBtaW5JdGVtc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ21pbkl0ZW1zJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5MZW5ndGggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluTGVuZ3RoICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5MZW5ndGggPSBnZXRTY2hlbWFNaW5MZW5ndGgoc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQobWluTGVuZ3RoKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbkxlbmd0aCwge1xuICAgICAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdtaW5MZW5ndGgnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1pblByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWluUHJvcGVydGllcyA9IGdldFNjaGVtYU1pblByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQobWluUHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBtaW5Qcm9wZXJ0aWVzKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pblByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdtaW5Qcm9wZXJ0aWVzJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5pbXVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pbmltdW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbmltdW0gPSBnZXRTY2hlbWFNaW5pbXVtKHNjaGVtYSlcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KG1pbmltdW0pKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IG1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluaW11bSwge1xuICAgICAgICAgICAgbWluaW11bTogbWluaW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ21pbmltdW0nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU11bHRpcGxlT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbGVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbXVsdGlwbGVPZiA9IGdldFNjaGVtYU11bHRpcGxlT2Yoc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobXVsdGlwbGVPZikpIHtcbiAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBtdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gbXVsdGlwbGVPZikpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNdWx0aXBsZU9mLCB7XG4gICAgICAgICAgICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbXVsdGlwbGVPZidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFOb3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgbm90ID0gZ2V0U2NoZW1hTm90KHNjaGVtYSlcblxuICBpZiAoaXNTZXQobm90KSkge1xuICAgIGNvbnN0IG5vdEVkaXRvciA9IG5ldyBKZWRpKHsgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsIHNjaGVtYTogbm90LCBkYXRhOiB2YWx1ZSB9KVxuICAgIGNvbnN0IG5vdEVycm9ycyA9IG5vdEVkaXRvci5nZXRFcnJvcnMoKVxuICAgIG5vdEVkaXRvci5kZXN0cm95KClcblxuICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTm90KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdub3QnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYU9uZU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG9uZU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBvbmVPZiA9IGdldFNjaGVtYU9uZU9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQob25lT2YpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBvbmVPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRWRpdG9yID0gbmV3IEplZGkoeyBYTUxIdHRwUmVxdWVzdDogdmFsaWRhdG9yLnJlZlBhcnNlci5YTUxIdHRwUmVxdWVzdCwgc2NoZW1hOiBzY2hlbWEsIGRhdGE6IHZhbHVlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBvbmVPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck9uZU9mLCB7XG4gICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnb25lT2YnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVBhdHRlcm4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVybiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgcGF0dGVybiA9IGdldFNjaGVtYVBhdHRlcm4oc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQocGF0dGVybikpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JQYXR0ZXJuLCB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAncGF0dGVybidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVyblByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LFxuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGVkaXRvckVycm9ycyA9IGVkaXRvci5nZXRFcnJvcnMoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlczogZXJyb3IubWVzc2FnZXMsXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGggKyAnLycgKyBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgIGNvbnN0cmFpbjogJ3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYVByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBwcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQocHJlZml4SXRlbXMpKSB7XG4gICAgcHJlZml4SXRlbXMuZm9yRWFjaCgoaXRlbVNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IHZhbHVlW2luZGV4XVxuXG4gICAgICBpZiAoaXNTZXQoaXRlbVZhbHVlKSkge1xuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IGl0ZW1TY2hlbWEsIGRhdGE6IGl0ZW1WYWx1ZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICAgIGlmICh0bXBFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUHJlZml4SXRlbXMsIHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgY29uc3RyYWluOiAncHJlZml4SXRlbXMnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCIvKipcbiAqIGNvbnN0cmFpbnMgcHJvcGVydHlOYW1lc1xuICovXG5cbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQge1xuICBnZXRTY2hlbWFQcm9wZXJ0eU5hbWVzXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eU5hbWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFQcm9wZXJ0eU5hbWVzID0gZ2V0U2NoZW1hUHJvcGVydHlOYW1lcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWFQcm9wZXJ0eU5hbWVzKSkge1xuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsXG4gICAgICAgIHNjaGVtYTogc2NoZW1hUHJvcGVydHlOYW1lcyxcbiAgICAgICAgZGF0YTogcHJvcGVydHlOYW1lXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gZWRpdG9yLmdldEVycm9ycygpLmxlbmd0aCA+IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclByb3BlcnR5TmFtZXMsIHsgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgY29uc3RyYWluOiAncHJvcGVydHlOYW1lcydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHJlcXVpcmVkID0gZ2V0U2NoZW1hUmVxdWlyZWQoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQocmVxdWlyZWQpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHJlcXVpcmVkLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUmVxdWlyZWQsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAncmVxdWlyZWQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7XG4gIGNvbXBpbGVUZW1wbGF0ZSwgZ2V0VHlwZSxcbiAgaXNBcnJheSxcbiAgaXNCb29sZWFuLFxuICBpc0ludGVnZXIsXG4gIGlzTnVsbCxcbiAgaXNOdW1iZXIsXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmdcbn0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgdHlwZSA9IGdldFNjaGVtYVR5cGUoc2NoZW1hKVxuXG4gIGlmICh0eXBlID09PSAnYW55Jykge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldCh0eXBlKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHZhbGlkID0gdHlwZS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yVHlwZSwge1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIHZhbHVlVHlwZTogZ2V0VHlwZSh2YWx1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICd0eXBlJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIHNvcnRPYmplY3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVW5pcXVlSXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHVuaXF1ZUl0ZW1zID0gZ2V0U2NoZW1hVW5pcXVlSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldCh1bmlxdWVJdGVtcykgJiYgdW5pcXVlSXRlbXMgPT09IHRydWUpIHtcbiAgICBjb25zdCBzZWVuID0gW11cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdmFsdWVbaV1cblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIGl0ZW0gPSBzb3J0T2JqZWN0KGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1TdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pXG4gICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSBzZWVuLnNvbWUoKHNlZW4pID0+IHNlZW4gPT09IGl0ZW1TdHJpbmdpZmllZClcblxuICAgICAgaWYgKGhhc0R1cGxpY2F0ZWRJdGVtcykge1xuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5wdXNoKGl0ZW1TdHJpbmdpZmllZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgaTE4bi5lcnJvclVuaXF1ZUl0ZW1zXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ3VuaXF1ZUl0ZW1zJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgaWZUaGVuRWxzZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYtdGhlbi1lbHNlJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IGlmVGhlbkVsc2UsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgaWZUaGVuRWxzZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYtdGhlbi1lbHNlJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IGlmVGhlbkVsc2UsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgaWZUaGVuRWxzZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYtdGhlbi1lbHNlJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IGlmVGhlbkVsc2UsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgaWZUaGVuRWxzZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYtdGhlbi1lbHNlJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcHJvcGVydHlOYW1lcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJvcGVydHlOYW1lcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBpZlRoZW5FbHNlLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICBwcm9wZXJ0eU5hbWVzOiBwcm9wZXJ0eU5hbWVzLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IGRyYWZ0MDQgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDQnXG5pbXBvcnQgZHJhZnQwNiBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNidcbmltcG9ydCBkcmFmdDA3IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA3J1xuaW1wb3J0IGRyYWZ0MjAxOTA5IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMTktMDknXG5pbXBvcnQgZHJhZnQyMDIwMTIgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAyMC0xMidcbmltcG9ydCB7IGhhc093biwgaXNCb29sZWFuLCBjbG9uZSwgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFZhbGlkYXRvciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5yZWZQYXJzZXIgPSBjb25maWcucmVmUGFyc2VyXG4gICAgdGhpcy52YWxpZGF0ZUZvcm1hdCA9IGNvbmZpZy52YWxpZGF0ZUZvcm1hdCA/IGNvbmZpZy52YWxpZGF0ZUZvcm1hdCA6IGZhbHNlXG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0MjAyMDEyXG5cbiAgICB0aGlzLmpzb25TY2hlbWFEcmFmdHMgPSB7XG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjJzogZHJhZnQwNCxcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA2L3NjaGVtYSMnOiBkcmFmdDA2LFxuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hIyc6IGRyYWZ0MDcsXG4gICAgICAnaHR0cHM6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQvMjAxOS0wOS9zY2hlbWEnOiBkcmFmdDIwMTkwOSxcbiAgICAgICdodHRwczovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC8yMDIwLTEyL3NjaGVtYSc6IGRyYWZ0MjAyMDEyXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIGdldEVycm9ycyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uc01lc3NhZ2VzID0gZ2V0U2NoZW1hT3B0aW9uKHNjaGVtYSwgJ21lc3NhZ2VzJylcblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gY2xvbmUoc2NoZW1hKVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBtZXNzYWdlczogaXNTZXQoc2NoZW1hT3B0aW9uc01lc3NhZ2VzKSA/IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyA6IFsnaW52YWxpZCddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9XVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZHJhZnQpLmZvckVhY2goKGNvbnN0cmFpbikgPT4ge1xuICAgICAgaWYgKGhhc093bihzY2hlbWFDbG9uZSwgY29uc3RyYWluKSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmRyYWZ0W2NvbnN0cmFpbl1cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdmFsaWRhdG9yKHRoaXMsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgICAgc2NoZW1hRXJyb3JzID0gWy4uLnNjaGVtYUVycm9ycywgLi4udmFsaWRhdG9yRXJyb3JzXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWFPcHRpb25zTWVzc2FnZXMpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2VzOiBzY2hlbWFPcHRpb25zTWVzc2FnZXMsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qZWRpLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9