const urlString = window.location.href;
let url = new URL(urlString);
let vid2;

function preload() {
  mySong2 = loadSound("./assets/riporter2.wav");
  vid2 = createVideo("assets/hp.mp4");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  vid2.hide();
  vid2 = createVideo("assets/hp.mp4");
  vid2.size(windowWidth, windowHeight);
  vid2.loop();
  vid2.hide();
  vid2.volume(0);
  noStroke();
  frameRate(4);
}

function draw() {
  if (mySong2.isPlaying() === false) {
    mySong2.loop();
  }

  vid2.loadPixels();
  for (let y = 0; y < vid2.height; y += 8) {
    for (let x = 0; x < vid2.width; x += 8) {
      let offset = (y * vid2.width + x) * 4;
      fill(
        vid2.pixels[offset],
        vid2.pixels[offset + 1],
        vid2.pixels[offset + 2]
      );
      rect(x, y, 8, 8);
    }
  }

  push();
  let myText1 = "ER RIPORTER.MP3";
  textFont("IBM Plex Mono");
  textAlign(CENTER);
  fill(255);
  textSize(80);
  text(myText1, width / 2, windowHeight / 2);
  pop();

  push();
  let myText2 = "ALSO";
  textFont("IBM Plex Mono");
  textAlign(CENTER);
  fill(255);
  textSize(36);
  text(myText2, width / 2, windowHeight / 4);
  pop();
}
