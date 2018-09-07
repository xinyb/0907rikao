var gulp = require('gulp');
var server = require('gulp-webserver');

var url = require('url');
var fs = require('fs');
var path = require('path');



//启服务
gulp.task('devServer', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 1956,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    res.end('');
                    return
                };
                if (pathname === '/api/swiper') {

                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }))
})