<template>
    <footer class="footer">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-12">
                    <div class="d-flex justify-content-around flex-lg-row flex-column">
                        <div class="text-m mb-lg-0 mb-2">ITLINE &copy; 2008 - 2020</div>
                        <div class="text-m mb-lg-0 mb-2">
                            <span class="footer-mail">E-mail: <a href="mailto:sales@it-line.info">sales@it-line.info</a></span>
                        </div>
                        <div class="text-m">
                            <span class="footer-phone">
                                <a href="tel:88002002815">8-800-200-28-15</a>; <a href="tel:+74852594937">+7(4852) 59-49-37</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    .footer{
        position: relative;
        padding: 20px 0;
        background: linear-gradient(to bottom, #272727, #181818);
        color: $gray;
        margin-top: 100px;
        @media (max-width: 991px) {
            margin-top: 50px;
        }
        &-mail{
            & a{
                color: $gray;
                transition: all .1s;
                &:hover{
                    text-decoration: none;
                    color: transparentize($gray, 0.5);
                }
            }
        }
        &-phone{
            & a{
                color: $gray;
                transition: all .1s;
                &:hover{
                    text-decoration: none;
                    color: transparentize($gray, 0.5);
                }
            }
        }
    }
</style>