"use strict";
angular.module('feed').controller('appController', ['$scope', 'dataService', '$interval', function ($scope, dataService, $interval) {
    $scope.feed = {
        feedData: null
    };

    //Fetches data from the source and populates the model variable for binding.
    function showData() {
        dataService.getData().then(function (response) {
            if (!$scope.feed.feedData) {
                $scope.feed.feedData = response.data;
            }
            else {
                $scope.feed.feedData = response.data.concat($scope.feed.feedData); //new data  is added to the top.
            }
        });
    }
    showData();
    $interval(showData, 20000); //After every 20 seconds new data is fetched and binded.

}]);