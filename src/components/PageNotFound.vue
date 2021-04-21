temp<template>
    <div class="not-found">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="not-found__title"></h1>
                    <h1 class="not-found__subtitle mb-0">Упс</h1>
                    <h3 class="h3 text-grey-2 mb-16">Что-то пошло не так</h3>
                    <h4 class="h4 text-grey-2 mb-32">Ошибка 404 страница не найдена</h4>
                    <button class="btn default" @click="$router.push({ name: 'Home' })">
                        <span class="text-uppercase p4">Вернуться назад</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageNotFound"
}
</script>

<style lang="scss">
    .not-found {
        position: relative;
        text-align: center;
        height: 100%;
        min-height: 370px;
        &__title {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            margin: auto;
            font-family: $TTNormsBlack;
            font-size: 120px;
            line-height: 140%;
            color: #FAFAFA;
            letter-spacing: 0.0075em;
            margin-bottom: 50px;
            background-image: url('../assets/images/404.svg');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
        }
        &__subtitle {
            font-family: $TTNormsBlack;
            font-size: 100px;
            line-height: 140%;
            color: $grey-2;
            letter-spacing: 0.0075em;
        }
    }
    .wrapper {
        &::before,
        &::after {
            display: none;
        }
    }
</style>