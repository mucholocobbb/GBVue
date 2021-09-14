<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <Calculator msg="Calculator from first Lesson." />
    <SoundBtn text="This is sound Button" />
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import SoundBtn from "./components/myComp.vue";

export default {
  name: "App",
  components: {
    Calculator,
    SoundBtn
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  transform: scale(0.5);
}
</style>
