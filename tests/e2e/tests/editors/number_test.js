/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('number')

Scenario('should have @title and @description', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/number')
  I._waitForElement('.jedi-ready')
  I._waitForText('Number', 'label')
  I._waitForText('The number type is used for any numeric type, either integers or floating point numbers.')
})
