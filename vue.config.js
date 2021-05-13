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

  devServer: {
    host: "localhost",
    publicPath: "/",
    hotOnly: false,
    proxy: {
      "/rest/": {
        target: "https://test.it-line.info/",
        changeOrigin: true,
        secure: false,
        router: {
            '/rest': 'https://test.it-line.info/'
        }
      },
      "/images/": {
        target: "https://test.it-line.info/",
        changeOrigin: true,
        secure: false,
        router: {
            '/images': 'https://test.it-line.info/'
        }
      }
    }
  },
    chainWebpack: config => {
        config.module
            .rule("pdf")
            .test(/\.pdf$/)
            .use("file-loader")
            .loader("file-loader");
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
    pwa: {
        name: 'ITLINE',
        themeColor: '#EF6F2E',
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            exclude: [/\.map$/, /_redirects/]
        }
    }
    // pages: {
    //     index: 'src/main.js',
    //     about: 'src/main.js',
    //     solutions: 'src/main.js',
    //     products: 'src/main.js',
    //     news: 'src/main.js',
    //     support: 'src/main.js',
    //     contacts: 'src/main.js',
        
    //     // news page
    //     news_page: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/news/page.html',
    //         // output as dist/index.html
    //         filename: 'news/page.html',
    //     },

    //     // gallery page
    //     gallery_page: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/about/gallery/page.html',
    //         // output as dist/index.html
    //         filename: 'about/gallery/page.html',
    //     },

    //     // gallery tabs
    //     tab_information: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/about/information.html',
    //         // output as dist/index.html
    //         filename: 'about/information.html',
    //     },
    //     tab_certificates: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/about/certificates.html',
    //         // output as dist/index.html
    //         filename: 'about/certificates.html',
    //     },
    //     tab_vacancies: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/about/vacancies.html',
    //         // output as dist/index.html
    //         filename: 'about/vacancies.html',
    //     },
    //     tab_history: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/about/history.html',
    //         // output as dist/index.html
    //         filename: 'about/history.html',
    //     },
    //     tab_gallery: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/about/gallery.html',
    //         // output as dist/index.html
    //         filename: 'about/gallery.html',
    //     },
    //     tab_dealers: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/about/dealers.html',
    //         // output as dist/index.html
    //         filename: 'about/dealers.html',
    //     },

    //     // suppor tabs
    //     tab_contacts: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/support/contacts.html',
    //         // output as dist/index.html
    //         filename: 'support/contacts.html',
    //     },
    //     tab_warranty: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/support/warranty.html',
    //         // output as dist/index.html
    //         filename: 'support/warranty.html',
    //     },
    //     tab_knowledge: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/support/knowledge.html',
    //         // output as dist/index.html
    //         filename: 'support/knowledge.html',
    //     },

    //     // products tabs
    //     tab_payment: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/products/payment.html',
    //         // output as dist/index.html
    //         filename: 'products/payment.html',
    //     },
    //     tab_output: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/products/output.html',
    //         // output as dist/index.html
    //         filename: 'products/output.html',
    //     },

    //     // products category
    //     products_category: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/products/category.html',
    //         // output as dist/index.html
    //         filename: 'products/category.html',
    //     },

    //     // category page
    //     category_page: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/products/category/page.html',
    //         // output as dist/index.html
    //         filename: 'products/category/page.html',
    //     },

    //     // products page
    //     products_page: {
    //         // entry for the page
    //         entry: 'src/main.js',
    //         // the source template
    //         template: 'public/products/page.html',
    //         // output as dist/index.html
    //         filename: 'products/page.html',
    //     },
    //   }
};