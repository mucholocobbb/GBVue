<template>
        <div class="money__setform" >
            <h3 class="money__setform_headtext">Setting Category</h3>
            <div class="money__setform_itemblock" v-for="item in getCatList" :key="item.id" >
                <p class="money__setform_itemname">{{ item.text }}</p>
                <button  class="money__setform_itembtn" :id="item.id" @click="delCategory($event)">&#10006;</button>
            </div>
            <div class="money__setform_itemblock">
                <input class="money__setform_input" type="text" placeholder="New category..." minlength="2" maxlength="12" v-model="newCat">
                <button class="money__setform_itembtn money__setform_itemaddbtn" @click="addCategory">&#10010;</button>
            </div>

        </div>
        
</template>

<script>
import { mapGetters, mapMutations} from "vuex"



export default {
    name: "SetCategory",
    data() {
        return {
            newCat:'',
        }
    },
    methods: {
    ...mapMutations(['delCatItem']),
    delCategory(event) {
            this.$store.commit('delCatItem',event.target.id)
        },
    addCategory(){
            if(this.newCat !== '') {
                let newId = 0
                this.getCatList.forEach(element => {
                    if(+element.id > newId) {
                        newId = +element.id
                    } 
                })
                const newItem = {   
                    text: this.newCat,
                    id: String(newId + 1)
                }
                this.$store.commit('addCatItem',newItem)
            }

        }

    },
    computed: {
        ...mapGetters(['getCatList'])    
    },

}

</script>

<style lang="sass">

</style>