<template>
    <div class="bg-white pt-5 pb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-12">
                    <h6 class="h6 text-uppercase text-grey-1 mb-24 text-center">Написать специалисту itline</h6>
                    <div class="input-block mb-16">
                        <input id="name" type="text" required class="input">
                        <label for="name" class="label">Введенный текст</label>
                    </div>
                    <div class="input-block mb-16">
                        <input id="phone" type="tel" required class="input">
                        <label for="phone" class="label">Телефон</label>
                    </div>
                    <div class="input-block mb-16">
                        <input id="email" type="text" required class="input">
                        <label for="email" class="label">Email</label>
                    </div>
                    <div class="select-block mb-16">
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
                    </div>
                    <div class="mb-16">
                        <div class="input-block mb-1">
                            <input id="number" type="text" required class="input">
                            <label for="number" class="label">Серийный номер (указан в техническом паспорте и на корпусе изделия)</label>
                        </div>
                        <div class="">
                            <p class="p5 text-grey-3">* Указан в техническом паспорте и на корпусе изделия</p>
                        </div>
                    </div>
                    <div class="textarea-block mb-16">
                        <textarea id="message" type="text" required class="textarea"></textarea>
                        <label for="message" class="label">Сообщение</label>
                    </div>
                    <div class="modal-policy mb-24">
                        <p class="p4 text-grey-3 mb-0">Отправляя заявку, я подтверждаю, что ознакомлен и согласен
                        с <a href="javascript:;">Соглашением о неразглашении</a> данного сайта</p>
                    </div>
                    <div class="mb-16">
                        <button type="button" class="btn default w-100"><span class="p4 text-uppercase">Отправить</span></button>
                    </div>
                    <div class="">
                        <p class="p4 text-grey-3">* При появлении технических вопросов специалисты компании ITLINE оперативно осуществляют консультрование по вопросам установки и эксплуатации светодиодных табло</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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