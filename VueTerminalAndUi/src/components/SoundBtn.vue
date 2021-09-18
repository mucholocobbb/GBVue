<template>
    <div class="soundBtn">
        <h1>{{ text }}</h1>
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
        let mySound = new Audio('../sound.mp3')
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