/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('string')

Scenario('@editor-string should have @title and @description', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', 'editors/string')
  I._waitForElement('.jedi-ready')
  I._waitForText('String', 'label')
  I._waitForText('The string type is used for strings of text. It may contain Unicode characters.')
})
