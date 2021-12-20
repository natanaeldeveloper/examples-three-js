let mix = require('webpack-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('dist')
    .js('src/example01.js', 'dist/example01/scripts.js')
    .js('src/example02.js', 'dist/example02/scripts.js')