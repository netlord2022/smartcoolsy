<template>
  <div class="max-w-md mx-auto p-6 bg-white shadow rounded-xl m-6">
    <h2 class="text-2xl font-bold mb-4 text-center">اتصل بنا</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <input
        v-model="form.name"
        type="text"
        placeholder="الاسم"
        required
        class="w-full p-2 border rounded"
      />
      <input
        v-model="form.email"
        type="email"
        placeholder="البريد الإلكتروني"
        required
        class="w-full p-2 border rounded"
      />
      <textarea
        v-model="form.message"
        placeholder="رسالتك"
        required
        rows="4"
        class="w-full p-2 border rounded"
      ></textarea>
      <button type="submit" class="bg-primary text-white w-full py-2 rounded hover:bg-secondary">
        إرسال
      </button>
    </form>
    <p v-if="status" class="text-center mt-4">{{ status }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue"

const form = ref({ name: "", email: "", message: "" })
const status = ref("")

const submitForm = async () => {
  try {
    const response = await fetch("/sendmail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.value),
    })
    const result = await response.json()
    status.value = result.success ? "✅ تم إرسال رسالتك!" : "❌ حدث خطأ."
    if (result.success) form.value = { name: "", email: "", message: "" }
  } catch (error) {
    status.value = "❌ فشل الاتصال بالخادم."
  }
}
</script>
