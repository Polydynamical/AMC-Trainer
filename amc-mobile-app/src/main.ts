import { createApp } from 'vue'
import App from './App.vue'

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

const app = createApp(App)
  .use(IonicVue)
  
  app.mount('#app');