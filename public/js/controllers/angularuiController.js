(function(){
  var angularuiControllers = angular.module("angularuiControllers", []);

  angularuiControllers.controller('angularuiController', ['Plant', '$scope', function(Plant, $scope){
    $scope.oneAtATime = true;
  }]);

})()
