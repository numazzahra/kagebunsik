<template>
  <section class="order" id="order">
    <div class="order-inner">
      <div class="order-form-wrap">
        <div class="section-label">Pre-Order</div>
        <h2>Pesan<br><span style="color:var(--red)">Sekarang</span></h2>
        <p>Isi form di bawah dan pilih waktu pick-up sesuai jadwal kuliahmu.</p>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>Nama Lengkap</label>
            <input type="text" v-model="form.name" placeholder="Nama kamu..." required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Nomor HP / WhatsApp</label>
              <input type="tel" v-model="form.phone" placeholder="08xx..." required>
            </div>
            <div class="form-group">
              <label>Angkatan / Jurusan</label>
              <input type="text" v-model="form.major" placeholder="2024 / Sistem Informasi" required>
            </div>
          </div>

          <!-- Cart Summary Mode -->
          <div v-if="cart.length > 0" class="cart-summary-box">
            <div class="cart-summary-title">Item Keranjang Anda</div>
            <div v-for="c in cart" :key="c.id" class="cart-summary-item">
              <span>{{ c.qty }}x {{ c.name }}</span>
              <span>Rp{{ (c.price * c.qty).toLocaleString('id') }}</span>
            </div>
            <div class="cart-summary-total">
              <span>Total Checkout</span>
              <span>Rp{{ cartTotal.toLocaleString('id') }}</span>
            </div>
          </div>

          <!-- Single Item Dropdown Mode -->
          <div v-else class="form-group">
            <label>Menu yang Dipilih</label>
            <select v-model="form.selectedMenu" required>
              <option value="">-- Pilih Menu --</option>
              <option v-for="menu in menuData" :key="menu.id" :value="menu.name">
                {{ menu.name }} (Rp{{ menu.price.toLocaleString('id') }})
              </option>
            </select>
          </div>

          <div class="form-group">
            <label>Waktu Pick-up</label>
            <div class="pickup-times">
              <span 
                v-for="time in pickupTimes" 
                :key="time" 
                class="time-chip" 
                :class="{ active: form.pickupTime === time }"
                @click="form.pickupTime = time"
              >
                {{ time }}
              </span>
            </div>
          </div>
          <div class="form-group">
            <label>Catatan Tambahan (opsional)</label>
            <textarea v-model="form.notes" placeholder="Alergi, request pedas/tidak, dll..."></textarea>
          </div>
          <button type="submit" class="form-submit">Konfirmasi Pre-Order →</button>
        </form>
      </div>

      <div class="order-info">
        <h3>Info Pick-up<br><span style="color:var(--red)">Point</span></h3>
        <div class="info-card">
          <MapPin class="info-card-icon" />
          <h4>Lokasi Pick-up</h4>
          <p>Depan Gedung Rektorat UPNVJ, Area Pondok Labu. Cari banner merah Kagebunsik — gampang banget ditemuinnya!</p>
        </div>
        <div class="info-card">
          <Clock class="info-card-icon" />
          <h4>Jam Operasional</h4>
          <p>Senin – Jumat<br><strong style="color:var(--cream)">07:30 – 17:00 WIB</strong><br>Sabtu: 08:00 – 13:00 WIB</p>
        </div>
        <div class="info-card">
          <CreditCard class="info-card-icon" />
          <h4>Metode Pembayaran</h4>
          <p>QRIS · GoPay · OVO · DANA · Transfer Bank</p>
        </div>
        <div class="info-card">
          <PhoneCall class="info-card-icon" />
          <h4>Hubungi Kami</h4>
          <p>Instagram: <strong style="color:var(--cream)">@kagebunsik</strong><br>WhatsApp: <strong style="color:var(--cream)">0812-XXXX-XXXX</strong></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import { useCart } from '../composables/useCart';
import { MapPin, Clock, CreditCard, PhoneCall } from 'lucide-vue-next';

const { cart, cartTotal, menuData, showToast } = useCart();

const pickupTimes = ['08:00', '09:30', '11:00', '12:00', '13:00', '14:00', '15:30', '16:30'];

const form = reactive({
  name: '',
  phone: '',
  major: '',
  selectedMenu: '',
  pickupTime: '12:00',
  notes: ''
});

const handleSubmit = () => {
  if (cart.value.length === 0 && !form.selectedMenu) {
    showToast('Silakan pilih menu terlebih dahulu!');
    return;
  }
  
  showToast('Pesananmu berhasil dikonfirmasi! Cek WhatsApp kamu.');
  setTimeout(() => {
    showToast('Tim dapur kami akan segera memproses!');
    // Reset Form
    form.name = '';
    form.phone = '';
    form.major = '';
    form.selectedMenu = '';
    form.pickupTime = '12:00';
    form.notes = '';
    // Clear cart if ordered from cart
    if (cart.value.length > 0) {
      cart.value = [];
    }
  }, 3000);
};
</script>

<style scoped>
.order {
  background: var(--black);
}

.order-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.order-form-wrap h2 {
  font-family: 'Black Han Sans', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  margin-bottom: 12px;
  line-height: 1;
  color: var(--cream);
}

.order-form-wrap > p {
  color: var(--gray);
  font-size: 0.85rem;
  margin-bottom: 40px;
  line-height: 1.6;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 8px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  background: var(--charcoal);
  border: 1px solid rgba(255, 248, 240, 0.1);
  padding: 14px 16px;
  color: var(--cream);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.85rem;
  transition: border-color 0.3s;
  outline: none;
  appearance: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--red);
}

.form-group select option {
  background: var(--charcoal);
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-submit {
  width: 100%;
  background: var(--red);
  color: var(--white);
  padding: 18px;
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
  transition: background 0.3s;
}

.form-submit:hover {
  background: var(--dark-red);
}

.order-info h3 {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 32px;
  color: var(--cream);
}

.info-card {
  border: 1px solid rgba(232, 39, 42, 0.15);
  padding: 24px;
  margin-bottom: 16px;
  position: relative;
}

.info-card-icon {
  width: 24px;
  height: 24px;
  color: var(--gold);
  margin-bottom: 12px;
  display: block;
}

.info-card h4 {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 2px;
  color: var(--gold);
  margin-bottom: 6px;
}

.info-card p {
  color: var(--gray);
  font-size: 0.82rem;
  line-height: 1.6;
}

.pickup-times {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.time-chip {
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  padding: 6px 12px;
  border: 1px solid rgba(232, 39, 42, 0.3);
  color: var(--gray);
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 1px;
  background: transparent;
}

.time-chip:hover,
.time-chip.active {
  background: var(--red);
  border-color: var(--red);
  color: white;
}

.cart-summary-box {
  background: var(--charcoal);
  border: 1px solid rgba(232, 39, 42, 0.3);
  padding: 16px;
  margin-bottom: 20px;
}

.cart-summary-title {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  color: var(--gold);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cart-summary-item {
  font-size: 0.85rem;
  color: var(--cream);
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.cart-summary-total {
  border-top: 1px dashed rgba(255, 255, 255, 0.15);
  margin-top: 8px;
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  font-family: 'Black Han Sans', sans-serif;
  color: var(--red);
}

@media (max-width: 900px) {
  .order-inner {
    grid-template-columns: 1fr;
  }
}
</style>
