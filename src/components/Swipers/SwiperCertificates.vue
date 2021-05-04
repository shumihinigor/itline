<template lang="">
    <div>
        <Preloader v-if="loading" />
        <swiper v-show="!loading" class="swiper certificates" ref="swiperCertificates" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in certificates" :key="item.id">
                <div class="certificates-swiper__item">
                    <div 
                        class="certificates-swiper__item-image " 
                        :style="{'background-image': 'url(' + require('../../assets/images/certificates/' + item.image) + ')'}"
                    ></div>
                    <div class="d-flex align-items-center justify-content-start">
                        <div class="">
                            <h5 class="certificates-swiper__item-title h5 font-weight-bold mb-16">{{ item.title }}</h5>
                            <p 
                                v-for="(text, index) in item.text" :key="index"
                                class="certificates-swiper__item-text p2 text-grey-2"
                            >{{ text }}</p>
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
    data() {
        return {
            swiperOptions: {
                slidesPerView: 4,
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
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        centeredSlides: false,
                    },
                },
            },
            certificates: [],
            loading: true
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperCertificates.$swiper
        }
    },
    created() {
        this.getCertificates();
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
        getCertificates() {
            this.axios
                .get('/static/certificates.json')
                .then(response => {
                    this.certificates = response.data.data
                    this.loading = false;
                }).catch(error => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        }
    },
}
</script>

<style lang="scss">
    .certificates {
        &-swiper {
            &__item {
                background-color: $white;
                padding: 20px;
                border-radius: 10px;
                height: 100%;
                overflow: hidden;
                @media (max-width: 991px) {
                    margin-bottom: 20px;
                }
                &-image {
                    position: relative;
                    top: -10px;
                    left: -10px;
                    width: calc(100% + 20px);
                    height: 194px;
                    background-repeat: no-repeat;
                    background-position: center top;
                    background-size: cover;
                }
                &-title {
                    margin-bottom: 4px;
                }
                &-text {
                    font-family: $UbuntuLight;
                }
            }
        }
    }
    .swiper {
        &.certificates {
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
                &-slide {
                    height: auto;
                }
                &-wrapper {
                    min-height: 471px;
                    @media (max-width: 991px) {
                        flex-direction: column;
                    }
                }
            }
        }
    }
</style>