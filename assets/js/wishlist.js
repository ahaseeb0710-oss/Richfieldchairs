document.addEventListener("DOMContentLoaded", () => {

  const wishlistBtn = document.querySelector(".add-to-wishlist");
  if (!wishlistBtn) return;

  wishlistBtn.addEventListener("click", () => {

    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      alert("Please login to add items to wishlist ❤️");
      window.location.href = "login.html";
      return;
    }

    const name = document.querySelector(".product-section h2").innerText;
    const price = document.querySelector(".product-section h4").innerText;
    const image = document.querySelector(".product-section img").src;

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(item => item.name === name);
    if (exists) {
      alert("Already in wishlist ❤️");
      return;
    }

    wishlist.push({ name, price, image });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Added to wishlist ❤️");
  });

});
