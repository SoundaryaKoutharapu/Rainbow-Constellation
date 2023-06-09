const canvas = document.getElementById("canva");
const context = canvas.getContext("2d");
console.log(context);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// when the window is resized, the element will be stable
window.addEventListener('resize', () =>
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.fillStyle = "yellow";
    context.strokeStyle = "red";
    context.lineWidth = 4;
    context.beginPath();
    context.arc(200,200,80,0, Math.PI*2);
    context.fill();
    context.stroke();

})

const mouse = {
    x: undefined,
    y: undefined
}


//click - whenever/wherever  we click on the screen circle will get displayed
canvas.addEventListener('click', function(event)
{
   mouse.x = event.x;
   mouse.y = event.y;
   drawCircle();
   console.log(event);
})


// mousemove - when the mouse moves on screen circle will get displayed
  canvas.addEventListener('mousemove', function(event)
   {
      mouse.x = event.x;
      mouse.y = event.y
      drawCircle();
   })


   function drawCircle()
   {
   context.fillStyle = "yellow";
   context.strokeStyle = "red";
   context.lineWidth = 4;
   context.beginPath();  // we need to call beginpath, it's like telling javascript you want to place your drawing brush on the canvas and start drawing 
   context.arc(mouse.x, mouse.y, 80, 0, Math.PI*2);
   context.fill();
   context.stroke();
   }

   // clear the old paint & iterate in a loop
   function animate()
   {
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawCircle();
    requestAnimationFrame(animate);
   }

   animate();
