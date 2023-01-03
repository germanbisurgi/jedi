/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('integer')

Scenario('should have @title and @description', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/integer')
  I.waitForElement('.jedi-ready')
  I.waitForText('Integer', 'label')
  I.waitForText('The integer type is used for integral numbers.')
})
