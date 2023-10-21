// GSAP ANIMATIONS

var tl = gsap.timeline()

tl.from("#nav", {
    opacity: 0,
    delay: .3
})

tl.from("#nav-left, #nav-right a", {
    // delay: .3,
    y: -20,
    // duration: .7,
    opacity: 0,
    stagger: .1,
})

// tl.from("#nav border", {
//     opacity: 0
// })\

tl.from("#heading-1, #heading-2 p", {
    y: 40,
    opacity: 0,
    stagger: .09

})

tl.from("#hero-footer", {
    y: 50,
    opacity: 0,
})

tl.to("#hero-footer", {
    y:-5,
    repeat: -1,
    yoyo: true,
    // duration: .4
})

gsap.to("#heading", {
    scale: 1.06,
    // transform: translateX(50%),
    // duration: .2,
    // x: 80,
    scrollTrigger:{
        trigger: "#heading",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 30%",
        scrub: 1,
        // pin: true
    }
})


gsap.from("#about-box-left", {
    x: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: "#about-box-left",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 60%",
        scrub: 2,
    }
})

gsap.from("#about-right-heading", {
    x: -200,
    opacity: 0,
    scrollTrigger: {
        trigger: "#about-right-heading",
        scroller: "body",
        scrub: 1,
        // markers: true,
        end: "top 90%",
        start: "top 90%",
        // scrub: 3,

    }
})

gsap.from("#about-box-left p", {
    y: 30,
    opacity: 0,
    staagger: true,
    scrollTrigger:{
        trigger: "#about-box-left p",
        scroller: "body",
        // markers: true,
        start: "top 35%",
        end: "top 35%",
        scrub: 2,
        delay: 1,
    }
})