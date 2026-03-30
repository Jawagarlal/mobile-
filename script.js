// Sample Data for the Mobile Bazaar
const phones = [
    { id: 1, name: "iPhone 15 Pro", price: "$999", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQOewKxtKQF-FZc3V98XuerYZ-P6n2v6ANQiSRmGdtmwdl0Q0tWp-Gf1bX6f1hBAzPcOiCAYopY2NJrvSp7xTJubsETCMfJGQ" },
    { id: 2, name: "Samsung S24 Ultra", price: "$1199", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: "Google Pixel 8", price: "$699", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80" },
    { id: 4, name: "OnePlus 12", price: "$799", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80" }
];

const productDisplay = document.getElementById('product-display');
const cartCountElement = document.getElementById('cart-count');
let cartCount = 0;

// Function to render phones
function displayPhones() {
    phones.forEach(phone => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${phone.img}" alt="${phone.name}">
            <h3>${phone.name}</h3>
            <p>${phone.price}</p>
            <button class="btn-buy" onclick="addToCart()">Add to Cart</button>
        `;
        productDisplay.appendChild(card);
    });
}

// Simple Cart function
function addToCart() {
    cartCount++;
    cartCountElement.innerText = cartCount;
    alert("Phone added to your bazaar cart!");
}

// Initialize
displayPhones();