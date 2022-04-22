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
            "Hey XXX! I haven't seen you in so long! Time flew by so quickly.", 
            "Yeah. By the time you know it, it's the first day of school again."];
        let slide3texts = new Txt(slide3namePlate, slide3convoJ, slide3convoE, null);

        let slide5namePlate = ["XXX", "SORA", "SORA", "SORA"];
        let slide5convoJ = [
            "そら、入部したい部活決めた？", "私はダンスクラブに入部したいんだ。", 
            "少し恥ずかしいんだけど、でもダンスしてると悩みとか忘れて楽になれるんだよね。", 
            "XXXは何部に興味ある?"];
        let slide5convoE = [
            "Hey Sora, did you decide what club to join?", 
            "I want to join the dance club.", 
            "I'm a bit embarrassed but while I am dancing, all my worries go away.", 
            "Which club activities are you interested in XXX?"];
        let slide5texts = new Txt(slide5namePlate, slide5convoJ, slide5convoE, null);

        let slide6namePlate = ["XXX"];
        let slide6convoJ = [
            "興味がある部活は…。"];
        let slide6convoE = [
            "The club activity I am interested in is..."];
        let slide6texts = new Txt(slide6namePlate, slide6convoJ, slide6convoE, "choiceBox");


        let slide8namePlate = ["SORA"];
        let slide8convoJ = [
            "見てみて。これ私の犬のコトリ。"];
        let slide8convoE = [
            "Look look! This is my puppy, Kotori."];
        let slide8texts = new Txt(slide8namePlate, slide8convoJ, slide8convoE, null);

        let slide9namePlate = ["SORA", "SORA", "XXX"];
        let slide9convoJ = [ 
            "一年前に飼った保護犬なんだけど今は六才ぐらいなの。", 
            "本当大好き。小鳥無しだったら生きていけないわー。",
            "かわいいね！いい写真。"];
        let slide9convoE = [
            "I rescued him from the shelter a year ago but now he's about 6 years old.", 
            "I love him so much. I wouldn't know what to do without him.", 
            "Wow he's so cute. That picture is great."];
        let slide9texts = new Txt(slide9namePlate, slide9convoJ, slide9convoE, null);

        let slide10namePlate = ["SORA"];
        let slide10convoJ = [ 
            "XXX は家族以外で、ないと生きていけないものとかある？"];
        let slide10convoE = [
            "Do you have something you can't live without besides your family?"];
        let slide10texts = new Txt(slide10namePlate, slide10convoJ, slide10convoE, null);

        let slide11namePlate = ["XXX"];
        let slide11convoJ = [
            "辛い時の支えとなるものは…。"];
        let slide11convoE = [
            "What helps me during tough times..."];
        let slide11texts = new Txt(slide11namePlate, slide11convoJ, slide11convoE, "choiceBox");

        let slide13namePlate = ["student A", "student A", "student B", "student B"];
        let slide13convoJ = [ 
            "え？あの人レズなの？そーゆーのまじわかんない。",
            "せっかく美人な女優さんなのにもったいない",
            "同じ映画に出てた俳優さんとすっごくお似合いだったのにね。",
            "普通に付き合っちゃえばよかったのに。"];
        let slide13convoE = [
            "What? She's a 'les'? I don't get it.",
            "She so beautiful and famous. It's such a shame.",
            "She was perfect with her co-actor in her last movie.",
            "They should have just dated."];
        let slide13texts = new Txt(slide13namePlate, slide13convoJ, slide13convoE, null);

        let slide14namePlate = ["SORA","XXX"];
        let slide14convoJ = [ 
            "…",
            "そら, 大丈夫？"];
        let slide14convoE = [
            "...",
            "What's wrong Sora?"];
        let slide14texts = new Txt(slide14namePlate, slide14convoJ, slide14convoE, null);

        let slide15namePlate = ["SORA", "SORA"];
        let slide15convoJ = [ 
            "ん？あっなんでもないよ。大丈夫。",
            "ちょっと気持ち悪くなっただけ。お腹すいたのかな。"];
        let slide15convoE = [
            "What? Nothing. I'm fine.",
            "Just felt a bit nauseous. Maybe I'm just hungry."];
        let slide15texts = new Txt(slide15namePlate, slide15convoJ, slide15convoE, null);

        let slide17convoJ = [ 
            "好きな女の子に告白なんてできるわけない。",
            "どうせ私なんてキモいレズとしか思われないんだし。"];
        let slide17convoE = [
            "There is no way I can tell my friend that I like her...",
            "People will just see me as a gross 'les'."];
        let slide17texts = new Txt(null, slide17convoJ, slide17convoE, null);

        let slide20convoJ = [ 
            "好きな女の子に好きって伝えたい！",
            "でもクラスに嫌われたくない…。"];
        let slide20convoE = [
            "I'd like to tell my crush that I like her.",
            "But I'm scared of how my classmates will act."];
        let slide20texts = new Txt(null, slide20convoJ, slide20convoE, null);

        //Slide(scene, nextButton, choices, texts, textInput)
        this.slides.push(new Slide(slide1scene, nextSlideButton, null, null, null )); //1
        this.slides.push(new Slide(slide2scene, nextSlideButton, null, null, null )); //2
        this.slides.push(new Slide(slide3scene, nextSlideButton, null, slide3texts, null )); //3
        this.slides.push(new Slide(slide4scene, nextSlideButton, null, null, null )); //4
        this.slides.push(new Slide(slide5scene, nextSlideButton, null, slide5texts, null )); //5
        this.slides.push(new Slide(slide6scene, nextSlideButton, slide6Choices, slide6texts, null )); //6
        this.slides.push(new Slide(slide7scene, nextSlideButton, null, null, null )); //7
        this.slides.push(new Slide(slide8scene, nextSlideButton, null, slide8texts, null )); //8
        this.slides.push(new Slide(slide9scene, nextSlideButton, null, slide9texts, null )); //9
        this.slides.push(new Slide(slide10scene, nextSlideButton, null, slide10texts, null )); //10
        this.slides.push(new Slide(slide11scene, nextSlideButton, slide11Choices, slide11texts, null )); //11
        this.slides.push(new Slide(slide12scene, nextSlideButton, null, null, null )); //12
        this.slides.push(new Slide(slide13scene, nextSlideButton, null, slide13texts, null )); //13
        this.slides.push(new Slide(slide14scene, nextSlideButton, null, slide14texts, null )); //14
        this.slides.push(new Slide(slide15scene, nextSlideButton, null, slide15texts, null )); //15
        this.slides.push(new Slide(slide16scene, nextSlideButton, null, null, null )); //16
        this.slides.push(new Slide(slide17scene, nextSlideButton, null, slide17texts, null )); //17
        this.slides.push(new Slide(slide18scene, nextSlideButton, null, null, null )); //18
        this.slides.push(new Slide(slide19scene, nextSlideButton, null, null, null )); //19
        this.slides.push(new Slide(slide20scene, nextSlideButton, null, slide20texts, null )); //20
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