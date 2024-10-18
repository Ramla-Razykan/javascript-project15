let cart = [];

function addToCart(name, price) {

    let item = cart.find(product => product.name === name);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCart();
}

function removeFromCart(name) {

    cart = cart.filter(product => product.name !== name);

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {

        cartItems.innerHTML += `
            <div class="cart-item">
                ${item.name} - $${item.price} x ${item.quantity}
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;

        total += item.price * item.quantity;
    });

    cartTotal.innerText = total;
}
