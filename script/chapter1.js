class Chapter1 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let slide1scenes = new Scene(chapter1scenes[this.currentSlideIndex]);
        // let slideOneImages = [slide1Bird];

        // let slide1Conversation = new Txt('HHey whats up', 100, 200, 12);
        // let slideOneTexts = [slide1Conversation];

        this.slides.push(new Slide(slide1scenes, null, null, null, null ));
    }

    display() {
        this.slides[this.currentSlideIndex].display();
    }

    nextButton() {
        this.currentSlideIndex++;
    }
}