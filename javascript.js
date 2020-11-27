
function changefirstname(){
    var firstplayer = prompt("Please first player name",);
    if (firstplayer != null) {
        document.getElementById("name--0").innerHTML = firstplayer ;
      }

};
function changesecondname(){
    var secondtplayer = prompt("Please second player name",);
    if (secondtplayer != null) {
        document.getElementById("name--1").innerHTML = secondtplayer ;
      }


};
var playercurrentturn =1 ;
var firstplayerscore =0;
var seconrplayerscore =0;
var randomnumber;
var actualfirst = 0;
var actualsecond = 0;
activplayer();
function randomnumbeer(){
    randomnumber = (Math.floor(Math.random() * 6) + 1);
    console.log(randomnumber);
    document.getElementById("diceimage").src = "dice-"+randomnumber+".png";
    if(1<randomnumber && randomnumber<7){if(playercurrentturn === 1){
        firstplayerscore = firstplayerscore +  randomnumber;
        
        document.getElementById("current--0").innerHTML = firstplayerscore ;

    }};
    if(1<randomnumber && randomnumber<7){if(playercurrentturn === 2){
        seconrplayerscore = seconrplayerscore + randomnumber;
        document.getElementById("current--1").innerHTML = seconrplayerscore ;
    }};

    if(randomnumber === 1 && playercurrentturn === 1){
        playercurrentturn = 2;
        firstplayerscore = 0;
        document.getElementById("current--0").innerHTML = firstplayerscore ;}
    else if(randomnumber === 1 && playercurrentturn === 2){
        playercurrentturn = 1;
        seconrplayerscore = 0;
        document.getElementById("current--1").innerHTML = seconrplayerscore ;
    };
    activplayer();
};






function hold(){
if(playercurrentturn === 1){
    actualfirst = actualfirst + firstplayerscore;
    firstplayerscore = 0;
    document.getElementById("score--0").innerHTML = actualfirst ;
    if( actualfirst >= 100 ){document.getElementById("name--0").innerHTML = firstplayer+ ' is the winner' ;};
};
if(playercurrentturn === 2){
    actualsecond = actualsecond + seconrplayerscore;
   seconrplayerscore = 0;
   document.getElementById("score--1").innerHTML = actualsecond ;
   if(actualsecond >= 100){document.getElementById("name--1").innerHTML = secondtplayer +' is the winner' ;};
};
if(playercurrentturn === 1){playercurrentturn = 2}else {playercurrentturn = 1};
document.getElementById("current--0").innerHTML = 0 ;
document.getElementById("current--1").innerHTML = 0 ;
activplayer();
};

function reset(){
playercurrentturn =1 ;
firstplayerscore =0;
seconrplayerscore =0;
actualfirst = 0;
actualsecond = 0;
document.getElementById("current--0").innerHTML = firstplayerscore ;
document.getElementById("current--1").innerHTML = seconrplayerscore ;
document.getElementById("score--0").innerHTML = actualfirst ;
document.getElementById("score--1").innerHTML = actualsecond ;
activplayer();
};
function activplayer(){
    if(playercurrentturn === 1){
        document.getElementById("name--0").style.backgroundColor = "red" ;
        document.getElementById("name--1").style.backgroundColor = "pink" ;
    }
    else{
        document.getElementById("name--0").style.backgroundColor = "pink" ;
        document.getElementById("name--1").style.backgroundColor = "red" ;
    }
};