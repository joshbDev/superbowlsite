var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('log', function() {
	gutil.log('workflows are awesome');
})
 
gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

module.exports = function(gulp) {
	gulp.task('default', function() {
	  // place code for your default task here
	});

	gulp.task('sass', function () {
	    gulp.src('./components/sass/*.scss')
	        .pipe(sass().on('error', sass.logError))
	        .pipe(gulp.dest('./css'));
	});
}