<template>
    <div class="news-page mb-80">
        <Preloader v-if="loading" />
        <div v-else class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-12">
                    <h1 class="h1 mb-32">{{ news.title }}</h1>
                    <div 
                        v-if="!news.bg.includes('white') && !news.bg.includes('gradient')"
                        class="news-page__image mb-40"
                        :style="{'background-image': 'url(' + require('../../assets/images/' + news.bg) + ')'}"
                    ></div>
                    <h6 class="h6 text-uppercase text-grey-1 mb-16">{{ news.heading }}</h6>
                    <div class="mb-24">
                        <p class="p2 mb-8" v-for="(text, index) in news.text" :key="index">{{ text }}</p>
                    </div>
                    <div class="news-page__list mb-24">
                        <h6 class="h6 mb-16">{{ news.subtitle }}</h6>
                        <ul>
                            <li v-for="(item, index) in news.list" :key="index" class="p2 text-grey-2">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                    <div class="news-page__description">
                        <p class="p4 text-grey-3 mb-8">* Текст дополнения</p>
                        <p class="p4 text-grey-3 mb-0">{{ news.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
export default {
    name: "NewsPage",
    props: ["id"],
    components: {
        Preloader
    },
    data() {
        return {
            news: {},
            loading: true
        }
    },
    created() {
        this.getPost(this.id)
    },
    methods: {
        getPost(id) {
            this.axios
                .get('/static/news.json')
                .then(response => {
                    if (id == 'undefined') {
                        return Promise.reject();
                    }
                    this.news = response.data.data.find((item) => {
                        return item.id == id
                    });
                    this.loading = false;
                }).catch(error => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        }
    },
}
</script>

<style lang="scss">
    .news-page {
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