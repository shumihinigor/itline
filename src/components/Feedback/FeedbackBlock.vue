<template>
    <div class="mb-80">
        <div class="container mb-40">
            <div class="row">
                <div class="col">
                    <h3 class="h3 font-weight-bold mb-0">Отзывы наших клиентов</h3>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <SwiperFeedback />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SwiperFeedback from '@/components/Swipers/SwiperFeedback'
export default {
    components: {
        SwiperFeedback
    },
}
</script>

<style lang="scss">
    
</style>