<template>
    <section class="products">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="h1 mb-24">Продукция</h1>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col">
                    <div>
                        <tabs @changed="tabChanged" :options="{ useUrlFragment: false }">
                            <tab to="OutputTab" id="products_tab" name="Продукция"></tab>
                            <tab to="PaymentTab" id="payment_tab" name="Оплата и доставка"></tab>
                        </tabs>
                    </div>
                </div>
            </div>
        </div>

        <transition
            name="fade"
            mode="out-in"
        >
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
import Vue from 'vue';
import Tabs from 'vue-tabs-component';

Vue.use(Tabs);

export default {
    name: 'Products',
    methods: {
        tabChanged(selectedTab) {
            if (this.$route.name !== selectedTab.tab.$attrs.to) {
                this.$router.push({ name: selectedTab.tab.$attrs.to })
            }
        }
    }
}
</script>

<style lang="scss">

</style>