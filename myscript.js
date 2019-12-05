//variable declarations
var btnShowRed = document.getElementById("showRed");
var btnShowBlue = document.getElementById("showBlue");
var blueBox = document.getElementById("blue");
var redBox = document.getElementById("red");
var yellowBox = document.getElementById("yellow")
var purpleBox = document.getElementById("purple");
var pinkBox = document.getElementById("pink");
var end1Box = document.getElementById("end1");
var end2Box = document.getElementById("end2");

//event handlers
var showRedfunction = function() {
    redBox.style.display = "block";
	blueBox.style.display = "none";
	yellowBox.style.display = "none";
	purpleBox.style.display = "none";
	pinkBox.style.display = "none";
	end1Box.style.display = "none";
	end2Box.style.display = "none";
}
var showBluefunction = function() {
    redBox.style.display = "none";
	blueBox.style.display = "inline-block";
	yellowBox.style.display = "inline-block";
	purpleBox.style.display = "inline-block";
	pinkBox.style.display = "inline-block";
	end1Box.style.display = "none";
	end2Box.style.display = "none";
}
//endings are written here
var showEnd2function =function() {
	redBox.style.display = "none";
	blueBox.style.display = "none";
	yellowBox.style.display = "none";
	purpleBox.style.display = "none";
	pinkBox.style.display = "none";
	end1Box.style.display = "none";
	end2Box.style.display = "block";   //only show end2 box

}
var showEnd1function =function() {
	redBox.style.display = "none";
	blueBox.style.display = "none";
	yellowBox.style.display = "none";
	purpleBox.style.display = "none";
	pinkBox.style.display = "none";
	end1Box.style.display = "block";  //only show end1 Box
	end2Box.style.display = "none";
}

//events
btnShowRed.onclick = showRedfunction;
btnShowBlue.onclick = showBluefunction;

var round = 0;


var roundfunction = function() {
	round+= 1;

	if (robotscore==2){
		showEnd2function();

		//if (confirm (" Roses are red \n Violet are blue \n You have tried your best \n But robots have beaten you. \n Try Again?")) {
			//window.location.reload();
		//};
	}
	else if (humanscore==2){
		showEnd1function();
		//if (confirm (" Roses are red \n They have thorns too \n Don't ever doubt yourself \n The New Champion is you!")) {
			//window.location.reload();
		//};
	}
	else if ((humanscore + robotscore)<3){
		console.log("This is round " + round + " out of 3");
		document.getElementById("round").innerHTML  = round;
		}
}



//event listener for human
var rolloverImg = new Array("Images/cat.jpg","Images/mouse2.jpg","Images/elephant.jpg" );
var defaultImg = new Array ("Images/cat2.jpg","Images/mouse.jpg","Images/elephant2.jpg");
var imgList = document.getElementsByClassName("human");

//mouseover handler
var mouseoverHandler = function(event) {
	var imageObj = event.target;
	var i = imageObj.id;
	imageObj.src = rolloverImg[i];
}
//mouseout handler
var mouseoutHandler = function(event) {
	var imageObj = event.target;
	var i = imageObj.id;
	imageObj.src = defaultImg[i];
}

for (var i=0; i<imgList.length; i++) {
	// add new property to image object to identify the index number
	var imgNode = imgList[i];
	imgNode.id = i;
	imgNode.onmouseover = mouseoverHandler;
	imgNode.onmouseout = mouseoutHandler;
}    

//event listeners for robot
var rollover2Img = ["Images/robotcat.jpg", "Images/robotmouse2.jpg", "Images/robotelephant2.jpg"];
var default2Img = ["Images/robotcat2.jpg", "Images/robotmouse.jpg","Images/robotelephant3.jpg"];
var imgList2 = document.getElementsByClassName("robot");

// mouseover handler
var MouseOver2Handler = function(event) {
	var imageObj = event.target;
	var i = imageObj.id;
	imageObj.src = rollover2Img[i];
}
//mouseout handler
var MouseOut2Handler = function(event) {
	var imageObj = event.target;
	var i = imageObj.id;
	imageObj.src = default2Img[i];
}
	

for (var i=0; i<imgList2.length; i++) {
	var imgNode2 = imgList2[i];
	imgNode2.id = i;
	imgNode2.onmouseover = MouseOver2Handler;
	imgNode2.onmouseout = MouseOut2Handler;
}    

var easteregg = document.getElementById ("easteregg");
easteregg.addEventListener("click", eastereggfunction);

function eastereggfunction () {
	alert ("You have found the easter egg")

}


