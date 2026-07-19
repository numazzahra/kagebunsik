<template>
  <section class="promo" id="promo">
    <div class="promo-inner">
      <div>
        <h2>Promo Grand<br>Opening!</h2>
        <p>Rayakan hadirnya Kagebunsik di kampus UPNVJ! Dapatkan diskon spesial untuk pemesanan pertamamu. Gunakan kode di bawah saat checkout.</p>
        <div class="promo-code" @click="copyPromoCode">
          <span>KAGE10</span>
          <span class="click-to-copy">KLIK SALIN</span>
        </div>
      </div>
      <div class="promo-cards">
        <div class="promo-card">
          <Gift class="promo-card-icon" />
          <div>
            <h4>Diskon 10% Order Pertama</h4>
            <p>Gunakan kode KAGE10 saat checkout untuk semua menu.</p>
          </div>
        </div>
        <div class="promo-card">
          <Users class="promo-card-icon" />
          <div>
            <h4>Referral Teman</h4>
            <p>Ajak temanmu dan dapatkan Kimbab gratis untuk setiap 3 referral berhasil!</p>
          </div>
        </div>
        <div class="promo-card">
          <Instagram class="promo-card-icon" />
          <div>
            <h4>Follow & Order</h4>
            <p>Follow @kagebunsik di Instagram dan tunjukkan saat order untuk minuman gratis.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCart } from '../composables/useCart';
import { Gift, Users, Instagram } from 'lucide-vue-next';

const { showToast } = useCart();

const copyPromoCode = () => {
  navigator.clipboard?.writeText('KAGE10');
  showToast('Kode promo KAGE10 disalin!');
};
</script>

<style scoped>
.promo {
  background: var(--red);
  padding: 80px 48px;
  color: var(--white);
}

.promo-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.promo h2 {
  font-family: 'Black Han Sans', sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1;
  margin-bottom: 20px;
}

.promo p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 32px;
}

.promo-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.promo-card {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.promo-card-icon {
  width: 32px;
  height: 32px;
  color: var(--gold);
  flex-shrink: 0;
}

.promo-card h4 {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1rem;
  margin-bottom: 4px;
}

.promo-card p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  margin: 0;
}

.promo-code {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 2px dashed rgba(255, 255, 255, 0.4);
  padding: 12px 24px;
  font-family: 'Space Mono', monospace;
  font-size: 1.2rem;
  letter-spacing: 4px;
  cursor: pointer;
  transition: border-color 0.3s;
  background: rgba(0, 0, 0, 0.1);
}

.promo-code:hover {
  border-color: white;
}

.click-to-copy {
  font-size: 0.7rem;
  opacity: 0.6;
  letter-spacing: 1px;
}

@media (max-width: 900px) {
  .promo-inner {
    grid-template-columns: 1fr;
  }
}
</style>
