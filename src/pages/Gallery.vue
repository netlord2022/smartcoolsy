<template>
  <!-- قسم الهيرو -->
  <section class="hero bg-gallery-hero bg-cover">
    <div class="container mx-auto">
      <h1>معرض صور المنتجات</h1>
      <p>استعرض صور منتجاتنا الحقيقية من جميع الزوايا</p>
    </div>
  </section>
  <!-- قسم معرض الصور -->
  <section class="gallery overflow-x-hidden" ref="gallery">
    <div class="container mx-auto">
      <div class="section-title">
        <h2>معرض الصور</h2>
        <p>اكتشف منتجاتنا من خلال صور عالية الجودة تظهر التفاصيل الدقيقة</p>
      </div>

      <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
        <Slide
          v-for="(image, index) in images"
          :key="index"
          class="mx-auto self-center flex justify-center justify-self-center gallery-slide image-container"
        >
          <img
            :src="srcList[index] || PLACEHOLDER"
            :alt="image"
            class="gallery-image"
            :loading="index < 3 ? 'eager' : 'lazy'"
            :decoding="index < 3 ? 'sync' : 'async'"
            :fetchpriority="index < 3 ? 'high' : 'low'"
            width="412"
            height="450"
            @click="openModal(srcList[index])"
            @load="handleImageLoad(index)"
          />
        </Slide>
      </Carousel>

      <Carousel
        id="thumbnails"
        v-bind="thumbnailsConfig"
        v-model="currentSlide"
        :autoplay="autoplay"
        @slide-start="handleSlideStart"
      >
        <Slide v-for="(image, index) in images" :key="index">
          <template #default="{ currentIndex, isActive }">
            <div :class="['thumbnail', { 'is-active': isActive }]" @click="slideTo(currentIndex)">
              <img
                :src="srcList[index] || PLACEHOLDER"
                :alt="image"
                class="thumbnail-image"
                :loading="index < 3 ? 'eager' : 'lazy'"
                :fetchpriority="index < 3 ? 'high' : 'low'"
                height="200"
                width="145"
                :decoding="index < 3 ? 'sync' : 'async'"
              />
            </div>
          </template>
        </Slide>

        <template #addons>
          <Navigation
            :class="[
              { 'next-hidden': currentSlide > loadedcount - 3 },
              { 'prev-hidden': currentSlide < 2 && loadedcount < 212 },
            ]"
          />
        </template>
      </Carousel>
    </div>
    <transition name="fade">
      <div
        v-if="currentImage"
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
              :src="currentImage"
              :alt="currentImage"
              class="w-full object-contain max-h-[85vh] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
<script setup>
import "vue3-carousel/carousel.css"
import { Carousel, Slide, Navigation } from "vue3-carousel"
import { ref, useTemplateRef } from "vue"

const images = Array.from({ length: 212 }, (_, i) => `slider (${i + 1}).webp`)

// tiny inline placeholder to avoid network requests before real src is set
const PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="

// initially set only first 3 images to real src (high priority), others null so they don't load
const srcList = ref(images.map((img, i) => (i < 3 ? `/images/${img}` : null)))

const currentSlide = ref(0)
const gallery = useTemplateRef("gallery")
const currentImage = ref(null)
const openModal = (image) => {
  if (!image) return
  currentImage.value = image
  autoplay.value = 0
  document.body.style.overflow = "hidden" // prevent background scroll
}

const closeModal = () => {
  currentImage.value = null
  autoplay.value = 6000
  document.body.style.overflow = "auto"
}

const slideTo = (nextSlide) => {
  // if user clicks a thumbnail that wasn't loaded yet — reveal it immediately
  if (!srcList.value[nextSlide]) {
    srcList.value[nextSlide] = `/images/${images[nextSlide]}`
    // prefetch neighbours for smoothness
    const nbrs = [nextSlide - 1, nextSlide + 1]
    nbrs.forEach((n) => {
      if (n >= 0 && n < images.length && !srcList.value[n]) {
        srcList.value[n] = `/images/${images[n]}`
      }
    })
  }
  currentSlide.value = nextSlide
}

const handleSlideStart = () => {
  console.log("slide start")
  gallery.value.click()
}

const loadedcount = ref(0)
const autoplay = ref(0)

// track which indexes we've counted as loaded to avoid double-counting
const loadedSet = new Set()

// called when a visible / main carousel <img> finishes loading
const handleImageLoad = (index) => {
  console.log("current, loaded, index: ", currentSlide.value, loadedcount.value, index)
  // only count if a real src was assigned (not the placeholder)
  if (!srcList.value[index]) return
  if (loadedSet.has(index)) return
  loadedSet.add(index)
  loadedcount.value += 1

  // when the first 3 prioritized images have loaded, start sequential reveal
  if (loadedcount.value >= 3) {
    startRevealRemaining()
  }
  if (loadedcount.value > 4 && !currentImage.value) {
    autoplay.value = 6000
    console.log("autoplay on")
  } else if (currentSlide.value > index - 2 && loadedcount.value < 200) {
    autoplay.value = 0
    console.log("autoplay off")
  }
}

// Count loads from the main (large) carousel images only.
// When the first 3 are loaded we begin revealing the rest in small batches.
let revealStarted = false

// preload one image and assign to reactive list only after it finishes downloading
const loadImage = (index) => {
  return new Promise((resolve) => {
    if (srcList.value[index]) {
      resolve(index)
      return
    }
    const url = `/images/${images[index]}`
    const img = new Image()
    img.onload = () => {
      // assign after successful download so DOM <img> will use cache and emit load
      srcList.value[index] = url
      resolve(index)
    }
    img.onerror = () => {
      // on failure assign anyway to avoid infinite retries (or keep placeholder if you prefer)
      srcList.value[index] = url
      resolve(index)
    }
    img.src = url
  })
}

// sequential reveal: wait for each image to finish before loading the next
const startRevealRemaining = async () => {
  if (revealStarted) return
  revealStarted = true

  for (let i = 3; i < images.length; i++) {
    if (srcList.value[i]) continue // skip if user already requested it
    await loadImage(i)
    // small delay to give network breathing room on slow connections
    await new Promise((r) => setTimeout(r, 2))
  }
}
const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: "fade",
  mouseDrag: false,
  touchDrag: false,
  height: 450,
  breakpoints: {
    450: {
      height: 400,
    },
    768: {
      height: 450,
    },
    1024: {
      height: 550,
    },
  },
  center: true,
  itemToScroll: 1,
}

const thumbnailsConfig = {
  height: 200,

  breakpoints: {
    300: {
      itemsToShow: 3,
    },
    768: {
      itemsToShow: 4,
    },
    1024: {
      itemsToShow: 6,
    },
    1200: {
      itemsToShow: 10,
    },
  },
  wrapAround: true,
  touchDrag: { threshold: 0.8 },
  gap: 10,
}
</script>
<style scoped>
.hero {
  background-size: cover;
  background-position: top;
  color: white;
  text-align: center;
  padding: 100px 20px;
}
.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 0px 2px 5px black;
}
.hero p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 30px;
  text-shadow: 0px 2px 5px black;
}

.gallery {
  padding: 80px 0;
}
.section-title {
  text-align: center;
  margin-bottom: 50px;
}
.section-title h2 {
  font-size: 2rem;
  color: #1a3a5f;
  margin-bottom: 15px;
}
.section-title p {
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}
.img-slider {
  width: 180px !important;
  height: 300px !important;
  object-fit: cover !important;
}
.gallery-slide {
  max-width: 33%;
}
@media (max-width: 768px) {
  .img-slider {
    width: 95% !important;
    height: 260px !important;
    object-fit: cover !important;
  }
  .gallery-slide {
    max-width: 99% !important;
  }
}
@media (max-width: 1000px) {
  .gallery-slide {
    max-width: 45%;
  }
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

#gallery.carousel .carousel__track {
  justify-items: center;
  grid-template-columns: 1fr;
}
#gallery.carousel {
  z-index: 22;
}

.thumbnail-image,
.gallery-image {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-image {
  border-radius: 16px;
}

#thumbnails {
  margin-top: 10px;
}

.thumbnail {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
}

.image-container {
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.image-container img {
  transition: all 0.5s ease;
}
</style>
<style>
.carousel__next.next-hidden {
  display: none !important;
}
.carousel__prev.prev-hidden {
  display: none !important;
}
</style>
