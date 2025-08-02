
const menuItems = [
    { id: 1, name: "Margherita Pizza", price: 120, image: "Image/Pizza2.jpg" },
    { id: 2, name: "Cheese Burger", price: 150, image: "Image/Burger3.jpg" },
    { id: 3, name: "Spaghetti Pasta", price: 110, image: "Image/mac.jpg" },
    { id: 4, name: "Pepperoni Pizza", price: 159, image: "Image/panee.jpg" },
    { id: 5, name: "Veggie Burger", price: 199, image: "Image/vag.jpg" },
    { id: 6, name: "Penne Pasta", price: 89, image: "Image/pasa.jpg" }
];


const menuContainer = document.getElementById('menu-items');
menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    menuContainer.appendChild(menuItem);
});


let cart = [];

function addToCart(itemId) {
    const item = menuItems.find(menuItem => menuItem.id === itemId);

    const cartItem = cart.find(item => item.id === itemId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCart();
}


function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

  
    cartItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(li);

        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = total.toFixed(2);
}


document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Order Placed! Your total is: ₹' + document.getElementById('total-price').textContent);
        cart = [];
        updateCart();
    }
});
