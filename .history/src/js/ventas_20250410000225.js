

// Variables globales
const cart = [];
let cartTotal = 0;

// Función para actualizar el carrito
function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const cartCountSpan = document.getElementById('cart-count');
  const cartTotalSpan = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');

  // Limpiar el contenido actual del carrito
  cartItemsDiv.innerHTML = '';

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>No hay productos en el carrito.</p>';
    checkoutBtn.disabled = true;
  } else {
    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.textContent = `${item.name} - $${item.price}`;
      cartItemsDiv.appendChild(itemDiv);
    });
    checkoutBtn.disabled = false;
  }

  // Actualizar el contador y el total
  cartCountSpan.textContent = cart.length;
  cartTotalSpan.textContent = cartTotal.toFixed(2);
}

// Agregar productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productDiv = button.parentElement;
    const productId = productDiv.dataset.id;
    const productName = productDiv.dataset.name;
    const productPrice = parseFloat(productDiv.dataset.price);

    // Verificar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    // Actualizar el total
    cartTotal += productPrice;

    // Actualizar la vista del carrito
    updateCart();
  });
});

// Inicializar el carrito
updateCart();