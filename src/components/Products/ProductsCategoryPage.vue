<template>
    <div class="product-page mb-80">
        <Preloader v-if="loading" />
        <div v-else class="container">
            <div class="row mb-64">
                <div class="col">
                    <h1 class="h1 mb-0">{{ category.title }}</h1>
                </div>
            </div>
            <div class="row mb-32">
                <div class="col">
                    <SwiperProduct
                        v-if="product.swiper.length"
                        :slides="product.swiper"
                    />
                </div>
            </div>
            <div class="row mb-80 main-content">
                <div class="col-lg-3 col-12">
                    <ProductsFilter 
                        class="sidebar"
                        @change="changeFilter"
                        :products="products"
                    />
                </div>
                <div class="col-lg-9 col-12">
                    <div class="content">
                        <!-- series -->
                        <div class="row mb-32">
                            <div class="col">
                                <h3 class="h3 mb-16">{{ category.series.title }}</h3>
                                <p class="p2 mb-8" v-for="(item, index) in category.series.text" :key="index">
                                    {{ item }}
                                </p>
                            </div>
                        </div>
                        <div class="row mb-56">
                            <div class="col-lg-4 col-md-6 col-12 mb-32" v-for="(category, idx) in category.series.items" :key="idx">
                                <ProductsItem 
                                    :title="category.title" 
                                    :text="category.text" 
                                    :image="category.image"
                                />
                            </div>
                        </div>

                        <!-- solutions -->
                        <div class="row mb-32">
                            <div class="col">
                                <h3 class="h3 mb-16">{{ category.solutions.title }}</h3>
                                <p class="p2 mb-8" v-for="(item, index) in category.solutions.text" :key="index">
                                    {{ item }}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12 mb-32" v-for="(category, idx) in category.solutions.items" :key="idx">
                                <ProductsItem 
                                    :title="category.title" 
                                    :text="category.text" 
                                    :image="category.image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-80" v-if="category.content">
                <div class="col">
                    <div class="" v-html="category.content"></div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <SwiperProductCategory @change="changeCategory" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import ProductsFilter from '@/components/Products/ProductsFilter'
import ProductsItem from '@/components/Products/ProductsItem'
import SwiperProduct from '@/components/Swipers/SwiperProduct'
import SwiperProductCategory from '@/components/Swipers/SwiperProductCategory'

import StickySidebar from "../../../node_modules/sticky-sidebar-v2/dist/sticky-sidebar"


export default {
    name: "ProductsCategoryPage",
    components: {
        Preloader, SwiperProduct, SwiperProductCategory, ProductsFilter, ProductsItem
    },
    data() {
        return {
            products: [],
            product: {},
            category: {},
            loading: true
        }
    },
    created() {
        this.getProduct(this.$route.query.id)
    },
    mounted() {
        
    },
    methods: {
        changeFilter(product) {
            this.getProduct(product.id);
        },
        changeCategory(product) {
            this.getProduct(product.id);
        },
        getProduct(id) {
            this.loading = true;
            this.axios
                .get('/static/products.json')
                .then(response => {
                    for (const key in response.data.data) {
                        this.products = this.products.concat(response.data.data[key])
                    }
                    this.product = this.products.find((item) => {
                        return item.id == id
                    });
                    this.category = this.product.category.find((item) => {
                        return item.id == this.$route.query.category_id
                    });
                    this.loading = false;
                    
                    setTimeout(() => {
                        var sidebar = new StickySidebar('.sidebar', {
                            topSpacing: 92,
                            bottomSpacing: 0,
                            containerSelector: '.main-content'
                        });
                    }, 0);
                });
        }
    }
}
</script>

<style lang="scss">

</style>