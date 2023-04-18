/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('array')

Scenario('should have @title and @description', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I.fillField('#schemas', 'editors/array')
  I._waitForElement('.jedi-ready')
  I._waitForText('Array', '.jedi-container-head')
  I._waitForText('Arrays are used for ordered elements. In JSON, each element in an array may be of a different type.')
})
