<template lang="">
    <div>
        <Preloader v-if="loading" />
        <swiper v-show="!loading" class="swiper history" ref="swiperHistory" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in history" :key="item.id">
                <div class="history-swiper__item">
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="history-swiper__item-date">
                            {{ item.date }}
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-9 col-12">
                                <div class="">
                                    <p class="history-swiper__item-text p2 text-grey-2 mb-16">{{ item.text }}</p>
                                    <div class="">
                                        <ul class="list p2">
                                            <li class="p2" v-for="(item, index) in item.list" :key="index">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);
import Preloader from '@/components/Preloader/Preloader'
import 'swiper/swiper-bundle.css';
// TODO: поправить даты
export default {
    components: {
        Swiper,
        Pagination,
        SwiperSlide,
        Preloader
    },
    data() {
        return {
            history: [],
            loading: true,
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 50,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet(index, className) {
                        let arrDate = [
                            "2008",
                            "2010",
                            "2011",
                            "2012",
                            "2015",
                            "2018-2019",
                            "2020"
                        ]
                        return `
                            <span class="${className} swiper-pagination-bullet-custom">
                                <span class="swiper-pagination-text">${arrDate[index]}</span>
                            </span>
                        `
                    }
                },
                breakpoints: {
                    992: {
                        slidesPerView: 1,
                        spaceBetween: 50,
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
            return this.$refs.swiperHistory.$swiper
        }
    },
    created() {
        this.getHistory();
    },
    mounted() {},
    methods: {
        getHistory() {
            this.axios
                .get('/static/history.json')
                .then(response => {
                    this.history = response.data.data
                    this.loading = false;
                }).catch(error => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        }
    },
}
</script>

<style lang="scss">
    .history {
        &-swiper {
            &__item {
                display: flex;
                padding: 70px 200px;
                height: 100%;
                overflow: hidden;
                @media (max-width: 991px) {
                    padding: 30px 20px;
                }
                &-date {
                    position: absolute;
                    z-index: -1;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: auto;
                    backdrop-filter: blur(10px);
                    font-size: 340px;
                    line-height: 100%;
                    font-family: $TTNormsBold;
                    color: transparentize($orange, 0.85);
                    @media (max-width: 991px) {
                        font-size: 130px;
                    }
                }
                &-text {
                    font-family: $UbuntuLight;
                }
            }
        }
    }
    .swiper {
        &.history {
            display: flex;
            flex-direction: column-reverse;
            padding-top: 0;
            @media (max-width: 991px) {
                padding-top: 0;
            }
            & .swiper {
                &-button {
                    &-next {
                        top: 60%;
                        right: 0;
                        width: 140px;
                        &::after {
                            content: '';
                            width: 140px;
                            height: 40px;
                            min-width: 140px;
                            min-height: 40px;
                            font-family: serif;
                            background-image: url('../../assets/images/arrow_next_orange.svg');
                            background-repeat: no-repeat;
                            background-position: center center;
                            background-size: 140px 40px;
                        }
                        @media (max-width: 991px) {
                            top: auto;
                            bottom: 0;
                            width: 103px;
                            &::after {
                                width: 103px;
                                height: 32px;
                                min-width: 103px;
                                min-height: 32px;
                                background-size: 103px 32px;
                            }
                        }
                    }
                    &-prev {
                        top: 60%;
                        left: 0;
                        width: 140px;
                        &::after {
                            content: '';
                            width: 140px;
                            height: 40px;
                            min-width: 140px;
                            min-height: 40px;
                            font-family: serif;
                            background-image: url('../../assets/images/arrow_prev_orange.svg');
                            background-repeat: no-repeat;
                            background-position: center center;
                            background-size: 140px 40px;
                        }
                        @media (max-width: 991px) {
                            top: auto;
                            bottom: 0;
                            width: 103px;
                            &::after {
                                width: 103px;
                                height: 32px;
                                min-width: 103px;
                                min-height: 32px;
                                background-size: 103px 32px;
                            }
                        }
                    }
                }
                &-slide {
                    height: auto;
                }
                &-wrapper {
                    min-height: 471px;
                }
                &-pagination {
                    position: relative;
                    z-index: 999;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    bottom: auto;
                    top: 0;
                    padding: 20px;
                    @media (max-width: 991px) {
                        overflow: auto;
                    }
                    // &::before {
                    //     content: '';
                    //     position: absolute;
                    //     z-index: -1;
                    //     top: -30px;
                    //     left: 0;
                    //     bottom: 0;
                    //     margin: auto;
                    //     display: block;
                    //     width: 100%;
                    //     height: 1px;
                    //     background-color: transparentize($orange, 0.80);
                    // }
                    // &::after {
                    //     content: '';
                    //     position: absolute;
                    //     z-index: -1;
                    //     top: -30px;
                    //     right: 0;
                    //     bottom: 0;
                    //     margin: auto;
                    //     display: block;
                    //     width: 100%;
                    //     height: 1px;
                    //     background-color: transparentize($orange, 0.80);
                    // }
                    &-text {
                        font-size: 16px;
                        line-height: 19px;
                        font-family: $TTNormsBold;
                        color: $orange;
                        margin-top: 10px;
                    }
                    &-bullet {
                        position: relative;
                        z-index: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        min-height: 70px;
                        min-width: 85px;
                        background: transparent;
                        text-align: center;
                        opacity: 1;
                        &::before {
                            content: '';
                            position: relative;
                            z-index: 1;
                            display: block;
                            margin: auto;
                            width: 20px;
                            height: 20px;
                            background-color: transparentize($orange, 0.80);
                            border-radius: 50%;
                        }
                        &::after {
                            content: '';
                            position: absolute;
                            z-index: -1;
                            top: -30px;
                            // right: 0;
                            bottom: 0;
                            margin: auto;
                            display: block;
                            width: 50vw;
                            height: 1px;
                            background-color: transparentize($orange, 0.80);
                        }
                        &-active {
                            &::before {
                                width: 40px;
                                height: 40px;
                                background-color: $orange;
                                box-shadow: 0px 0px 10px rgba(255, 105, 41, 0.5);
                            }
                        }
                    }
                }
            }
        }
    }
</style>