<template>
    <div id="app">
        <Header />
        <div class="wrapper">
            test
            <transition
                name="fade"
                mode="out-in"
            >
                <router-view></router-view>
            </transition>
        </div>
        <div 
            class="top"
        ></div>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.min.js'
    import jQuery from "jquery";
    window.$ = window.jQuery = require("jquery");
    
    export default {
        components: {
            Header, Footer
        },
        data() {
            return {
                isButtonShow: false
            }
        },
        mounted() {
            this.scrollTop()
        },
        computed: {
            
        },
        methods: {
            scrollTop() {
                // scroll top
                // появление/затухание кнопки #back-top
                // прячем кнопку #back-top
                $(".top").css('opacity', '0');
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 100) {
                        $(".top").css('opacity', '1');
                    } else {
                        $(".top").css('opacity', '0');
                    }
                });
                // при клике на ссылку плавно поднимаемся вверх
                $(".top").click(function () {
                    $("body,html").animate({
                        scrollTop: 0
                    }, 800);
                    return false;
                });
            }
        },
    }

</script>

<style lang="scss">
    #app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .wrapper{
        margin-bottom: auto;
        padding-top: 160px;
        @media (max-width: 991px) {
            padding-top: 110px;
        }
    }
    .top {
        position: fixed;
        z-index: 9999;
        bottom: 30px;
        left: 50px;
        width: 50px;
        height: 50px;
        background: linear-gradient(to bottom, #ff9100, #ff3500);
        -webkit-border-radius: 50%;
        border-radius: 50%;
        cursor: pointer;
        transition: all .2s;
        &:hover{
            background: linear-gradient(to bottom, #ff6e00, #de2c00);
        }
        &::before{
            content: '';
            position: absolute;
            top: -3px;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            width: 22px;
            height: 13px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAyMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNjA2NiAwLjI3MjA3OEwtOS4yNzI1OWUtMDggMTAuODc4N0wyLjEyMTMyIDEzTDEyLjcyNzkgMi4zOTM0TDEwLjYwNjYgMC4yNzIwNzhaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik05IDIuMzkzMTdMMTkuNjA2NiAxMi45OTk4TDIxLjcyNzkgMTAuODc4NUwxMS4xMjEzIDAuMjcxODUxTDkgMi4zOTMxN1oiIGZpbGw9IndoaXRlIi8+PC9zdmc+);

        }
    }
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.2s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>