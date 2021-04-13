<template>
    <div>
        <p class="p2 weight-bold mb-16">Категории:</p>
        <ul class="product-filter">
            <router-link 
                class="p2" 
                v-for="(product, index) in products" 
                :key="index" 
                tag="li"
                exact-active-class="active"
                :to="{ name: 'ProductsPage', query: { id: product.id, title: product.title  } }"
            >
                {{ product.title }}
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            loading: true
        }
    },
    created() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            this.axios
                .get('/static/products.json')
                .then(response => {
                    for (const key in response.data.data) {
                        this.products = this.products.concat(response.data.data[key])
                    }
                    this.loading = false;
                });
        }
    },
}
</script>

<style lang="scss">
    
    .product {
        &-filter {
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
                &:hover,
                &.active {
                    color: $orange;
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>