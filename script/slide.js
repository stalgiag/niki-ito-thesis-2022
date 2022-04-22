class Slide {
    constructor(scene, nextButton, choices, texts, textInput) {
        this.scene = scene;
        this.nextButton = nextButton;
        this.choices = choices;
        this.texts = texts;
        this.textInput = textInput;

        // this.duration = random(0.3, 1)
    }

    display() {
        if(this.scene) {
            this.scene.display();
        }

        if (this.choices) {
            this.choices.display();
        }

        //do not show the button is the choices are not chosen yet
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
            }else if (this.nextButton.mouseInRect()){
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