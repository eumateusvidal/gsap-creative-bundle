const cta = document.querySelector('.cta')

// create a repeating scale tween

const scaleTween = gsap.to(cta, {scale:1, repeat:15, yoyo:true, paused:true});

cta.addEventListener('mouseenter', function() {
    scaleTween.restart()
})

cta.addEventListener('mouseleave', function() {
    gsap.to(cta, {scale:0.8})
})