<template>
  <div class="flex flex-wrap justify-center gap-3 mb-10">
    <button
      v-for="{ fields: category } in categories"
      :key="category.value"
      @click="onSelectCategory(category.value)"
      class="px-5 py-2 rounded-full flex items-center gap-2 font-medium transition-all cursor-pointer"
      :class="
        selectedcategory === category.value
          ? 'bg-blue-900 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
      "
    >
      <font-awesome-icon :icon="category.icon" />
      {{ category.title }}
    </button>
  </div>

  <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-6 md:px-16">
    <ItemCard v-for="product in filteredProducts" :key="product.slug" :product="product.fields" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import ItemCard from "../components/ItemCard.vue"

const products = ref([])
const categories = ref([])
const selectedcategory = ref("all")

onMounted(async () => {
  const [prodRes, catRes] = await Promise.all([
    fetch("/.netlify/functions/getContentfulData?type=product"),
    fetch("/.netlify/functions/getContentfulData?type=category"),
  ])

  products.value = await prodRes.json()
  categories.value = await catRes.json()
  console.log(categories.value)

  console.log(products.value)
})
const onSelectCategory = (category) => {
  selectedcategory.value = category
}

const filteredProducts = computed(() => {
  if (selectedcategory.value === "all") return products.value
  return products.value.filter((p) => p.fields.cetegoty === selectedcategory.value)
})
</script>
<style scoped></style>
