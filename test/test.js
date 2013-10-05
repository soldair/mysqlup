var test = require('tape');
var server = require('../')
var mysql = require('mysql')

test("mysql works?",function(t){

  server().listen(9999,function(){
    console.log('mysql server listening')
  })
  t.end();
})
