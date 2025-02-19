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