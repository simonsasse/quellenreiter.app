gsap.registerPlugin(ScrollTrigger);

// LOGO and TITLE
gsap.from("#quellenreiter", {
    scrollTrigger:{
        scrub:true,
        pin: true,
        trigger: "#quellenreiter",
        start: "center 50%",
        end: "top 0%",
        toggleAction: "restart pause reverse pause"
    },
    duration:1, delay: 10, alpha:0, color: "#F5DF4D", scale: 0.1, ease: "back"});
    
    gsap.to("#logo", {
        scrollTrigger:{
            scrub:true,
            pin: true,
            trigger: "#quellenreiter",
            start: "center 50%",
            end: "top 0%",
            toggleAction: "restart pause reverse pause"
        },
        duration:1, delay: 10, alpha:0, scale: 0.1});

// QUICK FACTS
gsap.from(".date",{
    scrollTrigger: {
        scrub: true,
        trigger: "#dates",
        start: "top 90%",
        toggleAction: "restart pause reverse pause",
        end: "top 45%"
    },
    stagger: 1.5,
    duration: 5,
    scale:0.5,
    alpha: 0,
    ease: "back"});


// INFO SECTION
gsap.from(
    "ul.text",
    {
        scrollTrigger: {
            scrub: true,
            trigger: "ul.text",
            toggleActions: "play pause reverse reset",
            start: "top 95%",
            end: "top 60%"
        },
        duration: 2,
        alpha: 0,
        scale: 0,
        ease: "back"
    }
)
// SOCIAL BUTTONS
gsap.from(
    ".social_li",
    {
        scrollTrigger: {
            scrub: true,
            trigger: ".social_li",
            toggleAction: "restart pause reverse pause",
            start: "top 95%",
            end: "top 70%"
        },
        stagger: 1,
        duration: 5,
        scale:0.5,
        alpha: 0,
        ease: "back"
    }
)

// PEOPLE ANIMATION
gsap.from(
    ".vertical",
    {
        scrollTrigger: {
            scrub: true,
            trigger: ".vertical",
            toggleAction: "restart pause pause pause",
            start: "top 120%",
            end: "top 60%"
        },
        stagger: 1,
        duration: 5,
        scale:0.5,
        x: "100%",
        alpha: 0,
        ease: "back"
    }
)


gsap.from(".avatar",{
    scrollTrigger: {
        scrub: true,
        trigger: ".avatar",
        start: "top 90%",
        toggleAction: "restart pause pause pause",
        end: "top 40%"
    },
    duration: 2,
    scale:0.2,
    alpha: 0,
    ease: "back"})
