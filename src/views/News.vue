<template>
    <section class="news mb-80">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="h1 mb-24">Новости</h1>
                </div>
            </div>
        </div>
        <Preloader v-if="loading" />
        <div v-else class="container">
            <div class="row">

                <NewsItem
                    v-for="(item, index) in currentBlock" :key="index"
                    :col="4"
                    :title="item.title"
                    :text="item.short_description"
                    :image="item.image"
                    :date="item.date"
                    :id="item.alias"
                />

            </div>
            <div class="row">
                <div class="col">
                    <paginate
                        :page-count="pageCount"
                        :prev-text="''"
                        :next-text="''"
                        :prev-class="'paginate-prev'"
                        :next-class="'paginate-next'"
                        :page-class="'paginate-item'"
                        :container-class="'paginate'"
                        v-model="page"
                    >
                    </paginate>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import NewsItem from '@/components/News/NewsItem'

export default {
    components: {
        NewsItem, Preloader
    },
    name: 'News',
    data() {
        return {
            page: 1,
            news: [],
            loading: true,
            count: 9,
            pageCount: 2
        }
    },
    computed: {
        currentBlock() {
            return this.news.slice((this.page - 1) * this.count, this.page * this.count);
        }
    },
    created() {
        this.getPost();
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
            }
        ]
        this.$store.commit("changeBreadcrumbs", breadcrumbs)
    },
    methods: {
        getPost() {
            this.axios
                .get('/rest/news')
                .then(response => {
                    this.news = response.data.results;
                    this.pageCount = Math.ceil(this.news.length / 9);
                    this.loading = false;
                }).catch(error => {
                    this.$router.push({ name: 'PageNotFound' });
                });
        }
    },
}
</script>

<style lang="scss">
    .paginate {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        padding: 16px 0;
        margin: 0;
        & .disabled {
            opacity: 0.35;
            cursor: auto;
            pointer-events: none;
        }
        &-prev {
            & a {
                margin-right: 28px;
                cursor: pointer;
                display: block;
                width: 40px;
                height: 40px;
                min-width: 40px;
                min-height: 40px;
                border-radius: 50%;
                font-family: serif;
                background-color: $white;
                box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
                background-image: url('../assets/images/arrow_prev.svg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 12px 19px;
                outline: none;
                &:hover {
                    transition: all 0.2s;
                    background-color: #FBFBFB;
                    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
                }
            }
        }
        &-next {
            & a {
                margin-left: 28px;
                cursor: pointer;
                display: block;
                width: 40px;
                height: 40px;
                min-width: 40px;
                min-height: 40px;
                border-radius: 50%;
                font-family: serif;
                background-color: $white;
                box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
                background-image: url('../assets/images/arrow_next.svg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 12px 19px;
                outline: none;
                &:hover {
                    transition: all 0.2s;
                    background-color: #FBFBFB;
                    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
                }
            }
        }
        &-item {
            margin: 0 12px;
            & a {
                font-family: $TTNormsRegular;
                font-size: 18px;
                line-height: 24px;
                color: $grey-2;
                outline: none;
                &:hover {
                    color: $orange;
                }
            }
            &.active {
                & a {
                    color: $orange;
                    outline: none;
                }
            }
        }
    }
</style>