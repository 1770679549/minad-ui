import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import MdButton from '@/components/md-button/md-button.vue'

describe('MdButton Component', () => {
  it('should render the button correctly', () => {
    const wrapper = mount(MdButton)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.classes()).toContain('md-button')
  })

  it('should render button text correctly', () => {
    const text = 'Test Button'
    const wrapper = mount(MdButton, {
      slots: {
        default: text
      }
    })
    expect(wrapper.text()).toContain(text)
  })

  it('should apply type class correctly', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info']

    types.forEach(type => {
      const wrapper = mount(MdButton, {
        props: {
          type: type as any
        }
      })
      expect(wrapper.classes()).toContain(type)
    })
  })

  it('should apply size class correctly', () => {
    const sizes = ['large', 'medium', 'small']

    sizes.forEach(size => {
      const wrapper = mount(MdButton, {
        props: {
          size: size as any
        }
      })
      expect(wrapper.classes()).toContain(size)
    })
  })

  it('should apply disabled class and disable click', () => {
    const wrapper = mount(MdButton, {
      props: {
        disabled: true
      }
    })

    expect(wrapper.classes()).toContain('disabled')
    expect(wrapper.attributes('disabled')).toBe('')
  })

  it('should apply loading class when loading is true', () => {
    const wrapper = mount(MdButton, {
      props: {
        loading: true
      }
    })

    expect(wrapper.classes()).toContain('loading')
    expect(wrapper.find('.md-button-loading')).toBeTruthy()
  })

  it('should emit click event when clicked', async () => {
    const wrapper = mount(MdButton)

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('should not emit click event when disabled', async () => {
    const wrapper = mount(MdButton, {
      props: {
        disabled: true
      }
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('should not emit click event when loading', async () => {
    const wrapper = mount(MdButton, {
      props: {
        loading: true
      }
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
