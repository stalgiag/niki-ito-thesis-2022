class Chapter1 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let slide1scenes = new Scene(chapter1scenes[this.currentSlideIndex]);
        // let slideOneImages = [slide1Bird];

        // let slide1Conversation = new Txt('HHey whats up', 100, 200, 12);
        // let slideOneTexts = [slide1Conversation];
        // this.nextSlideButton = new NextButton ("nextSlide");
        this.slides.push(new Slide(slide1scenes, null, this.nextSlideButton, null, null, null ));
    }

    display() {
        this.slides[this.currentSlideIndex].display();
    }

    nextSlideButton() {
        this.currentSlideIndex++;
    }
}