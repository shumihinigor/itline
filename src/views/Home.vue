<template>
    <div>
        <!-- banner -->
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="main-banner">
                            <div class="main-banner__images"></div>
                            <p class="main-banner__text">Комплексные системы информирования</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- facts -->
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        
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
    .main {
        position: relative;

        &-banner {
            position: relative;
            display: flex;
            align-items: center;
            max-height: 460px;
            margin-bottom: 100px;

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
                background-image: url('../assets/main-banner.png')
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

        &-facts {}
    }
</style>