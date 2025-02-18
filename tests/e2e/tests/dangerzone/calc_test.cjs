/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'experimental/calc'
const startValue = {
  "a": 3,
  "b": 7,
  "c": 10,
  "something": {
    "numbers": [
      2,
      3
    ],
    "numbersTotal": 5
  },
  "sum": 15
}

Feature('calc')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('Should @watch and @calc fields', ({I}) => {
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(startValue))

  I._fillField('#root-a', 4)
  I.waitForValue('#root-c', 11)
  I.waitForValue('#root-sum', 16)

  I._fillField('#root-something-numbers-0', 3)
  I.waitForValue('#root-something-numbersTotal', 6)
  I.waitForValue('#root-sum', 17)

  I._click('.jedi-array-add')
  I._waitForElement('#root-something-numbers-2')
  I._fillField('#root-something-numbers-2', 1)
  I.waitForValue('#root-something-numbersTotal', 7)
  I.waitForValue('#root-sum', 18)
})
