const WHATSAPP_NUMBER = "553183209688";

const products = [
  {
    id: 1,
    category: "Celulares",
    badge: "Mais vendido",
    name: "Xiaomi Redmi Note 13 256GB",
    price: 1499.90,
    image: "img/celular-redmi-note-13.jpg",
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
    image: "img/celular-galaxy-a15.jpg",
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
    image: "img/celular-moto-g84.jpg",
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
    image: "img/celular-iphone-11.jpg",
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
    image: "img/celular-realme-c67.jpg",
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
    image: "img/celular-galaxy-a25.jpg",
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
    image: "img/celular-poco-x6.jpg",
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
    image: "img/capinha-antimpacto-transparente.jpg",
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
    image: "img/capinha-silicone-fosca.jpg",
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
    image: "img/capinha-magsafe.jpg",
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
    image: "img/capinha-armor.jpg",
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
    image: "img/capinha-color.jpg",
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
    image: "img/capinha-carteira.jpg",
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
    image: "img/capinha-slim.jpg",
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
    name: "Carregador Turbo 20W USB-C",
    price: 49.90,
    image: "img/carregador-turbo-20w.jpg",
    description: "Carregamento rápido para quem quer mais praticidade no dia a dia.",
    shortSpecs: ["20W", "USB-C", "Rápido"],
    specs: [
      "Potência de 20W",
      "Entrada bivolt",
      "Saída USB-C",
      "Carregamento rápido",
      "Compacto",
      "Ideal para uso diário"
    ]
  },
  {
    id: 16,
    category: "Carregadores",
    badge: "Mais forte",
    name: "Carregador Turbo 33W com Cabo",
    price: 69.90,
    image: "img/carregador-turbo-33w.jpg",
    description: "Mais potência, mais velocidade e melhor experiência na recarga.",
    shortSpecs: ["33W", "Cabo incluso", "Turbo"],
    specs: [
      "Potência de 33W",
      "Acompanha cabo",
      "Carregamento rápido",
      "Proteção contra sobrecarga",
      "Boa durabilidade",
      "Excelente custo-benefício"
    ]
  },

  {
    id: 17,
    category: "Acessórios",
    badge: "Som forte",
    name: "Caixa de Som Bluetooth Portátil",
    price: 129.90,
    image: "img/caixa-som-bluetooth.jpg",
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
    name: "Cabo Conector USB-C Reforçado",
    price: 24.90,
    image: "img/cabo-usbc-reforcado.jpg",
    description: "Cabo resistente para carregar com segurança e durar mais.",
    shortSpecs: ["USB-C", "Reforçado", "1 metro"],
    specs: [
      "Conector USB-C",
      "Cabo reforçado",
      "Comprimento de 1 metro",
      "Boa transferência de energia",
      "Maior resistência",
      "Item de alta saída"
    ]
  },
  {
    id: 19,
    category: "Acessórios",
    badge: "Prático",
    name: "Suporte Veicular para Telefone",
    price: 39.90,
    image: "img/suporte-veicular.jpg",
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
    name: "Garrafa Térmica Inox 500ml",
    price: 59.90,
    image: "img/garrafa-termica-500ml.jpg",
    description: "Produto bonito, útil e fácil de vender no balcão.",
    shortSpecs: ["500ml", "Inox", "Térmica"],
    specs: [
      "Capacidade de 500ml",
      "Corpo em inox",
      "Mantém temperatura por mais tempo",
      "Boa vedação",
      "Visual moderno",
      "Ótima opção para utilidades"
    ]
  },
  {
    id: 21,
    category: "Acessórios",
    badge: "Áudio",
    name: "Fone Bluetooth Sem Fio Premium",
    price: 89.90,
    image: "img/fone-bluetooth-premium.jpg",
    description: "Som limpo, conexão estável e produto que vende bem no impulso.",
    shortSpecs: ["Sem fio", "Bluetooth", "Case"],
    specs: [
      "Conexão Bluetooth estável",
      "Case para recarga",
      "Som limpo",
      "Design moderno",
      "Boa autonomia de bateria",
      "Ótimo para música e chamadas"
    ]
  },
  {
    id: 22,
    category: "Acessórios",
    badge: "Clássico",
    name: "Fone com Fio P2",
    price: 29.90,
    image: "img/fone-com-fio-p2.jpg",
    description: "Opção simples, útil e barata para quem quer ouvir sem depender de bateria.",
    shortSpecs: ["Com fio", "P2", "Leve"],
    specs: [
      "Conector P2",
      "Som claro",
      "Leve e confortável",
      "Microfone integrado",
      "Boa opção econômica",
      "Produto de fácil saída"
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
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
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
    const searchMatch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortSpecs.join(" ").toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });
}

function productCardTemplate(product) {
  return `
    <article class="product-card" data-id="${product.id}" tabindex="0" role="button" aria-label="Abrir detalhes de ${product.name}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
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
      </div>
    </article>
  `;
}

function renderProducts() {
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
  bindProductButtons();
}

function bindProductButtons() {
  document.querySelectorAll(".product-card").forEach((card) => {
    const id = Number(card.dataset.id);

    card.addEventListener("click", () => {
      const product = products.find((item) => item.id === id);
      if (!product) return;
      openModal(product);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const product = products.find((item) => item.id === id);
        if (!product) return;
        openModal(product);
      }
    });
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
function openCart() {
  cartDrawer.classList.add("active");
  cartOverlay.classList.add("active");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  cartDrawer.classList.remove("active");
  cartOverlay.classList.remove("active");
  cartDrawer.setAttribute("aria-hidden", "true");

  if (!sideModal.classList.contains("active")) {
    document.body.style.overflow = "";
  }
}

function updateBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalItems;
}

function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = formatPrice(total);
}

function renderCart() {
  if (!cart.length) {
    cartItemsContainer.innerHTML = `<div class="empty-cart">Seu carrinho está vazio.</div>`;
    updateBadge();
    updateTotal();
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item, index) => `
    <article class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
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
  `).join("");

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
      image: product.image,
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
function openModal(product) {
  selectedProduct = product;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalTitle.textContent = product.name;
  modalCategory.textContent = product.category;
  modalPrice.textContent = formatPrice(product.price);
  modalDescription.textContent = product.description;
  modalSpecs.innerHTML = product.specs.map((spec) => `<li>${spec}</li>`).join("");

  sideModal.classList.add("active");
  modalOverlay.classList.add("active");
  sideModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  sideModal.classList.remove("active");
  modalOverlay.classList.remove("active");
  sideModal.setAttribute("aria-hidden", "true");

  if (!cartDrawer.classList.contains("active")) {
    document.body.style.overflow = "";
  }
}

/* EVENTOS */
if (cartTrigger) cartTrigger.addEventListener("click", openCart);
if (closeCart) closeCart.addEventListener("click", closeCartDrawer);
if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);

if (closeModal) closeModal.addEventListener("click", closeProductModal);
if (modalOverlay) modalOverlay.addEventListener("click", closeProductModal);

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const action = target.dataset.action;
  const index = target.dataset.index;

  if (action && index !== undefined) {
    changeQuantity(Number(index), action);
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

    const lines = [
      "Olá! Quero fechar meu pedido na Sonatech BH.",
      ""
    ];

    cart.forEach((item) => {
      lines.push(`${item.quantity}x ${item.name} - ${formatPrice(item.price)}`);
    });

    lines.push("");
    lines.push(`Total: ${cartTotal.textContent}`);
    lines.push("Retirada/entrega a combinar.");
    lines.push("Endereço da loja: Rua Santo Inácio de Loyola 391 - Jardim Felicidade");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");
  });
}

/* INIT */
renderProducts();
renderCart();
