<template>
  <section class="about" id="about">
    <div class="about-grid">
      <div class="about-visual">
        <div class="about-card">
          <div class="about-card-tag">Est. 2026</div>
          <div class="about-card-accent"></div>
          <h3>Smart Food.<br>Campus Life.</h3>
          <p>Kagebunsik lahir dari keresahan mahasiswa soal waktu makan yang terbatas. Kami menghadirkan bunshik Korea berkualitas dengan sistem digital yang bikin kamu makan lebih efisien.</p>
          <div class="about-floating">
            <span class="num">100%</span>
            <span class="lbl">Halal & Higienis</span>
          </div>
        </div>
      </div>
      <div class="about-text">
        <div class="section-label">Tentang Kami</div>
        <h2 class="section-title">Korean Wave<br>Meets <span style="color:var(--red)">Tech.</span></h2>
        <p>Tren Korean Wave mendorong permintaan makanan Korea yang terus meningkat di kalangan Gen Z. Kagebunsik hadir bukan hanya sebagai warung makan biasa—kami adalah smart canteen pertama di UPNVJ.</p>
        <p>Dengan sistem pre-order berbasis web, kamu bisa pesan dari dalam kelas, pilih waktu ambil, dan bayar cashless. Makananmu sudah siap saat kamu tiba—tanpa antri, tanpa drama.</p>
        <div class="about-pillars">
          <div class="pillar">
            <Flame class="pillar-icon" />
            <h4>Autentik</h4>
            <p>Resep bunshik Korea yang genuine, disesuaikan lidah lokal.</p>
          </div>
          <div class="pillar">
            <Zap class="pillar-icon" />
            <h4>Efisien</h4>
            <p>Pre-order & pick-up tanpa antri, cocok buat jadwal padat.</p>
          </div>
          <div class="pillar">
            <Leaf class="pillar-icon" />
            <h4>Sehat</h4>
            <p>Bahan segar pilihan, dikemas ramah lingkungan.</p>
          </div>
          <div class="pillar">
            <CreditCard class="pillar-icon" />
            <h4>Cashless</h4>
            <p>Bayar digital, tanpa repot cari uang kembalian.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Flame, Zap, Leaf, CreditCard } from 'lucide-vue-next';
</script>

<style scoped>
.about {
  background: var(--charcoal);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.about-visual {
  position: relative;
}

.about-card {
  background: var(--black);
  border: 1px solid rgba(232, 39, 42, 0.2);
  padding: 48px;
  position: relative;
  overflow: hidden;
}

.about-card::before {
  content: '가게분식';
  position: absolute;
  top: -10px;
  right: -10px;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 5rem;
  color: rgba(232, 39, 42, 0.06);
  line-height: 1;
}

.about-card-accent {
  width: 4px;
  height: 60px;
  background: var(--red);
  margin-bottom: 24px;
}

.about-card h3 {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 16px;
  color: var(--cream);
}

.about-card p {
  color: var(--gray);
  line-height: 1.8;
  font-size: 0.9rem;
}

.about-card-tag {
  position: absolute;
  top: 24px;
  right: 24px;
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 2px;
  color: var(--gold);
  border: 1px solid rgba(200, 169, 110, 0.3);
  padding: 4px 10px;
}

.about-floating {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--red);
  padding: 24px;
  text-align: center;
  color: var(--white);
}

.about-floating .num {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 2rem;
  display: block;
}

.about-floating .lbl {
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 2px;
  opacity: 0.8;
}

.about-text p {
  color: var(--gray);
  line-height: 1.9;
  font-size: 0.95rem;
  margin-bottom: 20px;
}

.about-pillars {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 32px;
}

.pillar {
  border: 1px solid rgba(232, 39, 42, 0.15);
  padding: 20px;
  position: relative;
}

.pillar-icon {
  width: 24px;
  height: 24px;
  color: var(--gold);
  margin-bottom: 8px;
  display: block;
}

.pillar h4 {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 1px;
  color: var(--gold);
  margin-bottom: 6px;
}

.pillar p {
  color: var(--gray);
  font-size: 0.8rem;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
