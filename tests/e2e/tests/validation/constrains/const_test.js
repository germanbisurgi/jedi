/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('const')

Scenario('@const should display validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/const')
  I.checkOption('[id="alwaysShowErrors"]')

  // string
  I._scrollTo('[data-path="#/string"]')
  I._waitForText('Must be: "test"', '[data-path="#/string"]')
  I.fillField('[id="#/string"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be: "test"', '[data-path="#/string"]')

  // number
  I._scrollTo('[data-path="#/number"]')
  I._waitForText('Must be: 2.5', '[data-path="#/number"]')
  I.fillField('[id="#/number"]', 2.50)
  I.pressKey('Tab')
  I.dontSee('Must be: 2.5', '[data-path="#/number"]')

  // integer
  I._scrollTo('[data-path="#/integer"]')
  I._waitForText('Must be: 3', '[data-path="#/integer"]')
  I.fillField('[id="#/integer"]', 3)
  I.pressKey('Tab')
  I.dontSee('Must be: 3', '[data-path="#/integer"]')

  // boolean
  I._scrollTo('[data-path="#/boolean"]')
  I._waitForText('Must be: true', '[data-path="#/boolean"]')
  I.checkOption('[id="#/boolean"]')
  I.pressKey('Tab')
  I.dontSee('Must be: true', '[data-path="#/boolean"]')

  // array
  I._scrollTo('[data-path="#/array"]')
  I._waitForText('Must be: ["test"]', '[data-path="#/array"]')
  I._click('.jedi-array-add')
  I.fillField('[id="#/array/0"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be: ["test"]', '[data-path="#/array"]')

  // object
  I._scrollTo('[data-path="#/object"]')
  I._waitForText('Must be: {"test":"test"}', '[data-path="#/object"]')
  I.fillField('[id="#/object/test"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be: {"test":"test"}', '[data-path="#/object"]')

  // multiple
  I._scrollTo('[data-path="#/multiple"]')
  I._waitForText('Must be: "test"', '[data-path="#/multiple"]')
  I.fillField('[id="#/multiple"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be: "test"', '[data-path="#/multiple"]')
})
