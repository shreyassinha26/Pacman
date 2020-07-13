class Ghost{
    constructor(){
        this.sprite = createSprite(450,450,20,20);
        this.x=450;
        this.y=450;
        ghost.add(this.sprite);
    }
    display(){
        this.sprite.collide(wall);
        if(pacman.sprite.x>this.x&&gamestate === 0){
            this.sprite.velocityX=2;
        }
        else if(gamestate === 0){
            this.sprite.velocityX=-2;
        }
        if(pacman.sprite.y>this.y&&gamestate === 0){
            this.sprite.velocityY=2;
        }
        else if(gamestate === 0){
            this.sprite.velocityY=-2;
        }
        this.x=this.sprite.x;
        this.y=this.sprite.y;
    }
}