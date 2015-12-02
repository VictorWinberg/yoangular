'use strict';

/**
 * @ngdoc function
 * @name yoangularApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the yoangularApp
 */
angular.module('yoangularApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });
