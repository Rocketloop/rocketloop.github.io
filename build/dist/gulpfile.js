var gulp = require('gulp');
var sitemap = require('gulp-sitemap');
var ghPages = require('gulp-gh-pages');
 
gulp.task('sitemap', function () {
    gulp.src('dist/**/*.html')
        .pipe(sitemap({
            siteUrl: 'http://rocketloop.de'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
        "remoteUrl": "git@github.com:Rocketloop/rocketloop.github.io.git",
        "branch": "master"
    }));
});