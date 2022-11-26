// compilar archivos sass con gulp
const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');

function css(callback){
    //identificar el archivo
    src('./src/scss/**/*.scss')
    //compilarlo
        .pipe( sass() ) // pipe se puede utilizar multiples veces seguidas
        .pipe( plumber())
    //almacenar en el disco duro
        .pipe( dest('build/css'))

    callback(); //callback que avisa a gulp que ha finalizado
}

function convertirWebp(callback){
    const options = {
        quality: 50
    }
    src('src/img/**/*.{png,jpg}')
        .pipe( webp(options) )
        .pipe(dest('build/img'))
    callback();
}

function javascript(callback){
    src('.src/js/**/*.js')
        .pipe( dest('build/js') )
    callback()
}

function dev(callback){
    watch('./src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
    callback();
}

exports.css = css;
exports.js = javascript;
exports.dev = parallel(convertirWebp, javascript, dev);