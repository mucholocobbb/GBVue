<template>
    <div class="money__pagination">
        <a class="money__pagination_link" @click.prevent="prevPage" v-if="setPagesComputed" href="#"><i class="fas fa-angle-left"></i></a>
        <a class="money__pagination_link" :class="{activeBtn: pageQuantity == n }" href="#" v-for="n in setPagesComputed"   :data-id="n" :key="n" @click.prevent="setPages($event)"> {{ n }} </a>
        <a class="money__pagination_link" @click.prevent="nextPage" v-if="setPagesComputed" href="#"><i class="fas fa-angle-right"></i></a>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    /**
     * arrQuantity - длинна Ключевого массива, по ней отрисовываем количество страниц.
     */
    props: ["arrQuantity"],
    /**
     * pageQuantity - переменная,на которой завязаны и стили и значение актуальной страницы. 
     */
    data() {
        return {
            pageQuantity: 1,
            
        }
    },
    methods: {
        /**
         * - Очищает все стили  всех элементов в нажатом блоке.
         * - Актуализирует переменную  pageQuantity и отправляет ее родителю
         */
        setPages (event) {
            event.target.parentNode.childNodes.forEach(element => {
                element.classList.remove('activeBtn')
            });
            this.pageQuantity = +event.target.innerText
            this.$emit('pagNum',this.pageQuantity)
        },
        /**
         * - Метод переключения страницы стрелкой вправо
         * - Актуализирует переменную  pageQuantity и отправляет ее родителю
         */
        nextPage() {
            if(this.pageQuantity < this.setPagesComputed) {
                this.pageQuantity++
                this.$emit('pagNum',this.pageQuantity)
            }
        },
        /**
         * - Метод переключения страницы стрелкой влево
         * - Актуализирует переменную  pageQuantity и отправляет ее родителю
         */
        prevPage() {
            if(this.pageQuantity > 1) {
                this.pageQuantity--
                this.$emit('pagNum',this.pageQuantity)
            }
        },
        /**
         * Метод вызывается из родительского компонента, при добавлении нового элемента - переключает стиль на знак последней страницы
         */
        setPagefromParent() {
            this.pageQuantity = this.setPagesComputed
        }

    },
    /**
     * Постоянно считает количество страниц, делит длинну массива на желаемое количество отображаемых элементов и округляет в большую сторону
     */
    computed: {
        setPagesComputed () {
            return  Math.ceil((this.arrQuantity / 5))
        },

    },
    /**
     *  При загрузке страницы,включает последнюю
     */
    mounted: function () {
        this.pageQuantity = this.setPagesComputed
        this.$emit('pagNum',this.pageQuantity)

    },
    /**
     * Отправляет родителю информацию о количестве страниц при каждои обновлении состояния
     */
    updated: function () {
        this.$emit('lastNum',this.setPagesComputed)
    },


}
</script>

<style lang="sass">
    .money
        &__pagination
            margin: 16px
            &_link 
                outline: none
                color: gray
                text-decoration: none
                padding: 8px
                transition: all 0.2s
                &:hover
                    transform: scale(1.2)
                    color: red
                    font-weight: 800
                &:active
                    color: #8097ed
    .activeBtn
        color: #8097ed
        font-weight: 800

</style>