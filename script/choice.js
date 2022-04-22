class Choice {
    constructor(opt1, opt2, opt3, opt4) {
        //four images
        this.opt1 = opt1;
        this.opt2 = opt2;
        this.opt3 = opt3;
        this.opt4 = opt4;

        //currentImage
        this.currentOpt = null;

        //values for the four interactable positions
        this.sceneH = windowWidth*2.16533333;
        this.verticleGrids = windowWidth*2.16533333/23;
        this.horizontalGrids = windowWidth/6;

        this.optX = this.horizontalGrids;
        this.Opt1Y = windowHeight/2-this.sceneH/2+this.verticleGrids*8;
        this.Opt2Y = windowHeight/2-this.sceneH/2+this.verticleGrids*11;
        this.Opt3Y = windowHeight/2-this.sceneH/2+this.verticleGrids*14;
        this.Opt4Y = windowHeight/2-this.sceneH/2+this.verticleGrids*17;
        this.OptW = this.horizontalGrids*4;
        this.OptH = this.verticleGrids*2;
    }

    display() {
        if (this.currentOpt) {
            image(this.currentOpt, 0, windowHeight/2-this.sceneH/2, windowWidth, this.sceneH);
        }
    }

    mousePressed() {
        // image(this.opt1, 0, windowHeight/2-this.sceneH/2, windowWidth, this.sceneH);
        if (this.mouseInOpt1()) {
            optSound.play(0, 0.6, 2);
            this.currentOpt = this.opt1;
        }

        if (this.mouseInOpt2()) {
            optSound.play(0, 0.6, 2);
            this.currentOpt = this.opt2;
        }

        if (this.mouseInOpt3()) {
            optSound.play(0, 0.6, 2);
            this.currentOpt = this.opt3;
        }

        if (this.mouseInOpt4()) {
            optSound.play(0, 0.6, 2);
            this.currentOpt = this.opt4;
        }
    }

    mouseInOpt1() {
        if (mouseX > this.optX && mouseX < this.optX + this.OptW && mouseY > this.Opt1Y && mouseY < this.Opt1Y + this.OptH) {
            return true;
          } else {
            return false;
          }      
    }

    mouseInOpt2() {
        if (mouseX > this.optX && mouseX < this.optX + this.OptW && mouseY > this.Opt2Y && mouseY < this.Opt2Y + this.OptH) {
            return true;
          } else {
            return false;
          }      
    }

    mouseInOpt3() {
        if (mouseX > this.optX && mouseX < this.optX + this.OptW && mouseY > this.Opt3Y && mouseY < this.Opt3Y + this.OptH) {
            return true;
          } else {
            return false;
          }      
    }

    mouseInOpt4() {
        if (mouseX > this.optX && mouseX < this.optX + this.OptW && mouseY > this.Opt4Y && mouseY < this.Opt4Y + this.OptH) {
            return true;
          } else {
            return false;
          }      
    }

    chosen() {
        if (this.currentOpt) {
            return true; 
        } else {
            return false;
        }  
    }

    drawButton() {
        image(nextSlideBtnIcon, windowWidth/4*3, windowHeight/15*13, windowWidth/8, windowWidth/8);
    }
}


// let imgH = windowWidth*2.16533333;
// let verticleGrids = windowWidth*2.16533333/23;
// let horizontalGrids = windowWidth/6;
// rect(horizontalGrids, windowHeight/2-imgH/2+verticleGrids*8, horizontalGrids*4, verticleGrids*2);
// rect(horizontalGrids, windowHeight/2-imgH/2+verticleGrids*11, horizontalGrids*4, verticleGrids*2);
// rect(horizontalGrids, windowHeight/2-imgH/2+verticleGrids*14, horizontalGrids*4, verticleGrids*2);
// rect(horizontalGrids, windowHeight/2-imgH/2+verticleGrids*17, horizontalGrids*4, verticleGrids*2);