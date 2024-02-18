import { createApp } from 'vue'
import VueScrollTo from 'vue-scrollto';
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './main.css'

const app = createApp(App)
app.use(router)

const noOffset = 0;
app.use(VueScrollTo, {
    container: 'body',
    duration: 500,
    easing: 'ease',
    offset: noOffset,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
});

app.mount('#app')

