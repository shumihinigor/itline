const ImageminPlugin = require('imagemin-webpack-plugin').default;

// vue.config.js
module.exports = {
    assetsDir: 'assets/',
    publicPath: '/', // Base directory for dev
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/styles/main.scss";
                `
            }
        },
    },
    chainWebpack: config => {
		config.module
			.rule("vue")
			.use("vue-svg-inline-loader")
				.loader("vue-svg-inline-loader")
				.options({ /* ... */ });
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
    },
    pages: {
        index: 'src/main.js',
        about: 'src/main.js',
        solutions: 'src/main.js',
        products: 'src/main.js',
        news: 'src/main.js',
        support: 'src/main.js',
        contacts: 'src/main.js',
        news_page: 'src/main.js',
      }
};