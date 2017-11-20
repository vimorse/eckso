/**
 * Created by chokon on 11/16/2017.
 */

function O(title, story, items, x, y){
    return {
        title: title,
        story: story,
        items: items,
        x: x,
        y: y,
        chaching: function(){

        },
        displayAs: 'o',
        onClick: null,
        styleClass: "o eckso"
    }
}