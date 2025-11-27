
let wraper=document.querySelector('.video-wraper');



wraper.addEventListener('mousemove',(e)=>{

    console.log(e.clientX,e.clientY);
wraper.style.setProperty('--x',e.offsetX+'px');
wraper.style.setProperty('--y',e.offsetY+'px');
});



wraper.addEventListener("mouseleave", () => {
  video.pause();
  wraper.style.setProperty("--x", "-9999px");
  wraper.style.setProperty("--y", "-9999px");
});

wraper.addEventListener("mouseenter", () => video.play());
// wrapper.addEventListener("mouseleave", () => video.pause());
