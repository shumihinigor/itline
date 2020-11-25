<template>
    <div>
        <!-- banner -->
        <section class="main">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="main-banner">
                            <div 
                                class="main-banner__images"
                                v-bind:style="{ 'background-image': `url(${require('../assets/main-banner.png')})` }"
                            ></div>
                            <div class="main-banner__text">
                                <div class="row justify-content-center">
                                    <div class="col-10">
                                        <div class="">Комплексные системы информирования</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- facts -->
        <section class="main">
            <div class="container bg-white">
                <div class="row justify-content-center">
                    <div class="col-10">
                        <div class="row justify-content-around">
                            <div class="col-3">
                                <div class="main-facts">
                                    <div 
                                        class="main-facts__image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/fact-1.svg')})` }"
                                    >
                                    </div>
                                    <div class="main-facts__title">Опыт реализации</div>
                                    <div class="main-facts__text">Поставка оборудования на всей территории РФ</div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="main-facts">
                                    <div 
                                        class="main-facts__image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/fact-2.svg')})` }"
                                    >
                                    </div>
                                    <div class="main-facts__title">Опыт реализации</div>
                                    <div class="main-facts__text">Поставка оборудования на всей территории РФ</div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="main-facts">
                                    <div 
                                        class="main-facts__image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/fact-3.svg')})` }"
                                    >
                                    </div>
                                    <div class="main-facts__title">Опыт реализации</div>
                                    <div class="main-facts__text">Поставка оборудования на всей территории РФ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- options -->
        <section class="main">
            <div class="container bg-white pb-100">
                <div class="row justify-content-center">
                    <div class="col-10">
                        <div class="main-options__title">Варианты исполнения</div>
                    </div>
                </div>
                <div class="row justify-content-center main-options__block">
                    <div class="col-10">
                        <div class="row">
                            <div class="col-4">
                                <a href="javascript:;" class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-1.png')})` }"
                                    ></div>
                                    <div class="main-options__item-title">
                                        Снижение уровня  травматизма
                                    </div>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="javascript:;" class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-2.png')})` }"
                                    >
                                    </div>
                                    <div class="main-options__item-title">
                                        Логистические  светодиодные табло
                                    </div>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="javascript:;" class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-3.png')})` }"
                                    >
                                    </div>
                                    <div class="main-options__item-title">
                                        Производственные  показатели
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center main-options__block">
                    <div class="col-10">
                        <div class="row">
                            <div class="col-4">
                                <a href="javascript:;" class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-4.png')})` }"
                                    >
                                        
                                    </div>
                                    <div class="main-options__item-title">
                                        Информационные светодиодные табло
                                    </div>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="javascript:;" class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-5.png')})` }"
                                    >
                                        
                                    </div>
                                    <div class="main-options__item-title">
                                        Часофикация
                                    </div>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="javascript:;" class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-6.png')})` }"
                                    >
                                    </div>
                                    <div class="main-options__item-title">
                                        Повышение показателей
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- video -->
        <section class="main">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="main-video">
                            <div 
                                class="main-video__bg"
                                v-bind:style="{ 'background-image': `url(${require('../assets/main-video.png')})` }"
                            ></div>
                            <div 
                                class="main-video__photo"
                                v-bind:style="{ 'background-image': `url(${require('../assets/photo.png')})` }"
                            ></div>
                            <div class="main-video__block">
                                <div class="row justify-content-center">
                                    <div class="col-10">
                                        <div class="row align-items-center">
                                            <div class="col-8">
                                                <div class="main-video__block-title">
                                                    Информируя пассажиров,  мы помогаем им соориентироваться в городе.
                                                </div>
                                                <div class="">
                                                    <button class="button-gradient">О Компании</button>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="">
                                                        <button class="main-video__block-play"></button>
                                                    </div>
                                                    <div class="main-video__block-text">Видео о компании</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--  -->
        <section>
            <div class="container pt-100">
                <div class="row">
                    <div class="col"></div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style lang="scss">
    .bg-white{
        background-color: $white;
        box-shadow: 0px 10px 13px 0px rgba(0, 0, 0, .05);
        padding-top: 100px;
    }
    .main {
        position: relative;
        &-banner {
            position: relative;
            display: flex;
            align-items: center;
            max-height: 460px;
            width: calc(100% + 30px);
            left: -15px;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                background: transparentize(#000000, .6);
            }

            &__images {
                width: 100%;
                height: 100%;
                max-height: 460px;
                min-height: 460px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: left bottom;
            }

            &__text {
                position: absolute;
                padding: 0 15px;
                z-index: 1;
                width: 100%;
                margin: auto 0;
                color: $white;
                font-size: 60px;
                line-height: 64px;
                font-weight: bold;
                text-align: left;
            }
        }
        &-facts {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            &__image{
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #f0f0f0;
                border-radius: 100%;
                padding: 20px;
                margin-bottom: 35px;
                width: 131px;
                height: 114px;
                background-size: 80% 80%;
                background-repeat: no-repeat;
                background-position: center center;
            }
            &__title{
                font-size: 18px;
                line-height: 20px;
                text-transform: uppercase;
                color: $black;
                margin-bottom: 15px;
                font-weight: bold;
            }
            &__text{
                font-size: 16px;
                line-height: 24px;
                color: $black;
            }
        }
        &-options{
            &__title{
                font-size: 42px;
                line-height: 48px;
                font-weight: bolder;
                color: $black;
                margin-bottom: 80px;
            }
            &__block{
                position: relative;
                margin-bottom: 50px;
            }
            &__item{
                position: relative;
                display: block;
                width: 100%;
                height: 100%;
                color: $black;
                box-shadow: 0px 10px 13px 0px rgba(0, 0, 0, .05);
                text-decoration: none !important;
                transition: all .2s;
                &:hover{
                    color: #ff3500;
                }
                &-image{
                    position: relative;
                    width: 100%;
                    height: 200px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center bottom;
                    &::after{
                        content: '';
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-image: url('../assets/options-bg.png');
                        background-size: cover;
                        background-position: center -75%;
                        background-repeat: no-repeat;
                    }
                }
                &-title{
                    font-size: 18px;
                    line-height: 24px;
                    padding: 20px 25px;
                    background-color: $white;
                    font-weight: bold;
                    min-height: 88px;
                }
            }
        }
        &-video{
            position: relative;
            display: flex;
            align-items: center;
            max-height: 460px;
            width: calc(100% + 30px);
            left: -15px;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                background: transparentize(#000000, .6);
                backdrop-filter: blur(4px);
            }
            &__bg{
                width: 100%;
                height: 100%;
                max-height: 460px;
                min-height: 460px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: left bottom;
            }
            &__block{
                position: absolute;
                padding: 0 15px;
                z-index: 1;
                width: 100%;
                margin: auto 0;
                &-title{
                    text-align: left;
                    font-size: 36px;
                    line-height: 40px;
                    color: $white;
                    font-weight: bold;
                    margin-bottom: 50px;
                }
                &-text{
                    font-size: 18px;
                    line-height: 24px;
                    color: $white;
                    font-weight: bold;
                }
                &-play{
                    position: relative;
                    width: 50px;
                    height: 50px;
                    font-size: 12px;
                    line-height: 14px;
                    padding: 15px 10px;
                    margin: 0;
                    color: $white;
                    background: linear-gradient(to bottom, #ff9100, #ff3500);
                    border: none;
                    outline: none;
                    text-transform: uppercase;
                    font-weight: bold;
                    border-radius: 100%;
                    margin-right: 15px;
                    &::before{
                        content: '';
                        position: absolute;
                        width: 13px;
                        height: 15px;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        margin: auto;
                        background-image: url('../assets/play.png');
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center center;
                    }
                    &:focus{
                        outline: none;
                        box-shadow: none;
                    }
                    &:hover{
                        background: linear-gradient(to bottom, #ff6e00, #de2c00);
                    }
                }
            }
            &__photo{
                position: absolute;
                right: 50px;
                bottom: 0;
                width: 360px;
                height: 530px;
                background-size: contain;
                background-position: center center;
                background-repeat: no-repeat;
            }
        }
    }
</style>