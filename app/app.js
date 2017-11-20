angular.module('eckso', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){

        $routeProvider
            .when('/', {
                templateUrl: './app/component/world/world.html',
                controller: 'WorldController'
            })


    }]);