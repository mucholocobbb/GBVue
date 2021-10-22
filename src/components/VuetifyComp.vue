<template>
  <div class="mainitem__style">
    <h1>{{ $route.params.message }}</h1>
    <v-app class="vuetify">
      <v-app-bar class="header">
        <v-img class="logo" alt="Vue Logo" src="/favicon.ico" />
      </v-app-bar>
      <v-system-bar>
        <p>Uno</p>
        <p>Dos</p>
        <p>Tres</p>
        <p>Quattro</p>
      </v-system-bar>
      <v-main>
        <vue-table />
        <pagination />
        <p>________________</p>
        <v-dialog>
          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark v-on="on">
              ADD NEW COST <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <add-form-for-vuetify />
          </v-card>
        </v-dialog>
        <graph />
      </v-main>
      <v-bottom-navigation>
        <v-btn color="gray">It is Button</v-btn>
      </v-bottom-navigation>
      <v-footer>@Сделанно с помощью Vuetify. By E.S.M</v-footer>
    </v-app>
  </div>
</template>

<script>
import VueTable from "./Vtable.vue";
import Pagination from "./money/Pagination.vue";
import AddFormForVuetify from "./AddFormForVuetify.vue";
import Graph from "./Graph.vue";

export default {
  components: {
    VueTable,
    Pagination,
    AddFormForVuetify,
    Graph,
  },
};
</script>

<style lang="sass">
#app:last-child
    width: 450px
    box-shadow: 0 0 15px -5px #3fb883
    margin-top: 34px
    .v-application--wrap
        width: 100%
        min-height: 100% !important
    .v-toolbar
        flex: none !important
    .v-image__image--cover
        background-size: unset !important
    .v-responsive__content
        margin-left: 0
        flex: unset
        width: 0 !important
    .v-image__image
        width: 30px
        height: 30px
        position: unset
    .v-responsive__sizer
        padding-bottom: 0 !important
        flex: unset
        transition: unset !important
    .v-system-bar
        align-items: start
        justify-content: space-around
    .v-footer
        font-size: 10px
    .v-dialog
        width: 500px
</style>
