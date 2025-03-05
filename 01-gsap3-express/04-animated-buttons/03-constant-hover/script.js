const cta = document.querySelector('.cta')

// create a repeating scale tween

const scaleTween = gsap.to(cta, {scale:1, paused:true});

cta.addEventListener('mouseenter', function() {
    scaleTween.restart()
})

cta.addEventListener('mouseleave', function() {
    scaleTween.reverse()
})