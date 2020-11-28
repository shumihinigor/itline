<template>
    <!-- blog -->
    <section class="main">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="bg-white pt-5 pb-5">
                        <div class="row justify-content-center">
                            <div class="col-lg-10 col-12">
                                <h3 class="main-blog__title title-h3 mb-5">Блог</h3>
                            </div>
                        </div>
                        <div class="row justify-content-center main-blog__block">
                            <div class="col-lg-10 col-12">
                                <div 
                                    v-if="page == 1"
                                    class="row"
                                >
                                    <BlogCard 
                                        date="14.08.2020"
                                        text="Обзор универсальных спортивных экранов от производителя ITLINE"
                                        image="blog-1.png"
                                    />
                                    <BlogCard 
                                        date="16.07.2020"
                                        text="Работа ITLINE  в режиме самоизоляции"
                                        image="blog-2.png"
                                    />
                                    <BlogCard 
                                        date="12.07.2020"
                                        text="Установлено табло  в остановочный комплекс Тулы"
                                        image="blog-3.png"
                                    />
                                    <BlogCard 
                                        date="10.07.2020"
                                        text="Выращиваем ценные кадры с детства"
                                        image="blog-4.png"
                                    />
                                    <BlogCard 
                                        date="12.07.2020"
                                        text="Установлено табло  в остановочный комплекс Тулы"
                                        image="blog-3.png"
                                    />
                                    <BlogCard 
                                        date="10.07.2020"
                                        text="Выращиваем ценные кадры с детства"
                                        image="blog-4.png"
                                    />
                                    <BlogCard 
                                        date="14.08.2020"
                                        text="Обзор универсальных спортивных экранов от производителя ITLINE"
                                        image="blog-1.png"
                                    />
                                    <BlogCard 
                                        date="16.07.2020"
                                        text="Работа ITLINE  в режиме самоизоляции"
                                        image="blog-2.png"
                                    />
                                </div>
                                <div 
                                    v-else-if="page == 2"
                                    class="row"
                                >
                                    <BlogCard 
                                        date="12.07.2020"
                                        text="Установлено табло  в остановочный комплекс Тулы"
                                        image="blog-3.png"
                                    />
                                    <BlogCard 
                                        date="10.07.2020"
                                        text="Выращиваем ценные кадры с детства"
                                        image="blog-4.png"
                                    />
                                    <BlogCard 
                                        date="14.08.2020"
                                        text="Обзор универсальных спортивных экранов от производителя ITLINE"
                                        image="blog-1.png"
                                    />
                                    <BlogCard 
                                        date="16.07.2020"
                                        text="Работа ITLINE  в режиме самоизоляции"
                                        image="blog-2.png"
                                    />
                                    <BlogCard 
                                        date="14.08.2020"
                                        text="Обзор универсальных спортивных экранов от производителя ITLINE"
                                        image="blog-1.png"
                                    />
                                    <BlogCard 
                                        date="16.07.2020"
                                        text="Работа ITLINE  в режиме самоизоляции"
                                        image="blog-2.png"
                                    />
                                    <BlogCard 
                                        date="12.07.2020"
                                        text="Установлено табло  в остановочный комплекс Тулы"
                                        image="blog-3.png"
                                    />
                                    <BlogCard 
                                        date="10.07.2020"
                                        text="Выращиваем ценные кадры с детства"
                                        image="blog-4.png"
                                    />
                                </div>
                                <div 
                                    v-else-if="page == 3"
                                    class="row"
                                >
                                    <BlogCard 
                                        date="14.08.2020"
                                        text="Обзор универсальных спортивных экранов от производителя ITLINE"
                                        image="blog-1.png"
                                    />
                                    <BlogCard 
                                        date="16.07.2020"
                                        text="Работа ITLINE  в режиме самоизоляции"
                                        image="blog-2.png"
                                    />
                                    <BlogCard 
                                        date="10.07.2020"
                                        text="Выращиваем ценные кадры с детства"
                                        image="blog-4.png"
                                    />
                                    <BlogCard 
                                        date="14.08.2020"
                                        text="Обзор универсальных спортивных экранов от производителя ITLINE"
                                        image="blog-1.png"
                                    />
                                    <BlogCard 
                                        date="16.07.2020"
                                        text="Работа ITLINE  в режиме самоизоляции"
                                        image="blog-2.png"
                                    />
                                    <BlogCard 
                                        date="12.07.2020"
                                        text="Установлено табло  в остановочный комплекс Тулы"
                                        image="blog-3.png"
                                    />
                                    <BlogCard 
                                        date="10.07.2020"
                                        text="Выращиваем ценные кадры с детства"
                                        image="blog-4.png"
                                    />
                                    <BlogCard 
                                        date="12.07.2020"
                                        text="Установлено табло  в остановочный комплекс Тулы"
                                        image="blog-3.png"
                                    />
                                </div>
                                <div 
                                    v-else
                                    class="row"
                                >
                                    <BlogCard 
                                        date="14.08.2020"
                                        text="Обзор универсальных спортивных экранов от производителя ITLINE"
                                        image="blog-1.png"
                                    />
                                    <BlogCard 
                                        date="16.07.2020"
                                        text="Работа ITLINE  в режиме самоизоляции"
                                        image="blog-2.png"
                                    />
                                    <BlogCard 
                                        date="12.07.2020"
                                        text="Установлено табло  в остановочный комплекс Тулы"
                                        image="blog-3.png"
                                    />
                                    <BlogCard 
                                        date="10.07.2020"
                                        text="Выращиваем ценные кадры с детства"
                                        image="blog-4.png"
                                    />
                                    <BlogCard 
                                        date="14.08.2020"
                                        text="Обзор универсальных спортивных экранов от производителя ITLINE"
                                        image="blog-1.png"
                                    />
                                    <BlogCard 
                                        date="16.07.2020"
                                        text="Работа ITLINE  в режиме самоизоляции"
                                        image="blog-2.png"
                                    />
                                    <BlogCard 
                                        date="10.07.2020"
                                        text="Выращиваем ценные кадры с детства"
                                        image="blog-4.png"
                                    />
                                    <BlogCard 
                                        date="12.07.2020"
                                        text="Установлено табло  в остановочный комплекс Тулы"
                                        image="blog-3.png"
                                    />
                                </div>
                                <paginate
                                    v-model="page"
                                    :page-count="pageCount"
                                    :page-range="2"
                                    :margin-pages="2"
                                    :click-handler="clickCallback"
                                    :prev-text="'&#8592;'"
                                    :next-text="'&#8594;'"
                                    :container-class="'pagination'"
                                    :page-class="'page-item text-xl'"
                                    :prev-class="'prev'"
                                    :next-class="'next'"
                                >
                                </paginate>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlogCard from '@/components/BlogCard.vue'
    import Paginate from 'vuejs-paginate'
    
    export default {
        name: 'Blog',
        components: {
            BlogCard, Paginate
        },
        data() {
            return {
                page: 1,
                pageCount: 4
            }
        },
        methods: {
            clickCallback (pageCount) {
                console.log(pageCount);
            }
        }
    }
</script>

<style lang="scss">
    .main-blog__title{
        @media (max-width: 991px) {
            padding: 0 15px;
        }
    }
    .pagination{
        display: flex;
        justify-content: center;
        & li a {
            &:focus{
                outline: none;
            }
            &:hover{
                border: 1px solid $orange;
            }
        }
        & .page-item {
            a{
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                max-width: 60px;
                min-width: 60px;
                max-height: 60px;
                min-height: 60px;
                color: $black;
                text-align: center;
                border: 1px solid $gray;
                border-radius: 5px;
                margin-right: 10px;
                cursor: pointer;
                text-decoration: none;
                @media (max-width: 991px) {
                    padding: 2px;
                    max-width: 35px;
                    min-width: 35px;
                    max-height: 35px;
                    min-height: 35px;
                }
            }
            &.active a{
                color: $orange;
                font-weight: bold;
            }
            &.disabled a {
                cursor: default;
                &:hover{
                    border: 1px solid $gray;
                }
            }
        }
        & .prev {
            & a {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                max-width: 60px;
                min-width: 60px;
                max-height: 60px;
                min-height: 60px;
                color: $black;
                text-align: center;
                border: 1px solid $gray;
                border-radius: 5px;
                margin-right: 10px;
                cursor: pointer;
                text-decoration: none;
                font-size: calc(20px + 10 * (100vw / 1140)) !important;
                @media (max-width: 991px) {
                    padding: 2px;
                    max-width: 35px;
                    min-width: 35px;
                    max-height: 35px;
                    min-height: 35px;
                    line-height: 25px;
                }
                &:hover{
                    color: $orange;
                }
            }
            &.disabled {
                opacity: .3;
                transition: all .2s;
                pointer-events: none;
            }
        }
        & .next {
            & a {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                max-width: 60px;
                min-width: 60px;
                max-height: 60px;
                min-height: 60px;
                color: $black;
                text-align: center;
                border: 1px solid $gray;
                border-radius: 5px;
                cursor: pointer;
                text-decoration: none;
                font-size: calc(20px + 10 * (100vw / 1140)) !important;
                @media (max-width: 991px) {
                    padding: 2px;
                    max-width: 35px;
                    min-width: 35px;
                    max-height: 35px;
                    min-height: 35px;
                    line-height: 25px;
                }
                &:hover{
                    color: $orange;
                }
            }
            &.disabled {
                opacity: .3;
                transition: all .2s;
                pointer-events: none;
            }
        }
    }
</style>