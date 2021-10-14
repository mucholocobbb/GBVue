<template>
  <div id="app">
    <img class="mainlogo__style" alt="Vue logo" src="./assets/logo.png" />
    <div class="mainbtn__block">
    <button class="mainbtn__style" v-bind:class="{mainbtn__active: item.show}" @click="checkItem(item.name, item.id, item.msg)" v-for="item of buttonsArray" :key="item.id">{{ item.name }}</button>
    </div>
    <router-view/>
    
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      showSoundBtn: false,
      buttonsArray: [{
        name: 'Calculator',
        id: 0,
        show: false,
        msg: 'Possibly the best calculator!'
      },
      {
        name: 'Sound Button',
        id: 1,
        show: false,
        msg: 'Just sound button...'
      },
      {
        name: 'Money Notes',
        id: 2,
        show: true,
        msg: 'Where you money?!'
      }
      ]
    }
  },
  methods: {
    checkItem(itemName, id, msg) {
      this.hiddenItems()
      this.buttonsArray[id].show = true
      this.$router.push({name: itemName, params: {message: msg}}).catch(() => {})
    },
    hiddenItems() {
      for (let i = 0; i < this.buttonsArray.length; i++) {
        this.buttonsArray[i].show = false
      }
    } 

  },
  created() {
    this.$router.push({name: 'Money Notes', params: {message: 'Where you money?!'}}).catch(() => {})
  },
};
</script>

<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin: 80px auto
  border: 1px solid #000
  width: 600px
  min-height: 650px
  box-shadow: 0 0 15px -5px black
  display: flex
  flex-direction: column
  align-items: center

.mainlogo__style 
  transform: scale(0.5)

.mainitem__style 
  width: 500px
  background: #fff
  border: 1px solid #000
  margin: -2px auto
  margin-bottom: 24px
  z-index: 0

.mainbtn__block 
  align-self: start
  margin-left: 100px

.mainbtn__style 
  color: #fff
  position: relative
  border: 1px solid #000
  height: 24px
  border-bottom-left-radius: 0
  border-bottom-left-radius: 0
  border-top-left-radius: 5px
  border-top-right-radius: 5px
  background: #61e3a9

.mainbtn__active 
  color: #000
  background: #fff
  border-bottom: 0
  z-index: 1

</style>
