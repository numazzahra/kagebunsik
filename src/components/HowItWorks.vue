<template>
  <section class="how" id="how">
    <div class="how-inner">
      <div class="section-label">Cara Order</div>
      <h2 class="section-title">Semudah <span style="color:var(--red)">7 Langkah</span></h2>
      <div class="steps">
        <template v-for="(step, idx) in steps" :key="step.num">
          <!-- Step Block -->
          <div class="step">
            <div class="step-num">{{ step.num }}</div>
            <component :is="step.icon" class="step-icon" />
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
          <!-- Connector (except for the last item) -->
          <div v-if="idx < steps.length - 1" class="step-connector">
            <div class="connector-line"></div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Globe, User, Utensils, Clock, CreditCard, FileCheck, PartyPopper } from 'lucide-vue-next';

const steps = [
  { num: '01', icon: Globe, title: 'Buka Website', desc: 'Akses dari HP-mu di mana saja' },
  { num: '02', icon: User, title: 'Login / Daftar', desc: 'Buat akunmu sekali, pakai selamanya' },
  { num: '03', icon: Utensils, title: 'Pilih Menu', desc: 'Kimbab, Odeng, Tteokbokki, Dosirak' },
  { num: '04', icon: Clock, title: 'Jadwalkan Pick-up', desc: 'Pilih waktu ambil sesuai sela kuliah' },
  { num: '05', icon: CreditCard, title: 'Bayar Cashless', desc: 'QRIS, e-wallet, mobile banking' },
  { num: '06', icon: FileCheck, title: 'Konfirmasi', desc: 'Notifikasi pesananmu langsung masuk' },
  { num: '07', icon: PartyPopper, title: 'Pick-up!', desc: 'Ambil tanpa antri di titik kampus' }
];
</script>

<style scoped>
.how {
  background: var(--charcoal);
}

.how-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.steps {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
  margin-top: 64px;
  align-items: start;
}

.step {
  text-align: center;
  position: relative;
}

.step-connector {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 28px;
}

.connector-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, var(--red), rgba(232, 39, 42, 0.2));
}

.step-num {
  width: 56px;
  height: 56px;
  border: 2px solid var(--red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1.3rem;
  color: var(--red);
  margin: 0 auto 16px;
  background: var(--charcoal);
  position: relative;
  z-index: 1;
}

.step-icon {
  width: 1.8rem;
  height: 1.8rem;
  color: var(--gold);
  display: block;
  margin: 0 auto 12px;
}

.step h4 {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 0.9rem;
  margin-bottom: 8px;
  line-height: 1.2;
  color: var(--cream);
}

.step p {
  font-size: 0.75rem;
  color: var(--gray);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .steps {
    grid-template-columns: repeat(4, 1fr);
  }
  .step-connector {
    display: none;
  }
}
</style>
