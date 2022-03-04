var btns= document.getElementsByClassName('btn');
var playerScore=document.getElementById('playerScore');
var compScore=document.getElementById('compScore');
var phand=document.getElementById('playerHand');
var chand=document.getElementById('compHand');
let game_sound=new Audio('Game_Audio.mp3');
let timerOne=null;
let timerTwo=null;
let roundBoard=document.getElementById('round');
let result=document.getElementById('result');
let round=1;
roundBoard.innerText=`Round ${round}`;
let pscore=0;
let cscore=0;
let play=true;

game_sound.loop=true;
game_sound.play();
Object.keys(btns).forEach(btnKey=>{
  btns[btnKey].addEventListener('click',function(){
    this.classList.toggle('active');
    setTimeout(()=>{
      this.classList.toggle('active');
    },100);
    Object.keys(btns).forEach(key=>{
      btns[key].disabled=true;
    });
    var value= Number(this.value);
    var random= randomComp();
   // console.log("Value is "+value);
   // console.log('Random is '+random);
    removeShaking();
    initialiseShaking();
    timerOne=setTimeout(()=>{
      if(value===1)
      {
        phand.src="PRock.png";
      }
      else if(value===2)
      {
        phand.src="PPaper.png";
      }
      else if(value===3)
      {
        phand.src="PScissor.png";
      }
      if(random===1)
      {
          chand.src="CRock.png";
      }
      else if(random===2)
      {
        chand.src="CPaper.png";
      }
      else if(random===3)
      {
        chand.src="CScissor.png";
      }
      
      //Update score and tell who wins
      if(random===value)
      {
        //console.log('draw');
        result.innerText="Draw!!!"
      }
      else if((value===1&&random===3)||(value===2&&random===1)||(value===3&&random===2))
      {
       // console.log('player wins value is'+ value);
        pscore++;
        playerScore.innerText=pscore;
        result.innerText="Player Wins!!!"
      }
      else{
     // console.log("comp wins value is"+random);
        cscore++;
        compScore.innerText=cscore;
        result.innerText="Comp Wins!!!";
      }
     // result.classList.toggle('pop');
      
      timerTwo=setTimeout(()=>{
      //  result.classList.toggle('pop');
        chand.src='CRock.png';
        phand.src='PRock.png';
        Object.keys(btns).forEach(key=>{
          btns[key].disabled=false;
        });
        result.innerText=null;
        removeShaking();
        round++;
        roundBoard.innerText=`Round ${round}`;
      },1500);
      
      
    },1000);
  });
});

let audioBtn=document.getElementById("audiobtn");
let exit = document.getElementById('exit');
audioBtn.addEventListener('click',()=>{
  if(play){
   audioBtn.childNodes[0].src="Resume.png";
   game_sound.pause();
   play=false;
  }
  else{
    audioBtn.childNodes[0].src="Pause.png";
   game_sound.play();
   play=true;
  }
  
});

exit.addEventListener('click',()=>{
  document.location.replace('/index.html');
})












function removeShaking(){
  clearTimeout(timerOne);
  clearTimeout(timerTwo);
  timeOne=timerTwo=null;
  phand.classList.remove('animatePlayer');
  chand.classList.remove('animateComp');
}
function initialiseShaking(){
  phand.classList.add('animatePlayer');
  chand.classList.add('animateComp');
}

function randomComp(){
  return Math.floor(Math.random()*3)+1;
}
