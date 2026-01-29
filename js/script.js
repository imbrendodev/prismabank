gsap.registerPlugin(ScrollTrigger);

gsap.from("header", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from("#hero .container-info > *", {
  duration: 1,
  opacity: 0,
  y: 30,
  stagger: 0.2,
  ease: "power2.out",
  delay: 0.5
});

gsap.fromTo(
  "#hero .container-info > *, .bank-card",
  { opacity: 1, y: 0, filter: "blur(0px)" },
  {
    opacity: 0,
    y: -50,
    filter: "blur(8px)",
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 2
    }
  }
);

gsap.utils.toArray(".btn-02, .btn-border-02, .btn-border-01, .btn-01").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power1.out" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power1.out" });
  });
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#card-bank",
    start: "top top",
    end: "+=2200",
    scrub: 1.3,
    pin: true,
    anticipatePin: 1
  }
});

tl.from(".card-center", {
  y: 320,
  scale: 0.65,
  opacity: 0
}, 0);

tl.from(".card-left", {
  x: -900,
  rotate: -45,
  opacity: 0
}, 0);

tl.from(".card-right", {
  x: 900,
  rotate: 45,
  opacity: 0
}, 0);

tl.to(".card-left", {
  x: -360,
  rotate: -12,
  scale: 0.9
}, 0.45);

tl.to(".card-right", {
  x: 360,
  rotate: 12,
  scale: 0.9
}, 0.45);

tl.to(".card-center", {
  scale: 1.05
}, 0.45);

tl.to(".card-left", {
  x: -520,
  opacity: 0.4,
  filter: "blur(4px)"
}, 0.85);

tl.to(".card-right", {
  x: 520,
  opacity: 0.4,
  filter: "blur(4px)"
}, 0.85);

tl.to(".card-center", {
  rotateY: 12,
  rotateZ: -1,
  transformPerspective: 1000
}, 1.1);

tl.to(".card-bank", {
  y: -220,
  opacity: 0
}, 1.5);

const infoTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#information",
    start: "top 85%",
    end: "top 15%",
    scrub: 2.5
  }
});

infoTl.from(".container-information-imagem img", {
  x: -180,
  rotate: -6,
  scale: 0.85,
  opacity: 0,
  ease: "power2.out"
}, 0);

infoTl.from(".container-title-info h2", {
  y: 40,
  opacity: 0,
  ease: "power2.out"
}, 0.25);

infoTl.from(".container-list ul li", {
  x: 50,
  opacity: 0,
  stagger: 0.18,
  ease: "power2.out"
}, 0.45);

infoTl.from(".container-btn-information", {
  scale: 0.9,
  opacity: 0,
  ease: "power2.out"
}, 0.9);

gsap.to(".container-information-imagem img", {
  y: -12,
  repeat: -1,
  yoyo: true,
  duration: 5,
  ease: "sine.inOut"
});


gsap.fromTo(
  "#information .container-information > *",
  { filter: "blur(0px)", y: 0 },
  {
    filter: "blur(8px)",
    y: -40,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#information",
      start: "bottom 75%",
      end: "bottom top",
      scrub: 2
    }
  }
);

gsap.fromTo(
  ".container-information-imagem img",
  { filter: "blur(0px)" },
  {
    filter: "blur(10px)",
    scrollTrigger: {
      trigger: "#information",
      start: "bottom 75%",
      end: "bottom top",
      scrub: 2
    }
  }
);


gsap.registerPlugin(ScrollTrigger);

const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    end: "top 30%",
    scrub: 2
  }
});

aboutTl.from(".container-about-info h2", {
  y: 80,
  opacity: 0,
  ease: "power2.out"
}, 0);

aboutTl.from(".container-about-info p", {
  y: 60,
  opacity: 0,
  ease: "power2.out"
}, 0.25);

aboutTl.from(".container-about-logo img", {
  scale: 0.75,
  opacity: 0,
  ease: "power2.out"
}, 0);


gsap.fromTo(
  "#about .container-about > *",
  { filter: "blur(0px)", y: 0 },
  {
    filter: "blur(10px)",
    y: -40,
    ease: "none",
    scrollTrigger: {
      trigger: "#about",
      start: "bottom 70%",
      end: "bottom top",
      scrub: 2.5
    }
  }
);


gsap.to("body", {
  ease: "power2.out",
  duration: 0.9
});
