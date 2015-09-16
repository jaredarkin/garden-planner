(function(){
  var layoutDirectives = angular.module("layoutDirectives", ['ngRoute']);
  layoutDirectives.directive('length', function(){
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
      }
    }
  })
})()
