<template>
    <div class="container mb-80">
        <div class="row align-items-center">
            <div class="col-lg-6 col-12">
                <h3 class="h3 text-grey-1 mb-16 d-lg-block d-none">Вакансии</h3>
                <p class="p2 text-grey-2 mb-24">Сотрудники ITline внедряют современные решения в сфере информирования для таких компаний, как «ТНК», «Сбербанк», «ГАЗПРОМ», «РЖД», «РИО». ITLINE — это комфортная среда,           в которой каждый сотрудник реализовывает свой потенциал. Семинары у гуру направлений, обмен знаниями внутри компании, и возможность работать на вершине технологий             в сфере передачи информации! Быть частью нашей команды —  это быть человеком во всех смыслах! </p>
                <button class="btn default d-lg-block d-none">
                    <span>смотреть вакансии</span>
                </button>
            </div>
            <div class="col-lg-6 col-12">
                <div class="vacancies-radial">
                    <div v-if="currentBonus == 'charity'" class="vacancies-radial__text">
                        <h6 class="h6 text-uppercase text-grey-2">Забота о сотрудниках</h6>
                        <p class="p2 text-grey-2">В здании компании есть кухня, где каждому доступны вода, бесплатные кофе и печенье, конфеты и фрукты! Мы следим за настроением коллектива! </p>
                    </div>
                    <div v-else-if="currentBonus == 'idea'" class="vacancies-radial__text">
                        <h6 class="h6 text-uppercase text-grey-2">Любишь идеи по улучшению?</h6>
                        <p class="p2 text-grey-2">Мы всегда их рассмотрим и найдем применение!</p>
                    </div>
                    <div v-else-if="currentBonus == 'social'" class="vacancies-radial__text">
                        <h6 class="h6 text-uppercase text-grey-2">Социальная отзывчивость</h6>
                        <p class="p2 text-grey-2">В тяжелые для города и людей времена, мы не остаемся в тени, и помогаем жителям. Не прошла бесследно и пандемия 2020 года! </p>
                    </div>
                    <div v-else-if="currentBonus == 'party'" class="vacancies-radial__text">
                        <h6 class="h6 text-uppercase text-grey-2">Корпоративные мероприятия</h6>
                        <p class="p2 text-grey-2">Мы отдыхаем не только в праздники! У нас проходят разные соревнования и игры, весело, культурно, в приятной обстановке! </p>
                    </div>
                    <div v-else-if="currentBonus == 'book'" class="vacancies-radial__text">
                        <h6 class="h6 text-uppercase text-grey-2">Обучение за счет компании</h6>
                        <p class="p2 text-grey-2">Хотите повышать профессионализм? Добро пожаловать в  Итлайн! Здесь, помимо роста в процессе работы, вы можете бесплатно пройти обучение у топовых гуру! </p>
                    </div>
                    <ul>
                        <li :class="['charity', {active: currentBonus == 'charity'}]" @click="currentBonus = 'charity'">
                            <img svg-inline src="../../../assets/images/vacancies_charity.svg" alt="charity">
                        </li>
                        <li :class="['idea', {active: currentBonus == 'idea'}]" @click="currentBonus = 'idea'">
                            <img svg-inline src="../../../assets/images/vacancies_idea.svg" alt="idea">
                        </li>
                        <li :class="['social', {active: currentBonus == 'social'}]" @click="currentBonus = 'social'">
                            <img svg-inline src="../../../assets/images/vacancies_social.svg" alt="social">
                        </li>
                        <li :class="['party', {active: currentBonus == 'party'}]" @click="currentBonus = 'party'">
                            <img svg-inline src="../../../assets/images/vacancies_party.svg" alt="party">
                        </li>
                        <li :class="['book', {active: currentBonus == 'book'}]" @click="currentBonus = 'book'">
                            <img svg-inline src="../../../assets/images/vacancies_book.svg" alt="book">
                        </li>
                    </ul>
                </div>
                <button class="btn default w-100 mt-56 d-lg-none d-block">
                    <span>смотреть вакансии</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentBonus: "charity"
        }
    },
}
</script>

<style lang="scss">
    .vacancies {
        &-radial {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 565px;
            height: 565px;
            border: 45px solid $blue;
            border-radius: 50%;
            margin-left: auto;
            padding: 50px;
            text-align: center;
            &__text {
                & p {
                    margin-bottom: 0;
                }
                @media (max-width: 991px) {
                    & p {
                        font-size: 13px;
                        line-height: 17px;
                    }
                    & h6 {
                        font-size: 14px;
                        line-height: 18px;
                    }
                }
            }
            @media (max-width: 1240px) {
                width: 465px;
                height: 465px;
            }
            @media (max-width: 991px) {
                width: 315px;
                height: 315px;
                border: 20px solid $blue;
                margin-right: auto;
                margin-top: 40px;
                padding: 40px;
            }
            & ul {
                list-style: none;
                padding: 0;
                margin: 0;
                & li {
                    position: absolute;
                    width: 115px;
                    height: 115px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: $white;
                    border: 1px solid $blue;
                    transition: all 0.2s;
                    cursor: pointer;
                    @media (max-width: 1240px) {
                        width: 105px;
                        height: 105px;
                    }
                    @media (max-width: 991px) {
                        width: 80px;
                        height: 80px;
                        & svg {
                            width: 48px;
                            height: 48px;
                        }
                    }
                    &:hover,
                    &.active {
                        background: $orange;
                        border: 1px solid $orange;
                        & svg {
                            & path {
                                fill: $white;
                            }
                        }
                    }
                    &.charity {
                        top: -10%;
                        left: 10%;
                    }
                    &.idea {
                        top: -10%;
                        right: 10%;
                    }
                    &.social {
                        bottom: 10%;
                        right: -10%;
                    }
                    &.party {
                        bottom: -15%;
                        right: 0;
                        left: 0;
                        margin: auto;
                    }
                    &.book {
                        bottom: 10%;
                        left: -10%;
                    }
                }
            }
        }
    }
    .wrapper {
        &::after, 
        &::before {
            display: none;
        }
    }
</style>