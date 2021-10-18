import {
  shallowMount
} from '@vue/test-utils'
import SoundBtn from '@/components/SoundBtn.vue'

describe('SoundBtn.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(SoundBtn, {
      propsData: {
        msg
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})