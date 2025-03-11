gsap.registerPlugin(GSDevTools, SplitText)
  let split
  let animation = gsap.timeline({})

  function init() {
    gsap.set('wrapper', {autoAlpha:1})
    split = new SplitText('h1', {tipe:'chars'})
    GSDevTools.create({animation:animation})
  }

window.addEventListener('load', init);