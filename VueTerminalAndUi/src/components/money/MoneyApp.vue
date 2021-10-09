<template>
    <div class="mainitem__style money__mainblock">
        <h1>{{ $route.params.message }}</h1>
        <HistoryList/>
        <Pagination/>
        <FastCat/>
        <button class="money__addformbtn" @click="openForm">NEW COST <span class="money__addformbtn_bigsymbol">{{ getShowSymbol }}</span></button>
        <AddForm  v-if="getShowForm"/>
    </div>
</template>

<script>
import HistoryList from "./HistoryList.vue"
import AddForm from "./AddForm.vue"
import Pagination from "./Pagination.vue"
import FastCat from "./FastCat.vue"

import { mapActions, mapGetters, mapMutations} from "vuex"

export default {
    name: "MoneyApp",
    components: {
        HistoryList,
        AddForm,
        Pagination,
        FastCat
    },
    data() {
        return {

        }
    },
    methods: {
        ...mapActions(['fetchCosts','fetchCategory','fetchFastCategory']),
        ...mapMutations(['openForm']),

        // - При обновлении или загрузке - переключается на последнюю страницу
        // - Доделать!


    },
    computed: {
        ...mapGetters(['getCostList','getShowForm','getShowSymbol'])
    },

    created() {
        this.fetchCategory()
        this.fetchFastCategory()
        this.fetchCosts()   
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