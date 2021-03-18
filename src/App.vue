<template>
    <div id="app">
        <Header />
        <template>
            <transition
                name="fade"
                mode="out-in"
            >
                <router-view></router-view>
            </transition>
        </template>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    
    export default {
        components: {
            Header, Footer
        },
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        computed: {
            
        },
        methods: {
            
        },
    }

</script>

<style lang="scss">
    #app {
        padding-bottom: 500px;
    }
    .wrapper {
        padding-top: 72px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.2s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>