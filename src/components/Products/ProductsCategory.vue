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
            <div class="row mb-32" v-if="product.swiper && product.swiper.length">
                <div class="col">
                    <SwiperProduct
                        :slides="product.swiper"
                    />
                </div>
            </div>
            <!-- DESCRIPTION -->
            <div class="row mb-80" v-if="description">
                <div class="col">
                    <p class="p2" v-html="description"></p>
                </div>
            </div>
            <!-- MAIN -->
            <div class="row mb-80 main-content">
                <!-- FILTER -->
                <div class="col-lg-3 col-12">
                    <ProductsFilter 
                        class="sidebar"
                        @change-list="changeList"
                        @change-page="changePage"
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
                        @change-category="changeList"
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

import StickySidebar from "../../../node_modules/sticky-sidebar-v2/dist/sticky-sidebar"


export default {
    name: "ProductsCategory",
    props: ["id", "category_id"],
    components: {
        Preloader, SwiperProduct, SwiperProductCategory, ProductsFilter
    },
    data() {
        return {
            products: [],
            product: {},
            categories: [],
            category: {},
            categoriesProducts: [],
            loading: true,
            loadingOnChange: false,
            sidebar: null,
            title: "",
            content: "",
            description: ""
        }
    },
    created() {
        console.log(this.category_id);
        this.category_id ? this.getDataPage(this.id, this.category_id) : this.getDataList(this.id);
    },
    methods: {
        async changeList(id) {
            this.loadingOnChange = true;
            this.categories = [];
            this.title = "";
            this.content = "";
            await this.getCategories(id);
            this.initListBreadcrumbs();
            this.title = this.product.name;
            this.loadingOnChange = false;
        },
        async changePage(id, category_id) {
            this.loadingOnChange = true;
            this.categoriesProducts = [];
            this.title = "";
            this.content = "";
            await this.getCategoriesProducts(category_id);
            this.initPageBreadcrumbs();
            this.title = this.category.title;
            this.content = this.category.text;
            this.loadingOnChange = false;
        },
        initSidebar() {
            setTimeout(() => {
                this.sidebar = new StickySidebar('.sidebar', {
                    topSpacing: 92,
                    bottomSpacing: 0,
                    containerSelector: '.main-content'
                });
            }, 0);
        },
        async getCategories(id) {
            await this.axios
                .get(`/rest/products/${id}`)
                .then(response => {
                    if (id == 'undefined') {
                        return Promise.reject();
                    }
                    this.categories = response.data.results;
                    this.product = this.products.find((item) => {
                        return item.alias == id
                    });
                });
        },
        async getCategoriesProducts(id) {
            await this.axios
                .get(`/rest/products/${id}`)
                .then(response => {
                    if (id == 'undefined') {
                        return Promise.reject();
                    }
                    this.category = this.categories.find((item) => {
                        return item.alias == this.category_id
                    });
                    this.categoriesProducts = response.data.results;
                });
        },
        async getProducts(id) {
            await this.axios
                .get('/rest/products')
                .then(response => {
                    if (id == 'undefined') {
                        return Promise.reject();
                    }
                    this.products = response.data.results;
                    this.product = this.products.find((item) => {
                        return item.alias == id
                    });
                });
        },
        getDataList(id) {
            this.loading = true;
            Promise.all([this.getProducts(id), this.getCategories(id)])
                .then(() => {
                    this.initListBreadcrumbs();
                    this.title = this.product.name;
                    this.initSidebar();
                    this.loading = false;
                })
                .catch(({ response }) => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        },
        getDataPage(id, category_id) {
            this.loading = true;
            Promise.all([this.getProducts(id), this.getCategories(id), this.getCategoriesProducts(category_id)])
                .then(() => {
                    this.initPageBreadcrumbs();
                    this.title = this.category.title;
                    this.content = this.category.text;
                    this.initSidebar();
                    this.loading = false;
                })
                .catch(({ response }) => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        },
        initListBreadcrumbs() {
            let breadcrumbs = [
                {
                    path: '/',
                    name: 'Home',
                    meta: {
                        title: "Главная"
                    }
                },
                {
                    path: '/products',
                    name: 'Products',
                    meta: {
                        title: "Продукция"
                    }
                },
                {
                    path: `/products/category/${this.id}`,
                    name: 'ProductsCategory',
                    meta: {
                        title: this.product.name
                    }
                }
            ]
            this.$store.commit("changeBreadcrumbs", breadcrumbs);
        },
        initPageBreadcrumbs() {
            let breadcrumbs = [
                {
                    path: '/',
                    name: 'Home',
                    meta: {
                        title: "Главная"
                    }
                },
                {
                    path: '/products',
                    name: 'Products',
                    meta: {
                        title: "Продукция"
                    }
                },
                {
                    path: `/products/category/${this.id}`,
                    name: 'ProductsCategory',
                    meta: {
                        title: this.product.name
                    }
                },
                {
                    path: `/products/category/${this.id}/${this.category_id}`,
                    name: 'ProductsCategoryPage',
                    meta: {
                        title: this.category.title
                    }
                }
            ]
            this.$store.commit("changeBreadcrumbs", breadcrumbs);
        }
    },
    destroyed() {
        this.$store.commit("changeBreadcrumbs", []);
    }
}
</script>

<style lang="scss">

</style>