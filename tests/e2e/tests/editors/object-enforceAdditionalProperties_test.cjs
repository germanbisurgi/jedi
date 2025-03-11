/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('object')

Scenario('@editor @object @enforceAdditionalProperties should remove all properties that are not listed in `properties` or `patternProperties`', async ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', 'editors/object-enforceAdditionalProperties')
  I._waitForElement('.jedi-ready')

  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "a": 0,
    "b": 0
  }))

  I.fillField('#editor-value', JSON.stringify({
    "a": 0,
    "b": 0,
    "c": 0
  }))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')

  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "a": 0,
    "b": 0
  }))

  I.fillField('#editor-value', JSON.stringify({
    "a": 0,
    "b": 0,
    "id_": "test"
  }))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')

  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "a": 0,
    "b": 0,
    "id_": "test"
  }))
})