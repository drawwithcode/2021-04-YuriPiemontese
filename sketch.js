const urlString = window.location.href;
let url = new URL(urlString);
let vid1;

function preload() {
  mySong1 = loadSound("./assets/riporter.wav");
  vid1 = createVideo("assets/tg.mp4");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  vid1.hide();
  vid1 = createVideo("assets/tg.mp4");
  vid1.size(windowWidth, windowHeight);
  vid1.loop();
  vid1.hide();
  vid1.volume(0);
  noStroke();
  frameRate(4);
}

function draw() {
  if (mySong1.isPlaying() === false) {
    mySong1.loop();
  }

  vid1.loadPixels();
  for (let y = 0; y < vid1.height; y += 8) {
    for (let x = 0; x < vid1.width; x += 8) {
      let offset = (y * vid1.width + x) * 4;
      fill(
        vid1.pixels[offset],
        vid1.pixels[offset + 1],
        vid1.pixels[offset + 2]
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
  let myText2 = "WAIT FOR IT";
  textFont("IBM Plex Mono");
  textAlign(CENTER);
  fill(255);
  textSize(18);
  text(myText2, windowWidth / 2, windowHeight / 8);
  pop();

  push();
  fill("white");
  rect(0, 0, (windowWidth / 240) * frameCount, windowHeight / 16);
  pop();

  if (frameCount > 237) {
    window.open(url + "second-page.html");
    mySong1.stop();
  }

  console.log(frameCount);
}
