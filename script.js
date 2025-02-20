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



 



