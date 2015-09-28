var fs = require('fs');
var gulp = require('gulp');
var srcDir = './';
var configDir = './config/';
var browserSync = require('browser-sync').create();
var defaultTasks = ['copy-public', 'compile-html', 'compile-css', 'server', 'watch'];
var webpackConfig = require(configDir + 'webpack');
var config = require(configDir + 'spa');
var distDir = './tmp' + config.html.baseHref;

if (fs.existsSync('./mock_servers')) { defaultTasks.push('mock_servers'); }

gulp.task('default', defaultTasks);
gulp.task('build', build);

gulp.task('compile-css', compileCss);
gulp.task('compile-html', compileHtml);
gulp.task('copy-public', copyPublic);

gulp.task('watch', function() {
  gulp.watch(srcDir + 'css/**/*', compileCss);
  gulp.watch(srcDir + 'public/**/*.html', compileHtml);
  gulp.watch([srcDir + 'public/**/*', '!' + srcDir + 'public/**/*.html'], copyPublic);
});

gulp.task('server', launchServer);

gulp.task('mock_servers', launchMockServers)

// ********************************* PROTECTED *********************************

function build() {
  distDir = './dist/';
  webpackConfig = webpackConfig(true);

  compileHtml(null, true);
  copyPublic(null, true);
  compileCss(null, true);

  gulp.src(srcDir + 'index.js')
      .pipe(require('webpack-stream')(webpackConfig))
      .pipe(gulp.dest(distDir));
}

function compileCss(next, productionMode) {
  var sass = require('gulp-sass');
  var cssimport = require("gulp-cssimport");

  gulp.src(srcDir + 'css/index.scss')
      .pipe(cssimport({ matchPattern: "*.css" }))
      .pipe(sass({ sync: true, onError: console.error }))
      .pipe(updateBrowser(productionMode))
      .pipe(gulp.dest(distDir + 'css/index.css'));
}

function compileHtml(next, productionMode) {
  var build = require('gulp-build');

  gulp.src(srcDir + 'public/**/*.html')
      .pipe(build(config.html))
      .pipe(updateBrowser(productionMode))
      .pipe(gulp.dest(distDir));
}

function copyPublic(next, productionMode) {
  gulp.src([srcDir + 'public/**/*', '!' + srcDir + 'public/**/*.html'])
      .pipe(updateBrowser(productionMode))
      .pipe(gulp.dest(distDir));
}

function launchServer() {
  var fs  = require('fs');
  var url = require('url');
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');

  webpackConfig = webpackConfig(false);
  var bundler = webpack(webpackConfig);

  browserSync.init({
    open: false,
    port: config.serverPort,

    server: {
      baseDir: './tmp/',

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
          var fileExists = fs.existsSync('./tmp/' + fileName);

          if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
            req.url = config.html.baseHref + 'index.html';
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

function updateBrowser(productionMode) {
  var through2 = require('through2');

  if (productionMode) {
    return through2.obj(function bypassBrowserUpdate(file, encoding, callback) {
      callback(null, file);
    });
  }

  return browserSync.reload({ stream: true });
}
