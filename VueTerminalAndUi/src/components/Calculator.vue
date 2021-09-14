<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
            <div class="inpBlock">
            <input class="input" type="text" v-model.number="firstNum" :placeholder="place1">
            <h3 class="symbol">{{ sym }}</h3>
            <input class="input" type="text" v-model.number="secNum" :placeholder="place2">
            <button class="btn" @click="increaseResult">=</button>
            <h3 class="symbol">{{ result }}</h3>
            
        </div>
        <div class="btnblock">
            <button class="btn" @click="sym = '+',place2 = 'Число'">+</button>
            <button class="btn" @click="checkBtn(place1, $event)">-</button>
            <button class="btn" @click="checkBtn(place1, $event)">/</button>
            <button class="btn" @click="checkBtn(place1, $event)">*</button>
            <div class="superCalcBtns" v-if="show">
                <button class="btn" @click="checkBtn('Степень', $event)">x^</button>
                <button class="btn" @click="checkBtn(place1, $event)">%</button>
            </div>
        </div>
        <button class="superCalc" @click="show = !show">Super Calc +++</button>

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
      place1: 'Число',
      place2: 'Число',
      firstNum: '',
      secNum: '',
      result: 0,
      sym: '+',
      show: false,
      
    };
  },
  methods: {
    increaseResult(){
        switch (this.sym) {
            case '+':
                this.result = this.firstNum + this.secNum;
            break;
            case '-':
                this.result = this.firstNum - this.secNum;
            break;
            case '/':
                this.result = this.firstNum / this.secNum;
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
    },
    checkBtn(text, event){
      this.sym = event.target.innerText
      this.place2 = text
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



</style>
