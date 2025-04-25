import { useMenuStore } from '@/stores/menu'
import { ref, onMounted } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'

export interface NavigationItem {
  id: string | number
  langs: {
    es: string
    en: string
  }
  icon?: string
  disabled?: boolean
  notifications?: number
  children?: Record<string, NavigationItem>
  to?: string
  active?: boolean
}

export interface NavigationData {
  [key: string]: NavigationItem
}
const navigation = ref({})

export const useNavManager = () => {
  const menuStore = useMenuStore()
  const loading = ref(false)

  const fetchMenuOptions = async () => {
    if (!Object.keys(menuStore.menuOptions).length) {
      await menuStore.fetchMenu()
      navigation.value = menuStore.menuOptions
    }
  }

  const setCurrentItem = (route: RouteLocationNormalized) => {
    const nestedItems = (nestedData: NavigationData) => {
      for (const key of Object.keys(nestedData)) {
        const item = nestedData[key]
        item.active =
          route.name === item.id || route.matched.some((record) => record.name === item.id)
        if (item.children) {
          nestedItems(item.children)
        }
      }
    }

    const newNavigation = { ...navigation.value }
    !!newNavigation && nestedItems(newNavigation)
    navigation.value = { ...newNavigation }
  }

  onMounted(() => {
    fetchMenuOptions()
  })

  return {
    navigation,
    setCurrentItem,
    fetchMenuOptions,
    loading,
  }
}
