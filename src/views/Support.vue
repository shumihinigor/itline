<template>
    <ProductCard />
    <!-- <FeedBackItem 
        name="Иванов Иван"
        image="feedback-1.png"
    /> -->
</template>

<script>
    import FeedBackItem from '@/components/Feedback/FeedBackItem.vue'
    import ProductCard from '@/components/Products/ProductCard.vue'
    export default {
        components: {
            FeedBackItem, ProductCard
        },
        name: 'Support'
    }
</script>