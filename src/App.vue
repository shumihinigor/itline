<template>
    <div id="app">
        <div class="wrapper">
            <Header />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <Breadcrumbs v-if="this.$route.name !== 'Home'" />
                    </div>
                </div>
            </div>
            <template>
                <transition
                    name="fade"
                    mode="out-in"
                >
                    <router-view></router-view>
                </transition>
            </template>
            <ModalContacts />
            <Footer />
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    import ModalContacts from '@/components/Modal/ModalContacts'
    
    export default {
        components: {
            Header, Footer, ModalContacts
        },
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        computed: {
            ...mapGetters([""]),
        },
        methods: {
            
        },
        updated() {
            
        }
    }

</script>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding-top: 72px;
    }
    .wrapper {
        padding-top: 72px;
    }

    .breadcrumb {
        position: relative;
        padding: 32px 0 !important;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0 !important;
        list-style: none;
        background-color: transparent !important;
        border-radius: 0 !important;
        &-item {
            display: flex;
            align-items: center;
            padding: 0 !important;
            font-family: $TTNormsLight;
            font-size: 14px;
            line-height: 18px;
            &::before {
                display: none !important;
            }
            &:last-child {
                color: $orange;
                pointer-events: none;
                & a {
                    color: $orange;
                }
                &::after {
                    display: none;
                }
            }
            & a {
                text-decoration: none;
                color: $grey-2;
                font-family: $TTNormsRegular;
                &:hover {
                    text-decoration: none;
                    color: $grey-2;
                }
            }
            &::after {
                content: '';
                display: block;
                margin: 0 10px;
                width: 20px;
                height: 1px;
                background-color: $grey-2;
            }
        }
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
    // @media (min-width: 992px) {
    //     .container, .container-lg, .container-md, .container-sm {
    //         max-width: 100% !important;
    //     }
    // }
    @media (min-width: 1200px) {
        .container, .container-lg, .container-md, .container-sm, .container-xl {
            max-width: 1240px !important;
        }
    }
</style>