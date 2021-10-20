<template>
    <div class="mainitem__style">
        <h1>{{ $route.params.message }}</h1>
    <v-app >
        <v-app-bar>v-app-bar</v-app-bar>
        <v-system-bar>v-system-var</v-system-bar>
        <v-main>
             
        </v-main>
        <v-bottom-navigation>v-bottom-navigation</v-bottom-navigation>
        <v-footer>v-footer</v-footer>
    </v-app>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass">
    #app:last-child
        width: 450px
        box-shadow: 0 0 15px -5px #3fb883

</style>