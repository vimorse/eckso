/**
 * Created by chokon on 11/19/2017.
 */

//import "../../lib/core/world"

angular.module('eckso').service('world-service', [function () {
    return{
        world: null,

        currentClicked: null,

        setCurrentClicked: function(eckso){
            this.currentClicked = eckso;
        },

        getCurrentClicked: function(){
            return this.currentClicked;
        },

        getNewWorld: function(xsize, ysize){
            const newWorld = new World(xsize, ysize);
            this.world = newWorld;
            return newWorld;
        },

        changeToO: function(o, x){
            changeToO(this.world, o, x);
        }

    }
}]);