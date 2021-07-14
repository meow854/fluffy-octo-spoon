canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

carwidth= 75;
carheight= 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carX= 5;
carY= 225;

function add() {
	background_imgTag= new Image();
	background_imgTag.onload= uploadBackground;
	background_imgTag.src= background_image;
	greencar_imgTag= new Image();
	greencar_imgTag.onload= uploadgreencar;
	greencar_imgTag.src= greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, carX, carY, carwidth, carheight)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (carY >= 0) {
		carY= carY - 10;
		console.log("When up arrow key is pressed, X= " + carX + " | Y= " + carY)
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (carY <= 400) {
		carY= carY + 10;
		console.log("When up down key is pressed, X= " + carX + " | Y= " + carY)
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (carX >= 0) {
		carX= carX - 10;
		console.log("When up left key is pressed, X= " + carX + " | Y= " + carY)
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if (carX <= 800) {
		carX= carX + 10;
		console.log("When up right key is pressed, X= " + carX + " | Y= " + carY)
		uploadBackground();
		uploadgreencar();
	}
}
