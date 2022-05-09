window.addEventListener("load", () => {
  let imgs = [
    "../images/image-product-1.jpg",
    "../images/image-product-2.jpg",
    "../images/image-product-3.jpg",
    "../images/image-product-4.jpg",
  ];
  let c = 0;
  let arrLength = imgs.length - 1;

  //main img
  const mainImage = document.querySelector(".mobile-slider-img img");
  //side btns slider..
  const prevBtn = document.querySelector(".mobile-sliderbtn-prev");
  const nextBtn = document.querySelector(".mobile-sliderbtn-next");

  nextBtn.onclick = () => {
    if (arrLength === c) return;
    c < arrLength && c++;
    mainImage.src = imgs[c];
  };

  prevBtn.onclick = () => {
    if (c == 0) return;
    c > 0 && c--;
    mainImage.src = imgs[c];
  };
});
