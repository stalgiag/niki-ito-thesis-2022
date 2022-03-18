let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  canvas.parent("canvas");

}

function draw() {
  background(230, 248, 166);
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

function toggleMenu(){
  x = document.getElementById("burger");
  y = document.getElementById("exit");
  if (x.style.display === "none" & y.style.display === "block") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block"
  }

  document.getElementById("nav").classList.toggle("change")
}

//hide search bar on mobile screen
window.addEventListener("load",function() {
  setTimeout(function(){
      // This hides the address bar:
      window.scrollTo(0, 1);
  }, 0);
});