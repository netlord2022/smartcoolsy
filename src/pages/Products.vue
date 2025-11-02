<template>
  <div class="py-10 bg-gray-50 min-h-screen">
    <!-- Header -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">تصنيفات المنتجات</h2>
      <p class="text-gray-500">اختر التصنيف الذي يناسب احتياجاتك</p>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap justify-center gap-3 mb-10">
      <button
        v-for="filter in filters2"
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
      <div
        v-for="product in filteredProducts"
        :key="product.title"
        class="bg-white rounded-2xl shadow-sm border p-6 flex flex-col justify-between text-center hover:shadow-md transition"
      >
        <!-- Icon -->
        <div class="text-blue-900 text-5xl mb-4">
          <div class="category-img">
            <font-awesome-icon :icon="product.icon" />
          </div>
        </div>

        <!-- Info -->
        <div>
          <h3 class="font-semibold text-lg text-gray-800 mb-2">{{ product.title }}</h3>
          <p class="text-gray-600 text-sm mb-4 leading-relaxed">{{ product.description }}</p>
        </div>

        <!-- Button -->
        <a
          href="https://wa.me/963944590519"
          class="whatsapp-btn self-center text-lg w-10 h-10 rounded-full flex items-center justify-center bg-green-400"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const filters = [
  { name: "all", label: "الكل", icon: "fa-th-large" },
  { name: "coolers", label: "البرادات", icon: "fa-snowflake" },
  { name: "kitchen", label: "عدة المطبخ", icon: "fa-kitchen-set" },
  { name: "ice", label: "ماكينات السلاش والثلج", icon: "fa-ice-cream" },
  { name: "grills", label: "الشوايات والمقلايات", icon: "fa-fire" },
]

const selectedFilter = ref("all")

const products = [
  {
    title: "براد عمودي 2 متر",
    category: "coolers",
    description: "براد عمودي بمساحة تخزين كبيرة، مناسب للمطاعم الكبيرة",
    icon: ["fas", "door-closed"],
  },
  {
    title: "براد واجهة زجاجية",
    category: "coolers",
    description: "براد عرض بواجهة زجاجية شفافة، مثالي لعرض المشروبات والحلويات",
    icon: ["fas", "door-closed"],
  },
  {
    title: "براد مسطح 1.5 متر",
    category: "coolers",
    description: "براد مسطح بتصميم عصري وسعة كبيرة، مناسب للمطاعم والمقاهي",
    icon: ["fas", "door-closed"],
  },

  {
    title: "ماكينة تقطيع الخضار",
    category: "kitchen",
    description: "ماكينة تقطيع الخضار بسعة كبيرة، مناسبة للمطاعم السريعة",
    icon: ["fas", "utensils"],
  },
  {
    title: "خلاط صناعي 10 لتر",
    category: "kitchen",
    description: "خلاط صناعي قوي بسعة كبيرة، مناسب للمطاعم والحلويات",
    icon: ["fas", "utensils"],
  },
  {
    title: "فرن غاز 4 شعلات",
    category: "kitchen",
    description: "فرن غاز احترافي بـ 4 شعلات، مناسب للمطاعم والمطابخ الصغيرة",
    icon: ["fas", "utensils"],
  },
  //   <!-- ماكينات السلاش والثلج -->
  {
    title: "ماكينة سلاش مزدوجة",
    category: "ice",
    description: "ماكينة سلاش مزدوجة بمشروبين مختلفين، مناسبة للمقاهي",
    icon: ["fas", "glass-whiskey"],
  },
  {
    title: "ماكينة ثلج تجاري",
    category: "ice",
    description: "ماكينة ثلج تجارية بإنتاجية عالية، مناسبة للمطاعم والمقاهي",
    icon: ["fas", "glass-whiskey"],
  },
  //       <!-- الشوايات والقلايات -->
  {
    title: "شواية شاورما كهربائية",
    category: "grills",
    description: "شواية شاورما كهربائية احترافية بسعة كبيرة، مناسبة للمطاعم",
    icon: ["fas", "fire"],
  },
  {
    title: "قلاية بطاطس مزدوجة",
    category: "grills",
    description: "قلاية بطاطس مزدوجة بسعة كبيرة، مناسبة للمطاعم السريعة",
    icon: ["fas", "fire"],
  },
  {
    title: "شواية بروستد",
    category: "grills",
    description: "شواية بروستد احترافية بتحكم دقيق في درجة الحرارة",
    icon: ["fas", "fire"],
  },
]
const products2 = [
  {
    name: "industrial_refrigerator_2m",
    title: "براد صناعي 2 متر",
    description: "براد صناعي بسعة تخزين كبيرة، مناسب للمطاعم الكبيرة.",
    category: "refrigerators",
    icon: "fas fa-industry",
  },
  {
    name: "cake_display_refrigerator",
    title: "براد كاتو زجاجي",
    description: "براد عرض خاص بالحلويات والكيك بواجهة زجاجية.",
    category: "refrigerators",
    icon: "fas fa-cake",
  },
  {
    name: "vertical_icecream_freezer",
    title: "براد بوظة عمودي",
    description: "براد متخصص لعرض الآيس كريم بدرجة حرارة مناسبة.",
    category: "refrigerators",
    icon: "fas fa-ice-cream",
  },
  {
    name: "dairy_cheese_refrigerator",
    title: "براد أجبان وألبان",
    description: "براد مخصص للألبان والأجبان بتحكم دقيق في درجة الحرارة.",
    category: "refrigerators",
    icon: "fas fa-cheese",
  },
  {
    name: "meat_poultry_refrigerator",
    title: "براد فروج ولحوم",
    description: "براد عميق التبريد لتخزين اللحوم والدواجن الطازجة.",
    category: "refrigerators",
    icon: "fas fa-drumstick-bite",
  },
  {
    name: "juice_display_refrigerator",
    title: "براد عصائر",
    description: "براد عرض للعصائر والمشروبات الباردة.",
    category: "refrigerators",
    icon: "fas fa-wine-bottle",
  },
  {
    name: "service_table_refrigerator",
    title: "براد طاولة خدمة",
    description: "براد مسطح مدمج مع طاولة عمل للمطابخ الاحترافية.",
    category: "refrigerators",
    icon: "fas fa-table",
  },
  {
    name: "upright_freezer_300l",
    title: "فريزر عمودي 300 لتر",
    description: "فريزر عمودي بسعة كبيرة للتجميد السريع والتخزين الطويل.",
    category: "refrigerators",
    icon: "fas fa-box-open",
  },
  {
    name: "grill_spatchcock_chicken",
    title: "شواية فروج مسحب",
    description: "شواية فروج مشوي ميكانيكية بمحرك قوي.",
    category: "grills",
    icon: "fas fa-drumstick-bite",
  },
  {
    name: "electric_broasted_machine",
    title: "ماكينة بروستد كهرباء",
    description: "ماكينة بروستد كهربائية بتحكم رقمي في الحرارة.",
    category: "grills",
    icon: "fas fa-drumstick-bite",
  },
  {
    name: "stuffed_chicken_grill",
    title: "شواية فروج محشي",
    description: "شواية خاصة للفروج المحشي بتدوير ذاتي.",
    category: "grills",
    icon: "fas fa-drumstick-bite",
  },
  {
    name: "charcoal_shawarma_grill",
    title: "شواية شاورما فحم",
    description: "شواية شاورما تعمل على الفحم لإعطاء نكهة تقليدية.",
    category: "grills",
    icon: "fa-solid fa-jar-wheat",
  },
  {
    name: "double_fryer_potato",
    title: "قلاية بطاطا مزدوجة",
    description: "قلاية بطاطا بخزانين مستقلين، مناسبة للمطاعم السريعة.",
    category: "fryers_grills",
    icon: "fa-solid fa-bacon",
  },
  {
    name: "falafel_fryer",
    title: "قلاية فلافل",
    description: "قلاية متخصصة للفلافل بتصميم عميق ومناسب.",
    category: "fryers_grills",
    icon: "fa-solid fa-bacon",
  },
  {
    name: "large_fryer_mbruma",
    title: "قلاية مبرومة",
    description: "قلاية مخصصة للمبرومات بحجم كبير.",
    category: "fryers_grills",
    icon: "fa-solid fa-bacon",
  },
  {
    name: "chrome_grill_60cm",
    title: "غريل كروم 60 سم",
    description: "غريل كروم مقاوم للصدأ بمساحة طهي كبيرة.",
    category: "fryers_grills",
    icon: "fas fa-border-all",
  },
  {
    name: "water_dispenser_public",
    title: "براد ماء سبيل",
    description: "براد ماء بارد وساخن للمساجد والمؤسسات.",
    category: "water_coolers",
    icon: "fas fa-tint",
  },
  {
    name: "central_water_cooling_system",
    title: "براد ماء مركزي",
    description: "نظام تبريد مركزي لمياه الشرب للفنادق والمستشفيات.",
    category: "water_coolers",
    icon: "fas fa-water",
  },
  {
    name: "stainless_service_table",
    title: "طاولة خدمة ستانلس",
    description: "طاولة عمل ستانلس ستيل مقاومة للصدأ.",
    category: "tables_sinks",
    icon: "fas fa-table",
  },
  {
    name: "double_sink_unit",
    title: "مجلة غسيل مزدوجة",
    description: "مجلة غسيل ستانلس بمغسلتين منفصلتين.",
    category: "tables_sinks",
    icon: "fas fa-sink",
  },
  {
    name: "meat_grinder_1_5hp",
    title: "فرامة لحمة 1.5 حصان",
    description: "فرامة لحمة صناعية بمحرك قوي.",
    category: "grinders_mixers",
    icon: "fas fa-blender",
  },
  {
    name: "hummus_mayo_mixer",
    title: "خلاط حمص ومايونيز",
    description: "خلاط احترافي لتحضير الحمص والمايونيز بكميات كبيرة.",
    category: "grinders_mixers",
    icon: "fas fa-blender",
  },
  {
    name: "cake_mixer",
    title: "خفاقة كاتو",
    description: "ماكينة خفق كاتو بسرعات متعددة.",
    category: "grinders_mixers",
    icon: "fa-brands fa-mixer",
  },
  {
    name: "potato_slicer",
    title: "قطاعات بطاطا",
    description: "ماكينة تقطيع البطاطا بأنواع مختلفة من الشرائح.",
    category: "grinders_mixers",
    icon: "fas fa-cut",
  },
  {
    name: "pistachio_grinder",
    title: "كسارة فستق",
    description: "ماكينة طحن الفستق والبذور الزيتية.",
    category: "grinders_mixers",
    icon: "fas fa-mortar-pestle",
  },
  {
    name: "cheese_grater_machine",
    title: "برشة جبنة",
    description: "ماكينة برش الجبنة بسرعة عالية.",
    category: "grinders_mixers",
    icon: "fa-solid fa-cheese",
  },
  {
    name: "domestic_ice_machine",
    title: "ماكينة ثلج وطني",
    description: "ماكينة ثلج محلية الصنع بإنتاجية 50 كغ/يوم.",
    category: "ice_machines",
    icon: "fas fa-icicles",
  },
  {
    name: "imported_ice_machine",
    title: "ماكينة ثلج مستورد",
    description: "ماكينة ثلج مستوردة بإنتاجية 100 كغ/يوم.",
    category: "ice_machines",
    icon: "fas fa-icicles",
  },
  {
    name: "professional_icecream_machine",
    title: "ماكينة أيس كريم",
    description: "ماكينة تحضير الآيس كريم الاحترافية.",
    category: "ice_machines",
    icon: "fas fa-ice-cream",
  },
  {
    name: "slush_machine",
    title: "ماكينة سلاش",
    description: "ماكينة سلاش مزدوجة للمقاهي.",
    category: "ice_machines",
    icon: "fas fa-glass-whiskey",
  },
  {
    name: "gas_crepe_heater",
    title: "سخان كريب غاز",
    description: "سخان كريب بسطح حجري، يعمل على الغاز.",
    category: "sandwich_heaters",
    icon: "fa-solid fa-kitchen-set",
  },
  {
    name: "electric_cover_heater",
    title: "سخان كوفر كهربائي",
    description: "سخان كوفر بأنواع متعددة، يعمل على الكهرباء.",
    category: "sandwich_heaters",
    icon: "fas fa-bread-slice",
  },
]
const filters2 = [
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
  if (selectedFilter.value === "all") return products2
  return products2.filter((p) => p.category === selectedFilter.value)
})
</script>

<style scoped>
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
