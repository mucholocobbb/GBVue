<template>
  <figure class="highcharts-figure">
    <div id="container"></div>
    <p class="highcharts-description">Категории ваших трат</p>
  </figure>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Graph",
  computed: {
    ...mapGetters(["getDiaSet", "getCostList", "getCatList"]),
  },
  methods: {
    ...mapMutations(["pushToDiagram"]),
    changeList() {
      const arrCat = [];
      let finalSum = this.getCostList.reduce(function (sum, el) {
        return sum + +el.value;
      }, 0);
      this.getCatList.forEach((el) => {
        let nameArr = this.getCostList.filter((element) => {
          return el.text === element.cat;
        });
        let nameAcum = nameArr.reduce(function (sum, el) {
          return sum + +el.value;
        }, 0);
        let percent = this.percentDiff(finalSum, nameAcum);
        const arrItem = {
          name: el.text,
          y: percent,
        };
        arrCat.push(arrItem);
        this.$store.commit("pushToDiagram", arrItem);
      });
      return arrCat;
    },
    percentDiff(total, value) {
      var differencePercentage = +(100 - ((total - value) / total) * 100).toFixed(1);
      return differencePercentage;
    },
  },
  updated() {
    this.changeList();
  },
  mounted() {
    this.changeList();
    // eslint-disable-next-line no-undef
    Highcharts.chart("container", this.getDiaSet);
  },
};
</script>

<style lang="sass">
.highcharts-figure,
.highcharts-data-table table
  min-width: 310px
  max-width: 800px
  margin: 1em auto


#container
  height: 400px


.highcharts-data-table table
  font-family: Verdana, sans-serif
  border-collapse: collapse
  border: 1px solid #EBEBEB
  margin: 10px auto
  text-align: center
  width: 100%
  max-width: 500px


.highcharts-data-table caption
  padding: 1em 0
  font-size: 1.2em
  color: #555


.highcharts-data-table th
  font-weight: 600
  padding: 0.5em


.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption
  padding: 0.5em


.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even)
  background: #f8f8f8


.highcharts-data-table tr:hover
  background: #f1f7ff
</style>
