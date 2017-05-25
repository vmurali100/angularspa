/// <reference path="../../Scripts/angular.min.js" />
angular.module("psFramework").directive('psFramework', function () {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle:'@'
        },
        controller: 'psFrameworkController',
        templateUrl:'ext-modules/psFramework/psFrameworkTemplate.html'
    }
})