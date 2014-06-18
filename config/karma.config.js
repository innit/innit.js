var traceurOptions = require('./traceur').traceur;

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'requirejs', 'traceur'],

        files: [
            '../test.runner.js',
            {pattern: 'src/**/*.js', included: false},
            {pattern: 'test/**/*.js', included: false},

            {pattern: 'node_modules/rtts-assert/dist/amd/**/*.js', included: false}
        ],

        preprocessors: {
            'src/**/*.js': ['traceur'],
            'test/**/*.js': ['traceur']
        },

        browsers: ['Chrome'],

        traceurPreprocessor: {
            options: traceurOptions
        }
    });
};