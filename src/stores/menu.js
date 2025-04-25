// stores/menuStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import navigationConfig from '../assets/navigation_backend.json'
import { transformMenu } from '../utils/menu'

export const useMenuStore = defineStore('menu', () => {
  // Versión original del menú traído desde backend
  const menuItems = ref([])
  // Metadatos sobre botones del menú
  const menuButtons = ref([])
  // Versión transformada del menú para el Navigation de ODS+
  const menuOptions = ref([])

  const fetchMenu = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setMenuItems(navigationConfig.data)
        resolve()
      }, 2000)
    })
  }

  const setMenuItems = (items) => {
    menuItems.value = items
    const { menu, buttons } = transformMenu(items)
    menuOptions.value = menu
    menuButtons.value = buttons
  }

  return {
    menuItems,
    menuOptions,
    setMenuItems,
    fetchMenu,
  }
})
