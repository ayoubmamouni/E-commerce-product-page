window.addEventListener("load", () => {
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
});
