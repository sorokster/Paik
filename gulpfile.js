var gulp = require('gulp'),
    minCSS = require('gulp-clean-css'),
    concat = require('gulp-concat')
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: 'app/'
    });

    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*html').on('change', browserSync.reload);
});

gulp.task('sass', function(){
    return gulp.src(['app/sass/_common/*.sass', 'app/sass/default/*.sass', 'app/sass/elements/**/*.sass', 'app/sass/responsive/**/*.sass'])
        .pipe(concat( 'style.sass' ))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe( gulp.dest( './app/stylesheet/' ))
        .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);