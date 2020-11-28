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
                                v-bind:style="{ 'background-image': `url(${require('../assets/images/main-banner.png')})` }"
                            ></div>
                            <div class="main-banner__text">
                                <div class="row justify-content-center">
                                    <div class="col-lg-10 col-12">
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
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="bg-white pt-6">
                            <div class="row justify-content-center">
                                <div class="col-lg-10 col-12">
                                    <div class="row justify-content-around">
                                        <FactsItem 
                                            title="Опыт реализации"
                                            text="Поставка оборудования на всей территории РФ"
                                            image="fact-1.svg"
                                        />
                                        <FactsItem 
                                            title="бизнес-сотрудничество"
                                            text=" Интеграция с ведущими платформами телематики"
                                            image="fact-2.svg"
                                        />
                                        <FactsItem 
                                            title="Приоритетные задачи"
                                            text='Соответствие программам "Доступная среда" и "Умный город"'
                                            image="fact-3.svg"
                                        />
                                    </div>
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
                <div class="row">
                    <div class="col">
                        <div class="bg-white pt-5 pb-5">
                            <div class="row justify-content-center">
                                <div class="col-lg-10 col-12">
                                    <h3 class="main-options__title title-h3 mb-5">Варианты исполнения</h3>
                                </div>
                            </div>
                            <div class="row justify-content-center main-options__block mb-5">
                                <div class="col-lg-10 col-12">
                                    <div class="row">
                                        <OptionsCard 
                                            text="Снижение уровня  травматизма"
                                            image="options-1.png"
                                        />
                                        <OptionsCard 
                                            text="Логистические  светодиодные табло"
                                            image="options-2.png"
                                        />
                                        <OptionsCard 
                                            text=" Производственные показатели"
                                            image="options-3.png"
                                        />
                                        <OptionsCard 
                                            text="Информационные светодиодные табло"
                                            image="options-4.png"
                                        />
                                        <OptionsCard 
                                            text="Часофикация"
                                            image="options-5.png"
                                        />
                                        <OptionsCard 
                                            text="Повышение показателей"
                                            image="options-6.png"
                                        />
                                    </div>
                                </div>
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
                                v-bind:style="{ 'background-image': `url(${require('../assets/images/main-video.png')})` }"
                            ></div>
                            <div 
                                class="main-video__photo"
                                v-bind:style="{ 'background-image': `url(${require('../assets/images/photo.png')})` }"
                            ></div>
                            <div class="main-video__block">
                                <div class="row justify-content-center">
                                    <div class="col-lg-10 col-12">
                                        <div class="row align-items-center">
                                            <div class="col-lg-8 col-md-8 col-12">
                                                <h4 class="main-video__block-title title-h4 mb-5">
                                                    Информируя пассажиров,  мы помогаем им соориентироваться в городе.
                                                </h4>
                                                <div class="">
                                                    <button class="button-gradient">О Компании</button>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-12">
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

        <QuoteBlock 
            name="В. Б. Громов"
            position="Генеральный директор"
            text="С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых."
        />

        <!-- blog -->
        <section class="main">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="bg-white pt-6 pb-5">
                            <div class="row justify-content-center">
                                <div class="col-lg-10 col-12">
                                    <h3 class="main-blog__title title-h3 mb-5">Блог</h3>
                                </div>
                            </div>
                            <div class="row justify-content-center main-blog__block">
                                <div class="col-lg-10 col-12">
                                    <div class="row">
                                        <BlogCard 
                                            date="14.08.2020"
                                            text="Обзор универсальных спортивных экранов от производителя ITLINE"
                                            image="blog-1.png"
                                        />
                                        <BlogCard 
                                            date="16.07.2020"
                                            text="Работа ITLINE  в режиме самоизоляции"
                                            image="blog-2.png"
                                        />
                                        <BlogCard 
                                            date="12.07.2020"
                                            text="Установлено табло  в остановочный комплекс Тулы"
                                            image="blog-3.png"
                                        />
                                        <BlogCard 
                                            date="10.07.2020"
                                            text="Выращиваем ценные кадры с детства"
                                            image="blog-4.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- news -->
        <section class="main">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="bg-white pb-6 mb-6">
                            <div class="row justify-content-center">
                                <div class="col-lg-10 col-12">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <div class="main-news__banner">
                                                <div 
                                                    class="main-news__banner-image"
                                                    v-bind:style="{ 'background-image': `url(${require('../assets/images/news-photo.png')})` }"
                                                ></div>
                                                <p class="main-news__banner-text text-xxl">Следите за анонсами  наших обучающих  вебинаров в соцсетях</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">

                                        </div>
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
    import BlogCard from '@/components/BlogCard.vue'
    import QuoteBlock from '@/components/QuoteBlock.vue'
    import OptionsCard from '@/components/OptionsCard.vue'
    import FactsItem from '@/components/FactsItem.vue'

    export default {
        name: 'Home',
        components: {
            BlogCard, QuoteBlock, OptionsCard, FactsItem
        }
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
            @media (max-width: 991px) {
                max-height: 300px;
            }
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
                @media (max-width: 991px) {
                    max-height: 300px;
                    min-height: 300px;
                }
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
            @media (max-width: 991px) {
                padding: 0 15px;
            }
        }
        &-options{
            &__title{
                font-weight: bolder;
                color: $black;
                @media (max-width: 991px) {
                    padding: 0 15px;
                }
            }
        }
        &-video{
            position: relative;
            display: flex;
            align-items: center;
            max-height: 460px;
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
                @media (max-width: 991px) {
                    & .button-gradient{
                        margin-bottom: 2rem;
                    }
                }
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
                        background-image: url('../assets/images/play.png');
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
                @media (max-width: 991px) {
                    width: 100%;
                    height: 80%;
                    right: 0;
                    background-position: 50px center;
                }
            }
        }
        &-blog{
            &__title{
                font-weight: bolder;
                color: $black;
                @media (max-width: 991px) {
                    padding: 0 15px;
                }
            }
        }
        &-news{
            &__banner{
                position: relative;
                display: flex;
                align-items: center;
                background: $orange;
                border-radius: 8px;
                padding: 20px;
                height: 270px;
                min-height: 270px;
                background-image: url('../assets/images/news-bg.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                overflow: hidden;
                @media (max-width: 767px) {
                    align-items: flex-end;
                }
                &::before {
                    content: '';
                    position: absolute;
                    z-index: 1;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    border-radius: 8px;
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 53, 0, 0.7);
                    -webkit-backdrop-filter: blur(10px);
                    backdrop-filter: blur(10px);
                }
                &::after {
                    content: '';
                    position: absolute;
                    z-index: 0;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    border-radius: 8px;
                    width: 100%;
                    height: 100%;
                    background-image: url('../assets/images/news-circle.png');
                    background-size: 200% 200%;
                    background-repeat: no-repeat;
                    background-position: center center;
                }
                &-image{
                    position: absolute;
                    z-index: 2;
                    bottom: 0;
                    left: 0;
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: left bottom;
                    @media (max-width: 991px) {

                    }
                }
                &-text{
                    position: relative;
                    z-index: 3;
                    color: $white;
                    padding-left: 40%;
                    @media (max-width: 767px) {
                        padding-left: 0;
                    }
                }
            }
        }
    }
</style>