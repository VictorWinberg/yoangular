'use strict';

/**
 * @ngdoc function
 * @name yoangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoangularApp
 */
angular.module('yoangularApp')
  .controller('MainCtrl', function ($scope, lorem) {
    $scope.items = lorem.items();
  });
