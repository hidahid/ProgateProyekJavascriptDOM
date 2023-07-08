// const menu = document.querySelector(".headermenu");

// menu.addEventListener("click", (e) => {
//   const targetMenu = e.target;

//   if (targetMenu.classList.contains("menu_link")) {
//     const menuLinkActive = document.querySelector("headermenu a.active");

//     if (
//       menuLinkActive !== null &&
//       targetMenu.getAttribute("href") !== menuLinkActive.getAttribute("href")
//     ) {
//       menuLinkActive.classList.remove("active");
//     }
//     targetMenu.classList.add("active");
//   }
// });

// *

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//       } else {
//         entry.target.classList.remove("show");
//       }
//     });
//   });

//   const hiddenElements = document.querySelectorAll(".hidden");
//   hiddenElements.forEach((el) => observer.observe(el));

// *

// CODING UNTUK ACCORDION

// const accordion = document.getElementsByClassName("accordmenu");

// for (let i = 0; i < accordmenu.length; i++) {
//   accordmenu[i].addEventListener("click", function () {
//     const panel1 = this.nextElementSibling;

//     if (panel1.style.display === "block") {
//       panel1.style.display = "none";
//     } else {
//       panel1.style.display = "block";
//     }
//   });
// }
