<template>
    <!-- quote -->
    <section class="main">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="bg-white pt-5">
                        <div 
                            class="main-quote"
                            v-bind:style="{ 'background-image': `url(${require('../assets/images/quote.png')})` }"
                        >
                            <div class="row">
                                <div class="col-lg-9 col-12 offset-lg-2">
                                    <p class="main-quote__text text-xl mb-4">
                                        {{ text }}
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-9 col-12 offset-lg-2">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6 col-12 mb-3">
                                            <div class="d-flex align-items-center">
                                                <a href="javascript:;" class="link-orange">
                                                    Смотреть все
                                                    <i 
                                                        class="icon-arrow"
                                                        v-bind:style="{ 'background-image': `url(${require('../assets/images/right-arrow.png')})` }"
                                                    ></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-12 text-right mb-3">
                                            <p class="text-l">
                                                {{ name }}
                                                <br>
                                                {{ position }}
                                            </p>
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
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        position: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
    .main{
        &-quote{
            position: relative;
            display: flex;
            flex-direction: column;
            max-height: 460px;
            padding: 110px 0 35px 0;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: letf bottom;
            @media (max-width: 991px) {
                padding: 110px 15px 35px 15px
            }
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
                    background-image: url('../assets/images/quotes.png');
                    @media (max-width: 991px) {
                        left: 15px;
                        top: -80px;
                    }
                }
            }
        }
    }
</style>