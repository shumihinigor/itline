<template>
    <div class="gallery-page mb-80">
        <Preloader v-if="loading" />
        <div v-else class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <h1 class="h1 mb-32">{{ gallery.title }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
export default {
    name: "GalleryPage",
    components: {
        Preloader
    },
    data() {
        return {
            gallery: {},
            loading: true
        }
    },
    created() {
        this.getGallery(this.$route.query.id)
    },
    methods: {
        getGallery(id) {
            this.axios
                .get('/static/about_gallery.json')
                .then(response => {
                    this.gallery = response.data.data.find((item) => {
                        return item.id == id
                    });
                    this.loading = false;
                });
        }
    },
}
</script>

<style lang="scss">
    .gallery-page {
        &__image {
            width: 100%;
            height: 338px;
            min-height: 338px;
            border-radius: 10px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            @media (max-width: 991px) {
                height: 240px;
                min-height: 240px;
            }
        }
        &__list {
            & ul {
                padding: 0 0 0 20px;
                margin: 0;
                & li {
                    margin-bottom: 4px;
                    &::marker {
                        color: $orange;
                    }
                }
            }
        }
        &__description {
            & p {
                font-family: $UbuntuLight;
            }
        }
    }
</style>