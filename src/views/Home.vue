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
                                        <h1 class="title-h1">Комплексные системы информирования</h1>
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
            <div class="container bg-white pt-6">
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
                                    <p class="main-facts__title text-xl mb-3">Опыт реализации</p>
                                    <p class="main-facts__text text-l">Поставка оборудования на всей территории РФ</p>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="main-facts">
                                    <div 
                                        class="main-facts__image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/fact-2.svg')})` }"
                                    >
                                    </div>
                                    <p class="main-facts__title text-xl mb-3">Опыт реализации</p>
                                    <p class="main-facts__text text-l">Поставка оборудования на всей территории РФ</p>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="main-facts">
                                    <div 
                                        class="main-facts__image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/fact-3.svg')})` }"
                                    >
                                    </div>
                                    <p class="main-facts__title text-xl mb-3">Опыт реализации</p>
                                    <p class="main-facts__text text-l">Поставка оборудования на всей территории РФ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- options -->
        <section class="main">
            <div class="container bg-white pt-6 pb-6">
                <div class="row justify-content-center">
                    <div class="col-10">
                        <h3 class="main-options__title title-h3 mb-5">Варианты исполнения</h3>
                    </div>
                </div>
                <div class="row justify-content-center main-options__block mb-5">
                    <div class="col-10">
                        <div class="row">
                            <div class="col-4 mb-5">
                                <a href="javascript:;" class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-1.png')})` }"
                                    ></div>
                                    <p class="main-options__item-title text-xl">
                                        Снижение уровня  травматизма
                                    </p>
                                </a>
                            </div>
                            <div class="col-4 mb-5">
                                <a href="javascript:;" class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-2.png')})` }"
                                    >
                                    </div>
                                    <p class="main-options__item-title text-xl">
                                        Логистические  светодиодные табло
                                    </p>
                                </a>
                            </div>
                            <div class="col-4 mb-5">
                                <a href="javascript:;" class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-3.png')})` }"
                                    >
                                    </div>
                                    <p class="main-options__item-title text-xs">
                                        Производственные  показатели
                                    </p>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="javascript:;" class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-4.png')})` }"
                                    >
                                        
                                    </div>
                                    <p class="main-options__item-title text-xl">
                                        Информационные светодиодные табло
                                    </p>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="javascript:;" class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-5.png')})` }"
                                    >
                                        
                                    </div>
                                    <p class="main-options__item-title text-xl">
                                        Часофикация
                                    </p>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="javascript:;" class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-6.png')})` }"
                                    >
                                    </div>
                                    <p class="main-options__item-title text-xl">
                                        Повышение показателей
                                    </p>
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
                                                <h4 class="main-video__block-title title-h4 mb-5">
                                                    Информируя пассажиров,  мы помогаем им соориентироваться в городе.
                                                </h4>
                                                <div class="">
                                                    <button class="button-gradient">О Компании</button>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="">
                                                        <button class="main-video__block-play"></button>
                                                    </div>
                                                    <p class="main-video__block-text text-xl">Видео о компании</p>
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

        <!-- quote -->
        <section>
            <div class="container bg-white pt-6">
                <div class="row">
                    <div class="col">
                        <div 
                            class="main-quote"
                            v-bind:style="{ 'background-image': `url(${require('../assets/quote.png')})` }"
                        >
                            <div class="row">
                                <div class="col-9 offset-2">
                                    <p class="main-quote__text text-xl mb-4">
                                        С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых.
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-9 offset-2">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:;" class="link-orange">
                                                Смотреть все
                                                <i 
                                                    class="icon-arrow"
                                                    v-bind:style="{ 'background-image': `url(${require('../assets/right-arrow.png')})` }"
                                                ></i>
                                            </a>
                                        </div>
                                        <p class="text-l">
                                            В. Б. Громов
                                            <br>
                                            Генеральный директор
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- blog -->
        <section class="main">
            <div class="container bg-white pt-6 pb-6">
                <div class="row justify-content-center">
                    <div class="col-10">
                        <h3 class="main-blog__title title-h3 mb-5">Блог</h3>
                    </div>
                </div>
                <div class="row justify-content-center main-blog__block">
                    <div class="col-10">
                        <div class="row">
                            <div class="col-3">
                                <a href="javascript:;" class="main-blog__item">
                                    <div 
                                        class="main-blog__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/blog-1.png')})` }"
                                    ></div>
                                    <div class="main-blog__item-title">
                                        <p class="text-s text-gray mb-1 text-s">
                                            14.08.2020
                                        </p>
                                        <p class="text-m">
                                            Обзор универсальных спортивных экранов от производителя ITLINE
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="col-3">
                                <a href="javascript:;" class="main-blog__item">
                                    <div 
                                        class="main-blog__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/blog-2.png')})` }"
                                    >
                                    </div>
                                    <div class="main-blog__item-title">
                                        <p class="text-s text-gray mb-1 text-s">
                                            16.07.2020
                                        </p>
                                        <p class="text-m">
                                            Работа ITLINE  в режиме самоизоляции
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="col-3">
                                <a href="javascript:;" class="main-blog__item">
                                    <div 
                                        class="main-blog__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/blog-3.png')})` }"
                                    >
                                    </div>
                                    <div class="main-blog__item-title">
                                        <p class="text-s text-gray mb-1 text-s">
                                            12.07.2020
                                        </p>
                                        <p class="text-m">
                                            Установлено табло  в остановочный комплекс Тулы
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="col-3">
                                <a href="javascript:;" class="main-blog__item">
                                    <div 
                                        class="main-blog__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/blog-4.png')})` }"
                                    >
                                    </div>
                                    <div class="main-blog__item-title text-m">
                                        <p class="text-s text-gray mb-1 text-s">
                                            10.07.2020
                                        </p>
                                        <p class="">
                                            Выращиваем ценные кадры с детства
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--  -->
        <section>
            <div class="container pt-6">
                <div class="row">
                    <div class="co">

                    </div>
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
                text-transform: uppercase;
                color: $black;
                font-weight: bold;
            }
        }
        &-options{
            &__title{
                font-weight: bolder;
                color: $black;
            }
            &__block{
                position: relative;
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
                    padding: 20px;
                    background-color: $white;
                    font-weight: bold;
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
                    color: $white;
                    font-weight: bold;
                }
                &-text{
                    color: $white;
                    font-weight: bold;
                }
                &-play{
                    position: relative;
                    width: 50px;
                    height: 50px;
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
        &-quote{
            position: relative;
            display: flex;
            flex-direction: column;
            max-height: 460px;
            width: calc(100% + 30px);
            left: -15px;
            padding: 110px 0 35px 0;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: letf bottom;
            &__text{
                color: $black;
                font-weight: bold;
                &::before{
                    content: '';
                    position: absolute;
                    top: -70px;
                    left: -25px;
                    width: 79px;
                    height: 60px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-image: url('../assets/quotes.png');
                }
            }
        }
        &-blog{
            &__title{
                font-weight: bolder;
                color: $black;
            }
            &__block{
                position: relative;
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
                }
                &-title{
                    padding: 20px;
                    background-color: $white;
                    font-weight: bold;
                }
            }
        }
    }
</style>