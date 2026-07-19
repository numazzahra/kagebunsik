<template>
  <section class="hero" id="home">
    <div class="hero-bg"></div>
    <div class="hero-grid"></div>
    <div class="hangul-bg">분식</div>

    <div class="hero-content">
      <div class="hero-badge">
        <span>Korean Street Food</span>
        <span class="separator">·</span>
        <span>UPNVJ Campus</span>
      </div>
      <h1 class="hero-title">
        SIMPLE<br>
        <span class="red">BITES</span>,<br>
        <span class="outline">KOREAN</span><br>
        VIBES
      </h1>
      <div class="hero-hangul">가게분식</div>
      <p class="hero-sub">
        Makanan Korea autentik langsung di kampus kamu. Pre-order, pilih waktu ambil, dan nikmati tanpa antri — sesuai jadwal kuliahmu.
      </p>
      <div class="hero-actions">
        <a href="#menu" class="btn-primary">Lihat Menu</a>
        <a href="#order" class="btn-ghost">Pre-Order Sekarang</a>
      </div>
    </div>

    <div class="hero-stats">
      <div class="stat">
        <span class="stat-num">4+</span>
        <span class="stat-label">Menu Andalan</span>
      </div>
      <div class="stat">
        <span class="stat-num">0</span>
        <span class="stat-label">Menit Antri</span>
      </div>
      <div class="stat">
        <span class="stat-num">15K</span>
        <span class="stat-label">Start From</span>
      </div>
    </div>

    <div class="hero-scroll">
      <span>SCROLL</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 48px 60px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 60% 80% at 70% 50%, rgba(232,39,42,0.12) 0%, transparent 70%),
    radial-gradient(ellipse 40% 60% at 20% 80%, rgba(200,169,110,0.08) 0%, transparent 60%);
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(232,39,42,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(232,39,42,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hangul-bg {
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Black Han Sans', sans-serif;
  font-size: 28vw;
  color: rgba(232,39,42,0.04);
  line-height: 1;
  pointer-events: none;
  white-space: nowrap;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid rgba(200,169,110,0.3);
  padding: 8px 16px;
  border-radius: 100px;
  margin-bottom: 32px;
  animation: fadeUp 0.8s ease both;
}

.hero-badge::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--gold);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.separator {
  color: var(--red);
  font-weight: bold;
}

.hero-title {
  font-family: 'Black Han Sans', sans-serif;
  font-size: clamp(3.5rem, 8vw, 7rem);
  line-height: 0.95;
  letter-spacing: -2px;
  margin-bottom: 8px;
  animation: fadeUp 0.8s ease 0.1s both;
  color: var(--cream);
}

.hero-title .red {
  color: var(--red);
}

.hero-title .outline {
  -webkit-text-stroke: 2px var(--cream);
  color: transparent;
}

.hero-hangul {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--red);
  font-family: 'Black Han Sans', sans-serif;
  margin-bottom: 24px;
  animation: fadeUp 0.8s ease 0.2s both;
}

.hero-sub {
  font-size: 1rem;
  color: var(--gray);
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 48px;
  animation: fadeUp 0.8s ease 0.3s both;
}

.hero-actions {
  display: flex;
  gap: 16px;
  align-items: center;
  animation: fadeUp 0.8s ease 0.4s both;
}

.btn-primary {
  background: var(--red);
  color: var(--white);
  padding: 16px 36px;
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
  transition: background 0.3s, transform 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background: var(--dark-red);
  transform: translateY(-2px);
}

.btn-ghost {
  color: var(--cream);
  padding: 16px 36px;
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid rgba(255,248,240,0.2);
  background: transparent;
  cursor: pointer;
  transition: border-color 0.3s, color 0.3s;
  text-decoration: none;
  display: inline-block;
}

.btn-ghost:hover {
  border-color: var(--red);
  color: var(--red);
}

.hero-stats {
  position: absolute;
  right: 48px;
  bottom: 60px;
  display: flex;
  gap: 48px;
  animation: fadeUp 0.8s ease 0.5s both;
}

.stat {
  text-align: center;
}

.stat-num {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 2.5rem;
  color: var(--red);
  display: block;
}

.stat-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 2px;
  color: var(--gray);
  text-transform: uppercase;
}

.hero-scroll {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 3px;
  color: var(--gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: fadeUp 0.8s ease 0.6s both;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--red), transparent);
  animation: scrollAnim 2s ease-in-out infinite;
}

@media (max-width: 900px) {
  .hero {
    padding: 100px 24px 60px;
  }
  .hero-stats {
    right: 24px;
    gap: 24px;
  }
}
</style>
