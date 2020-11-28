<template>
    <div class="col-lg-4 col-md-6 col-12 mb-5">
        <a href="javascript:;" class="main-options__item">
            <div 
                class="main-options__item-image"
                :style="{'background-image': 'url(' + require('../assets/images/' + image) + ')'}"
            ></div>
            <p class="main-options__item-title text-xl">
                {{ text }}
            </p>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        text: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        }
    },
    computed: {
        
    }
}
</script>

<style lang="scss">
    .main{
        &-options{
            &__block{
                position: relative;
            }
            &__item{
                position: relative;
                display: block;
                width: 100%;
                height: 100%;
                color: $black;
                box-shadow: 0px 10px 13px 0px rgba(0, 0, 0, .05);
                text-decoration: none !important;
                transition: all .2s;
                &:hover{
                    color: #ff3500;
                }
                &-image{
                    position: relative;
                    width: 100%;
                    height: 200px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center bottom;
                    &::after{
                        content: '';
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-image: url('../assets/images/options-bg.png');
                        background-size: cover;
                        background-position: center -75%;
                        background-repeat: no-repeat;
                    }
                }
                &-title{
                    padding: 20px;
                    background-color: $white;
                    font-weight: bold;
                }
            }
        }
    }
</style>