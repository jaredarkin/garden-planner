(function(){
  var angularuiControllers = angular.module("angularuiControllers", ['ui.bootstrap']);

  angularuiControllers.controller('accordionController', ['Plant', '$scope', function(Plant, $scope){
    $scope.oneAtATime = true;
  }]);

  angularuiControllers.controller('clearModalController', ['$scope', '$uibModal', function($scope, $uibModal){
    $scope.open = function() {
      var clearModalInstance = $uibModal.open({
        controller: 'clearModalInstanceController',
        templateUrl: 'clearModalContent.html'
      });

      clearModalInstance.result.then(function(){
        angular.element(document.getElementById('garden-layout')).empty();
      })
    };
  }]);

  angularuiControllers.controller('clearModalInstanceController', function($scope, $uibModalInstance){
    $scope.ok = function() {
      $uibModalInstance.close();
    }
    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  });

})()
