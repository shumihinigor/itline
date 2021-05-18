<template>
    <div>
        <p class="p2 weight-bold mb-16">Категории:</p>
        <ul class="product-filter">
            <li 
                :class="['p2', {active: product.alias == $route.params.id}]" 
                v-for="(product, index) in products" 
                :key="index"
            >
                <span @click.stop="goToProductsCategory(product.alias)">{{ product.name }}</span>
                <ul>
                    <li
                        :class="['p2', {active: category.alias == $route.params.category_id}]"
                        v-for="(category, index) in categories" 
                        :key="index"
                    >
                        <span @click.stop="goToProductsCategoryPage(product.alias, category.alias)">{{ category.title }}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["products", "categories"],
    data() {
        return {
            loading: true
        }
    },
    created() {
        
    },
    methods: {
        changeCategory(id) {
            this.$emit('change-category', id);
        },
        changeCategoryPage(id) {
            this.$emit('change-category-page', id);
        },
        goToProductsCategory(id) {
            if (this.$route.params.id !== id) {
                this.$router.push({ name: 'ProductsCategory', params: { id: id } })
                this.changeCategory(id);
            }
        },
        goToProductsCategoryPage(id, category_id) {
            if (this.$route.params.category_id !== category_id) {
                this.$router.push({ name: 'ProductsCategoryPage', params: { id: id, category_id: category_id } })
                this.changeCategoryPage(id);
            }
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
            @media (max-width: 991px) {
                margin-bottom: 32px;
            }
            & span {
                cursor: pointer;
            }
            & li {
                margin-bottom: 6px;
                transition: all 0.2s;
                &:last-child {
                    margin-bottom: 0;
                }
                & > ul {
                    display: none;
                    flex-direction: column;
                    align-items: flex-start;
                    width: 100%;
                    padding: 10px 0 10px 0;
                    margin-left: 15px;
                    list-style: none;
                    transition: all 0.2s;
                    & > li {
                        margin-bottom: 6px;
                        transition: all 0.2s;
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
                &:hover,
                &.active {
                    transition: all 0.2s;
                    & > span {
                        color: $orange;
                    }
                }
                &.active {
                    & > ul {
                        display: flex;
                    }
                }
            }
        }
    }
</style>