class Chapter1 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 2;

        let slide1nextButton = new NextButton(nextSlideBtnIcon, this.nextSlideButton());
        let slide2nextButton = new NextButton(nextSlideBtnIcon, this.nextSlideButton());
        let slide3nextButton = new NextButton(nextSlideBtnIcon, this.nextSlideButton());
        // should I make a button for each slide even though they are all basically the same?

        let slide1scenes = new Scene(chapter1scenes[0]);
        let slide2scenes = new Scene(chapter1scenes[1]);
        let slide3scenes = new Scene(chapter1scenes[2]);
        let slide4scenes = new Scene(chapter1scenes[3]);
        let slide5scenes = new Scene(chapter1scenes[4]);
        let slide6scenes = new Scene(chapter1scenes[5]);
        let slide7scenes = new Scene(chapter1scenes[6]);
        let slide8scenes = new Scene(chapter1scenes[7]);
        let slide9scenes = new Scene(chapter1scenes[8]);
        let slide10scenes = new Scene(chapter1scenes[9]);
        let slide11scenes = new Scene(chapter1scenes[10]);
        let slide12scenes = new Scene(chapter1scenes[11]);
        let slide13scenes = new Scene(chapter1scenes[12]);
        let slide14scenes = new Scene(chapter1scenes[13]);
        let slide15scenes = new Scene(chapter1scenes[14]);
        let slide16scenes = new Scene(chapter1scenes[15]);
        let slide17scenes = new Scene(chapter1scenes[16]);
        let slide18scenes = new Scene(chapter1scenes[17]);
        let slide19scenes = new Scene(chapter1scenes[18]);
        let slide20scenes = new Scene(chapter1scenes[19]);



        // let slideOneImages = [slide1Bird];

        // let slide1Conversation = new Txt('HHey whats up', 100, 200, 12);
        // let slideOneTexts = [slide1Conversation];
        // this.nextSlideButton = new NextButton ("nextSlide");
        this.slides.push(new Slide(slide1scenes, slide1nextButton, null, null, null, null ));
        this.slides.push(new Slide(slide2scenes, slide2nextButton, null, null, null, null ));
        this.slides.push(new Slide(slide3scenes, slide3nextButton, null, null, null, null ));
        this.slides.push(new Slide(slide4scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide5scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide6scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide7scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide8scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide9scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide10scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide11scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide12scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide13scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide14scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide15scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide16scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide17scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide18scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide19scenes, null, null, null, null, null ));
        this.slides.push(new Slide(slide20scenes, null, null, null, null, null ));
    }

    display() {
        this.slides[this.currentSlideIndex].display();
    }

    mousePressed() {
        slide1nextButton.mousePressed();
    }

    nextSlideButton() {
        this.currentSlideIndex++;
    }
}