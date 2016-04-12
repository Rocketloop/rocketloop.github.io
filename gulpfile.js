var gulp = require('gulp');
var sitemap = require('gulp-sitemap');
 
gulp.task('sitemap', function () {
    gulp.src('public/**/*.html')
        .pipe(sitemap({
            siteUrl: 'http://rocketloop.de'
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('deploy', function() {
  return gulp.src('./public/**/*')
    .pipe(ghPages({
        "remoteUrl": "https://github.com/Rocketloop/rocketloop.github.io.git",
        "branch": "master"
    }));
});