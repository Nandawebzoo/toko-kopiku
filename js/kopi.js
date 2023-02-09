// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu diklik
document.querySelector("#products").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar utk menghilangkan nav
const products = document.querySelector("#products");

document.addEventListener("click", function (e) {
  if (!products.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
