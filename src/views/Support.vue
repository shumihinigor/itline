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
                        <tabs ref="tabs" @changed="tabChanged" :options="{ useUrlFragment: false }">
                            <tab to="ContactSupportTab" id="contactsTab" name="Обратиться в техподдержку"></tab>
                            <tab to="WarrantyTab" id="warrantyTab" name="гарантия"></tab>
                            <tab to="KnowledgeBaseTab" id="knowledgeTab" name="база знаний"></tab>
                        </tabs>
                    </div>
                </div>
            </div>
        </div>

        <transition
            name="fade"
            mode="out-in"
        >
            <ContactSupportTab v-if="currentTab == 'contactsTab'" />
            <WarrantyTab v-else-if="currentTab == 'warrantyTab'" />
            <KnowledgeBaseTab v-else-if="currentTab == 'knowledgeTab'" />
        </transition>

    </section>
</template>

<script>
import Vue from 'vue';
import Tabs from 'vue-tabs-component';

// tabs
import ContactSupportTab from '@/components/Support/Tabs/ContactSupportTab'
import WarrantyTab from '@/components/Support/Tabs/WarrantyTab'
import KnowledgeBaseTab from '@/components/Support/Tabs/KnowledgeBaseTab'

Vue.use(Tabs);

export default {
    name: 'Support',
    props: ["tab"],
    components: {
        ContactSupportTab,
        WarrantyTab,
        KnowledgeBaseTab
    },
    data() {
        return {
            currentTab: 'contactsTab'
        }
    },
    created() {
        let breadcrumbs = [
            {
                path: '/',
                name: 'Home',
                meta: {
                    title: "Главная"
                }
            },
            {
                path: '/support',
                name: 'Support',
                meta: {
                    title: "Техподдержка"
                }
            }
        ]
        this.$store.commit("changeBreadcrumbs", breadcrumbs)
    },
    mounted() {
        if (this.tab) {
            this.$refs.tabs.selectTab(this.tab)
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