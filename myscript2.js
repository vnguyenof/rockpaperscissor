var result = ["Win", "Lose", "Draw" ];
var human = ["Cat", "Mouse", "Elephant"];
var robot = ["Robot Cat", "Robot Mouse", "Robot Elephant"];
var humanscore = document.getElementById("humanscore");
var robotscore = document.getElementById("robotscore");
var log=document.getElementById("log");
var log2=document.getElementById("log2");
humanscore = 0;
robotscore = 0;


var imgList = document.getElementsByClassName("human");
var imgList2= document.getElementsByClassName("robot");
var random = document.getElementById("random");
random.onclick = randomconfirmHandler;

function randomHandler(event) {
    // the target of the event is an image object
    var y = Math.floor(Math.random() * 3);
    var x= Math.floor(Math.random() * 3);
    var imgObj = event.target;
    var i=imgObj.id;

    if (y==x) {
        imgObj.textContent=result[2];
        alert(imgObj.textContent);
        roundfunction();
    }
    else if ((y==0) && (x==2)) {
        imgObj.textContent=result[1];
        alert(imgObj.textContent);
        roundfunction();
        robotscore+=1;
    }
    else if ((y==0) && (x==1)) {
        imgObj.textContent=result[0];
        alert(imgObj.textContent);
        roundfunction();
        humanscore+=1;
    }
    else if ((y==1) && (x==0)) {
        imgObj.textContent=result[1];
        alert(imgObj.textContent);
        roundfunction();
        robotscore+=1;
    }
    else if ((y==1) && (x==2)) {
        imgObj.textContent=result[0];
        alert(imgObj.textContent);
        roundfunction();
        humanscore+=1;
    }
    else if ((y==2) && (x==1)) {
        imgObj.textContent=result[1];
        alert(imgObj.textContent);
        roundfunction();
        robotscore+=1;
    }
    else if ((y==2) && (x==0)) {
        imgObj.textContent=result[0];
        alert(imgObj.textContent);
        roundfunction();
        humanscore+=1;
    }

    else {alert("Computer Error");}

    document.getElementById("humanscore").innerHTML  = humanscore;
    document.getElementById("robotscore").innerHTML  = robotscore;
    log.textContent= ("You picked " + human[y]);
    log2.textContent = ("Robot Picked " + robot[x]);
}

function randomconfirmHandler () {
if (confirm("Random?")) {randomHandler(event);}
}

function resultHandler(event){
    // the target of the event is an image object
    var x= Math.floor(Math.random() * 3);
    var imgObj = event.target;
    var i=imgObj.id;

    if (i==x) {
        imgObj.textContent=result[2];
        alert(imgObj.textContent);
        roundfunction();
    }
    else if ((i==0) && (x==2)) {
        imgObj.textContent=result[1];
        alert(imgObj.textContent);
        roundfunction();
        robotscore+=1;
    }
    else if ((i==0) && (x==1)) {
        imgObj.textContent=result[0];
        alert(imgObj.textContent);
        roundfunction();
        humanscore+=1;
    }
    else if ((i==1) && (x==0)) {
        imgObj.textContent=result[1];
        alert(imgObj.textContent);
        roundfunction();
        robotscore+=1;
    }
    else if ((i==1) && (x==2)) {
        imgObj.textContent=result[0];
        alert(imgObj.textContent);
        roundfunction();
        humanscore+=1;
    }
    else if ((i==2) && (x==1)) {
        imgObj.textContent=result[1];
        alert(imgObj.textContent);
        roundfunction();
        robotscore+=1;
    }
    else if ((i==2) && (x==0)) {
        imgObj.textContent=result[0];
        alert(imgObj.textContent);
        roundfunction();
        humanscore+=1;
    }
    else {alert("Computer Error");}

    document.getElementById("humanscore").innerHTML  = humanscore;
    document.getElementById("robotscore").innerHTML  = robotscore;
    log.textContent= ("You picked " + human[i]);
    log2.textContent = ("Robot Picked " + robot[x]);

}

function confirmHandler () {
        if (confirm("Pick this Animal?")) {
            resultHandler(event);
        }
}

var i;
for (i=0; i<imgList.length; i+=1) {
    imgList[i].onclick = confirmHandler;
}