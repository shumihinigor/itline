<template lang="">
    <section class="banner">
        <swiper class="swiper" ref="swiperBanner" :options="swiperOptions">
            <swiper-slide>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-12">
                            <h1 class="banner-title h1 weight-700">
                                Производим комплексные системы информирования 
                                на
                                основе светодиодных табло
                            </h1>
                            <button type="button" class="btn default">
                                <span class="p4">О компании</span>
                            </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-12">
                            <h1 class="banner-title h1 weight-700">
                                Производим комплексные системы информирования 
                                на
                                основе светодиодных табло
                            </h1>
                            <button type="button" class="btn default">
                                <span class="p4">О компании</span>
                            </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            <h1 class="banner-title h1 weight-700">
                                Производим комплексные системы информирования 
                                на
                                основе светодиодных табло
                            </h1>
                            <button type="button" class="btn default">
                                <span class="p4">О компании</span>
                            </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            <h1 class="banner-title h1 weight-700">
                                Производим комплексные системы информирования 
                                на
                                основе светодиодных табло
                            </h1>
                            <button type="button" class="btn default">
                                <span class="p4">О компании</span>
                            </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);
import 'swiper/swiper-bundle.css';
    
export default {
    components: {
        Swiper,
        Pagination,
        SwiperSlide,
    },
    data() {
        return {
            swiperOptions: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperBanner.$swiper
        }
    },
    created() {
        window.addEventListener('scroll', this.scrollHandler)
        this.$store.commit('changeActiveHeader', true)
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollHandler)
        this.$store.commit('changeActiveHeader', false)
    },
    methods: {
        scrollHandler() {
            window.scrollY > 0 ? this.$store.commit('changeActiveHeader', false) : this.$store.commit('changeActiveHeader', true)
        }
    },
}
</script>

<style lang="scss">
    .banner {
        position: relative;
        top: -72px;
        background-image: url('../../assets/images/banner.png');
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 725px;
        margin-bottom: 100px;
        &-title {
            color: $white;
            margin-bottom: 40px;
        }
        & .swiper {
            &-container {
                height: 725px;
            }
            &-slide {
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }
            &-pagination {
                &-bullet {
                    background: transparentize($color: $white, $amount: 0.4);
                    &-active {
                        background: $white;
                    }
                }
            }
        }
    }
</style>