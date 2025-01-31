// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})" class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

let shoppingCart = JSON.parse(sessionStorage.getItem("shoppingCart")) || [];
// Render cart list
function renderCart() {
	cartList.innerHTML = "";
	shoppingCart.forEach((item, index) => {
		const li = document.createElement("li");
		li.innerHTML += `${item.name} - $${item.price}
		<button onclick="removeFromCart(${index})">Remove</button>`;
		cartList.appendChild(li)
	})

	sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}


// Add item to cart
function addToCart(productId) {
	let product = products.find((prod) => prod.id === productId);
	if(product) {
		shoppingCart.push(product);
		renderCart();
	}
}

// Remove item from cart
function removeFromCart(productId) {
	shoppingCart.splice(productId, 1);
	renderCart()
}

// Clear cart
function clearCart() {
	shoppingCart = [];
	sessionStorage.removeItem("shoppingCart");
	renderCart();
}

// Initial render
renderProducts();
renderCart();
