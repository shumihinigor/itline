<template>
    <div :class="['form', {
        'dark': mode == 'dark',
        'light': mode == 'light'
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
            v-if="departmentSelect"
            :options="departmentOptions"
            :label="'Тип табло'"
            :selected="department"
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
                :disabled="!formValid || loading"
                @click="sendForm"
            >
                <span 
                    v-if="!loading" 
                    class="p4"
                >{{ sendButtonText }}</span>
                <div 
                    v-else 
                    class="pswp__preloader__icn"
                >
                    <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                    </div>
                </div>
            </button>
        </div>
        <!-- description -->
        <div class="">
            <p class="p4 text-grey-3">{{ description }}</p>
        </div>
    </div>  
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
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
        departmentOption: {
            default: "",
            type: String
        },//+
        departmentSelect: {
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
        mode: {
            default: "dark",
            type: String
        },
        theme: {
            default: "",
            type: String
        }//+
    },
    components: {
        Select, Preloader
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

            action: "ld", // — Пока у всех "ld"
            department: "", // — Направление (укажу ниже) +
            manager: "", // — Возможен ID менеджера, но пока пустое поле
            url: window.location.href, // — URL страницы, на которой расположена форма

            departmentOptions: {
                'dir-transport': 'Решения для транспорта', // маршрутные указатели (транспортные табло)
                'dir-road': 'Дорожные табло', // маршрутные указатели (транспортные табло)
                'dir-ostanovki': 'Табло для остановок', // табло для остановок
                'dir-station': 'Табло для вокзалов', // табло для вокзалов
                'dir-azs': 'Табло для АЗС', // табло для АЗС
                'dir-meteo': 'Табло часы-метеостанции', // часы-метеостанции
                'dir-sport': 'Спортивные табло', // спортивное табло
                'dir-currency': 'Табло курсов валют', // табло валют
                'dir-prom': 'Промышленные табло', // промышленное табло
                // 'dir-support': 'Техподдержка', // Техподдержка
            },

            loading: false
        }
    },
    computed: {
        emailValid() {
            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
            return regex.test(this.userEmail);
        },
        phonelValid() {
            return this.userPhone.length == 18
        },
        formValid() {
            return  this.emailValid && 
                    this.phonelValid && 
                    this.userName
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
            if (this.userPhone.length < 18 && this.userPhone.length) {
                event.target.classList.add('error')
            } else {
                event.target.classList.remove('error')
            }
        },
        clearForm() {
            this.userName = "", // — Имя, ФИО и т.п. +
            this.userCompany = "", // — Название компании +
            this.userEmail = "", //  — E-mail +
            this.userPhone = "", // — Телефон +
            this.userMessage = "", // — Сообщение +
            this.department = "" // — Направление (укажу ниже) +
        },
        async sendForm() {
            this.loading = true;
            await this.axios
                .post('https://portal.it-line.info/api/leadhandler/webform/v1', {
                    'user-name': this.userName,
                    'user-company': this.userCompany,
                    'user-email': this.userEmail,
                    'user-phone': this.userPhone,
                    'user-address': this.userAddress,
                    'user-message': this.userMessage,
                    'user-file': this.userFile,

                    'action': this.action,
                    'department': this.departmentOption.length ? this.departmentOption : this.department,
                    'manager': this.manager,
                    'theme': this.theme,
                    'form-name': this.id,
                    'url': this.url
                })
                .then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                    // router.push({ name: 'PageNotFound' });
                })
                .finally(() => {
                    this.clearForm();
                    this.loading = false;
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


// loader
.pswp__preloader__icn {
    //   opacity: 0.75;
    width: 16px;
    height: 16px;
    margin: 4px auto;
    -webkit-animation: clockwise 500ms linear infinite;
    animation: clockwise 500ms linear infinite;
}
.pswp__preloader__cut {
    position: relative;
    width: 8px;
    height: 16px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
}
.pswp__preloader__donut {
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border: 2px solid $white;
    border-radius: 50%;
    border-left-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    margin:0;
    -webkit-animation: donut-rotate 1000ms cubic-bezier(.4,0,.22,1) infinite;
    animation: donut-rotate 1000ms cubic-bezier(.4,0,.22,1) infinite;

}


@-webkit-keyframes clockwise {
    0% { -webkit-transform: rotate(0deg) }
    100% { -webkit-transform: rotate(360deg) }
}
@keyframes clockwise {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
}
@-webkit-keyframes donut-rotate {
    0% { -webkit-transform: rotate(0) }
    50% { -webkit-transform: rotate(-140deg) }
    100% { -webkit-transform: rotate(0) }
}
@keyframes donut-rotate {
    0% { transform: rotate(0) }
    50% { transform: rotate(-140deg) }
    100% { transform: rotate(0) }
}

</style>