<template>
  <!-- الفوتر -->
  <footer>
    <div class="container mx-auto px-4 sm:px-0">
      <div class="footer-content">
        <div class="footer-column">
          <h3>SmartCoolsy</h3>
          <p>
            متخصصون في تجهيزات الفنادق والمطاعم بأفضل المعدات والاجهزة الحديثة التي تلبي أعلى معايير
            الجودة.
          </p>
          <p><i class="fas fa-map-marker-alt"></i> سورية دمشق دوار باب مصلى</p>
        </div>
        <div class="footer-column links">
          <h3>روابط سريعة</h3>
          <ul>
            <li><router-link to="/">الرئيسية</router-link></li>
            <li><router-link to="/products">المنتجات</router-link></li>
            <li><router-link to="/about">من نحن</router-link></li>
            <li><router-link to="/contact"> اتصل بنا</router-link></li>
          </ul>
        </div>
        <div class="footer-column links">
          <h3>منتجاتنا</h3>
          <ul>
            <li><router-link to="/products#refrigerators"> البرادات</router-link></li>
            <li><router-link to="/products#slush"> ماكينات السلاش والثلج</router-link></li>
            <li><router-link to="/products#grills"> شوايات وقلايات</router-link></li>
            <li><router-link to="/products#kitchen"> عدة المطبخ</router-link></li>
          </ul>
        </div>
        <div class="footer-column links">
          <h3>اتصل بنا</h3>
          <p><font-awesome-icon :icon="['fas', 'phone']" /> 0944590519</p>
          <p><font-awesome-icon :icon="['fas', 'phone']" /> 0982502556</p>
          <div class="social-links mt-2">
            <a href="https://www.facebook.com/smartcoolsy26" class="facebook-btn" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a href="https://wa.me/963944590519" class="whatsapp-btn" target="_blank">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>© {{ currentYear }} SmartCoolsy. جميع الحقوق محفوظة</p>
      </div>
    </div>
  </footer>
</template>
<script setup>
const currentYear = new Date().getFullYear()
</script>
<style scoped>
/* الفوتر */
footer {
  background-color: #222;
  color: white;
  padding: 50px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-column h3 {
  margin-bottom: 20px;
  font-size: 1.2rem;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column.links p {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;
}

.footer-column.links p:hover {
  color: #e74c3c;
}
.footer-column.links a:hover {
  color: #e74c3c;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  transition: background-color 0.3s;
}

.social-links a:hover {
  background-color: #e74c3c;
}

.whatsapp-btn {
  background-color: #25d366 !important;
}

.facebook-btn {
  background-color: #3b5998 !important;
}

.copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444;
}

/* التجاوب مع الشاشات الصغيرة */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .logo-container {
    flex-direction: column;
    gap: 10px;
  }

  .logo-main {
    font-size: 22px;
  }

  .logo-sub {
    font-size: 12px;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .contact-info {
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
  }

  .contact-form {
    padding: 20px;
  }
}
</style>
