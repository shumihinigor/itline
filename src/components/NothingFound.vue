<template>
    <div class="nothing-found">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="nothing-found__title">Ничего не найдено</h1>
                    <h3 class="h3 text-grey-2 mb-32">Результатов поиска нет :(</h3>
                    <button class="btn default" @click="$router.push({ name: pushName || 'Home' })">
                        <span class="text-uppercase p4">Вернуться назад</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["pushName"]
    
}
</script>

<style lang="scss">
    .nothing-found {
        position: relative;
        text-align: center;
        &__title {
            font-family: $TTNormsBlack;
            font-size: 5vw;
            line-height: 140%;
            color: #FAFAFA;
            text-shadow: -8px -8px 8px #FFFFFF, 8px 8px 8px rgba(135, 135, 135, 0.25);
            letter-spacing: 0.0075em;
            margin-bottom: 50px;
            @media (max-width: 991px) {
                font-size: 10vw;
                line-height: 100%;
                margin-bottom: 25px;
            }
        }
    }
</style>