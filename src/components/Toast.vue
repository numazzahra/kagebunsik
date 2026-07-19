<template>
  <div class="toast" :class="{ show: isToastShow }">
    <CheckCircle class="toast-icon" />
    <span id="toastMsg">{{ toastMessage }}</span>
  </div>
</template>

<script setup>
import { useCart } from '../composables/useCart';
import { CheckCircle } from 'lucide-vue-next';

const { toastMessage, isToastShow } = useCart();
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: var(--charcoal);
  border: 1px solid var(--red);
  padding: 16px 28px;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 1px;
  z-index: 300;
  opacity: 0;
  transition: all 0.4s;
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--cream);
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.toast-icon {
  width: 16px;
  height: 16px;
  color: var(--gold);
}
</style>
