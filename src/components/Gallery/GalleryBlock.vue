<template>
    <div class="mb-80">
        <div class="container mb-40">
            <div class="row">
                <div class="col">
                    <h3 class="h3 font-weight-bold mb-0">Галерея</h3>
                </div>
            </div>
        </div>
        <swiper class="swiper gallery" ref="swiperGallery" :options="swiperOptions">
            <swiper-slide>
                <div class="gallery-swiper__item">
                    <div class="d-flex align-items-start">
                        <div class="w-50">
                            <h4 class="gallery-swiper__item-title h4 font-weight-bold mb-16">Производство</h4>
                            <p class="gallery-swiper__item-text p2 mb-0">Собственные производственные площади позволяют нам тестировать оборудование в режиме реального времени. Гибкая технология монтажа предполагает возможность ручной сборки и обработки в печах.</p>
                        </div>
                        <div class="w-50">
                            <div 
                                class="gallery-swiper__item-image" 
                                :style="{'background-image': 'url(' + require('../../assets/images/gallery_1.png') + ')'}"
                            ></div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="gallery-swiper__item">
                    <div class="d-flex align-items-start">
                        <div class="w-50">
                            <h4 class="gallery-swiper__item-title h4 font-weight-bold mb-16">Проекты</h4>
                            <p class="gallery-swiper__item-text p2 mb-0">Собственные производственные площади позволяют нам тестировать оборудование в режиме реального времени. Гибкая технология монтажа предполагает возможность ручной сборки и обработки в печах.</p>
                        </div>
                        <div class="w-50">
                            <div 
                                class="gallery-swiper__item-image" 
                                :style="{'background-image': 'url(' + require('../../assets/images/gallery_2.png') + ')'}"
                            ></div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="gallery-swiper__item">
                    <div class="d-flex align-items-start">
                        <div class="w-50">
                            <h4 class="gallery-swiper__item-title h4 font-weight-bold mb-16">Производство</h4>
                            <p class="gallery-swiper__item-text p2 mb-0">Собственные производственные площади позволяют нам тестировать оборудование в режиме реального времени. Гибкая технология монтажа предполагает возможность ручной сборки и обработки в печах.</p>
                        </div>
                        <div class="w-50">
                            <div 
                                class="gallery-swiper__item-image" 
                                :style="{'background-image': 'url(' + require('../../assets/images/gallery_1.png') + ')'}"
                            ></div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="gallery-swiper__item">
                    <div class="d-flex align-items-start">
                        <div class="w-50">
                            <h4 class="gallery-swiper__item-title h4 font-weight-bold mb-16">Проекты</h4>
                            <p class="gallery-swiper__item-text p2 mb-0">Собственные производственные площади позволяют нам тестировать оборудование в режиме реального времени. Гибкая технология монтажа предполагает возможность ручной сборки и обработки в печах.</p>
                        </div>
                        <div class="w-50">
                            <div 
                                class="gallery-swiper__item-image" 
                                :style="{'background-image': 'url(' + require('../../assets/images/gallery_2.png') + ')'}"
                            ></div>
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
                slidesPerView: 2,
                spaceBetween: 72,
                loop: true,
                centeredSlides: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperGallery.$swiper
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
    .gallery {
        &-swiper {
            &__item {
                background-color: $white;
                padding: 32px 24px;
                border-radius: 10px;
                height: 100%;
                &-image {
                    width: 100%;
                    height: 275px;
                    border-radius: 5px;
                    background-repeat: no-repeat;
                    background-position: right top;
                    background-size: contain;
                }
            }
        }
    }
    .swiper {
        &.gallery {
            height: 339px;
            & .swiper {
                &-slide {
                    &:not(.swiper-slide-active) {
                        &::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            backdrop-filter: blur(3px);
                            background: rgba(255, 255, 255, 0.4);
                        }
                    }
                }
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
            }
        }
    }
</style>