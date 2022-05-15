class NextButton{
    constructor(buttonImage, callback) {
        this.buttonImage = buttonImage;
        this.callback = callback;
        this.xpos = windowWidth/6*5;
        this.ypos = windowHeight/15*13;
        this.wh = windowWidth/8;
    }

    display() {
        image(this.buttonImage, this.xpos, this.ypos, this.wh, this.wh);
    }

    mousePressed() {
        if (this.mouseInRect()) {
            chapters[currentChapterIndex].nextSlideButton();
        }
    }

    keyPressed() {
       if (keyCode === RIGHT_ARROW) {
            chapters[currentChapterIndex].nextSlideButton();
        } 
    }

    mouseInRect() {
        if (mouseX > this.xpos && mouseX < this.xpos + this.wh && mouseY > this.ypos && mouseY < this.ypos + this.wh) {
            return true;
          } else {
            return false;
          }      
    }

}