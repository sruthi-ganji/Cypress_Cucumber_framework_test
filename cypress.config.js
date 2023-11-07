const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

async function setupNodeEvents(on,config)

      {
    // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })

    );
    
    return config;
  }

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    "reportDir": "mochawesome-report",
    "overwrite": false,
    "html": true,
    "json": true,
    "charts": true,
    "saveAllAttempts": false
 },
  e2e: {
    setupNodeEvents,
    specPattern: "**/*.feature",
},
});
