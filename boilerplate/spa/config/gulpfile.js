var fs = require('fs');
var gulp = require('gulp');
var config = require('./spa');
var spaSrc = '../';
var spaDist = '../tmp/';
var browserSync = require('browser-sync').create();
var defaultTasks = ['copy-public', 'compile-css', 'server', 'watch'];

if (fs.existsSync('./mock_servers')) { defaultTasks.push('mock_servers'); }

gulp.task('default', defaultTasks);

gulp.task('compile-css', compileCss);
gulp.task('copy-public', copyPublic);

gulp.task('watch', function() {
  gulp.watch(spaSrc + 'css/**/*', compileCss);
  gulp.watch(spaSrc + 'public/**/*', copyPublic);
});

gulp.task('server', launchServer);

gulp.task('mock_servers', launchMockServers)

// ********************************* PROTECTED *********************************

function compileCss() {
  var sass = require('gulp-sass');
  var cssimport = require("gulp-cssimport");

  gulp.src(spaSrc + 'css/index.scss')
      .pipe(cssimport({ matchPattern: "*.css" }))
      .pipe(sass({ sync: true, onError: console.error }))
      .pipe(browserSync.reload({ stream: true }))
      .pipe(gulp.dest(spaDist + 'css/index.css'));
}

function copyPublic() {
  gulp.src(spaSrc + 'public/**/*')
      .pipe(browserSync.reload({ stream: true }))
      .pipe(gulp.dest(spaDist));
}

function launchServer() {
  var fs  = require('fs');
  var url = require('url');
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');

  var webpackConfig = require('./webpack');
  var bundler = webpack(webpackConfig);

  browserSync.init({
    open: false,
    port: config.serverPort,

    server: {
      baseDir: spaDist,

      middleware: [
        webpackDevMiddleware(bundler, {
          noInfo: true,
          stats: { colors: true },
          publicPath: webpackConfig.output.publicPath,
        }),

        webpackHotMiddleware(bundler),

        function(req, res, next) {
          var fileName = url.parse(req.url);
          fileName = fileName.href.split(fileName.search).join("");
          var fileExists = fs.existsSync(spaDist + fileName);

          if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
            req.url = '/index.html';
          }
          return next();
        },
      ],
    },
  });
}

function launchMockServers() {
  var mockServers = require('./mock_servers');

  mockServers.forEach(function(mockServer) {
    var app         = require('express')(),
        cors        = require('cors'),
        bodyParser  = require('body-parser'),
        whitelist   = ['http://localhost:' + config.serverPort],
        options     = {
          origin: function(origin, callback) {
            callback(null, (whitelist.indexOf(origin) !== -1));
          }
        };

    app.use(cors(options));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    mockServer.server(app);

    app.listen(mockServer.port);
  });
}
