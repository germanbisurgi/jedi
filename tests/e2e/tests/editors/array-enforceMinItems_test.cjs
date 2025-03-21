/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'editors/array-enforceMinItems'
const valueWithErrors = []
const valueDefault = ["value1"]

Feature('array-checkboxes')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@editor @array-enforceMinItems should have as many items as declared in "x-enforceMinItems', ({I}) => {
  I._waitForElement('#root-0')
  I._waitForElement('#root-1')
})