<template>
    <div class="select-block mb-16">
        <div 
            :class="['select', {active: selected}, {open: open}]" 
            @click="open = !open"
            v-on-clickaway="away"
        >
            <div class="select-title">{{ label }}</div>
            <div class="select-value" v-if="selected">{{ selected }}</div>
        </div>
        <transition
            name="fade"
            mode="out-in"
        >
            <div v-if="open" class="select-wrapper">
                <span v-for="(option, index) in options" :key="index" @click="$emit('select', option); open = false">
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
        },
        selected: {
            default: '',
            type: String
        }
    },
    directives: {
        onClickaway: onClickaway,
    },
    data() {
        return {
            open: false
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