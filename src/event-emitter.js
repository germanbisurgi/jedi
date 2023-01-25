class EventEmitter {
  constructor () {
    this.listeners = []
  }

  on (name, callback) {
    this.listeners.push({ name, callback })
  }

  emit (name) {
    const listeners = this.listeners.filter(listener => listener.name === name)

    listeners.forEach((listener) => {
      listener.callback()
    })
  }

  destroy () {
    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default EventEmitter
