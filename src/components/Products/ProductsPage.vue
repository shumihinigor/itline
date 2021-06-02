<template>
    <div class="product-page mb-80">
        <Preloader v-if="loading" />
        <div v-else class="container">
            <!-- TITLE -->
            <div class="row mb-32">
                <div class="col">
                    <h1 class="h1 mb-0" v-html="productInfo.title"></h1>
                </div>
            </div>
            <!-- INFO PRODUCT -->
            <div class="row mb-24" v-if="productInfo.short_description">
                <div class="col">
                    <p class="p4 text-grey-3 mb-0" v-html="productInfo.short_description"></p>
                </div>
            </div>
            <div class="row mb-24">
                <!-- IMAGE -->
                <div class="col-lg-4 col-12 mb-32">
                    <div 
                        class="product-page__image" 
                        v-lazy:background-image="productInfo.image.url"
                    ></div>
                </div>
                <!-- STOCK AND STATE -->
                <div class="col-lg-4 col-12 mb-32">
                    <!-- STATE -->
                    <div class="product-page__state mb-24" v-if="productInfo.state">
                        <!-- IN STOCK -->
                        <div class="product-page__state-stock mr-24">
                            <span class="d-flex align-items-center" v-if="productInfo.state.in_stock">
                                <img svg-inline src="../../assets/images/in_stock.svg" alt="in_stock">
                                <p class="p2 mb-0 ml-16">Товар на складе</p>
                            </span>
                            <span class="d-flex align-items-center" v-else>
                                <img svg-inline src="../../assets/images/not_in_stock.svg" alt="not_in_stock">
                                <p class="p2 mb-0 ml-16">Товара нет на складе</p>
                            </span>
                        </div>
                        <!-- AMOUNT -->
                        <div class="product-page__state-amount" v-if="productInfo.state.in_stock">
                            <span class="d-flex align-items-center">
                                <img :src="require('../../assets/images/amount_' + productInfo.state.amount + '.svg')" alt="amount">
                                <p v-if="productInfo.state.amount == 4" class="p2 mb-0 ml-16">Много</p>
                                <p v-else-if="productInfo.state.amount == 3" class="p2 mb-0 ml-16">Достаточно</p>
                                <p v-else-if="productInfo.state.amount == 2" class="p2 mb-0 ml-16">Мало</p>
                                <p v-else class="p2 mb-0 ml-16">Очень мало</p>
                            </span>
                        </div>
                    </div>
                    <!-- STOCK -->
                    <div class="product-page__stock" v-if="productInfo.stock">
                        <h6 class="h6 text-orange text-uppercase mb-16">Акция!</h6>
                        <p
                            v-if="productInfo.stock.text.length"
                            class="p2 mb-8" 
                        >
                            <span class="d-block mb-8" v-for="(text, index) in productInfo.stock.text" :key="index">
                                {{ text }}
                            </span>
                        </p>
                        <p 
                            v-if="productInfo.stock.description"
                            class="p4 text-grey-3"
                        >{{ productInfo.stock.description }}</p>
                    </div>
                </div>
                <!-- FEEDBACK -->
                <div class="col-lg-4 col-12 mb-32">
                    <div class="product-page__stock">
                        <h6 class="h6 text-uppercase mb-24 text-center">связаться с менеджером</h6>
                        <div class="input-block mb-16">
                            <input 
                                id="text"
                                type="text" 
                                class="input"
                                required
                            >
                            <label class="label" for="text">Введенный текст</label>
                        </div>
                        <div class="input-block mb-16">
                            <input 
                                id="phone"
                                type="text" 
                                class="input"
                                required
                            >
                            <label class="label" for="phone">Телефон</label>
                        </div>
                        <div class="input-block mb-16">
                            <input 
                                id="email"
                                type="text" 
                                class="input"
                                required
                            >
                            <label class="label" for="email">Email</label>
                        </div>
                        <div class="textarea-block mb-16">
                            <textarea id="message" type="text" required class="textarea"></textarea>
                            <label for="message" class="label">Сообщение</label>
                        </div>
                        <div class="modal-policy mb-16">
                            <p class="p4 text-grey-3 mb-0">Отправляя заявку, я подтверждаю, что ознакомлен и согласен 
                            с <a class="link orange" href="javascript:;">Политикой конфиденциальности</a> данного сайта</p>
                        </div>
                        <div class="mb-16">
                            <button type="button" class="btn default w-100"><span class="p4">Отправить</span></button>
                        </div>
                        <div class="">
                            <button type="button" class="btn contour w-100"><span class="p4">Заказать обратный звонок</span></button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- TABLES -->
            <template>
                <div v-if="Object.keys(uniqTabs).length">
                    <!-- TABS -->
                    <div class="row">
                        <div class="col">
                            <tabs @changed="tabChanged" :options="{ useUrlFragment: false }">
                                <tab v-for="(tab, name) in uniqTabs" :key="name" :id="name" :name="name"></tab>
                            </tabs>
                        </div>
                    </div>
                    <!-- CURENT TAB -->
                    <div class="row mb-64">
                        <div class="col">
                            <div v-for="(tab, name) in uniqTabs" :key="name">
                                <div v-if="name == currentTab">
                                    <table class="table table-light table-bordered" style="table-layout: fixed;">
                                        <thead class="table-dark text-center">
                                            <tr>
                                                <th colspan="2" scope="col">{{ name }}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(cell, idx) in tab" :key="idx">
                                                <td class="p2">{{ cell.caption }}</td>
                                                <td class="p2">{{ cell.value + cell.measure_unit }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            
            <!-- SIMILAR PRODUCTS -->
            <div class="row mb-64" v-if="similarProducts.length">
                <div class="col">
                    <h3 class="h3 mb-32">Похожие товары</h3>
                    <div class="row">
                        <div 
                            v-for="(item, idx) in similarProducts" 
                            :key="idx"
                            class="col-lg-3 col-12 mb-24"
                        >
                            <router-link 
                                tag="div"
                                :to="{ 
                                    name: 'ProductsPage', 
                                    params: { id: id, category_id: category_id, product_id: item.alias }
                                }"
                                class="h-100"
                            >
                                <div class="h-100" @click="changeProduct()">
                                    <ProductsItem 
                                        :title="item.title"
                                        :text="item.product_options.prod_size"
                                        :price="item.price" 
                                        :image="item.image.url"
                                    />
                                </div>
                            </router-link>
                        </div>
                    </div>
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
import SwiperProductCategory from '@/components/Swipers/SwiperProductCategory'
import ProductsItem from '@/components/Products/ProductsItem'

import Vue from 'vue';
import Tabs from 'vue-tabs-component';

Vue.use(Tabs);

export default {
    name: "ProductsPage",
    props: ["id", "category_id", "product_id"],
    components: {
        Preloader, SwiperProductCategory, ProductsItem
    },
    data() {
        return {
            products: [],
            product: {},
            categories: [],
            category: {},
            categoriesProducts: [],
            loading: true,
            currentTab: "parameters_tab",
            productInfo: {},
            uniqTabs: {}
        }
    },
    created() {
        this.getDataPage(this.id, this.category_id);
    },
    computed: {
        similarProducts() {
            return this.categoriesProducts.filter(item => item.id !== this.productInfo.id)
        }
    },
    methods: {
        arrayTabs() {
            for (const key in this.productInfo.product_options) {
                if (typeof this.uniqTabs[this.productInfo.product_options[key].category_name] == 'undefined') {
                    this.uniqTabs[this.productInfo.product_options[key].category_name] = [this.productInfo.product_options[key]]
                } else {
                    this.uniqTabs[this.productInfo.product_options[key].category_name].push(this.productInfo.product_options[key])
                }
            }
        },
        tabChanged(selectedTab) {
            this.currentTab = selectedTab.tab.id;
        },
        async changeProduct() {
            this.loading = true;
            await this.getCategoriesProducts(this.category_id);
            this.initBreadcrumbs();
            this.loading = false;
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
                    this.productInfo = this.categoriesProducts.find((item) => {
                        return item.alias == this.product_id
                    })
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
        getDataPage(id, category_id) {
            this.loading = true;
            Promise.all([this.getProducts(id), this.getCategories(id), this.getCategoriesProducts(category_id)])
                .then(() => {
                    this.initBreadcrumbs();
                    if (this.productInfo.product_options && Object.keys(this.productInfo.product_options).length) {
                        this.arrayTabs();
                    }
                    this.loading = false;
                })
                .catch(({ response }) => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        },
        initBreadcrumbs() {
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
                    path: `/products/${this.id}`,
                    name: 'ProductsCategoryList',
                    meta: {
                        title: this.product.name
                    }
                },
                {
                    path: `/products/${this.id}/${this.category_id}`,
                    name: 'ProductsCategoryPage',
                    meta: {
                        title: this.category.title
                    }
                },
                {
                    path: `/products/${this.id}/${this.category_id}/${this.product_id}`,
                    name: 'ProductsPage',
                    meta: {
                        title: this.productInfo.title
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
    .product-page {
        &__image {
            display: block;
            width: 100%;
            height: auto;
            min-height: 400px;
            background-position: top center;
            background-repeat: no-repeat;
            background-size: contain;
        }
        &__stock {
            background: $white;
            border-radius: 20px;
            padding: 24px;
        }
        &__state {
            display: flex;
            & svg,
            & img {
                width: 32px;
                height: 32px;
            }
        }
    }
</style>