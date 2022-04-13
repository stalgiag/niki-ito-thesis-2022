let chapter1scenes = [];
let chapter1scene6options = [];

function preload() {
    for (let i = 1; i < 10; i++) {
      chapter1scenes.push(loadImage("./assets/images/chapter1/scene" + i + ".png"));
      }

    for (let i = 1; i < 5; i++) {
      chapter1scene6options.push(loadImage("./assets/images/chapter1/scene6opt" + i + ".png"));
    }
}