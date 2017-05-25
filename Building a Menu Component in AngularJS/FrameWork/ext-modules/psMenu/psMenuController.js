angular.module('psMenu').controller('psMenuController', function ($scope, $rootScope) {

    this.getActiveElement = function () {
        return $scope.activeElement;
    }
    this.setActiveItem = function (element) {
        $scope.activeElement = element;
    }
    this.setRoute = function (route) {
        $rootScope.$broadcast('ps-menu-item-selected-event', { route: route })
    }
})