document.addEventListener("DOMContentLoaded", () => {

  const addBtn = document.querySelector(".add-to-cart");
  if (!addBtn) return;

  addBtn.addEventListener("click", () => {

    const name = document.getElementById("product-name").innerText;
    const price = parseFloat(
      document.getElementById("product-price").innerText.replace("$", "")
    );
    const image = document.getElementById("product-image").src;
    const quantity = parseInt(
      document.getElementById("product-quantity").value
    );

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.name === name);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ name, price, quantity, image });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    showPopup(`${quantity} × ${name} added to cart`);
  });
});

function showPopup(text) {
  const popup = document.getElementById("cart-popup");
  popup.innerText = text;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}

