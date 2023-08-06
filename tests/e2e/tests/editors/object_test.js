/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('object')

Scenario('@editor-object @description @title should have title and description', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/object')
  I._waitForElement('.jedi-ready')
  I._waitForText('Object', 'legend')
  I._waitForText('Objects are the mapping type in JSON. They map “keys” to “values”. In JSON, the “keys” must always be strings. Each of these pairs is conventionally referred to as a “property”.')
})

Scenario('@editor-object @editableProperties should add properties', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/object')
  I._waitForElement('.jedi-ready')
  I._click('.jedi-properties-toggle')
  I._click('.jedi-object-add')
  I.dontSee('[id="root-test"]')
  I.fillField('#jedi-add-property-input-root', 'test')
  I.pressKey('Tab')
  I._click('.jedi-object-add')
  I._waitForElement('[id="root-test"]')
  I._waitForElement('[id="root-test"]')
  I._click('[id="root-test-activator"]')
  I.dontSee('[id="root-test"]')
})

Scenario('@editor-object @editableProperties should activate and deactivate properties', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/object')
  I._waitForElement('.jedi-ready')
  I._click('.jedi-properties-toggle')
  I._waitForElement('[id="root-required-activator"]:disabled')
  I._waitForElement('[id="root-notRequired-activator"]:not(:disabled)')
  I._waitForElement('[id="root-required"]')
  I._waitForElement('[id="root-notRequired"]')
  I._click('[id="root-notRequired-activator"]')
  I.dontSee('[id="root-notRequired"]')
  I._click('[id="root-notRequired-activator"]')
  I._waitForElement('[id="root-notRequired"]')
})

Scenario('@editor-object @object-grid rows and columns', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/object-grid')
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
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/object-nav-pills')
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
    I._waitForText('Arrays', '#root-arrays .panel-heading')
  }

  if (theme === 'bootstrap4' || theme === 'bootstrap5') {
    I._waitForElement('.nav-pills')
    I.seeNumberOfVisibleElements('.nav-link', 6)
    I._click('.nav-pills [href="#root-arrays"]')
    I._waitForText('Arrays', '#root-arrays .card-header')
  }
})

Scenario('@editor-object @object-nav-tabs', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/object-nav-tabs')
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
    I._waitForText('Arrays', '#root-arrays .panel-heading')
  }

  if (theme === 'bootstrap4' || theme === 'bootstrap5') {
    I._waitForElement('.nav-tabs')
    I.seeNumberOfVisibleElements('.nav-link', 6)
    I._click('.nav-tabs [href="#root-arrays"]')
    I._waitForText('Arrays', '#root-arrays .card-header')
  }
})
