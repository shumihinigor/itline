<template>
    <div class="gallery-page mb-80">
        <Preloader v-if="loading" />
        <div class="container" v-else-if="galleryPage.images && galleryPage.images.length">
            <div class="row justify-content-center mb-40">
                <div class="col-12">
                    <h1 class="h1 mb-0">{{ galleryPage.title }}</h1>
                </div>
            </div>
            <div class="row">
                <div 
                    v-for="(item, imageIndex) in galleryPage.images" :key="imageIndex"
                    :class="['col-12 mb-24', 'col-lg-' + 4]" 
                >
                    <div 
                        class="gallery-page__image"
                        v-lazy:background-image="item"
                        @click="index = imageIndex"
                    ></div>
                </div>
            </div>
            <CoolLightBox 
                :items="galleryPage.images" 
                :index="index"
                :effect="'fade'"
                @close="index = null">
            </CoolLightBox>
        </div>
        <NothingFound
            :push-name="'About'"
            v-else
        />
    </div>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import NothingFound from '@/components/NothingFound'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters, mapActions } = createNamespacedHelpers("gallery");

export default {
    name: "GalleryPage",
    props: ["id"],
    components: {
        Preloader, CoolLightBox, NothingFound
    },
    data() {
        return {
            loading: true,
            index: null
        }
    },
    computed: {
        ...mapGetters([
            'galleryPage'
        ]),
    },
    created() {
        this.getGalleryPage(this.id).then(() => this.loading = false);
    },
    methods: {
        ...mapActions(['getGalleryPage'])
    },
    destroyed() {
        this.$store.commit('changeBreadcrumbs', []);
    }
}
</script>

<style lang="scss">
    .gallery-page {
        &__image {
            width: 100%;
            height: 280px;
            min-height: 280px;
            border-radius: 10px;
            // background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            cursor: pointer;
            @media (max-width: 991px) {
                height: 240px;
                min-height: 240px;
            }
        }
    }
</style>