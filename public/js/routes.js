(function(){
  var router = angular.module('plantRouter', []);
  router.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      // home page
      .when('/', {
          templateUrl: 'views/home.html',
          controller: 'plantController',
          controllerAS: 'plantCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })

  }]);

})()
