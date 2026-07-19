<template>
  <div class="marquee-section">
    <div class="marquee-track">
      <!-- First Track -->
      <span v-for="(item, idx) in marqueeItems" :key="'first-' + idx" class="marquee-item">
        {{ item }}
      </span>
      <!-- Doubled Track for seamless loop -->
      <span v-for="(item, idx) in marqueeItems" :key="'second-' + idx" class="marquee-item">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script setup>
const marqueeItems = [
  'Kimbab', 'Tteokbokki', 'Odeng', 'Dosirak', 'Pre-Order', 
  'No Queue', 'Korean Vibes', 'Campus Pick-up', 'Cashless', '가게분식'
];
</script>

<style scoped>
.marquee-section {
  background: var(--red);
  padding: 14px 0;
  overflow: hidden;
  border-top: 1px solid var(--dark-red);
  border-bottom: 1px solid var(--dark-red);
}

.marquee-track {
  display: flex;
  gap: 0;
  animation: marquee 20s linear infinite;
  white-space: nowrap;
  width: max-content;
}

.marquee-item {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  padding: 0 32px;
  display: inline-flex;
  align-items: center;
  gap: 32px;
}

.marquee-item::after {
  content: '◆';
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 0.4);
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
