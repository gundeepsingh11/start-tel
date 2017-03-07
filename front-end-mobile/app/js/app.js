angular.module( 'app', ['templates','duScroll','ui.router', 'home'] ).config( function($urlRouterProvider,$locationProvider) {
  $urlRouterProvider.otherwise( '/home' );
  $locationProvider.html5Mode(true);
} ).run( [ '$rootScope',
  function( $rootScope) {
  }
] );
