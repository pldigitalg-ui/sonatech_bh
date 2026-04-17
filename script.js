const WHATSAPP_NUMBER = "553183209688";

const PLACEHOLDER_IMAGE = "img/produtos/PLACEHOLDER_IMAGE.jpg";

const products = [
  {
    id: 1,
    category: "Celulares",
    badge: "Mais vendido",
    name: "Xiaomi Redmi Note 13 256GB",
    price: 1499.90,
    image: "img/produtos/redmiddd.jpg",
    description: "Celular rápido, bonito e pronto para quem quer desempenho forte no dia a dia sem travar.",
    shortSpecs: ["Tela 6.67", "Bateria 5000mAh", "256GB"],
    specs: [
      "Tela AMOLED de 6.67 polegadas",
      "Armazenamento de 256GB",
      "Memória RAM de 8GB",
      "Bateria de 5000mAh",
      "Câmera principal de 108MP",
      "Ideal para redes sociais, vídeos e trabalho"
    ]
  },
  {
    id: 2,
    category: "Celulares",
    badge: "Oferta",
    name: "Samsung Galaxy A15 128GB",
    price: 1199.90,
    image: "img/produtos/android.jpg",
    description: "Modelo equilibrado para quem quer bateria boa, tela grande e ótimo custo-benefício.",
    shortSpecs: ["Tela 6.5", "128GB", "5000mAh"],
    specs: [
      "Tela Super AMOLED de 6.5 polegadas",
      "Armazenamento de 128GB",
      "Memória RAM de 4GB",
      "Bateria de 5000mAh",
      "Câmera tripla",
      "Ótimo para uso diário e aplicativos"
    ]
  },
  {
    id: 3,
    category: "Celulares",
    badge: "Destaque",
    name: "Motorola Moto G84 256GB",
    price: 1599.90,
    image: "img/produtos/motorolo4.jpg",
    description: "Celular premium para quem quer velocidade, armazenamento e visual moderno.",
    shortSpecs: ["256GB", "5G", "RAM 8GB"],
    specs: [
      "Tela pOLED de 6.5 polegadas",
      "Conectividade 5G",
      "Armazenamento de 256GB",
      "Memória RAM de 8GB",
      "Bateria de 5000mAh",
      "Excelente para produtividade e entretenimento"
    ]
  },
  {
    id: 4,
    category: "Celulares",
    badge: "Novo",
    name: "iPhone 11 128GB",
    price: 2299.90,
    image: "img/produtos/redmiddd.jpg",
    description: "iPhone forte para quem quer câmera de qualidade, desempenho estável e status premium.",
    shortSpecs: ["128GB", "iOS", "Dupla câmera"],
    specs: [
      "Tela Liquid Retina de 6.1 polegadas",
      "Armazenamento de 128GB",
      "Face ID",
      "Processador Apple A13 Bionic",
      "Dupla câmera traseira",
      "Excelente para foto, vídeo e redes sociais"
    ]
  },
  {
    id: 5,
    category: "Celulares",
    badge: "Top custo-benefício",
    name: "Realme C67 256GB",
    price: 1299.90,
    image: "img/produtos/android.jpg",
    description: "Celular com muito espaço, bateria forte e ótima fluidez para uso diário.",
    shortSpecs: ["256GB", "5000mAh", "RAM 8GB"],
    specs: [
      "Tela de 6.72 polegadas",
      "Armazenamento de 256GB",
      "Memória RAM de 8GB",
      "Bateria de 5000mAh",
      "Carregamento rápido",
      "Perfeito para apps, vídeos e trabalho"
    ]
  },
  {
    id: 6,
    category: "Celulares",
    badge: "5G",
    name: "Samsung Galaxy A25 256GB",
    price: 1699.90,
    image: "img/produtos/motorolo4.jpg",
    description: "Mais velocidade, ótimo espaço interno e desempenho forte para quem usa muito o celular.",
    shortSpecs: ["5G", "256GB", "AMOLED"],
    specs: [
      "Tela Super AMOLED 6.5 polegadas",
      "Conectividade 5G",
      "Armazenamento de 256GB",
      "RAM de 8GB",
      "Bateria de 5000mAh",
      "Ideal para uso intenso"
    ]
  },
  {
    id: 7,
    category: "Celulares",
    badge: "Premium",
    name: "Xiaomi Poco X6 256GB",
    price: 1899.90,
    image: "img/produtos/redmiddd.jpg",
    description: "Desempenho forte, tela linda e potência para quem quer celular acima da média.",
    shortSpecs: ["256GB", "AMOLED", "67W"],
    specs: [
      "Tela AMOLED de alta taxa de atualização",
      "Armazenamento de 256GB",
      "Carregamento rápido de 67W",
      "Bateria de 5100mAh",
      "Memória RAM de 8GB",
      "Ótimo para jogos, edição e multitarefa"
    ]
  },

  {
    id: 8,
    category: "Capinhas",
    badge: "Proteção total",
    name: "Capinha Anti Impacto Transparente",
    price: 39.90,
    image: "img/produtos/capinha transparente.jpg",
    description: "Proteção reforçada sem esconder o visual do aparelho.",
    shortSpecs: ["TPU", "Bordas reforçadas", "Transparente"],
    specs: [
      "Material TPU flexível",
      "Bordas reforçadas contra impacto",
      "Proteção da câmera",
      "Encaixe firme",
      "Visual transparente",
      "Ideal para quem quer proteção e estética"
    ]
  },
  {
    id: 9,
    category: "Capinhas",
    badge: "Premium",
    name: "Capinha Premium Silicone Fosca",
    price: 44.90,
    image: "img/produtos/capinha fosca.jpg",
    description: "Toque macio, encaixe perfeito e visual elegante.",
    shortSpecs: ["Silicone", "Fosca", "Toque macio"],
    specs: [
      "Acabamento fosco premium",
      "Toque macio",
      "Boa aderência na mão",
      "Encaixe preciso",
      "Proteção leve",
      "Ótima para uso diário"
    ]
  },
  {
    id: 10,
    category: "Capinhas",
    badge: "Luxo",
    name: "Capinha MagSafe Premium",
    price: 59.90,
    image: "img/produtos/capas.jpg",
    description: "Capinha moderna com visual premium e encaixe seguro.",
    shortSpecs: ["Premium", "Magnética", "Acabamento fino"],
    specs: [
      "Compatível com acessórios magnéticos",
      "Acabamento sofisticado",
      "Bordas elevadas",
      "Proteção para câmera",
      "Design fino e elegante",
      "Ideal para linha premium"
    ]
  },
  {
    id: 11,
    category: "Capinhas",
    badge: "Mais vendida",
    name: "Capinha Armor Reforçada",
    price: 49.90,
    image: "img/produtos/capoinmha armadura reforçada.webp",
    description: "Proteção mais forte para quem trabalha na rua ou usa muito o aparelho.",
    shortSpecs: ["Reforçada", "Alta proteção", "Grip firme"],
    specs: [
      "Estrutura reforçada",
      "Maior absorção de impacto",
      "Pegada firme",
      "Proteção de cantos",
      "Visual robusto",
      "Indicada para uso pesado"
    ]
  },
  {
    id: 12,
    category: "Capinhas",
    badge: "Estilo",
    name: "Capinha Color Premium",
    price: 34.90,
    image: "img/produtos/capas.jpg",
    description: "Capinha bonita, leve e com acabamento limpo para valorizar o celular.",
    shortSpecs: ["Colorida", "Leve", "Estilosa"],
    specs: [
      "Visual moderno",
      "Material resistente",
      "Leveza no uso",
      "Boa proteção contra riscos",
      "Várias cores disponíveis",
      "Excelente para revenda"
    ]
  },
  {
    id: 13,
    category: "Capinhas",
    badge: "Executiva",
    name: "Capinha Carteira Flip",
    price: 64.90,
    image: "img/produtos/capas.jpg",
    description: "Modelo elegante para quem quer proteção e praticidade.",
    shortSpecs: ["Flip", "Carteira", "Elegante"],
    specs: [
      "Abre e fecha tipo carteira",
      "Espaço para cartão",
      "Proteção frontal e traseira",
      "Visual executivo",
      "Boa durabilidade",
      "Ideal para trabalho"
    ]
  },
  {
    id: 14,
    category: "Capinhas",
    badge: "Clássica",
    name: "Capinha Lisa Slim",
    price: 29.90,
    image: "img/produtos/capas.jpg",
    description: "Proteção básica com encaixe fino e preço bom para vender rápido.",
    shortSpecs: ["Slim", "Leve", "Preço forte"],
    specs: [
      "Modelo fino",
      "Leve no bolso",
      "Proteção contra riscos",
      "Encaixe rápido",
      "Preço acessível",
      "Boa opção para giro"
    ]
  },

  {
    id: 15,
    category: "Carregadores",
    badge: "Turbo",
    name: "Carregador Turbo 22W",
    price: 49.90,
    image: "img/produtos/carregador 22w.webp",
    description: "Carregamento rápido para quem quer mais praticidade no dia a dia.",
    shortSpecs: ["22W", "USB", "Rápido"],
    specs: [
      "Potência de 22W",
      "Entrada bivolt",
      "Carregamento rápido",
      "Compacto",
      "Boa durabilidade",
      "Ideal para uso diário"
    ]
  },
  {
    id: 16,
    category: "Carregadores",
    badge: "Mais forte",
    name: "Carregador com Cabo",
    price: 69.90,
    image: "img/produtos/carregador com cabo.jpg",
    description: "Mais potência, mais velocidade e melhor experiência na recarga.",
    shortSpecs: ["Cabo incluso", "Turbo", "Prático"],
    specs: [
      "Acompanha cabo",
      "Carregamento rápido",
      "Proteção contra sobrecarga",
      "Boa durabilidade",
      "Excelente custo-benefício",
      "Ideal para uso diário"
    ]
  },

  {
    id: 17,
    category: "Acessórios",
    badge: "Som forte",
    name: "Caixa de Som Bluetooth Portátil",
    price: 129.90,
    image: "img/produtos/caixa de som.webp",
    description: "Som forte, conexão rápida e ótimo produto para presente e revenda.",
    shortSpecs: ["Bluetooth", "Portátil", "Som forte"],
    specs: [
      "Conexão Bluetooth",
      "Bateria recarregável",
      "Som limpo e forte",
      "Modelo portátil",
      "Ideal para casa e lazer",
      "Ótimo giro de balcão"
    ]
  },
  {
    id: 18,
    category: "Acessórios",
    badge: "Essencial",
    name: "Cabo de Telefone",
    price: 24.90,
    image: "img/produtos/cabo de telefone.webp",
    description: "Cabo resistente para carregar com segurança e durar mais.",
    shortSpecs: ["Reforçado", "Boa saída", "Prático"],
    specs: [
      "Cabo reforçado",
      "Boa transferência de energia",
      "Maior resistência",
      "Item de alta saída",
      "Uso diário",
      "Excelente para balcão"
    ]
  },
  {
    id: 19,
    category: "Acessórios",
    badge: "Prático",
    name: "Suporte de Telefone",
    price: 39.90,
    image: "img/produtos/supote de telefone.jpg",
    description: "Mais praticidade e segurança para usar o celular no carro.",
    shortSpecs: ["Veicular", "Ajustável", "Firme"],
    specs: [
      "Fixação firme",
      "Ajuste de ângulo",
      "Compatível com vários aparelhos",
      "Fácil instalação",
      "Uso no painel ou saída de ar",
      "Ótimo para motoristas"
    ]
  },
  {
    id: 20,
    category: "Acessórios",
    badge: "Utilidade",
    name: "Garrafa Térmica",
    price: 59.90,
    image: "img/produtos/garrafa térmica.jpg",
    description: "Produto bonito, útil e fácil de vender no balcão.",
    shortSpecs: ["Térmica", "Prática", "Bonita"],
    specs: [
      "Mantém temperatura por mais tempo",
      "Boa vedação",
      "Visual moderno",
      "Ótima opção para utilidades",
      "Boa saída no balcão",
      "Uso diário"
    ]
  },
  {
    id: 21,
    category: "Acessórios",
    badge: "Áudio",
    name: "Fone Bluetooth Premium",
    price: 89.90,
    image: "img/produtos/fones grandes.jpg",
    description: "Som limpo, conexão estável e produto que vende bem no impulso.",
    shortSpecs: ["Bluetooth", "Sem fio", "Som limpo"],
    specs: [
      "Conexão Bluetooth estável",
      "Som limpo",
      "Design moderno",
      "Boa autonomia de bateria",
      "Ótimo para música e chamadas",
      "Visual premium"
    ]
  },
  {
    id: 22,
    category: "Acessórios",
    badge: "Clássico",
    name: "Fone com Fio",
    price: 29.90,
    image: "img/produtos/fones com fios.jpg",
    description: "Opção simples, útil e barata para quem quer ouvir sem depender de bateria.",
    shortSpecs: ["Com fio", "Leve", "Econômico"],
    specs: [
      "Som claro",
      "Leve e confortável",
      "Boa opção econômica",
      "Produto de fácil saída",
      "Uso diário",
      "Prático"
    ]
  }
];

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const backToTop = document.getElementById("backToTop");

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

const productsGrid = document.getElementById("productsGrid");
const filterButtons = document.querySelectorAll("#categoryFilters .pill");

const headerSearchDesktop = document.getElementById("headerSearchDesktop");
const headerSearchMobile = document.getElementById("headerSearchMobile");

const cartTrigger = document.getElementById("cartTrigger");
const cartTriggerBottom = document.getElementById("cartTriggerBottom");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItemsContainer = document.getElementById("cartItems");
const cartBadge = document.getElementById("cartBadge");
const cartTotal = document.getElementById("cartTotal");
const checkoutWhatsapp = document.getElementById("checkoutWhatsapp");

const modalOverlay = document.getElementById("modalOverlay");
const sideModal = document.getElementById("sideModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalSpecs = document.getElementById("modalSpecs");
const finishOrder = document.getElementById("finishOrder");

const lightboxOverlay = document.getElementById("lightboxOverlay");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

let currentSlide = 0;
let sliderInterval;
let selectedProduct = null;
let currentCategory = "Todos";
let cart = [];
let searchTerm = "";

function formatPrice(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function safeImage(path) {
  return path || PLACEHOLDER_IMAGE;
}

function setImageFallback(img) {
  if (!img) return;

  const applyFallback = () => {
    if (img.src !== PLACEHOLDER_IMAGE) {
      img.onerror = null;
      img.src = PLACEHOLDER_IMAGE;
    }
  };

  img.onerror = applyFallback;

  if (img.complete && img.naturalWidth === 0) {
    applyFallback();
  }
}

function lockBodyScroll() {
  document.body.style.overflow = "hidden";
}

function unlockBodyScrollIfPossible() {
  const cartOpen = cartDrawer?.classList.contains("active");
  const modalOpen = sideModal?.classList.contains("active");
  const lightboxOpen = lightboxOverlay?.classList.contains("active");

  if (!cartOpen && !modalOpen && !lightboxOpen) {
    document.body.style.overflow = "";
  }
}

function openCart() {
  if (!cartDrawer || !cartOverlay) return;
  cartDrawer.classList.add("active");
  cartOverlay.classList.add("active");
  cartDrawer.setAttribute("aria-hidden", "false");
  lockBodyScroll();
}

function closeCartDrawer() {
  if (!cartDrawer || !cartOverlay) return;
  cartDrawer.classList.remove("active");
  cartOverlay.classList.remove("active");
  cartDrawer.setAttribute("aria-hidden", "true");
  unlockBodyScrollIfPossible();
}

/* MENU MOBILE */
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(mobileMenu.classList.contains("active")));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* HERO */
function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  currentSlide = index;
}

function nextSlide() {
  if (!slides.length) return;
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function startSlider() {
  if (!slides.length) return;
  sliderInterval = setInterval(nextSlide, 5000);
}

function resetSlider() {
  clearInterval(sliderInterval);
  startSlider();
}

if (slides.length && dots.length) {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      resetSlider();
    });
  });
  startSlider();
}

/* BACK TO TOP */
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop?.classList.add("show");
  } else {
    backToTop?.classList.remove("show");
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* FILTRO E BUSCA */
function getFilteredProducts() {
  return products.filter((product) => {
    const categoryMatch = currentCategory === "Todos" || product.category === currentCategory;
    const searchValue = searchTerm.toLowerCase();

    const searchMatch =
      product.name.toLowerCase().includes(searchValue) ||
      product.description.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.shortSpecs.join(" ").toLowerCase().includes(searchValue);

    return categoryMatch && searchMatch;
  });
}

function productCardTemplate(product) {
  return `
    <article class="product-card" data-id="${product.id}" tabindex="0" role="button" aria-label="Abrir detalhes de ${product.name}">
      <div class="product-image">
        <img src="${safeImage(product.image)}" alt="${product.name}" loading="lazy" />
        <span class="floating-label">${product.badge}</span>
      </div>

      <div class="product-body">
        <h3>${product.name}</h3>
        <p>${product.description}</p>

        <div class="spec-preview">
          ${product.shortSpecs.map((item) => `<span>${item}</span>`).join("")}
        </div>

        <div class="price-row">
          <strong>${formatPrice(product.price)}</strong>
          <span>${product.category}</span>
        </div>

        <button class="btn btn-primary btn-full add-to-cart" type="button" data-action="open-product" data-id="${product.id}">
          Ver detalhes
        </button>
      </div>
    </article>
  `;
}

function renderProducts() {
  if (!productsGrid) return;

  const filtered = getFilteredProducts();

  if (!filtered.length) {
    productsGrid.innerHTML = `
      <div class="empty-cart" style="grid-column: 1 / -1;">
        Nenhum produto encontrado.
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(productCardTemplate).join("");
  document.querySelectorAll(".product-card img").forEach(setImageFallback);
  bindProductButtons();
}

function bindProductButtons() {
  document.querySelectorAll(".product-card").forEach((card) => {
    const id = Number(card.dataset.id);
    const button = card.querySelector(".add-to-cart");

    card.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest(".add-to-cart")) return;

      const product = products.find((item) => item.id === id);
      if (!product) return;
      openModal(product, card);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const product = products.find((item) => item.id === id);
        if (!product) return;
        openModal(product, card);
      }
    });

    if (button) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const product = products.find((item) => item.id === id);
        if (!product) return;
        openModal(product, card);
      });
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.dataset.category;
    renderProducts();
  });
});

function syncSearch(value) {
  searchTerm = value.trim();

  if (headerSearchDesktop && headerSearchDesktop.value !== value) {
    headerSearchDesktop.value = value;
  }

  if (headerSearchMobile && headerSearchMobile.value !== value) {
    headerSearchMobile.value = value;
  }

  renderProducts();

  if (searchTerm) {
    const section = document.getElementById("produtos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

if (headerSearchDesktop) {
  headerSearchDesktop.addEventListener("input", (event) => {
    syncSearch(event.target.value);
  });
}

if (headerSearchMobile) {
  headerSearchMobile.addEventListener("input", (event) => {
    syncSearch(event.target.value);
  });
}

/* CARRINHO */
function updateBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) cartBadge.textContent = totalItems;
}

function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (cartTotal) cartTotal.textContent = formatPrice(total);
}

function renderCart() {
  if (!cartItemsContainer) return;

  if (!cart.length) {
    cartItemsContainer.innerHTML = `<div class="empty-cart">Seu carrinho está vazio.</div>`;
    updateBadge();
    updateTotal();
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item, index) => `
    <article class="cart-item">
      <img src="${safeImage(item.image)}" alt="${item.name}" loading="lazy" />
      <div>
        <h4>${item.name}</h4>
        <p>${formatPrice(item.price)}</p>
        <div class="qty-row">
          <div class="qty-controls">
            <button class="qty-btn" type="button" data-action="minus" data-index="${index}" aria-label="Diminuir quantidade">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" type="button" data-action="plus" data-index="${index}" aria-label="Aumentar quantidade">+</button>
          </div>
          <button class="remove-btn" type="button" data-action="remove" data-index="${index}">Remover</button>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".cart-item img").forEach(setImageFallback);

  updateBadge();
  updateTotal();
}

function addToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: safeImage(product.image),
      quantity: 1
    });
  }

  renderCart();
}

function changeQuantity(index, action) {
  if (!cart[index]) return;

  if (action === "plus") {
    cart[index].quantity += 1;
  }

  if (action === "minus") {
    cart[index].quantity -= 1;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
  }

  if (action === "remove") {
    cart.splice(index, 1);
  }

  renderCart();
}

/* MODAL */
function openModal(product, card = null) {
  if (!sideModal || !modalOverlay) return;

  selectedProduct = product;

  if (card) {
    card.classList.add("clicking");
    setTimeout(() => {
      card.classList.remove("clicking");
    }, 160);
  }

  modalImage.src = safeImage(product.image);
  modalImage.alt = product.name;
  setImageFallback(modalImage);

  modalTitle.textContent = product.name;
  modalCategory.textContent = product.category;
  modalPrice.textContent = formatPrice(product.price);
  modalDescription.textContent = product.description;
  modalSpecs.innerHTML = product.specs.map((spec) => `<li>${spec}</li>`).join("");

  sideModal.classList.add("active");
  modalOverlay.classList.add("active");
  sideModal.setAttribute("aria-hidden", "false");
  lockBodyScroll();
}

function closeProductModal() {
  if (!sideModal || !modalOverlay) return;

  sideModal.classList.remove("active");
  modalOverlay.classList.remove("active");
  sideModal.setAttribute("aria-hidden", "true");
  unlockBodyScrollIfPossible();
}

/* LIGHTBOX */
function openLightbox(src, alt) {
  if (!lightboxOverlay || !lightboxImage) return;

  lightboxImage.src = safeImage(src);
  lightboxImage.alt = alt || "Imagem ampliada";
  setImageFallback(lightboxImage);

  lightboxOverlay.classList.add("active");
  lightboxOverlay.setAttribute("aria-hidden", "false");
  lockBodyScroll();
}

function closeLightbox() {
  if (!lightboxOverlay) return;

  lightboxOverlay.classList.remove("active");
  lightboxOverlay.setAttribute("aria-hidden", "true");
  unlockBodyScrollIfPossible();
}

/* EVENTOS */
if (cartTrigger) cartTrigger.addEventListener("click", openCart);
if (cartTriggerBottom) cartTriggerBottom.addEventListener("click", openCart);
if (closeCart) closeCart.addEventListener("click", closeCartDrawer);
if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);

if (closeModal) closeModal.addEventListener("click", closeProductModal);
if (modalOverlay) modalOverlay.addEventListener("click", closeProductModal);

if (modalImage) {
  modalImage.addEventListener("click", () => {
    if (selectedProduct) {
      openLightbox(selectedProduct.image, selectedProduct.name);
    }
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightboxOverlay) {
  lightboxOverlay.addEventListener("click", (event) => {
    if (event.target === lightboxOverlay) {
      closeLightbox();
    }
  });
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const action = target.dataset.action;
  const index = target.dataset.index;

  if (action && index !== undefined && (action === "plus" || action === "minus" || action === "remove")) {
    changeQuantity(Number(index), action);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (lightboxOverlay?.classList.contains("active")) {
    closeLightbox();
    return;
  }

  if (sideModal?.classList.contains("active")) {
    closeProductModal();
    return;
  }

  if (cartDrawer?.classList.contains("active")) {
    closeCartDrawer();
  }
});

if (finishOrder) {
  finishOrder.addEventListener("click", () => {
    if (!selectedProduct) return;

    addToCart(selectedProduct);
    closeProductModal();
    openCart();
  });
}

if (checkoutWhatsapp) {
  checkoutWhatsapp.addEventListener("click", () => {
    if (!cart.length) {
      alert("Seu carrinho está vazio.");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const lines = [
      "Olá! Quero fechar meu pedido na Sonatech BH.",
      ""
    ];

    cart.forEach((item) => {
      lines.push(`${item.quantity}x ${item.name} - ${formatPrice(item.price)}`);
    });

    lines.push("");
    lines.push(`Total: ${formatPrice(total)}`);
    lines.push("Retirada/entrega a combinar.");
    lines.push("Endereço da loja: Rua Santo Inácio de Loyola 391 - Jardim Felicidade");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");
  });
}

/* FALLBACK GLOBAL EXTRA */
window.addEventListener("load", () => {
  document.querySelectorAll("img").forEach(setImageFallback);
});

/* INIT */
renderProducts();
renderCart();
