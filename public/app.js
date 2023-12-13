document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 1, name: 'Product 1', price: 9.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 29.99 },
    { id: 4, name: 'Product 4', price: 39.99 },
  ];

  const productsContainer = document.getElementById('products');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCountSpan = document.getElementById('cart-count');
  const totalPriceSpan = document.getElementById('total-price');
  let cartCount = 0;
  let total = 0;

  function renderProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price.toFixed(2)} USD</p>
        <button onclick="addToCart(${product.id}, ${product.price})">Add to Cart</button>
      `;
      productsContainer.appendChild(productItem);
    });
  }

  window.addToCart = function(productId, price) {
    const selectedProduct = products.find(product => product.id === productId);
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `${selectedProduct.name} - ${selectedProduct.price.toFixed(2)} USD`;
    cartItem.innerHTML += ` <button onclick="removeFromCart(this, ${productId}, ${selectedProduct.price})">Remove</button>`;
    cartItemsContainer.appendChild(cartItem);

    cartCount++;
    cartCountSpan.textContent = cartCount;

    total += selectedProduct.price;
    totalPriceSpan.textContent = total.toFixed(2);
  };

  window.removeFromCart = function(button, productId, price) {
    const cartItem = button.parentNode;
    cartItemsContainer.removeChild(cartItem);

    cartCount--;
    cartCountSpan.textContent = cartCount;

    total -= price;
    totalPriceSpan.textContent = total.toFixed(2);
  };

  renderProducts();
});