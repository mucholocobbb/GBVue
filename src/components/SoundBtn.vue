<template>
    <div class="mainitem__style">
        <h1>{{ $route.params.message }}</h1>
        <button class="soundbtn__style" @click="pushTheButton">PUSH ME</button>
    </div>
</template>
<script>
export default {
    name: 'SoundBtn',
    methods: {
      pushTheButton(){
        let mySound = new Audio('../sound.mp3')
        mySound.play()
      }
  }
}
</script>

<style lang="sass">
    .soundbtn__style
       width: 150px
       height: 150px
       background: #99edc8
       outline: none
       border: 1px solid #000
       border-radius: 50%
       margin-bottom: 64px
       color: red
       font-size: 34px
       box-shadow: 0 0 15px -5px black
       transition: all 0.1s
       &:active
            transform: scale(1.1)
            background: #eb676794
</style>