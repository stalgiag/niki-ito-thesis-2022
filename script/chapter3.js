class Chapter3 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let nextSlideButton = new NextButton(nextSlideBtnIcon, null);

        let slide1scene = new Scene(chapter3scenes[0]);
        let slide2scene = new Scene(chapter3scenes[1]);
        let slide3scene = new Scene(chapter3scenes[2]);
        let slide4scene = new Scene(chapter3scenes[3]);
        let slide5scene = new Scene(chapter3scenes[4]);
        let slide6scene = new Scene(chapter3scenes[5]);
        let slide7scene = new Scene(chapter3scenes[6]);
        let slide8scene = new Scene(chapter3scenes[7]);
        let slide9scene = new Scene(chapter3scenes[8]);
        let slide10scene = new Scene(chapter3scenes[9]);
        let slide11scene = new Scene(chapter3scenes[10]);
        let slide12scene = new Scene(chapter3scenes[11]);
        let slide13scene = new Scene(chapter3scenes[12]);
        let slide14scene = new Scene(chapter3scenes[13]);
        let slide15scene = new Scene(chapter3scenes[14]);
        let slide16scene = new Scene(chapter3slide16gif);
        let slide17scene = new Scene(chapter3scenes[15]);
        let slide18scene = new Scene(chapter3scenes[16]);
        let slide19scene = new Scene(chapter3scenes[17]);
        let slide20scene = new Scene(chapter3scenes[18]);
        let slide21scene = new Scene(chapter3scenes[19]);


        let slide8Choices = new Choice(
            chapter3scene8options[0],
            chapter3scene8options[1],
            chapter3scene8options[2],
            chapter3scene8options[3]);

        let slide11Choices = new Choice(
            chapter3scene11options[0],
            chapter3scene11options[1],
            chapter3scene11options[2],
            chapter3scene11options[3]);

        let slide3namePlate = ["XXX"," MIDORI"];
        let slide3convoJ = [
            "あーー体育ちょー大変だった。ミドリって走るの得意なんだね！すっごく速かったよ。", 
            "ありがと！私は結構負けず嫌いだからなー。"];
        let slide3convoE = [
            "Man, the P.E. class was so exhausting. I didn't know you were such a great runner Midori! You were so fast.", 
            "Thanks! I get pretty competitive."];
        let slide3texts = new Txt(slide3namePlate, slide3convoJ, slide3convoE, null);

        let slide5namePlate = ["XXX", "MIDORI"];
        let slide5convoJ = [
            "何聞いてるの？", 
            "ん?BTSだよ。この曲ずっとリピートしてる。"];
        let slide5convoE = [
            "What are you listening to?", 
            "BTS! I've been listening to this song on repeat. "];
        let slide5texts = new Txt(slide5namePlate, slide5convoJ, slide5convoE, null);

        let slide6namePlate = ["MIDORI"];
        let slide6convoJ = [
            "XXXも聴きたい?リズムがいいんだよね。"];
        let slide6convoE = [
            "Do you want to hear it? The beat is amazing."];
        let slide6texts = new Txt(slide6namePlate, slide6convoJ, slide6convoE, null);

        let slide7namePlate = ["MIDORI"];
        let slide7convoJ = [
            "XXXはどんな音楽に興味あるの?"];
        let slide7convoE = [
            "What music do you listen to, XXX?"];
        let slide7texts = new Txt(slide7namePlate, slide7convoJ, slide7convoE, null);

        let slide8namePlate = ["XXX"];
        let slide8convoJ = [
            "好きな音楽は…。"];
        let slide8convoE = [
            "I like listening to..."];
        let slide8texts = new Txt(slide8namePlate, slide8convoJ, slide8convoE, "choiceBox");

        let slide9namePlate = ["MIDORI"];
        let slide9convoJ = [ 
            "そうなんだ！やっぱり音楽っていいよね。"];
        let slide9convoE = [
            "Cool! Music is the best."];
        let slide9texts = new Txt(slide9namePlate, slide9convoJ, slide9convoE, null);

        let slide10namePlate = ["XXX","MIDORI","MIDORI", "MIDORI"];
        let slide10convoJ = [ 
            "BTSのコンサート行ったことあるの?",
            "実は2022年にやっとコンサート行けることになったの。",
            "早くテテに会いたいな。テテはカッコよくて少しおとぼけでめっちゃタイプなの。",
            "XXXは好きなタイプとかある?"];
        let slide10convoE = [
            "Do you have something you can't live without besides your family?",
            "Actually, I'm finally going to their concert in 2022.",
            "I can't wait to see V in person... He's so handsome and such a dork. I just love dorks!",
            "Do you have a type that you're attracted to?"];
        let slide10texts = new Txt(slide10namePlate, slide10convoJ, slide10convoE, null);

        let slide11namePlate = ["XXX"];
        let slide11convoJ = [
            "好きなタイプは…。"];
        let slide11convoE = [
            "I like people who are..."];
        let slide11texts = new Txt(slide11namePlate, slide11convoJ, slide11convoE, "choiceBox");

        let slide12namePlate = ["MIDORI"];
        let slide12convoJ = [ 
            "いいよね！でも好きなタイプとは別人を好きになることもありそう。"];
        let slide12convoE = [
            "Nice! But there's a chance we could like someone who is different from that."];
        let slide12texts = new Txt(slide12namePlate, slide12convoJ, slide12convoE, null);

        let slide14namePlate = ["MIDORI","MIDORI","XXX","MIDORI","MIDORI","XXX"];
        let slide14convoJ = [ 
            "誰かを好きになるっていいよね。",
            "気になった人はいっぱいいるけどちゃんと好きになった人はまだいないんだ。",
            "そうなんだ。",
            "だから自分の気持ちに素直になって関係を深めていくのが大事なんだと思うの。",
            "自分の気持ちに素直になれない限り、本当に好きな人には出会えないんじゃないかな。",
            "あー。そうかもね。"];
        let slide14convoE = [
            "Isn't it nice to like someone.",
            "I've had many people I'm attracted to, but I've never REALLY liked anyone. ",
            "I see",
            "That's why I think it's important to be honest in how you feel and build deeper relationships you know?",
            "I feel like you never know who you can really like until you're really honest with how you feel.",
            "Um, that's true."];
        let slide14texts = new Txt(slide14namePlate, slide14convoJ, slide14convoE, null);

        let slide15namePlate = ["MIDORI"];
        let slide15convoJ = [ 
            "まっ、授業も始まるし、また後でね。"];
        let slide15convoE = [
            "Well. Class is going to start soon. See you later!"];
        let slide15texts = new Txt(slide15namePlate, slide15convoJ, slide15convoE, null);

        let slide17convoJ = [ 
            "私は男の子は好きだけど女の子も好き。みんなと同じように気になった人と自然に付き合えればいいのに。",
            "でもどうせただの遊び人だと誤解される。本当にむかつく。"];
        let slide17convoE = [
            "I like boys but I also like girls. I want to be able to freely pursue who I am attracted to.",
            "But people mistake that as being a player. Ahh it makes me sick."];
        let slide17texts = new Txt(null, slide17convoJ, slide17convoE, null);

        let slide20convoJ = [ 
            "好きな人を見つけて一緒に花火大会に行きたい！",
            "でも他人に誤解されるのがムカつく"];
        let slide20convoE = [
            "I'd like to tell my crush that I like her.",
            "But I'm frustrated about how others judge me."];
        let slide20texts = new Txt(null, slide20convoJ, slide20convoE, null);

        //Slide(scene, nextButton, choices, texts, audio, amp, textInput)
        this.slides.push(new Slide(slide1scene, nextSlideButton, null, null, null, null, null, null )); //1
        this.slides.push(new Slide(slide2scene, nextSlideButton, null, null, null, null, null )); //2
        this.slides.push(new Slide(slide3scene, nextSlideButton, null, slide3texts, null, null, null )); //3
        this.slides.push(new Slide(slide4scene, nextSlideButton, null, null, null, null, null )); //4
        this.slides.push(new Slide(slide5scene, nextSlideButton, null, slide5texts, null, null, null )); //5
        this.slides.push(new Slide(slide6scene, nextSlideButton, null, slide6texts, btsSound, 0.1, null )); //6
        this.slides.push(new Slide(slide7scene, nextSlideButton, null, slide7texts, null, null, null )); //7
        this.slides.push(new Slide(slide8scene, nextSlideButton, slide8Choices, slide8texts, null, null, null )); //8
        this.slides.push(new Slide(slide9scene, nextSlideButton, null, slide9texts, null, null, null )); //9
        this.slides.push(new Slide(slide10scene, nextSlideButton, null, slide10texts, null, null, null )); //10
        this.slides.push(new Slide(slide11scene, nextSlideButton, slide11Choices, slide11texts, null, null, null )); //11
        this.slides.push(new Slide(slide12scene, nextSlideButton, null, slide12texts, null, null, null )); //12
        this.slides.push(new Slide(slide13scene, nextSlideButton, null, null, null, null, null )); //13
        this.slides.push(new Slide(slide14scene, nextSlideButton, null, slide14texts, null, null, null )); //14
        this.slides.push(new Slide(slide15scene, nextSlideButton, null, slide15texts, null, null, null )); //15
        this.slides.push(new Slide(slide16scene, nextSlideButton, null, null, null, null, null )); //16
        this.slides.push(new Slide(slide17scene, nextSlideButton, null, slide17texts, null, null, null )); //17
        this.slides.push(new Slide(slide18scene, nextSlideButton, null, null, null, null, null )); //18
        this.slides.push(new Slide(slide19scene, nextSlideButton, null, null, null, null, null )); //19
        this.slides.push(new Slide(slide20scene, nextSlideButton, null, slide20texts, null, null, null )); //20
        this.slides.push(new Slide(slide21scene, nextSlideButton, null, null, null, null, null )); //21
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
            nextSlideSound.play(0, 0.6, 0.3);
            this.currentSlideIndex++;
        }
    }
}