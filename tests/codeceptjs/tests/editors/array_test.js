/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('array')

Scenario('should have @title and @description', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/array')
  I.waitForElement('.jedi-ready')
  I.waitForText('Array', 'legend')
  I.waitForText('Arrays are used for ordered elements. In JSON, each element in an array may be of a different type.')
})

Scenario('should edit items @items', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/array')
  I.waitForElement('.jedi-ready')
  I.dontSee('[id="root.0"]')
  I.click('Add item')
  I.waitForElement('[id="root.0"]')
  I.click('Delete item')
  I.dontSee('[id="root.0"]')
})