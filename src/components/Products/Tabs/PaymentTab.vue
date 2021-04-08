<template>
    <div class="payment mb-80">
        <div class="container mb-80">
            <div class="row">
                <div class="col">
                    <div class="payment-road">
                        <div class="payment-road__item">
                            <div class="payment-road__number">1</div>
                            <p class="p2 text-orange mb-0">Выберите изделие</p>
                        </div>
                        <div class="payment-road__item">
                            <div class="payment-road__number">2</div>
                            <p class="p2 text-orange mb-0">Получите консультацию менеджера</p>
                        </div>
                        <div class="payment-road__item">
                            <div class="payment-road__number">3</div>
                            <p class="p2 text-orange mb-0">Выберите вид доставки и транспортную компанию</p>
                        </div>
                        <div class="payment-road__item">
                            <div class="payment-road__number">4</div>
                            <p class="p2 text-orange mb-0">Получите счет и договор на ваши реквизиты</p>
                        </div>
                        <div class="payment-road__item">
                            <div class="payment-road__number">5</div>
                            <p class="p2 text-orange mb-0">Оплатите счет</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mb-40">
                <div class="col">
                    <h3 class="h3">Способы доставки</h3>
                    <p class="p2">Мы предлагаем различные способы доставки и получения Вашего заказа:</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-12 mb-24">
                    <div class="payment-delivery__item">
                        <div class="d-flex align-items-center">
                            <div class="payment-delivery__image">
                                <img src="../../../assets/images/payment_man.svg" alt="payment_man">
                            </div>
                            <h5 class="h5 text-grey-1 font-weight-bold mb-0">Курьер</h5>
                        </div>
                        <p class="payment-delivery__text p3 text-grey-2 mb-0">
                            Курьерская доставка транспорт- ными компаниями по всей территории России до терминала транспортной компании, преимущественно отправки осуществляются силами ТК «Деловые линии», ТК «DPD» и др.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-12 mb-24">
                    <div class="payment-delivery__item">
                        <div class="d-flex align-items-center">
                            <div class="payment-delivery__image">
                                <img src="../../../assets/images/payment_truck.svg" alt="payment_truck">
                            </div>
                            <h5 class="h5 text-grey-1 font-weight-bold mb-0">Транспортные компании</h5>
                        </div>
                        <p class="payment-delivery__text p3 text-grey-2 mb-0">
                            Адресная доставка транспортными компаниями
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-12 mb-24">
                    <div class="payment-delivery__item">
                        <div class="d-flex align-items-center">
                            <div class="payment-delivery__image">
                                <img src="../../../assets/images/payment_take.svg" alt="payment_take">
                            </div>
                            <h5 class="h5 text-grey-1 font-weight-bold mb-0">Самовывоз</h5>
                        </div>
                        <p class="payment-delivery__text p3 text-grey-2 mb-0">
                            Самовывоз изделия со склада<br />в г. Ярославль
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-12 mb-24">
                    <div class="payment-delivery__item">
                        <div class="d-flex align-items-center">
                            <div class="payment-delivery__image">
                                <img src="../../../assets/images/payment_pos.svg" alt="payment_pos">
                            </div>
                            <h5 class="h5 text-grey-1 font-weight-bold mb-0">Терминал</h5>
                        </div>
                        <p class="payment-delivery__text p3 text-grey-2 mb-0">
                            Бесплатная доставка 
                            <br />
                            до терминала 
                            <br />
                            транспортной компании Москвы 
                            <br />
                            и Санкт-Петербурга
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .payment {
        &-road {
            position: relative;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 24px 32px 40px 24px;
            background-color: $white;
            border-radius: 10px;
            @media (max-width: 991px) {
                flex-direction: column;
                align-items: center;
            }
            &__item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                color: $orange;
                flex-basis: 20%;
                @media (max-width: 991px) {
                    margin-bottom: 40px;
                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
            &__number {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 56px;
                height: 56px;
                border: 1px solid $orange;
                border-radius: 50%;
                font-family: $TTNormsMedium;
                font-size: 30px;
                line-height: 140%;
                color: $orange;
                margin-bottom: 16px;
            }
        }
        &-delivery {
            &__item {
                position: relative;
                height: 100%;
                padding: 20px;
                background-color: $white;
                border-radius: 10px;
            }
            &__image {
                margin-right: 20px;
            }
            &__text {
                margin-top: 20px;
            }
        }
    }
</style>