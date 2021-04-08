<template>
    <div class="mb-80">
        <div class="container mb-64 d-lg-block d-none">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-12">
                    <p class="p2">В этом разделе вы можете ознакомиться со всеми необходимыми инструкциями и техническими характеристиками средств ITLINE. Для каждого устройства можно найти PDF-документ и посмотреть с любого устройства. Для карточек в разделе предполагается анимация (при клике открывается окно с пдф)</p>
                </div>
            </div>
        </div>

        <div class="container mb-40 d-lg-none d-block">
            <div class="row mb-32">
                <div class="col">
                    <p class="p2 mb-16">Для управления светодиодными табло мы применяем различные способы управления отображаемой информации:</p>
                    <ul class="list mb-16">
                        <li class="p2">Пульт ДУ на ИК-лучах;</li>
                        <li class="p2">Программа управления для табло с COM-порт;</li>
                        <li class="p2">Программа управления с ПК по локальной сети;</li>
                        <li class="p2">Программа управления с планшета;</li>
                        <li class="p2">Централизованное управление серверной службы ITLINE finance.</li>
                    </ul>
                    <p class="p2 mb-16">Специализированное ПО входит в каждый комплект оборудования.</p>
                    <p class="p2 mb-16">Однако, в случае утери технической документации, мы предлагаем ознакомиться и скачать необходимые инструкции и программы управления, которые требуются именно для Вашего вида оборудования.</p>
                    <p class="p2 mb-16">Установка Программы осуществляется с помощью соответствующей Инструкции управления, полный доступ к Программе открывается в автоматическом режиме при подключении и идентификации светодиодного табло ITLINE.</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="">
                        <a href="../../../assets/files/Виды и способы креплений светодиодных табло ITLINE.pdf" download class="file__link bg-white">
                            <img svg-inline src="../../../assets/images/product_pdf.svg" alt="product_pdf">
                            <div class="d-flex flex-column align-items-start ml-16">
                                <p class="p2 text-grey-1 mb-1">Описание датчиков, используемых в табло ITLINE</p>
                                <p class="p5 text-grey-3 mb-0">2,4Mb</p>
                            </div>
                        </a>
                        <a href="../../../assets/files/Описание датчиков, используемых в табло ITLINE.pdf" download class="file__link bg-white">
                            <img svg-inline src="../../../assets/images/product_pdf.svg" alt="product_pdf">
                            <div class="d-flex flex-column align-items-start ml-16">
                                <p class="p2 text-grey-1 mb-1">Описание датчиков, используемых в табло ITLINE</p>
                                <p class="p5 text-grey-3 mb-0">2,4Mb</p>
                            </div>
                        </a>
                        <a href="../../../assets/files/Способы подключения питания к табло ITLINE.pdf" download class="file__link bg-white">
                            <img svg-inline src="../../../assets/images/product_pdf.svg" alt="product_pdf">
                            <div class="d-flex flex-column align-items-start ml-16">
                                <p class="p2 text-grey-1 mb-1">Описание датчиков, используемых в табло ITLINE</p>
                                <p class="p5 text-grey-3 mb-0">2,4Mb</p>
                            </div>
                        </a>
                        <a href="../../../assets/files/Способы управления табло ITLINE.pdf" download class="file__link bg-white">
                            <img svg-inline src="../../../assets/images/product_pdf.svg" alt="product_pdf">
                            <div class="d-flex flex-column align-items-start ml-16">
                                <p class="p2 text-grey-1 mb-1">Описание датчиков, используемых в табло ITLINE</p>
                                <p class="p5 text-grey-3 mb-0">2,4Mb</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- products block -->
        <ProductsBlockInfo class="mb-32" />

        <div class="container">
            <div class="row">
                <div class="col">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsBlockInfo from '@/components/Products/ProductsBlockInfo'
export default {
    components: {
        ProductsBlockInfo
    }
}
</script>

<style lang="scss">
    .file__link {
        box-shadow: 0px 4px 10px rgba(2, 26, 86, 0.03);
    }
</style>