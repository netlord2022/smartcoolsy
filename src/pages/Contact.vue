<template>
  <!-- قسم الهيرو -->
  <section class="hero bg-contact-hero bg-cover">
    <div class="container">
      <h1>اتصل بنا</h1>
      <p>نحن هنا لخدمتكم، تواصلوا معنا في أي وقت</p>
    </div>
  </section>
  <!-- قسم الاتصال -->
  <section class="contact">
    <div class="container mx-auto">
      <div class="section-title">
        <h2>ابق على تواصل</h2>
        <p>نحن هنا لمساعدتك، لا تتردد في التواصل معنا لأي استفسار أو طلب</p>
      </div>
      <div class="contact-container">
        <!-- معلومات الاتصال -->
        <div class="contact-info-section">
          <h3>معلومات الاتصال</h3>
          <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
            <div class="contact-details">
              <h4>العنوان</h4>
              <p>ساحة باب مصلى - دمشق - سورية</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-phone"></i></div>
            <div class="contact-details">
              <h4>أرقام الهواتف</h4>
              <p><a href="tel:0944590519" class="contact-link">0944590519</a></p>
              <p><a href="tel:0982502556" class="contact-link">0982502556</a></p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-envelope"></i></div>
            <div class="contact-details">
              <h4>البريد الإلكتروني</h4>
              <p>
                <a href="mailto:support@smartcoolsy.com" class="contact-link"
                  >support@smartcoolsy.com</a
                >
              </p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-clock"></i></div>
            <div class="contact-details">
              <h4>ساعات العمل</h4>
              <p>من السبت إلى الخميس: 8:00 صباحًا - 8:00 مساءً</p>
              <p>الجمعة: إجازة</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><i class="fab fa-whatsapp"></i></div>
            <div class="contact-details">
              <h4>الواتساب</h4>
              <p>
                <a href="https://wa.me/963944590519" class="contact-link" target="_blank"
                  >0944590519</a
                >
              </p>
              <p>
                <a href="https://wa.me/963982502556" class="contact-link" target="_blank"
                  >0982502556</a
                >
              </p>
            </div>
          </div>
        </div>
        <!-- نموذج الاتصال -->
        <div class="contact-form">
          <h3>أرسل لنا رسالة</h3>
          <form id="contactForm" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">الاسم الكامل</label>
              <input
                type="text"
                id="name"
                name="name"
                v-model="contactName"
                required
                placeholder="أدخل اسمك الكامل"
              />
            </div>
            <div class="form-group">
              <label for="email">البريد الإلكتروني</label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="email"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
            <div class="form-group">
              <label for="phone">رقم الجوال</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                v-model="phone"
                placeholder="أدخل رقم جوالك"
              />
            </div>
            <div class="form-group">
              <label for="subject">الموضوع</label>
              <select id="subject" name="subject" required v-model="subject">
                <option value="">اختر الموضوع</option>
                <option value="استفسار">استفسار عن منتج</option>
                <option value="طلب">طلب منتج</option>
                <option value="صيانة">طلب صيانة</option>
                <option value="شكاية">شكاية أو ملاحظة</option>
                <option value="أخرى">أخرى</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">الرسالة</label>
              <textarea
                id="message"
                name="message"
                required
                v-model="message"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>
            <button type="submit" class="submit-btn">إرسال الرسالة</button>
          </form>
        </div>
      </div>
      <!-- خريطة جوجل -->
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.454868529553!2d36.300195!3d33.499306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z4oCyMzPCsDI5JzU3LjUiTiAzNsKwMTgnMDAuNyJF!5e0!3m2!1sar!2s!4v1694875234567!5m2!1sar!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue"

const contactName = ref("")
const email = ref("")
const message = ref("")
const phone = ref("")
const subject = ref("")

function submitForm() {
  if (!message.value || !contactName.value) {
    return
  }
  const fullMessage = encodeURIComponent(
    `مرحباً، أنا ${contactName.value}%0Aرقم جوالي: ${phone.value}%0Aالبريد الإلكتروني: ${email.value}%0Aالموضوع: ${subject.value}%0Aالرسالة: ${message.value}`
  )

  const url = `https://wa.me/963944590519?text=${fullMessage}`
  window.open(url, "_blank")
  alert(`شكراً ${contactName.value}، تم استلام رسالتك!`)
  // reset the form
  contactName.value = ""
  email.value = ""
  message.value = ""
  phone.value = ""
  subject.value = ""
}
</script>
<style scoped>
/* قسم الهيرو */
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
  text-shadow: 0px 2px 5px black;
}
.hero p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 30px;
  text-shadow: 0px 2px 5px black;
} /* قسم الاتصال */
.contact {
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
.contact-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
} /* معلومات الاتصال */
.contact-info-section {
  padding: 30px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
.contact-info-section h3 {
  color: #1a3a5f;
  margin-bottom: 25px;
  font-size: 1.5rem;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 10px;
}
.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
.contact-item:hover {
  transform: translateX(5px);
  background-color: #e9ecef;
}
.contact-icon {
  font-size: 24px;
  color: #1a3a5f;
  margin-left: 15px;
  min-width: 40px;
}
.contact-details {
  flex: 1;
}
.contact-details h4 {
  color: #1a3a5f;
  margin-bottom: 5px;
}
.contact-details p {
  margin: 5px 0;
  color: #666;
}
.contact-link {
  color: #e74c3c;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}
.contact-link:hover {
  color: #c0392b;
  text-decoration: underline;
} /* نموذج الاتصال */
.contact-form {
  padding: 30px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}
.contact-form h3 {
  color: #1a3a5f;
  margin-bottom: 25px;
  font-size: 1.5rem;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 10px;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #1a3a5f;
  font-weight: 500;
}
.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
  box-sizing: border-box;
}
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #1a3a5f;
  box-shadow: 0 0 0 2px rgba(26, 58, 95, 0.2);
}
.form-group textarea {
  min-height: 120px;
  resize: vertical;
}
.submit-btn {
  background-color: #1a3a5f;
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
  width: 100%;
  margin-top: 10px;
}
.submit-btn:hover {
  background-color: #e74c3c;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
} /* خريطة جوجل */
.map-container {
  margin-top: 40px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 400px;
}
.map-container iframe {
  width: 100%;
  height: 100%;
  border: none;
} /* التجاوب مع الشاشات الصغيرة */
@media (max-width: 768px) {
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
  .contact-container {
    grid-template-columns: 1fr;
  }
  .contact-info-section,
  .contact-form {
    padding: 20px;
  }
}
</style>
