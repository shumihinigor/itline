<template>
    <div class="container mb-80">
        <div class="row">
            <div class="col-lg-5 col-12">
                <h6 class="h6 text-uppercase text-grey-1 mb-24 text-lg-start text-center">Хочу узнать условия и стать дилером!</h6>
                <div class="input-block mb-16">
                    <input id="name" type="text" required="required" class="input bg-white">
                    <label for="name" class="label">Ваше имя  (компания)</label>
                </div>
                <div class="input-block mb-16">
                    <input id="phone" type="tel" required="required" class="input bg-white">
                    <label for="phone" class="label">Телефон</label>
                </div>
                <div class="input-block mb-16">
                    <input id="email" type="email" required="required" class="input bg-white">
                    <label for="email" class="label">Email</label>
                </div>
                <div class="input-block mb-16">
                    <input id="profile" type="text" required="required" class="input bg-white">
                    <label for="profile" class="label">Профиль деятельности</label>
                </div>
                <div class="textarea-block mb-16">
                    <textarea id="message" type="text" required="required" class="textarea bg-white"></textarea>
                    <label for="message" class="label">Сообщение</label>
                </div>
                <div class="modal-policy mb-24">
                    <p class="p4 text-grey-3 mb-0">Отправляя заявку, я подтверждаю, что ознакомлен и согласен
                    с <a href="javascript:;">Соглашением о неразглашении</a> данного сайта</p>
                </div>
                <div class="mb-16">
                    <button type="button" class="btn default w-100"><span class="p4">Отправить</span></button>
                </div>
            </div>
        </div>
    </div>
</template>