<template>
  <!-- قسم الهيرو -->
  <section class="hero bg-hero">
    <div class="container mx-auto">
      <h1>الحلول المتكاملة لتجهيزات الفنادق والمطاعم</h1>
      <router-link to="/products" class="btn">استعرض المنتجات</router-link>
    </div>
  </section>

  <!-- قسم المنتجات -->
  <section class="products">
    <div class="container mx-auto px-6 sm:px-1">
      <div class="section-title">
        <h2>فئات المنتجات</h2>
        <p>اكتشف مجموعتنا الواسعة من تجهيزات المطاعم والفنادق</p>
      </div>
      <div class="product-categories">
        <ProductCard v-for="product in products" :key="product.title" :product="product" />
      </div>
    </div>
  </section>

  <!-- قسم المميزات -->
  <section class="features">
    <div class="container mx-auto">
      <div class="section-title">
        <h2 class="text-white">لماذا تختار SmartCoolsy؟</h2>
        <p class="text-gray-400">نحن نقدم حلولاً متكاملة وخدمة مميزة لعملائنا</p>
      </div>
      <div class="features-grid">
        <div class="feature">
          <font-awesome-icon :icon="['fas', 'shipping-fast']" />
          <h3>توصيل سريع</h3>
          <p>خدمة توصيل سريعة لجميع أنحاء المملكة</p>
        </div>
        <div class="feature">
          <font-awesome-icon :icon="['fas', 'fa-tools']" />
          <h3>خدمة وصيانة</h3>
          <p>فريق صيانة متخصص لخدمة ما بعد البيع</p>
        </div>
        <div class="feature">
          <font-awesome-icon :icon="['fas', 'fa-medal']" />
          <h3>جودة عالية</h3>
          <p>منتجاتنا تتميز بأعلى معايير الجودة والكفاءة</p>
        </div>
        <div class="feature">
          <font-awesome-icon :icon="['fas', 'fa-headset']" />
          <h3>دعم فني</h3>
          <p>دعم فني متوفر على مدار الساعة لخدمتكم</p>
        </div>
      </div>
    </div>
  </section>

  <!-- نموذج الاتصال -->
  <section class="contact" id="contact">
    <div class="container mx-auto">
      <div class="section-title">
        <h2>اتصل بنا</h2>
        <p>يسعدنا تواصلكم معنا لأي استفسار أو طلب</p>
      </div>
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">*الاسم الكامل</label>
            <input type="text" v-model="contactName" required />
          </div>
          <div class="form-group">
            <label for="phone">الايميل</label>
            <input type="email" v-model="email" />
          </div>
          <div class="form-group">
            <label for="message">*الرسالة</label>
            <textarea v-model="message" required></textarea>
          </div>
          <button type="submit" class="submit-btn">إرسال الرسالة</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue"
import ProductCard from "../components/ProductCard.vue"
const products = computed(() => [
  {
    title: "البرادات",
    subtitle: "برادات مسطحة، عمودية، وواجهة زجاجية بمواصفات عالية الجودة",
    icon: "fa-solid fa-door-closed",
    bgClass: "bg-cooler-hero",
    img: "/cooler-hero.webp",
  },
  {
    title: "عدة المطبخ",
    subtitle: "أدوات وأجهزة المطبخ الاحترافية للمطاعم والفنادق",
    icon: "fa-solid fa-utensils",
    bgClass: "bg-kitchen-tools-hero",
    img: "/kitchen-tools-hero.webp",
  },
  {
    title: "ماكينات السلاش والثلج",
    subtitle: "ماكينات السلاش والثلج الاحترافية للمطاعم والفنادق",
    icon: "fa-solid fa-ice-cream",
    bgClass: "bg-slash-machine-hero",
    img: "/slash-machine-hero.webp",
  },
  {
    title: "الشوايات والمقلايات",
    subtitle: "الشوايات والمقلايات الاحترافية للمطاعم والفنادق",
    icon: "fa-solid fa-fire-burner",
    bgClass: "bg-fryer-hero",
    img: "/fryer-hero.webp",
  },
])

const contactName = ref("")
const email = ref("")
const message = ref("")

function submitForm() {
  if (!message.value || !contactName.value) {
    return
  }
  const fullMessage = encodeURIComponent(
    `مرحباً، أنا ${contactName.value}%0Aالبريد الإلكتروني: ${email.value}%0Aالرسالة: ${message.value}`
  )

  const url = `https://wa.me/963944590519?text=${fullMessage}`
  window.open(url, "_blank")
  alert(`شكراً ${contactName.value}، تم استلام رسالتك!`)
  // reset the form
  contactName.value = ""
  email.value = ""
  message.value = ""
}
</script>
<style scoped>
/* قسم الهيرو */
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

.btn {
  display: inline-block;
  background-color: #e74c3c;
  color: white;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #c0392b;
}

/* قسم المنتجات */
.products {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 2rem;
  margin-bottom: 15px;
}

.section-title p {
  max-width: 700px;
  margin: 0 auto;
}

.product-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

/* قسم المميزات */
.features {
  background-color: #1a3a5f;
  color: white;
  padding: 80px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}
.feature {
  text-align: center;
  padding: 30px 20px;
}
.feature svg {
  font-size: 40px;
  margin-bottom: 20px;
  color: #e74c3c;
}
.feature h3 {
  margin-bottom: 15px;
}

/* نموذج الاتصال */
.contact {
  padding: 80px 0;
  background-color: #f5f5f5;
}

.contact-form {
  background-color: white;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  background-color: #1a3a5f;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #e74c3c;
}
</style>
