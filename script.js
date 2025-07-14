document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            btn.style.setProperty('--x', x + 'px');
            btn.style.setProperty('--y', y + 'px');
        });
    });

    document.getElementById("aboutBtn").addEventListener("click", () => {
        window.location.href = "about.html";
    });

    document.getElementById("projectsBtn").addEventListener("click", () => {
        window.location.href = "projects.html";
    });

    document.getElementById("contactBtn").addEventListener("click", () => {
        window.location.href = "mailto:9874@duck.com";
    });
});