<template>
    <div class="">
        <div class="container mb-40">
            <div class="row">
                <div class="col-lg-3 col-12">
                    <AboutItem :text="'Единиц готовой продукции выпущено'" :title="'20 000'" :image="'about_1.svg'" />
                </div>
                <div class="col-lg-3 col-12">
                    <AboutItem :text="'Разработано для каждого направления'" :title="'Уникальное ПО'" :image="'about_2.svg'" />
                </div>
                <div class="col-lg-3 col-12">
                    <AboutItem :text="'Сотрудничают с нашей компанией по всей стране'" :title="'100 партнеров'" :image="'about_3.svg'" />
                </div>
                <div class="col-lg-3 col-12">
                    <AboutItem :text="'Которые имеют большой потенциал дальнейшего развития'" :title="'Создаем готовые решения'" :image="'about_4.svg'" />
                </div>
            </div>
        </div>
        <div class="container mb-48">
            <div class="row justify-content-center">
                <div class="col-8">
                    <div class="quote mb-40">
                        <p><span class="text-orange">ITLINE</span> — один из ведущих производителей электронных светодиодных табло в России и СНГ. </p>
                        <p><span class="text-orange">Электронные табло ITLINE™</span> — это сочетание высококачественных запатентованных материалов, точной микроэлектроники и уникального программного обеспечения, разработанного в строгом соответствии со специализированными требованиями конкретных отраслей.</p>
                    </div>
                    <div class="mb-40">
                        <div class="d-flex align-items-center mb-32">
                            <img class="mr-16" src="../../../assets/images/about_information_1.svg" alt="about_information_1">
                            <div class="">
                                <h6 class="h6 text-uppercase">Миссия</h6>
                                <p class="p2 mb-0">Создание систем информирования для комфортного взаимодействия человека с внешней средой.</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-32">
                            <img class="mr-16" src="../../../assets/images/about_information_2.svg" alt="about_information_2">
                            <div class="">
                                <h6 class="h6 text-uppercase">Подход</h6>
                                <p class="p2 mb-0">Передача информации доступными образами и формами, понятными пользователю на интуитивном уровне.</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <img class="mr-16" src="../../../assets/images/about_information_3.svg" alt="about_information_3">
                            <div class="">
                                <h6 class="h6 text-uppercase">Цель</h6>
                                <p class="p2 mb-0">Разработка универсальных решений в области информирования за счет расширения дилерской сети и  интеграций с ведущими производителями.</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <p class="p2 text-grey-2">Более 25 лет мы работаем в сфере цифрового оборудования. При разработке электронных устройств конструкторское бюро ITLINE учитывает не только специализированные отраслевые требования, но и особенности климатических условий России и стран СНГ. Каждый прибор проходит проверку соответствия качества отделом технического контроля.</p>
                        <p class="p2 text-grey-2">Сфера деятельности ITLINE уникальна и обширна. В ее состав входят различные категории специализированного оборудования:</p>
                    </div>
                </div>
            </div>
        </div>
        <ProductsBlock />
    </div>
</template>

<script>
import AboutItem from '@/components/About/AboutItem'
import ProductsBlock from '@/components/Products/ProductsBlock'
export default {
    components: {
        AboutItem, ProductsBlock
    },
    
}
</script>

<style lang="scss">
    
</style>