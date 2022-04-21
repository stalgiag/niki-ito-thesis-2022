let canvas;
let chapters = [];
let currentChapterIndex = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  canvas.parent("canvas");

  chapters.push(new Chapter0());
  chapters.push(new Chapter1());
}

function draw() {
  chapters[currentChapterIndex].display();
}

function mousePressed() {
  chapters[currentChapterIndex].mousePressed();
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
// function touchStarted(){
//   return false;
// }

// function touchMoved(){
//   return false;
// }

// function touchEnded(){
//   return false;
// }
