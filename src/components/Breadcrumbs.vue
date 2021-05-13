<template>
    <div class="breadcrumb">
        <div class="breadcrumb-item" v-for="(item, index) in breadcrumbs" :key="index">
            <router-link 
                class=""
                :to="{ name: item.name }"
            >{{ item.meta.title }}</router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["breadcrumbs"]),
    }
}
</script>

<style lang="scss">

</style>