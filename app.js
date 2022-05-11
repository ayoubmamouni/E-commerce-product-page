//cart -------------------------------
const minus = document.querySelector("#minus");
let counter = document.querySelector("#counter");
const plus = document.querySelector("#plus");

const numberOfqtty = document.querySelector("#numberOfqtty");
const total = document.querySelector(".total");
const checkoutBtn = document.querySelector("#checkoutBtn");

const cartItems = document.querySelector(".cartItems");
const emptyTxt = document.querySelector(".empty-txt");
const trash = document.querySelector(".trash");

const addToCart = document.querySelector(".add-to-cart");
const cartIcon = document.querySelector(".cart-icon");
const cartCard = document.querySelector(".cart-card");
const notificationCartNumber = document.querySelector(
  ".notificationCartNumber"
);

cartIcon.addEventListener("click", () => {
  cartCard.classList.toggle("showCart");
});

let price = 125.0;
let c = 0;

plus.addEventListener("click", () => {
  c++;
  counter.innerText = c;
});
minus.addEventListener("click", () => {
  c > 0 && c--;
  counter.innerText = c;
});

addToCart.addEventListener("click", () => {
  let totalPrice = price * c;
  if (c == 0) return console.log("Your cart is empty");
  notificationCartNumber.innerText = c;
  notificationCartNumber.classList.add("show");
  emptyTxt.classList.add("hide");
  cartItems.classList.add("show");
  checkoutBtn.classList.add("show");
  numberOfqtty.innerText = c;
  total.innerText = `$${totalPrice}.00`;
  cartCard.classList.add("showCart");
});
trash.addEventListener("click", () => {
  c = 0;
  counter.innerText = 0;
  notificationCartNumber.classList.remove("show");
  emptyTxt.classList.remove("hide");
  cartItems.classList.remove("show");
  checkoutBtn.classList.remove("show");
});

//desktop slider ____________________________________
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

let countSlider = 0;
let arrLength = imgs.length - 1;

mainImage.addEventListener("click", () => {
  desktopSlider.classList.add("show");
  desktopSliderMainImage.src = imgs[countSlider];
});
close.addEventListener("click", () => desktopSlider.classList.remove("show"));

nextBtnSlider.onclick = () => {
  if (arrLength === countSlider) return;
  countSlider < arrLength && countSlider++;
  desktopSliderMainImage.src = imgs[countSlider];
};

prvBtnSlider.onclick = () => {
  if (countSlider == 0) return;
  countSlider > 0 && countSlider--;
  desktopSliderMainImage.src = imgs[countSlider];
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

//mobile-menu ____________________________
const overlay = document.querySelector(".mobile-menu-overlay");
const closeMenu = document.querySelector(".close-menu-mobile");
const menuBtn = document.querySelector(".menu");
const listItems = document.querySelector("ul.menu-list-items");
let s = "show";
menuBtn.addEventListener("click", () => {
  listItems.classList.add(s);
  overlay.classList.add(s);
});
closeMenu.addEventListener("click", () => {
  listItems.classList.remove(s);
  overlay.classList.remove(s);
});
overlay.onclick = (e) => {
  listItems.classList.remove(s);
  e.target.classList.remove(s);
};

//mobile slider ____________________________
//main img
const mobilemainImage = document.querySelector(".mobile-slider-img img");
//side btns slider..
const prevBtn = document.querySelector(".mobile-sliderbtn-prev");
const nextBtn = document.querySelector(".mobile-sliderbtn-next");

nextBtn.onclick = () => {
  if (arrLength === countSlider) return;
  countSlider < arrLength && countSlider++;
  mobilemainImage.src = imgs[countSlider];
};

prevBtn.onclick = () => {
  if (countSlider == 0) return;
  countSlider > 0 && countSlider--;
  mobilemainImage.src = imgs[countSlider];
};
