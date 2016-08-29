"use strict";
angular.module('feed').directive('feedReader', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/feed.html',
        scope: {
            data: '='
        },
        link: function (scope, element, attrs) {
            scope.newData = false;
            scope.$watch('data', function (data) { //watches changse in the data. 
                if ($('.panel-body').scrollTop() === 0) {
                    scope.newData = false;
                }
                else {
                    scope.newData = true; //This dhows a button to take scroll to top.
                }
            }, true);
            scope.scrollTop = function () {
                scope.newData = false;
                $('.panel-body').animate({ scrollTop: 0 }, "slow");
            };
        }
    };
});