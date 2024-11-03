const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    supportFile: 'cypress/support/commands.js',
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});


const codeCoverage = require('@cypress/code-coverage/task');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      codeCoverage(on, config);
      return config;
    },
  },
});
