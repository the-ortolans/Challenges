// function setup() {
//     createCanvas(1200, 1200);
//     song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
// }
//
// function draw() {
//     if (mouseIsPressed) {
//         fill(0);
//     } else {
//         fill(255);
//     }
//
//     ellipse(mouseX, mouseY, 80, 80);
//
// }


var song = loadSound('/snd/thankunext-next.mp3');

function setup() {
    createCanvas(1200, 1200);
}

function mousePressed() {
    if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        song.stop();
        background(255, 0, 0);
    } else {
        song.play();
        background(0, 255, 0);
    }
}
