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

</style>