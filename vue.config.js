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
        page: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/news/page.html',
            // output as dist/index.html
            filename: 'news/page.html',
        },
        information: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/about/information.html',
            // output as dist/index.html
            filename: 'about/information.html',
        },
        certificates: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/about/certificates.html',
            // output as dist/index.html
            filename: 'about/certificates.html',
        },
        vacancies: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/about/vacancies.html',
            // output as dist/index.html
            filename: 'about/vacancies.html',
        },
        history: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/about/history.html',
            // output as dist/index.html
            filename: 'about/history.html',
        },
        gallery: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/about/gallery.html',
            // output as dist/index.html
            filename: 'about/gallery.html',
        },
        dealers: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/about/dealers.html',
            // output as dist/index.html
            filename: 'about/dealers.html',
        },
      }
};