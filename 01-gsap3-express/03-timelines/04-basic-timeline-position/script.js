gsap.set('#demo', {scale:0.7});

let animation = gsap.timeline()
    .from('#demo', {duration:1, opacity:0})
    .from('#title', {duration:1, opacity:0, scale:0, ease:'back'})
    .from('#freds img', {y:160, stagger:0.1, duration:0.8, ease:'back' }, '+=2')
    .from('#time', {xPercent:100, duration:0.8}, '<+1')

document.getElementById('play').onclick = ()=> animation.play();
document.getElementById('pause').onclick = ()=> animation.pause();
documeq.getElementById('reverse').onclick = ()=> animation.restart();