<template>
    <section class="product">
        <Preloader v-if="loading" />
        <div v-else class="container d-flex flex-column">
            <div :class="['row', 'order-' + index]" v-for="(item, index) in products" :key="index">
                <div class="col-lg-3 col-12 mb-32" v-for="(product, idx) in item" :key="idx">
                    <ProductsItem 
                        :title="product.title" 
                        :text="product.text" 
                        :image="product.image"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import ProductsItem from './ProductsItem.vue'

export default {
    components: {
        ProductsItem, Preloader
    },
    data() {
        return {
            loading: true,
            products: []
        }
    },
    created() {
        this.getProducts()
    },
    methods: {
        getProducts() {
            this.axios
                .get('/static/products.json')
                .then(response => {
                    this.products = response.data.data;
                    this.loading = false;
                });
        }
    },
}
</script>

<style lang="scss">
    .product {
        margin-bottom: 68px;
        
    }
</style>