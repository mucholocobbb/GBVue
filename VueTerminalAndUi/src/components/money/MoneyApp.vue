<template>
    <div class="mainitem__style money__mainblock">
        <h1>{{ msg }}</h1>
        <HistoryList @delItemToForm="delItemFromArr" :histList="showArray" />
        <Pagination  :arrQuantity="operationList.length" :elLimit="count" @choose-page="choosePageHandler"/>
        <button class="money__addformbtn" @click="openForm">NEW COST <span class="money__addformbtn_bigsymbol">{{ showSymbol }}</span></button>
        <AddForm :id-count="operationList.length" @addItemToForm="updateArray" v-show="showForm"/>
    </div>
</template>

<script>
import HistoryList from "./HistoryList.vue"
import AddForm from "./AddForm.vue"
import Pagination from "./Pagination.vue"

export default {
    name: "MoneyApp",
    props: ["msg"],
    components: {
        HistoryList,
        AddForm,
        Pagination
    },
    data() {
        return {
            showForm: false,
            showSymbol: '+',
            changedPage: 1,
            lastPage: 1,
            count: 5,
            showArray: [],
            operationList: [
                {
                    id: '1',
                    date: '01.07.2021',
                    cat: 'Food',
                    value: '415'
                },
                {
                    id: '2',
                    date: '05.08.2021',
                    cat: 'Transport',
                    value: '50'
                },
                {
                    id: '3',
                    date: '24.09.2021',
                    cat: 'Health',
                    value: '189'
                },
                {
                    id: '4',
                    date: '25.09.2021',
                    cat: 'Food',
                    value: '234'
                },
                {
                    id: '5',
                    date: '25.09.2021',
                    cat: 'Transport',
                    value: '48'
                },
                {
                    id: '6',
                    date: '26.09.2021',
                    cat: 'Health',
                    value: '1600'
                },
                {
                    id: '7',
                    date: '27.09.2021',
                    cat: 'Transport',
                    value: '140'
                }
            ]
        }
    },
    created () {
        this.showArray = this.operationList.slice(0, 5)
    },
    methods: {
        choosePageHandler (page) {
            const startNum = page * this.count
            const lastNum = startNum + this.count
            this.showArray = this.operationList.slice(startNum, lastNum)
        },
        openForm() {
            this.showForm = !this.showForm
            if(this.showSymbol === '+') {
                this.showSymbol = '-'
            }else {
                this.showSymbol = '+'
            }
        },
        updateId(){
            for(let i = 0; i < this.showArray.length; i++) {

                this.showArray[i].id = `${i+1}`
            }
        },

        updateArray(el) {
            this.operationList = [...this.operationList, el]            
            // this.updateId()
        },

        delItemFromArr(el) {
            this.showArray.forEach(element => {
                if(el == element.id) {
                    this.showArray.splice(element.id - 1, 1)
                }
                // this.updateId()
            });
        }
    },




}
</script>

<style lang="sass">
    .money
        &__mainblock
            display: flex
            flex-direction: column
            align-items: center
        &__addformbtn
            font-size: 16px
            font-weight: 500    
            width: 150px
            height: 40px
            background: #61e3a9
            outline: none
            border: 0
            color: #fff
            margin: 16px
            align-self: flex-start
            transition: all 0.4s
            display: flex
            justify-content: center
            align-items: center
            &:hover
                background: #41b883a6
            &_bigsymbol
                display: block
                transform: scale(1.4)
                font-weight: 500   
                width: 30px 
</style>