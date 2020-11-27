<template>
    <header class="navbar header navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand header-logo" href="#"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07"
                aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample07">
                <ul class="navbar-nav mr-auto header-links">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Главная</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products">Продукция</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">о компании</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/blog">БЛОГ</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contacts">Контакты</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/support">Поддержка</router-link>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown07"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown07">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> -->
                </ul>
                <div class="header-phone mr-auto">
                    <div class="">Бесплатно по России</div>
                    <a href="tel:+78002002815" class="">8 800 200 28 15</a>
                </div>
                <div class="header-contact">
                    <button type="button" class="btn">Связаться с нами</button>
                </div>
            </div>
        </div>
    </header>
    <!-- <header class="header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-2">
                    <div class="header-logo"></div>
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
    </header> -->
</template>

<style lang="scss">
    .header {
        position: relative;
        padding: 20px 0;
        background-color: #333333;
        box-shadow: 0px 0px 10px 0px #000000;
        margin-bottom: 100px;
        @media (max-width: 991px) {
            margin-bottom: 50px;
            & .navbar-toggler {
                &:focus{
                    outline: none;
                }
            }
        }
        &-logo {
            width: 135px;
            height: 45px;
            background-image: url(../assets/images/logo.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            @media (max-width: 991px) {
                width: 105px;
                height: 34px;
            }
        }

        &-links {
            display: flex;
            align-items: center;
            justify-content: space-around;
            list-style: none;
            color: $white;
            margin: 0;
            padding: 0;
            @media (max-width: 991px) {
                margin-top: 1rem !important;
                margin-bottom: 1rem !important;
            }
            & li {
                text-transform: uppercase;
                font-size: 0.7rem;
                line-height: 1rem;

                &:last-child {
                    margin-right: 0;
                }

                & a {
                    color: $white;
                    text-decoration: none;
                }
            }
        }

        &-phone {
            font-size: 0.7rem;
            line-height: 1rem;
            color: $white;
            text-align: right;
            @media (max-width: 991px) {
                text-align: center;
                margin-bottom: 1rem;
            }
            & a {
                font-size: 1rem;
                line-height: 1.4rem;
                color: $white;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: bold;
            }
        }

        &-contact {
            text-align: right;
            @media (max-width: 991px) {
                text-align: center;
                margin-bottom: 1rem;
            }
            & button {
                font-size: 0.7rem;
                line-height: 1rem;
                padding: 15px 10px;
                margin: 0;
                color: $white;
                background: orange;
                border: none;
                outline: none;
                background: transparent;
                border: 1px solid white;
                text-transform: uppercase;
                font-weight: bold;

                &:focus {
                    outline: none;
                    box-shadow: none;
                }

                &:hover {
                    background: linear-gradient(to bottom, #ff9100, #ff3500);
                    border-radius: 5px;
                    border: none;
                    padding: 16px 11px;
                }
            }
        }
    }
</style>