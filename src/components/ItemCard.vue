<template>
  <div v-if="product" class="relative">
    <div class="category bg-white rounded-md overflow-hidden cursor-pointer" @click="openModal">
      <div class="category-img overflow-hidden w-full">
        <img
          v-if="firstImage"
          :src="firstImage.url"
          :alt="firstImage.alt"
          class="w-full object-contain"
          :width="firstImage.width"
          :height="firstImage.height"
          :class="product.isLandscape ? 'h-auto' : 'h-full'"
        />
      </div>
      <div class="category-content">
        <h3>{{ product.title }}</h3>
        <p>{{ mainDescription }}</p>
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
              v-if="firstImage"
              :src="firstImage.url"
              :alt="firstImage.alt"
              class="w-full object-contain max-h-[85vh] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue"
type Images = {
  fields: {
    file: {
      url: string
      details: {
        image: {
          width: number
          height: number
        }
      }
    }
    title: string
  }
}[]
type Props = {
  product: {
    title: string
    description: string
    category: string
    icon: string
    image: Images
    slug: string
    isLandscape: boolean | undefined
  }
}
const props = defineProps<Props>()
const firstImage = computed(() => {
  const firstImage = props.product.image?.[0]
  if (firstImage) {
    return {
      url: firstImage.fields.file.url,
      width: firstImage.fields.file.details.image.width,
      height: firstImage.fields.file.details.image.height,
      alt: firstImage.fields.title,
    }
  }
  return null
})
const mainDescription = computed(() => {
  const firstDesc = props.product.description.content?.[0].content[0].value
  if (firstDesc) return firstDesc
  return null
})

const showBg = ref(false)
const openModal = () => {
  if (!firstImage.value) return
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
