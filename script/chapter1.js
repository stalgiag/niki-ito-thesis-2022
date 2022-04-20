class Chapter1 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

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
        this.slides.push(new Slide(slide1scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide2scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide3scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide4scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide5scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide6scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide7scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide8scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide9scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide10scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide11scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide12scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide13scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide14scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide15scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide16scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide17scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide18scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide19scenes, this.nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide20scenes, this.nextSlideButton, null, null, null, null ));
    }

    display() {
        this.slides[this.currentSlideIndex].display();
    }

    nextSlideButton() {
        this.currentSlideIndex++;
        console.log(this.currentSlideIndex);
    }
}