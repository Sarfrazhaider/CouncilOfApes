const btn = document.querySelector(".mobile-btn");
const mainNav = document.querySelector(".main-nav");
const presaleBtns = document.querySelectorAll(".nav-btn");

btn.addEventListener("click", function () {
  mainNav.classList.toggle("show");
});

// presaleBtns.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     window.location.href =
//       "https://pancakeswap.finance/swap?outputCurrency=0x55006895f398d7713d69081144b19d8c9022b582";
//   });
// });

// document.addEventListener('scroll', function () {
//   console.log('scrolled');
// })

const scrollBtn = document.querySelector(".scroll-btn");
window.addEventListener("scroll", scrollfunction);

function scrollfunction() {
  if (window.scrollY > 270) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}
scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
