<template>
    <section class="product">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <ProductsItem 
                        :title="'Решения для транспорта'" 
                        :text="'Устройства отображения информации: часы-термометры, табло-метеостанции, табло погодных условий.'" 
                        :image="'product_image.png'"
                    />
                </div>
                <div class="col-3">
                    <ProductsItem 
                        :title="'Решения для транспорта'" 
                        :text="'Устройства отображения информации: часы-термометры, табло-метеостанции, табло погодных условий.'" 
                        :image="'product_image.png'"
                    />
                </div>
                <div class="col-3">
                    <ProductsItem 
                        :title="'Решения для транспорта'" 
                        :text="'Устройства отображения информации: часы-термометры, табло-метеостанции, табло погодных условий.'" 
                        :image="'product_image.png'"
                    />
                </div>
                <div class="col-3">
                    <ProductsItem 
                        :title="'Решения для транспорта'" 
                        :text="'Устройства отображения информации: часы-термометры, табло-метеостанции, табло погодных условий.'" 
                        :image="'product_image.png'"
                    />
                </div>
                <div class="col-3">
                    <ProductsItem 
                        :title="'Решения для транспорта'" 
                        :text="'Устройства отображения информации: часы-термометры, табло-метеостанции, табло погодных условий.'" 
                        :image="'product_image.png'"
                    />
                </div>
                <div class="col-3">
                    <ProductsItem 
                        :title="'Решения для транспорта'" 
                        :text="'Устройства отображения информации: часы-термометры, табло-метеостанции, табло погодных условий.'" 
                        :image="'product_image.png'"
                    />
                </div>
                <div class="col-3">
                    <ProductsItem 
                        :title="'Решения для транспорта'" 
                        :text="'Устройства отображения информации: часы-термометры, табло-метеостанции, табло погодных условий.'" 
                        :image="'product_image.png'"
                    />
                </div>
                <div class="col-3">
                    <ProductsItem 
                        :title="'Решения для транспорта'" 
                        :text="'Устройства отображения информации: часы-термометры, табло-метеостанции, табло погодных условий.'" 
                        :image="'product_image.png'"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProductsItem from './ProductsItem.vue'

export default {
    components: {
        ProductsItem
    },
}
</script>

<style lang="scss">
    .product {
        margin-bottom: 68px;
    }
</style>