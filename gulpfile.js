var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
 
gulp.task('minify-css', () => {
  return gulp.src('app/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('compress-images', () => {
    gulp.src('app/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('browser-sync', function() {
  browserSync.init(['app/css/*.css'], {
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['minify-css','compress-images', 'browser-sync'], function() {
  gulp.watch("app/css/*.css", ['minify-css']);
});