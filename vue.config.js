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
        secure: false
      },
      "/images/": {
        target: "https://test.it-line.info/",
        changeOrigin: true,
        secure: false
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
};