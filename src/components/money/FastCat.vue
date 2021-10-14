<template>
    <div class="fastcategory">
        <h3 class="fastcategory__text">Fast choise :</h3>
        <button class="fastcategory__btn" v-for="item in getFastCatList" :key="item.id" @click="fastClick(item.name, item.value)">{{ item.name }}</button>
  
 
    </div>
</template>

<script>
import { mapGetters, mapMutations} from "vuex"

export default {
    name: 'FastCat',
    computed: {
        ...mapGetters(['getFastCatList','getShowForm']),   
    },
    methods: {
        ...mapMutations(['openForm', 'reOpenForm']),
        fastClick(rout,val) {
            if(this.getShowForm){
                this.reOpenForm()
                this.$router.push({name: rout, params: {value: val}}).catch(() => {})
            } else {
                this.openForm()
                this.$router.push({name: rout, params: {value: val}}).catch(() => {})
            }

        }
    },
}
</script>

<style lang="sass">
.fastcategory
    width: 100%
    height: 40px
    display: flex
    justify-content: space-around
    align-items: center
    &__text
        font-size: 14px
        color: #41b883
        font-weight: 800
    &__btn
        background: #ffffff
        border: 0
        color: #41b883
        font-size: 14px
        &:hover
            border-bottom: 1px solid #41b883
            font-weight: 800
        &:active
            color: red    

</style>


