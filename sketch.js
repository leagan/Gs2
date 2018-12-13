var goat
var song
var gummybear
var button1
var button2
var button3
var Flag = 0 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255,185,25,100);
	gong = loadSound('gong_sound_FX.mp3')
	goat = loadSound('The_Screaming_Sheep_Original_Upload.mp3')
	gummybear = loadSound('The_Gummy_Bear_Song_With_Lyrics.mp3')

	button1 = createButton('GONG');
	button1.position(100, 65);
	button1.size(90,50);
  button1.mousePressed(mousePressed1);
	
	fill(192,55,0,20)
	button2 = createButton('GUMMY BEAR');
  button2.position(300, 65);
	button2.size(90,50);
  button2.mousePressed(mousePressed2);
	
	button3 = createButton('GOAT');
  button3.position(200, 65);
	button3.size(90,50);
  button3.mousePressed(mousePressed3);
	
	button = createButton("Add Gs");
	button.mousePressed(textureFlag);
	button.position(400,65);
	button.size(90,50);
}

function mousePressed1() {
  if ( gong.isPlaying() ) 
    gong.stop();
   else 
    gong.play();
}
 
function mousePressed2() {
	if (gummybear.isPlaying () )
		gummybear.stop()
		else 
			gummybear.play();
	
}
	
	function mousePressed3() {
	if (goat.isPlaying() ) 
		goat.stop()
	else
		goat.play();
	
}

function textureFlag () {
	if (Flag == 1){
		Flag = 0}
 else {Flag = 1}
	
}

function draw (){
fill(20, 204,129)
textSize(700);
text('G', 450,600);
	
	if (Flag){drawdots();}
	
	


}
