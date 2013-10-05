var server = require('../')
var mysql = require('mysql')


var s = server();

s.listen(9999,function(){
  console.log('mysql server listening?',arguments)
})

s.on('connection',function(con){
  var em = con.emit;
  con.emit = function(){
    console.log('connection> ',arguments);
    em.apply(this,arguments);
  }

  con.handshake({
    user:"root",
    password:"hi"
  });
})

