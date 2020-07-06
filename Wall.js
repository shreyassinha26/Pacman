class Wall{
    constructor(x,y,width,height){
        this.sprite = createSprite(x,y,width,height);
        this.x = x;
        this.y=y;
        this.width=width;
        this.height = height;
        this.sprite.shapeColor = "blue"
        wall.add(this.sprite);
    }
}