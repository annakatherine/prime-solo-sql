var http=require( 'http' );
// var bernieSandersModule=require( '../modules/bernieSandersModule' );
var hillaryClintonModule=require( '../modules/hillaryClintonModule' );
var michaelDukakis=require( '../modules/michaelDukakis' );
var howardDeanModule=require( '../modules/howardDeanModule' );

http.createServer( function ( req, res ){
  console.log( 'hello from inside createServer function' );
  res.writeHead( 200 );
  res.write( 'hello from the server response' );
  // res.write( bernieSandersModule() );
  res.write( hillaryClintonModule() );
  res.write( michaelDukakis() );
  res.end();
  }).listen( 3000 );
console.log('server is listening on port 3000' );
