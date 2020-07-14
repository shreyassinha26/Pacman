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
        if(gamestate === 0&&keyDown(LEFT_ARROW)){
            this.sprite.x -=3;
            
        }
        else if(gamestate === 0&&keyDown(RIGHT_ARROW)){
            this.sprite.x +=3;
        }
        else if(gamestate === 0&&keyDown(UP_ARROW)){
            this.sprite.y -=3;
        }
        else if(gamestate === 0&&keyDown(DOWN_ARROW)){
            this.sprite.y +=3;
        }
        if(this.sprite.isTouching(ghost)){
            gamestate =1;
        }
    }
}