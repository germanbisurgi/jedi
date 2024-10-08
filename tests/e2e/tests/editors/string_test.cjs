/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('string')

Scenario('@editor-string @description @title should have title and description', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '../json/editors/string.json')
  I._waitForElement('.jedi-ready')
  I._waitForText('String', 'label')
  I._waitForText('The string type is used for strings of text. It may contain Unicode characters.')
})
