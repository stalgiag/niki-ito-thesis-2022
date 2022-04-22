class Chapter0 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let nextSlideButton = new NextButton(nextSlideBtnIcon, null);

        let slide1scene = new Scene(chapter0slide1gif);
        let slide3scene = new Scene(chapter0scenes[0]);
        let slide4scene = new Scene(chapter0scenes[1]);

        // let slide3namePlate = ["MOTHER","XXX"];
        let slide3convoJ = [
            "私はの名前はXXX。ごく普通の中学生。", 
            "今日は夏休み明けで最初の学校。"];
        let slide3convoE = [
            "(I'm XXX. An ordinary Japanese middle school student.)", 
            "(Today is my first day of school after a long summer break.)"];
        let slide3texts = new Txt(null, slide3convoJ, slide3convoE, null);

        let slide4namePlate = ["MOTHER","XXX"];
        let slide4convoJ = [
            "行ってらっしゃーい！雨降ってるから気をつけてね。", 
            "はーい。行ってきまーす！"];
        let slide4convoE = [
            "(Have a nice day at school! Be careful since it's raining.)", 
            "(Okay, I will!)"];
        let slide4texts = new Txt(slide4namePlate, slide4convoJ, slide4convoE, null);


        //Slide(scene, nextButton, choices, texts, textInput)
        this.slides.push(new Slide(slide1scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(null, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide3scene, nextSlideButton, null, slide3texts, null ));
        this.slides.push(new Slide(slide4scene, nextSlideButton, null, slide4texts, null ));
    }

    display() {
        this.slides[this.currentSlideIndex].display();
    }

    mousePressed() {
        this.slides[this.currentSlideIndex].mousePressed();
    }

    nextSlideButton() {
        if (this.currentSlideIndex >= this.slides.length-1) {
            nextChapSound.play(0,1,1);
            currentChapterIndex++;
        } else {
            nextSlideSound.play(0, 0.6, 0.3);
            this.currentSlideIndex++;
        }
    }
}