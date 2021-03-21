<template>
    <header :class="['header', {active: activeHeader}]">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div :class="['d-flex align-items-center justify-content-between', {'d-sm-none': openMenu}]">
                        <div class="d-lg-none d-block">
                            <div class="header-hamburger" @click="openMenu = !openMenu">
                                <img svg-inline src="../assets/images/hamburger.svg" alt="hamburger">
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="header-logo">
                                <router-link to="/"><img svg-inline src="../assets/images/logo.svg" alt="logo"></router-link>
                            </div>
                            <ul class="header-links d-lg-flex d-none">
                                <li class="header-link">
                                    <router-link class="p5 weight-500 text-uppercase" to="/products">Продукция</router-link>
                                </li>
                                <li class="header-link">
                                    <router-link class="p5 weight-500 text-uppercase" to="/solutions">Готовые решения</router-link>
                                </li>
                                <li class="header-link">
                                    <router-link class="p5 weight-500 text-uppercase" to="/support">Техподдержка</router-link>
                                </li>
                                <li class="header-link">
                                    <router-link class="p5 weight-500 text-uppercase" to="/news">новости</router-link>
                                </li>
                                <li class="header-link">
                                    <router-link class="p5 weight-500 text-uppercase" to="/about">о компании</router-link>
                                </li>
                                <li class="header-link">
                                    <router-link class="p5 weight-500 text-uppercase" to="/contacts">Контакты</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="header-contact d-lg-block d-none">
                                <a class="p4" href="javascript:;">Связаться с нами</a>
                            </div>
                            <div class="header-phone d-lg-block d-none">
                                <a class="p4" href="tel:88005557777">8 (800) 555-77-77</a>
                            </div>
                            <div class="header-search">
                                <img svg-inline src="../assets/images/search.svg" alt="search">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            openMenu: false
        }
    },
    computed: {
        ...mapGetters(["activeHeader"]),
    },
}
</script>

<style lang="scss">
    .header {
        position: fixed;
        z-index: 999;
        top: 0;
        right: 0;
        left: 0;
        padding: 16px 0;
        transition: all 0.2s;
        background-color: $white;
        &-hamburger {
            cursor: pointer;
        }
        &-logo {
            margin-right: 30px;
            @media (max-width: 1199px) {
                margin-right: 15px;
            }
            @media (max-width: 991px) {
                & svg {
                    width: 97px;
                    height: 32px;
                }
            }
        }
        &-links {
            display: flex;
            align-items: center;
            padding: 0;
            margin: 0;
            list-style: none;
        }
        &-link {
            padding: 0;
            margin: 0;
            margin-right: 24px;
            & a {
                position: relative;
                color: $grey-6;
                text-decoration: none;
                &::after {
                    content: '';
                    position: absolute;
                    bottom: -6px;
                    right: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: $orange;
                    transition: all 0.2s;
                }
                &:hover {
                    color: $grey-6;
                    text-decoration: none;
                    &::after {
                        width: 100%;
                    }
                }
            }
            &:last-child {
                margin-right: 0;
            }
        }
        &-contact {
            margin-right: 16px;
            & a {
                color: $orange !important;
                transition: all 0.2s;
                &:hover {                    
                    color: $orange !important;
                }
            }
        }
        &-phone {
            margin-right: 16px;
            & a {
                color: $white;
                transition: all 0.2s;
                &:hover {             
                    text-decoration: none;       
                    color: $white;
                }
            }
        }
        &-search {
            cursor: pointer;
            @media (max-width: 991px) {
                & svg {
                    width: 32px;
                    height: 32px;
                }
            }
        }
        & a {
            color: $grey-2;
            &:hover {                
                color: $grey-2;
            }
        }
        & svg {
            & path {
                fill: $grey-1;
            }
        }
        &.active {
            background-color: transparent;
            & .header-phone {
                & a {
                    color: $white;
                }
            }
            & .header-search {
                & svg {
                    & path {
                        fill: $white;
                    }
                }
            }
            & a {
                color: $grey-6;
            }
            & svg {
                & path {
                    fill: $white;
                }
            }
        }
    }
</style>