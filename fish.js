/*
fish.js
*/

var elm = {};
elm.player = document.getElementById("player");
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
  elm.canvas.style.visibility = "wisible";
  elm.player.style.visibility = "visible";
}

function fishRight() {}
