/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('string')

Scenario('should have @title and @description', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/string')
  I._waitForElement('.jedi-ready')
  I._waitForText('String', 'label')
  I._waitForText('The string type is used for strings of text. It may contain Unicode characters.')
})
