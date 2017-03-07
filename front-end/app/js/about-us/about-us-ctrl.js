angular.module( 'about-us', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'about-us', {
    url: '/about-us',
    templateUrl: 'about-us/about-us.tpl',
    controller: 'AboutUsCtrl'
  } );
} ).controller( 'AboutUsCtrl', function( $scope ) {
  $scope.aboutUsCtrl = {

  };
  
} );