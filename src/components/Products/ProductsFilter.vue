<template>
    <div>
        <p class="p2 weight-bold mb-16">Категории:</p>
        <ul class="product-filter">
            <li 
                :class="['p2', {active: product.alias == $route.params.id}]" 
                v-for="(product, index) in products" 
                :key="index"
            >
                <span @click.stop="goToProductsCategoryList(product.alias)">{{ product.name }}</span>
                <ul>
                    <Preloader v-if="categories && !categories.length" />
                    <li 
                        v-else
                        v-for="(category, index) in categories" 
                        :class="['p2', {active: category.params.alias == $route.params.category_id}]"
                        :key="index"
                    >
                        <span @click.stop="goToProductsCategoryPage(product.alias, category.params.alias)">{{ category.params.title }}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
export default {
    props: ["products", "categories"],
    components: {
        Preloader
    },
    data() {
        return {}
    },
    methods: {
        goToProductsCategoryList(id) {
            if (this.$route.params.id !== id) {
                this.$router.push({ name: 'ProductsCategoryList', params: { id: id } });
            }
        },
        goToProductsCategoryPage(id, category_id) {
            if (this.$route.params.category_id !== category_id) {
                this.$router.push({ name: 'ProductsCategoryPage', params: { id: id, category_id: category_id } });
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
                & > span {
                    cursor: default;
                }
                & > ul {
                    display: flex;
                }
            }
        }
        & .loader {
            margin: 0 auto;
            width: 10px;
            height: 10px;
            top: -20px;
            &::before,
            &::after {
                width: 10px;
                height: 10px;
            }
        }
    }
}   
</style>