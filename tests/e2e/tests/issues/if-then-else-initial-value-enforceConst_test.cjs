/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'issue/if-then-else-initial-value-enforceConst'
const data = {
  "schwarzstorch": {
    "vk": "nein",
    "brut": "unbekannt"
  }
}

const dataCorrected = {
  "schwarzstorch": {
    "vk": "nein",
    "brut": ""
  }
}

Feature('issue if-then-else-initial-value-enforceConst')

BeforeSuite(({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
})

Scenario('@issue @if-then-else-initial-value-enforceConst should set initial value correctly', ({ I }) => {
  I.fillField('#data', JSON.stringify(data))
  I._scrollTo('#set-data')
  I._click('#set-data')
  I._scrollTo('[data-path="#"]')
  I._waitForValue('[id="jedi-hidden-input"]', JSON.stringify(dataCorrected))
})