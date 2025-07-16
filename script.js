document.addEventListener("DOMContentLoaded", () => {

  if (document.body.classList.contains('home-page')) {
    document.documentElement.classList.add('no-scroll');
  }


  const buttons = document.querySelectorAll(".btn");

  if (buttons.length > 0) {
    buttons.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
      });
    });
  }

  const currentPage = window.location.pathname.split("/").pop(); // get current filename

  const homeBtn = document.getElementById("homeBtn");
  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      if (currentPage !== "index.html" && currentPage !== "") {
        // empty string if root
        window.location.href = "index.html";
      }
    });
  }

  const aboutBtn = document.getElementById("aboutBtn");
  if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {
      if (currentPage !== "about.html") {
        window.location.href = "about.html";
      }
    });
  }

  const projectsBtn = document.getElementById("projectsBtn");
  if (projectsBtn) {
    projectsBtn.addEventListener("click", () => {
      if (currentPage !== "projects.html") {
        window.location.href = "projects.html";
      }
    });
  }

  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      // mailto always works
      window.location.href = "mailto:9874@duck.com";
    });
  }

  //Move on Scroll
  const cursorOutline = document.querySelector('.cursor-outline');

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

  });



  gsap.registerPlugin(ScrollTrigger);

  const cardCount = document.querySelectorAll('.project-card').length;
  const shape = document.querySelector('.spinning-shape');
  const smoothX = gsap.quickTo(shape, "x", { duration: 0.5, ease: "power3.out" });

  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const cardCount = document.querySelectorAll('.project-card').length;

      const phase = 0;
      const sineOffset = Math.sin((progress + phase) * Math.PI * (cardCount / 2));
      const amplitude = window.innerWidth * 0.25;
      const x = sineOffset * amplitude;
      smoothX(x);
    }
  });


});
