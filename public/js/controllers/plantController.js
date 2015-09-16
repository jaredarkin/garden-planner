(function(){
  var plantControllers = angular.module("plantControllers", ['ngRoute', 'ngResource']);
  console.log("working after var plantcontrollers")

  // index controller
  plantControllers.controller('plantController', ['Plant', function(Plant) {
    console.log("working in plantcontroller")
    this.plants = Plant.query();
    console.log(this.plants)
  }]);

})()
