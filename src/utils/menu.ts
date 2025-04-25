import type { NavigationData } from '@/composables/useNavManager'

export const transformMenu = (items: any[]): { menu: NavigationData; buttons: any[] } => {
  const buttons: any[] = []

  const transform = (item: any): any | null => {
    if (item.level === 'B') {
      buttons.push(item)
      return null
    }

    const navItem: any = {
      id: item.idMenu,
      langs: {
        es: item.title,
        en: item.title.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
      },
      icon: item.icon || 'menu',
      to: item.linkMethod ? `/${item.linkMethod}` : undefined,
      children: null, // por defecto sin hijos
      active: false,
    }

    if (Array.isArray(item.childs)) {
      const validChildren = item.childs.map(transform).filter(Boolean)
      if (validChildren.length > 0) {
        navItem.children = Object.fromEntries(
          validChildren.map((child: any) => [child.langs.es, child]),
        )
      }
    }

    return navItem
  }

  const menu = Object.fromEntries(
    items
      .map(transform)
      .filter(Boolean)
      .map((item) => [item.langs.es, item]),
  )

  return { menu, buttons }
}
