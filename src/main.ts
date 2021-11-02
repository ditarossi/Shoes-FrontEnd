import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import {BootstrapVue} from 'bootstrap-vue';
//import Vuelidate from 'vuelidate'
//import VueSplide from '@splidejs/vue-splide';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).mount('#app')
