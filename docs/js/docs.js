window.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data() {
      return {
        debug: false,
        json: []
      }
    },
    computed: {
      classes () {
        return this.documented.filter((data) => {
          return data.kind === 'class'
        })
      },
      documented () {
        return this.json.filter((data) => {
          return !data.undocumented
        })
      },
      undocumented () {
        return this.json.filter((data) => {
          return data.undocumented
        })
      }
    },
    created() {
      this.loadJson()
    },
    mounted() {},
    methods: {
      changeTab (href) {
        document.querySelector('[href="' + href + '"]').click()
      },
      getProperties (className) {
        return this.documented.filter((data) => {
          return data.memberof === className && data.kind === 'member'
        })
      },
      getMethods (className) {
        return this.documented.filter((data) => {
          return data.memberof === className && data.kind === 'function'
        })
      },
      getClass (className) {
        return this.classes.find((data) => {
          return data.name === className
        })
      },
      getParentClass (doc) {
        console.log(doc)
        return doc.augments[0]
      },
      getInheritance (doc, lastInheritance = []) {
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
