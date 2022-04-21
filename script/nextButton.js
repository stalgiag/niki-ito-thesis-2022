class NextButton{
    constructor(buttonImage, callback) {
        this.buttonImage = buttonImage;
        this.callback = callback;
        this.xpos = windowWidth/4*3;
        this.ypos = windowHeight/15*13;
        this.wh = windowWidth/8;
    }

    display() {
        image(this.buttonImage, this.xpos, this.ypos, this.wh, this.wh);
    }

    mousePressed() {
        if (this.mouseInRect()) {
            clear();
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