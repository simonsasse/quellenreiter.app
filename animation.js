gsap.registerPlugin(ScrollTrigger);
    
gsap.from("#quellenreiter", {
    scrollTrigger:{
        scrub:true,
        pin: true,
        trigger: "#quellenreiter",
        start: "center 50%",
        end: "top 0%",
        toggleAction: "restart pause reverse pause"
    },
    duration:1, delay: 10, alpha:0 });
    
    gsap.to("#logo", {
        scrollTrigger:{
            scrub:true,
            pin: true,
            trigger: "#quellenreiter",
            start: "center 50%",
            end: "top 0%",
            toggleAction: "restart pause reverse pause"
        },
        duration:1, delay: 10, alpha:0});
        

// $('.button').mouseenter(
//    function() {
//       gsap.to( $(this),{ duration: 0.001, color: "black" } );
//    }
// );
// $('.button').mouseleave(
//    function() {
//       gsap.to( $(this),{ duration: 0.01, color: "lightblue" } );
//    }
// );


// const img = document.querySelector("#logo");
// const hover = gsap.to("#logo", {
//   rotation: 360,
//   duration: 1,
//   paused: true,
//   ease: "ease-in-out"
// });

// img.addEventListener("mouseenter", () => hover.play());
// img.addEventListener("mouseleave", () => hover.reverse());

gsap.to(
    "#scroll_text",
    {
        scrollTrigger: {
            trigger: "#scroll_text",
            toggleAction: "restart pause pause pause",
            end: "top center"
        },
        duration: 1,
        alpha:0.2,
        y:"10%"
    }
).repeat(-1).yoyo(true);

// gsap.to("#home_button",{
//     scrollTrigger: {
//         scrub: true,
//         trigger: ".start",
//         start: "top 50%",
//         end: "top bottom",
//         toggleAction: "play pause reverse pause"
//     },
//     color: "lightblue",
//     rotation: 90});

// gsap.to("#concert_button",{
//     scrollTrigger: {
//         scrub: true,
//         trigger: "#app_div",
//         start: "top 50%",
//         end: "top 32%",
//         toggleAction: "play pause reverse pause"
//     },
//     color: "black",
//     rotation:-90});
// gsap.to("#concert_button",{
//     scrollTrigger: {
//         scrub: true,
//         trigger: "#app_div",
//         start: "top 50%",
//         end: "top 32%",
//         toggleAction: "play pause reverse pause"
//     },
//     color: "lightblue",
//     rotation:-90});


gsap.from(".date",{
    scrollTrigger: {
        scrub: true,
        trigger: "#dates",
        start: "top 70%",
        end: "top 40%"
    },
    stagger: 1.5,
    duration: 5,
    scale:0.5,
    alpha: 0});
 
// gsap.to("#fakenews_div_button",{
//     scrollTrigger: {
//         scrub: true,
//         trigger: "#fakenews_div",
//         start: "top 50%",
//         end: "top 32%",
//         toggleAction: "play reverse play reverse"
//     },
//     color: "black",
//     rotation:-90});
// gsap.to("#concert_button",{
//     scrollTrigger: {
//         scrub: true,
//         trigger: "#fakenews_div",
//         start: "top 50%",
//         end: "top 32%",
//         toggleAction: "play reverse play reverse"
//     },
//     color: "lightblue",
//     rotation:0});

    gsap.from(".link",{
        scrollTrigger: {
            scrub: true,
            trigger: "#fakenews_div",
            start: "top 90%",
            end: "top 40%"
        },
        stagger: 1,
        duration: 2,
        scale:0.2,
        alpha: 0});

// gsap.to("#impressum_button",{
//     scrollTrigger: {
//         scrub: true,
//         trigger: "#impressum",
//         start: "top 50%",
//         end: "top 40%",
//         toggleAction: "play reverse play reverse"
//     },
//     color: "black",
//     rotation:-90});
// gsap.to("#fakenews_div_button",{
//     scrollTrigger: {
//         scrub: true,
//         trigger: "#impressum",
//         start: "top 50%",
//         end: "top 32%",
//         toggleAction: "play reverse play reverse"
//     },
//     color: "lightblue",
//     rotation:0});
