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
                        <tabs @changed="tabChanged" :options="{ useUrlFragment: false, defaultTabHash: 'products_tab' }">
                            <tab id="productsTab" name="Продукция"></tab>
                            <tab id="paymentTab" name="Оплата и доставка"></tab>
                        </tabs>
                    </div>
                </div>
            </div>
        </div>

        <transition
            name="fade"
            mode="out-in"
        >
            <OutputTab v-if="currentTab == 'productsTab'" />
            <PaymentTab v-else-if="currentTab == 'paymentTab'" />
        </transition>
    </section>
</template>

<script>
import Vue from 'vue';
import Tabs from 'vue-tabs-component';

// tabs
import OutputTab from '@/components/Products/Tabs/OutputTab'
import PaymentTab from '@/components/Products/Tabs/PaymentTab'

Vue.use(Tabs);

export default {
    name: 'Products',
    components: {
        OutputTab, PaymentTab
    },
    data() {
        return {
            currentTab: 'productsTab'
        }
    },
    methods: {
        tabChanged(selectedTab) {
            this.currentTab = selectedTab.tab.id;
        }
    }
}
</script>

<style lang="scss">

</style>