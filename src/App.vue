<template>
    <div id="app">
        <div class="wrapper">
            <Header />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <transition
                            name="fade"
                            mode="out-in"
                        >
                            <Breadcrumbs 
                                v-if="this.$route.name !== 'Home'" 
                            />
                        </transition>
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
            <transition 
                name="fade"
                mode="out-in"
            >
            <div v-show="showButtons" class="fixed-block">
                <transition 
                    name="fade"
                    mode="out-in"
                >
                    <div v-show="showSubscribe" class="subscribe-tooltips mb-3">
                        <h6 class="h6 text-grey-1 mb-1">Подпишитесь на наши уведомления</h6>
                        <p class="p5 text-grey-3 mb-2">Подпишитесь на уведомления нашего магазина и узнавайте о всех акциях и поступлении товара одним из первых!</p>
                        <button class="btn default w-100">
                            <span class="p5 text-uppercase">Подписаться</span>
                        </button>
                    </div>
                </transition>
                <button @click="showSubscribe = !showSubscribe" class="mb-2">
                    <img src="./assets/images/bell.svg" alt="bell">
                </button>
                <button @click="scrollTop" class="">
                    <img src="./assets/images/arrow_up.svg" alt="arrow_up">
                </button>
            </div>
            </transition>
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
                showButtons: false,
                showSubscribe: false
            }
        },
        mounted() {
            
        },
        computed: {
            ...mapGetters(["activeHeader"]),
        },
        created() {
            window.addEventListener('scroll', this.scrollHandler)
        },
        destroyed() {
            window.removeEventListener('scroll', this.scrollHandler)
        },
        methods: {
            scrollHandler() {
                this.showSubscribe = false;
                this.showButtons = window.scrollY > 50 ? true : false
            },
            scrollTop() {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        },
        updated() {
            
        }
    }

</script>

<style lang="scss">
    .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding-top: 72px;
        overflow: hidden;
        &::after {
            content: '';
            position: absolute;
            z-index: -1;
            right: 0;
            top: 25%;
            width: 780px;
            height: 780px;
            background-image: url(./assets/images/right_bg.svg);
            background-position: right center;
            background-size: contain;
            background-repeat: no-repeat;
        }
        &::before {
            content: '';
            position: absolute;
            z-index: -1;
            left: 0;
            top: 55%;
            width: 780px;
            height: 780px;
            background-image: url(./assets/images/left_bg.svg);
            background-position: left center;
            background-size: contain;
            background-repeat: no-repeat;
        }
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
            text-transform: uppercase;
            &:nth-child(1),
            &:nth-child(2) {
                text-transform: none;
            }
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

    .fixed-block {
        position: fixed;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        left: 20px;
        bottom: 20px;
        & .subscribe-tooltips {
            display: block;
            padding: 12px 16px;
            background: $white;
            box-shadow: 4px 4px 10px transparentize($black, 0.85);
            border-radius: 6px;
            max-width: 375px;
            min-width: 100%;
            width: 100%;
            & p {
                font-family: $TTNormsLight;
            }
            & button {
                padding: 5px 50px;
                border-radius: 5px;
                font-family: $TTNormsRegular;
            }
        }
        & > button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border: none;
            outline: none;
            border-radius: 50%;
            background: $orange;
            opacity: 0.5;
            transition: all 0.2s;
            & img {
                position: relative;
                top: -1px;
            }
            &:hover {
                opacity: 1;
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
    
    @media (min-width: 1200px) {
        .container, .container-lg, .container-md, .container-sm, .container-xl {
            max-width: 1240px !important;
        }
    }
</style>