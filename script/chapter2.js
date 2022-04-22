class Chapter2 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let nextSlideButton = new NextButton(nextSlideBtnIcon, null);

        let slide1scene = new Scene(chapter2scenes[0]);
        let slide2scene = new Scene(chapter2scenes[1]);
        let slide3scene = new Scene(chapter2scenes[2]);
        let slide4scene = new Scene(chapter2scenes[3]);
        let slide5scene = new Scene(chapter2scenes[4]);
        let slide6scene = new Scene(chapter2scenes[5]);
        let slide7scene = new Scene(chapter2scenes[6]);
        let slide8scene = new Scene(chapter2scenes[7]);
        let slide9scene = new Scene(chapter2scenes[8]);
        let slide10scene = new Scene(chapter2scenes[9]);
        let slide11scene = new Scene(chapter2scenes[10]);
        let slide12scene = new Scene(chapter2scenes[11]);
        let slide13scene = new Scene(chapter2scenes[12]);
        let slide14scene = new Scene(chapter2scenes[13]);
        let slide15scene = new Scene(chapter2scenes[14]);
        let slide16scene = new Scene(chapter2slide16gif);
        let slide17scene = new Scene(chapter2scenes[15]);
        let slide18scene = new Scene(chapter2scenes[16]);
        let slide19scene = new Scene(chapter2scenes[17]);
        let slide20scene = new Scene(chapter2scenes[18]);
        let slide21scene = new Scene(chapter2scenes[19]);


        let slide9Choices = new Choice(chapter2scene9options[0],chapter2scene9options[1],chapter2scene9options[2],chapter2scene9options[3]);
        let slide12Choices = new Choice(chapter2scene12options[0],chapter2scene12options[1],chapter2scene12options[2],chapter2scene12options[3]);

        let slide3namePlate = ["MATSUBA","XXX","XXX"];
        let slide3convoJ = [
            "お腹すいたー。XXX今日の給食何か知ってる?", 
            "マツバはいつも食べ物のこと考えてるよね。",
            "知らないけどいい匂い!"];
        let slide3convoE = [
            "(I'm so hungry... Do you know what today's lunch is XXX?)", 
            "(You're always talking about food Matsuba.)",
            "(I don't know but it smells great.)"];
        let slide3texts = new Txt(slide3namePlate, slide3convoJ, slide3convoE, null);

        let slide5namePlate = ["MATSUBA"];
        let slide5convoJ = [
            "ジャンボ餃子大好き！給食の中で一番好きなんだ。"];
        let slide5convoE = [
            "(I love Jumbo Gyoza. It's my favorite school lunch!)"];
        let slide5texts = new Txt(slide5namePlate, slide5convoJ, slide5convoE, null);

        let slide6namePlate = ["MATSUBA & XXX"];
        let slide6convoJ = [
            "いただきまーす。"];
        let slide6convoE = [
            "('Japanese term to show appreciation of the food before the meal.')"];
        let slide6texts = new Txt(slide6namePlate, slide6convoJ, slide6convoE, null);

        let slide8namePlate = ["MATSUBA"];
        let slide8convoJ = [
            "美味しい!XXXは給食の中で何が一番好き?"];
        let slide8convoE = [
            "(It's so good! What's your favorite school lunch XXX?)"];
        let slide8texts = new Txt(slide8namePlate, slide8convoJ, slide8convoE, null);

        let slide9namePlate = ["XXX"];
        let slide9convoJ = [
            "学校で一番好きな給食は…。"];
        let slide9convoE = [
            "(My favorite school lunch is...)"];
        let slide9texts = new Txt(slide9namePlate, slide9convoJ, slide9convoE, "choiceBox");

        let slide11namePlate = ["XXX", "XXX", "XXX", "MATSUBA", "MATSUBA", "XXX", "MATSUBA", "MATSUBA", "MATSUBA"];
        let slide11convoJ = [ 
            "ごちそうさまでした。", 
            "あーお腹いっぱい。餃子家で作ったことある？",
            "難しそうだけどマツバならできそう。",
            "一般的な餃子なら作ったことあるよ。",
            "時間かかるけど意外と簡単だよ。",
            "いつもは何作るの？", 
            "ご飯と炒め物かな。お母さんは仕事で遅いから,",
            "部活で忙しい妹の分も作って二人でテレビ見ながら夜ご飯食べるんだ。",
            "XXXはいつも誰と夜ご飯べるの?"];
        let slide11convoE = [
            "('Japanese term to show appreciation of the food after the meal.')", 
            "(I'm so full! Did you ever try cooking this gyoza at home?)", 
            "(I know you'd probably make it even better!)",
            "(Sure, I have made regular gyoza before.)",
            "(It takes a long time but it's not that hard.)",
            "(What do you usually cook?)", 
            "(I usually make rice with stir-fry. Since our mom comes home late from work,)",
            "(I make dinner for both me and my little sister and we have dinner together while watching TV.)", 
            "(Who do you eat your dinners with? )"];
        let slide11texts = new Txt(slide11namePlate, slide11convoJ, slide11convoE, null);

        // let slide10namePlate = ["SORA"];
        // let slide10convoJ = [ 
        //     "XXX は家族以外で、ないと生きていけないものとかある？"];
        // let slide10convoE = [
        //     "(Do you have something you can't live without besides your family?)"];
        // let slide10texts = new Txt(slide10namePlate, slide10convoJ, slide10convoE, null);

        // let slide13namePlate = ["student A", "student A", "student B", "student B"];
        // let slide13convoJ = [ 
        //     "え？あの人レズなの？そーゆーのまじわかんない。",
        //     "せっかく美人な女優さんなのにもったいない",
        //     "同じ映画に出てた俳優さんとすっごくお似合いだったのにね。",
        //     "普通に付き合っちゃえばよかったのに。"];
        // let slide13convoE = [
        //     "(What? She's a 'les'? I don't get it.)",
        //     "(She so beautiful and famous. It's such a shame.)",
        //     "(She was perfect with her co-actor in her last movie.)",
        //     "(They should have just dated. )"];
        // let slide13texts = new Txt(slide13namePlate, slide13convoJ, slide13convoE, null);

        // let slide14namePlate = ["SORA","XXX"];
        // let slide14convoJ = [ 
        //     "…",
        //     "そら, 大丈夫？"];
        // let slide14convoE = [
        //     "...",
        //     "(What's wrong Sora?)"];
        // let slide14texts = new Txt(slide14namePlate, slide14convoJ, slide14convoE, null);

        // let slide15namePlate = ["SORA", "SORA"];
        // let slide15convoJ = [ 
        //     "ん？あっなんでもないよ。大丈夫。",
        //     "ちょっと気持ち悪くなっただけ。お腹すいたのかな。"];
        // let slide15convoE = [
        //     "(What? Nothing. I'm fine.)",
        //     "(Just felt a bit nauseous. Maybe I'm just hungry.)"];
        // let slide15texts = new Txt(slide15namePlate, slide15convoJ, slide15convoE, null);

        // let slide17convoJ = [ 
        //     "好きな女の子に告白なんてできるわけない。",
        //     "どうせ私なんてキモいレズとしか思われないんだし。"];
        // let slide17convoE = [
        //     "(There is no way I can tell my friend that I like her... )",
        //     "(People will just see me as a gross 'les'.)"];
        // let slide17texts = new Txt(null, slide17convoJ, slide17convoE, null);

        // let slide20convoJ = [ 
        //     "好きな女の子に好きって伝えたい！",
        //     "でもクラスに嫌われたくない…。"];
        // let slide20convoE = [
        //     "(I'd like to tell my crush that I like her.)",
        //     "(But I'm scared of how my classmates will act.)"];
        // let slide20texts = new Txt(null, slide20convoJ, slide20convoE, null);

        //Slide(scene, nextButton, choices, texts, textInput)
        this.slides.push(new Slide(slide1scene, nextSlideButton, null, null, null )); //1
        this.slides.push(new Slide(slide2scene, nextSlideButton, null, null, null )); //2
        this.slides.push(new Slide(slide3scene, nextSlideButton, null, slide3texts, null )); //3
        this.slides.push(new Slide(slide4scene, nextSlideButton, null, null, null )); //4
        this.slides.push(new Slide(slide5scene, nextSlideButton, null, slide5texts, null )); //5
        this.slides.push(new Slide(slide6scene, nextSlideButton, null, slide6texts, null )); //6
        this.slides.push(new Slide(slide7scene, nextSlideButton, null, null, null )); //7
        this.slides.push(new Slide(slide8scene, nextSlideButton, null, slide8texts, null )); //8
        this.slides.push(new Slide(slide9scene, nextSlideButton, slide9Choices, slide9texts, null )); //9
        this.slides.push(new Slide(slide10scene, nextSlideButton, null, null, null )); //10
        this.slides.push(new Slide(slide11scene, nextSlideButton, null, slide11texts, null )); //11
        this.slides.push(new Slide(slide12scene, nextSlideButton, slide12Choices, null, null )); //12
        this.slides.push(new Slide(slide13scene, nextSlideButton, null, null, null )); //13
        this.slides.push(new Slide(slide14scene, nextSlideButton, null, null, null )); //14
        this.slides.push(new Slide(slide15scene, nextSlideButton, null, null, null )); //15
        this.slides.push(new Slide(slide16scene, nextSlideButton, null, null, null )); //16
        this.slides.push(new Slide(slide17scene, nextSlideButton, null, null, null )); //17
        this.slides.push(new Slide(slide18scene, nextSlideButton, null, null, null )); //18
        this.slides.push(new Slide(slide19scene, nextSlideButton, null, null, null )); //19
        this.slides.push(new Slide(slide20scene, nextSlideButton, null, null, null )); //20
        this.slides.push(new Slide(slide21scene, nextSlideButton, null, null, null )); //21
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