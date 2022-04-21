class Slide {
    constructor(scene, nextButton,  gif, choices, texts, textInput) {
        this.scene = scene;
        this.nextButton = nextButton;
        this.gif = gif;
        this.choices = choices;
        this.texts = texts;
        this.textInput = textInput;
    }

    display() {
        if(this.scene) {
            this.scene.display();
        }

        // if (this.nextButton) {
        //     this.nextButton.display();
        // }

        if (this.choices) {
            this.choices.display();
        }

        if (this.choices) {
            if (this.choices.chosen()) {
                this.choices.drawButton();
            } 
        } else {
            this.nextButton.display();
        }

        if (this.texts) {
            this.texts.display();
        }

        // if(this.gif) {
        //     this.gif.display();
        // }

        // for(let choice of this.choices) {
        //     choice.display();
        // }

        // for (let t of this.texts) {
        //     fontSize(t.fontSize);
        //     text(t.text, t.x, t.y);
        // }

        // if(this.textInput) {
        //     this.textInput.display();
        // }
    }

    mousePressed() {

        if (this.isCompleted()) {
            this.nextButton.mousePressed();
        }
        
        if (this.choices) {
            this.choices.mousePressed();
        }
    }

    isCompleted() {
        
        //if the slide has no image or choices, it is complete
        if (!this.texts && !this.choices) {
            return true;
        }
 
        //if the slide has image or choices, check if the elements have completed
        if (this.texts) {
            if(this.texts.allConvoDisplayed()) {
                return true;
            }else {
                this.texts.nextText();
                return false;
            } 
        }
        
        if (this.choices) {
            if (this.choices.chosen()) {
                return true;
            } else {
                return false;
            }
        } 
    }
}