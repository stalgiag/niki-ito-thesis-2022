class Sliders {
    constructor () {
        this.sceneH = windowWidth*2.16533333;

        this.scaleOne = new Scales(this.sceneH/29.5*10.42);
        this.scaleTwo = new Scales(this.sceneH/29.5*14.45);
        this.scaleThree = new Scales(this.sceneH/29.5*18.47);
        this.scaleFour = new Scales(this.sceneH/29.5*22.5);
    }
    
    display() {
        this.scaleOne.display();
        this.scaleTwo.display();
        this.scaleThree.display();
        this.scaleFour.display();

        this.scaleOne.edges();
        this.scaleTwo.edges();  
        this.scaleThree.edges();
        this.scaleFour.edges();      
    }

    mousePressed() {
        this.scaleOne.mousePressed();
        this.scaleTwo.mousePressed();
        this.scaleThree.mousePressed();
        this.scaleFour.mousePressed();  
      }
      
    mouseReleased() {
        this.scaleOne.mouseReleased();
        this.scaleTwo.mouseReleased();
        this.scaleThree.mouseReleased();
        this.scaleFour.mouseReleased();  
      }
      
    mouseDragged() {
        this.scaleOne.mouseDragged();
        this.scaleTwo.mouseDragged();
        this.scaleThree.mouseDragged();
        this.scaleFour.mouseDragged();  
      }

}
  
  class Scales{
    constructor(y){
      this.x = windowWidth/2;
      this.y = y;
      this.radius = 12;
      this.diamitor = this.radius*2;
      this.scaleMove = false;
      
      this.leftEdge = windowWidth/5;
      this.rightEdge = windowWidth/5*4;
    }
    
    display() {
      rectMode(CENTER);
      noFill();
      strokeWeight(4);
      rect(this.x,this.y,this.diamitor, this.diamitor, 2);  
    }
    
    mousePressed() {
    let d = dist(mouseX, mouseY, this.x, this.y);
      
    if ( d < this.radius) {
      this.scaleMove = true;
    } else {
      this.scaleMove = false;
    }
  }
    
    mouseReleased() {
    this.scaleMove = false;
  }
  
    mouseDragged() {
    if (this.scaleMove) {
      this.x = mouseX;
    }
  }
  
    edges() {
    if (this.x<this.leftEdge){
      this.x = this.leftEdge;
      this.scaleMove = false;
    } else if (this.x>this.rightEdge) {
      this.x = this.rightEdge;
      this.scaleMove = false;
    }
  }
  }