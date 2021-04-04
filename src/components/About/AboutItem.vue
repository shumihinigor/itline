<template>
    <div class="about-item">
        <div class="d-flex align-items-center">
            <div class="about-item__image">
                <img :src="require('../../assets/images/' + image)" alt="">
            </div>
            <h5 class="h5 text-grey-1 font-weight-bold mb-0">{{ title }}</h5>
        </div>
        <p class="about-item__text p3 text-grey-3">
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    props: ["title", "text", "image"]
}
</script>

<style lang="scss">
    .about-item {
        background-color: $white;
        padding: 20px;
        border-radius: 10px;
        height: 100%;
        @media (max-width: 991px) {
            height: auto;
            margin-bottom: 20px;
        }
        &__image {
            margin-right: 20px;
        }
        &__text {
            margin-top: 20px;
            margin-bottom: 0;
        }
    }
</style>