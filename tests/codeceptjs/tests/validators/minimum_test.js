/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('minimum')

Scenario('should display minimum validation errors @minimum', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/minimum')
  I.waitForElement('.jedi-ready')
  I.waitForText('number_minimum must be at least 100', '[data-path="root.number_minimum"]')
  I.waitForText('number_exclusive_minimum must be at least 101', '[data-path="root.number_exclusive_minimum"]')
  I.waitForText('integer_minimum must be at least 100', '[data-path="root.integer_minimum"]')
  I.waitForText('integer_exclusive_minimum must be at least 101', '[data-path="root.integer_exclusive_minimum"]')
  I.fillField('[id="root.number_minimum"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.number_exclusive_minimum"]', 101)
  I.pressKey('Tab')
  I.fillField('[id="root.integer_minimum"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer_exclusive_minimum"]', 101)
  I.pressKey('Tab')
  I.dontSee('number_minimum must be at least 100', '[data-path="root.number_minimum"]')
  I.dontSee('number_exclusive_minimum must be at least 101', '[data-path="root.number_exclusive_minimum"]')
  I.dontSee('integer_minimum must be at least 100', '[data-path="root.integer_minimum"]')
  I.dontSee('integer_exclusive_minimum must be at least 101', '[data-path="root.integer_exclusive_minimum"]')
  I.fillField('[id="root.number_minimum"]', 99)
  I.pressKey('Tab')
  I.fillField('[id="root.number_exclusive_minimum"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer_minimum"]', 99)
  I.pressKey('Tab')
  I.fillField('[id="root.integer_exclusive_minimum"]', 100)
  I.pressKey('Tab')
  I.waitForText('number_minimum must be at least 100', '[data-path="root.number_minimum"]')
  I.waitForText('number_exclusive_minimum must be at least 101', '[data-path="root.number_exclusive_minimum"]')
  I.waitForText('integer_minimum must be at least 100', '[data-path="root.integer_minimum"]')
  I.waitForText('integer_exclusive_minimum must be at least 101', '[data-path="root.integer_exclusive_minimum"]')
})