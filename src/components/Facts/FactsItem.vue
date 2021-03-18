<template>
    <div class="col-lg-4 col-md-4 col-12 mb-5">
        <div class="main-facts">
            <div 
                class="main-facts__image"
                :style="{'background-image': 'url(' + require('../../assets/images/' + image) + ')'}"
            >
            </div>
            <p class="main-facts__title text-xl mb-2">{{ title }}</p>
            <p class="main-facts__text text-l">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
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
        }
    }
}
</script>

<style lang="scss">
    .main {
        &-facts{
            &__image{
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #f0f0f0;
                border-radius: 100%;
                padding: 20px;
                margin-bottom: 35px;
                width: 131px;
                height: 114px;
                background-size: 80% 80%;
                background-repeat: no-repeat;
                background-position: center center;
            }
            &__title{
                text-transform: uppercase;
                color: $black;
                font-weight: bold;
            }
        }
    }
</style>