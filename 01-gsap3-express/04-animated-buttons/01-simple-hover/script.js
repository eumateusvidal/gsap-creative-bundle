// const item = document.querySelector('.item');

// const tween = gsap.to('.text', {color:'white', paused:true, duration:0.35,});

// item.addEventListener('mouseenter', function () {
//     tween.play();
// })

// item.addEventListener('mouseleave', function () {
//     tween.reverse()
// })

const item = document.querySelector('.item');
gsap.defaults({duration:0.35})
const tl = gsap.timeline({paused:true}) 
    .to('.text', {color:'white', x:10})
    .to('.dot', {backgroundColor:'#F93', scale:1.5}, 0)

item.addEventListener('mouseenter', function () {
    tl.play();
})

item.addEventListener('mouseleave', function () {
    tl.reverse()
})