const _ = require('lodash');
const fs = require('fs-extra');
const isBinaryFile = require("isbinaryfile");

module.exports = {

  copy(source, destination, callback) {
    const file = fs.lstatSync(source);
    const newFile = { path: destination };

    if (file.isDirectory()) {
      if (source.substr(source.lastIndexOf('/')) === '/node_modules') {
        return false;
      }

      callback(newFile);

      this.mkdir(source, newFile.path);

      _.each(fs.readdirSync(source), (path) => {
        this.copy(source + '/' + path, newFile.path + '/' + path, callback);
      });
    } else if (isBinaryFile.sync(source)) {
      fs.copySync(source, newFile.path);
    } else {
      newFile.contents = fs.readFileSync(source, 'utf8');

      callback(newFile);

      fs.writeFileSync(newFile.path, newFile.contents);
    }
  },

  mkdir(source, destination) {
    try {
      fs.mkdirSync(destination, fs.statSync(source).mode);
    } catch (error) {
      if (error.code === 'EEXIST') { return false; }

      throw (error);
    }
  },

  exists(source) {
    return fs.existsSync(source);
  },

  rename(source, destination) {
    return fs.renameSync(source, destination);
  },

};
