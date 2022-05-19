class TxtInput {
    constructor() {
        this.input;
        this.instructions;
        this.submitButton;

        this.input = createInput();
        this.input.position(20, 65);

        this.submitButton = createButton('submit');
        this.submitButton.position(this.input.x + this.input.width, 65);
        this.submitButton.mousePressed(this.hideElements);
      
        this.instructions = createElement('h2', 'what is your name?');
        this.instructions.position(20, 5);

        this.hideElements();
    }

    display() {
        this.showElements();
        nameInput = this.input.value();
    
    }

    mousePressed() {
    }

    hideElements() {
        this.input.hide();
        this.instructions.hide();
        this.submitButton.hide();
    }

    showElements() {
        this.input.show();
        this.instructions.show();
        this.submitButton.show();
    }

    submitName() {
        this.hideElements();
        return true;
    }
}