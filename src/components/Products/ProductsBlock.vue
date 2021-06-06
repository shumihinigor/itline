<template>
    <section class="product">
        <Preloader v-if="loading" />
        <div v-else class="container d-flex flex-column">
            <div class="row">
                <div 
                    class="col-lg-3 col-md-6 col-12 mb-32" 
                    v-for="(product, idx) in products" 
                    :key="idx" 
                >
                    <div class="h-100" @click="goToProductCategoryList(product)">
                        <ProductsItem 
                            :title="product.name" 
                            :image="'/' + product.image"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import ProductsItem from './ProductsItem.vue'

import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters, mapActions } = createNamespacedHelpers("products");

export default {
    components: {
        ProductsItem, Preloader
    },
    data() {
        return {
            loading: true
        }
    },
    computed: {
        ...mapGetters([
            'products'
        ]),
    },
    created() {
        this.getProducts().then(() => this.loading = false);
    },
    methods: {
        ...mapActions(['getProducts']),
        goToProductCategoryList(product) {
            this.$router.push({ name: 'ProductsCategoryList', params: { id: product.alias } });
        }
    },
}
</script>

<style lang="scss">
    .product {
        margin-bottom: 68px;
        
    }
</style>