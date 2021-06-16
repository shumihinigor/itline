<template>
    <div class="content">
        <div class="row row-cols-1 row-cols-lg-3 row-cols-md-2" v-if="categoriesProducts.length">
            <div :class="['mb-32', {
                'w-100': productCategory.childs
            }]" v-for="(productCategory, idx) in categoriesProducts" :key="idx">
                <div class="h-100" v-if="!productCategory.childs">
                    <div class="h-100" @click="goToProductPage(productCategory.params)">
                        <ProductsItem
                            :title="productCategory.params.title"
                            :text="productCategory.params.product_options ? productCategory.params.product_options.prod_size : ''"
                            :image="productCategory.params.image.url"
                        />
                    </div>
                </div>
                <div v-else>
                    <h3 class="h3 mb-24" v-html="productCategory.params.title"></h3>
                    <div class="mb-24" v-html="productCategory.params.text"></div>
                    <div class="row">
                        <div 
                            v-for="(product, index) in productCategory.childs" :key="index"
                            class="col-lg-4 col-md-6 col-12 mb-32"
                        >
                            <div class="h-100" @click="goToProductPage(product.params)">
                                <ProductsItem
                                    :title="product.params.title"
                                    :text="product.params.product_options ? product.params.product_options.prod_size : ''"
                                    :image="product.params.image.url"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-end" v-else>
            <div class="col-lg-8 col-12">
                <div class="input-block mb-16">
                    <input id="name" type="text" required class="input bg-white">
                    <label for="name" class="label">Ваше имя  (компания)</label>
                </div>
                <div class="input-block mb-16">
                    <input id="phone" type="tel" required class="input bg-white">
                    <label for="phone" class="label">Телефон</label>
                </div>
                <div class="input-block mb-16">
                    <input id="email" type="text" required class="input bg-white">
                    <label for="email" class="label">Email</label>
                </div>
                <div class="textarea-block mb-16">
                    <textarea id="message" type="text" required class="textarea bg-white"></textarea>
                    <label for="message" class="label">Сообщение</label>
                </div>
                <div class="modal-policy mb-24">
                    <p class="p4 text-grey-3 mb-0">Отправляя заявку, я подтверждаю, что ознакомлен и согласен
                    с <a class="link orange" href="javascript:;">Соглашением о неразглашении</a> данного сайта</p>
                </div>
                <div class="mb-16">
                    <button type="button" class="btn default w-100"><span class="p4">Отправить</span></button>
                </div>
            </div>
            <!-- <div class="col">
                <div class="nothing-found">
                    <h1 class="nothing-found__title">Ничего не найдено</h1>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import ProductsItem from '@/components/Products/ProductsItem'
import NothingFound from '@/components/NothingFound'

export default {
    name: "ProductsCategoryPage",
    props: ["id", "category_id", "category", "products", "product", "categories", "categories-products"],
    components: {
        ProductsItem, NothingFound
    },
    data() {
        return {}
    },
    updated() {
        this.$store.commit('setSeoTitle', this.category.seo_title);
        this.$store.commit('setSeoDescription', this.category.short_description);
    },
    mounted() {
        if (this.category) {
            this.initPageBreadcrumbs();
        }
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
                        title: this.product.title
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