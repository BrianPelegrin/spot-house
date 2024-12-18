import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vuefire from './plugins/vuefire';

console.log(import.meta.env)
const pinia = createPinia();

const app = createApp(App);
app.use(vuefire.VueFire,vuefire.props)
app.use(router);
app.use(pinia);
app.use(vuetify);
app.mount('#app')
