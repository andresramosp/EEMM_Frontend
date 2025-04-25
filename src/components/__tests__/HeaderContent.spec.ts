import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderContent from '../header/HeaderContent.vue'

describe('HeaderContent', () => {
  it('renders ods-main-header with correct props', () => {
    const wrapper = mount(HeaderContent, {
      global: {
        stubs: ['ods-main-header'],
      },
    })

    const header = wrapper.find('ods-main-header-stub')
    expect(header.exists()).toBe(true)
    expect(header.attributes('header-logo-text')).toBe('my product name')
    expect(header.attributes('logo-url')).toBe('/logo-acciona.png')
    expect(header.attributes('show-user-menu')).toBe('true')
  })
})
