var express= require( 'express' );
var app = express();
var path = require( 'path' );
var server = app.listen( 8080, 'localhost', function(){
  console.log( 'server listening on port 8080' );
});

app.get('/', function( req, res){
console.log( 'hello world from base url get' );
});

app.get('/puppies', function( req, res) {

  console.log( ' hello from puppies ');
  res.write( 'we are in the puppies url' );

});
