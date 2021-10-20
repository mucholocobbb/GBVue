<template>
  <div class="mainitem__style">
    <h1>{{ $route.params.message }}</h1>
        <div class="itemblock__style">
            <input class="iteminput__style inputFirst" name="firstNum" type="number" v-model.number="firstNum" :placeholder="place1" :disabled="checked">
            <h3 class="itemsymbol__style">{{ sym }}</h3>
            <input class="iteminput__style" name="secNum" :class="{itemerror__style: errStyle}" type="number" v-model.number="secNum" :placeholder="place2" :disabled="checked">
            <button class="itembtn__style buttonTest" @click="calculate" :disabled="isActiveBtn">=</button>
            <h3 class="itemsymbol__style">{{ result }}</h3>
        </div>
        <h3 v-if="errStyle" :class="{itemerror__style: errStyle}">{{ validError }}</h3>
        <div class="itemblock__style">
            <button class="itembtn__style" @click="checkBtn(place1, $event)" v-for="item in buttonSymbols" :title="item.sym" :key="item.id">{{ item.sym }}</button>
            <div class="superbtns__block" v-if="showSuperBtns" >
              <button class="itembtn__style" @click="checkBtn('Степень', $event)">x^</button>
              <button class="itembtn__style" @click="checkBtn(place1, $event)">%</button>
            </div>
        </div>
        <div class="showItems itemcbox__style">
          <input  type="checkbox" id="supercalc" v-model="showSuperBtns">
          <label  for="supercalc"> Show Super Calc +++ </label>
          <input  type="checkbox" id="keyboard" v-model="checked">
          <label  for="keyboard"> Show screen keyboard. </label>
          <input  type="checkbox" id="logs" v-model="showLogs">
          <label  for="logs"> Show logs</label>
        </div>
        <LogBlock v-show="showLogs" :leftInput="firstNum" :rightInput="secNum" :symbol="sym" :resultLog="result" ref="logsBlock"/>
        <DispKeyboard @checkedStrings="checkInput" v-show="checked"/>
  </div>
</template>

<script>
import LogBlock from "./LogBlock.vue"
import DispKeyboard from "./DispKeyboard.vue"

export default {
  name: "Calculator",
  components: {
    LogBlock,
    DispKeyboard,
  },
  data() {
    return {
      place1: 'Число',
      place2: 'Число',
      validError: '',
      firstNum: '',
      secNum: '',
      fibResult: 0,
      result: 0,
      sym: '+',
      showLogs: false,
      checked: false,
      showSuperBtns: false,
      errStyle: false,
      buttonSymbols: [
        { id: 1 , sym: '+'},
        { id: 2 , sym: '-'},
        { id: 3 , sym: '/'},
        { id: 4 , sym: '*'},
      ],
    };
  },
  computed: {
    isActiveBtn() {
      return this.firstNum === '' || this.secNum === ''
    }
  },
  methods: {
    checkInput(strings) {
      if(strings.left === '') {
        this.firstNum = strings.left
      } else {
        this.firstNum = +strings.left
      }
      if(strings.right === '') {
        this.secNum = strings.right
      } else {
        this.secNum = +strings.right
      }
    },
    calculate(){
        this.errStyle = false
        switch (this.sym) {
            case '+':
                this.result = this.firstNum + this.secNum;
            break;
            case '-':
                this.result = this.firstNum - this.secNum;
            break;
            case '/':
              if(this.secNum === 0) {
                this.errStyle = !this.errStyle
                this.validError = 'ERROR: На ноль делить нельзя!'
              } else {
                this.result = this.firstNum / this.secNum;
              }
                
            break;
            case '*':
                this.result = this.firstNum * this.secNum;
            break;
            case 'x^':
                this.result = Math.pow(this.firstNum,this.secNum)
            break;
            case '%':
                this.result = Math.trunc((this.firstNum / this.secNum))
            break;
        }
        //Здесь как то  надо запустить метод addLog() из компонента logBlock.vue - пока не понял как. Refs судя по гуглам - читерство.
        //Сделал вызов addLog асинхронный,чтобы calculate успел записать this.result. Выглядит как костыль,но пока не догадался по другому.
        setTimeout(() => {
          this.$refs.logsBlock.addLog()
        }, 100);
    },
    checkBtn(text, event){
      this.sym = event.target.innerText
      this.place2 = text
      this.errStyle = false

    }
},

};
</script>

<style lang="sass">
  .itemblock__style 
      border: 1px solid #000
      margin: 16px auto
      width: 420px
      height: 70px
      padding: 16px
      display: flex
      justify-content: center
      align-items: center
  
  .itemsymbol__style 
      width: 40px
      height: 40px
      margin: 0
      text-align: center
      line-height: 40px
      overflow: hidden
      color: blueviolet
      font-weight: 600
  
  .iteminput__style 
      height: 40px
      width: 80px
      box-sizing: border-box
  
  .itembtn__style 
      width: 40px
      height: 40px
      margin: 0 4px
      color: #00b061
      font-size: 20px
  
  .itemcbox__style 
    height: 14px
    line-height: 14px
    width: 452px
    font-size: 10px
    margin-bottom: 24px
  
  .itemerror__style 
    color: red
    font-size: 10px
    border-color: red
  .superbtns__block 
    border: 1px solid #000
    padding: 4px  
  
</style>
