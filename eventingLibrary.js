/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

const mixEvents = {
  on(event, handler) {
    if (!this._eventHandlers) {
      this._eventHandlers = {};
    }
    if (!this._eventHandlers[event]) {
      this._eventHandlers[event] = [];
    }
    this._eventHandlers[event].push(handler);
  },

  off(event, handler) {
    let handlers = this._eventHandlers
      && this._eventHandlers[event];
    if (!handlers) {
      return;
    }
    let handlerIndex = this._eventHandlers.indexOf(event);
    if (handlerIndex >= 0) {
      this._eventHandlers.splice(handlerIndex, 1);
    }
  },

  trigger(event, ...args) {
    let handlers = this._eventHandlers
      && this._eventHandlers[event];
    if (!handlers) {
      return;
    }
    handlers.forEach(handler => handler.apply(this, args));
  }
};

var obj = Object.assign({ name: 'Alice', age: 30 }, mixEvents);
obj.on('ageChange', function(){
  // On takes an event name and a callback function
  console.log('Age changed');
});
obj.age++;
obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
