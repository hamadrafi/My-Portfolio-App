document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");

  // === THEME HANDLING ===
  if (toggleBtn) {
    const savedTheme = localStorage.getItem("theme");
    const defaultTheme = savedTheme || "light";
    html.setAttribute("data-theme", defaultTheme);
    updateIcon(defaultTheme);

    toggleBtn.addEventListener("click", () => {
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateIcon(next);
    });

    function updateIcon(theme) {
      const icon = toggleBtn.querySelector("i");
      if (!icon) return;
      if (theme === "dark") {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    }
  }

  // === VIDEO HOVER & MODAL ===
  const wrappers = document.querySelectorAll(".video-wrapper");
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const closeBtn = document.getElementById("closeModal");

  if (wrappers.length && modal && modalVideo && closeBtn) {
    const isMobile = window.innerWidth < 768;

    wrappers.forEach(wrapper => {
      const img = wrapper.querySelector(".poster-img");
      const video = wrapper.querySelector(".project-video");
      const playIcon = wrapper.querySelector(".play-icon-overlay");
      let loaded = false;

      const loadAndPlay = () => {
        if (!loaded) {
          video.src = video.getAttribute("data-src");
          loaded = true;
        }
        img.style.opacity = "0";
        if (playIcon) playIcon.style.opacity = "0";
        video.style.opacity = "1";
        video.play().catch(() => {});
      };

      const reset = () => {
        video.pause();
        img.style.opacity = "1";
        if (playIcon) playIcon.style.opacity = "1";
        video.style.opacity = "0";
      };

      if (!isMobile) {
        wrapper.addEventListener("mouseenter", loadAndPlay);
        wrapper.addEventListener("mouseleave", reset);
      } else {
        wrapper.addEventListener("click", () => {
          if (!loaded) {
            modalVideo.src = video.getAttribute("data-src");
            loaded = true;
          } else {
            modalVideo.src = video.src;
          }
          modal.classList.add("open");
          modalVideo.play();
          modal.setAttribute("aria-hidden", "false");
        });
      }
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("open");
      modalVideo.pause();
      modalVideo.src = "";
      modal.setAttribute("aria-hidden", "true");
    });

    modal.addEventListener("click", e => {
      if (e.target === modal) closeBtn.click();
    });
  }

//Lazy Load Functionality 
document.querySelectorAll(".project-card").forEach(card => {
    const video = card.querySelector(".project-video");
    
    card.addEventListener("mouseenter", () => {
        if (!video.src) {
            video.src = video.dataset.src; 
            video.load();
        }
        video.play();
    });

    card.addEventListener("mouseleave", () => {
        video.pause();
    });
});


// === PROJECT FILTERING ===
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

if (filterBtns.length && projectCards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons, add to clicked
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category").trim().toLowerCase();

      projectCards.forEach(card => {
        const cardCategories = card
          .getAttribute("data-category")
          .split("&")
          .map(c => c.trim().toLowerCase());

        if (category === "all" || cardCategories.includes(category)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });

      // ✅ FIX: Refresh AOS after filtering
      setTimeout(() => {
        AOS.refresh();
      }, 100);

    });
  });
}

});
