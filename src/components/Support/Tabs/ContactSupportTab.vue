<template>
    <div class="bg-white pt-5 pb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-12">
                    <Form
                        :title="'Написать специалисту itline'"
                        :policy="false"
                        :id="'contacts'"
                        :description="'* При появлении технических вопросов специалисты компании ITLINE оперативно осуществляют консультрование по вопросам установки и эксплуатации светодиодных табло'"
                    />
                    <!-- <div class="select-block mb-16">
                        <div :class="['select', {active: selectedItem}, {open: open}]" @click="open = !open">
                            <div class="select-title">Тип табло</div>
                            <div class="select-value" v-if="selectedItem">{{ selectedItem }}</div>
                        </div>
                        <transition
                            name="fade"
                            mode="out-in"
                        >
                            <div v-if="open" class="select-wrapper">
                                <span v-for="(item, index) in 10" :key="index" @click="selectedItem = item; open = false">
                                    {{ item }}
                                </span>
                            </div>
                        </transition>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from '@/components/Form'
    export default {
        components: {
            Form
        },
        data() {
            return {
                open: false,
                selectedItem: ''
            }
        }
    }
</script>

<style lang="scss">
    
</style>