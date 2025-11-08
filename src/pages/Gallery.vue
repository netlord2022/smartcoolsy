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
            :src="`/images/${image}`"
            alt="Gallery Image"
            class="gallery-image"
            :loading="index < 2 ? 'eager' : 'lazy'"
            :fetchpriority="index < 2 ? 'high' : 'low'"
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
                :src="`/images/${image}`"
                :alt="image"
                class="thumbnail-image"
                :loading="index < 2 ? 'eager' : 'lazy'"
                :fetchpriority="index < 2 ? 'high' : 'low'"
                @load="handleImageLoad(index)"
              />
            </div>
          </template>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<script setup>
import "vue3-carousel/carousel.css"
import { Carousel, Slide, Navigation } from "vue3-carousel"
import { ref, useTemplateRef } from "vue"

const currentSlide = ref(0)
const gallery = useTemplateRef("gallery")

const slideTo = (nextSlide) => (currentSlide.value = nextSlide)

const handleSlideStart = () => {
  console.log("slide start")
  gallery.value.click()
}

const loadedcount = ref(0)
const autoplay = ref(0)
const handleImageLoad = (index) => {
  loadedcount.value += 1
  console.log(" images loaded", loadedcount.value, index, currentSlide.value)
  if (loadedcount.value > 4) {
    autoplay.value = 6000
    console.log("autoplay on")
  } else if (
    (currentSlide.value > loadedcount.value - 2 || currentSlide.value > index - 2) &&
    loadedcount.value < 200
  ) {
    autoplay.value = 0
    console.log("jump to slide", currentSlide.value, loadedcount.value - 2)
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

const images = Array.from({ length: 212 }, (_, i) => `slider (${i + 1}).webp`)
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

img {
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
.image-container:hover {
  overflow: visible;
  position: fixed;
  z-index: 777;
  max-height: 80vh;
  top: 45px;
  bottom: 45px;
  margin: auto;
}

.image-container img {
  transition: all 0.5s ease;
}

.image-container:hover img {
  object-fit: contain;
  transform: scale(1.05);
  background-color: #000;
}
</style>
