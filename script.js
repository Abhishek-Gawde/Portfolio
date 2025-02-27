function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  lerp: 0.05
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotive(); 


let tl = gsap.timeline();
let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let heading = document.querySelector(".heading");
let para = document.querySelector(".para");
let scroller_h1 = document.querySelector(".scroller .moving-text");
let project1 = document.querySelector(".project-box .project-box1");
let project2 = document.querySelector(".project-box .project-box3");
let description2 = document.querySelector(".description2");
let description1 = document.querySelector(".description1");
let skills_container = document.querySelector(".skills-container");
let about_me = document.querySelector(".about-box");
let about_me2 = document.querySelector(".about-box2");
let footer = document.querySelector("footer");
let leftBox = document.querySelector(".about-inside-box .left-box");
let rightTop = document.querySelector(".right-box .right-top");
let rightBottom = document.querySelector(".right-box .right-bottom");
let aboutBox2 = document.querySelector(".about-box2 .about-box2-bottom");


function shery1() {
  if(window.innerWidth <= 450) {
    return;
  }

  Shery.makeMagnet(".options .toggle" , {  
    ease: "cubic-bezier(0.22, 1, 0.36, 1)",
    duration: 1,
  });
  
  Shery.makeMagnet(".projects h1" , {  
    ease: "cubic-bezier(0.22, 1, 0.36, 1)",
    duration: 1,
  });
  
  Shery.makeMagnet(".skills h1" , {  
    ease: "cubic-bezier(0.22, 1, 0.36, 1)",
    duration: 1,
  });
  
  Shery.makeMagnet(".about-me h1" , {  
    ease: "cubic-bezier(0.22, 1, 0.36, 1)",
    duration: 1,
  });

}
shery1();

function changeCss() {
  let link = document.getElementById("change");


  gsap.to("body", { rotationY: -90, duration: 0.6, ease: "power2.in", onComplete: () => {
    link.setAttribute("href", link.getAttribute("href") === "style.css" ? "style1.css" : "style.css");
    gsap.to("body", { rotationY: 0, duration: 0.6, ease: "power2.out" });
}});
}

function cursor1() {
  main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,        
        duration: 1        
    })
  })
  
  heading.addEventListener("mouseenter", function() {
    gsap.to(cursor, { 
      mixBlendMode: "difference",   
      scale: 3,    
      ease: Power4
    })
  })
  
  heading.addEventListener("mouseleave", function() {
    gsap.to(cursor, { 
      mixBlendMode: "normal",    
      scale: 1,    
      ease: Power4
    })
  })
  
  para.addEventListener("mouseenter", function() {
    gsap.to(cursor, { 
      mixBlendMode: "difference",   
      scale: 3,    
      ease: Power4
    })
  })
  
  para.addEventListener("mouseleave", function() {
    gsap.to(cursor, {  
      mixBlendMode: "normal",   
      scale: 1,    
      ease: Power4
    })
  })
  
  scroller_h1.addEventListener("mouseenter", function() {
    gsap.to(cursor, {  
      mixBlendMode: "difference",   
      scale: 2,    
      ease: Power4
    })  
  })
  
  scroller_h1.addEventListener("mouseleave", function() {
    gsap.to(cursor, {  
      mixBlendMode: "normal",   
      scale: 1,    
      ease: Power4
    })
  })
  
  project1.addEventListener("mouseenter", function() {
    cursor.innerHTML = "view more";
    gsap.to(cursor, { 
      mixBlendMode: "difference",         
      scale: 3,    
      ease: Power4
    })  
  })
  
  project1.addEventListener("mouseleave", function() {
    cursor.innerHTML = "";
    gsap.to(cursor, { 
      mixBlendMode: "normal",          
      scale: 1,    
      ease: Power4
    })
  })
  
  project2.addEventListener("mouseenter", function() {
    cursor.innerHTML = "view more";
    gsap.to(cursor, { 
      mixBlendMode: "difference",         
      scale: 3,    
      ease: Power4
    })  
  })
  
  project2.addEventListener("mouseleave", function() {
    cursor.innerHTML = "";
    gsap.to(cursor, { 
      mixBlendMode: "normal",          
      scale: 1,    
      ease: Power4
    })
  })
  
  description1.addEventListener("mouseenter", function() {
    gsap.to(cursor, {  
      mixBlendMode: "difference",   
      scale: 2,    
      ease: Power4
    })  
  })
  
  description1.addEventListener("mouseleave", function() {
    gsap.to(cursor, {  
      mixBlendMode: "normal",   
      scale: 1,    
      ease: Power4
    })
  })
  
  description2.addEventListener("mouseenter", function() {
    gsap.to(cursor, {  
      mixBlendMode: "difference",   
      scale: 2,    
      ease: Power4
    })  
  })
  
  description2.addEventListener("mouseleave", function() {
    gsap.to(cursor, {  
      mixBlendMode: "normal",   
      scale: 1,    
      ease: Power4
    })
  })
  
  skills_container.addEventListener("mouseenter", function() {
    gsap.to(cursor, {  
      mixBlendMode: "difference",   
      scale: 2,    
      ease: Power4
    })  
  })
  
  skills_container.addEventListener("mouseleave", function() {
    gsap.to(cursor, {  
      mixBlendMode: "normal",   
      scale: 1,    
      ease: Power4
    })
  })
  
  about_me.addEventListener("mouseenter", function() {
    gsap.to(cursor, {  
      mixBlendMode: "difference",   
      scale: 2,    
      ease: Power4
    })  
  })
  
  about_me.addEventListener("mouseleave", function() {
    gsap.to(cursor, {  
      mixBlendMode: "normal",   
      scale: 1,    
      ease: Power4
    })
  })

  about_me2.addEventListener("mouseenter", function() {
    gsap.to(cursor, {  
      mixBlendMode: "difference",   
      scale: 2,    
      ease: Power4
    })  
  })
  
  about_me2.addEventListener("mouseleave", function() {
    gsap.to(cursor, {  
      mixBlendMode: "normal",   
      scale: 1,    
      ease: Power4
    })
  })
   
  
}

cursor1();


function video() {
  let projectBox = document.querySelector(".project-box1");
  let projectBox2 = document.querySelector("#project-box2");
  let video = document.querySelector(".project-box1 video");
  let video2 = document.querySelector("#project-box2 video");
  projectBox.addEventListener("mouseenter", function () {
    video.style.display = "block";
    // projectBox.style.padding = 10 + "px";
    // projectBox.style.backgroundImage = "none";
    // projectBox.style.backgroundColor = "black";
  });

  projectBox.addEventListener("mouseleave", function () {
    video.style.display = "none";
    // projectBox.style.padding = 0 + "px";
    // projectBox.style.backgroundImage = "";
    // projectBox.style.backgroundColor = "none";
  });

  projectBox2.addEventListener("mouseenter", function () {
    video2.style.display = "block";
    // projectBox2.style.padding = 10 + "px";
    // projectBox2.style.backgroundImage = "none";
    // projectBox2.style.backgroundColor = "black";
  });

  projectBox2.addEventListener("mouseleave", function () {
    video2.style.display = "none";
    // projectBox2.style.padding = 0 + "px";
    // projectBox2.style.backgroundImage = "";
    // projectBox2.style.backgroundColor = "none";
  });
}
video();

function scrollerStart() {
  if(window.innerWidth <= 450) {
    return;
  }
  function scroller() {
    let skill1 = document.querySelector("#skills-box1");
    let h1 = document.querySelector("#skills-box1 h1");
    let scroller = document.querySelector("#skills-box1 .skills-scroller");
    let scroller_h1 = document.querySelector("#skills-box1 .skills-scroller h1");

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
    stagger: 0.1,
  });


  tl.to(".loader", {
    opacity: 0,
    duration: 0.4,
    delay: 1.5,
  }); 

  tl.from(".home-page", {
    y: 10, 
    delay: -0.4,   
    duration: 1,
    opacity: 0,
    ease: "sine.out",
  });

  tl.to(".loader", {
    display: "none",
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
      scroller: ".main",
      start: "top 80%"
    }
  });

  gsap.from(".projects h1", {
    x: -80,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".projects h1",
      scroller: ".main",
      start: "top 70%"
    }
  });

  gsap.from(".project-box1", {
    y: 80,
    duration: 1.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".project-box1",
      scroller: ".main",
      start: "top 70%"
    }
  });

  gsap.from(".description1", {
    y: 80,
    duration: 1.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".description1",
      scroller: ".main",
      start: "top 70%"
    }
  });

  gsap.from(".project-box3", {
    y: 80,
    duration: 1.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".project-box3",
      scroller: ".main",
      start: "top 70%"
    }
  });

  gsap.from(".description2", {
    y: 80,
    duration: 1.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".description2",
      scroller: ".main",
      start: "top 70%"
    }
  });

  gsap.from(".skills h1", {
    y: 80,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".skills h1",
      scroller: ".main",
      start: "top 75%"
    }
  });

  gsap.from(".skills-box", {
    y: 80,
    duration: 2,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".skills-box",
      scroller: ".main",
      start: "top 75%"
    }
  });

  gsap.from(".about-me h1", {
    y: 80,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about-me h1",
      scroller: ".main",
      start: "top 75%"
    }
  });

  gsap.from(".left-box", {
    x: -80,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".left-box",
      scroller: ".main",
      start: "top 70%"      
    }
  });

  gsap.from(".right-top", {
    x: 80,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".right-top",
      scroller: ".main",
      start: "top 70%"      
    }
  });

  gsap.from(".right-bottom", {
    x: 80,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".right-bottom",
      scroller: ".main",
      start: "top 95%"      
    }
  });

  gsap.from(".about-box2-bottom", {
    y: 80,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about-box2-bottom",
      scroller: ".main",
      start: "top 75%"      
    }
  });
}

scrollTrigger();

leftBox.addEventListener("mouseenter", function() {
  leftBox.style.borderRadius = "10px";
})

leftBox.addEventListener("mouseleave", function() {
  leftBox.style.borderRadius = "20px";
})

rightTop.addEventListener("mouseenter", function() {
  rightTop.style.borderRadius = "10px";
})

rightTop.addEventListener("mouseleave", function() {
  rightTop.style.borderRadius = "20px";
})

rightBottom.addEventListener("mouseenter", function() {
  rightBottom.style.borderRadius = "10px";
})

rightBottom.addEventListener("mouseleave", function() {
  rightBottom.style.borderRadius = "20px";
})

aboutBox2.addEventListener("mouseenter", function() {
  aboutBox2.style.borderRadius = "10px";
})

aboutBox2.addEventListener("mouseleave", function() {
  aboutBox2.style.borderRadius = "20px";
})






