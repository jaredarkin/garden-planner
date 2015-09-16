(function(){

  var plantServices = angular.module('plantServices', ['ngResource']);
  plantServices.factory('Plant', ['$resource', function($resource) {
    return $resource("/plants", {}, {
      'get':{method:'GET'},
    });

  }]);
})()
