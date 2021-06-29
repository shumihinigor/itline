<template>
    <!-- Modal -->
    <div class="modal fade" id="modalContacts" tabindex="-1" aria-labelledby="modalContactsLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-close">
                        <img svg-inline src="../../assets/images/close_modal.svg" alt="close_modal"
                            data-bs-dismiss="modal" aria-label="Close">
                    </div>
                </div>
                <div class="modal-body text-center">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 col-12">
                                <Form
                                    :title="'Напишите нам'"
                                    :policy="false"
                                    :id="'modal-contacts'"
                                    :theme="'Модальное окно \'Связаться с нами\''"
                                />
                                <div class="mb-80"></div>
                            </div>
                        </div>
                    </div>
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
    .modal {
        &-policy {
            text-align: left;
            & p, a {
                font-family: $TTNormsRegular;
            }
            & a {
                color: $orange;
                text-decoration: none;
            }
        }
    }
</style>