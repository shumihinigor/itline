<template>
    <div class="gallery-page mb-80">
        <Preloader v-if="loading" />
        <div class="container" v-else-if="gallery.image_list.length">
            <div class="row justify-content-center mb-40">
                <div class="col-12">
                    <h1 class="h1 mb-0">{{ gallery.title }}</h1>
                </div>
            </div>
            <div class="row">
                <div 
                    v-for="(item, imageIndex) in gallery.image_list" :key="imageIndex"
                    :class="['col-12 mb-24', 'col-lg-' + item.col]" 
                >
                    <div 
                        class="gallery-page__image"
                        :style="{'background-image': 'url(' + item.src + ')'}"
                        @click="index = imageIndex"
                    ></div>
                </div>
            </div>
            <CoolLightBox 
                :items="gallery.image_list" 
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
        this.getGallery(this.id)
    },
    methods: {
        getGallery(id) {
            this.axios
                .get('/static/gallery.json')
                .then(response => {
                    if (id == 'undefined') {
                        return Promise.reject();
                    }
                    this.gallery = response.data.data.find((item) => {
                        return item.id == id
                    });
                    if (this.gallery.image_list.length) {
                        this.gallery.image_list.map((item) => {
                            item.src = require('../../assets/images/gallery/' + item.src)
                        })
                    }
                    this.loading = false;
                }).catch(error => {
                    console.log(error);
                    // this.$router.push({ name: 'PageNotFound' });
                });
        }
    },
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