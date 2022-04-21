class Chapter1 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let nextSlideButton = new NextButton(nextSlideBtnIcon, null);

        let slide1scene = new Scene(chapter1scenes[0]);
        let slide2scene = new Scene(chapter1scenes[1]);
        let slide3scene = new Scene(chapter1scenes[2]);
        let slide4scene = new Scene(chapter1scenes[3]);
        let slide5scene = new Scene(chapter1scenes[4]);
        let slide6scene = new Scene(chapter1scenes[5]);
        let slide7scene = new Scene(chapter1scenes[6]);
        let slide8scene = new Scene(chapter1scenes[7]);
        let slide9scene = new Scene(chapter1scenes[8]);
        let slide10scene = new Scene(chapter1scenes[9]);
        let slide11scene = new Scene(chapter1scenes[10]);
        let slide12scene = new Scene(chapter1scenes[11]);
        let slide13scene = new Scene(chapter1scenes[12]);
        let slide14scene = new Scene(chapter1scenes[13]);
        let slide15scene = new Scene(chapter1scenes[14]);
        let slide16scene = new Scene(chapter1slide16gif);
        let slide17scene = new Scene(chapter1scenes[15]);
        let slide18scene = new Scene(chapter1scenes[16]);
        let slide19scene = new Scene(chapter1scenes[17]);
        let slide20scene = new Scene(chapter1scenes[18]);
        let slide21scene = new Scene(chapter1scenes[19]);


        let slide6Choices = new Choice(chapter1scene6options[0],chapter1scene6options[1],chapter1scene6options[2],chapter1scene6options[3]);
        let slide11Choices = new Choice(chapter1scene11options[0],chapter1scene11options[1],chapter1scene11options[2],chapter1scene11options[3]);

        // let slideOneImages = [slide1Bird];

        // this.nextSlideButton = new NextButton ("nextSlide");

        let slide3namePlate = ["SORA","XXX"];
        let slide3convoJ = [
            "XXX おはよう！久しぶり。夏休みは長いようであっという間だったね。", 
            "そうだね。ついに学校がまた始まっちゃったー。"];
        let slide3convoE = [
            "(Hey XXX! I haven't seen you in so long! Time flew by so quickly.)", 
            "(Yeah. By the time you know it, it's the first day of school again.)"];
        let slide3texts = new Txt(slide3namePlate, slide3convoJ, slide3convoE);

        let slide5namePlate = ["XXX", "SORA", "SORA", "SORA"];
        let slide5convoJ = [
            "そら、入部したい部活決めた？", "私はダンスクラブに入部したいんだ。", 
            "少し恥ずかしいんだけど、でもダンスしてると悩みとか忘れて楽になれるんだよね。", 
            "XXXは何部に興味ある?"];
        let slide5convoE = [
            "(Hey Sora, did you decide what club to join?)", 
            "(I want to join the dance club.)", 
            "(I'm a bit embarrassed but while I am dancing, all my worries go away.)", 
            "(Which club activities are you interested in XXX?)"];
        let slide5texts = new Txt(slide5namePlate, slide5convoJ, slide5convoE);

        let slide8namePlate = ["SORA"];
        let slide8convoJ = [
            "見てみて。これ私の犬のコトリ。"];
        let slide8convoE = [
            "(Look look! This is my puppy, Kotori.)"];
        let slide8texts = new Txt(slide8namePlate, slide8convoJ, slide8convoE);

        let slide9namePlate = ["SORA", "SORA", "XXX"];
        let slide9convoJ = [ 
            "一年前に飼った保護犬なんだけど今は六才ぐらいなの。", 
            "本当大好き。小鳥無しだったら生きていけないわー。",
            "かわいいね！いい写真。"];
        let slide9convoE = [
            "(I rescued him from the shelter a year ago but now he's about 6 years old.)", 
            "(I love him so much. I wouldn't know what to do without him.)", 
            "(Wow he's so cute. That picture is great.)"];
        let slide9texts = new Txt(slide9namePlate, slide9convoJ, slide9convoE);

        //Slide(scene, nextButton, choices, texts, textInput)
        this.slides.push(new Slide(slide1scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide2scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide3scene, nextSlideButton, null, slide3texts, null ));
        this.slides.push(new Slide(slide4scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide5scene, nextSlideButton, null, slide5texts, null ));
        this.slides.push(new Slide(slide6scene, nextSlideButton, slide6Choices, null, null ));
        this.slides.push(new Slide(slide7scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide8scene, nextSlideButton, null, slide8texts, null ));
        this.slides.push(new Slide(slide9scene, nextSlideButton, null, slide9texts, null ));
        this.slides.push(new Slide(slide10scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide11scene, nextSlideButton, slide11Choices, null, null ));
        this.slides.push(new Slide(slide12scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide13scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide14scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide15scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide16scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide17scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide18scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide19scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide20scene, nextSlideButton, null, null, null ));
        this.slides.push(new Slide(slide21scene, nextSlideButton, null, null, null ));
    }

    display() {
        this.slides[this.currentSlideIndex].display();
    }

    mousePressed() {
        this.slides[this.currentSlideIndex].mousePressed();
    }

    nextSlideButton() {
        this.currentSlideIndex++;
    }
}