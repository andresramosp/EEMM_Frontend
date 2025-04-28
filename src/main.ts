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
import { useAuthAzure } from './composables/useAuthAzure'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ODSPlus, {
  project: 'ods',
})

// Cuando tenemos el router listo, ya podemos comprobar si estamos en /loginContraBD o no
// Solo si no es el caso, lanzamos el login de Azure
router.isReady().then(async () => {
  const { autoLogin } = useAuthAzure()

  const currentPath = router.currentRoute.value.path

  const isLoginContraBD = currentPath.startsWith('/loginContraBD')

  // if (!isLoginContraBD) {
  //   await autoLogin()
  // }

  app.mount('#app')
})
