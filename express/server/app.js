var express = require( 'express' );
var app = express();
var path = require( 'path' );

var server = app.listen( 8080, 'localhost', function(){
  console.log('server listening on 8080');
});

app.get('/', function( req, res ){

  console.log( 'hello world from base app' );
});

app.get( '/kitties', function( req, res ){

console.log('hello world from kitties get');
  res.write( 'in the kitties one');
  res.end();
});
