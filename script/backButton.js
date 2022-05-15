class BackButton{
    constructor(buttonImage) {
        this.buttonImage = buttonImage;
        this.xpos = windowWidth/6-windowWidth/8;
        this.ypos = windowHeight/15*13;
        this.wh = windowWidth/8;
    }

    display() {
        image(this.buttonImage, this.xpos, this.ypos, this.wh, this.wh);
    }

    mousePressed() {
        if (this.mouseInRect()) {
            chapters[currentChapterIndex].previousSlideButton();
        }
    }

    keyPressed() {
        if (keyCode === LEFT_ARROW) {
            chapters[currentChapterIndex].previousSlideButton();
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