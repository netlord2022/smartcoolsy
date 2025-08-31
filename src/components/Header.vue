<template>
  <!-- الشريط العلوي -->
  <div class="w-full p-4 flex justify-center text-white bg-[#1a3a5f]">
    <div class="container flex justify-between items-center">
      <div class="flex gap-4">
        <a href="tel:0944590519" class="hover:text-red-500"
          ><font-awesome-icon :icon="['fas', 'phone']" class="text-green-500" /> 0944590519</a
        >
        <a href="tel:0982502556" class="hover:text-red-500"
          ><font-awesome-icon :icon="['fas', 'phone']" class="text-green-500" /> 0982502556</a
        >
        <a href="tel:0112265268" class="hover:text-red-500"
          ><font-awesome-icon :icon="['fas', 'phone']" class="text-green-500" /> 0112265268</a
        >
        <a href="tel:0112264420" class="hover:text-red-500"
          ><font-awesome-icon :icon="['fas', 'phone']" class="text-green-500" /> 0112264420</a
        >
      </div>
      <div class="social-links">
        <a href="https://www.facebook.com/smartcoolsy26" class="facebook-btn" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </a>
        <a href="https://wa.me/963944590519" class="whatsapp-btn" target="_blank">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </div>
    </div>
  </div>

  <!-- شريط التنقل -->
  <header class="flex items-center justify-center px-4 bg-white sticky top-0 z-50 shadow-md">
    <div class="container">
      <nav class="flex justify-between items-center py-4">
        <div class="flex items-center gap-4">
          <router-link to="/">
            <div class="flex items-center flex-col justify-center text-primary">
              <div class="logo-main text-[28px] font-bold text-">SmartCoolSy</div>
              <div class="logo-sub">Cooling Systems</div>
            </div>
          </router-link>
        </div>
        <ul class="nav-links">
          <li><router-link to="/">الرئيسية</router-link></li>
          <li><router-link to="/products">المنتجات</router-link></li>
          <li><router-link to="/about">من نحن</router-link></li>
          <li><router-link to="/contact"> اتصل بنا</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.logo-main {
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
</style>
