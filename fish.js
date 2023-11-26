/*
fish.js
*/

var elm = {
    player:document.getElementById('player'),
    score:document.getElementById('score'),
    play:document.getElementById('playButton'),
    title:document.getElementById('title'),
    subtitle:document.getElementById('subtitle')
    canvas:document.getElementById('canvas')

}   

function buildWorld() {

}

function playButton() {
    // Remove the title
    elm.title.style.visibility = "none";
    elm.subtitle.style.visibility = "none";
}