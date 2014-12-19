'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

gulp.task('default', function() {
});

// gulp.task('wiredep', function () {
//     var wiredep = require('wiredep').stream;

//     // HTML-dependencies
//     gulp.src('app/views/*.php')
//         .pipe(wiredep({
//             ignorePath: "../../public"
//         }))
//         .pipe(gulp.dest('app/views'));

//     // SCSS-deps
//     gulp.src('app/scss/*.scss')
//         .pipe(wiredep({
//             ignorePath: "../../../public"
//         }))
//         .pipe(gulp.dest('app/scss'));
// });

gulp.task('styles', function () {
  return gulp.src('app/assets/scss/main.scss')
    // .pipe($.plumber())
    .pipe($.sass({
            errLogToConsole: true,
            sourceComments: "normal",
            // sync: true,
            includePaths: ['app/assets/packages',
                           'app/assets/packages/foundation/scss']
        }))
    // .pipe($.autoprefixer('last 3 version'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('styles-build', function () {
  return gulp.src('app/assets/scss/main.scss')
    // .pipe($.plumber())
    .pipe($.sass({
            errLogToConsole: true,
            sourceComments: "none",
            includePaths: ['app/assets/packages',
                           'app/assets/packages/foundation/scss']
        }))
    .pipe($.autoprefixer('last 3 version'))
    .pipe($.csso())
    .pipe(gulp.dest('public/css/'));
});



gulp.task('serve', function(cb){
    runSequence(
        'clean',
        'templates-public',
        'styles', 
        'update-js',
        'watch',
        cb
    );
})

// gulp.task('sprites', function () {
//     return gulp.src('public/img/svg-for-sprites/**/*.svg')
//         .pipe($.svgSprites({
//             cssFile: "../../app/assets/scss/_svg-sprite.scss",
//             svg: {
//                 sprite: "sprites/svg.svg"
//             },
//             preview: false,
//             svgPath: "/img/%f",
//             pngPath: "/img/%f",
//             // padding: 5
//         }))
//         .pipe(gulp.dest("public/img/"))
//         .pipe($.filter("**/*.svg"))
//         .pipe($.svg2png())
//         .pipe(gulp.dest("public/img/"));
// });

gulp.task('images', ['styles'], function () {
  return gulp.src('public/img/**/*.{png,jpg,jpeg,gif}')
    .pipe($.plumber())
    .pipe($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('public/img'));
});

gulp.task('watch', function () {
    $.livereload.listen();
  // watch for changes
  gulp.watch([
    'app/views/**/*.php',
    'public/css/**/*.css',
    'public/js/**/*.js',
    'public/img/**/*'
  ]).on('change', $.livereload.changed);

  gulp.watch('app/assets/scss/**/*.scss', ['styles']);
  gulp.watch('app/assets/templates/public/**/*.hbs', ['templates-public']);
  gulp.watch('app/assets/templates/admin/**/*.hbs', ['templates-admin']);
  gulp.watch('app/assets/js/**/**/*.js', ['copy-js']);
  // gulp.watch('public/img/svg-for-sprites/**/*.svg', ['sprites']);
  gulp.watch('bower.json', ['bower-rjs']);
});

gulp.task('htmlmin', ['images', 'scripts'], function() {
  var assets = $.useref.assets({searchPath: '{public,app/assets}'});
  var jsFilter = $.filter("**/*.js");
  var cssFilter = $.filter("**/*.css");
  return gulp.src('app/views/*.php')
    .pipe(assets)
    .pipe($.if("**/*.js",$.uglify()))
    .pipe($.if("**/*.css",$.csso()))
    .pipe($.rev())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace({replaceInExtensions: ['.js', '.css', '.html', '.hbs', '.php']}))
    .pipe($.if('*.php', $.htmlmin({collapseWhitespace: true, minifyJS: true})))
    .pipe(gulp.dest('public'));
});

gulp.task('htmlmin-after', ['htmlmin'], function(){
  return gulp.src(["public/*.php", "!public/index.php"])
    .pipe($.rename({
        dirname: "views"
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['htmlmin-after'], function () {
  require("del")(["public/*.php", "!public/index.php"]);
});

gulp.task('templates-public', function() {
    var mergeStream = require('merge-stream');
    var fs = require('fs');

    var amdModulePrefix = 'define(["ember"], function(Ember) {',
        amdModulePostfix = '});';


    var directoryFilter = $.filter(function (file) { return file.isDirectory(); });

    var dFilter2 = fs.readdirSync('app/assets/templates/public').filter(function(name) {
        return fs.statSync('app/assets/templates/public/' + name).isDirectory();
    });

    dFilter2.push('.');
    
    var streams = dFilter2.map(function(name) {

        var srcGlob = name==='.'?'*.hbs':(name + '/**/*.hbs');
        var dst = name==='.'?'common':name;
        var rightPath = name==='.'?'':dst + '/';
        
        var renameToRightPath = $.rename(function(path) { 
            path.dirname = rightPath + path.dirname;
        });

        var templatesOptions = /^win/.test(process.platform) ? {
          name: { replace: /\\/g, with: '/' }
        } : {};

        templatesOptions.type = "browser"; 
        
        return gulp.src('app/assets/templates/public/' + srcGlob)
            .pipe($.plumber())
            .pipe(renameToRightPath)
             //.pipe($.filter(function(f) { console.log(f); }))
            .pipe($.emberTemplates(templatesOptions))
            .pipe($.concat(dst + '.js'))
            .pipe($.insert.wrap(amdModulePrefix, amdModulePostfix))
            .pipe(gulp.dest('app/assets/js/public/templates'));
    });
    
    return mergeStream(streams);
});

// inject bower components into requirejs config
gulp.task('bower-rjs', function() {
    var bowerRjs = require('bower-requirejs');

    bowerRjs({
        config: 'app/assets/js/require-config.js',
        baseUrl: 'app/assets/js'
    });
});

gulp.task('copy-packages', function(){
    return gulp.src('app/assets/packages/**/*.js')
        .pipe($.changed('public/packages'))
        .pipe(gulp.dest('public/packages'));
});

gulp.task('copy-js', function(){
    return gulp.src('app/assets/js/**/*.js')
        .pipe($.changed('public/js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('build-derequire', ['copy-packages'], function() {
    return gulp.src(['public/packages/**/ember-data*.js'])
        .pipe($.derequire([
                {
                    from: 'require',
                    to: '_dereq_'
                },
                {
                    from: 'define',
                    to: '_defi_'
                }
        ]))
        .pipe(gulp.dest('public/packages'));
});

gulp.task('clean', function(cb) {
    var rimraf = require('rimraf');
    rimraf('public/js', cb);
});

gulp.task('update-js', ['copy-packages', 'copy-js']);

gulp.task('build-requirejs', ['clean', 'templates-public','build-derequire'], function(cb) {
    var requirejs = require('requirejs');

    var config = {
        appDir: 'app/assets/js/public/',
        baseUrl: './',
        mainConfigFile: 'app/assets/js/public/require-config.js',
        dir: 'public/js/public/',
        optimize: 'uglify2',
        skipDirOptimize: true,
        optimizeCss: 'none',
        wrapShim: true,
        wrap: false,
        removeCombined: true,
        // allowSourceOverwrites: true,
        modules: [
            {
                name: 'main',
                include: ['require-config', 'app/main']
            }
        ]
    };

    requirejs.optimize(config, function(response) {
        cb();
    });
});

gulp.task('build', ['styles-build', 'build-requirejs']);


// gulp.task('rjs-bundle', ['templates', 'build-requirejs'], function(){

// });
