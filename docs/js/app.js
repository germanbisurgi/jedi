window.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data() {
      return {
        editor: null,
        theme: 'barebones',
        themes: [
          'bootstrap5',
          'bootstrap4',
          'bootstrap3',
          'spectre',
          'material',
          'barebones'
        ],
        schemas: [
          {
            name: 'editors/all',
            url: './json/editors/all.json'
          },
          {
            name: 'editors/array',
            url: './json/editors/array.json'
          },
          {
            name: 'editors/boolean',
            url: './json/editors/boolean.json'
          },
          {
            name: 'editors/integer',
            url: './json/editors/integer.json'
          },
          {
            name: 'editors/null',
            url: './json/editors/null.json'
          },
          {
            name: 'editors/number',
            url: './json/editors/number.json'
          },
          {
            name: 'editors/object',
            url: './json/editors/object.json'
          },
          {
            name: 'editors/string',
            url: './json/editors/string.json'
          },
          {
            name: 'examples/resume-schema',
            url: './json/examples/resume-schema.json'
          },
          {
            name: 'examples/login',
            url: './json/examples/login.json'
          },
          {
            name: 'examples/contact',
            url: './json/examples/contact.json'
          },
          {
            name: 'validator/additionalProperties',
            url: './json/validator/additionalProperties.json'
          },
          {
            name: 'validator/allOf',
            url: './json/validator/allOf.json'
          },
          {
            name: 'validator/anyOf',
            url: './json/validator/anyOf.json'
          },
          {
            name: 'validator/const',
            url: './json/validator/const.json'
          },
          {
            name: 'validator/dependentRequired',
            url: './json/validator/dependentRequired.json'
          },
          {
            name: 'validator/enum',
            url: './json/validator/enum.json'
          },
          {
            name: 'validator/exclusiveMaximum',
            url: './json/validator/exclusiveMaximum.json'
          },
          {
            name: 'validator/exclusiveMinimum',
            url: './json/validator/exclusiveMinimum.json'
          },
          {
            name: 'validator/format',
            url: './json/validator/format.json'
          },
          {
            name: 'validator/if',
            url: './json/validator/if.json'
          },
          {
            name: 'validator/maxItems',
            url: './json/validator/maxItems.json'
          },
          {
            name: 'validator/maxLength',
            url: './json/validator/maxLength.json'
          },
          {
            name: 'validator/maxProperties',
            url: './json/validator/maxProperties.json'
          },
          {
            name: 'validator/items',
            url: './json/validator/items.json'
          },
          {
            name: 'validator/maximum',
            url: './json/validator/maximum.json'
          },
          {
            name: 'validator/minItems',
            url: './json/validator/minItems.json'
          },
          {
            name: 'validator/minLength',
            url: './json/validator/minLength.json'
          },
          {
            name: 'validator/minProperties',
            url: './json/validator/minProperties.json'
          },
          {
            name: 'validator/minimum',
            url: './json/validator/minimum.json'
          },
          {
            name: 'validator/multipleOf',
            url: './json/validator/multipleOf.json'
          },
          {
            name: 'validator/not',
            url: './json/validator/not.json'
          },
          {
            name: 'validator/oneOf',
            url: './json/validator/oneOf.json'
          },
          {
            name: 'validator/pattern',
            url: './json/validator/pattern.json'
          },
          {
            name: 'validator/patternProperties',
            url: './json/validator/patternProperties.json'
          },
          {
            name: 'validator/required',
            url: './json/validator/required.json'
          },
          {
            name: 'validator/type',
            url: './json/validator/type.json'
          },
          {
            name: 'validator/uniqueItems',
            url: './json/validator/uniqueItems.json'
          },
          {
            name: 'validator/message',
            url: './json/validator/message.json'
          },
          {
            name: 'meta-schema',
            url: './json/meta-schema.json'
          },
          {
            name: 'europass-xml-3.3.0',
            url: './json/europass.json'
          }
        ],
        options: {
          isEditor: true,
          container: document.querySelector('#jedi-container'),
          editableProperties: true,
          alwaysShowErrors: false,
          showRequiredOnly: false,
          theme: 'wireframe',
          rootName: 'root',
          schema: {}
        }
      }
    },
    mounted() {
      this.options.container = document.querySelector('#jedi-container')
      this.switchSchema()
      const theme = this.getQueryParam('theme')

      if (theme) {
        this.theme = theme
        this.options.theme = theme
      }
    },
    methods: {
      initEditor() {
        if (this.editor) {
          this.editor.destroy()
        }

        this.editor = new Jedi(this.options)
        window.editor = this.editor

        this.editor.on('change', () => {
          this.$refs.editorValue.value = JSON.stringify(this.editor.getValue(), null, 2)
          this.$refs.editorErrors.value = JSON.stringify(this.editor.validate(), null, 2)
        })

        this.$refs.editorValue.value = JSON.stringify(this.editor.getValue(), null, 2)
        this.$refs.editorErrors.value = JSON.stringify(this.editor.validate(), null, 2)
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
      reload() {
        console.log(this.theme)
        const newUrl = window.location.origin + "?theme=" + this.options.theme;
        window.open(newUrl, '_self')
      },
      async switchSchema() {
        const url = this.$refs.schema.value
        const response = await fetch(url);
        this.options.schema = await response.json()
        this.initEditor()
      },
      getQueryParam(name) {
        const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
      }
    }
  })
})
