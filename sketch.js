var pacman;
var edge0,edge1,edge2,edge3; 
var edges = [edge0,edge1,edge2,edge3];
var wall;
var wall1,wall2,wall3;
function setup(){
    createCanvas(800 , 800);
    pacman = new Pacman(400 , 400);
    wall = new Group();
    edge0 = createSprite(0,400,1,800);
    edge1 = createSprite(400,0,800,1);
    edge2 = createSprite(800,400,1,800);
    edge3 = createSprite(400,800,800,1);
    edges = [edge0,edge1,edge2,edge3];
    wall1 = new Wall(430 , 400 , 1,400);
    wall2 = new Wall(100 , 100 , 200,1);
    wall3 = new Wall(700 , 700 , 1,200);
}

function draw(){
    background("skyBlue");
    pacman.display();
    pacman.sprite.collide(edge0);
    pacman.sprite.collide(edge1);
    pacman.sprite.collide(edge2);
    pacman.sprite.collide(edge3);
    pacman.sprite.collide(wall);
    drawSprites();
    
}
