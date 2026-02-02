let cart = [];

function showSection(id){
  document.querySelectorAll('.page-section').forEach(s => s.style.display='none');
  document.getElementById(id).style.display='block';
}

function addToCart(name, price){
  cart.push({name, price});
  updateCart();
}

function updateCart(){
  const items = document.getElementById('cartItems');
  items.innerHTML = '';
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;
    items.innerHTML += `
      <div class="cart-item">
        ${item.name} - R${item.price}
        <button onclick="removeItem(${i})">x</button>
      </div>`;
  });

  document.getElementById('cartCount').innerText = cart.length;
  document.getElementById('cartTotal').innerText = total;
}

function removeItem(i){
  cart.splice(i,1);
  updateCart();
}

function toggleCart(){
  const m = document.getElementById('cartModal');
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}

function sendOrder(){
  let msg = 'Hello CRIME SCENE,%0A%0AOrder:%0A';
  cart.forEach(i => msg += `• ${i.name} - R${i.price}%0A`);
  window.open(`https://wa.me/27692574788?text=${msg}`);
}

function openImage(src){
  document.getElementById('fullImage').src = src;
  document.getElementById('imageModal').style.display = 'flex';
}

function closeImage(){
  document.getElementById('imageModal').style.display = 'none';
}

function searchProducts(){
  const input = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.product').forEach(p => {
    const name = p.querySelector('h3').innerText.toLowerCase();
    p.style.display = name.includes(input) ? 'block' : 'none';
  });
}