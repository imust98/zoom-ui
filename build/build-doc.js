
var marked = require('gulp-marked');
var gulp = require('gulp');
var highlight = require('highlight.js');
gulp.task('markdown', function() {
  gulp.src('../doc/*.md')
    .pipe(marked({
      highlight: function (code) {
        return  highlight.highlightAuto(code).value;
      }
    }))
    .pipe(gulp.dest('../doc/html/'))
});
gulp.task('default', ['markdown']);