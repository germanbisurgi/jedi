/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'issue/if-then-else-nullable-initial-value'
const data = {
  "vk": "ja",
  "anzahl_individuen": 34
}

Feature('issue if-then-else-nullableinitial-value')

BeforeSuite(({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
})

Scenario('@issue @if-then-else-nullable-initial-value should set initial value correctly', ({ I }) => {
  I.fillField('#data', JSON.stringify(data))
  I._scrollTo('#set-data')
  I._click('#set-data')
  I._scrollTo('[data-path="#"]')
  I._waitForValue('[id="jedi-hidden-input"]', JSON.stringify(data))
})