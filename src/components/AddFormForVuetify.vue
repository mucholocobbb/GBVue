<template>
  <div class="vuetifyform">
    <v-card>
      <v-text-field label="Date" name="date" id="date" v-model="dateInp" />
      <v-select :items="getCatList" v-model="selected" label="Category" />
      <v-text-field v-model.number="price" label="Price" />
      <v-btn color="success" @submit.prevent @click="addItem">ADD</v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "AddForm",

  data() {
    return {
      dateInp: "",
      selected: "",
      price: "",
    };
  },
  methods: {
    ...mapMutations(["setAddCostItem", "updateCostId", "actualPageChange"]),
    addItem() {
      let newString = this.replaceDate();
      if (this.selected !== "" && this.price !== "") {
        this.sendToParent(newString);
      }
    },
    sendToParent(newDate) {
      let newItem = {
        id: "",
        date: newDate || this.getCurrentDate,
        cat: this.selected,
        value: this.price,
      };
      this.$store.commit("setAddCostItem", newItem);
      this.$store.commit("updateCostId");
      this.$store.commit("actualPageChange", this.lastPage);
    },
    replaceDate() {
      let re = /-/gi;
      let newStr = this.dateInp.replace(re, ".");
      let re2 = /(\d+).(\d+).(\d+)/gi;
      let newStr2 = newStr.replace(re2, "$3.$2.$1");
      return newStr2;
    },
  },
  computed: {
    ...mapGetters(["getCatList", "lastPage"]),
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
};
</script>

<style lang="sass">
.vuetifyform
    margin: 0 auto
    padding: 16px
    width: 300px
</style>
