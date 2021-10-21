<template>
    <div class="mainitem__style">
        <h1>{{ $route.params.message }}</h1>
    <v-app class="vuetify">
        <v-app-bar class="header">
            <v-img
                class="logo"
                alt="Vue Logo"
                src="/favicon.ico"
            />
        </v-app-bar>
        <v-system-bar>v-system-var</v-system-bar>
        <v-main>
             <v-btn>Home</v-btn>
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
        margin-top: 34px
    .v-application--wrap
        width: 100%
        min-height: 100% !important
    .v-toolbar
        flex: none !important
    .v-image__image--cover    
        background-size: unset !important
    // .header
    //     display: flex
    //     justify-content: center
</style>