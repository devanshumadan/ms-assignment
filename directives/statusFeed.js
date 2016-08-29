"use strict";
angular.module('feed').directive('statusFeed', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/feedStatus.html'
    };
});