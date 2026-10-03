const initializeStickyHeader = () => {
  const header = document.querySelector(".pf-header");
  if (!header) return;

  const sticky_type = header.dataset.stickytype;

  if (sticky_type === "none") return;

  if (sticky_type === "always") {
    header.classList.add("pf-navbar-sticky");
    return;
  }

  if (sticky_type === "on-scroll-up") {
    let lastScrollTop = window.scrollY;

    const onScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop < lastScrollTop) {
        header.classList.add("pf-navbar-sticky");
      } else {
        header.classList.remove("pf-navbar-sticky");
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", onScroll);
  }
};

// Call this after DOM is ready
document.addEventListener("DOMContentLoaded", initializeStickyHeader);

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".pf-header");
  if (!header) return;

  // Toggle Search Popup
  const searchBoxBtn = header.querySelector(".pf-search-box");
  const searchCloseBtn = header.querySelector(".pf-spopup-close");
  const searchPopup = header.querySelector(".pf-search-popup");

  searchBoxBtn?.addEventListener("click", () => {
    searchPopup.classList.add("pf-show");
  });

  searchCloseBtn?.addEventListener("click", () => {
    searchPopup.classList.remove("pf-show");
  });

  // Simulate search suggestions
  const searchInput = header.querySelector(".pf-spopup-input");
  const searchSuggestions = header.querySelector(".pf-search-suggestions");

  searchInput?.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    searchSuggestions.classList.toggle("pf-show", query.length > 0);
  });

  // Clear search input field
  const clearSearchBtn = header.querySelector(".pf-spopup-clear");

  clearSearchBtn?.addEventListener("click", () => {
    searchInput.value = "";
    searchSuggestions.classList.remove("pf-show");
  });

  // Toggle Mobile Menu
  const mobileMenuBtn = header.querySelector(".pf-navbar-toggle");
  const mobileMenuCloseBtn = header.querySelector(".pf-navbar-close");
  const overlay = header.querySelector(".pf-navbar-overlay");

  const toggleMobileMenu = (open) => {
    header.classList.toggle("pf-menu-open", open);
  };

  mobileMenuBtn?.addEventListener("click", () => {
    toggleMobileMenu(true);
  });

  mobileMenuCloseBtn?.addEventListener("click", () => {
    toggleMobileMenu(false);
  });

  overlay?.addEventListener("click", () => {
    toggleMobileMenu(false);
  });

  // Toggle Submenu
  const menuList = header.querySelector(".pf-menu-list");

  menuList?.addEventListener("click", (event) => {
    const menuLink = event.target.closest(".pf-menu-link");
    if (!menuLink) return;

    const submenu = menuLink.nextElementSibling;
    if (submenu?.classList.contains("pf-navbar-megamenu")) {
      event.preventDefault();
      menuLink.parentElement.classList.toggle("pf-open");
    }
  });
});
