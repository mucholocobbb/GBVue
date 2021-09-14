<template>
    <div class="soundBtn">
        <h1>{{ text }}</h1>
        <h3>{{ sound }}</h3>
        <button class="btnS" @click="pushTheButton">PUSH ME</button>
    </div>
</template>
<script>
export default {
    name: 'SoundBtn',
    props:{
    text: String,
  },
  data() {
      return {
          sound: '',

      }
  },
  methods: {
      pushTheButton(){
          //К сожалению не зафиналил результат. Никак не смог нащупать путь к файлу. Причем,когда я переложил sound.mp3 из assets в components срабатывал вариант,который оставлен. Звук был. Но когда пошел искать путь до папки assets , все сломалось. Возможно есть какая то особенность в дирректориях с Вью. Если есть мысли,буду рад .
        let mySound = new Audio('sound.mp3')
        mySound.play()
        this.sound = 'Piiiuuu....'

      }
  }
}
</script>

<style lang="sass">
    .btnS
       width: 150px
       height: 150px
       background: #ffffff
       outline: none
       border: 1px solid #000
       border-radius: 50%
       margin-bottom: 64px
       color: red
       font-size: 34px
       box-shadow: 0 0 15px -5px black
       transition: all 0.1s
       &:active
            box-shadow: 0 0 20px -5px black


</style>