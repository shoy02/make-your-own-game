var giraffe,giraffeImage
var Rhino,RhinoImage
var cat,catImage
var cow,cowImage
var crow,crowImage
var dog,dogImage
var dominous,dominousImage
var elephant,elephantImage
var ginnePig,ginnePigImage
var koala,koalaImage
var lion,lionImage
var parrot,parrotImage
var rabit,rabitImage
var turtle,turtleImage
var rectangle;
var GameState="start"
var startButton,startButtonImage;
var startVisibilty=255;
var totalpoints=0;
var points=0;
var multiplier=1
var purpleButton,pbImg,redButton,rbImg,greenButton,gbImg,yellowButton,ybImg;
var BOMB,BOMBImg;
var stage=1

function preload(){
  giraffeImage=loadImage("giraffe.jpg")
  RhinoImage=loadImage("Rhino.jpg")
  catImage=loadImage("cat.jpg")
  cowImage=loadImage("cow.jpg")
  crowImage=loadImage("crow.jpg")
  dogImage=loadImage("dog.png")
  dominousImage=loadImage("dominous red.jpg")
  elephantImage=loadImage("elephant.jpg")
  ginnePigImage=loadImage("ginne pigs.png")
  koalaImage=loadImage("koala.png")
  lionImage=loadImage("lion.jpg")
  parrotImage=loadImage("parrot.jpg")
  rabitImage=loadImage("rabit.jpg")
  turtleImage=loadImage("turtle.jpg")
  startButtonImage=loadImage("start.png")

  pbImg=loadImage("purple button.png");
  rbImg=loadImage("red button.png");
  gbImg=loadImage("green button.png")
  ybImg=loadImage("yellow button.png")
  BOMBImg=loadImage("BOMB.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
 rectangle=createSprite(windowWidth/2,windowHeight/2,1200,windowHeight)
 rectangle.shapeColor="#03A9F4";
//left hand side
  cat=createSprite(100,100);
  cat.addImage(catImage);
  cat.scale=0.3 

  dog=createSprite(100,200);
  dog.addImage(dogImage);
  dog.scale=0.3

  rabit=createSprite(100,300);
  rabit.addImage(rabitImage);
  rabit.scale=0.3

  ginnePigs=createSprite(100,400);
  ginnePigs.addImage(ginnePigImage);
  ginnePigs.scale=0.3

  koala=createSprite(100,500);
  koala.addImage(koalaImage);
  koala.scale=0.3

  Rhino=createSprite(100,600);
  Rhino.addImage(RhinoImage);
  Rhino.scale=0.3

  elephant=createSprite(100,700);
  elephant.addImage(elephantImage);
  elephant.scale=0.3
// left hand side end
 
//right hand side

  cow=createSprite(windowWidth-100,100);
  cow.addImage(cowImage);
  cow.scale=0.4

  lion=createSprite(windowWidth-100,200);
  lion.addImage(lionImage);
  lion.scale=0.3

  turtle=createSprite(windowWidth-100,300);
  turtle.addImage(turtleImage);
  turtle.scale=0.3

  giraffe=createSprite(windowWidth-100,400);
  giraffe.addImage(giraffeImage);
  giraffe.scale=0.3

  parrot=createSprite(windowWidth-100,500);
  parrot.addImage(parrotImage);
  parrot.scale=0.3
  
  crow=createSprite(windowWidth-100,600);
  crow.addImage(crowImage);
  crow.scale=0.3
  
  dominous=createSprite(windowWidth-100,700);
  dominous.addImage(dominousImage);
  dominous.scale=0.3
  
  startButton=createSprite(windowWidth/2,700);
  startButton.addImage(startButtonImage);
}
function draw(){
  background("white");
  drawSprites();
  if(GameState==="start"){
    textSize(25)
    fill("#7f1b19")
    text("Tapping Legends",656,50)
    textSize(20)
    fill("black")
    text("Hello player,",windowWidth/2-500,100)
    fill("red")
    text("Rules of the game",windowWidth/2-480,140)
    text("1. Choose one of the four buttons to get points to buy pets",windowWidth/2-480,180)
    text("2. One of the four buttons contains a BOMB which will take away points based on half your pet multiplier",windowWidth/2-480,220)
    text("3. You will be given hints to figure out the button containing the BOMB",windowWidth/2-480,260)
    text("4. Buy pets to get multipliers",windowWidth/2-480,300)
    fill("green")
    text("A)cat=2x multiplier",windowWidth/2-480,340)
    text("B)dog=4x multiplier",windowWidth/2-480,380)
    text("C)bunny=8x multiplier",windowWidth/2-480,420)
    text("D)ginne pig=16x multiplier",windowWidth/2-480,460)
    text("E)koala=32x multiplier",windowWidth/2-480,500)
    text("F)Rhino=64x multiplier",windowWidth/2-480,540)
    text("G)elephant=128x multiplier",windowWidth/2-480,580)
    text("H)cow=256x multiplier",windowWidth/2-480,620)
    text("I)lion=512x multiplier",950,340)
    text("J)turtle=1024 multiplier",950,380)
    text("K)giraffe=2048 multiplier",950,420)
    text("L)parrot=4096 multiplier",950,460)
    text("M)crow=8192 multiplier",950,500)
    text("N)Dominous ultra=16384 multiplier(Best pet)",950,540)
 
  }
  if(mousePressedOver(startButton)){
    GameState="play"
  }
  if(GameState==="play"){
    Play();
  }
}
function Play(){
  textSize(20)
  fill("red")
  text("GAME HAS STARTED",300,100)
  startButton.visible=false
  fill("Black")
  text("TOTAL POINTS : "+totalpoints,windowWidth/2+350,50)
  text("CURRENT POINTS : "+points,windowWidth/2+350,100)
  text("CURRENT PET MULTIPLIER : "+multiplier+"x",windowWidth/2+250,150)
  textSize(35)
  // text("Hint:The purple button does not have the BOMB but has less points",300,400)
  // text("Hint:The yellow button does not have the BOMB but has less points",300,400)
  
  purpleButton=createSprite(windowWidth/2-400,windowHeight/2+200)
  purpleButton.addImage(pbImg)
  purpleButton.scale=2.5

  redButton=createSprite(windowWidth/2-100,windowHeight/2+200)
  redButton.addImage(rbImg)
  redButton.scale=2.5

  yellowButton=createSprite(windowWidth/2+200,windowHeight/2+200)
  yellowButton.addImage(ybImg)
  yellowButton.scale=2.5

  greenButton=createSprite(windowWidth/2+500,windowHeight/2+200)
  greenButton.addImage(gbImg)
  greenButton.scale=2.5

if(stage===1){
  text("Hint:The green button does not have the BOMB but has less points",300,400)
}

if(stage===1){

  if(mousePressedOver(purpleButton)){
    var randomPoint=Math.round(random(1,12))
    totalpoints+=randomPoint
    points+=randomPoint
    stage=2
  }
  else if(mousePressedOver(redButton)){
   redButton.visible=false
   bomb();
   stage=2
  }
  else if(mousePressedOver(yellowButton)){
    var randomPoint=Math.round(random(1,12))
    totalpoints+=randomPoint
    points+=randomPoint
    stage=2
  }
  else if(mousePressedOver(greenButton)){
    var randomPoint=Math.round(random(1,12))
    totalpoints+=randomPoint
    points+=randomPoint
    stage=2
  }
}
if(stage===2){
text("Hint:The red button does not have the BOMB but has less points",300,400)
}
}
function bomb(){
  BOMB=createSprite(windowWidth/2-100,windowHeight/2+200)
  BOMB.addImage(BOMBImg)
}