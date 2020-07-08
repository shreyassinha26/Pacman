class Square{
    constructor(x,y){
        this.sprite = createSprite(x,y,5,5);
        this.x=x;
        this.y=y;
        
        squareGrp.add(this.sprite);
        this.sprite.shapeColor = "red";
    }
    display(){
        if(this.sprite.isTouching( wall)){
            this.sprite.destroy();

        }
        

        if(this.sprite.isTouching(pacman.sprite)){
            this.sprite.destroy();
            score+=200;
        }
    }
}