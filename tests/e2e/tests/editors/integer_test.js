/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('integer')

Scenario('should have @title and @description', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)

  I.fillField('#schemas', 'editors/integer')
  I._waitForElement('.jedi-ready')
  I._waitForText('Integer', 'label')
  I._waitForText('The integer type is used for integral numbers.')
})
