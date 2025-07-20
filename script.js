document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.github-btn').forEach(button => {
    button.addEventListener('click', () => {
      const url = button.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank');
      }
    });
  });

  document.querySelector(".button").addEventListener("click", () => {
    window.open("https://github.com/DPenf0ld/DPenf0ld", "_blank");
  });

  document.querySelector(".linkedin-btn").addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/david-penfold-6624ba256/", "_blank");
  });



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


  if (typeof gsap !== "undefined" && window.location.pathname.includes("projects.html")) {
    gsap.registerPlugin(ScrollTrigger);

    let amplitude;

    if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      amplitude = window.innerWidth * 0.4;
    } else {
      amplitude = window.innerWidth * 0.25;
    }

    const cardCount = document.querySelectorAll('.project-card').length;
    const shape = document.querySelector('.spinning-shape');
    const smoothX = gsap.quickTo(shape, "x", { duration: 0.5, ease: "power3.out" });

    const initialProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const initialSineOffset = Math.sin(initialProgress * Math.PI * (cardCount / 2) - Math.PI / 2);
    const initialX = initialSineOffset * amplitude;

    gsap.set(shape, { x: initialX });

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const sineOffset = Math.sin(progress * Math.PI * (cardCount / 2) - Math.PI / 2);
        const x = sineOffset * amplitude;
        smoothX(x);
      }
    });
  }

});
