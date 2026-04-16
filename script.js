const WHATSAPP_NUMBER = "553183209688";

const products = [
  { id:1, category:"Celular", name:"iPhone 11 128GB", price:2399, image:"img/celular-1.jpg", description:"iPhone com excelente percepção de valor, visual premium e ótima procura.", specs:["128GB","Tela 6.1","Face ID","Dual câmera"] },
  { id:2, category:"Celular", name:"iPhone 12 128GB", price:2899, image:"img/celular-2.jpg", description:"Modelo premium com presença visual forte e ótimo apelo comercial.", specs:["128GB","5G","Tela OLED","Chip A14"] },
  { id:3, category:"Celular", name:"iPhone 13 128GB", price:3399, image:"img/celular-3.jpg", description:"Flagship para vitrine premium e ticket mais alto.", specs:["128GB","5G","Câmera dupla","Bateria otimizada"] },
  { id:4, category:"Celular", name:"Samsung Galaxy A15", price:1199, image:"img/celular-4.jpg", description:"Boa opção de entrada com visual bonito e venda fácil.", specs:["128GB","Tela ampla","Boa bateria","Câmera múltipla"] },
  { id:5, category:"Celular", name:"Samsung Galaxy A25 5G", price:1699, image:"img/celular-5.jpg", description:"Modelo equilibrado, moderno e forte para ticket médio.", specs:["256GB","5G","Super AMOLED","Carregamento rápido"] },
  { id:6, category:"Celular", name:"Samsung Galaxy S21 FE", price:2499, image:"img/celular-6.jpg", description:"Linha premium com presença forte em qualquer vitrine.", specs:["128GB","AMOLED","5G","Construção premium"] },
  { id:7, category:"Celular", name:"Redmi Note 13", price:1499, image:"img/celular-7.jpg", description:"Boa combinação entre design, tela e custo-benefício.", specs:["256GB","AMOLED","Boa câmera","Boa autonomia"] },
  { id:8, category:"Celular", name:"Redmi Note 12", price:1299, image:"img/celular-8.jpg", description:"Modelo moderno para rotina, mídia e redes sociais.", specs:["128GB","AMOLED","Dual SIM","Boa bateria"] },
  { id:9, category:"Celular", name:"Poco X5 5G", price:1799, image:"img/celular-9.jpg", description:"Desempenho forte e pegada mais jovem.", specs:["256GB","5G","Tela fluida","Ótimo desempenho"] },
  { id:10, category:"Celular", name:"Moto G54 5G", price:1399, image:"img/celular-10.jpg", description:"Boa apresentação, bom som e ótima usabilidade.", specs:["128GB","5G","Som estéreo","Boa bateria"] },
  { id:11, category:"Celular", name:"Moto G84 5G", price:1899, image:"img/celular-11.jpg", description:"Mais refinado e com visual premium.", specs:["256GB","5G","Tela pOLED","Design fino"] },
  { id:12, category:"Celular", name:"Infinix Hot 30", price:999, image:"img/celular-12.jpg", description:"Modelo acessível com apelo visual moderno.", specs:["128GB","Tela grande","Boa bateria","Uso diário"] },
  { id:13, category:"Celular", name:"Realme C55", price:1249, image:"img/celular-13.jpg", description:"Modelo equilibrado para um catálogo forte.", specs:["256GB","Boa câmera","Design moderno","Carregamento rápido"] },
  { id:14, category:"Celular", name:"iPhone XR 128GB", price:1999, image:"img/celular-14.jpg", description:"Ainda muito desejado e excelente para vitrine.", specs:["128GB","Face ID","Boa câmera","Liquid Retina"] },
  { id:15, category:"Celular", name:"Samsung Galaxy A05", price:899, image:"img/celular-15.jpg", description:"Entrada funcional, bonito e vendável.", specs:["128GB","Tela ampla","Boa bateria","Uso diário"] },

  { id:16, category:"Capinha", name:"Capinha iPhone 11 Transparente", price:39.9, image:"img/capinha-1.jpg", description:"Capinha leve, bonita e fácil de vender.", specs:["Transparente","Bordas reforçadas","Leve","Encaixe preciso"] },
  { id:17, category:"Capinha", name:"Capinha iPhone 12 Antichoque", price:49.9, image:"img/capinha-2.jpg", description:"Proteção mais premium e com valor percebido maior.", specs:["Antichoque","Proteção premium","Laterais reforçadas","Durável"] },
  { id:18, category:"Capinha", name:"Capinha iPhone 13 Silicone", price:44.9, image:"img/capinha-3.jpg", description:"Silicone macio com acabamento agradável.", specs:["Silicone","Interior aveludado","Encaixe firme","Visual clean"] },
  { id:19, category:"Capinha", name:"Capinha Samsung A15", price:34.9, image:"img/capinha-4.jpg", description:"Boa opção de proteção diária.", specs:["Leve","Resistente","Bordas altas","Boa proteção"] },
  { id:20, category:"Capinha", name:"Capinha Samsung A25 5G", price:39.9, image:"img/capinha-5.jpg", description:"Combina bem com película para aumentar ticket.", specs:["Design premium","Boa pegada","Proteção traseira","Encaixe firme"] },
  { id:21, category:"Capinha", name:"Capinha Redmi Note 13", price:34.9, image:"img/capinha-6.jpg", description:"Visual limpo e resistente.", specs:["TPU","Boa aderência","Recortes precisos","Durável"] },
  { id:22, category:"Capinha", name:"Capinha Redmi Note 12", price:34.9, image:"img/capinha-7.jpg", description:"Prática e fácil de compor no catálogo.", specs:["Leve","Fácil de limpar","Resistente","Visual moderno"] },
  { id:23, category:"Capinha", name:"Capinha Moto G54", price:34.9, image:"img/capinha-8.jpg", description:"Proteção com melhor acabamento.", specs:["TPU premium","Bordas altas","Proteção da câmera","Encaixe exato"] },
  { id:24, category:"Capinha", name:"Capinha Moto G84", price:39.9, image:"img/capinha-9.jpg", description:"Mais premium visualmente.", specs:["Resistente","Leve","Visual premium","Boa proteção"] },
  { id:25, category:"Capinha", name:"Capinha Universal Premium", price:29.9, image:"img/capinha-10.jpg", description:"Boa para ampliar mix da loja.", specs:["Visual moderno","Proteção básica","Boa durabilidade","Versátil"] },

  { id:26, category:"Fone", name:"Fone Bluetooth Pro 01", price:89.9, image:"img/fone-1.jpg", description:"Sem fio, moderno e vendável.", specs:["Bluetooth","Estojo carregador","Som limpo","Microfone"] },
  { id:27, category:"Fone", name:"Fone Bluetooth Pro 02", price:99.9, image:"img/fone-2.jpg", description:"Boa autonomia e visual premium.", specs:["Sem fio","Boa bateria","Conexão rápida","Visual premium"] },
  { id:28, category:"Fone", name:"Fone Gamer In Ear", price:69.9, image:"img/fone-3.jpg", description:"Ótimo para linha gamer e jovem.", specs:["In Ear","Som reforçado","Microfone","Cabo resistente"] },
  { id:29, category:"Fone", name:"Headset Dobrável", price:119.9, image:"img/fone-4.jpg", description:"Mais robusto, melhor valor percebido.", specs:["Dobrável","Som estéreo","Conforto","Arco ajustável"] },
  { id:30, category:"Fone", name:"Fone USB-C Premium", price:59.9, image:"img/fone-5.jpg", description:"Prático e fácil de vender junto com aparelho.", specs:["USB-C","Som nítido","Microfone","Prático"] },

  { id:31, category:"Caixa de Som", name:"Caixa Bluetooth Mini", price:129.9, image:"img/caixa-1.jpg", description:"Compacta e com boa saída comercial.", specs:["Bluetooth","Compacta","Boa potência","Portátil"] },
  { id:32, category:"Caixa de Som", name:"Caixa Bluetooth Plus", price:179.9, image:"img/caixa-2.jpg", description:"Mais presença e melhor ticket.", specs:["Graves fortes","Bluetooth","Bateria durável","Design moderno"] },
  { id:33, category:"Caixa de Som", name:"Caixa Portátil LED", price:199.9, image:"img/caixa-3.jpg", description:"Visual chamativo para vitrine.", specs:["LED","Bluetooth","Portátil","Boa autonomia"] },
  { id:34, category:"Caixa de Som", name:"Caixa Compact Bass", price:149.9, image:"img/caixa-4.jpg", description:"Boa opção intermediária.", specs:["Bass reforçado","Compacta","Bluetooth","Som limpo"] },
  { id:35, category:"Caixa de Som", name:"Caixa Speaker Max", price:239.9, image:"img/caixa-5.jpg", description:"Produto forte para destaque premium.", specs:["Alta potência","Bluetooth","Bateria","Visual robusto"] },

  { id:36, category:"Película", name:"Película iPhone 11 3D", price:29.9, image:"img/pelicula-1.jpg", description:"Proteção premium para compor venda.", specs:["Vidro 3D","Alta transparência","Boa aderência","Proteção diária"] },
  { id:37, category:"Película", name:"Película iPhone 12", price:29.9, image:"img/pelicula-2.jpg", description:"Proteção clara e vendável.", specs:["Vidro temperado","Toque suave","Recorte exato","Resistente"] },
  { id:38, category:"Película", name:"Película iPhone 13", price:34.9, image:"img/pelicula-3.jpg", description:"Mais premium para ticket melhor.", specs:["Vidro premium","Alta proteção","Transparente","Boa sensibilidade"] },
  { id:39, category:"Película", name:"Película Samsung A15", price:24.9, image:"img/pelicula-4.jpg", description:"Boa proteção para giro rápido.", specs:["Vidro","Fácil aplicação","Boa proteção","Modelo exato"] },
  { id:40, category:"Película", name:"Película Samsung A25", price:24.9, image:"img/pelicula-5.jpg", description:"Boa combinação com capinha.", specs:["Vidro temperado","Leve","Transparente","Resistente"] },
  { id:41, category:"Película", name:"Película Redmi Note 13", price:24.9, image:"img/pelicula-6.jpg", description:"Ajuda a elevar ticket médio.", specs:["Boa aderência","Fácil aplicação","Clara","Proteção frontal"] },
  { id:42, category:"Película", name:"Película Redmi Note 12", price:24.9, image:"img/pelicula-7.jpg", description:"Boa opção de venda rápida.", specs:["Vidro","Boa resposta","Transparente","Proteção frontal"] },
  { id:43, category:"Película", name:"Película Moto G54", price:24.9, image:"img/pelicula-8.jpg", description:"Prática e funcional.", specs:["Vidro","Clara","Boa fixação","Proteção diária"] },
  { id:44, category:"Película", name:"Película Moto G84", price:24.9, image:"img/pelicula-9.jpg", description:"Ótima para kit com capinha.", specs:["Temperada","Fácil aplicação","Proteção frontal","Alta transparência"] },
  { id:45, category:"Película", name:"Película Universal Ajustável", price:19.9, image:"img/pelicula-10.jpg", description:"Mais variedade para o mix.", specs:["Universal","Boa cobertura","Proteção básica","Preço acessível"] }
];

const productsGrid = document.getElementById("productsGrid");
const filterButtons = document.querySelectorAll(".filter");
const catalogSearch = document.getElementById("catalogSearch");

const overlay = document.getElementById("overlay");
const productDrawer = document.getElementById("productDrawer");
const cartDrawer = document.getElementById("cartDrawer");

const drawerImage = document.getElementById("drawerImage");
const drawerCategory = document.getElementById("drawerCategory");
const drawerTitle = document.getElementById("drawerTitle");
const drawerPrice = document.getElementById("drawerPrice");
const drawerDesc = document.getElementById("drawerDesc");
const drawerSpecs = document.getElementById("drawerSpecs");

const addToCartBtn = document.getElementById("addToCartBtn");
const buyNowBtn = document.getElementById("buyNowBtn");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const openCartBtn = document.getElementById("openCart");
const closeCartDrawerBtn = document.getElementById("closeCartDrawer");
const closeProductDrawerBtn = document.getElementById("closeProductDrawer");
const checkoutForm = document.getElementById("checkoutForm");
const assistForm = document.getElementById("assistForm");

const siteHeader = document.querySelector(".site-header");
const cursorGlow = document.getElementById("cursorGlow");
const signatureImage = document.getElementById("signatureImage");
const signatureItems = document.querySelectorAll(".signature-item");

let activeFilter = "all";
let selectedProduct = null;
let cart = [];

function formatPrice(value){
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderProducts(){
  const term = catalogSearch.value.trim().toLowerCase();

  const filtered = products.filter(product => {
    const byFilter = activeFilter === "all" ? true : product.category === activeFilter;
    const bySearch =
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term);
    return byFilter && bySearch;
  });

  productsGrid.innerHTML = filtered.map(product => `
    <article class="product-card reveal">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-bottom">
          <div class="product-price">${formatPrice(product.price)}</div>
          <div class="product-actions">
            <button class="small-btn secondary" onclick="openProduct(${product.id})">+</button>
            <button class="small-btn primary" onclick="addProductToCart(${product.id})">🛒</button>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  initReveal();
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderProducts();
  });
});

catalogSearch.addEventListener("input", renderProducts);

function openOverlay(){
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeOverlayIfNeeded(){
  if(!productDrawer.classList.contains("active") && !cartDrawer.classList.contains("active")){
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function openProduct(id){
  const product = products.find(item => item.id === id);
  if(!product) return;

  selectedProduct = product;
  drawerImage.src = product.image;
  drawerImage.alt = product.name;
  drawerCategory.textContent = product.category;
  drawerTitle.textContent = product.name;
  drawerPrice.textContent = formatPrice(product.price);
  drawerDesc.textContent = product.description;
  drawerSpecs.innerHTML = product.specs.map(spec => `<li>• ${spec}</li>`).join("");

  productDrawer.classList.add("active");
  openOverlay();

  if(typeof fbq !== "undefined"){
    fbq("track", "ViewContent", {
      content_name: product.name,
      content_category: product.category,
      value: product.price,
      currency: "BRL"
    });
  }
}
window.openProduct = openProduct;

function closeProductDrawer(){
  productDrawer.classList.remove("active");
  closeOverlayIfNeeded();
}
function openCart(){
  cartDrawer.classList.add("active");
  openOverlay();
}
function closeCart(){
  cartDrawer.classList.remove("active");
  closeOverlayIfNeeded();
}

closeProductDrawerBtn.addEventListener("click", closeProductDrawer);
closeCartDrawerBtn.addEventListener("click", closeCart);
openCartBtn.addEventListener("click", openCart);

overlay.addEventListener("click", () => {
  closeProductDrawer();
  closeCart();
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    closeProductDrawer();
    closeCart();
  }
});

function addProductToCart(id){
  const product = products.find(item => item.id === id);
  if(!product) return;

  const existing = cart.find(item => item.id === id);
  if(existing){
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();

  if(typeof fbq !== "undefined"){
    fbq("track", "AddToCart", {
      content_name: product.name,
      content_category: product.category,
      value: product.price,
      currency: "BRL"
    });
  }
}
window.addProductToCart = addProductToCart;

function removeFromCart(id){
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}
window.removeFromCart = removeFromCart;

addToCartBtn.addEventListener("click", () => {
  if(selectedProduct){
    addProductToCart(selectedProduct.id);
    closeProductDrawer();
    openCart();
  }
});

buyNowBtn.addEventListener("click", () => {
  if(selectedProduct){
    cart = [{ ...selectedProduct, qty: 1 }];
    updateCartUI();
    closeProductDrawer();
    openCart();
  }
});

function updateCartUI(){
  if(cart.length === 0){
    cartItems.innerHTML = `<p style="color:#647288">Seu carrinho está vazio.</p>`;
  } else {
    cartItems.innerHTML = cart.map(item => `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <p>${formatPrice(item.price)} • Qtd: ${item.qty}</p>
        </div>
        <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
      </article>
    `).join("");
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  cartTotal.textContent = formatPrice(total);
  cartCount.textContent = totalItems;
}

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if(cart.length === 0){
    alert("Seu carrinho está vazio.");
    return;
  }

  const nome = document.getElementById("checkoutNome").value.trim();
  const endereco = document.getElementById("checkoutEndereco").value.trim();
  const pagamento = document.querySelector('input[name="pagamento"]:checked')?.value || "Pix";

  const list = cart.map(item =>
    `- ${item.name} | ${formatPrice(item.price)} | Qtd: ${item.qty}`
  ).join("\n");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const message = `
Olá! Quero finalizar um pedido.

Cliente: ${nome}
Endereço: ${endereco}

Produtos:
${list}

Total: ${formatPrice(total)}
Pagamento: ${pagamento}
  `.trim();

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  if(typeof fbq !== "undefined"){
    fbq("track", "InitiateCheckout");
  }

  window.open(url, "_blank");
});

assistForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("assistNome").value.trim();
  const telefone = document.getElementById("assistTelefone").value.trim();
  const endereco = document.getElementById("assistEndereco").value.trim();
  const modelo = document.getElementById("assistModelo").value.trim();
  const problema = document.getElementById("assistProblema").value.trim();

  const message = `
Olá! Quero solicitar um orçamento de assistência técnica.

Nome: ${nome}
Telefone: ${telefone}
Endereço: ${endereco}
Modelo do aparelho: ${modelo}
Problema informado: ${problema}
  `.trim();

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  if(typeof fbq !== "undefined"){
    fbq("track", "Lead");
  }

  window.open(url, "_blank");
});

document.querySelectorAll(".product-quick").forEach(button => {
  button.addEventListener("click", () => {
    openProduct(Number(button.dataset.id));
  });
});

const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  if(window.scrollY > 24){
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }

  if(window.scrollY > 450){
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
});

const slides = document.querySelectorAll(".hero-slide");
const heroDots = document.getElementById("heroDots");
const prevHero = document.getElementById("prevHero");
const nextHero = document.getElementById("nextHero");
let currentSlide = 0;
let sliderInterval;

function buildDots(){
  heroDots.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    if(index === currentSlide) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
      restartSlider();
    });
    heroDots.appendChild(dot);
  });
}

function updateSlider(){
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });

  [...heroDots.children].forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function nextSlide(){
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}
function prevSlide(){
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
}
function restartSlider(){
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, 5000);
}

nextHero.addEventListener("click", () => {
  nextSlide();
  restartSlider();
});

prevHero.addEventListener("click", () => {
  prevSlide();
  restartSlider();
});

function initReveal(){
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  reveals.forEach(el => observer.observe(el));
}

function initCursorGlow(){
  if(!cursorGlow) return;
  document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });
}

function initParallaxHero(){
  document.addEventListener("mousemove", (e) => {
    const activeSlide = document.querySelector(".hero-slide.active");
    if(!activeSlide) return;

    const moveX = (e.clientX / window.innerWidth - 0.5) * 10;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 10;
    activeSlide.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
  });
}

function initSignatureScroll(){
  if(!signatureImage || !signatureItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        signatureItems.forEach(item => item.classList.remove("active"));
        entry.target.classList.add("active");
        const image = entry.target.getAttribute("data-image");
        if(image){
          signatureImage.style.opacity = "0";
          setTimeout(() => {
            signatureImage.src = image;
            signatureImage.style.opacity = "1";
          }, 180);
        }
      }
    });
  }, { threshold: 0.55 });

  signatureItems.forEach(item => observer.observe(item));
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 800);
});

buildDots();
updateSlider();
restartSlider();
renderProducts();
updateCartUI();
initReveal();
initCursorGlow();
initParallaxHero();
initSignatureScroll();
