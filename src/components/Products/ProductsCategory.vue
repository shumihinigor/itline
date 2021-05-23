<template>
    <div class="product-page mb-80">
        <Preloader v-if="loading" />
        <div v-else class="container">
            <!-- TITLE -->
            <div class="row mb-40">
                <div class="col">
                    <h1 class="h1 mb-0">{{ product.name }}</h1>
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
            <div class="row mb-80" v-if="product.description && product.description.length">
                <div class="col">
                    <p class="p2" v-for="(text, index) in product.description" :key="index" v-html="text"></p>
                </div>
            </div>
            <!-- MAIN -->
            <div class="row mb-80 main-content">
                <!-- FILTER -->
                <div class="col-lg-3 col-12">
                    <ProductsFilter 
                        class="sidebar"
                        @change="changeFilter"
                        :products="products"
                        :categories="categories"
                    />
                </div>
                <!-- ITEMS -->
                <div class="col-lg-9 col-12">
                    <div class="content">
                        <div class="row">
                            <div 
                                class="col-lg-4 col-md-6 col-12 mb-32" 
                                v-for="(category, idx) in categories" 
                                :key="idx" 
                            >
                                <div class="h-100" @click="goToProductCategoryPage(category)">
                                    <ProductsItem 
                                        :title="category.title"
                                        :image="category.image.url"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- PDF -->
            <div class="row mb-40" v-if="product.pdf">
                <div class="col">
                    <a 
                        :href="'/static/files/' + product.pdf.name + '.pdf'" 
                        download="" 
                        class="file__link bg-white"
                    >
                        <div class="d-flex flex-column align-items-start ml-16">
                            <p class="p2 text-grey-1 mb-1">{{ product.pdf.title }}</p>
                            <p class="p5 text-grey-3 mb-0">{{ product.pdf.size }}Mb</p>
                        </div>
                    </a>
                </div>
            </div>
            <!-- CONTENT -->
            <div class="row mb-40" v-if="product.content && product.content.length">
                <div class="col">
                    <div class="content mb-40" v-for="(content, index) in product.content" :key="index">
                        <!-- QUOTE -->
                        <div class="quote mb-40" v-if="content.quote">
                            <p class="p2 mb-8">
                                {{ content.quote }}
                            </p>
                            <p class="p2 mb-0 text-orange" v-html="content.quote_writer"></p>
                        </div>
                        <!-- TITLE AND TEXT -->
                        <div class="mb-32" v-if="(content.title || content.text) && content.text.length">
                            <h3 class="h3 mb-32" v-if="content.title">
                                {{ content.title }}
                            </h3>
                            <p class="p2" v-for="(text, index) in content.text" :key="index" v-html="text"></p>
                        </div>
                        <!-- ACCORDION -->
                        <template>
                            <div class="mb-32" v-if="content.accordion && content.accordion.length">
                                <div class="" v-for="(item, index) in content.accordion" :key="index">
                                    <p>
                                        <a class="p2 link orange text-decoration-none" data-bs-toggle="collapse" :href="'#item_' + index" role="button" aria-expanded="false" :aria-controls="'item_' + index">
                                            {{ item.title }}
                                        </a>
                                    </p>
                                    <div class="collapse" :id="'item_' + index">
                                        <div class="">
                                            <p class="p5 text-grey-2 mb-8">
                                                {{ item.text }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <!-- IMAGE -->
                        <div class="" v-if="content.image">
                            <img class="mw-100" :src="require('../../assets/images/products/' + content.image)" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <!-- SWIPER CATEGORY -->
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
            categories: [],
            loading: true,
            sidebar: null
        }
    },
    created() {
        this.getData(this.id);
    },
    methods: {
        goToProductCategoryPage(category) {
            this.$router.push({ name: 'ProductsCategoryPage', params: { id: this.id, category_id: category.alias } });
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
        getData(id) {
            this.loading = true;
            Promise.all([this.getProducts(id), this.getCategories(id)])
                .then(() => {
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
                    this.initSidebar();
                    this.loading = false;
                })
                .catch(({ response }) => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        }
    },
    destroyed() {
        this.$store.commit("changeBreadcrumbs", []);
    }
}
</script>

<style lang="scss">

</style>