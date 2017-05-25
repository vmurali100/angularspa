angular.module('psMenu').directive('psMenuItem', function () {
    return {
        require: '^psMenu',
        scope: {
            label: '@',
            icon: '@',
            route:'@'
        },
        templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
        controller: 'psMenuController',
        link: function (scope, element, attr, ctrl) {
            scope.isActive = function () {
                return element === ctrl.getActiveElement();
            }
            element.on('click', function (event) {
                event.stopPropagation();
                event.preventDefault();
                scope.$apply(function () {
                    ctrl.setActiveItem(element);
                    ctrl.setRoute(scope.route);
                })
            })
        }
    }
})