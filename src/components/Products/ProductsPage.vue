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
            <div class="row mb-24">
                <div class="col-lg-4 col-12 mb-32">
                    <div 
                        class="product-page__image" 
                        :style="{'background-image': 'url(' + require('../../assets/images/' + productInfo.page.image) + ')'}"
                    ></div>
                </div>
                <div class="col-lg-4 col-12 mb-32">
                    <p class="p2 mb-8">Здесь располагается какая-то общая информация о товаре, например: визуализация нумерации маршрутов следования пассажирского общественного транспорта. </p>
                    <p class="p4 text-grey-3 mb-0">Подробную информацию уточняйте у менеджера</p>
                    <div class="product-page__state mb-32 mt-24">
                        <div class="product-page__state-stock mr-24">
                            <span class="d-flex align-items-center" v-if="productInfo.page.state.in_stock">
                                <img svg-inline src="../../assets/images/in_stock.svg" alt="in_stock">
                                <p class="p2 mb-0 ml-16">Товар на складе</p>
                            </span>
                            <span class="d-flex align-items-center" v-else>
                                <img svg-inline src="../../assets/images/not_in_stock.svg" alt="not_in_stock">
                                <p class="p2 mb-0 ml-16">Товара нет на складе</p>
                            </span>
                        </div>
                        <div class="product-page__state-amount">
                            <span class="d-flex align-items-center">
                                <img :src="require('../../assets/images/amount_' + productInfo.page.state.amount + '.svg')" alt="amount">
                                <p v-if="productInfo.page.state.amount == 4" class="p2 mb-0 ml-16">Много</p>
                                <p v-else-if="productInfo.page.state.amount == 3" class="p2 mb-0 ml-16">Достаточно</p>
                                <p v-else-if="productInfo.page.state.amount == 2" class="p2 mb-0 ml-16">Мало</p>
                                <p v-else class="p2 mb-0 ml-16">Очень мало</p>
                            </span>
                        </div>
                    </div>
                    <div class="product-page__stock">
                        <h6 class="h6 text-orange text-uppercase mb-16">Акция!</h6>
                        <p class="p2 mb-8">Доставка комплектов табло для транспорта в Москву и Санкт‑Петербург БЕСПЛАТНО!</p>
                        <p class="p4 text-grey-3">Подробную информацию уточняйте у менеджера</p>
                    </div>
                </div>
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

            <!-- tabs -->
            <div class="row">
                <div class="col">
                    <tabs @changed="tabChanged" :options="{ useUrlFragment: false }">
                        <tab id="structure_tab" name="Состав комплекта"></tab>
                        <tab id="characteristics_tab" name="характеристики"></tab>
                        <tab id="control_tab" name="управление"></tab>
                        <tab id="conformity_tab" name="соответствие гост"></tab>
                        <tab id="set_tab" name="комплект поставки"></tab>
                    </tabs>
                </div>
            </div>
            <!-- tab -->
            <div class="row mb-64">
                <div class="col">
                    <div class="" v-if="currentTab == 'structure_tab'">
                        <table class="table table-light table-bordered">
                            <thead class="table-dark text-center">
                                <tr>
                                    <th colspan="4" scope="col">Состав комплекта</th>
                                </tr>
                                <tr>
                                    <th scope="col">1</th>
                                    <th scope="col">Mark</th>
                                    <th scope="col">Otto</th>
                                    <th scope="col">mdo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="" v-else-if="currentTab == 'characteristics_tab'">
                        <table class="table table-light table-bordered">
                            <thead class="table-dark text-center">
                                <tr>
                                    <th colspan="4" scope="col">Характеристики</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="" v-else-if="currentTab == 'control_tab'">
                        <table class="table table-light table-bordered">
                            <thead class="table-dark text-center">
                                <tr>
                                    <th colspan="4" scope="col">Управление</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="" v-else-if="currentTab == 'conformity_tab'">
                        <table class="table table-light table-bordered">
                            <thead class="table-dark text-center">
                                <tr>
                                    <th colspan="4" scope="col">Соответствие гост</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="" v-else>
                        <table class="table table-light table-bordered">
                            <thead class="table-dark text-center">
                                <tr>
                                    <th colspan="4" scope="col">Комплект поставки</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row mb-64">
                <div class="col">
                    <h3 class="h3 mb-32">Похожие товары</h3>
                    <div class="row">
                        <div class="col-lg-3 col-12" v-for="(item, idx) in similarProducts" :key="idx" @click="changeProduct(item.id)">
                            <ProductsItem 
                                :title="item.title" 
                                :price="item.price" 
                                :image="item.image"
                            />
                        </div>
                    </div>
                </div>
            </div>
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
    props: ["id", "category_id", "product_id", "product_type"],
    components: {
        Preloader, SwiperProductCategory, ProductsItem
    },
    data() {
        return {
            products: [],
            product: {},
            category: {},
            productInfo: {},
            loading: true,
            currentTab: "structure_tab"
        }
    },
    created() {
        this.getProduct(this.id)
    },
    mounted() {
        
    },
    computed: {
        similarProducts() {
            return this.category[this.$route.query.product_type].products.filter((item) => {
                return item.id !== this.productInfo.id
            })
        }
    },
    methods: {
        tabChanged(selectedTab) {
            console.log(selectedTab.tab.id);
            this.currentTab = selectedTab.tab.id;
        },
        changeProduct(id) {
            this.getProduct(id);
        },
        getProduct(id) {
            console.log(id);
            this.loading = true;
            this.axios
                .get('/static/products.json')
                .then(response => {
                    if (id == 'undefined') {
                        return Promise.reject();
                    }
                    this.products = response.data.data;
                    this.product = this.products.find((item) => {
                        return item.id == id
                    });
                    this.category = this.product.category.find((item) => {
                        return item.id == this.category_id
                    });
                    this.productInfo = this.category[this.$route.query.product_type].products.find((item) => {
                        return item.id == this.product_id
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
    .product-page {
        &__image {
            display: block;
            width: 100%;
            height: auto;
            min-height: 400px;
            background-position: center center;
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