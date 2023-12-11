document.addEventListener('DOMContentLoaded', () => {
    const products = [
      { id: 1, name: 'Product 1', price: 19.99 },
      { id: 2, name: 'Product 2', price: 29.99 },
    ];
  
    const productsContainer = document.getElementById('products');
    const cartItemsContainer = document.getElementById('cart-items');
  
    function renderProducts() {
      productsContainer.innerHTML = '';
      products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.price.toFixed(2)} USD</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productItem);
      });
    }
  
    window.addToCart = function(productId) {
      const selectedProduct = products.find(product => product.id === productId);
      const cartItem = document.createElement('li');
      cartItem.innerHTML = `${selectedProduct.name} - ${selectedProduct.price.toFixed(2)} USD`;
      cartItemsContainer.appendChild(cartItem);
    };
  
    renderProducts();
  });
  