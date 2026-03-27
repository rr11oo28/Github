function showDialog(el){
  document.getElementById('dImg').src = el.querySelector('img').src;
  document.getElementById('dTitle').innerText = el.querySelector('h4').innerText;
  document.getElementById('dDesc').innerText = el.querySelector('p').innerText;
  document.getElementById('dPrice').innerText = el.querySelector('.badge').innerText;

  document.getElementById('backdrop').classList.add('visible');
}

function hideDialog(){
  document.getElementById('backdrop').classList.remove('visible');
}

window.onclick = function(e){
  if(e.target.id === 'backdrop') hideDialog();
}
let currentProduct = {};
let qty = 1;
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showDialog(el) {
    let img = el.querySelector("img").src;
    let title = el.querySelector("h4").innerText;
    let desc = el.querySelector("p").innerText;
    let price = el.querySelector(".badge").innerText;

    currentProduct = { img, title, desc, price };

    document.getElementById("dImg").src = img;
    document.getElementById("dTitle").innerText = title;
    document.getElementById("dDesc").innerText = desc;
    document.getElementById("dPrice").innerText = price;

    qty = 1;
    document.getElementById("qty").innerText = qty;

    // reset UI
    document.getElementById("addBtn").style.display = "block";
    document.getElementById("qtyBox").style.display = "none";

    document.getElementById("backdrop").classList.add("visible");
}

function hideDialog() {
    document.getElementById("backdrop").classList.remove("visible");
}

// BOSHLASH (button -> +/-)
function startAdd() {
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("qtyBox").style.display = "flex";
    addCart();
}

function plus() {
    qty++;
    document.getElementById("qty").innerText = qty;
    updateCart();
}

function minus() {
    if (qty > 1) {
        qty--;
        document.getElementById("qty").innerText = qty;
        updateCart();
    }
}

// CARTGA YOZISH
function addCart() {
    let item = {
        ...currentProduct,
        qty: qty
    };

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
}

// QUANTITY o‘zgarsa update
function updateCart() {
    let lastIndex = cart.length - 1;
    if (lastIndex >= 0) {
        cart[lastIndex].qty = qty;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}