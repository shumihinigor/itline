<template>
    <div>
        <p class="p2 weight-bold mb-16">Категории:</p>
        <ul class="product-filter">
            <router-link 
                :class="['p2', {active: product.id == $route.query.id}]" 
                v-for="(product, index) in products" 
                :key="index" 
                tag="li"
                exact-active-class="active"
                :to="{ name: 'ProductsCategory', query: { id: product.id, title: product.title  } }"
            >
                <span @click="changeFilter(product)">{{ product.title }}</span>
                <ul>
                    <router-link 
                        class="p2" 
                        v-for="(item, index) in product.category" 
                        :key="index" 
                        tag="li"
                        exact-active-class="active"
                        :to="{ name: 'ProductsCategoryPage', query: { id: product.id, title: product.title, category_id: item.id, category_title: item.title  } }"
                    >
                        <span @click="changeFilter(product)">{{ item.title }}</span>
                    </router-link>
                </ul>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["products"],
    data() {
        return {
            loading: true
        }
    },
    created() {
        
    },
    methods: {
        changeFilter(product) {
            this.$emit('change', product);
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