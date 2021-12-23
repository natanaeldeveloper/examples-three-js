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

mix.setPublicPath('docs')
    .js('src/example01.js', 'docs/example01/scripts.js')
    .js('src/example02.js', 'docs/example02/scripts.js')
    .js('src/example03.js', 'docs/example03/scripts.js')
    .js('src/example04.js', 'docs/example04/scripts.js')
    .js('src/example05.js', 'docs/example05/scripts.js')
    .js('src/example06.js', 'docs/example06/scripts.js')