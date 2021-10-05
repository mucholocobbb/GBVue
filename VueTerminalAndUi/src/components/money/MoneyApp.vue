<template>
    <div class="mainitem__style money__mainblock">
        <h1>{{ msg }}</h1>
        <HistoryList/>
        <Pagination/>
        <FastCat/>
        <button class="money__addformbtn" @click="openForm">NEW COST <span class="money__addformbtn_bigsymbol">{{ getShowSymbol }}</span></button>
        <AddForm  v-if="getShowForm"/>
        <ModalWindow
            v-if="ModalWindoW"
            :ModalWindoW="ModalWindoW"
            :modalWindowSettings="modalWindowSettings"
        />
        <button @click="$modal.show('AuthForm',{
                header: '2',
                name: 'AuthForm'
            })">12</button>
    </div>
</template>

<script>
import HistoryList from "./HistoryList.vue"
import AddForm from "./AddForm.vue"
import Pagination from "./Pagination.vue"
import FastCat from "./FastCat.vue"
import ModalWindow from './ModalWindow.vue'

import { mapActions, mapGetters, mapMutations} from "vuex"

export default {
    name: "MoneyApp",
    props: ["msg"],
    components: {
        HistoryList,
        AddForm,
        Pagination,
        FastCat,
        ModalWindow
    },
    data() {
        return {
            ModalWindoW: '',
            modalWindowSettings: {},
            settings: {
                header: '2',
                name: 'AuthForm'
            }
        }
    },
    methods: {
        ...mapActions(['fetchCosts','fetchCategory','fetchFastCategory']),
        ...mapMutations(['openForm']),
        onShown (settings) {
            this.ModalWindoW = settings.name
            this.modalWindowSettings = settings
        },
        onHide () {
            this.ModalWindoW = ''
            this.modalWindowSettings = {}
        },


    },
    computed: {
        ...mapGetters(['getCostList','getShowForm','getShowSymbol'])
    },

    created() {
        this.fetchCategory()
        this.fetchFastCategory()
        this.fetchCosts()   
    },
      mounted () {
    this.$modal.EventBus.$on('shown', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
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