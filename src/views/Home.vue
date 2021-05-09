<template>
    <div>
        <!-- swiper -->
        <SwiperBanner />
        <!-- about block -->
        <AboutBlock />
        <!-- products block -->
        <ProductsBlock />
        <!-- gallery block -->
        <GalleryBlock />
        <!-- feedback block -->
        <FeedbackBlock />
    </div>
</template>

<script>

    import ProductsBlock from '@/components/Products/ProductsBlock'
    import SwiperBanner from '@/components/Swipers/SwiperBanner'
    import AboutBlock from '@/components/About/AboutBlock'
    import GalleryBlock from '@/components/Gallery/GalleryBlock'
    import FeedbackBlock from '@/components/Feedback/FeedbackBlock'

    export default {
        name: 'Home',
        components: {
            SwiperBanner,
            ProductsBlock,
            AboutBlock,
            GalleryBlock,
            FeedbackBlock
        },
        data() {
            return {
                
            }
        },
        created() {
            this.$store.commit('changeActiveHeader', true)
            window.addEventListener('scroll', this.scrollHandler)
        },
        destroyed() {
            this.$store.commit('changeActiveHeader', false)
            window.removeEventListener('scroll', this.scrollHandler)
        },
        methods: {
            scrollHandler() {
                window.scrollY > 0 ? this.$store.commit('changeActiveHeader', false) : this.$store.commit('changeActiveHeader', true)
            }
        }
    }
</script>

<style lang="scss">
    
</style>