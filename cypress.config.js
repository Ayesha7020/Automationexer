const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern: ['cypress/e2e/automationsignup.cy.js','cypress/e2e/loginexercise.cy.js'],
    setupNodeEvents(on, config) {
      // on('file:preprocessor', webpackPreprocessor);
      allureWriter(on, config);
      return config;
    },
  },
});
