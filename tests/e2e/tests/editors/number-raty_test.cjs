/* global Feature Scenario */

const theme = process.env.THEME || 'barebones'
const pathToSchema = '/json/plugins/raty.json'
const value = 5
const valueWithErrors = 0
const valueDefault = 3

Feature('Raty')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@plugin @number-raty should have @title', ({I}) => {
  I._waitForText('Raty', 'label.jedi-title')
})

Scenario('@plugin @number-raty should have a @description', ({I}) => {
  I._waitForText('Raty - A Star Rating Plugin', '.jedi-description')
})

Scenario('@plugin @number-raty should have a @default value', ({I}) => {
  I.waitForValue('[id="jedi-hidden-input"]', valueDefault)
})

Scenario('@plugin @number-raty should @disable', ({I}) => {
  I.click('#disable-editor')
  I.wait(1)
  I._waitForElement('[data-read-only="true"]')
})

Scenario('@plugin @number-raty should @enable', ({I}) => {
  I.click('#enable-editor')
  I.dontSee('[data-read-only="false"]')
})

Scenario('@plugin @number-raty should @setValue', async ({I}) => {
  I.fillField('#editor-value', JSON.stringify(value))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(value))
})

Scenario('@plugin @number-raty should @showErrors', async ({I}) => {
  I.fillField('#editor-value', JSON.stringify(valueWithErrors))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I._waitForElement('.jedi-error-message')
})

Scenario('@plugin @number-raty should @destroy', ({I}) => {
  I.click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})
