const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();


function browsersyncReload(reload) {
    browsersync.reload();
    reload();
}

// compile scss to css
function styleTask() {
    // 1. Where is my sass file
    // 2. Pass that file through sass compiler
    // 3. Where to I save the compiled file
    return src('./src/**/**/*.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(dest('./dist/', { sourcemaps: '.' }))
        // 4. Stream changes to all browsers
        .pipe(browserSync.stream());
}

function scriptsTask() {
    return src('./src/**/**/*.js', { sourcemaps: true })
        .pipe(terser())
        .pipe(dest('./dist/', { sourcemaps: '.' }))
        .pipe(browserSync.stream());
}

function htmlTask() {
    return src('./src/*.html')
        .pipe(dest('./dist/'))
        .pipe(browserSync.stream());
}

function loadTask(reload) {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
    reload();
}

function reloadTask() {
    browserSync.reload();
}

function watchTask() {
    watch('./src/*.html').on('change', reloadTask);
    watch('./src/assets/**/*.scss').on('change', series(styleTask, scriptsTask, reloadTask));
    watch('./src/assets/**/*.js').on('change', series(styleTask, scriptsTask, reloadTask));
}

exports.default = series(
    htmlTask,
    styleTask,
    scriptsTask,
    loadTask,
    watchTask
)