class JsonWalker {
  constructor (maxDepth = 200) {
    this.maxDepth = maxDepth
  }

  traverse (data, callback, node = data, path = '#', depth = 0, parent = null, key = null) {
    if (!node || typeof node !== 'object' || depth > this.maxDepth) {
      return
    }

    const newNode = callback(node, path, parent, key)

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
      Object.entries(node).forEach(([k, v]) => this.traverse(data, callback, v, `${path}/${k}`, depth + 1, node, k))
    }
  }
}

export default JsonWalker
