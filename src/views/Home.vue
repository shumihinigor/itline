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
                            <p class="main-banner__text">Комплексные системы информирования</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- facts -->
        <section class="main">
            <div class="container">
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
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-10">
                        <div class="main-options__title">Варианты исполнения</div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-10">
                        <div class="row">
                            <div class="col-4">
                                <div class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-1.png')})` }"
                                    ></div>
                                    <div class="main-options__item-title">
                                        Снижение уровня  травматизма
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-2.png')})` }"
                                    >
                                    </div>
                                    <div class="main-options__item-title">
                                        Логистические  светодиодные табло
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-3.png')})` }"
                                    >
                                    </div>
                                    <div class="main-options__item-title">
                                        Производственные  показатели
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-10">
                        <div class="row">
                            <div class="col-4">
                                <div class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-4.png')})` }"
                                    >
                                        
                                    </div>
                                    <div class="main-options__item-title">
                                        Информационные светодиодные табло
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-5.png')})` }"
                                    >
                                        
                                    </div>
                                    <div class="main-options__item-title">
                                        Часофикация
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="main-options__item">
                                    <div 
                                        class="main-options__item-image"
                                        v-bind:style="{ 'background-image': `url(${require('../assets/options-6.png')})` }"
                                    >
                                    </div>
                                    <div class="main-options__item-title">
                                        Повышение показателей
                                    </div>
                                </div>
                            </div>
                        </div>
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
    $black: #131313;
    .main {
        position: relative;
        margin-bottom: 100px;
        &-banner {
            position: relative;
            display: flex;
            align-items: center;
            max-height: 460px;
            // box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, .05);
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
                background-position: left top;
            }

            &__text {
                position: absolute;
                padding: 0 115px;
                z-index: 1;
                width: 100%;
                margin: auto 0;
                color: #FFFFFF;
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
            &__item{
                position: relative;
                height: 100%;
                margin-bottom: 50px;
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
                        background-position: center -50%;
                        background-repeat: no-repeat;
                    }
                }
                &-title{
                    font-size: 18px;
                    line-height: 24px;
                    color: $black;
                    padding: 20px 25px;
                    background-color: #FFFFFF;
                    font-weight: bold;
                    min-height: 88px;
                }
            }
        }
    }
</style>