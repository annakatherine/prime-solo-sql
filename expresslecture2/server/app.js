var express=require( 'express' );
var app = express();


///allows us to resolve paths so that they're not relative - infer where files are without having to be literal
var path = require( 'path' );
var bodyParser=require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );

var testFormInputModule=require( '../modules/testFormInputModule');
//set up server
var server = app.listen( 8080, 'localhost', function (){
//sniff out the port on which our server is running
  var port = server.address().port;
console.log( ' serve is listening on 8080' );

});


//get base URL
app.get( '/', function( req, res ){

console.log( 'base url received a hit' );
res.write( ' don romero dice.... ');
res.end();
});


//forms route
app.get( '/form', function( req, res ){

res.sendFile( path.resolve(  'views/testForms.html' ) );
console.log( 'from the form ');

});
//get route for form output

//pupusas url
app.get ( '/pupusas', function( req, res) {

console.log( 'hello from inside pupusas' );
res.writeHead( 200 );
res.write( ' I am cheese!' );
res.end();
});


app.get( '/pathGet', function( req, res ){
  res.write( 'recibido:' + req.query.inputName );
  res.end();

});

app.post('/pathPost', urlencodedParser, function( req, res ){
var fromModule = testFormInputModule( req.body.inputColor );
res.write( "post received something: " + req.body.inputColor + 'OR' + fromModule);
res.end();

});
