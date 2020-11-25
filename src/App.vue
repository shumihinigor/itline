<template>
    <div id="app">
        <Header />
        <!-- <router-view /> -->
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.min.js'

    export default {
        components: {
            Header
        }
    }

</script>

<style lang="scss">
    body {
        background-color: #f8f8f8;
    }
    #app {
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $black;
    }
</style>