<template>
    <section class="main">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="bg-white pt-6">
                        <div class="row align-items-center">
                            <div class="col-lg-7 col-12 mb-lg-0 mb-5">
                                <div 
                                    class="main-feedback__image"
                                    :style="{'background-image': 'url(' + require('../../assets/images/' + image) + ')'}"
                                ></div>
                            </div>
                            <div class="col-lg-4 col-12">
                                <h5 class="main-feedback__title text-bold title-h5 mb-4">Готовы ответить на все ваши вопросы!</h5>
                                <p class="main-feedback__name text-xxl text-bold mb-3">{{ name }}</p>
                                <div class="main-feedback__contacts">
                                    <p class="text-l mb-1">
                                        <a href="tel:88002002815">8 800 200-28-15</a> <span>(доб. 136)</span>
                                    </p>
                                    <p class="text-l mb-1">
                                        <a href="tel:84852594937">8 (4852) 59-49-37</a>
                                    </p>
                                    <p class="text-l mb-1">
                                        <a href="mailto:pps@it-line.info">pps@it-line.info</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
    .main{
        &-feedback{
            &__image{
                position: relative;
                width: 100%;
                height: 370px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center bottom;
            }
            &__contacts{
                @media (max-width: 991px) {
                    padding-left: 15px;
                    padding-right: 15px;
                }
                & a{
                    text-decoration: none;
                    color: $black;
                }
            }
            &__title{
                @media (max-width: 991px) {
                    padding-left: 15px;
                    padding-right: 15px;
                }
            }
            &__name{
                @media (max-width: 991px) {
                    padding-left: 15px;
                    padding-right: 15px;
                }
            }
        }
    }
</style>