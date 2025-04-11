let btnHam = document.querySelector("#btn-ham");
let navMenu = document.querySelector("#nav-menu");

window.onscroll = function () {
  let header = document.querySelector("header");
  // let headerFixed = header.offsetTop;
  if (window.pageYOffset > 0) {
    header.classList.add("navbar-active");
  } else {
    header.classList.remove("navbar-active");
  }
};

btnHam.addEventListener("click", function () {
  if (btnHam.innerHTML === '<i class="bi bi-x"></i>') {
    btnHam.innerHTML = '<i class="bi bi-list"></i>';
    navMenu.classList.add("hidden");
  } else {
    btnHam.innerHTML = '<i class="bi bi-x"></i>';
    navMenu.classList.remove("hidden");
  }
});
