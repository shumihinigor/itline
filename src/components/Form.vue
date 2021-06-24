<template>
    <div :class="['form', {
        'dark': themeForm == 'dark',
        'light': themeForm == 'light'
    }]">
        <h6 class="h6 text-uppercase mb-24">{{ title }}</h6>
        <!-- userNameInput -->
        <div class="input-block mb-16" v-if="userNameInput">
            <input 
                :id="'userName_' + id" 
                v-model="userName"
                type="text" 
                required 
                class="input"
            >
            <label :for="'userName_' + id" class="label">Ваше имя</label>
        </div>
        <!-- userCompanyInput -->
        <div class="input-block mb-16" v-if="userCompanyInput">
            <input 
                :id="'userCompany_' + id" 
                v-model="userCompany"
                type="text" 
                required 
                class="input"
            >
            <label :for="'userCompany_' + id" class="label">Название компани</label>
        </div>
        <!-- userPhoneInput -->
        <div class="input-block mb-16" v-if="userPhoneInput">
            <input 
                :id="'userPhone_' + id"
                v-model="userPhone"
                v-mask="'+7 (###) ###-##-##'"
                type="text" 
                class="input"
                required
                @blur="blurPhone"
            >
            <label class="label" :for="'userPhone_' + id">Телефон</label>
        </div>
        <!-- userEmailInput -->
        <div class="input-block mb-16" v-if="userEmailInput">
            <input 
                :id="'userEmail_' + id"
                v-model="userEmail"
                type="text" 
                :class="['input']"
                @blur="blurEmail"
                required
            >
            <label class="label" :for="'userEmail_' + id">Email</label>
        </div>
        <!-- departmentSelect -->
        <Select
            :options="departmentOptions"
            :label="'Тип табло'"
            @select="department = $event"
        />
        <!-- userMessageInput -->
        <div class="textarea-block mb-16" v-if="userMessageInput">
            <textarea 
                :id="'userMessage_' + id" 
                v-model="userMessage"
                type="text" 
                required class="textarea"
            ></textarea>
            <label :for="'userMessage_' + id" class="label">Сообщение</label>
        </div>
        <!-- policy -->
        <div class="modal-policy mb-16" v-if="policy">
            <p class="p4 text-grey-3 mb-0">Отправляя заявку, я подтверждаю, что ознакомлен и согласен 
            с <a class="link orange" href="javascript:;">Политикой конфиденциальности</a> данного сайта</p>
        </div>
        <!-- sendButton -->
        <div class="mb-16">
            <button 
                type="button" 
                class="btn default w-100"
                @click="sendForm"
            >
                <span class="p4">{{ sendButtonText }}</span>
            </button>
        </div>
        <!-- description -->
        <div class="">
            <p class="p4 text-grey-3">{{ description }}</p>
        </div>
    </div>  
</template>

<script>
import Select from '@/components/Select/Select'
export default {
    name: "Form",
    props: {
        id: {
            default: Date.now(),
            type: [ String, Number ]
        },// +
        title: {
            default: "",
            type: String
        }, // +
        description: {
            default: "",
            type: String
        }, // +
        policy: {
            default: true,
            type: Boolean
        },// +
        sendButtonText: {
            default: "Отправить",
            type: String
        },// +
        userNameInput: {
            default: true,
            type: Boolean
        },// +
        userCompanyInput: {
            default: true,
            type: Boolean
        },// +
        userEmailInput: {
            default: true,
            type: Boolean
        },// +
        userPhoneInput: {
            default: true,
            type: Boolean
        },// +
        userAddressInput: {
            default: true,
            type: Boolean
        },
        userMessageInput: {
            default: true,
            type: Boolean
        },// +
        userFileInput: {
            default: true,
            type: Boolean
        },
        themeForm: {
            default: "dark",
            type: String
        }//+
    },
    components: {
        Select
    },
    data() {
        return {
            userName: "", // — Имя, ФИО и т.п. +
            userCompany: "", // — Название компании +
            userEmail: "", //  — E-mail +
            userPhone: "", // — Телефон +
            userAddress: "", // — Адрес -
            userMessage: "", // — Сообщение +
            userFile: [], // — Файл (один) -

            action: "", // — Пока у всех "ld"
            department: "", // — Направление (укажу ниже) +
            manager: "", // — Возможен ID менеджера, но пока пустое поле
            theme: "", // — тема формы (например, «заказ табло ТВ-123»)
            formName: "", // — название формы (например, «форма заказа табло»
            url: window.location.href, // — URL страницы, на которой расположена форма

            departmentOptions: {
                'dir-transport': 'Решения для транспорта', // маршрутные указатели (транспортные табло)
                'dir-dorozhnyye': 'Дорожные табло', // маршрутные указатели (транспортные табло)
                'dir-ostanovki': 'Табло для остановок', // табло для остановок
                'dir-station': 'Табло для вокзалов', // табло для вокзалов
                'dir-azs': 'Табло для АЗС', // табло для АЗС
                'dir-meteo': 'Табло часы-метеостанции', // часы-метеостанции
                'dir-sport': 'Спортивные табло', // спортивное табло
                'dir-currency': 'Табло курсов валют', // табло валют
                'dir-prom': 'Промышленные табло', // промышленное табло
                // 'dir-support': 'Техподдержка', // Техподдержка
            }
        }
    },
    computed: {
        emailValid() {
            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
            return regex.test(this.userEmail);
        }
    },
    methods: {
        blurEmail(event) {
            if (!this.emailValid && this.userEmail.length) {
                event.target.classList.add('error')
            } else {
                event.target.classList.remove('error')
            }
        },
        blurPhone(event) {
            console.log();
            if (this.userPhone.length < 18 && this.userPhone.length) {
                event.target.classList.add('error')
            } else {
                event.target.classList.remove('error')
            }
        },
        async sendForm() {
            await this.axios
                .post('/api/leadhandler/webform/v1', {
                    'user-name': this.userName,
                    'user-company': this.userCompany,
                    'user-email': this.userEmail,
                    'user-phone': this.userPhone,
                    'user-address': this.userAddress,
                    'user-message': this.userMessage,
                    'user-file': this.userFile,

                    'action': this.action,
                    'department': this.department,
                    'manager': this.manager,
                    'theme': this.theme,
                    'form-name': this.formName,
                    'url': this.url
                })
                .then(response => {
                    console.log(response);
                }).catch(error => {
                    // router.push({ name: 'PageNotFound' });
                });
        }
    },
}
</script>

<style lang="scss">
.form {
    &.dark {
        & input, textarea, .select, .select-wrapper span {
            background-color: $bg;
        }
        & .select-wrapper {
            background-color: $white;
        }
    }
    &.light {
        & input, textarea, .select, .select-wrapper span {
            background-color: $white;
        }
        & .select-wrapper {
            background-color: $bg;
        }
    }
}
</style>