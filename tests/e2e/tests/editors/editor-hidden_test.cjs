/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'editors/editor-hidden'

Feature('x-hidden')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@editor with @x-hidden option should be hidden', ({I}) => {
  I._waitForVisible('#root-visible')
  I._waitForInvisible('#root-hidden')
})