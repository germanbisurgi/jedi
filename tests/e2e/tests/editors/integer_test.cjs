/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('integer')

Scenario('@editor-integer @description @title should have title and description', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '/json/editors/integer.json')
  I._waitForElement('.jedi-ready')
  I._waitForText('Integer', 'label')
  I._waitForText('The integer type is used for integral numbers.')
})
