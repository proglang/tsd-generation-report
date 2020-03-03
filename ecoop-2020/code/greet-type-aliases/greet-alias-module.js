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
    return {
	greet = function (init) {
	    if (typeof init === 'string') {
		return "<-- " + init + " -->"; 
	    }
	    if (typeof init === 'function') {
		return "<-- " + init() + " -->"; 
	    }
	    if (init instanceof Greet) {
		return "<-- " + init.greeting + " -->"; 
	    }
	    return;
	},
	greeting = "wise guys";
    };
}));
