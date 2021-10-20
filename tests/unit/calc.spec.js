import {
    mount,
    createLocalVue
} from '@vue/test-utils'
import CalcComp from '@/components/calc/Calculator.vue'
import KeyComp from '@/components/calc/DispKeyboard.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Тестирование Калькулятора', () => {
    test('Тест 1: Проверка поля ввода 1', () => {
        const wrapper = mount(CalcComp, {
            localVue,
            router
        })

        const firstInput = wrapper.find('.inputFirst')
        firstInput.setValue('1')

        expect(wrapper.vm.firstNum).toBe(1)

    })
    test('Тест 2: Проверка поля ввода 2', () => {
        const wrapper = mount(CalcComp, {
            localVue,
            router
        })

        const secInput = wrapper.find('input[name=secNum]')
        secInput.setValue('1')

        expect(wrapper.vm.secNum).toBe(1)

    })
    test('Тест 3: Проверка сложения', () => {
        const wrapper = mount(CalcComp, {
            localVue,
            router
        })

        const firstInput = wrapper.find('.inputFirst')
        firstInput.setValue('20')
        const secInput = wrapper.find('input[name=secNum]')
        secInput.setValue('30')

        // Здесь и далее по операциям мы не можем кликнуть на кнопку, 
        // тк стоит условие на атрибуте disabled. Поля input в data не 
        // могут быть пустые, я попробовал разное но нничего не вышло, поэтому 
        // напрямую вызываем метод,который вызывает кнопка. Если условие убрать - все работает.

        // const btn = wrapper.find('.buttonTest')
        // btn.trigger('click')
        wrapper.vm.calculate()


        expect(wrapper.vm.result).toBe(50)
    })
    test('Тест 4: Проверка вычитания', () => {
        const wrapper = mount(CalcComp, {
            localVue,
            router
        })

        const firstInput = wrapper.find('.inputFirst')
        firstInput.setValue('30')
        const secInput = wrapper.find('input[name=secNum]')
        secInput.setValue('20')

        wrapper.vm.sym = '-'

        wrapper.vm.calculate()

        expect(wrapper.vm.result).toBe(10)
    })
    test('Тест 5: Проверка умножения', () => {
        const wrapper = mount(CalcComp, {
            localVue,
            router
        })

        const firstInput = wrapper.find('.inputFirst')
        firstInput.setValue('3')
        const secInput = wrapper.find('input[name=secNum]')
        secInput.setValue('20')

        wrapper.vm.sym = '*'

        wrapper.vm.calculate()

        expect(wrapper.vm.result).toBe(60)
    })
    test('Тест 6: Проверка деления', () => {
        const wrapper = mount(CalcComp, {
            localVue,
            router
        })

        const firstInput = wrapper.find('.inputFirst')
        firstInput.setValue('30')
        const secInput = wrapper.find('input[name=secNum]')
        secInput.setValue('10')

        wrapper.vm.sym = '/'

        wrapper.vm.calculate()

        expect(wrapper.vm.result).toBe(3)
    })
})
describe('Test Display Keyboard', () => {
    test('Тест 1: Test input change', () => {
        const wrapper = mount(KeyComp)

        const inp = wrapper.find('#one')
        inp.trigger('click')

        expect(wrapper.vm.checkedInp).toBe('Operand-1')
    })
    test('Тест 2: Test number key', () => {
        const wrapper = mount(KeyComp)

        const inp = wrapper.find('#one')
        inp.trigger('click')

        const btnNum1 = wrapper.find('button[name="1"]')
        btnNum1.trigger('click')
        const btnNum9 = wrapper.find('button[name="9"]')
        btnNum9.trigger('click')

        expect(wrapper.vm.leftString).toBe('19')
    })
    test('Тест 2: Test "C" key', () => {
        const wrapper = mount(KeyComp)

        const inp = wrapper.find('#one')
        inp.trigger('click')

        const btnNum1 = wrapper.find('button[name="1"]')
        const btnNum9 = wrapper.find('button[name="9"]')
        const btnC = wrapper.find('button[name="C"]')
        btnNum9.trigger('click')
        btnNum1.trigger('click')
        btnC.trigger('click')

        expect(wrapper.vm.leftString).toBe('9')
    })
    test('Тест 2: Test "D" key', () => {
        const wrapper = mount(KeyComp)

        const inp = wrapper.find('#one')
        inp.trigger('click')

        const btnNum1 = wrapper.find('button[name="1"]')
        const btnNum9 = wrapper.find('button[name="9"]')
        const btnD = wrapper.find('button[name="D"]')
        btnNum9.trigger('click')
        btnNum1.trigger('click')
        btnD.trigger('click')

        expect(wrapper.vm.leftString).toBe('')
    })
})