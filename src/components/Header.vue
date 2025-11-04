<template>
  <!-- الشريط العلوي -->
  <div class="w-full p-4 flex justify-center text-white bg-[#1a3a5f]">
    <div class="container top-bar-container">
      <div class="grid text-sm sm:text-base grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
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
      <div class="social-links flex gap-4">
        <a
          href="https://www.facebook.com/smartcoolsy26"
          class="facebook-btn inline-flex h-10 w-10 rounded-full items-center justify-center transition-all duration-300 ease-in-out hover:ring-2 ring-yellow-500"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </a>
        <a
          href="https://wa.me/963944590519"
          class="whatsapp-btn inline-flex h-10 w-10 rounded-full items-center justify-center hover:ring-2 ring-yellow-500 transition-all duration-300"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </div>
    </div>
  </div>

  <!-- شريط التنقل -->
  <header class="flex items-center justify-center px-4 bg-white sticky top-0 z-50 shadow-md">
    <div class="container">
      <nav class="flex justify-between items-center py-4">
        <div class="flex items-center gap-4 logo-container">
          <router-link to="/">
            <div class="flex items-center flex-col justify-center text-primary">
              <div class="logo-main text-[28px] font-bold">SmartCoolSy</div>
              <div class="logo-sub">Cooling Systems</div>
            </div>
          </router-link>
        </div>
        <div class="menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
          <span></span> <span></span> <span></span>
        </div>
        <ul class="nav-links gap-0 md:gap-6 text-primary" :class="{ active: isMenuOpen }">
          <li><router-link to="/" @click="closeMenu">الرئيسية</router-link></li>
          <li><router-link to="/products" @click="closeMenu">المنتجات</router-link></li>
          <li><router-link to="/gallery" @click="closeMenu">معرض الصور</router-link></li>
          <li><router-link to="/about" @click="closeMenu">من نحن</router-link></li>
          <li><router-link to="/contact" @click="closeMenu"> اتصل بنا</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue"

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.logo-sub {
  font-size: 14px;
  color: #e74c3c;
  letter-spacing: 0.5px;
}

.top-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-info {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.nav-links {
  display: flex;
  list-style: none;
  font-weight: 500;
}
/* ...existing code... */
.facebook-btn {
  background-color: #3b5998 !important;
}
.logo-main {
  font-size: 28px;
  font-weight: bold;
  color: #1a3a5f;
  line-height: 1;
}

.menu-toggle {
  display: none; /* Hidden by default on desktop */
  cursor: pointer;
}

@media (max-width: 1024px) {
  .contact-info {
    gap: 0.5rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .contact-info {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    font-size: 14px;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    z-index: 99;
    text-align: right;
  }
  .nav-links.active {
    display: flex;
  }
  .nav-links li {
    margin: 4px 0;
  }
  .nav-links a {
    padding: 10px 20px;
    display: block;
    font-weight: 500;
  }
  .menu-toggle {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .menu-toggle span {
    width: 25px;
    height: 3px;
    background-color: #1a3a5f;
    transition: all 0.3s ease-in-out;
    border-radius: 2px;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .logo-main {
    font-size: 22px;
  }
  .logo-sub {
    font-size: 12px;
  }
}
.social-links a {
  line-height: 40px;
}
.whatsapp-btn {
  background-color: #25d366 !important;
}
.facebook-btn {
  background-color: #3b5998 !important;
}
</style>
