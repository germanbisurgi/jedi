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
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'array' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'nav'))
  }

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

    const nav = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'nav')
    const row = this.theme.getRow()
    const cols = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(nav.cols) ? nav.cols : 3
    const tabListCol = this.theme.getCol(12, cols)
    const tabContentCol = this.theme.getCol(12, (12 - cols))
    const tabContent = this.theme.getTabContent()
    const tabList = this.theme.getTabList({
      stacked: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(nav.stacked) ? nav.stacked : false,
      type: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(nav.type) ? nav.type : 'pils'
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
      const schemaOptionItemTemplate = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'itemTemplate')

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
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'array'
  }

  build () {
    this.control = this.theme.getArrayControl({
      title: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema),
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'enableCollapseToggle'),
      startCollapsed: this.instance.jedi.options.startCollapsed || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'startCollapsed')
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

  isSortable () {
    return window.Sortable && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'sortable'))
  }

  refreshUI () {
    const maxItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaMaxItems)(this.instance.schema)
    const minItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaMinItems)(this.instance.schema)

    this.control.childrenSlot.innerHTML = ''

    this.instance.children.forEach((child) => {
      const itemIndex = Number(child.getKey())
      const deleteBtn = this.theme.getDeleteItemBtn()
      const moveUpBtn = this.theme.getMoveUpItemBtn()
      const moveDownBtn = this.theme.getMoveDownItemBtn()
      const btnGroup = this.theme.getBtnGroup()
      const { container, arrayActions, body } = this.theme.getArrayItem()

      arrayActions.appendChild(btnGroup)
      btnGroup.appendChild(deleteBtn)
      btnGroup.appendChild(moveUpBtn)
      btnGroup.appendChild(moveDownBtn)

      if (this.isSortable()) {
        const dragBtn = this.theme.getDragItemBtn()
        btnGroup.appendChild(dragBtn)
      }

      this.control.childrenSlot.appendChild(container)
      body.appendChild(child.ui.control.container)

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

    this.refreshInteractiveElements()

    if (this.isSortable()) {
      if (this.sortable) {
        this.sortable.destroy()
      }

      this.sortable = Sortable.create(this.control.childrenSlot, {
        animation: 150,
        handle: '.jedi-array-drag',
        disabled: this.disabled || this.readOnly,
        onEnd: (evt) => {
          this.instance.move(evt.oldIndex, evt.newIndex)
        }
      })
    }

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(maxItems) && maxItems === this.instance.value.length) {
      this.control.addBtn.setAttribute('disabled', '')
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorArray);


/***/ }),

/***/ "./src/editors/boolean-checkbox.js":
/*!*****************************************!*\
  !*** ./src/editors/boolean-checkbox.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _boolean_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boolean.js */ "./src/editors/boolean.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorBooleanCheckbox instance.
 * @extends Editor
 */
class EditorBooleanCheckbox extends _boolean_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'boolean' && (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'format') === 'checkbox'
  }

  build () {
    this.control = this.theme.getCheckboxControl({
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
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
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'boolean' && (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'format') === 'radio'
  }

  build () {
    this.control = this.theme.getRadiosControl({
      values: ['false', 'true'],
      titles: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'enumTitles') || ['false', 'true'],
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
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
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'boolean'
  }

  build () {
    this.control = this.theme.getSelectControl({
      values: ['false', 'true'],
      titles: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'enumTitles') || ['false', 'true'],
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      labelIconClass: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'labelIconClass'),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
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


/**
 * Represents a EditorBoolean instance.
 * @extends Editor
 */
class EditorBoolean extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  sanitize (value) {
    return Boolean(value)
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
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");



/**
 * Represents an Editor instance.
 * @extends EventEmitter
 */
class Editor {
  constructor (instance) {
    /**
     * A reference to the Instance being controlled by this editor.
     * @type {Jedi}
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

    const alwaysShowErrors = this.instance.jedi.options.showErrors === 'always' || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaXOption)(this.instance.schema, 'showErrors') === 'always'

    if (alwaysShowErrors) {
      this.showValidationErrors(this.instance.getErrors())
    }

    this.instance.on('set-value', () => {
      this.refreshUI()
      this.showValidationErrors(this.instance.getErrors())
    })

    this.instance.on('change', () => {
      this.refreshUI()
      this.showValidationErrors(this.instance.getErrors())
    })
  }

  static resolves (schema) {}

  /**
   * Initializes the editor
   * @private
   */
  init () {
    this.theme = this.instance.jedi.theme
  }

  /**
   * Sets container attributes like data-path and data-type
   * @private
   */
  setContainerAttributes () {
    this.control.container.setAttribute('data-path', this.instance.path)
    this.control.container.setAttribute('data-type', (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaType)(this.instance.schema))
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
    const schemaEnum = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaEnum)(this.instance.schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaEnum) && !schemaEnum.includes(this.instance.getValue()) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSet)(schemaEnum[0])) {
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
    const neverShowErrors = this.instance.jedi.options.showErrors === 'never' || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaXOption)(this.instance.schema, 'showErrors') === 'never'

    if (neverShowErrors) {
      return
    }

    this.control.messages.innerHTML = ''

    const label = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaTitle)(this.instance.schema) || this.instance.getKey()

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

/***/ "./src/editors/if-then-else.js":
/*!*************************************!*\
  !*** ./src/editors/if-then-else.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.js */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents an EditorIfThenElse instance.
 * @extends Editor
 */
class EditorIfThenElse extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema)
    const schemaOneOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOneOf)(schema)
    const schemaAnyOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAnyOf)(schema)
    return (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaAnyOf) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaOneOf) || schemaType === 'any' || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(schemaType) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.notSet)(schemaType)
  }

  build () {
    this.control = this.theme.getIfThenElseControl({
      title: 'Options',
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema),
      switcherOptionValues: this.instance.switcherOptionValues,
      switcherOptionsLabels: this.instance.switcherOptionsLabels,
      switcher: false
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorIfThenElse);


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
  static resolves (schema) {
    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema)
    const schemaOneOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOneOf)(schema)
    const schemaAnyOf = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAnyOf)(schema)
    return (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaAnyOf) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaOneOf) || schemaType === 'any' || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(schemaType) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.notSet)(schemaType)
  }

  build () {
    this.control = this.theme.getMultipleControl({
      title: 'Options',
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema),
      switcherOptionValues: this.instance.switcherOptionValues,
      switcherOptionsLabels: this.instance.switcherOptionsLabels,
      switcher: true
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
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'null'
  }

  build () {
    this.control = this.theme.getNullControl({
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      labelIconClass: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'labelIconClass'),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'format') === 'hidden',
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
  static resolves (schema) {
    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema)
    const schemaEnum = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(schema)
    const optionFormat = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'format')
    const typeIsNumeric = schemaType === 'number' || schemaType === 'integer'
    return typeIsNumeric && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaEnum) && optionFormat === 'radio'
  }

  build () {
    this.control = this.theme.getRadiosControl({
      values: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      titles: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'enumTitles') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
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
  static resolves (schema) {
    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema)
    const typeIsNumeric = schemaType === 'number' || schemaType === 'integer'
    return typeIsNumeric && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(schema))
  }

  build () {
    this.control = this.theme.getSelectControl({
      values: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      titles: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'enumTitles') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      labelIconClass: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'labelIconClass'),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    const value = this.instance.getValue()

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(value)) {
      this.control.input.value = this.instance.getValue()
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorNumberEnumSelect);


/***/ }),

/***/ "./src/editors/number-input.js":
/*!*************************************!*\
  !*** ./src/editors/number-input.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./src/editors/number.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorNumber instance.
 * @extends EditorNumber
 */
class EditorNumberInput extends _number_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema)
    return schemaType === 'number' || schemaType === 'integer'
  }

  build () {
    this.control = this.theme.getInputControl({
      type: 'number',
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      labelIconClass: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'labelIconClass'),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'format') === 'hidden',
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    const value = this.instance.getValue()

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(value)) {
      this.control.input.value = this.instance.getValue()
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorNumberInput);


/***/ }),

/***/ "./src/editors/number-raty.js":
/*!************************************!*\
  !*** ./src/editors/number-raty.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./src/editors/number.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorNumberRaty instance.
 * @extends EditorString
 */
class EditorNumberRaty extends _number_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    return typeof Raty !== 'undefined' && (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'number' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'raty'))
  }

  build () {
    this.control = this.theme.getPlaceholderControl({
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      labelIconClass: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'labelIconClass'),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })

    try {
      this.raty = new Raty(this.control.placeholder, Object.assign({}, (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'raty'), {
        click: (score) => {
          this.instance.setValue(score)
        }
      }))
      this.raty.init()
    } catch (e) {
      console.error('Raty is not available or not loaded correctly.', e)
    }
  }

  refreshInteractiveElements () {
    if (this.disabled || this.readOnly) {
      this.raty.readOnly(true)
    } else {
      this.raty.readOnly(false)
    }
  }

  refreshUI () {
    super.refreshUI()
    this.raty.score(this.instance.getValue())
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorNumberRaty);


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
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");



/**
 * Represents a EditorNumber instance.
 * @extends Editor
 */
class EditorNumber extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  sanitize (value) {
    if ((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaType)(this.instance.schema) === 'integer') {
      return Math.floor(Number(value))
    } else {
      return Number(value)
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
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");




/**
 * Represents a EditorObjectGrid instance.
 * @extends EditorObject
 */
class EditorObjectGrid extends _object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaType)(schema) === 'object' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaXOption)(schema, 'grid'))
  }

  refreshEditors () {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild)
    }

    let row = this.theme.getRow()
    this.control.childrenSlot.appendChild(row)

    this.instance.children.forEach((child) => {
      if (child.isActive) {
        const grid = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaXOption)(child.schema, 'grid')
        const columns = grid.columns || 12
        const offset = grid.offset || 0
        const col = this.theme.getCol(12, columns, offset)
        const newRow = grid.newRow || false

        if (newRow) {
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
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'object' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'nav'))
  }

  init () {
    super.init()
    this.activeTabIndex = 0
  }

  refreshEditors () {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild)
    }

    const nav = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'nav')
    const row = this.theme.getRow()
    const cols = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(nav.cols) ? nav.cols : 3
    const tabListCol = this.theme.getCol(12, cols)
    const tabContentCol = this.theme.getCol(12, (12 - cols))
    const tabContent = this.theme.getTabContent()
    const tabList = this.theme.getTabList({
      stacked: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(nav.stacked) ? nav.stacked : false,
      type: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(nav.variant) ? nav.variant : 'pils'
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
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'object'
  }

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
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema),
      enablePropertiesToggle: enablePropertiesToggle,
      addProperty: addProperty,
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'enableCollapseToggle'),
      startCollapsed: this.instance.jedi.options.startCollapsed || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'startCollapsed')
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
    const schemaOptionEnablePropertiesToggle = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'enablePropertiesToggle')

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
 * @extends EditorString
 */
class EditorStringAwesomplete extends _string_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    return window.Awesomplete && (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'string' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'awesomplete'))
  }

  build () {
    this.control = this.theme.getInputControl({
      type: 'text',
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      labelIconClass: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'labelIconClass'),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })

    try {
      this.awesomplete = new window.Awesomplete(this.control.input, (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'awesomplete'))
      this.control.container.querySelector('.awesomplete').style.display = 'block'
    } catch (e) {
      console.error('Awesomplete is not available or not loaded correctly.', e)
    }
  }

  addEventListeners () {
    this.control.input.addEventListener('awesomplete-selectcomplete', () => {
      this.instance.setValue(this.control.input.value)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.value = this.instance.getValue()
  }

  destroy () {
    this.awesomplete.destroy()
    super.destroy()
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
 * @extends EditorString
 */
class EditorStringEnumRadio extends _string_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'string' && (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'format') === 'radio'
  }

  build () {
    this.control = this.theme.getRadiosControl({
      values: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      titles: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'enumTitles') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
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
 * @extends EditorString
 */
class EditorStringEnumSelect extends _string_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'string' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(schema))
  }

  build () {
    this.control = this.theme.getSelectControl({
      values: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      titles: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'enumTitles') || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaEnum)(this.instance.schema),
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      labelIconClass: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'labelIconClass'),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.value = this.instance.getValue()
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorStringEnumSelect);


/***/ }),

/***/ "./src/editors/string-flatpickr.js":
/*!*****************************************!*\
  !*** ./src/editors/string-flatpickr.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorStringFlatpickr instance.
 * @extends EditorString
 */
class EditorStringFlatpickr extends _string_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    return window.flatpickr && (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'string' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'flatpickr'))
  }

  build () {
    this.control = this.theme.getInputControl({
      type: 'text',
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      labelIconClass: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'labelIconClass'),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })

    try {
      this.flatpickr = window.flatpickr(this.control.input, (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'flatpickr'))
    } catch (e) {
      console.error('Flatpickr is not available or not loaded correctly.', e)
    }
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.flatpickr.setDate(this.instance.getValue())
  }

  destroy () {
    this.flatpickr.destroy()
    super.destroy()
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorStringFlatpickr);


/***/ }),

/***/ "./src/editors/string-input.js":
/*!*************************************!*\
  !*** ./src/editors/string-input.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorString instance.
 * @extends Editor
 */
class EditorStringInput extends _string_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'string'
  }

  static getTypes () {
    return ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'url', 'week']
  }

  build () {
    const optionFormat = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'format')

    this.control = this.theme.getInputControl({
      type: EditorStringInput.getTypes().includes(optionFormat) ? optionFormat : 'text',
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      labelIconClass: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'labelIconClass'),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden') || optionFormat === 'hidden',
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })

    // fix color picker bug
    if (optionFormat === 'color' && this.instance.value.length === 0) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorStringInput);


/***/ }),

/***/ "./src/editors/string-jodit.js":
/*!*************************************!*\
  !*** ./src/editors/string-jodit.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorStringQuill instance.
 * @extends EditorString
 */
class EditorStringJodit extends _string_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    return window.Jodit && (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'string' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'jodit'))
  }

  build () {
    this.control = this.theme.getTextareaControl({
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      labelIconClass: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'labelIconClass'),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })

    try {
      this.jodit = window.Jodit.make(this.control.input, (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'jodit'))
    } catch (e) {
      console.error('Jodit is not available or not loaded correctly.', e)
    }
  }

  addEventListeners () {
    this.jodit.events.on('change', () => {
      const joditValue = this.jodit.value

      if (joditValue !== this.instance.getValue()) {
        this.instance.setValue(joditValue)
      }
    })
  }

  refreshInteractiveElements () {
    if (this.disabled || this.readOnly) {
      this.jodit.setReadOnly(true)
    } else {
      this.jodit.setReadOnly(false)
    }
  }

  refreshUI () {
    super.refreshUI()
    this.jodit.value = this.instance.getValue()
  }

  destroy () {
    this.jodit.destruct()
    super.destroy()
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorStringJodit);


/***/ }),

/***/ "./src/editors/string-quill.js":
/*!*************************************!*\
  !*** ./src/editors/string-quill.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorStringQuill instance.
 * @extends EditorString
 */
class EditorStringQuill extends _string_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    return window.Quill && (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'string' && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'quill'))
  }

  build () {
    this.control = this.theme.getPlaceholderControl({
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      labelIconClass: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'labelIconClass'),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })

    try {
      this.quill = new window.Quill(this.control.placeholder, (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'quill'))
    } catch (e) {
      console.error('Quill is not available or not loaded correctly.', e)
    }
  }

  addEventListeners () {
    this.quill.root.addEventListener('blur', () => {
      const quillText = this.quill.getText()

      if (quillText !== this.instance.getValue()) {
        this.instance.setValue(quillText)
      }
    })
  }

  refreshInteractiveElements () {
    if (this.disabled || this.readOnly) {
      this.quill.disable()
    } else {
      this.quill.enable()
    }
  }

  refreshUI () {
    super.refreshUI()
    this.quill.setText(this.instance.getValue())
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorStringQuill);


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
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "./src/editors/string.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a EditorStringTextarea instance.
 * @extends EditorString
 */
class EditorStringTextarea extends _string_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resolves (schema) {
    return (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(schema) === 'string' && (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'format') === 'textarea'
  }

  build () {
    this.control = this.theme.getTextareaControl({
      id: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.pathToAttribute)(this.instance.path),
      label: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(this.instance.schema) || this.instance.getKey(),
      labelIconClass: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'labelIconClass'),
      titleHidden: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.instance.schema, 'titleHidden'),
      description: (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDescription)(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })
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


/**
 * Represents a EditorString instance.
 * @extends Editor
 */
class EditorString extends _editor_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  sanitize (value) {
    return String(value)
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getSchemaX,
  getSchemaSchema,
  getSchemaAdditionalProperties,
  getSchemaPropertyNames,
  getSchemaAllOf,
  getSchemaAnyOf,
  getSchemaConst,
  getSchemaContains,
  getSchemaDefault,
  getSchemaDependentRequired,
  getSchemaDependentSchemas,
  getSchemaDescription,
  getSchemaElse,
  getSchemaEnum,
  getSchemaExclusiveMaximum,
  getSchemaExclusiveMinimum,
  getSchemaFormat,
  getSchemaIf,
  getSchemaItems,
  getSchemaMaximum,
  getSchemaMaxContains,
  getSchemaMaxItems,
  getSchemaMaxLength,
  getSchemaMaxProperties,
  getSchemaMinimum,
  getSchemaMinContains,
  getSchemaMinItems,
  getSchemaMinLength,
  getSchemaMinProperties,
  getSchemaMultipleOf,
  getSchemaNot,
  getSchemaXOption,
  getSchemaPattern,
  getSchemaPatternProperties,
  getSchemaPrefixItems,
  getSchemaProperties,
  getSchemaReadOnly,
  getSchemaRequired,
  getSchemaThen,
  getSchemaTitle,
  getSchemaType,
  getSchemaOneOf,
  getSchemaUnevaluatedProperties,
  getSchemaUniqueItems
});


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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getCircularReplacer,
  clone,
  escapeRegExp,
  replaceAll,
  pathToAttribute,
  hasOwn,
  sortObject,
  equal,
  different,
  isNull,
  isSet,
  notSet,
  isNumber,
  isInteger,
  isString,
  isBoolean,
  isArray,
  isObject,
  getType,
  mergeDeep,
  overwriteExistingProperties,
  getValueByJSONPath,
  compileTemplate,
  clamp,
  removeDuplicatesFromArray
});


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
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents an InstanceArray instance.
 * @extends Instance
 */
class InstanceArray extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  prepare () {
    this.refreshChildren()

    this.on('set-value', () => {
      this.refreshChildren()
    })
  }

  createItemInstance (value) {
    let schema
    const itemsCount = this.children.length
    const schemaItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaItems)(this.schema)
    const schemaPrefixItems = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaPrefixItems)(this.schema)
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


/**
 * Represents a InstanceBoolean instance.
 * @extends Instance
 */
class InstanceBoolean extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {}

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
/* harmony import */ var _editors_if_then_else_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editors/if-then-else.js */ "./src/editors/if-then-else.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jedi.js */ "./src/jedi.js");






/**
 * Represents a InstanceIfThenElse instance.
 * @extends Instance
 */
class InstanceIfThenElse extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  setUI () {
    this.ui = new _editors_if_then_else_js__WEBPACK_IMPORTED_MODULE_1__["default"](this)
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
        const optionLabel = 'then';
        this.switcherOptionsLabels.push(optionLabel)
        index++
      }

      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSet)(item.else)) {
        this.schemas.push((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeDeep)({}, (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.schema), item.else))
        this.switcherOptionValues.push(index)
        const optionLabel = 'else';
        this.switcherOptionsLabels.push(optionLabel)
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
    const EditorClass = this.jedi.uiResolver.getClass(this.schema)
    this.ui = new EditorClass(this)
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
    if (this.isReadOnly()) {
      return
    }

    const enforceConst = this.jedi.options.enforceConst || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.schema, 'enforceConst')

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(enforceConst) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.equal)(enforceConst, true)) {
      const schemaConst = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaConst)(this.schema)
      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaConst) && (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.different)(newValue, schemaConst)) {
        return
      }
    }

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
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents a InstanceMultiple instance.
 * @extends Instance
 */
class InstanceMultiple extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

    const schemaType = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(this.schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAnyOf)(this.schema)) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOneOf)(this.schema))) {
      const schemasOf = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAnyOf)(this.schema)) ? (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAnyOf)(this.schema) : (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaOneOf)(this.schema)
      const schemaCopy = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.schema)
      delete schemaCopy['anyOf']
      delete schemaCopy['oneOf']
      delete schemaCopy['options']

      schemasOf.forEach((schema, index) => {
        schema = { ...schemaCopy, ...schema }

        if (this.jedi.refParser) {
          schema = this.jedi.refParser.expand(schema)
        }

        let switcherOptionsLabel = 'Option-' + (index + 1)
        const switcherTitle = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'switcherTitle')
        const schemaTitle = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaTitle)(schema)

        if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaTitle)) {
          switcherOptionsLabel = schemaTitle
        }

        if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(switcherTitle)) {
          switcherOptionsLabel = switcherTitle
        }

        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(switcherOptionsLabel)
        this.schemas.push(schema)
      })
    } else if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(schemaType)) {
      schemaType.forEach((type, index) => {
        const schemaClone = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeep)(this.schema)

        const schema = {
          ...schemaClone,
          ...{ type: type, title: type[0].toUpperCase() + type.slice(1) }
        }

        if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaClone.title)) {
          schema.title = schemaClone.title
        }

        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(type.charAt(0).toUpperCase() + type.slice(1))

        this.schemas.push(schema)
      })
    } else if (schemaType === 'any' || !schemaType) {
      const schemaClone = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.schema)

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
        value: (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.value)
      })

      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(this.value)) {
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

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
      this.activeInstance.setValue(value, false)
    }

    this.setValue(this.activeInstance.getValue())
  }

  onSetValue () {
    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.different)(this.activeInstance.getValue(), this.value)) {
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

      if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.notSet)(fittestIndex) || (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.notSet)(championErrors)) {
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


/**
 * Represents a InstanceNull instance.
 * @extends Instance
 */
class InstanceNull extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


/**
 * Represents a InstanceNumber instance.
 * @extends Instance
 */
class InstanceNumber extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/schema.js */ "./src/helpers/schema.js");




/**
 * Represents an InstanceObject instance.
 * @extends Instance
 */
class InstanceObject extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  prepare () {
    this.properties = {}
    const schemaProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaProperties)(this.schema)

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaProperties)) {
      Object.keys(schemaProperties).forEach((key) => {
        const schema = schemaProperties[key]
        this.properties[key] = { schema }

        let musstCreateChild = true

        const optionsDeactivateNonRequired = this.jedi.options.deactivateNonRequired
        const deactivateNonRequired = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.schema, 'deactivateNonRequired')
        const schemaDeactivateNonRequired = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(schema, 'deactivateNonRequired')

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
    const schemaRequired = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaRequired)(this.schema)

    return (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(schemaRequired) && schemaRequired.includes(property)
  }

  /**
   * Returns true if the property is dependent required
   */
  isDependentRequired (property) {
    const dependentRequired = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaDependentRequired)(this.schema)

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

    const deactivateNonRequired = this.jedi.options.deactivateNonRequired || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaXOption)(this.schema, 'deactivateNonRequired')

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
    const schemaAdditionalProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaAdditionalProperties)(this.schema)
    const schemaProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaProperties)(this.schema)
    const schemaPatternProperties = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_2__.getSchemaPatternProperties)(this.schema)

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


/**
 * Represents a InstanceString instance.
 * @extends Instance
 */
class InstanceString extends _instance_js__WEBPACK_IMPORTED_MODULE_0__["default"] {}

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
/* harmony import */ var _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./themes/icons/icons.js */ "./src/themes/icons/icons.js");
/* harmony import */ var _ui_resolver_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui-resolver.js */ "./src/ui-resolver.js");















/**
 * Represents a Jedi instance.
 */
class Jedi extends _event_emitter_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.container - Where the UI controls will be rendered
   */
  constructor (options) {
    super()

    this.options = Object.assign({
      container: null,
      iconLib: null,
      theme: null,
      refParser: null,
      enablePropertiesToggle: false,
      enableCollapseToggle: false,
      startCollapsed: false,
      deactivateNonRequired: false,
      schema: {},
      showErrors: 'change',
      data: undefined,
      validateFormat: false,
      mergeAllOf: false,
      enforceConst: false,
      customEditors: []
    }, options)

    /**
     * Roots symbol used in paths
     * @type {string}
     */
    this.rootName = '#'

    /**
     * Separator symbol used in paths
     * @type {string}
     */
    this.pathSeparator = '/'

    /**
     * List of registered instances
     * @type {object}
     */
    this.instances = {}

    /**
     * The root editor
     * @type {Jedi}
     */
    this.root = null

    /**
     * The Validator instance used to validate instance values
     * @type {Validator}
     */
    this.validator = null

    /**
     * A json schema used
     * @type {*}
     */
    this.schema = {}

    this.theme = null

    this.uiResolver = null

    /**
     * A RefParser instance
     * @type {RefParser}
     */
    this.refParser = this.options.refParser ? this.options.refParser : null

    this.init()
    this.bindEventListeners()
  }

  /**
   * Initializes instance properties
   */
  init () {
    this.uiResolver = new _ui_resolver_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
      customEditors: this.options.customEditors
    })

    this.theme = this.options.theme

    if ((0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_10__.isSet)(this.options.iconLib)) {
      switch (this.options.iconLib) {
        case 'glyphicons':
          this.theme.icons = _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_12__.glyphicons
          break
        case 'bootstrap-icons':
          this.theme.icons = _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_12__.bootstrapIcons
          break
        case 'fontawesome3':
          this.theme.icons = _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_12__.fontAwesome3
          break
        case 'fontawesome4':
          this.theme.icons = _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_12__.fontAwesome4
          break
        case 'fontawesome5':
          this.theme.icons = _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_12__.fontAwesome5
          break
        case 'fontawesome6':
          this.theme.icons = _themes_icons_icons_js__WEBPACK_IMPORTED_MODULE_12__.fontAwesome6
          break
      }
    }

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
   */
  register (instance) {
    this.instances[instance.path] = instance
  }

  /**
   * Deletes a child instance pointer from the instances list
   */
  unregister (instance) {
    this.instances[instance.path] = null
    delete this.instances[instance.path]
  }

  /**
   * Creates a json instance and dereference schema on the fly if needed.
   */
  createInstance (config) {
    const mergeAllOf = this.options.mergeAllOf || (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_11__.getSchemaXOption)(config.schema, 'mergeAllOf')

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

  getLabel (config) {
    const labelObj = super.getLabel(config)

    if (labelObj.icon.classList) {
      labelObj.icon.setAttribute('style', 'margin-right: 5px;')
    }

    return labelObj
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

  getLabel (config) {
    const labelObj = super.getLabel(config)

    if (labelObj.icon.classList) {
      labelObj.icon.classList.add('mr-1')
    }

    return labelObj
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

  getLabel (config) {
    const labelObj = super.getLabel(config)

    if (labelObj.icon.classList) {
      labelObj.icon.classList.add('me-1')
    }

    return labelObj
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
const glyphicons = {
  properties: 'glyphicon glyphicon-list',
  delete: 'glyphicon glyphicon-trash',
  add: 'glyphicon glyphicon-plus',
  moveUp: 'glyphicon glyphicon-arrow-up',
  moveDown: 'glyphicon glyphicon-arrow-down',
  collapse: 'glyphicon glyphicon-chevron-down',
  drag: 'glyphicon glyphicon-th'
}

const bootstrapIcons = {
  properties: 'bi bi-card-list',
  delete: 'bi bi-trash2',
  add: 'bi bi-plus',
  moveUp: 'bi bi-arrow-up',
  moveDown: 'bi bi-arrow-down',
  collapse: 'bi bi-chevron-down',
  drag: 'bi bi-grip-vertical'
}

const fontAwesome3 = {
  properties: 'icon-list',
  delete: 'icon-trash',
  add: 'icon-plus',
  moveUp: 'icon-arrow-up',
  moveDown: 'icon-arrow-down',
  collapse: 'icon-chevron-down',
  drag: 'icon-th'
}

const fontAwesome4 = {
  properties: 'fa fa-list',
  delete: 'fa fa-trash-o',
  add: 'fa fa-plus',
  moveUp: 'fa fa-arrow-up',
  moveDown: 'fa fa-arrow-down',
  collapse: 'fa fa-chevron-down',
  drag: 'fa fa-th'
}

const fontAwesome5 = {
  properties: 'fas fa-list',
  delete: 'fas fa-trash',
  add: 'fas fa-plus',
  moveUp: 'fas fa-arrow-up',
  moveDown: 'fas fa-arrow-down',
  collapse: 'fas fa-chevron-down',
  drag: 'fas fa-grip-vertical'
}

const fontAwesome6 = {
  properties: 'fa-solid fa-list',
  delete: 'fa-solid fa-trash',
  add: 'fa-solid fa-plus',
  moveUp: 'fa-solid fa-arrow-up',
  moveDown: 'fa-solid fa-arrow-down',
  collapse: 'fa-solid fa-chevron-down',
  drag: 'fa-solid fa-grip-vertical'
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
   * Represents a caption for the content of its parent fieldset
   */
  getLabel (config) {
    const label = document.createElement('label')
    label.setAttribute('for', config.for)

    const icon = this.getIcon(config.labelIconClass)

    const labelText = document.createElement('span')
    labelText.textContent = config.text

    if (config.visuallyHidden) {
      this.visuallyHidden(label)
    }

    label.classList.add('jedi-title')
    label.appendChild(icon)
    label.appendChild(labelText)

    return { label, labelText, icon }
  }

  /**
   * Returns a icon element
   * @private
   */
  getIcon (classes = '') {
    const icon = document.createElement('i')
    let iconClasses = classes.split(' ')
    iconClasses = iconClasses.filter((className) => className.length > 0)

    if (iconClasses) {
      iconClasses.forEach((className) => {
        icon.classList.add(className)
      })
    }

    return icon
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
      const icon = this.getIcon(this.icons[config.icon])
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

  getDragItemBtn () {
    const dragItemBtn = this.getButton({
      textContent: 'Drag',
      icon: 'drag'
    })

    dragItemBtn.classList.add('jedi-array-drag')

    return dragItemBtn
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

  getPlaceholderControl (config) {
    const container = document.createElement('div')
    const placeholder = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden,
      labelIconClass: config.labelIconClass
    })

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      textContent: config.description,
      id: descriptionId
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    container.appendChild(label)
    container.appendChild(placeholder)
    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(actions)
    actions.appendChild(arrayActions)

    return { container, placeholder, label, labelText, description, messages, actions, arrayActions }
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

  getArrayItem () {
    const container = document.createElement('div')
    const card = this.getCard()
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()
    const header = this.getCardHeader()
    const body = this.getCardBody()

    container.appendChild(card)
    card.appendChild(header)
    card.appendChild(body)
    header.appendChild(actions)
    actions.appendChild(arrayActions)

    return {
      container,
      card,
      header,
      body,
      actions,
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

    if (config.switcher) {
      actions.appendChild(switcher.container)
    }

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

  getIfThenElseControl (config) {
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

    if (config.switcher) {
      container.appendChild(switcher.container)
    }

    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(childrenSlot)

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

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden,
      labelIconClass: config.labelIconClass
    })

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      textContent: config.description,
      id: descriptionId
    })

    const messages = this.getMessagesSlot()

    const br = document.createElement('br')

    container.appendChild(label)
    container.appendChild(br)
    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(actions)
    actions.appendChild(arrayActions)

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

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden
    })

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

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden,
      labelIconClass: config.labelIconClass
    })

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

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden
    })

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

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden
    })

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
    // input.setAttribute('style', 'width: 100%;')

    config.values.forEach((value, index) => {
      const option = document.createElement('option')
      option.setAttribute('value', value)

      if (config.titles && config.titles[index]) {
        option.textContent = config.titles[index]
      }

      input.appendChild(option)
    })

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden
    })

    container.appendChild(label)
    container.appendChild(input)

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

/***/ "./src/ui-resolver.js":
/*!****************************!*\
  !*** ./src/ui-resolver.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editors_boolean_enum_radio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editors/boolean-enum-radio.js */ "./src/editors/boolean-enum-radio.js");
/* harmony import */ var _editors_boolean_enum_select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editors/boolean-enum-select.js */ "./src/editors/boolean-enum-select.js");
/* harmony import */ var _editors_boolean_checkbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editors/boolean-checkbox.js */ "./src/editors/boolean-checkbox.js");
/* harmony import */ var _editors_string_enum_radio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editors/string-enum-radio.js */ "./src/editors/string-enum-radio.js");
/* harmony import */ var _editors_string_enum_select_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editors/string-enum-select.js */ "./src/editors/string-enum-select.js");
/* harmony import */ var _editors_string_textarea_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editors/string-textarea.js */ "./src/editors/string-textarea.js");
/* harmony import */ var _editors_string_awesomplete_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editors/string-awesomplete.js */ "./src/editors/string-awesomplete.js");
/* harmony import */ var _editors_string_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editors/string-input.js */ "./src/editors/string-input.js");
/* harmony import */ var _editors_number_enum_radio_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editors/number-enum-radio.js */ "./src/editors/number-enum-radio.js");
/* harmony import */ var _editors_number_enum_select_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editors/number-enum-select.js */ "./src/editors/number-enum-select.js");
/* harmony import */ var _editors_number_input_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editors/number-input.js */ "./src/editors/number-input.js");
/* harmony import */ var _editors_object_grid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editors/object-grid.js */ "./src/editors/object-grid.js");
/* harmony import */ var _editors_object_nav_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editors/object-nav.js */ "./src/editors/object-nav.js");
/* harmony import */ var _editors_object_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editors/object.js */ "./src/editors/object.js");
/* harmony import */ var _editors_array_nav_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editors/array-nav.js */ "./src/editors/array-nav.js");
/* harmony import */ var _editors_array_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./editors/array.js */ "./src/editors/array.js");
/* harmony import */ var _editors_multiple_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editors/multiple.js */ "./src/editors/multiple.js");
/* harmony import */ var _editors_null_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editors/null.js */ "./src/editors/null.js");
/* harmony import */ var _editors_string_quill_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./editors/string-quill.js */ "./src/editors/string-quill.js");
/* harmony import */ var _editors_string_jodit_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./editors/string-jodit.js */ "./src/editors/string-jodit.js");
/* harmony import */ var _editors_string_flatpickr_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./editors/string-flatpickr.js */ "./src/editors/string-flatpickr.js");
/* harmony import */ var _editors_number_raty_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./editors/number-raty.js */ "./src/editors/number-raty.js");























class UiResolver {
  constructor (options) {
    this.customEditors = options.customEditors ?? []

    this.editors = [
      _editors_multiple_js__WEBPACK_IMPORTED_MODULE_16__["default"],
      _editors_boolean_enum_radio_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      _editors_boolean_checkbox_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      _editors_boolean_enum_select_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      _editors_string_enum_radio_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      _editors_string_enum_select_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      _editors_string_textarea_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      _editors_string_awesomplete_js__WEBPACK_IMPORTED_MODULE_6__["default"],
      _editors_string_quill_js__WEBPACK_IMPORTED_MODULE_18__["default"],
      _editors_string_jodit_js__WEBPACK_IMPORTED_MODULE_19__["default"],
      _editors_string_flatpickr_js__WEBPACK_IMPORTED_MODULE_20__["default"],
      _editors_string_input_js__WEBPACK_IMPORTED_MODULE_7__["default"],
      _editors_number_raty_js__WEBPACK_IMPORTED_MODULE_21__["default"],
      _editors_number_enum_radio_js__WEBPACK_IMPORTED_MODULE_8__["default"],
      _editors_number_enum_select_js__WEBPACK_IMPORTED_MODULE_9__["default"],
      _editors_number_input_js__WEBPACK_IMPORTED_MODULE_10__["default"],
      _editors_object_grid_js__WEBPACK_IMPORTED_MODULE_11__["default"],
      _editors_object_nav_js__WEBPACK_IMPORTED_MODULE_12__["default"],
      _editors_object_js__WEBPACK_IMPORTED_MODULE_13__["default"],
      _editors_array_nav_js__WEBPACK_IMPORTED_MODULE_14__["default"],
      _editors_array_js__WEBPACK_IMPORTED_MODULE_15__["default"],
      _editors_null_js__WEBPACK_IMPORTED_MODULE_17__["default"],
    ]
  }

  getClass (schema) {
    for (const editor of this.customEditors) {
      if (editor.resolves(schema)) {
        return editor
      }
    }

    for (const editor of this.editors) {
      if (editor.resolves(schema)) {
        return editor
      }
    }

    return null
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UiResolver);


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

  if ((0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_1__.getSchemaXOption)(schema, 'validateFormat')) {
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
    const schemaOptionsMessages = (0,_helpers_schema_js__WEBPACK_IMPORTED_MODULE_6__.getSchemaXOption)(schema, 'messages')

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
/* harmony import */ var _helpers_schema_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/schema.js */ "./src/helpers/schema.js");
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/utils.js */ "./src/helpers/utils.js");
/* harmony import */ var _jedi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jedi.js */ "./src/jedi.js");
/* harmony import */ var _ref_parser_ref_parser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ref-parser/ref-parser.js */ "./src/ref-parser/ref-parser.js");
/* harmony import */ var _themes_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themes/theme.js */ "./src/themes/theme.js");
/* harmony import */ var _themes_bootstrap3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themes/bootstrap3.js */ "./src/themes/bootstrap3.js");
/* harmony import */ var _themes_bootstrap4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themes/bootstrap4.js */ "./src/themes/bootstrap4.js");
/* harmony import */ var _themes_bootstrap5_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themes/bootstrap5.js */ "./src/themes/bootstrap5.js");
/* harmony import */ var _editors_boolean_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editors/boolean.js */ "./src/editors/boolean.js");
/* harmony import */ var _editors_boolean_enum_radio_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editors/boolean-enum-radio.js */ "./src/editors/boolean-enum-radio.js");
/* harmony import */ var _editors_boolean_enum_select_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editors/boolean-enum-select.js */ "./src/editors/boolean-enum-select.js");
/* harmony import */ var _editors_boolean_checkbox_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editors/boolean-checkbox.js */ "./src/editors/boolean-checkbox.js");
/* harmony import */ var _editors_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editors/string.js */ "./src/editors/string.js");
/* harmony import */ var _editors_string_enum_radio_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editors/string-enum-radio.js */ "./src/editors/string-enum-radio.js");
/* harmony import */ var _editors_string_enum_select_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editors/string-enum-select.js */ "./src/editors/string-enum-select.js");
/* harmony import */ var _editors_string_textarea_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./editors/string-textarea.js */ "./src/editors/string-textarea.js");
/* harmony import */ var _editors_string_awesomplete_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editors/string-awesomplete.js */ "./src/editors/string-awesomplete.js");
/* harmony import */ var _editors_string_input_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editors/string-input.js */ "./src/editors/string-input.js");
/* harmony import */ var _editors_number_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./editors/number.js */ "./src/editors/number.js");
/* harmony import */ var _editors_number_enum_radio_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./editors/number-enum-radio.js */ "./src/editors/number-enum-radio.js");
/* harmony import */ var _editors_number_enum_select_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./editors/number-enum-select.js */ "./src/editors/number-enum-select.js");
/* harmony import */ var _editors_number_input_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./editors/number-input.js */ "./src/editors/number-input.js");
/* harmony import */ var _editors_object_grid_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./editors/object-grid.js */ "./src/editors/object-grid.js");
/* harmony import */ var _editors_object_nav_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./editors/object-nav.js */ "./src/editors/object-nav.js");
/* harmony import */ var _editors_object_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./editors/object.js */ "./src/editors/object.js");
/* harmony import */ var _editors_array_nav_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./editors/array-nav.js */ "./src/editors/array-nav.js");
/* harmony import */ var _editors_array_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./editors/array.js */ "./src/editors/array.js");
/* harmony import */ var _editors_multiple_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./editors/multiple.js */ "./src/editors/multiple.js");
/* harmony import */ var _editors_if_then_else_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./editors/if-then-else.js */ "./src/editors/if-then-else.js");
/* harmony import */ var _editors_null_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./editors/null.js */ "./src/editors/null.js");































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Schema: _helpers_schema_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  Utils: _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  EditorBoolean: _editors_boolean_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  EditorBooleanEnumRadio: _editors_boolean_enum_radio_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  EditorBooleanEnumSelect: _editors_boolean_enum_select_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  EditorBooleanCheckbox: _editors_boolean_checkbox_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  EditorString: _editors_string_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  EditorStringEnumRadio: _editors_string_enum_radio_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  EditorStringEnumSelect: _editors_string_enum_select_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  EditorStringTextarea: _editors_string_textarea_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  EditorStringAwesomplete: _editors_string_awesomplete_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  EditorStringInput: _editors_string_input_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  EditorNumber: _editors_number_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  EditorNumberEnumRadio: _editors_number_enum_radio_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  EditorNumberEnumSelect: _editors_number_enum_select_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  EditorNumberInput: _editors_number_input_js__WEBPACK_IMPORTED_MODULE_21__["default"],
  EditorObjectGrid: _editors_object_grid_js__WEBPACK_IMPORTED_MODULE_22__["default"],
  EditorObjectNav: _editors_object_nav_js__WEBPACK_IMPORTED_MODULE_23__["default"],
  EditorObject: _editors_object_js__WEBPACK_IMPORTED_MODULE_24__["default"],
  EditorArrayNav: _editors_array_nav_js__WEBPACK_IMPORTED_MODULE_25__["default"],
  EditorArray: _editors_array_js__WEBPACK_IMPORTED_MODULE_26__["default"],
  EditorMultiple: _editors_multiple_js__WEBPACK_IMPORTED_MODULE_27__["default"],
  EditorIfThenElse: _editors_if_then_else_js__WEBPACK_IMPORTED_MODULE_28__["default"],
  EditorNull: _editors_null_js__WEBPACK_IMPORTED_MODULE_29__["default"],
  Theme: _themes_theme_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  ThemeBootstrap3: _themes_bootstrap3_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  ThemeBootstrap4: _themes_bootstrap4_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  ThemeBootstrap5: _themes_bootstrap5_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  RefParser: _ref_parser_ref_parser_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  Create: _jedi_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGVBQWUsZ0NBQWdDLG9CQUFvQjtBQUNoSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQ7QUFDN0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVkseUVBQXlFOztBQUVyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksdUVBQXVFO0FBQ25GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQy9QQTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaURBQUs7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxvRkFBb0Y7O0FBRWhHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksNERBQTREO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3UUE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlEQUFLO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0ZBQW9GOztBQUVoRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDREQUE0RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblJ2QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTCxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTCxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFdBQVcsWUFBWSxXQUFXLGFBQWEsaUJBQWlC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QkFBeUI7QUFDekIsdUJBQXVCO0FBQ3ZCLGNBQWM7QUFDZCx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLGNBQWM7QUFDZCx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLE9BQU87QUFDUCxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1gsUUFBUTtBQUNSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXktbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1jaGVja2JveC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2lmLXRoZW4tZWxzZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1pbnB1dC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLXJhdHkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LWdyaWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC1uYXYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWF3ZXNvbXBsZXRlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZmxhdHBpY2tyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctaW5wdXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1qb2RpdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLXF1aWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9oZWxwZXJzL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pMThuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvaWYtdGhlbi1lbHNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9qZWRpLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2ljb25zL2ljb25zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL3RoZW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdWktcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYtdGhlbi1lbHNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2l0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heEl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heExlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tdWx0aXBsZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL25vdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9vbmVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3Byb3BlcnR5TmFtZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmV2YWx1YXRlZFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDE5LTA5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSmVkaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSmVkaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0plZGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQgRWRpdG9yQXJyYXkgZnJvbSAnLi9hcnJheS5qcydcbmltcG9ydCB7IGNsYW1wLCBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVGl0bGUsIGdldFNjaGVtYVR5cGUsIGdldFNjaGVtYVhPcHRpb24gfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckFycmF5TmF2IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQXJyYXlcbiAqL1xuY2xhc3MgRWRpdG9yQXJyYXlOYXYgZXh0ZW5kcyBFZGl0b3JBcnJheSB7XG4gIHN0YXRpYyByZXNvbHZlcyAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIGdldFNjaGVtYVR5cGUoc2NoZW1hKSA9PT0gJ2FycmF5JyAmJiBpc1NldChnZXRTY2hlbWFYT3B0aW9uKHNjaGVtYSwgJ25hdicpKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDBcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoXG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IG5hdiA9IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXYnKVxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gaXNTZXQobmF2LmNvbHMpID8gbmF2LmNvbHMgOiAzXG4gICAgY29uc3QgdGFiTGlzdENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2xzKVxuICAgIGNvbnN0IHRhYkNvbnRlbnRDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgKDEyIC0gY29scykpXG4gICAgY29uc3QgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuZ2V0VGFiQ29udGVudCgpXG4gICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGhlbWUuZ2V0VGFiTGlzdCh7XG4gICAgICBzdGFja2VkOiBpc1NldChuYXYuc3RhY2tlZCkgPyBuYXYuc3RhY2tlZCA6IGZhbHNlLFxuICAgICAgdHlwZTogaXNTZXQobmF2LnR5cGUpID8gbmF2LnR5cGUgOiAncGlscydcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkxpc3RDb2wpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkNvbnRlbnRDb2wpXG4gICAgdGFiTGlzdENvbC5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuICAgIHRhYkNvbnRlbnRDb2wuYXBwZW5kQ2hpbGQodGFiQ29udGVudClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGxldCBjaGlsZFRpdGxlXG4gICAgICBjb25zdCBzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUgPSBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaXRlbVRlbXBsYXRlJylcblxuICAgICAgaWYgKHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZSkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGkwOiBpbmRleCxcbiAgICAgICAgICBpMTogKGluZGV4ICsgMSksXG4gICAgICAgICAgdmFsdWU6IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgfVxuICAgICAgICBjaGlsZFRpdGxlID0gY29tcGlsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICAgIGNoaWxkVGl0bGUgPSBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSArICcgJyArIChpbmRleCArIDEpIDogY2hpbGQuZ2V0S2V5KClcbiAgICAgIH1cblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gY2xhbXAoKGluZGV4IC0gMSksIDAsICh0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCAtIDEpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleCAtIDFcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRvSW5kZXhcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleCArIDFcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRvSW5kZXhcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPT09IHRoaXMuYWN0aXZlVGFiSW5kZXhcbiAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG5cbiAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgdGl0bGU6IGNoaWxkVGl0bGUsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgIH0pXG5cbiAgICAgIHRhYi5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMudGhlbWUuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIsIGFjdGl2ZSwgaWQpXG4gICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgbW92ZVVwQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cblxuICAgICAgaWYgKCh0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCAtIDEpID09PSBpbmRleCkge1xuICAgICAgICBtb3ZlRG93bkJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JBcnJheU5hdlxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYU1heEl0ZW1zLFxuICBnZXRTY2hlbWFNaW5JdGVtcyxcbiAgZ2V0U2NoZW1hVGl0bGUsIGdldFNjaGVtYVR5cGUsIGdldFNjaGVtYVhPcHRpb25cbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JBcnJheSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JBcnJheSBleHRlbmRzIEVkaXRvciB7XG4gIHN0YXRpYyByZXNvbHZlcyAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIGdldFNjaGVtYVR5cGUoc2NoZW1hKSA9PT0gJ2FycmF5J1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0QXJyYXlDb250cm9sKHtcbiAgICAgIHRpdGxlOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBlbmFibGVDb2xsYXBzZVRvZ2dsZTogdGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZW5hYmxlQ29sbGFwc2VUb2dnbGUgfHwgZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VuYWJsZUNvbGxhcHNlVG9nZ2xlJyksXG4gICAgICBzdGFydENvbGxhcHNlZDogdGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuc3RhcnRDb2xsYXBzZWQgfHwgZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3N0YXJ0Q29sbGFwc2VkJylcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KGNvbmZpZylcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBpc1NvcnRhYmxlICgpIHtcbiAgICByZXR1cm4gd2luZG93LlNvcnRhYmxlICYmIGlzU2V0KGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdzb3J0YWJsZScpKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBtYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IG1pbkl0ZW1zID0gZ2V0U2NoZW1hTWluSXRlbXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuICAgICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyLCBhcnJheUFjdGlvbnMsIGJvZHkgfSA9IHRoaXMudGhlbWUuZ2V0QXJyYXlJdGVtKClcblxuICAgICAgYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIGlmICh0aGlzLmlzU29ydGFibGUoKSkge1xuICAgICAgICBjb25zdCBkcmFnQnRuID0gdGhpcy50aGVtZS5nZXREcmFnSXRlbUJ0bigpXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGRyYWdCdG4pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCh0aGlzLmluc3RhbmNlLmplZGkucGF0aFNlcGFyYXRvcikucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU2V0KG1pbkl0ZW1zKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA8PSBtaW5JdGVtcykge1xuICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcblxuICAgIGlmICh0aGlzLmlzU29ydGFibGUoKSkge1xuICAgICAgaWYgKHRoaXMuc29ydGFibGUpIHtcbiAgICAgICAgdGhpcy5zb3J0YWJsZS5kZXN0cm95KClcbiAgICAgIH1cblxuICAgICAgdGhpcy5zb3J0YWJsZSA9IFNvcnRhYmxlLmNyZWF0ZSh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LCB7XG4gICAgICAgIGFuaW1hdGlvbjogMTUwLFxuICAgICAgICBoYW5kbGU6ICcuamVkaS1hcnJheS1kcmFnJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSxcbiAgICAgICAgb25FbmQ6IChldnQpID0+IHtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoZXZ0Lm9sZEluZGV4LCBldnQubmV3SW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KG1heEl0ZW1zKSAmJiBtYXhJdGVtcyA9PT0gdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY29udHJvbC5hZGRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JBcnJheVxuIiwiaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi9ib29sZWFuLmpzJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFYT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JCb29sZWFuQ2hlY2tib3ggaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbkNoZWNrYm94IGV4dGVuZHMgRWRpdG9yQm9vbGVhbiB7XG4gIHN0YXRpYyByZXNvbHZlcyAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIGdldFNjaGVtYVR5cGUoc2NoZW1hKSA9PT0gJ2Jvb2xlYW4nICYmIGdldFNjaGVtYVhPcHRpb24oc2NoZW1hLCAnZm9ybWF0JykgPT09ICdjaGVja2JveCdcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhbkNoZWNrYm94XG4iLCJpbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4uanMnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlLCBnZXRTY2hlbWFYT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQm9vbGVhbkNoZWNrYm94XG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JCb29sZWFuIHtcbiAgc3RhdGljIHJlc29sdmVzIChzY2hlbWEpIHtcbiAgICByZXR1cm4gZ2V0U2NoZW1hVHlwZShzY2hlbWEpID09PSAnYm9vbGVhbicgJiYgZ2V0U2NoZW1hWE9wdGlvbihzY2hlbWEsICdmb3JtYXQnKSA9PT0gJ3JhZGlvJ1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgdGl0bGVIaWRkZW46IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4uanMnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlLCBnZXRTY2hlbWFYT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckJvb2xlYW5DaGVja2JveFxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBleHRlbmRzIEVkaXRvckJvb2xlYW4ge1xuICBzdGF0aWMgcmVzb2x2ZXMgKHNjaGVtYSkge1xuICAgIHJldHVybiBnZXRTY2hlbWFUeXBlKHNjaGVtYSkgPT09ICdib29sZWFuJ1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgbGFiZWxJY29uQ2xhc3M6IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdsYWJlbEljb25DbGFzcycpLFxuICAgICAgdGl0bGVIaWRkZW46IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JCb29sZWFuIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW4gZXh0ZW5kcyBFZGl0b3Ige1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuXG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZSwgZ2V0U2NoZW1hWE9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmNsYXNzIEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBJbnN0YW5jZSBiZWluZyBjb250cm9sbGVkIGJ5IHRoaXMgZWRpdG9yLlxuICAgICAqIEB0eXBlIHtKZWRpfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBpbnN0YW5jZSB1c2VkIHRvIGJ1aWxkIHRoZSBFZGl0b3IgdXNlciBpbnRlcmZhY2UuXG4gICAgICogQHR5cGUge1RoZW1lfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50aGVtZSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyIGludGVyZmFjZSBodG1sIGZvciB0aGlzIGVkaXRvclxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdGhpcy5jb250cm9sID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZWQgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG5cbiAgICAvKipcbiAgICAgKiBSZWFkIG9ubHkgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yZWFkT25seSA9IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpXG5cbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuY29lcmNlVmFsdWUoKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgY29uc3QgYWx3YXlzU2hvd0Vycm9ycyA9IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnNob3dFcnJvcnMgPT09ICdhbHdheXMnIHx8IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdzaG93RXJyb3JzJykgPT09ICdhbHdheXMnXG5cbiAgICBpZiAoYWx3YXlzU2hvd0Vycm9ycykge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyh0aGlzLmluc3RhbmNlLmdldEVycm9ycygpKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnModGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyh0aGlzLmluc3RhbmNlLmdldEVycm9ycygpKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcmVzb2x2ZXMgKHNjaGVtYSkge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy50aGVtZSA9IHRoaXMuaW5zdGFuY2UuamVkaS50aGVtZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29udGFpbmVyIGF0dHJpYnV0ZXMgbGlrZSBkYXRhLXBhdGggYW5kIGRhdGEtdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgZ2V0U2NoZW1hVHlwZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkpXG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIHRoZSBlZGl0b3IgY29udHJvbCBhbmQgYXBwZW5kcyBpdCB0byB0aGUgZWRpdG9yIGNvbnRhaW5lclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBieSBtYWtpbmcgYXNzdW1wdGlvbnMgYmFzZWQgb24gY29uc3RyYWluc1xuICAgKi9cbiAgY29lcmNlVmFsdWUgKCkge1xuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUVudW0pICYmICFzY2hlbWFFbnVtLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkgJiYgaXNTZXQoc2NoZW1hRW51bVswXSkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoc2NoZW1hRW51bVswXSwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdWkgZWxlbWVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKGVycm9ycykge1xuICAgIGNvbnN0IG5ldmVyU2hvd0Vycm9ycyA9IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnNob3dFcnJvcnMgPT09ICduZXZlcicgfHwgZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3Nob3dFcnJvcnMnKSA9PT0gJ25ldmVyJ1xuXG4gICAgaWYgKG5ldmVyU2hvd0Vycm9ycykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBsYWJlbCA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgICAgIG1lc3NhZ2U6IGxhYmVsICsgJzogJyArIG1lc3NhZ2VcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXJyb3IgbWVzc2FnZSBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgY29udHJvbCBVSSB3aGVuIGl0cyBzdGF0ZSBjaGFuZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICB9XG5cbiAgcmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMgKCkge1xuICAgIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudHMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxuXG4gICAgaW50ZXJhY3RpdmVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbC5jb250YWluZXIgJiYgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0LCBub3RTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFBbnlPZiwgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9uZU9mLCBnZXRTY2hlbWFUeXBlLCBnZXRTY2hlbWFYT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JJZlRoZW5FbHNlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvcklmVGhlbkVsc2UgZXh0ZW5kcyBFZGl0b3Ige1xuICBzdGF0aWMgcmVzb2x2ZXMgKHNjaGVtYSkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPbmVPZiA9IGdldFNjaGVtYU9uZU9mKHNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFBbnlPZiA9IGdldFNjaGVtYUFueU9mKHNjaGVtYSlcbiAgICByZXR1cm4gaXNTZXQoc2NoZW1hQW55T2YpIHx8IGlzU2V0KHNjaGVtYU9uZU9mKSB8fCBzY2hlbWFUeXBlID09PSAnYW55JyB8fCBpc0FycmF5KHNjaGVtYVR5cGUpIHx8IG5vdFNldChzY2hlbWFUeXBlKVxuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SWZUaGVuRWxzZUNvbnRyb2woe1xuICAgICAgdGl0bGU6ICdPcHRpb25zJyxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBzd2l0Y2hlck9wdGlvblZhbHVlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHMsXG4gICAgICBzd2l0Y2hlcjogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5pbmRleFxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICB9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KGNvbmZpZylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JJZlRoZW5FbHNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yLmpzJ1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQsIG5vdFNldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUFueU9mLCBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT25lT2YsIGdldFNjaGVtYVR5cGUsIGdldFNjaGVtYVhPcHRpb24gfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck11bHRpcGxlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck11bHRpcGxlIGV4dGVuZHMgRWRpdG9yIHtcbiAgc3RhdGljIHJlc29sdmVzIChzY2hlbWEpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZShzY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT25lT2YgPSBnZXRTY2hlbWFPbmVPZihzY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hQW55T2YgPSBnZXRTY2hlbWFBbnlPZihzY2hlbWEpXG4gICAgcmV0dXJuIGlzU2V0KHNjaGVtYUFueU9mKSB8fCBpc1NldChzY2hlbWFPbmVPZikgfHwgc2NoZW1hVHlwZSA9PT0gJ2FueScgfHwgaXNBcnJheShzY2hlbWFUeXBlKSB8fCBub3RTZXQoc2NoZW1hVHlwZSlcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE11bHRpcGxlQ29udHJvbCh7XG4gICAgICB0aXRsZTogJ09wdGlvbnMnLFxuICAgICAgdGl0bGVIaWRkZW46IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHN3aXRjaGVyT3B0aW9uVmFsdWVzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWxzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVscyxcbiAgICAgIHN3aXRjaGVyOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuaW5kZXhcblxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmVuYWJsZSgpXG4gICAgfVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydChjb25maWcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTXVsdGlwbGVcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3IuanMnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlLCBnZXRTY2hlbWFYT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck51bGwgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVsbCBleHRlbmRzIEVkaXRvciB7XG4gIHN0YXRpYyByZXNvbHZlcyAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIGdldFNjaGVtYVR5cGUoc2NoZW1hKSA9PT0gJ251bGwnXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXROdWxsQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBsYWJlbEljb25DbGFzczogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2xhYmVsSWNvbkNsYXNzJyksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJykgfHwgZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2Zvcm1hdCcpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVsbFxuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlci5qcydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlLCBnZXRTY2hlbWFYT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JOdW1iZXJFbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JOdW1iZXJcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyRW51bVJhZGlvIGV4dGVuZHMgRWRpdG9yTnVtYmVyIHtcbiAgc3RhdGljIHJlc29sdmVzIChzY2hlbWEpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZShzY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0oc2NoZW1hKVxuICAgIGNvbnN0IG9wdGlvbkZvcm1hdCA9IGdldFNjaGVtYVhPcHRpb24oc2NoZW1hLCAnZm9ybWF0JylcbiAgICBjb25zdCB0eXBlSXNOdW1lcmljID0gc2NoZW1hVHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInXG4gICAgcmV0dXJuIHR5cGVJc051bWVyaWMgJiYgaXNTZXQoc2NoZW1hRW51bSkgJiYgb3B0aW9uRm9ybWF0ID09PSAncmFkaW8nXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZShyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlckVudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlci5qcydcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZSwgZ2V0U2NoZW1hWE9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck51bWJlclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yTnVtYmVyIHtcbiAgc3RhdGljIHJlc29sdmVzIChzY2hlbWEpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZShzY2hlbWEpXG4gICAgY29uc3QgdHlwZUlzTnVtZXJpYyA9IHNjaGVtYVR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgIHJldHVybiB0eXBlSXNOdW1lcmljICYmIGlzU2V0KGdldFNjaGVtYUVudW0oc2NoZW1hKSlcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIGxhYmVsSWNvbkNsYXNzOiBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbGFiZWxJY29uQ2xhc3MnKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlckVudW1TZWxlY3RcbiIsImltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi9udW1iZXIuanMnXG5pbXBvcnQgeyBpc051bWJlciwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7XG4gIGdldFNjaGVtYURlc2NyaXB0aW9uLFxuICBnZXRTY2hlbWFYT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yTnVtYmVyIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlcklucHV0IGV4dGVuZHMgRWRpdG9yTnVtYmVyIHtcbiAgc3RhdGljIHJlc29sdmVzIChzY2hlbWEpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZShzY2hlbWEpXG4gICAgcmV0dXJuIHNjaGVtYVR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJ1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgbGFiZWxJY29uQ2xhc3M6IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdsYWJlbEljb25DbGFzcycpLFxuICAgICAgdGl0bGVIaWRkZW46IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpIHx8IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdmb3JtYXQnKSA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJJbnB1dFxuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlci5qcydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlLCBnZXRTY2hlbWFYT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck51bWJlclJhdHkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JTdHJpbmdcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyUmF0eSBleHRlbmRzIEVkaXRvck51bWJlciB7XG4gIHN0YXRpYyByZXNvbHZlcyAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBSYXR5ICE9PSAndW5kZWZpbmVkJyAmJiBnZXRTY2hlbWFUeXBlKHNjaGVtYSkgPT09ICdudW1iZXInICYmIGlzU2V0KGdldFNjaGVtYVhPcHRpb24oc2NoZW1hLCAncmF0eScpKVxuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UGxhY2Vob2xkZXJDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIGxhYmVsSWNvbkNsYXNzOiBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbGFiZWxJY29uQ2xhc3MnKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucmF0eSA9IG5ldyBSYXR5KHRoaXMuY29udHJvbC5wbGFjZWhvbGRlciwgT2JqZWN0LmFzc2lnbih7fSwgZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3JhdHknKSwge1xuICAgICAgICBjbGljazogKHNjb3JlKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShzY29yZSlcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICB0aGlzLnJhdHkuaW5pdCgpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignUmF0eSBpcyBub3QgYXZhaWxhYmxlIG9yIG5vdCBsb2FkZWQgY29ycmVjdGx5LicsIGUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMgKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMucmF0eS5yZWFkT25seSh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJhdHkucmVhZE9ubHkoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBzdXBlci5yZWZyZXNoVUkoKVxuICAgIHRoaXMucmF0eS5zY29yZSh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyUmF0eVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcbmltcG9ydCB7IGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yTnVtYmVyIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlciBleHRlbmRzIEVkaXRvciB7XG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChnZXRTY2hlbWFUeXBlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJcbiIsImltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi9vYmplY3QuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFUeXBlLCBnZXRTY2hlbWFYT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck9iamVjdEdyaWQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JPYmplY3RcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0R3JpZCBleHRlbmRzIEVkaXRvck9iamVjdCB7XG4gIHN0YXRpYyByZXNvbHZlcyAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIGdldFNjaGVtYVR5cGUoc2NoZW1hKSA9PT0gJ29iamVjdCcgJiYgaXNTZXQoZ2V0U2NoZW1hWE9wdGlvbihzY2hlbWEsICdncmlkJykpXG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBsZXQgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBnZXRTY2hlbWFYT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ2dyaWQnKVxuICAgICAgICBjb25zdCBjb2x1bW5zID0gZ3JpZC5jb2x1bW5zIHx8IDEyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGdyaWQub2Zmc2V0IHx8IDBcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHVtbnMsIG9mZnNldClcbiAgICAgICAgY29uc3QgbmV3Um93ID0gZ3JpZC5uZXdSb3cgfHwgZmFsc2VcblxuICAgICAgICBpZiAobmV3Um93KSB7XG4gICAgICAgICAgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgICAgICB9XG5cbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbClcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0R3JpZFxuIiwiaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuL29iamVjdC5qcydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVGl0bGUsIGdldFNjaGVtYVR5cGUsIGdldFNjaGVtYVhPcHRpb24gfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yT2JqZWN0TmF2IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yT2JqZWN0XG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdE5hdiBleHRlbmRzIEVkaXRvck9iamVjdCB7XG4gIHN0YXRpYyByZXNvbHZlcyAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIGdldFNjaGVtYVR5cGUoc2NoZW1hKSA9PT0gJ29iamVjdCcgJiYgaXNTZXQoZ2V0U2NoZW1hWE9wdGlvbihzY2hlbWEsICduYXYnKSlcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwXG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCBuYXYgPSBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2JylcbiAgICBjb25zdCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgY29uc3QgY29scyA9IGlzU2V0KG5hdi5jb2xzKSA/IG5hdi5jb2xzIDogM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogaXNTZXQobmF2LnN0YWNrZWQpID8gbmF2LnN0YWNrZWQgOiBmYWxzZSxcbiAgICAgIHR5cGU6IGlzU2V0KG5hdi52YXJpYW50KSA/IG5hdi52YXJpYW50IDogJ3BpbHMnXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJMaXN0Q29sKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJDb250ZW50Q29sKVxuICAgIHRhYkxpc3RDb2wuYXBwZW5kQ2hpbGQodGFiTGlzdClcbiAgICB0YWJDb250ZW50Q29sLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGluZGV4ID09PSB0aGlzLmFjdGl2ZVRhYkluZGV4XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2hpbGQuc2NoZW1hKVxuXG4gICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgICB0aXRsZTogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgICAgfSlcblxuICAgICAgICB0YWIubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRoZW1lLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLCBhY3RpdmUsIGlkKVxuXG4gICAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3ROYXZcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3IuanMnXG5pbXBvcnQge1xuICBlcXVhbCxcbiAgaGFzT3duLFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIHBhdGhUb0F0dHJpYnV0ZVxufSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGdldFNjaGVtYURlc2NyaXB0aW9uLFxuICBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZSxcbiAgZ2V0U2NoZW1hWE9wdGlvblxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck9iamVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JPYmplY3QgZXh0ZW5kcyBFZGl0b3Ige1xuICBzdGF0aWMgcmVzb2x2ZXMgKHNjaGVtYSkge1xuICAgIHJldHVybiBnZXRTY2hlbWFUeXBlKHNjaGVtYSkgPT09ICdvYmplY3QnXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5wcm9wZXJ0eUFjdGl2YXRvcnMgPSB7fVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbnMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb25zIHx8IHt9XG4gICAgbGV0IGFkZFByb3BlcnR5ID0gdHJ1ZVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSkge1xuICAgICAgYWRkUHJvcGVydHkgPSBmYWxzZVxuICAgIH1cblxuICAgIGxldCBlbmFibGVQcm9wZXJ0aWVzVG9nZ2xlID0gZmFsc2VcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lbmFibGVQcm9wZXJ0aWVzVG9nZ2xlKSkge1xuICAgICAgZW5hYmxlUHJvcGVydGllc1RvZ2dsZSA9IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVuYWJsZVByb3BlcnRpZXNUb2dnbGVcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hT3B0aW9ucy5lbmFibGVQcm9wZXJ0aWVzVG9nZ2xlKSkge1xuICAgICAgZW5hYmxlUHJvcGVydGllc1RvZ2dsZSA9IHNjaGVtYU9wdGlvbnMuZW5hYmxlUHJvcGVydGllc1RvZ2dsZVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0T2JqZWN0Q29udHJvbCh7XG4gICAgICB0aXRsZTogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgZW5hYmxlUHJvcGVydGllc1RvZ2dsZTogZW5hYmxlUHJvcGVydGllc1RvZ2dsZSxcbiAgICAgIGFkZFByb3BlcnR5OiBhZGRQcm9wZXJ0eSxcbiAgICAgIGVuYWJsZUNvbGxhcHNlVG9nZ2xlOiB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lbmFibGVDb2xsYXBzZVRvZ2dsZSB8fCBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW5hYmxlQ29sbGFwc2VUb2dnbGUnKSxcbiAgICAgIHN0YXJ0Q29sbGFwc2VkOiB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5zdGFydENvbGxhcHNlZCB8fCBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnc3RhcnRDb2xsYXBzZWQnKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZS5zcGxpdCgnICcpLmpvaW4oJycpXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0gcHJvcGVydHlOYW1lLmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW3Byb3BlcnR5TmFtZV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLmluc3RhbmNlLmdldFByb3BlcnR5U2NoZW1hKHByb3BlcnR5TmFtZSlcblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwgcHJvcGVydHlOYW1lKVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZSA9ICcnXG5cbiAgICAgIGNvbnN0IGFyaWFMaXZlID0gdGhpcy5jb250cm9sLmFyaWFMaXZlXG4gICAgICBhcmlhTGl2ZS5pbm5lckhUTUwgPSAnJ1xuICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICBjb25zdCBsYWJlbCA9IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogcHJvcGVydHlOYW1lXG4gICAgICBjb25zdCBhcmlhTGl2ZU1lc3NhZ2UgPSB0aGlzLnRoZW1lLmdldEFyaWFMaXZlTWVzc2FnZSgpXG4gICAgICBhcmlhTGl2ZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBsYWJlbCArICcgZmllbGQgd2FzIGFkZGVkIHRvIHRoZSBmb3JtJ1xuICAgICAgYXJpYUxpdmUuYXBwZW5kQ2hpbGQoYXJpYUxpdmVNZXNzYWdlKVxuXG4gICAgICAvLyBrZWVwcyBkaWFsb2cgb3BlblxuICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNDb250YWluZXIuY2xvc2UoKVxuICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNDb250YWluZXIuc2hvd01vZGFsKClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KGNvbmZpZylcbiAgfVxuXG4gIHJlZnJlc2hQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uRW5hYmxlUHJvcGVydGllc1RvZ2dsZSA9IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbmFibGVQcm9wZXJ0aWVzVG9nZ2xlJylcblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lbmFibGVQcm9wZXJ0aWVzVG9nZ2xlLCB0cnVlKSB8fCBlcXVhbChzY2hlbWFPcHRpb25FbmFibGVQcm9wZXJ0aWVzVG9nZ2xlLCB0cnVlKSkge1xuICAgICAgLy8gdG9kbzogZGVsZXRlIFwidGhpcy5wcm9wZXJ0aWVzIGFuZCB0aGlzLmluc3RhbmNlLnByb3BlcnRpZXNcIlxuICAgICAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2UucHJvcGVydGllcylcbiAgICAgIGNvbnN0IGNoaWxkcmVuUHJvcGVydGllcyA9IHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQuZ2V0S2V5KCkpXG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gWy4uLnNjaGVtYVByb3BlcnRpZXMsIC4uLmNoaWxkcmVuUHJvcGVydGllc11cblxuICAgICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKHByb3BlcnR5KVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKHByb3BlcnR5KVxuICAgICAgICBjb25zdCBub3RSZXF1aXJlZCA9ICFpc1JlcXVpcmVkICYmICFpc0RlcGVuZGVudFJlcXVpcmVkXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvckluRG9tID0gdGhpcy5wcm9wZXJ0eUFjdGl2YXRvcnNbcHJvcGVydHldXG4gICAgICAgIGNvbnN0IGFyaWFMaXZlID0gdGhpcy5jb250cm9sLmFyaWFMaXZlXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuaW5zdGFuY2UuZ2V0UHJvcGVydHlTY2hlbWEocHJvcGVydHkpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShzY2hlbWEpXG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmluc3RhbmNlLnBhdGggKyB0aGlzLmluc3RhbmNlLmplZGkucGF0aFNlcGFyYXRvciArIHByb3BlcnR5XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKHBhdGgpICsgJy1hY3RpdmF0b3InXG4gICAgICAgIGNvbnN0IGxhYmVsID0gaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiBwcm9wZXJ0eVxuXG4gICAgICAgIGlmIChub3RSZXF1aXJlZCAmJiAhYWN0aXZhdG9ySW5Eb20pIHtcbiAgICAgICAgICBjb25zdCBjaGVja2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICB0aXRsZUhpZGRlbjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjaGVja2JveENvbnRyb2wuaW5wdXRcbiAgICAgICAgICB0aGlzLnByb3BlcnR5QWN0aXZhdG9yc1twcm9wZXJ0eV0gPSBjaGVja2JveFxuXG4gICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgYXJpYUxpdmUuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgIGNvbnN0IGFyaWFMaXZlTWVzc2FnZSA9IHRoaXMudGhlbWUuZ2V0QXJpYUxpdmVNZXNzYWdlKClcblxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmdldENoaWxkKHByb3BlcnR5KVxuXG4gICAgICAgICAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwgcHJvcGVydHkpXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmdldENoaWxkKHByb3BlcnR5KS5hY3RpdmF0ZSgpXG4gICAgICAgICAgICAgIGFyaWFMaXZlTWVzc2FnZS50ZXh0Q29udGVudCA9IGxhYmVsICsgJyBmaWVsZCB3YXMgYWRkZWQgdG8gdGhlIGZvcm0nXG4gICAgICAgICAgICAgIGFyaWFMaXZlLmFwcGVuZENoaWxkKGFyaWFMaXZlTWVzc2FnZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZ2V0Q2hpbGQocHJvcGVydHkpLmRlYWN0aXZhdGUoKVxuICAgICAgICAgICAgICBhcmlhTGl2ZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBsYWJlbCArICcgZmllbGQgd2FzIHJlbW92ZWQgZnJvbSB0aGUgZm9ybSdcbiAgICAgICAgICAgICAgYXJpYUxpdmUuYXBwZW5kQ2hpbGQoYXJpYUxpdmVNZXNzYWdlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBrZWVwcyBkaWFsb2cgb3BlblxuICAgICAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNDb250YWluZXIuY2xvc2UoKVxuICAgICAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNDb250YWluZXIuc2hvd01vZGFsKClcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udHJvbC5jb250YWluZXIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IHRoaXMucHJvcGVydHlBY3RpdmF0b3JzW3Byb3BlcnR5XVxuXG4gICAgICAgIGlmIChjaGVja2JveCkge1xuICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBoYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBwcm9wZXJ0eSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGlmIChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdFxuIiwiaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuL3N0cmluZy5qcydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlLCBnZXRTY2hlbWFYT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ0F3ZXNvbXBsZXRlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yU3RyaW5nXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ0F3ZXNvbXBsZXRlIGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgc3RhdGljIHJlc29sdmVzIChzY2hlbWEpIHtcbiAgICByZXR1cm4gd2luZG93LkF3ZXNvbXBsZXRlICYmIGdldFNjaGVtYVR5cGUoc2NoZW1hKSA9PT0gJ3N0cmluZycgJiYgaXNTZXQoZ2V0U2NoZW1hWE9wdGlvbihzY2hlbWEsICdhd2Vzb21wbGV0ZScpKVxuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIGxhYmVsSWNvbkNsYXNzOiBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbGFiZWxJY29uQ2xhc3MnKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuYXdlc29tcGxldGUgPSBuZXcgd2luZG93LkF3ZXNvbXBsZXRlKHRoaXMuY29udHJvbC5pbnB1dCwgZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2F3ZXNvbXBsZXRlJykpXG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hd2Vzb21wbGV0ZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignQXdlc29tcGxldGUgaXMgbm90IGF2YWlsYWJsZSBvciBub3QgbG9hZGVkIGNvcnJlY3RseS4nLCBlKVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYXdlc29tcGxldGUtc2VsZWN0Y29tcGxldGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuYXdlc29tcGxldGUuZGVzdHJveSgpXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nQXdlc29tcGxldGVcbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcuanMnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlLCBnZXRTY2hlbWFYT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ0VudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclN0cmluZ1xuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JTdHJpbmcge1xuICBzdGF0aWMgcmVzb2x2ZXMgKHNjaGVtYSkge1xuICAgIHJldHVybiBnZXRTY2hlbWFUeXBlKHNjaGVtYSkgPT09ICdzdHJpbmcnICYmIGdldFNjaGVtYVhPcHRpb24oc2NoZW1hLCAnZm9ybWF0JykgPT09ICdyYWRpbydcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHRpdGxlSGlkZGVuOiBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAndGl0bGVIaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4vc3RyaW5nLmpzJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hVGl0bGUsIGdldFNjaGVtYVR5cGUsIGdldFNjaGVtYVhPcHRpb24gfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclN0cmluZ1xuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgc3RhdGljIHJlc29sdmVzIChzY2hlbWEpIHtcbiAgICByZXR1cm4gZ2V0U2NoZW1hVHlwZShzY2hlbWEpID09PSAnc3RyaW5nJyAmJiBpc1NldChnZXRTY2hlbWFFbnVtKHNjaGVtYSkpXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBsYWJlbEljb25DbGFzczogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2xhYmVsSWNvbkNsYXNzJyksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuL3N0cmluZy5qcydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlLCBnZXRTY2hlbWFYT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ0ZsYXRwaWNrciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclN0cmluZ1xuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdGbGF0cGlja3IgZXh0ZW5kcyBFZGl0b3JTdHJpbmcge1xuICBzdGF0aWMgcmVzb2x2ZXMgKHNjaGVtYSkge1xuICAgIHJldHVybiB3aW5kb3cuZmxhdHBpY2tyICYmIGdldFNjaGVtYVR5cGUoc2NoZW1hKSA9PT0gJ3N0cmluZycgJiYgaXNTZXQoZ2V0U2NoZW1hWE9wdGlvbihzY2hlbWEsICdmbGF0cGlja3InKSlcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBsYWJlbEljb25DbGFzczogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2xhYmVsSWNvbkNsYXNzJyksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmZsYXRwaWNrciA9IHdpbmRvdy5mbGF0cGlja3IodGhpcy5jb250cm9sLmlucHV0LCBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZmxhdHBpY2tyJykpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignRmxhdHBpY2tyIGlzIG5vdCBhdmFpbGFibGUgb3Igbm90IGxvYWRlZCBjb3JyZWN0bHkuJywgZSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuZmxhdHBpY2tyLnNldERhdGUodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5mbGF0cGlja3IuZGVzdHJveSgpXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRmxhdHBpY2tyXG4iLCJpbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4vc3RyaW5nLmpzJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFYT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nSW5wdXQgZXh0ZW5kcyBFZGl0b3JTdHJpbmcge1xuICBzdGF0aWMgcmVzb2x2ZXMgKHNjaGVtYSkge1xuICAgIHJldHVybiBnZXRTY2hlbWFUeXBlKHNjaGVtYSkgPT09ICdzdHJpbmcnXG4gIH1cblxuICBzdGF0aWMgZ2V0VHlwZXMgKCkge1xuICAgIHJldHVybiBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd1cmwnLCAnd2VlayddXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgY29uc3Qgb3B0aW9uRm9ybWF0ID0gZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2Zvcm1hdCcpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiBFZGl0b3JTdHJpbmdJbnB1dC5nZXRUeXBlcygpLmluY2x1ZGVzKG9wdGlvbkZvcm1hdCkgPyBvcHRpb25Gb3JtYXQgOiAndGV4dCcsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBsYWJlbEljb25DbGFzczogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2xhYmVsSWNvbkNsYXNzJyksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJykgfHwgb3B0aW9uRm9ybWF0ID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgLy8gZml4IGNvbG9yIHBpY2tlciBidWdcbiAgICBpZiAob3B0aW9uRm9ybWF0ID09PSAnY29sb3InICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nSW5wdXRcbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcuanMnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZSwgZ2V0U2NoZW1hWE9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdRdWlsbCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclN0cmluZ1xuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdKb2RpdCBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIHN0YXRpYyByZXNvbHZlcyAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5Kb2RpdCAmJiBnZXRTY2hlbWFUeXBlKHNjaGVtYSkgPT09ICdzdHJpbmcnICYmIGlzU2V0KGdldFNjaGVtYVhPcHRpb24oc2NoZW1hLCAnam9kaXQnKSlcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBsYWJlbEljb25DbGFzczogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2xhYmVsSWNvbkNsYXNzJyksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmpvZGl0ID0gd2luZG93LkpvZGl0Lm1ha2UodGhpcy5jb250cm9sLmlucHV0LCBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnam9kaXQnKSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdKb2RpdCBpcyBub3QgYXZhaWxhYmxlIG9yIG5vdCBsb2FkZWQgY29ycmVjdGx5LicsIGUpXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuam9kaXQuZXZlbnRzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBqb2RpdFZhbHVlID0gdGhpcy5qb2RpdC52YWx1ZVxuXG4gICAgICBpZiAoam9kaXRWYWx1ZSAhPT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoam9kaXRWYWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMgKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMuam9kaXQuc2V0UmVhZE9ubHkodHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qb2RpdC5zZXRSZWFkT25seShmYWxzZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHN1cGVyLnJlZnJlc2hVSSgpXG4gICAgdGhpcy5qb2RpdC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5qb2RpdC5kZXN0cnVjdCgpXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nSm9kaXRcbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcuanMnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZSwgZ2V0U2NoZW1hWE9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdRdWlsbCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclN0cmluZ1xuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdRdWlsbCBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIHN0YXRpYyByZXNvbHZlcyAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5RdWlsbCAmJiBnZXRTY2hlbWFUeXBlKHNjaGVtYSkgPT09ICdzdHJpbmcnICYmIGlzU2V0KGdldFNjaGVtYVhPcHRpb24oc2NoZW1hLCAncXVpbGwnKSlcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFBsYWNlaG9sZGVyQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBsYWJlbEljb25DbGFzczogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2xhYmVsSWNvbkNsYXNzJyksXG4gICAgICB0aXRsZUhpZGRlbjogZ2V0U2NoZW1hWE9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3RpdGxlSGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLnF1aWxsID0gbmV3IHdpbmRvdy5RdWlsbCh0aGlzLmNvbnRyb2wucGxhY2Vob2xkZXIsIGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdxdWlsbCcpKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1F1aWxsIGlzIG5vdCBhdmFpbGFibGUgb3Igbm90IGxvYWRlZCBjb3JyZWN0bHkuJywgZSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5xdWlsbC5yb290LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICBjb25zdCBxdWlsbFRleHQgPSB0aGlzLnF1aWxsLmdldFRleHQoKVxuXG4gICAgICBpZiAocXVpbGxUZXh0ICE9PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShxdWlsbFRleHQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzICgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICB0aGlzLnF1aWxsLmRpc2FibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnF1aWxsLmVuYWJsZSgpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBzdXBlci5yZWZyZXNoVUkoKVxuICAgIHRoaXMucXVpbGwuc2V0VGV4dCh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nUXVpbGxcbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcuanMnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYVhPcHRpb24sIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ1RleHRhcmVhIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yU3RyaW5nXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ1RleHRhcmVhIGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgc3RhdGljIHJlc29sdmVzIChzY2hlbWEpIHtcbiAgICByZXR1cm4gZ2V0U2NoZW1hVHlwZShzY2hlbWEpID09PSAnc3RyaW5nJyAmJiBnZXRTY2hlbWFYT3B0aW9uKHNjaGVtYSwgJ2Zvcm1hdCcpID09PSAndGV4dGFyZWEnXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgbGFiZWxJY29uQ2xhc3M6IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdsYWJlbEljb25DbGFzcycpLFxuICAgICAgdGl0bGVIaWRkZW46IGdldFNjaGVtYVhPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICd0aXRsZUhpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ1RleHRhcmVhXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nIGV4dGVuZHMgRWRpdG9yIHtcbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdcbiIsIi8qKlxuICogUmVwcmVzZW50cyBhbiBFdmVudEVtaXR0ZXIgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGlzIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICovXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgb2ZmIChuYW1lKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSAhPT0gbmFtZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgYSBuYW1lZCBldmVudCBsaXN0ZW5lclxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGJlIGVtaXR0ZWRcbiAgICogQHBhcmFtIHsqfSBwYXlsb2FkIC0gUGF5bG9hZCBjb250YWluaW5nIGRhdGEgdGhhdCBpcyBwYXNzZWQgYWxvbmcgd2l0aCB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIGVtaXQgKG5hbWUsIHBheWxvYWQgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2socGF5bG9hZClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWxzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hWCAoc2NoZW1hLCBrZXl3b3JkKSB7XG4gIGNvbnN0IGtleSA9ICd4LScgKyBrZXl3b3JkXG4gIHJldHVybiBzY2hlbWFba2V5XVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hU2NoZW1hIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS4kc2NoZW1hKSA/IHNjaGVtYS4kc2NoZW1hIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbihzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQcm9wZXJ0eU5hbWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wcm9wZXJ0eU5hbWVzKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLnByb3BlcnR5TmFtZXMpID8gc2NoZW1hLnByb3BlcnR5TmFtZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFsbE9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLmFsbE9mKSA/IHNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQW55T2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEuYW55T2YpID8gc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFDb25zdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuY29uc3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUNvbnRhaW5zIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbihzY2hlbWEuY29udGFpbnMpKSA/IHNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVmYXVsdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuZGVmYXVsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVzY3JpcHRpb24gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRWxzZSAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbihzY2hlbWEuZWxzZSkpID8gc2NoZW1hLmVsc2UgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUVudW0gKHNjaGVtYSkge1xuICBpZiAoaXNBcnJheShzY2hlbWEuZW51bSkgJiYgc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBzY2hlbWEuZW51bVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRm9ybWF0IChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5mb3JtYXQpID8gc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hSWYgKHNjaGVtYSkge1xuICBpZiAoaXNPYmplY3Qoc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIGlmIChpc0Jvb2xlYW4oc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHNjaGVtYS5pdGVtcykgPyBzY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heGltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1heGltdW0pID8gc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heENvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4Q29udGFpbnMpICYmIHNjaGVtYS5tYXhDb250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhDb250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4SXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhJdGVtcykgJiYgc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heEl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhMZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhMZW5ndGgpICYmIHNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4TGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbmltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1pbmltdW0pID8gc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkNvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluQ29udGFpbnMpICYmIHNjaGVtYS5taW5Db250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5Db250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluSXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5JdGVtcykgJiYgc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5MZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5MZW5ndGgpICYmIHNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluTGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluUHJvcGVydGllcykgJiYgc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluUHJvcGVydGllc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTXVsdGlwbGVPZiAoc2NoZW1hKSB7XG4gIGlmIChpc051bWJlcihzY2hlbWEubXVsdGlwbGVPZikgJiYgc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubXVsdGlwbGVPZlxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTm90IChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4oc2NoZW1hLm5vdCkpID8gc2NoZW1hLm5vdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hWE9wdGlvbiAoc2NoZW1hLCBvcHRpb24pIHtcbiAgcmV0dXJuIChzY2hlbWFbJ3gtb3B0aW9ucyddICYmIHNjaGVtYVsneC1vcHRpb25zJ11bb3B0aW9uXSkgPyBzY2hlbWFbJ3gtb3B0aW9ucyddW29wdGlvbl0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm4gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnBhdHRlcm4pID8gc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByZWZpeEl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHNjaGVtYS5wcmVmaXhJdGVtcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEucHJvcGVydGllcykgPyBzY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUmVhZE9ubHkgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS5yZWFkT25seSkgPyBzY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVJlcXVpcmVkIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFUaGVuIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHNjaGVtYS50aGVuKSkgPyBzY2hlbWEudGhlbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVGl0bGUgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnRpdGxlKSA/IHNjaGVtYS50aXRsZSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVHlwZSAoc2NoZW1hKSB7XG4gIGlmIChpc1N0cmluZyhzY2hlbWEudHlwZSkgfHwgaXNBcnJheShzY2hlbWEudHlwZSkpIHtcbiAgICByZXR1cm4gc2NoZW1hLnR5cGVcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU9uZU9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLm9uZU9mKSA/IHNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVW5ldmFsdWF0ZWRQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEudW5ldmFsdWF0ZWRQcm9wZXJ0aWVzKSA/IHNjaGVtYS51bmV2YWx1YXRlZFByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVVuaXF1ZUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEudW5pcXVlSXRlbXMpID8gc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0U2NoZW1hWCxcbiAgZ2V0U2NoZW1hU2NoZW1hLFxuICBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hUHJvcGVydHlOYW1lcyxcbiAgZ2V0U2NoZW1hQWxsT2YsXG4gIGdldFNjaGVtYUFueU9mLFxuICBnZXRTY2hlbWFDb25zdCxcbiAgZ2V0U2NoZW1hQ29udGFpbnMsXG4gIGdldFNjaGVtYURlZmF1bHQsXG4gIGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkLFxuICBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzLFxuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hRWxzZSxcbiAgZ2V0U2NoZW1hRW51bSxcbiAgZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSxcbiAgZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSxcbiAgZ2V0U2NoZW1hRm9ybWF0LFxuICBnZXRTY2hlbWFJZixcbiAgZ2V0U2NoZW1hSXRlbXMsXG4gIGdldFNjaGVtYU1heGltdW0sXG4gIGdldFNjaGVtYU1heENvbnRhaW5zLFxuICBnZXRTY2hlbWFNYXhJdGVtcyxcbiAgZ2V0U2NoZW1hTWF4TGVuZ3RoLFxuICBnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFNaW5pbXVtLFxuICBnZXRTY2hlbWFNaW5Db250YWlucyxcbiAgZ2V0U2NoZW1hTWluSXRlbXMsXG4gIGdldFNjaGVtYU1pbkxlbmd0aCxcbiAgZ2V0U2NoZW1hTWluUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hTXVsdGlwbGVPZixcbiAgZ2V0U2NoZW1hTm90LFxuICBnZXRTY2hlbWFYT3B0aW9uLFxuICBnZXRTY2hlbWFQYXR0ZXJuLFxuICBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hUHJlZml4SXRlbXMsXG4gIGdldFNjaGVtYVByb3BlcnRpZXMsXG4gIGdldFNjaGVtYVJlYWRPbmx5LFxuICBnZXRTY2hlbWFSZXF1aXJlZCxcbiAgZ2V0U2NoZW1hVGhlbixcbiAgZ2V0U2NoZW1hVGl0bGUsXG4gIGdldFNjaGVtYVR5cGUsXG4gIGdldFNjaGVtYU9uZU9mLFxuICBnZXRTY2hlbWFVbmV2YWx1YXRlZFByb3BlcnRpZXMsXG4gIGdldFNjaGVtYVVuaXF1ZUl0ZW1zXG59XG4iLCIvKipcbiAqIFV0aWxzLlxuICogQG1vZHVsZSB1dGlsc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaXJjdWxhclJlcGxhY2VyICgpIHtcbiAgY29uc3QgYW5jZXN0b3JzID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIC8vIGB0aGlzYCBpcyB0aGUgb2JqZWN0IHRoYXQgdmFsdWUgaXMgY29udGFpbmVkIGluLFxuICAgIC8vIGkuZS4sIGl0cyBkaXJlY3QgcGFyZW50LlxuICAgIHdoaWxlIChhbmNlc3RvcnMubGVuZ3RoID4gMCAmJiBhbmNlc3RvcnMuYXQoLTEpICE9PSB0aGlzKSB7XG4gICAgICBhbmNlc3RvcnMucG9wKClcbiAgICB9XG4gICAgaWYgKGFuY2VzdG9ycy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnW0NpcmN1bGFyXSdcbiAgICB9XG4gICAgYW5jZXN0b3JzLnB1c2godmFsdWUpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgY2xvbmUgb2YgYSB0aGluZ1xuICogQHBhcmFtIHsqfSB0aGluZyAtIFRoZSB0aGluZyB0byBiZSBjbG9uZWRcbiAqIEByZXR1cm4geyp9IFRoZSBjbG9uZSBvZiB0aGUgdGhpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lICh0aGluZykge1xuICBpZiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nLCBnZXRDaXJjdWxhclJlcGxhY2VyKCkpKVxufVxuXG4vKipcbiAqIFJldHVybnMgZXNjYXBlZCByZWdleHBcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEVzY2FwZWQgcmVnZXhwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAgKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbi8qKlxuICogTXVsdGlwbGUgc2VhcmNoIGFuZCByZXBsYWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IGZpbmQgLSBUaGUgcGFydCB0byBiZSByZXBsYWNlZFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2UgLSBUaGUgcmVwbGFjZW1lbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQWxsIChzdHIsIGZpbmQsIHJlcGxhY2UpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKGZpbmQpLCAnZycpLCByZXBsYWNlKVxufVxuXG4vKipcbiAqIEZvcm1hdHMgYSBqc29uIHBhdGggdG8gYmUgdXNlZCBhcyBhbiBodG1sIGF0dHJpYnV0ZSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUganNvbiBwYXRoXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRoVG9BdHRyaWJ1dGUgKHBhdGgpIHtcbiAgcmV0dXJuIHJlcGxhY2VBbGwocmVwbGFjZUFsbChwYXRoLCAnIycsICdyb290JyksICcvJywgJy0nKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIFRoZSBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIC0gVGhlIHByb3BlcnR5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duIChvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApXG59XG5cbi8qKlxuICogU29ydCBvYmplY3QgcHJvcGVydGllc1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIFRoZSBvYmplY3RcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0T2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBlcXVhbFxuICogQHBhcmFtIHsqfSBhIC0gVmFsdWUgQVxuICogQHBhcmFtIHsqfSBiIC0gVmFsdWUgQlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsIChhLCBiKSB7XG4gIGlmIChpc09iamVjdChhKSAmJiBpc09iamVjdChiKSkge1xuICAgIGEgPSBzb3J0T2JqZWN0KGEpXG4gICAgYiA9IHNvcnRPYmplY3QoYilcbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gdmFsdWVzIHBhc3NlZCBhcmUgZGlmZmVyZW50XG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW50IChhLCBiKSB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBudWxsXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NldCAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdFNldCAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIG51bWJlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGFuIGludGVnZXJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIgKHZhbHVlKSB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYSBzdHJpbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIGJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGFuIGFycmF5XG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSAodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gb2JqZWN0XG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKHZhbHVlKSB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHR5cGUgb2YgYSB2YWx1ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgdHlwZSBvZiB0aGUgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUgKHZhbHVlKSB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG4vKipcbiAqIE1lcmdlcyBvYmplY3RzXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0W119IHNvdXJjZXMgLSBPYmplY3RzIHRvIGJlIG1lcmdlZCBpbnRvIHRoZSB0YXJnZXQgb2JqZWN0XG4gKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBtZXJnZWQgb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAgKHRhcmdldCwgLi4uc291cmNlcykge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuXG4vKipcbiAqIE1lcmdlcyBvYmplY3RzIGJ1dCBvbmx5IHRoZSBwcm9wZXJ0aWVzIHRoYXQgZXhpc3RzIGluIGJvdGhzIG9iamVjdHNcbiAqIGlmIHRoZXkgYXJlIHRoZSBzYW1lIHR5cGUgb2YgdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmoxIC0gVGhlIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0W119IG9iajIgLSBPYmplY3RzIHdobydzIHByb3BlcnRpZXMgYXJlIHRoZSBvdmVycmlkZXNcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG92ZXJ3cml0dGVuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzIChvYmoxLCBvYmoyKSB7XG4gIE9iamVjdC5rZXlzKG9iajIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgaW4gb2JqMSkge1xuICAgICAgaWYgKHR5cGVvZiBvYmoxW2tleV0gPT09IHR5cGVvZiBvYmoyW2tleV0pIHtcbiAgICAgICAgb2JqMVtrZXldID0gb2JqMltrZXldXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBvYmoxXG59XG5cbi8qKlxuICogR2V0IHNvbWUgdmFsdWUgYnkgdHJhdmVyc2luZyB0aGUgZGF0YSB1c2luZyBKU09OIHBhdGhcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgc291cmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIEpTT04gcGF0aFxuICogQHJldHVybiB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlQnlKU09OUGF0aCAoZGF0YSwgcGF0aCkge1xuICBjb25zdCBrZXlzID0gcGF0aC5zcGxpdCgnLicpIC8vIFNwbGl0IHRoZSBwYXRoIGludG8gaW5kaXZpZHVhbCBrZXlzXG5cbiAgbGV0IHZhbHVlID0gZGF0YVxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIC9eXFxkKyQvLnRlc3Qoa2V5KSkge1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChrZXkpXG4gICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW2luZGV4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCAvLyBJbmRleCBpcyBvdXQgb2YgYm91bmRzLCByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoYXNPd24odmFsdWUsIGtleSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWVba2V5XVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEtleSBkb2Vzbid0IGV4aXN0LCByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogQ29tcGlsZXMgYSB0ZW1wbGF0ZSBieSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSAtIFRoZSB0ZW1wbGF0ZSBzdHJpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gV2hlcmUgdGVtcGxhdGUgZGF0YSBsaXZlc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlICh0ZW1wbGF0ZSwgZGF0YSkge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgve3soLio/KX19L2csIChtYXRjaCkgPT4ge1xuICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvXFxzL2csICcnKVxuICAgIGNvbnN0IHBhdGggPSBtYXRjaC5zcGxpdCgve3t8fX0vKVsxXVxuICAgIHJldHVybiBnZXRWYWx1ZUJ5SlNPTlBhdGgoZGF0YSwgcGF0aClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wIChudW1iZXIsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG51bWJlciwgbWF4KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkgKGFycikge1xuICBjb25zdCB1bmlxdWVPYmplY3RzID0gW11cbiAgY29uc3QgdW5pcXVlVmFsdWVzID0gbmV3IFNldCgpXG5cbiAgZm9yIChjb25zdCBvYmogb2YgYXJyKSB7XG4gICAgY29uc3Qgb2JqU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob2JqKVxuICAgIGlmICghdW5pcXVlVmFsdWVzLmhhcyhvYmpTdHJpbmcpKSB7XG4gICAgICB1bmlxdWVWYWx1ZXMuYWRkKG9ialN0cmluZylcbiAgICAgIHVuaXF1ZU9iamVjdHMucHVzaChvYmopXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaXF1ZU9iamVjdHNcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRDaXJjdWxhclJlcGxhY2VyLFxuICBjbG9uZSxcbiAgZXNjYXBlUmVnRXhwLFxuICByZXBsYWNlQWxsLFxuICBwYXRoVG9BdHRyaWJ1dGUsXG4gIGhhc093bixcbiAgc29ydE9iamVjdCxcbiAgZXF1YWwsXG4gIGRpZmZlcmVudCxcbiAgaXNOdWxsLFxuICBpc1NldCxcbiAgbm90U2V0LFxuICBpc051bWJlcixcbiAgaXNJbnRlZ2VyLFxuICBpc1N0cmluZyxcbiAgaXNCb29sZWFuLFxuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgZ2V0VHlwZSxcbiAgbWVyZ2VEZWVwLFxuICBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMsXG4gIGdldFZhbHVlQnlKU09OUGF0aCxcbiAgY29tcGlsZVRlbXBsYXRlLFxuICBjbGFtcCxcbiAgcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheVxufVxuIiwiLyoqXG4gKiBTaW1wbGUgdHJhbnNsYXRpb24gbW9kdWxlLlxuICogQG1vZHVsZSBpMThuXG4gKi9cblxuLyoqXG4gKiBMb2NhbGUgbWVzc2FnZXNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBpMThuID0ge1xuICBlcnJvckFkZGl0aW9uYWxQcm9wZXJ0aWVzOiAnSGFzIGFkZGl0aW9uYWwgcHJvcGVydHkgXCJ7eyBwcm9wZXJ0eSB9fVwiIGJ1dCBubyBhZGRpdGlvbmFsIHByb3BlcnRpZXMgYXJlIGFsbG93ZWQuJyxcbiAgZXJyb3JBbnlPZjogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuJyxcbiAgZXJyb3JDb25zdDogJ011c3QgaGF2ZSB2YWx1ZSBvZjoge3sgY29uc3QgfX0uJyxcbiAgZXJyb3JDb250YWluczogJ011c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgaXRlbSBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hLicsXG4gIGVycm9yRGVwZW5kZW50UmVxdWlyZWQ6ICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6IHt7IGRlcGVuZGVudFJlcXVpcmVkIH19LicsXG4gIGVycm9yRW51bTogJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczoge3sgZW51bSB9fS4nLFxuICBlcnJvckV4Y2x1c2l2ZU1heGltdW06ICdNdXN0IGJlIGxlc3MgdGhhbiB7eyBleGNsdXNpdmVNYXhpbXVtIH19LicsXG4gIGVycm9yRXhjbHVzaXZlTWluaW11bTogJ011c3QgYmUgZ3JlYXRlciB0aGFuIHt7IGV4Y2x1c2l2ZU1pbmltdW0gfX0uJyxcbiAgZXJyb3JGb3JtYXQ6ICdNdXN0IGJlIGEgdmFsaWQge3sgZm9ybWF0IH19LicsXG4gIGVycm9ySXRlbXM6ICdNdXN0IGhhdmUgaXRlbXMgdGhhdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEuJyxcbiAgZXJyb3JNYXhpbXVtOiAnTXVzdCBiZSBhdCBtb3N0IHt7IG1heGltdW0gfX0uJyxcbiAgZXJyb3JNYXhJdGVtczogJ011c3QgaGF2ZSBhdCBtb3N0IHt7IG1heEl0ZW1zIH19IGl0ZW1zLicsXG4gIGVycm9yTWF4TGVuZ3RoOiAnTXVzdCBiZSBhdCBtb3N0IHt7IG1heExlbmd0aCB9fSBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgZXJyb3JNYXhQcm9wZXJ0aWVzOiAnTXVzdCBoYXZlIGF0IG1vc3Qge3sgbWF4UHJvcGVydGllcyB9fSBwcm9wZXJ0aWVzLicsXG4gIGVycm9yTWF4Q29udGFpbnM6ICdNdXN0IGNvbnRhaW4gYXQgbW9zdCB7eyBtYXhDb250YWlucyB9fSBpdGVtcyBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hLiBJdCBjdXJyZW50bHkgY29udGFpbnMge3sgY291bnRlciB9fS4nLFxuICBlcnJvck1pbkNvbnRhaW5zOiAnTXVzdCBjb250YWluIGF0IGxlYXN0IHt7IG1pbkNvbnRhaW5zIH19IGl0ZW1zIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEuIEl0IGN1cnJlbnRseSBjb250YWlucyB7eyBjb3VudGVyIH19LicsXG4gIGVycm9yTWluaW11bTogJ011c3QgYmUgYXQgbGVhc3Qge3sgbWluaW11bSB9fS4nLFxuICBlcnJvck1pbkl0ZW1zOiAnTXVzdCBoYXZlIGF0IGxlYXN0IHt7IG1pbkl0ZW1zIH19IGl0ZW1zLicsXG4gIGVycm9yTWluTGVuZ3RoOiAnTXVzdCBiZSBhdCBsZWFzdCB7eyBtaW5MZW5ndGggfX0gY2hhcmFjdGVycyBsb25nLicsXG4gIGVycm9yTWluUHJvcGVydGllczogJ011c3QgaGF2ZSBhdCBsZWFzdCB7eyBtaW5Qcm9wZXJ0aWVzIH19IHByb3BlcnRpZXMuJyxcbiAgZXJyb3JNdWx0aXBsZU9mOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiB7eyBtdWx0aXBsZU9mIH19LicsXG4gIGVycm9yTm90OiAnTXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hLicsXG4gIGVycm9yT25lT2Y6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCB7eyBjb3VudGVyIH19IG9mIHRoZSBzY2hlbWFzLicsXG4gIGVycm9yUGF0dGVybjogJ011c3QgbWF0Y2ggdGhlIHBhdHRlcm46IFwie3sgcGF0dGVybiB9fVwiLicsXG4gIGVycm9yUHJlZml4SXRlbXM6ICdJdGVtIHt7IGluZGV4IH19IGZhaWxzIHZhbGlkYXRpb24uJyxcbiAgZXJyb3JQcm9wZXJ0eU5hbWVzOiAnUHJvcGVydHkgbmFtZSBcInt7IHByb3BlcnR5TmFtZSB9fVwiIGZhaWxzIHZhbGlkYXRpb24uJyxcbiAgZXJyb3JSZXF1aXJlZDogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczoge3sgcmVxdWlyZWQgfX0uJyxcbiAgZXJyb3JUeXBlOiAnTXVzdCBiZSBvZiB0eXBlIHt7IHR5cGUgfX0uJyxcbiAgZXJyb3JVbmV2YWx1YXRlZFByb3BlcnRpZXM6ICdIYXMgaW52YWxpZCB1bmV2YWx1YXRlZCBwcm9wZXJ0eSBcInt7IHByb3BlcnR5IH19XCInLFxuICBlcnJvclVuaXF1ZUl0ZW1zOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcy4nXG59XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZS5qcydcbmltcG9ydCB7IGlzU2V0LCBjbG9uZSwgaXNBcnJheSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFJdGVtcywgZ2V0U2NoZW1hUHJlZml4SXRlbXMgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEluc3RhbmNlQXJyYXkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUFycmF5IGV4dGVuZHMgSW5zdGFuY2Uge1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBsZXQgc2NoZW1hXG4gICAgY29uc3QgaXRlbXNDb3VudCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgY29uc3Qgc2NoZW1hSXRlbXMgPSBnZXRTY2hlbWFJdGVtcyh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFQcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHRoaXMuc2NoZW1hKVxuICAgIHNjaGVtYSA9IGlzU2V0KHNjaGVtYUl0ZW1zKSA/IHNjaGVtYUl0ZW1zIDoge31cblxuICAgIGNvbnN0IGhhc1ByZWZpeEl0ZW1zU2NoZW1hID0gaXNTZXQoc2NoZW1hUHJlZml4SXRlbXMpICYmIGlzU2V0KHNjaGVtYVByZWZpeEl0ZW1zW2l0ZW1zQ291bnRdKVxuXG4gICAgaWYgKGhhc1ByZWZpeEl0ZW1zU2NoZW1hKSB7XG4gICAgICBzY2hlbWEgPSBzY2hlbWFQcmVmaXhJdGVtc1tpdGVtc0NvdW50XVxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBpdGVtc0NvdW50LFxuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgdmFsdWU6IGNsb25lKHZhbHVlKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VBcnJheVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlQm9vbGVhbiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlQm9vbGVhbiBleHRlbmRzIEluc3RhbmNlIHt9XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlQm9vbGVhblxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UuanMnXG5pbXBvcnQgRWRpdG9ySWZUaGVuRWxzZSBmcm9tICcuLi9lZGl0b3JzL2lmLXRoZW4tZWxzZS5qcydcbmltcG9ydCB7XG4gIGlzU2V0LFxuICBtZXJnZURlZXAsXG4gIGNsb25lLFxuICBpc09iamVjdCxcbiAgb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzXG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFFbHNlLFxuICBnZXRTY2hlbWFJZixcbiAgZ2V0U2NoZW1hVGhlblxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCBKZWRpIGZyb20gJy4uL2plZGkuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlSWZUaGVuRWxzZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlSWZUaGVuRWxzZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9ySWZUaGVuRWxzZSh0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQgPSB0cnVlXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cbiAgICB0aGlzLmlmVGhlbkVsc2VTaGVtYXMgPSBbXVxuXG4gICAgdGhpcy50cmF2ZXJzZVNjaGVtYSh0aGlzLnNjaGVtYSlcblxuICAgIGRlbGV0ZSB0aGlzLnNjaGVtYS5pZlxuICAgIGRlbGV0ZSB0aGlzLnNjaGVtYS50aGVuXG4gICAgZGVsZXRlIHRoaXMuc2NoZW1hLmVsc2VcblxuICAgIGxldCBpbmRleCA9IDBcblxuICAgIHRoaXMuaWZUaGVuRWxzZVNoZW1hcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXNTZXQoaXRlbS50aGVuKSkge1xuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChtZXJnZURlZXAoe30sIGNsb25lKHRoaXMuc2NoZW1hKSwgaXRlbS50aGVuKSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9ICd0aGVuJztcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChvcHRpb25MYWJlbClcbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTZXQoaXRlbS5lbHNlKSkge1xuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChtZXJnZURlZXAoe30sIGNsb25lKHRoaXMuc2NoZW1hKSwgaXRlbS5lbHNlKSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9ICdlbHNlJztcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChvcHRpb25MYWJlbClcbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHRoaXMuc2NoZW1hKVxuICAgIGRlbGV0ZSBzY2hlbWFDbG9uZS5pZlxuICAgIGRlbGV0ZSBzY2hlbWFDbG9uZS50aGVuXG4gICAgZGVsZXRlIHNjaGVtYUNsb25lLmVsc2VcblxuICAgIGNvbnN0IGluc3RhbmNlV2l0aG91dElmID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hQ2xvbmUsXG4gICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgfSlcblxuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgYWZ0ZXJDaGFuZ2VWYWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleChhZnRlckNoYW5nZVZhbHVlKVxuICAgICAgICBjb25zdCBtdXN0U3dpdGNoID0gZml0dGVzdEluZGV4ICE9PSB0aGlzLmluZGV4XG5cbiAgICAgICAgaWYgKG11c3RTd2l0Y2gpIHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKGFmdGVyQ2hhbmdlVmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVCZWZvcmUgPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICAgIGxldCBmdXR1cmVWYWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlQmVmb3JlKSAmJiBpc09iamVjdChmdXR1cmVWYWx1ZSkpIHtcbiAgICAgICAgICBmdXR1cmVWYWx1ZSA9IG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyh2YWx1ZUJlZm9yZSwgZnV0dXJlVmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZShmdXR1cmVWYWx1ZSwgZmFsc2UpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleChuZXdWYWx1ZSlcbiAgICAgIGNvbnN0IG11c3RTd2l0Y2ggPSBmaXR0ZXN0SW5kZXggIT09IHRoaXMuaW5kZXhcblxuICAgICAgaWYgKG11c3RTd2l0Y2gpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgpXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gaW5pdGlhbCB2YWx1ZSBhbmQgYWN0aXZlIGluc3RhbmNlXG4gICAgdGhpcy52YWx1ZSA9IGluc3RhbmNlV2l0aG91dElmLmdldFZhbHVlKClcbiAgICBpbnN0YW5jZVdpdGhvdXRJZi5kZXN0cm95KClcbiAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh0aGlzLnZhbHVlKVxuICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4KVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMuaW5kZXhdXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgfVxuXG4gIHRyYXZlcnNlU2NoZW1hIChzY2hlbWEpIHtcbiAgICBjb25zdCBzY2hlbWFJZiA9IGdldFNjaGVtYUlmKHNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFJZikpIHtcbiAgICAgIGNvbnN0IHNjaGVtYVRoZW4gPSBnZXRTY2hlbWFUaGVuKHNjaGVtYSlcbiAgICAgIGNvbnN0IHNjaGVtYUVsc2UgPSBnZXRTY2hlbWFFbHNlKHNjaGVtYSlcblxuICAgICAgdGhpcy5pZlRoZW5FbHNlU2hlbWFzLnB1c2goe1xuICAgICAgICBpZjogc2NoZW1hSWYsXG4gICAgICAgIHRoZW46IGlzU2V0KHNjaGVtYVRoZW4pID8gc2NoZW1hVGhlbiA6IHt9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLmlmVGhlbkVsc2VTaGVtYXMucHVzaCh7XG4gICAgICAgIGlmOiBzY2hlbWFJZixcbiAgICAgICAgZWxzZTogaXNTZXQoc2NoZW1hRWxzZSkgPyBzY2hlbWFFbHNlIDoge31cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpbnN0YW5jZSB0aGF0IGhhcyBsZXNzIHZhbGlkYXRpb24gZXJyb3JzXG4gICAqL1xuICBnZXRGaXR0ZXN0SW5kZXggKHZhbHVlKSB7XG4gICAgbGV0IGZpdHRlc3RJbmRleCA9IHRoaXMuaW5kZXhcblxuICAgIHRoaXMuaWZUaGVuRWxzZVNoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpZlZhbGlkYXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEuaWYsXG4gICAgICAgIGRhdGE6IHZhbHVlXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBpZkVycm9ycyA9IGlmVmFsaWRhdG9yLmdldEVycm9ycygpXG4gICAgICBpZlZhbGlkYXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCAmJiBzY2hlbWEudGhlbikge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgfVxuXG4gICAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEuZWxzZSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgZ2V0QWxsT2ZDb21iaW5hdGlvbnMgKHNjaGVtYXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXVxuXG4gICAgY29uc3QgY29tYmluZVByb3BlcnRpZXMgPSAoc2NoZW1hMSwgc2NoZW1hMikgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uc2NoZW1hMSwgLi4uc2NoZW1hMiB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVDb21iaW5hdGlvbnMgPSAoY3VycmVudCwgcmVtYWluaW5nKSA9PiB7XG4gICAgICBpZiAocmVtYWluaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXN1bHQucHVzaChjdXJyZW50KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV4dFNjaGVtYSA9IHJlbWFpbmluZ1swXVxuXG4gICAgICBnZW5lcmF0ZUNvbWJpbmF0aW9ucyhjb21iaW5lUHJvcGVydGllcyhjdXJyZW50LCBuZXh0U2NoZW1hKSwgcmVtYWluaW5nLnNsaWNlKDEpKVxuICAgICAgZ2VuZXJhdGVDb21iaW5hdGlvbnMoY3VycmVudCwgcmVtYWluaW5nLnNsaWNlKDEpKVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NoZW1hcy5sZW5ndGg7IGkrKykge1xuICAgICAgZ2VuZXJhdGVDb21iaW5hdGlvbnMoc2NoZW1hc1tpXSwgc2NoZW1hcy5zbGljZShpICsgMSkpXG4gICAgfVxuXG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IE9iamVjdC5rZXlzKGEpLmxlbmd0aCAtIE9iamVjdC5rZXlzKGIpLmxlbmd0aClcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUlmVGhlbkVsc2VcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlci5qcydcbmltcG9ydCB7XG4gIGRpZmZlcmVudCwgZXF1YWwsXG4gIGlzU2V0LCBub3RTZXQsIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXlcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUNvbnN0LFxuICBnZXRTY2hlbWFEZWZhdWx0LFxuICBnZXRTY2hlbWFSZWFkT25seSxcbiAgZ2V0U2NoZW1hVHlwZSwgZ2V0U2NoZW1hWE9wdGlvblxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSlNPTiBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIEplZGkgaW5zdGFuY2UgdG8gd2hpY2ggdGhpcyBpbnN0YW5jZSBiZWxvbmdzLlxuICAgICAqIEB0eXBlIHtKZWRpfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjaGVtYSBwYXRoIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5yb290TmFtZVxuXG4gICAgLyoqXG4gICAgICogQSBKU09OIHNjaGVtYS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcblxuICAgIC8qKlxuICAgICAqIFRoZSBqc29uIHZhbHVlIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHRoaXMudmFsdWUgPSBpc1NldChjb25maWcudmFsdWUpID8gY29uZmlnLnZhbHVlIDogdW5kZWZpbmVkXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aXZlIHN0YXRlIG9mIHRoaXMgaW5zdGFuY2UuIElmIGZhbHNlIHRoZSBlZGl0b3IgaXMgbm90IHBhcnRpY2lwYXRpbmdcbiAgICAgKiBpbiB0aGUgdmFsdWUuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuXG4gICAgLyoqXG4gICAgICogVGhlIFBhcmVudCBpbnN0YW5jZSBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtJbnN0YW5jZXxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcblxuICAgIC8qKlxuICAgICAqIENoaWxkIGluc3RhbmNlcyBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtJbnN0YW5jZVtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWRpdG9yIGNvbnRyb2xsaW5nIHRoaXMgSW5zdGFuY2UgaWYgYW55XG4gICAgICogQHR5cGUge0VkaXRvcnxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy51aSA9IG51bGxcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IEVkaXRvckNsYXNzID0gdGhpcy5qZWRpLnVpUmVzb2x2ZXIuZ2V0Q2xhc3ModGhpcy5zY2hlbWEpXG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JDbGFzcyh0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQncyB0eXBlXG4gICAqL1xuICBzZXRJbml0aWFsVmFsdWUgKCkge1xuICAgIGlmIChub3RTZXQodGhpcy52YWx1ZSkpIHtcbiAgICAgIGxldCB2YWx1ZVxuICAgICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG5cbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICBjb25zdCBzY2hlbWFEZWZhdWx0ID0gZ2V0U2NoZW1hRGVmYXVsdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFEZWZhdWx0KSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShzY2hlbWFEZWZhdWx0LCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGluc3RhbmNlXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICBpZiAodGhpcy5pc1JlYWRPbmx5KCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVuZm9yY2VDb25zdCA9IHRoaXMuamVkaS5vcHRpb25zLmVuZm9yY2VDb25zdCB8fCBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuc2NoZW1hLCAnZW5mb3JjZUNvbnN0JylcblxuICAgIGlmIChpc1NldChlbmZvcmNlQ29uc3QpICYmIGVxdWFsKGVuZm9yY2VDb25zdCwgdHJ1ZSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNvbnN0ID0gZ2V0U2NoZW1hQ29uc3QodGhpcy5zY2hlbWEpXG4gICAgICBpZiAoaXNTZXQoc2NoZW1hQ29uc3QpICYmIGRpZmZlcmVudChuZXdWYWx1ZSwgc2NoZW1hQ29uc3QpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnLCBuZXdWYWx1ZSlcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG5cbiAgICByZXR1cm4gcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheShlcnJvcnMpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgaW5zdGFuY2UgaXMgcmVhZCBvbmx5XG4gICAqL1xuICBpc1JlYWRPbmx5ICgpIHtcbiAgICBsZXQgcmVhZE9ubHkgPSBmYWxzZVxuXG4gICAgaWYgKGdldFNjaGVtYVJlYWRPbmx5KHRoaXMuc2NoZW1hKSA9PT0gdHJ1ZSkge1xuICAgICAgcmVhZE9ubHkgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFyZW50ICYmIGdldFNjaGVtYVJlYWRPbmx5KHRoaXMucGFyZW50LnNjaGVtYSkgPT09IHRydWUpIHtcbiAgICAgIHJlYWRPbmx5ID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiByZWFkT25seVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UuanMnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBub3RTZXQsXG4gIGNsb25lLFxuICBtZXJnZURlZXBcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUFueU9mLFxuICBnZXRTY2hlbWFPbmVPZixcbiAgZ2V0U2NoZW1hVGl0bGUsXG4gIGdldFNjaGVtYVR5cGUsXG4gIGdldFNjaGVtYVhPcHRpb25cbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU11bHRpcGxlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNldFZhbHVlKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpKSB8fCBpc1NldChnZXRTY2hlbWFPbmVPZih0aGlzLnNjaGVtYSkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSBpc1NldChnZXRTY2hlbWFBbnlPZih0aGlzLnNjaGVtYSkpID8gZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpIDogZ2V0U2NoZW1hT25lT2YodGhpcy5zY2hlbWEpXG4gICAgICBjb25zdCBzY2hlbWFDb3B5ID0gY2xvbmUodGhpcy5zY2hlbWEpXG4gICAgICBkZWxldGUgc2NoZW1hQ29weVsnYW55T2YnXVxuICAgICAgZGVsZXRlIHNjaGVtYUNvcHlbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBzY2hlbWFDb3B5WydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5zY2hlbWFDb3B5LCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIGlmICh0aGlzLmplZGkucmVmUGFyc2VyKSB7XG4gICAgICAgICAgc2NoZW1hID0gdGhpcy5qZWRpLnJlZlBhcnNlci5leHBhbmQoc2NoZW1hKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJUaXRsZSA9IGdldFNjaGVtYVhPcHRpb24oc2NoZW1hLCAnc3dpdGNoZXJUaXRsZScpXG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoc2NoZW1hKVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFUaXRsZSkpIHtcbiAgICAgICAgICBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYVRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc3dpdGNoZXJUaXRsZSkpIHtcbiAgICAgICAgICBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHN3aXRjaGVyVGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChzd2l0Y2hlck9wdGlvbnNMYWJlbClcbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoc2NoZW1hVHlwZSkpIHtcbiAgICAgIHNjaGVtYVR5cGUuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBtZXJnZURlZXAodGhpcy5zY2hlbWEpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdhbnknIHx8ICFzY2hlbWFUeXBlKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHRoaXMuc2NoZW1hKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdPYmplY3QnLCAnQXJyYXknLCAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgICAgdmFsdWU6IGNsb25lKHRoaXMudmFsdWUpXG4gICAgICB9KVxuXG4gICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy52YWx1ZSwgZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vZmYoJ2NoYW5nZScpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHRoaXMudmFsdWUpXG4gICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIHRoaXMudmFsdWUpXG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAoaW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW2luZGV4XVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCkpXG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdGhpcy52YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHRoaXMudmFsdWUpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleCwgdGhpcy52YWx1ZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGluc3RhbmNlIHRoYXQgaGFzIGxlc3MgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICovXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VNdWx0aXBsZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTnVsbCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTnVsbCBleHRlbmRzIEluc3RhbmNlIHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VOdWxsXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VOdW1iZXIgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU51bWJlciBleHRlbmRzIEluc3RhbmNlIHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VOdW1iZXJcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlLmpzJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBpc09iamVjdCwgaGFzT3duLCBjbG9uZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQsXG4gIGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFQcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFSZXF1aXJlZCxcbiAgZ2V0U2NoZW1hWE9wdGlvblxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEluc3RhbmNlT2JqZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VPYmplY3QgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHt9XG4gICAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXModGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hUHJvcGVydGllcykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYVByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBzY2hlbWFQcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW2tleV0gPSB7IHNjaGVtYSB9XG5cbiAgICAgICAgbGV0IG11c3N0Q3JlYXRlQ2hpbGQgPSB0cnVlXG5cbiAgICAgICAgY29uc3Qgb3B0aW9uc0RlYWN0aXZhdGVOb25SZXF1aXJlZCA9IHRoaXMuamVkaS5vcHRpb25zLmRlYWN0aXZhdGVOb25SZXF1aXJlZFxuICAgICAgICBjb25zdCBkZWFjdGl2YXRlTm9uUmVxdWlyZWQgPSBnZXRTY2hlbWFYT3B0aW9uKHRoaXMuc2NoZW1hLCAnZGVhY3RpdmF0ZU5vblJlcXVpcmVkJylcbiAgICAgICAgY29uc3Qgc2NoZW1hRGVhY3RpdmF0ZU5vblJlcXVpcmVkID0gZ2V0U2NoZW1hWE9wdGlvbihzY2hlbWEsICdkZWFjdGl2YXRlTm9uUmVxdWlyZWQnKVxuXG4gICAgICAgIGlmICh0aGlzLmlzTm90UmVxdWlyZWQoa2V5KSAmJiBpc1NldChvcHRpb25zRGVhY3RpdmF0ZU5vblJlcXVpcmVkKSAmJiBvcHRpb25zRGVhY3RpdmF0ZU5vblJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgbXVzc3RDcmVhdGVDaGlsZCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc05vdFJlcXVpcmVkKGtleSkgJiYgaXNTZXQoZGVhY3RpdmF0ZU5vblJlcXVpcmVkKSAmJiBkZWFjdGl2YXRlTm9uUmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBtdXNzdENyZWF0ZUNoaWxkID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzTm90UmVxdWlyZWQoa2V5KSAmJiBpc1NldChzY2hlbWFEZWFjdGl2YXRlTm9uUmVxdWlyZWQpICYmIHNjaGVtYURlYWN0aXZhdGVOb25SZXF1aXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG11c3N0Q3JlYXRlQ2hpbGQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG11c3N0Q3JlYXRlQ2hpbGQpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBzY2hlbWFSZXF1aXJlZCA9IGdldFNjaGVtYVJlcXVpcmVkKHRoaXMuc2NoZW1hKVxuXG4gICAgcmV0dXJuIGlzU2V0KHNjaGVtYVJlcXVpcmVkKSAmJiBzY2hlbWFSZXF1aXJlZC5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkKHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSwgdmFsdWUsIGFjdGl2YXRlID0gZmFsc2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgdmFsdWU6IGNsb25lKHZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgZGVhY3RpdmF0ZU5vblJlcXVpcmVkID0gdGhpcy5qZWRpLm9wdGlvbnMuZGVhY3RpdmF0ZU5vblJlcXVpcmVkIHx8IGdldFNjaGVtYVhPcHRpb24odGhpcy5zY2hlbWEsICdkZWFjdGl2YXRlTm9uUmVxdWlyZWQnKVxuXG4gICAgaWYgKHRoaXMuaXNOb3RSZXF1aXJlZChrZXkpICYmIGlzU2V0KGRlYWN0aXZhdGVOb25SZXF1aXJlZCkgJiYgZGVhY3RpdmF0ZU5vblJlcXVpcmVkID09PSB0cnVlICYmICFhY3RpdmF0ZSkge1xuICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBpc05vdFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhdGhpcy5pc1JlcXVpcmVkKHByb3BlcnR5KSAmJiAhdGhpcy5pc0RlcGVuZGVudFJlcXVpcmVkKHByb3BlcnR5KVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIGdldFByb3BlcnR5U2NoZW1hIChwcm9wZXJ0eU5hbWUpIHtcbiAgICBsZXQgc2NoZW1hXG4gICAgY29uc3Qgc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUHJvcGVydGllcyh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHRoaXMuc2NoZW1hKVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBhcHByb3ByaWF0ZSBzY2hlbWFcbiAgICBpZiAoaXNTZXQoc2NoZW1hUHJvcGVydGllcykgJiYgaGFzT3duKHNjaGVtYVByb3BlcnRpZXMsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgIC8vIElmIHRoZSBwcm9wZXJ0eU5hbWUgaXMgZXhwbGljaXRseSBkZWZpbmVkIGluIGBwcm9wZXJ0aWVzYCwgdXNlIGl0XG4gICAgICBzY2hlbWEgPSBzY2hlbWFQcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV1cbiAgICB9IGVsc2UgaWYgKGlzU2V0KHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgLy8gSWYgbm8gZXhhY3QgbWF0Y2ggaW4gYHByb3BlcnRpZXNgLCBjaGVjayBpZiBpdCBtYXRjaGVzIGFueSBwYXR0ZXJuIGluIGBwYXR0ZXJuUHJvcGVydGllc2BcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBzY2hlbWEgPSBzY2hlbWFQYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChub3RTZXQoc2NoZW1hKSAmJiBpc1NldChzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgIC8vIElmIG5vIG1hdGNoIHdhcyBmb3VuZCBpbiBgcHJvcGVydGllc2Agb3IgYHBhdHRlcm5Qcm9wZXJ0aWVzYCwgdXNlIGBhZGRpdGlvbmFsUHJvcGVydGllc2BcbiAgICAgIHNjaGVtYSA9IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgaWYgKG5vdFNldChzY2hlbWEpKSB7XG4gICAgICBzY2hlbWEgPSB7fVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKHByb3BlcnR5TmFtZSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5nZXRQcm9wZXJ0eVNjaGVtYShwcm9wZXJ0eU5hbWUpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIHByb3BlcnR5TmFtZSwgdmFsdWVbcHJvcGVydHlOYW1lXSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVbcHJvcGVydHlOYW1lXSkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQocHJvcGVydHlOYW1lKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlT2JqZWN0XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZVN0cmluZyBleHRlbmRzIEluc3RhbmNlIHt9XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlU3RyaW5nXG4iLCJpbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0b3IuanMnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcydcbmltcG9ydCBJbnN0YW5jZUlmVGhlbkVsc2UgZnJvbSAnLi9pbnN0YW5jZXMvaWYtdGhlbi1lbHNlLmpzJ1xuaW1wb3J0IEluc3RhbmNlTXVsdGlwbGUgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUuanMnXG5pbXBvcnQgSW5zdGFuY2VCb29sZWFuIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4uanMnXG5pbXBvcnQgSW5zdGFuY2VPYmplY3QgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0LmpzJ1xuaW1wb3J0IEluc3RhbmNlQXJyYXkgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXkuanMnXG5pbXBvcnQgSW5zdGFuY2VTdHJpbmcgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nLmpzJ1xuaW1wb3J0IEluc3RhbmNlTnVtYmVyIGZyb20gJy4vaW5zdGFuY2VzL251bWJlci5qcydcbmltcG9ydCBJbnN0YW5jZU51bGwgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbC5qcydcbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzU2V0LCBtZXJnZURlZXAsXG4gIG5vdFNldFxufSBmcm9tICcuL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBbGxPZixcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYUVsc2UsXG4gIGdldFNjaGVtYUlmLFxuICBnZXRTY2hlbWFPbmVPZixcbiAgZ2V0U2NoZW1hVGhlbixcbiAgZ2V0U2NoZW1hVHlwZSxcbiAgZ2V0U2NoZW1hWE9wdGlvblxufSBmcm9tICcuL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgYm9vdHN0cmFwSWNvbnMsIGZvbnRBd2Vzb21lMywgZm9udEF3ZXNvbWU0LCBmb250QXdlc29tZTUsIGZvbnRBd2Vzb21lNiwgZ2x5cGhpY29ucyB9IGZyb20gJy4vdGhlbWVzL2ljb25zL2ljb25zLmpzJ1xuaW1wb3J0IFVpUmVzb2x2ZXIgZnJvbSAnLi91aS1yZXNvbHZlci5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSmVkaSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgSmVkaSBpbnN0YW5jZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge29iamVjdHxib29sZWFufSBvcHRpb25zLnNjaGVtYSAtIEEgSlNPTiBzY2hlbWFcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNvbnRhaW5lciAtIFdoZXJlIHRoZSBVSSBjb250cm9scyB3aWxsIGJlIHJlbmRlcmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaWNvbkxpYjogbnVsbCxcbiAgICAgIHRoZW1lOiBudWxsLFxuICAgICAgcmVmUGFyc2VyOiBudWxsLFxuICAgICAgZW5hYmxlUHJvcGVydGllc1RvZ2dsZTogZmFsc2UsXG4gICAgICBlbmFibGVDb2xsYXBzZVRvZ2dsZTogZmFsc2UsXG4gICAgICBzdGFydENvbGxhcHNlZDogZmFsc2UsXG4gICAgICBkZWFjdGl2YXRlTm9uUmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHNob3dFcnJvcnM6ICdjaGFuZ2UnLFxuICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgdmFsaWRhdGVGb3JtYXQ6IGZhbHNlLFxuICAgICAgbWVyZ2VBbGxPZjogZmFsc2UsXG4gICAgICBlbmZvcmNlQ29uc3Q6IGZhbHNlLFxuICAgICAgY3VzdG9tRWRpdG9yczogW11cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgLyoqXG4gICAgICogUm9vdHMgc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucm9vdE5hbWUgPSAnIydcblxuICAgIC8qKlxuICAgICAqIFNlcGFyYXRvciBzeW1ib2wgdXNlZCBpbiBwYXRoc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wYXRoU2VwYXJhdG9yID0gJy8nXG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIHJlZ2lzdGVyZWQgaW5zdGFuY2VzXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm9vdCBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SmVkaX1cbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVmFsaWRhdG9yIGluc3RhbmNlIHVzZWQgdG8gdmFsaWRhdGUgaW5zdGFuY2UgdmFsdWVzXG4gICAgICogQHR5cGUge1ZhbGlkYXRvcn1cbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRvciA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEganNvbiBzY2hlbWEgdXNlZFxuICAgICAqIEB0eXBlIHsqfVxuICAgICAqL1xuICAgIHRoaXMuc2NoZW1hID0ge31cblxuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICB0aGlzLnVpUmVzb2x2ZXIgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBBIFJlZlBhcnNlciBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHtSZWZQYXJzZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZWZQYXJzZXIgPSB0aGlzLm9wdGlvbnMucmVmUGFyc2VyID8gdGhpcy5vcHRpb25zLnJlZlBhcnNlciA6IG51bGxcblxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMudWlSZXNvbHZlciA9IG5ldyBVaVJlc29sdmVyKHtcbiAgICAgIGN1c3RvbUVkaXRvcnM6IHRoaXMub3B0aW9ucy5jdXN0b21FZGl0b3JzXG4gICAgfSlcblxuICAgIHRoaXMudGhlbWUgPSB0aGlzLm9wdGlvbnMudGhlbWVcblxuICAgIGlmIChpc1NldCh0aGlzLm9wdGlvbnMuaWNvbkxpYikpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25MaWIpIHtcbiAgICAgICAgY2FzZSAnZ2x5cGhpY29ucyc6XG4gICAgICAgICAgdGhpcy50aGVtZS5pY29ucyA9IGdseXBoaWNvbnNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdib290c3RyYXAtaWNvbnMnOlxuICAgICAgICAgIHRoaXMudGhlbWUuaWNvbnMgPSBib290c3RyYXBJY29uc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lMyc6XG4gICAgICAgICAgdGhpcy50aGVtZS5pY29ucyA9IGZvbnRBd2Vzb21lM1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNCc6XG4gICAgICAgICAgdGhpcy50aGVtZS5pY29ucyA9IGZvbnRBd2Vzb21lNFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNSc6XG4gICAgICAgICAgdGhpcy50aGVtZS5pY29ucyA9IGZvbnRBd2Vzb21lNVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNic6XG4gICAgICAgICAgdGhpcy50aGVtZS5pY29ucyA9IGZvbnRBd2Vzb21lNlxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWEgPSB0aGlzLm9wdGlvbnMuc2NoZW1hXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKHsgcmVmUGFyc2VyOiB0aGlzLnJlZlBhcnNlciwgdmFsaWRhdGVGb3JtYXQ6IHRoaXMub3B0aW9ucy52YWxpZGF0ZUZvcm1hdCB9KVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLm9wdGlvbnMuc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5yb290TmFtZVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLmRhdGEpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLmRhdGEsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgYmluZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oaWRkZW5JbnB1dCkge1xuICAgICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvc2UgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgY29uc3QgaGlkZGVuQ29udHJvbCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG5cbiAgICB0aGlzLmhpZGRlbklucHV0ID0gaGlkZGVuQ29udHJvbC5pbnB1dFxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuICAgIHRoaXMuaGlkZGVuSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGpzb24gaW5zdGFuY2UgYW5kIGRlcmVmZXJlbmNlIHNjaGVtYSBvbiB0aGUgZmx5IGlmIG5lZWRlZC5cbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBjb25zdCBtZXJnZUFsbE9mID0gdGhpcy5vcHRpb25zLm1lcmdlQWxsT2YgfHwgZ2V0U2NoZW1hWE9wdGlvbihjb25maWcuc2NoZW1hLCAnbWVyZ2VBbGxPZicpXG5cbiAgICBpZiAobWVyZ2VBbGxPZikge1xuICAgICAgY29uc3QgYWxsT2YgPSBnZXRTY2hlbWFBbGxPZihjb25maWcuc2NoZW1hKVxuXG4gICAgICBpZiAoaXNTZXQoYWxsT2YpKSB7XG4gICAgICAgIGFsbE9mLmZvckVhY2goKHN1YnNjaGVtYSkgPT4ge1xuICAgICAgICAgIGNvbmZpZy5zY2hlbWEgPSBtZXJnZURlZXAoe30sIGNvbmZpZy5zY2hlbWEsIHN1YnNjaGVtYSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWZQYXJzZXIpIHtcbiAgICAgIGNvbmZpZy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5leHBhbmQoY29uZmlnLnNjaGVtYSwgY29uZmlnLnBhdGgpXG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPbmVPZiA9IGdldFNjaGVtYU9uZU9mKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hQW55T2YgPSBnZXRTY2hlbWFBbnlPZihjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUlmID0gZ2V0U2NoZW1hSWYoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFUaGVuID0gZ2V0U2NoZW1hVGhlbihjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVsc2UgPSBnZXRTY2hlbWFFbHNlKGNvbmZpZy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hQW55T2YpIHx8IGlzU2V0KHNjaGVtYU9uZU9mKSB8fCBzY2hlbWFUeXBlID09PSAnYW55JyB8fCBpc0FycmF5KHNjaGVtYVR5cGUpIHx8IG5vdFNldChzY2hlbWFUeXBlKSkge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU11bHRpcGxlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hSWYpICYmIChpc1NldChzY2hlbWFUaGVuKSB8fCBpc1NldChzY2hlbWFFbHNlKSkpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VJZlRoZW5FbHNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VPYmplY3QoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlQXJyYXkoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZVN0cmluZyhjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU51bWJlcihjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZUJvb2xlYW4oY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VOdWxsKGNvbmZpZylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uaW5zdGFuY2UuZ2V0RXJyb3JzKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiIsImltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnJlZnMgPSB7fVxuICAgIHRoaXMuZGF0YSA9IHt9XG4gIH1cblxuICBhc3luYyBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgYXdhaXQgdGhpcy5jb2xsZWN0UmVmcyhzY2hlbWEpXG5cbiAgICB3aGlsZSAodGhpcy5yZWZzUmVzb2x2ZWQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIGF3YWl0IHRoaXMuY29sbGVjdFJlZnMoc2NoZW1hKVxuICAgIH1cbiAgfVxuXG4gIHJlZnNSZXNvbHZlZCAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5yZWZzKS5ldmVyeSgodmFsdWUpID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVHJhdmVyc2VzIHRoZSBnaXZlbiBzY2hlbWEgcmVjdXJzaXZlbHkgYW5kIGZvciBlYWNoIHNjaGVtYSB3aXRoICRyZWZcbiAgICogYWRkIGEgbmV3IHByb3BlcnR5IGluIHRoZSB0aGlzLnJlZnMgb2JqZWN0IHdpdGgga2V5IGJlaW5nIHRoZSBqc29uIHBhdGggdG8gdGhhdCBzY2hlbWEuXG4gICAqIElmIHRoZSByZWYgaGFzIG5vIHZhbHVlIGluIGRhdGEgd2lsbCBiZSBnaXZlbiBhIHZhbHVlIG9mIG51bGwuIFRoaXMgdmFsdWUgd2lsbCBiZSBsYXRlclxuICAgKiByZXBsYWNlZCBpbiBhIGZ1dHVyZSBpdGVyYXRpb24uIEF0IHRoYXQgdGltZSB0aGUgZGF0YSB3aWxsIGJlIGF2YWlsYWJsZVxuICAgKiBAcGFyYW0gc2NoZW1hXG4gICAqIEBwYXJhbSBwYXRoXG4gICAqL1xuICBhc3luYyBjb2xsZWN0UmVmcyAoc2NoZW1hLCBwYXRoID0gJyMnKSB7XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEgIT09ICdvYmplY3QnIHx8IHNjaGVtYSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc2NoZW1hKSkge1xuICAgICAgY29uc3QgbmV4dFBhdGggPSBwYXRoID8gYCR7cGF0aH0vJHtrZXl9YCA6IGAvJHtrZXl9YFxuXG4gICAgICBpZiAodGhpcy5oYXNSZWYoc2NoZW1hKSkge1xuICAgICAgICBjb25zdCByZWYgPSBzY2hlbWFbJyRyZWYnXVxuXG4gICAgICAgIGlmICh0aGlzLmlzRXh0ZXJuYWxSZWYocmVmKSkge1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVkU2NoZW1hID0gYXdhaXQgdGhpcy5sb2FkKHJlZilcbiAgICAgICAgICB0aGlzLnJlZnNbcmVmXSA9IHJlc29sdmVkU2NoZW1hXG4gICAgICAgICAgYXdhaXQgdGhpcy5jb2xsZWN0UmVmcyhyZXNvbHZlZFNjaGVtYSwgbmV4dFBhdGgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZWZzW3JlZl0gPSB0aGlzLmRhdGFbcmVmXSA/PyBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhW3BhdGhdID0gc2NoZW1hXG5cbiAgICAgIGF3YWl0IHRoaXMuY29sbGVjdFJlZnModmFsdWUsIG5leHRQYXRoKVxuICAgIH1cbiAgfVxuXG4gIGhhc1JlZiAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzY2hlbWFbJyRyZWYnXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNjaGVtYVsnJHJlZiddID09PSAnc3RyaW5nJ1xuICB9XG5cbiAgaXNFeHRlcm5hbFJlZiAocmVmKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCByZWYuc3RhcnRzV2l0aCgnaHR0cHMnKVxuICB9XG5cbiAgaXNPYmplY3QgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbiAgfVxuXG4gIGV4cGFuZCAoc2NoZW1hKSB7XG4gICAgY29uc3QgY2xvbmVTY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNjaGVtYSkpXG5cbiAgICBpZiAodGhpcy5pc09iamVjdChjbG9uZVNjaGVtYSkgJiYgdGhpcy5oYXNSZWYoY2xvbmVTY2hlbWEpKSB7XG4gICAgICBjb25zdCByZWYgPSBjbG9uZVNjaGVtYS4kcmVmXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJyRyZWYnXVxuICAgICAgcmV0dXJuIHRoaXMuZXhwYW5kKG1lcmdlRGVlcCh7fSwgdGhpcy5yZWZzW3JlZl0sIGNsb25lU2NoZW1hKSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVTY2hlbWFcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIHNjaGVtYSB3aXRoIGEgc3luY2hyb25vdXMgaHR0cCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmlcbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIGFzeW5jIGxvYWQgKHVyaSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSlcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nJywgdXJpLCBlcnJvcilcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwMyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwMyBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0QWRkUHJvcGVydHlCdXR0b24gKCkge1xuICAgIGNvbnN0IGJ0biA9IHN1cGVyLmdldEFkZFByb3BlcnR5QnV0dG9uKClcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLXByaW1hcnknKVxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tYmxvY2snKVxuICAgIHJldHVybiBidG5cbiAgfVxuXG4gIGdldENvbGxhcHNlVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBzdXBlci5nZXRDb2xsYXBzZVRvZ2dsZShjb25maWcpXG4gICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGNvbmZpZy5jb2xsYXBzZUlkKVxuICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICByZXR1cm4gdG9nZ2xlXG4gIH1cblxuICBnZXRDb2xsYXBzZSAoY29uZmlnKSB7XG4gICAgY29uc3QgY29sbGFwc2UgPSBzdXBlci5nZXRDb2xsYXBzZShjb25maWcpXG4gICAgY29sbGFwc2UuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuXG4gICAgaWYgKCFjb25maWcuc3RhcnRDb2xsYXBzZWQpIHtcbiAgICAgIGNvbGxhcHNlLmNsYXNzTGlzdC5hZGQoJ2luJylcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGFwc2VcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdwYW5lbCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgncGFuZWwtZGVmYXVsdCcpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2g1JylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3B1bGwtbGVmdCcpXG4gICAgbGVnZW5kLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWFyZ2luOiAwOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7JylcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWxPYmogPSBzdXBlci5nZXRMYWJlbChjb25maWcpXG5cbiAgICBpZiAobGFiZWxPYmouaWNvbi5jbGFzc0xpc3QpIHtcbiAgICAgIGxhYmVsT2JqLmljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXJnaW4tcmlnaHQ6IDVweDsnKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbE9ialxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncGFuZWwnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncGFuZWwtZGVmYXVsdCcpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGhlYWRlciA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndGV4dC1yaWdodCcpXG4gICAgcmV0dXJuIGhlYWRlclxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICBodG1sLnN0eWxlLmNsZWFyID0gJ2JvdGgnXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4teHMnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWRlZmF1bHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgYm9keSwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxuXG4gICAgICBib2R5LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC1vZmZzZXQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1zdGFja2VkJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXN0YWNrZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbicpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgdmlzdWFsbHlIaWRkZW4gKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICB9XG5cbiAgdmlzdWFsbHlWaXNpYmxlIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzci1vbmx5JylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDNcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lLmpzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gZmFsc2VcbiAgfVxuXG4gIGdldEFkZFByb3BlcnR5QnV0dG9uICgpIHtcbiAgICBjb25zdCBidG4gPSBzdXBlci5nZXRBZGRQcm9wZXJ0eUJ1dHRvbigpXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1wcmltYXJ5JylcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLWJsb2NrJylcbiAgICByZXR1cm4gYnRuXG4gIH1cblxuICBnZXRDb2xsYXBzZVRvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gc3VwZXIuZ2V0Q29sbGFwc2VUb2dnbGUoY29uZmlnKVxuICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBjb25maWcuY29sbGFwc2VJZClcbiAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgcmV0dXJuIHRvZ2dsZVxuICB9XG5cbiAgZ2V0Q29sbGFwc2UgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbGxhcHNlID0gc3VwZXIuZ2V0Q29sbGFwc2UoY29uZmlnKVxuICAgIGNvbGxhcHNlLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcblxuICAgIGlmICghY29uZmlnLnN0YXJ0Q29sbGFwc2VkKSB7XG4gICAgICBjb2xsYXBzZS5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGFwc2VcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnaDYnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnZmxvYXQtbGVmdCcpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3B5LTInKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbE9iaiA9IHN1cGVyLmdldExhYmVsKGNvbmZpZylcblxuICAgIGlmIChsYWJlbE9iai5pY29uLmNsYXNzTGlzdCkge1xuICAgICAgbGFiZWxPYmouaWNvbi5jbGFzc0xpc3QuYWRkKCdtci0xJylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxPYmpcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtZW5kJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGItMCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcudGl0bGVIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBib2R5LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBib2R5LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29sdW1uQ2xhc3MgKHNpemUsIGNvbHMpIHtcbiAgICByZXR1cm4gJ2NvbC0nICsgc2l6ZSArICctJyArIGNvbHNcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIHZpc3VhbGx5SGlkZGVuIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgfVxuXG4gIHZpc3VhbGx5VmlzaWJsZSAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3Itb25seScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA0XG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZS5qcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXA1IGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWUge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IGZhbHNlXG4gIH1cblxuICBnZXRBZGRQcm9wZXJ0eUJ1dHRvbiAoKSB7XG4gICAgY29uc3QgYnRuID0gc3VwZXIuZ2V0QWRkUHJvcGVydHlCdXR0b24oKVxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tcHJpbWFyeScpXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3ctMTAwJylcbiAgICByZXR1cm4gYnRuXG4gIH1cblxuICBnZXRDb2xsYXBzZVRvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gc3VwZXIuZ2V0Q29sbGFwc2VUb2dnbGUoY29uZmlnKVxuICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBjb25maWcuY29sbGFwc2VJZClcbiAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgcmV0dXJuIHRvZ2dsZVxuICB9XG5cbiAgZ2V0Q29sbGFwc2UgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbGxhcHNlID0gc3VwZXIuZ2V0Q29sbGFwc2UoY29uZmlnKVxuICAgIGNvbGxhcHNlLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcblxuICAgIGlmICghY29uZmlnLnN0YXJ0Q29sbGFwc2VkKSB7XG4gICAgICBjb2xsYXBzZS5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGFwc2VcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnaDYnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgncHktMicpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsT2JqID0gc3VwZXIuZ2V0TGFiZWwoY29uZmlnKVxuXG4gICAgaWYgKGxhYmVsT2JqLmljb24uY2xhc3NMaXN0KSB7XG4gICAgICBsYWJlbE9iai5pY29uLmNsYXNzTGlzdC5hZGQoJ21lLTEnKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbE9ialxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1lbmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnRpdGxlSGlkZGVuKSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGJvZHksIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIHZpc3VhbGx5SGlkZGVuIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICB9XG5cbiAgdmlzdWFsbHlWaXNpYmxlIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseS1oaWRkZW4nKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiZXhwb3J0IGNvbnN0IGdseXBoaWNvbnMgPSB7XG4gIHByb3BlcnRpZXM6ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QnLFxuICBkZWxldGU6ICdnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoJyxcbiAgYWRkOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzJyxcbiAgbW92ZVVwOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1kb3duJyxcbiAgY29sbGFwc2U6ICdnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93bicsXG4gIGRyYWc6ICdnbHlwaGljb24gZ2x5cGhpY29uLXRoJ1xufVxuXG5leHBvcnQgY29uc3QgYm9vdHN0cmFwSWNvbnMgPSB7XG4gIHByb3BlcnRpZXM6ICdiaSBiaS1jYXJkLWxpc3QnLFxuICBkZWxldGU6ICdiaSBiaS10cmFzaDInLFxuICBhZGQ6ICdiaSBiaS1wbHVzJyxcbiAgbW92ZVVwOiAnYmkgYmktYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2JpIGJpLWFycm93LWRvd24nLFxuICBjb2xsYXBzZTogJ2JpIGJpLWNoZXZyb24tZG93bicsXG4gIGRyYWc6ICdiaSBiaS1ncmlwLXZlcnRpY2FsJ1xufVxuXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWUzID0ge1xuICBwcm9wZXJ0aWVzOiAnaWNvbi1saXN0JyxcbiAgZGVsZXRlOiAnaWNvbi10cmFzaCcsXG4gIGFkZDogJ2ljb24tcGx1cycsXG4gIG1vdmVVcDogJ2ljb24tYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ljb24tYXJyb3ctZG93bicsXG4gIGNvbGxhcHNlOiAnaWNvbi1jaGV2cm9uLWRvd24nLFxuICBkcmFnOiAnaWNvbi10aCdcbn1cblxuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNCA9IHtcbiAgcHJvcGVydGllczogJ2ZhIGZhLWxpc3QnLFxuICBkZWxldGU6ICdmYSBmYS10cmFzaC1vJyxcbiAgYWRkOiAnZmEgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYSBmYS1hcnJvdy1kb3duJyxcbiAgY29sbGFwc2U6ICdmYSBmYS1jaGV2cm9uLWRvd24nLFxuICBkcmFnOiAnZmEgZmEtdGgnXG59XG5cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTUgPSB7XG4gIHByb3BlcnRpZXM6ICdmYXMgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhcyBmYS10cmFzaCcsXG4gIGFkZDogJ2ZhcyBmYS1wbHVzJyxcbiAgbW92ZVVwOiAnZmFzIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYXMgZmEtYXJyb3ctZG93bicsXG4gIGNvbGxhcHNlOiAnZmFzIGZhLWNoZXZyb24tZG93bicsXG4gIGRyYWc6ICdmYXMgZmEtZ3JpcC12ZXJ0aWNhbCdcbn1cblxuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNiA9IHtcbiAgcHJvcGVydGllczogJ2ZhLXNvbGlkIGZhLWxpc3QnLFxuICBkZWxldGU6ICdmYS1zb2xpZCBmYS10cmFzaCcsXG4gIGFkZDogJ2ZhLXNvbGlkIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYS1zb2xpZCBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmEtc29saWQgZmEtYXJyb3ctZG93bicsXG4gIGNvbGxhcHNlOiAnZmEtc29saWQgZmEtY2hldnJvbi1kb3duJyxcbiAgZHJhZzogJ2ZhLXNvbGlkIGZhLWdyaXAtdmVydGljYWwnXG59XG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVGhlbWUge1xuICBjb25zdHJ1Y3RvciAoaWNvbnMgPSBudWxsKSB7XG4gICAgdGhpcy5pY29ucyA9IGljb25zXG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSB0cnVlXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0cyBzb21lIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gd3JhcCB0aGUgZWRpdG9yIFVJIGVsZW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZ3JvdXAgc2V2ZXJhbCBjb250cm9sc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1maWVsZHNldCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgY2FwdGlvbiBmb3IgdGhlIGNvbnRlbnQgb2YgaXRzIHBhcmVudCBmaWVsZHNldFxuICAgKi9cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGNvbnN0IGxlZ2VuZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItbGVnZW5kJylcbiAgICBsZWdlbmRUZXh0LmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWxlZ2VuZC10ZXh0JylcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCAnI2xlZ2VuZC0nICsgY29uZmlnLmlkKVxuICAgIGxlZ2VuZFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBsZWdlbmRUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnI2xlZ2VuZC0nICsgY29uZmlnLmlkKVxuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChsZWdlbmRUZXh0KVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgY2FwdGlvbiBmb3IgdGhlIGNvbnRlbnQgb2YgaXRzIHBhcmVudCBmaWVsZHNldFxuICAgKi9cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcblxuICAgIGNvbnN0IGljb24gPSB0aGlzLmdldEljb24oY29uZmlnLmxhYmVsSWNvbkNsYXNzKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRleHRcblxuICAgIGlmIChjb25maWcudmlzdWFsbHlIaWRkZW4pIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnamVkaS10aXRsZScpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaWNvbilcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBsYWJlbCwgbGFiZWxUZXh0LCBpY29uIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaWNvbiBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJY29uIChjbGFzc2VzID0gJycpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgbGV0IGljb25DbGFzc2VzID0gY2xhc3Nlcy5zcGxpdCgnICcpXG4gICAgaWNvbkNsYXNzZXMgPSBpY29uQ2xhc3Nlcy5maWx0ZXIoKGNsYXNzTmFtZSkgPT4gY2xhc3NOYW1lLmxlbmd0aCA+IDApXG5cbiAgICBpZiAoaWNvbkNsYXNzZXMpIHtcbiAgICAgIGljb25DbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaWNvblxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgY29tcGxleCBlZGl0b3JzIGxpa2UgYXJyYXlzLCBvYmplY3RzIGFuZCBtdWx0aXBsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jYXJkJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEhlYWRlciBmb3IgY2FyZHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENhcmRIZWFkZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY2FyZC1oZWFkZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQSBib2R5IGZvciB0aGUgY2FyZHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgYWN0aW9ucyBidXR0b25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgYXJyYXkgc3BlY2lmaWMgYWN0aW9ucyBidXR0b25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBjaGlsZCBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZHJlbi1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNZXNzYWdlc1Nsb3QgKGNvbmZpZyA9IHt9KSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdhcmlhLWF0b21pYycsICdmYWxzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIH1cblxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZWRpdG9yIGNvbnRyb2xzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBPYmplY3RFZGl0b3IgcHJvcGVydGllcyB3cmFwcGVyIHZpc2liaWxpdHlcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG5cbiAgICAvLyBpZiAodGhpcy51c2VUb2dnbGVFdmVudHMpIHtcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIub3Blbikge1xuICAgICAgICBjb25maWcucHJvcGVydGllc0NvbnRhaW5lci5jbG9zZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcucHJvcGVydGllc0NvbnRhaW5lci5zaG93TW9kYWwoKVxuICAgICAgfVxuICAgIH0pXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHRvZ2dsZVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciB0aGF0IHdpbGwgY29sbGFwc2UgYW5kIGV4cGFuZCB0byBzaG93IGFuZCBoaWRlIGl0IGNvbnRlbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDb2xsYXBzZSAoY29uZmlnKSB7XG4gICAgY29uc3QgY29sbGFwc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbGxhcHNlLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sbGFwc2UnKVxuICAgIGNvbGxhcHNlLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBpZiAodGhpcy51c2VUb2dnbGVFdmVudHMgJiYgY29uZmlnLnN0YXJ0Q29sbGFwc2VkKSB7XG4gICAgICBjb2xsYXBzZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxhcHNlXG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGJ1dHRvbiBmb3IgY29sbGFwc2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbGxhcHNlVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCB0b2dnbGUgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sbGFwc2UtdG9nZ2xlJylcblxuICAgIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cykge1xuICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY29uZmlnLmNvbGxhcHNlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGNvbmZpZy5jb2xsYXBzZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbmZpZy5jb2xsYXBzZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IGNvbGxhcHNlZCA9IGNvbmZpZy5zdGFydENvbGxhcHNlZFxuXG4gICAgdG9nZ2xlLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDAuMXMgZWFzZSdcblxuICAgIGlmIChjb2xsYXBzZWQpIHtcbiAgICAgIHRvZ2dsZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSdcbiAgICB9XG5cbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY29sbGFwc2VkKSB7XG4gICAgICAgIHRvZ2dsZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9nZ2xlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJ1xuICAgICAgfVxuXG4gICAgICBjb2xsYXBzZWQgPSAhY29sbGFwc2VkXG4gICAgfSlcblxuICAgIHJldHVybiB0b2dnbGVcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWluZXIgZm9yIHByb3BlcnRpZXMgZWRpdGluZyBlbGVtZW50cyBsaWtlIHByb3BlcnR5IGFjdGl2YXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGh0bWwpIHtcbiAgICAgICAgaHRtbC5jbG9zZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBzY3JlZW4gcmVhZGVyIGFubm91bmNlZCBtZXNzYWdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc0FyaWFMaXZlICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1hcmlhLWxpdmUnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3N0YXR1cycpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQSBtZXNzYWdlIHRoYXQgd2lsbCBiZSBhbm5vdW5jZWQgYnkgc2NyZWVuIHJlYWRlclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJpYUxpdmVNZXNzYWdlIChtZXNzYWdlKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcmlhLWxpdmUtbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IG1lc3NhZ2VcbiAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGh0bWwpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBwcm9wZXJ0eSBhY3RpdmF0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtYWN0aXZhdG9ycycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWJ0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdqZWRpLWJ0bicpXG5cbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG5cbiAgICBpZiAoY29uZmlnLnZhbHVlKSB7XG4gICAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKHRoaXMuaWNvbnMgJiYgY29uZmlnLmljb24pIHtcbiAgICAgIGNvbnN0IGljb24gPSB0aGlzLmdldEljb24odGhpcy5pY29uc1tjb25maWcuaWNvbl0pXG4gICAgICBpY29uLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBjb25maWcudGV4dENvbnRlbnQpXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbilcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4odGV4dClcbiAgICB9XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dClcblxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcImFkZFwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUJ0bkFkZCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nLFxuICAgICAgaWNvbjogJ2FkZCdcbiAgICB9KVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBZGRQcm9wZXJ0eUJ1dHRvbiAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFkZC1wcm9wZXJ0eS1idG4nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJkZWxldGVcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVsZXRlSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgZGVsZXRlSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nLFxuICAgICAgaWNvbjogJ2RlbGV0ZSdcbiAgICB9KVxuXG4gICAgZGVsZXRlSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICByZXR1cm4gZGVsZXRlSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwibW92ZSB1cFwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNb3ZlVXBJdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlVXBJdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJyxcbiAgICAgIGljb246ICdtb3ZlVXAnXG4gICAgfSlcblxuICAgIG1vdmVVcEl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgIHJldHVybiBtb3ZlVXBJdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJtb3ZlIGRvd25cIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZURvd25JdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlRG93bkl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bicsXG4gICAgICBpY29uOiAnbW92ZURvd24nXG4gICAgfSlcblxuICAgIG1vdmVEb3duSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICByZXR1cm4gbW92ZURvd25JdGVtQnRuXG4gIH1cblxuICBnZXREcmFnSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgZHJhZ0l0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RyYWcnLFxuICAgICAgaWNvbjogJ2RyYWcnXG4gICAgfSlcblxuICAgIGRyYWdJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZHJhZycpXG5cbiAgICByZXR1cm4gZHJhZ0l0ZW1CdG5cbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciB0aGUgZWRpdG9yIGRlc2NyaXB0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnID0ge30pIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdqZWRpLWRlc2NyaXB0aW9uJylcblxuICAgIGlmIChjb25maWcudGV4dENvbnRlbnQpIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCB7IGxhYmVsLCBsYWJlbFRleHQgfSA9IHRoaXMuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiBjb25maWcuaWQsXG4gICAgICB0ZXh0OiBjb25maWcubGFiZWwsXG4gICAgICB2aXN1YWxseUhpZGRlbjogY29uZmlnLnRpdGxlSGlkZGVuLFxuICAgICAgbGFiZWxJY29uQ2xhc3M6IGNvbmZpZy5sYWJlbEljb25DbGFzc1xuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkZXNjcmlwdGlvbklkXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3Qoe1xuICAgICAgaWQ6IG1lc3NhZ2VzSWRcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBwbGFjZWhvbGRlciwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdCBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMuXG4gICAqIEVhY2ggZWRpdG9yIGlzIG1hcHBlZCB0byBhbiBvYmplY3QgaW5zdGFuY2UgcHJvcGVydHkuXG4gICAqIFByb3BlcnRpZXMgY2FuIGJlIGFkZGVkLCBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkIGRlcGVuZGluZyBvbiBjb25maWd1cmF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRPYmplY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcbiAgICBjb25zdCBhcmlhTGl2ZSA9IHRoaXMuZ2V0UHJvcGVydGllc0FyaWFMaXZlKClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHByb3BlcnRpZXNDb250YWluZXIgPSB0aGlzLmdldFByb3BlcnRpZXNTbG90KHtcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc1RvZ2dsZSA9IHRoaXMuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlICsgJyAnICsgJ3Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtdG9nZ2xlLScgKyBjb25maWcuaWQsXG4gICAgICBpY29uOiAncHJvcGVydGllcycsXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyOiBwcm9wZXJ0aWVzQ29udGFpbmVyXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbGxhcHNlSWQgPSAnY29sbGFwc2UtJyArIGNvbmZpZy5pZFxuXG4gICAgY29uc3QgY29sbGFwc2UgPSB0aGlzLmdldENvbGxhcHNlKHtcbiAgICAgIGlkOiBjb2xsYXBzZUlkLFxuICAgICAgc3RhcnRDb2xsYXBzZWQ6IGNvbmZpZy5zdGFydENvbGxhcHNlZFxuICAgIH0pXG5cbiAgICBjb25zdCBjb2xsYXBzZVRvZ2dsZSA9IHRoaXMuZ2V0Q29sbGFwc2VUb2dnbGUoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSArICcgJyArICdwcm9wZXJ0aWVzJyxcbiAgICAgIGlkOiAnY29sbGFwc2UtdG9nZ2xlLScgKyBjb25maWcuaWQsXG4gICAgICBpY29uOiAnY29sbGFwc2UnLFxuICAgICAgY29sbGFwc2VJZDogY29sbGFwc2VJZCxcbiAgICAgIGNvbGxhcHNlOiBjb2xsYXBzZSxcbiAgICAgIHN0YXJ0Q29sbGFwc2VkOiBjb25maWcuc3RhcnRDb2xsYXBzZWRcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc0FjdGl2YXRvcnMgPSB0aGlzLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcblxuICAgIGNvbnN0IGFkZFByb3BlcnR5Q29udHJvbCA9IHRoaXMuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIGNvbmZpZy5pZCxcbiAgICAgIGxhYmVsOiAnUHJvcGVydHknXG4gICAgfSlcblxuICAgIGNvbnN0IGFkZFByb3BlcnR5QnRuID0gdGhpcy5nZXRBZGRQcm9wZXJ0eUJ1dHRvbigpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBpZDogY29uZmlnLmlkXG4gICAgfSlcblxuICAgIGFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnRpZXNDb250YWluZXIpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNvbGxhcHNlKVxuICAgIGNvbGxhcHNlLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGNvbmZpZy5hZGRQcm9wZXJ0eSkge1xuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUJ0bilcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSlcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmVuYWJsZVByb3BlcnRpZXNUb2dnbGUpIHtcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJpYUxpdmUpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnRpZXNBY3RpdmF0b3JzKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuZW5hYmxlQ29sbGFwc2VUb2dnbGUpIHtcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoY29sbGFwc2VUb2dnbGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNvbGxhcHNlLFxuICAgICAgY29sbGFwc2VUb2dnbGUsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgcHJvcGVydGllc1RvZ2dsZSxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIsXG4gICAgICBhZGRQcm9wZXJ0eUNvbnRyb2wsXG4gICAgICBhZGRQcm9wZXJ0eUJ0bixcbiAgICAgIGFyaWFMaXZlLFxuICAgICAgcHJvcGVydGllc0FjdGl2YXRvcnMsXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzLlxuICAgKiBJdGVtcyBjYW4gYnZlIGFkZGVkLCBkZWxldGVkIG9yIG1vdmVkIHVwIG9yIGRvd24uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5nZXRCdG5Hcm91cCgpXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5nZXRBcnJheUJ0bkFkZCgpXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgaWQ6IGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBjb2xsYXBzZUlkID0gJ2NvbGxhcHNlLScgKyBjb25maWcuaWRcblxuICAgIGNvbnN0IGNvbGxhcHNlID0gdGhpcy5nZXRDb2xsYXBzZSh7XG4gICAgICBpZDogY29sbGFwc2VJZCxcbiAgICAgIHN0YXJ0Q29sbGFwc2VkOiBjb25maWcuc3RhcnRDb2xsYXBzZWRcbiAgICB9KVxuXG4gICAgY29uc3QgY29sbGFwc2VUb2dnbGUgPSB0aGlzLmdldENvbGxhcHNlVG9nZ2xlKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUgKyAnICcgKyAncHJvcGVydGllcycsXG4gICAgICBpZDogJ2NvbGxhcHNlLXRvZ2dsZS0nICsgY29uZmlnLmlkLFxuICAgICAgaWNvbjogJ2NvbGxhcHNlJyxcbiAgICAgIGNvbGxhcHNlSWQ6IGNvbGxhcHNlSWQsXG4gICAgICBjb2xsYXBzZTogY29sbGFwc2UsXG4gICAgICBzdGFydENvbGxhcHNlZDogY29uZmlnLnN0YXJ0Q29sbGFwc2VkXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoY29sbGFwc2UpXG4gICAgY29sbGFwc2UuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBib2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICBpZiAoY29uZmlnLmVuYWJsZUNvbGxhcHNlVG9nZ2xlKSB7XG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGNvbGxhcHNlVG9nZ2xlKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjb2xsYXBzZVRvZ2dsZSxcbiAgICAgIGNvbGxhcHNlLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIGJ0bkdyb3VwLFxuICAgICAgYWRkQnRuLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgZ2V0QXJyYXlJdGVtICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcigpXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNhcmQsXG4gICAgICBoZWFkZXIsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBsZSBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMgb3B0aW9ucyB0aGF0IGNhbiBiZVxuICAgKiBzZWxlY3RlZCB3aXRoIGEgc3dpdGNoZXIgY29udHJvbC4gT25seSBvbmUgZWRpdG9yIGNhbiBiZSBhY3RpdmUvdmlzaWJsZVxuICAgKiBhdCBhIHRpbWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE11bHRpcGxlQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgdGl0bGVIaWRkZW46IGNvbmZpZy50aXRsZUhpZGRlblxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHN3aXRjaGVyID0gdGhpcy5nZXRTd2l0Y2hlcih7XG4gICAgICB2YWx1ZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHRpdGxlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIGxhYmVsOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIHRpdGxlSGlkZGVuOiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IGNvbmZpZy5yZWFkT25seVxuICAgIH0pXG5cbiAgICBzd2l0Y2hlci5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuXG4gICAgaWYgKGNvbmZpZy5zd2l0Y2hlcikge1xuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChzd2l0Y2hlci5jb250YWluZXIpXG4gICAgfVxuXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjYXJkLFxuICAgICAgaGVhZGVyLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHN3aXRjaGVyLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgZ2V0SWZUaGVuRWxzZUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZCgpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldENhcmRIZWFkZXIoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHRpdGxlSGlkZGVuOiBjb25maWcudGl0bGVIaWRkZW5cbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb25zdCBzd2l0Y2hlciA9IHRoaXMuZ2V0U3dpdGNoZXIoe1xuICAgICAgdmFsdWVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICB0aXRsZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogY29uZmlnLmlkICsgJy1zd2l0Y2hlcicsXG4gICAgICBsYWJlbDogY29uZmlnLmlkICsgJy1zd2l0Y2hlcicsXG4gICAgICB0aXRsZUhpZGRlbjogdHJ1ZSxcbiAgICAgIHJlYWRPbmx5OiBjb25maWcucmVhZE9ubHlcbiAgICB9KVxuXG4gICAgc3dpdGNoZXIuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgaWYgKGNvbmZpZy5zd2l0Y2hlcikge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN3aXRjaGVyLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGhlYWRlcixcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBzd2l0Y2hlcixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sIGZvciBOdWxsRWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXROdWxsQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IHsgbGFiZWwsIGxhYmVsVGV4dCB9ID0gdGhpcy5nZXRMYWJlbCh7XG4gICAgICBmb3I6IGNvbmZpZy5pZCxcbiAgICAgIHRleHQ6IGNvbmZpZy5sYWJlbCxcbiAgICAgIHZpc3VhbGx5SGlkZGVuOiBjb25maWcudGl0bGVIaWRkZW4sXG4gICAgICBsYWJlbEljb25DbGFzczogY29uZmlnLmxhYmVsSWNvbkNsYXNzXG4gICAgfSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uLFxuICAgICAgaWQ6IGRlc2NyaXB0aW9uSWRcbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgVGV4dGFyZWFcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuc3R5bGUud2lkdGggPSAnMTAwJSdcblxuICAgIGNvbnN0IHsgbGFiZWwsIGxhYmVsVGV4dCB9ID0gdGhpcy5nZXRMYWJlbCh7XG4gICAgICBmb3I6IGNvbmZpZy5pZCxcbiAgICAgIHRleHQ6IGNvbmZpZy5sYWJlbCxcbiAgICAgIHZpc3VhbGx5SGlkZGVuOiBjb25maWcudGl0bGVIaWRkZW5cbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb24sXG4gICAgICBpZDogZGVzY3JpcHRpb25JZFxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KHtcbiAgICAgIGlkOiBtZXNzYWdlc0lkXG4gICAgfSlcblxuICAgIGNvbnN0IGRlc2NyaWJlZEJ5ID0gbWVzc2FnZXNJZCArICcgJyArIGRlc2NyaXB0aW9uSWRcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmliZWRCeSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBJbnB1dCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LnN0eWxlLndpZHRoID0gJzEwMCUnXG5cbiAgICBjb25zdCB7IGxhYmVsLCBsYWJlbFRleHQgfSA9IHRoaXMuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiBjb25maWcuaWQsXG4gICAgICB0ZXh0OiBjb25maWcubGFiZWwsXG4gICAgICB2aXN1YWxseUhpZGRlbjogY29uZmlnLnRpdGxlSGlkZGVuLFxuICAgICAgbGFiZWxJY29uQ2xhc3M6IGNvbmZpZy5sYWJlbEljb25DbGFzc1xuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkZXNjcmlwdGlvbklkXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3Qoe1xuICAgICAgaWQ6IG1lc3NhZ2VzSWRcbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpYmVkQnkgPSBtZXNzYWdlc0lkICsgJyAnICsgZGVzY3JpcHRpb25JZFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgcmFkaW8gZ3JvdXAgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmxhYmVsLFxuICAgICAgaWQ6IGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KHtcbiAgICAgIGlkOiBtZXNzYWdlc0lkXG4gICAgfSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uLFxuICAgICAgaWQ6IGRlc2NyaXB0aW9uSWRcbiAgICB9KVxuXG4gICAgaWYgKGNvbmZpZy50aXRsZUhpZGRlbikge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsZWdlbmQpXG4gICAgfVxuXG4gICAgY29uc3QgcmFkaW9Db250cm9scyA9IFtdXG4gICAgY29uc3QgcmFkaW9zID0gW11cbiAgICBjb25zdCBsYWJlbHMgPSBbXVxuICAgIGNvbnN0IGxhYmVsVGV4dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2xzLnB1c2gocmFkaW9Db250cm9sKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICByYWRpb3MucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgZGVzY3JpYmVkQnkgPSBtZXNzYWdlc0lkICsgJyAnICsgZGVzY3JpcHRpb25JZFxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpYmVkQnkpXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcblxuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBsYWJlbFRleHRzLnB1c2gobGFiZWxUZXh0KVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBsYWJlbHMucHVzaChsYWJlbClcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGZpZWxkc2V0LFxuICAgICAgbGVnZW5kLFxuICAgICAgYm9keSxcbiAgICAgIHJhZGlvcyxcbiAgICAgIGxhYmVscyxcbiAgICAgIGxhYmVsVGV4dHMsXG4gICAgICByYWRpb0NvbnRyb2xzLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBjaGVja2JveCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgeyBsYWJlbCwgbGFiZWxUZXh0IH0gPSB0aGlzLmdldExhYmVsKHtcbiAgICAgIGZvcjogY29uZmlnLmlkLFxuICAgICAgdGV4dDogY29uZmlnLmxhYmVsLFxuICAgICAgdmlzdWFsbHlIaWRkZW46IGNvbmZpZy50aXRsZUhpZGRlblxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkZXNjcmlwdGlvbklkXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3Qoe1xuICAgICAgaWQ6IG1lc3NhZ2VzSWRcbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpYmVkQnkgPSBtZXNzYWdlc0lkICsgJyAnICsgZGVzY3JpcHRpb25JZFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNlbGVjdCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgeyBsYWJlbCwgbGFiZWxUZXh0IH0gPSB0aGlzLmdldExhYmVsKHtcbiAgICAgIGZvcjogY29uZmlnLmlkLFxuICAgICAgdGV4dDogY29uZmlnLmxhYmVsLFxuICAgICAgdmlzdWFsbHlIaWRkZW46IGNvbmZpZy50aXRsZUhpZGRlblxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvbixcbiAgICAgIGlkOiBkZXNjcmlwdGlvbklkXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3Qoe1xuICAgICAgaWQ6IG1lc3NhZ2VzSWRcbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpYmVkQnkgPSBtZXNzYWdlc0lkICsgJyAnICsgZGVzY3JpcHRpb25JZFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgdG8gc3dpdGNoIGJldHdlZW4gbXVsdGlwbGUgZWRpdG9ycyBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgLy8gaW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogMTAwJTsnKVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIGNvbnN0IHsgbGFiZWwsIGxhYmVsVGV4dCB9ID0gdGhpcy5nZXRMYWJlbCh7XG4gICAgICBmb3I6IGNvbmZpZy5pZCxcbiAgICAgIHRleHQ6IGNvbmZpZy5sYWJlbCxcbiAgICAgIHZpc3VhbGx5SGlkZGVuOiBjb25maWcudGl0bGVIaWRkZW5cbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFub3RoZXIgdHlwZSBvZiBlcnJvciBtZXNzYWdlIGNvbnRhaW5lciB1c2VkIGZvciBtb3JlIGNvbXBsZXggZWRpdG9ycyBsaWtlXG4gICAqIG9iamVjdCwgYXJyYXkgYW5kIG11bHRpcGxlIGVkaXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICB9XG5cbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2VzXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaW52YWxpZEZlZWRiYWNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGNvbnN0IGludmFsaWRGZWVkYmFja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBpbnZhbGlkRmVlZGJhY2tUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICBpbnZhbGlkRmVlZGJhY2tJY29uLnRleHRDb250ZW50ID0gJ+KaoCAnXG4gICAgaW52YWxpZEZlZWRiYWNrSWNvbi5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGludmFsaWRGZWVkYmFja0ljb24uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2tJY29uKVxuICAgIGh0bWwuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrVGV4dClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgY29sdW1uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdqZWRpLXJvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29sdW1uIHRvIGNvbnRhaW4gY29udGVudCB0byBhIHNwZWNpZmljIHdpZHRoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLW9mZnNldC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgLyoqXG4gICAqIFRhYiBsaXN0IGlzIGEgbGlzdCBvZiBsaW5rcyB0aGF0IHRyaWdnZXJzIHRhYnMgdmlzaWJpbGl0eSBuZSBhdCB0aGUgdGltZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGFiTGlzdCAoKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2plZGktbmF2LWxpc3QnKVxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICAvKipcbiAgICogQSBUYWIgaXMgYSB3cmFwcGVyIGZvciBjb250ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGluaycpXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBjb25maWcuaWQpXG4gICAgbGluay50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZVxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGluaylcbiAgICByZXR1cm4geyBsaXN0LCBsaW5rIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciB0YWJzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWJDb250ZW50ICgpIHtcbiAgICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50JylcbiAgICByZXR1cm4gdGFiQ29udGVudFxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0YWIgYXR0cmlidXRlcyB0byBtYWtlIGl0IHRvZ2dsZWFibGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdqZWRpLXRhYi1wYW5lJylcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiBlbGVtZW50IHZpc3VhbGx5IGhpZGRlblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdmlzdWFsbHlIaWRkZW4gKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxcHg7aGVpZ2h0OiAxcHg7cGFkZGluZzogMDttYXJnaW46IC0xcHg7b3ZlcmZsb3c6IGhpZGRlbjtjbGlwOiByZWN0KDAsMCwwLDApO2JvcmRlcjogMDsnKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldmVhbHMgYSB2aXN1YWxseSBoaWRkZW4gZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdmlzdWFsbHlWaXNpYmxlIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiaW1wb3J0IEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcydcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcydcbmltcG9ydCBFZGl0b3JCb29sZWFuQ2hlY2tib3ggZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4tY2hlY2tib3guanMnXG5pbXBvcnQgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGZyb20gJy4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcydcbmltcG9ydCBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGZyb20gJy4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMnXG5pbXBvcnQgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy10ZXh0YXJlYS5qcydcbmltcG9ydCBFZGl0b3JTdHJpbmdBd2Vzb21wbGV0ZSBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWF3ZXNvbXBsZXRlLmpzJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0lucHV0IGZyb20gJy4vZWRpdG9ycy9zdHJpbmctaW5wdXQuanMnXG5pbXBvcnQgRWRpdG9yTnVtYmVyRW51bVJhZGlvIGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcydcbmltcG9ydCBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMnXG5pbXBvcnQgRWRpdG9yTnVtYmVySW5wdXQgZnJvbSAnLi9lZGl0b3JzL251bWJlci1pbnB1dC5qcydcbmltcG9ydCBFZGl0b3JPYmplY3RHcmlkIGZyb20gJy4vZWRpdG9ycy9vYmplY3QtZ3JpZC5qcydcbmltcG9ydCBFZGl0b3JPYmplY3ROYXYgZnJvbSAnLi9lZGl0b3JzL29iamVjdC1uYXYuanMnXG5pbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4vZWRpdG9ycy9vYmplY3QuanMnXG5pbXBvcnQgRWRpdG9yQXJyYXlOYXYgZnJvbSAnLi9lZGl0b3JzL2FycmF5LW5hdi5qcydcbmltcG9ydCBFZGl0b3JBcnJheSBmcm9tICcuL2VkaXRvcnMvYXJyYXkuanMnXG5pbXBvcnQgRWRpdG9yTXVsdGlwbGUgZnJvbSAnLi9lZGl0b3JzL211bHRpcGxlLmpzJ1xuaW1wb3J0IEVkaXRvck51bGwgZnJvbSAnLi9lZGl0b3JzL251bGwuanMnXG5pbXBvcnQgRWRpdG9yU3RyaW5nUXVpbGwgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy1xdWlsbC5qcydcbmltcG9ydCBFZGl0b3JTdHJpbmdKb2RpdCBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWpvZGl0LmpzJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0ZsYXRwaWNrciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWZsYXRwaWNrci5qcydcbmltcG9ydCBFZGl0b3JOdW1iZXJSYXR5IGZyb20gJy4vZWRpdG9ycy9udW1iZXItcmF0eS5qcydcblxuY2xhc3MgVWlSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgdGhpcy5jdXN0b21FZGl0b3JzID0gb3B0aW9ucy5jdXN0b21FZGl0b3JzID8/IFtdXG5cbiAgICB0aGlzLmVkaXRvcnMgPSBbXG4gICAgICBFZGl0b3JNdWx0aXBsZSxcbiAgICAgIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8sXG4gICAgICBFZGl0b3JCb29sZWFuQ2hlY2tib3gsXG4gICAgICBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCxcbiAgICAgIEVkaXRvclN0cmluZ0VudW1SYWRpbyxcbiAgICAgIEVkaXRvclN0cmluZ0VudW1TZWxlY3QsXG4gICAgICBFZGl0b3JTdHJpbmdUZXh0YXJlYSxcbiAgICAgIEVkaXRvclN0cmluZ0F3ZXNvbXBsZXRlLFxuICAgICAgRWRpdG9yU3RyaW5nUXVpbGwsXG4gICAgICBFZGl0b3JTdHJpbmdKb2RpdCxcbiAgICAgIEVkaXRvclN0cmluZ0ZsYXRwaWNrcixcbiAgICAgIEVkaXRvclN0cmluZ0lucHV0LFxuICAgICAgRWRpdG9yTnVtYmVyUmF0eSxcbiAgICAgIEVkaXRvck51bWJlckVudW1SYWRpbyxcbiAgICAgIEVkaXRvck51bWJlckVudW1TZWxlY3QsXG4gICAgICBFZGl0b3JOdW1iZXJJbnB1dCxcbiAgICAgIEVkaXRvck9iamVjdEdyaWQsXG4gICAgICBFZGl0b3JPYmplY3ROYXYsXG4gICAgICBFZGl0b3JPYmplY3QsXG4gICAgICBFZGl0b3JBcnJheU5hdixcbiAgICAgIEVkaXRvckFycmF5LFxuICAgICAgRWRpdG9yTnVsbCxcbiAgICBdXG4gIH1cblxuICBnZXRDbGFzcyAoc2NoZW1hKSB7XG4gICAgZm9yIChjb25zdCBlZGl0b3Igb2YgdGhpcy5jdXN0b21FZGl0b3JzKSB7XG4gICAgICBpZiAoZWRpdG9yLnJlc29sdmVzKHNjaGVtYSkpIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZWRpdG9yIG9mIHRoaXMuZWRpdG9ycykge1xuICAgICAgaWYgKGVkaXRvci5yZXNvbHZlcyhzY2hlbWEpKSB7XG4gICAgICAgIHJldHVybiBlZGl0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVpUmVzb2x2ZXJcbiIsIi8qKlxuICogQ29uc3RyYWlucyBhZGRpdGlvbmFsUHJvcGVydGllc1xuICovXG5cbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcywgZ2V0U2NoZW1hUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRpdGlvbmFsUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gc2NoZW1hUHJvcGVydGllcyB8fCB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIHx8IHt9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5zb21lKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgcmV0dXJuIHJlZ2V4cC50ZXN0KHByb3BlcnR5KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgaXNEZWZpbmVkSW5Qcm9wZXJ0aWVzID0gaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KVxuXG4gICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiAhaXNEZWZpbmVkSW5Qcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmIChhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckFkZGl0aW9uYWxQcm9wZXJ0aWVzLCB7IHByb3BlcnR5IH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGNvbnN0cmFpbjogJ2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlW3Byb3BlcnR5XVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4gKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgIHBhdGg6IGAke3BhdGh9LiR7cHJvcGVydHl9YCxcbiAgICAgICAgICAgIGNvbnN0cmFpbjogJ2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuICAgICAgICAgIH0pKVxuXG4gICAgICAgICAgZXJyb3JzLnB1c2goLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzKVxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQWxsT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGFsbE9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3QgYWxsT2YgPSBnZXRTY2hlbWFBbGxPZihzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KGFsbE9mKSkge1xuICAgIGFsbE9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgc3ViU2NoZW1hRWRpdG9yID0gbmV3IEplZGkoeyByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsIHNjaGVtYTogc2NoZW1hLCBkYXRhOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgICBlcnJvcnMgPSByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5KGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUFueU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGFueU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBhbnlPZiA9IGdldFNjaGVtYUFueU9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoYW55T2YpKSB7XG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlciwgc2NoZW1hOiBzY2hlbWEsIGRhdGE6IHZhbHVlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBhbnlPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGkxOG4uZXJyb3JBbnlPZlxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdhbnlPZidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGRpZmZlcmVudCwgY29tcGlsZVRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUNvbnN0IH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIF9jb25zdCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hQ29uc3QgPSBnZXRTY2hlbWFDb25zdChzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUNvbnN0KSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWFDb25zdClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckNvbnN0LCB7XG4gICAgICAgICAgICBjb25zdDogSlNPTi5zdHJpbmdpZnkoc2NoZW1hQ29uc3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnY29uc3QnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7IGdldFNjaGVtYUNvbnRhaW5zLCBnZXRTY2hlbWFNYXhDb250YWlucywgZ2V0U2NoZW1hTWluQ29udGFpbnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGNvbnRhaW5zID0gZ2V0U2NoZW1hQ29udGFpbnMoc2NoZW1hKVxuICBjb25zdCBtaW5Db250YWlucyA9IGdldFNjaGVtYU1pbkNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3QgbWF4Q29udGFpbnMgPSBnZXRTY2hlbWFNYXhDb250YWlucyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KGNvbnRhaW5zKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbnNFZGl0b3IgPSBuZXcgSmVkaSh7IHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlciwgc2NoZW1hOiBjb250YWlucywgZGF0YTogaXRlbSB9KVxuICAgICAgY29uc3QgY29udGFpbnNFcnJvcnMgPSBjb250YWluc0VkaXRvci5nZXRFcnJvcnMoKVxuXG4gICAgICBpZiAoY29udGFpbnNFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBjb250YWluc0VkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPT09IDApXG5cbiAgICBpZiAoaXNTZXQobWluQ29udGFpbnMpKSB7XG4gICAgICBjb25zdCBtaW5Db250YWluc0ludmFsaWQgPSAoY291bnRlciA8IG1pbkNvbnRhaW5zKVxuXG4gICAgICBpZiAobWluQ29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5Db250YWlucywge1xuICAgICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyLFxuICAgICAgICAgICAgICBtaW5Db250YWluczogbWluQ29udGFpbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIGNvbnN0cmFpbjogJ21pbkNvbnRhaW5zJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JDb250YWluc10sXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBjb25zdHJhaW46ICdjb250YWlucydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQobWF4Q29udGFpbnMpKSB7XG4gICAgICBjb25zdCBtYXhDb250YWluc0ludmFsaWQgPSAoY291bnRlciA+IG1heENvbnRhaW5zKVxuXG4gICAgICBpZiAobWF4Q29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhDb250YWlucywge1xuICAgICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyLFxuICAgICAgICAgICAgICBtYXhDb250YWluczogbWF4Q29udGFpbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIGNvbnN0cmFpbjogJ21heENvbnRhaW5zJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW50UmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JEZXBlbmRlbnRSZXF1aXJlZCwge1xuICAgICAgICAgICAgZGVwZW5kZW50UmVxdWlyZWQ6IG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdkZXBlbmRlbnRSZXF1aXJlZCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGkuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXBlbmRlbnRTY2hlbWFzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGRlcGVuZGVudFNjaGVtYXMgPSBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KGRlcGVuZGVudFNjaGVtYXMpKSB7XG4gICAgT2JqZWN0LmtleXMoZGVwZW5kZW50U2NoZW1hcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50U2NoZW1hID0gZGVwZW5kZW50U2NoZW1hc1trZXldXG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLCBzY2hlbWE6IGRlcGVuZGVudFNjaGVtYSwgZGF0YTogdmFsdWUgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLmdldEVycm9ycygpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4udG1wRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2VudW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hRW51bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYUVudW0uc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRW51bSwge1xuICAgICAgICAgICAgZW51bTogSlNPTi5zdHJpbmdpZnkoc2NoZW1hRW51bSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdlbnVtJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNYXhpbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBleGNsdXNpdmVNYXhpbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChleGNsdXNpdmVNYXhpbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gZXhjbHVzaXZlTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFeGNsdXNpdmVNYXhpbXVtLCB7XG4gICAgICAgICAgICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnZXhjbHVzaXZlTWF4aW11bSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChleGNsdXNpdmVNaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gZXhjbHVzaXZlTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFeGNsdXNpdmVNaW5pbXVtLCB7XG4gICAgICAgICAgICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnZXhjbHVzaXZlTWluaW11bSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFYT3B0aW9uIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHNjaGVtYSlcbiAgbGV0IHZhbGlkYXRlRm9ybWF0ID0gdmFsaWRhdG9yLnZhbGlkYXRlRm9ybWF0XG5cbiAgaWYgKGdldFNjaGVtYVhPcHRpb24oc2NoZW1hLCAndmFsaWRhdGVGb3JtYXQnKSkge1xuICAgIHZhbGlkYXRlRm9ybWF0ID0gc2NoZW1hLm9wdGlvbnMudmFsaWRhdGVGb3JtYXRcbiAgfVxuXG4gIGlmIChpc1NldChmb3JtYXQpICYmIGlzU3RyaW5nKHZhbHVlKSAmJiB2YWxpZGF0ZUZvcm1hdCkge1xuICAgIGxldCByZWdleHBcblxuICAgIGlmIChmb3JtYXQgPT09ICdlbWFpbCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16QS1aMC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtekEtWjAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dKlthLXpBLVowLTldKT9cXC4pK1thLXpBLVpdezIsfSQvaSlcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSAndXJsJykge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/Omh0dHBzP3xmdHApOlxcL1xcLyg/OlteXFxzOkBdKyg/OjpbXlxcczpAXSopP0ApPyg/Oig/OlteXFxzOkBdKyg/OjpbXlxcczpAXSopP0ApPyg/OlteXFxzOkBdKD86W15cXHM6QC1dKlteXFxzOkBdKT9cXC4/KStbYS16QS1aXXsyLH18KD86XFxkezEsM31cXC4pezN9XFxkezEsM30pKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2kpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3V1aWQnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mQS1GXXs4fS0oPzpbMC05YS1mQS1GXXs0fS0pezN9WzAtOWEtZkEtRl17MTJ9JC9pKVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBpc1NldChyZWdleHApICYmICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JGb3JtYXQsIHsgZm9ybWF0OiBmb3JtYXQgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnZm9ybWF0J1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpLmpzJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbHNlLCBnZXRTY2hlbWFJZiwgZ2V0U2NoZW1hVGhlbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gaWZUaGVuRWxzZSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUlmID0gZ2V0U2NoZW1hSWYoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFUaGVuID0gZ2V0U2NoZW1hVGhlbihzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYUVsc2UgPSBnZXRTY2hlbWFFbHNlKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hSWYpKSB7XG4gICAgaWYgKG5vdFNldChzY2hlbWFUaGVuKSAmJiBub3RTZXQoc2NoZW1hRWxzZSkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLCBzY2hlbWE6IHNjaGVtYUlmLCBkYXRhOiB2YWx1ZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcblxuICAgIGxldCB0aGVuRXJyb3JzID0gW11cbiAgICBsZXQgZWxzZUVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hVGhlbikpIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHJlZlBhcnNlcjogdmFsaWRhdG9yLnJlZlBhcnNlciwgc2NoZW1hOiBzY2hlbWFUaGVuLCBkYXRhOiB2YWx1ZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsIHNjaGVtYTogc2NoZW1hRWxzZSwgZGF0YTogdmFsdWUgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFJZiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hSWYgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hSXRlbXMsIGdldFNjaGVtYVByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBpdGVtcyA9IGdldFNjaGVtYUl0ZW1zKHNjaGVtYSlcbiAgY29uc3QgcHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KGl0ZW1zKSkge1xuICAgIGNvbnN0IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50ID0gaXNTZXQocHJlZml4SXRlbXMpID8gcHJlZml4SXRlbXMubGVuZ3RoIDogMFxuXG4gICAgaWYgKGl0ZW1zID09PSBmYWxzZSAmJiB2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlLmxlbmd0aCA+IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50KSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbaTE4bi5lcnJvckl0ZW1zXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnaXRlbXMnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4SXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4SXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1heEl0ZW1zID0gZ2V0U2NoZW1hTWF4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChtYXhJdGVtcykpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IG1heEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heEl0ZW1zLCB7XG4gICAgICAgICAgICBtYXhJdGVtczogbWF4SXRlbXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdtYXhJdGVtcydcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4TGVuZ3RoIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIG1heExlbmd0aCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4TGVuZ3RoID0gZ2V0U2NoZW1hTWF4TGVuZ3RoKHNjaGVtYSlcblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KG1heExlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IG1heExlbmd0aClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhMZW5ndGgsIHtcbiAgICAgICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbWF4TGVuZ3RoJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIG1heFByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1heFByb3BlcnRpZXMgPSBnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KG1heFByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gbWF4UHJvcGVydGllcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhQcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbWF4UHJvcGVydGllcydcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4aW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhpbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhpbXVtID0gZ2V0U2NoZW1hTWF4aW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtYXhpbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBtYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heGltdW0sIHtcbiAgICAgICAgICAgIG1heGltdW06IG1heGltdW1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdtYXhpbXVtJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYU1pbkl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIG1pbkl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5JdGVtcyA9IGdldFNjaGVtYU1pbkl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQobWluSXRlbXMpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBtaW5JdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5JdGVtcywge1xuICAgICAgICAgICAgbWluSXRlbXM6IG1pbkl0ZW1zXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbWluSXRlbXMnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYU1pbkxlbmd0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5MZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkxlbmd0aCA9IGdldFNjaGVtYU1pbkxlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChtaW5MZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluTGVuZ3RoLCB7XG4gICAgICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ21pbkxlbmd0aCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5Qcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hTWluUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChtaW5Qcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IG1pblByb3BlcnRpZXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluUHJvcGVydGllcywge1xuICAgICAgICAgICAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ21pblByb3BlcnRpZXMnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYU1pbmltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluaW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWluaW11bSA9IGdldFNjaGVtYU1pbmltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobWluaW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgbWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5pbXVtLCB7XG4gICAgICAgICAgICBtaW5pbXVtOiBtaW5pbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAnbWluaW11bSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTXVsdGlwbGVPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBsZU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtdWx0aXBsZU9mID0gZ2V0U2NoZW1hTXVsdGlwbGVPZihzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtdWx0aXBsZU9mKSkge1xuICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIG11bHRpcGxlT2YgPT09IE1hdGguZmxvb3IodmFsdWUgLyBtdWx0aXBsZU9mKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YgfHwgdmFsdWUudG9TdHJpbmcoKS5pbmNsdWRlcygnZScpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck11bHRpcGxlT2YsIHtcbiAgICAgICAgICAgIG11bHRpcGxlT2Y6IG11bHRpcGxlT2ZcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdtdWx0aXBsZU9mJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYU5vdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbm90ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBub3QgPSBnZXRTY2hlbWFOb3Qoc2NoZW1hKVxuXG4gIGlmIChpc1NldChub3QpKSB7XG4gICAgY29uc3Qgbm90RWRpdG9yID0gbmV3IEplZGkoeyByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsIHNjaGVtYTogbm90LCBkYXRhOiB2YWx1ZSB9KVxuICAgIGNvbnN0IG5vdEVycm9ycyA9IG5vdEVkaXRvci5nZXRFcnJvcnMoKVxuICAgIG5vdEVkaXRvci5kZXN0cm95KClcblxuICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTm90KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBjb25zdHJhaW46ICdub3QnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7IGdldFNjaGVtYU9uZU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIG9uZU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBvbmVPZiA9IGdldFNjaGVtYU9uZU9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQob25lT2YpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBvbmVPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRWRpdG9yID0gbmV3IEplZGkoeyByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsIHNjaGVtYTogc2NoZW1hLCBkYXRhOiB2YWx1ZSB9KVxuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSBvbmVPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgb25lT2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JPbmVPZiwge1xuICAgICAgICAgICAgY291bnRlcjogY291bnRlclxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ29uZU9mJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFQYXR0ZXJuIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdHRlcm4gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHBhdHRlcm4gPSBnZXRTY2hlbWFQYXR0ZXJuKHNjaGVtYSlcblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHBhdHRlcm4pKSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUGF0dGVybiwge1xuICAgICAgICAgICAgcGF0dGVybjogcGF0dGVyblxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ3BhdHRlcm4nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdHRlcm5Qcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQocGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICByZWZQYXJzZXI6IHZhbGlkYXRvci5yZWZQYXJzZXIsXG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcvJyArIHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgY29uc3RyYWluOiAncGF0dGVyblByb3BlcnRpZXMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvckVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpLmpzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUHJlZml4SXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYS5qcydcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4SXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChwcmVmaXhJdGVtcykpIHtcbiAgICBwcmVmaXhJdGVtcy5mb3JFYWNoKChpdGVtU2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXRlbVZhbHVlID0gdmFsdWVbaW5kZXhdXG5cbiAgICAgIGlmIChpc1NldChpdGVtVmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLCBzY2hlbWE6IGl0ZW1TY2hlbWEsIGRhdGE6IGl0ZW1WYWx1ZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICAgIGlmICh0bXBFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUHJlZml4SXRlbXMsIHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgY29uc3RyYWluOiAncHJlZml4SXRlbXMnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCIvKipcbiAqIGNvbnN0cmFpbnMgcHJvcGVydHlOYW1lc1xuICovXG5cbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGkuanMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFQcm9wZXJ0eU5hbWVzXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eU5hbWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFQcm9wZXJ0eU5hbWVzID0gZ2V0U2NoZW1hUHJvcGVydHlOYW1lcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWFQcm9wZXJ0eU5hbWVzKSkge1xuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYVByb3BlcnR5TmFtZXMsXG4gICAgICAgIGRhdGE6IHByb3BlcnR5TmFtZVxuICAgICAgfSlcblxuICAgICAgY29uc3QgaW52YWxpZCA9IGVkaXRvci5nZXRFcnJvcnMoKS5sZW5ndGggPiAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JQcm9wZXJ0eU5hbWVzLCB7IHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIGNvbnN0cmFpbjogJ3Byb3BlcnR5TmFtZXMnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCB7IGdldFNjaGVtYVJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVkICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCByZXF1aXJlZCA9IGdldFNjaGVtYVJlcXVpcmVkKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHJlcXVpcmVkKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICByZXF1aXJlZC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclJlcXVpcmVkLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGNvbnN0cmFpbjogJ3JlcXVpcmVkJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQge1xuICBjb21waWxlVGVtcGxhdGUsIGdldFR5cGUsXG4gIGlzQXJyYXksXG4gIGlzQm9vbGVhbixcbiAgaXNJbnRlZ2VyLFxuICBpc051bGwsXG4gIGlzTnVtYmVyLFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGUgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHR5cGUgPSBnZXRTY2hlbWFUeXBlKHNjaGVtYSlcblxuICBpZiAodHlwZSA9PT0gJ2FueScpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQodHlwZSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICB2YWxpZCA9IHR5cGUuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclR5cGUsIHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICB2YWx1ZVR5cGU6IGdldFR5cGUodmFsdWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAndHlwZSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiLyoqXG4gKiBjb25zdHJhaW5zIHVuZXZhbHVhdGVkUHJvcGVydGllc1xuICovXG5cbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaS5qcydcbmltcG9ydCB7XG4gIGdldFNjaGVtYVVuZXZhbHVhdGVkUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMsXG4gIGdldFNjaGVtYVByb3BlcnRpZXMsXG4gIGdldFNjaGVtYUFueU9mLCBnZXRTY2hlbWFBbGxPZiwgZ2V0U2NoZW1hT25lT2Zcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEuanMnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVuZXZhbHVhdGVkUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYVVuZXZhbHVhdGVkUHJvcGVydGllcyA9IGdldFNjaGVtYVVuZXZhbHVhdGVkUHJvcGVydGllcyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUHJvcGVydGllcyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYUFsbE9mID0gZ2V0U2NoZW1hQWxsT2Yoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFBbnlPZiA9IGdldFNjaGVtYUFueU9mKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hT25lT2YgPSBnZXRTY2hlbWFPbmVPZihzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWFVbmV2YWx1YXRlZFByb3BlcnRpZXMpKSB7XG4gICAgbGV0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWFQcm9wZXJ0aWVzKSA/IHNjaGVtYVByb3BlcnRpZXMgOiB7fVxuICAgIGNvbnN0IHVuZXZhbHVhdGVkUHJvcGVydGllcyA9IHNjaGVtYVVuZXZhbHVhdGVkUHJvcGVydGllc1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hUGF0dGVyblByb3BlcnRpZXNcblxuICAgIC8vIHNlZSB0aHJvdWdoIGFsbE9mLCBhbnlPZiBhbmQgb25lT2ZcbiAgICBjb25zdCBvZlNjaGVtYXMgPSBbXG4gICAgICBzY2hlbWFBbGxPZixcbiAgICAgIHNjaGVtYUFueU9mLFxuICAgICAgc2NoZW1hT25lT2ZcbiAgICBdXG5cbiAgICBvZlNjaGVtYXMuZm9yRWFjaCgoc3ViU2NoZW1hKSA9PiB7XG4gICAgICBpZiAoaXNTZXQoc3ViU2NoZW1hKSkge1xuICAgICAgICBzdWJTY2hlbWEuZm9yRWFjaCgoc3Vic2NoZW1hKSA9PiB7XG4gICAgICAgICAgaWYgKGlzU2V0KHN1YnNjaGVtYVsncHJvcGVydGllcyddKSkge1xuICAgICAgICAgICAgcHJvcGVydGllcyA9IHsgLi4ucHJvcGVydGllcywgLi4uc3Vic2NoZW1hWydwcm9wZXJ0aWVzJ10gfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBsZXQgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gZmFsc2VcblxuICAgICAgICBpZiAoaXNTZXQocGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICAgIGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IHJlZ2V4cC50ZXN0KHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiB1bmV2YWx1YXRlZFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JVbmV2YWx1YXRlZFByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgY29uc3RyYWluOiAndW5ldmFsdWF0ZWRQcm9wZXJ0aWVzJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBpc09iamVjdCh1bmV2YWx1YXRlZFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcmVmUGFyc2VyOiB2YWxpZGF0b3IucmVmUGFyc2VyLFxuICAgICAgICAgICAgc2NoZW1hOiB1bmV2YWx1YXRlZFByb3BlcnRpZXMsXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZVtwcm9wZXJ0eV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzRXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHksXG4gICAgICAgICAgICAgIGNvbnN0cmFpbjogJ3VuZXZhbHVhdGVkUHJvcGVydGllcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4udW5ldmFsdWF0ZWRQcm9wZXJ0aWVzRXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgc29ydE9iamVjdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFVbmlxdWVJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4uanMnXG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVJdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgdW5pcXVlSXRlbXMgPSBnZXRTY2hlbWFVbmlxdWVJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHVuaXF1ZUl0ZW1zKSAmJiB1bmlxdWVJdGVtcyA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNlZW4gPSBbXVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB2YWx1ZVtpXVxuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgaXRlbSA9IHNvcnRPYmplY3QoaXRlbSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbVN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoaXRlbSlcbiAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHNlZW4uc29tZSgoc2VlbikgPT4gc2VlbiA9PT0gaXRlbVN0cmluZ2lmaWVkKVxuXG4gICAgICBpZiAoaGFzRHVwbGljYXRlZEl0ZW1zKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLnB1c2goaXRlbVN0cmluZ2lmaWVkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBpMThuLmVycm9yVW5pcXVlSXRlbXNcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgY29uc3RyYWluOiAndW5pcXVlSXRlbXMnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZi5qcydcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mLmpzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0uanMnXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtLmpzJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcydcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zLmpzJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zLmpzJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGguanMnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bS5qcydcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcy5qcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mLmpzJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QuanMnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YuanMnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuLmpzJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzLmpzJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkLmpzJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZS5qcydcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0uanMnXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZi5qcydcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdC5qcydcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucy5qcydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZi5qcydcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcydcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMuanMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bS5qcydcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMnXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQuanMnXG5pbXBvcnQgeyBpZlRoZW5FbHNlIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZi10aGVuLWVsc2UuanMnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMuanMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aC5qcydcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtLmpzJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdC5qcydcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZi5qcydcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4uanMnXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlLmpzJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bS5qcydcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcy5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogaWZUaGVuRWxzZSxcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZi5qcydcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdC5qcydcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucy5qcydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZi5qcydcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcydcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMuanMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bS5qcydcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMnXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQuanMnXG5pbXBvcnQgeyBpZlRoZW5FbHNlIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZi10aGVuLWVsc2UuanMnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMuanMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aC5qcydcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtLmpzJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdC5qcydcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZi5qcydcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4uanMnXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlLmpzJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bS5qcydcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcy5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogaWZUaGVuRWxzZSxcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZi5qcydcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdC5qcydcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucy5qcydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZi5qcydcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcydcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMuanMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bS5qcydcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMnXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQuanMnXG5pbXBvcnQgeyBpZlRoZW5FbHNlIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZi10aGVuLWVsc2UuanMnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMuanMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aC5qcydcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtLmpzJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdC5qcydcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZi5qcydcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4uanMnXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlLmpzJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bS5qcydcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcy5qcydcbmltcG9ydCB7IHVuZXZhbHVhdGVkUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBpZlRoZW5FbHNlLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuZXZhbHVhdGVkUHJvcGVydGllczogdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZi5qcydcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdC5qcydcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucy5qcydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZi5qcydcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcydcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMuanMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bS5qcydcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMnXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQuanMnXG5pbXBvcnQgeyBpZlRoZW5FbHNlIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZi10aGVuLWVsc2UuanMnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMuanMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aC5qcydcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtLmpzJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdC5qcydcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZi5qcydcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4uanMnXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMnXG5pbXBvcnQgeyBwcm9wZXJ0eU5hbWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcm9wZXJ0eU5hbWVzLmpzJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkLmpzJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZS5qcydcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0uanMnXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMnXG5pbXBvcnQgeyB1bmV2YWx1YXRlZFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuZXZhbHVhdGVkUHJvcGVydGllcy5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogaWZUaGVuRWxzZSxcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcHJvcGVydHlOYW1lczogcHJvcGVydHlOYW1lcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmV2YWx1YXRlZFByb3BlcnRpZXM6IHVuZXZhbHVhdGVkUHJvcGVydGllcyxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgZHJhZnQwNCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNC5qcydcbmltcG9ydCBkcmFmdDA2IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA2LmpzJ1xuaW1wb3J0IGRyYWZ0MDcgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDcuanMnXG5pbXBvcnQgZHJhZnQyMDE5MDkgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAxOS0wOS5qcydcbmltcG9ydCBkcmFmdDIwMjAxMiBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzJ1xuaW1wb3J0IHsgaGFzT3duLCBpc0Jvb2xlYW4sIGNsb25lLCBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgeyBnZXRTY2hlbWFYT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEuanMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFZhbGlkYXRvciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5yZWZQYXJzZXIgPSBjb25maWcucmVmUGFyc2VyXG4gICAgdGhpcy52YWxpZGF0ZUZvcm1hdCA9IGNvbmZpZy52YWxpZGF0ZUZvcm1hdCA/IGNvbmZpZy52YWxpZGF0ZUZvcm1hdCA6IGZhbHNlXG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0MjAyMDEyXG5cbiAgICB0aGlzLmpzb25TY2hlbWFEcmFmdHMgPSB7XG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjJzogZHJhZnQwNCxcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA2L3NjaGVtYSMnOiBkcmFmdDA2LFxuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hIyc6IGRyYWZ0MDcsXG4gICAgICAnaHR0cHM6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQvMjAxOS0wOS9zY2hlbWEnOiBkcmFmdDIwMTkwOSxcbiAgICAgICdodHRwczovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC8yMDIwLTEyL3NjaGVtYSc6IGRyYWZ0MjAyMDEyXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIGdldEVycm9ycyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uc01lc3NhZ2VzID0gZ2V0U2NoZW1hWE9wdGlvbihzY2hlbWEsICdtZXNzYWdlcycpXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHNjaGVtYSlcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZXM6IGlzU2V0KHNjaGVtYU9wdGlvbnNNZXNzYWdlcykgPyBzY2hlbWFPcHRpb25zTWVzc2FnZXMgOiBbJ2ludmFsaWQnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRyYWZ0KS5mb3JFYWNoKChjb25zdHJhaW4pID0+IHtcbiAgICAgIGlmIChoYXNPd24oc2NoZW1hQ2xvbmUsIGNvbnN0cmFpbikpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5kcmFmdFtjb25zdHJhaW5dXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hT3B0aW9uc01lc3NhZ2VzKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlczogc2NoZW1hT3B0aW9uc01lc3NhZ2VzLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuL2hlbHBlcnMvc2NoZW1hLmpzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBDcmVhdGUgZnJvbSAnLi9qZWRpLmpzJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXIvcmVmLXBhcnNlci5qcydcbmltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lcy90aGVtZS5qcydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDMgZnJvbSAnLi90aGVtZXMvYm9vdHN0cmFwMy5qcydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi90aGVtZXMvYm9vdHN0cmFwNC5qcydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi90aGVtZXMvYm9vdHN0cmFwNS5qcydcbmltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4vZWRpdG9ycy9ib29sZWFuLmpzJ1xuaW1wb3J0IEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcydcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcydcbmltcG9ydCBFZGl0b3JCb29sZWFuQ2hlY2tib3ggZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4tY2hlY2tib3guanMnXG5pbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4vZWRpdG9ycy9zdHJpbmcuanMnXG5pbXBvcnQgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGZyb20gJy4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcydcbmltcG9ydCBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGZyb20gJy4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMnXG5pbXBvcnQgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy10ZXh0YXJlYS5qcydcbmltcG9ydCBFZGl0b3JTdHJpbmdBd2Vzb21wbGV0ZSBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWF3ZXNvbXBsZXRlLmpzJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0lucHV0IGZyb20gJy4vZWRpdG9ycy9zdHJpbmctaW5wdXQuanMnXG5pbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4vZWRpdG9ycy9udW1iZXIuanMnXG5pbXBvcnQgRWRpdG9yTnVtYmVyRW51bVJhZGlvIGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcydcbmltcG9ydCBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMnXG5pbXBvcnQgRWRpdG9yTnVtYmVySW5wdXQgZnJvbSAnLi9lZGl0b3JzL251bWJlci1pbnB1dC5qcydcbmltcG9ydCBFZGl0b3JPYmplY3RHcmlkIGZyb20gJy4vZWRpdG9ycy9vYmplY3QtZ3JpZC5qcydcbmltcG9ydCBFZGl0b3JPYmplY3ROYXYgZnJvbSAnLi9lZGl0b3JzL29iamVjdC1uYXYuanMnXG5pbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4vZWRpdG9ycy9vYmplY3QuanMnXG5pbXBvcnQgRWRpdG9yQXJyYXlOYXYgZnJvbSAnLi9lZGl0b3JzL2FycmF5LW5hdi5qcydcbmltcG9ydCBFZGl0b3JBcnJheSBmcm9tICcuL2VkaXRvcnMvYXJyYXkuanMnXG5pbXBvcnQgRWRpdG9yTXVsdGlwbGUgZnJvbSAnLi9lZGl0b3JzL211bHRpcGxlLmpzJ1xuaW1wb3J0IEVkaXRvcklmVGhlbkVsc2UgZnJvbSAnLi9lZGl0b3JzL2lmLXRoZW4tZWxzZS5qcydcbmltcG9ydCBFZGl0b3JOdWxsIGZyb20gJy4vZWRpdG9ycy9udWxsLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFNjaGVtYSxcbiAgVXRpbHMsXG4gIEVkaXRvckJvb2xlYW4sXG4gIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8sXG4gIEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0LFxuICBFZGl0b3JCb29sZWFuQ2hlY2tib3gsXG4gIEVkaXRvclN0cmluZyxcbiAgRWRpdG9yU3RyaW5nRW51bVJhZGlvLFxuICBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0LFxuICBFZGl0b3JTdHJpbmdUZXh0YXJlYSxcbiAgRWRpdG9yU3RyaW5nQXdlc29tcGxldGUsXG4gIEVkaXRvclN0cmluZ0lucHV0LFxuICBFZGl0b3JOdW1iZXIsXG4gIEVkaXRvck51bWJlckVudW1SYWRpbyxcbiAgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCxcbiAgRWRpdG9yTnVtYmVySW5wdXQsXG4gIEVkaXRvck9iamVjdEdyaWQsXG4gIEVkaXRvck9iamVjdE5hdixcbiAgRWRpdG9yT2JqZWN0LFxuICBFZGl0b3JBcnJheU5hdixcbiAgRWRpdG9yQXJyYXksXG4gIEVkaXRvck11bHRpcGxlLFxuICBFZGl0b3JJZlRoZW5FbHNlLFxuICBFZGl0b3JOdWxsLFxuICBUaGVtZSxcbiAgVGhlbWVCb290c3RyYXAzLFxuICBUaGVtZUJvb3RzdHJhcDQsXG4gIFRoZW1lQm9vdHN0cmFwNSxcbiAgUmVmUGFyc2VyLFxuICBDcmVhdGVcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==