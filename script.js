var tl = gsap.timeline();

tl.from("#nav",{
    y:"-40%",
    duration:1,
    opacity: 0,
    ease: "Expo.easeInOut"
});

tl.from("#main h1",{
    x:"-40%",
    duration:2,
    opacity: 0,
    ease: "Expo.easeIn"
});

tl.from("#boi",{
    y:"40%",
    duration:2,
    opacity: 0,
    // y: 50,
    ease: "power2.out"
});

