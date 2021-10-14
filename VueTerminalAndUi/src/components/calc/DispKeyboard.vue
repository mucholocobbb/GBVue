<template>
    <div class="dispbtns__mainblock">
        <div>
            <input type="radio" id="one" value="Operand-1" v-model="checkedInp">
            <label for="one">Левый</label>
            <input type="radio" id="two" value="Operand-2" v-model="checkedInp">
            <label for="two">Правый </label><br>
            <span>Выбрано: {{ checkedInp }}</span>
        </div>

        <div class="dispbtns__btnblock">
            <button class="itembtn__style"  v-for="item in dispKeyboard" :key="item.id" @click="clickBtn($event)">{{ item.sym }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "DispKeyboard",
    data() {
        return {
        checkedInp: '',
        leftString: '',
        rightString: '',    
        dispKeyboard: [
            { id: 1 , sym: '1'},
            { id: 2 , sym: '2'},
            { id: 3 , sym: '3'},
            { id: 4 , sym: '4'},
            { id: 5 , sym: '5'},
            { id: 6 , sym: '6'},
            { id: 7 , sym: '7'},
            { id: 8 , sym: '8'},
            { id: 9 , sym: '9'},
            { id: 10 , sym: 'C'},
            { id: 11 , sym: '0'},
            { id: 12 , sym: 'D'},
            ],
        }

    },

    methods: {
        clickBtn(event) {   
            if(event.target.innerText !== 'C' && event.target.innerText !== 'D' ) {
                if(this.checkedInp === 'Operand-1') {
                this.leftString += event.target.innerText
                } else if(this.checkedInp === 'Operand-2'){
                this.rightString += event.target.innerText
                }
            } else if (event.target.innerText === 'D') {
                if(this.checkedInp === 'Operand-1') {
                this.leftString = ''
                } else if(this.checkedInp === 'Operand-2'){
                this.rightString = ''
                }     
            } else if (event.target.innerText === 'C') {
                if(this.checkedInp === 'Operand-1') {
                this.leftString = this.leftString.slice(0, -1)
                } else if(this.checkedInp === 'Operand-2'){
                this.rightString = this.rightString.slice(0, -1)
                }     
            }
            const ourStrings = {
                left: this.leftString,
                right: this.rightString
            }
            this.$emit('checkedStrings',ourStrings)
            
        }, 
    },

}
</script>

<style lang="sass">
    .dispbtns__mainblock
        display: flex
        flex-direction: column
    .dispbtns__btnblock 
        border: 1px solid #000
        margin: 16px auto
        width: 420px
        padding: 16px
        display: grid
        grid-template-columns: repeat(3, 40px)
        justify-content: center
        gap: 8px
</style>