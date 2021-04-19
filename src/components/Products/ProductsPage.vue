<template>
    <div class="product-page mb-80">
        <Preloader v-if="loading" />
        <div v-else class="container">
            <div class="row mb-56">
                <div class="col">
                    <h1 class="h1 mb-0">
                        {{ productInfo.title }}
                    </h1>
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
import SwiperProductCategory from '@/components/Swipers/SwiperProductCategory'
import changeFilter from '@/mixins/changeFilter'

export default {
    name: "ProductsPage",
    components: {
        Preloader, SwiperProductCategory
    },
    mixins: [changeFilter],
    data() {
        return {
            products: [],
            product: {},
            category: {},
            productInfo: {},
            loading: true
        }
    },
    created() {
        this.getProduct(this.$route.query.id)
    },
    mounted() {
        
    },
    methods: {
        getProduct(id) {
            this.loading = true;
            this.axios
                .get('/static/products.json')
                .then(response => {
                    if (id == 'undefined') {
                        return Promise.reject();
                    }
                    for (const key in response.data.data) {
                        this.products = this.products.concat(response.data.data[key])
                    }
                    this.product = this.products.find((item) => {
                        return item.id == id
                    });
                    this.category = this.product.category.find((item) => {
                        return item.id == this.$route.query.category_id
                    });
                    this.productInfo = this.category[this.$route.query.product_type].products.find((item) => {
                        return item.id == this.$route.query.product_id
                    });
                    this.loading = false;
                }).catch(error => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        }
    }
}
</script>

<style lang="scss">
    
</style>