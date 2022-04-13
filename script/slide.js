class Slide {
    constructor(scene, gif, choices, texts, textInput) {
        this.scene = scene;
        this.gif = gif;
        this.choices = choices;
        this.texts = texts;
        this.textInput = textInput;
    }

    display() {
        if(this.scene) {
            this.scene.display();
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

    // mousePressed() {
    //     for(let choice of choices) {
    //         choice.mousePressed();
    //     }
    // }
}