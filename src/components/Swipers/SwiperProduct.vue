<template lang="">
    <div>
        <swiper v-show="slides.length" class="swiper product" ref="swiperProduct" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in slides" :key="item.id">
                <div class="product-swiper__item">
                    <div class="row h-100">
                        <div class="col-lg-5 col-12 position-relative">
                            <div 
                                class="product-swiper__item-image mr-16" 
                                :style="{'background-image': 'url(' + require('../../assets/images/' + item.image) + ')'}"
                            ></div>
                        </div>
                        <div class="col-lg-7 col-12 d-flex flex-column align-items-start product-swiper__item-block">
                            <h1 class="h1 mb-16">{{ item.title }}</h1>
                            <ul>
                                <li v-for="(li, index) in item.list" class="p2" :key="index">
                                    {{ li }}
                                </li>
                            </ul>
                            <button type="button" class="btn contour product-swiper__item-button mt-auto">
                                <span class="text-uppercase p4">заказать</span>
                            </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper> 
    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);
import Preloader from '@/components/Preloader/Preloader'
import 'swiper/swiper-bundle.css';
    
export default {
    components: {
        Swiper,
        Pagination,
        SwiperSlide,
        Preloader
    },
    props: ["slides"],
    data() {
        return {
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                breakpoints: {
                    992: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        centeredSlides: false,
                    },
                },
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperProduct.$swiper
        }
    },
    created() {
        
    },
    mounted() {
        if (window.innerWidth <= 991) {
            this.swiper.navigation.$nextEl[0].hidden = true;
            this.swiper.navigation.$prevEl[0].hidden = true;
        }
    },
    methods: {
        
    },
}
</script>

<style lang="scss" scoped>
    .product {
        &-swiper {
            &__item {
                background: linear-gradient(144.77deg, #EF6F2E 0.25%, #FFC839 107.32%);
                border-radius: 20px;
                padding: 32px 24px;
                height: 100%;
                color: $white;
                @media (max-width: 991px) {
                    padding: 20px;
                    margin-bottom: 20px;
                }
                &-image {
                    position: absolute;
                    top: -60px;
                    max-width: 490px;
                    width: 100%;
                    height: 490px;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: contain;
                    @media (max-width: 991px) {
                        position: relative;
                        max-width: 335px;
                        width: 100%;
                        height: 254px;
                        background-size: cover;
                        margin: 0 auto !important;
                    }
                }
                &-block {
                    @media (max-width: 991px) {
                        position: relative;
                        margin-top: -60px;
                    }
                }
                &-button {
                    background-color: transparent !important;
                    color: $white !important;
                    border-color: $white !important;
                    border-radius: 3px;
                    min-width: 300px;
                    @media (max-width: 991px) {
                        width: 100%;
                        max-width: 100%;
                    }
                }
            }
        }
    }
    .swiper {
        &.product {
            margin-bottom: 0;
            min-height: 400px;
            @media (max-width: 991px) {
                min-height: auto;
                padding-top: 50px;
            }
            & .swiper {
                &-button {
                    &-next {
                        right: 30px;
                        top: calc(50% - 40px);
                        &::after {
                            content: '';
                            width: 40px;
                            height: 40px;
                            min-width: 40px;
                            min-height: 40px;
                            border-radius: 50%;
                            font-family: serif;
                            background-color: $white;
                            box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
                            background-image: url('../../assets/images/arrow_next.svg');
                            background-repeat: no-repeat;
                            background-position: center center;
                            background-size: 12px 19px;
                        }
                        &:hover {
                            transition: all 0.2s;
                            &::after {
                                background-color: #FBFBFB;
                                box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
                            }
                        }
                    }
                    &-prev {
                        left: 30px;
                        top: calc(50% - 40px);
                        &::after {
                            content: '';
                            width: 40px;
                            height: 40px;
                            min-width: 40px;
                            min-height: 40px;
                            border-radius: 50%;
                            font-family: serif;
                            background-color: $white;
                            box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
                            background-image: url('../../assets/images/arrow_prev.svg');
                            background-repeat: no-repeat;
                            background-position: center center;
                            background-size: 12px 19px;
                        }
                        &:hover {
                            transition: all 0.2s;
                            &::after {
                                background-color: #FBFBFB;
                                box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
                            }
                        }
                    }
                }
                &-wrapper {
                    min-height: 400px;
                    @media (max-width: 991px) {
                        min-height: auto;
                    }
                }
                &-slide {
                    height: 320px;
                    @media (max-width: 991px) {
                        height: auto;
                    }
                }
            }
        }
    }
</style>