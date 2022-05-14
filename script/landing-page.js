//change background color
let blue = "#2857e1";
let yellow = "#cee167";
let green = "#51c084";
let red = "#f67061";

let canvasIsShown = false;

document.getElementById("bg-blue").addEventListener("click", 
function(){
  colorSwitchSound.play(0,0.35,0.3);
  document.querySelector("body").style.background = blue;
});

document.getElementById("bg-yellow").addEventListener("click", 
function(){
  colorSwitchSound.play(0,0.4,0.3);
  document.querySelector("body").style.background = yellow;
});

document.getElementById("bg-green").addEventListener("click", 
function(){
  colorSwitchSound.play(0,0.45,0.3);
  document.querySelector("body").style.background = green;
});

document.getElementById("bg-red").addEventListener("click", 
function(){
  colorSwitchSound.play(0,0.5,0.3);
  document.querySelector("body").style.background = red;
});

//hide search bar on mobile screen
window.addEventListener("load",function() {
  setTimeout(function(){
      // This hides the address bar:
      window.scrollTo(0, 1);
  }, 0);
});

//landing page menu
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

  if (document.getElementById("home-nav")) {
    document.getElementById("home-nav").classList.toggle("change");
  }

  if (document.getElementById("game-nav")) {
    document.getElementById("game-nav").classList.toggle("change");
  }
};

//landing page intro animation
const intro = document.querySelector('.intro1');
  document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
      intro.classList.add('display-none');
    }, 2300);
    // how to make animation play only the first time the page is open
    // intro.classList.add('visibility-hidden');
  });    

document.getElementById("start").addEventListener("click", showCanvas);


function showCanvas() {
  BGM.loop(0,1,0.5,0.5);
  canvasIsShown = true;
  document.getElementById("canvas").style.visibility="visible";
  document.getElementById("home-page").style.visibility="hidden";
};