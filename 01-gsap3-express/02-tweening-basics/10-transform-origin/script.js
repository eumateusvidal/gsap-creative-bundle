const t = gsap.to('.truck', {
  transformOrigin:'65px 160px',
  rotation:-40,
  repeat:1, 
  yoyo:true});

demo.addEventListener('click', ()=> t.restart())