<template>
    <section class="solutions">
        <NothingFound
            :push-name="'Home'"
        />
    </section>
</template>

<script>
import NothingFound from '@/components/NothingFound'
export default {
    name: 'Solutions',
    components: {
        NothingFound
    },
}
</script>