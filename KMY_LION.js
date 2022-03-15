const img = document.querySelector(".toggle_img").src;
document.querySelector(".login_status").addEventListener("click", () => {
  if (img == "/img/icon_check_empty.png") {
    img.src = "/img/icon_check.png";
  } else {
    img.src = "/img/icon_check_empty.png";
  }
});

console.log(img)
