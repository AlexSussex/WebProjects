//All layout classes extend from Block class as the parent class
 
function Block(x, y) {
	// cell width and height in pixels
	this.width = 40;
	this.height = 40;

	// initial position in terms of number of grids
	this.x = x;
	this.y = y;

	// uid for this object
	this.id = 0;

	// interface: create a block on the view and in the model
	this.createBlock = function() {
	}

	// deletes this block from the view and model
	this.deleteBlock = function() {
		var div = document.getElementById(x + "" + y);
		div.removeChild(div.childNodes[0]);

		var lvl = parseInt(localStorage.getItem("levelValue")) - 1;
		if (isNaN(lvl)) {
			lvl=0;
		}
		maps[lvl][x, y] = GROUND;
	}

}

function Wall(x, y) {
	Block.apply(this, [ x, y ]);
	
// creating a dom with a wall image, position it according to x and y, 
// and set its size according to defined fixed grid width
	 
	this.createBlock = function() {
		var wall = document.createElement('div');
		document.getElementById(x + "" + y).appendChild(wall);
		wall.className = "wall";
		wall.style.position = "absolute";
		wall.style.width = this.width + "px";
		wall.style.height = this.height + "px";
		wall.style.left = (this.x) * this.width + "px";
		wall.style.top = (this.y) * this.height + "px";
	}
}

function Platinum(x, y) {
	Block.apply(this, [ x, y ]);

// creating a dom with platinum image, position it according to x and y, 
// and set its size according to defined fixed grid width
	 
	this.createBlock = function() {
		var platinum = document.createElement('div');
		document.getElementById(x + "" + y).appendChild(platinum);
		platinum.className = "platinum";
		platinum.style.position = "absolute";
		platinum.style.width = this.width + "px";
		platinum.style.height = this.height + "px";
		platinum.style.left = (this.x) * this.width + "px";
		platinum.style.top = (this.y) * this.height + "px";
	}

}
function Water(x, y) {
	Block.apply(this, [ x, y ]);

// creating a dom with a water image, position it according to x and y, 
// and set its size according to defined fixed grid width
	 
	this.createBlock = function() {
		var platinum = document.createElement('div');
		document.getElementById(x + "" + y).appendChild(platinum);
		platinum.className = "water";
		platinum.style.position = "absolute";
		platinum.style.width = this.width + "px";
		platinum.style.height = this.height + "px";
		platinum.style.left = (this.x) * this.width + "px";
		platinum.style.top = (this.y) * this.height + "px";
	}
}

function Grass(x, y) {
	Block.apply(this, [ x, y ]);

// creating a dom with a grass image, position it according to x and y, 
// and set its size according to defined fixed grid width
	 
	this.createBlock = function() {
		var platinum = document.createElement('div');
		document.getElementById(x + "" + y).appendChild(platinum);
		platinum.className = "grass";
		platinum.style.position = "absolute";
		platinum.style.width = this.width + "px";
		platinum.style.height = this.height + "px";
		platinum.style.left = (this.x) * this.width + "px";
		platinum.style.top = (this.y) * this.height + "px";
	}

}
function Ground(x, y) {
	Block.apply(this, [ x, y ]);
}

function Crown(x, y) {
	Block.apply(this, [ x, y ]);
	
// creating a dom with the crown image, position it according to x and y, 
// and set its size according to defined fixed grid width
	 
	this.createBlock = function() {
		var platinum = document.createElement('div');
		document.getElementById(x + "" + y).appendChild(platinum);
		platinum.className = "crown";
		platinum.style.position = "absolute";
		platinum.style.width = this.width + "px";
		platinum.style.height = this.height + "px";
		platinum.style.left = (this.x) * this.width + "px";
		platinum.style.top = (this.y) * this.height + "px";
	}

}

function Shield(x, y) {
	Block.apply(this, [ x, y ]);
	
// creating a dom with the shield image, position it according to x and y, 
// and set its size according to defined fixed grid width
	 
	this.createBlock = function() {
		var shield = document.createElement('div');
		document.getElementById(x + "" + y).appendChild(shield);
		shield.className = "shield";
		shield.style.position = "absolute";
		shield.style.width = this.width + "px";
		shield.style.height = this.height + "px";
		shield.style.left = (this.x) * this.width + "px";
		shield.style.top = (this.y) * this.height + "px";
	}

}

// The Game map starts to be configured here

var groundMap1 = [];
var groundMap2 = [];
var groundMap3 = [];
var groundMap4 = [];
var groundMap5 = [];
var groundMap6 = [];
var groundMap7 = [];
var groundMap8 = [];
var groundMap9 = [];
var groundMap10 = [];

// a 2-dimensional array to store all the maps
var maps=[];

var WALL = 1;
var GRASS = 2;
var WATER = 3;
var PLATINUM = 4;
var GROUND = 5;
var CROWN = 6;
var SHIELD = 7;

// the map has 13 horizontal grids and 13 vertical grids
var HORIZONTAL_GRID_COUNT = 13;
var VERTICAL_GRID_COUNT = 13;

groundMap1 = [
		[ GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,
				GROUND, GROUND ],
		[ GROUND, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL,
				GROUND, WALL, GROUND ],
		[ PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM, WALL,
				GROUND, GROUND],
		[ WALL, GROUND, GROUND, GROUND, WALL, WALL, WALL, GROUND, GROUND, GROUND,
				GROUND, GROUND, WALL],
		[ WALL, PLATINUM, PLATINUM, PLATINUM, WALL, PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM,
				WALL, PLATINUM, PLATINUM],
		[ WALL, GROUND, GROUND, GROUND, SHIELD, WALL, SHIELD, WALL, WALL, WALL,
				SHIELD, GROUND, GROUND],
		[ WALL, WALL, WALL, GROUND, PLATINUM, WALL, GROUND, GROUND, WALL, GROUND,
				PLATINUM, PLATINUM, WALL ],
		[ WALL, WALL, PLATINUM, WALL, PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM,
				WALL, WALL, WALL ],
		[ WALL, WALL, PLATINUM, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, WALL, WALL,
				PLATINUM, SHIELD ],
		[ SHIELD, WALL, WALL, GROUND, GROUND, WALL, WALL, WALL, GROUND, GROUND,
				WALL, PLATINUM, WALL ],
		[ WATER, WALL, PLATINUM, GROUND, GRASS, GRASS, GRASS, GRASS, GRASS, WATER, WALL,
				GROUND, WALL],
		[ WATER, GROUND, WALL, SHIELD, GRASS, WALL, PLATINUM, WALL, GRASS, WALL,
				WALL, GROUND, WATER ],
		[ WATER, WALL, PLATINUM, GROUND, GRASS, WALL, CROWN, WALL, GRASS, GROUND, GROUND,
				WATER, WATER ], ];

maps.push(groundMap1); 

groundMap2 = [
		[ GROUND, GROUND, GROUND, SHIELD, GROUND, GROUND, GROUND, GROUND, SHIELD, GROUND, GROUND,
				GROUND, GROUND ],
		[ GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL, GRASS, GRASS, GRASS,
				GRASS, GRASS, GRASS ],
		[ WATER, GROUND, PLATINUM, SHIELD, WALL, WALL, PLATINUM, GROUND, PLATINUM, WALL, GROUND,
				GROUND, GROUND ],
		[ WATER, GROUND, PLATINUM, GROUND, WALL, GRASS, WALL, GRASS, PLATINUM, WALL,
				GROUND, WATER, GROUND ],
		[ WATER, GROUND, PLATINUM, GROUND, WALL, GRASS, SHIELD, GRASS, PLATINUM, WALL, GROUND,
				WATER, GROUND ],
		[ WATER, GROUND, PLATINUM, WALL, WALL, GRASS, SHIELD, GRASS, PLATINUM, WALL, GROUND,
				WATER, GROUND ],
		[ WATER, GROUND, PLATINUM, GROUND, WALL, GRASS, GRASS, GRASS, PLATINUM, WALL, GROUND,
				WATER, GROUND ],
		[ PLATINUM, WALL, PLATINUM, PLATINUM, WATER, WATER, WATER, WATER, PLATINUM, WALL,
				GROUND, GROUND, GROUND ],
		[ GROUND, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL,
				WALL, WALL ],
		[ GROUND, GROUND, GROUND, GROUND, SHIELD, GROUND, GROUND, GROUND, GROUND, GROUND,
				GROUND, GROUND, SHIELD ],
		[ GROUND, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL,
				WALL, WALL ],
		[ GRASS, GRASS, GRASS, GRASS, GRASS, WALL, WALL, WALL, GRASS, GRASS, 
				GRASS, GRASS, GRASS ],
		[ GRASS, PLATINUM, GRASS, PLATINUM, GRASS, WALL, CROWN, WALL, WALL, WALL, WALL,
				WALL, WALL], ]; 

maps.push(groundMap2);

groundMap3= [
		[ GROUND, WALL, SHIELD, GROUND, WALL, WALL, WALL, SHIELD, WALL, WALL, WALL,
				SHIELD, GROUND ],
		[ PLATINUM, WALL, PLATINUM, WALL, PLATINUM, WALL, PLATINUM, WALL, PLATINUM, WALL, PLATINUM, 
				GROUND, PLATINUM ],
		[ PLATINUM, GRASS, PLATINUM, GRASS, PLATINUM, GRASS, GRASS, WALL, WALL, WALL, GRASS,
				GRASS, PLATINUM],
		[ WALL, GRASS, GRASS, GRASS, WALL, GRASS, PLATINUM, GRASS, GROUND, GRASS,
				PLATINUM, GRASS, WALL ],
		[ PLATINUM, GRASS, PLATINUM, GRASS, PLATINUM, GRASS, PLATINUM, GRASS, SHIELD, GRASS, GRASS,
				GRASS, WALL ],
		[ WALL, GRASS, WALL, GRASS, WALL, GRASS, GRASS, WALL, WALL, GRASS, WALL,
				GRASS, PLATINUM ],
		[ PLATINUM, WATER, PLATINUM, WALL, PLATINUM, WALL, SHIELD, WALL, PLATINUM, WALL, WALL,
				GROUND, WALL ],
		[ GROUND, WALL, GROUND, WALL, GROUND, WALL, GROUND, WALL, GROUND, WALL, GROUND,
				WALL, WALL ],
		[ WALL, WALL, PLATINUM, GROUND, PLATINUM, WALL, WALL, WALL, PLATINUM, PLATINUM, PLATINUM,
				WALL, WALL ],
		[ WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL,
				WALL, WALL ],
		[ GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND,
				GROUND, GROUND ],
		[ GRASS, SHIELD, GRASS, GRASS, WALL, GRASS, GRASS, GRASS, WALL, GRASS, 
				GRASS, SHIELD, GRASS ],
		[ WALL, PLATINUM, WALL, PLATINUM, GROUND, GRASS, CROWN, GRASS, WALL, WALL, PLATINUM,
				WALL, PLATINUM], ]; 

maps.push(groundMap3);

groundMap4= [
		[ SHIELD, GRASS, GRASS, GRASS, WALL, GRASS, WALL, GRASS, WALL, GRASS, GRASS, 
				GRASS, SHIELD ],
		[ WALL, GRASS, WALL, WALL, WALL, GRASS, SHIELD, GRASS, WALL, GRASS, WALL,
				WALL, WALL],
		[ WALL, GRASS, GRASS, GRASS, WALL, GRASS, WALL, GRASS, WALL, GRASS,
				GRASS, GRASS, WALL ],
		[ WALL, WALL, WALL, GRASS, WALL, GRASS, GROUND, GRASS, WALL, WALL, WALL,
				GRASS, WALL ],
		[ WALL, GRASS, GRASS, GRASS, WALL, GRASS, GRASS, GRASS, WALL, GRASS, GRASS,
				GRASS, WALL ],
		[ PLATINUM, WALL, PLATINUM, WALL, WALL, WALL, GROUND, WALL, PLATINUM, WALL, PLATINUM,
				GROUND, WALL ],
		[ WALL, GRASS, GRASS, GRASS, WALL, GRASS, GRASS, GRASS, WALL, GRASS, WALL,
				GRASS, WALL ],
		[ WALL, GRASS, WALL, WALL, WALL, GRASS, WALL, WALL, WALL, WALL, WALL,
				WALL, WALL ],
		[ WALL, GRASS, GRASS, GRASS, WALL, GRASS, GRASS, WALL, GROUND, GROUND, CROWN,
				WALL, WALL ],
		[ WALL, SHIELD, WALL, GRASS, WALL, GRASS, WALL, WALL, WALL, WALL, WALL,
				WALL, WALL ],
		[ WALL, GRASS, GRASS, GRASS, WALL, GRASS, GRASS, GRASS, WALL, GRASS, 
				WALL, GRASS, WALL ],
		[ GROUND, WALL, WALL, PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM, PLATINUM, 
				PLATINUM, WALL ],
		[ GROUND, GROUND, SHIELD, GROUND, SHIELD, GROUND, SHIELD, GROUND, GROUND, SHIELD, GROUND, GROUND, WALL], ];

maps.push(groundMap4);

groundMap5= [
		[ PLATINUM, GROUND, GROUND, GROUND, WALL, GROUND, GROUND, SHIELD, WALL, GROUND, GROUND, 
				GROUND, PLATINUM ],
		[ GROUND, PLATINUM, GROUND, GROUND, PLATINUM, GROUND, GROUND, GROUND, PLATINUM, SHIELD, GROUND,
				PLATINUM, GROUND ],
		[ SHIELD, GROUND, PLATINUM, GROUND, GROUND, WATER, WATER, WATER, GROUND, GROUND,
				PLATINUM, GROUND, GROUND ],
		[ GROUND, SHIELD, GROUND, PLATINUM, GROUND, WALL, WALL, WALL, GROUND, PLATINUM, GROUND,
				GROUND, GROUND ],
		[ WALL, PLATINUM, GROUND, GROUND, PLATINUM, GROUND, GROUND, GROUND, PLATINUM, SHIELD, GROUND,
				PLATINUM, WALL ],
		[ GROUND, GROUND, WATER, WALL, GROUND, GRASS, GRASS, GRASS, GROUND, WALL, WATER,
				GROUND, GROUND ],
		[ SHIELD, GROUND, WATER, WALL, GROUND, GRASS, CROWN, GRASS, GROUND, WALL, WATER,
				GROUND, GROUND ],
		[ GROUND, GROUND, WATER, WALL, GROUND, GRASS, GRASS, GRASS, GROUND, WALL, WATER,
				GROUND, GROUND ],
		[ WALL, PLATINUM, GROUND, GROUND, PLATINUM, GROUND, GROUND, GROUND, PLATINUM, GROUND, GROUND,
				PLATINUM, WALL ],
		[ GROUND, GROUND, GROUND, PLATINUM, GROUND, GROUND, WALL, GROUND, GROUND, PLATINUM, GROUND,
				GROUND, SHIELD ],
		[ SHIELD, GROUND, PLATINUM, GROUND, GROUND, WATER, WATER, WATER, GROUND, GROUND, 
				PLATINUM, GROUND, SHIELD ],
		[ GROUND, PLATINUM, GROUND, GROUND, PLATINUM, GROUND, GROUND, GROUND, PLATINUM, GROUND, GROUND, 
				PLATINUM, GROUND ],
		[ PLATINUM, GROUND, GROUND, GROUND, WALL, GROUND, GROUND, GROUND, WALL, GROUND, SHIELD, SHIELD, PLATINUM], ];

maps.push(groundMap5);

groundMap6 = [
			[ WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL ],
			[ WALL, WALL, WALL, WALL, WALL, SHIELD, WALL, WALL, WALL, WALL, GRASS, GRASS, WALL ],
			[ WALL, WALL, WALL, WALL, WALL, PLATINUM, PLATINUM, WALL, WALL, SHIELD, GRASS, GRASS, WALL ],
			[ WALL, WALL, SHIELD, WALL, WALL, WALL, WALL, WALL, WALL, PLATINUM, PLATINUM, WALL, WALL ],
			[ WALL, WALL, PLATINUM, PLATINUM, WALL, SHIELD, WALL, WALL, WALL, WALL, GRASS, GRASS, CROWN ],
			[ WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, PLATINUM, PLATINUM ],
			[ GRASS, GRASS, WATER, WATER, WATER, WATER, WATER, WATER, WALL, WALL, WALL, WALL, WALL ],
			[ GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL, WALL, WALL, WALL, WALL, WALL ],
			[ WALL, WALL, WALL, WALL, WALL, WALL, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND ],
			[ WATER, WATER, WATER, WATER, WATER, GROUND, GROUND, WATER, WATER, WATER, WATER, WATER, WATER ],
			[ GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND ],
			[ GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS ],
			[ SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD ] ];

maps.push(groundMap6);

groundMap7 = [
			[ GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS ],
			[ GRASS, CROWN, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, CROWN, GRASS ],
			[ GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS ],
			[ GRASS, WALL, WALL, WALL, WALL, WALL, GROUND, WALL, WALL, WALL, WALL, WALL, GRASS ],
			[ GRASS, WALL, WALL, WALL, GROUND, GROUND, GROUND, GROUND, WALL, WALL, WALL, WALL, GRASS ],
			[ GRASS, WALL, WALL, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, WALL, WALL, GRASS ],
			[ GRASS, WALL, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, WALL, GRASS ],
			[ GRASS, WALL, GROUND, GROUND, SHIELD, SHIELD, SHIELD, SHIELD, GROUND, GROUND, GROUND, WALL, GRASS ],
			[ GRASS, GROUND, GROUND, GROUND, GROUND, GROUND, WATER, GROUND, GROUND, GROUND, GROUND, GROUND, GRASS ],
			[ GRASS, GROUND, GROUND, GROUND, WATER, WATER, WATER, WATER, WATER, GROUND, GROUND, GROUND, GRASS ],
			[ GRASS, GROUND, GROUND, GROUND, GROUND, GROUND, WATER, GROUND, GROUND, GROUND, GROUND, GROUND, GRASS ],
			[ GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS ],
			[ GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS ] ];

maps.push(groundMap7);

groundMap8 = [
			[ SHIELD, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, SHIELD ],
			[ GROUND, PLATINUM, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, PLATINUM, GROUND ],
			[ GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND ],
			[ GROUND, GROUND, GROUND, PLATINUM, WALL, WALL, WALL, WALL, WALL, PLATINUM, GROUND, GROUND, GROUND ],
			[ GROUND, GROUND, GROUND, GROUND, WALL, WALL, PLATINUM, WALL, WALL, GROUND, GROUND, GROUND, GROUND ],
			[ GROUND, GROUND, GROUND, GROUND, WALL, GRASS, GRASS, GRASS, WALL, GROUND, GROUND, GROUND, GROUND ],
			[ WALL, WALL, WALL, WALL, WALL, GRASS, CROWN, GRASS, WALL, WALL, WALL, WALL, WALL ],
			[ GROUND, GROUND, GROUND, GROUND, WALL, GRASS, GRASS, GRASS, WALL, GROUND, GROUND, GROUND, GROUND ],
			[ GROUND, GROUND, GROUND, GROUND, WALL, GROUND, PLATINUM, GROUND, WALL, GROUND, GROUND, GROUND, GROUND ],
			[ GROUND, GROUND, GROUND, PLATINUM, WALL, WALL, WALL, WALL, WALL, PLATINUM, GROUND, GROUND, GROUND ],
			[ GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND ],
			[ GROUND, PLATINUM, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, PLATINUM, GROUND ],
			[ SHIELD, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, SHIELD ], ];

maps.push(groundMap8);

groundMap9 = [
			[ GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND],
			[ SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD ],
			[ WALL, GRASS, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, GRASS, WALL ],
			[ GROUND, WATER, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, WATER, GROUND ],
			[ GROUND, WATER, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, WATER, GROUND ],
			[ GROUND, WATER, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, WATER, GROUND ],
			[ GROUND, WATER, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, WATER, GROUND ],
			[ GROUND, WATER, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, WATER, GROUND ],
			[ GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND],
			[ GROUND, GROUND, GROUND, GROUND, WALL, WALL, WALL, WALL, WALL, WALL, GROUND, GROUND, GROUND ],
			[ PLATINUM, GROUND, WATER, GROUND, WATER, WATER, WATER, WATER, WATER, GROUND, WATER, GROUND, PLATINUM ],
			[ GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND],
			[ CROWN, SHIELD, PLATINUM, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, PLATINUM, SHIELD, CROWN ], ];

maps.push(groundMap9);

groundMap10 = [
			[ GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND ],
			[ GROUND, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, GROUND ],
			[ GROUND, SHIELD, WALL, WALL, WALL, WALL, PLATINUM, WALL, WALL, WALL, WALL, SHIELD, GROUND ],
			[ GROUND, SHIELD, WATER, WALL, WALL, GRASS, GRASS, GRASS, WALL, WALL, WATER, SHIELD, GROUND ],
			[ GROUND, SHIELD, WALL, GROUND, PLATINUM, GRASS, CROWN, GRASS, PLATINUM, GROUND, GROUND, SHIELD, GROUND ],
			[ GROUND, SHIELD, WATER, WALL, WALL, SHIELD, SHIELD, SHIELD, WALL, WALL, WATER, SHIELD, GROUND ],
			[ GROUND, SHIELD, GROUND, GROUND, PLATINUM, SHIELD, CROWN, SHIELD, PLATINUM, GROUND, GROUND, SHIELD, GROUND ],
			[ GROUND, SHIELD, WATER, WALL, WALL, SHIELD, SHIELD, SHIELD, WALL, WALL, WATER, SHIELD, GROUND ],
			[ GROUND, SHIELD, GROUND, GROUND, PLATINUM, GRASS, CROWN, GRASS, PLATINUM, GROUND, GROUND, SHIELD, GROUND ],
			[ GROUND, SHIELD, WATER, WALL, WALL, GRASS, GRASS, GRASS, WALL, WALL, WATER, SHIELD, GROUND ],
			[ GROUND, SHIELD, GROUND, WALL, WALL, WALL, PLATINUM, WALL, WALL, WALL, WALL, SHIELD, GROUND ],
			[ GROUND, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, SHIELD, GROUND ],
			[ GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND, GROUND ] ];

maps.push(groundMap10);
// This 2-dimensional array represents the inital positions of the tanks
// The first array is the position of my tank and the rest represent the enemy tanks
 
var tanksMap = [ [ 4, 12 ], [ 0, 0 ], [ 0, 12 ], [0, 3], [ 6, 6 ]];
var lvl = parseInt(localStorage.getItem("levelValue"));

function preprocessMap() {
	this.position = 0;
	// populate map with grids
	for ( var i = 0; i < 13; i++) {
		for ( var j = 0; j < 13; j++) {
			position = i + "" + j;
			var block = document.createElement('div');
			document.getElementById("mapsDiv").appendChild(block);
			block.id = position;
		}
	}
		switch (lvl) {
		
		case 2:
			document.getElementById("mapsDiv").style.backgroundImage="url(img/game-bg2.png)";
			break;

		case 3:

			document.getElementById("mapsDiv").style.backgroundImage="url(img/game-bg3.jpg)";
			break;

		case 4:
			document.getElementById("mapsDiv").style.backgroundImage="url(img/game-bg4.jpg)";
			break;

		case 5:
			document.getElementById("mapsDiv").style.backgroundImage="url(img/game-bg5.jpg)";
			break;

		case 6:
			document.getElementById("mapsDiv").style.backgroundImage="url(img/game-bg6.png)";
			break;

		case 7:
			document.getElementById("mapsDiv").style.backgroundImage="url(img/game-bg7.jpg)";
			break;

		case 8:
			document.getElementById("mapsDiv").style.backgroundImage="url(img/game-bg8.jpg)";
			break;

		case 9:
			document.getElementById("mapsDiv").style.backgroundImage="url(img/game-bg9.jpg)";
			break;
		case 10:
			document.getElementById("mapsDiv").style.backgroundImage="url(img/game-bg10.jpg)";
			break;
	}
}
// Function to change the appearance of the tank based
// on the number of shields it has, up to a maximum of 3 shields 

function changeTankImageByNumberOfShields(tank){
	if (tank.guid == myTank.guid) {

		switch (tank.life) {
			case 0:
				document.getElementById(tank.guid).style.backgroundImage="url(img/myTank.gif)";
				break;
			case 1: 
				document.getElementById(tank.guid).style.backgroundImage="url(img/myTank1Shield.gif)";
				break;
			case 2: 
				document.getElementById(tank.guid).style.backgroundImage="url(img/myTank2Shields.gif)";
				break;
			case 3: 
				document.getElementById(tank.guid).style.backgroundImage="url(img/myTank3Shields.gif)";
				break;
		}	
	}
	else switch (tank.life) {
			case 0:
				document.getElementById(tank.guid).style.backgroundImage="url(img/eTank.gif)";
				break;
			case 1:
				document.getElementById(tank.guid).style.backgroundImage="url(img/eTank1Shield.gif)";
				break;
			case 2:
				document.getElementById(tank.guid).style.backgroundImage="url(img/eTank2Shields.gif)";
				break;
			case 3:
				document.getElementById(tank.guid).style.backgroundImage="url(img/eTank3Shields.gif)";
		}	
}

var blast = document.createElement('audio');
blast.src = 'blast.wav';

// function to mute the sound of the missile blast

function muteSounds() {
	if(blast.muted==true) {
		blast.muted=false;
		localStorage.setItem("muted", false);
	}
	else {
		blast.muted=true;
		localStorage.setItem("muted", true);
	}
}

// method to initialize tanks placed on map

function loadTanks() {

		switch(lvl) {

			case 2: 
			tanksMap.push([4, 1], [7, 11] );
			break;

			case 3:
			tanksMap.push([6, 11], [11,11], [4, 1], [7, 0]); 
			break;	

			case 4:
			tanksMap = [ [ 8, 8 ], [ 0, 0 ], [ 0, 12 ], [0, 3], [ 5, 6 ]];
			tanksMap.push([10, 1], [12, 3], [12, 5], [4, 7], [4, 9]);
			break;

			case 5:
			tanksMap = [ [ 5, 6 ], [ 0, 1 ], [ 0, 2 ], [0, 10], [ 0, 11 ]];
			tanksMap.push([1, 12], [1, 0], [2, 0], [2, 12], [10, 0],[11, 0], [11, 12], [12, 1], [12, 11] );
			break;

			case 6:
			tanksMap = [ [ 11, 4 ], [ 12, 11 ], [ 12, 10 ], [ 12, 9 ], [ 12, 8 ], [ 12, 7 ], [ 12, 6 ], [ 12, 5 ], 
			[ 12, 4 ], [ 12, 3 ], [ 12 , 2 ] , [ 12, 1 ], [ 12, 0 ]];
			break;

			case 7:
			tanksMap = [ [ 10, 2 ], [ 11, 4 ], [ 11, 5 ], [ 11, 6 ], [ 11, 7 ], [ 11, 8 ], [ 12, 4 ], [ 12, 5 ], 
			[ 12, 6 ], [ 12, 7 ], [ 12 , 8 ], [ 6, 0 ], [ 6, 12 ], [ 9, 3 ], [ 9, 9 ] ];
			break;

			case 8:
			tanksMap = [ [ 5, 5 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ], [ 2, 10 ], [ 2, 11 ], [ 2, 12 ], [ 10, 0 ], [ 10, 1 ], [ 10, 2], [ 10, 10 ], [ 10, 11 ], [ 10, 12 ] ];
			break;

			case 9:
			tanksMap = [ [ 11, 11 ], [ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 0, 4 ], [ 0, 5 ], [ 0, 6 ], [ 0, 7 ], [ 0, 8 ], [ 0, 9 ], [ 0, 10 ], [ 0, 11 ], [ 0, 12 ], [ 4, 4 ], [ 4, 5 ], [ 4, 6 ], [ 4, 7 ], [ 4, 8 ], [ 4, 9 ] ];
			break;

			case 10:
			tanksMap = [ [ 5, 6 ], [ 0, 4 ], [ 0, 5 ], [ 0, 6 ], [ 0, 7 ], [ 0, 8 ], [ 0, 9 ], [ 0, 10 ], [ 0, 11 ], [ 0, 12 ], [ 12, 0],
			[ 12, 1 ], [ 12, 2 ], [ 12, 2 ], [ 12, 3 ], [ 12, 4 ], [ 12, 5 ], [ 12, 6 ], [ 12, 7 ], [ 12, 8 ] ];
			break;
		}

	var myTankX = tanksMap[0][0];
	var myTankY = tanksMap[0][1];

	// myTank is a global variable
	myTank = new MyTank(myTankX, myTankY);
	myTank.createTank();
	if (parseInt(localStorage.getItem("lifesValue"))>0 && lvl>1) { 
		myTank.life=parseInt(localStorage.getItem("lifesValue"));
	} 
	else myTank.life = 0;

	var enemyTank;

	for ( var i = 1; i < tanksMap.length; i++) {
		//enemyTank is global
		enemyTank = new EnemyTank(tanksMap[i][1], tanksMap[i][0]);
		enemyTank.createTank();
		enemyTanks.push(enemyTank);
	}
	changeTankImageByNumberOfShields(myTank);
}

// method to initialize game's ground map

function loadMap(element) {
	var block;
	
	if (isNaN(element)) {
		element=1;
	}
	for ( var i = 0; i < 13; i++) {
		for ( var j = 0; j < 13; j++) {
			var mapContainer = maps[element-1];
			var type = mapContainer[j][i];
			switch (type) {
			case WALL:
				block = new Wall(i, j);
				break
			case GRASS:
				block = new Grass(i, j);
				break
			case GROUND:
				block = new Ground(i, j);
				break
			case PLATINUM:
				block = new Platinum(i, j);
				break
			case WATER:
				block = new Water(i, j);
				break
			case CROWN:
				block = new Crown(i, j);
				break
			case SHIELD:
				block = new Shield(i, j);
				break
			default:
				break
			}
			block.createBlock();
		}
	}

}
// function to retrieve the level value and load the map for the next level

function getLevel(){
	if (parseInt(localStorage.getItem("levelValue"))!=null) {
		loadMap(parseInt(localStorage.getItem("levelValue")));

	} else if (isNaN(parseInt(localStorage.getItem("levelValue")))) {
		lvlV=1;
	
		localStorage.setItem("levelValue", lvlV);
		
		loadMap(levelValue);
	}
	else {
		loadMap(1);
	}
}

setInterval("displayLevel()", 30);

// function to display the stats 

function displayLevel(){
	var lvlD=parseInt(localStorage.getItem("levelValue"));
	if (isNaN(lvlD)){
		lvlD=1;
	}
	document.getElementById('lvldisplay').innerHTML = "Level: "+lvlD;
	document.getElementById('tanksDisplay').innerHTML = "Tanks left: "+(tanksMap.length-1);
	if (myTank.life<0) {
		var shieldView = myTank.life+1;
	}
	document.getElementById('shieldsDisplay').innerHTML = "Shields: "+ myTank.life;
}

// this guid function is from the book javascript web applications

Math.guid = function() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	}).toUpperCase();
};

// Agent based modelling. Agents include various tanks in this case
// MyTank and EnemyTank will extend from the parent class Agent

function Agent(x, y) {
	this.guid = 0;// guid for the agent

	this.life=0; 

	this.x = x; // x position in number of tiles
	this.y = y; // y position in number of tiles

	this.offsetX = 10; // horizontal offset in pixels, which is also border
	// width
	this.offsetY = 10; // vertical offset in pixels, which is also border width

	this.width = 40; // tile width
	this.height = 40; // tile height

	this.speed = 10;// the number of pixels to move upon each event
	this.facing = "up";// values range from up, right, left and down

	// check groundmap on barriers to move
	this.checkCollision = function(posx, posy) {
		var lvl = parseInt(localStorage.getItem("levelValue")) - 1;
		if (isNaN(lvl)) {
			lvl=0;
		}
		// tanks cannot move on these tile types
		var tileType = maps[lvl][posy][posx];
			if ((tileType == WATER) || (tileType == PLATINUM) || (tileType == WALL)
					|| (tileType == CROWN)){ 

				return true;
			}
		
		var x=0;

		while (x<enemyTanks.length) {
			if (enemyTanks[x].x==posx && enemyTanks[x].y==posy) {
				return true;
			}
			x++;
		}
		if (myTank.x==posx && myTank.y==posy) {
			return true;
		}
	};
	// function to allow the tanks pick up the shield

	this.checkShield = function(posx, posy) {
		var lvl = parseInt(localStorage.getItem("levelValue")) - 1;
		if (isNaN(lvl)) {
			lvl=0;
		}
		// remove the shield
		var tileType = maps[lvl][posy][posx];

			if (tileType == SHIELD){
				var shieldDiv = document.getElementById(posx + "" + posy);
				shieldDiv.removeChild(shieldDiv.childNodes[0]);
				maps[lvl][posy][posx] = GROUND;
				if (this.life<=2) {
					this.life++;	
				}				
				changeTankImageByNumberOfShields(this);
			}
	};

	this.deRender = function() {
		var div = document.getElementById(this.guid);
		div.parentNode.removeChild(div);
		tanksMap.length=tanksMap.length-1;
	}

	// Moves the agent to the right with the previously defined speed. It won't move if it reaches the border
	this.moveRight = function() {
		this.facing = "right";
		var div = document.getElementById(this.guid);
		div.style.backgroundPosition = "0px -40px";
		if (this.x < 12) {
			if (this.checkCollision(this.x + 1, this.y)) {
				return;
			}
			this.x = this.x + 1;
			div.style.left = (this.x) * this.width + this.offsetX + "px";

			this.checkShield(this.x, this.y)
		}

	};

	// Moves the agent to the left with the previously defined speed. It won't move if it reaches the border

	this.moveLeft = function() {
		this.facing = "left";
		var div = document.getElementById(this.guid);
		div.style.backgroundPosition = "0px -120px";

		if (this.x > 0) {
			if (this.checkCollision(this.x - 1, this.y)) {
				return;
			}
			this.x = this.x - 1;
			div.style.left = (this.x) * this.width + this.offsetX + "px";

			this.checkShield(this.x, this.y);
		}
	};

	// Moves the agent upwards with the previously defined speed. It won't move if it reaches the border

	this.moveUp = function() {
		this.facing = "up";
		var div = document.getElementById(this.guid);
		div.style.backgroundPosition = "0px 0px";
		if (this.y > 0) {
			if (this.checkCollision(this.x, this.y - 1)) {
				return;
			}
			this.y = this.y - 1;
			div.style.top = (this.y) * this.height + this.offsetY + "px";

			this.checkShield(this.x, this.y);

		}
	};
	
	// Moves the agent downwards with the previously defined speed. It won't move if it reaches the border
	
	this.moveDown = function() {
		this.facing = "down";
		var div = document.getElementById(this.guid);
		div.style.backgroundPosition = "0px -80px";
		if (this.y < 12) {
			if (this.checkCollision(this.x, this.y + 1)) {
				return;
			}
			this.y = this.y + 1;
			div.style.top = (this.y) * this.height + this.offsetY + "px";

			this.checkShield(this.x, this.y);

		}
	};
	// fire missiles
	this.fire = function() {
		var missile = new Missile(this.x, this.y);
		missile.direction = this.facing;
		missile.createMissile();
		missiles.push(missile);
	}
}

// Missile class is a standalone class but it is referenced by all the tank classes

function Missile(x, y) {
	this.guid = Math.guid;// guid for the agent

	this.direction = "up";

	this.x = x; // x position in number of grids
	this.y = y; // y position in number of grids

	this.offsetX = 10; // horizontal offset in pixels, which is also border width
	this.offsetY = 10; // vertical offset in pixels, which is also border width

	this.directionOffsetX = 0;
	this.directionOffsetY = 0;

	this.width = 40; // grid width
	this.height = 40; // grid height

	this.speed = 10;// the number of pixels to move upon each event

	this.owner = null;

	this.checkCollision = function(posx, posy) {
		var lvl = parseInt(localStorage.getItem("levelValue"))-1;
	
		if (isNaN(lvl)) {
			lvl=0;
		}
		var tileType = maps[lvl][posy][posx];
	
		if (tileType == WALL) {
			var section = document.getElementById(posx + "" + posy);
			section.removeChild(section.childNodes[0]);
			//if(Math.random()*10<9)
				//maps[lvl][posy][posx] = SHIELD;
			//else
			maps[lvl][posy][posx] = GROUND;
			return true;
		}
		if (tileType == CROWN) {
			var section = document.getElementById(posx + "" + posy);
			section.removeChild(section.childNodes[0]);
			maps[lvl][posy][posx] = GROUND;
			gameOver();
		}
		if (tileType == PLATINUM) {
			return true;
		}

		if (this.owner == "enemytank") {
			if ((myTank.x == posx) && (myTank.y == posy)) {
					if (myTank.life>0) {
						myTank.life--;
						changeTankImageByNumberOfShields(myTank);
					}
					else {
						myTank.deRender();
						gameOver();
					}
					return true;				
			}
		}
		if (this.owner == "mytank") {
			for (var p = 0; p < enemyTanks.length; p++) {
				if ((enemyTanks[p].x == posx) && (enemyTanks[p].y == posy)) {
					
					if (enemyTanks[p].life>0) {

						if (enemyTanks[p].life==1) {
							document.getElementById(enemyTanks[p].guid).style.backgroundImage="url(img/eTank.gif)";
					
						}
						enemyTanks[p].life--;
						changeTankImageByNumberOfShields(enemyTanks[p]);
					}
					else {
						enemyTanks[p].deRender();
						enemyTanks.splice(p, 1);
					}
					return true;
				}
			}	
			return false;
		}
		return false;

	};

	this.move = function() {
		if (this.isHit) {
			this.speed = 0;
		}
		switch (this.direction) {
		case "up":

			var missile = document.getElementById(this.guid);
			var missile_top = missile.style.top;
			missile_top = missile_top.substring(0, missile_top.length - 2);
			temp = parseInt(missile_top) - this.speed;
			var left = parseInt(missile.style.left.substring(0,
					missile.style.left.length - 2));
			var top = parseInt(missile.style.top.substring(0,
					missile.style.top.length - 2));
			top = top - this.speed;
			var gridX = Math.floor(top / 40);
			var gridY = Math.floor(left / 40);
			if (gridX < 0) {
				this.explode();
				return;
			}
			if (!this.checkCollision(gridY, gridX)) {

				missile.style.top = top + "px";
			} else {
				this.explode();
			}
			break;
		case "down":
			var missile = document.getElementById(this.guid);
			var missile_top = missile.style.top;
			missile_top = missile_top.substring(0, missile_top.length - 2);
			temp = parseInt(missile_top) - this.speed;
			var left = parseInt(missile.style.left.substring(0,
					missile.style.left.length - 2));
			var top = parseInt(missile.style.top.substring(0,
					missile.style.top.length - 2));
			top = top + this.speed;
			var gridX = Math.floor(top / 40);
			var gridY = Math.floor(left / 40);
			if (gridX >= 13) {
				this.explode();
				return;
			}
			if (!this.checkCollision(gridY, gridX)) {
				missile.style.top = top + "px";	
			} else {
				this.explode();
			}
			break;
		case "right":
			var missile = document.getElementById(this.guid);
			var missile_top = missile.style.top;
			missile_top = missile_top.substring(0, missile_top.length - 2);
			temp = parseInt(missile_top) - this.speed;
			var left = parseInt(missile.style.left.substring(0,
					missile.style.left.length - 2));
			var top = parseInt(missile.style.top.substring(0,
					missile.style.top.length - 2));
			left = left + this.speed;
			var gridX = Math.floor(top / 40);
			var gridY = Math.floor(left / 40);
			if (gridY >= 13) {
				this.explode();
				return;
			}
			if (!this.checkCollision(gridY, gridX)) {
				missile.style.left = left + "px";
			} else {
				this.explode();
			}
			break;
		break;
	case "left":
		var missile = document.getElementById(this.guid);
		var missile_top = missile.style.top;
		missile_top = missile_top.substring(0, missile_top.length - 2);
		temp = parseInt(missile_top) - this.speed;
		var left = parseInt(missile.style.left.substring(0,
				missile.style.left.length - 2));
		var top = parseInt(missile.style.top.substring(0,
				missile.style.top.length - 2));
		left = left - this.speed;
		var gridX = Math.floor(top / 40);
		var gridY = Math.floor(left / 40);
		if (gridY < 0) {
			this.explode();
			return;
		}
		if (!this.checkCollision(gridY, gridX)) {
			missile.style.left = left + "px";
		} else {
			this.explode();
		}
		break;
	default:
		break;
	}
	this.removeMissile = function() {

		for ( var r = 0; r < missiles.length; r++) {
			if (this.guid == missiles[r].guid) {
				missiles.splice(r, 1);
			}
		}
		var div = document.getElementById(this.guid);		
		div.parentNode.removeChild(div);
	}
	this.explode = function() {
		
		blast.play();
		this.removeMissile();
	}
}

	this.createMissile = function() {
		var container = document.createElement('div');
		document.body.appendChild(container);
		this.guid = Math.guid();

		var missile = document.createElement('div');

		switch (this.direction) {
		case "up":
			missile.style.backgroundPosition = "0px 0px";

			break;
		case "down":
			missile.style.backgroundPosition = "0px -80px";
			
			break;
		case "right":
			missile.style.backgroundPosition = "0px -40px";
			
			break;
		case "left":
			missile.style.backgroundPosition = "0px -120px";
			
			break;
		default:
			break;
		}

		container.appendChild(missile);
		missile.id = this.guid;
		missile.className = "bomb";
		missile.style.position = "absolute";
		missile.style.left = (this.x) * this.width + this.offsetX + "px";
		missile.style.top = (this.y) * this.height + this.offsetY + "px";
	}
}

// MyTank class extending from the Agent parent class

function MyTank(x, y) {
	Agent.call(this, x, y);
}
// EnemyTank class extending from the Agent parent class

function EnemyTank(x, y) {
	Agent.apply(this, [ x, y ]);
}

// creating my tank with defined positions

MyTank.prototype.createTank = function() {
	var container = document.createElement('div');
	document.body.appendChild(container);
	this.guid = Math.guid();

	var tank = document.createElement('div');

	container.appendChild(tank);
	tank.id = this.guid;

	tank.className = "allytank";
	tank.style.position = "absolute";
	tank.style.left = (this.x) * this.width + this.offsetX + "px";
	tank.style.top = (this.y) * this.height + this.offsetY + "px";

	this.fire = function() {
		var missile = new Missile(this.x, this.y);
		missile.owner = "mytank";
		missile.direction = this.facing;
		missile.createMissile();
		missiles.push(missile);
	}
}

// creating an enemy tank with defined positions

EnemyTank.prototype.createTank = function() {
	var container = document.createElement('div');
	document.body.appendChild(container);
	this.guid = Math.guid();

	var tank = document.createElement('div');

	container.appendChild(tank);
	tank.id = this.guid;
	tank.className = "enemytank";
	tank.style.position = "absolute";
	tank.style.left = (this.x) * this.width + this.offsetX + "px";
	tank.style.top = (this.y) * this.height + this.offsetY + "px";

	this.fire = function() {
		var missile = new Missile (this.x, this.y);
		missile.owner = "enemytank";
		missile.direction = this.facing;
		missile.createMissile();
		missiles.push(missile);
	}
}

EnemyTank.prototype.moveRandomly = function() {
	var random = Math.random() * 4;
	if ((random >= 0) && random < 1) {
		this.moveRight();
	}
	if ((random >= 1) && random < 2) {
		this.moveLeft();
	}
	if ((random >= 2) && random < 3) {
		this.moveUp();
	}
	if ((random >= 3) && random < 4) {
		this.moveDown();
	}
}

//Starting the game logic and event binding

var missiles = [];
setInterval("shootMissiles()", 30);

function shootMissiles() {

	for ( var k = 0; k < missiles.length; k++) {
		missiles[k].move();
		if (enemyTanks.length == 0) {
			win();
			break;
		}
	}
}

function win() { 
	localStorage.setItem("lifesValue", myTank.life);

	if (isNaN(parseInt(localStorage.getItem("levelValue")))) {
		lvlV=1;
		localStorage.setItem("levelValue", lvlV);
	}	

	if (parseInt(localStorage.getItem("levelValue"))==maps.length){
		alert("Congratulations! You finished the game!");
		lvlV=1;
		localStorage.setItem("levelValue", lvlV);

	} else if (parseInt(localStorage.getItem("levelValue"))!==null) {
		var lvlV=parseInt(localStorage.getItem("levelValue"));
		lvlV+=1;
		localStorage.setItem("levelValue", lvlV);

	} else {
		localStorage.setItem("levelValue", 2);
	}   
	
	window.location.reload();
}

function gameOver() {
	localStorage.setItem("levelValue", 1 );
	alert("Game Over! The game will restart now");
	window.location.reload();
}

// global variables myTank and enemyTanks are initialized with load methods
 
var myTank;// an instance of MyTank class
var enemyTanks = [];// array of instances of EnemyTank class

// Moving and firing enemy tanks

setInterval("randomMove()", 1000);
function randomMove() {
	for ( var p = 0; p < enemyTanks.length; p++) {
		enemyTanks[p].moveRandomly();
		enemyTanks[p].fire();
	}
}
// Key listeners for controlling my tank
 
document.onkeydown = keylistener;
function keylistener(e) {

	e = e ? e : window.event;
	var keynum = e.which ? e.which : e.keyCode;

	var arrows = [];
	arrows['38'] = 'up';// up arrow has the keycode 38  
	arrows['87'] = 'up';// W key
	arrows['40'] = 'down';// down arrow has the keycode 40
	arrows['83'] = 'down'; //S key
	arrows['37'] = 'left';// left arrow has the keycode 37
	arrows['65'] = 'left';// A key
	arrows['39'] = 'right';// right arow has the keycode 39
	arrows['68'] = 'right';// D key

	move(arrows[keynum]);

	// my tank fires when the space key is released
	document.body.onkeyup = function(event) {
		if (event.keyCode == 32) {
			myTank.fire();
		}
	}
}

// My tank's movement function
function move(direction) {
	switch (direction) {
	case 'up':
		myTank.moveUp();
		break;
	case 'down':
		myTank.moveDown();
		break;
	case 'left':
		myTank.moveLeft();
		break;
	case 'right':
		myTank.moveRight();
		break;
	}
}
// Checks if the "muted" variable in localStorage is true
// and sets it to true for the other levels

if (localStorage.getItem("muted")=="true") {
	blast.muted=true;
	document.getElementById("muteSlider").checked=true;
}

// Loads data and starts the game

preprocessMap();
getLevel();
loadTanks();
displayLevel();