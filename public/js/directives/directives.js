(function(){
  var directives = angular.module("directives", ['ngRoute']);

  //  directive to create add to garden button
  directives.directive('addbutton', function(){
    return {
      restrict: 'E',
      template: "<button addtogarden>Add to Garden</button>"
    }
  });

  // directive to add plant image to garden
  // need to extract the style (resized height/width) into another directive and call with ng-style
  directives.directive('addtogarden', function($compile){
    return function(scope, element, attrs){
      element.bind("click", function(){
        angular.element(document.getElementById('garden-layout')).append($compile('<img height='+4*scope.plant.spacing_min+' width='+4*scope.plant.spacing_min+' class="layout-image" src=' + scope.plant.photo_url + ' />')(scope));
      });
    };
  });


})()
