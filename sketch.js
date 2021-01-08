const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var en, wld,Pgroup;
var enemy1, enemy2, enemy3;

var arrowMan,platform1,platform2,platform3,ground,roof, arrowmanImg, groundImg, iGround, arrowImg;

function preload(){
arrowmanImg = loadImage("images/ArrowMan.png");
groundImg = loadImage("images/ground.png")
arrowImg = loadImage("images/arrow.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)

en = Engine.create();
wld = en.world;

Pgroup = new Group()
Egroup = new Group()
Agroup = new Group()

// ground = new Ground(displayWidth/2, displayHeight - 50, displayWidth,120);

// platform1 = new Ground(400,displayHeight - 250,200,70)

// arrowMan  =  Bodies.rectangle(100,displayHeight -150,50,50.)
// World.add(wld,arrowMan);

ground  = createSprite(width/2, height-20,width, 20);
ground.addImage("ground", groundImg);
ground.scale  = 0.4;
ground.debug = true;
ground.setCollider("rectangle",0,0,width,200)

// platform1 = createSprite(400,height - 250,200,70);
// platform1.addImage("platform1",groundImg)

// platform2 = createSprite(550,height - 150,200,70);
// platform2.addImage("platform2",groundImg)

// platform3 = createSprite( 700,height - 250,200,70)
// platform3.addImage("platform3",groundImg)




arrowMan  = createSprite(100,height - 100, 100,150);
arrowMan.addImage("man", arrowmanImg);
arrowMan.scale  = 0.3;
arrowMan.debug = true;

// arrow = createSprite(100,height - 100, 100,150)
// 
// arrow.scale  = 0.6;



iGround  = createSprite(width/2, height - 60, width, 10);
iGround.visible  = false


}

function draw(){
    Engine.update(en);
    background("white");

    if(keyDown(UP_ARROW)){
        arrowMan.velocityY = -5;
    }

    arrowMan.velocityY = arrowMan.velocityY + 0.1;

   arrowMan.collide(iGround);
    platform();
    makeEnemy1(); 
    makeEnemy2();
    makeEnemy3();
    drawSprites();

    if(keyDown("space")){
      //  arrowMan.velocityY = -5;
     makeArrow();
    }

    for(var i  = 0; i<Egroup.length;i++){
        if(Agroup.isTouching(Egroup) ){
            Egroup.destroy();
          Agroup.destroyEach();
}
    // if(Agroup.isTouching(Egroup)){
    //    Egroup.destroyEach();
    //    Agroup.destroyEach();
    // }
   // arrowMan.velocityY = arrowMan.velocityY + 0.1;

   

// ground.display();
// platform1.display();

// imageMode(CENTER);
// image(this.arrowmanImg, arrowMan.position.x, arrowMan.position.y,100,150);

    }
}

function platform(){
    if(frameCount % 100 === 0){
        var platform = createSprite(width,random(height/2 + 75,height/2 - 50),150,20);
        platform.velocityX = -5;
        Pgroup.add(platform)
        Pgroup.setLifetimeEach ( width/5);
        
        
    }
}

    function makeEnemy1(){
        if(frameCount % 150 === 0){
           enemy1 = createSprite(width,random(height/2 - 50,height/2 - 150),25,25);
            enemy1.velocityX = -5;
           // Pgroup.add(platform)
           // Pgroup.setLifetimeEach ( width/5);
            Egroup.add(enemy1)
            
        }

    
}

function makeEnemy2(){
    if(frameCount % 200 === 0){
       enemy2 = createSprite(width,random(height/2 - 150,height/2 - 250),100,25);
        enemy2.velocityX = -5;
       // Pgroup.add(platform)
       // Pgroup.setLifetimeEach ( width/5);
        Egroup.add(enemy2)
        
    }


}

function makeEnemy3(){
    if(frameCount % 250 === 0){
       enemy3 = createSprite(width,random(height/2 - 250,height/2 - 350),40,25);
        enemy3.velocityX = -5;
       // Pgroup.add(platform)
       // Pgroup.setLifetimeEach ( width/5);
        Egroup.add(enemy3)
        
    }


}

function makeArrow(){
    arrow = createSprite(100,height - 190,5,5)
    arrow.scale = 0.3;
    arrow.velocityX = 4;
    arrow.lifetime = -7;
    arrow.addImage("arrow", arrowImg);
    arrow.y = arrowMan.y
    Agroup.add(arrow)
}

