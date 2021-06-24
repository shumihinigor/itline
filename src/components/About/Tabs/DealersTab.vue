<template>
    <div class="container mb-80">
        <div class="row">
            <div class="col-lg-5 col-12">
                <Form
                    :title="'Хочу узнать условия и стать дилером!'"
                    :policy="false"
                    :mode="'light'"
                    :id="'dealers'"
                />
            </div>
            <div class="col-lg-7 col-12">
                
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