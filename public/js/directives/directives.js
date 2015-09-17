(function(){
  var directives = angular.module("directives", ['ngRoute']);

  //  directive to create add to garden button
  directives.directive('addbutton', function(){
    return {
      restrict: 'E',
      template: "<button addtogarden>+</button>"
    }
  });

  // directive to add plant image to garden
  // need to extract the style (resized height/width) into another directive and call with ng-style
  directives.directive('addtogarden', function($compile){
    return function(scope, element, attrs){
      element.bind("click", function(){
        angular.element(document.getElementById('garden-layout')).append($compile('<img draggable height='+6*scope.plant.spacing_min+' width='+6*scope.plant.spacing_min+' class="layout-image" src=' + scope.plant.photo_url + ' />')(scope));
      });
    };
  });

  // directive to remove plant image from garden
  directives.directive('removefromgarden', function(){
    return function(scope, element, attrs){

    }
  })

  // directive to show remove button when image is clicked on


  // draggable directive for images in garden
  directives.directive('draggable', function(){
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        element.draggable({
          revert: "invalid",
          containment: "div.garden"
        });
      }
    };
  });

  // droppable directive for garden layout
  directives.directive('droppable', function($compile){
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        element.droppable({
          accept: "*",
          // drop: function(event, ui){}
        })
      }
    }
  })


})()
