<template>
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="logo">KAGEBUNSIK</span>
          <span class="hangul">가게분식</span>
          <p>Smart canteen pertama di kampus UPNVJ. Korean food + tech = pengalaman makan yang lebih efisien untuk mahasiswa.</p>
        </div>
        <div class="footer-col">
          <h4>Menu</h4>
          <ul>
            <li><a href="#menu">Kimbab</a></li>
            <li><a href="#menu">Odeng</a></li>
            <li><a href="#menu">Tteokbokki</a></li>
            <li><a href="#menu">Dosirak</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Info</h4>
          <ul>
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="#how">Cara Order</a></li>
            <li><a href="#promo">Promo</a></li>
            <li><a href="#order">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Kontak</h4>
          <ul>
            <li><a href="#">@kagebunsik</a></li>
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">UPNVJ Campus</a></li>
            <li><a href="#">Pondok Labu, Jakarta</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          © 2026 Kagebunsik. Made with 
          <Heart class="footer-heart-icon" /> 
          by Sistem Informasi UPNVJ.
        </p>
        <p>Simple Bites, <span class="footer-vibes">Korean Vibes</span></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Heart } from 'lucide-vue-next';
</script>

<style scoped>
footer {
  background: var(--black);
  padding: 60px 48px 32px;
  border-top: 1px solid rgba(232, 39, 42, 0.15);
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.footer-brand .logo {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1.8rem;
  color: var(--red);
  display: block;
  margin-bottom: 12px;
}

.footer-brand .hangul {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1rem;
  color: rgba(232, 39, 42, 0.4);
  display: block;
  margin-bottom: 16px;
}

.footer-brand p {
  color: var(--gray);
  font-size: 0.82rem;
  line-height: 1.7;
}

.footer-col h4 {
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 20px;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  margin-bottom: 10px;
}

.footer-col a {
  color: var(--gray);
  font-size: 0.82rem;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-col a:hover {
  color: var(--red);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 1px;
  color: var(--gray);
  display: flex;
  align-items: center;
}

.footer-heart-icon {
  width: 12px;
  height: 12px;
  color: var(--red);
  fill: var(--red);
  margin: 0 4px;
}

.footer-vibes {
  color: var(--red);
}

@media (max-width: 900px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
