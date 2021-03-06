function reactToCommonJS(name, destinationDir, boilerplateName) {
  const config = {
    name: name,
    boilerplateName: boilerplateName,
    destinationDir: destinationDir,
  };

  return {
    config: config,
    npmInstall: require('./npmInstall').bind(null, config),
    congratulations: require('./congratulations').bind(null, config),
    cloneBoilerplate: require('./cloneBoilerplate').bind(null, config),
    cloneBoilerplates: function cloneBoilerplates(options) {
      this.cloneBoilerplate(__dirname + '/../boilerplates/basic', options);

      if (options.css_modules) {
        options.force = true;
        this.cloneBoilerplate(__dirname + '/../boilerplates/css-modules', options);
      }
    },
  };
}

module.exports = reactToCommonJS;
