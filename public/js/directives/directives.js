(function(){
  var directives = angular.module("directives", ['ngRoute']);
  directives.directive('addbutton', function(){
    return {
      restrict: 'E',
      template: "<button addtogarden>Add to Garden</button>"
    }
  });

  directives.directive('addtogarden', function($compile){
    return function(scope, element, attrs){
      element.bind("click", function(){
        angular.element(document.getElementById('garden-layout')).append($compile('<img class="layout-image" src=' + scope.plant.photo_url + ' />')(scope));
      });
    };
  });


})()
