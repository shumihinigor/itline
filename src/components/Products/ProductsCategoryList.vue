<template>
    <div class="content">
        <div class="row" v-if="categories.length">
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
        <div class="row" v-else>
            <div class="col">
                <NothingFound />
            </div>
        </div>
    </div>
</template>

<script>
import ProductsItem from '@/components/Products/ProductsItem'


export default {
    name: "ProductsCategoryList",
    props: ["id", "category_id", "products", "product", "categories"],
    components: {
        ProductsItem
    },
    data() {
        return {}
    },
    mounted() {
        if (this.product) {
            this.initListBreadcrumbs();
        }
    },
    methods: {
        goToProductCategoryPage(category) {
            this.$router.push({ name: 'ProductsCategoryPage', params: { id: this.id, category_id: category.alias } });
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
                    path: `/products/${this.id}`,
                    name: 'ProductsCategoryList',
                    meta: {
                        title: this.product.name
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