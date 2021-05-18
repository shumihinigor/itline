<template>
    <div class="category-page mb-80">
        <Preloader v-if="loading" />
        <div v-else class="container">
            <!-- TITLE -->
            <div class="row mb-40">
                <div class="col">
                    <h1 class="h1 mb-0">{{ category.title }}</h1>
                </div>
            </div>

            <template>
                <div class="mb-40">
                    <!-- STOCK -->
                    <div class="row mb-32" v-if="category.stock && category.stock.state == 'active'">
                         <div class="col-lg-3 col-12 mb-32">
                             <div class="stock">
                                 <div class="stock-card">
                                    <div 
                                        class="stock-image" 
                                        :style="{'background-image': 'url(' + require('../../assets/images/' + category.stock.card.image) + ')'}"
                                    ></div>
                                    <h1 class="h5 mb-16">{{ category.stock.card.title }}</h1>
                                    <ul class="ps-3 m-0">
                                        <li v-for="(li, index) in category.stock.card.list" class="p4" :key="index">
                                            {{ li }}
                                        </li>
                                    </ul>
                                 </div>
                             </div>
                         </div>
                         <div class="col-lg-9 col-12">
                             <h3 class="h3 mb-16">{{ category.stock.title }}</h3>
                             <div class="mb-16">
                                 <p class="p2 mb-8" v-for="(item, index) in category.stock.description" :key="index" v-html="item"></p>
                             </div>
                             <div class="">
                                 <p>
                                    <a class="p2 link orange text-decoration-none" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Условия акции.
                                    </a>
                                </p>
                                <div class="collapse" id="collapseExample">
                                    <div class="">
                                        <p class="p5 text-grey-2 mb-8" v-for="(item, index) in category.stock.conditions" :key="index" v-html="item"></p>
                                    </div>
                                </div>
                             </div>
                         </div>
                    </div>
                    <div class="row mb-32" v-else-if="category.swiper && category.swiper.length">
                        <div class="col">
                            <SwiperProduct
                                v-if="product.swiper.length"
                                :slides="product.swiper"
                            />
                        </div>
                    </div>
                    <!-- DESCRIPTION -->
                    <div class="row mb-24" v-if="category.short_description && category.short_description.length">
                        <div class="col">
                            <p class="p2" v-html="category.short_description"></p>
                        </div>
                    </div>
                    <!-- PDF -->
                    <div class="row mb-24" v-if="category.pdf">
                        <div class="col">
                            <a
                                :href="'/static/files/' + category.pdf.name + '.pdf'" 
                                download="" 
                                class="file__link bg-white"
                            >
                                <div class="d-flex flex-column align-items-start ml-16">
                                    <p class="p2 text-grey-1 mb-1">{{ category.pdf.title }}</p>
                                    <p class="p5 text-grey-3 mb-0">{{ category.pdf.size }}Mb</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </template>

            <div class="row mb-80 main-content">
                <div class="col-lg-3 col-12">
                    <ProductsFilter 
                        class="sidebar"
                        @change-category-page="changeFilter"
                        :products="products"
                        :categories="categories"
                    />
                </div>
                <div class="col-lg-9 col-12">
                    <div class="content">

                        <!-- <div v-if="category.products">
                            <div class="mb-56" v-for="(product, index) in category.products" :key="index">
                                <div class="row mb-32" v-if="product.title || product.text.length">
                                    <div class="col">
                                        <h3 class="h3 mb-16" v-if="product.title">{{ product.title }}</h3>
                                        <p class="p2 mb-8" v-for="(text, index) in product.text" :key="index">
                                            {{ text }}
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div 
                                        class="col-lg-4 col-md-6 col-12 mb-32" 
                                        v-for="(category, idx) in product.items" 
                                        :key="idx"
                                    >
                                        <div class="h-100" @click="goToProductPage(category)">
                                            <ProductsItem 
                                                :title="category.title" 
                                                :text="category.text" 
                                                :image="category.image"
                                                :price="category.price"
                                                :style="{ 'cursor': category.page ? '' : 'default' }"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
            <!-- TEXT -->
            <div class="row mb-40" v-if="category.text && category.text.length">
                <div class="col">
                    <div class="" v-html="category.text"></div>
                </div>
            </div>
            <!-- CONTENT -->
            <!-- <div class="row mb-40" v-if="category.content && category.content.length">
                <div class="col">
                    <div class="content mb-40" v-for="(content, index) in category.content" :key="index"> -->
                        <!-- QUOTE -->
                        <!-- <div class="quote mb-40" v-if="content.quote">
                            <p class="p2 mb-8">
                                {{ content.quote }}
                            </p>
                            <p class="p2 mb-0 text-orange" v-html="content.quote_writer"></p>
                        </div> -->
                        <!-- TITLE AND TEXT -->
                        <!-- <div class="mb-32" v-if="content.title || content.text">
                            <h3 class="h3 mb-32" v-if="content.title">
                                {{ content.title }}
                            </h3>
                            <p class="p2" v-for="(text, index) in content.text" :key="index" v-html="text"></p>
                        </div> -->
                        <!-- ACCORDION -->
                        <!-- <template>
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
                        </template> -->
                        <!-- IMAGE -->
                        <!-- <div class="" v-if="content.image">
                            <img class="mw-100" :src="require('../../assets/images/products/' + content.image)" alt="">
                        </div> -->
                    <!-- </div>
                </div>
            </div> -->
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
import ProductsItem from '@/components/Products/ProductsItem'
import SwiperProduct from '@/components/Swipers/SwiperProduct'
import SwiperProductCategory from '@/components/Swipers/SwiperProductCategory'
import changeFilter from '@/mixins/changeFilter'

import StickySidebar from "../../../node_modules/sticky-sidebar-v2/dist/sticky-sidebar"


export default {
    name: "ProductsCategoryPage",
    props: ["id", "category_id"],
    components: {
        Preloader, SwiperProduct, SwiperProductCategory, ProductsFilter, ProductsItem
    },
    mixins: [changeFilter],
    data() {
        return {
            products: [],
            product: {},
            categories: [],
            category: {},
            loading: true,
            sidebar: null
        }
    },
    created() {
        this.getData(this.id);
    },
    mounted() {
        
    },
    methods: {
        goToProductPage(product) {
            if (product.page) {
                this.$router.push({ 
                    name: 'ProductsPage', 
                    params: { id: this.product.id, category_id: this.category.id, product_id: product.id }
                });
            }
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
                    this.category = this.categories.find((item) => {
                        return item.alias == this.category_id
                    });
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
                    if (!this.sidebar) {
                        this.initSidebar();
                    }
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
.stock {
    &-card {
        position: relative;
        padding: 20px 16px;
        background: linear-gradient(144.77deg, #EF6F2E 0.25%, #FFC839 107.32%);
        border-radius: 20px;
        color: $white;
    }
    &-image {
        display: block;
        width: 209px;
        height: 209px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        margin: auto;
        margin-top: -30px;
    }
}
</style>