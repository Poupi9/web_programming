// ============================================================
// PageTurner Books — script.js
// Features:
//   1. Show/hide book descriptions
//   2. Dynamic footer clock
//   3. Contact form validation
//   4a. Live search / filter books
//   4b. Add-to-cart with sidebar
// ============================================================

// ── 1. SHOW / HIDE BOOK DESCRIPTIONS ────────────────────────
document.querySelectorAll('.toggle-desc').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.book-card');
    const desc = card.querySelector('.description');
    const isNowVisible = desc.classList.toggle('visible');

    btn.textContent = isNowVisible ? 'Read Less ▴' : 'Read More ▾';
    btn.setAttribute('aria-expanded', String(isNowVisible));
  });
});

// ── 2. DYNAMIC FOOTER CLOCK ──────────────────────────────────
const footerClock = document.getElementById('footerClock');

function updateClock() {
  footerClock.textContent = new Date().toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

updateClock();
setInterval(updateClock, 1000);

// ── 3. CONTACT FORM VALIDATION ───────────────────────────────
const form         = document.getElementById('contactForm');
const nameInput    = document.getElementById('name');
const emailInput   = document.getElementById('email');
const messageInput = document.getElementById('message');
const formSuccess  = document.getElementById('formSuccess');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(input, errorId, message) {
  input.classList.add('invalid');
  document.getElementById(errorId).textContent = message;
}

function clearError(input, errorId) {
  input.classList.remove('invalid');
  document.getElementById(errorId).textContent = '';
}

function validateForm() {
  let valid = true;

  if (!nameInput.value.trim()) {
    setError(nameInput, 'nameError', 'Name is required.');
    valid = false;
  } else {
    clearError(nameInput, 'nameError');
  }

  if (!emailInput.value.trim()) {
    setError(emailInput, 'emailError', 'Email is required.');
    valid = false;
  } else if (!EMAIL_REGEX.test(emailInput.value.trim())) {
    setError(emailInput, 'emailError', 'Please enter a valid email address.');
    valid = false;
  } else {
    clearError(emailInput, 'emailError');
  }

  if (!messageInput.value.trim()) {
    setError(messageInput, 'messageError', 'Message is required.');
    valid = false;
  } else {
    clearError(messageInput, 'messageError');
  }

  return valid;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  formSuccess.textContent = '';

  if (validateForm()) {
    formSuccess.textContent = '✓ Message sent! We\'ll get back to you soon.';
    form.reset();
    setTimeout(() => { formSuccess.textContent = ''; }, 5000);
  }
});

// Clear inline errors as the user types
[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('input', () => {
    clearError(input, input.id + 'Error');
    formSuccess.textContent = '';
  });
});

// ── 4a. SEARCH / FILTER BOOKS ────────────────────────────────
const searchInput = document.getElementById('searchInput');
const bookGrid    = document.getElementById('bookGrid');
const bookCards   = Array.from(document.querySelectorAll('.book-card'));

function filterBooks(query) {
  const q = query.toLowerCase().trim();
  let visibleCount = 0;

  bookCards.forEach(card => {
    const title  = card.dataset.title.toLowerCase();
    const author = card.dataset.author.toLowerCase();
    const match  = title.includes(q) || author.includes(q);
    card.style.display = match ? '' : 'none';
    if (match) visibleCount++;
  });

  let noResults = bookGrid.querySelector('.no-results');
  if (visibleCount === 0 && q.length > 0) {
    if (!noResults) {
      noResults = document.createElement('p');
      noResults.className = 'no-results';
      bookGrid.appendChild(noResults);
    }
    noResults.textContent = 'No books found for "' + query + '"';
  } else if (noResults) {
    noResults.remove();
  }
}

searchInput.addEventListener('input', () => filterBooks(searchInput.value));

// ── 4b. CART ─────────────────────────────────────────────────
const cartSidebar   = document.getElementById('cartSidebar');
const cartOverlay   = document.getElementById('cartOverlay');
const cartToggleBtn = document.getElementById('cartToggle');
const cartCloseBtn  = document.getElementById('cartClose');
const cartItemsEl   = document.getElementById('cartItems');
const cartBadgeEl   = document.getElementById('cartBadge');
const cartTotalEl   = document.getElementById('cartTotal');

// Cart state: array of { id, title, price, qty }
let cart = [];

// Open / close
function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('visible');
  document.body.style.overflow = '';
}

cartToggleBtn.addEventListener('click', openCart);
cartCloseBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && cartSidebar.classList.contains('open')) closeCart();
});

// Add a book to the cart
function addToCart(id, title, price) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, title, price: parseFloat(price), qty: 1 });
  }
  renderCart();
  animateBadge();
  openCart();
}

// Change quantity (+1 or -1); removes item if qty reaches 0
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  renderCart();
  animateBadge();
}

// Badge bounce animation
function animateBadge() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  cartBadgeEl.textContent = total;
  cartBadgeEl.classList.add('bump');
  setTimeout(() => cartBadgeEl.classList.remove('bump'), 250);
}

// Render cart items and total
function renderCart() {
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    cartTotalEl.textContent = '$0.00';
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <p class="cart-item-title">${escapeHtml(item.title)}</p>
        <p class="cart-item-price">$${item.price.toFixed(2)} each</p>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty('${item.id}', -1)" aria-label="Decrease quantity">&#8722;</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  cartTotalEl.textContent = '$' + total.toFixed(2);
}

// Prevent XSS when injecting user-derived strings into innerHTML
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Wire up all "Add to Cart" buttons
document.querySelectorAll('.btn-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const { id, title, price } = btn.dataset;
    addToCart(id, title, price);

    const original = btn.textContent;
    btn.textContent = 'Added ✓';
    btn.classList.add('added');
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('added');
      btn.disabled = false;
    }, 1500);
  });
});
