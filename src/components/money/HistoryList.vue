<template>
  <div class="money__listblock">
    <div class="money__listheader">
      <p class="money__categories">#</p>
      <p class="money__categories">Date</p>
      <p class="money__categories">Category</p>
      <p class="money__categories">Value</p>
    </div>

    <div
      class="money__listheader money__listheader_item"
      v-for="item in setArrRange"
      :key="item.id"
    >
      <transition name="fade">
        <ModalWindow
          class="money__modalwindow"
          v-if="activeId === item.id"
          :elem="item"
        />
      </transition>
      <p class="money__categories">{{ item.id }}</p>
      <p class="money__categories">{{ item.date }}</p>
      <p class="money__categories">{{ item.cat }}</p>
      <p class="money__categories">{{ item.value }} &#8381;</p>
      <button class="money__modallist money__categories" @click="$modal.show(item.id)">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </div>
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
  components: {
    ModalWindow: () => import("./ModalWindow.vue"),
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
  mounted() {
    this.$modal.EventBus.$on("shown", this.onShown);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
};
</script>

<style lang="sass">
// Modal Animation
.fade-enter-active, .fade-leave-active
    transition: opacity .3s
.fade-enter, .fade-leave-to
    opacity: 0
.money

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
        width: 450px
        margin: 0 auto
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
    &__modalwindow
        position: absolute
</style>
