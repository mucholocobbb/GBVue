<template>
  <transition name="fade">
    <div class="vuetify__listblock">
      <v-row class="vuetify__listheader">
        <v-col class="vuetify__categories">#</v-col>
        <v-col class="vuetify__categories">Date</v-col>
        <v-col class="vuetify__categories">Category</v-col>
        <v-col class="vuetify__categories">Value</v-col>
      </v-row>

      <v-row
        class="vuetify__listheader vuetify__listheader_item"
        v-for="item in setArrRange"
        :key="item.id"
      >
        <v-col class="vuetify__categories">{{ item.id }}</v-col>
        <v-col class="vuetify__categories">{{ item.date }}</v-col>
        <v-col class="vuetify__categories">{{ item.cat }}</v-col>
        <v-col class="vuetify__categories">{{ item.value }} &#8381;</v-col>
        <button
          class="vuetify__modallist vuetify__categories"
          @click="$modal.show(item.id)"
        ></button>
      </v-row>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HistoryList",
  data() {
    return {
      activeId: "",
    };
  },
  methods: {
    onShown(id) {
      this.activeId = id;
    },
    onHide() {
      this.activeId = "";
    },
  },
  computed: {
    ...mapGetters(["getCostList", "actualPage"]),
    setArrRange() {
      const count = 5;
      let changeP = this.actualPage <= 0 ? 0 : this.actualPage - 1;
      const startNum = changeP * count;
      const lastNum = startNum + count;
      return this.getCostList.slice(startNum, lastNum);
    },
  },
};
</script>

<style lang="sass">
// Modal Animation
.fade-enter-active, .fade-leave-active
    transition: opacity .3s
.fade-enter, .fade-leave-to
    opacity: 0
.col
    padding: 0 !important
.vuetify
    &__modallist
        background: white
        outline: none
        border: 0
        &:hover
            color: gray
            transform: scale(1.02)
        &:active
            color: red
            transform: scale(1.05)
    &__listheader
        position: relative
        color: black
        font-size: 14px
        font-weight: 800
        border-bottom: 1px solid black
        width: 400px
        margin: 0 auto !important
        display: grid
        grid-template-columns: 1fr 3fr 3fr 2fr 1fr
        margin-bottom: 16px
        &_item
            font-weight: 600
            border-bottom: 1px solid gray
            margin-bottom: 0
            color: gray
            position: relative
    &__categories
        margin-block-start: 12px
        margin-block-end: 12px
        text-align: center
</style>
