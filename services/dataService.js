(function () {
    "use strict";
    angular.module('feed').service('dataService', function ($http) {
        var flag = false; //To create never ending data.
        this.getData = function () {
            if (!flag) {
                flag = true;
                return $http.get('../assets/localJSON/data.json');
            }
            else {
                flag = false;
                return $http.get('../assets/localJSON/data_new.json');
            }

        };
    });
} ());