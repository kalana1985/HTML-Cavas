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
c.fillStyle='skyblue';
c.fillRect(100,100,100,100);
c.fillRect(200,200,250,150);

// drawing a Line in Canvas

c.beginPath();
c.moveTo(50,500);
c.lineTo(300,100);
c.lineTo(100,200);
c.strokeStyle='tomato';
c.stroke();

//create a circle/Arc
/*
c.arc(x:Int, y:Int, r:Int, startAngle:flot , endAngle:flot, 
drawCounterClockWise:Bool(true or false));
r=raduis
*/
// startAngle & endAngle properties take radians isnted of degrees.

c.beginPath();
c.arc(600,600,90,0,Math.PI * 2 , false);
c.stroke();
 //adding random circles

for(i=0;i <5 ;  i++){
	var x=Math.random() * window.innerWidth;
	var y=Math.random() * window.innerHeight;

	c.beginPath();
    c.arc(x,y,90,0,Math.PI * 2 , false);
    c.stroke();

};
