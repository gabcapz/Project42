var issImage, spacecraft1Image, spacecraft2Image, spacecraft3Image, spacecraft4Image;
var iss, spacecraft, bg;
var hasDocked = false;
var PLAY = 1;
var END = 2;
var gameState = 1;

function preload(){
issImage = loadImage("Images/iss.png");
spacecraft1Image = loadImage("Images/spacecraft1.png");
spacecraft2Image = loadImage("Images/spacecraft2.png");
spacecraft3Image = loadImage("Images/spacecraft3.png");
spacecraft4Image = loadImage("Images/spacecraft4.png");
bg = loadImage("Images/spacebg.jpg");
}

function setup() {
  createCanvas(1000,600);

  spacecraft = createSprite(400, 500,50, 50);
  spacecraft.addImage("spacecraft", spacecraft1Image);
  spacecraft.scale = 0.3;
  spacecraft.x = Math.round(random(100, 700));

  iss = createSprite(400, 300, 50, 50);
  iss.addImage("iss", issImage);

}

function draw() {
  background(bg);  

if (gameState === PLAY){

  if (!hasDocked){
    

    if (keyDown(LEFT_ARROW)){
      spacecraft.x = spacecraft.x - 2;
      spacecraft.addImage("spacecraft", spacecraft3Image);
    }

    if (keyDown(RIGHT_ARROW)){
      spacecraft.x = spacecraft.x + 2;
      spacecraft.addImage("spacecraft", spacecraft4Image);
    }

    if (keyDown(DOWN_ARROW)){
      spacecraft.y = spacecraft.y + 2;
      spacecraft.addImage("spacecraft", spacecraft2Image);
    }

    if (keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y - 2;
      spacecraft.addImage("spacecraft", spacecraft2Image);
    }

  }
}

  if ( spacecraft.x === 325 || spacecraft.x === 326 && spacecraft.y === 430){
    hasDocked = true;

  }

  // if (hasDocked === true){

  //   if(keyCode === 82){
  //     hasDocked = false;
  //     gameState = PLAY;
  //   }

  // }

  console.log(spacecraft.x);
  console.log(spacecraft.y);
//spacecraftx = 325, spacecrafty = 430

  drawSprites();

  if (hasDocked === true){
    stroke("white");
    fill("blue");
    textSize(30);
    text("Docking successful!", 650, 500);
    // fill("white");
    // textSize(20);
    // text("Press 'R' to restart", 690, 550);
  }

}