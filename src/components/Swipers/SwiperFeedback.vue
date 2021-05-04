<template lang="">
    <div>
        <Preloader v-if="loading" />
        <swiper v-show="!loading" class="swiper feedback" ref="swiperFeedback" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in reviews" :key="item.id">
                <div class="feedback-swiper__item">
                    <div class="d-flex align-items-center justify-content-start mb-24">
                        <div 
                            v-if="item.image"
                            class="feedback-swiper__item-image mr-16" 
                            :style="{'background-image': 'url(' + require('../../assets/images/' + item.image) + ')'}"
                        ></div>
                        <div class="">
                            <h5 class="feedback-swiper__item-name h5 font-weight-bold">{{ item.name }}</h5>
                            <p class="feedback-swiper__item-date p4 mb-0">{{ item.date }}</p>
                        </div>
                    </div>
                    <div class="">
                        <p class="p3 text-grey-2 mb-0">{{ item.text }}</p>
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
    data() {
        return {
            swiperOptions: {
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                breakpoints: {
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        centeredSlides: false,
                    },
                },
            },
            reviews: [],
            loading: true
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperFeedback.$swiper
        }
    },
    created() {
        this.getReviews();
    },
    mounted() {
        if (window.innerWidth <= 991) {
            this.swiper.navigation.destroy();
            this.swiper.navigation.$nextEl[0].hidden = true;
            this.swiper.navigation.$prevEl[0].hidden = true;
            this.swiper.destroy(true, false)
        }
    },
    methods: {
        getReviews() {
            this.axios
                .get('/static/reviews.json')
                .then(response => {
                    this.reviews = response.data.data
                    this.loading = false;
                }).catch(error => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        }
    },
}
</script>

<style lang="scss">
    .feedback {
        &-swiper {
            &__item {
                background-color: $white;
                padding: 32px 24px;
                border-radius: 10px;
                height: 100%;
                @media (max-width: 991px) {
                    padding: 20px;
                    margin-bottom: 20px;
                }
                &-image {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: cover;
                }
                &-name {
                    margin-bottom: 4px;
                }
                &-date {
                    font-family: $UbuntuLight;
                }
            }
        }
    }
    .swiper {
        &.feedback {
            min-height: 308px;
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
                    min-height: 308px;
                    @media (max-width: 991px) {
                        min-height: auto;
                        flex-direction: column;
                    }
                }
                &-slide {
                    height: auto;
                }
            }
        }
    }
</style>