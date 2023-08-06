window.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data() {
      return {
        debug: true,
        json: [],
        filterslist: [
          'access',
          'kind'
        ]
      }
    },
    computed: {
      filters() {
        const filters = {}

        this.json.forEach((doc) => {
          Object.keys(doc).forEach((property) => {
            if (this.filterslist.includes(property)) {

              if (!filters[property]) {
                filters[property] = []
              }

              filters[property].push(doc[property])

              filters[property] = [...new Set(filters[property])]
            }
          })
        })

        return filters
      },
      docItems() {
        return this.json
      },
      docs() {
        return [...this.modules, ...this.classes]
      },
      classes() {
        return this.documented.filter((data) => {
          return data.kind === 'class'
        })
      },
      modules() {
        return this.documented.filter((data) => {
          return data.kind === 'module'
        })
      },
      documented() {
        return this.json.filter((data) => {
          return !data.undocumented
        })
      },
      undocumented() {
        return this.json.filter((data) => {
          return data.undocumented
        })
      }
    },
    created() {
      this.loadJson()
    },
    methods: {
      changeTab(href) {
        const navItems = document.querySelectorAll('[href="' + href + '"]')

        navItems.forEach((navItem) => {
          navItem.click()
        })
      },
      getProperties(className) {
        return this.documented.filter((data) => {
          return data.memberof === className && data.kind === 'member'
        })
      },
      getMethods(className) {
        return this.documented.filter((data) => {
          return data.memberof === className && data.kind === 'function'
        })
      },
      getModuleMembers(moduleName) {
        return this.documented.filter((data) => {
          return data.memberof === 'module:' + moduleName
        })
      },
      getClass(className) {
        return this.classes.find((data) => {
          return data.name === className
        })
      },
      getParentClass(doc) {
        return doc.augments[0]
      },
      getParamsNames (params) {
        const reducer = (accumulator, currentValue) => {
          accumulator.push(currentValue.name)
          return accumulator
        }

        return params.reduce(reducer, [])
      },
      getReturnsNames (returns) {
        const reducer = (accumulator, currentValue) => {
          accumulator.push(currentValue.type.names)
          return accumulator
        }

        return returns.reduce(reducer, [])
      },
      getInheritance(doc, lastInheritance = []) {
        const inheritance = [...lastInheritance]

        if (doc.augments) {
          const parentClass = doc.augments[0]
          inheritance.push(parentClass)
          const parentClassDoc = this.getClass(parentClass)

          if (parentClassDoc.augments) {
            return this.getInheritance(parentClassDoc, inheritance)
          }
        }

        return inheritance
      },
      async loadJson() {
        const url = './jsdoc.json'
        const response = await fetch(url);
        this.json = await response.json()
      }
    }
  })
})
