export const clone = (thing) => {
  return JSON.parse(JSON.stringify(thing))
}

export const fakeForEach = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array)
  }
}

export const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace)
}

export const pathToAttribute = (path) => {
  return replaceAll(replaceAll(path, '#', 'root'), '/', '-')
}

export const hasOwn = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key)
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

export const overwriteExistingProperties = (obj1, obj2) => {
  Object.keys(obj2).forEach(function (key) {
    if (key in obj1) {
      obj1[key] = obj2[key]
    }
  })

  return obj1
}

export const getValueFromJSON = (data, path) => {
  const keys = path.split('.') // Split the path into individual keys

  let value = data
  for (const key of keys) {
    if (Array.isArray(value) && /^\d+$/.test(key)) {
      const index = parseInt(key)
      if (index >= 0 && index < value.length) {
        value = value[index]
      } else {
        return undefined // Index is out of bounds, return undefined
      }
    } else if (hasOwn(value, key)) {
      value = value[key]
    } else {
      return undefined // Key doesn't exist, return undefined
    }
  }

  return value
}

export const compileTemplate = (template, data) => {
  return template.replace(/{{(.*?)}}/g, (match) => {
    match = match.replace(/\s/g, '')
    const path = match.split(/{{|}}/)[1]
    return getValueFromJSON(data, path)
  })
}
