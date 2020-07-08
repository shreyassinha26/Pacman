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
    createCanvas(900 , 900);
    pacman = new Pacman(300 , 300);
    wall = new Group();
    edge0 = createSprite(0,450,1,900);
    edge1 = createSprite(450,0,900,1);
    edge2 = createSprite(900,450,1,900);
    edge3 = createSprite(450,900,900,1);
    edges = [edge0,edge1,edge2,edge3];
    wall1 = new Wall(495 , 465 , 1,400);
    wall2 = new Wall(165 , 165 , 200,1);
    wall3 = new Wall(765 , 765 , 1,200);
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
    for(var i=0;i<square.length;i++){
        square[i].display();
        
    }
    ghost1.display();
    ghost2.display();
    ghost3.display();
    drawSprites();
    
}
function createSquare(){
    for(var i=15;i<900;i+=30){
        for(var j=15;j<900;j+=30){
            var sprite = new Square(i,j);
            square.push(sprite);

        }
    }
}