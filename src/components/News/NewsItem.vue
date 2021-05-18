<template>
    <div :class="['col-12 mb-24', 'col-lg-' + col]">
        <router-link 
            :to="{ name: 'NewsPage', meta: { title: title }, params: { id: id } }" tag="div"
            :class="['news-item', image == '' ? 'gradient' : 'image']" 
            v-lazy:background-image="image"
        >
            <h6 class="h6 text-uppercase text-grey-1 news-item__title">{{ title }}</h6>
            <p class="p2 news-item__text text-grey-2 mb-0">
                {{ text }}
            </p>
            <div class="d-flex justify-content-end">
                <!-- <div class="d-flex">
                    <p class="p5 text-grey-2 mb-0 d-flex align-items-center mr-16" v-if="likes">
                        <img svg-inline src="../../assets/images/like.svg" alt="like">
                        <span class="ms-1">{{ likes }}</span>
                    </p>
                    <p class="p5 text-grey-2 mb-0 d-flex align-items-center mr-16" v-if="comments">
                        <img svg-inline src="../../assets/images/comment.svg" alt="comment">
                        <span class="ms-1">{{ comments }}</span>
                    </p>
                    <p class="p5 text-grey-2 mb-0 d-flex align-items-center" v-if="views">
                        <img svg-inline src="../../assets/images/view.svg" alt="view">
                        <span class="ms-1">{{ views }}</span>
                    </p>
                </div> -->
                <div class="">
                    <p class="p5 text-grey-2 mt-24 mb-0">{{ parseDate(date) }}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ["col", "title", "text", "image", "date", "likes", "comments", "views", "id"],
    methods: {
        background(image) {
            if (image) {
                return 'background-image: url(' + image + ');'
            } else {
                return 'background: linear-gradient(144.77deg, #EF6F2E 0.25%, #FFC839 107.32%);'
            }
        },
        parseDate(date) {
            return date.split(' ')[0].split('-').join('.')
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
            background-position: center center;
            background-repeat: no-repeat;
            overflow: hidden;
            cursor: pointer;
            @media (max-width: 991px) {
                min-height: auto;
                padding: 32px 20px;
            }
            &.image {
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
            &.gradient {
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
            &__title {
                margin-top: auto;
            }
        }
    }
</style>