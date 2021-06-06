<template>
    <div class="product-page mb-80">
        <Preloader v-if="loading" />
        <div v-else class="container">
            <!-- TITLE -->
            <div class="row mb-40">
                <div class="col">
                    <h1 class="h1 mb-0" v-if="title">{{ title }}</h1>
                    <div class="stub-title" v-else></div>
                </div>
            </div>
            <!-- SWIPER PRODUCT -->
            <div class="row mb-32" v-if="product && product.swiper && product.swiper.length">
                <div class="col">
                    <SwiperProduct
                        :slides="product.swiper"
                    />
                </div>
            </div>
            <!-- DESCRIPTION -->
            <div class="row mb-40" v-if="description">
                <div class="col">
                    <p class="p2 mb-0" v-html="description"></p>
                </div>
            </div>
            <!-- MAIN -->
            <div class="row mb-80 main-content">
                <!-- FILTER -->
                <div class="col-lg-3 col-12">
                    <ProductsFilter
                        class="sidebar"
                        :products="products"
                        :categories="categories"
                    />
                </div>
                <!-- ITEMS -->
                <div class="col-lg-9 col-12">
                    <Preloader v-if="loadingOnChange" />
                    <router-view
                        v-else
                        :products="products"
                        :product="product"
                        :categories="categories"
                        :category="category"
                        :categories-products="categoriesProducts"
                    ></router-view>
                </div>
            </div>
            <!-- CONTENT -->
            <div class="row mb-40" v-if="content">
                <div class="col">
                    <div class="content mb-40" v-html="content"></div>
                </div>
            </div>
            <!-- SWIPER CATEGORY -->
            <div class="row">
                <div class="col">
                    <SwiperProductCategory 
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
import SwiperProduct from '@/components/Swipers/SwiperProduct'
import SwiperProductCategory from '@/components/Swipers/SwiperProductCategory'

import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters, mapActions } = createNamespacedHelpers("products");

export default {
    name: "ProductsCategory",
    props: ["id", "category_id"],
    components: {
        Preloader, SwiperProduct, SwiperProductCategory, ProductsFilter
    },
    data() {
        return {
            loading: true
        }
    },
    computed: {
        ...mapGetters([
            'products',
            'product',
            'sidebar',
            'loadingOnChange',
            'categories',
            'categoriesProducts',
            'category',
            'title',
            'content',
            'description'
        ])
    },
    watch: {
        '$route'(route) {
            route.name == 'ProductsCategoryPage' ? this.changePage({ id: this.id, category_id: this.category_id }) : this.changeList({ id: this.id, category_id: this.category_id });
        }
    },
    created() {
        if (this.category_id) {
            this.getDataPage({ id: this.id, category_id: this.category_id }).then(() => this.loading = false);
        } else {
            this.getDataList({ id: this.id, category_id: this.category_id }).then(() => this.loading = false);
        }
    },
    methods: {
        ...mapMutations(["setSidebar"]),
        ...mapActions(['getDataPage', 'getDataList', 'changePage', 'changeList', 'initSidebar'])
    },
    beforeDestroy() {
        this.$store.commit("changeBreadcrumbs", []);
    }
}
</script>

<style lang="scss">
.content {
    & img {
        max-width: 100%;
    }
}
</style>