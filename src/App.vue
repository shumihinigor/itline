<template>
    <div id="app">
        <Header />
        <router-view />
        <!-- <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition> -->
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.min.js'

    export default {
        components: {
            Header
        }
    }

</script>

<style lang="scss">
    body {
        background-color: #f8f8f8;
    }
    #app {
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    .pt{
        &-100{
            padding-top: 100px;
        }
    }
    .pb{
        &-50{
            padding-bottom: 50px;
        }
        &-100{
            padding-bottom: 100px;
        }
    }
    .button{
        &-gradient{
            font-size: 12px;
            line-height: 14px;
            padding: 15px 10px;
            margin: 0;
            color: #FFFFFF;
            background: linear-gradient(to bottom, #ff9100, #ff3500);
            border: none;
            outline: none;
            text-transform: uppercase;
            font-weight: bold;
            border-radius: 5px;
            &:focus{
                outline: none;
                box-shadow: none;
            }
            &:hover{
                background: linear-gradient(to bottom, #ff6e00, #de2c00);
            }
        }
    }
</style>