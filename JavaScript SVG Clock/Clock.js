window.onload = function (){

var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
	m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h);

var showDate=today.getDate();
var startDigitalTimeTimeout=window.setInterval(startDigitalTime, 20);
var startDisable="N";

var hoursTime = "00";
var minutesTime = "0";
var secondsTime = "00";  
minutesTime = checkTime(minutesTime);
var stw=true;
var stwTimeout=true;

var paper = new Raphael( 0, 0, 800, 500);

var faceframe=paper.circle(200,200,120);
faceframe.attr({fill:"#2f8fc6"});
faceframe.attr("stroke", "#566872");   

var face = paper.circle(200,200,95);
face.attr({fill: "45-#1d5e84-#c1e0f2"})
face.attr("stroke","#566872")

var digiFrame=paper.rect(170,269,57,12).attr({"fill" : "white", "stroke" : "#566872"});

var dateFrame=paper.rect(265,195,13,13);
dateFrame.attr("stroke","#566872");
dateFrame.attr("fill","white");
var iDate=paper.text(271,201,showDate).attr({"font-family":"Tahoma","font-size": 10});

var hours=paper.rect(197,200,5,55);
hours.attr({fill:"#3a3a4f"});
hours.attr("stroke","#d6d8d2");

var minutes=paper.rect(197,200,5,90);
minutes.attr({fill:"#3a3a4f"});
minutes.attr("stroke","#d6d8d2");

var seconds = paper.rect(200,200,2,90);
seconds.attr({fill:"#859ead"});
seconds.attr("stroke","#566872");
seconds.attr({"z-index":2});

var middle=paper.circle(200,200,5);
middle.attr({fill:"#2f8fc6"});
middle.attr("stroke","#566872");

var worldTimesFrame=paper.rect(340,48,245,95);
paper.text(455,125,"World Times").attr({"font-family":"Tahoma", "font-size":25});

var number1=paper.text(255,105,"1").attr({"font-family" : "Georgia","font-size" : 18});
var number2=paper.text(295,145,"2").attr({"font-family" : "Georgia","font-size" : 18});
var number3=paper.text(308,200,"3").attr({"font-family" : "Georgia","font-size" : 18});
var number4=paper.text(292,255,"4").attr({"font-family" : "Georgia","font-size" : 18});
var number5=paper.text(252,292,"5").attr({"font-family" : "Georgia","font-size" : 18});
var number6=paper.text(200,310,"6").attr({"font-family" : "Georgia","font-size" : 18});
var number7=paper.text(145,292,"7").attr({"font-family" : "Georgia","font-size" : 18});
var number8=paper.text(107,255,"8").attr({"font-family" : "Georgia","font-size" : 18});
var number9=paper.text(92,200,"9").attr({"font-family" : "Georgia","font-size" : 18});
var number10=paper.text(105,145,"10").attr({"font-family" : "Georgia","font-size" : 18});
var number11=paper.text(142,105,"11").attr({"font-family" : "Georgia","font-size" : 18});
var number12=paper.text(200,90,"12").attr({"font-family" : "Georgia","font-size" : 18});

paper.text(382,80,"Sydney").attr({"font-family" : "Tahoma","font-size" : 16});
paper.text(382,100,"(GMT+11)").attr({"font-family" : "Tahoma","font-size" : 12});
paper.text(460,80,"Beijing").attr({"font-family" : "Tahoma","font-size" : 16});
paper.text(462,100,"(GMT+8)").attr({"font-family" : "Tahoma","font-size" : 12});
paper.text(542,80,"New York").attr({"font-family" : "Tahoma","font-size" : 16});
paper.text(542,100,"(GMT-5)").attr({"font-family" : "Tahoma","font-size" : 12});

var button1 = paper.ellipse(510,285,15,9);
button1.attr({fill: "#dce5e1"});
var button1text = paper.text(510, 285, "Roman").attr({"font-size":8});
button1.click(function () {romanNumbers();});
button1text.click(function () {romanNumbers();});

var button3=paper.rect(325,185,12,12);
button3.attr({"fill":"#dce5e1"})
var plus=paper.text(331,189,"+").attr({"font-family" : "Tahoma","font-size" : 16});
plus.click(function () {addDate();})

var button4=paper.rect(325,205,12,12);
button4.attr({"fill":"#dce5e1"})
var minus=paper.text(331,210,"-").attr({"font-family" : "Tahoma","font-size" : 16});
minus.click(function () {takeDate();})

button3.click(function () {addDate();})
button4.click(function () {takeDate();})

var appeareanceFrame=paper.rect(485,230,100,80)
paper.text(533,240,"Appearance").attr({"font-family":"Tahoma", "font-size":16});

var btnFace=paper.ellipse(560,285,15,9);
paper.text(560,285,"Face").attr({"font-size":8}).click(function () {changeFace();});
btnFace.attr({fill: "#dce5e1"});
btnFace.click(function () {changeFace();});

var timerFrame=paper.rect(410,160,100,50);
var timerText=paper.text(460,170,"Timer").attr({"font-family": "Tahoma","font-size" : 16});

var btnStart = paper.ellipse(428,195,14,8);
var btnStartText = paper.text(428,195,"Start").attr({"font-size":9});
btnStart.attr({fill: "#dce5e1"});
btnStart.click(function () {checkStopWatch();})
btnStartText.click(function () {checkStopWatch();})

var btnStop=paper.ellipse(460,195,14,8).attr({"fill":"#dce5e1"});
var btnStopText=paper.text(460,195,"Stop").attr({"font-size":9});
btnStop.click(function () {stopTheWatch();});
btnStopText.click(function () {stopTheWatch();});

var btnClear=paper.ellipse(492,195,14,8);
btnClear.attr({"fill":"#dce5e1"})
var btnClearText=paper.text(492,195,"Clear").attr({"font-size":9});
btnClear.click(function () {clearWatch();});
btnClearText.click(function () {clearWatch();});

var updateTimeFrame=paper.rect(342,230,100,80);
paper.text(390,240,"Update time").attr({"font-family":"Tahoma", "font-size":16});;

var btnMPlus=paper.rect(400,265,12,12);
btnMPlus.attr({"fill":"#dce5e1"})
var mPlus=paper.text(406,269,"+").attr({"font-family" : "Tahoma","font-size" : 16});
paper.text(406,284,"M").attr({"font-family":"Tahoma", "font-size":14});
mPlus.click(function () {addMinute();})
btnMPlus.click(function () {addMinute();})

var btnMMinus=paper.rect(400,293,12,12);
btnMMinus.attr({"fill":"#dce5e1"});
var mMinus=paper.text(406,298,"-").attr({"font-family" : "Tahoma","font-size" : 16});
mMinus.click(function () {takeMinute();})
btnMMinus.click(function () {takeMinute();})

var btnHPlus=paper.rect(370,265,12,12);
btnHPlus.attr({"fill":"#dce5e1"})
var hPlus=paper.text(376,269,"+").attr({"font-family" : "Tahoma","font-size" : 16});
paper.text(375,284,"H").attr({"font-family":"Tahoma", "font-size":14});
hPlus.click(function () {addHour();})
btnHPlus.click(function () {addHour();})

var btnHMinus=paper.rect(370,293,12,12);
btnHMinus.attr({"fill":"#dce5e1"})
var hPlus=paper.text(376,298,"-").attr({"font-family" : "Tahoma","font-size" : 16});
btnHMinus.click(function () {takeHour();})
hPlus.click(function () {takeHour();})

function analogClock(){
    var today = new Date();
    var dh = 30*(today.getHours()%12+today.getMinutes()/60)+180;
    var dm = 6*today.getMinutes()+180;
    var ds = 6*today.getSeconds()+180;

seconds.animate({transform: [ 'r',ds,200,200]});
minutes.animate({transform: ['r',dm,200,200]});
hours.animate({transform: ['r',dh,200,200]});

setTimeout(function(){analogClock()},1000)
}

function startDigitalTime() {
	s=checkTime(s);
    document.getElementById('digi').innerHTML = h + ":" + m + ":" + s;
}

function checkTime(i) {
    var anything=i;
	if (i.toString().length<2) {
		anything = "0" + i};  // add zero in front of numbers < 10
    return anything;
}

function startTime(){
	s++;
	if (s>59) {
		s=0;
		m++;
		}
	if (m>59) {
			m=0;
			h++;
		}
	if (h>=24) {
		h=0;
		}
	setTimeout(startTime,1000);
}

function romanNumbers(){
	number1.remove();
	number2.remove();
	number3.remove();
	number4.remove();
	number5.remove();
	number6.remove();
	number7.remove();
	number8.remove();
	number9.remove();
	number10.remove();
	number11.remove();
	number11.remove();
	number11.remove();
	number12.remove();
	paper.text(255,107,"I").attr({"font-family" : "Times New Roman","font-size" : 15});
	paper.text(293,145,"II").attr({"font-family" : "Times New Roman","font-size" : 15});
	paper.text(308,200,"III").attr({"font-family" : "Times New Roman","font-size" : 15});
	paper.text(293,255,"IV").attr({"font-family" : "Times New Roman","font-size" : 15});
	paper.text(252,295,"V").attr({"font-family" : "Times New Roman","font-size" : 15});
	paper.text(200,307,"VI").attr({"font-family" : "Times New Roman","font-size" : 15});
	paper.text(145,295,"VII").attr({"font-family" : "Times New Roman","font-size" : 15});
	paper.text(105,255,"VIII").attr({"font-family" : "Times New Roman","font-size" : 15});
	paper.text(92,200,"IX").attr({"font-family" : "Times New Roman","font-size" : 15});
	paper.text(105,145,"X").attr({"font-family" : "Times New Roman","font-size" : 15});
	paper.text(142,107,"XI").attr({"font-family" : "Times New Roman","font-size" : 15});
	paper.text(200,92,"XII").attr({"font-family" : "Times New Roman","font-size" : 15});	
}

function newYork(){
    var hh = h-5;
    hh=checkTime(hh);
    m=checkTime(m);
    s = checkTime(s);
    if (hh<0){hh=24-Math.abs(hh)};
    document.getElementById('new-york').innerHTML =  hh + ":" + m + ":" + s;
	var t = setTimeout(newYork, 1000);
}

function sydney(){
    var hh = h+11;
    m = checkTime(m);
    s = checkTime(s);
  
	var diff=hh-24;
   	if (hh>23) {hh=Math.abs(diff)};
	hh = checkTime(hh);
    document.getElementById('sydney').innerHTML = hh + ":" + m + ":" + s;
    var t = setTimeout(sydney, 1000);
}

function tokyo(){
    var hh = h+8;
    m = checkTime(m);
    s = checkTime(s);
   
    var diff=24-hh;
    if (hh>=23) {hh=Math.abs(diff)};
	hh=checkTime(hh);
    document.getElementById('tokyo').innerHTML = hh + ":" + m + ":" + s;
    var t = setTimeout(tokyo, 1000);
}

function addDate(){
    iDate.remove();
    if (showDate>=31) {showDate=1}
        else {showDate=showDate+1};
    var dateFrame=paper.rect(265,195,13,13);
    dateFrame.attr("stroke","#566872");
    dateFrame.attr("fill","white");
    paper.text(271,201,showDate).attr({"font-family":"Tahoma","font-size": 10});
    showDate.remove();
}

function takeDate(){
    iDate.remove();
    if (showDate<=1) {showDate=31}
        else {showDate=showDate-1};
    var dateFrame=paper.rect(265,195,13,13);
    dateFrame.attr("stroke","#566872");
    dateFrame.attr("fill","white");
    paper.text(271,201,showDate).attr({"font-family":"Tahoma","font-size": 10});
    showDate.remove();
}

function changeFace(){
        faceframe.attr({fill:"#b76738"});
        face.attr({fill: "45-#873d12-#e5deda"});
        middle.attr({"fill":"#b76738"});
}
	
function checkStopWatch(){
    if (startDisable== "Y") return;
	stopWatch();
	startDisable="Y";
}

function stopWatch(){    	
    secondsTime++;
    if (secondsTime>=60) {
        secondsTime=0; 
        minutesTime++; 
		minutesTime = checkTime(minutesTime);
        if (minutesTime>=60) {
            minutesTime=0; 
            hoursTime++;
        }
    };
    
    secondsTime = checkTime(secondsTime);

    var digi=document.getElementById('digi').innerHTML = hoursTime + ":" + minutesTime + ":" + secondsTime;

    window.clearInterval(startDigitalTimeTimeout);
	if (stw==true) {stwTimeout = setTimeout(stopWatch,10);}	
}

function clearWatch(){
    digi.textContent= "00:00:00";
    secondsTime = "00"; minutesTime = "00"; hoursTime = "00";
    startDisable="N";
}

function stopTheWatch(){
	clearTimeout(stwTimeout);
	startDisable="N";
}

function addMinute(){
    m++;
	m=checkTime(m);
	if (m>59) {
		m=0;
		h++;
		}	
    }
	
function takeMinute(){
	m--;
	m=checkTime(m);
	if (m<0) {
		m=59;
		h--;
		}
}

function addHour(){
	h++;
	h=checkTime(h);
	if (h>23) {
		h=0;
	}
}

function takeHour(){
	h--;
	h=checkTime(h);
	if (h<0) {
		h=23;
	}
	if (h>23) return;
 
}

startTime();
analogClock(); //Function call that starts the startTime function.
newYork();
sydney();
tokyo();
};
