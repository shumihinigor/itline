<template>
    <div class="select-block mb-16">
        <div 
            :class="['select', {active: selectedItem}, {open: open}]" 
            @click="open = !open"
            v-on-clickaway="away"
        >
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
import { directive as onClickaway } from 'vue-clickaway';


export default {
    props: {
        options: {
            default: () => {},
            type: Object
        },
        label: {
            default: '',
            type: String
        }
    },
    directives: {
        onClickaway: onClickaway,
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
    methods: {
        away() {
            this.open = false;
        }
    },
}
</script>

<style>

</style>