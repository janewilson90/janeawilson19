var gulp = require("gulp");
var sass = require("gulp-sass");
	
var paths = {
    styles: {
        src: "./scss/**/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "../"
    }
};

function style() {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest(paths.styles.dest));
}
 
function watch() {
    //I usually run the compile task when the watch task starts as well
    style();
 
    gulp.watch(paths.styles.src, style);
}

// Don't forget to expose the task!
exports.watch = watch