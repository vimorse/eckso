/**
 * Created by chokon on 11/19/2017.
 */

angular.module('eckso')
    .controller('WorldController', ['$scope', 'world-service', function($scope, worldService){
        const vm = this;

        $scope.grid = [];
        $scope.showAddOModal = false;
        vm.world = null;

        vm.onClickX = function(){
            //worldService.setCurrentClicked();
            $scope.showAddOModal = true;
            //alert("Clicked X, Make Something");
        };

        vm.onClickO = function(){
            alert("Clicked O, Get Something, Maybe")
        };

        vm.init = function(){
            vm.world = worldService.getNewWorld(100,100);
            $scope.grid = vm.world.grid;
            for(let r in $scope.grid){
                let row = $scope.grid[r];
                for(let e in row){
                    let eckso = row[e];
                    if(eckso.displayAs == "o"){
                        eckso.onClick = vm.onClickO;
                    } else {
                        eckso.onClick = vm.onClickX;
                    }
                }
            }
        };

        vm.init();

}]).directive('world', function(){
    return {
        templateUrl: "world.html",
        controller: "WorldController"
    }
});