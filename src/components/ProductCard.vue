<template>
  <div v-if="product" class="relative">
    <div class="category bg-white rounded-md overflow-hidden cursor-pointer" @click="openModal">
      <div class="category-img overflow-hidden w-full">
        <img
          :src="product.img"
          :alt="product.img"
          class="w-full object-contain"
          :class="product.vertical ? 'h-full' : 'h-auto'"
        />
      </div>
      <div class="category-content">
        <h3>{{ product.title }}</h3>
        <p>{{ product.subtitle ?? product.description }}</p>
        <font-awesome-icon :icon="product.icon" />
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="showBg"
        class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        @click.self="closeModal"
      >
        <div class="relative max-w-5xl w-full">
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-2 right-2 bg-black/60 leading-none hover:bg-black text-white rounded-full p-2 z-10 text-sm cursor-pointer"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" class="w-3" />
          </button>
          <div class="flex items-center justify-center max-h-[85vh] bg-white rounded-lg">
            <img
              :src="product.img"
              :alt="product.bgClass"
              class="w-full object-contain max-h-[85vh] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { ref } from "vue"
const props = defineProps({
  product: {
    type: {
      title: String,
      subtitle: String,
      description: String,
      icon: String,
      img: String,
      bgClass: String,
      vertical: Boolean | undefined,
    },
    required: true,
  },
})

const showBg = ref(false)
const openModal = () => {
  if (!props.product.img) return
  showBg.value = true
  document.body.style.overflow = "hidden" // prevent background scroll
}

const closeModal = () => {
  showBg.value = false
  document.body.style.overflow = "auto"
}
</script>
<style scoped>
.category {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.category:hover {
  transform: translateY(-10px);
}

.category-img {
  height: 200px;
  font-size: 50px;
  color: #1a3a5f;
}

.category-content {
  padding: 20px;
  position: relative;
}

.category-content h3 {
  margin-bottom: 10px;
  color: #1a3a5f;
  font-weight: 600;
  font-size: 1.025rem;
}
.category-content svg {
  position: absolute;
  top: 16px;
  left: 8px;
  font-size: 32px;
  color: #1a3a5f;
}
.img-size {
  width: calc(95vh - 10px);
  height: calc(95vh - 10px);
}
svg.w-3 {
  width: 12px !important;
}
</style>
