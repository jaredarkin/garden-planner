(function(){
  var plantControllers = angular.module("plantControllers", ['ngRoute', 'ngResource']);

  // index controller
  plantControllers.controller('plantController', ['Plant', function(Plant) {
    this.plants = Plant.query();
  }]);

})()
