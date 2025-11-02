<template>
  <!-- الشريط العلوي -->
  <div class="top-bar">
    <div class="container top-bar-content">
      <div class="contact-info">
        <a href="tel:0944590519" class="phone-link"><i class="fas fa-phone"></i> 0944590519</a>
        <a href="tel:0982502556" class="phone-link"><i class="fas fa-phone"></i> 0982502556</a>
        <a href="tel:0112265268" class="phone-link"><i class="fas fa-phone"></i> 0112265268</a>
        <a href="tel:0112264420" class="phone-link"><i class="fas fa-phone"></i> 0112264420</a>
      </div>
      <div class="social-links">
        <a href="https://www.facebook.com/smartcoolsy26" class="facebook-btn" target="_blank"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a href="https://wa.me/963944590519" class="whatsapp-btn" target="_blank"
          ><i class="fab fa-whatsapp"></i
        ></a>
      </div>
    </div>
  </div>
  <!-- شريط التنقل -->
  <header>
    <div class="container">
      <nav>
        <a href="index.html" class="logo-container">
          <div class="logo-img">
            <div class="logo-main">SmartCoolSy</div>
            <div class="logo-sub">Cooling Systems</div>
          </div>
        </a>
        <div class="menu-toggle" id="menuToggle"><span></span> <span></span> <span></span></div>
        <ul class="nav-links" id="navLinks">
          <li><a href="index.html">الرئيسية</a></li>
          <li><a href="products.html">المنتجات</a></li>
          <li><a href="gallery.html" class="active">معرض الصور</a></li>
          <li><a href="about us.html">من نحن</a></li>
          <li><a href="contact us.html">اتصل بنا</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <!-- قسم الهيرو -->
  <section class="hero">
    <div class="container">
      <h1>معرض صور المنتجات</h1>
      <p>استعرض صور منتجاتنا الحقيقية من جميع الزوايا</p>
    </div>
  </section>
  <!-- قسم معرض الصور -->
  <section class="gallery">
    <div class="container">
      <div class="section-title">
        <h2>معرض الصور</h2>
        <p>اكتشف منتجاتنا من خلال صور عالية الجودة تظهر التفاصيل الدقيقة</p>
      </div>
      <!-- أزرار التصنيفات -->
      <div class="category-buttons">
        <button class="category-btn active" onclick="filterGallery('all')">
          <i class="fas fa-th-large"></i> الكل
        </button>
        <button class="category-btn" onclick="filterGallery('refrigerators')">
          <i class="fas fa-thermometer-full"></i> البرادات
        </button>
        <button class="category-btn" onclick="filterGallery('kitchen')">
          <i class="fas fa-utensils"></i> عدة المطبخ
        </button>
        <button class="category-btn" onclick="filterGallery('slush')">
          <i class="fas fa-glass-whiskey"></i> ماكينات السلاش والثلج
        </button>
        <button class="category-btn" onclick="filterGallery('grills')">
          <i class="fas fa-fire"></i> الشوايات والقلايات
        </button>
      </div>
      <!-- شبكة المعرض -->
      <div class="gallery-grid" id="galleryGrid">
        <!-- برادات -->
        <div
          class="gallery-item"
          data-category="refrigerators"
          onclick="openLightbox('refrigerator1')"
        >
          <img src="https://placehold.co/600x800/1e40af/ffffff?text=براد+كبير" alt="براد كبير" />
          <div class="gallery-overlay">
            <div class="gallery-title">براد مسطح 1.5 متر</div>
            <div class="gallery-category">البرادات</div>
          </div>
        </div>
        <div
          class="gallery-item"
          data-category="refrigerators"
          onclick="openLightbox('refrigerator2')"
        >
          <img
            src="https://placehold.co/600x800/7c3aed/ffffff?text=براد+واجهة+زجاجية"
            alt="براد واجهة زجاجية"
          />
          <div class="gallery-overlay">
            <div class="gallery-title">براد واجهة زجاجية</div>
            <div class="gallery-category">البرادات</div>
          </div>
        </div>
        <div
          class="gallery-item"
          data-category="refrigerators"
          onclick="openLightbox('refrigerator3')"
        >
          <img src="https://placehold.co/600x800/dc2626/ffffff?text=براد+عمودي" alt="براد عمودي" />
          <div class="gallery-overlay">
            <div class="gallery-title">براد عمودي 2 متر</div>
            <div class="gallery-category">البرادات</div>
          </div>
        </div>
        <!-- عدة المطبخ -->
        <div class="gallery-item" data-category="kitchen" onclick="openLightbox('kitchen1')">
          <img
            src="https://placehold.co/600x800/059669/ffffff?text=ماكينة+تقطيع"
            alt="ماكينة تقطيع"
          />
          <div class="gallery-overlay">
            <div class="gallery-title">ماكينة تقطيع الخضار</div>
            <div class="gallery-category">عدة المطبخ</div>
          </div>
        </div>
        <div class="gallery-item" data-category="kitchen" onclick="openLightbox('kitchen2')">
          <img src="https://placehold.co/600x800/ea580c/ffffff?text=خلاط+صناعي" alt="خلاط صناعي" />
          <div class="gallery-overlay">
            <div class="gallery-title">خلاط صناعي 10 لتر</div>
            <div class="gallery-category">عدة المطبخ</div>
          </div>
        </div>
        <div class="gallery-item" data-category="kitchen" onclick="openLightbox('kitchen3')">
          <img src="https://placehold.co/600x800/16a34a/ffffff?text=فرن+غاز" alt="فرن غاز" />
          <div class="gallery-overlay">
            <div class="gallery-title">فرن غاز 4 شعلات</div>
            <div class="gallery-category">عدة المطبخ</div>
          </div>
        </div>
        <!-- ماكينات السلاش والثلج -->
        <div class="gallery-item" data-category="slush" onclick="openLightbox('slush1')">
          <img
            src="https://placehold.co/600x800/be185d/ffffff?text=ماكينة+سلاش"
            alt="ماكينة سلاش"
          />
          <div class="gallery-overlay">
            <div class="gallery-title">ماكينة سلاش مزدوجة</div>
            <div class="gallery-category">ماكينات السلاش والثلج</div>
          </div>
        </div>
        <div class="gallery-item" data-category="slush" onclick="openLightbox('slush2')">
          <img src="https://placehold.co/600x800/7c3aed/ffffff?text=ماكينة+ثلج" alt="ماكينة ثلج" />
          <div class="gallery-overlay">
            <div class="gallery-title">ماكينة ثلج تجاري</div>
            <div class="gallery-category">ماكينات السلاش والثلج</div>
          </div>
        </div>
        <!-- الشوايات والقلايات -->
        <div class="gallery-item" data-category="grills" onclick="openLightbox('grill1')">
          <img
            src="https://placehold.co/600x800/1e40af/ffffff?text=شواية+شاورما"
            alt="شواية شاورما"
          />
          <div class="gallery-overlay">
            <div class="gallery-title">شواية شاورما كهربائية</div>
            <div class="gallery-category">الشوايات والقلايات</div>
          </div>
        </div>
        <div class="gallery-item" data-category="grills" onclick="openLightbox('grill2')">
          <img
            src="https://placehold.co/600x800/dc2626/ffffff?text=قلاية+بطاطس"
            alt="قلاية بطاطس"
          />
          <div class="gallery-overlay">
            <div class="gallery-title">قلاية بطاطس مزدوجة</div>
            <div class="gallery-category">الشوايات والقلايات</div>
          </div>
        </div>
        <div class="gallery-item" data-category="grills" onclick="openLightbox('grill3')">
          <img
            src="https://placehold.co/600x800/059669/ffffff?text=شواية+بروستد"
            alt="شواية بروستد"
          />
          <div class="gallery-overlay">
            <div class="gallery-title">شواية بروستد</div>
            <div class="gallery-category">الشوايات والقلايات</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- معرض الصور بالتكبير -->
  <div class="lightbox" id="lightbox">
    <div class="lightbox-content">
      <img src="" alt="" class="lightbox-image" id="lightbox-img" />
      <div class="lightbox-info" id="lightbox-title"></div>
      <div class="lightbox-category" id="lightbox-category"></div>
      <div class="lightbox-close" id="lightbox-close">&times;</div>
    </div>
  </div>
  <!-- الفوتر -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>SmartCoolsy</h3>
          <p>
            متخصصون في تجهيزات الفنادق والمطاعم بأفضل المعدات والاجهزة الحديثة التي تلبي أعلى معايير
            الجودة.
          </p>
          <p><i class="fas fa-map-marker-alt"></i> سورية دمشق دوار باب مصلى</p>
        </div>
        <div class="footer-column">
          <h3>روابط سريعة</h3>
          <ul>
            <li><a href="index.html">الرئيسية</a></li>
            <li><a href="products.html">المنتجات</a></li>
            <li><a href="gallery.html" class="active">معرض الصور</a></li>
            <li><a href="about us.html">من نحن</a></li>
            <li><a href="contact us.html">اتصل بنا</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>منتجاتنا</h3>
          <ul>
            <li><a href="#">البرادات</a></li>
            <li><a href="#">ماكينات السلاش والثلج</a></li>
            <li><a href="#">شوايات وقلايات</a></li>
            <li><a href="#">عدة المطبخ</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>اتصل بنا</h3>
          <a href="tel:0944590519" class="phone-link"><i class="fas fa-phone"></i> 0944590519</a>
          <a href="tel:0982502556" class="phone-link"><i class="fas fa-phone"></i> 0982502556</a>
          <a href="tel:0112265268" class="phone-link"><i class="fas fa-phone"></i> 0112265268</a>
          <a href="tel:0112264420" class="phone-link"><i class="fas fa-phone"></i> 0112264420</a>
          <div class="social-links">
            <a href="https://www.facebook.com/smartcoolsy26" class="facebook-btn" target="_blank"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="https://wa.me/963944590519" class="whatsapp-btn" target="_blank"
              ><i class="fab fa-whatsapp"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="copyright"><p>© 2025 SmartCoolsy. جميع الحقوق محفوظة</p></div>
    </div>
  </footer>
  <!-- زر الواتساب العائم -->
  <a href="https://wa.me/963944590519" class="floating-whatsapp" target="_blank">
    <i class="fab fa-whatsapp"></i>
  </a>
</template>
<script setup></script>
<style scoped>
.floating-whatsapp {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: all 0.3s;
  animation: pulse 2s infinite;
}
.floating-whatsapp i {
  color: white;
  font-size: 28px;
}
.floating-whatsapp:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
body {
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
}
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
} /* الشريط العلوي */
.top-bar {
  background-color: #1a3a5f;
  color: white;
  padding: 10px 0;
}
.top-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contact-info {
  display: flex;
  gap: 20px;
} /* شريط التنقل */
header {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}
.logo-container {
  display: flex;
  align-items: center;
  gap: 15px;
}
.logo-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1a3a5f;
}
.logo-main {
  font-size: 28px;
  font-weight: bold;
  color: #1a3a5f;
  line-height: 1;
}
.logo-sub {
  font-size: 14px;
  color: #e74c3c;
  margin-top: 2px;
  letter-spacing: 0.5px;
} /* زر القائمة للجوال */
.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}
.menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: #1a3a5f;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}
.nav-links {
  display: flex;
  list-style: none;
}
.nav-links li {
  margin-left: 25px;
}
.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
  display: block;
  padding: 5px 0;
}
.nav-links a:hover {
  color: #e74c3c;
}
.nav-links a.active {
  color: #e74c3c;
  font-weight: bold;
} /* قسم الهيرو */
.hero {
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px;
}
.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.hero p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 30px;
} /* قسم معرض الصور */
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
} /* أزرار التصنيفات */
.category-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 50px;
}
.category-btn {
  padding: 12px 25px;
  background-color: #1a3a5f;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.category-btn:hover {
  background-color: #e74c3c;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.category-btn.active {
  background-color: #e74c3c;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
} /* شبكة المعرض */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
}
.gallery-item {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 300px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.gallery-item:hover {
  transform: translateY(-5px);
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.gallery-item:hover img {
  transform: scale(1.05);
}
.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 15px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}
.gallery-title {
  font-weight: 600;
  margin-bottom: 5px;
}
.gallery-category {
  font-size: 0.9rem;
  opacity: 0.8;
} /* معرض الصور بالتكبير */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.lightbox.active {
  display: flex;
  opacity: 1;
}
.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}
.lightbox-image {
  max-width: 100%;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  font-size: 30px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}
.lightbox-info {
  color: white;
  text-align: center;
  margin-top: 15px;
  font-size: 1.2rem;
}
.lightbox-category {
  color: #ddd;
  font-size: 1rem;
  margin-top: 5px;
} /* الفوتر */
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
.footer-column a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s;
}
.footer-column a:hover {
  color: #e74c3c;
}
.social-links {
  display: flex;
  gap: 15px;
  margin-top: 15px;
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
} /* تحسين عناصر الاتصال */
.phone-link {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}
.phone-link:hover {
  opacity: 0.8;
}
.phone-link i {
  margin-left: 5px;
  color: #25d366;
}
.footer-column .phone-link {
  color: #ddd;
  display: block;
  margin-bottom: 10px;
}
.footer-column .phone-link:hover {
  color: #e74c3c;
} /* التجاوب مع الشاشات الصغيرة */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
    z-index: 99;
  }
  .nav-links.active {
    display: flex;
  }
  .nav-links li {
    margin: 10px 0;
    text-align: center;
  }
  .nav-links a {
    padding: 10px 20px;
    display: block;
  }
  .menu-toggle {
    display: flex;
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
  .category-buttons {
    flex-direction: column;
    align-items: center;
  }
  .category-btn {
    width: 80%;
    text-align: center;
  }
}
</style>
