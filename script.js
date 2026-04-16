const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const backToTop = document.getElementById('backToTop');
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
const modalOverlay = document.getElementById('modalOverlay');
const sideModal = document.getElementById('sideModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalImage = document.getElementById('modalImage');
const finishOrder = document.getElementById('finishOrder');
const clientName = document.getElementById('clientName');
const clientPhone = document.getElementById('clientPhone');
const clientAddress = document.getElementById('clientAddress');
const paymentMethod = document.getElementById('paymentMethod');
const clientNotes = document.getElementById('clientNotes');
const openModalButtons = document.querySelectorAll('.open-modal');
const addCartButtons = document.querySelectorAll('.add-cart');
const cartCount = document.getElementById('cartCount');
const floatingCart = document.getElementById('floatingCart');

let currentSlide = 0;
let sliderInterval;
let selectedProduct = {
  name: '',
  price: '',
  image: ''
};
let cartItems = 0;

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const isExpanded = mobileMenu.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', String(isExpanded));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

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

window.addEventListener('scroll', () => {
  if (window.scrollY > 450) {
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

function openSideModal(productName, productPrice, productImage) {
  selectedProduct = {
    name: productName,
    price: productPrice,
    image: productImage
  };

  modalTitle.textContent = productName;
  modalPrice.textContent = `R$ ${productPrice}`;
  modalImage.src = productImage;
  modalImage.alt = productName;

  sideModal.classList.add('active');
  modalOverlay.classList.add('active');
  sideModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeSideModal() {
  sideModal.classList.remove('active');
  modalOverlay.classList.remove('active');
  sideModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.product;
    const productPrice = button.dataset.price;
    const productImage = button.dataset.image;
    openSideModal(productName, productPrice, productImage);
  });
});

if (modalClose) {
  modalClose.addEventListener('click', closeSideModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', closeSideModal);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && sideModal.classList.contains('active')) {
    closeSideModal();
  }
});

function bumpCart() {
  floatingCart.classList.add('bump');
  setTimeout(() => {
    floatingCart.classList.remove('bump');
  }, 220);
}

function updateCartCount() {
  cartCount.textContent = String(cartItems);
  bumpCart();
}

addCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartItems += 1;
    updateCartCount();
  });
});

if (finishOrder) {
  finishOrder.addEventListener('click', () => {
    const name = clientName.value.trim();
    const phone = clientPhone.value.trim();
    const address = clientAddress.value.trim();
    const payment = paymentMethod.value;
    const notes = clientNotes.value.trim();

    const message = [
      'Olá! Quero finalizar meu pedido.',
      '',
      `Produto: ${selectedProduct.name}`,
      `Valor: R$ ${selectedProduct.price}`,
      `Nome: ${name || 'Não informado'}`,
      `Telefone: ${phone || 'Não informado'}`,
      `Endereço: ${address || 'Não informado'}`,
      `Pagamento: ${payment}`,
      `Observações: ${notes || 'Nenhuma'}`
    ].join('\n');

    const whatsappUrl = `https://wa.me/5531999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  });
}
