import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useNavManager } from '@/composables/useNavManager'
import { setActivePinia, createPinia } from 'pinia'
import { useMenuStore } from '@/stores/menu'

vi.mock('@/stores/menu', () => ({
  useMenuStore: vi.fn(),
}))

describe('useNavManager', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('llama a fetchMenu y actualiza navigation si menuOptions está vacío', async () => {
    const fakeMenu = {
      Dashboard: {
        id: 1,
        langs: { es: 'Escritorio', en: 'Dashboard' },
        to: '/home',
        active: false,
      },
    }

    const storeMock = {
      menuOptions: {}, // vacío al principio
      fetchMenu: vi.fn().mockImplementation(() => {
        storeMock.menuOptions = fakeMenu
        return Promise.resolve()
      }),
    }

    ;(useMenuStore as any).mockReturnValue(storeMock)

    const { fetchMenuOptions, navigation } = useNavManager()
    await fetchMenuOptions()

    expect(storeMock.fetchMenu).toHaveBeenCalled()
    expect(navigation.value).toEqual(fakeMenu)
  })
})
