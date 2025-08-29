<template>
  <!-- الشريط العلوي -->
  <div class="top-bar w-full p-4">
    <div class=" top-bar-content">
      <div class="contact-info">
        <span><font-awesome-icon :icon="['fas', 'phone']" /> 0944590519 | 0982502556</span>
        <span><font-awesome-icon :icon="['fas', 'phone']" /> 0112265268 | 0112264420</span>
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
  <header>
    <div class="">
      <nav>
        <div class="logo-container">
          <div class="logo-img">
            <div class="logo-main">SmartCoolSy</div>
            <div class="logo-sub">Cooling Systems</div>
          </div>
        </div>
        <ul class="nav-links">
          <li><router-link to="/">الرئيسية</router-link></li>
          <li><router-link to="/products">المنتجات</router-link></li>
          <li><router-link to="/about">من نحن</router-link></li>
          <li> <router-link to="/contact"> اتصل بنا</router-link></li>
        </ul>
      </nav>
    </div>
  </header>

</template>