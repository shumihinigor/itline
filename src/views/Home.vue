<template>
    <div>
        <!-- swiper -->
        <SwiperBanner />
        <!-- products block -->
        <ProductsBlock />
        <!-- about block -->
        <AboutBlock />
    </div>
</template>

<script>

    import ProductsBlock from '@/components/Products/ProductsBlock'
    import SwiperBanner from '@/components/Swipers/SwiperBanner'
    import AboutBlock from '@/components/About/AboutBlock'

    export default {
        name: 'Home',
        components: {
            SwiperBanner,
            ProductsBlock,
            AboutBlock
        },
        data() {
            return {
                
            }
        },
        computed: {
            
        },
        mounted() {
            
        },
        created() {

        },
        destroyed() {
            
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    
</style>