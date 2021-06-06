<template>
    <section class="gallery mb-80">
        <Preloader v-if="loading" />
        <div v-else class="container">
            <div class="row">
                <GalleryItem
                    v-for="(item, index) in currentBlock" :key="index"
                    :col="4"
                    :title="item.name"
                    :text="item.description"
                    :image="item.cover_file"
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
import GalleryItem from '@/components/Gallery/GalleryItem'

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("gallery");


export default {
    components: {
        GalleryItem, Preloader
    },
    data() {
        return {
            loading: true
        }
    },
    computed: {
        ...mapGetters([
            'page',
            'gallery',
            'count',
            'pageCount'
        ]),
        currentBlock() {
            return this.gallery.slice((this.page - 1) * this.count, this.page * this.count);
        }
    },
    created() {
        this.getGallery().then(() => this.loading = false);
    },
    methods: {
        ...mapActions(['getGallery'])
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
                background-image: url('../../../assets/images/arrow_prev.svg');
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
                background-image: url('../../../assets/images/arrow_next.svg');
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