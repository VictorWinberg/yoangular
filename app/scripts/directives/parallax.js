'use strict';

/**
 * @ngdoc directive
 * @name yoangularApp.directive:parallax
 * @description
 * # parallax
 */
angular.module('yoangularApp')
.directive('parallax', ['$window', function($window) {
  return {
    restrict: 'A',
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {
      parallaxRatio: '@',
      parallaxVerticalOffset: '@'
    },
    link: function($scope, elem, attrs) {
      elem.css({
        'background-attachment': 'fixed',
        'background-size': 'cover',
        'background-position': '50% 0',
        'background-repeat': 'no-repeat',
        'height': '450px',
        'position': 'relative',
        'background-image': 'url(' + attrs.parallaxSrc + ')'
      });
      var setPosition = function () {
        var calcValY = (elem.prop('offsetTop') - $window.pageYOffset) * ($scope.parallaxRatio ? $scope.parallaxRatio : 1.1) - ($scope.parallaxVerticalOffset || 0);
        // horizontal positioning
        elem.css('background-position', "50% " + calcValY + "px");
      };

      // set our initial position - fixes webkit background render bug
      angular.element($window).bind('load', function(e) {
        setPosition();
        $scope.$apply();
      });

      angular.element($window).bind("scroll", setPosition);
      angular.element($window).bind("touchmove", setPosition);
    }  // link function
  };
}]);
