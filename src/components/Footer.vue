<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-12">
                    <div class="d-flex align-items-start flex-wrap">
                        <div class="mr-80 mb-5">
                            <h6 class="h6 footer-title text-uppercase font-weight-bold text-grey-1 mb-16">Продукция</h6>
                            <ul class="footer-links">
                                <li class="p2 text-grey-1 footer-link">Каталог продукции</li>
                                <li class="p2 text-grey-1 footer-link">Готовые решения</li>
                                <li class="p2 text-grey-1 footer-link">Реализованные проекты</li>
                                <li class="p2 text-grey-1 footer-link">Оплата и доставка</li>
                                <li class="p2 text-grey-1 footer-link">Гарантия</li>
                                <li class="p2 text-grey-1 footer-link">База знаний</li>
                                <li class="p2 text-grey-1 footer-link">Техподдержка</li>
                            </ul>
                        </div>
                        <div class="mr-80 mb-5">
                            <h6 class="h6 footer-title text-uppercase font-weight-bold text-grey-1 mb-16">О компании</h6>
                            <ul class="footer-links">
                                <li class="p2 text-grey-1 footer-link">Дилеры</li>
                                <li class="p2 text-grey-1 footer-link">Реквизиты</li>
                                <li class="p2 text-grey-1 footer-link">Вакансии</li>
                            </ul>
                        </div>
                        <div class="">
                            <h6 class="h6 footer-title text-uppercase font-weight-bold text-grey-1 mb-16">Контакты</h6>
                            <ul class="footer-links mb-16">
                                <li class="p2 text-grey-1 footer-link">
                                    <span>Ярославль: </span>
                                    <a class="font-weight-bold" href="tel:+74852594937">+7 (4852) 59-49-37</a>
                                </li>
                                <li class="p2 text-grey-1 footer-link">
                                    <span>Москва: </span>
                                    <a class="font-weight-bold" href="tel:+74952229031">+7 (495) 222-90-31</a>
                                </li>
                                <li class="p2 text-grey-1 footer-link">
                                    <span>Россия: </span>
                                    <a class="font-weight-bold" href="tel:88002002815">8 800 200-28-15</a>
                                </li>
                            </ul>
                            <div class="footer-social">
                                <a href="javascript:;">
                                    <img svg-inline src="../assets/images/vk.svg" alt="vk">
                                </a>
                                <a href="javascript:;">
                                    <img svg-inline src="../assets/images/inst.svg" alt="inst">
                                </a>
                                <a href="javascript:;">
                                    <img svg-inline src="../assets/images/fb.svg" alt="fb">
                                </a>
                                <a href="javascript:;">
                                    <img svg-inline src="../assets/images/youtube.svg" alt="youtube">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-12 footer-help-desk">
                    <div class="d-flex flex-column align-items-center justify-content-center h-100">
                        <div class="">
                            <div class="d-flex align-items-center mb-16">
                                <div class="mr-16">
                                    <img src="../assets/images/help_desk.svg" alt="help_desk" />
                                </div>
                                <div class="">
                                    <p class="p4 mb-8">Единая справочная служба</p>
                                    <a href="tel:88002002815" class="tel h5">8 800 200-28-15</a>
                                </div>
                            </div>
                            <router-link class="btn contour" tag="button" :to="{ name: 'Support' }">
                                <span class="p4 text-uppercase text-orange">Обратиться в техподдержку</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .footer {
        position: relative;
        padding: 60px 0 60px 0;
        background-color: $grey-6;
        margin-top: auto;
        border-radius: 20px 20px 0px 0px;
        @media (max-width: 991px) {
            padding: 32px 0 60px 0;
        }
        &-links {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;
            list-style: none;
        }
        &-title {
            font-size: 16px !important;
            line-height: 18px !important;
        }
        &-link {
            padding: 0;
            margin: 0;
            margin-bottom: 4px;
            & a {
               text-decoration: none;
               color: $grey-1;
               &:hover {
                text-decoration: none;
                color: $grey-1;
               }
            }
            &:last-child {
                margin-right: 0;
            }
        }
        &-social {
            display: flex;
            & a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                min-width: 32px;
                min-height: 32px;
                margin-right: 24px;
                border-radius: 50%;
                background: $white;
                box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
                transition: all 0.2s;
                &:hover {
                    background-color: #FBFBFB;
                    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
                }
                &:last-child {
                    margin-right: 0;
                }
            }
        }
        &-help-desk {
            border-left: 1px solid #E0E0E0;
            @media (max-width: 991px) {
                margin-top: 50px !important;
                border: 0;
            }
            & .btn {
                padding: 9px 45px !important;
            }
            & .tel {
                text-decoration: none;
                color: $grey-1;
                &:hover {
                    text-decoration: none;
                    color: $grey-1;
                }
            }
        }
    }
</style>