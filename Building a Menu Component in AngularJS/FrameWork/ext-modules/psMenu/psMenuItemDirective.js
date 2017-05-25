angular.module('psMenu').directive('psMenuItem', function () {
    return {
        require: '^psMenu',
        scope: {
            label: '@',
            icon:'@'
        },
        templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
        controller: 'psMenuController',
        link: function (scope, element, attr,ctrl) {

        }
    }
})