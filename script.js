document.addEventListener("DOMContentLoaded", () => {
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

  //Rotate on Scroll - Projects
  const iframeWrapper = document.querySelector('.iframe-wrapper-projects');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const rotateY = scrollY * 0.1; // adjust multiplier to control speed
    iframeWrapper.style.transform = `rotateY(${rotateY}deg)`;
  });


});
