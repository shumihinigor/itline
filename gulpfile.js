// select of preprocessor
let preprocessor = 'sass'; // or 'less'
let fs = require('fs');

const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const group_media = require("gulp-group-css-media-queries");
// const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const rename = require('gulp-rename');
const fileinclude = require('gulp-file-include');
// const cheerio = require('gulp-cheerio');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const ttf2eot = require('gulp-ttf2eot');
const fonter = require('gulp-fonter');
const webp = require('gulp-webp');
const webphtml = require('gulp-webp-html');
const webpcss = require('gulp-webp-css');
const inlinesvg = require("gulp-inline-svg");

function inlineSvg () {
	return src('app/images/svg/*.svg')
        .pipe(newer('dist/images/'))
		.pipe(svgmin())
		.pipe(inlinesvg({
            filename: '_icon-variables.sass',
            template: 'app/sass/mustache/icons.mustache'
        }))
		.pipe(dest('app/sass/variables/'));
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'dist/'
        },
        port: 9000,
        notify: false, // notification
        online: false, // work offline
    })
}

function htmlrigger() {
    return src(['app/*.html', '!app/templates'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(webphtml())
        .pipe(dest('dist/'))
        .pipe(browserSync.stream())
}

function scripts(cb) {
    src([
        'app/js/**/*.js',
        '!app/js/bootstrap.js'
    ])
        .pipe(rename(function (path) {
            path.extname = ".min.js";
        }))
        .pipe(uglify())
        .pipe(dest('dist/js/'))
    src([
        'node_modules/jquery/dist/jquery.min.js',
    ])
        .pipe(concat('jquery.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/js/'))
    src([
        'app/js/bootstrap.js'
    ])
        .pipe(concat('bootstrap.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/js/'))
    cb();
}

function styles() {
    return src('app/' + preprocessor + '/bootstrap.scss')
        .pipe(eval(preprocessor)())
        .pipe(group_media())
        .pipe(webpcss())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true,
            
        }))
        .pipe(cleancss(({
            level: { 1: { specialComments: 0 } }, // min css
            // format: 'beautify' // beautify css
        })))
        .pipe(concat('style.min.css'))
        .pipe(dest('dist/css/'))
        .pipe(browserSync.stream())
}

function images() {
    return src(['app/images/**/*', '!app/images/svg', '!app/images/svg/*.svg'])
        .pipe(webp({
            quality: 70
        }))
        .pipe(src(['app/images/**/*', '!app/images/svg', '!app/images/svg/*.svg']))
        .pipe(newer('dist/images/'))
        .pipe(imagemin())
        .pipe(dest('dist/images/'))
}

function fonts(cb) {
    src('app/fonts/**/*')
        .pipe(newer('dist/images/'))
        .pipe(dest('dist/fonts/'))
    src('app/fonts/**/*')
        .pipe(newer('dist/images/'))
        .pipe(ttf2woff())
        .pipe(dest('dist/fonts/'))
    src('app/fonts/**/*')
        .pipe(newer('dist/images/'))
        .pipe(ttf2eot())
        .pipe(dest('dist/fonts/'))
    src('app/fonts/**/*')
        .pipe(newer('dist/images/'))
        .pipe(ttf2woff2())
        .pipe(dest('dist/fonts/'))
    src('app/fonts/*.otf')
        .pipe(newer('dist/images/'))
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest('dist/fonts/'))
    cb();
}

function fontsStyle(cb) {
    let file_content = fs.readFileSync('app/sass/_fonts.sass');
    if (file_content == '') {
        fs.writeFile('app/sass/_fonts.sass', '', cb);
        return fs.readdir('dist/fonts/', function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile('app/sass/_fonts.sass', '@include font("' + fontname + '", "' + fontname + '", "400", "normal")\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
    cb();
}

// function sprite() {
//     return src('app/images/svg/*.svg')
//         .pipe(cheerio({
//             run: function ($) {
//                 // $('[fill]').removeAttr('fill');
//                 // $('[style]').removeAttr('style');
//             },
//             parserOptions: { xmlMode: true }
//         }))
//         .pipe(svgmin({
// 			js2svg: {
// 				pretty: true
// 			}
// 		}))
//         .pipe(svgstore())
//         .pipe(rename({
//             basename: 'sprite'
//         }))
//         .pipe(dest('dist/images/'))
// }

function cleanimages() {
    return del('app/images/**/*', {
        force: true
    })
}

function cleandist() {
    return del('dist/**/*', {
        force: true
    })
}

function startwatch() {

    watch(['app/' + preprocessor + '/**/*.sass', 'app/' + preprocessor + '/**/*.scss'], styles);

    watch(['app/**/*.js'], scripts);

    watch('app/**/*.html').on('change', browserSync.reload);
    watch('app/**/*.html').on('change', htmlrigger);
    
    // watch('app/images/svg/*.svg', sprite);
    watch('app/images/svg/*.svg', inlineSvg);

    watch(['app/images/**/*', '!app/images/svg', '!app/images/svg/*.svg'], images);

}

// function for build project
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.htmlrigger = htmlrigger;
exports.styles = styles;
exports.images = images;
exports.fonts = fonts;
exports.fontsStyle = fontsStyle;
// exports.sprite = sprite;
exports.inlineSvg = inlineSvg;

// starting build (gulp)
exports.default = parallel(htmlrigger, inlineSvg, styles, images, fonts, fontsStyle, scripts, browsersync, startwatch);

// cleaning images (gulp cleanimages)
exports.cleanimages = cleanimages;

// cleaning dist (gulp cleandist)
exports.cleandist = cleandist;