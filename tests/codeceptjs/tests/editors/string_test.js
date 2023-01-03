/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('string')

Scenario('should have @title and @description', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/string')
  I.waitForElement('.jedi-ready')
  I.waitForText('String', 'label')
  I.waitForText('The string type is used for strings of text. It may contain Unicode characters.')
})
