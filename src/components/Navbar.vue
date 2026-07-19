<template>
  <nav :class="{ scrolled: isScrolled }">
    <a href="#" class="nav-logo">KAGE<span>분식</span></a>
    <ul class="nav-links">
      <li><a href="#about">Tentang</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#how">Cara Order</a></li>
      <li><a href="#promo">Promo</a></li>
      <li><a href="#order" class="nav-cta">Pre-Order</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 48px;
  background: rgba(13,13,13,0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(232,39,42,0.15);
  transition: background 0.3s;
}

nav.scrolled {
  background: rgba(13,13,13,0.97);
}

.nav-logo {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1.5rem;
  color: var(--red);
  letter-spacing: 2px;
  text-decoration: none;
}

.nav-logo span {
  color: var(--gold);
}

.nav-links {
  display: flex;
  gap: 36px;
  list-style: none;
}

.nav-links a {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gray);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--red);
}

.nav-cta {
  background: var(--red);
  color: var(--white) !important;
  padding: 10px 22px;
  border-radius: 2px;
  transition: background 0.3s !important;
}

.nav-cta:hover {
  background: var(--dark-red) !important;
  color: var(--white) !important;
}

@media (max-width: 900px) {
  nav {
    padding: 16px 24px;
  }
  .nav-links {
    display: none;
  }
}
</style>
