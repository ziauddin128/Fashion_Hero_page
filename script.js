var tl = gsap.timeline();

tl.to(".nav",{
    y:10,
    duration:0.3,
})
tl.to(".title",{
    y:10,
    duration:0.3,
})

gsap.from(".page1_text h1",{
    x:"-120px",
    duration:0.3,
    stagger:0.3,
    opacity:0
})

tl.from(".verticle_text",{
    y:"220px",
    duration:0.5,
    opacity:0
})

gsap.from(".mid img",{
    duration:2,
    opacity:0,
    scale:1.2
})

