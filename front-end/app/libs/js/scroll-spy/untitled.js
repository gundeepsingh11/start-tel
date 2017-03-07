angular.module( 'home', [] ).config( function( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/home',
		templateUrl: 'home/home.tpl',
		controller: 'HomeCtrl'
	} );
} ).controller( 'HomeCtrl', function( $scope,$document ) {
	$scope.hctrl = {
	}; 

	var top = 0;
  var duration = 1000; //milliseconds
  $scope.toTheTop = function() {
  	$document.scrollTopAnimated( top, duration ).then( function() {} );
  };
  var scrollElement = document.getElementById( 'scroll-top' );
  var cssClass = 'display-block';
  $document.on( 'scroll', function() {
  	if ( $document.scrollTop() > 400 ) {
  		addClass( scrollElement, cssClass );
  	} else {
  		removeClass( scrollElement, cssClass );
  	}
  } ); 
  function addClass( o, c ) {
  	var re = new RegExp( "(^|\\s)" + c + "(\\s|$)", "g" );
  	if ( re.test( o.className ) ) return;
  	o.className = ( o.className + " " + c ).replace( /\s+/g, " " ).replace( /(^ | $)/g, "" );
  }

  function removeClass( o, c ) {
  	var re = new RegExp( "(^|\\s)" + c + "(\\s|$)", "g" );
  	o.className = o.className.replace( re, "$1" ).replace( /\s+/g, " " ).replace( /(^ | $)/g, "" );
  }
} );


/* angular-scroll.js*/



