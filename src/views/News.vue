<template>
    <section class="news mb-80">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="h1 mb-24">новости</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div v-if="page == 1" class="row">

                <NewsItem
                    :col="4"
                    :title="'Обзор универсальных спортивных экранов от производителя ITLINE'"
                    :text="'Ни одну систему связи нельзя организовать без соединителей, разъёмов и коннекторов! Поэтому мы глобально расширяем направление промышленных коннекторов!'"
                    :bg="'white'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="4"
                    :title="'Работа ITLINE в режиме самоизоляции'"
                    :text="'Представляем готовое решение, предназначенное для удалённого контроля за мусорными баками. Система мгновенно сообщит оператору о переполненном баке, возгорании или краже!'"
                    :bg="'gradient'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="4"
                    :title="'Новое многофункциональное электронное табло в Тамбове'"
                    :text="'Ни одну систему связи нельзя организовать без соединителей, разъёмов и коннекторов! Поэтому мы глобально расширяем направление промышленных коннекторов!'"
                    :bg="'white'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />

                <NewsItem
                    :col="3"
                    :title="'Robustel представляет R5020 - промышленный IoT-маршрутизатор с поддержкой 5G'"
                    :text="'Представляем готовое решение, предназначенное для удалённого контроля за мусорными баками. '"
                    :bg="'news_1.png'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="3"
                    :title="'Работа ITLINE в режиме самоизоляции'"
                    :text="'С радостью сообщаем, что наша компания подтвердила статус Золотого партнёра Thales по направлению «Защита и...'"
                    :bg="'white'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="3"
                    :title="'Обзор универсальных спортивных экранов от производителя ITLINE'"
                    :text="'Представляем готовое решение, предназначенное для удалённого контроля за мусорными баками. '"
                    :bg="'news_2.png'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="3"
                    :title="'Новое многофункциональное электронное табло в Тамбове'"
                    :text="'Ни одну систему связи нельзя организовать без соединителей, разъёмов и коннекторов!'"
                    :bg="'gradient'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />

                <NewsItem
                    :col="12"
                    :title="'Обновление Sentinel LDK 8.0.4'"
                    :text="'Компания Thales, мировой эксперт в области монетизации софта, выпустила обновление для решения в области защиты и лицензирования - Sentinel LDK 8.0.4 (patch 12/2020).В обновлении большое внимание уделено расширению функционала облачных и программных лицензий, а также утилиты автоматической защиты Envelope.'"
                    :bg="'news_3.png'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                
                <NewsItem
                    :col="4"
                    :title="'Новое многофункциональное электронное табло в Тамбове'"
                    :text="'С радостью сообщаем, что наша компания подтвердила статус Золотого партнёра Thales по направлению «Защита и Монетизация программного обеспечения»!'"
                    :bg="'gradient'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="4"
                    :title="'Работа ITLINE в режиме самоизоляции'"
                    :text="'Представляем готовое решение, предназначенное для удалённого контроля за мусорными баками. Система мгновенно сообщит оператору о переполненном баке, возгорании или краже!'"
                    :bg="'white'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="4"
                    :title="'Espressif представляет ESP32-C3'"
                    :text="'ESP32-C3 - это новый экономичный микроконтроллер на основе RISC-V с поддержкой Wi-Fi и Bluetooth LE 5.0 для безопасных соединений в интернете вещей.'"
                    :bg="'news_2.png'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />

            </div>
            <div v-if="page == 2" class="row">

                <NewsItem
                    :col="3"
                    :title="'Robustel представляет R5020 - промышленный IoT-маршрутизатор с поддержкой 5G'"
                    :text="'Представляем готовое решение, предназначенное для удалённого контроля за мусорными баками. '"
                    :bg="'news_1.png'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="3"
                    :title="'Работа ITLINE в режиме самоизоляции'"
                    :text="'С радостью сообщаем, что наша компания подтвердила статус Золотого партнёра Thales по направлению «Защита и...'"
                    :bg="'white'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="3"
                    :title="'Обзор универсальных спортивных экранов от производителя ITLINE'"
                    :text="'Представляем готовое решение, предназначенное для удалённого контроля за мусорными баками. '"
                    :bg="'news_2.png'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="3"
                    :title="'Новое многофункциональное электронное табло в Тамбове'"
                    :text="'Ни одну систему связи нельзя организовать без соединителей, разъёмов и коннекторов!'"
                    :bg="'gradient'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />

                <NewsItem
                    :col="4"
                    :title="'Обзор универсальных спортивных экранов от производителя ITLINE'"
                    :text="'Ни одну систему связи нельзя организовать без соединителей, разъёмов и коннекторов! Поэтому мы глобально расширяем направление промышленных коннекторов!'"
                    :bg="'white'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="4"
                    :title="'Работа ITLINE в режиме самоизоляции'"
                    :text="'Представляем готовое решение, предназначенное для удалённого контроля за мусорными баками. Система мгновенно сообщит оператору о переполненном баке, возгорании или краже!'"
                    :bg="'gradient'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="4"
                    :title="'Новое многофункциональное электронное табло в Тамбове'"
                    :text="'Ни одну систему связи нельзя организовать без соединителей, разъёмов и коннекторов! Поэтому мы глобально расширяем направление промышленных коннекторов!'"
                    :bg="'white'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />

                <NewsItem
                    :col="12"
                    :title="'Обновление Sentinel LDK 8.0.4'"
                    :text="'Компания Thales, мировой эксперт в области монетизации софта, выпустила обновление для решения в области защиты и лицензирования - Sentinel LDK 8.0.4 (patch 12/2020).В обновлении большое внимание уделено расширению функционала облачных и программных лицензий, а также утилиты автоматической защиты Envelope.'"
                    :bg="'news_3.png'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                
                <NewsItem
                    :col="3"
                    :title="'Robustel представляет R5020 - промышленный IoT-маршрутизатор с поддержкой 5G'"
                    :text="'Представляем готовое решение, предназначенное для удалённого контроля за мусорными баками. '"
                    :bg="'news_1.png'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="3"
                    :title="'Работа ITLINE в режиме самоизоляции'"
                    :text="'С радостью сообщаем, что наша компания подтвердила статус Золотого партнёра Thales по направлению «Защита и...'"
                    :bg="'white'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="3"
                    :title="'Обзор универсальных спортивных экранов от производителя ITLINE'"
                    :text="'Представляем готовое решение, предназначенное для удалённого контроля за мусорными баками. '"
                    :bg="'news_2.png'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />
                <NewsItem
                    :col="3"
                    :title="'Новое многофункциональное электронное табло в Тамбове'"
                    :text="'Ни одну систему связи нельзя организовать без соединителей, разъёмов и коннекторов!'"
                    :bg="'gradient'"
                    :date="'04.02.2020'"
                    :likes="'15'"
                    :comments="'15'"
                    :views="'15'"
                />

            </div>
            <div class="row">
                <div class="col">
                    <paginate
                        :page-count="2"
                        :click-handler="clickCallback"
                        :prev-text="''"
                        :next-text="''"
                        :prev-class="'paginate-prev'"
                        :next-class="'paginate-next'"
                        :page-class="'paginate-item'"
                        :container-class="'paginate'"
                    >
                    </paginate>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NewsItem from '@/components/News/NewsItem'

export default {
    components: {
        NewsItem
    },
    name: 'News',
    data() {
        return {
            page: 1
        }
    },
    methods: {
        clickCallback(pageNum) {
            this.page = pageNum;
        }
    },
}
</script>

<style lang="scss">
    .paginate {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        padding: 16px 0;
        margin: 0;
        & .disabled {
            opacity: 0.35;
            cursor: auto;
            pointer-events: none;
        }
        &-prev {
            & a {
                margin-right: 28px;
                cursor: pointer;
                display: block;
                width: 40px;
                height: 40px;
                min-width: 40px;
                min-height: 40px;
                border-radius: 50%;
                font-family: serif;
                background-color: $white;
                box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
                background-image: url('../assets/images/arrow_prev.svg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 12px 19px;
                outline: none;
                &:hover {
                    transition: all 0.2s;
                    background-color: #FBFBFB;
                    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
                }
            }
        }
        &-next {
            & a {
                margin-left: 28px;
                cursor: pointer;
                display: block;
                width: 40px;
                height: 40px;
                min-width: 40px;
                min-height: 40px;
                border-radius: 50%;
                font-family: serif;
                background-color: $white;
                box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
                background-image: url('../assets/images/arrow_next.svg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 12px 19px;
                outline: none;
                &:hover {
                    transition: all 0.2s;
                    background-color: #FBFBFB;
                    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
                }
            }
        }
        &-item {
            margin: 0 12px;
            & a {
                font-family: $TTNormsRegular;
                font-size: 18px;
                line-height: 24px;
                color: $grey-2;
                outline: none;
                &:hover {
                    color: $orange;
                }
            }
            &.active {
                & a {
                    color: $orange;
                    outline: none;
                }
            }
        }
    }
</style>