<template>
    <section class="product">
        <Preloader v-if="loading" />
        <div v-else class="container d-flex flex-column">
            <div :class="['row', 'order-' + index]" v-for="(item, index) in products" :key="index">
                <div class="col-lg-3 col-12 mb-32" v-for="(product, idx) in item" :key="idx" @click="selectProduct(product, index)">
                    <ProductsItem 
                        :title="product.title" 
                        :text="product.text" 
                        :image="product.image"
                    />
                </div>
            </div>

            <transition
                name="fade"
                mode="out-in"
            >
                <div :class="['row mb-32', 'order-' + selectedIndex]" v-if="selectedProduct.id">
                    <div class="col-12">
                        <div class="product-info">
                            <div class="row">
                                <div class="col-lg-4 col-12 mb-lg-0 mb-4">
                                    <ProductsItem
                                        :title="selectedProduct.title" 
                                        :text="selectedProduct.text" 
                                        :image="selectedProduct.image"
                                    />
                                </div>
                                <div class="col-lg-8 col-12">
                                    <div class="product-info__block">
                                        <p class="p2 text-grey-1 mb-16">Сюда можно добавить любую необходимую информацию: заголовок, текстовое описание, изображения, ссылки и пр.</p>
                                        <div class="product-info__links">
                                            <a :href="toPdfLink(file)" download class="file__link" v-for="(file, index) in selectedProduct.files" :key="index">
                                                <img svg-inline src="../../assets/images/product_pdf.svg" alt="product_pdf">
                                                <div class="d-flex flex-column align-items-start ml-16">
                                                    <p class="p2 text-grey-1 mb-1">{{ file[0].slice(0, -4) }}</p>
                                                    <p class="p5 text-grey-3 mb-0">{{ file[1] }}Mb</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </section>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import ProductsItem from './ProductsItem.vue'

export default {
    components: {
        ProductsItem, Preloader
    },
    data() {
        return {
            loading: true,
            products: [],
            selectedProduct: {},
            selectedIndex: null
        }
    },
    created() {
        this.getProducts()
    },
    methods: {
        toPdfLink(file) {
            return require('@/assets/files/' + file[0]).default
        },
        selectProduct(product, index) {
            if (window.innerWidth > 991) {
                if (this.selectedProduct.id == product.id) {
                    this.selectedProduct = {};
                    this.selectedIndex = null;
                } else {
                    this.selectedProduct = product;
                    this.selectedIndex = index;
                }
            } else {
                this.selectedProduct = {};
                this.selectedIndex = null;
            }
        },
        getProducts() {
            this.axios
                .get('/static/products.json')
                .then(response => {
                    this.products = response.data.data;
                    this.loading = false;
                });
        }
    },
}
</script>

<style lang="scss">
    .product {
        margin-bottom: 68px;
        &-info {
            display: flex;
            align-items: flex-start;
            padding: 24px 75px 24px 24px;
            background: $white;
            box-shadow: inset 8px 8px 15px rgba(198, 198, 198, 0.25);
            border-radius: 10px;
            max-height: 420px;
            overflow: auto;
            @media (max-width: 991px) {
                padding: 24px;
            }
            &::-webkit-scrollbar {
                width: 19px;
            }
            &::-webkit-scrollbar-thumb {
                border: 8px solid rgba(0, 0, 0, 0);
                background-clip: padding-box;
                border-radius: 100px;
                -webkit-border-radius: 100px;
                background-color: #BDBDBD;
            }
            &::-webkit-scrollbar-button {
                width: 0;
                height: 0;
                display: none;
            }
            &::-webkit-scrollbar-corner {
                background-color: transparent;
            }
            & .product-item {
                background: $bg;
                max-width: 295px;
                margin-bottom: 0;
                margin-right: 24px;
                pointer-events: none;
                @media (max-width: 991px) {
                    max-width: 100%;
                    margin-right: 0;
                }
            }
            &__links {
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>