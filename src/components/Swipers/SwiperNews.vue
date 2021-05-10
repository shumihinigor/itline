<template lang="">
    <div>
        <swiper class="swiper news" ref="swiperNews" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in images" :key="item.id">
                <div 
                    class="news-swiper__item"
                    :style="{'background-image': 'url(' + require('../../assets/images/news/' + item) + ')'}"
                >
                    
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
    props: ["images"],
    components: {
        Swiper,
        Pagination,
        SwiperSlide,
        Preloader
    },
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
            return this.$refs.swiperNews.$swiper
        }
    },
    created() {
        
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss">
    .news {
        &-swiper {
            &__item {
                padding: 32px 24px;
                border-radius: 10px;
                height: 100%;
                background-position: top left;
                background-size: cover;
                background-repeat: no-repeat;
                @media (max-width: 991px) {
                    padding: 20px;
                    margin-bottom: 20px;
                }
            }
        }
    }
    .swiper {
        &.news {
            min-height: 450px;
            @media (max-width: 991px) {
                min-height: 308px;
            }
            & .swiper {
                &-button {
                    &-next {
                        right: 30px;
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
                    min-height: 450px;
                    @media (max-width: 991px) {
                        min-height: 308px;
                    }
                }
                &-slide {
                    height: auto;
                }
            }
        }
    }
</style>