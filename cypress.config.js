const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cypress = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: ['cypress/e2e/automationsignup.cy.js','cypress/e2e/loginexercise.cy.js','cypress/e2e/api.cy.js','cypress/e2e/postapi.cy.js','cypress/e2e/commentsapi.cy.js'],
    env:{
     
      token:'Bearer e394d92f9805a30f6651b111bd522908bada8fa5b9dcb7c88c310ff4ca2805c4'

    },
    setupNodeEvents(on, config) {
      // on('file:preprocessor', webpackPreprocessor);
      allureWriter(on, config);
      return config;
    },
  },
});
