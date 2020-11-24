<template>
    <div id="app">
        <Header />
        <router-view />
        <!-- <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition> -->
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
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>