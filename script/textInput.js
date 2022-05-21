class TxtInput {
    constructor() {
        this.input;
        // this.instructions;
        this.submitButton;

        this.input = createInput();
        this.input.position(windowWidth/2-this.input.width/2, windowHeight/2);

        this.submitButton = createButton('submit');
        this.submitButton.position(windowWidth/2-this.submitButton/2, windowHeight/2+this.input.height);
        this.submitButton.mousePressed(this.hideElements);
      
        // //display English text
        // textFont(minaFontB);
        // text(th
        // this.instructions = createElement('h2', '私の名前は…。');
        // this.instructions.position(windowWidth/2, windowHeight/8*3);
        // this.instructions.style('text-align','center');

        this.hideElements();
    }

    display() {
        // this.showElements();
        nameInput = this.input.value();
    
    }

    mousePressed() {
    }

    hideElements() {
        this.input.hide();
        // this.instructions.hide();
        this.submitButton.hide();
    }

    showElements() {
        this.input.show();
        // this.instructions.show();
        this.submitButton.show();
    }

    submitName() {
        this.hideElements();
        return true;
    }
}