<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
            <div class="inpBlock">
            <input class="input" type="number" v-model.number="firstNum" :placeholder="place1" :disabled="checked">
            <h3 class="symbol">{{ sym }}</h3>
            <input class="input" :class="{errStyle: errStyle}" type="number" v-model.number="secNum" :placeholder="place2" :disabled="checked">
            <button class="btn" @click="calculate(sym)" :disabled="firstNum === '' || secNum === ''">=</button>
            <h3 class="symbol">{{ result }}</h3>
        </div>
        <h3 v-if="errStyle" :class="{errStyle: errStyle}">{{ validError }}</h3>
        <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
        <div class="btnblock">
            <button class="btn" @click="checkBtn(place1, $event)" v-for="item in buttonSymbols" :title="item.sym" :key="item.id">{{ item.sym }}</button>
            <div class="superCalcBtns" v-if="show">
                <button class="btn" @click="checkBtn('Степень', $event)">x^</button>
                <button class="btn" @click="checkBtn(place1, $event)">%</button>
            </div>
        </div>
        <button class="superCalc" @click="show = !show">Super Calc +++</button>
        <div class="showItems superCalc">
          <input type="checkbox" id="checkbox" v-model="checked">
          <label for="checkbox"> Показать экранную клавиатуру. </label>
        </div>
        <div v-if="checked" class="dispBtns">
          <div>
            <input type="radio" id="one" value="Operand-1" v-model="checkedInp">
            <label for="one">Левый</label>
            <input type="radio" id="two" value="Operand-2" v-model="checkedInp">
            <label for="two">Правый</label><br>
            <span>Выбрано: {{ checkedInp }}</span>
          </div>

          <div class="dispBtnsBlock">
            <button class="btn"  v-for="item in dispKeyboard" :key="item.id" @click="clickBtn($event)">{{ item.sym }}</button>
          </div>
        </div>




  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: {
    msg: String,
  },
  data() {
    return {
      checkedInp: '',
      logs: {},
      place1: 'Число',
      place2: 'Число',
      validError: '',
      firstNum: '',
      secNum: '',
      leftString: '',
      rightString: '',
      fibResult: 0,
      result: 0,
      sym: '+',
      checked: false,
      show: false,
      errStyle: false,
      buttonSymbols: [
        { id: 1 , sym: '+'},
        { id: 2 , sym: '-'},
        { id: 3 , sym: '/'},
        { id: 4 , sym: '*'},
      ],
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
      
    };
  },
  methods: {
    clickBtn(event) {     
      if(event.target.innerText !== 'C' && event.target.innerText !== 'D' ) {
        if(this.checkedInp === 'Operand-1') {
          this.leftString += event.target.innerText
          this.firstNum = +this.leftString
        } else if(this.checkedInp === 'Operand-2'){
          this.rightString += event.target.innerText
          this.secNum = +this.rightString
        }
      } else if (event.target.innerText === 'D') {
        if(this.checkedInp === 'Operand-1') {
          this.leftString = ''
          this.firstNum = ''
        } else if(this.checkedInp === 'Operand-2'){
          this.rightString = ''
          this.secNum = ''
        }     
      } else if (event.target.innerText === 'C') {
        if(this.checkedInp === 'Operand-1') {
          this.leftString = this.leftString.slice(0, -1)
          this.firstNum = +this.leftString
        } else if(this.checkedInp === 'Operand-2'){
          this.rightString = this.rightString.slice(0, -1)
          this.secNum = +this.rightString
        }     
      }
    },
    calculate(operation){
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
        const key = Date.now()
        const value = `${this.firstNum}${operation}${this.secNum}=${this.result}`
        this.$set(this.logs, key, value)

    },
    checkBtn(text, event){
      this.sym = event.target.innerText
      this.place2 = text
      this.errStyle = false

    }
},

};
</script>

<style>
  #app {
      margin: 80px auto;
      border: 1px solid #000;
      width: 500px;
      min-height: 150px;
      box-shadow: 0 0 15px -5px black;
  }
  .inpBlock {
      border: 1px solid #000;
      margin: 16px auto;
      width: 420px;
      padding: 16px;
      display: flex;
      justify-content: center;
  }
  .btnblock {
      border: 1px solid #000;
      margin: 16px auto;
      width: 420px;
      padding: 16px;
      display: flex;
      justify-content: center;
      align-items: center;

  }
  .symbol {
      width: 40px;
      height: 40px;
      margin: 0;
      text-align: center;
      line-height: 40px;
      overflow: hidden;
      color: blueviolet;
      font-weight: 600;
  }
  .input {
      height: 40px;
      width: 80px;
      box-sizing: border-box;
  }
  .btn {
      width: 40px;
      height: 40px;
      margin: 0 4px;
      color: green;
      font-size: 20px;
  }
  .superCalc {
    height: 14px;
    width: 452px;
    font-size: 10px;
    margin-bottom: 24px;
  }
  .superCalcBtns {
    border: 1px solid #000;
    padding: 4px;
  }
  .dispBtnsBlock {
    border: 1px solid #000;
    margin: 16px auto;
    width: 420px;
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(3, 40px);
    justify-content: center;
    gap: 8px;
  }
  .errStyle {
    color: red;
    font-size: 10px;
    border-color: red;
  }



</style>
