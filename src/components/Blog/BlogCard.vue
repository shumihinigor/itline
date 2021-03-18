<template>
    <div class="col-lg-3 col-md-6 col-12 mb-5">
        <a href="javascript:;" class="main-blog__item">
            <div 
                class="main-blog__item-image"
                :style="{'background-image': 'url(' + require('../../assets/images/' + image) + ')'}"
            ></div>
            <div 
                class="main-blog__item-title"
                :style="[textCenter ? {marginTop: 'auto'} : {marginTop: '0'}]"
            >
                <p 
                    v-if="date !== ''"
                    class="text-s text-gray mb-1 text-s">
                    {{ date }}
                </p>
                <p class="text-m">
                    {{ text }}
                </p>
            </div>
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
        date: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        textCenter: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        
    }
}
</script>

<style lang="scss">
    .main{
        &-blog{
            &__block{
                position: relative;
            }
            &__item{
                position: relative;
                display: flex;
                flex-direction: column;
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
                    background-position: center top;
                }
                &-title{
                    padding: 20px;
                    background-color: $white;
                    font-weight: bold;
                    margin-bottom: auto;
                }
            }
        }
    }
</style>