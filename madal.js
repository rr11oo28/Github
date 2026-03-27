let cart = JSON.parse(localStorage.getItem("cart")) || [];
let box = document.getElementById("cartList");
let total = document.getElementById("total");

function renderCart() {
    box.innerHTML = "";
    let sum = 0;

    cart.forEach((item, index) => {

        let price = parseInt(item.price.replace(/\D/g, ""));
        sum += price * item.qty;

        box.innerHTML += `
            <div class="cart-item">
                <button class="del-btn" onclick="deleteItem(${index})">×</button>

                <img src="${item.img}">
                <h4>${item.title}</h4>
                <p>${item.qty} x ${price.toLocaleString()} so'm</p>
            </div>
        `;
    });

    total.innerText = "Jami: " + sum.toLocaleString() + " so'm";

    localStorage.setItem("cart", JSON.stringify(cart));
}

// DELETE FUNCTION
function deleteItem(index) {
    cart.splice(index, 1);
    renderCart();
}

renderCart();
function payNow() {
    if (cart.length === 0) {
        alert("⚠️ Savat bo‘sh!");
        return;
    }

    alert("✅ To‘lov muvaffaqiyatli amalga oshdi!");

    // savatni tozalash
    cart = [];
    localStorage.removeItem("cart");

    renderCart();
}