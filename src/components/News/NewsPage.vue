<template>
    <div class="news-page mb-80">
        <Preloader v-if="loading" />
        <div v-else class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-12">
                    <h1 class="h1 mb-32">{{ newsPage.title }}</h1>
                    <SwiperNews
                        v-if="newsPage.images && newsPage.images.length"
                        class="mb-40"
                        :images="newsPage.images"
                    />
                    <!-- <div 
                        v-else-if="newsPage.image"
                        class="news-page__image mb-40"
                        v-lazy:background-image="'/' + newsPage.image"
                    ></div> -->
                    <div class="mb-24">
                        <div class="p2" v-if="newsPage.text" v-html="newsPage.text"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import SwiperNews from '@/components/Swipers/SwiperNews'

import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters, mapActions } = createNamespacedHelpers("news");

export default {
    name: "NewsPage",
    props: ["id"],
    components: {
        Preloader, SwiperNews
    },
    data() {
        return {
            loading: true
        }
    },
    computed: {
        ...mapGetters([
            'newsPage'
        ]),
    },
    created() {
        
        this.getNewsPage(this.id).then(() => {
            // seo
            this.$store.commit('setSeoTitle', this.newsPage.seo_title);
            this.$store.commit('setSeoDescription', this.newsPage.seo_description);

            this.loading = false;
        });
    },
    methods: {
        ...mapActions(['getNewsPage']),
    },
    destroyed() {
        this.$store.commit("changeBreadcrumbs", []);
    }
}
</script>

<style lang="scss">
    .news-page {
        & img {
            max-width: 100%;
            max-height: 100%;
        }
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