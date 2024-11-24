/* global Feature Scenario */

const theme = process.env.THEME || 'barebones'
const pathToSchema = 'plugins/jodit'
const valueDefault = '<p>Jodit default</p>'
const value = '<p>value set</p>'
const valueWithErrors = ''

Feature('Jodit')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@plugin @string-jodit should have @title and @description', ({I}) => {
  I._waitForText('Jodit', 'label.jedi-title')
  I._waitForText('Jodit - Best WYSIWYG Editor for You.', '.jedi-description')
})

Scenario('@plugin @string-jodit should have a @default value', ({I}) => {
  I.waitForValue('[id="jedi-hidden-input"]', valueDefault)
})

Scenario('@plugin @string-jodit should @disable', ({I}) => {
  I.click('#disable-editor')
  I.dontSeeElement('.jodit-wysiwyg[contenteditable="true"]')
})

Scenario('@plugin @string-jodit should @enable', ({I}) => {
  I.click('#enable-editor')
  I._waitForElement('.jodit-wysiwyg[contenteditable="true"]')
})

Scenario('@plugin @string-jodit should @setValue', async ({I}) => {
  I.fillField('#editor-value', JSON.stringify(value))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(value))
})

Scenario('@plugin @string-jodit should @showErrors', async ({I}) => {
  I.fillField('#editor-value', JSON.stringify(valueWithErrors))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I._waitForElement('.jedi-error-message')
})

Scenario('@plugin @string-jodit should @destroy', ({I}) => {
  I.click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})
