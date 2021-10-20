<template>
    <div class="money__addform" >
        <SetCategory v-if="hiddenAddBlock"/>
        <form class="money__addform_form" action="#" @submit.prevent>
            <div class="money__addform_item">
                <label class="money__addform_labels" for="date">When?</label>
                <input class="money__addform_inputs" type="date" name="date" id="date" v-model="dateInp" >
            </div>
            <div class="money__addform_item">
                <label class="money__addform_labels" for="cat"> What?</label>
                <select class="money__addform_inputs money__addform_select" name="cat" id="cat" v-model="selected"  required>
                <option v-for="option in getCatList" :key="option.id"  :value="option.text">{{ option.text }}</option>
                </select>
                <button class="money__addform_setbtn" @click.prevent="hiddenAddBlock = !hiddenAddBlock"><i class="fas fa-cog"></i></button>
            </div>
            <div class="money__addform_item">
                <label class="money__addform_labels" for="price"> How much?</label>
                <input class="money__addform_inputs" type="number" id="price" v-model="price"  placeholder="Rub." required>
            </div>

            <button class="money__addform_btn" @submit.prevent  @click="addItem">ADD +</button>
        </form>
    </div>
</template>

<script>
import SetCategory from "./SetCategory.vue"

import {mapMutations,mapGetters} from "vuex"

export default {
    name: "AddForm",
    components: {
        SetCategory
    },
    data() {
        return {
            hiddenAddBlock: false,
            dateInp: '',
            selected: '',
            price: '',
        }
    },
    methods: {
        ...mapMutations(['setAddCostItem','updateCostId','actualPageChange']),

        addItem() {
            let newString =  this.replaceDate()
            if ( this.selected !== '' && this.price !== '') {
                this.sendToParent(newString)
            }
        },
        sendToParent(newDate){
            let newItem = {
                id: '',
                date: newDate || this.getCurrentDate,
                cat: this.selected,
                value: this.price
            }
            this.$store.commit('setAddCostItem',newItem)
            this.$store.commit('updateCostId')
            this.$store.commit('actualPageChange',this.lastPage)
           
        },
        replaceDate() {
            let re = /-/gi
            let newStr = this.dateInp.replace(re, '.')
            let re2 = /(\d+).(\d+).(\d+)/gi
            let newStr2 = newStr.replace(re2, '$3.$2.$1')
            return newStr2
        },

    },
    computed: {
        ...mapGetters(['getCatList','lastPage']),
        getCurrentDate () {
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        },    
        routName() {
            return this.$route.name
        },
        routVal() {
            return this.$route.params.value
        }


    },

    created() {
        setTimeout(() => {
            this.selected = this.routName
            this.price = this.$route.params.value
        }, 1);
    },

    
}
</script>

<style lang="sass">
.money
    &__setform
        position: absolute
        background: #ffffff
        box-sizing: border-box
        border: 1px solid #41b883
        border-radius: 5px
        padding: 16px
        display: flex
        flex-direction: column
        right: -188px
        top: -152px
        &_headtext
            align-self: center
            margin-block-start: 4px
            margin-block-end: 4px
        &_itemblock
            display: flex
            justify-content: space-between    
            height: 24px
            padding: 4px
            transition: all 0.2s
            &:hover
                background: #edcfcf70
                border-radius: 5px
        &_itemname
            margin-block-start: 0
            margin-block-end: 0
        &_itembtn
            background: white
            border: 1px solid #f4004dad
            color: #f4004dad
            border-radius: 5px
            transition: all 0.2s
            &:hover
                background: #f651518a
                color: white
            &:active
                box-shadow: 0 0 5px 0 #c43b3b
                background: #d39f9f
        &_input
            width: 100px
            background: white
            border: 1px solid #41b883
            border-radius: 5px
            margin: 0 4px
            padding: 0 4px
            outline: none
            color: gray
            &:focus
                background: #61e3a947
        &_itemaddbtn
            &:hover
                background: #41b8837a
                color: white
            &:active
                box-shadow: 0 0 5px 0 #41b883
                background: #41b883
    &__addform
        position: relative
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
        &_setbtn
            box-sizing: border-box
            height: 28px
            width: 28px
            background: white
            border: 1px solid #41b883
            border-radius: 5px
            color: #41b883
            font-size: 15px
            text-align: center
            line-height: 15px
        &_select
            width: 222px

 
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