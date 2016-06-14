var express = require( 'express' );
var app = express();
var server = app.listen( 8080, 'localhost', function(){

console.log( 'server listening on 8080' );

});

app.get( '/', function( req, res ){

console.log( 'hello world from base url get' );
res.writeHead( 200 );
res.write( 'we are in base url' );
res.end();

});

app.get( '/wednesday', function( req, res ){

console.log( 'hello from inside wednesday get' );

res.writeHead ( 200 );
res.write( 'we are in wednesday url' );
res.end();

});
