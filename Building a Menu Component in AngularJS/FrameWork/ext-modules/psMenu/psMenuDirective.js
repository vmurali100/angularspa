angular.module('psMenu').directive('psMenu', function () {
    return {
        transclude: true,
        scope: {
           
        },
        templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
        controller: 'psMenuController',
        link: function (scope,element,attr) {

        }
    }
})