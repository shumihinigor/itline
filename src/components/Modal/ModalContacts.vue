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
                                <h6 class="h6 text-uppercase mb-24">Напишите нам</h6>
                                <div class="input-block mb-16">
                                    <input 
                                        id="text"
                                        type="text" 
                                        class="input"
                                        required
                                    >
                                    <label class="label" for="text">Введенный текст</label>
                                </div>
                                <div class="input-block mb-16">
                                    <input 
                                        id="phone"
                                        type="text" 
                                        class="input"
                                        required
                                    >
                                    <label class="label" for="phone">Телефон</label>
                                </div>
                                <div class="input-block mb-16">
                                    <input 
                                        id="email"
                                        type="text" 
                                        class="input"
                                        required
                                    >
                                    <label class="label" for="email">Email</label>
                                </div>
                                <div class="modal-policy text-left mb-16">
                                    <p class="p4 text-grey-3 mb-0">Отправляя заявку, я подтверждаю, что ознакомлен и согласен 
                                    с <a href="javascript:;">Политикой конфиденциальности</a> данного сайта</p>
                                </div>
                                <div class="mb-16">
                                    <button type="button" class="btn default w-100"><span class="p4">Отправить</span></button>
                                </div>
                                <div class="">
                                    <button type="button" class="btn contour w-100"><span class="p4">Заказать обратный звонок</span></button>
                                </div>
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
    export default {

    }
</script>

<style lang="scss" scoped>
    .modal {
        &-policy {
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