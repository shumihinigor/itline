<template lang="">
    <div>
        <Preloader v-if="loading" />
        <swiper v-show="!loading" class="swiper product" ref="swiperProduct" :options="swiperOptions">
            <swiper-slide v-for="(product, index) in products" :key="product.id">
                <router-link 
                    tag="div"
                    :to="{ name: 'ProductsCategory', query: { id: product.id, title: product.title  } }"
                    class="product-swiper__item"
                >
                    <div 
                        @click="changeCategory(product)"
                    >
                        <div class="product-swiper__image">
                            <img :src="require('../../assets/images/' + product.image)" alt="">
                        </div>
                        <div class="product-swiper__block">
                            <h6 class="h6 product-swiper__title text-uppercase font-weight-bold mb-0">{{ product.title }}</h6>
                        </div>
                    </div>
                </router-link >
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
            products: [],
            loading: true
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperProduct.$swiper
        }
    },
    created() {
        this.getProducts();
    },
    mounted() {
        if (window.innerWidth <= 991) {
            this.swiper.navigation.$nextEl[0].hidden = true;
            this.swiper.navigation.$prevEl[0].hidden = true;
        }
    },
    methods: {
        changeCategory(product) {
            this.$emit('change', product);
        },
        getProducts() {
            this.axios
                .get('/static/products.json')
                .then(response => {
                    for (const key in response.data.data) {
                        this.products = this.products.concat(response.data.data[key])
                    }
                    this.loading = false;
                });
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
                & img {
                    width: 100%;
                    @media (max-width: 991px) {
                        border-radius: 10px;
                    }
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
                    height: 250px;
                    @media (max-width: 991px) {
                        height: auto;
                    }
                }
            }
        }
    }
</style>