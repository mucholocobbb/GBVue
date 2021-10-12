<template>
    <div class="money__listblock">
        <div class="money__listheader">
            <p class="money__categories">#</p>
            <p class="money__categories">Date</p>
            <p class="money__categories">Category</p>
            <p class="money__categories">Value</p>
        </div>

        <div class="money__listheader money__listheader_item" v-for="item in setArrRange" :key="item.id"> 
            <div class="money__listheader_closebtnblock" ><a class="money__listheader_closebtn" @click.prevent="delItem($event)" :data-id="item.id" href="#">&#10006;</a>
            </div>
            <p class="money__categories">{{ item.id}}</p>
            <p class="money__categories">{{ item.date }}</p>
            <p class="money__categories">{{ item.cat }}</p>
            <p class="money__categories">{{ item.value }} &#8381;</p>
        </div>
    
    </div>
</template>

<script>
import { mapGetters, mapMutations} from "vuex"

export default {
    name: "HistoryList",
    methods: {
        ...mapMutations(['delCostItem','updateCostId']),
        delItem(event) {
            let delItem =  event.target.getAttribute("data-id")
            console.log(delItem);
            this.$store.commit('delCostItem',delItem)
            this.$store.commit('updateCostId')
            //При удалении всех элементов со страницы ,не переключается на предидущую
        },

    },
    computed: {
        ...mapGetters(['getCostList','actualPage']),   
        setArrRange () {
            let changeP = this.actualPage

            // Здесь разобраться ,как связать динамически - количество страниц и  количество условных итерраций. Разбивать массив на страницы,как в методичке- кажется плохой затеей. Как минимум такой же плохо масштабируемой ,как и моя


            return this.getCostList.filter(function (number) {
                    if(changeP === 1) {
                        return  number.id > 0 && number.id <= 5 
                    } else if ( changeP === 2) {
                        return  number.id > 5 && number.id <= 10 
                    }else if ( changeP === 3) {
                        return  number.id > 10 && number.id <= 15 
                    }else if ( changeP === 4) {
                        return  number.id > 15 && number.id <= 20 
                    }else if ( changeP === 5) {
                        return  number.id > 20 && number.id <= 25 
                    }else if ( changeP === 6) {
                        return  number.id > 25 && number.id <= 30 
                    }else if ( changeP === 7) {
                        return  number.id > 35 && number.id <= 40 
                    }else if ( changeP === 8) {
                        return  number.id > 45 && number.id <= 50 
                    }else if ( changeP === 9) {
                        return  number.id > 55 && number.id <= 60 
                    }else if ( changeP === 10) {
                        return  number.id > 65 && number.id <= 70 
                    }
            })
            }
    },
}
</script>

<style lang="sass">
.money
    &__listheader
        color: black
        font-size: 14px
        font-weight: 800
        border-bottom: 1px solid black
        width: 450px
        margin: 0 auto
        display: grid
        grid-template-columns: 1fr 3fr 3fr 2fr
        margin-bottom: 16px
        &_item
            font-weight: 600
            border-bottom: 1px solid gray
            margin-bottom: 0
            color: gray
            position: relative
        &_closebtnblock
            position: absolute
            box-sizing: border-box
            height: 43px
            width: 60px
            text-align: end
            padding-right: 8px
            line-height: 45px
            right: 0
            &:hover
                background: linear-gradient(90deg, rgba(255,255,255,0) 10%, rgba(231,77,125,1) 74%)

        &_closebtn
            text-decoration: none
            color: #fff
            font-size: 18px
            transition: all 0.2s
            &:active
                color: #f664649c


    &__categories
        margin-block-start: 12px
        margin-block-end: 12px
        text-align: center


</style>