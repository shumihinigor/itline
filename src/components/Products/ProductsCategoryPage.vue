<template>
    <div class="content">
        <div class="row">
            <div 
                class="col-lg-4 col-md-6 col-12 mb-32" 
                v-for="(product, idx) in categoriesProducts" 
                :key="idx" 
            >
                <div class="h-100" @click="goToProductPage(product)">
                    <ProductsItem 
                        :title="product.title"
                        :image="product.image.url"
                    />
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="category-page mb-80"> -->
        <!-- <div v-else class="container"> -->
            <!-- <template>
                <div class="mb-40"> -->
                    <!-- STOCK -->
                    <!-- <div class="row mb-32" v-if="category.stock && category.stock.state == 'active'">
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
                    </div> -->
                    <!-- <div class="row mb-32" v-else-if="category.swiper && category.swiper.length">
                        <div class="col">
                            <SwiperProduct
                                v-if="product.swiper.length"
                                :slides="product.swiper"
                            />
                        </div>
                    </div> -->
                    <!-- DESCRIPTION -->
                    <!-- <div class="row mb-24" v-if="category.short_description && category.short_description.length">
                        <div class="col">
                            <p class="p2" v-html="category.short_description"></p>
                        </div>
                    </div> -->
                    <!-- PDF -->
                    <!-- <div class="row mb-24" v-if="category.pdf">
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
            </template> -->
            <!-- TEXT -->
            <!-- <div class="row mb-40" v-if="category.text && category.text.length">
                <div class="col">
                    <div class="" v-html="category.text"></div>
                </div>
            </div> -->
        <!-- </div> -->
    <!-- </div> -->
</template>

<script>
import ProductsItem from '@/components/Products/ProductsItem'

export default {
    name: "ProductsCategoryPage",
    props: ["id", "category_id", "products", "product", "categories", "category", "categories-products"],
    components: {
        ProductsItem
    },
    data() {
        return {}
    },
    mounted() {
        this.initPageBreadcrumbs();
    },
    methods: {
        goToProductPage(product) {
            this.$router.push({ 
                name: 'ProductsPage', 
                params: { id: this.id, category_id: this.category_id, product_id: product.alias }
            });
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