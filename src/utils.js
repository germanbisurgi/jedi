export const clone = (thing) => {
  return JSON.parse(JSON.stringify(thing))
}

export const pretty = (value) => {
  return JSON.stringify(value, null, 2)
}

export const round2decimals = (number) => {
  return Math.round(number * 100) / 100
}

export const sortObject = (obj) => {
  return Object.keys(obj).sort().reduce((result, key) => {
    result[key] = obj[key]
    return result
  }, {})
}

export const equal = (a, b) => {
  if (isObject(a) && isObject(b)) {
    a = sortObject(a)
    b = sortObject(b)
  }
  return JSON.stringify(a) === JSON.stringify(b)
}

export const different = (a, b) => {
  return !equal(a, b)
}

export const isNull = (value) => {
  return value === null
}

export const isSet = (value) => {
  return typeof value !== 'undefined'
}

export const notSet = (value) => {
  return typeof value === 'undefined'
}

export const isNumber = (value) => {
  return typeof value === 'number'
}

export const isInteger = (value) => {
  return isNumber(value) && value === Math.floor(value)
}

export const isString = (value) => {
  return typeof value === 'string'
}

export const isBoolean = (value) => {
  return typeof value === 'boolean'
}

export const isArray = (value) => {
  return Array.isArray(value)
}

export const isObject = (value) => {
  return !isNull(value) && !isArray(value) && typeof value === 'object'
}

export const getType = (value) => {
  let type = 'any'

  if (isNumber(value)) {
    type = isInteger(value) ? 'integer' : 'number'
  } else if (isString(value)) {
    type = 'string'
  } else if (isBoolean(value)) {
    type = 'boolean'
  } else if (isArray(value)) {
    type = 'array'
  } else if (isNull(value)) {
    type = 'null'
  } else if (isObject(value)) {
    type = 'object'
  }

  return type
}

export const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, {
            [key]: {}
          })
        }
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, {
          [key]: source[key]
        })
      }
    })
  }

  return mergeDeep(target, ...sources)
}
