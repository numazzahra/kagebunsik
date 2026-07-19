<template>
  <div>
    <!-- Floating Cart Button -->
    <button class="cart-float" @click="openCart">
      <ShoppingCart class="cart-float-icon" />
      <span class="cart-float-text">Keranjang</span>
      <span class="cart-float-count">{{ cartCount }}</span>
    </button>

    <!-- Overlay -->
    <div 
      class="cart-overlay" 
      :class="{ open: isCartOpen }" 
      @click="closeCart"
    ></div>

    <!-- Sidebar Drawer -->
    <div class="cart-sidebar" :class="{ open: isCartOpen }">
      <div class="cart-header">
        <h3 class="title-with-icon">
          Keranjang <ShoppingCart class="header-icon" />
        </h3>
        <button class="cart-close" @click="closeCart">
          <X class="close-icon" />
        </button>
      </div>

      <div class="cart-items">
        <div v-if="cart.length === 0" class="cart-empty">
          <ShoppingBag class="cart-empty-icon" />
          <p>Keranjangmu masih kosong.<br>Yuk pilih menu!</p>
        </div>

        <div v-else v-for="item in cart" :key="item.id" class="cart-item">
          <component :is="iconMap[item.icon]" class="cart-item-icon" />
          <div class="cart-item-info">
            <h4>{{ item.name }}</h4>
            <p>Rp{{ item.price.toLocaleString('id') }} / porsi</p>
            <div class="cart-qty">
              <button class="qty-btn" @click="removeFromCart(item.id)">
                <Minus class="qty-btn-icon" />
              </button>
              <span class="qty-val">{{ item.qty }}</span>
              <button class="qty-btn" @click="addToCart(item.id)">
                <Plus class="qty-btn-icon" />
              </button>
            </div>
          </div>
          <div class="cart-item-price">
            Rp{{ (item.price * item.qty).toLocaleString('id') }}
          </div>
        </div>
      </div>

      <div v-if="cart.length > 0" class="cart-footer">
        <div class="cart-total">
          <span>Total</span>
          <span style="color:var(--red)">Rp{{ cartTotal.toLocaleString('id') }}</span>
        </div>
        <button class="cart-checkout" @click="handleCheckout">
          Lanjut Pre-Order →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '../composables/useCart';
import { ShoppingCart, ShoppingBag, X, Plus, Minus, Utensils, Flame, Fish, Sparkles, Soup, CookingPot } from 'lucide-vue-next';

const { 
  cart, 
  isCartOpen, 
  cartCount, 
  cartTotal, 
  openCart, 
  closeCart, 
  addToCart, 
  removeFromCart 
} = useCart();

const iconMap = {
  Utensils,
  Flame,
  Fish,
  Sparkles,
  Soup,
  CookingPot
};

const handleCheckout = () => {
  closeCart();
  const orderSection = document.getElementById('order');
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
/* ── CART SIDEBAR ── */
.cart-overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}

.cart-overlay.open {
  display: block;
}

.cart-sidebar {
  position: fixed;
  top: 0;
  right: -440px;
  width: 420px;
  height: 100vh;
  background: var(--charcoal);
  z-index: 201;
  padding: 40px 32px;
  overflow-y: auto;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 1px solid rgba(232, 39, 42, 0.2);
  display: flex;
  flex-direction: column;
}

.cart-sidebar.open {
  right: 0;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.title-with-icon {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1.5rem;
  color: var(--cream);
}

.header-icon {
  width: 24px;
  height: 24px;
  color: var(--red);
}

.cart-close {
  width: 36px;
  height: 36px;
  background: rgba(232, 39, 42, 0.1);
  border: 1px solid rgba(232, 39, 42, 0.3);
  color: var(--red);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.cart-close:hover {
  background: var(--red);
  color: white;
}

.close-icon {
  width: 18px;
  height: 18px;
}

.cart-items {
  flex: 1;
}

.cart-item {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  align-items: center;
}

.cart-item-icon {
  width: 36px;
  height: 36px;
  color: var(--gold);
  flex-shrink: 0;
}

.cart-item-info {
  flex: 1;
}

.cart-item-info h4 {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 0.95rem;
  margin-bottom: 4px;
  color: var(--cream);
}

.cart-item-info p {
  font-size: 0.75rem;
  color: var(--gray);
}

.cart-item-price {
  color: var(--red);
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1rem;
}

.cart-qty {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}

.qty-btn {
  width: 24px;
  height: 24px;
  background: rgba(232, 39, 42, 0.15);
  border: none;
  color: var(--red);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.qty-btn:hover {
  background: var(--red);
  color: white;
}

.qty-btn-icon {
  width: 12px;
  height: 12px;
}

.qty-val {
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  min-width: 20px;
  text-align: center;
  color: var(--cream);
}

.cart-empty {
  text-align: center;
  padding: 60px 0;
  color: var(--gray);
}

.cart-empty-icon {
  width: 3rem;
  height: 3rem;
  display: block;
  margin: 0 auto 16px;
  color: var(--gray);
}

.cart-empty p {
  font-size: 0.85rem;
}

.cart-footer {
  margin-top: auto;
  padding-top: 32px;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(232, 39, 42, 0.2);
  color: var(--cream);
}

.cart-checkout {
  width: 100%;
  background: var(--red);
  color: white;
  padding: 16px;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.cart-checkout:hover {
  background: var(--dark-red);
}

/* ── CART FLOAT BTN ── */
.cart-float {
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: var(--red);
  color: white;
  border: none;
  cursor: pointer;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 99;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  transition: background 0.3s, transform 0.2s;
  box-shadow: 0 8px 32px rgba(232, 39, 42, 0.4);
}

.cart-float:hover {
  background: var(--dark-red);
  transform: translateY(-3px);
}

.cart-float-icon {
  width: 1.1rem;
  height: 1.1rem;
}

.cart-float-text {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 1px;
}

.cart-float-count {
  background: var(--white);
  color: var(--red);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 0.7rem;
  min-width: 20px;
}

@media (max-width: 900px) {
  .cart-sidebar {
    width: 100%;
    right: -100%;
  }
}
</style>
