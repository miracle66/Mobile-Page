var gulp = require('gulp'),
    borwserSync = require('browser-sync').create(),
    reload = borwserSync.reload,
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('sass',function(){
    return gulp.src('css/a.scss')
        .pipe( sass() ).pipe( gulp.dest( 'dist/css' ) );
});

gulp.task('js', function() {
    return gulp.src('js/ihmaMain.js')
        .pipe(concat('main.js'))    //合并所有js到main.js
        .pipe(gulp.dest('dist/js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('dist/js'));  //输出
});

//默认任务
gulp.task('default',['sass','js']);

//监听文件
gulp.task('watch',function () {
    return gulp.watch('css/a.scss',['sass']);
});