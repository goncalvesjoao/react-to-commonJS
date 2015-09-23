'use strict';

var _ = require('lodash');
var fs = require('fs-extra');
var isBinaryFile = require("isbinaryfile");

module.exports = {

  copy: function copy(source, destination, callback) {
    var _this = this;

    var file = fs.lstatSync(source);
    var newFile = { path: destination };

    if (file.isDirectory()) {
      if (source.substr(source.lastIndexOf('/')) === '/node_modules') {
        return false;
      }

      callback(newFile);

      this.mkdir(source, newFile.path);

      _.each(fs.readdirSync(source), function (path) {
        _this.copy(source + '/' + path, newFile.path + '/' + path, callback);
      });
    } else if (isBinaryFile.sync(source)) {
      fs.copySync(source, newFile.path);
    } else {
      newFile.contents = fs.readFileSync(source, 'utf8');

      callback(newFile);

      fs.writeFileSync(newFile.path, newFile.contents);
    }
  },

  mkdir: function mkdir(source, destination) {
    try {
      fs.mkdirSync(destination, fs.statSync(source).mode);
    } catch (error) {
      if (error.code === 'EEXIST') {
        return false;
      }

      throw error;
    }
  },

  exists: function exists(source) {
    return fs.existsSync(source);
  },

  rename: function rename(source, destination) {
    return fs.renameSync(source, destination);
  }

};