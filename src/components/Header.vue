<template>
    <header class="header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-2">
                    <div class="header-logo">

                    </div>
                </div>
                <div class="col-6">
                    <ul class="header-links">
                        <li>
                            <router-link to="/">Главная</router-link>
                        </li>
                        <li>
                            <router-link to="/products">Продукция</router-link>
                        </li>
                        <li>
                            <router-link to="/about">о компании</router-link>
                        </li>
                        <li>
                            <router-link to="/blog">БЛОГ</router-link>
                        </li>
                        <li>
                            <router-link to="/contacts">Контакты</router-link>
                        </li>
                        <li>
                            <router-link to="/support">Поддержка</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-2">
                    <div class="header-phone">
                        <div class="">Бесплатно по России</div>
                        <a href="tel:+78002002815" class="">8 800 200 28 15</a>
                    </div>
                </div>
                <div class="col-2">
                    <div class="header-contact">
                        <button type="button" class="btn">Связаться с нами</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .header{
        position: relative;
        padding: 20px 0;
        background-color: #333333;
        box-shadow: 0px 0px 10px 0px #000000;
        margin-bottom: 100px;
        &-logo{
            width: 135px;
            height: 45px;
            background-image: url(../assets/logo.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }
        &-links{
            display: flex;
            align-items: center;
            justify-content: space-around;
            list-style: none;
            color: #FFFFFF;
            margin: 0;
            padding: 0;
            & li{
                text-transform: uppercase;
                margin-right: 15px;
                font-size: 12px;
                line-height: 14px;
                &:last-child{
                    margin-right: 0;
                }
                & a{
                    color: #FFFFFF;
                    text-decoration: none;
                }
            }
        }
        &-phone{
            font-size: 12px;
            line-height: 14px;
            color: #FFFFFF;
            text-align: right;
            & a{
                font-size: 16px;
                line-height: 18px;
                color: #FFFFFF;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: bold;
            }
        }
        &-contact{
            text-align: right;
            & button{
                font-size: 12px;
                line-height: 14px;
                padding: 15px 10px;
                margin: 0;
                color: #FFFFFF;
                background: orange;
                border: none;
                outline: none;
                background: transparent;
                border: 1px solid white;
                text-transform: uppercase;
                font-weight: bold;
                &:focus{
                    outline: none;
                    box-shadow: none;
                }
                &:hover{
                    background: linear-gradient(to bottom, #ff9100, #ff3500);
                    border-radius: 5px;
                    border: none;
                    padding: 16px 11px;
                }
            }
        }
    }
</style>