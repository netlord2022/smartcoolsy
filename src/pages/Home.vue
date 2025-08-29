<template>
  <!-- قسم الهيرو -->
  <section class="hero">
    <div class="container">
      <h1>الحلول المتكاملة لتجهيزات الفنادق والمطاعم</h1>
      <router-link to="/products" class="btn">استعرض المنتجات</router-link>
    </div>
  </section>

  <!-- قسم المنتجات -->
  <section class="products">
    <div class="container">
      <div class="section-title">
        <h2>فئات المنتجات</h2>
        <p>اكتشف مجموعتنا الواسعة من تجهيزات المطاعم والفنادق</p>
      </div>
      <div class="product-categories">
        <div class="category">
          <div class="category-img"><i class="fas fa-thermometer-full"></i></div>
          <div class="category-content">
            <h3>البرادات</h3>
            <p>برادات مسطحة، عمودية، وواجهة زجاجية بمواصفات عالية الجودة</p>
          </div>
        </div>
        <div class="category">
          <div class="category-img"><i class="fas fa-utensils"></i></div>
          <div class="category-content">
            <h3>عدة المطبخ</h3>
            <p>أدوات وأجهزة المطبخ الاحترافية للمطاعم والفنادق</p>
          </div>
        </div>
        <div class="category">
          <div class="category-img"><i class="fas fa-glass-whiskey"></i></div>
          <div class="category-content">
            <h3>ماكينات السلاش والثلج</h3>
            <p>أفضل ماكينات صنع الثلج والسلاش للمشروبات الباردة</p>
          </div>
        </div>
        <div class="category">
          <div class="category-img"><i class="fas fa-fire"></i></div>
          <div class="category-content">
            <h3>الشوايات والقلايات</h3>
            <p>شوايات الشاورما والبروستد وقلايات البطاطس بأنواعها</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- قسم المميزات -->
  <section class="features">
    <div class="container">
      <div class="section-title">
        <h2>لماذا تختار SmartCoolsy؟</h2>
        <p>نحن نقدم حلولاً متكاملة وخدمة مميزة لعملائنا</p>
      </div>
      <div class="features-grid">
        <div class="feature">
          <i class="fas fa-shipping-fast"></i>
          <h3>توصيل سريع</h3>
          <p>خدمة توصيل سريعة لجميع أنحاء المملكة</p>
        </div>
        <div class="feature">
          <i class="fas fa-tools"></i>
          <h3>خدمة وصيانة</h3>
          <p>فريق صيانة متخصص لخدمة ما بعد البيع</p>
        </div>
        <div class="feature">
          <i class="fas fa-medal"></i>
          <h3>جودة عالية</h3>
          <p>منتجاتنا تتميز بأعلى معايير الجودة والكفاءة</p>
        </div>
        <div class="feature">
          <i class="fas fa-headset"></i>
          <h3>دعم فني</h3>
          <p>دعم فني متوفر على مدار الساعة لخدمتكم</p>
        </div>
      </div>
    </div>
  </section>

  <!-- نموذج الاتصال -->
  <section class="contact" id="contact">
    <div class="container">
      <div class="section-title">
        <h2>اتصل بنا</h2>
        <p>يسعدنا تواصلكم معنا لأي استفسار أو طلب</p>
      </div>
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">الاسم الكامل</label>
            <input type="text" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="phone">رقم الجوال</label>
            <input type="tel" v-model="form.phone" required />
          </div>
          <div class="form-group">
            <label for="message">الرسالة</label>
            <textarea v-model="form.message" required></textarea>
          </div>
          <button type="submit" class="submit-btn">إرسال الرسالة</button>
        </form>
      </div>
    </div>
  </section>

  <!-- الفوتر -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>SmartCoolsy</h3>
          <p>متخصصون في تجهيزات الفنادق والمطاعم بأفضل المعدات والاجهزة الحديثة التي تلبي أعلى معايير الجودة.</p>
          <p><i class="fas fa-map-marker-alt"></i> سورية دمشق دوار باب مصلى</p>
        </div>
        <div class="footer-column">
          <h3>روابط سريعة</h3>
          <ul>
            <li><a href="#">الرئيسية</a></li>
            <li><a href="/products.html">المنتجات</a></li>
            <li><a href="#">من نحن</a></li>
            <li><a href="#contact">اتصل بنا</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>منتجاتنا</h3>
          <ul>
            <li><a href="/products.html#refrigerators">البرادات</a></li>
            <li><a href="/products.html#slush">ماكينات السلاش والثلج</a></li>
            <li><a href="/products.html#grills">شوايات وقلايات</a></li>
            <li><a href="/products.html#kitchen">عدة المطبخ</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>اتصل بنا</h3>
          <p><i class="fas fa-phone"></i> 0944590519</p>
          <p><i class="fas fa-phone"></i> 0982502556</p>
          <p><i class="fas fa-phone"></i> 0112265268</p>
          <p><i class="fas fa-phone"></i> 0112264420</p>
          <div class="social-links">
            <a href="https://www.facebook.com/smartcoolsy26" class="facebook-btn" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://wa.me/963944590519" class="whatsapp-btn" target="_blank">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>© 2025 SmartCoolsy. جميع الحقوق محفوظة</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  phone: "",
  message: "",
});

function submitForm() {
  alert(`شكراً ${form.name}، تم استلام رسالتك!`);
  form.name = "";
  form.phone = "";
  form.message = "";
}
</script>
    <style>        
        /* الشريط العلوي */
        .top-bar {
            background-color: #1a3a5f;
            color: white;
        }
        
        .top-bar-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .contact-info {
            display: flex;
            gap: 20px;
        }
        
        /* شريط التنقل */
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
        }
        
        .nav-links a:hover {
            color: #e74c3c;
        }
        
        /* قسم الهيرو */
        .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80');
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
            color: #1a3a5f;
            margin-bottom: 15px;
        }
        
        .section-title p {
            color: #666;
            max-width: 700px;
            margin: 0 auto;
        }
        
        .product-categories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }
        
        .category {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
        }
        
        .category:hover {
            transform: translateY(-10px);
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
        
        .category-content {
            padding: 20px;
        }
        
        .category-content h3 {
            margin-bottom: 10px;
            color: #1a3a5f;
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
        
        .feature i {
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
            background-color: #25D366 !important;
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
