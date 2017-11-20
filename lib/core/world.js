/**
 * Created by chokon on 11/16/2017.
 */

function World(xsize, ysize){
    return {
        xsize: xsize,
        ysize: ysize,
        grid:  initGrid(xsize, ysize)
    }
}

function initGrid(xsize, ysize) {
    var grid = [];

    var x = 0, y = 0;
    for (y = 0; y < ysize; y++){
        let row = [];
        for (x = 0; x < xsize; x++) {
                row.push(new X(x,y));
        }
        grid.push(row);
    }

    return grid;
}

function changeToO(world, o, x){
    world.grid[x.x][x.y] = o;
}

function importWorld() {

}