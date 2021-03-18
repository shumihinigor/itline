<template>
    <div>
        
        <section class="main">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="bg-white pt-5 pb-5">
                            <div class="row justify-content-center">
                                <div class="col-lg-10 col-12">
                                    <h3 class="main-options__title title-h3 mb-5">Автоинформатор ITLINE GPS</h3>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-lg-10 col-12">
                                    <div class="row">
                                        <div class="col-lg-4 col-12">
                                            
                                        </div>
                                        <div class="col-lg-6 col-12">
                                            <div class="mb-4">
                                                <div class="text-m mb-2">
                                                    <span class="text-gray">Дополнительные устройства: </span>
                                                    <span class="">ГЛОНАСС/GPS-антенна, GSM-антенна</span>
                                                </div>
                                                <div class="text-m mb-2">
                                                    <span class="text-gray">Управление: </span>
                                                    <span class="">Автоматическая и ручная смена остановок</span>
                                                </div>
                                                <div class="text-m mb-2">
                                                    <span class="text-gray">Крепление: </span>
                                                    <span class="">Универсальное</span>
                                                </div>
                                                <div class="text-m mb-2">
                                                    <span class="text-gray">Дисплей: </span>
                                                    <span class="">Монохромный двухстрочный, с подсветкой</span>
                                                </div>
                                                <div class="text-m mb-2">
                                                    <span class="text-gray">Звук: </span>
                                                    <span class="">Встроенный усилитель звука</span>
                                                </div>
                                                <div class="text-m mb-2">
                                                    <span class="text-gray">Поддержка типов карт памяти: </span>
                                                    <span class="">Micro-sd</span>
                                                </div>
                                                <div class="text-m mb-2">
                                                    <span class="text-gray">Объем: </span>
                                                    <span class="">поддерживаемых карт памяти: 16Гб</span>
                                                </div>
                                                <div class="text-m mb-2">
                                                    <span class="text-gray">SIM-карта: </span>
                                                    <span class="">Встроенная</span>
                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <div class="text-m">
                                                    <p class="mb-2">Опции и дополнительная периферия: </p>
                                                    <p class="text-gray">Наличие датчика температуры, тагенты и  сухого контакта открытия дверей. Кнопка водителя и дополнитльная клавиша переключения остановок. Возможность размещения на приборной панели.</p>
                                                </div>
                                            </div>
                                            <div class="">
                                                <button class="button-gradient text-m">Оставить заявку</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- others -->
        <section class="main">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="bg-white pt-6">
                            <div class="row justify-content-center">
                                <div class="col-lg-10 col-12">
                                    <h3 class="main-blog__title title-h5 mb-5">Прочие модели навигационных  терминалов и информаторов</h3>
                                </div>
                            </div>
                            <div class="row justify-content-center main-blog__block">
                                <div class="col-lg-10 col-12">
                                    <div class="row">
                                        <BlogCard 
                                            text="СИГНАЛ S-2651"
                                            image="product-1.png"
                                            text-center="true"
                                        />
                                        <BlogCard 
                                            text="Гранит-навигатор-411"
                                            image="product-1.png"
                                            text-center="true"
                                        />
                                        <BlogCard 
                                            text="Galileosky 7.0"
                                            image="product-1.png"
                                            text-center="true"
                                        />
                                        <BlogCard 
                                            text='Электронная информационная система "ЭЛИС"'
                                            image="product-1.png"
                                            text-center="true"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FeedBackItem 
            name="Иванов Иван"
            image="feedback-1.png"
        />
    </div>
</template>

<script>
    import FeedBackItem from '@/components/Feedback/FeedBackItem.vue'
    import BlogCard from '@/components/Blog/BlogCard.vue'
    export default {
        components: {
            FeedBackItem, BlogCard
        },
        name: 'Support'
    }
</script>