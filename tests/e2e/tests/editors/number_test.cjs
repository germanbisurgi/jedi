/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('number')

Scenario('@editor-number @description @title should have title and description', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '/json/editors/number.json')
  I._waitForElement('.jedi-ready')
  I._waitForText('Number', 'label')
  I._waitForText('The number type is used for any numeric type, either integers or floating point numbers.')
})
