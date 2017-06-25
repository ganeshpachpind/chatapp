
var webPackConfig = require('./webpack.config');
module.exports = function (config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // base path, that will be used to resolve files and exclude
        basePath: '',

        // list of files / patterns to load in the browser
        files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-mocks/angular-mocks.js',
            {pattern: './app/js/**/*.js', load: false},
            {pattern: './app/test/**/*.js', load: false}
        ],

        frameworks: ['jasmine'],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,


        browsers: ['PhantomJS'],

        // Which plugins to enable
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-babel-preprocessor',
            'karma-webpack'
        ],

        preprocessors: {
            './app/js/**/*.js': ['webpack'],
            './app/test/**/*.js': ['webpack']
        },

        webpack:  webPackConfig,
        webpackMiddleware: {
            noInfo: true
        },

        babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },

        singleRun: true,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,
    });
};

