class NextButton{
    constructor(buttonImage) {
        this.buttonImage = buttonImage;
    }

    display() {
        image(this.buttonImage, windowWidth/4*3,windowHeight/15*13,windowWidth/8,windowWidth/8);
    }

    // mousePressed() {
    //     this.callback();
    // }
}