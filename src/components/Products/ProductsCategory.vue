<template>
    <div class="product-page mb-80">
        <Preloader v-if="loading" />
        <div v-else class="container">
            <div class="row mb-64">
                <div class="col">
                    <h1 class="h1 mb-0">{{ product.title }}</h1>
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
                        <div class="row">
                            <div 
                                class="col-lg-4 col-md-6 col-12 mb-32" 
                                v-for="(category, idx) in product.categories" 
                                :key="idx" 
                            >
                                <div class="h-100" @click="goToProductCategoryPage(category)">
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
            </div>
            <div class="row mb-80" v-if="product.content.image">
                <div class="col">
                    <img class="w-100" :src="require('../../assets/images/' + product.content.image)">
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
    name: "ProductsCategory",
    props: ["id"],
    components: {
        Preloader, SwiperProduct, SwiperProductCategory, ProductsFilter, ProductsItem
    },
    mixins: [changeFilter],
    data() {
        return {
            products: [],
            product: {},
            loading: true
        }
    },
    created() {
        if (!this.products.length) {
            this.getProduct(this.id);
        }
    },
    methods: {
        goToProductCategoryPage(category) {
            this.$router.push({ name: 'ProductsCategoryPage', params: { id: this.product.id, category_id: category.id, } });
        },
        initSidebar() {
            setTimeout(() => {
                var sidebar = new StickySidebar('.sidebar', {
                    topSpacing: 92,
                    bottomSpacing: 0,
                    containerSelector: '.main-content'
                });
            }, 0);
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
                    this.loading = false;
                    if (window.innerWidth > 991) {
                        this.initSidebar();
                    }
                })
                .catch(error => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        }
    }
}
</script>

<style lang="scss">

</style>