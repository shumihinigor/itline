<template>
    <div :class="['col-12 col-md-6 mb-24', 'col-lg-' + col]">
        <router-link 
            :to="{ name: 'GalleryPage', params: { id: id }}" tag="div" 
            :class="['gallery-item', {'text_white': bg !== 'white'}, {'image': bg !== 'white' && bg !== 'gradient'}]" 
            :style="background(bg)"
        >
            <h6 class="h6 text-uppercase text-grey-1 gallery-item__title">{{ title }}</h6>
            <p class="p2 gallery-item__text text-grey-2 mb-0">
                {{ text }}
            </p>
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
                return 'background-image: url(' + require('../../assets/images/gallery/' + bg) + ');'
            }
        }
    },
}
</script>

<style lang="scss">
    .gallery {
        &-item {
            position: relative;
            z-index: 0;
            display: flex;
            flex-direction: column;
            padding: 32px 16px;
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
                & .gallery-item__title {
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