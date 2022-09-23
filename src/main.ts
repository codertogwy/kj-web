import {createApp} from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import icons from '/@/config/icons';
import router from '/@/config/router'

import 'element-plus/dist/index.css'
import '/@/style.css'

const app = createApp(App)
app.use(ElementPlus).use(icons).use(router)
app.mount('#app')
