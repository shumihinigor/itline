<template>
    <div class="catalog mb-80">
        <div class="container mb-80">
            <div class="row">
                <div class="col">
                    <div class="catalog-solution mb-64">
                        <div class="row">
                            <div class="col-lg-8 col-12 mb-32">
                                <h3 class="h3 mb-24">Каталоги решений ITLINE</h3>
                                <p class="p2 mb-8">Широкий модельный ряд светодиодных табло ITLINE применяется для отображения информации в коммерческих и социальных областях деятельности. Использование светодиодной продукции делают процесс визуального восприятия информации быстрым и комфортным, подчеркивают статус организации, проявляют заботу о клиентах и гражданах!</p>
                                <p class="p2 mb-0">Решения «ITLINE Светодиодные табло» используются во многих уголках России и ближнего зарубежья, применяются в банковской, спортивной, рекламной, транспортной, промышленной и торговых сферах.</p>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-lg-6 col-12" v-for="(file, index) in solution" :key="index">
                                        <a 
                                            :href="'/static/files/' + file.url" 
                                            download 
                                            class="file__link bg-white mb-24" 
                                        >
                                            <div class="d-flex flex-column align-items-start ml-16">
                                                <p class="p2 text-grey-1 mb-1">{{ file.name }}</p>
                                                <p class="p5 text-grey-3 mb-0">{{ file.size }}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="catalog-presentation">
                        <div class="row">
                            <div class="col-lg-8 col-12 mb-32">
                                <h3 class="h3 mb-24">Презентации проектов</h3>
                                <p class="p2 mb-0">Компания ITLINE разрабатывает высокотехнологичные решения, которые используются в различных сферах жизни. В данном разделе представлены презентации уже реализованных проектов и решений.</p>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-lg-6 col-12" v-for="(file, index) in presentation" :key="index">
                                        <a 
                                            :href="'/static/files/' + file.url" 
                                            download 
                                            class="file__link bg-white mb-24" 
                                        >
                                            <div class="d-flex flex-column align-items-start ml-16">
                                                <p class="p2 text-grey-1 mb-1">{{ file.name }}</p>
                                                <p class="p5 text-grey-3 mb-0">{{ file.size }}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            solution: [
                {
                    name: "Каталог табло метеостанций ITLINE",
                    url: "catalog/Каталог табло метеостанций ITLINE.pdf",
                    size: "5,61 МБ"
                },
                {
                    name: "Каталог табло валют",
                    url: "catalog/ITLINE Каталог табло валют 03-2016.pdf",
                    size: "3,63 МБ"
                },
                {
                    name: "Каталог решений для АЗС от ITLINE",
                    url: "catalog/Каталог Решения для АЗС от ITLINE.pdf",
                    size: "6,88 МБ"
                },
                {
                    name: "Каталог спортивных табло ITLINE",
                    url: "catalog/Каталог спортивных табло ITLINE.pdf",
                    size: "8,67 МБ"
                },
                {
                    name: "Каталог дорожных табло",
                    url: "catalog/Дорожные табло. Каталог.pdf",
                    size: "16,50 МБ"
                },
                {
                    name: "Каталог железнодорожных табло",
                    url: "catalog/Железнодорожные табло. Каталог.pdf",
                    size: "18,10 МБ"
                },
                {
                    name: "Каталог остановочных табло",
                    url: "catalog/Остановочные табло. Каталог.pdf",
                    size: "762 КБ"
                },
                {
                    name: "Каталог транспортных табло",
                    url: "catalog/Транспортные табло. Каталог",
                    size: "20,40 МБ"
                }
            ],
            presentation: [
                {
                    name: "Железная дорога. Реализованные проекты",
                    url: "catalog/Железная дорога. Реализованные проекты.pdf",
                    size: "13,60 МБ"
                },
                {
                    name: "Остановочные табло. Реализованные проекты",
                    url: "catalog/Остановочные табло. Реализованные проекты.pdf",
                    size: "25,00 МБ"
                },
                {
                    name: "Транспортные табло. Реализованные проекты",
                    url: "catalog/Транспортные табло. Реализованные проекты.pdf",
                    size: "8,29 МБ"
                },
                {
                    name: "Промышленные табло. Реализованные проекты",
                    url: "catalog/Промышленные табло. Реализованные проекты.pdf",
                    size: "1,88 МБ"
                }
            ]
        }
    },
}
</script>

<style>

</style>