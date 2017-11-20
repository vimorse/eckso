/**
 * Created by chokon on 11/16/2017.
 */

function X(x, y){
  return {
      fill :  function (title, story, items){
          return new O(title, story, items, this.x, this.y)
      },
      x:  x,
      y: y,
      displayAs: 'x',
      onClick: null,
      styleClass: "x eckso"
  }
}

