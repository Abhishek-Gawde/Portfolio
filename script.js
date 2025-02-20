let tl = gsap.timeline();

function video() {
  let projectBox = document.querySelector(".project-box1");
  let projectBox2 = document.querySelector("#project-box2");
  let video = document.querySelector(".project-box1 video");
  let video2 = document.querySelector("#project-box2 video");
  projectBox.addEventListener("mouseenter", function () {
    video.style.display = "block";
  });

  projectBox.addEventListener("mouseleave", function () {
    video.style.display = "none";
  });

  projectBox2.addEventListener("mouseenter", function () {
    video2.style.display = "block";
  });

  projectBox2.addEventListener("mouseleave", function () {
    video2.style.display = "none";
  });
}
video();

function scrollerStart() {
  function scroller() {
    let skill1 = document.querySelector("#skills-box1");
    let h1 = document.querySelector("#skills-box1 h1");
    let scroller = document.querySelector("#skills-box1 .skills-scroller");

    skill1.addEventListener("mouseenter", function () {
      h1.style.display = "none";
      scroller.style.opacity = "1";
    });

    skill1.addEventListener("mouseleave", function () {
      h1.style.display = "block";
      scroller.style.opacity = "0";
    });
  }
  function scroller1() {
    let skill1 = document.querySelector("#skills-box2");
    let h1 = document.querySelector("#skills-box2 h1");
    let scroller = document.querySelector("#skills-box2 .skills-scroller");

    skill1.addEventListener("mouseenter", function () {
      h1.style.display = "none";
      scroller.style.opacity = "1";
    });

    skill1.addEventListener("mouseleave", function () {
      h1.style.display = "block";
      scroller.style.opacity = "0";
    });
  }

  function scroller2() {
    let skill1 = document.querySelector("#skills-box3");
    let h1 = document.querySelector("#skills-box3 h1");
    let scroller = document.querySelector("#skills-box3 .skills-scroller");

    skill1.addEventListener("mouseenter", function () {
      h1.style.display = "none";
      scroller.style.opacity = "1";
    });

    skill1.addEventListener("mouseleave", function () {
      h1.style.display = "block";
      scroller.style.opacity = "0";
    });
  }

  function scroller3() {
    let skill1 = document.querySelector("#skills-box4");
    let h1 = document.querySelector("#skills-box4 h1");
    let scroller = document.querySelector("#skills-box4 .skills-scroller");

    skill1.addEventListener("mouseenter", function () {
      h1.style.display = "none";
      scroller.style.opacity = "1";
    });

    skill1.addEventListener("mouseleave", function () {
      h1.style.display = "block";
      scroller.style.opacity = "0";
    });
  }

  scroller();
  scroller1();
  scroller2();
  scroller3();
}

scrollerStart();

function loaderAnimation() {
  function breakText() {
    let h1 = document.querySelector(".loader-div h1");
    let h1Text = h1.textContent;

    let splittedText = h1Text.split("");

    let clutter = "";

    splittedText.forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });

    h1.innerHTML = clutter;
  }

  breakText();

  tl.from(".loader-div h1 span", {
    y: 70,
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.1
  });

  tl.from(".loader-div h2", {
    y: 70,
    opacity: 0,
    duration: 0.5,
    delay: 0.3
  });

  tl.to(".loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2
  }); 
  
  tl.from(".home-page", {
    y: 5,        
    delay: 0.3,
    duration: 2,    
    opacity: 0,
    ease: "sine.out"
  });

  tl.to(".loader", {
    display: "none"
  });  
}

loaderAnimation();

function scrollTrigger() {
  gsap.from(".scroller", {
    y: 80,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".scroller",
      scroll: "body", 
      start: "top 80%"     
    }
  })

  gsap.from(".projects h1", {
    x: -80, 
    duration: 1, 
    opacity: 0, 
    scrollTrigger: {
      trigger: ".projects h1", 
      scroll: "body",
      start: "top 70%"      
    }
  })

  gsap.from(".project-box1", {
    y: 80, 
    duration: 1.5, 
    opacity: 0, 
    scrollTrigger: {
      trigger: ".project-box1", 
      scroll: "body",
      start: "top 70%"          
    }
  })

  gsap.from(".description1", {
    y: 80, 
    duration: 1.5, 
    opacity: 0, 
    scrollTrigger: {
      trigger: ".description1", 
      scroll: "body",
      start: "top 70%"          
    }
  })
  
  gsap.from(".project-box3", {
    y: 80, 
    duration: 1.5, 
    opacity: 0, 
    scrollTrigger: {
      trigger: ".project-box3", 
      scroll: "body",
      start: "top 70%"          
    }
  })

  gsap.from(".description2", {
    y: 80, 
    duration: 1.5, 
    opacity: 0, 
    scrollTrigger: {
      trigger: ".description2", 
      scroll: "body",
      start: "top 70%"          
    }
  })

  gsap.from(".skills h1", {
    y: 80, 
    duration: 1, 
    opacity: 0, 
    scrollTrigger: {
      trigger: ".skills h1", 
      scroll: "body",
      start: "top 75%"      
    }
  })

  gsap.from(".skills-box", {
    y: 80, 
    duration: 2, 
    opacity: 0,
    stagger: 0.3, 
    scrollTrigger: {
      trigger: ".skills-box", 
      scroll: "body",
      start: "top 75%"      
    }
  })

  gsap.from(".about-me h1", {
    y: 80, 
    duration: 1, 
    opacity: 0, 
    scrollTrigger: {
      trigger: ".about-me h1", 
      scroll: "body",
      start: "top 75%"      
    }
  })

  gsap.from(".left-box", {
    x: -80, 
    duration: 2, 
    opacity: 0, 
    scrollTrigger: {
      trigger: ".left-box", 
      scroll: "body",
      start: "top 70%"      
    }
  })

  gsap.from(".right-top", {
    x: 80, 
    duration: 2, 
    opacity: 0, 
    scrollTrigger: {
      trigger: ".right-top", 
      scroll: "body",
      start: "top 70%"      
    }
  })

  gsap.from(".right-bottom", {
    x: 80, 
    duration: 2, 
    opacity: 0, 
    scrollTrigger: {
      trigger: ".right-bottom", 
      scroll: "body",
      start: "top 95%"      
    }
  })

  gsap.from(".about-box2-bottom", {
    y: 80, 
    duration: 2, 
    opacity: 0, 
    scrollTrigger: {
      trigger: ".about-box2-bottom", 
      scroll: "body",
      start: "top 75%"      
    }
  })
}

scrollTrigger();



 



