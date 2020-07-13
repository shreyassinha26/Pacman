var pacman;
var edge0,edge1,edge2,edge3; 
var edges = [edge0,edge1,edge2,edge3];
var wall;
var wall1,wall2,wall3;
var square,squareGrp;
var score=0;
var ghost;
var gamestate = 0;


function setup(){
    createCanvas(450 , 450);
    pacman = new Pacman(225,225);
    wall = new Group();
    edge0 = createSprite(0,225,1,450);
    edge1 = createSprite(225,0,450,1);
    edge2 = createSprite(450,225,1,450);
    edge3 = createSprite(225,450,450,1);
    edges = [edge0,edge1,edge2,edge3];
    wall1 = new Wall(15,435,30,1);
    wall2 = new Wall(45 , 405 , 30,1);
    wall3 = new Wall(15,375,30,1);
    wall4 = new Wall(45 , 345 , 30,1);
    wall5 = new Wall(15,315,30,1);
    wall6 = new Wall(45 , 285 , 30,1);
    wall7 = new Wall(15,255,30,1);
    wall8 = new Wall(45 , 225 , 30,1);
    wall9 = new Wall(15,195,30,1);
    wall10= new Wall(45 , 165 , 30,1);
    wall11= new Wall(15,135,30,1);
    wall12= new Wall(45 , 105 , 30,1);
    wall13= new Wall(15,75,30,1);
    wall14= new Wall(225 , 45 , 390,1);
    wall15= new Wall(15,15,30,1);
    wall16= new Wall(390,405,60,1);
    wall17= new Wall(285 , 375 , 1,150);
    wall18= new Wall(105,255,1,330);
    wall19= new Wall(405,225,1,60);
    wall20= new Wall(255,105,90,1);
    wall21= new Wall(255 , 195 , 1,150);
    wall22= new Wall(225,390 , 90,1);
    
    square = [];
    ghost = new Group();
    ghost1=new Ghost();
    ghost2=new Ghost();
    ghost3=new Ghost();
    squareGrp = new Group();
    createSquare();
}

function draw(){
    background("skyBlue");
    pacman.display();
    pacman.sprite.collide(edge0);
    pacman.sprite.collide(edge1);
    pacman.sprite.collide(edge2);
    pacman.sprite.collide(edge3);
    pacman.sprite.collide(wall);
    ghost1.sprite.collide(ghost2.sprite);
    ghost1.sprite.collide(ghost3.sprite);
    ghost2.sprite.collide(ghost3.sprite);
    for(var i=0;i<square.length;i++){
        square[i].display();
        
    }

    ghost1.display();
    ghost2.display();
    ghost3.display();
    drawSprites();
    
}
function createSquare(){
    for(var i=15;i<450;i+=30){
        for(var j=15;j<450;j+=30){
            var sprite = new Square(i,j);
            square.push(sprite);

        }
    }
}