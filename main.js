canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;
mars_images = ["image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg"]
var random_number = Math.floor(Math.random()*4)
console.log(random_number)
background_img = mars_images[random_number];
rover_img = "rover.png"

function add(){
    background_NEWimg = new Image();
    background_NEWimg.onload = uploadBackground
    background_NEWimg.src = background_img;

    rover_NEWimg = new Image();
    rover_NEWimg.onload = uploadRover
    rover_NEWimg.src = rover_img;  
}

function uploadBackground(){
    ctx.drawImage(background_NEWimg, 0, 0, canvas.width, canvas.height)
}

function uploadRover(){
    ctx.drawImage(rover_NEWimg, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    var keypress = e.keyCode;
    console.log(keypress)

    if(keypress == '37'){
        left();
        console.log("left key is pressed, x = "+ rover_x + ",y = " + rover_y)
    }

    if(keypress == '38'){
        up();
        console.log("up key is pressed, x = "+ rover_x + ",y = " + rover_y)
    }

    if(keypress == '39'){
        right();
        console.log("right key is pressed, x = "+ rover_x + ",y = " + rover_y)
    }

    if(keypress == '40'){
        down();
        console.log("down key is pressed, x = "+ rover_x + ",y = " + rover_y)
    }
}

function left(){
    if(rover_x >= 0){
    rover_x -= 10
    uploadBackground();
    uploadRover();
    }
}

function up(){
    if(rover_y >= 0){
    rover_y -= 10
    uploadBackground();
    uploadRover();
    }
}

function right (){
    if(rover_x <= 700){
    rover_x += 10
    uploadBackground();
    uploadRover();
    }
}

function down (){
    if(rover_y <= 500){
    rover_y += 10
    uploadBackground();
    uploadRover();
    }
}
