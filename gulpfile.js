'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('css/*.css', function() {
      // grab css files and send them into browserSync.stream
      // this injects the css into the page
      gulp.src('css/*.css')
        .pipe(browserSync.stream());
        console.log('Injecting css...');
    });
    gulp.watch(['main.js', 'index.html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
