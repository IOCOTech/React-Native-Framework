const EventManager = (() => {
    var events = {};

    return {
        publish: (name, data) => {
            var handlers = events[name];
            if(!!handlers === false) return;
            handlers.forEach(function(handler) {
              handler.call(this, data);
            });
          },
        subscribe: (name, handler) => {
        var handlers = events[name];
        if(!!handlers === false) {
            handlers = events[name] = [];
        }
        handlers.push(handler);
        },
        unsubscribe: (name, handler) => {
        var handlers = events[name];
        if(!!handlers === false) return;
    
        var handlerIdx = handlers.indexOf(handler);
        handlers.splice(handlerIdx);
        }
    }

  })();

  export default EventManager;