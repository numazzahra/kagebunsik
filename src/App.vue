<template>
  <div class="app-container">
    <Navbar />
    <main>
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <HowItWorks />
      <Promo />
      <OrderForm />
      <Social />
    </main>
    <Footer />
    
    <!-- Portals / Global Overlays -->
    <CartSidebar />
    <Toast />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Marquee from './components/Marquee.vue';
import About from './components/About.vue';
import Menu from './components/Menu.vue';
import HowItWorks from './components/HowItWorks.vue';
import Promo from './components/Promo.vue';
import OrderForm from './components/OrderForm.vue';
import Social from './components/Social.vue';
import Footer from './components/Footer.vue';
import CartSidebar from './components/CartSidebar.vue';
import Toast from './components/Toast.vue';
</script>

<style>
/* App container sizing */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
