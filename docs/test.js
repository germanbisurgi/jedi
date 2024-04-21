const Jedi = require('../dist/jedi')
const metaSchema = require('./json/meta-schema.json')
const schema = { "$ref": "https://json.schemastore.org/jsdoc-1.0.0.json" }

const start = async () => {
  const refParser = new Jedi.RefParser()
  await refParser.dereference(metaSchema)
  const jedi = new Jedi.Jedi({
    refParser,
    schema
  })

  console.log(jedi)
}

start()

