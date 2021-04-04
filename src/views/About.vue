<template>
    <section class="about">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="h1 mb-24">О компании</h1>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col">
                    <div>
                        <tabs @changed="tabChanged" :options="{ useUrlFragment: false }">
                            <tab to="InformationTab" id="information_tab" name="Общая информация"></tab>
                            <tab to="CertificatesTab" id="certificates_tab" name="сертификаты"></tab>
                            <tab to="VacanciesTab" id="vacancies_tab" name="вакансии"></tab>
                            <tab to="HistoryTab" id="history_tab" name="история"></tab>
                            <tab to="GalleryTab" id="gallery_tab" name="галерея"></tab>
                            <tab to="DealersTab" id="dealers_tab" name="Дилеры"></tab>
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
        name: 'About',
        methods: {
            tabChanged(selectedTab) {
                if (this.$route.name !== selectedTab.tab.$attrs.to) {
                    this.$router.push({ name: selectedTab.tab.$attrs.to })
                }
            }
        },
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