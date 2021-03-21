<template>
    <div id="app">
        <div class="wrapper">
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
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding-top: 72px;
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
    @media (min-width: 1200px) {
        .container, .container-lg, .container-md, .container-sm, .container-xl {
            max-width: 1240px !important;
        }
    }
</style>