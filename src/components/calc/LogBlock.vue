<template>
  <div class="logitem">
    <h3 class="logitem__maintext">Operations Logs :</h3>
    <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
  </div>
</template>

<script>
export default {
    name: "LogBlock",
    props: ["leftInput","rightInput","symbol","resultLog"],
    data() {
      return {
        logs: {},
      }
    },
    methods: {
      addLog() {
        const key = Date.now()
        const value = `${this.leftInput}${this.symbol}${this.rightInput}=${this.resultLog}`
        this.$set(this.logs, key, value)
      }
    },
}
</script>

<style lang="sass">
  .logitem  
    width: 420px
    min-height: 24px
    max-height: 120px
    border: 1px solid #000
    margin: 16px auto
    padding: 16px
    overflow: scroll
    padding-top: 4px
    padding-bottom: 4px
    &__maintext
      padding: 0
      margin-top: 0
      margin-bottom: 0
</style>