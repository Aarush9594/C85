mars_images=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg"]
random_number=Math.floor(Math.random()*4)
console.log(random_number)
var canvas=document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
var rover_width=100
var rover_height=90
var rover_y=10
var rover_x=10
var rover_image="rover.png"
var background_image=mars_images[random_number]

function add(){
  background_imgtag= new Image()
  background_imgtag.onload=uploadbackground
  background_imgtag.src=background_image
  rover_imgtag=new Image()
  rover_imgtag.onload=uploadrover
rover_imgtag.src=rover_image
}

function uploadbackground(){
  ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
}

function uploadrover(){
 ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height)
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
  keypres=e.keyCode
  console.log(keypres)
  if (keypres==37){
    console.log("Left key is pressed")
    Left()
  }
  if (keypres==39){
    console.log("Right key is pressed")
    Right()
  }
  if (keypres==40){
    console.log("Down key is pressed")
    Down()
  }
  if (keypres==38){
    console.log("Up key is pressed")
    Up()
  }
}
function Right(){
  if (rover_x<=700) {
    rover_x=rover_x+10
  console.log("When right arrow is pressed,x= "+rover_x+"y="+rover_y)
  uploadbackground()
  uploadrover()
  }
}

function Left(){
  if (rover_x>=0) {
    rover_x=rover_x-10
  console.log("When left arrow is pressed,x= "+rover_x+"y="+rover_y)
  uploadbackground()
  uploadrover()
  }
}

function Down(){
  if (rover_y<=510) {
    rover_y=rover_y+10
  console.log("When right arrow is pressed,x= "+rover_x+"y="+rover_y)
  uploadbackground()
  uploadrover()
  }
}

function Up(){
  if (rover_y>=0) {
    rover_y=rover_y-10
  console.log("When right arrow is pressed,x= "+rover_x+"y="+rover_y)
  uploadbackground()
  uploadrover()
  }
}

