<template>
    <div class="breadcrumbs">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="d-flex">
                        <div class="breadcrumbs-item" v-for="(breadcrumb, idx) in breadcrumbs" :key="idx">
                            <router-link class="p4" :to="{ name: breadcrumb.name }">{{ breadcrumb.title }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(["breadcrumbs"]),
    },
    updated() {
        console.log(this.$router);
    }
}
</script>

<style lang="scss">
    .breadcrumbs {
        position: relative;
        padding: 32px 0;
        &-item {
            display: flex;
            align-items: center;
            &:last-child {
                pointer-events: none;
                & a {
                    color: $orange;
                }
                &::after {
                    display: none;
                }
            }
            & a {
                text-decoration: none;
                color: $grey-2;
                font-family: $TTNormsRegular;
                &:hover {
                    text-decoration: none;
                    color: $grey-2;
                }
            }
            &::after {
                content: '';
                display: block;
                margin: 0 10px;
                width: 20px;
                height: 1px;
                background-color: $grey-2;
            }
        }
    }
</style>