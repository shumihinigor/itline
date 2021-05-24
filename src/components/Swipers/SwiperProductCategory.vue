<template lang="">
    <div>
        <Preloader v-if="loading" />
        <h3 class="h3 mb-32">Категории</h3>
        <swiper v-show="!loading" class="swiper product" ref="swiperProduct" :options="swiperOptions">
            <swiper-slide v-for="(product, index) in products" :key="product.id">
                <div class="product-swiper__item">
                    <div class="" @click="changeCategory(product.alias)">
                        <div 
                            class="product-swiper__image"
                            v-lazy:background-image="'/' + product.image"
                        >
                        </div>
                        <div class="product-swiper__block mt-auto">
                            <h6 class="h6 product-swiper__title text-uppercase font-weight-bold mb-0">{{ product.name }}</h6>
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
    props: ["products"],
    data() {
        return {
            swiperOptions: {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                breakpoints: {
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    375: {
                        slidesPerView: 1.25,
                        spaceBetween: 20,
                        centeredSlides: false,
                    },
                },
            },
            loading: true
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperProduct.$swiper
        }
    },
    mounted() {
        this.loading = false;
        if (window.innerWidth <= 991) {
            this.swiper.navigation.$nextEl[0].hidden = true;
            this.swiper.navigation.$prevEl[0].hidden = true;
        }
    },
    methods: {
        changeCategory(id) {
            if (this.$route.params.id !== id) {
                this.$router.push({ name: 'ProductsCategoryList', params: { id: id } });
                setTimeout(() => {
                    this.$emit("change-category", id);
                }, 0);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .product {
        &-swiper {
            &__item {
                background-color: $white;
                border-radius: 10px;
                height: 100%;
                overflow: hidden;
                cursor: pointer;
                @media (max-width: 991px) {
                    padding: 20px;
                }
            }
            &__block {
                padding: 20px;
                @media (max-width: 991px) {
                    padding-bottom: 0;
                }
            }
            &__image {
                min-height: 190px;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                @media (max-width: 991px) {
                    border-radius: 10px;
                }
            }
        }
    }
    .swiper {
        &.product {
            margin-bottom: 0;
            min-height: 250px;
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
                    min-height: 250px;
                    @media (max-width: 991px) {
                        min-height: auto;
                        flex-direction: column;
                    }
                }
                &-slide {
                    min-height: 250px;
                    height: auto;
                    @media (max-width: 991px) {
                        height: auto;
                    }
                }
            }
        }
    }
</style>