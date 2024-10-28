let cart = [];
let totalPrice = 0;

function addToCart(button) {
    const product = button.parentElement;
    const name = product.getAttribute("data-name");
    const price = parseFloat(product.getAttribute("data-price"));

    cart.push({ name, price });
    totalPrice += price;

    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Clear the current cart display
    cartItems.innerHTML = "";

    // Display each item in the cart
    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `RS{item.name} - RS{item.price.toFixed(2)}`;

        // Add a remove button for each item
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeFromCart(index);
        itemDiv.appendChild(removeButton);

        cartItems.appendChild(itemDiv);
    });

    // Update the total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
    // Deduct the price of the removed item from the total
    totalPrice -= cart[index].price;

    // Remove the item from the cart array
    cart.splice(index, 1);

    // Update the cart display
    renderCart();
}
