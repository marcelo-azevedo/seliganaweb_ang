'use strict';

  myApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

myApp.directive('menu', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/inc/menu.html'
    }
});

