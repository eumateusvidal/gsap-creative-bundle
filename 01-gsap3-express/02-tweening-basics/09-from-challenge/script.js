let tween = gsap.to('.green', { duration:3, x:400, ease:'elastic', paused:true});

document.getElementById('play').onclick = ()=> tween.play();
document.getElementById('pause').onclick = ()=> tween.pause();
document.getElementById('reverse').onclick = ()=> tween.reverse();
document.getElementById('restart').onclick = ()=> tween.restart();