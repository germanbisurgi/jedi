class JsonWalker {
  constructor (maxDepth = 200) {
    this.maxDepth = maxDepth
  }

  traverse (data, callback, node = data, path = '#', depth = 0, parent = null, key = null, customData = {}) {
    if (!node || typeof node !== 'object' || depth > this.maxDepth) {
      return
    }

    // Pass customData to the callback as an additional argument
    const newNode = callback(node, path, parent, key, depth, customData)

    if (newNode !== undefined) {
      if (parent && key !== null) {
        parent[key] = newNode
      } else if (path === '#') {
        Object.keys(data).forEach(k => delete data[k]) // Clear root
        Object.assign(data, newNode) // Replace root object
      }
      node = newNode
    }

    if (typeof node === 'object' && node !== null) {
      Object.entries(node).forEach(([k, v]) =>
        this.traverse(data, callback, v, `${path}/${k}`, depth + 1, node, k, customData)
      )
    }
  }
}

export default JsonWalker
