<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <div class="d-flex align-items-start">
                        <div class="mr-80">
                            <h6 class="h6 font-weight-bold text-grey-1 mb-16">Продукция</h6>
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
                        <div class="mr-80">
                            <h6 class="h6 font-weight-bold text-grey-1 mb-16">О компании</h6>
                            <ul class="footer-links">
                                <li class="p2 text-grey-1 footer-link">Дилеры</li>
                                <li class="p2 text-grey-1 footer-link">Реквизиты</li>
                                <li class="p2 text-grey-1 footer-link">Вакансии</li>
                            </ul>
                        </div>
                        <div class="">
                            <h6 class="h6 font-weight-bold text-grey-1 mb-16">Контакты</h6>
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
                <div class="col-4"></div>
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
        padding: 60px 0 70px 0;
        background-color: $grey-6;
        margin-top: auto;
        &-links {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;
            list-style: none;
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
    }
</style>