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
    props: ["arrQuantity"],
    data() {
        return {
            pageQuantity: 1,
        }
    },
    methods: {
        setPages (event) {
            event.target.parentNode.childNodes.forEach(element => {
                element.classList.remove('activeBtn')
            });
            this.pageQuantity = +event.target.innerText
            this.$emit('pagNum',this.pageQuantity)
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
        }

    },
    computed: {
        setPagesComputed () {
            return  Math.ceil((this.arrQuantity / 5))
        },

    },
    mounted: function () {
        
    }
}
</script>

<style lang="sass">
    .activeBtn
        color: gray
        font-weight: 800
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
                    color: gray


</style>