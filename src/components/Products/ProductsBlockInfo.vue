<template>
    <section class="product">
        <Preloader v-if="loading" />
        <div v-else class="container d-flex flex-column">
            <div class="row">
                <div :class="['col-lg-3 col-md-6 col-12 mb-32', 'order-' + idx]" v-for="(product, idx) in products" :key="idx">
                    <div class="h-100" @click="selectProduct({ product: product, index: idx })">
                        <ProductsItem 
                            :title="product.name" 
                            :image="'/' + product.image"
                        />  
                    </div>
                </div>
                <transition
                    name="fade"
                    mode="out-in"
                >
                    <div 
                        class="col-12 mb-32"
                        :class="windowWidth > 991 ? 'order-' + (selectedIndex|3) : 'order-' + selectedIndex"
                        v-if="selectedProduct.id"
                    >
                        <div class="product-info">
                            <div class="row w-100">
                                <div class="col-lg-4 col-12 mb-lg-0 mb-4">
                                    <ProductsItem
                                        :title="selectedProduct.name" 
                                        :image="'/' + selectedProduct.image"
                                    />
                                </div>
                                <div class="col-lg-8 col-12">
                                    <div class="product-info__block">
                                        <div class="product-info__links" v-if="files[selectedProduct.alias]">
                                            <div 
                                                v-for="(filesBlock, index) in files" 
                                                :key="index"
                                            >
                                                <div v-if="selectedProduct.alias == index">
                                                    <div v-for="(file, index) in filesBlock" :key="index">
                                                        <h3 class="h3">{{ file.title }}</h3>
                                                        <a 
                                                            v-for="(item, index) in file.files" :key="index"
                                                            :href="'/static/files/' + item.url" 
                                                            download 
                                                            class="file__link mb-24" 
                                                        >
                                                            <div class="d-flex flex-column align-items-start ml-16">
                                                                <p class="p2 text-grey-1 mb-1">{{ item.name }}</p>
                                                                <p class="p5 text-grey-3 mb-0">{{ item.size}}</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="nothing-found">
                                                <h1 class="nothing-found__title">Ничего не найдено</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>

<script>
import Preloader from '@/components/Preloader/Preloader'
import ProductsItem from './ProductsItem.vue'
import NothingFound from '@/components/NothingFound'

import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters, mapActions } = createNamespacedHelpers("products");

export default {
    components: {
        ProductsItem, Preloader, NothingFound
    },
    data() {
        return {
            windowWidth: window.innerWidth,
            loading: true,
            files: {
                "resheniya-dlya-transporta": [
                    {
                        title: "Инструкции",
                        files: [
                            {
                                name: "Схема подключения табло",
                                url: "resheniya-dlya-transporta/Схема подключения табло.pdf",
                                size: "1,90 МБ"
                            }
                        ]
                    },
                    {
                        title: "Программы",
                        files: [
                            {
                                name: "Конфигуратор ITLINE",
                                url: "resheniya-dlya-transporta/конфигуратор ITLINE Setup 1.2.0.exe",
                                size: "82,40 МБ"
                            },
                            {
                                name: "ПО Конфигуратор ITLINE",
                                url: "resheniya-dlya-transporta/ПУИА.464113.003 РЭ от 05.06.2020.pdf",
                                size: "1,31 МБ"
                            },
                            {
                                name: "ПО Конфигуратор ITLINE",
                                url: "resheniya-dlya-transporta/Конфигуратор ITLINE руководство.odt",
                                size: "1,33 МБ"
                            },
                            {
                                name: "Инструкция табло ITLINE - Сигнал S-2551",
                                url: "resheniya-dlya-transporta/Инструкция, схема Табло ITLINE - Сигнал S-2551.pdf",
                                size: "1,12 МБ"
                            },
                            {
                                name: "Тестовый маршрут",
                                url: "resheniya-dlya-transporta/Тестовый маршрут.zip",
                                size: "32,60 МБ"
                            },
                            {
                                name: "Обновление программы СИГНАЛ S2551 для обеспечения совместимости терминала  и внутрисалонного табло ТТС-80",
                                url: "resheniya-dlya-transporta/S2551_v9_01_79_debug_200618_AINF_ITE05.bin",
                                size: "383 КБ"
                            },
                            {
                                name: "Инструкция табло ITLINE Гранит 2.07 и 4.11",
                                url: "resheniya-dlya-transporta/Инструкция табло ITLINE Гранит 2.07 и 4.11.zip",
                                size: "12,80 МБ"
                            },
                            {
                                name: "УТИЛИТА К 4.11",
                                url: "resheniya-dlya-transporta/УТИЛИТА К 4.11.rar",
                                size: "16,90 МБ"
                            },
                            {
                                name: "Инструкция к утилите Autoinformer.4.11",
                                url: "resheniya-dlya-transporta/Инструкция к утилите Autoinformer.4.11.pdf",
                                size: "822 КБ"
                            },
                            {
                                name: "Руководство по эксплуатации Гранит 4.11",
                                url: "resheniya-dlya-transporta/Руководство по эксплуатации Гранит_4.11.pdf",
                                size: "1,41 МБ"
                            },
                            {
                                name: "Инструкция по монтажу Гранит 4.11",
                                url: "resheniya-dlya-transporta/Инструкция по монтажу Гранит 4.11.pdf",
                                size: "1,35 МБ"
                            },
                            {
                                name: "Инструкция табло ITLINE - терминал Galileosky (511788-v4)",
                                url: "resheniya-dlya-transporta/Инструкция табло ITLINE - терминал Galileosky (511788-v4).pdf",
                                size: "3,12 МБ"
                            },
                            {
                                name: "Инструкция настр_звуковых сообщений Автоинформатор",
                                url: "resheniya-dlya-transporta/Инструкция настр звуковых сообщений Автоинформатор.pdf",
                                size: "828 КБ"
                            },
                            {
                                name: "Руководство Galileosky 7.0",
                                url: "resheniya-dlya-transporta/Руководство Galileosky 7.0.pdf",
                                size: "10,30 МБ"
                            },
                            {
                                name: "Тестовый маршрут",
                                url: "resheniya-dlya-transporta/Тестовый маршрут.wim",
                                size: "173 КБ"
                            },
                            {
                                name: "Инструкция табло ITLINE - автоинформатор Алмаз",
                                url: "resheniya-dlya-transporta/Инструкция табло ITLINE - автоинформатор Алмаз.pdf",
                                size: "492 КБ"
                            }
                        ]
                    },
                ],
                "tablo-dlya-ostanovok": [
                    {
                        title: "Инструкции",
                        files: [
                            {
                                name: "Обзор кодов CME/CMS ошибок GMS модема",
                                url: "tablo-dlya-ostanovok/Обзор кодов CME-CMS ошибок GMS модема.pdf",
                                size: "734 КБ"
                            },
                            {
                                name: "Настройка табло по локальной сети",
                                url: "tablo-dlya-ostanovok/Настройка табло по локальной сети.pdf",
                                size: "3,69 МБ"
                            },
                            {
                                name: "Настройка табло с помощью ИК пульта",
                                url: "tablo-dlya-ostanovok/Настройка табло с помощью Ик пульта табло по локальной сети.pdf",
                                size: "4,50 МБ"
                            },
                            {
                                name: "Работа табло с сервером",
                                url: "tablo-dlya-ostanovok/Работа табло с сервером.pdf",
                                size: "1,64 МБ"
                            },
                            {
                                name: "Сервисные команды настройки отображения, использование спецсимволов в текстовой информации",
                                url: "tablo-dlya-ostanovok/Сервисные команды настройки отображения, использование спецсимволов в текстовой информации.pdf",
                                size: "2,13 МБ"
                            },
                            {
                                name: "Удалённое управление командами по SMS",
                                url: "tablo-dlya-ostanovok/Удалённое управление командами по SMS.pdf",
                                size: "1,95 МБ"
                            }
                        ]
                    },
                    {
                        title: "Программы",
                        files: [
                            {
                                name: "Руководство пользователя и программа для настройки табло серии «ТО1»",
                                url: "tablo-dlya-ostanovok/Руководство пользователя и программа для настройки табло серии ТО1.wim",
                                size: "819 КБ"
                            },
                            {
                                name: "Руководство пользователя и программа для настройки табло серии «ТО-P» и «ТО-V»",
                                url: "tablo-dlya-ostanovok/Руководство пользователя и программа для настройки табло серии ТО-P и ТО-V.wim",
                                size: "9,43 МБ"
                            }
                        ]
                    }
                ],
                "tablo-dlya-vokzalov": [
                    {
                        title: "Программы",
                        files: [
                            {
                                name: "ПО и руководство пользователя",
                                url: "tablo-dlya-vokzalov/ПО и руководство пользователя.zip",
                                size: "6,06 МБ"
                            }
                        ]
                    }
                ],
                "tablo-dlya-azs": [
                    {
                        title: "Инструкции",
                        files: [
                            {
                                name: "Инструкция управления Табло для операторной АЗС с ИК-пульта",
                                url: "tablo-dlya-azs/Инструкция управления Табло для операторной АЗС с ИК-пульта.pdf",
                                size: "140 КБ"
                            },
                            {
                                name: "Инструкция управления Табло цены для стел АЗС с ИК-пульта",
                                url: "tablo-dlya-azs/Инструкция управления Табло цены для стел АЗС с ИК-пульта.pdf",
                                size: "193 КБ"
                            }
                        ]
                    },
                    {
                        title: "Программы",
                        files: [
                            {
                                name: "ITLINE PRO_Program",
                                url: "tablo-dlya-azs/ITLINE PRO_Program.zip",
                                size: "33,90 МБ"
                            },
                            {
                                name: "ITLINE_ПО для табло операторной АЗС",
                                url: "tablo-dlya-azs/ITLINE_ПО для табло операторной АЗС.zip",
                                size: "5,83 МБ"
                            }
                        ]
                    }
                ],
                "chasy-meteostancii": [
                    {
                        title: "Инструкции",
                        files: [
                            {
                                name: "ITLINE - Инструкция управления метеостанцией с ИК-пульта",
                                url: "chasy-meteostancii/ITLINE - Инструкция управления метеостанцией с_ИК-пульта.pdf",
                                size: "265 КБ"
                            },
                            {
                                name: "ITLINE - Инструкция управления метеостанцией с ПО для ПК по Локальной сети",
                                url: "chasy-meteostancii/ITLINE - Инструкция управления метеостанцией с ПО для ПК по Локальной сети.pdf",
                                size: "206 КБ"
                            },
                            {
                                name: "Часы-метеостанции список параметров конфигурирования и редактирование значений",
                                url: "chasy-meteostancii/Часы-метеостанции список параметров конфигурирования и редактирование значений.pdf",
                                size: "85,90 КБ"
                            }
                        ]
                    },
                    {
                        title: "Программы",
                        files: [
                            {
                                name: "ITLINE PRO_Program",
                                url: "chasy-meteostancii/ITLINE PRO_Program.zip",
                                size: "33,90 МБ"
                            },
                            {
                                name: "ПО для часов-термометров с LAN подключением",
                                url: "chasy-meteostancii/ПО для часов-термометров с LAN подключением.wim",
                                size: "652 КБ"
                            }
                        ]
                    }
                ],
                "sport-display": [
                    {
                        title: "Инструкции",
                        files: [
                            {
                                name: "Пример инструкции для спортивного табло, управление с ПК",
                                url: "sport-display/ITLINE - Инструкция управления Спортивным табло с ПО для ПК.pdf",
                                size: "213 КБ"
                            },
                            {
                                name: "ITLINE - Инструкция управления Спортивным табло с ПО для Планшета",
                                url: "sport-display/ITLINE - Инструкция управления Спортивным табло с ПО для Планшета.pdf",
                                size: "279 КБ"
                            }
                        ]
                    },
                    {
                        title: "Программы",
                        files: [
                            {
                                name: "Пример программного обеспечения для спортивного табло, управление с ПК",
                                url: "sport-display/Пример программного обеспечения для спортивного табло, управление с ПК.zip",
                                size: "5,86 МБ"
                            }
                        ]
                    }
                ],
                "tablo-valyut": [
                    {
                        title: "Инструкции",
                        files: [
                            {
                                name: "Параметры конфигурирования и редактирования значений с ИК-пульта для универсальных цифровых табло валют",
                                url: "tablo-valyut/Параметры конфигурирования и редактирования значений с ИК-пульта для универсальных цифровых табло валют.pdf",
                                size: "217 КБ"
                            }
                        ]
                    },
                    {
                        title: "Программы",
                        files: [
                            {
                                name: "ITLINE Finance_Program",
                                url: "tablo-valyut/ITLINE Finance-1.6.13.zip",
                                size: "33,90 МБ"
                            },
                            {
                                name: "ПО для классических цифровых валютных табло",
                                url: "tablo-valyut/ПО для классических цифровых валютных табло.zip",
                                size: "2,32 МБ"
                            },
                            {
                                name: "ПО для универсальных валютных табло на основе матриц",
                                url: "tablo-valyut/ПО для универсальных валютных табло на основе матриц.zip",
                                size: "6,11 МБ"
                            }
                        ]
                    }
                ]
            }
        }
    },
    watch: {
        
    },
    computed: {
        ...mapGetters([
            'products',
            'selectedProduct',
            'selectedIndex',
        ])
    },
    created() {
        window.addEventListener('resize', this.onResize);
        this.getProducts().then(() => this.loading = false);
    },
    methods: {
        ...mapActions(['getProducts', 'selectProduct']),
        onResize() {
            this.windowWidth = window.innerWidth
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize); 
    }
}
</script>

<style lang="scss">
    .product {
        margin-bottom: 68px;
        &-info {
            display: flex;
            align-items: flex-start;
            padding: 24px 75px 24px 24px;
            background: $white;
            box-shadow: inset 8px 8px 15px rgba(198, 198, 198, 0.25);
            border-radius: 10px;
            max-height: 420px;
            overflow: auto;
            @media (max-width: 991px) {
                padding: 24px;
            }
            &::-webkit-scrollbar {
                width: 19px;
            }
            &::-webkit-scrollbar-thumb {
                border: 8px solid rgba(0, 0, 0, 0);
                background-clip: padding-box;
                border-radius: 100px;
                -webkit-border-radius: 100px;
                background-color: #BDBDBD;
            }
            &::-webkit-scrollbar-button {
                width: 0;
                height: 0;
                display: none;
            }
            &::-webkit-scrollbar-corner {
                background-color: transparent;
            }
            & .product-item {
                background: $bg;
                max-width: 295px;
                margin-bottom: 0;
                margin-right: 24px;
                pointer-events: none;
                @media (max-width: 991px) {
                    max-width: 100%;
                    margin-right: 0;
                }
            }
            &__links {
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>