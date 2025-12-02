<template>
  <div class="py-10 bg-gray-50 min-h-screen">
    <section class="hero bg-products-hero bg-cover">
      <div class="container mx-auto">
        <h1>جميع منتجاتنا</h1>
        <p>استعرض جميع تجهيزات المطاعم والفنادق بأعلى معايير الجودة والكفاءة</p>
      </div>
    </section>
    <!-- Header -->
    <div class="text-center my-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">تصنيفات المنتجات</h2>
      <p class="text-gray-500">اختر التصنيف الذي يناسب احتياجاتك</p>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap justify-center gap-3 mb-10">
      <button
        v-for="filter in filters"
        :key="filter.name"
        @click="selectedFilter = filter.name"
        class="px-5 py-2 rounded-full flex items-center gap-2 font-medium transition-all cursor-pointer"
        :class="
          selectedFilter === filter.name
            ? 'bg-blue-900 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
        "
      >
        <font-awesome-icon :icon="filter.icon" />
        {{ filter.label }}
      </button>
    </div>

    <!-- Products Grid -->
    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-6 md:px-16">
      <!--   <div
        v-for="product in filteredProducts"
        :key="product.title"
        class="bg-white rounded-2xl shadow-sm border p-6 flex flex-col justify-between text-center hover:shadow-md transition"
      >

        <div class="text-blue-900 text-5xl mb-4">
          <div class="category-img">
            <font-awesome-icon :icon="product.icon" />
          </div>
        </div>

   
        <div>
          <h3 class="font-semibold text-lg text-gray-800 mb-2">{{ product.title }}</h3>
          <p class="text-gray-600 text-sm mb-4 leading-relaxed">{{ product.description }}</p>
        </div>


        <a
          href="https://wa.me/963944590519"
          class="whatsapp-btn self-center text-lg w-10 h-10 rounded-full flex items-center justify-center bg-green-400"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </div> -->

      <ProductCard
        v-for="product in filteredProducts"
        :key="product.name"
        :product="product"
        :name="product.name"
        :title="product.title"
        :description="product.description"
        :category="product.category"
        :icon="product.icon"
        :img="product.img"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import ProductCard from "../components/ProductCard.vue"
const selectedFilter = ref("all")

const products = [
  {
    name: "industrial_refrigerator_2m",
    title: "براد صناعي 2 متر",
    description: "براد صناعي بسعة تخزين كبيرة، مناسب للمطاعم الكبيرة.",
    category: "refrigerators",
    icon: "fas fa-industry",
    img: "/cooler_2m.webp",
    vertical: true,
  },
  {
    name: "cake_display_refrigerator",
    title: "براد كاتو زجاجي",
    description: "براد عرض خاص بالحلويات والكيك بواجهة زجاجية.",
    category: "refrigerators",
    icon: "fas fa-cake",
    img: "/cake_cooler.webp",
    vertical: true,
  },
  {
    name: "vertical_icecream_freezer",
    title: "براد بوظة عمودي",
    description: "براد متخصص لعرض الآيس كريم بدرجة حرارة مناسبة.",
    category: "refrigerators",
    icon: "fas fa-ice-cream",
    img: "/ice_cooler.webp",
    vertical: true,
  },
  {
    name: "dairy_cheese_refrigerator",
    title: "براد أجبان وألبان",
    description: "براد مخصص للألبان والأجبان بتحكم دقيق في درجة الحرارة.",
    category: "refrigerators",
    icon: "fas fa-cheese",
    img: "/cheese_cooler.webp",
    vertical: true,
  },
  {
    name: "meat_poultry_refrigerator",
    title: "براد فروج ولحوم",
    description: "براد عميق التبريد لتخزين اللحوم والدواجن الطازجة.",
    category: "refrigerators",
    icon: "fas fa-drumstick-bite",
    img: "/meat_cooler.webp",
    vertical: true,
  },
  {
    name: "juice_display_refrigerator",
    title: "براد عصائر",
    description: "براد عرض للعصائر والمشروبات الباردة.",
    category: "refrigerators",
    icon: "fas fa-wine-bottle",
    img: "/juice_cooler.webp",
    vertical: true,
  },
  {
    name: "service_table_refrigerator",
    title: "براد طاولة خدمة",
    description: "براد مسطح مدمج مع طاولة عمل للمطابخ الاحترافية.",
    category: "refrigerators",
    icon: "fas fa-table",
    img: "/table_cooler.webp",
    vertical: true,
  },
  {
    name: "upright_freezer_300l",
    title: "فريزر عمودي 300 لتر",
    description: "فريزر عمودي بسعة كبيرة للتجميد السريع والتخزين الطويل.",
    category: "refrigerators",
    icon: "fas fa-box-open",
    img: "/deep_cooler.webp",
    vertical: true,
  },
  {
    name: "grill_spatchcock_chicken",
    title: "شواية فروج مسحب",
    description: "شواية فروج مشوي ميكانيكية بمحرك قوي.",
    category: "grills",
    icon: "fas fa-drumstick-bite",
    img: "/grill_spatchcock_chicken.webp",
    vertical: true,
  },
  {
    name: "electric_broasted_machine",
    title: "ماكينة بروستد كهرباء",
    description: "ماكينة بروستد كهربائية بتحكم رقمي في الحرارة.",
    category: "grills",
    icon: "fas fa-drumstick-bite",
    img: "/electric_broasted_machine.webp",
    vertical: true,
  },
  {
    name: "stuffed_chicken_grill",
    title: "شواية فروج محشي",
    description: "شواية خاصة للفروج المحشي بتدوير ذاتي.",
    category: "grills",
    icon: "fas fa-drumstick-bite",
    img: "/stuffed_chicken_grill.webp",
    vertical: true,
  },
  {
    name: "charcoal_shawarma_grill",
    title: "شواية شاورما فحم",
    description: "شواية شاورما تعمل على الفحم لإعطاء نكهة تقليدية.",
    category: "grills",
    icon: "fa-solid fa-jar-wheat",
    img: "/charcoal_shawarma_grill.webp",
    vertical: true,
  },
  {
    name: "double_fryer_potato",
    title: "قلاية بطاطا مزدوجة",
    description: "قلاية بطاطا بخزانين مستقلين، مناسبة للمطاعم السريعة.",
    category: "fryers_grills",
    icon: "fa-solid fa-bacon",
    img: "/fryer.webp",
    vertical: true,
  },
  {
    name: "falafel_fryer",
    title: "قلاية فلافل",
    description: "قلاية متخصصة للفلافل بتصميم عميق ومناسب.",
    category: "fryers_grills",
    icon: "fa-solid fa-bacon",
    img: "/falafel_fryer.webp",
    vertical: true,
  },
  {
    name: "large_fryer_mbruma",
    title: "قلاية مبرومة",
    description: "قلاية مخصصة للمبرومات بحجم كبير.",
    category: "fryers_grills",
    icon: "fa-solid fa-bacon",
    img: "/rolled_freyer.webp",
    vertical: true,
  },
  {
    name: "chrome_grill_60cm",
    title: "غريل كروم 60 سم",
    description: "غريل كروم مقاوم للصدأ بمساحة طهي كبيرة.",
    category: "fryers_grills",
    icon: "fas fa-border-all",
    img: "/chrome_grill_60cm.webp",
    vertical: true,
  },
  {
    name: "water_dispenser_public",
    title: "براد ماء سبيل",
    description: "براد ماء بارد وساخن للمساجد والمؤسسات.",
    category: "water_coolers",
    icon: "fas fa-tint",
    img: "/water_dispenser_public.webp",
    vertical: true,
  },
  {
    name: "central_water_cooling_system",
    title: "براد ماء مركزي",
    description: "نظام تبريد مركزي لمياه الشرب للفنادق والمستشفيات.",
    category: "water_coolers",
    icon: "fas fa-water",
    img: "/central_water_cooling_system.webp",
    vertical: true,
  },
  {
    name: "stainless_service_table",
    title: "طاولة خدمة ستانلس",
    description: "طاولة عمل ستانلس ستيل مقاومة للصدأ.",
    category: "tables_sinks",
    icon: "fas fa-table",
    img: "/stainless_service_table.webp",
    vertical: true,
  },
  {
    name: "double_sink_unit",
    title: "مجلى غسيل مزدوج",
    description: "مجلى غسيل ستانلس بمغسلتين منفصلتين.",
    category: "tables_sinks",
    icon: "fas fa-sink",
    img: "/double_sink_unit.webp",
    vertical: true,
  },
  {
    name: "meat_grinder_1_5hp",
    title: "فرامة لحمة 1.5 حصان",
    description: "فرامة لحمة صناعية بمحرك قوي.",
    category: "grinders_mixers",
    icon: "fas fa-blender",
    img: "/meat_grinder_1_5hp.webp",
    vertical: true,
  },
  {
    name: "hummus_mayo_mixer",
    title: "خلاط حمص ومايونيز",
    description: "خلاط احترافي لتحضير الحمص والمايونيز بكميات كبيرة.",
    category: "grinders_mixers",
    icon: "fas fa-blender",
    img: "/hummus_mayo_mixer.webp",
    vertical: true,
  },
  {
    name: "cake_mixer",
    title: "خفاقة كاتو",
    description: "ماكينة خفق كاتو بسرعات متعددة.",
    category: "grinders_mixers",
    icon: "fa-brands fa-mixer",
    img: "/cake_mixer.webp",
    vertical: true,
  },
  {
    name: "potato_slicer",
    title: "قطاعات بطاطا",
    description: "ماكينة تقطيع البطاطا بأنواع مختلفة من الشرائح.",
    category: "grinders_mixers",
    icon: "fas fa-cut",
    img: "/potato_slicer.webp",
    vertical: true,
  },
  {
    name: "pistachio_grinder",
    title: "كسارة فستق",
    description: "ماكينة طحن الفستق والبذور الزيتية.",
    category: "grinders_mixers",
    icon: "fas fa-mortar-pestle",
    img: "/pistachio_grinder.webp",
    vertical: true,
  },
  {
    name: "cheese_grater_machine",
    title: "براشة جبنة",
    description: "ماكينة برش الجبنة بسرعة عالية.",
    category: "grinders_mixers",
    icon: "fa-solid fa-cheese",
    img: "/cheese_grater_machine.webp",
    vertical: true,
  },
  {
    name: "domestic_ice_machine",
    title: "ماكينة ثلج وطني",
    description: "ماكينة ثلج محلية الصنع بإنتاجية 50 كغ/يوم.",
    category: "ice_machines",
    icon: "fas fa-icicles",
    img: "/domestic_ice_machine.webp",
    vertical: true,
  },
  {
    name: "imported_ice_machine",
    title: "ماكينة ثلج مستورد",
    description: "ماكينة ثلج مستوردة بإنتاجية 100 كغ/يوم.",
    category: "ice_machines",
    icon: "fas fa-icicles",
    img: "/imported_ice_machine.webp",
    vertical: true,
  },
  {
    name: "professional_icecream_machine",
    title: "ماكينة أيس كريم",
    description: "ماكينة تحضير الآيس كريم الاحترافية.",
    category: "ice_machines",
    icon: "fas fa-ice-cream",
    img: "/professional_icecream_machine.webp",
    vertical: true,
  },
  {
    name: "slush_machine",
    title: "ماكينة سلاش",
    description: "ماكينة سلاش مزدوجة للمقاهي.",
    category: "ice_machines",
    icon: "fas fa-glass-whiskey",
    img: "/slush_machine.webp",
    vertical: true,
  },
  {
    name: "gas_crepe_heater",
    title: "سخان كريب غاز",
    description: "سخان كريب بسطح حجري، يعمل على الغاز.",
    category: "sandwich_heaters",
    icon: "fa-solid fa-kitchen-set",
    img: "/gas_crepe_heater.webp",
    vertical: true,
  },
  {
    name: "electric_cover_heater",
    title: "سخان كوفر كهربائي",
    description: "سخان كوفر بأنواع متعددة، يعمل على الكهرباء.",
    category: "sandwich_heaters",
    icon: "fas fa-bread-slice",
    img: "/electric_cover_heater.webp",
    vertical: true,
  },
]
const filters = [
  { name: "all", label: "الكل", icon: "fas fa-th-large" },
  { name: "refrigerators", label: "برادات", icon: "fas fa-snowflake" },
  { name: "grills", label: "شوايات", icon: "fas fa-fire" },
  { name: "fryers_grills", label: "قلايات + غريل", icon: "fa-solid fa-bacon" },
  { name: "water_coolers", label: "برادات مناهل وسبيل", icon: "fas fa-tint" },
  { name: "tables_sinks", label: "طاولات ومجالي وستاندات", icon: "fas fa-table" },
  { name: "grinders_mixers", label: "فرامات لحمة وخلاطات", icon: "fas fa-blender" },
  { name: "ice_machines", label: "ماكينات الثلج", icon: "fas fa-icicles" },
  { name: "sandwich_heaters", label: "سخانات سندويش", icon: "fas fa-bread-slice" },
]

const filteredProducts = computed(() => {
  if (selectedFilter.value === "all") return products
  return products.filter((p) => p.category === selectedFilter.value)
})
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 130px 20px;
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
}
body {
  direction: rtl;
  font-family: "Tajawal", sans-serif;
}

.category-img {
  height: 200px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #1a3a5f;
}

/* Responsive Design */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr !important;
    gap: 1rem;
  }

  .category-img {
    height: 150px;
    font-size: 40px;
  }

  .text-center h2 {
    font-size: 1.5rem;
  }

  .text-center p {
    font-size: 0.9rem;
  }

  .px-6 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}

@media (max-width: 480px) {
  .category-img {
    height: 120px;
    font-size: 30px;
  }

  .text-center h2 {
    font-size: 1.2rem;
  }

  .text-center p {
    font-size: 0.8rem;
  }

  .px-6 {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}
</style>
