<template>
    <div class="news-page mb-80">
        <Preloader v-if="loading" />
        <div v-else class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-12">
                    <h1 class="h1 mb-32">{{ news.title }}</h1>
                    <SwiperNews
                        v-if="news.images && news.images.length"
                        class="mb-40"
                        :images="news.images"
                    />
                    <div 
                        v-else-if="news.image"
                        class="news-page__image mb-40"
                        v-lazy:background-image="'/' + news.image"
                    ></div>
                    <div class="mb-24">
                        <div class="p2" v-if="news.text" v-html="news.text"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import SwiperNews from '@/components/Swipers/SwiperNews'

export default {
    name: "NewsPage",
    props: ["id"],
    components: {
        Preloader, SwiperNews
    },
    data() {
        return {
            news: {},
            loading: true
        }
    },
    created() {
        this.getPost(this.id);
    },
    methods: {
        getPost(id) {
            this.axios
                .get(`/rest/news/${id}`)
                .then(response => {
                    if (id == 'undefined') {
                        return Promise.reject();
                    }
                    this.news = response.data.object;
                    let breadcrumbs = [
                        {
                            path: '/',
                            name: 'Home',
                            meta: {
                            title: "Главная"
                            }
                        },
                        {
                            path: '/news',
                            name: 'News',
                            meta: {
                                title: "Новости"
                            }
                        },
                        {
                            path: `/news/${this.id}`,
                            name: 'NewsPage',
                            meta: {
                                title: this.news.title
                            }
                        }
                    ]
                    this.$store.commit("changeBreadcrumbs", breadcrumbs)
                    this.loading = false;
                }).catch(error => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        }
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