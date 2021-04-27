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
                            <tab id="informationTab" name="Общая информация"></tab>
                            <tab id="certificatesTab" name="сертификаты"></tab>
                            <tab id="vacanciesTab" name="вакансии"></tab>
                            <tab id="historyTab" name="история"></tab>
                            <tab id="galleryTab" name="галерея"></tab>
                            <tab id="dealersTab" name="Дилеры"></tab>
                        </tabs>
                    </div>
                </div>
            </div>
        </div>
        <transition
            name="fade"
            mode="out-in"
        >
            <InformationTab v-if="currentTab == 'informationTab'" />
            <CertificatesTab v-else-if="currentTab == 'certificatesTab'" />
            <VacanciesTab v-else-if="currentTab == 'vacanciesTab'" />
            <HistoryTab v-else-if="currentTab == 'historyTab'" />
            <GalleryTab v-else-if="currentTab == 'galleryTab'" />
            <DealersTab v-else-if="currentTab == 'dealersTab'" />
        </transition>
    </section>
</template>

<script>
import Vue from 'vue';
import Tabs from 'vue-tabs-component';

// tabs
import InformationTab from '@/components/About/Tabs/InformationTab'
import CertificatesTab from '@/components/About/Tabs/CertificatesTab'
import VacanciesTab from '@/components/About/Tabs/VacanciesTab'
import HistoryTab from '@/components/About/Tabs/HistoryTab'
import GalleryTab from '@/components/About/Tabs/GalleryTab'
import DealersTab from '@/components/About/Tabs/DealersTab'

Vue.use(Tabs);

    export default {
        name: 'About',
        components: {
            InformationTab,
            CertificatesTab,
            VacanciesTab,
            HistoryTab,
            GalleryTab,
            DealersTab
        },
        data() {
            return {
                currentTab: 'informationTab'
            }
        },
        methods: {
            tabChanged(selectedTab) {
                this.currentTab = selectedTab.tab.id;
            }
        },
    }
</script>

<style lang="scss">

</style>