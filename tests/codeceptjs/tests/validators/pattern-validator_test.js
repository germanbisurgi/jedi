/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('required')

Scenario('should display required validation errors @pattern', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'pattern')
  I.waitForElement('.jedi-ready')
  I.waitForText('string must be the pattern: ^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$', '[data-path="root"]')
  I.fillField('[id="root.string"]', 'test@test.com')
  I.pressKey('Tab')
  I.dontSee('string must be the pattern: ^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$', '[data-path="root"]')
})
