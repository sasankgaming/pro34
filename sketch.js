//Create variables here
var dog,happyDog,database,foods,foodStock;
var dogImage,happydogImage;

function preload()
{
  //load images here
  dogImage=loadImage("images/Dog.png");
  happydogImage=loadImage("images/happydog.png");


}

function setup() {
  createCanvas(500, 500);
  
  dog=createSprite(200,200,30,40);
  dog.addImage(dogImage);
  
  var dogpos = database.ref("dog/position");
  dog.on("value",readPosition,showError);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happydogImage);
  }

  drawSprites();
  //add styles here
  text(foodStock);

}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}



