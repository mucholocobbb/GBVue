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
export default {
    name: "HistoryList",
    props:["histList","changedPage","lastPage"],
    data() {
        return {
            arr: [],
        }
    },
    methods: {
        /**
         * Метод принимает data-id нажатой кнопки и отправляет его в родительский компонент,где из ключевого массива будет удален соответствующий элемент
         */
        delItem(event) {
            let delItem =  event.target.getAttribute("data-id")
            this.$emit('delItemToForm',delItem)
        },

    },
    computed: {
        /**
         *Computed свойство- перебирает полученный массив и постоянно актуализирует его,согласно условиям
         */
        setArrRange () {
            let changeP = this.changedPage
            // let arr = this.arr
            let min = 0
            let max = 5
            // Здесь разобраться ,как связать динамически - количество страниц и  количество условных итерраций.
            return this.histList.filter(function (number) {
                    if(changeP === 1) {
                        return  number.id > min && number.id <= max 
                    }
                     else if ( changeP === 2) {
                        return  number.id > 5 && number.id <= 10 
                    }else if ( changeP === 3) {
                        return  number.id > 10 && number.id <= 15 
                    }else if ( changeP === 4) {
                        return  number.id > 15 && number.id <= 20 
                    }
                    else if ( changeP === 5) {
                        return  number.id > 20 && number.id <= 25 
                    }
                    else if ( changeP === 6) {
                        return  number.id > 25 && number.id <= 30 
                    }
                    else if ( changeP === 7) {
                        return  number.id > 35 && number.id <= 40 
                    }
                    else if ( changeP === 8) {
                        return  number.id > 45 && number.id <= 50 
                    }
            })
            
            

        }

    },
    mounted: function () {    
        for (let i = 1; i <= this.lastPage; i++) {
            this.arr.push(i)
        }
        
    },
}
</script>

<style lang="sass">
.money
    &__listblock
    background: lightgrey
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