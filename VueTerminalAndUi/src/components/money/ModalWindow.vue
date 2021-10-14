<template>
    <div class="modalblock">
        <div class="modalblock__justromb"></div>
        <div class="modalblock__loading" v-if="showLoading"></div>
        <div class="modalblock__editblock" v-if="showEditBlock">
            <div class="modalblock__editblock_items">
                <input type="text" class="modalblock__editblock_date_day modalblock__editblock_input" v-model.number="day" minlength="1" maxlength="2">
                <input type="text" class="modalblock__editblock_date_month modalblock__editblock_input" v-model.number="month" minlength="1" maxlength="2">
                <input type="text" class="modalblock__editblock_date_year modalblock__editblock_input" v-model.number="year" minlength="4" maxlength="4">
            </div>
            <div class="modalblock__editblock_items">
                <select class="modalblock__editblock_category modalblock__editblock_input" name="cat"  v-model="selected">
                <option v-for="option in getCatList" :key="option.id" >{{ option.text }}</option>
            </select>
            </div>
            <div class="modalblock__editblock_items">
                <input class="modalblock__editblock_price modalblock__editblock_input" type="text" v-model.number="price">
            </div>
            <button class="modalblock__editblock_btn" @click="editItemInfo">{{ btntext }}</button>
        </div>
        <button class="modalblock__closebtn" @click="$modal.hide()">&#10006;</button>
        <button class="modalblock__itemblock" @click="openEditBlock">
            <p class="modalblock__itemblock_closebtn">Edit</p>
            <p class="modalblock__itemblock_closebtn"><i class="far fa-edit"></i></p>
        </button>
        <button class="modalblock__itemblock" @click.prevent="delItem(elem.id)">
            <p class="modalblock__itemblock_closebtn">Delete</p>
            <p class="modalblock__itemblock_closebtn"><i class="far fa-trash-alt"></i></p>
        </button>
    </div>
</template>

<script>
import { mapMutations,mapGetters} from "vuex"


export default {
    name: 'ModalWindow',
    props: ['ModalWindow','modalSettings','elem'],
    data() {
        return {
            showEditBlock: false,
            showLoading: false,
            day: '',
            month: '',
            year: '',
            selected: '',
            price: '',
            btntext: '',

        }
    },
    methods: {
        ...mapMutations(['delCostItem','updateCostId','editCostItem']),
        delItem(id) {
            let delItem =  id
            this.$store.commit('delCostItem',delItem)
            this.$store.commit('updateCostId')
            this.$modal.hide()
            //При удалении всех элементов со страницы ,не переключается на предидущую
        },
        openEditBlock(){
            this.btntext = 'O'
            this.showEditBlock = !this.showEditBlock
            this.day = this.elem.date.slice(0,2)
            this.month = this.elem.date.slice(3,5)
            this.year = this.elem.date.slice(6,10)
            this.selected = this.elem.cat
            this.price = this.elem.value
        },
        editItemInfo(){
            let randomTime = () => {
                let time = ((Math.random() * 2).toFixed(2)) * 1000
                if (time < 300) {
                    return 500
                } else {
                    return time
                }
            }
            setTimeout(() => {
                this.btntext = 'OK!'
                setTimeout(() => {
                    this.showLoading = true
                }, 300);
            }, 300);
            let dateCanc = `${this.day}.${this.month}.${this.year}`
            let item = {
                id: this.elem.id,
                date: dateCanc,
                cat: this.selected,
                value: this.price
            }
            this.$store.commit('editCostItem', item)
            setTimeout(() => {
                this.showEditBlock = false
                this.showLoading = false
            }, randomTime());
        }
    },
    computed: {
        ...mapGetters(['getCatList']),

    },
}
</script>

<style lang="sass">
.modalblock
    width: 130px
    border: 1px solid #000
    box-shadow: 0 0 15px -4px #000000
    background: #ffffff
    z-index: 1
    box-sizing: border-box
    border: 1px solid #41b883
    border-radius: 5px
    padding: 0
    display: flex
    flex-direction: column
    right: -160px
    top: -34px
    &__loading
        background-image: url("/loading.gif")
        background-color: #ffffffa1
        background-repeat: no-repeat
        background-position: center
        background-size: contain
        width: 448px
        height: 43px
        z-index: 2
        position: absolute
        left: -481px
        top: 33px
        display: flex
        justify-content: center
        align-items: center
    &__editblock
        z-index: 1
        position: absolute
        width: 448px
        height: 43px
        background: white
        left: -481px
        top: 33px
        display: flex
        justify-content: center
        align-items: center
        padding-left: 12px
        &_btn
            background: #80808066
            color: #fff
            border: 0
            border-radius: 5px
            width: 20px
            height: 20px
            outline: none
            margin-left: 13px
            font-size: 10px
            padding: 0
            &:hover
                background: #61e3a9
            &:active
                transform: scale(1.05)    
        &_items
            margin: 28px
        &_input
            text-align: center
            padding: 2px
            outline: none
            border: none
            height: 20px
            border-bottom: 1px solid black
            overflow: hidden
            box-sizing: border-box
            margin: 2px
            color: gray
        &_date
            &_day
                width: 20px
            &_month
                width: 20px
            &_year
                width: 40px  
        &_category
            width: 60px
        &_price
            width: 40px                  
    &__itemblock
        box-sizing: border-box
        display: flex
        justify-content: space-between
        align-items: center
        border: 0
        background: #80808014
        border-radius: 3px
        height: 30px
        margin: 4px 10px  
        &:last-child
            margin-bottom: 10px      
        &_closebtn
            color: gray
            background: none
            margin-block-start: 0
            margin-block-end: 0
        &:hover
            transform: scale(1.05)
            background: #80808040   

    &__justromb
        z-index: 2
        position: absolute
        background: white
        border-left: 1px solid #41b883
        border-top: 1px solid #41b883
        width: 10px
        height: 10px
        top: 47px
        left: -6px
        transform: rotate(-45deg)
        
    &__closebtn  
        width: 20px
        height: 20px
        align-self: end
        padding: 0
        margin: 10px
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

</style>