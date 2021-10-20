<template>
    <div class="mainitem__style">
        <h1>{{ $route.params.message }}</h1>
    <v-app class="test">
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
    .test
        width: 90%
        background: #ffffff
</style>