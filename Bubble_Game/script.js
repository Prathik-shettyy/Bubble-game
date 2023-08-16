var timer = 60;
var score = 0;
var hitrn = 0;
function newHit(){
  hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;

}

function runTimer(){
 var timerint = setInterval(() => {
  if(timer > 0){
    timer--;
    document.querySelector("#timerval").textContent = timer;
  }
  else{
    clearInterval(timerint);
    document.querySelector("#pbtm").innerHTML =`<h1>Game Over<h1>`;
  }
   
 }, 1000);
}

function makeBubble(){
  var clutter = "";

for(var i = 1; i <= 168; i++){
  var rd = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rd}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
    
}

function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function(dets){
  var clickednum = (Number(dets.target.textContent));
  if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    newHit(); 
  }
})
  makeBubble();
  newHit();
  runTimer(); 