<template lang="">
    <swiper class="swiper feedback" ref="swiperFeedback" :options="swiperOptions">
        <swiper-slide>
            <div class="feedback-swiper__item">
                <div class="d-flex align-items-center justify-content-start mb-24">
                    <div 
                        class="feedback-swiper__item-image mr-16" 
                        :style="{'background-image': 'url(' + require('../../assets/images/feedback_1.png') + ')'}"
                    ></div>
                    <div class="">
                        <h5 class="feedback-swiper__item-name h5 font-weight-bold">Олег Гаврилов</h5>
                        <p class="feedback-swiper__item-date p4 mb-0">15 апреля 2020 в 10:43</p>
                    </div>
                </div>
                <div class="">
                    <p class="p3 text-grey-2 mb-0">Хочу сказать пару приятных слов о компании. У них отличная продукция. Мы уже столько коттеджей построили и все хорошо, нигде никаких сколов и прочего брака. Наши умелые руки и ваш хороший материал сделали отличные дома и это очень радует. Так что всем кто собирается строит дом, советую брать кирпич у них!</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="feedback-swiper__item">
                <div class="d-flex align-items-center justify-content-start mb-24">
                    <div 
                        class="feedback-swiper__item-image mr-16" 
                        :style="{'background-image': 'url(' + require('../../assets/images/feedback_2.png') + ')'}"
                    ></div>
                    <div class="">
                        <h5 class="feedback-swiper__item-name h5 font-weight-bold">Семен Ефименко</h5>
                        <p class="feedback-swiper__item-date p4 mb-0">15 апреля 2020 в 10:43</p>
                    </div>
                </div>
                <div class="">
                    <p class="p3 text-grey-2 mb-0">Хочу сказать пару приятных слов о компании. У них отличная продукция. Мы уже столько коттеджей построили и все хорошо, нигде никаких сколов и прочего брака. Наши умелые руки и ваш хороший материал сделали отличные дома и это очень радует. Так что всем кто собирается строит дом, советую брать кирпич у них!</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="feedback-swiper__item">
                <div class="d-flex align-items-center justify-content-start mb-24">
                    <div 
                        class="feedback-swiper__item-image mr-16" 
                        :style="{'background-image': 'url(' + require('../../assets/images/feedback_3.png') + ')'}"
                    ></div>
                    <div class="">
                        <h5 class="feedback-swiper__item-name h5 font-weight-bold">Сергей Афанасьев</h5>
                        <p class="feedback-swiper__item-date p4 mb-0">15 апреля 2020 в 10:43</p>
                    </div>
                </div>
                <div class="">
                    <p class="p3 text-grey-2 mb-0">Хочу сказать пару приятных слов о компании. У них отличная продукция. Мы уже столько коттеджей построили и все хорошо, нигде никаких сколов и прочего брака. Наши умелые руки и ваш хороший материал сделали отличные дома и это очень радует. Так что всем кто собирается строит дом, советую брать кирпич у них!</p>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper> 
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
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperFeedback.$swiper
        }
    },
    mounted() {
        if (window.innerWidth <= 991) {
            this.swiper.navigation.destroy();
            this.swiper.navigation.$nextEl[0].hidden = true;
            this.swiper.navigation.$prevEl[0].hidden = true;
            this.swiper.destroy(true, false)
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
                    background-size: contain;
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
                    @media (max-width: 991px) {
                        flex-direction: column;
                    }
                }
            }
        }
    }
</style>