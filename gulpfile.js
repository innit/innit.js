var gulp = require('gulp')
//    karma = require('./lib/gulp/karma'),
    traceur = require('gulp-traceur')
 //   jshint = require('gulp-jshint');




var compilerOptions = {sourceMap: true, experimental: true, modules: 'instantiate'};



var paths = {

    src: ['src/**/*.js']
};

gulp.task('lint', function() {
    gulp.src(paths.src)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});




//
//gulp.task('build:nodejs', function() {
//    gulp.src(paths.src)
//        .pipe(traceur({sourceMap: true, experimental: true, modules: 'commonjs'}))
//        .pipe(gulp.dest('bin'));
//});

gulp.task('build:dev', function() {
    gulp.src(paths.src)
        .pipe(traceur({sourceMap: true, experimental: true, outputLanguage: 'es6'}))
        .pipe(gulp.dest('build'));
});

//gulp.task('build:es6', function() {
//    gulp.src(paths.src)
//        .pipe(traceur({sourceMap: true, experimental: true, outputLanguage: 'es6'}))
//        .pipe(gulp.dest('dist/es6'));
//});

gulp.task('watch', function() {
    gulp.watch(paths.src, ['build']);
});

gulp.task('build', ['build:dev']);

gulp.task('test', function(done) {
    var options = {
        configFile: 'karma.conf.js'
    };
    for (var i=0, ii = process.argv.length; i<ii; ++i) {
        var val = process.argv[i];
        if (val === '--debug') options.debugRun = true;
        if (val === '--watch') options.autoWatch = true;
        else if (val === '--single-run') options.singleRun = true;
        else if (val === '--browsers') options.browsers = process.argv[++i].split(',');
    }
  //  karma(options, done);
});
