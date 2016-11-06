'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default',function(){
    return gulp.src('./app/app.component.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app'));
});

gulp.task('sass:watch',function(){
    gulp.watch('./app/*.scss',['default']);
})