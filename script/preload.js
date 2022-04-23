let optSound;
let nextSlideSound;
let nextChapSound;
let colorSwitchSound;
let talkingSound;

let nextSlideBtnIcon;
let nextChapterBtnIconn;

let chapter0scenes = [];
let chapter0slide1gif;

let chapter1scenes = [];
let chapter1scene6options = [];
let chapter1scene11options = [];
let chapter1slide16gif;

let chapter2scenes = [];
let chapter2scene9options = [];
let chapter2scene12options = [];
let chapter2slide16gif;

let chapter3scenes = [];
let chapter3scene8options = [];
let chapter3scene11options = [];
let chapter3slide16gif;

let chapter4scenes = [];
let chapter4scene8options = [];
let chapter4scene11options = [];
let chapter4slide14gif;

let minaFontR;
let minaFontB;
let corpFontB;
let BGM;
let rainSound;
let chewSound;
let btsSound;
let aniCrossSound;

function preload() {

  optSound = loadSound("./assets/audio/options.wav");
  nextSlideSound = loadSound("./assets/audio/next.wav");
  nextChapSound = loadSound("./assets/audio/complete.wav");
  colorSwitchSound = loadSound("./assets/audio/change-color.wav");
  talkingSound = loadSound("./assets/audio/mumble.flac");
  BGM = loadSound("./assets/audio/BGM.mp3");
  rainSound = loadSound("./assets/audio/rain.wav");
  chewSound = loadSound("./assets/audio/chew.wav");
  btsSound = loadSound("./assets/audio/BTSclip.mp3");
  aniCrossSound = loadSound("./assets/audio/animalCrossing.mp3");

  minaFontB = loadFont("./assets/fonts/mina-bold.ttf");
  minaFontR = loadFont("./assets/fonts/mina-regular.ttf");
  corpFontB = loadFont("./assets/fonts/corporate-bold.otf")

  nextSlideBtnIcon = loadImage("./assets/images/icons/ui-arrow.png");
  nextChapterBtnIcon = loadImage("./assets/images/icons/ui-check.png");

  chapter0slide1gif = loadImage("./assets/images/gif/screen-size-logo-gif.gif");

    for (let i = 1; i < 3; i++) {
      chapter0scenes.push(loadImage("./assets/images/chapter0/scene" + i + ".png"));
      }

    for (let i = 1; i < 5; i++) {
      chapter1scene6options.push(loadImage("./assets/images/chapter1/scene6opt" + i + ".png"));
      chapter1scene11options.push(loadImage("./assets/images/chapter1/scene11opt" + i + ".png"));
      chapter2scene9options.push(loadImage("./assets/images/chapter2/scene9opt" + i + ".png"));
      chapter2scene12options.push(loadImage("./assets/images/chapter2/scene12opt" + i + ".png"));
      chapter3scene8options.push(loadImage("./assets/images/chapter3/scene8opt" + i + ".png"));
      chapter3scene11options.push(loadImage("./assets/images/chapter3/scene11opt" + i + ".png"));
      chapter4scene8options.push(loadImage("./assets/images/chapter4/scene8opt" + i + ".png"));
      chapter4scene11options.push(loadImage("./assets/images/chapter4/scene11opt" + i + ".png"));
    }

    for (let i = 1; i < 21; i++) {
      chapter1scenes.push(loadImage("./assets/images/chapter1/scene" + i + ".png"));
      }

    for (let i = 1; i < 21; i++) {
      chapter2scenes.push(loadImage("./assets/images/chapter2/scene" + i + ".png"));
      }

    for (let i = 1; i < 21; i++) {
      chapter3scenes.push(loadImage("./assets/images/chapter3/scene" + i + ".png"));
      }

    for (let i = 1; i < 23; i++) {
      chapter4scenes.push(loadImage("./assets/images/chapter4/scene" + i + ".png"));
      }



  chapter1slide16gif = loadImage("./assets/images/chapter1/scene16-gif.gif");
  chapter2slide16gif = loadImage("./assets/images/chapter2/scene16-gif.gif");
  chapter3slide16gif = loadImage("./assets/images/chapter3/scene16-gif.gif");
  chapter4slide14gif = loadImage("./assets/images/chapter4/scene14-gif.gif");
}