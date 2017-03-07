var express = require( 'express' )
var bodyParser = require( 'body-parser' );
var app = express()
var device = require( 'device' );
var MobileDetect = require( 'mobile-detect' );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );
app.use( bodyParser.json() )
console.log( __dirname );
app.use( express.static( __dirname + '/m-static' ) )
app.use( express.static( __dirname + '/static' ) )
app.listen( 3008, function() {
  console.log( 'Example app listening on port 3008!' )
} )
app.get( '/*', function( req, res ) {
  md = new MobileDetect( req.headers[ 'user-agent' ] );
  // info( md );
  if ( md.mobile() || md.phone() || md.tablet() ) {
    res.sendfile( 'm-static/m-index.html' );
  }
  res.sendfile( 'static/index.html' );
} );

// function info( md ) {
//   console.log( md.mobile() ); // 'Sony'
//   console.log( md.phone() ); // 'Sony'
//   console.log( md.tablet() ); // null
//   console.log( md.userAgent() ); // 'Safari'
//   console.log( md.os() ); // 'AndroidOS'
//   console.log( md.is( 'iPhone' ) ); // false
//   console.log( md.is( 'bot' ) ); // false
//   console.log( md.version( 'Webkit' ) ); // 534.3
//   console.log( md.versionStr( 'Build' ) ); // '4.1.A.0.562'
//   console.log( md.match( 'playstation|xbox' ) ); // false
// }
