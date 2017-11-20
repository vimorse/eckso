/**
 * Created by chokon on 11/19/2017.
 */

angular.module('eckso')
    .controller('AddOController', ['$scope', 'world-service', function($scope, worldService){

        $scope.eckso =  worldService.getCurrentClicked();
        $scope.tile = "";
        $scope.story = "";
        $scope.items = [];

        $scope.addItem = function () {
            $scope.items.push(new Item("","",0));
            console.log($scope.eckso);
        };

        $scope.deleteItem = function(idx){
            $scope.items.splice(idx, 1);
        };

        $scope.submit = function () {
            worldService.changeToO()
        }
    }])
    .directive('addo', function () {
        return {
            templateUrl: "/component/modals/addO/addO.html",
            controller: "AddOController"
        }
    });