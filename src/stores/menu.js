// stores/menuStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { transformMenu } from '../utils/menu'
import ProfilesService from '@/services/ProfilesService'
import UserService from '@/services/UserService'

export const useMenuStore = defineStore('menu', () => {
  // Versión original del menú traído desde backend
  const menuItems = ref([])
  // Metadatos sobre botones del menú
  const menuButtons = ref([])
  // Versión transformada del menú para el Navigation de ODS+
  const menuOptions = ref([])

  const fetchMenu = async () => {
    try {
      const response = await UserService.getMenuByProfiles('ES', [1])
      const items = response.data || []

      setMenuItems(items)
    } catch (error) {
      console.error('Error al cargar el menú:', error)
    }
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
