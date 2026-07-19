<template>
  <section class="menu" id="menu">
    <div class="menu-header">
      <div>
        <div class="section-label">Menu Kami</div>
        <h2 class="section-title">Pilihan <span style="color:var(--red)">Bunshik</span></h2>
      </div>
      <div class="menu-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.id" 
          class="tab-btn" 
          :class="{ active: currentFilter === tab.id }"
          @click="currentFilter = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div class="menu-grid">
      <div v-for="item in filteredMenu" :key="item.id" class="menu-card">
        <div class="menu-card-top">
          <span class="menu-badge" :class="'badge-' + item.badge">{{ item.badgeText }}</span>
          <component :is="iconMap[item.icon]" class="menu-icon" />
          <div class="menu-kr">{{ item.kr }}</div>
        </div>
        <div class="menu-card-body">
          <h3>{{ item.name }}</h3>
          <p>{{ item.desc }}</p>
          <div class="menu-card-footer">
            <div class="menu-price">
              Rp{{ item.price.toLocaleString('id') }} <span>/ porsi</span>
            </div>
            <button class="add-btn" @click="addToCart(item.id)">+</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCart } from '../composables/useCart';
import { Utensils, Flame, Fish, Sparkles, Soup, CookingPot } from 'lucide-vue-next';

const { menuData, addToCart } = useCart();

const currentFilter = ref('all');

const tabs = [
  { id: 'all', label: 'Semua' },
  { id: 'kimbab', label: 'Kimbab' },
  { id: 'hot', label: 'Hot Food' },
  { id: 'meal', label: 'Meal Set' }
];

const iconMap = {
  Utensils,
  Flame,
  Fish,
  Sparkles,
  Soup,
  CookingPot
};

const filteredMenu = computed(() => {
  if (currentFilter.value === 'all') return menuData;
  return menuData.filter(item => item.cat === currentFilter.value);
});
</script>

<style scoped>
.menu {
  background: var(--black);
}

.menu-header {
  max-width: 1200px;
  margin: 0 auto 64px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.menu-tabs {
  display: flex;
  gap: 0;
  border: 1px solid rgba(232, 39, 42, 0.2);
}

.tab-btn {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 10px 20px;
  background: transparent;
  color: var(--gray);
  border: none;
  cursor: pointer;
  border-right: 1px solid rgba(232, 39, 42, 0.2);
  transition: all 0.3s;
}

.tab-btn:last-child {
  border-right: none;
}

.tab-btn.active {
  background: var(--red);
  color: var(--white);
}

.tab-btn:hover:not(.active) {
  color: var(--cream);
  background: rgba(232, 39, 42, 0.1);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-card {
  background: var(--charcoal);
  border: 1px solid rgba(255, 248, 240, 0.06);
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;
  position: relative;
  cursor: pointer;
}

.menu-card:hover {
  border-color: rgba(232, 39, 42, 0.4);
  transform: translateY(-4px);
}

.menu-card-top {
  background: var(--black);
  padding: 40px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu-icon {
  width: 4rem;
  height: 4rem;
  color: var(--red);
  margin-bottom: 12px;
  display: block;
}

.menu-kr {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1.2rem;
  color: rgba(232, 39, 42, 0.4);
  margin-top: 4px;
}

.menu-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  font-family: 'Space Mono', monospace;
  font-size: 0.55rem;
  letter-spacing: 1px;
  padding: 4px 8px;
  text-transform: uppercase;
}

.badge-hot {
  background: var(--red);
  color: white;
}

.badge-new {
  background: var(--gold);
  color: var(--black);
}

.badge-fav {
  background: transparent;
  color: var(--gold);
  border: 1px solid var(--gold);
}

.menu-card-body {
  padding: 24px;
}

.menu-card h3 {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1.3rem;
  margin-bottom: 8px;
  color: var(--cream);
}

.menu-card p {
  color: var(--gray);
  font-size: 0.8rem;
  line-height: 1.6;
  margin-bottom: 20px;
  min-height: 52px; /* Keeps height consistent */
}

.menu-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-price {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1.4rem;
  color: var(--red);
}

.menu-price span {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.7rem;
  color: var(--gray);
  font-weight: 300;
}

.add-btn {
  width: 36px;
  height: 36px;
  background: var(--red);
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
  transition: background 0.2s;
}

.add-btn:hover {
  background: var(--dark-red);
}

@media (max-width: 900px) {
  .menu-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
}
</style>
