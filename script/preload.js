let chapter1slideImages = [];
let chapter1slide6options = [];

function preload() {
    for (let i = 1; i < 10; i++) {
        chapter1slideImages.push(loadImage("./assets/images/chapter1/slide" + i + ".png"));
      }

    for (let i = 1; i < 5; i++) {
    chapter1slide6options.push(loadImage("./assets/images/chapter1/slide6opt" + i + ".png"));
    }
}