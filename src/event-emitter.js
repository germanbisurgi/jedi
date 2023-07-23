/**
 * Represents an EventEmitter instance.
 */
class EventEmitter {
  constructor () {
    this.listeners = []
  }

  /**
   * Adds an named event listener
   * @public
   * @param name
   * @param callback
   */
  on (name, callback) {
    this.listeners.push({ name, callback })
  }

  /**
   * Triggers the callback function of a named event listener
   * @public
   * @param name
   */
  emit (name) {
    const listeners = this.listeners.filter(listener => listener.name === name)

    listeners.forEach((listener) => {
      listener.callback()
    })
  }

  /**
   * Deletes all properties of the class
   */
  destroy () {
    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default EventEmitter
