let nextSlideBtnIcon;
let nextChapterBtnIconn;

let chapter1scenes = [];
let chapter1scene6options = [];
let chapter1scene11options = [];

function preload() {
  nextSlideBtnIcon = loadImage("./assets/images/icons/ui-arrow.png");
  nextChapterBtnIcon = loadImage("./assets/images/icons/ui-check.png");

    for (let i = 1; i < 21; i++) {
      chapter1scenes.push(loadImage("./assets/images/chapter1/scene" + i + ".png"));
      }

    for (let i = 1; i < 5; i++) {
      chapter1scene6options.push(loadImage("./assets/images/chapter1/scene6opt" + i + ".png"));
    }

    for (let i = 1; i < 5; i++) {
      chapter1scene11options.push(loadImage("./assets/images/chapter1/scene11opt" + i + ".png"));
    }
}