// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ODSPlus from '@ods/ods-plus'
import '@ods/ods-plus/theme-onesait/src/reset.scss'
import '@ods/ods-plus/theme-onesait/src/index.scss'
import '@ods/ods-plus/theme-onesait/src/helpers/index.scss'
import './assets/scss/overrides.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ODSPlus, {
  project: 'ods',
})

app.mount('#app')
