export const cart = () => {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  trash.addEventListener("click", () => {
    c = 0;
    counter.innerText = 0;
    notificationCartNumber.classList.remove("show");
    emptyTxt.classList.remove("hide");
    cartItems.classList.remove("show");
    checkoutBtn.classList.remove("show");
  });
};
