import { createPinia } from 'pinia';
import { createApp } from 'vue';
import './index.scss';
import './index.css';
import App from './App.vue';

createApp(App).use(createPinia()).mount('#app');
