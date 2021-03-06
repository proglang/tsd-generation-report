(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    function Greet() {
        if (!this instanceof Greet) {
            return new Greet();
        }
        this.greeting = "wise guys";
    };

    Greet.greet = function (init) {
        if (typeof init === 'string') {
            console.log("<-- " + init + " -->");
        }
        if (typeof init === 'function') {
            console.log("<-- " + init() + " -->");
        }
        if (init instanceof Greet) {
            console.log("<-- " + init.greeting + " -->");
        }
        return;
    };

    return Greet;
}));
