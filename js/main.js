/* ========================================
drawer-menu-btn
======================================== */
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuPanel = document.querySelector("#drawer-menu-panel");
const mask = document.querySelector("#mask");

/* ----- 発火時のanimation ----- */

// menuPanelの開閉
const menuOptions = {
  duration: 600,
  easing: "ease",
  fill: "forwards",
};

// maskの表示・非表示
const showKeyframes = {
  opacity: [0, 1],
  visibility: "visible",
};

const hideKeyframes = {
  opacity: [1, 0],
  visibility: "hidden",
};

const maskOptions = {
  duration: 800,
  easing: "ease",
  fill: "forwards",
};

/* ----- イベントの発火 ----- */
menuOpen.addEventListener("click", () => {
  menuPanel.animate({ translate: ["100vw", 0] }, menuOptions);

  mask.animate(showKeyframes, maskOptions);
});

menuClose.addEventListener("click", () => {
  menuPanel.animate({ translate: [0, "100vw"] }, menuOptions);

  mask.animate(hideKeyframes, maskOptions);
});

mask.addEventListener("click", () => {
  menuClose.click();
});

// リンクがクリックされたらmenuPanelを閉じる
const links = document.querySelectorAll(".drawer-menu-item");

links.forEach((link) => {
  link.addEventListener("click", () => {
    menuClose.click();
  });
});

/* ========================================
swiper
======================================== */
new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 40,
  width: 400,
  loop: true,
  loopedSlides: 6,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 24,
      width: 274,
    },
  },
});

/* ========================================
qa-accordion
======================================== */
const qaUnits = document.querySelectorAll(".qa__unit");

qaUnits.forEach((qaUnit) => {
  qaUnit.addEventListener("click", () => {
    qaUnit.classList.toggle("is-open");
  });
});

/* ========================================
contact-submit-btn
======================================== */
const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submitBtn");

form.addEventListener("input", () => {
  submitBtn.disabled = !form.checkValidity();
});

/* ========================================
to-top-btn
======================================== */
const toTop = document.querySelector(".to-top");

/* ----- 発火時のanimation ----- */
const toTopShowKeyframes = {
  opacity: [0, 1],
  visibility: "visible",
};

const toTopHideKeyframes = {
  opacity: [1, 0],
  visibility: "hidden",
};

const toTopOptions = {
  duration: 600,
  easing: "ease",
  fill: "forwards",
};

/* ----- 発火の設定 ----- */
const options = {
  rootMargin: "4300px 0px 0px  0px",
};

const showToTop = (entries) => {
  if (entries[0].isIntersecting) {
    toTop.animate(toTopShowKeyframes, toTopOptions);
  } else {
    toTop.animate(toTopHideKeyframes, toTopOptions);
  }
};

const showToTopObserver = new IntersectionObserver(showToTop, options);

showToTopObserver.observe(document.querySelector("#results"));
