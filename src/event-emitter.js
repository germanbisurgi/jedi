class EventEmitter {
  constructor () {
    this.listeners = []
  }

  on (name, callback) {
    this.listeners.push({ name, callback })
  }

  emit (name) {
    const listener = this.listeners.find(listener => listener.name === name)

    if (listener) {
      listener.callback()
    }
  }
}

export default EventEmitter
