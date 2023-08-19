window.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data() {
      return {
        schemas: [
          {
            name: 'editors/all',
            url: '../json/editors/all.json'
          },
          {
            name: 'editors/array',
            url: '../json/editors/array.json'
          },
          {
            name: 'editors/array-nav-pills',
            url: '../json/editors/array-nav-pills.json'
          },
          {
            name: 'editors/array-nav-tabs',
            url: '../json/editors/array-nav-tabs.json'
          },
          {
            name: 'editors/boolean',
            url: '../json/editors/boolean.json'
          },
          {
            name: 'editors/integer',
            url: '../json/editors/integer.json'
          },
          {
            name: 'editors/null',
            url: '../json/editors/null.json'
          },
          {
            name: 'editors/number',
            url: '../json/editors/number.json'
          },
          {
            name: 'editors/object',
            url: '../json/editors/object.json'
          },
          {
            name: 'editors/object-grid',
            url: '../json/editors/object-grid.json'
          },
          {
            name: 'editors/object-nav-pills',
            url: '../json/editors/object-nav-pills.json'
          },
          {
            name: 'editors/object-nav-tabs',
            url: '../json/editors/object-nav-tabs.json'
          },
          {
            name: 'editors/string',
            url: '../json/editors/string.json'
          },
          {
            name: 'examples/resume-schema',
            url: '../json/examples/resume-schema.json'
          },
          {
            name: 'examples/login',
            url: '../json/examples/login.json'
          },
          {
            name: 'examples/contact',
            url: '../json/examples/contact.json'
          },
          {
            name: 'validator/additionalProperties',
            url: '../json/validator/additionalProperties.json'
          },
          {
            name: 'validator/allOf',
            url: '../json/validator/allOf.json'
          },
          {
            name: 'validator/anyOf',
            url: '../json/validator/anyOf.json'
          },
          {
            name: 'validator/const',
            url: '../json/validator/const.json'
          },
          {
            name: 'validator/contains',
            url: '../json/validator/contains.json'
          },
          {
            name: 'validator/dependentRequired',
            url: '../json/validator/dependentRequired.json'
          },
          {
            name: 'validator/dependentSchemas',
            url: '../json/validator/dependentSchemas.json'
          },
          {
            name: 'validator/enum',
            url: '../json/validator/enum.json'
          },
          {
            name: 'validator/exclusiveMaximum',
            url: '../json/validator/exclusiveMaximum.json'
          },
          {
            name: 'validator/exclusiveMinimum',
            url: '../json/validator/exclusiveMinimum.json'
          },
          {
            name: 'validator/format',
            url: '../json/validator/format.json'
          },
          {
            name: 'validator/if-then-else',
            url: '../json/validator/if-then-else.json'
          },
          {
            name: 'validator/if-then',
            url: '../json/validator/if-then.json'
          },
          {
            name: 'validator/if-else',
            url: '../json/validator/if-else.json'
          },
          {
            name: 'validator/maxItems',
            url: '../json/validator/maxItems.json'
          },
          {
            name: 'validator/maxLength',
            url: '../json/validator/maxLength.json'
          },
          {
            name: 'validator/maxProperties',
            url: '../json/validator/maxProperties.json'
          },
          {
            name: 'validator/items',
            url: '../json/validator/items.json'
          },
          {
            name: 'validator/maxContains',
            url: '../json/validator/maxContains.json'
          },
          {
            name: 'validator/minContains',
            url: '../json/validator/minContains.json'
          },
          {
            name: 'validator/maximum',
            url: '../json/validator/maximum.json'
          },
          {
            name: 'validator/minItems',
            url: '../json/validator/minItems.json'
          },
          {
            name: 'validator/minLength',
            url: '../json/validator/minLength.json'
          },
          {
            name: 'validator/minProperties',
            url: '../json/validator/minProperties.json'
          },
          {
            name: 'validator/minimum',
            url: '../json/validator/minimum.json'
          },
          {
            name: 'validator/multipleOf',
            url: '../json/validator/multipleOf.json'
          },
          {
            name: 'validator/not',
            url: '../json/validator/not.json'
          },
          {
            name: 'validator/oneOf',
            url: '../json/validator/oneOf.json'
          },
          {
            name: 'validator/pattern',
            url: '../json/validator/pattern.json'
          },
          {
            name: 'validator/patternProperties',
            url: '../json/validator/patternProperties.json'
          },
          {
            name: 'validator/required',
            url: '../json/validator/required.json'
          },
          {
            name: 'validator/type',
            url: '../json/validator/type.json'
          },
          {
            name: 'validator/uniqueItems',
            url: '../json/validator/uniqueItems.json'
          },
          {
            name: 'validator/messages',
            url: '../json/validator/messages.json'
          },
          {
            name: 'meta-schema',
            url: '../json/meta-schema.json'
          },
          {
            name: 'europass-xml-3.3.0',
            url: '../json/europass.json'
          }
        ],
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
          'font-awesome-3',
          'font-awesome-4',
          'font-awesome-5',
          'font-awesome-6'
        ],
        alwaysShowErrors: false,
        editableProperties: true,
        showRequiredOnly: false,
        schema: {},
        editor: null,
        isEditor: true,
        theme: 'barebones',
        iconLib: 'bootstrap-icons'
      }
    },
    created() {
      this.theme = this.getQueryParam('theme') || 'bootstrap5'
      this.iconLib = this.getQueryParam('iconLib') || 'font-awesome-5'
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

      this.switchSchema()
    },
    computed: {
      errorCount() {
        return this.editor ? this.editor.getErrors().length : 0
      }
    },
    methods: {
      initEditor() {
        if (this.editor) {
          this.editor.destroy()
        }

        const options = {
          alwaysShowErrors: this.alwaysShowErrors,
          container: document.querySelector('#jedi-container'),
          editableProperties: this.editableProperties,
          isEditor: true,
          iconLib: this.iconLib,
          showRequiredOnly: this.showRequiredOnly,
          schema: this.schema,
          theme: this.theme
        }

        this.editor = new Jedi(options)
        window.editor = this.editor

        this.editor.on('change', this.editorChangeHandler)
        this.editorChangeHandler()
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

        window.open(newUrl, '_self')
      },
      async switchSchema() {
        const url = this.$refs.schemas.value
        const response = await fetch(url)
        this.schema = await response.json()
        this.initEditor()
      },
      getQueryParam(name) {
        const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search)
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
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
