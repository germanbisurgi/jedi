/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('object')

Scenario('@editor-object @description @title should have title and description', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '/json/editors/object.json')
  I._waitForElement('.jedi-ready')
  I._waitForText('Object', 'legend')
  I._waitForText('Objects are the mapping type in JSON. They map “keys” to “values”. In JSON, the “keys” must always be strings. Each of these pairs is conventionally referred to as a “property”.')
})

Scenario('@editor-object @enablePropertiesToggle should add properties', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '/json/editors/object.json')
  I._waitForElement('.jedi-ready')
  I._click('.jedi-properties-toggle')
  I.fillField('#jedi-add-property-input-root', 'test')
  I.pressKey('Tab')
  I._click('.jedi-object-add')
  I._waitForElement('[data-path="#/test"')
  I._click('[id="root-test-activator"]')
  I.dontSee('[data-path="#/test"')
})

Scenario('@editor-object @enablePropertiesToggle should activate and deactivate properties', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '/json/editors/object.json')
  I._waitForElement('.jedi-ready')
  I._click('.jedi-properties-toggle')
  I._waitForElement('[id="root-notRequired-activator"]:not(:disabled)')
  I._waitForElement('[id="root-notRequired"]')
  I._click('[id="root-notRequired-activator"]')
  I.dontSee('[data-path="#/notRequired"]')
  I._click('[id="root-notRequired-activator"]')
  I._waitForElement('[data-path="#/notRequired"]')
})

Scenario('@editor-object @enableCollapseToggle should collapse and expand contents', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '/json/editors/object.json')
  I._waitForElement('.jedi-ready')
  I._click('.jedi-collapse-toggle')
  I.waitForInvisible('.jedi-editor-card-body')
  I._click('.jedi-collapse-toggle')
  I.waitForVisible('.jedi-editor-card-body')
})

Scenario('@editor-object @object-grid rows and columns', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '/json/editors/object-grid.json')
  I._waitForElement('.jedi-ready')

  if (theme === 'barebones') {
    I.seeNumberOfVisibleElements('.jedi-ready .jedi-row', 13)
    I._waitForElement('.jedi-ready .jedi-col-md-1')
    I._waitForElement('.jedi-ready .jedi-col-md-2')
    I._waitForElement('.jedi-ready .jedi-col-md-3')
    I._waitForElement('.jedi-ready .jedi-col-md-4')
    I._waitForElement('.jedi-ready .jedi-col-md-5')
    I._waitForElement('.jedi-ready .jedi-col-md-6')
    I._waitForElement('.jedi-ready .jedi-col-md-7')
    I._waitForElement('.jedi-ready .jedi-col-md-8')
    I._waitForElement('.jedi-ready .jedi-col-md-9')
    I._waitForElement('.jedi-ready .jedi-col-md-10')
    I._waitForElement('.jedi-ready .jedi-col-md-11')
    I._waitForElement('.jedi-ready .jedi-col-md-12')
    I._waitForElement('.jedi-ready .jedi-col-md-1.jedi-col-md-offset-1')
    I._waitForElement('.jedi-ready .jedi-col-md-1.jedi-col-md-offset-2')
    I._waitForElement('.jedi-ready .jedi-col-md-1.jedi-col-md-offset-3')
    I._waitForElement('.jedi-ready .jedi-col-md-1.jedi-col-md-offset-4')
    I._waitForElement('.jedi-ready .jedi-col-md-1.jedi-col-md-offset-5')
    I._waitForElement('.jedi-ready .jedi-col-md-1.jedi-col-md-offset-6')
    I._waitForElement('.jedi-ready .jedi-col-md-1.jedi-col-md-offset-7')
    I._waitForElement('.jedi-ready .jedi-col-md-1.jedi-col-md-offset-8')
    I._waitForElement('.jedi-ready .jedi-col-md-1.jedi-col-md-offset-9')
    I._waitForElement('.jedi-ready .jedi-col-md-1.jedi-col-md-offset-10')
    I._waitForElement('.jedi-ready .jedi-col-md-1.jedi-col-md-offset-11')
  }

  if (theme === 'bootstrap3') {
    I.seeNumberOfVisibleElements('.jedi-ready .row', 13)
    I.seeElement('.jedi-ready .col-md-1')
    I.seeElement('.jedi-ready .col-md-2')
    I.seeElement('.jedi-ready .col-md-3')
    I.seeElement('.jedi-ready .col-md-4')
    I.seeElement('.jedi-ready .col-md-5')
    I.seeElement('.jedi-ready .col-md-6')
    I.seeElement('.jedi-ready .col-md-7')
    I.seeElement('.jedi-ready .col-md-8')
    I.seeElement('.jedi-ready .col-md-9')
    I.seeElement('.jedi-ready .col-md-10')
    I.seeElement('.jedi-ready .col-md-11')
    I.seeElement('.jedi-ready .col-md-12')
    I.seeElement('.jedi-ready .col-md-1.col-md-offset-1')
    I.seeElement('.jedi-ready .col-md-1.col-md-offset-2')
    I.seeElement('.jedi-ready .col-md-1.col-md-offset-3')
    I.seeElement('.jedi-ready .col-md-1.col-md-offset-4')
    I.seeElement('.jedi-ready .col-md-1.col-md-offset-5')
    I.seeElement('.jedi-ready .col-md-1.col-md-offset-6')
    I.seeElement('.jedi-ready .col-md-1.col-md-offset-7')
    I.seeElement('.jedi-ready .col-md-1.col-md-offset-8')
    I.seeElement('.jedi-ready .col-md-1.col-md-offset-9')
    I.seeElement('.jedi-ready .col-md-1.col-md-offset-10')
    I.seeElement('.jedi-ready .col-md-1.col-md-offset-11')
  }

  if (theme === 'bootstrap4' || theme === 'bootstrap5') {
    I.seeNumberOfVisibleElements('.jedi-ready .row', 13)
    I.seeElement('.jedi-ready .col-md-1')
    I.seeElement('.jedi-ready .col-md-2')
    I.seeElement('.jedi-ready .col-md-3')
    I.seeElement('.jedi-ready .col-md-4')
    I.seeElement('.jedi-ready .col-md-5')
    I.seeElement('.jedi-ready .col-md-6')
    I.seeElement('.jedi-ready .col-md-7')
    I.seeElement('.jedi-ready .col-md-8')
    I.seeElement('.jedi-ready .col-md-9')
    I.seeElement('.jedi-ready .col-md-10')
    I.seeElement('.jedi-ready .col-md-11')
    I.seeElement('.jedi-ready .col-md-12')
    I.seeElement('.jedi-ready .col-md-1.offset-md-1')
    I.seeElement('.jedi-ready .col-md-1.offset-md-2')
    I.seeElement('.jedi-ready .col-md-1.offset-md-3')
    I.seeElement('.jedi-ready .col-md-1.offset-md-4')
    I.seeElement('.jedi-ready .col-md-1.offset-md-5')
    I.seeElement('.jedi-ready .col-md-1.offset-md-6')
    I.seeElement('.jedi-ready .col-md-1.offset-md-7')
    I.seeElement('.jedi-ready .col-md-1.offset-md-8')
    I.seeElement('.jedi-ready .col-md-1.offset-md-9')
    I.seeElement('.jedi-ready .col-md-1.offset-md-10')
    I.seeElement('.jedi-ready .col-md-1.offset-md-11')
  }
})

Scenario('@editor-object @object-nav-pills', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '/json/editors/object-nav-pills.json')
  I._waitForElement('.jedi-ready')

  if (theme === 'barebones') {
    I._waitForElement('.jedi-nav-list')
    I.seeNumberOfVisibleElements('.jedi-nav-link', 6)
    I._click('.jedi-nav-list [href="#root-arrays"]')
    I._waitForText('Arrays', '#root-arrays legend')
  }

  if (theme === 'bootstrap3') {
    I._waitForElement('.nav-pills')
    I.seeNumberOfVisibleElements('.nav-pills li', 6)
    I._click('.nav-pills [href="#root-arrays"]')
    I._waitForText('Arrays', '#root-arrays fieldset')
  }

  if (theme === 'bootstrap4' || theme === 'bootstrap5') {
    I._waitForElement('.nav-pills')
    I.seeNumberOfVisibleElements('.nav-link', 6)
    I._click('.nav-pills [href="#root-arrays"]')
    I._waitForText('Arrays', '#root-arrays fieldset')
  }
})

Scenario('@editor-object @object-nav-tabs', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '/json/editors/object-nav-tabs.json')
  I._waitForElement('.jedi-ready')

  if (theme === 'barebones') {
    I._waitForElement('.jedi-nav-list')
    I.seeNumberOfVisibleElements('.jedi-nav-link', 6)
    I._click('.jedi-nav-list [href="#root-arrays"]')
    I._waitForText('Arrays', '#root-arrays legend')
  }

  if (theme === 'bootstrap3') {
    I._waitForElement('.nav-tabs')
    I.seeNumberOfVisibleElements('.nav-tabs li', 6)
    I._click('.nav-tabs [href="#root-arrays"]')
    I._waitForText('Arrays', '#root-arrays fieldset')
  }

  if (theme === 'bootstrap4' || theme === 'bootstrap5') {
    I._waitForElement('.nav-tabs')
    I.seeNumberOfVisibleElements('.nav-link', 6)
    I._click('.nav-tabs [href="#root-arrays"]')
    I._waitForText('Arrays', '#root-arrays fieldset')
  }
})
