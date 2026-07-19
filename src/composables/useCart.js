import { ref, computed } from 'vue';

// Shared state (declared outside the function so it acts as a single global store)
const cart = ref([]);
const isCartOpen = ref(false);
const toastMessage = ref('');
const isToastShow = ref(false);
let toastTimeout = null;

const menuData = [
  { id: 1, name: "Kimbab Original", kr: "김밥", price: 15000, desc: "Nasi gulung isian sayur & telur. Klasik, sehat, dan praktis dikonsumsi di mana saja.", badge: "fav", badgeText: "Favorit", cat: "kimbab", icon: "Utensils" },
  { id: 2, name: "Kimbab Chicken", kr: "치킨김밥", price: 18000, desc: "Kimbab dengan isian ayam suwir berbumbu, tambah gurih dan bikin kenyang.", badge: "hot", badgeText: "HOT", cat: "kimbab", icon: "Flame" },
  { id: 3, name: "Kimbab Tuna Mayo", kr: "참치김밥", price: 18000, desc: "Perpaduan tuna dengan mayo creamy yang bikin nagih. Favorit para pecinta mayo!", badge: "new", badgeText: "NEW", cat: "kimbab", icon: "Fish" },
  { id: 4, name: "Kimbab Spicy", kr: "매운김밥", price: 18000, desc: "Untuk kamu yang suka pedas! Kimbab dengan saus gochujang yang bikin keringetan.", badge: "hot", badgeText: "HOT", cat: "kimbab", icon: "Flame" },
  { id: 5, name: "Kimbab Premium", kr: "프리미엄김밥", price: 22000, desc: "Mix protein — ayam, telur, dan tuna mayo dalam satu gulungan premium yang memuaskan.", badge: "fav", badgeText: "Premium", cat: "kimbab", icon: "Sparkles" },
  { id: 6, name: "Odeng / Fish Cake", kr: "어묵", price: 15000, desc: "Fish cake kenyal dengan kuah hangat yang comforting. Cocok di hari yang dingin.", badge: "fav", badgeText: "Comfort", cat: "hot", icon: "Soup" },
  { id: 7, name: "Tteokbokki Original", kr: "떡볶이", price: 18000, desc: "Kue beras dengan saus gochujang pedas-manis khas Korea. Satu potong tidak pernah cukup!", badge: "hot", badgeText: "HOT", cat: "hot", icon: "Flame" },
  { id: 8, name: "Tteokbokki X-Spicy", kr: "매운떡볶이", price: 18000, desc: "Level pedas maksimal! Challenge dirimu dengan Tteokbokki extra spicy Kagebunsik.", badge: "new", badgeText: "NEW", cat: "hot", icon: "Flame" },
  { id: 9, name: "Dosirak Box", kr: "도시락", price: 25000, desc: "Paket nasi lengkap ala Korean lunchbox. Nasi + lauk pilihan = makan siang beres!", badge: "fav", badgeText: "Best Seller", cat: "meal", icon: "CookingPot" }
];

export function useCart() {
  const showToast = (msg) => {
    toastMessage.value = msg;
    isToastShow.value = true;
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      isToastShow.value = false;
    }, 2500);
  };

  const addToCart = (id) => {
    const item = menuData.find(m => m.id === id);
    if (!item) return;
    const existing = cart.value.find(c => c.id === id);
    if (existing) {
      existing.qty++;
    } else {
      cart.value.push({ ...item, qty: 1 });
    }
    showToast(`${item.name} ditambahkan!`);
  };

  const removeFromCart = (id) => {
    const idx = cart.value.findIndex(c => c.id === id);
    if (idx !== -1) {
      if (cart.value[idx].qty > 1) {
        cart.value[idx].qty--;
      } else {
        cart.value.splice(idx, 1);
      }
    }
  };

  const cartCount = computed(() => cart.value.reduce((sum, item) => sum + item.qty, 0));
  const cartTotal = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.qty, 0));

  const openCart = () => {
    isCartOpen.value = true;
  };

  const closeCart = () => {
    isCartOpen.value = false;
  };

  return {
    cart,
    menuData,
    isCartOpen,
    toastMessage,
    isToastShow,
    addToCart,
    removeFromCart,
    cartCount,
    cartTotal,
    openCart,
    closeCart,
    showToast
  };
}
