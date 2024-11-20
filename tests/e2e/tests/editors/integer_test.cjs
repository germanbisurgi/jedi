/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('integer')

Scenario('@editor-integer should have @title and @description', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', 'editors/integer')
  I._waitForElement('.jedi-ready')
  I._waitForText('Integer', 'label')
  I._waitForText('The integer type is used for integral numbers.')
})
