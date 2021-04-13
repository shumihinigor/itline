<template>
    <div class="product-page mb-80">
        <Preloader v-if="loading" />
        <div v-show="!loading" class="container">
            <div class="row mb-64">
                <div class="col">
                    <h1 class="h1 mb-0">{{ product.title }}</h1>
                </div>
            </div>
            <div class="row mb-32">
                <div class="col">
                    <SwiperProduct />
                </div>
            </div>
            <div class="row mb-80 main-content">
                <div class="col-lg-3 col-12">
                    <ProductsFilter 
                        class="sidebar"
                    />
                </div>
                <div class="col-lg-9 col-12">
                    <div class="content">
                        <p v-for="(item, index) in 10" :key="index">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque eum, consequatur voluptatibus quas natus sunt placeat nihil enim ea quaerat ratione modi voluptatum sit, a ipsa, magni quisquam velit!
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <SwiperProductCategory />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import ProductsFilter from '@/components/Products/ProductsFilter'
import SwiperProduct from '@/components/Swipers/SwiperProduct'
import SwiperProductCategory from '@/components/Swipers/SwiperProductCategory'

import StickySidebar from "../../../node_modules/sticky-sidebar-v2/dist/sticky-sidebar"


export default {
    name: "ProductsPage",
    components: {
        Preloader, SwiperProduct, SwiperProductCategory, ProductsFilter
    },
    data() {
        return {
            products: {},
            product: {},
            loading: true
        }
    },
    created() {
        this.getProduct(this.$route.query.id)
    },
    mounted() {
        var sidebar = new StickySidebar('.sidebar', {
            topSpacing: 92,
            bottomSpacing: 0,
            containerSelector: '.main-content'
        });
    },
    methods: {
        getProduct(id) {
            let productsArr = []
            this.axios
                .get('/static/products.json')
                .then(response => {
                    for (const key in response.data.data) {
                        productsArr = productsArr.concat(response.data.data[key])
                    }
                    this.product = productsArr.find((item) => {
                        return item.id == id
                    });
                    this.loading = false;
                });
        }
    }
}
</script>

<style lang="scss">

</style>