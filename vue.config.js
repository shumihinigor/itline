const ImageminPlugin = require('imagemin-webpack-plugin').default;

// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/styles/main.scss";
                `
            }
        }
    },
    configureWebpack: {
        plugins: [
            new ImageminPlugin({
                disable: process.env.NODE_ENV !== 'production',
                pngquant: {
                    quality: '95-100'
                }
            })
        ]
    }
};