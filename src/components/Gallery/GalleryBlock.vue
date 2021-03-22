<template>
    <div class="mb-80">
        <div class="container mb-40">
            <div class="row">
                <div class="col">
                    <h3 class="h3 font-weight-bold mb-0">Галерея</h3>
                </div>
            </div>
        </div>
        <SwiperGallery />
    </div>
</template>

<script>
import SwiperGallery from '@/components/Swipers/SwiperGallery'
export default {
    components: {
        SwiperGallery
    },
    data() {
        return {

        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperGallery.$swiper
        }
    }
}
</script>

<style lang="scss">
    
</style>