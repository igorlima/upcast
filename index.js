(function (exports) {
    'use strict';


    // Get an object's type
    function type (val) {
        var str = Object.prototype.toString.call(val);
        switch (str) {
            case '[object Array]':
            case '[object Boolean]':
            case '[object Null]':
            case '[object Number]':
            case '[object String]':
                return str.replace(/^\[object ([a-z]+)\]$/i, '$1').toLowerCase();
                break;
        }
        return typeof val;
    }
    exports.type = type;


    // Check whether an object is of a certain type
    function is (val, type) {
        return (exports.type(val) === type);
    }
    exports.is = is;


    // Cast an object to a given type
    function to () {}
    exports.to = to;


} (typeof exports === 'undefined' ? (this.upcast = this.upcast || {}) : exports));