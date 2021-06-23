<template>
    <div class="select-block mb-16">
        <div :class="['select', {active: selectedItem}, {open: open}]" @click="open = !open">
            <div class="select-title">{{ label }}</div>
            <div class="select-value" v-if="selectedItem">{{ selectedItem }}</div>
        </div>
        <transition
            name="fade"
            mode="out-in"
        >
            <div v-if="open" class="select-wrapper">
                <span v-for="(option, index) in options" :key="index" @click="selectedItem = option; open = false">
                    {{ option }}
                </span>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            default: () => [],
            type: Array
        },
        label: {
            default: '',
            type: String
        }
    },
    data() {
        return {
            open: false,
            selectedItem: ''
        }
    },
    watch: {
        selectedItem(option) {
            this.$emit('select', option)
        }  
    },

}
</script>

<style>

</style>