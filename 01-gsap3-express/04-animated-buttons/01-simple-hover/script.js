// const item = document.querySelector('.item');

// const tween = gsap.to('.text', {color:'white', paused:true, duration:0.35,});

// item.addEventListener('mouseenter', function () {
//     tween.play();
// })

// item.addEventListener('mouseleave', function () {
//     tween.reverse()
// })

const items = document.querySelectorAll('.item');
gsap.defaults({duration:0.35})

items.forEach(function(item, index){
    const tl = gsap.timeline({paused:true}) 
    .to(item.querySelector('.text'), {color:'white', x:10, scale:1.3, transformOrigin: "left center"})
    .to(item.querySelector('.dot'), {backgroundColor:'#F93', scale:1.5}, 0)

item.addEventListener('mouseenter', () => tl.play())
item.addEventListener('mouseleave', () => tl.reverse())
})




// const tl = gsap.timeline({paused:true}) 
//     .to('.text', {color:'white', x:10})
//     .to('.dot', {backgroundColor:'#F93', scale:1.5}, 0)

// // item.addEventListener('mouseenter', function () {
// //     tl.play();
// // })

// // item.addEventListener('mouseleave', function () {
// //     tl.reverse()
// // })

// item.addEventListener('mouseenter', () => tl.play())

// item.addEventListener('mouseleave', () => tl.reverse())

