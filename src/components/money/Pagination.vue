<template>
    <div class="money__pagination">
        <a class="money__pagination_link" @click.prevent="prevPage" v-if="setPagesComputed" href="#"><i class="fas fa-angle-left"></i></a>
        <a class="money__pagination_link" :class="{activeBtn: pageQuantity == n }" href="#" v-for="n in setPagesComputed"   :data-id="n" :key="n" @click.prevent="setPages($event)"> {{ n }} </a>
        <a class="money__pagination_link" @click.prevent="nextPage" v-if="setPagesComputed" href="#"><i class="fas fa-angle-right"></i></a>
    </div>
</template>

<script>
import { mapGetters, mapMutations} from "vuex"

export default {
    name: "Pagination",
    data() {
        return {
            pageQuantity: 1,
            
        }
    },
    methods: {
        ...mapMutations(['actualPagePlus','actualPageMinus','actualPageChange','setLastPage']),
        setPages (event) {
            this.pageQuantity = +event.target.innerText
            this.$store.commit('actualPageChange',this.pageQuantity)
        },

        nextPage() {
            if(this.actualPage < this.setPagesComputed) {
                this.$store.commit('actualPagePlus')
            }
            this.pageQuantity = this.actualPage
        },

        prevPage() {
            if(this.actualPage > 1) {
                this.$store.commit('actualPageMinus')
            }
            this.pageQuantity = this.actualPage

        },

    },

    computed: {
        ...mapGetters(['actualPage','getCostList','lastPage']),
        setPagesComputed () {
            return  Math.ceil((this.getCostList.length / 5))
        },

    },
        //Здесь все работает при сохранении проета, но не работает при обновлении страницы и при первом запуске. Почему то computed свойство  getCostList при перезагрузке возвращает 0. 


    updated() {
        this.$store.commit('setLastPage', Math.ceil((this.getCostList.length / 5)))
        this.pageQuantity = this.actualPage
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