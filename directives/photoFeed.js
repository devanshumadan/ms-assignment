"use strict";
angular.module('feed').directive('photoFeed', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/feedPhoto.html'
    };
});