<template>
    <div class="money__addform">
        <form class="money__addform_form" action="#" @submit.prevent>
            <div class="money__addform_item">
                <label class="money__addform_labels" for="date">When?</label>
                <input class="money__addform_inputs" type="date" name="date" id="date" required v-model="dateInp" placeholder="fdsf">
            </div>
            <div class="money__addform_item">
                <label class="money__addform_labels" for="cat"> What?</label>
                <select class="money__addform_inputs" name="cat" id="cat" v-model="selected" required>
                <option  v-for="option in options" :key="option.id"  :value="option.text">{{ option.text }}</option>
                </select>
            </div>
            <div class="money__addform_item">
                <label class="money__addform_labels" for="price"> How much?</label>
                <input class="money__addform_inputs" type="number" id="price" v-model="price" placeholder="Rub." required>
            </div>

            <button class="money__addform_btn" @submit.prevent  @click="addItem">ADD +</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddForm",
    data() {
        return {
            dateInp: '',
            selected: '',
            price: '',
            options: [
                { text: 'Food', id: '1' },
                { text: 'Clothing', id: '2' },
                { text: 'House', id: '3' },
                { text: 'Food', id: '4' },
                { text: 'Health', id: '5' },
                { text: 'Transport', id: '6' }
            ],
        }
    },
    methods: {
        /**
         * Вызываем функцию  replaceDate которая форматирует полученную дату.
         * Доп валидация,чтобы не остались пустые поля
         * Вызываем метод  ,который соберет обьект с полученными данными и отправит его в родительский компонент
         */
        addItem() {
            let newString =  this.replaceDate()
            if (this.dateInp !== '' && this.selected !== '' && this.price !== '') {
                this.sendToParent(newString)
            }
            
        },
        sendToParent(newDate){
            let newItem = {
                date: newDate,
                cat: this.selected,
                price: this.price
            }
            this.$emit('addItemToForm',newItem)
        },
        replaceDate() {
            let re = /-/gi
            let newStr = this.dateInp.replace(re, '.')
            let re2 = /(\d+).(\d+).(\d+)/gi
            let newStr2 = newStr.replace(re2, '$3.$2.$1')
            return newStr2
        }
    },
    
}
</script>

<style lang="sass">
.money
    &__addform
        margin: 16px
        display: flex
        flex-direction: column
        align-items: center
        &_form
            display: flex
            flex-direction: column
            align-items: flex-end

        &_inputs
            box-sizing: border-box
            padding: 0
            width: 250px
            height: 28px
            color: #343434
            font-size: 16px
            border: 1px solid #41b883
            border-radius: 5px
            margin: 4px
            outline: none
            padding-left: 6px
            padding-right: 6px
        &_labels
            color: #41b883
            align-self: flex-start
            padding-left: 4px
            padding-top: 14px
        &_btn
            outline: none
            border: 0
            box-sizing: border-box
            margin: 4px
            width: 250px
            height: 28px
            font-size: 16px
            color: #fff
            background: #61e3a9
            transition: all 0.4s
            &:hover
                background: #41b883a6      
            &:active
                transform: scale(0.96)          

</style>