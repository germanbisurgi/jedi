/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'experimental/calc-if-then-else'
const startValue = {
  "test": {
    "condition": "yes",
    "numbers": {
      "a": 0,
      "b": 0
    },
    "summe": 0
  }
}

Feature('calc-if-then-else')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('Should @watch and @calc fields', ({I}) => {
  I._waitForValue('[id="jedi-hidden-input"]', JSON.stringify(startValue))
  I._fillField('#root-test-numbers-a', 1)
  I._waitForValue('#root-test-summe', 1)
  I._fillField('#root-test-numbers-b', 1)
  I._waitForValue('#root-test-summe', 2)
  I._click('#root-test-condition-1')
  I._waitForValue('#root-test-summe', 0)
  I._click('#root-test-condition-0')
  I._waitForValue('#root-test-numbers-a', 0)
  I._waitForValue('#root-test-numbers-b', 0)
  I._waitForValue('#root-test-summe', 0)
  I._fillField('#root-test-numbers-a', 1)
  I._waitForValue('#root-test-summe', 1)
  I._fillField('#root-test-numbers-b', 1)
  I._waitForValue('#root-test-summe', 2)
})
