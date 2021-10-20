import {
  mount
} from '@vue/test-utils'
import TestComp from '@/components/TestComponent.vue'

describe('Текстовые тесты', () => {
  test('Тест 1', () => {
    const wrapper = mount(TestComp, {
      propsData: {
        message: 'World'
      }
    })

    expect(wrapper.text()).toContain('Hello World')
  })
  test('Тест 2', () => {

    const wrapper2 = mount(TestComp, {
      propsData: {
        message: 'Pidr'
      }
    })

    expect(wrapper2.text()).toContain('Hello Pidr')
  })
})