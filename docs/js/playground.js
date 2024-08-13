window.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data() {
      return {
        examples: {
          'editors/all': '../json/editors/all.json',
          'editors/array': '../json/editors/array.json',
          'editors/array-nav-pills': '../json/editors/array-nav-pills.json',
          'editors/array-nav-tabs': '../json/editors/array-nav-tabs.json',
          'editors/boolean': '../json/editors/boolean.json',
          'editors/integer': '../json/editors/integer.json',
          'editors/null': '../json/editors/null.json',
          'editors/number': '../json/editors/number.json',
          'editors/object': '../json/editors/object.json',
          'editors/object-grid': '../json/editors/object-grid.json',
          'editors/object-nav-pills': '../json/editors/object-nav-pills.json',
          'editors/object-nav-tabs': '../json/editors/object-nav-tabs.json',
          'editors/string': '../json/editors/string.json',
          'examples/resume-schema': '../json/examples/resume-schema.json',
          'examples/login': '../json/examples/login.json',
          'examples/contact': '../json/examples/contact.json',
          'validator/additionalProperties': '../json/validator/additionalProperties.json',
          'validator/allOf': '../json/validator/allOf.json',
          'validator/anyOf': '../json/validator/anyOf.json',
          'validator/const': '../json/validator/const.json',
          'validator/contains': '../json/validator/contains.json',
          'validator/dependentRequired': '../json/validator/dependentRequired.json',
          'validator/dependentSchemas': '../json/validator/dependentSchemas.json',
          'validator/enum': '../json/validator/enum.json',
          'validator/exclusiveMaximum': '../json/validator/exclusiveMaximum.json',
          'validator/exclusiveMinimum': '../json/validator/exclusiveMinimum.json',
          'validator/format': '../json/validator/format.json',
          'validator/if-else': '../json/validator/if-else.json',
          'validator/if-then': '../json/validator/if-then.json',
          'validator/if-then-else': '../json/validator/if-then-else.json',
          'validator/if-then-else-allOf': '../json/validator/if-then-else-allOf.json',
          'validator/if-then-else-nested': '../json/validator/if-then-else-nested.json',
          'validator/items': '../json/validator/items.json',
          'validator/maxContains': '../json/validator/maxContains.json',
          'validator/maximum': '../json/validator/maximum.json',
          'validator/maxItems': '../json/validator/maxItems.json',
          'validator/maxLength': '../json/validator/maxLength.json',
          'validator/maxProperties': '../json/validator/maxProperties.json',
          'validator/minContains': '../json/validator/minContains.json',
          'validator/minimum': '../json/validator/minimum.json',
          'validator/minItems': '../json/validator/minItems.json',
          'validator/minLength': '../json/validator/minLength.json',
          'validator/minProperties': '../json/validator/minProperties.json',
          'validator/multipleOf': '../json/validator/multipleOf.json',
          'validator/not': '../json/validator/not.json',
          'validator/oneOf': '../json/validator/oneOf.json',
          'validator/pattern': '../json/validator/pattern.json',
          'validator/patternProperties': '../json/validator/patternProperties.json',
          'validator/prefixItems': '../json/validator/prefixItems.json',
          'validator/propertyNames': '../json/validator/propertyNames.json',
          'validator/required': '../json/validator/required.json',
          'validator/type': '../json/validator/type.json',
          'validator/uniqueItems': '../json/validator/uniqueItems.json',
          'validator/messages': '../json/validator/messages.json',
          'plugins/awesomplete': '../json/plugins/awesomplete.json',
          'meta-schema': '../json/meta-schema.json',
          'europass-xml-3.3.0': '../json/europass.json',
          'test': '../json/test.json',
        },
        example: '../json/editors/all.json',
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
        schema: {},
        editor: null,
        theme: 'barebones',
        iconLib: 'bootstrap-icons',
        showErrors: 'change',
        validateFormat: false,
        mergeAllOf: false
      }
    },
    created() {
      this.theme = this.getQueryParam('theme') || 'bootstrap5'
      this.iconLib = this.getQueryParam('iconLib') || 'fontawesome5'
      this.example = this.getQueryParam('example') || '../json/editors/all.json'
      this.showErrors = this.getQueryParam('showErrors') || 'change'
      this.validateFormat = this.getQueryParam('validateFormat') ? this.parseBooleanString(this.getQueryParam('validateFormat')) : false
      this.mergeAllOf = this.getQueryParam('mergeAllOf') ? this.parseBooleanString(this.getQueryParam('mergeAllOf')) : false
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

      this.loadSchema()
    },
    computed: {
      errorCount() {
        return this.editor ? this.editor.getErrors().length : 0
      }
    },
    methods: {
      async initEditor() {
        if (this.editor) {
          this.editor.destroy()
        }

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
          schema: this.schema,
          theme: this.theme,
          refParser
        }

        this.editor = new Jedi.Jedi(options)
        window.editor = this.editor
        this.editorChangeHandler()
        this.editor.on('change', this.editorChangeHandler)
      },
      editorChangeHandler() {
        this.$refs.editorErrors.value = JSON.stringify(this.editor.getErrors(), null, 2)
        this.$refs.editorValue.value = JSON.stringify(this.editor.getValue(), null, 2)
        this.$refs.schema.value = JSON.stringify(this.editor.schema, null, 2)
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
        this.initEditor()
      },
      reload() {
        let newUrl = window.location.origin + window.location.pathname
        newUrl += "?theme=" + this.theme
        newUrl += "&iconLib=" + this.iconLib
        newUrl += "&example=" + this.example
        newUrl += "&showErrors=" + this.showErrors
        newUrl += "&validateFormat=" + this.validateFormat
        newUrl += "&mergeAllOf=" + this.mergeAllOf

        window.open(newUrl, '_self')
      },
      async loadSchema() {
        const url = this.example
        const response = await fetch(url)
        this.schema = await response.json()
        this.initEditor()
      },
      getQueryParam(name) {
        const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search)
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
      },
      parseBooleanString (string) {
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
  })
})
