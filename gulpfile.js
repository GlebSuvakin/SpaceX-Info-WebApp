let gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('pug', () => {
    return gulp.src('pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('html'))

});



gulp.task('watch', () => {
    gulp.watch('pug/*.pug', gulp.parallel('pug'));
});

gulp.task('default', gulp.parallel('watch'));