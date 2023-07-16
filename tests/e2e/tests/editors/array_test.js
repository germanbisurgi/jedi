/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('array')

Scenario('@array-editor @description @title should have title and description', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/array')
  I._waitForElement('.jedi-ready')
  I._scrollTo('[data-path="#"]')
  I._waitForText('Array', '[data-type="array"] legend')
  I._waitForText('Arrays are used for ordered elements. In JSON, each element in an array may be of a different type.')
})

Scenario('@array-editor @items should items that validate against item', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/array')
  I._waitForElement('.jedi-ready')
  I._scrollTo('[data-path="#"]')
  I._click('[data-path="#/items"] .jedi-array-add')
  I._waitForText('This is a number editor', '[data-path="#/items"] [data-type="number"]')
})

Scenario('@array-editor @prefixItems should items that validate against prefixItems', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/array')
  I._waitForElement('.jedi-ready')
  I._scrollTo('[data-path="#"]')
  I._click('[data-path="#/prefixItems"] .jedi-array-add')
  I._click('[data-path="#/prefixItems"] .jedi-array-add')
  I._click('[data-path="#/prefixItems"] .jedi-array-add')
  I._click('[data-path="#/prefixItems"] .jedi-array-add')
  I._waitForElement('[data-path="#/prefixItems/0"][data-type="number"]')
  I._waitForElement('[data-path="#/prefixItems/1"][data-type="string"]')
  I._waitForElement('[data-path="#/prefixItems/2"][data-type="any"]')
  I._waitForElement('[data-path="#/prefixItems/3"][data-type="any"]')
})

Scenario('@array-editor @array-nav-pills', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/array-nav-pills')
  I._waitForElement('.jedi-ready')

  if (theme === 'barebones') {
    I._waitForElement('.jedi-nav-list')
    I.seeNumberOfVisibleElements('.jedi-nav-link', 2)
    I._click('.jedi-nav-list [href="#root-1"]')
    I.waitForValue('[id="root-0-name"]', 'Albert')
  }

  if (theme === 'bootstrap3') {
    I._waitForElement('.nav-pills')
    I.seeNumberOfVisibleElements('.nav-pills li', 2)
    I._click('.nav-pills [href="#root-1"]')
    I.waitForValue('[id="root-0-name"]', 'Albert')
  }

  if (theme === 'bootstrap4' || theme === 'bootstrap5') {
    I._waitForElement('.nav-pills')
    I.seeNumberOfVisibleElements('.nav-link', 2)
    I._click('.nav-pills [href="#root-1"]')
    I.waitForValue('[id="root-0-name"]', 'Albert')
  }
})

Scenario('@array-editor @array-nav-tabs', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/array-nav-tabs')
  I._waitForElement('.jedi-ready')

  if (theme === 'barebones') {
    I._waitForElement('.jedi-nav-list')
    I.seeNumberOfVisibleElements('.jedi-nav-link', 2)
    I._click('.jedi-nav-list [href="#root-1"]')
    I.waitForValue('[id="root-0-name"]', 'Albert')
  }

  if (theme === 'bootstrap3') {
    I._waitForElement('.nav-tabs')
    I.seeNumberOfVisibleElements('.nav-tabs li', 2)
    I._click('.nav-tabs [href="#root-1"]')
    I.waitForValue('[id="root-0-name"]', 'Albert')
  }

  if (theme === 'bootstrap4' || theme === 'bootstrap5') {
    I._waitForElement('.nav-tabs')
    I.seeNumberOfVisibleElements('.nav-link', 2)
    I._click('.nav-tabs [href="#root-1"]')
    I.waitForValue('[id="root-0-name"]', 'Albert')
  }
})
