<template>
    <div id="app">
        <div class="wrapper">
            <Header />
            <Breadcrumbs v-if="this.$route.name !== 'Home'" />
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
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    import Breadcrumbs from '@/components/Breadcrumbs'
    
    export default {
        components: {
            Header, Footer, Breadcrumbs
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
        updated() {
            this.$store.commit('pushBreadcrumbs', this.$route.meta.breadcrumb)
        }
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
    @media (min-width: 992px) {
        .container, .container-lg, .container-md, .container-sm {
            max-width: 100% !important;
        }
    }
</style>