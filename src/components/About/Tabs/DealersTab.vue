<template>
    <div class="container mb-80">
        <Preloader v-if="loading" />
        <div class="row" v-else>
            <div class="col-lg-5 col-12">
                <Form
                    :title="'Хочу узнать условия и стать дилером!'"
                    :policy="false"
                    :mode="'light'"
                    :id="'dealers'"
                />
            </div>
            <div class="col-lg-7 col-12">
                <yandex-map 
                    :settings="settings"
                    :coords="[54.7348, 55.9578]"
                    :zoom="6"
                    :ymap-class="'ymap'"
                >
                    <ymap-marker 
                        v-for="dealer in dealers" 
                        :key="dealer.MIGX_id"
                        :marker-id="dealer.MIGX_id"
                        :icon="{
                            layout: 'default#imageWithContent',
                            imageHref: `/static/marker.png`,
                            imageSize: [42, 42],
                            imageOffset: [-21, -21],
                            content: '',
                            contentOffset: [0, 0],
                            contentLayout: `<div style='width: 50px; color: #FFFFFF; font-weight: bold;'>$[properties.iconContent]</div>`
                        }"
                        :coords="dealer.coordinates.split(',')"
                        :hint-content="dealer.name"
                        :balloon="{
                            header: dealer.name, 
                            body: dealer.description, 
                            footer: [
                                `
                                ${dealer.contacts}
                                <br/>
                                <a href='${dealer.website}' target='_blank'>${dealer.website}</a>
                                `
                            ].join('')
                        }"
                    >
                    </ymap-marker>
                </yandex-map>
            </div>
        </div>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters, mapActions } = createNamespacedHelpers("dealers");
import Form from '@/components/Form'

// yandex map
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
    components: {
        Form, Preloader, yandexMap, ymapMarker
    },
    data() {
        return {
            loading: true,
            settings: {
                apiKey: '',
                lang: 'ru_RU',
                coordorder: 'latlong',
                version: '2.1',
            }
        }
    },
    computed: {
        ...mapGetters([ 'dealers' ])
    },
    created() {
        this.getDealers().then((data) => {
            this.loading = false
        });
    },
    mounted() {

    },
    methods: {
        ...mapMutations(["setDealers"]),
        ...mapActions(['getDealers'])
    }
}
</script>

<style lang="scss">
    .ymap {
        width: 100%;
        min-height: 400px;
        &-container {
            height: 100%;
            & div {
                height: 100%;
            }
        }
    }
</style>