//createing canvas object
const canvas = document.querySelector('canvas');
// adding canvases height and width to 100%

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
//create a new veriable call "c" and add getContext function to it
//will use this const to drow the items to the canvas

const c = canvas.getContext('2d');
/*
//in here we adding x , y codinets to the canves as well as the width and height.

c.fillRect(x,y,width,height);

*/

c.fillRect(100,100,100,100);



