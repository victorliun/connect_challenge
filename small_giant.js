var http = require('http'),
    proto = require("./proto"),
    EventEmitter = require('events').EventEmitter;


/**
 * Create a new connect server.
 *
 */

function createServer() {
  function app(req, res, next){ app.handle(req, res, next); }
  merge(app, proto);
  merge(app, EventEmitter.prototype);
  app.route = '/';
  app.stack = [];
  for (var i = 0; i < arguments.length; ++i) {
    app.use(arguments[i]);
  }
  return app;
};

exports = module.exports = createServer;

// Framework version.
exports.version = '2.7.11';

// Expose the prototype.
exports.proto = proto;

// Auto-load middleware getters.

exports.middleware = {};


// Merge b to a.
var merge = function(a, b){
  if (a && b) {
    for (var key in b) {
      a[key] = b[key];
    }
  }
  return a;
};
