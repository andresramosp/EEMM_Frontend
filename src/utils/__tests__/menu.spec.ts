import { describe, it, expect } from 'vitest'
import { transformMenu } from '../menu'

describe('transformMenu', () => {
  it('convierte correctamente un item simple en navItem', () => {
    const input = [
      {
        idMenu: 1,
        title: 'Test_Title',
        level: 'A',
        icon: 'home',
        linkMethod: 'dashboard',
        childs: [],
      },
    ]

    const { menu, buttons } = transformMenu(input)

    expect(Object.keys(menu)).toContain('Test_Title')
    expect(menu['Test_Title'].id).toBe(1)
    expect(menu['Test_Title'].langs.en).toBe('Test Title')
    expect(buttons).toHaveLength(0)
  })

  it('extrae correctamente botones de nivel B', () => {
    const input = [
      {
        idMenu: 2,
        title: 'Button_Item',
        level: 'B',
        icon: 'star',
      },
    ]

    const { menu, buttons } = transformMenu(input)

    expect(Object.keys(menu)).toHaveLength(0)
    expect(buttons).toHaveLength(1)
    expect(buttons[0].idMenu).toBe(2)
  })

  it('transforma correctamente hijos anidados', () => {
    const input = [
      {
        idMenu: 1,
        title: 'Parent',
        level: 'A',
        childs: [
          {
            idMenu: 2,
            title: 'Child',
            level: 'A',
            childs: [],
          },
        ],
      },
    ]

    const { menu } = transformMenu(input)

    expect(menu['Parent'].children).toHaveProperty('Child')
    expect(menu['Parent'].children['Child'].id).toBe(2)
  })
})
