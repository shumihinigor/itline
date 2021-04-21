<template>
    <section class="support">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="h1 mb-24">Техподдержка</h1>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col">
                    <div>
                        <tabs @changed="tabChanged" :options="{ useUrlFragment: false }">
                            <tab to="ContactSupportTab" id="contacts_tab" name="Обратиться в техподдержку"></tab>
                            <tab to="WarrantyTab" id="warranty_tab" name="гарантия"></tab>
                            <tab to="KnowledgeBaseTab" id="knowledge_tab" name="база знаний"></tab>
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
    name: 'Support',
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