<template>
    <div class="gallery-page mb-80">
        <Preloader v-if="loading" />
        <div class="container" v-else-if="gallery.images && gallery.images.length">
            <div class="row justify-content-center mb-40">
                <div class="col-12">
                    <h1 class="h1 mb-0">{{ gallery.title }}</h1>
                </div>
            </div>
            <div class="row">
                <div 
                    v-for="(item, imageIndex) in gallery.images" :key="imageIndex"
                    :class="['col-12 mb-24', 'col-lg-' + 4]" 
                >
                    <div 
                        class="gallery-page__image"
                        :style="{'background-image': 'url(' + item + ')'}"
                        @click="index = imageIndex"
                    ></div>
                </div>
            </div>
            <CoolLightBox 
                :items="gallery.images" 
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

export default {
    name: "GalleryPage",
    props: ["id"],
    components: {
        Preloader, CoolLightBox, NothingFound
    },
    data() {
        return {
            gallery: {},
            loading: true,
            index: null
        }
    },
    created() {
        this.getGallery(this.id);
    },
    methods: {
        getGallery(id) {
            this.axios
                .get(`/rest/gallery/${id}`)
                .then(response => {
                    if (id == 'undefined') {
                        return Promise.reject();
                    }
                    this.gallery = response.data.object;
                    let breadcrumbs = [
                        {
                            path: '/',
                            name: 'Home',
                            meta: {
                                title: "Главная"
                            }
                        },
                        {
                            path: '/about',
                            name: 'About',
                            meta: {
                                title: "О компании"
                            }
                        },
                        {
                            path: `/about/gallery/${id}`,
                            name: 'GalleryPage',
                            meta: {
                                title: this.gallery.title
                            }
                        }
                    ]
                    this.$store.commit("changeBreadcrumbs", breadcrumbs);
                    this.loading = false;
                }).catch(error => {
                    // this.$router.push({ name: 'PageNotFound' });
                });
        }
    },
    destroyed() {
        this.$store.commit("changeBreadcrumbs", []);
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