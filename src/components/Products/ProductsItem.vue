<template>
    <div class="product-item">
        <div class="product-image">
            <img :src="require('../../assets/images/' + image)" alt="">
        </div>
        <div class="product-block">
            <h6 v-if="title" class="h6 product-title text-uppercase font-weight-bold">{{ title }}</h6>
            <p v-if="text" class="p2 product-text">{{ text }}</p>
            <h4 v-if="price" class="h4 font-weight-bold mb-0">{{ price }}</h4>
        </div>
    </div>
</template>

<script>
export default {

    props: ["title", "text", "image", "price"]
    
}
</script>

<style lang="scss">
    .product {
        &-item {
            background-color: $white;
            border-radius: 10px;
            height: 100%;
            overflow: hidden;
            cursor: pointer;
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