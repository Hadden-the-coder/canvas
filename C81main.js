canvas=document.getElementById("My_canvas");
ctx=canvas.getContext("2d");

color="red";

canvas.addEventListener("mousedown",My_mousedown);

function My_mousedown(e){
    color=document.getElementById("color").value;
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    console.log("x="+mousex+"y="+mousey);
    circle(mousex,mousey);
}

function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
}

function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}