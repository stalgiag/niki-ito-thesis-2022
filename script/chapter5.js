class Chapter5 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let nextSlideButton = new NextButton(nextSlideBtnIcon, null);

        let slide1scene = new Scene(chapter5scenes[0]);
        let slide2scene = new Scene(chapter5scenes[1]);
        let slide3scene = new Scene(chapter5scenes[2]);
        let slide4scene = new Scene(chapter5scenes[3]);
        let slide5scene = new Scene(chapter5scenes[4]);
        let slide6scene = new Scene(chapter5scenes[5]);
        let slide7scene = new Scene(chapter5scenes[6]);

        // // let slide3namePlate = ["MOTHER","XXX"];
        // let slide3convoJ = [
        //     "私はの名前はXXX。ごく普通の中学生。", 
        //     "今日は夏休み明けで最初の学校。"];
        // let slide3convoE = [
        //     "I'm XXX. An ordinary Japanese middle school student.", 
        //     "Today is my first day of school after a long summer break."];
        // let slide3texts = new Txt(null, slide3convoJ, slide3convoE, null);

        // let slide4namePlate = ["MOTHER","XXX"];
        // let slide4convoJ = [
        //     "行ってらっしゃーい！雨降るから気をつけてね。", 
        //     "はーい。行ってきまーす！"];
        // let slide4convoE = [
        //     "Have a nice day at school! Be careful since it's raining.", 
        //     "Okay, I will!"];
        // let slide4texts = new Txt(slide4namePlate, slide4convoJ, slide4convoE, null);


        //Slide(scene, nextButton, choices, texts, audio, amp, textInput)
        this.slides.push(new Slide(slide1scene, nextSlideButton, null, null, null, null, null));
        this.slides.push(new Slide(slide2scene, nextSlideButton, null, null, doorSound, 0.5, null));
        this.slides.push(new Slide(slide3scene, nextSlideButton, null, null, null, null, null));
        this.slides.push(new Slide(slide4scene, nextSlideButton, null, null, null, null, null));
        this.slides.push(new Slide(slide5scene, nextSlideButton, null, null, null, null, null));
        this.slides.push(new Slide(slide6scene, nextSlideButton, null, null, null, null, null));
        this.slides.push(new Slide(slide7scene, nextSlideButton, null, null, null, null, null));
    }

    display() {
        this.slides[this.currentSlideIndex].display();
    }

    mousePressed() {
        this.slides[this.currentSlideIndex].mousePressed();
    }

    playAudio() {
        this.slides[this.currentSlideIndex].playAudio();
    }

    nextSlideButton() {
        if (this.currentSlideIndex >= this.slides.length-1) {
            nextChapSound.play(0,1,1);
            currentChapterIndex++;
        } else {
            nextSlideSound.play(0, 0.6, 0.1);
            this.currentSlideIndex++;
        }
    }
}