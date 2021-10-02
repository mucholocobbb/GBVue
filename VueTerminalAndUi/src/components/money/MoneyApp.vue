<template>
    <div class="mainitem__style money__mainblock">
        <h1>{{ msg }}</h1>
        <HistoryList @delItemToForm="delItemFromArr" :histList="getCostList" :changedPage="changedPage" :lastPage="lastPage"/>
        <Pagination @pagNum="changeList" @lastNum="changeLastList" :arrQuantity="getCostList.length" ref="changeLastPage"/>
        <button class="money__addformbtn" @click="openForm">NEW COST <span class="money__addformbtn_bigsymbol">{{ showSymbol }}</span></button>
        <AddForm @addItemToForm="updateArray" v-show="showForm"/>
        {{operationList}}
    </div>
</template>

<script>
import HistoryList from "./HistoryList.vue"
import AddForm from "./AddForm.vue"
import Pagination from "./Pagination.vue"
import { mapActions, mapGetters} from "vuex"

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
    methods: {

        changeList(num){
            this.changedPage = num;
        },
        /**
         * changeLastList принимает количество страниц  из комплнента Pagination.vue  , записывает номер в переменную this.lastPage, которая передает это значение в компонент HistoryList.vue
         */
        changeLastList(num) {
            this.lastPage = num
        },
        /** Функция управляет открытием формы добавления платежа */
        openForm() {
            this.showForm = !this.showForm
            if(this.showSymbol === '+') {
                this.showSymbol = '-'
            }else {
                this.showSymbol = '+'
            }
        },
        /** updateId перебирает ключевой массив при добавлении или удалении элемента и обновляет id каждого элемента , последовательно. */
        updateId(){
            for(let i = 0; i < this.operationList.length; i++) {

                this.operationList[i].id = `${i+1}`
            }
        },

        /**-Принимает элемент из компонента addForm.vue
         * -Добавляет элемент в конец ключевого массива
         * -Обновляет все id  методом updateID()
         * this.lastPage - перелистывает на последнюю страницу при добавлении элемента,для отслеживания этого
         * this.$refs.changeLastPage.setPagefromParent() вызывает этот метод для стилизации символа последней страницы.
         * Методы обернуты в таймер ,для того ,чтобы родительская функция успела полностью отработать.
         */
        updateArray(el) {
            setTimeout(() => {
                this.changedPage = this.lastPage
                this.$refs.changeLastPage.setPagefromParent()
            }, 100);

            let newItem = {
                id: '',
                date: el.date,
                cat: el.cat,
                value: el.price
            }
            
            this.operationList.push(newItem)
            this.updateId()
        },
        /**
         * Получает данные нажатой кнопки удаления,перебирая ключевой массив ищет совпадения по айди и удаляет совпавший элемент.
         */
        delItemFromArr(el) {
            this.operationList.forEach(element => {
                if(el == element.id) {
                    this.operationList.splice(element.id - 1, 1)
                }
                this.updateId()
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