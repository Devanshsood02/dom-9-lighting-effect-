
let wraper=document.querySelector('.video-wraper');

let video=document.querySelector('video');

wraper.addEventListener('mousemove',(e)=>{

    console.log(e.clientX,e.clientY);
wraper.style.setProperty('--x',e.offsetX+'px');
wraper.style.setProperty('--y',e.offsetY+'px');
});




wraper.addEventListener("mouseenter", () =>{

video.muted=false; 

 video.play()});




wraper.addEventListener("mouseleave", () => {
  video.pause();
  wraper.style.setProperty("--x", "-9999px");
  wraper.style.setProperty("--y", "-9999px");
});



// now adding the matrix effect to the text 



const h1= document.querySelector('h1');
const character="さねみよりほくたせきえま";

const text=h1.innerText;
let iteration=0;
let interval=null;

function random(){

const str= text.split("").map((char,index)=>{

  if(index<iteration){
    return char;
  }

  return character.split("")[Math.floor(Math.random()*13)]
}).join("");


h1.innerText=str;
iteration +=0.1;

 if(iteration>=text.length){
        clearInterval(intervall);
    }



}// random function ends here


h1.addEventListener('mouseenter',function(){
  iteration=0;
  clearInterval(interval);
interval=setInterval(random,30);

})
