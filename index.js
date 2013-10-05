
var FakeServer = require('lib/Server')

module.exports = function(){
  //
  var server = new FakeServer();

  var em = server.emit;
  server.emit = function(){
    console.log(arguments);
    em.apply(this,arguments);
  }

  return server;  
}


