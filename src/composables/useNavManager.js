import { useMenuStore } from '@/stores/menu'

export const useNavManager = () => {
  const menuStore = useMenuStore()

  const setCurrentItem = (route) => {
    const nestedItems = (nestedData) => {
      for (const key of Object.keys(nestedData)) {
        const item = nestedData[key]
        debugger
        item.active =
          route.name === item.id || route.matched.some((record) => record.name === item.id)
        if (item.children) {
          nestedItems(item.children)
        }
      }
    }

    const newNavigation = { ...menuStore.menuOptions }
    if (newNavigation) nestedItems(newNavigation)
    menuStore.menuOptions = { ...newNavigation }
  }

  return {
    navigation: menuStore.menuOptions,
    setCurrentItem,
  }
}
