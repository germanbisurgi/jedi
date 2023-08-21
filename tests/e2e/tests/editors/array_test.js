/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('array')

Scenario('@editor-array @description @title should have title and description', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '../json/editors/array.json')
  I._waitForElement('.jedi-ready')
  I._scrollTo('[data-path="#"]')
  I._waitForText('Array', '[data-type="array"] legend')
  I._waitForText('Arrays are used for ordered elements. In JSON, each element in an array may be of a different type.')
})

Scenario('@editor-array @items should validate against items', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '../json/editors/array.json')
  I._waitForElement('.jedi-ready')
  I._scrollTo('[data-path="#"]')
  I._click('[data-path="#/items"] .jedi-array-add')
  I._waitForText('This is a number editor', '[data-path="#/items"] [data-type="number"]')
})

Scenario('@editor-array @prefixItems should validate against prefixItems', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '../json/editors/array.json')
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

Scenario('@editor-array @array-nav-pills', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '../json/editors/array-nav-pills.json')
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

Scenario('@editor-array @array-nav-tabs', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '../json/editors/array-nav-tabs.json')
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
