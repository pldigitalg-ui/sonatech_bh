const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const backToTop = document.getElementById('backToTop');

const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

const cartTrigger = document.getElementById('cartTrigger');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const cartTotal = document.getElementById('cartTotal');
const checkoutWhatsapp = document.getElementById('checkoutWhatsapp');

const modalOverlay = document.getElementById('modalOverlay');
const sideModal = document.getElementById('sideModal');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const finishOrder = document.getElementById('finishOrder');

const clientName = document.getElementById('clientName');
const clientPhone = document.getElementById('clientPhone');
const clientAddress = document.getElementById('clientAddress');
const paymentMethod = document.getElementById('paymentMethod');
const clientNotes = document.getElementById('clientNotes');

const addCartButtons = document.querySelectorAll('.add-cart');
const buyNowButtons = document.querySelectorAll('.buy-now');

let currentSlide = 0;
let sliderInterval;
let selectedProduct = null;
let cart = [];

/* MOBILE MENU */
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(mobileMenu.classList.contains('active')));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* HERO SLIDER */
function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function startSlider() {
  sliderInterval = setInterval(nextSlide, 5000);
}

function resetSlider() {
  clearInterval(sliderInterval);
  startSlider();
}

if (slides.length && dots.length) {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      resetSlider();
    });
  });
  startSlider();
}

/* BACK TO TOP */
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* HELPERS */
function formatPrice(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

/* CART */
function openCart() {
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
  cartDrawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  cartDrawer.classList.remove('active');
  cartOverlay.classList.remove('active');
  cartDrawer.setAttribute('aria-hidden', 'true');

  if (!sideModal.classList.contains('active')) {
    document.body.style.overflow = '';
  }
}

function updateBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalItems;
}

function updateTotal() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = formatPrice(total);
}

function renderCart() {
  if (!cart.length) {
    cartItemsContainer.innerHTML = '<div class="empty-cart">Seu carrinho está vazio.</div>';
    updateBadge();
    updateTotal();
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item, index) => `
    <article class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${formatPrice(item.price)}</p>
        <div class="qty-row">
          <div class="qty-controls">
            <button class="qty-btn" data-action="minus" data-index="${index}">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" data-action="plus" data-index="${index}">+</button>
          </div>
          <button class="remove-btn" data-action="remove" data-index="${index}">Remover</button>
        </div>
      </div>
    </article>
  `).join('');

  updateBadge();
  updateTotal();
}

function addToCart(product) {
  const existingItem = cart.find(item => item.name === product.name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

function changeQuantity(index, action) {
  if (!cart[index]) return;

  if (action === 'plus') {
    cart[index].quantity += 1;
  }

  if (action === 'minus') {
    cart[index].quantity -= 1;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
  }

  if (action === 'remove') {
    cart.splice(index, 1);
  }

  renderCart();
}

/* BUY MODAL */
function openModal(product) {
  selectedProduct = product;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalTitle.textContent = product.name;
  modalPrice.textContent = formatPrice(product.price);

  sideModal.classList.add('active');
  modalOverlay.classList.add('active');
  sideModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  sideModal.classList.remove('active');
  modalOverlay.classList.remove('active');
  sideModal.setAttribute('aria-hidden', 'true');

  if (!cartDrawer.classList.contains('active')) {
    document.body.style.overflow = '';
  }
}

/* BUTTON EVENTS */
addCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      name: button.dataset.product,
      price: Number(button.dataset.price),
      image: button.dataset.image
    };

    addToCart(product);
    openCart();
  });
});

buyNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      name: button.dataset.product,
      price: Number(button.dataset.price),
      image: button.dataset.image
    };

    openModal(product);
  });
});

if (cartTrigger) {
  cartTrigger.addEventListener('click', openCart);
}

if (closeCart) {
  closeCart.addEventListener('click', closeCartDrawer);
}

if (cartOverlay) {
  cartOverlay.addEventListener('click', closeCartDrawer);
}

if (closeModal) {
  closeModal.addEventListener('click', closeProductModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', closeProductModal);
}

/* DELEGATION FOR + / - / REMOVE */
document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const action = target.dataset.action;
  const index = target.dataset.index;

  if (action && index !== undefined) {
    changeQuantity(Number(index), action);
  }
});

/* CHECKOUT CART WHATSAPP */
if (checkoutWhatsapp) {
  checkoutWhatsapp.addEventListener('click', () => {
    if (!cart.length) {
      alert('Seu carrinho está vazio.');
      return;
    }

    const lines = [
      'Olá! Quero fechar meu pedido na Sonatech BH.',
      ''
    ];

    cart.forEach(item => {
      lines.push(`${item.quantity}x ${item.name} - ${formatPrice(item.price)}`);
    });

    lines.push('');
    lines.push(`Total: ${cartTotal.textContent}`);
    lines.push('');
    lines.push('Rua Santo Inácio de Loyola 391');

    const url = `https://wa.me/553183209688?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank');
  });
}

/* BUY NOW WHATSAPP */
if (finishOrder) {
  finishOrder.addEventListener('click', () => {
    if (!selectedProduct) return;

    const message = [
      'Olá! Quero finalizar meu pedido na Sonatech BH.',
      '',
      `Produto: ${selectedProduct.name}`,
      `Valor: ${formatPrice(selectedProduct.price)}`,
      `Nome: ${clientName.value.trim() || 'Não informado'}`,
      `Telefone: ${clientPhone.value.trim() || 'Não informado'}`,
      `Endereço: ${clientAddress.value.trim() || 'Não informado'}`,
      `Pagamento: ${paymentMethod.value}`,
      `Observações: ${clientNotes.value.trim() || 'Nenhuma'}`
    ].join('\n');

    const url = `https://wa.me/553183209688?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });
}

/* INIT */
renderCart();
