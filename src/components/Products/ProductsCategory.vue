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
                            <div class="col-lg-4 col-md-6 col-12 mb-32" v-for="(product, idx) in product.category" :key="idx" @click="goToProductPageCategory(product)">
                                <ProductsItem 
                                    :title="product.title" 
                                    :text="product.text" 
                                    :image="product.image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-80" v-if="product.content.image">
                <div class="col">
                    <img :src="require('../../assets/images/' + product.content.image)">
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
        if (!window.location.search) {
            window.location.search = `?id=${this.$route.query.id}&title=${this.$route.query.title}`
        }
        this.getProduct(this.$route.query.id)
    },
    methods: {
        goToProductPageCategory(product) {
            this.$router.push({ name: 'ProductsCategoryPage', query: { id: this.product.id, title: this.product.title, category_id: product.id, category_title: product.title  } });
        },
        getProduct(id) {
            this.loading = true;
            this.axios
                .get('/static/products.json')
                .then(response => {
                    if (id == 'undefined') {
                        return Promise.reject();
                    }
                    this.products = [];
                    for (const key in response.data.data) {
                        this.products = this.products.concat(response.data.data[key])
                    }
                    this.product = this.products.find((item) => {
                        return item.id == id
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