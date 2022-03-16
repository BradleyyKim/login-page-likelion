// const img = document.querySelector(".toggle_img").src;
// document.querySelector(".login_status").addEventListener("click", () => {
//   if (img == "/img/icon_check_empty.png") {
//     img.src = "/img/icon_check.png";
//   } else {
//     img.src = "/img/icon_check_empty.png";
//   }
// });

// console.log(img)
var toggleImg = "img1";

function toggle() {
  const image = document.getElementById("toggle_image");
  const buttonText = document.querySelector(".login_status");
  if (toggleImg === "img1") {
    image.src = "./img/icon_check.png";
    buttonText.style.color = "#2e80ec";
    buttonText.style.fontWeight = "bold";
    toggleImg = "img2";
  } else {
    image.src = "./img/icon_check_empty.png";
    buttonText.style.color = "#6f6f6f";
    buttonText.style.fontWeight = "normal";
    toggleImg = "img1";
  }
}
