<template>
  <div>
    <header>
      <h1>Playground</h1>
    </header>

    <div class="row">
      <div class="col-xs-12 col-md-8">
        <main>
          <div class="btn-group">
            <button class="btn btn-primary" id="disable-editor" @click="disableEditor()">Disable</button>
            <button class="btn btn-primary" id="enable-editor" @click="enableEditor()">Enable</button>
            <button class="btn btn-primary" id="show-validation-errors" @click="showValidationErrors()">Show validation errors</button>
            <button class="btn btn-primary" id="destroy-editor" @click="destroyEditor()">Destroy</button>
          </div>

          <br>
          <br>

          <form action="" method="POST">
            <div ref="jediContainer" id="jedi-container"></div>
          </form>
        </main>
      </div>

      <div class="col-xs-12 col-md-4">
        <aside>
          <div class="form-group mb-3">
            <label for="examples">Examples</label>
            <select class="form-control" id="examples" v-model="example" @change="reload">
              <optgroup v-for="(options, category) in examples" :label="category" :key="category">
                <option v-for="(value, key) in options" :value="key" :key="key">
                  {{ key }}
                </option>
              </optgroup>
            </select>
          </div>

          <div class="form-group mb-3">
            <label for="editor-value">Value</label>
            <textarea ref="editorValue" class="form-control" id="editor-value" style="font-size: 14px; font-family: monospace;height: 200px;"></textarea>
          </div>

          <button class="btn btn-primary btn-block mb-3" id="set-value" @click="setEditorValue()">Set value</button>

          <div class="form-group mb-3">
            <label for="editor-errors">
              <span>Errors: </span>
              <span>{{ errorCount }}</span>
            </label>
            <textarea ref="editorErrors" class="form-control" id="editor-errors" style="font-size: 14px; font-family: monospace; height: 200px;"></textarea>
          </div>

          <div class="form-group mb-3">
            <label for="schema">Schema</label>
            <textarea ref="schema" class="form-control" id="schema" style="font-size: 14px; font-family: monospace; height: 200px;"></textarea>
          </div>

          <button class="btn btn-primary btn-block mb-3" id="set-schema" @click="setSchema()">Set schema</button>

          <div class="form-group mb-3">
            <label for="theme">theme</label>
            <select class="form-control" id="theme" v-model="theme" @change="reload()">
              <option v-for="theme in themes" :value="theme">{{ theme }}</option>
            </select>
          </div>

          <div class="form-group mb-3">
            <label for="icon-lib">iconLib</label>
            <select class="form-control" id="icon-lib" v-model="iconLib" @change="reload()">
              <option v-for="iconLib in iconLibs" :value="iconLib">{{ iconLib }}</option>
            </select>
          </div>

          <div class="form-group mb-3">
            <label for="show-errors">showErrors</label>
            <select class="form-control" id="show-errors" v-model="showErrors" @change="reload()">
              <option v-for="showErrors in showErrorsOptions" :value="showErrors">{{ showErrors }}</option>
            </select>
          </div>

          <div class="form-group mb-3">
            <input type="checkbox" id="enablePropertiesToggle" v-model="enablePropertiesToggle" @change="initEditor()">
            <label for="enablePropertiesToggle">enablePropertiesToggle</label>
          </div>

          <div class="form-group mb-3">
            <input type="checkbox" id="enableCollapseToggle" v-model="enableCollapseToggle" @change="initEditor()">
            <label for="enableCollapseToggle">enableCollapseToggle</label>
          </div>

          <div class="form-group mb-3">
            <input type="checkbox" id="startCollapsed" v-model="startCollapsed" @change="initEditor()">
            <label for="startCollapsed">startCollapsed</label>
          </div>

          <div class="form-group mb-3">
            <input type="checkbox" id="validateFormat" v-model="validateFormat" @change="initEditor()">
            <label for="validateFormat">validateFormat</label>
          </div>

          <div class="form-group mb-3">
            <input type="checkbox" id="mergeAllOf" v-model="mergeAllOf" @change="initEditor()">
            <label for="mergeAllOf">mergeAllOf</label>
          </div>

          <div class="form-group mb-3">
            <input type="checkbox" id="enforceEnumDefault" v-model="enforceEnumDefault" @change="initEditor()">
            <label for="enforceEnumDefault">enforceEnumDefault</label>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>

import EditorStringCustom from "./js/custom-editor.js";

import Jedi from '/src/index.js'
import all from './json/editors/all.json'
import array from './json/editors/array.json'
import arrayEnumItems from './json/editors/array-enum-items.json'
import arrayNavTable from './json/editors/array-table.json'
import arrayNavPills from './json/editors/array-nav-pills.json'
import arrayNavTabs from './json/editors/array-nav-tabs.json'
import booleanCheckbox from './json/editors/boolean-checkbox.json'
import booleanSelect from './json/editors/boolean-select.json'
import booleanRadio from './json/editors/boolean-radio.json'
import integerInput from './json/editors/integer-input.json'
import nullJson from './json/editors/null.json'
import numberInput from './json/editors/number-input.json'
import objectJson from './json/editors/object.json'
import objectGrid from './json/editors/object-grid.json'
import objectNavPills from './json/editors/object-nav-pills.json'
import objectNavTabs from './json/editors/object-nav-tabs.json'
import objectPropertyOrder from './json/editors/object-propertyOrder.json'
import stringInput from './json/editors/string-input.json'
import stringTextarea from './json/editors/string-textarea.json'
import resumeSchema from './json/examples/resume-schema.json'
import loginExample from './json/examples/login.json'
import contactExample from './json/examples/contact.json'
import additionalProperties from './json/validator/additionalProperties.json'
import allOf from './json/validator/allOf.json'
import anyOf from './json/validator/anyOf.json'
import constJson from './json/validator/const.json'
import contains from './json/validator/contains.json'
import dependentRequired from './json/validator/dependentRequired.json'
import dependentSchemas from './json/validator/dependentSchemas.json'
import enumValidator from './json/validator/enum.json'
import exclusiveMaximum from './json/validator/exclusiveMaximum.json'
import exclusiveMinimum from './json/validator/exclusiveMinimum.json'
import format from './json/validator/format.json'
import ifElse from './json/validator/if-else.json'
import ifThen from './json/validator/if-then.json'
import ifThenElse from './json/validator/if-then-else.json'
import ifThenElseAllOf from './json/validator/if-then-else-allOf.json'
import ifThenElseNested from './json/validator/if-then-else-nested.json'
import ifThenElseNestedSimple from './json/validator/if-then-else-nested-simple.json'
import ifThenElseNestedComplex from './json/validator/if-then-else-nested-complex.json'
import ifThenElseNestedComplex2 from './json/validator/if-then-else-nested-complex-2.json'
import ifThenElseDeeplyNestedAndUnselected from './json/validator/if-then-else-deeply-nested-and-unselected.json'
import items from './json/validator/items.json'
import maxContains from './json/validator/maxContains.json'
import maximum from './json/validator/maximum.json'
import maxItems from './json/validator/maxItems.json'
import maxLength from './json/validator/maxLength.json'
import maxProperties from './json/validator/maxProperties.json'
import minContains from './json/validator/minContains.json'
import minimum from './json/validator/minimum.json'
import minItems from './json/validator/minItems.json'
import minLength from './json/validator/minLength.json'
import minProperties from './json/validator/minProperties.json'
import multipleOf from './json/validator/multipleOf.json'
import notValidator from './json/validator/not.json'
import oneOf from './json/validator/oneOf.json'
import pattern from './json/validator/pattern.json'
import patternProperties from './json/validator/patternProperties.json'
import prefixItems from './json/validator/prefixItems.json'
import propertyNames from './json/validator/propertyNames.json'
import required from './json/validator/required.json'
import typeValidator from './json/validator/type.json'
import uniqueItems from './json/validator/uniqueItems.json'
import messages from './json/validator/messages.json'
import awesomplete from './json/plugins/awesomplete.json'
import quill from './json/plugins/quill.json'
import jodit from './json/plugins/jodit.json'
import flatpickr from './json/plugins/flatpickr.json'
import raty from './json/plugins/raty.json'
import custom from './json/custom/custom.json'
import metaSchema from './json/meta-schema.json'
import europass from './json/europass.json'
import testJson from './json/test.json'

export default {
  data() {
    return {
      errorCount: 0,
      examples: {
        Editors: {
          'editors/all': all,
          'editors/array': array,
          'editors/array-enum-items': arrayEnumItems,
          'editors/array-table': arrayNavTable,
          'editors/array-nav-pills': arrayNavPills,
          'editors/array-nav-tabs': arrayNavTabs,
          'editors/boolean-checkbox': booleanCheckbox,
          'editors/boolean-select': booleanSelect,
          'editors/boolean-radio': booleanRadio,
          'editors/integer-input': integerInput,
          'editors/null': nullJson,
          'editors/number-input': numberInput,
          'editors/object': objectJson,
          'editors/object-grid': objectGrid,
          'editors/object-nav-pills': objectNavPills,
          'editors/object-nav-tabs': objectNavTabs,
          'editors/object-propertyOrder': objectPropertyOrder,
          'editors/string-input': stringInput,
          'editors/string-textarea': stringTextarea
        },
        Validators: {
          'validator/additionalProperties': additionalProperties,
          'validator/allOf': allOf,
          'validator/anyOf': anyOf,
          'validator/const': constJson,
          'validator/contains': contains,
          'validator/dependentRequired': dependentRequired,
          'validator/dependentSchemas': dependentSchemas,
          'validator/enum': enumValidator,
          'validator/exclusiveMaximum': exclusiveMaximum,
          'validator/exclusiveMinimum': exclusiveMinimum,
          'validator/format': format,
          'validator/if-else': ifElse,
          'validator/if-then': ifThen,
          'validator/if-then-else': ifThenElse,
          'validator/if-then-else-allOf': ifThenElseAllOf,
          'validator/if-then-else-nested': ifThenElseNested,
          'validator/if-then-else-nested-simple': ifThenElseNestedSimple,
          'validator/if-then-else-nested-complex': ifThenElseNestedComplex,
          'validator/if-then-else-nested-complex-2': ifThenElseNestedComplex2,
          'validator/if-then-else-deeply-nested-and-unselected': ifThenElseDeeplyNestedAndUnselected,
          'validator/items': items,
          'validator/maxContains': maxContains,
          'validator/maximum': maximum,
          'validator/maxItems': maxItems,
          'validator/maxLength': maxLength,
          'validator/maxProperties': maxProperties,
          'validator/minContains': minContains,
          'validator/minimum': minimum,
          'validator/minItems': minItems,
          'validator/minLength': minLength,
          'validator/minProperties': minProperties,
          'validator/multipleOf': multipleOf,
          'validator/not': notValidator,
          'validator/oneOf': oneOf,
          'validator/pattern': pattern,
          'validator/patternProperties': patternProperties,
          'validator/prefixItems': prefixItems,
          'validator/propertyNames': propertyNames,
          'validator/required': required,
          'validator/type': typeValidator,
          'validator/uniqueItems': uniqueItems,
          'validator/messages': messages,
        },
        Plugins: {
          'plugins/awesomplete': awesomplete,
          'plugins/quill': quill,
          'plugins/jodit': jodit,
          'plugins/flatpickr': flatpickr,
          'plugins/raty': raty,
        },
        Examples: {
          'examples/resume-schema': resumeSchema,
          'examples/login': loginExample,
          'examples/contact': contactExample,
          'custom/custom': custom,
          'meta-schema': metaSchema,
          'europass-xml-3.3.0': europass,
          'test': testJson,
        }
      },
      example: 'editors/all',
      themes: [
        'bootstrap5',
        'bootstrap4',
        'bootstrap3',
        'barebones'
      ],
      iconLibs: [
        'none',
        'glyphicons',
        'bootstrap-icons',
        'fontawesome3',
        'fontawesome4',
        'fontawesome5',
        'fontawesome6'
      ],
      showErrorsOptions: [
        'never',
        'change',
        'always'
      ],
      enablePropertiesToggle: true,
      enableCollapseToggle: true,
      startCollapsed: false,
      schema: all,
      editor: null,
      theme: 'barebones',
      iconLib: 'bootstrap-icons',
      showErrors: 'change',
      validateFormat: false,
      mergeAllOf: false,
      enforceEnumDefault: false
    }
  },
  created() {
    this.theme = this.getQueryParam('theme') || 'bootstrap5'
    this.iconLib = this.getQueryParam('iconLib') || 'fontawesome5'
    this.example = this.getQueryParam('example') || 'editors/all'
    this.showErrors = this.getQueryParam('showErrors') || 'change'
    this.validateFormat = this.getQueryParam('validateFormat') ? this.parseBooleanString(this.getQueryParam('validateFormat')) : false
    this.mergeAllOf = this.getQueryParam('mergeAllOf') ? this.parseBooleanString(this.getQueryParam('mergeAllOf')) : false
    this.enforceEnumDefault = this.getQueryParam('enforceEnumDefault') ? this.parseBooleanString(this.getQueryParam('enforceEnumDefault')) : true
    this.enablePropertiesToggle = this.getQueryParam('enablePropertiesToggle') ? this.parseBooleanString(this.getQueryParam('enablePropertiesToggle')) : true
    this.enableCollapseToggle = this.getQueryParam('enableCollapseToggle') ? this.parseBooleanString(this.getQueryParam('enableCollapseToggle')) : true
  },
  mounted() {
    switch (this.theme) {
      case 'bootstrap3':
        this.loadStylesheets([
          'https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css'
        ])

        this.loadScripts([
          'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
          'https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js'
        ])
        break;
      case 'bootstrap4':
        this.loadStylesheets([
          'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css',
        ])

        this.loadScripts([
          'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
          'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
          'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js'
        ])
        break;
      case 'bootstrap5':
        this.loadStylesheets([
          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
        ])

        this.loadScripts([
          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
        ])
        break;
    }

    switch (this.iconLib) {
      case 'bootstrap-icons':
        this.loadStylesheets([
          'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css'
        ])
        break;
      case 'fontawesome3':
        this.loadStylesheets([
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/css/font-awesome.css',
        ])
        break;
      case 'fontawesome4':
        this.loadStylesheets([
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css'
        ])
        break;
      case 'fontawesome5':
        this.loadStylesheets([
          'https://use.fontawesome.com/releases/v5.6.1/css/all.css'
        ])
        break;
      case 'fontawesome6':
        this.loadStylesheets([
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
        ])
        break;
    }

    this.initEditor()
  },
  methods: {
    getThemeInstance(name) {
      let theme

      switch (name) {
        case 'barebones':
          theme = new Jedi.Theme()
          break
        case 'bootstrap3':
          theme = new Jedi.ThemeBootstrap3()
          break
        case 'bootstrap4':
          theme = new Jedi.ThemeBootstrap4()
          break
        case 'bootstrap5':
          theme = new Jedi.ThemeBootstrap5()
          break
      }

      return theme
    },
    getSchema() {
      const examples = Object.assign({}, ...Object.values(this.examples));
      return examples[this.example] || null;
    },
    async initEditor(schema) {
      if (this.editor) {
        this.editor.destroy()
      }

      this.schema = schema ?? this.getSchema()

      const refParser = new Jedi.RefParser()
      await refParser.dereference(this.schema)

      const options = {
        container: document.querySelector('#jedi-container'),
        enablePropertiesToggle: this.enablePropertiesToggle,
        enableCollapseToggle: this.enableCollapseToggle,
        startCollapsed: this.startCollapsed,
        iconLib: this.iconLib,
        showErrors: this.showErrors,
        validateFormat: this.validateFormat,
        mergeAllOf: this.mergeAllOf,
        enforceEnumDefault: this.enforceEnumDefault,
        schema: this.schema,
        theme: this.getThemeInstance(this.theme),
        refParser,
        customEditors: [
          EditorStringCustom
        ]
      }

      this.editor = new Jedi.Create(options)
      window.editor = this.editor
      this.editorChangeHandler()
      this.editor.on('change', this.editorChangeHandler)
    },
    editorChangeHandler() {
      const errors = this.editor.getErrors()
      this.errorCount = errors.length
      this.$refs.editorErrors.value = JSON.stringify(errors, null, 2)
      this.$refs.editorValue.value = JSON.stringify(this.editor.getValue(), null, 2)
      this.$refs.schema.value = JSON.stringify(this.editor.schema, null, 2)
    },
    showValidationErrors() {
      const errors = this.editor.getErrors()
      this.editor.showValidationErrors(errors)
    },
    destroyEditor() {
      this.editor.destroy()
    },
    enableEditor() {
      this.editor.enable()
    },
    disableEditor() {
      this.editor.disable()
    },
    setEditorValue() {
      this.editor.setValue(JSON.parse(this.$refs.editorValue.value))
    },
    setSchema() {
      this.schema = JSON.parse(this.$refs.schema.value)
      this.initEditor(this.schema)
    },
    reload() {
      let newUrl = window.location.origin + window.location.pathname
      newUrl += "?theme=" + this.theme
      newUrl += "&iconLib=" + this.iconLib
      newUrl += "&example=" + this.example
      newUrl += "&showErrors=" + this.showErrors
      newUrl += "&validateFormat=" + this.validateFormat
      newUrl += "&mergeAllOf=" + this.mergeAllOf
      newUrl += "&enforceEnumDefault=" + this.enforceEnumDefault
      newUrl += "&enablePropertiesToggle=" + this.enablePropertiesToggle
      newUrl += "&enableCollapseToggle=" + this.enableCollapseToggle

      window.open(newUrl, '_self')
    },
    getQueryParam(name) {
      const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search)
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
    },
    parseBooleanString(string) {
      return string === 'true'
    },
    loadStylesheets(resources) {
      const head = document.head;

      for (let i = 0; i < resources.length; i++) {
        const resource = resources[i];
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = resource;
        head.appendChild(linkElement);
      }
    },
    loadScripts(scriptUrls, callback) {
      let currentIndex = 0;

      function loadScript(url) {
        const script = document.createElement("script");
        script.src = url;
        script.onload = function () {
          currentIndex++;
          if (currentIndex < scriptUrls.length) {
            loadScript(scriptUrls[currentIndex]);
          } else {
            if (typeof callback === "function") {
              callback();
            }
          }
        };
        document.head.appendChild(script);
      }

      if (scriptUrls.length > 0) {
        loadScript(scriptUrls[0]);
      }
    }
  }
}
</script>