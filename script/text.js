class Txt {
    constructor(namePlate, convoJ, convoE, choiceBox){
        this.namePlate = namePlate;
        this.convoJ = convoJ;
        this.convoE = convoE;
        this.choiceBox = choiceBox;

        this.currentConvoIndex = 0;

        this.sceneH = windowWidth*2.16533333;
        this.verticleGrids = this.sceneH/26;
        this.horizontalGrids = windowWidth/10;
        this.topOfScene = windowHeight/2-this.sceneH/2;
    }

    display() {
        //display namePlate
        if (this.choiceBox) {
            if(this.namePlate) {
                textFont(minaFontB);
                textSize(20);
                text(this.namePlate[this.currentConvoIndex],this.horizontalGrids, this.topOfScene+this.verticleGrids*4.7);
            }
    
            //display Japanese text
            textFont(corpFontB);
            textSize(19);
            textWrap(CHAR);
            text(this.convoJ[this.currentConvoIndex], this.horizontalGrids, this.topOfScene+this.verticleGrids*6, this.horizontalGrids*8);
    
            //display English text
            textFont(minaFontB);
            textWrap(WORD);
            text(this.convoE[this.currentConvoIndex], this.horizontalGrids, this.topOfScene+this.verticleGrids*7, this.horizontalGrids*8); 
        } else {

            if(this.namePlate) {
                textFont(minaFontB);
                textSize(20);
                text(this.namePlate[this.currentConvoIndex],this.horizontalGrids, this.topOfScene+this.verticleGrids*16.5);
            }
    
            //display Japanese text
            textFont(corpFontB);
            textSize(17);
            textWrap(CHAR);
            text(this.convoJ[this.currentConvoIndex], this.horizontalGrids, this.topOfScene+this.verticleGrids*18, this.horizontalGrids*8);
    
            //display English text
            textFont(minaFontB);
            textWrap(WORD);
            text(this.convoE[this.currentConvoIndex], this.horizontalGrids, this.topOfScene+this.verticleGrids*19.1, this.horizontalGrids*8);       
        }
    }

    allConvoDisplayed() {
        if (this.currentConvoIndex === this.convoJ.length - 1) {
            return true;
          } else {
            return false;
          }      
    }

    nextText() {
        nextSlideSound.play(0, 0.6, 0.1);
        talkingSound.play(0.3, 1, 0.2, random(0, 2), random(0.5, 1));
        this.currentConvoIndex ++;
    }
}

// let sceneH = windowWidth*2.16533333;
// let verticleGrids = windowWidth*2.16533333/26;
// let horizontalGrids = windowWidth/10;
// let topOfScene = windowHeight/2-sceneH/2


// let currentConvoIndex = 0;
// let namePlate = ["SORA","XXX"];
// let convoJ = ["XXX おはよう！久しぶり。夏休みは長いようであっという間だったね。", "そうだね。ついに学校がまた始まっちゃったー。"];
// let convoE = [" (Hey XXX! I haven't seen you in so long! Time flew by so quickly.)", "(Yeah. By the time you know it, it's the first day of school again.)"];
// textFont(minaFontB);
// textSize(20);
// text(namePlate[currentConvoIndex],horizontalGrids, topOfScene+verticleGrids*16.5);
// textFont(corpFontB);
// textSize(17);
// textWrap(CHAR);
// text(convoJ[currentConvoIndex], horizontalGrids, topOfScene+verticleGrids*18, horizontalGrids*8);
// textFont(minaFontB);
// textWrap(WORD);
// text(convoE[currentConvoIndex], horizontalGrids, topOfScene+verticleGrids*20, horizontalGrids*8);