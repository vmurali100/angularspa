﻿/// <reference path="../../Scripts/angular.min.js" />
angular.module("psFramework").controller('psFrameworkController', function ($scope, $window, $timeout, $rootScope) {
    $scope.isMenuButtonVisible = true;
    $scope.$on('ps-menu-item-selected-event', function (event,data) {
        $scope.routeString = data.route;
    })
    $($window).on('resize.psFramework', function () {
        $scope.$apply(function () {
            checkWidth();
        })
    })
    $scope.$on("$destroy", function () {
        $($window).off('resize.psFramework')
    })
    var checkWidth = function () {
        var width = Math.max($($window).width(),$window.innerWidth);
        $scope.isMenuVisible = (width > 768);
        $scope.isMenuButtonVisible = !$scope.isMenuVisible;
    }

    $scope.menuButtonClicked = function () {
        $scope.isMenuVisible = !$scope.isMenuVisible;
        broadCastMenuState();
     }

    var broadCastMenuState = function () {
        $rootScope.$broadcast('ps-menu-show', { show: $scope.isMenuVisible })
    }
    $timeout(function () {
        checkWidth()
    }, 0)
})