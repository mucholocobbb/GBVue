<template>
    <div class="money__pagination">
        <a class="money__pagination_link" @click.prevent="prevPage" v-if="setPagesComputed" href="#"><i class="fas fa-angle-left"></i></a>
        <a class="money__pagination_link" :class="{activeBtn: pageQuantity == item }" href="#" v-for="(item, index) in setPagesComputed"  :key="item" @click.prevent="setPages($event, index)"> {{ item }} </a>
        <a class="money__pagination_link" @click.prevent="nextPage" v-if="setPagesComputed" href="#"><i class="fas fa-angle-right"></i></a>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ["arrQuantity","elLimit"],
    data() {
        return {
            pageQuantity: 1,            
        }
    },
    methods: {
 
        setPages (event,idx) {
            event.target.parentNode.childNodes.forEach(element => {
                element.classList.remove('activeBtn')
            });
            this.pageQuantity = +event.target.innerText
            this.$emit('choose-page', idx)
        },
        nextPage() {
            if(this.pageQuantity < this.setPagesComputed) {
                this.pageQuantity++
                this.$emit('pagNum',this.pageQuantity)
            }
        },
        prevPage() {
            if(this.pageQuantity > 1) {
                this.pageQuantity--
                this.$emit('pagNum',this.pageQuantity)
            }
        },

    },
    computed: {
        setPagesComputed () {
            return Math.ceil(this.arrQuantity / this.elLimit)
        }
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