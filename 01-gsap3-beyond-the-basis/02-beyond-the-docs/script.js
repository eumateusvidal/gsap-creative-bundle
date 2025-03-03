// console.clear();

// gsap.to('.fred', {scale:3, onComplete:onComplete});

// function onComplete() {
//   console.log('onComplete');
// }

console.clear();
gsap.to(".fred", {scale:3, onComplete:onComplete, onCompleteParams:["hello", 6]});

function onComplete(message, num) {
  console.log(message, num);
}

