import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import App from '@/App.vue'
import { useMenuStore } from '@/stores/menu'

vi.mock('@/stores/menu', () => ({
  useMenuStore: vi.fn(),
}))

vi.mock('@/services/UserService', () => ({
  default: {
    getMenuByProfiles: vi.fn(),
    getProfiles: vi.fn(),
    getAllUsers: vi.fn(),
    getUserDetail: vi.fn(),
    dismissUser: vi.fn(),
    operationUsers: vi.fn(),
    updateUserProfile: vi.fn(),
    updateUser: vi.fn(),
    newUser: vi.fn(),
    insertUser: vi.fn(),
    insertUserProfile: vi.fn(),
    deletetUserProfile: vi.fn(),
    unsubscribeUser: vi.fn(),
    updatePassword: vi.fn(),
    enableDisable: vi.fn(),
    getUsersProfiles: vi.fn(),
    getAllProfiles: vi.fn(),
    getUserProfile: vi.fn(),
    getUserUpList: vi.fn(),
    postUfiUser: vi.fn(),
    deleteUfiUser: vi.fn(),
  },
}))

describe('App.vue', () => {
  it('llama fetchMenuOnce y rellena menuOptions', async () => {
    const fakeMenu = {
      Dashboard: {
        id: 1,
        langs: { es: 'Escritorio', en: 'Dashboard' },
        to: '/home',
        active: false,
      },
    }

    const storeMock = {
      menuOptions: {},
      fetchMenu: vi.fn().mockImplementation(() => {
        storeMock.menuOptions = fakeMenu
        return Promise.resolve()
      }),
    }

    ;(useMenuStore as any).mockReturnValue(storeMock)

    const wrapper = mount(App, {
      global: {
        stubs: [
          'ods-main-header',
          'ods-main',
          'ods-main-navigation',
          'ods-breadcrumb',
          'ods-scrollbar',
          'router-view', // <- añade este
        ],
      },
    })

    // Esperamos a que se complete el onMounted
    await Promise.resolve()

    expect(storeMock.fetchMenu).toHaveBeenCalled()
    expect(storeMock.menuOptions).toEqual(fakeMenu)
  })
})
