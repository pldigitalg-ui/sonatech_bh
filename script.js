# index.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sonatech BH | Assistência Técnica e Acessórios em Geral</title>
  <meta name="description" content="Sonatech BH em Belo Horizonte. Assistência técnica, acessórios em geral, atendimento rápido e compra fácil no WhatsApp." />
  <meta name="keywords" content="sonatech bh, assistência técnica, acessórios em geral, celular, belo horizonte, whatsapp" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Sonatech BH | Assistência Técnica e Acessórios" />
  <meta property="og:description" content="Assistência técnica e acessórios em geral com atendimento rápido no WhatsApp." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://placehold.co/1200x630/f3f7fb/111111?text=Sonatech+BH" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Manrope:wght@700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="site-header" id="topo">
    <div class="container nav-wrap">
      <a href="#inicio" class="brand" aria-label="Sonatech BH">
        <span class="brand-badge">S</span>
        <span class="brand-text">Sonatech BH</span>
      </a>

      <nav class="desktop-nav" aria-label="Menu principal">
        <a href="#inicio">Início</a>
        <a href="#destaques">Destaques</a>
        <a href="#produtos">Produtos</a>
        <a href="#assistencia">Assistência</a>
        <a href="#contato">Contato</a>
      </nav>

      <div class="nav-actions">
        <button class="icon-btn" aria-label="Pesquisar">⌕</button>
        <button class="icon-btn cart-trigger" id="cartTrigger" aria-label="Abrir carrinho">
          🛒
          <span class="cart-badge" id="cartBadge">0</span>
        </button>
        <a class="btn btn-dark desktop-cta" href="https://wa.me/553183209688?text=Olá!%20Quero%20atendimento%20na%20Sonatech%20BH." target="_blank" rel="noopener noreferrer">Atendimento</a>
        <button class="menu-toggle" id="menuToggle" aria-label="Abrir menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div class="mobile-menu" id="mobileMenu">
      <a href="#inicio">Início</a>
      <a href="#destaques">Destaques</a>
      <a href="#produtos">Produtos</a>
      <a href="#assistencia">Assistência</a>
      <a href="#contato">Contato</a>
      <a class="btn btn-primary" href="https://wa.me/553183209688?text=Olá!%20Quero%20atendimento%20na%20Sonatech%20BH." target="_blank" rel="noopener noreferrer">Chamar no WhatsApp</a>
    </div>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-slides">
        <div class="hero-slide active" style="background-image:url('https://placehold.co/1600x820/f4f7fb/111111?text=Sonatech+BH+Premium');"></div>
        <div class="hero-slide" style="background-image:url('https://placehold.co/1600x820/edf3fa/111111?text=Assist%C3%AAncia+e+Acess%C3%B3rios');"></div>
        <div class="hero-slide" style="background-image:url('https://placehold.co/1600x820/f8fbff/111111?text=Compra+R%C3%A1pida+no+WhatsApp');"></div>
      </div>

      <div class="container hero-inner">
        <div class="hero-copy">
          <span class="hero-kicker">SONATECH BH</span>
          <h1>Assistência técnica e acessórios com atendimento rápido</h1>
          <p>O CAMINHO A VERDADE E A VIDA 🕊<br>🔬 Assistência técnica<br>🎯 Acessórios em geral</p>
          <div class="hero-actions">
            <a href="#produtos" class="btn btn-primary">Ver produtos</a>
            <a href="https://wa.me/553183209688?text=Olá!%20Quero%20comprar%20na%20Sonatech%20BH." class="btn btn-light" target="_blank" rel="noopener noreferrer">Comprar no WhatsApp</a>
          </div>
          <div class="hero-location">
            <span>📍 Rua Santo Inácio de Loyola 391</span>
          </div>
        </div>
      </div>

      <div class="hero-dots" id="heroDots">
        <button class="dot active" data-slide="0" aria-label="Slide 1"></button>
        <button class="dot" data-slide="1" aria-label="Slide 2"></button>
        <button class="dot" data-slide="2" aria-label="Slide 3"></button>
      </div>
    </section>

    <section class="strip">
      <div class="container strip-grid">
        <div>Atendimento rápido</div>
        <div>Compra fácil</div>
        <div>WhatsApp direto</div>
        <div>Assistência técnica</div>
      </div>
    </section>

    <section class="section" id="destaques">
      <div class="container">
        <div class="section-head center">
          <span class="section-tag">Destaques</span>
          <h2>Loja clara, premium e pronta para vender</h2>
          <p>Visual limpo, leitura rápida, CTA forte e estrutura certa para mobile.</p>
        </div>

        <div class="highlight-grid">
          <article class="highlight-main">
            <div class="highlight-overlay"></div>
            <div class="highlight-content">
              <span class="mini-tag">Linha premium</span>
              <h3>Produtos e serviços com visual de loja grande</h3>
              <p>Atendimento rápido, oferta direta e navegação simples para vender mais.</p>
              <a href="#produtos" class="btn btn-primary">Comprar agora</a>
            </div>
          </article>

          <div class="highlight-side">
            <article class="small-card">
              <h4>Assistência técnica</h4>
              <p>Troca de tela, bateria, conector e análise.</p>
              <a href="#assistencia" class="text-link">Pedir orçamento</a>
            </article>
            <article class="small-card">
              <h4>Acessórios em geral</h4>
              <p>Capinhas, cabos, carregadores e mais.</p>
              <a href="#produtos" class="text-link">Ver produtos</a>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section products-section" id="produtos">
      <div class="container">
        <div class="section-head">
          <span class="section-tag">Produtos</span>
          <h2>Produtos em destaque</h2>
          <p>Escolha, adicione ao carrinho e feche rápido pelo WhatsApp.</p>
        </div>

        <div class="category-pills">
          <button class="pill active" type="button">Todos</button>
          <button class="pill" type="button">Celulares</button>
          <button class="pill" type="button">Capinhas</button>
          <button class="pill" type="button">Carregadores</button>
          <button class="pill" type="button">Acessórios</button>
        </div>

        <div class="products-grid">
          <article class="product-card">
            <div class="product-image">
              <img src="https://placehold.co/720x720/f6f8fc/111111?text=Smartphone+Premium" alt="Smartphone Premium" loading="lazy">
              <span class="floating-label">Mais vendido</span>
            </div>
            <div class="product-body">
              <h3>Smartphone Premium</h3>
              <p>Desempenho forte, visual premium e venda rápida.</p>
              <div class="price-row">
                <strong>R$ 1.999</strong>
                <span>12x sem juros</span>
              </div>
              <div class="product-actions-grid">
                <button class="btn btn-light add-cart" data-product="Smartphone Premium" data-price="1999" data-image="https://placehold.co/720x720/f6f8fc/111111?text=Smartphone+Premium">Adicionar</button>
                <button class="btn btn-primary buy-now" data-product="Smartphone Premium" data-price="1999" data-image="https://placehold.co/720x720/f6f8fc/111111?text=Smartphone+Premium">Comprar agora</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-image">
              <img src="https://placehold.co/720x720/f6f8fc/111111?text=Capinha+Premium" alt="Capinha Premium" loading="lazy">
              <span class="floating-label">Novo</span>
            </div>
            <div class="product-body">
              <h3>Capinha Premium</h3>
              <p>Proteção, estilo e ótimo giro no balcão.</p>
              <div class="price-row">
                <strong>R$ 49,90</strong>
                <span>Várias cores</span>
              </div>
              <div class="product-actions-grid">
                <button class="btn btn-light add-cart" data-product="Capinha Premium" data-price="49.90" data-image="https://placehold.co/720x720/f6f8fc/111111?text=Capinha+Premium">Adicionar</button>
                <button class="btn btn-primary buy-now" data-product="Capinha Premium" data-price="49.90" data-image="https://placehold.co/720x720/f6f8fc/111111?text=Capinha+Premium">Comprar agora</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-image">
              <img src="https://placehold.co/720x720/f6f8fc/111111?text=Carregador+Turbo" alt="Carregador Turbo" loading="lazy">
              <span class="floating-label">Destaque</span>
            </div>
            <div class="product-body">
              <h3>Carregador Turbo</h3>
              <p>Carregamento rápido para o dia a dia.</p>
              <div class="price-row">
                <strong>R$ 39,90</strong>
                <span>Alta saída</span>
              </div>
              <div class="product-actions-grid">
                <button class="btn btn-light add-cart" data-product="Carregador Turbo" data-price="39.90" data-image="https://placehold.co/720x720/f6f8fc/111111?text=Carregador+Turbo">Adicionar</button>
                <button class="btn btn-primary buy-now" data-product="Carregador Turbo" data-price="39.90" data-image="https://placehold.co/720x720/f6f8fc/111111?text=Carregador+Turbo">Comprar agora</button>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-image">
              <img src="https://placehold.co/720x720/f6f8fc/111111?text=Fone+Bluetooth" alt="Fone Bluetooth" loading="lazy">
              <span class="floating-label">Oferta</span>
            </div>
            <div class="product-body">
              <h3>Fone Bluetooth</h3>
              <p>Som limpo, visual moderno e ótima margem.</p>
              <div class="price-row">
                <strong>R$ 89,90</strong>
                <span>Entrega rápida</span>
              </div>
              <div class="product-actions-grid">
                <button class="btn btn-light add-cart" data-product="Fone Bluetooth" data-price="89.90" data-image="https://placehold.co/720x720/f6f8fc/111111?text=Fone+Bluetooth">Adicionar</button>
                <button class="btn btn-primary buy-now" data-product="Fone Bluetooth" data-price="89.90" data-image="https://placehold.co/720x720/f6f8fc/111111?text=Fone+Bluetooth">Comprar agora</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section assistance-section" id="assistencia">
      <div class="container assistance-grid">
        <div class="assistance-copy">
          <span class="section-tag">Assistência técnica</span>
          <h2>Conserto com resposta rápida</h2>
          <p>Seu aparelho com mais agilidade, atendimento direto e orçamento fácil no WhatsApp.</p>
          <ul>
            <li>Troca de tela</li>
            <li>Troca de bateria</li>
            <li>Conector de carga</li>
            <li>Análise de defeitos</li>
          </ul>
          <a href="https://wa.me/553183209688?text=Olá!%20Quero%20um%20orçamento%20na%20Sonatech%20BH." class="btn btn-primary" target="_blank" rel="noopener noreferrer">Pedir orçamento</a>
        </div>
        <div class="assistance-visual">
          <img src="https://placehold.co/1100x850/f3f7fb/111111?text=Assist%C3%AAncia+T%C3%A9cnica" alt="Assistência técnica" loading="lazy">
        </div>
      </div>
    </section>

    <section class="section" id="contato">
      <div class="container contact-grid">
        <div class="contact-box">
          <span class="section-tag">Contato</span>
          <h2>Fale com a Sonatech BH</h2>
          <p>Atendimento rápido para compra, orçamento e suporte.</p>
          <div class="contact-item"><strong>WhatsApp</strong><span>(31) 8320-9688</span></div>
          <div class="contact-item"><strong>Endereço</strong><span>Rua Santo Inácio de Loyola 391</span></div>
          <div class="contact-item"><strong>Mensagem principal</strong><span>O CAMINHO A VERDADE E A VIDA 🕊</span></div>
        </div>
        <div class="map-box">
          <iframe title="Mapa" src="https://www.google.com/maps?q=Rua%20Santo%20In%C3%A1cio%20de%20Loyola%20391&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-wrap">
      <div>
        <h3>Sonatech BH</h3>
        <p>Assistência técnica e acessórios em geral.</p>
      </div>
      <div class="footer-links">
        <a href="#inicio">Início</a>
        <a href="#produtos">Produtos</a>
        <a href="#assistencia">Assistência</a>
        <a href="#contato">Contato</a>
      </div>
    </div>
  </footer>

  <a class="floating-whatsapp" id="floatingWhatsapp" href="https://wa.me/553183209688?text=Olá!%20Quero%20atendimento%20na%20Sonatech%20BH." target="_blank" rel="noopener noreferrer">WhatsApp</a>
  <button class="back-to-top" id="backToTop" aria-label="Voltar ao topo">↑</button>

  <div class="cart-overlay" id="cartOverlay"></div>
  <aside class="cart-drawer" id="cartDrawer" aria-hidden="true">
    <div class="drawer-header">
      <h3>Seu carrinho</h3>
      <button class="close-btn" id="closeCart" aria-label="Fechar carrinho">✕</button>
    </div>
    <div class="drawer-body" id="cartItems"></div>
    <div class="drawer-footer">
      <div class="total-row">
        <span>Total</span>
        <strong id="cartTotal">R$ 0,00</strong>
      </div>
      <button class="btn btn-primary btn-full" id="checkoutWhatsapp">Fechar no WhatsApp</button>
    </div>
  </aside>

  <div class="modal-overlay" id="modalOverlay"></div>
  <aside class="side-modal" id="sideModal" aria-hidden="true">
    <div class="side-modal-inner">
      <button class="close-btn" id="closeModal" aria-label="Fechar modal">✕</button>
      <img id="modalImage" src="https://placehold.co/720x720" alt="Produto selecionado">
      <span class="mini-tag">Compra rápida</span>
      <h3 id="modalTitle">Produto</h3>
      <p class="modal-price" id="modalPrice">R$ 0,00</p>
      <div class="form-grid">
        <input type="text" id="clientName" placeholder="Seu nome">
        <input type="text" id="clientPhone" placeholder="Seu telefone">
        <input type="text" id="clientAddress" placeholder="Endereço">
        <select id="paymentMethod">
          <option value="PIX">PIX</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>
        <textarea id="clientNotes" rows="4" placeholder="Observações do pedido"></textarea>
      </div>
      <button class="btn btn-primary btn-full" id="finishOrder">Finalizar no WhatsApp</button>
    </div>
  </aside>

  <script src="script.js"></script>
</body>
</html>
```

# style.css

```css
:root{
  --bg:#f7f9fc;
  --bg-soft:#eef3f8;
  --white:#ffffff;
  --text:#111111;
  --muted:#626b77;
  --line:#d9e2ec;
  --primary:#1695ff;
  --primary-2:#63beff;
  --black:#101216;
  --shadow:0 18px 50px rgba(17,17,17,.08);
  --radius:26px;
  --container:1240px;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;color:var(--text);background:linear-gradient(180deg,#ffffff 0%,#f6f9fc 100%);overflow-x:hidden}
img{display:block;max-width:100%}
a{text-decoration:none;color:inherit}
button,input,select,textarea{font:inherit}
button{border:none;cursor:pointer;background:none}
.container{width:min(100% - 32px,var(--container));margin-inline:auto}

.site-header{position:sticky;top:0;z-index:1000;background:rgba(255,255,255,.9);backdrop-filter:blur(14px);border-bottom:1px solid rgba(16,18,22,.06)}
.nav-wrap{min-height:78px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.brand{display:flex;align-items:center;gap:12px;font-weight:900;letter-spacing:-.03em}
.brand-badge{width:42px;height:42px;border-radius:14px;display:grid;place-items:center;background:linear-gradient(135deg,var(--primary),var(--primary-2));color:#fff;box-shadow:0 12px 25px rgba(22,149,255,.22)}
.brand-text{font-family:'Manrope',sans-serif;font-size:1.06rem}
.desktop-nav{display:flex;align-items:center;gap:28px}
.desktop-nav a{font-weight:600;color:#2c3440;transition:.25s ease}
.desktop-nav a:hover{color:var(--primary)}
.nav-actions{display:flex;align-items:center;gap:12px}
.icon-btn,.menu-toggle{width:46px;height:46px;border-radius:14px;display:grid;place-items:center;background:#f4f7fb;border:1px solid rgba(16,18,22,.06);position:relative}
.cart-badge{position:absolute;top:-4px;right:-2px;min-width:22px;height:22px;padding:0 6px;border-radius:999px;display:grid;place-items:center;background:var(--primary);color:#fff;font-size:.75rem;font-weight:800}
.menu-toggle{display:none;align-items:center;justify-content:center;flex-direction:column;gap:5px}
.menu-toggle span{width:20px;height:2px;background:#111;border-radius:999px}
.mobile-menu{display:none;flex-direction:column;gap:14px;padding:0 16px 18px;background:#fff;border-top:1px solid rgba(16,18,22,.06)}
.mobile-menu.active{display:flex}
.mobile-menu a{font-weight:600;color:#2c3440}

.btn{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 22px;border-radius:14px;font-weight:800;transition:.25s ease;border:1px solid transparent}
.btn:hover{transform:translateY(-2px)}
.btn-primary{background:linear-gradient(135deg,var(--primary),var(--primary-2));color:#fff;box-shadow:0 14px 30px rgba(22,149,255,.22)}
.btn-light{background:#fff;color:#111;border-color:#dbe4ef}
.btn-dark{background:#111;color:#fff}
.btn-full{width:100%}

.hero{position:relative;min-height:78vh;overflow:hidden;background:#f3f6fb;border-bottom:1px solid rgba(16,18,22,.06)}
.hero-slides,.hero-slide{position:absolute;inset:0}
.hero-slide{background-size:cover;background-position:center;opacity:0;transition:opacity .8s ease}
.hero-slide.active{opacity:1}
.hero-inner{position:relative;z-index:2;min-height:78vh;display:flex;align-items:center}
.hero-copy{max-width:620px;padding:80px 0}
.hero-kicker{display:inline-block;margin-bottom:14px;color:var(--primary);font-weight:800;font-size:.85rem;letter-spacing:.08em}
.hero h1{font-family:'Manrope',sans-serif;font-size:clamp(2.5rem,5vw,4.8rem);line-height:.94;letter-spacing:-.06em;margin-bottom:16px;max-width:11ch}
.hero p{font-size:1.05rem;color:#4f5a69;max-width:540px;margin-bottom:24px}
.hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-bottom:18px}
.hero-location span{display:inline-flex;align-items:center;min-height:40px;padding:0 14px;border-radius:999px;background:#fff;border:1px solid #dde6f0;font-weight:700;color:#2d3542}
.hero-dots{position:absolute;left:50%;bottom:26px;transform:translateX(-50%);display:flex;gap:12px;z-index:3}
.dot{width:86px;height:4px;border-radius:999px;background:rgba(17,17,17,.14)}
.dot.active{background:linear-gradient(90deg,var(--primary),var(--primary-2))}

.strip{padding:18px 0;background:#fff;border-bottom:1px solid rgba(16,18,22,.06)}
.strip-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.strip-grid div{min-height:56px;display:grid;place-items:center;text-align:center;background:#f7f9fc;border:1px solid #e4ebf3;border-radius:16px;font-weight:700}

.section{padding:86px 0}
.section-head{max-width:760px;margin-bottom:34px}
.section-head.center{text-align:center;margin-inline:auto}
.section-tag{display:inline-block;margin-bottom:12px;color:var(--primary);font-size:.88rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
.section-head h2{font-family:'Manrope',sans-serif;font-size:clamp(2rem,4vw,3.15rem);line-height:1.02;letter-spacing:-.05em;margin-bottom:12px}
.section-head p{color:var(--muted)}

.highlight-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:22px}
.highlight-main{min-height:380px;position:relative;overflow:hidden;border-radius:32px;box-shadow:var(--shadow);border:1px solid #e2e8f0;background:url('https://placehold.co/1400x920/f2f6fb/111111?text=Sonatech+BH') center/cover no-repeat}
.highlight-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.14))}
.highlight-content{position:absolute;left:30px;bottom:30px;max-width:520px}
.highlight-content h3{font-family:'Manrope',sans-serif;font-size:clamp(1.9rem,3vw,2.8rem);line-height:1;letter-spacing:-.04em;margin-bottom:10px}
.highlight-content p{color:#4f5a69;margin-bottom:18px}
.highlight-side{display:grid;gap:22px}
.small-card{padding:26px;border-radius:28px;background:#fff;border:1px solid #e3eaf2;box-shadow:var(--shadow)}
.small-card h4{font-size:1.2rem;margin-bottom:8px}
.small-card p{color:var(--muted);margin-bottom:14px}
.text-link,.mini-tag{font-weight:800;color:var(--primary)}
.mini-tag{display:inline-block;margin-bottom:10px;font-size:.82rem;text-transform:uppercase;letter-spacing:.08em}

.products-section{background:linear-gradient(180deg,#f9fbff 0%,#f3f7fc 100%)}
.category-pills{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:24px}
.pill{padding:12px 16px;border-radius:999px;background:#fff;border:1px solid #dde6f0;font-weight:700;color:#2c3440}
.pill.active{background:linear-gradient(135deg,var(--primary),var(--primary-2));color:#fff;border-color:transparent}
.products-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
.product-card{background:#fff;border:1px solid #e4ebf3;border-radius:28px;overflow:hidden;box-shadow:var(--shadow);transition:.28s ease}
.product-card:hover{transform:translateY(-6px)}
.product-image{position:relative;aspect-ratio:1/1;background:#f7f9fc}
.product-image img{width:100%;height:100%;object-fit:cover;transition:.35s ease}
.product-card:hover .product-image img{transform:scale(1.04)}
.floating-label{position:absolute;top:14px;left:14px;padding:9px 12px;border-radius:999px;background:#111;color:#fff;font-size:.8rem;font-weight:800}
.product-body{padding:22px}
.product-body h3{font-size:1.15rem;margin-bottom:8px}
.product-body p{color:var(--muted);min-height:46px;margin-bottom:14px}
.price-row{display:flex;align-items:flex-end;justify-content:space-between;gap:10px;margin-bottom:18px}
.price-row strong{font-size:1.32rem;letter-spacing:-.03em}
.price-row span{font-size:.9rem;color:var(--primary);font-weight:700}
.product-actions-grid{display:grid;gap:10px}

.assistance-grid{display:grid;grid-template-columns:1fr 1fr;gap:26px;align-items:center}
.assistance-copy,.contact-box{padding:30px;border-radius:30px;background:#fff;border:1px solid #e4ebf3;box-shadow:var(--shadow)}
.assistance-copy h2,.contact-box h2{font-family:'Manrope',sans-serif;font-size:clamp(2rem,4vw,2.95rem);line-height:1.02;letter-spacing:-.05em;margin-bottom:12px}
.assistance-copy p,.contact-box p{color:var(--muted);margin-bottom:20px}
.assistance-copy ul{list-style:none;display:grid;gap:12px;margin-bottom:22px}
.assistance-copy li{padding:14px 16px;border-radius:16px;background:#f6f9fc;border:1px solid #e2eaf3;font-weight:600}
.assistance-visual img{width:100%;border-radius:30px;border:1px solid #e4ebf3;box-shadow:var(--shadow)}
.contact-grid{display:grid;grid-template-columns:.95fr 1.05fr;gap:24px}
.contact-item{padding:18px;border-radius:18px;background:#f7f9fc;border:1px solid #e4ebf3;margin-bottom:14px}
.contact-item strong{display:block;margin-bottom:4px}
.contact-item span{color:var(--muted)}
.map-box iframe{width:100%;min-height:420px;border:0;border-radius:28px;box-shadow:var(--shadow)}

.site-footer{padding:34px 0;background:#fff;border-top:1px solid rgba(16,18,22,.06)}
.footer-wrap{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;flex-wrap:wrap}
.footer-wrap p,.footer-links a{color:var(--muted)}
.footer-links{display:flex;gap:18px;flex-wrap:wrap}

.floating-whatsapp{position:fixed;right:18px;bottom:18px;z-index:999;min-height:56px;padding:0 20px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#111,#2a2a2a);color:#fff;font-weight:900;box-shadow:0 18px 40px rgba(17,17,17,.18)}
.back-to-top{position:fixed;right:18px;bottom:84px;width:48px;height:48px;border-radius:50%;background:#fff;border:1px solid #dde5ef;display:grid;place-items:center;box-shadow:var(--shadow);opacity:0;visibility:hidden;transition:.25s ease;z-index:998}
.back-to-top.show{opacity:1;visibility:visible}

.cart-overlay,.modal-overlay{position:fixed;inset:0;background:rgba(16,18,22,.35);backdrop-filter:blur(3px);opacity:0;visibility:hidden;transition:.25s ease;z-index:1190}
.cart-overlay.active,.modal-overlay.active{opacity:1;visibility:visible}
.cart-drawer,.side-modal{position:fixed;top:0;right:-100%;width:100%;max-width:440px;height:100vh;background:#fff;border-left:1px solid #e2eaf3;box-shadow:-12px 0 40px rgba(17,17,17,.08);transition:right .32s ease;z-index:1200;display:flex;flex-direction:column}
.cart-drawer.active,.side-modal.active{right:0}
.drawer-header,.drawer-footer,.side-modal-inner{padding:20px}
.drawer-header{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #edf2f7}
.drawer-header h3,.side-modal h3{font-family:'Manrope',sans-serif;font-size:1.5rem;letter-spacing:-.04em}
.drawer-body{padding:16px 20px;overflow:auto;flex:1;display:grid;gap:14px}
.drawer-footer{border-top:1px solid #edf2f7}
.total-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.total-row strong{font-size:1.2rem}
.close-btn{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:#f6f9fc;border:1px solid #e2eaf3}
.cart-item{display:grid;grid-template-columns:84px 1fr;gap:14px;padding:14px;border:1px solid #e4ebf3;border-radius:18px;background:#fafcff}
.cart-item img{width:84px;height:84px;object-fit:cover;border-radius:14px}
.cart-item h4{font-size:1rem;margin-bottom:6px}
.cart-item p{font-size:.92rem;color:var(--muted);margin-bottom:10px}
.qty-row{display:flex;align-items:center;justify-content:space-between;gap:12px}
.qty-controls{display:flex;align-items:center;gap:8px}
.qty-btn{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;background:#fff;border:1px solid #dbe4ef;font-weight:800}
.qty-value{min-width:26px;text-align:center;font-weight:800}
.remove-btn{font-size:.9rem;color:#e53935;font-weight:800}
.empty-cart{padding:20px;border:1px dashed #dbe4ef;border-radius:18px;color:var(--muted);text-align:center;background:#fafcff}
.side-modal-inner{overflow:auto}
.side-modal img{width:100%;border-radius:24px;border:1px solid #e4ebf3;margin-bottom:18px}
.modal-price{font-size:1.28rem;font-weight:900;margin-bottom:16px}
.form-grid{display:grid;gap:12px;margin-bottom:18px}
.form-grid input,.form-grid select,.form-grid textarea{width:100%;padding:14px 16px;border-radius:14px;border:1px solid #dce5ef;background:#f8fbff;color:#111;outline:none}
.form-grid textarea{resize:vertical;min-height:110px}

@media (max-width:1100px){
  .products-grid{grid-template-columns:repeat(2,1fr)}
  .highlight-grid,.assistance-grid,.contact-grid{grid-template-columns:1fr}
  .strip-grid{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:860px){
  .desktop-nav,.desktop-cta{display:none}
  .menu-toggle{display:inline-flex}
  .hero,.hero-inner{min-height:74vh}
  .hero-copy{padding:70px 0 88px}
}
@media (max-width:640px){
  .container{width:min(100% - 22px,var(--container))}
  .section{padding:66px 0}
  .hero,.hero-inner{min-height:82vh}
  .hero h1{font-size:clamp(2.05rem,8vw,3rem);max-width:11ch}
  .hero p{font-size:.95rem;line-height:1.55}
  .hero-actions{flex-direction:column}
  .hero-actions .btn{width:100%}
  .hero-location span{width:100%;justify-content:center;text-align:center;padding:12px 16px;min-height:auto}
  .dot{width:52px}
  .strip-grid,.products-grid{grid-template-columns:1fr}
  .product-body,.contact-box,.assistance-copy,.side-modal-inner{padding:18px}
  .cart-drawer,.side-modal{max-width:100%}
  .floating-whatsapp{right:14px;bottom:14px}
  .back-to-top{right:14px;bottom:78px}
}
```

# script.js

```javascript
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

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function formatPrice(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

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

  if (action === 'plus') cart[index].quantity += 1;
  if (action === 'minus') {
    cart[index].quantity -= 1;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
  }
  if (action === 'remove') cart.splice(index, 1);

  renderCart();
}

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

cartTrigger?.addEventListener('click', openCart);
closeCart?.addEventListener('click', closeCartDrawer);
cartOverlay?.addEventListener('click', closeCartDrawer);
closeModal?.addEventListener('click', closeProductModal);
modalOverlay?.addEventListener('click', closeProductModal);

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const action = target.dataset.action;
  const index = target.dataset.index;

  if (action && index !== undefined) {
    changeQuantity(Number(index), action);
  }
});

checkoutWhatsapp?.addEventListener('click', () => {
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

finishOrder?.addEventListener('click', () => {
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

renderCart();
```

# ajuste final

Esses 3 arquivos ficam na mesma pasta:

* `index.html`
* `style.css`
* `script.js`

Já deixei com:

* Sonatech BH
* WhatsApp `31 8320-9688`
* Rua Santo Inácio de Loyola 391
* copy mais forte
* mobile mais limpo
* carrinho com `+` e `-`
* CTA melhor
* visual mais premium e claro

Agora o ideal é só trocar as imagens placeholder pelas fotos reais da loja e dos produtos.
