import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
/* Plugin Vue-toastification */
app.use(Toast, {
transition: "Vue-Toastification__fade",
  maxToasts: 5,
  newestOnTop: true
});

app.mount('#app')
