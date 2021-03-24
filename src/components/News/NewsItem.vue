<template>
    <div :class="['col-12 mb-24', 'col-lg-' + col]">
        <router-link :to="{ name: 'NewsPage', query: { title: title, id: id }}" tag="div" :class="['news-item', {'text_white': bg !== 'white'}, {'image': bg !== 'white' && bg !== 'gradient'}]" :style="background(bg)">
            <h6 class="h6 text-uppercase text-grey-1 news-item__title">{{ title }}</h6>
            <p class="p2 news-item__text text-grey-2 mb-24">
                {{ text }}
            </p>
            <div class="d-flex justify-content-between">
                <div class="d-flex">
                    <p class="p5 text-grey-2 mb-0 d-flex align-items-center mr-16">
                        <img svg-inline src="../../assets/images/like.svg" alt="like">
                        <span class="ml-1">{{ likes }}</span>
                    </p>
                    <p class="p5 text-grey-2 mb-0 d-flex align-items-center mr-16">
                        <img svg-inline src="../../assets/images/comment.svg" alt="comment">
                        <span class="ml-1">{{ comments }}</span>
                    </p>
                    <p class="p5 text-grey-2 mb-0 d-flex align-items-center">
                        <img svg-inline src="../../assets/images/view.svg" alt="view">
                        <span class="ml-1">{{ views }}</span>
                    </p>
                </div>
                <div class="">
                    <p class="p5 text-grey-2 mb-0">{{ date }}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ["col", "title", "text", "bg", "date", "likes", "comments", "views", "id"],
    methods: {
        background(bg) {
            if (bg == 'white') {
                return 'background: #FFFFFF;'
            } else if (bg == 'gradient') {
                return 'background: linear-gradient(144.77deg, #EF6F2E 0.25%, #FFC839 107.32%);'
            } else {
                return 'background-image: url(' + require('../../assets/images/' + bg) + ');'
            }
        }
    },
}
</script>

<style lang="scss">
    .news {
        &-item {
            position: relative;
            z-index: 0;
            display: flex;
            flex-direction: column;
            padding: 11px 16px;
            border-radius: 10px;
            height: 100%;
            min-height: 280px;
            background-size: cover;
            background-position: left top;
            background-repeat: no-repeat;
            overflow: hidden;
            cursor: pointer;
            @media (max-width: 991px) {
                min-height: auto;
                padding: 32px 20px;
            }
            &.image {
                &::before {
                    content: '';
                    position: absolute;
                    z-index: -1;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #000000 100%);
                }
            }
            &.text_white {
                & .news-item__title {
                    color: $white;
                }
                & p {
                    color: $white;
                }
                & svg {
                    & path {
                        fill: white;
                    }
                }
            }
            &__title {
                margin-top: auto;
            }
            &__text {

            }
        }
    }
</style>