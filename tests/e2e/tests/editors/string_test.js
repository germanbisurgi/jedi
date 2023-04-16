/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('string')

Scenario('should have @title and @description', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/string')
  I._waitForElement('.jedi-ready')
  I._waitForText('String', 'label')
  I._waitForText('The string type is used for strings of text. It may contain Unicode characters.')
})
