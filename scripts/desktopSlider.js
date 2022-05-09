window.addEventListener("load", () => {
  let imgs = [
    "../images/image-product-1.jpg",
    "../images/image-product-2.jpg",
    "../images/image-product-3.jpg",
    "../images/image-product-4.jpg",
  ];

  const mainImage = document.querySelector(".main-img img");
  //close btn
  const close = document.querySelector(".close span");

  const desktopSlider = document.querySelector(".desktopSlider");

  const nextBtnSlider = document.querySelector(".desktopSlider-btn.nxt");
  const prvBtnSlider = document.querySelector(".desktopSlider-btn.prv");
  const desktopSliderMainImage = document.querySelector(
    ".desktopSlider-mainImage img"
  );

  const homeMiniImgs = document.querySelectorAll(".home-thumb-img");

  let c = 0;
  let arrLength = imgs.length - 1;

  mainImage.addEventListener("click", () => {
    desktopSlider.classList.add("show");
    desktopSliderMainImage.src = imgs[c];
  });
  close.addEventListener("click", () => desktopSlider.classList.remove("show"));

  nextBtnSlider.onclick = () => {
    if (arrLength === c) return;
    c < arrLength && c++;
    desktopSliderMainImage.src = imgs[c];
  };

  prvBtnSlider.onclick = () => {
    if (c == 0) return;
    c > 0 && c--;
    desktopSliderMainImage.src = imgs[c];
  };

  const thumbs = document.querySelectorAll(".desktopSlider-miniImg");
  thumbs.forEach((i, indx) =>
    i.addEventListener("click", () => (desktopSliderMainImage.src = imgs[indx]))
  );

  homeMiniImgs.forEach((i, index) => {
    i.addEventListener("click", () => {
      console.log(index, "was clicked");
      desktopSlider.classList.add("show");
      desktopSliderMainImage.src = imgs[index];
    });
  });
});
