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
                    <SwiperProduct />
                </div>
            </div>
            <div class="row mb-80">
                <div class="col-lg-3 col-12">
                    <p class="p2 weight-bold mb-16">Категории:</p>
                    <ul class="product-page__filter">
                        <li class="p2">Решения для транспорта</li>
                        <li class="p2">Табло для остановок</li>
                        <li class="p2">Табло для вокзалов</li>
                        <li class="p2">Табло для АЗС</li>
                        <li class="p2">Спортивные табло</li>
                        <li class="p2">Дорожные табло</li>
                        <li class="p2">Табло валют</li>
                        <li class="p2">Промышленные табло</li>
                    </ul>
                </div>
                <div class="col-lg-9 col-12">

                </div>
            </div>
            <div class="row">
                <div class="col">
                    <SwiperProductCategory />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import SwiperProduct from '@/components/Swipers/SwiperProduct'
import SwiperProductCategory from '@/components/Swipers/SwiperProductCategory'

export default {
    name: "ProductsPage",
    components: {
        Preloader, SwiperProduct, SwiperProductCategory
    },
    data() {
        return {
            product: {},
            loading: true
        }
    },
    created() {
        this.getProduct(this.$route.query.id)
    },
    methods: {
        getProduct(id) {
            let productsArr = []
            this.axios
                .get('/static/products.json')
                .then(response => {
                    for (const key in response.data.data) {
                        productsArr = productsArr.concat(response.data.data[key])
                    }
                    this.product = productsArr.find((item) => {
                        return item.id == id
                    });
                    this.loading = false;
                });
        }
    }
}
</script>

<style lang="scss">
    .product-page {
        &__filter {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            list-style: none;
            padding: 0;
            margin: 0;
            & li {
                margin-bottom: 6px;
                transition: all 0.2s;
                cursor: pointer;
                &:hover {
                    color: $orange;
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>