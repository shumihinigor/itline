<template>
    <div class="container-fluid px-0 mb-80">
        <div class="row">
            <div class="col">
                <SwiperHistory />
            </div>
        </div>
    </div>
</template>

<script>
import SwiperHistory from '@/components/Swipers/SwiperHistory'
export default {
    components: {
        SwiperHistory
    },
}
</script>

<style lang="scss">
    
    .wrapper {
        &::after, 
        &::before {
            display: none;
        }
    }
</style>