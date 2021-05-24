<template>
    <div class="breadcrumb">
        <div class="d-flex" v-if="!breadcrumbs.length" >
            <div class="breadcrumb-item">
                <div class="stub-breadcrumb"></div>
            </div>
            <div class="breadcrumb-item">
                <div class="stub-breadcrumb"></div>
            </div>
            <div class="breadcrumb-item">
                <div class="stub-breadcrumb"></div>
            </div>
        </div>
        <div v-else class="breadcrumb-item" v-for="(item, index) in breadcrumbs" :key="index">
            <router-link
                class=""
                :to="{ name: item.name }"
            >{{ item.meta.title }}</router-link>
        </div>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import { mapGetters } from "vuex";
export default {
    components: {
        Preloader
    },
    computed: {
        ...mapGetters(["breadcrumbs"]),
    }
}
</script>

<style lang="scss">
.breadcrumb {
    &-item {
        & .disabled {
            height: 18px;
            width: 125px;
            background-color: $grey-6;
        }
    }
}
</style>