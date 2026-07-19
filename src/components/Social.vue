<template>
  <section class="social">
    <div class="social-inner">
      <div class="section-label" style="justify-content:center">Ikuti Kami</div>
      <h2 class="section-title">Stay Updated<br><span style="color:var(--red)">@kagebunsik</span></h2>
      <p>Follow kami untuk info menu terbaru, promo, dan konten Korean vibes yang kece abis!</p>
      <div class="social-links">
        <a href="#" class="social-link">
          <Instagram class="social-link-icon" /> Instagram
        </a>
        <a href="#" class="social-link">
          <Music class="social-link-icon" /> TikTok
        </a>
        <a href="#" class="social-link">
          <MessageCircle class="social-link-icon" /> WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Instagram, Music, MessageCircle } from 'lucide-vue-next';
</script>

<style scoped>
.social {
  background: var(--charcoal);
  padding: 80px 48px;
}

.social-inner {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.social-inner > p {
  color: var(--gray);
  margin-bottom: 48px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.social-links {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border: 1px solid rgba(255, 248, 240, 0.1);
  color: var(--cream);
  text-decoration: none;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 2px;
  transition: all 0.3s;
}

.social-link:hover {
  border-color: var(--red);
  color: var(--red);
}

.social-link-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
</style>
