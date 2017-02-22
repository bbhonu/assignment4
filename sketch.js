
// int PEN_W = 2;  
// int ERS_W = 8;
var paintColor = 0;

function setup() {
		cursor('img/drawcursor.png',-30,20);


		var myCanvas = createCanvas(700,400);
	myCanvas.parent('p5-sketch');
		background(255);

		var button=createButton("reset");

		button.mousePressed(resetSketch);
		button.parent('button');
				strokeWeight(8);




}




function draw() {

// stroke(90);
// strokeWeight(10);
// line (350,0,350,400);

if (keyIsDown(OPTION)) {
	    		cursor('img/erasecursor.png',-30,20);

}
else {
	    			cursor('img/drawcursor.png',-30,20);
}




	
	if (mouseIsPressed){
		stroke(paintColor);
		line(pmouseX, pmouseY, mouseX, mouseY);


			if (keyIsDown(OPTION)){
    		paintColor=255;
    		}
    		else {
    			paintColor=0;

    		}


				sendDrawing({
			'px':pmouseX,
			'py':pmouseY,
			'x':mouseX,
			'y':mouseY,
			'f':paintColor

		})

	}

	

	}

function resetSketch () {

	background(255);

}

function sendDrawing(message) {
	socket.emit('drawing', message);
}

function drawOther(somePX,somePY,someX,someY,someF) {
stroke(someF);
line(somePX,somePY,someX,someY);


}



