<template>
    <div class="bg-white pt-5 pb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-12">
                    <Form
                        :theme="'Техподдержка'"
                        :title="'Написать специалисту itline'"
                        :policy="false"
                        :id="'support'"
                        :description="'* При появлении технических вопросов специалисты компании ITLINE оперативно осуществляют консультрование по вопросам установки и эксплуатации светодиодных табло'"
                    />
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
        }
    }
</script>

<style lang="scss">
    
</style>