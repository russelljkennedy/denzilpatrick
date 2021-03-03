const gulp = require("gulp");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const touch = require("gulp-touch-cmd"); // Used to fix issue with CSS timestamps not reloading in Gulp 4

// Compile Sass
gulp.task("sass", function() {
  return gulp
    .src("sass/*.scss")
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass()) // compile SCSS to CSS
    .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
    .pipe(sourcemaps.write(".")) // write sourcemaps file in current directory
    .pipe(gulp.dest("./css"))
    .pipe(touch())
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

// Concat
gulp.task("concat", function(done) {
  gulp
    .src("lib/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify().on("error", console.error))
    .pipe(gulp.dest("js"));
  done();
});

// Default task
gulp.task("default", gulp.series("concat"), gulp.series("sass"));

// Watch task
gulp.task("watch", function() {
  gulp.watch(["sass/*.scss", "lib/*.js"], gulp.parallel("sass", "concat"));
});
