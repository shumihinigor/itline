<template>
    <div class="category-page mb-80">
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
                            <div class="col-lg-4 col-md-6 col-12 mb-32" v-for="(category, idx) in category.series.products" :key="idx" @click="goToProductPage(category, type='series')">
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
                            <div class="col-lg-4 col-md-6 col-12 mb-32" v-for="(category, idx) in category.solutions.products" :key="idx" @click="goToProductPage(category, type='solutions')">
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
                    <SwiperProductCategory 
                        @change="changeCategory"
                        :products="products"
                    />
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
import changeFilter from '@/mixins/changeFilter'

import StickySidebar from "../../../node_modules/sticky-sidebar-v2/dist/sticky-sidebar"


export default {
    name: "ProductsCategoryPage",
    components: {
        Preloader, SwiperProduct, SwiperProductCategory, ProductsFilter, ProductsItem
    },
    mixins: [changeFilter],
    data() {
        return {
            products: [],
            product: {},
            category: {},
            loading: true
        }
    },
    created() {
        if (!window.location.search) {
            window.location.search = `?id=${this.$route.query.id}&title=${this.$route.query.title}&category_id=${this.$route.query.category_id}&category_title=${this.$route.query.category_title}`
        }
        this.getProduct(this.$route.query.id)
    },
    mounted() {
        
    },
    methods: {
        goToProductPage(product, type) {
            this.$router.push({ name: 'ProductsPage', query: { id: this.product.id, title: this.product.title, category_id: this.category.id, category_title: this.category.title, product_id: product.id, product_type: type, product_title: product.title }});
        },
        getProduct(id) {
            this.loading = true;
            this.axios
                .get('/static/products.json')
                .then(response => {
                    if (id == 'undefined') {
                        return Promise.reject();
                    }
                    this.products = response.data.data;
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
                }).catch(error => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        }
    }
}
</script>

<style lang="scss">

</style>