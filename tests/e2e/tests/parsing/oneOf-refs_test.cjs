/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'parsing/oneOf-refs'

Feature('markdown-annotation')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('Should use @expand @oneOfRefs schemas', ({I}) => {
  I._waitForText('Data as Object')
  I._waitForElement('[data-path="#/data"] .jedi-switcher')
  I._waitForElement('[data-path="#/data"][data-type="object"]')
  I.fillField('#editor-value', JSON.stringify({
    "data": []
  }))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._waitForText('Data as Array')
  I._waitForElement('[data-path="#/data"][data-type="array"]')
})
