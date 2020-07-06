class Pacman{
    constructor(x,y){
        this.sprite = createSprite(x,y,20 , 20);
        //this.sprite.addImage(pacmanImg);
        this.x = x ;
        this.y = y;
        this.sprite.shapeColor = "yellow";
    }
    display(){
        rectMode(CENTER);
        if(keyDown(LEFT_ARROW)){
            this.sprite.velocityX = -3;
            this.sprite.velocityY = 0;
        }
        if(keyDown(RIGHT_ARROW)){
            this.sprite.velocityX = 3;
            this.sprite.velocityY = 0;
        }
        if(keyDown(UP_ARROW)){
            this.sprite.velocityY = -3;
            this.sprite.velocityX = 0;
        }
        if(keyDown(DOWN_ARROW)){
            this.sprite.velocityY = 3;
            this.sprite.velocityX = 0;
        }
    }
}