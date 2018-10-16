/*
 * @Author: 耿文静 
 * @Date: 2018-10-15 08:48:51 
 * @Last Modified by: 耿文静
 * @Last Modified time: 2018-10-15 14:30:35
 */

var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');
var fs = require('fs');
var path = require('path');
var url = require('url');
var querystring = require('querystring');

//获取json数据
var listJSon = require('./mock/list.json');

//
gulp.task('cssTask', function() {
    return gulp.src(['./src/scss/*.scss', '!./src/scss/common.scss'])
        .pipe(sass())
        .pipe(clean())
        .pipe(gulp.dest('./src/css'))
});

//
gulp.task('watch', function() {
    return gulp.watch(['./src/scss/*.scss', '!./src/scss/common.scss'], gulp.series('cssTask'));
})

//
gulp.task('serverTask', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8080,
            livereload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url, true).pathname;
                if (req.url === '/favicon.ico') {
                    res.end('');
                    return false;
                }
                if (pathname === '/api/list') {
                    res.end(JSON.stringify({ code: 1, data: listJSon }));
                } else if (pathname === '/api/add') {
                    var arr = [];
                    req.on('data', function(chunk) {
                        arr.push(chunk);
                    });
                    req.on('end', function() {
                        var parpams = querystring.parse(Buffer.concat(arr).toString());
                        listJSon.unshift(parpams);
                        fs.writeFileSync('./mock/list.json', JSON.stringify(listJSon));
                        res.end(JSON.stringify({ code: 1, data: listJSon }));
                    })
                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }))
})

//
gulp.task('dev', gulp.series('serverTask', 'cssTask', 'watch'));