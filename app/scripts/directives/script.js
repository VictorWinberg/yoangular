'use strict';

/**
 * @ngdoc directive
 * @name yoangularApp.directive:script
 * @description
 * # script
 */
angular.module('yoangularApp')
  .directive('script', function () {
    return {
      restrict: 'A',
      scope: {isCollapsed:'='},
      link: function postLink(scope, element, attrs) {
        element.on('click','.btn.btn-primary',function(e) {
          angular.element(e.target).removeClass('btn-primary');
          angular.element(e.target).addClass('btn-success');
          angular.element(e.target).html('Uppfattat!<span class="glyphicon glyphicon-ok"></span>'); // button text will be "finished!"
        });
      }
    };
  });
