<template>
    <section class="contacts">
        <div class="container mb-80">
            <div class="row">
                <div class="col-lg-5 col-12 mb-32">
                    <h1 class="h1 mb-24">Контакты</h1>
                    <div class="">
                        <div class="mb-40">
                            <h6 class="h6 text-grey-1 text-uppercase mb-16">Офис продаж</h6>
                            <div class="d-flex align-items-start justify-content-start contacts-block mb-16">
                                <div class="mr-8">
                                    <p class="p4 mb-0 text-grey-2">Телефоны:</p>
                                </div>
                                <div class="">
                                    <p class="p2 mb-1 text-grey-1 contacts-phone">8 800 200-28-15</p>
                                    <p class="p2 mb-1 text-grey-1 contacts-phone">+7 (4852) 59-49-37</p>
                                    <p class="p2 mb-0 text-grey-1 contacts-phone">+7 (495) 222-90-31</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-start justify-content-start contacts-block">
                                <div class="mr-8">
                                    <p class="p4 mb-0 text-grey-2">Email:</p>
                                </div>
                                <div class="">
                                    <p class="p2 mb-0 text-grey-1 contacts-phone">sales@it-line.info</p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-40">
                            <h6 class="h6 text-grey-1 text-uppercase mb-16">Региональное представительство</h6>
                            <div class="d-flex align-items-start justify-content-start contacts-block mb-16">
                                <div class="mr-8">
                                    <p class="p4 mb-0 text-grey-2">Адрес:</p>
                                </div>
                                <div class="">
                                    <p class="p2 mb-0 text-grey-1 contacts-phone">Москва, ул. Большая Грузинская, д. 13/2, стр. 1</p>
                                </div>
                            </div>
                            <p class="p4 text-grey-3 mb-0">*Пропускная система. Предварительно свяжитесь с менеджером</p>
                        </div>
                        <div class="">
                            <h6 class="h6 text-grey-1 text-uppercase mb-16">Фактический адрес</h6>
                            <div class="d-flex align-items-start justify-content-start contacts-block mb-16">
                                <div class="mr-8">
                                    <p class="p4 mb-0 text-grey-2">Адрес:</p>
                                </div>
                                <div class="">
                                    <p class="p2 mb-0 text-grey-1 contacts-phone">г. Ярославль, Тормозное шоссе, д. 1, стр. 2</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-start justify-content-start contacts-block mb-16">
                                <div class="mr-8">
                                    <p class="p4 mb-0 text-grey-2">Почтовый адрес:</p>
                                </div>
                                <div class="">
                                    <p class="p2 mb-0 text-grey-1 contacts-phone">150000, г. Ярославль, а/я 247 (ООО "ЭнергоТрейд")</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-start justify-content-start contacts-block">
                                <div class="mr-8">
                                    <p class="p4 mb-0 text-grey-2">Режим работы / приема заявок:</p>
                                </div>
                                <div class="">
                                    <p class="p2 mb-0 text-grey-1 contacts-phone">ПН-ПТ с 09:00 до 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-12">
                    <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1701188828" width="100%" height="400" frameborder="0"></iframe>
                    <iframe src="https://yandex.ru/sprav/widget/rating-badge/1701188828" width="150" height="50" frameborder="0"></iframe>
                </div>
            </div>
        </div>
        <div class="pt-5 pb-5 bg-white">
            <div class="container">
                <div class="modal-body text-center">
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
                            <div class="modal-policy mb-16">
                                <p class="p4 text-grey-3 mb-0">Отправляя заявку, я подтверждаю, что ознакомлен и согласен 
                                с <a class="link orange" href="javascript:;">Политикой конфиденциальности</a> данного сайта</p>
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
    </section>
</template>

<script>
    export default {
        name: 'Contacts'
    }
</script>

<style lang="scss">
    .contacts {
        &-block {
            font-family: $TTNormsMedium;
        }
        &-phone {
            font-family: $TTNormsMedium;
        }
    }
</style>