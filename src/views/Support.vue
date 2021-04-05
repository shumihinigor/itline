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
    .tabs-component-tabs {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        flex-wrap: nowrap;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 50px;
        overflow: auto;
        padding-bottom: 10px;
    }
    .tabs-component-tab {
        position: relative;
        margin-right: 32px;
        font-size: 16px;
        line-height: 22px;
        font-family: $TTNormsRegular;
        white-space: nowrap;
        & a {
            color: $grey-3;
            text-transform: uppercase;
            text-decoration: none;
        }
        &:last-child {
            margin-right: 0;
        }
        &::after {
            content: '';
            position: absolute;
            bottom: -6px;
            right: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: $orange;
            transition: all 0.2s;
        }
        &.is-active {
            // font-family: $TTNormsBold;
            &::after {
                width: 100%;
            }
        }
    }
</style>