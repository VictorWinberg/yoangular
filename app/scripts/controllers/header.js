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
        return '/' + viewLocation === $location.path();
    };
    $scope.dropdowns =
    [
      {title: 'Aktuellt', items:
      [
        {title: 'Nyheter', href: 'nyheter'},
        {title: 'Kalender', href: 'kalender'},
        {title: 'Eventanmälan', href: 'eventanmälan'}
      ]},
      {title: 'Community', items:
      [
        {title: 'Anslut', href: 'anslut'}
      ]},
      {title: 'För funktionärer', items:
      [
        {title: 'STAB16', href: 'stab16'}
      ]},
      {title: 'Sektionen', items:
      [
        {title: 'Om sektionen', href: 'sektionen'},
        '-',
        {title: 'Swagtest', href: 'swagtest'},
        {title: 'Store', href: 'store'}
      ]},
      {title: 'För företag', href: 'foretag'},
      {title: 'About', href: 'about'}
    ];
  });
