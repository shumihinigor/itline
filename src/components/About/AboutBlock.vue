<template lang="">
    <section class="about mb-80">
        <div class="container mb-64">
            <div class="row mb-24">
                <div class="col-12">
                    <h1 class="h1 text-grey-1 font-weight-bold mb-16">ITLINE – производитель светодиодного оборудования</h1>
                    <p class="p1 text-orange mb-0">Разработка функциональных решений в сфере аудио и визуального информирования</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-12">
                    <p class="p3 text-grey-3 mb-0">
                        Инновационные проекты ITLINE широко применяются в сфере обслуживания, транспортного мониторинга 
                        и промышленной безопасности. Конструкторское бюро
                        учитывает характерные требования каждой отрасли и климатические условия региона, в
                        который будет поставляться оборудование.
                    </p>
                </div>
            </div>
        </div>
        <div class="container mb-32">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-12">
                    <AboutItem :text="'Единиц готовой продукции выпущено'" :title="'20 000'" :image="'about_1.svg'" />
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <AboutItem :text="'Разработано для каждого направления'" :title="'Уникальное ПО'" :image="'about_2.svg'" />
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <AboutItem :text="'Сотрудничают с нашей компанией по всей стране'" :title="'100 партнеров'" :image="'about_3.svg'" />
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <AboutItem :text="'Которые имеют большой потенциал дальнейшего развития'" :title="'Создаем готовые решения'" :image="'about_4.svg'" />
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <router-link to="/about">
                        <button type="button" class="btn contour">
                            <span class="p4 text-uppercase">узнать больше О компании</span>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AboutItem from '@/components/About/AboutItem'

export default {
    components: {
        AboutItem
    },
    
}
</script>

<style lang="scss">
    
</style>