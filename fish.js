/*
fish.js
*/

var player = {};
var p = player;
p.xp = {};
p.xp.targets = "100","200","400","1200","3200","8000";

function startPlayer() {
  p.hp = 100;
  p.sp = 100;
  p.x = 333;
  p.y = 333;
  p.direction = "";
  p.isMoving = false;
  p.isAlive = false;
  p.lvl = 0;
}
var fish = player;
var f = fish;



var world = {
  map: 1,
  min: { x: 0, y: 0 },
  max: { x: 1000, y: 1000 },
};
var w = world;

function playerDirection(dir) {
    if (dir == "up") {}
    if (dir == "right") {}
    if (dir == "down") {}
    if (dir == "left") {}
}

function getInput(e) {
    console.log(e);
}

document.addEventListener(onkeydown,getInput(e));
document.addEventListener(onkeyup,getKeyUp(e));

var block = {};
var b = block;

function startWorld() {}

var elm = {}; // create 'elm' to store reused document elements.
elm.player = document.getElementById("player");
elm.p = elm.player;
elm.score = document.getElementById("score");
elm.play = document.getElementById("play");
elm.title = document.getElementById("title");
elm.subtitle = document.getElementById("subtitle");
elm.canvas = document.getElementById("canvas");

function buildWorld() {}

function playButton() {
  // Remove the title
  elm.title.style.visibility = "hidden";
  elm.subtitle.style.visibility = "hidden";
  elm.canvas.style.visibility = "visible";
  elm.play.style.visibility = "hidden";
  elm.canvas.style.visibility = "visible";
  elm.player.style.visibility = "visible";
}

function fishMoveRandom() {

}

function fishRight() {}
