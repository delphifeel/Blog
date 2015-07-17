/**
 * @author Pavel Androschuk
 */
var gulp = require("gulp"),
    deleleFiles = require("del"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    webserver = require("gulp-webserver"),
    ts = require("gulp-typescript"),
    tsProject = ts.createProject("tsconfig.json", {typescript: require("typescript")}),
    paths = {
        js: "./app/**/*.js",
        ts: "./app/**/*.ts",
        dist: "./dist/"
    };

gulp.task("webserver", function () {
    return gulp.src("./app")
        .pipe(webserver({
            livereload: false,
            open: true
        }));
});

gulp.task("clean", function () {
    deleleFiles([paths.dist]);
});

gulp.task("concat", function () {
    return gulp.src(paths.js)
        .pipe(concat("all.js"))
        .pipe(gulp.dest(paths.dist));
});

gulp.task("ts", function () {
    return gulp.src(paths.ts)
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest("./app"));
});

gulp.task("serve", ["ts", "webserver"]);
gulp.task("default", ["serve"]);