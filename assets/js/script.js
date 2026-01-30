// ---------------- CONTACT US ----------------
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = {
        name: document.getElementById("name")?.value.trim(),
        email: document.getElementById("email")?.value.trim(),
        subject: document.getElementById("subject")?.value.trim(),
        message: document.getElementById("message")?.value.trim()
      };

      if (!data.name || !data.email || !data.subject || !data.message) {
        console.error("Form Error: All fields are required");
        return;
      }

      console.log("Contact Form Submitted:");
      console.table(data);

      form.reset();
    });
  }
});


// ---------------- CART SECTION ----------------
document.addEventListener("DOMContentLoaded", function () {

    var cartContainer = document.getElementById("cart-items");
    var emptyBox = document.querySelector(".cart-empty-box");

    if (!cartContainer || !emptyBox) return;

    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            emptyBox.style.display = "flex";
            return;
        } else {
            emptyBox.style.display = "none";
        }

        cart.forEach(function(item, index) {
            var row = document.createElement("div");
            row.className = "cart-table-head";
            row.innerHTML = `
                <div class="col product" style="display:flex;align-items:center;gap:15px;">
                    <img src="${item.image}" width="70">
                    <span>${item.name}</span>
                </div>

                <div class="col quantity">
                    <input type="number" min="1" value="${item.quantity}" style="width:50px;" data-index="${index}" class="quantity-input">
                </div>

                <div class="col total">$${(parseFloat(item.price) * item.quantity).toFixed(2)}</div>

                <div class="col remove">
                    <button data-index="${index}" class="remove-btn">Remove</button>
                </div>
            `;

            cartContainer.appendChild(row);
        });

        document.querySelectorAll(".quantity-input").forEach(input => {
            input.addEventListener("change", function() {
                var idx = this.dataset.index;
                var newQty = parseInt(this.value);
                if(newQty < 1) newQty = 1;
                cart[idx].quantity = newQty;
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            });
        });

        document.querySelectorAll(".remove-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                var idx = this.dataset.index;
                cart.splice(idx, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            });
        });
    }

    renderCart();
});


// ---------------- SEARCH SECTION ----------------
document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");

  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", function () {
      searchInput.value = "";
      searchInput.focus();
    });
  }

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const query = searchInput.value.trim();

      if (query === "") {
        alert("Please enter a search term.");
        return;
      }

      window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    });
  }
});
