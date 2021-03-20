<template>
    <div class="product-item">
        <div class="product-image">
            <img :src="require('../../assets/images/' + image)" alt="">
        </div>
        <div class="product-block">
            <h6 class="h6 product-title text-uppercase font-weight-bold">{{ title }}</h6>
            <p class="p2 product-text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {

    props: ["title", "text", "image"]
    
}
</script>

<style lang="scss">
    .product {
        &-item {
            background-color: $white;
            border-radius: 10px;
            margin-bottom: 32px;
            overflow: hidden;
        }
        &-image {
            & img {
                width: 100%;
            }
        }
        &-block {
            padding: 20px;
        }
        &-title {
            color: $grey-1;
            margin-bottom: 10px;
        }
        &-text {
            color: $grey-2;
            margin-bottom: 0;
        }
    }
</style>