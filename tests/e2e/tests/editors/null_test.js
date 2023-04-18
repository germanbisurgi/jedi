/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('null')

Scenario('should have @description', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I.fillField('#schemas', 'editors/null')
  I._waitForElement('.jedi-ready')
  I._waitForText('When a schema specifies a type of null, it has only one acceptable value: null.')
})
